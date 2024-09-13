<?php

namespace App\Services;

use App\Models\Cidade;
use App\Models\Entidade;
use App\Models\Perfil;
use App\Models\Unidade;
use App\Models\UnidadeIntegrante;
use App\Models\UnidadeIntegranteAtribuicao;
use App\Models\Usuario;
use Illuminate\Support\Facades\Artisan;
use Carbon\Carbon;
use App\Models\Tenant;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Log;

class TenantService extends ServiceBase
{

    /**
     * Store a newly created resource in storage.
     *
     * @param Array $data
     * @return Object
     */
    public function store($dataOrEntity, $unidade, $transaction = true)
    {
        try {
            Log::info('Iniciando cadastro de tenant...');
            parent::store($dataOrEntity, $unidade, false);
        } catch (\Exception $e) {
            throw $e;
        }
    }


    public function validateStore($dataOrEntity, $unidade, $action)
    {
        $model = $this->getModel();
        $entity = UtilService::emptyEntry($dataOrEntity, "id") ? null : $model::find($dataOrEntity["id"]);
        $entity = isset($entity) ? $entity : new $model();
        try {
            $entity->fill($dataOrEntity);
            $entity->save();
        } catch (\Stancl\Tenancy\Exceptions\TenantDatabaseAlreadyExistsException $e) {
        }
        return $entity;
    }

    public function extraStore($dataOrEntity, $unidade, $action)
    {
        Log::info('Verificando se existe o tenant.');
        $tenant = Tenant::find($dataOrEntity->id);
        if (!$tenant->domains()->where('domain', $dataOrEntity->dominio_url)->exists()) {
            Log::info('Cadastrando o tenant.');
            $tenant->createDomain([
                'domain' => $dataOrEntity->dominio_url
            ]);
        }
        tenancy()->initialize($tenant);

        /* Executa migrations e seeds somente se for inclusão */
        if ($action == ServiceBase::ACTION_INSERT)
            $this->acoesDeploy($dataOrEntity);

        tenancy()->end();
        Log::info('Finalização do cadastro de tenant');
    }

    public function generateCertificateKeys()
    {
        $certificate = openssl_pkey_new();
        openssl_pkey_export($certificate, $privateKey);
        $publicKey = openssl_pkey_get_details($certificate)['key'];
        return [
            "private_key" => str_replace(["-----BEGIN PRIVATE KEY-----", "-----END PRIVATE KEY-----", "\n"], "", $privateKey),
            "public_key" => str_replace(["-----BEGIN PUBLIC KEY-----", "-----END PUBLIC KEY-----", "\n"], "", $publicKey)
        ];
    }

    public function executeSeeder($seed, $tenant = null)
    {
        Log::info('Execução '.$seed.'.');
        Artisan::call('tenants:run db:seed --option="class=' . $seed . '"' . (empty($tenant) ? '' : ' --tenants=' . $tenant));
        return Artisan::output();
    }


    public function migrate($id)
    {
        try {
            if ($id) {
                Artisan::call('tenant:migrate ' . $id);
            } else {
                Artisan::call('tenants:migrate', ['--force' => true]);
            }

            logInfo();
            return true;
        } catch (\Exception $e) {
            // Handle any exceptions that may occur during command execution
            Log::error('Error executing commands: ' . $e->getMessage());
            Log::channel('daily')->error('Error executing commands: ' . $e->getMessage());
            // Optionally, rethrow the exception to let it be handled elsewhere
            throw $e;
        }
    }

    public function cleanDB($id)
    {
        try {
            Artisan::call('db:truncate-all ' . $id);
        } catch (\Exception $e) {
            Log::error('Error executing commands: ' . $e->getMessage());
            Log::channel('daily')->error('Error executing commands: ' . $e->getMessage());
            throw $e;
        }
    }

    public function resetBD()
    {
        try {
            //            Artisan::call('db:delete-all');
            //            logInfo();
            //            Artisan::call('db:truncate-all');
            //            logInfo();
            return true;
        } catch (\Exception $e) {
            // Handle any exceptions that may occur during command execution
            Log::error('Error executing commands: ' . $e->getMessage());
            Log::channel('daily')->error('Error executing commands: ' . $e->getMessage());
            // Optionally, rethrow the exception to let it be handled elsewhere
            throw $e;
        }
    }


    private function acoesDeploy($dataOrEntity)
    {
        try {
            Log::info('Execução da migrate.');
            //Execução das  Migrations
            Artisan::call('tenants:migrate --tenants=' . $dataOrEntity->id);

            //Execução das  Seeders
            $this->executeSeeder('CidadeSeeder', $dataOrEntity->id);
            $this->executeSeeder('PerfilSeeder', $dataOrEntity->id);
            $this->executeSeeder('TipoCapacidadeSeeder', $dataOrEntity->id);
            $this->executeSeeder('CapacidadeSeeder', $dataOrEntity->id);

            Log::info('Busca de Cidade com o codigo IBGE');
            $cidade_id = Cidade::where('codigo_ibge', $dataOrEntity->codigo_cidade)->first()->id;

            Log::info('Busca de Entidade e cadastro caso não exista.');
            $entidade = Entidade::first() ?? new Entidade([
                'sigla' => $dataOrEntity->id,
                'nome' => $dataOrEntity->nome_entidade,
                'abrangencia' => $dataOrEntity->abrangencia,
                'layout_formulario_demanda' => 'COMPLETO',
                'campos_ocultos_demanda' => [],
                'nomenclatura' => [],
                'cidade_id' => $cidade_id,
            ]);
            if (!$entidade->exists) {
                $entidade->save();
            }

            Log::info('Busca de Níveis de acesso.');
            $NivelAcessoService = new NivelAcessoService();
            Log::info('Cadastro de Usuário.');
            $usuario = new Usuario([
                'email' => $dataOrEntity->email,
                'nome' => $dataOrEntity->nome_usuario,
                'cpf' => $dataOrEntity->cpf,
                'apelido' => $dataOrEntity->apelido,
                'perfil_id' => $NivelAcessoService->getPerfilDesenvolvedor()->id,
                'data_inicio' => Carbon::now()
            ]);
            $usuario->save();

            Log::info('Cadastro de Unidade.');
            $unidade = array(
                "created_at" => $this->timenow,
                "updated_at" => $this->timenow,
                "deleted_at" => NULL,
                "codigo" => "1",
                "sigla" => $dataOrEntity->id,
                "nome" => $dataOrEntity->nome_entidade,
                "instituidora" => 1,
                "path" => NULL,
                "texto_complementar_plano" => NULL,
                "atividades_arquivamento_automatico" => 0,
                "atividades_avaliacao_automatico" => 0,
                "planos_prazo_comparecimento" => 10,
                "planos_tipo_prazo_comparecimento" => "DIAS",
                "data_inativacao" => NULL,
                "distribuicao_forma_contagem_prazos" => "DIAS_UTEIS",
                "entrega_forma_contagem_prazos" => "HORAS_UTEIS",
                "autoedicao_subordinadas" => 1,
                "etiquetas" => NULL,
                "checklist" => NULL,
                "notificacoes" => NULL,
                "expediente" => NULL,
                "cidade_id" => $cidade_id,
                "unidade_pai_id" => NULL,
                "entidade_id" => $entidade->id
            );

            $unidade = new Unidade($unidade);
            $unidade->save();

            Log::info('Cadastro de UnidadeIntegrante.');
            $integrante = UnidadeIntegrante::firstOrCreate([
                'unidade_id' => $unidade->id,
                'usuario_id' => $usuario->id
            ]);

            Log::info('Cadastro de UnidadeIntegranteAtribuicao.');
            UnidadeIntegranteAtribuicao::firstOrCreate([
                'atribuicao' => 'LOTADO',
                'unidade_integrante_id' => $integrante->id
            ]);

            $this->executeSeeder('NomenclaturaSeeder', $dataOrEntity->id);
            $this->executeSeeder('TipoMotivoAfastamentoSeeder', $dataOrEntity->id);
            $this->executeSeeder('In24_2023Seeder', $dataOrEntity->id);
        } catch (\Exception $e) {
            // Handle any exceptions that may occur during command execution
            Log::error('Error executing commands: ' . $e->getMessage());
            throw $e;
        }
    }

    public function deleteTenant($id)
    {
        try {
            $tenant = Tenant::find($id);
            if ($tenant) {
                $tenant->delete();
                Log::info('Tenant deletado com sucesso: ' . $id);
            }
            return true;
        } catch (\Exception $e) {
            Log::error('Error executing commands: ' . $e->getMessage());
            throw $e;
        }
    }

    public function searchText($data)
    {
        $text = "%" . str_replace(" ", "%", $data['query']) . "%";
        $model = App($this->collection);
        $table = $model->getTable();
        $data["select"] = array_map(fn($field) => str_contains($field, ".") ? $field : $table . "." . $field, array_merge(['id'], $data['fields']));
        $query = DB::table($table);
        if (method_exists($this, 'proxySearch')) $this->proxySearch($query, $data, $text);
        $likes = ["or"];
        foreach ($data['fields'] as $field) {
            array_push($likes, [$field, 'like', $text]);
        }

        //$where = count($data['where']) > 0 ? [$likes, $data['where']] : $likes;
        $where = [$likes, $data['where']];
        $this->applyWhere($query, $where, $data);
        $this->applyOrderBy($query, $data);
        $query->select($data["select"]);
        $rows = $query->get();
        $values = [];
        foreach ($rows as $row) {
            $row = (array)$row;
            $orderFilds = array_map(fn($order) => "_" . str_replace(".", "_", $order[0]), $data['orderBy'] ?? []);
            $orderValues = array_map(fn($field) => $row[$field], $orderFilds);
            array_push($values, [$row['id'], array_map(fn($field) => $row[$field], $data['fields']), $orderValues]);
        }
        return $values;
    }

}

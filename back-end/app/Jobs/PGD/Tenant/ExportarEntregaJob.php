<?php
namespace App\Jobs\PGD\Tenant;

use App\Services\API_PGD\DataSources\DataSource;
use App\Models\PlanoEntrega;
use App\Services\API_PGD\DataSources\PlanoEntregaDataSource;
use App\Services\API_PGD\Resources\PlanoEntregaResource;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ExportarEntregaJob extends ExportarItemJob
{
    public static function getDescricao(): string
    {
        return 'Exportar Dados de Entrega para PGD';
    }

    public function getDataSource(): DataSource {
        return new PlanoEntregaDataSource();
    }

    public function getResource($model): PlanoEntregaResource {
        return new PlanoEntregaResource($model);
    }

    public function getEndpoint($resource): string {
        return "/organizacao/SIAPE/{$resource->cod_unidade_autorizadora}/plano_entregas/{$resource->id_plano_entregas}";
    }

    public function atualizarEntidade($id) {
        Log::info("Atualizando Entrega $id");
        PlanoEntrega::where('id', $id)->update(array("data_envio_api_pgd"=> Carbon::now()));
    }

    public function addFalha() {
        $this->envio->increment('qtde_entregas_falhas');
        parent::addFalha();
    }

    public function addSucesso() {
        $this->envio->increment('qtde_entregas_sucessos');
        parent::addSucesso();
    }

}

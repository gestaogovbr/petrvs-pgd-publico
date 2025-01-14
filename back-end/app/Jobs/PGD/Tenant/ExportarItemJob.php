<?php

namespace App\Jobs\PGD\Tenant;

use App\Exceptions\ExportPgdException;
use App\Exceptions\LogError;
use App\Models\Envio;
use App\Models\Tenant;
use App\Models\EnvioItem;
use App\Services\API_PGD\DataSources\DataSource;
use App\Services\API_PGD\ExportSource;
use App\Services\API_PGD\PgdService;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Bus\Queueable;
use Illuminate\Bus\Batchable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use App\Jobs\Contratos\ContratoJobSchedule;
use Throwable;

abstract class ExportarItemJob implements ShouldQueue, ContratoJobSchedule
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable; 

    protected Tenant $tenant;
    protected $token;
    protected Envio $envio;
    protected ExportSource $source;

    public function __construct(
        $tenant,
        $token,
        Envio $envio,
        ExportSource $source
    ) {
        $this->queue = 'pgd_queue';
        $this->tenant = $tenant;
        $this->token = $token;
        $this->envio = $envio;
        $this->source = $source;
    }

    public abstract function getEndpoint($dados): string;

    abstract public function getResource($model): JsonResource;
    
    abstract public function getDataSource(): DataSource;
    
    public function handle(PgdService $pgdService)
    {
        Log::info("[{$this->tenant->id}] {$this->source->tipo}: {$this->source->id} [INICIADO]");

        $envioItem = new EnvioItem;
        $envioItem->envio_id    = $this->envio->id;
        $envioItem->tipo        = $this->source->tipo;
        $envioItem->uid         = $this->source->id;
        $envioItem->fonte       = $this->source->fonte;
        $envioItem->save();

        try {
            echo " -- obtendo...";
            $data = $this->getDataSource()->getData($this->source);
            $resource = $this->getResource($data);

            unset($data);

            $body = (object) json_decode($resource->toJson(), true);
            $body->cod_unidade_autorizadora = $this->tenant->api_cod_unidade_autorizadora;

            unset($resource);

            echo " -- enviando...";

            $success = $pgdService->enviarDados(
                $this->tenant->api_url,
                $this->token, 
                $this->getEndpoint($body), 
                $body
            ); 

            if ($success) {
                $this->handleSucesso($envioItem);
            } else {
                $this->handleError('Erro no envio!', $envioItem, $this->source);
                var_dump($body);
            }

            unset($body);

            echo " -- fim...";

        }catch(ExportPgdException $exception) {
            $this->handleError($exception->getmessage(), $envioItem);
            $this->fail($exception);
            //throw $exception;
        }
    }

    public function addFalha() {
    }

    public function addSucesso() {
    }

    public function handleError($message, EnvioItem $envioItem) 
    {
        Log::error("Erro: $message 
            Tenant: {$this->tenant->id} 
            Tipo: {$this->source->tipo}
            ID: {$this->source->id}
            Fonte:  {$this->source->fonte}
            \n");

        $envioItem->sucesso = false;
        $envioItem->erros = $message;
        $envioItem->save();

        $this->addFalha();

        LogError::newError(
            "[{$this->tenant->id}] Erro ao sincronizar com o PGD: ", 
            new ExportPgdException($message),
            $this->source
        );

        if ($this->source->auditIds) {
            try{
                DB::table('audits')
                    ->whereIn('id', $this->source->auditIds)
                    ->update(
                        [
                            'tags' => json_encode(['ERRO']),
                            'error_message' => $message
                        ]
                    );
            } catch(\Throwable $exception) {
                Log::error("[{$this->tenant->id}] Erro atualizar audit: ".$exception->getMessage());
                LogError::newError("[{$this->tenant->id}] Erro atualizar audit: ", $exception, $this->source);
            }
        }
    }

    abstract public function atualizarEntidade($id);

    public function handleSucesso(EnvioItem $envioItem) {

        $envioItem->sucesso = true;
        $envioItem->save();

        $this->addSucesso();

        $this->atualizarEntidade($this->source->id);

        if ($this->source->auditIds) 
        {
            DB::table('audits')
                ->whereIn('id', $this->source->auditIds)
                ->update([
                    'tags' => json_encode(['SUCESSO']),
                    'error_message' => null
                ]);
        }

        Log::info("[{$this->tenant->id}] {$this->source->tipo}: {$this->source->id} - SUCESSO");
    }
    
    public function tags()
    {
        return [
            'tenant:'.$this->tenant->id,
            'tipo: '.$this->source->tipo,
            'id: '.$this->source->id
        ];
    }

    public function failed(?Throwable $exception): void
    {
        Log::error("Falha no ExportarItemJob: ".$exception->getMessage());
    }
}

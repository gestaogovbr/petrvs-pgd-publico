<?php

namespace App\Jobs\PGD\Tenant;

use App\Models\Envio;
use App\Services\API_PGD\AuditSources\AuditSource;
use App\Services\API_PGD\AuditSources\ParticipanteAuditSource;
use Illuminate\Support\Facades\Log;
use Illuminate\Bus\Batch;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Throwable;
use PDO;

class ExportarParticipantesBatch
{
    private $token;
    private Envio $envio;
    private $tenant;

    public function __construct(
        private readonly ExportarEntregasBatch $exportarEntregasBatch
    )
    {}

    public function setToken($token) {
        $this->token = $token;
    }

    public function setEnvio($envio) {
        $this->envio = $envio;
    }

    public function setTenant($tenant) {
        $this->tenant = $tenant;
    }

    public function send() {
        DB::connection()->getPdo()->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);
        
        $tenantId = $this->tenant->id;
        $exportarEntregasBatch = $this->exportarEntregasBatch;
        $exportarEntregasBatch->setToken($this->token);
        $exportarEntregasBatch->setEnvio($this->envio);
        $exportarEntregasBatch->setTenant($this->tenant);

        Log::info("[$tenantId] Consultando participantes a exportar...");

        $auditSource = new ParticipanteAuditSource();
        $total = $auditSource->count();

        if ($total == 0) {
            Log::info("[$tenantId] Sem participantes a exportar");
            $exportarEntregasBatch->send();
        } else { 
            Log::info("[$tenantId] Exportação de ".$total." participantes ({$this->tenant->id})...");
            Cache::put("{$tenantId}_part", 0);
            
            $batch = Bus::batch([])
            ->then(function () {
                //Log::info("[$tenantId] Exportação dos participantes finalizada com sucesso!");    
            })->catch(function (Throwable $e) use($tenantId) {
                Log::error("[$tenantId] Exportação dos participantes com erro!", ['error' => $e->getMessage()]);
            })->finally(function () use($tenantId, $total, $exportarEntregasBatch) 
            {    
                $n = Cache::get("{$tenantId}_part") ?? 0;
                Log::info("[$tenantId] $n/$total");
                
                if ($n >= $total) {
                    Cache::forget("{$tenantId}_part");
                    Log::info("[$tenantId] Exportação dos participantes finalizada");
                    $exportarEntregasBatch->send();
                }
            })
            ->allowFailures()
            ->onQueue('pgd_queue')
            ->dispatch();
            
            $n = 0;
            $jobs = [];
            foreach($auditSource->getData() as $auditData) {
                $source = $auditSource->toExportSource($auditData);
                $job = new ExportarParticipanteJob($this->tenant, $this->token, $this->envio, $source);
                $jobs[] = $job;
                if (count($jobs) >= 20) {
                    $batch->add($jobs);  
                    $jobs = [];  
                }
                $n++;
            }

            if (count($jobs) > 0) {
                $batch->add($jobs);
            }

            Cache::put("{$tenantId}_part", $n);
        }
    }
}
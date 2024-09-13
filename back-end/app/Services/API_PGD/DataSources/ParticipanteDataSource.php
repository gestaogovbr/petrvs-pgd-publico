<?php
namespace App\Services\API_PGD\DataSources;

use App\Exceptions\ExportPgdException;
use App\Models\Usuario;
use App\Models\ViewApiPgd;
use App\Services\API_PGD\ExportSource;

class ParticipanteDataSource extends DataSource
{
    public function getData(ExportSource $exportSource) {

        if (!$exportSource->id){
            throw new ExportPgdException('ID de Usuário não definido');
        }

        $participante = Usuario::with([
                /*'ultimoPlanoTrabalho',
                'ultimoPlanoTrabalho.tipoModalidade',
                'ultimoPlanoTrabalho.ultimaAssinatura',
                'ultimaParticipacaoPrograma',
                'ultimaParticipacaoPrograma.programa.unidade',
                'unidadesIntegrantes.unidade',*/
                'unidadesIntegrantes.atribuicoes' => function ($query) {
                    $query
                        ->where('atribuicao', 'LOTADO')
                        ->whereNull('deleted_at');
                }
            ])
            ->find($exportSource->id);

        if (!$participante){
            throw new ExportPgdException('Usuário sem Participação');
        }

        return $participante;
    }
}


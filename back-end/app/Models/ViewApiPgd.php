<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ViewApiPgd extends Model
{
    protected $table = 'view_api_pgd';
    public $timestamps = false;
    protected $keyType = 'string';
    public $incrementing = false;

//    protected static function boot()
//    {
//        parent::boot();
//        static::addGlobalScope('schema', function ($builder) {
//            $schema = 'petrvs_mgi';
//            $builder->from("$schema.view_api_pgd");
//        });
//    }

    /**
     * Filtra os resultados por tipo 'entrega'.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeEntrega($query)
    {
        return $query->where('tipo', 'entrega');
    }

    /**
     * Filtra os resultados por tipo 'trabalho'.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeTrabalho($query)
    {
        return $query->where('tipo', 'trabalho');
    }

    /**
     * Filtra os resultados por tipo 'participante'.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeParticipante($query)
    {
        return $query->where('tipo', 'participante');
    }

    public function scopeByTipo($query, $tipo)
    {
        return $query->where('tipo', $tipo);
    }

    public static function getIdsByTipo($tipo)
    {
        return self::byTipo($tipo)->pluck('id')->toArray();
    }

    public static function getByInterval($daysInterval, $tipo = null)
    {
        return DB::select('CALL get_view_api_pgd_by_interval(?, ?)', [$daysInterval, $tipo]);
    }



    /**Exemplo de Uso*/
    /*
    use App\Models\ViewApiPgd;
    $entregas = ViewApiPgd::entrega()->get();
    $trabalhos = ViewApiPgd::trabalho()->get();
    $participantes = ViewApiPgd::participante()->get();
    */


    /** Exemplo Chunk */
    /*
        $type='participante';
        ViewApiPgd::where('tipo', $type)->chunk(100, function ($records) use ($type) {
                        foreach ($records as $record) {
                            $response = Http::post('https://api.pgd.gov.br/', [
                                'id' => $record->id,
                                'tipo' => $record->tipo,
                                'json_audit' => $record->json_audit,
                            ]);

                            if ($response->failed()) {
                                // Tratar o erro (log, re-tentar, oq doer menos, etc.)
                            }
        }
        });
     */


    //$results = ApiPgd::getByInterval($daysInterval, $tipo);
}

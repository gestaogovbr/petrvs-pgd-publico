<?php

namespace App\Models;

use App\Models\ModelBase;
use App\Casts\AsJson;


class QuestionarioPergunta extends ModelBase
{
    protected $table = 'questionarios_perguntas';

    public $fillable = [ 
        'sequencia', /* tinyint; NOT NULL; */// sequencia das perguntas
        'pergunta', /* tinyint; NOT NULL; DEFAULT: '1'; */// Possibilidade de editar as respostas
        'tipo', /* enum */// tipo da opção da resposta
        'criado_versao', /* integer */
        'deletado_versao', /* integer */
        'deletedat', /** data que foi deletado */
        'respostas', /**JSON respostas */
        'questionario_id',
        'origem_id'/**Origem, serve para vincular a mesma pergunta em suas várias versões, caso tenha modificado ou alterado a sequencia, o ID será do registro que foi deletado */
        //'deleted_at', /* timestamp; */
    ];

    protected $casts = [
        'respostas' => AsJson::class
    ];
      
    //public $fillable_changes = ['graduacoes'];

    //public $fillable_relation = [];

     // Belongs
     public function questionario() { return $this->belongsTo(Questionario::class); }
     //public function curriculum() { return $this->belongsTo(Curriculum::class); }
    // public function origem() { return $this->hasMany(QuestionarioPergunta::class); }
 
    
}

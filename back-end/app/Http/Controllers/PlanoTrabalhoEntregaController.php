<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;


class PlanoTrabalhoEntregaController extends ControllerBase {

    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_PTR_ENTR_INCL')) throw new ServerException("CapacidadeStore", "Inserção não executada");
                break;
            case 'UPDATE':
                if (!$usuario->hasPermissionTo('MOD_PTR_ENTR_EDT')) throw new ServerException("CapacidadeStore", "Edição não executada");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_PTR_ENTR_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não executada");
                break;
            case 'QUERY':
                if (!$usuario->hasPermissionTo('MOD_PTR_ENTR_CONS')) throw new ServerException("CapacidadeStore", "Consulta não executada");
                break;
        }
    }

}
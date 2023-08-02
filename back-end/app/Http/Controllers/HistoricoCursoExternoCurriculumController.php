<?php

namespace App\Http\Controllers;

use App\Models\HistoricoCursoExternoCurriculum;
use App\Services\HistoricoCursoExternoCurriculumService;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;

class HistoricoCursoExternoCurriculumController extends ControllerBase {
    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_RX_EDT_SUP')) throw new ServerException("CapacidadeStore");
                break;
            case 'EDIT':
                if (!$usuario->hasPermissionTo('MOD_RX_EDT_SUP')) throw new ServerException("CapacidadeEdit");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_RX_EDT_SUP')) throw new ServerException("CapacidadeDestroy");
                break;
        }
     }
}
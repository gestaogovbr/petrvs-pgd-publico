<?php

namespace App\Http\Controllers;

use App\Models\CurriculumProfissional;
use App\Services\CurriculumProfissionalService;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;

class CurriculumProfissionalController extends ControllerBase {
    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        switch ($action) {
            case 'STORE':
                if (!$usuario->hasPermissionTo('MOD_RX_EDT_SUP')) throw new ServerException("CapacidadeStore");
                break;
            case 'UPDATE':
                if (!$usuario->hasPermissionTo('MOD_RX_EDT_SUP')) throw new ServerException("CapacidadeUpdate");
                break;
            case 'DESTROY':
                if (!$usuario->hasPermissionTo('MOD_RX_EDT_SUP')) throw new ServerException("CapacidadeDestroy");
                break;
        }
     }
}
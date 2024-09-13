<?php

use App\Http\Controllers\PainelUsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use Stancl\Tenancy\Middleware\InitializeTenancyByPath;
use App\Http\Controllers\SeederController;
use App\Http\Controllers\TenantController;
use App\Http\Controllers\JobAgendadoController;


/* Testes *
Route::get('/teste', function (Request $request) { return ["CENTRAL"]; }); */
/*Route::middleware([OnlyLocal::class])
    ->get('/rotinas-diarias/run', [RotinasDiariasController::class, 'run']);*/

/*
Rota dinâmica para login social Microsoft (Azure) e
GovBr baseado em B2B (multi-tenancy / multi-tenant)
*/

Route::middleware([InitializeTenancyByPath::class])
  ->get(
    '/login-azure-callback/{tenant}',
    [LoginController::class, 'signInAzureCallback']
  );

Route::middleware([InitializeTenancyByPath::class])
  ->get(
    '/login-govbr-callback/{tenant}',
    [LoginController::class, 'signInGovBrCallback']
  );

Route::middleware([InitializeTenancyByPath::class])
  ->get(
    '/login-unico/{tenant}',
    [LoginController::class, 'signInGovBrCallback']
  );


/* Login Panel */
Route::post('/panel-login', [PainelUsuarioController::class, 'login']);
Route::get('/panel-login-check', [PainelUsuarioController::class, 'checkAuthentication']);
Route::get('/panel-login-detail', [PainelUsuarioController::class, 'detail']);
Route::get('/panel-logout', [PainelUsuarioController::class, 'logout']);

Route::middleware(['panel'])->prefix('Seeder')->group(function () {
    Route::get('getAll', [SeederController::class, 'index']);
    Route::post('execute', [SeederController::class, 'execute']);
});

Route::middleware(['panel'])->prefix('JobAgendado')->group(function () {
    Route::get('/getAll', [JobAgendadoController::class, 'listar']);
    Route::post('/create', [JobAgendadoController::class, 'createJob']);
    Route::get('/getClassJobs', [JobAgendadoController::class, 'getClassJobs']);
    Route::delete('/delete/{id}', [JobAgendadoController::class, 'removerJob']);

});

Route::middleware(['panel'])->prefix('UserPanel')->group(function () {
  Route::post('query', [PainelUsuarioController::class, 'query']);
  Route::post('get-by-id', [PainelUsuarioController::class, 'getById']);
  Route::post('store', [PainelUsuarioController::class, 'store']);
  Route::post('destroy', [PainelUsuarioController::class, 'destroy']);
});

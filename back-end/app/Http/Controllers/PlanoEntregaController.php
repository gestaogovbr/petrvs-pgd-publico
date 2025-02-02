<?php

namespace App\Http\Controllers;

use App\Exceptions\Contracts\IBaseException;
use Illuminate\Http\Request;
use App\Models\PlanoEntrega;
use App\Services\UtilService;
use App\Services\UsuarioService;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use App\Models\PlanoTrabalho;
use Illuminate\Support\Facades\Log;
use Throwable;

class PlanoEntregaController extends ControllerBase
{

    public function arquivar(Request $request)
    {
        try {
            $this->checkPermissions("ARQUIVAR", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'arquivar' => ['required']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->arquivar($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function avaliar(Request $request)
    {
        try {
            $this->checkPermissions("AVALIAR", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'], 
                'arquivar' => ['required']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->avaliar($data, $unidade,$request)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function cancelarAvaliacao(Request $request)
    {
        try {
            $this->checkPermissions("CANCELAR_AVALIACAO", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->cancelarAvaliacao($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function cancelarConclusao(Request $request)
    {
        try {
            $this->checkPermissions("CANCELAR_CONCLUSAO", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->cancelarConclusao($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function cancelarHomologacao(Request $request)
    {
        try {
            $this->checkPermissions("CANCELAR_HOMOLOGACAO", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->cancelarHomologacao($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function cancelarPlano(Request $request)
    {
        try {
            $this->checkPermissions("CANCELAR_PLANO", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present'],
                'arquivar' => ['required']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->cancelarPlano($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }
    
    public function permissaoIncluir(Request $request)
    {
        try {
            $data = $request->validate(['unidade_id'=> ['required']]);
      
            return response()->json([
                'success' => $this->service->validaPermissaoIncluir($data, $this->getUsuario($request))
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function checkPermissions($action, $request, $service, $unidade, $usuario)
    {
        $usuarioService = new UsuarioService();
        switch ($action) {
            case 'QUERY':
                /*                 
                (RN_PENT_V) Condições para que um Plano de Entregas possa ser consultado:
                    - Possuir a capacidade "MOD_PENT"
                    - Atender as regras [RN_PENT_F] e [RN_PENT_I];
                */
                if (!$usuario->hasPermissionTo('MOD_PENT')) throw new ServerException("CapacidadeSearchText", "O usuário logado não tem permissão para consultar planos de entregas (MOD_PENT).\n[ver RN_PENT_V]");
                break;
            case 'GETBYID':
                /*                 
                (RN_PENT_V) Condições para que um Plano de Entregas possa ser consultado:
                    - Possuir a capacidade "MOD_PENT"
                    - Atender as regras [RN_PENT_F] e [RN_PENT_I];
                */
                if (!$usuario->hasPermissionTo('MOD_PENT')) throw new ServerException("CapacidadeSearchText", "O usuário logado não tem permissão para consultar planos de entregas (MOD_PENT).\n[ver RN_PENT_V]");
                break;
            case 'STORE':           //incluir ou alterar um Plano de Entregas
                $data = $request->validate(['entity' => ['required'], 'with' => ['array']]);
                $acao = UtilService::emptyEntry($data['entity'], "id") ? 'INSERT' : 'EDIT';
                switch ($acao) {
                    case 'EDIT':    // alteração de um Plano de Entregas
                        if (!$usuario->hasPermissionTo('MOD_PENT_EDT')) throw new ServerException("ValidateUsuario", "O usuário logado não tem permissão para alterar planos de trabalho (MOD_PENT_EDT).\n[ver RN_PENT_L]");
                        break;
                    case 'INSERT':  // inclusão de um novo Plano de Entregas
                        if (!$usuario->hasPermissionTo('MOD_PENT_INCL')) throw new ServerException("ValidateUsuario", "O usuário logado não tem permissão para incluir planos de trabalho (MOD_PENT_INCL).\n[ver RN_PENT_Z]");
                        break;
                }
                break;
            case 'DESTROY':
                /*                 
                (RN_PENT_X) EXCLUIR
                - o usuário logado precisa possuir a capacidade "MOD_PENT_EXCL", o plano precisa estar com o status INCLUIDO ou HOMOLOGANDO; e
                    - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou
                    - a Unidade do plano (Unidade B) precisa ser a Unidade de lotação do usuário logado;
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                if (!$usuario->hasPermissionTo('MOD_PENT_EXCL')) throw new ServerException("CapacidadeDestroy", "O usuário logado não tem permissão para excluir planos de entregas (MOD_PENT_EXCL).\n[ver RN_PENT_X]");
                $condition1 = $condicoes['planoIncluido'] || $condicoes['planoHomologando'];
                $condition2 = $condicoes['gestorUnidadePlano'] || $condicoes['unidadePlanoEhLotacao'];
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser excluído porque não se encontra no status INCLUIDO ou AGUARDANDO HOMOLOGAÇÃO.\n[ver RN_PENT_X]");
                if (!$condition2) throw new ServerException("ValidateUsuario", "O plano de entregas não pode ser excluído porque o usuário logado não é lotado nem é um dos gestores da sua unidade executora.\n[ver RN_PENT_X]");
                break;
            case 'ARQUIVAR':        // ou DESARQUIVAR
                $data = $request->validate(['id' => ['required'], 'arquivar' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                if ($data['arquivar']) {
                    /*                 
                    (RN_PENT_N) ARQUIVAR
                    - o plano precisa estar com o status CONCLUIDO ou AVALIADO, não ter sido arquivado, e:
                        - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou
                        - a Unidade do plano (Unidade B) precisa ser a Unidade de lotação do usuário logado e ele possuir a capacidade "MOD_PENT_ARQ";
                    */
                    if (!($condicoes['planoConcluido'] || $condicoes['planoAvaliado'])) throw new ServerException("ValidatePlanoEntrega", "O plano não pode ser arquivado porque não se encontra no status CONCLUIDO ou AVALIADO.\n[ver RN_PENT_N]");
                    if ($condicoes['planoArquivado']) throw new ServerException("ValidatePlanoEntrega", "O plano não pode ser arquivado porque já se encontra arquivado.\n[ver RN_PENT_N]");
                    if (!($condicoes['gestorUnidadePlano'] || ($condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_ARQ")))) throw new ServerException("ValidateUsuario", "O plano de entregas não pode ser arquivado porque nenhuma das condições abaixo é atendida:\n" .
                        "1. o usuário logado precisa ser um dos gestores da unidade executora do plano; ou\n" .
                        "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_ARQ.\n[ver RN_PENT_N]");
                } else {
                    /*
                    (RN_PENT_W) DESARQUIVAR
                    - o plano precisa estar arquivado, e:
                        - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou 
                        - a Unidade do plano (Unidade B) precisa ser a Unidade de lotação do usuário logado e ele possuir a capacidade "MOD_PENT_ARQ";
                    */
                    if (!$condicoes['planoArquivado']) throw new ServerException("ValidatePlanoEntrega", "O plano não pode ser desarquivado porque não se encontra arquivado.\n[ver RN_PENT_W]");
                    if (!($condicoes['gestorUnidadePlano'] || ($condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_ARQ")))) throw new ServerException("ValidateUsuario", "O plano de entregas não pode ser desarquivado porque nenhuma das condições abaixo é atendida:\n" .
                        "1. o usuário logado precisa ser um dos gestores da unidade executora do plano; ou\n" .
                        "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_ARQ.\n[ver RN_PENT_W]");
                }
                break;
            case 'AVALIAR':
                /*                 
                (RN_PENT_O) AVALIAR
                - o plano precisa estar com o status CONCLUIDO, e:
                    - o usuário logado precisa ser gestor da Unidade-pai (Unidade A) da Unidade do plano (Unidade B), ou
                    - o usuário logado precisa possuir a atribuição de AVALIADOR DE PLANOS DE ENTREGAS para a Unidade do plano (Unidade B); ou
                    - a Unidade-pai (Unidade A) precisa ser a Unidade de lotação do usuário logado, e ele possuir a capacidade "MOD_PENT_AVAL"; ou
                    - o usuário logado precisa ser gestor de alguma Unidade da linha hierárquica ascendente da Unidade do plano (Unidade A e superiores), e possuir a capacidade "MOD_PENT_AVAL_SUBORD";
                    - sugerir arquivamento automático (vide RI_PENT_A);              
                */
                $data = $request->validate(['id' => ['required'], 'arquivar' => ['required']]);
                $unidadePlano = PlanoEntrega::find($data["id"])->unidade;
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['gestorUnidadePaiUnidadePlano'];
                $condition2 = !empty($unidadePlano->id) && $usuarioService->isIntegrante('AVALIADOR_PLANO_ENTREGA', $unidadePlano->id);
                $condition3 = $condicoes["unidadePaiUnidadePlanoEhLotacao"] && $usuario->hasPermissionTo("MOD_PENT_AVAL");
                $condition4 = $condicoes['gestorLinhaAscendenteUnidadePlano'] && $usuario->hasPermissionTo("MOD_PENT_AVAL_SUBORD");
                if (!$condicoes['planoConcluido']) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser avaliado porque não se encontra no status CONCLUIDO.\n[ver RN_PENT_O]");
                if (!($condition1 || $condition2 || $condition3 || $condition4)) throw new ServerException("ValidateUsuario", "O plano de entregas não pode ser avaliado porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade-pai da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser Avaliador de Planos de Entregas da unidade executora do plano, ou\n" .
                    "3. o usuário logado precisa ser lotado na unidade-pai da unidade executora do plano e possuir a capacidade MOD_PENT_AVAL, ou\n" .
                    "4. o usuário logado precisa ser um dos gestores de alguma unidade da hierarquia ascendente da unidade executora do plano e possuir a capacidade MOD_PENT_AVAL_SUBORD.\n[ver RN_PENT_O]");
                break;
            case 'CANCELAR_PLANO':
                /*
                (RN_PENT_P) CANCELAR O PLANO DE ENTREGAS
                - o usuário logado precisa possuir a capacidade "MOD_PENT_CNC", o plano precisa estar em um dos seguintes status: INCLUIDO, HOMOLOGANDO e ATIVO;
                    - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou
                    - o usuário logado precisa ser gestor da Unidade-pai do plano (Unidade A);
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = in_array($condicoes['planoStatus'], ['INCLUIDO', 'HOMOLOGANDO', 'ATIVO']);
                $condition2 = $condicoes['gestorUnidadePlano'];
                $condition3 = $condicoes['gestorUnidadePaiUnidadePlano'];
                if (!$usuario->hasPermissionTo("MOD_PENT_CNC")) throw new ServerException("ValidateUsuario", "O usuário logado não tem permissão para cancelar planos de entregas (MOD_PENT_CNC).\n[ver RN_PENT_P]");
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser cancelado porque não se encontra em nenhum dos seguintes status: INCLUIDO, AGUARDANDO HOMOLOGAÇÃO, ou ATIVO.\n[ver RN_PENT_P]");
                if (!($condition2 || $condition3)) throw new ServerException("ValidateUsuario", "O plano de entregas não pode ser cancelado porque o usuário logado não é um dos gestores da unidade executora ne, gestos da unidade superior a ela.\n[ver RN_PENT_P]");
                break;
            case 'CANCELAR_AVALIACAO':
                /*                 
                (RN_PENT_R) CANCELAR AVALIAÇÃO
                - o plano precisa estar com o status AVALIADO, e
                - o usuário logado precisa ser gestor da Unidade-pai (Unidade A) da Unidade do plano (Unidade B), ou
                - a Unidade-pai (Unidade A) precisa ser a Unidade de lotação do usuário logado, e ele possuir a capacidade "MOD_PENT_CANC_AVAL"; ou
                - possuir a atribuição de AVALIADOR DE PLANOS DE ENTREGAS para a Unidade do plano (Unidade B);
                */
                $data = $request->validate(['id' => ['required']]);
                $unidadePlano = PlanoEntrega::find($data["id"])->unidade; 
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['gestorUnidadePaiUnidadePlano'];
                $condition2 = $condicoes['unidadePaiUnidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_CANC_AVAL");
                $condition3 = !empty($unidadePlano->id) && $usuarioService->isIntegrante('AVALIADOR_PLANO_ENTREGA', $unidadePlano->id);
                if (!$condicoes['planoAvaliado']) throw new ServerException("ValidatePlanoEntrega", "Não é possível cancelar avaliação de um plano de entregas que não se encontra avaliado.\n[ver RN_PENT_R]");
                if (!($condition1 || $condition2 || $condition3)) throw new ServerException("ValidateUsuario", "Não é possível cancelar a avaliação do plano de entregas porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade-pai da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade-pai da unidade executora do plano e possuir a capacidade MOD_PENT_CANC_AVAL, ou\n" .
                    "3. o usuário logado precisa ser Avaliador de Planos de Entregas da unidade executora do plano.\n[ver RN_PENT_R]");
                break;
            case 'CANCELAR_CONCLUSAO':
                /*                 
                (RN_PENT_S) CANCELAR CONCLUSÃO
                - o plano precisa estar com o status CONCLUIDO, e:
                - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou
                - a Unidade do plano (Unidade B) precisa ser sua Unidade de lotação e o usuário logado precisa possuir a capacidade "MOD_PENT_CANC_CONCL";
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoConcluido'];
                $condition2 = $condicoes['gestorUnidadePlano'];
                $condition3 = $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_CANC_CONCL");
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "Não é possível cancelar a conclusão de um plano de entregas que não se encontra no status CONCLUIDO.\n[ver RN_PENT_S]");
                if (!($condition2 || $condition3)) throw new ServerException("ValidateUsuario", "Não é possível cancelar a conclusão do plano de entregas porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade executora do plano; ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_CANC_CONCL.\n[ver RN_PENT_S]");
                break;
            case 'CANCELAR_HOMOLOGACAO':
                /*                 
                (RN_PENT_T) CANCELAR HOMOLOGAÇÃO
                - o plano precisa estar com o status ATIVO, e
                - o usuário logado precisa ser gestor da Unidade-pai (Unidade A) da Unidade do plano (Unidade B), ou
                - a Unidade-pai (Unidade A) precisa ser a Unidade de lotação do usuário logado, e ele possuir a capacidade "MOD_PENT_CANC_HOMOL"; ou
                - o usuário logado precisa possuir a atribuição de HOMOLOGADOR DE PLANOS DE ENTREGAS para a Unidade-pai (Unidade A) da Unidade do plano (Unidade B);
                */
                $data = $request->validate(['id' => ['required']]);
                $unidadePlano = PlanoEntrega::find($data["id"])->unidade; 
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoAtivo'];
                $condition2 = $condicoes['gestorUnidadePaiUnidadePlano'];
                $condition3 = $condicoes['unidadePaiUnidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_CANC_HOMOL");
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "A homologação do plano de entregas não pode ser cancelada porque o plano não se encontra no status ATIVO.\n[ver RN_PENT_T]");
                if (!($condition2 || $condition3)) throw new ServerException("ValidateUsuario", "Não é possível cancelar a homologação do plano de entregas porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade-pai da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade-pai da unidade executora do plano e possuir a capacidade MOD_PENT_CANC_HOMOL, ou\n" .
                    "3. o usuário logado precisa ser Homologador de Planos de Entregas da unidade-pai da unidade executora do plano.\n[ver RN_PENT_T]");
                break;
            case 'CONCLUIR':
                /*  
                (RN_PENT_U) CONCLUIR
                - o plano precisa estar com o status ATIVO, e:
                - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou
                - a Unidade do plano (Unidade B) precisa ser sua Unidade de lotação e o usuário logado precisa possuir a capacidade "MOD_PENT_CONC";
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoAtivo'];
                $condition2 = $condicoes['gestorUnidadePlano'];
                $condition3 = $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_CONC");
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "Não é possível cancelar a conclusão de um plano de entregas que não se encontra no status CONCLUIDO.\n[ver RN_PENT_S]");
                if (!($condition2 || $condition3)) throw new ServerException("ValidateUsuario", "Não é possível concluir o plano de entregas porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade executora do plano; ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_CONC.\n[ver RN_PENT_U]");
                break;
            case 'HOMOLOGAR':
                /*  
                (RN_PENT_Y) HOMOLOGAR
                - o plano precisa estar com o status HOMOLOGANDO, e:
                    - o usuário logado precisa ser gestor da Unidade-pai (Unidade A) da Unidade do plano (Unidade B); (RN_PENT_C) (RN_PENT_E), ou
                    - a Unidade-pai (Unidade A) for a Unidade de lotação do usuário logado e ele possuir a capacidade "MOD_PENT_HOMOL", ou
                - A homologação do plano de entregas não se aplica à Unidade instituidora, ou seja, os planos de entregas vinculados a unidades que sejam instituidoras não precisam ser homologados (RN_PENT_AG).
                */
                $data = $request->validate(['id' => ['required']]);
                $unidadePlano = PlanoEntrega::find($data["id"])->unidade;
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoHomologando'];
                $condition2 = $condicoes['gestorUnidadePaiUnidadePlano'];
                $condition3 = $condicoes['unidadePaiUnidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_HOMOL");
                $condition4 = !!$unidadePlano->instituidora;
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser homologado porque não se encontra no status AGUARDANDO HOMOLOGAÇÃO.\n[ver RN_PENT_Y]");
                if ($condition4) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não precisa ser homologado porque pertence a uma unidade instituidora.\n[ver RN_PENT_Y]");
                if (!($condition2 || $condition3)) throw new ServerException("ValidateUsuario", "Não é possível homologar o plano de entregas porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade-pai da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade-pai da unidade executora do plano e possuir a capacidade MOD_PENT_HOMOL, ou\n" .
                    "3. o usuário logado precisa ser Homologador de Planos de Entregas da unidade-pai da unidade executora do plano.\n[ver RN_PENT_Y]");
                break;
            case 'LIBERAR_HOMOLOGACAO':
                /*  
                (RN_PENT_AA) LIBERAR PARA HOMOLOGAÇÃO
                - o plano precisa estar com o status INCLUIDO, conter ao menos uma entrega (RN_PENT_D), e
                    - o usuário logado precisa ser gestor da Unidade do plano (Unidade B); ou
                    - a Unidade do plano (Unidade B) precisa ser a Unidade de lotação do usuário logado, e este possuir a capacidade "MOD_PENT_LIB_HOMOL"
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoIncluido'];
                $condition2 = $condicoes['nrEntregas'] > 0;
                $condition3 = $condicoes['gestorUnidadePlano'];
                $condition4 = $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_LIB_HOMOL");
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser liberado para homologação porque não se encontra no status INCLUIDO.\n[ver RN_PENT_AA]");
                if (!$condition2) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser liberado para homologação porque ainda não possui nenhuma entrega.\n[ver RN_PENT_AA]");
                if (!($condition3 || $condition4)) throw new ServerException("ValidateUsuario", "Não é possível liberar o plano de entregas para homologação porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_LIB_HOMOL.\n[ver RN_PENT_AA]");
                break;
            case 'REATIVAR':
                /*
                (RN_PENT_AC) REATIVAR
                - o plano precisa estar com o status SUSPENSO, e
                    - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou
                    - a Unidade do plano (Unidade B) precisa ser a Unidade de lotação do usuário logado, e ele possuir a capacidade "MOD_PENT_RTV"; ou
                    - o usuário logado precisa ser gestor de alguma Unidade da linha hierárquica ascendente (Unidade A e superiores) da Unidade do plano (Unidade B);
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoSuspenso'];
                $condition2 = $condicoes['gestorUnidadePlano'];
                $condition3 = $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_RTV");
                $condition4 = $condicoes['gestorLinhaAscendenteUnidadePlano'];
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser reativado porque não se encontra no status SUSPENSO.\n[ver RN_PENT_AC]");
                if (!($condition2 || $condition3 || $condition4)) throw new ServerException("ValidateUsuario", "Não é possível reativar o plano de entregas porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_RTV, ou\n" .
                    "3. o usuário logado precisa ser um dos gestores de alguma unidade da linha hierárquica ascendente da unidade do plano.\n[ver RN_PENT_AC]");
                break;
            case 'RETIRAR_HOMOLOGACAO':
                /*  
                (RN_PENT_AB) RETIRAR DE HOMOLOGAÇÃO
                - o plano precisa estar com o status HOMOLOGANDO, e:
                    - o usuário logado precisa ser gestor da Unidade do plano (Unidade B); ou
                    - a Unidade do plano (Unidade B) precisa ser a Unidade de lotação do usuário logado, e este possuir a capacidade "MOD_PENT_RET_HOMOL"
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoHomologando'];
                $condition2 = $condicoes['gestorUnidadePlano'];
                $condition3 = $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_RET_HOMOL");
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser retirado de homologação porque não se encontra no status AGUARDANDO HOMOLOGAÇÃO.\n[ver RN_PENT_AB]");
                if (!($condition2 || $condition3)) throw new ServerException("ValidateUsuario", "Não é possível retirar o plano de entregas de homologação porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_RET_HOMOL.\n[ver RN_PENT_AB]");
                break;
            case 'SUSPENDER':
                /*                 
                (RN_PENT_AD) SUSPENDER
                - o plano precisa estar com o status ATIVO, e
                    - o usuário logado precisa ser gestor da Unidade do plano (Unidade B), ou
                    - a Unidade do plano (Unidade B) precisa ser a Unidade de lotação do usuário logado, e ele possuir a capacidade "MOD_PENT_SUSP"; ou
                    - o usuário logado precisa ser gestor de alguma Unidade da linha hierárquica ascendente (Unidade A e superiores) da Unidade do plano (Unidade B);
                */
                $data = $request->validate(['id' => ['required']]);
                $condicoes = $service->buscaCondicoes(['id' => $data['id']]);
                $condition1 = $condicoes['planoAtivo'];
                $condition2 = $condicoes['gestorUnidadePlano'];
                $condition3 = $condicoes['unidadePlanoEhLotacao'] && $usuario->hasPermissionTo("MOD_PENT_SUSP");
                $condition4 = $condicoes['gestorLinhaAscendenteUnidadePlano'];
                if (!$condition1) throw new ServerException("ValidatePlanoEntrega", "O plano de entregas não pode ser suspenso porque não se encontra no status ATIVO.\n[ver RN_PENT_AD]");
                if (!($condition2 || $condition3 || $condition4)) throw new ServerException("ValidateUsuario", "Não é possível suspender o plano de entregas porque nenhuma das condições abaixo é atendida:\n" .
                    "1. o usuário logado precisa ser um dos gestores da unidade executora do plano, ou\n" .
                    "2. o usuário logado precisa ser lotado na unidade executora do plano e possuir a capacidade MOD_PENT_SUSP, ou\n" .
                    "3. o usuário logado precisa ser um dos gestores de alguma unidade da linha hierárquica ascendente da unidade do plano.\n[ver RN_PENT_AD]");
                break;
        }
    }

    public function concluir(Request $request)
    {
        try {
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->concluir($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function homologar(Request $request)
    {
        try {
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->homologar($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function liberarHomologacao(Request $request)
    {
        try {
            $this->checkPermissions("LIBERAR_HOMOLOGACAO", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'], 
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->liberarHomologacao($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function reativar(Request $request)
    {
        try {
            $this->checkPermissions("REATIVAR", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->reativar($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function retirarHomologacao(Request $request)
    {
        try {
            $this->checkPermissions("RETIRAR_HOMOLOGACAO", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->retirarHomologacao($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function suspender(Request $request)
    {
        try {
            $this->checkPermissions("SUSPENDER", $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
            $data = $request->validate([
                'id' => ['required'],
                'justificativa' => ['present']
            ]);
            $unidade = $this->getUnidade($request);
            return response()->json([
                'success' => $this->service->suspender($data, $unidade)
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

    public function planosImpactadosPorAlteracaoEntrega(Request $request)
    {
        try {
            $data = $request->validate([
                'entrega' => ['required']
            ]);
            return response()->json([
                'success' => true,
                'planos_trabalhos' => PlanoTrabalho::with(["usuario:id,nome", "unidade:id,sigla"])->whereIn('id', $this->service->planosImpactadosPorAlteracaoEntrega($data))
            ]);
        }  catch (IBaseException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
        catch (Throwable $e) {
            $dataError = throwableToArrayLog($e);
            Log::error($dataError);
            return response()->json(['error' => "Codigo ".$dataError['code'].": Ocorreu um erro inesperado."]);
        }
    }

}

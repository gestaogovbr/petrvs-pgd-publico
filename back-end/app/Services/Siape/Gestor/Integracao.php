<?php

namespace App\Services\Siape\Gestor;

use App\Enums\Atribuicao;
use App\Exceptions\ServerException;
use App\Models\Perfil;
use App\Models\Usuario;
use App\Services\LogTrait;
use App\Services\NivelAcessoService;
use App\Services\PerfilService;
use App\Services\Siape\Contrato\InterfaceIntegracao;
use App\Services\Tipo;
use App\Services\UnidadeIntegranteService;

class Integracao implements InterfaceIntegracao
{

    use LogTrait;

    private array $message = [];

    /**
     *
     * @param array{id_unidade: string, id_chefe: string, id_substituto: string}[] $dados
     * @param Usuario $userModel
     * @param UnidadeIntegranteService $unidadeIntegranteService
     * @param NivelAcessoService $nivelAcessoService
     * @param PerfilService $perfilService
     * @param mixed $config
     */
    public function __construct(
        private array $dados,
        private Usuario $userModel,
        private UnidadeIntegranteService $unidadeIntegranteService,
        private NivelAcessoService $nivelAcessoService,
        private PerfilService $perfilService,
        private mixed $config
    ) {
        $this->message['vazio'] = [];
        $this->message['erro'] = [];
        $this->message['sucesso'] = [];
    }

    public function processar(): void
    {
        foreach ($this->dados as $dado) {
            try {
                $this->processaChefia($dado);
                $this->processaSubstituto($dado);
            } catch (\Exception $e) {
                array_push($this->message['erro'], $dado['id_unidade']);
                $this->logSiape($e->getMessage(), $dado, Tipo::ERROR);
                continue;
            }
        }
    }

    private function processaChefia(array $dado): void
    {

        if (empty($dado['id_chefe'])) {
            array_push($this->message['vazio'],  $dado['id_unidade']);
            $this->logSiape("Chefe não informado para a unidade " . $dado['id_unidade'], $dado, Tipo::WARNING);
            return;
        }
        $usuarioChefia = $this->userModel->find($dado['id_chefe']);
        $atribuicoesAtuaisDaChefia = $usuarioChefia->getUnidadesAtribuicoesAttribute();
        $unidadeExercicioId = $dado['id_unidade'];
        $chefeAtribuicoes = $this->preparaChefia($atribuicoesAtuaisDaChefia, $unidadeExercicioId);

        $vinculo = $this->preparaVinculo($dado['id_chefe'], $unidadeExercicioId, $chefeAtribuicoes);

        $this->logSiape("Salvando integrantes", $vinculo, Tipo::INFO);
        $this->unidadeIntegranteService->salvarIntegrantes($vinculo, false);

        $this->alteraPerfilAdministradorNegocial($dado['id_chefe'], $usuarioChefia);
        array_push($this->message['sucesso'], $dado['id_unidade']);
    }

    private function processaSubstituto(array $dado)
    {
        if (empty($dado['id_substituto'])) {
            array_push($this->message['vazio'],  $dado['id_unidade']);
            $this->logSiape("Substituto não informado para a unidade " . $dado['id_unidade'], $dado, Tipo::WARNING);
            return;
        }
        $unidadeExercicioId = $dado['id_unidade'];
        $usuarioSubstituto = $this->userModel->find($dado['id_substituto']);
        $atribuicoesAtuaisDoSubstituto = $usuarioSubstituto->getUnidadesAtribuicoesAttribute();
        $substitutoAtribuicoes = $this->preparaSubstituto($atribuicoesAtuaisDoSubstituto, $unidadeExercicioId);

        $vinculoSubstituto = $this->preparaVinculo($dado['id_substituto'], $unidadeExercicioId, $substitutoAtribuicoes);

        $this->logSiape("Salvando integrantes", $vinculoSubstituto, Tipo::INFO);
        $this->unidadeIntegranteService->salvarIntegrantes($vinculoSubstituto, false);

        $this->alteraPerfilAdministradorNegocial($dado['id_substituto'], $usuarioSubstituto);
        array_push($this->message['sucesso'], $dado['id_unidade']);
    }


    private function preparaVinculo(string $idUsuario, string $unidadeExercicioId, array $atribuicoes): array
    {
        return array([
            'usuario_id' => $idUsuario,
            'unidade_id' => $unidadeExercicioId,
            'atribuicoes' => $atribuicoes,
        ]);;
    }

    private function preparaChefia(array|null $queryChefeAtribuicoes, string $unidadeExercicioId): array
    {
        if (empty($queryChefeAtribuicoes) || !is_array($queryChefeAtribuicoes) || !array_key_exists($unidadeExercicioId, $queryChefeAtribuicoes)) {
            return [Atribuicao::LOTADO->value, Atribuicao::GESTOR->value];
        }

        $chefeAtribuicoes = array_diff($queryChefeAtribuicoes[$unidadeExercicioId], [Atribuicao::DELEGADO->value, Atribuicao::GESTOR_SUBSTITUTO->value]);
        if (!in_array(Atribuicao::GESTOR->value, $chefeAtribuicoes)) array_push($chefeAtribuicoes, Atribuicao::GESTOR->value);
        $chefeAtribuicoes = array_values(array_unique($chefeAtribuicoes));
        return $chefeAtribuicoes;
    }

    private function preparaSubstituto(array|null $queryChefeAtribuicoes, string $unidadeExercicioId): array
    {
        if (empty($queryChefeAtribuicoes) || !is_array($queryChefeAtribuicoes) || !array_key_exists($unidadeExercicioId, $queryChefeAtribuicoes)) {
            return [Atribuicao::GESTOR_SUBSTITUTO->value];
        }

        $chefeAtribuicoes = array_diff($queryChefeAtribuicoes[$unidadeExercicioId], [Atribuicao::GESTOR->value]);
        if (!in_array(Atribuicao::GESTOR->value, $chefeAtribuicoes)) array_push($chefeAtribuicoes, Atribuicao::GESTOR->value);
        $chefeAtribuicoes = array_values(array_unique($chefeAtribuicoes));
        return $chefeAtribuicoes;
    }

    private function alteraPerfilAdministradorNegocial(string $idUsuario, Usuario $queryChefe): void
    {
        $usuarioChefe = $this->config["perfilChefe"];
        $perfilChefe = $this->nivelAcessoService->getPerfilChefia();
        if (empty($perfilChefe)) {
            throw new ServerException("ValidateUsuario", "Perfil de gestor (" . $usuarioChefe . ") não encontrado no banco de dados. Verificar configuração no painel SaaS.");
        }
        $perfilChefeId = $perfilChefe->id;
        $perfilAdministradorNegocial = $this->nivelAcessoService->getPerfilAdministrador();
        if (empty($perfilAdministradorNegocial)) {
            throw new ServerException("ValidateUsuario", "Perfil de administrador negocial não encontrado no banco de dados. Verificar configuração no painel SaaS.");
        }

        $perfilDesenvolvedor = $this->nivelAcessoService->getPerfilDesenvolvedor();
        if (empty($perfilDesenvolvedor)) {
            throw new ServerException("ValidateUsuario", "Perfil de desenvolvedor não encontrado no banco de dados. Verificar configuração no painel SaaS.");
        }
        $perfilDesenvolvedorId = $perfilDesenvolvedor->id;

        if (!in_array($queryChefe->perfil->id, [$perfilAdministradorNegocial->id, $perfilDesenvolvedorId])) {
            $values = [
                ':perfil_id' => $perfilChefeId,
                ':id' => $idUsuario
            ];
            $this->perfilService->atualizaPerfilUsuario($idUsuario, $perfilChefeId);
            $this->logSiape("Atualizando perfil do chefe", $values, Tipo::INFO);
            return;
        }
        $this->logSiape("IntegracaoService: durante atualização de gestores, o usuário não teve seu perfil atualizado para " . $usuarioChefe .
            " uma vez que é Desenvolvedor.", [$queryChefe->nome, $queryChefe->email]);
    }

    /**
     * Undocumented function
     *
     * @return array{sucesso: string, id_chefe: erro, vazio: string}[] 
     */
    public function getMessage(): array
    {
        return $this->message;
    }
}
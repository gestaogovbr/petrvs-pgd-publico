<?php

namespace Database\Seeders;

use App\Models\Usuario;
use App\Models\Perfil;
use App\Models\Unidade;
use App\Models\UnidadeIntegrante;
use App\Models\UnidadeIntegranteAtribuicao;
use Illuminate\Database\Seeder;
use App\Services\NivelAcessoService; 
class UsuarioSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public $timenow;
  public $nivelAcessoService;


  public function __construct()
  {
    $this->timenow = now();
    $this->nivelAcessoService = new NivelAcessoService();
  }

  public function run()
  {
    $perfilDesenvolvedorId =$this->nivelAcessoService->getPerfilDesenvolvedor()->id;
    $usuarios_desenvolvedores = [
      [
        'email' => 'geisimar.rech87@gmail.com',
        'nome' => 'Geisimar Rech',
        'cpf' => '01798651106',
        'apelido' => 'Geisimar',
        'perfil_id' => $perfilDesenvolvedorId,
        'sexo' => 'MASCULINO',
      ],
      [
        'email' => 'rickgrana@gmail.com',
        'nome' => 'Ricardo Grana de Lima',
        'cpf' => '74065505291',
        'apelido' => 'Grana',
        'perfil_id' => $perfilDesenvolvedorId,
        'sexo' => 'MASCULINO',
      ],
      [
        'email' => 'henrique.felipe100@gmail.com',
        'nome' => 'Henrique Felipe Alves',
        'cpf' => '40921185898',
        'apelido' => 'Henrique',
        'perfil_id' => $perfilDesenvolvedorId,
        'sexo' => 'MASCULINO',
      ],
      [
        'email' => 'guibitar@gmail.com',
        'nome' => 'Guilherme Bitar',
        'cpf' => '01914276167',
        'apelido' => 'Guilherme',
        'perfil_id' => $perfilDesenvolvedorId,
        'sexo' => 'MASCULINO',
      ],
      [
        'email' => 'karinahellen.eng@gmail.com',
        'nome' => 'Karina Silva',
        'cpf' => '05182319177',
        'apelido' => 'Karina',
        'perfil_id' => $perfilDesenvolvedorId,
        'sexo' => 'FEMININO',
      ],
      [
        'email' => 'cimei.teixeira@gmail.com',
        'nome' => 'Cimei Teixeira',
        'cpf' => '48321770100',
        'apelido' => 'Cimei',
        'perfil_id' => $perfilDesenvolvedorId,
        'sexo' => 'MASCULINO',
      ],
      [
        'email' => 'marco.coelho@firstbps.com.br',
        'nome' => 'Marco Coelho',
        'cpf' => '03400125954',
        'apelido' => 'Marco',
        'perfil_id' => $perfilDesenvolvedorId,
        'sexo' => 'MASCULINO',
      ]
    ];

    // Operação de inserção de usuários desenvolvedores
    $unidade_pai = Unidade::where('SIGLA', 'MGI')->first();

    foreach ($usuarios_desenvolvedores as $usuario) {
      $user = Usuario::where('cpf', $usuario['cpf'])->first() ?? new Usuario();
      $user->fill([
        'email' => $usuario['email'],
        'nome' => $usuario['nome'],
        'cpf' => $usuario['cpf'],
        'apelido' => $usuario['apelido'],
        'perfil_id' => $usuario['perfil_id'],
        'matricula' => str_pad(
          rand(1000000, 9999999),
          7,
          0,
          STR_PAD_LEFT
        ),
        'uf' => 'DF',
        'sexo' => $usuario['sexo'],
        'data_modificacao' => $this->timenow,
      ]);
      $user->save();

      $integrante = new UnidadeIntegrante([
        'unidade_id' => $unidade_pai->id,
        'usuario_id' => $user->id
      ]);
      $integrante->save();

      $lotacao = new UnidadeIntegranteAtribuicao([
        'atribuicao' => "LOTADO",
        'unidade_integrante_id' => $integrante->id
      ]);
      $lotacao->save();
    }
  }
}

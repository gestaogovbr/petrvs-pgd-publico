<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramasAdesoesUnidadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('programas_adesoes_unidades', function (Blueprint $table) {
            // Configurações:
            $table->uuid('id');
            $table->primary('id');
            $table->timestamps();
            // Chaves estrangeiras:
            $table->foreignUuid('programa_adesao_id')->constrained("programas_adesoes")->onDelete('restrict')->onUpdate('cascade');
            $table->foreignUuid('unidade_id')->nullable()->constrained("unidades")->onDelete('restrict')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('programas_adesoes_unidades');
        Schema::enableForeignKeyConstraints();
    }
}
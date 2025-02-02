<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('siape_listaUORG', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('siape_dadosUORG', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('siape_listaServidores', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('siape_consultaDadosPessoais', function (Blueprint $table) {
            $table->softDeletes();
        });

        Schema::table('siape_consultaDadosFuncionais', function (Blueprint $table) {
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::table('siape_listaUORG', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('siape_dadosUORG', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('siape_listaServidores', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('siape_consultaDadosPessoais', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });

        Schema::table('siape_consultaDadosFuncionais', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};

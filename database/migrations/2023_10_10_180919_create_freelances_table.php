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
        Schema::disableForeignKeyConstraints();

        Schema::create('freelances', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
            $table->string('prenom');
            $table->string('identifiant');
            $table->text('description');
            $table->text('experience')->nullable();
            $table->json('langue')->nullable();
            $table->json('diplome')->nullable();
            $table->json('certificat')->nullable();
            $table->string('site')->nullable();
            $table->json('competences')->nullable();
            $table->decimal('taux_journalier', 8, 2)->nullable();
            $table->json('comptes')->nullable();
            $table->json('sub_categorie')->nullable();
            $table->json('localisation')->nullable();
            $table->foreignUuid('user_id')->constrained();
            $table->foreignUuid('category_id')->constrained();
            $table->enum('level', ["1", "2", "3", "4", "5"]);
            $table->decimal('solde', 8, 2)->default(0);
            $table->json('realisations')->nullable();
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('freelances');
    }
};

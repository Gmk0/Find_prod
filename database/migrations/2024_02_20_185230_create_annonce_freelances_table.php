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

        Schema::create('annonce_freelances', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('color')->nullable();
            $table->string('custom_color')->nullable();
            $table->string('title')->nullable();
            $table->text('body')->nullable();
            $table->string('icon')->nullable();
            $table->string('image')->nullable();
            $table->string('link')->nullable();
            $table->json('freelances')->nullable();
            $table->enum('type_freelance',['all','choix','activer','supendu','en attente'])->default('choix');
            $table->boolean('afficher');
           // $table->enum('type', ['freelance']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('annonce_freelances');
    }
};

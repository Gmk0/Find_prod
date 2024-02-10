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
        Schema::create('affichage_elements', function (Blueprint $table) {
            $table->id();
            $table->json('commentaire_user')->nullable();
            $table->json('tutorial')->nullable();
            $table->json('talk_about')->nullable();
            $table->string('about')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('affichage_elements');
    }
};

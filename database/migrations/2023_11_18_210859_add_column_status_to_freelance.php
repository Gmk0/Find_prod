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
        Schema::table('freelances', function (Blueprint $table) {
            //

            $table->enum('status_compte', ["actif", "en_attente", "suspendu"])->default('en_attente');
            $table->enum('type_compte', ["particulier", "entreprise"])->default('particulier');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('freelances', function (Blueprint $table) {
            //

            $table->dropColumn('status_compte');
            $table->dropColumn('type_compte');
        });
    }
};

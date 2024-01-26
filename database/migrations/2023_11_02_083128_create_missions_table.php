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

        Schema::create('missions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('mission_numero')->unique();
            $table->foreignUuid('user_id')->constrained();
            $table->foreignUuid('category_id')->constrained();
            $table->json('sub_category')->nullable();
            $table->text('description')->nullable();
            $table->longText('exigences')->nullable();
            $table->json('files')->nullable();
            $table->decimal('budget', 8, 2);
            $table->date('begin_mission')->nullable();
            $table->date('end_mission')->nullable();
            $table->integer('progress')->nullable();
            $table->foreignUuid('transaction_id')->nullable()->constrained();
            $table->dateTime('is_paid')->nullable();
            $table->boolean('masquer')->default(false);
            $table->enum('status', ['pending', "active", "inactive", "completed"])->default('pending');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('missions');
    }
};

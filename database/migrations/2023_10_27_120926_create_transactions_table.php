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

        Schema::create('transactions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('transaction_numero');
            $table->foreignUuid('user_id')->constrained();
            $table->decimal('amount', 8, 2);
            $table->string('payment_method')->nullable();
            $table->string('payment_token', 40)->nullable();
            $table->text('description')->nullable();
            $table->enum('status', ["pending", "completed", "failed"])->default("pending");
            $table->enum('type', ["paiement", "crediter", "debiter"])->nullable();
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};

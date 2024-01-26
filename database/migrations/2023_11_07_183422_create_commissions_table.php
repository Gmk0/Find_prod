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
        Schema::create('commissions', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('order_id')->nullable();
            $table->foreignUuid('user_id')->constrained();
            $table->foreignUuid('mission_id')->nullable();
            $table->foreignUuid('transaction_id')->nullable();
            $table->decimal('amount');
            $table->decimal('net_amount');
            $table->string('percent');
            $table->text('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commissions');
    }
};

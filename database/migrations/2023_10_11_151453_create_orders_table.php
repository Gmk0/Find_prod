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

        Schema::create('orders', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('order_numero');
            $table->foreignUuid('user_id');
            $table->foreignUuid('service_id');
            $table->string('type')->nullable();
            $table->decimal('total_amount', 8, 2);
            $table->string('quantity')->nullable();
            $table->string('transaction_id')->nullable();
            $table->integer('progress')->default(0);
            $table->dateTime('is_paid')->nullable();
            $table->enum('status', ["pending", "completed", "failed"])->default('pending');
            $table->timestamps();
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};

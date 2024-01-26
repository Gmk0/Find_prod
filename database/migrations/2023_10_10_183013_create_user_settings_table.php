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
        Schema::create('user_settings', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('user_id')->constant('user_id')->onDelete('cascade');
            $table->boolean('push_notifications_enabled')->default(true);
            $table->boolean('email_notifications_enabled')->default(true);
            $table->boolean('send_invoice_enabled')->default(true);
            $table->boolean('number_notifications_enabled')->default(false);
            $table->enum('theme', ['Dark', 'Light', 'Follow Device'])->default('Follow Device');
            $table->json('addresse_facturation')->nullable();
            $table->boolean('feedback_submitted')->default(false);
            $table->json('feedback')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_settings');
    }
};

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
        Schema::table('users', function (Blueprint $table) {
            $table->string('referral_code')->nullable();
           // $table->char('referral_by',36)->nullable();
            $table->boolean('gift_used')->default(false);
            $table->foreignUuid('referral_by')->nullable()->references('id')->on('users')->nullable();
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('referral_code');
            $table->dropColumn('referral_by');
            $table->dropColumn('gift_used');
            //
        });
    }
};

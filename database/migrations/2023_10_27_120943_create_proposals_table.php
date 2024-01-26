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
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('service_id')->constrained();
            $table->foreignUuid('transaction_id')->nullable();
           // $table->unsignedBigInteger('freelance_id');
            $table->decimal('proposed_price', 10, 2)->nullable();
            $table->enum('status', ['pending', 'rejected', 'changed', 'accepted', 'finished'])->default('pending'); // état de la proposition (pending, rejected, changed, accepted)
            // prix proposé par le freelance
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposals');
    }
};

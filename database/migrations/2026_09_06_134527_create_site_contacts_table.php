<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('site_contacts', function (Blueprint $table): void {
            $table->id();
            $table->string('email');
            $table->string('phone', 50);
            $table->string('secondary_phone', 50)->nullable();
            $table->text('address');
            $table->text('registered_address')->nullable();
            $table->string('linkedin', 2048)->nullable();
            $table->string('facebook', 2048)->nullable();
            $table->string('instagram', 2048)->nullable();
            $table->string('twitter', 2048)->nullable();
            $table->string('youtube', 2048)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_contacts');
    }
};

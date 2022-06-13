<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReqMonitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('req_monitors', function (Blueprint $table) {
            $table->id();
            $table->text('ispSelect');
            $table->enum('interTime', [5, 10, 15, 20])->default(20);
            $table->enum('fetchType', ['http', 'ping', 'dns', 'smtp', 'pop3'])->default('http');
            $table->unsignedBigInteger('monitor_id');
            $table->foreign('monitor_id')->on('monitors')->references('id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('req_monitors');
    }
}

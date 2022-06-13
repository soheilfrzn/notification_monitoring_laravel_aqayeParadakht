<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShowEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('show_events', function (Blueprint $table) {
            $table->id();
            $table->string('serverName');
            $table->integer('status');
            $table->string('description');
            $table->unsignedBigInteger('req_id');
            $table->foreign('req_id')->on('req_monitors')->references('id')->onDelete('cascade');
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
        Schema::dropIfExists('show_events');
    }
}

<?php

use App\Models\User;
use App\Events\webDown;
use App\Models\monitor;
use App\Models\reqMonitor;
use App\Models\NotificationTable;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

 Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//Route::get('/send',[App\Http\Controllers\MailController::class , 'send'])->name('sendMail');


// start route monitor.
Route::resource('/listMonitor', \App\Http\Controllers\Monitor\homeController::class)->parameters(['listMonitor' => 'id']);
Route::resource('/monitor', \App\Http\Controllers\Monitor\monitorController::class)->parameters(['monitor' => 'id']);
Route::resource('/reqMonitor', \App\Http\Controllers\Monitor\reqMonitorController::class)->parameters(['reqMonitor' => 'id']);
Route::resource('/show-eventmonitor', \App\Http\Controllers\Monitor\eventController::class)->parameters(['eventmonitor' => 'id']);
// end route monitor
Route::get('/test' , function(){
    $data = reqMonitor::find(1);
    return event(new webDown($data));
});
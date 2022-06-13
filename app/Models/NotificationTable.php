<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificationTable extends Model
{
    use HasFactory;

    protected $fillable = [
        'token',
        'chat_id',
        'reqMonitor_id'
    ];
}

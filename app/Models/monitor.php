<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use App\Models\monitor;
use App\Models\reqMonitor;

class monitor extends Model
{
    use HasFactory ;


    protected $guarded = ['id'];

    public function reqMonitor()
    {
       return  $this->hasOne('\App\Models\reqMonitor' , 'monitor_id');
    }

    public function user_data()
    {
        return $this->belongsTo('\App\Models\User', 'user_id');
    }

}

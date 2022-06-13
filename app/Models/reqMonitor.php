<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class reqMonitor extends Model
{
    use HasFactory , Notifiable;

    protected $guarded = ['id'];

    public function routeNotificationForMail($notification)
    {
        $this->email = $this->monitor->user_data->select('email')->first();
        return $this->email;
    }

    public function routeNotificationForSms($notification)
    {
        $phone = $this->monitor->user_data->select('phone')->first();
        return $phone;
    }

    public function routeNotificationForSlack($notification)
    {
        return $this->slack;
    }

    public function routeNotificationForTelegram($notification)
    {   
        $chat_id = $this->notification->chat_id;
        return $chat_id;
    }


    public function monitor()
    {
        return $this->belongsTo('\App\Models\monitor', 'monitor_id');
    }

    public function notification()
    {
        return $this->hasOne( '\App\Models\NotificationTable' , 'reqMonitor_id');
    }
}

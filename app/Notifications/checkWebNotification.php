<?php

namespace App\Notifications;

use Kavenegar;
//use App\Models\User;
use App\Mail\sendMail;
use App\Models\monitore;
use Illuminate\Bus\Queueable;
use App\channles\webDownMessage;
use App\Models\NotificationTable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Gate;
use Illuminate\Notifications\Messages\MailMessage;
use NotificationChannels\Telegram\TelegramChannel;
use NotificationChannels\Telegram\TelegramMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Kavenegar\LaravelNotification\KavenegarChannel;

class checkWebNotification extends Notification
{
    use Queueable;

    public $req_data;
    public $chat_id;
    public $monitor;

    public function __construct($req_data)
    {   
         $this->req_data = $req_data;
    }

    public function via($notifiable)
    {    
        return ['mail', KavenegarChannel::class, TelegramChannel::class, 'slack'];
    }

    public function toMail($notifiable)
    {   
       if (!$this->req_data->sendMethod->mail) return false;
        return (new sendMail())->to($notifiable->email);
    }

    public function toSms($notifiable)
    {  
      
    }

    public function toSlack($notifiable)
    {
        if (!$this->req_data->sendMethod->mail) return false;
        return (new SlackMessage)->content('your website is down!!!');
    }

    public function toTelegram($notifiable)
    { 
        $req_data=$this->req_data;
        return TelegramMessage::create()
        ->to( $notifiable->chat_id)
        ->content( $this->req_data->monitor->name.' دان شد.' );
    }

    public function toArray($notifiable)
    {
        if ($this->req_data->responseCode !=200)
        {
            return [
                $servername = $this->user_data->monitor->name,
                   $text = 'سرور دان شد.'
            ];
        }else{
            return [
                $servername = $this->user_data->monitor->name,
                   $text = 'سرور آپ شد.'
            ]; 
        }
       
    }
}

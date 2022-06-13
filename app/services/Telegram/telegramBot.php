<?php

namespace App\services;

use NotificationChannels\Telegram\TelegramMessage;
use Telegram\Bot\Laravel\Facades\Telegram;
use App\Models\NotificationTable;
use App\Models\reqMonitor;

class telegramBot{

    public function store_chatId( $data ) 
    {
        $chat_id = $data[ 'message' ][ 'chat' ][ 'id' ];

        if ( $data[ 'message' ][ 'text' ] === '/start' )
        {
               Telegram::sendMessage([
                    'chat_id' => $chat_id,
                    'text' => "سلام:\n" . $data[ 'message' ][ 'chat' ][ 'first_name' ] ."\n لطفا شناسه کاربری خود را وارد کنید \n"
                ]);
        }
         
        if ( $data [ 'message' ][ 'text' ] != '/start' ) 
        {    
                $token = $data[ 'message' ][ 'text' ];
                $reqMonitor_data = reqMonitor::where( 'randcode' , $token )->first();
                
                if ( !empty ( $reqMonitor_data ) ) 
                {
                    NotificationTable::where( 'token' , $token )->update([
                        'chat_id' => $chat_id ,
                        'reqMonitor_id' => $reqMonitor_data[ 'id' ]
                    ]);
                    Telegram::sendMessage([
                        'chat_id' => $chat_id,
                        'text' => $data[ 'message' ][ 'chat' ][ 'first_name' ] . "\nچت ایدی شما:\n" . $chat_id
                    ]);
                }else
                {
                    Telegram::sendMessage([
                        'chat_id' => $chat_id,
                        'text' => $data[ 'message' ][ 'chat' ][ 'first_name' ] . "عزیز چت ایدی شما قبلا ثبت شده و دیگر مجاز به استارت نمی باشید."
                    ]);
                }
        }
    }


}
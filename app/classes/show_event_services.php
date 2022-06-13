<?php

namespace app\clasess;

use App\Models\event_monitor;

class show_event_services
{
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function getServername()
    {
       $data = monitor::where('id', $this->data);
       $serverName = $data['name'];
       return $serverName;
    }

    public function getStatusMonitor()
    {
        $statusCode = event_monitor::where('monitor_id', $this->data);
        if ($statusCode >=200 && $statusCode <300)
        {
            $statusMonitor = 'سرویس وصل می باشد.';
            return $statusMonitor;
        }
        if ($statusCode >=400 && $statusCode <500)
        {
            $statusMonitor = 'درخواست کاربر معتبر نمی باشد.';
            return $statusMonitor;
        }
        if ($statusCode >=500)
        {
            $statusMonitor = 'سرور قطع می باشد.';
            return $statusMonitor;
        }
    }

}
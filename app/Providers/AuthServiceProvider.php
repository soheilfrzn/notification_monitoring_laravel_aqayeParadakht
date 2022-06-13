<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Passport::routes();

        // Gate::define('notTelegram', function($reqMonitor) {
        //     return $reqMonitor->sendMethod == 'telegram : 0' ;
        //  });
        
        //  /* define a manager user role */
        //  Gate::define('notSms', function($reqMonitor) {
        //     return $reqMonitor->sendMethod == 'sms : 0';
        //  });
       
        //  /* define a user role */
        //  Gate::define('notslack', function($reqMonitor) {
        //     return $reqMonitor->sendMethod == 'slack : 0';
        //  });

        //  Gate::define('notMail', function($reqMonitor) {
        //     return $reqMonitor->sendMethod == 'mail : 0';
        //  });

        //
    }
}

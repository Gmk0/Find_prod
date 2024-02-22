<?php

namespace App\Jobs;

use App\Models\User;
use App\Notifications\SendUserInactiveNotification;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CheckUserActivityJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $userId;
    protected $message;

    public function __construct($userId, $message)
    {
        $this->userId = $userId;
        $this->message = $message;
    }

    public function handle()
    {
        $user = User::find($this->userId);

        if ($user) {


            $lastActivityTimestamp = strtotime($user->last_activity);
            $currentTimestamp = Carbon::now()->timestamp;
            $timeDifferenceMinutes = ($currentTimestamp - $lastActivityTimestamp) / 60;

            if ($timeDifferenceMinutes > 3 && !empty($this->message)) {
                // Envoyer une notification ou ajouter à une file d'attente
                // Par exemple :
                $user->notify(new SendUserInactiveNotification($this->message));
            }
        }
    }
}

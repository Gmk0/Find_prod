<?php

namespace App\Models;

//use App\Events\ProgressOrderEvent;
//use App\Notifications\MissionProgress;
//use App\Notifications\OrderProgress;

use App\Notifications\OrderProgress;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FeedbackService extends Model
{
    use HasFactory;


    protected $fillable = [
        'order_id',
        'mission_id',
        'etat',
        'delai_livraison_estimee',
        'commentaires',
        'satisfaction',
        'problemes',
        'actions_correctives',
        'is_publish',
    ];





    protected $casts = [

        'id' => 'integer',
        'order_id' => 'string',
        'mission_id' => 'string',
        'delai_livraison_estimee' => 'date:d-m-Y',
        'is_publish' => 'boolean'

    ];

    public function notifyUser()
    {
        try {
            $order = $this->order;
            if ($order) {
                $user = $order->user;

                if ($user) {

                    $user->notify(new OrderProgress($this));


                    // broadcast(new ProgressOrderEvent($this));
                }
            }
        } catch (\Exception $e) {

            dd($e->getMessage());
        }
    }

    public function notifyUserProjet()
    {
        $project = $this->project;
        if ($project) {
            $user = $project->user;
            if ($user) {

               // $user->notify(new MissionProgress($this));
            }
        }
    }

    public function notifyFreelance()
    {
        $user = $this->order->service->freelance->user;





        if ($user) {

            //  $user->notify(new feedbackNotification($this));
        }
    }

    public function notifyFreelanceProjet(User $user)
    {






        if ($user) {

            //  $user->notify(new feedbackNotification($this));
        }
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function mission(): BelongsTo
    {
        return $this->belongsTo(Mission::class);
    }
}

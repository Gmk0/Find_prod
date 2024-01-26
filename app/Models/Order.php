<?php

namespace App\Models;

use App\Events\OrderCreated;
use App\Notifications\OrderCreatedNotification;
use App\Notifications\PaidFreelance;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory;


    public $incrementing = false;
    protected $keyType = 'string';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'order_numero',
        'user_id',
        'service_id',
        'type',
        'total_amount',
        'quantity',
        'transaction_id',
        'progress',
        'is_paid',
        'status',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'string',
        'service_id' => 'string',
        'total_amount' => 'decimal:2',
        'is_paid' => 'datetime',
        'transaction_id' => 'string',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($order) {
            $order->id = Str::uuid()->toString();
            // $order->user_id = auth()->user()->id;
            $order->order_numero = 'CMD' . date('YmdHm') . rand(10, 99);
        });

        static::created(function ($order) {

            FeedbackService::create(['order_id' => $order->id]);
        });
    }






    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }




    public function notifyPaid()
    {

        try {
            $service = $this->service;

            if ($service) {
                $freelance = $service->freelance;

                if ($freelance) {
                    $user = $freelance->user;


                  //  $user->notify(new PaidFreelance($this->total_amount, $service->title));
                }
            }
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
    public function brodacastFreelance()
    {

        try {
           // broadcast(new OrderCreated($this));
        } catch (\Exception $e) {

            error_log($e->getMessage());
        }
    }

    public function notifyUser()
    {
        $service = $this->service;

        if ($service) {
            $freelance = $service->freelance;

            if ($freelance) {
                $user = $freelance->user;


                $user->notify(new OrderCreatedNotification($this));
            }
        }
    }


    public function getMontant()
    {
        // Formater le prix avec le dollar direct
        return $this->total_amount . " $";
    }



    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }


    public function feedback(): HasOne
    {
        return $this->hasOne(FeedbackService::class, 'order_id');
    }

    public function rapports():HasMany
    {
        return $this->hasMany(Rapport::class);
    }
    public function isReadyForPayment(): bool
    {
        return is_null($this->is_paid)
            && $this->progress == 100
            && optional($this->feedback)->etat == 'Livré';
    }
}

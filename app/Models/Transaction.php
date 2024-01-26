<?php

namespace App\Models;

use App\Notifications\OrderUserNotifiy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Transaction extends Model
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
        'transaction_numero',
        'user_id',
        'amount',
        'payment_method',
        'payment_token',
        'status',
        'description',
        'type',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */

    protected $casts = [
        'id' => 'string',
        'user_id' => 'string',
        'payment_method' => 'array',
        'amount' => 'decimal:2',
    ];


    public static function boot()
    {
        parent::boot();

        static::creating(function ($transaction) {

            $transaction->id =Str::uuid()->toString();
            // $transaction->user_id = auth()->user()->id;
            $transaction->transaction_numero = 'TC' . date('YmdH')
                . rand(10, 99);
        });
    }

    public function sendMail()
    {
        try {
            $user = $this->user;
            $user->notify(new OrderUserNotifiy($this));
        } catch (\Exception $e) {

           // dd($e->getMessage());
        }
    }
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    public function mission()
    {
        return $this->hasOne(Mission::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function proposal()
    {
        return $this->hasOne(Proposal::class);
    }
}

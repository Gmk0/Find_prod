<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Str;

class Conversation extends Model
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
        'freelance_id',
        'user_id',
        'status',
        'id',
        'is_blocked',
        'last_time_message'
    ];


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'string',
        'freelance_id' => 'string',
        'user_id' => 'string',
        'created_at'=> 'datetime:Y-m-d H:i:s',
        'last_time_message'=> 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        parent::boot();


        static::creating(function ($conv) {
            $conv->id =
                Str::uuid()->toString();
        });

    }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function freelance(): BelongsTo
    {
        return $this->belongsTo(Freelance::class);
    }



    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    public function message(): HasOne
    {
    return $this->messages()->one()->latestOfMany()->where('receiver_id',auth()->id());
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Str;

class Mission extends Model
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
        'title',
        'user_id',
        'mission_numero',
        'category_id',
        'sub_category',
        'description',
        'files',
        'budget',
        'begin_mission',
        'end_mission',
        'progress',
        'exigences',
        'transaction_id',
        'masquer',
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
        'category_id' => 'integer',
        'sub_category' => 'array',
        'files' => AsArrayObject::class,
        'budget' => 'decimal:2',
        'begin_mission' => 'date',
        'end_mission' =>'date',
        'transaction_id' => 'string',
        'masquer' => 'boolean',
        'created_at' =>'date:d-M-Y',
        'is_paid' => 'datetime',
        'user_id' => 'string',

    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {

            $model->id = Str::uuid()->toString();
            $model->mission_numero = 'MS' . date('YmdHms');
        });

        static::created(function ($model) {

            FeedbackService::create(['mission_id' => $model->id]);
        });

        static::deleting(function ($mission) {
            $mission->MissionResponses()->delete();
        });
        static::deleted(function ($model) {

            FeedbackService::where('mission_id', $model->id)->delete();
        });
    }


    public function budget()
    {
        // Formater le prix avec le dollar direct
        return '$' . number_format($this->budget, 2, ',', ' ');
    }


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function transaction(): BelongsTo
    {
        return $this->belongsTo(Transaction::class);
    }

    public function rapports(): HasMany
    {
        return $this->HasMany(Rapport::class);
    }
    public function MissionResponses(): HasMany
    {
        return $this->hasMany(MissionResponse::class);
    }


    public function missionAccept():HasOne
    {
        return $this->MissionResponses()->one()->where('status', 'approved');
    }

    public function scopeFilter($query, array $filters)
    {

        $query->when($filters['category'] ?? null,function($query) use ($filters){

            $query->whereHas('category', function($q) use ($filters){
                $q->where('id', $filters['category']);
            });
        });


    }




    public function feedbackmission(): HasOne
    {
        return $this->hasOne(FeedbackService::class, 'mission_id');
    }


    public function getApprovedMissionResponse()
    {
        return $this->missionResponses()->where('status', 'approved')->first();
    }

    public function getApprovedMissionResponseUser()
    {
        return $this->missionResponses()->where('status', 'approved')->where('freelance_id',auth()->user()->freelance?->id)->first();
    }

    public function isReadyForPayment(): bool
    {


        return $this->progress == 100
            && optional($this->feedbackmission)->etat == 'Livré';
    }
}

<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Mail\welcomeMail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Mail;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Filament\Models\Contracts\FilamentUser;

use Illuminate\Notifications\Notification;
use Filament\Models\Contracts\HasAvatar;
use Illuminate\Support\Facades\Storage;
use Jeffgreco13\FilamentBreezy\Traits\TwoFactorAuthenticatable as AuthTwoFactorAuthenticatable;

use Filament\Panel;

class User extends Authenticatable implements  HasAvatar, FilamentUser,MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use AuthTwoFactorAuthenticatable;

    public $pushNotificationType = 'users';

    public $incrementing = false;
    protected $keyType = 'string';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'email_verified_at',
        'phone',
        'referral_code',
        'referral_by',
        'gift_used',
    ];


    public function canAccessPanel(Panel $panel): bool
    {
        if ($panel->getId() === 'admin') {
            return str_ends_with($this->email, '@find-freelance.com') ;
        }
        return true;
    }


    public function getFilamentAvatarUrl(): ?string
    {
        return $this->profile_photo_path ? Storage::url($this->profile_photo_path) : $this->profile_photo_url;
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'id' => 'string',
        'referral_by'=>'string',
        'last_activity' => 'datetime:Y-m-d H:i:s',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
    ];


    public static function boot()
    {
        parent::boot();


        static::creating(function ($user) {
            $user->id =
                Str::uuid()->toString();
        });
        static::created(function ($user) {

            UserSetting::create(['user_id' => $user->id]);

//          Mail::to($user->email)->send(new welcomeMail($user));
        });
        Static::deleted(function($user){
            UserSetting::where('user_id', $user->id)->delete();

        });
    }




    public function freelance()
    {
        return $this->hasOne(Freelance::class);
    }

    public function userSetting()
    {
        return $this->hasOne(UserSetting::class);
    }

    public function favoritesService()
    {
        return $this->belongsToMany(Service::class, 'favorites')
            ->withTimestamps();
    }

    public function favoritesFreelance()
    {
        return $this->belongsToMany(Freelance::class, 'favorites')->withTimestamps()->orderByDesc('favorites.created_at');
    }

    public function getIdFreelance()
    {
        return $this->freelance->id;
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function missions()
    {
        return $this->hasMany(Mission::class);
    }

    // Dans une classe de service ou un événement


    // app/Services/ReferralService.php



    public function referrals(): HasMany
    {
        return $this->hasMany(User::class, 'referral_by');
    }

    public function countReferrals(): int
    {
        return $this->referrals()->count();
    }









    public function routeNotificationForVonage(Notification $notification): string
    {
        return $this->phone;
    }

    public function realisations()
    {
        return $this->HasMany(Realisation::class);
    }

    public function freelanceExit(): bool
    {
        if ($this->freelance != null) {
            return true;
        } else {
            return false;
        }
    }
}

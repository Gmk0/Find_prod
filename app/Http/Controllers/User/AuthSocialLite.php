<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Mail\WelcomeMailSocial;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class AuthSocialLite extends Controller
{
    //

    //
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleGoogleCallback()
    {
        try {

            $user = Socialite::driver('google')->user();



            $finduser = User::where('google_id', $user->id)->first();

            if ($finduser) {

                Auth::login($finduser);

                return redirect()->route('home');
            } else {
                $password = Str::random(8);
                $newUser = User::updateOrCreate(['email' => $user->email], [
                    'name' => $user->name,
                    'google_id' => $user->id,
                    'password' => Hash::make($password),
                    'profile_photo_url' => $user->getAvatar(),
                    'email_verified_at' => Carbon::now()

                ]);

                // Envoi d'un email avec le nouveau mot de passe
                Mail::to($newUser->email)->send(new WelcomeMailSocial($newUser->name, $password));
                Auth::login($newUser);

                return redirect()
                ->route('profile.show')
                ->with('message', 'Bienvenue sur Find-freelance. Un mot de passe a été envoyé dans votre boîte mail. Veuillez ajouter votre numéro de téléphone dans votre profil.');
            }
        } catch (\Exception $e) {


            return redirect()->route('home')->with('error', 'Erreur lors de la connexion');
        }
    }

    public function sendMail()
    {

    }

    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleFacebookCallback()
    {
        try {

            $user = Socialite::driver('facebook')->user();

            $finduser = User::where('facebook_id', $user->id)->first();

            if ($finduser) {

                Auth::login($finduser);

                return redirect()->route('home');
            } else {
                $newUser = User::updateOrCreate(['email' => $user->email], [
                    'name' => $user->name,
                    'facebook_id' => $user->id,
                    'password' => Hash::make('findDefault')

                ]);

                Auth::login($newUser);

                return redirect()->route('categories');
            }
        } catch (\Exception $e) {
            return redirect()->route('login')->with('error', 'Erreur lors de la connexion');
        }
    }
}

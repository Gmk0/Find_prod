<?php

namespace App\Http\Controllers;

use App\Mail\welcomeFreelance;
use App\Models\Freelance;
use App\Notifications\VerificationMailPhone;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class RegistrationController extends Controller
{
    //

    public function begin()
    {
        return Inertia::render('Web/Registration/Begin');
    }

    public function info()
    {
        return Inertia::render('Web/Registration/Info');
    }


    public function Registration()
    {
        return Inertia::render('Web/Registration/Registration',[
                'user' => [
                    'email' => auth()->user()->email,
                    'name' => auth()->user()->name,
                    'phone' => auth()->user()->phone,
                    'id'=> auth()->user()->id,
                ],
            ]

        );
    }

    public function sendEmail(Request $request)
    {

        $user= auth()->user();

        $code = rand(100000, 999999);

        DB::table('email_phone_verification')->insert([
            'email' => auth()->user()->email,
            'code' => $code,
            'created_at' => now(),
        ]);

        $user->notify(New VerificationMailPhone($code));

       // $user->notifications()

        /// Mail::to($this->userAuth['email'])->send(new EmailVerification($code));

        //  $this->show = true;
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'code' => 'required|digits:6',
        ]);

        $email= auth()->user()->email;

        $verification = DB::table('email_phone_verification')
        ->where('email', $email)
        ->where('code', $request->code)
        ->where('created_at', '>=', now()->subMinutes(10))
        ->first();

        if ($verification) {
            // Mettez à jour votre base de données ou effectuez d'autres opérations si la validation réussit.
            DB::table('users')->where('email', $email)->update(['email_verified_at' => now()]);
            DB::table('email_phone_verification')->where('email', $email)->delete();

            // Réinitialiser les champs de formulaire pour permettre à l'utilisateur de soumettre un autre code.
           // $this->reset(['code']);

        }
    }

    public function register(Request $request)
    {
        try{

            $data = $request->all();
            Freelance::create($data);


            return Inertia::location(route('filament.freelance.pages.dashboard'));
         //   return redirect(route('freelance.'));



        }catch(\Exception $e){


            dd($e->getMessage());
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

        }


        //return response()->json(['data' => $data]);
    }

    public function sendMail()
    {
        try {
            Mail::to(auth()->user()->email)->send(new welcomeFreelance(auth()->user()));
        } catch (\Exception $e) {

            error_log($e->getMessage());
        }
    }

    public function updateProfileUser(Request $request)
    {
        try {
            if ($request->hasFile('photo')) {

                $user = auth()->user();

                $photo = $request->file('photo');
                $path = $photo->store('photos', 'public');
                $user->profile_photo_path = $path;

                $user->save();
            }


           // return response()->json(['success' => true, 'message' => 'Profil mis à jour avec succès']);

        }catch (\Exception $e){

           //return response()->json(['success' => false, 'message' => 'Une erreur s\'est produite lors de la mise à jour du profil. Veuillez réessayer.']);

        }




    }

}

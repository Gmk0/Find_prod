<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResourceData;
use App\Models\User;
use App\Notifications\VerificationMailPhone;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Validation\Rule;
use Laravel\Jetstream\Jetstream;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {


        try {

            $rules = ['email' => 'required|email', 'password' => 'required'];


            $validator = FacadesValidator::make($request->all(), $rules);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $user = User::where('email', $request->email)->first();

            if ($user && Hash::check($request->password, $user->password)) {

                $code=0;
                if(empty($user->email_verified_at))
                {
                    $code=$this->sendEmail($user);
                }

                $token = $user->createToken("personal_token")->plainTextToken;
                $response = ['user' =>
                 UserResourceData::make($user),
                 'token' => $token,
                'code'=>$code];



                return response()->json($response, 200);
            }

            $response = ['message' => "Email ou mot de passe incorrect"];
            return response()->json($response, 400);
        } catch (\Exception $e) {

            $response = ['message' => "Quelque chose se mal passer{$e->getMessage()}"];
            return response()->json($response, 422);
        }
    }

    public function create(Request $request)
    {

        try {

            DB::beginTransaction();

            $rules = [
                'name' => ['required', 'string', 'max:255', 'unique:users'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'phone' => ['required', 'string',  'max:15', 'unique:users'],
                'password' =>
                ['required', Password::min(8)->mixedCase()->numbers()->uncompromised(), ''],
                'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
                //'password' => $this->passwordRules(),
                'referral_code' => [
                    'nullable',
                    'string',
                    Rule::exists('users', 'referral_code')->where(function ($query) use ($request) {
                        // Vérifie si le code de parrainage existe dans la table des utilisateurs
                        $query->where('referral_code', $request->referral_code);
                    }),
                ],
            ];
            $validator = FacadesValidator::make($request->all(), $rules);

            if ($validator->fails()) {

                return response()->json([
                    'message' => $validator->errors(),
                    ], 422);
            }
            $referrer = null;
            if (strlen($request->referral_code) > 3) {
                // Si la longueur est supérieure à 3, alors effectuer la requête
                $referrer = User::where('referral_code', $request->referral_code)->first();
            }

            //$referrer = User::where('referral_code', $input['referral_code'])->first();
            $generatedReferralCode = $this->generateReferralCode($request->name);


            $user =  User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'password' => Hash::make($request['password']),
                'referral_code' => $generatedReferralCode,
                'referral_by' => $referrer ? $referrer->id : null
            ]);

            $code= $this->sendEmail($user);
            $token = $user->createToken("personal_token")->plainTextToken;
            $response = ['user' =>
            UserResourceData::make($user),
             'token' => $token,
             'code' => $code,
             'status' => true];

             DB::commit();

            return response()->json($response, 200);


        } catch (\Exception $e) {

            DB::
            Rollback();
            return response()->json([
                'message' => $e->getMessage(),
                'status' => false
            ], 500);
        }
    }

    private function generateReferralCode($name)
    {
        // Récupérez les trois premières lettres du nom
        $initials = Str::upper(Str::substr($name, 0, 3));

        // Ajoutez d'autres caractères si nécessaire pour garantir l'unicité
        $additionalChars = Str::upper(Str::random(5));

        // Combinez les initiales et les caractères supplémentaires
        $generatedCode = $initials . $additionalChars;

        return $generatedCode;
    }

    public function fetchUser(Request $request)
    {
        $user = $request->user();

        return response()->json(UserResourceData::make($user));

    }

    public function logout(Request $request)
    {
        // Récupérer l'utilisateur authentifié
        $user = $request->user();

        // Révoquer tous les jetons personnels de l'utilisateur
        $user->tokens()->delete();

        // Retourner une réponse de succès
        return response()->json(['message' => 'Logout successful']);
    }
    public function sendEmail(User $user)
    {


        $code = rand(1000, 9999);

        DB::table('email_phone_verification')->insert([
            'email' => $user->email,
            'code' => $code,
            'created_at' => now(),
        ]);

        $user->notify(new VerificationMailPhone($code));

        return $code;
        // $user->notifications()

        /// Mail::to($this->userAuth['email'])->send(new EmailVerification($code));

        //  $this->show = true;
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'code' => 'required|digits:4',
        ]);

        $email = $request->user()->email;

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

        };
        return response()->json([
            'message' => 'verification reussie',
            'status' => true
        ], 200);
    }

}



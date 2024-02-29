<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResourceData;
use App\Models\User;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
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
                $token = $user->createToken("personal_token")->plainTextToken;
                $response = ['user' => UserResourceData::make($user), 'token' => $token];

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

            $token = $user->createToken("personal_token")->plainTextToken;
            $response = ['user' => UserResourceData::make($user), 'token' => $token, 'status' => true];
            return response()->json($response, 200);
        } catch (\Exception $e) {

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

}

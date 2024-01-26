<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {


        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => ['required', 'string', 'unique:users','max:15'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
            'referral_code' => [
                'nullable',
                'string',
                Rule::exists('users', 'referral_code')->where(function ($query) use ($input) {
                    // Vérifie si le code de parrainage existe dans la table des utilisateurs
                    $query->where('referral_code', $input['referral_code']);
                }),
            ],
        ])->validate();

        $referrer = User::where('referral_code', $input['referral_code'])->first();
        $generatedReferralCode = $this->generateReferralCode($input['name']);

        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'phone'=>$input['phone'],
            'password' => Hash::make($input['password']),
            'referral_code' => $generatedReferralCode,
            'referral_by'=> $referrer->id??null
        ]);
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

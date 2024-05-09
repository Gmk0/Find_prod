<?php

namespace App\Filament\Pages;

use App\Helpers\SignatureCalculator;
use Filament\Pages\Page;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Section;
use App\Tools\Paiement;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use App\Models\Transaction;
use Filament\Forms\Components\Grid;

class test extends Page
{
    use InteractsWithForms;
    protected static ?string $navigationIcon = 'heroicon-o-banknotes';
    public ?array $data = [];
    public ?array $errors = [];
    public $response=null;


    protected static ?string $navigationLabel='Retrait admin';

    protected static string $view = 'filament.pages.test';

    public function mount(){
        $this->form->fill();


    }
    function transformNumber($number, $provider)
    {
        if ($provider == 10) {
            return '0' . substr($number, 4);
        } else if ($provider == 17) {
            return substr($number, 4);
        } else {
            return $number;
        }
    }

    function addNumber($number)
    {
        return '243' . $number;
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([

                Section::make('Retrait')
                ->description('')
                    ->schema([
                        Grid::make(['md' => 2])->schema([
                            TextInput::make('numero')
                            ->placeholder('0844720350')
                            ->maxLength(10)
                                ->minLength(10)
                                ->hint('0844720350 avec le Zero')
                                ->required(),
                            Select::make('provider_id')->label('Operateur')
                            ->options(['10' => 'Orange Money', '9' => 'M-pesa', '17' => 'Airtel Money'])
                            ->native(false),

                        ]),
                        // ...
                        TextInput::make('montant')
                        ->required()
                            ->numeric(),
                        TextInput::make('password')
                        ->password()
                            ->required()
                        //->revealable(),
                    ])
            ])


            ->statePath('data');
    }

    public function retrait()
    {
        // Assurez-vous que les données du formulaire sont valides
        $this->form->validate();
        $data = $this->form->getState();
        $user = Auth::user();
        $password = $data['password'];
        $avada = new Paiement();


        $this->errors = [];

        if (Hash::check($password, $user->password)) {

            $montant = $data['montant'];


                try {
                    DB::beginTransaction();
                    $payment = new Transaction();
                    $payment->user_id = auth()->id();
                    $payment->amount = $montant;
                    $payment->payment_method = ['last4' => $data['numero'], 'brand' => $this->returnBrand($data['provider_id'])];
                    $payment->payment_token = $this->references();
                    $payment->type = "crediter";
                    $payment->save();



                    $response = $avada->retraitAvada($montant, $this->addNumber($data['numero']), $data['provider_id'], route('checkoutStatus'), $payment->transaction_numero);

                    sleep(6);

                    $response2 = $avada->checkStatus($payment->transaction_numero);
                    $status = $this->statusPaiment($payment->id, $response2['status']);

                    $this->form->fill();

                    DB::commit();

                    if ($status) {
                        Notification::make()
                            ->success()
                            ->title('Retrait effectué')
                            ->body("Le retrait de {$montant} a bien été effectué.")
                            ->send()
                            ->sendToDatabase(auth()->user());
                    } else {
                        $errors[] = "Une erreur s'est produite. Veuillez réessayer ultérieurement.";
                    }
                } catch (\Exception $e) {
                    DB::rollback();

                    error_log($e->getMessage());
                    $errors[] = "Une erreur s'est produite. Veuillez réessayer ultérieurement.";
                }

        } else {
            $this->errors[] = "Mot de passe incorrect.";

            // dd('error');
        }
    }

    private function statusPaiment($payement_id, $status)
    {
        $transaction = Transaction::find($payement_id);


        if ($status == 3) {

            $transaction->status = 'failed';
            $transaction->save();

            return false;
        } else if ($status == 2) {
            $transaction->status = 'completed';
            $transaction->save();

            return true;
        } else {
            $transaction->status = 'failed';
            $transaction->save();

            return false;
        }
    }

    function returnBrand($provider): String
    {
        if ($provider == 10) {
            return 'ORANGE MONEY';
        } else if ($provider == 17) {
            return 'AIRTEL MONEY';
        } else {
            return 'M-PESA';
        }
    }

    function references()
    {
        // Générer une chaîne aléatoire unique de 16 caractères
        $randomString = uniqid();
        // Extraire les 8 premiers caractères de la chaîne aléatoire pour obtenir l'ID unique de 8 caractères
        $uniqueId = substr($randomString, 0, 8);
        // Compteur pour incrémenter la fin de l'ID unique
        $counter = DB::table('transactions')->count() + 1;
        // Concaténer le compteur à la fin de l'ID unique
        return  $finalId = 'TR' . $uniqueId . $counter;
    }









}

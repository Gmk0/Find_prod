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
use Illuminate\Support\Facades\Http;

class test extends Page
{
    use InteractsWithForms;
    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    public ?array $data = [];
    public $response=null;


    protected static string $view = 'filament.pages.test';

    public function mount(){
        $this->form->fill();

    }

    //CMD20240202120236
    public function form(Form $form): Form
    {
        return $form
            ->schema([

                Section::make('Information')
                    ->description('')
                    ->schema([
                    // ...
                    TextInput::make('numero')
                    ->required()
                    ,

                    TextInput::make('montant')

                    ->numeric(),
                TextInput::make('provider_id')

                    ->numeric(),



                    ])
            ])


            ->statePath('data')
            ;
    }

    public function testApi()
    {

        $data = $this->form->getState();
        $order = 'CMD' . date('YmdHms');
        $postData = [
            'merchant_id' => env('MerchantAvadaID'),
            'provider_id' => $data['provider_id'],
            'customer_id' => $data['numero'],
            'order_id' => $order,
            'amount' => $data['montant'],
            'currency' => 'CDF',
            'country' => 'CD',
            'callback_url' => env('checkoutMaxiCustom')
        ];
        $secretKey = env('SecretID');
        $signature = SignatureCalculator::calculateSignature($postData, $secretKey);
        $postData['signature'] = $signature;
        $publicId = env('PublicId');
        $url = 'https://api.unipesa.tech/' . $publicId . '/payment_c2b';



        try {
            $response = Http::post($url, $postData);

            $this->response=$response->json();

            if ($response->successful()) {

                // dd($response->json());
            } elseif ($response->failed()) {
            }
        } catch (\Exception $e) {
            // Handle the exception here
            return response()->json(['error' => $e->getMessage()], 500);
        }


    }

    public function verify()
    {


        $data = $this->form->getState();
        $postData = [
            'merchant_id' => env('MerchantAvadaID'),
            'order_id' => $data['numero'],

        ];
        $secretKey = env('SecretID');
        $signature = SignatureCalculator::calculateSignature($postData, $secretKey);
        $postData['signature'] = $signature;
        $publicId = env('PublicId');
        $url = 'https://api.unipesa.tech/' . $publicId . '/status';

        try {
            $response = Http::post($url, $postData);

             dd($response->json());

            if ($response->successful()) {

                // dd($response->json());
            } elseif ($response->failed()) {
            }
        } catch (\Exception $e) {
            // Handle the exception here

            dd($e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }






}

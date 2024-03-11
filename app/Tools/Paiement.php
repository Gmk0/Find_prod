<?php

namespace App\Tools;

use App\Helpers\SignatureCalculator;
use App\Models\Transaction;
use Illuminate\Support\Facades\Http;

class Paiement
{



    public function checkoutmaxi($prix, $telephone, $reference, $succesUrl, $canceUrl, $failureUrl)
    {

        $payType = "MaxiCash";
        $currency = "maxiDollar";
        $amount = $prix;
        $telephone = $telephone;
        $reference = $reference;

        // Construire les données de la requête
        $requestData = [
            'PayType' => $payType,
            'MerchantID' => env('MerchantID', "4930750f63334559967e9f7335b3862d"),
            'MerchantPassword' => env('MerchantPassword', "99d90bd5d1184f5096dabf62f6b59a07"),
            'Amount' => 1000,
            'Currency' => $currency,
            'Telephone' => $telephone,
            'Language' => 'fr',
            "Reference" => $reference,
            "SuccessURL" => $succesUrl,
            "FailureURL" =>  $failureUrl,
            "CancelURL" =>  $canceUrl,


            // Ajouter d'autres données de requête nécessaires
        ];





        // Envoyer la requête HTTP avec les données du formulaire
        // Construire les données de la requête


        // Construire l'URL de redirection avec les données du formulaire
        $url = 'https://api-testbed.maxicashapp.com/PayEntry?data=' . rawurlencode(json_encode($requestData));

        //
        return $url;
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

    public function paidAvada($montant, $numero,$provider, $callback,$transaction_id)
    {
        $numeberTransformerd= $this->transformNumber($numero,$provider);
        $postData = [
            'merchant_id' => env('MerchantAvadaID'),
            'provider_id' => $provider,
            'customer_id' => $numeberTransformerd,
            'order_id' => $transaction_id,
            'amount' => $montant,
            'currency' => 'USD',
            'country' => 'CD',
            'callback_url' => $callback,
        ];
        $secretKey = env('SecretID');
        $signature = SignatureCalculator::calculateSignature($postData, $secretKey);
        $postData['signature'] = $signature;
        $publicId = env('PublicId');
        $url = 'https://api.unipesa.tech/' . $publicId . '/payment_c2b';



        try {
            $response = Http::post($url, $postData);

            return $response->json();


        } catch (\Exception $e) {
            // Handle the exception here
            return response()->json(['error' => $e->getMessage()], 500);
        }


    }

    public function retraitAvada($montant, $numero, $provider, $callback, $transaction_id)
    {
        $numeberTransformerd = $this->transformNumber($numero, $provider);

        $postData = [
            'merchant_id' => env('MerchantAvadaID'),
            'provider_id' => $provider,
            'customer_id' => $numeberTransformerd,
            'order_id' => $transaction_id,
            'amount' => $montant,
            'currency' => 'USD',
            'country' => 'CD',
            'callback_url' => $callback,
        ];
        $secretKey = env('SecretID');
        $signature = SignatureCalculator::calculateSignature($postData, $secretKey);
        $postData['signature'] = $signature;
        $publicId = env('PublicId');
        $url = 'https://api.unipesa.tech/' . $publicId . '/payment_b2c';
        try {
            $response = Http::post($url, $postData);
            return $response->json();
        } catch (\Exception $e) {
            // Handle the exception here
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function checkStatus($transaction_numero)
    {
        $postData = [
            'merchant_id' => env('MerchantAvadaID'),
            'order_id' => $transaction_numero,
            ];

        $secretKey = env('SecretID');
        $signature = SignatureCalculator::calculateSignature($postData, $secretKey);
        $postData['signature'] = $signature;
        $publicId = env('PublicId');
        $url = 'https://api.unipesa.tech/' . $publicId . '/status';



        try {
            $response = Http::post($url, $postData);

            return $response->json();
        } catch (\Exception $e) {
            // Handle the exception here
            return response()->json(['error' => $e->getMessage()], 500);
        }


    }
}

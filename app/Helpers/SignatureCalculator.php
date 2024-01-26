<?php

namespace App\Helpers;

use Exception;

class SignatureCalculator
{
    public static function calculateSignature(array $data, string $secretKey, string $currentParamPrefix = '', int $depth = 16, int $currentRecursionLevel = 0): string
    {
        if ($currentRecursionLevel >= $depth) {
            throw new Exception('Recursion level exceeded');
        }

        $stringForSignature = '';
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                $stringForSignature .= self::calculateSignature(
                    $value,
                    $secretKey,
                    "$currentParamPrefix$key.",
                    $depth,
                    $currentRecursionLevel + 1
                );
            } else if ($key !== 'signature') {
                $stringForSignature .= "$currentParamPrefix$key" . $value;
            }
        }

        if ($currentRecursionLevel == 0) {
            return strtolower(hash_hmac('sha512', $stringForSignature, $secretKey));
        } else {
            return $stringForSignature;
        }
    }
}

<?php

namespace App\Filament\Resources\AnnonceFreelanceResource\Pages;

use App\Filament\Resources\AnnonceFreelanceResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAnnonceFreelance extends EditRecord
{
    protected static string $resource = AnnonceFreelanceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}

<?php

namespace App\Filament\Resources\AnnonceFreelanceResource\Pages;

use App\Filament\Resources\AnnonceFreelanceResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAnnonceFreelances extends ListRecords
{
    protected static string $resource = AnnonceFreelanceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

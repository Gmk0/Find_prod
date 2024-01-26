<?php

namespace App\Filament\Freelance\Resources\RealisationResource\Pages;

use App\Filament\Freelance\Resources\RealisationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRealisations extends ListRecords
{
    protected static string $resource = RealisationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

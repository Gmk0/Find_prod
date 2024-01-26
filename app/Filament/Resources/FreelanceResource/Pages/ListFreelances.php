<?php

namespace App\Filament\Resources\FreelanceResource\Pages;

use App\Filament\Resources\FreelanceResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFreelances extends ListRecords
{
    protected static string $resource = FreelanceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

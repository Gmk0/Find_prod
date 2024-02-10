<?php

namespace App\Filament\Resources\AffichageElementResource\Pages;

use App\Filament\Resources\AffichageElementResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAffichageElements extends ListRecords
{
    protected static string $resource = AffichageElementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

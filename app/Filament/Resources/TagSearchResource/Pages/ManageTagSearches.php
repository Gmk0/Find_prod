<?php

namespace App\Filament\Resources\TagSearchResource\Pages;

use App\Filament\Resources\TagSearchResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageTagSearches extends ManageRecords
{
    protected static string $resource = TagSearchResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

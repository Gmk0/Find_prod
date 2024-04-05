<?php

namespace App\Filament\Resources\ClientLinkResource\Pages;

use App\Filament\Resources\ClientLinkResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageClientLinks extends ManageRecords
{
    protected static string $resource = ClientLinkResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}

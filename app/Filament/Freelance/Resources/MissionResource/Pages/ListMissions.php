<?php

namespace App\Filament\Freelance\Resources\MissionResource\Pages;

use App\Filament\Freelance\Resources\MissionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMissions extends ListRecords
{
    protected static string $resource = MissionResource::class;

    protected function getHeaderActions(): array
    {
        return [

        ];
    }
}

<?php

namespace App\Filament\Freelance\Resources\MissionResource\Pages;

use App\Filament\Freelance\Resources\MissionResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewMission extends ViewRecord
{
    protected static string $resource = MissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}

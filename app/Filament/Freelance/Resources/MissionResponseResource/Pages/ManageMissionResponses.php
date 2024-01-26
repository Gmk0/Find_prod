<?php

namespace App\Filament\Freelance\Resources\MissionResponseResource\Pages;

use App\Filament\Freelance\Resources\MissionResponseResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageMissionResponses extends ManageRecords
{
    protected static string $resource = MissionResponseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //Actions\CreateAction::make(),
        ];
    }
}

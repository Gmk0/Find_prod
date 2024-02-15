<?php

namespace App\Filament\Resources\TutorialResource\Pages;

use App\Filament\Resources\TutorialResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewTutorial extends ViewRecord
{
    protected static string $resource = TutorialResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}

<?php

namespace App\Filament\Freelance\Resources\RealisationResource\Pages;

use App\Filament\Freelance\Resources\RealisationResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewRealisation extends ViewRecord
{
    protected static string $resource = RealisationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}

<?php

namespace App\Filament\Freelance\Resources\RealisationResource\Pages;

use App\Filament\Freelance\Resources\RealisationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditRealisation extends EditRecord
{
    protected static string $resource = RealisationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}

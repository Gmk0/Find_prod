<?php

namespace App\Filament\Resources\AffichageElementResource\Pages;

use App\Filament\Resources\AffichageElementResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAffichageElement extends EditRecord
{
    protected static string $resource = AffichageElementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}

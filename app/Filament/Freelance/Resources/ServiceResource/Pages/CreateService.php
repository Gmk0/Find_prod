<?php

namespace App\Filament\Freelance\Resources\ServiceResource\Pages;

use App\Filament\Freelance\Resources\ServiceResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;
use Filament\Notifications\Actions\Action;
use Filament\Notifications\Notification;


class CreateService extends CreateRecord
{
    protected static string $resource = ServiceResource::class;


    protected function beforeCreate(): void
    {

    }
}

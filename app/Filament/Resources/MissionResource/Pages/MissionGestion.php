<?php

namespace App\Filament\Resources\MissionResource\Pages;

use App\Filament\Resources\MissionResource;
use Filament\Resources\Pages\Page;

class MissionGestion extends Page
{
    protected static string $resource = MissionResource::class;

    protected static string $view = 'filament.resources.mission-resource.pages.mission-gestion';

    public function mount(): void
    {
        static::authorizeResourceAccess();
    }
}

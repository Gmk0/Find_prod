<?php

namespace App\Filament\Freelance\Resources\MissionResource\Pages;

use App\Filament\Freelance\Resources\MissionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Filament\Resources\Pages\view;
use Filament\Resources\Pages\ViewRecord;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Infolists\Concerns\InteractsWithInfolists;
use Filament\Infolists\Contracts\HasInfolists;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\TextEntry;


class Postuler extends EditRecord implements HasInfolists
{
    use InteractsWithInfolists;
    protected static string $resource = MissionResource::class;





    public function missionINfo(Infolist $infolist): Infolist
    {
        return $infolist
            ->record($this->record)
            ->schema([
            TextEntry::make('title'),
                // ...
            ]);
    }
}

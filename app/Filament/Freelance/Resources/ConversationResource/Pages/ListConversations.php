<?php

namespace App\Filament\Freelance\Resources\ConversationResource\Pages;

use App\Filament\Freelance\Resources\ConversationResource;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\ListRecords;

class ListConversations extends ListRecords
{
    protected static string $resource = ConversationResource::class;

    protected function getHeaderActions(): array
    {
        return [

            Action::make('Voir les messages')->url(route('freelance.chat'))
           // Actions\CreateAction::make(),
        ];
    }
}

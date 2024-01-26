<?php

namespace App\Filament\Freelance\Resources;

use App\Filament\Freelance\Resources\ConversationResource\Pages;
use App\Filament\Freelance\Resources\ConversationResource\RelationManagers;
use App\Models\Conversation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\Layout\Split;
use Filament\Tables\Columns\Layout\Stack;
use Filament\Support\Enums\FontWeight;
use Filament\Tables\Actions\Action;
use Spatie\MediaLibrary\Conversions\Conversion;

class ConversationResource extends Resource
{
    protected static ?string $model = Conversation::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';
    protected static ?string $navigationGroup = 'Conversation';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
            ImageColumn::make('user.profile_photo_url')
            ->circular(),
            TextColumn::make('user.name')->label('Nom')
            ->weight(FontWeight::Bold)
            ->searchable(),
            TextColumn::make('message.body')->label('Dernier Message'),

            TextColumn::make('user.email')
                ->icon('heroicon-m-envelope'),




                //
            ])
            ->filters([
                //
            ])
            ->actions([Action::make('Converser')
                ->url(fn (Conversation $record): string => route('freelance.chat', $record->id))
            ])
            ->bulkActions([

            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::$model::where('status','=', 'pending')->where('freelance_id', auth()->user()->freelance->id)->count();
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('freelance_id', auth()->user()->freelance->id);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListConversations::route('/'),
            //'create' => Pages\CreateConversation::route('/create'),
           // 'edit' => Pages\EditConversation::route('/{record}/edit'),
        ];
    }
}

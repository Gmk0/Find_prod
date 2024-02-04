<?php

namespace App\Filament\Freelance\Pages;

use Filament\Pages\Page;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Section;
use Illuminate\Support\Facades\Http;

class Retrait extends Page
{
    use InteractsWithForms;
    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static string $view = 'filament.freelance.pages.retrait';


    public ?array $data = [];
    public $response = null;



    public function mount()
    {
        $this->form->fill();
    }

    //CMD20240202120236
    public function form(Form $form): Form
    {
        return $form
            ->schema([

                Section::make('Information')
                ->description('')
                    ->schema([
                        // ...
                        TextInput::make('numero')
                        ->required(),

                        TextInput::make('montant')

                        ->numeric(),
                        TextInput::make('provider_id')

                        ->numeric(),



                    ])
            ])


            ->statePath('data');
    }
}

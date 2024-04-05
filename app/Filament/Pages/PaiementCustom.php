<?php

namespace App\Filament\Pages;

use App\Models\ClientLink;
use App\Models\Freelance;
use App\Models\Proposal;
use App\Models\Service;
use Filament\Forms\Components\Fieldset;
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
use Filament\Forms\Get;
use Filament\Forms\Set;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Http;

class PaiementCustom extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static string $view = 'filament.pages.paiement-custom';
    use InteractsWithForms;

    public ?array $data = [];
    public $response = null;

    public $custom;

    public function mount()
    {
        $this->form->fill();

        $this->custom= ClientLink::whereHas('proposal',function($q){
            $q->where('status', '!=', 'finished');

        })->get();
    }

    //CMD20240202120236
    public function form(Form $form): Form
    {
        return $form
            ->schema([

                Section::make('Information')
                    ->description('')
                    ->schema([

                Fieldset::make('Label')
                ->schema([
                    Select::make('proposal_id')
                    ->options(Proposal::where('status', '!=', 'finished')->pluck('proposed_price', 'id'))
                       ->live(),

                    Select::make('service')
                    ->options(fn (Get $get): Collection => Service::query()
                    ->where('id', $get('proposal_id'))
                    ->pluck('title', 'id')),


                ]),


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

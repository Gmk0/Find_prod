<?php

namespace App\Filament\Freelance\Pages;

use App\Filament\Freelance\Resources\TransactionResource\Widgets\SoldeFreelance;

use Filament\Forms\Components\Grid;
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
use Filament\Actions\Action;
use Filament\Widgets\AccountWidget;

class Retrait extends Page
{
    use InteractsWithForms;
    protected static ?string $navigationIcon = 'heroicon-s-credit-card';

    protected static string $view = 'filament.freelance.pages.retrait';
    protected static ?string $navigationGroup = 'Transactions';


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

                Section::make('Retrait')
                ->description('')
                    ->schema([
                        Grid::make(['md'=>2])->schema([
                    TextInput::make('numero')
                    ->placeholder('2430844720350')
                    ->required(),
                    Select::make('provider_id')->label('Operateur')
                        ->options(['9'=>'Orange Money','10'=>'M-pesa','17'=>'Airtel Money'])
                        ->native(false),

                        ]),
                        // ...



                    TextInput::make('montant')

                     ->numeric(),
                TextInput::make('password')

                ->password(),



                    ])
            ])


            ->statePath('data');
    }

    public function retrait()
    {
        $this->form->validate();
        $data = $this->form->getState();



       // dd($data);

    }




    protected function getHeaderWidgets(): array
    {
        return [
            SoldeFreelance::class
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('edit')
         ,

        ];
    }
}

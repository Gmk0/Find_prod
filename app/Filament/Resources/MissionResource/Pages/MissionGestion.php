<?php

namespace App\Filament\Resources\MissionResource\Pages;

use App\Filament\Resources\MissionResource;
use App\Models\Commission;
use App\Models\Mission;
use App\Models\MissionResponse;
use App\Models\Transaction;
use App\Notifications\PaiementDebloquer;
use Filament\Resources\Pages\Page;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\DB;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Actions\Action;
use Filament\Forms\Components\{DateTimePicker, TextInput, RichEditor, DatePicker, MarkdownEditor, Select, Toggle, FileUpload, Grid, Section, Textarea};
use Filament\Resources\Pages\EditRecord;

use Filament\Forms\Form;
class MissionGestion extends Page implements HasForms, HasActions
{
    use InteractsWithActions;
    use InteractsWithForms;
    protected static string $resource = MissionResource::class;

    protected static string $view = 'filament.resources.mission-resource.pages.mission-gestion';


    public Mission $record;
    public ?array $data = [];
    public $is_publish = false;
    public MissionResponse $missionResponse;
    public function mount(): void
    {
        $this->missionResponse=$this->record->missionAccept;

        $this->form->fill([
            'satisfaction' => $this->record->feedbackmission->satisfaction,
            'commentaire' => $this->record->feedbackmission->commentaires,

        ]);

    }

    public function submit()
    {


        $mission = $this->record;
        $missionResponse = $this->record->missionAccept;
        if ($mission->is_paid == null) {

            Notification::make()
                ->danger()
                ->title('le paiement n\'a pas encore ete effectuer')
                ->send();

                return false;


        }

        if ($missionResponse->is_paid != null) {
            Notification::make()
                ->danger()
                ->title('le paiement a  ete effectuer')
                ->send();
            return false;
        }

        $transaction = $mission->transaction;

        if ($transaction?->status != 'completed') {
            Notification::make()
                ->danger()
                ->title('le paiement n\'a pas encore ete effectuer')
                ->send();

            return false;

        }

        DB::beginTransaction();
        try {

            $missionResponse->is_paid = now();
            $missionResponse->update();
            $mission->status = 'completed';
            $mission->update();

            $freelance = $missionResponse->freelance;
            $user = $freelance->user;

            // Calculer 80% du montant total de la commande
            $amountToAdd = $transaction->amount * 0.80;
            $commissionAmount = $transaction->amount * 0.20;

            $freelance->solde += $amountToAdd;
            $freelance->save();

            // 20% de commission

            $transactionFait = Transaction::create([
                'user_id' => $freelance->user_id,
                'type' => 'debiter',
                'amount' => $amountToAdd,
                'description' => 'Débit pour la mission #' . $mission->mission_numero . ' après déduction de la commission',
                'status' => 'completed'

            ]);
            $commission = new Commission();
            $commission->mission_id = $mission->id;
            $commission->amount = $commissionAmount;
            $commission->user_id = $freelance->user_id;
            $commission->net_amount = $amountToAdd;
            $commission->percent = '20%';
            $commission->description = 'Commission de 20% prélevée sur la commande.';
            $commission->transaction_id = $transactionFait->id;
            $commission->save();

            DB::commit();

            $this->notifySuccees();
            $user->notify(new PaiementDebloquer($amountToAdd));
        } catch (\Exception $e) {

            error_log($e->getMessage());


            DB::rollback();

            Notification::make()
                ->danger()
                ->title('une erreur s\'est produite')
                ->send();

           // return redirect()->back()->withErrors(['message' => 'une erreur s\'est produite' . $e->getMessage()]);
        }
    }

    public function addFeedback()
    {
        $this->form->validate();

            $data = $this->form->getState();


        try {
            $data = $this->form->getState();
            $feedback = $this->record->feedbackmission;
            $feedback->satisfaction = $data['satisfaction'];
            $feedback->commentaires = $data['commentaire'];
            $feedback->update();

            Notification::make()
            ->success()
            ->title(__('Feedback enregistrer avec success'))
            ->send();

            $this->dispatch('close-modal', id: 'feedback');

        } catch (\Exception $e) {

            error_log($e);

            Notification::make()
            ->danger()
                ->title(__('erreur s\est produite'))

                ->send();
        }
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make('1')->schema([
                    Select::make('satisfaction')
                    ->options([
                        '2' => '2 etoiles',
                        '3' => '3 etoiles',
                        '4' => '4 etoiles',
                        '5' => '5 etoiles',
                    ])->required()->native(false),
                    Textarea::make('commentaire'),


                ]),


            ])
            ->statePath('data')
            ->model($this->record);
    }



    function notifySuccees()
    {

        Notification::make()
            ->success()
            ->title(__('Paiement debloquer'))

            ->send();
        //->sendToDatabase($user);
    }

}

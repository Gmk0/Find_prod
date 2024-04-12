<?php

namespace App\Filament\Resources\OrderResource\Pages;

use App\Filament\Resources\OrderResource;
use App\Models\Commission;
use Filament\Resources\Pages\Page;
use App\Models\Order;
use App\Models\Transaction;
use App\Notifications\PaiementDebloquer;
use Filament\Resources\Pages\ViewRecord;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;

use Filament\Forms\Components\{DateTimePicker, TextInput, RichEditor, DatePicker, MarkdownEditor, Select, Toggle, FileUpload, Grid, Section, Textarea};
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Facades\DB;

class GestionOrder extends Page  implements HasForms
{
    protected static string $resource = OrderResource::class;

    protected static string $view = 'filament.resources.order-resource.pages.gestion-order';


    public Order $record;
    public ?array $data = [];
    public $is_publish = false;

    public function mount()
    {


        $this->form->fill([
            'satisfaction' => $this->record->feedback->satisfaction,
            'commentaire' => $this->record->feedback->commentaires,

        ]);
    }


    public function submit()
    {




        $order = $this->record;


        if ($order->is_paid != null) {

            Notification::make()
                ->danger()
                ->title('vous avez deja debloquer ce paiement')
                ->send();

            return false;
        }

        DB::beginTransaction();
        try {


            $order->is_paid = now();
            $order->update();

            $freelance = $order->service->freelance;

            // Calculer 80% du montant total de la commande
            $amountToAdd = $order->total_amount * 0.80;
            $commissionAmount = $order->total_amount * 0.20;

            $freelance->solde += $amountToAdd;
            $freelance->save();

            // 20% de commission

            $transaction = Transaction::create([
                'user_id' => $freelance->user_id,
                'type' => 'debiter',
                'amount' => $amountToAdd,
                'description' => 'Débit pour la commande #' . $order->order_numero . ' après déduction de la commission',
                'status' => 'completed'

            ]);
            $commission = new Commission();
            $commission->order_id = $order->id;
            $commission->amount = $commissionAmount;
            $commission->user_id = $freelance->user_id;
            $commission->net_amount = $amountToAdd;
            $commission->percent = '20%';
            $commission->description = 'Commission de 20% prélevée sur la commande.';
            $commission->transaction_id = $transaction->id;
            $commission->save();

            $user= $freelance->user;

            $user->notify(new PaiementDebloquer($amountToAdd));

            $this->notifySuccees();

            DB::commit();
        } catch (\Exception $e) {


            DB::rollback();
            Notification::make()
                ->danger()
                ->title($e->getMessage())
                ->send()
                ;

            //return redirect()->back()->withErrors(['message' => 'une erreur s\'est produite' . $e->getMessage()]);
        }
    }

    function notifySuccees()
    {

        Notification::make()
            ->success()
            ->title(__('Paiement debloquer'))

            ->send();
            //->sendToDatabase($user);
    }


    protected function sendNotification(): void
    {
        Notification::make()
            ->success()
            ->title("Mise à jour de la commande")
            ->send()
            ->sendToDatabase(auth()->user());
    }

    public function addFeedback()
    {
        $this->form->validate();

        $data = $this->form->getState();



        try {
            $data = $this->form->getState();
            $feedback = $this->record->feedback;
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


}

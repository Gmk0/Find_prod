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

use Filament\Forms\Components\{DateTimePicker, TextInput, RichEditor, DatePicker, MarkdownEditor, Select, Toggle, FileUpload, Grid, Section};
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
            'progress' => $this->record->progress,
            'etat' => $this->record->feedback->etat,
            'delai_livraison_estimee' => $this->record->feedback->delai_livraison_estimee
        ]);

        $this->is_publish = $this->record->feedback->is_publish;
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


}

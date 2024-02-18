<?php

namespace App\Notifications;

use App\Models\Transaction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderUserNotifiy extends Notification

implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $transaction;
    public function __construct(Transaction $transaction)
    {

        $this->transaction = $transaction;
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */

    public function toDatabase($notifiable)
    {
        return [
            'title' => "Commande",
            'body' => 'Votre Commande de ' . $this->transaction->amount . ' a ete passee avec success  ',
            'url' => '/user/transaction',
            'icon' => 'fa fa-cart-shopping',
        ];
    }
    public function toMail(object $notifiable): MailMessage
    {

        try {
            return (new MailMessage)->view('emails.order-mail', ['orders' => $this->transaction])
                ->subject('FACTURE PAIEMENT');
        } catch (\Exception $e) {
            // dd($e->getMessage());


        }
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}

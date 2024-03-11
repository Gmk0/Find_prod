<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PaiementDebloquer extends Notification implements ShouldQueue
{
    use Queueable;


    /**
     * Create a new notification instance.
     */
    public function __construct(public $montant)
    {
        //s
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail','database'];
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => "Versement reçu",
            'body' => 'Vous avez reçu un versement de ' . $this->montant . ' $.',
            'url' => '/freelance-gestion/', // Remplacez ceci par l'URL appropriée si nécessaire
            'icon' => 'fa fa-money', // Icône représentant le versement
        ];
    }


    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        try {
            return (new MailMessage)->view('emails.retrait-mail', ['senderName' => $notifiable->name, 'montant' => $this->montant])
                ->subject('Versement');
        } catch (\Exception $e) {


            error_log($e->getMessage());
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

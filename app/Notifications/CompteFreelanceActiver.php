<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CompteFreelanceActiver extends Notification
implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => "Commande",
            'body' => 'Votre Commande de ' . $notifiable->name . ' a ete passee avec success  ',
            'url' => '/user/transaction',
            'icon' => 'fa fa-cart-shopping',
        ];
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        try {
            return (new MailMessage)->view('emails.acount-activer',['user' => $notifiable])
                ->subject('ACTIVATION COMPTE');
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

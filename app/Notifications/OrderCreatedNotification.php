<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

use NotificationChannels\PusherPushNotifications\PusherChannel;
use Pusher\PushNotifications\PushNotifications;
use NotificationChannels\PusherPushNotifications\PusherMessage;
use Illuminate\Notifications\Messages\VonageMessage;

class OrderCreatedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $order;

    public function __construct($order)
    {
        $this->order = $order;
    }

    public function via($notifiable)
    {
        return ["database", PusherChannel::class,'mail','vonage'];
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => "Commande",
            'body' => 'Nouvelle commande de ' . $this->order->getMontant() . ' pour le service ' . $this->order->service->title . ' a été passée.',
            'url' => '/freelance/commande/' . $this->order->order_numero,
            'icon' => 'fa fa-cart-shopping',

        ];
    }


    public function toVonage(object $notifiable): VonageMessage
    {
        return (new VonageMessage)

            ->content('Nouvelle commande de ' . $this->order->getMontant() . ' pour le service ' . $this->order->service->title . ' a été passée.');
    }


    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line('Nouvelle commande de ' . $this->order->getMontant() . ' pour le service ' . $this->order->service->title . ' a été passée.')
            ->action('Notification Action', url('/freelance/commande/' . $this->order->order_numero))
            ->line('Thank you for using our application!');
    }



    public function toPushNotification($notifiable)
    {
        $beamsClient = new PushNotifications(array(
            "instanceId" => config('services.pusher.beams_instance_id'),
            "secretKey" => config('services.pusher.beams_secret_key'),
        ));

        $interests = "App.Models.User.{$notifiable->id}";

        $data = array(
            "web" => array(
                "notification" => array(
                    "title" => "Nouvelle commande !",
                    "body" =>
                    'Vous avez une nouvelle commande de ' . $this->order->getMontant() . ' pour le service ' . $this->order->service->title . '.',
                    "deep_link" => "http://localhost:8000/freelance/commande/" . $this->order->order_numero,
                    "icon" => "http://localhost:8000/images/logo/find_01.png",
                    "data" => array(
                        "foo" => "bar",
                        "baz" => "qux",
                    ),
                ),
            ),
        );

        $beamsClient->publishToInterests(array($interests), $data);
    }
}

<?php

namespace App\Notifications;

use App\Models\FeedbackService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

use NotificationChannels\PusherPushNotifications\PusherChannel;
//use Pusher\PushNotifications\PushNotifications;
//use NotificationChannels\PusherPushNotifications\PusherMessage;

class OrderProgress extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $feedback;
    public function __construct(FeedbackService $feedback)
    {
        //

        // dd($feedback);
        $this->feedback = $feedback;
    }

    public function via($notifiable)
    {
        return [ "database"];
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => "Progression Commande",
            'message' => 'Nouvelle progression de ' . $this->feedback->order->progress . '% pour le service ' . $this->feedback->order->service->title,
            'url' => '/user/commandes/' . $this->feedback->order->order_numero,
            'icon' => 'fa fa-bars-progress',
        ];
    }


    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->greeting("Salut")
            ->line('Nouvelle progression de ' . $this->feedback->order->progress . ' pour le service ' . $this->feedback->order->service->title)
            ->action('Voir', url('/user/commandes/' . $this->feedback->order->order_numero))
            ->line('Merci d\utiliser notre Application!');
    }

    /*
    public function toPushNotification($notifiable)
    {
        try {


            $beamsClient = new PushNotifications(array(
                "instanceId" => config('services.pusher.beams_instance_id'),
                "secretKey" => config('services.pusher.beams_secret_key'),
            ));





            $interests = "App.Models.User.{$notifiable->id}";
            $data = array(
                "web" => array(
                    "notification" => array(
                        "title" => "Nouvelle Progression !",
                        "body" => 'Nouvelle progression de ' . $this->feedback->order->progress . '% pour le service ' . $this->feedback->order->service->title,
                        "deep_link" => "http://localhost:8000/user/commandes/" . $this->feedback->order->order_numero,
                        "icon" => "http://localhost:8000/images/logo/find_01.png",
                        "data" => array(
                            "foo" => "bar",
                            "baz" => "qux",
                        ),
                    ),
                ),
            );

            $beamsClient->publishToInterests(array($interests), $data);
        } catch (\Exception $e) {

            dd($e->getMessage());
        }
    }
    */
}

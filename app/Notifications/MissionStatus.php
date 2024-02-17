<?php

namespace App\Notifications;

use App\Models\MissionResponse;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\PusherPushNotifications\PusherChannel;
use Pusher\PushNotifications\PushNotifications;
use NotificationChannels\PusherPushNotifications\PusherMessage;


class MissionStatus extends Notification

implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */

    public $projectResponse;
    public function __construct(MissionResponse $projectResponse)
    {
        //

        $this->projectResponse = $projectResponse;


    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */



    public function via($notifiable)
    {
        return ["database"];
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => "Mission",
            'message' => 'Nouvelle proposition de votre mission ' . $this->projectResponse->mission->title,
            'url' => '/user/mission-list/' . $this->projectResponse->mission->mission_numero,
            'icon' => 'fa fa-bars-progress',
        ];
    }


    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line('Nouvelle proposition de votre mission ' . $this->projectResponse->mission->title)
            ->action('Notification Action', url('/user/list_project/' . $this->projectResponse->mission->id))
            ->line('Merci d\'utiliser notre Application!');
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
                    "title" => "Nouvelle proposition !",
                    "body" =>
                    'Nouvelle proposition de votre mission ' . $this->projectResponse->mission->title,
                    "deep_link" => 'https://find-freelance/user/list_project/' . $this->projectResponse->mission->id,
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

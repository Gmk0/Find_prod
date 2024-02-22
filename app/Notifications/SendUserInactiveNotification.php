<?php

namespace App\Notifications;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendUserInactiveNotification extends Notification
{
    use Queueable;
    public $message;
    public $senderName;
    public $body;

    /**
     * Create a new notification instance.
     */
    public function __construct(Message $message)
    {



        $this->message = $message;
        $this->senderName = $message->senderUser->name;
        $this->body=$message->body;

        //dd($this->senderName);
        //
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
            return (new MailMessage)->view('emails.send-inactive',['senderName'=>$this->senderName,'body'=> $this->body])
                ->subject('Nouveau message de'. $this->senderName);
        } catch (\Exception $e) {


             dd($e->getMessage());


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

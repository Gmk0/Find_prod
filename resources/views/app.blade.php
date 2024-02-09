<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="shortcut icon" href="/images/logo/find_01.png" type="image/x-icon">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <title inertia>{{ config('app.name', 'FIND') }}</title>
        <link  rel="stylesheet" href="/css/new.css">
        <link rel="stylesheet" href="/css/plugin.css">
        <link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css" />

        <!-- script -->



        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

       <script src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"></script>

        @routes


        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead





<!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TCWE5CRXH1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TCWE5CRXH1');
        </script>

    </head>
    <body class="font-sans antialiased">
        @inertia




        <script>
            const beamsClient = new PusherPushNotifications.Client({
                    instanceId: '92c75cc8-3936-4286-9bc2-68b9958a4b2b',
                  });

                  beamsClient.start()
                    .then(() => beamsClient.addDeviceInterest('App.Models.User.{{ auth()->id() }}'))
                    .then(() => console.log('Successfully registered and subscribed!'))
                    .catch(console.error);
        </script>
    </body>
</html>

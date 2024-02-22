<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau message de {{$senderName}} !</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333;
            background: white;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
        }

        .header img {
            max-width: 100px;
            display: block;
            margin: 0 auto;
        }

        .content {
            margin-top: 20px;
        }

        .button {
            background-color: #0073b7;
            color: #fff !important;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
            display: block;
            text-align: center;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
        }
        .message{
            margin-top: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://www.find-freelance.com/images/logo/find_02.png" alt="Logo de l'entreprise">
            <h1>Nouveau message de <strong>{{$senderName}}</strong> </h1>
        </div>
        <div class="content">

            <p>Voici un aperçu de votre message</p>
            <p class="message">
                <strong>
               {!!$body!!}
               </strong>
            </p>
            <a href="{{url('/')}}" class="button">Voir message </a>

        </div>
        <div class="footer">
            Copyright ©
            2024
            Find
        </div>
    </div>
</body>

</html>

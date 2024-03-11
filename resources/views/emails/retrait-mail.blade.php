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

        .message {
            margin-top: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    </style>
</head>

<body>
   <div class="container">
    <div class="header">
        <img src="https://www.find-freelance.com/images/logo/find_02.png" alt="Logo de l'entreprise">
        <h1>Montant versé</h1>
    </div>
    <div class="content">
        <p>Cher(e) {{$userName}},</p>
        <p>Vous avez reçu un versement sur votre compte. Voici les détails :</p>
        <p>Montant versé : <strong>{{$montant}} $</strong></p>
        <p>Merci de votre confiance.</p>
        <a href="{{url('/')}}" class="button">Voir mon compte</a>
    </div>
    <div class="footer">
        © {{ date("Y") }} Find
    </div>
</div>
</body>

</html>

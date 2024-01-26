<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
        }

        p {
            color: #555;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            text-decoration: none;
            border-radius: 3px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Bienvenue sur Find-freelance</h1>
        <p>Merci de vous être inscrit sur notre site. Voici vos informations de connexion :</p>

        <p><strong>Nom d'utilisateur:</strong> {{ $userName }}</p>
        <p><strong>Mot de passe:</strong> {{ $password }}</p>

        <p>Nous vous recommandons de changer votre mot de passe après votre première connexion.</p>

        <p>Merci encore de faire partie de notre communauté!</p>

        <a href="{{ url('/') }}" class="button">Se connecter</a>
    </div>
</body>

</html>

<?php

// config for Icetalker/FilamentChatgptBot
return [
    'enable' => false,

    'openai' => [
        'api_key' => env('OPENAI_API_KEY'),
        'organization' => env('OPENAI_ORGANIZATION'),
    ],

    'proxy'=> env('OPENAI_PROXY'),

];

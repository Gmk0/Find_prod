/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
});


window.Echo.connector.pusher.connection.bind('error', function (err) {
    if (err.error.data.code === 4004) {
        console.error('Détecté une erreur de surcharge de quota avec Pusher');
    } else if (err.error.data.code === 2001) {
        // Affichez une notification à l'utilisateur
        displayNotification("Vous semblez être hors ligne. Veuillez vérifier votre connexion Internet.");
    } else {
        displayNotification("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
});

// Fonction pour afficher une notification
function displayNotification(message) {
    // Utilisez votre système de notification préféré ici
    // Par exemple, pour une simple alerte JavaScript :
    alert(message);
}









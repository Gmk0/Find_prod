<div class="mt-4">
@if($status['status_compte']=='en_attente')
<div id="alert-additional-content-4"
    class="p-4 mt-8 mb-4 text-yellow-800 border rounded-lg border-primary-300 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
    role="alert">
    <div class="flex items-center gap-4">
        <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <h3 class="text-lg font-medium">Compte en Attente de Validation</h3>
    </div>
    <div class="mt-2 mb-4 text-sm">
        Votre compte freelance est actuellement en cours d'examen par notre équipe. Nous vous remercions pour votre
        patience. Vous serez notifié(e) par e-mail dès que votre compte sera validé et que vous pourrez accéder à toutes
        les fonctionnalités de notre plateforme. En attendant, n'hésitez pas à consulter notre section d'aide ou à nous
        contacter si vous avez des questions.
    </div>
</div>
@endif
</div>

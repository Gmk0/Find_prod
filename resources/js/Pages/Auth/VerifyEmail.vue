<script setup>
import { computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const props = defineProps({
    status: String,
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <Head title="Email Verification" />

     <Head title="Two-factor Confirmation" />

            <NavGuest />

             <CardGuest>
                <template #title>
                   Verification
                </template>
                   <template #description>
                          <span class="hidden">Trouvez les services parfaits dont vous avez besoin</span>
                </template>

                <template #form>

                    <div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl">
                            <h5 class="text-gray-600 dark:text-gray-300">Verification </h5>
                        </div>

            <div class="p-4">

                <div class="mb-4 text-base font-bega-medium text-gray-600 dark:text-white">
                Avant de continuer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer par e-mail ? Si vous n'avez pas reçu l'e-mail, nous serons heureux de vous en envoyer un autre.
                </div>

                <div v-if="verificationLinkSent" class="mb-4 text-sm font-medium text-green-600">
                   Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie dans vos paramètres de profil.
                </div>

                <form @submit.prevent="submit">
                    <div class="flex flex-col items-center justify-between gap-3 mt-4">
                        <PrimaryButton class="gradient2" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                          Renvoyer le code
                        </PrimaryButton>

                        <div>
                            <Link
                                :href="route('profile.show')"
                                class="text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Modifier le profile</Link>

                            <Link
                                :href="route('logout')"
                                method="post"
                                as="button"
                                class="ml-2 text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Deconnexion
                            </Link>
                        </div>
                    </div>
                </form>

            </div>

                        </div>

                </template>

            </CardGuest>



</template>



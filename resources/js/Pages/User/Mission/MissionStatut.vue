


<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

        <div class="flex flex-col">
            <div>
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link :href="route('user.dashboard')"
                                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Dashboard
                            </Link>
                        </li>

                        <li aria-current="page">
                            <Link :href="route('user.missions')" class="flex items-center">
                            <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission</span>
                            </Link>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Candidature</span>
                            </div>
                        </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">Status</h1>

        </div>




        <div>
            <div>
                <Error />

            </div>




        </div>
         <div>
                <div class="min-h-screen py-5 custom overflow-y-auto-scrollbar bg-gray-50 dark:bg-gray-900">

                    <div class="flex flex-col items-center justify-center">

                <div class="text-center rounded-md shadow-md ">
                    <svg class="w-20 h-20 mx-auto mb-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4.707-8.293a1 1 0 1 1 1.414 1.414l2.793 2.793 5.793-5.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-4.5-4.5z" />
                    </svg>
                    <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">Paiement réussi</h3>
                    <div class="p-4 rounded-lg">

                        <p class="px-6 mb-4 text-lg text-gray-800 dark:text-gray-100">Votre paiement a été traité avec succès. Voici un
                            récapitulatif
                            de votre
                            commande
                            :
                        </p>
                        <ul class="mb-4">


                            <li class="flex justify-between px-6">
                                <span class="text-lg font-medium">Mission : {{ transaction.data.mission.title }}</span>
                                <span class="text-lg font-bold">{{ transaction.data.mission.budget }} $</span>
                            </li>



                        </ul>
                        <p class="text-green-700">Nous vous remercions de votre achat et espérons vous revoir bientôt !</p>

                        <div class="mt-8 space-x-4">
                            <a :href="route('facturation', [transaction.data.transaction_numero])"
                                class="px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600">Imprimer
                                facture</a>

                            <Link :href="route('user.missions')"
                                class="px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600">
                                voir l'evolution</Link>
                        </div>
                    </div>




                </div>


            </div>

                </div>

            </div>





    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';
import { Link, useForm, router } from '@inertiajs/vue3';

import { computed, ref } from 'vue';


defineProps({
    transaction: Object,

});















defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

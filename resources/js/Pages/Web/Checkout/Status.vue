

<script setup>

import WebLayout from '@/Layouts/WebLayout.vue';
import { ref, computed, onMounted } from "vue";
import { cartStore } from '@/store/store';
import { router } from '@inertiajs/vue3';


const usecartStore = cartStore();


defineProps({
    transaction:Object,
});

onMounted(()=>{

    usecartStore.clearCart();
});


defineOptions({
    layout: WebLayout,

});


const items = computed(() => usecartStore.items);

const totalPrice = computed(() => usecartStore.totalCost);




</script>
<template>

        <div>
            <div class="min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900">

                <div class="flex flex-col items-center justify-center min-h-screen py-24">

            <div class="text-center bg-white rounded-md shadow-md dark:bg-gray-800 ">
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


                        <li v-for="order in transaction.data.orders" class="flex justify-between px-6">
                            <span class="text-lg font-medium">Service : {{ order.service.title }}</span>
                            <span class="text-lg font-bold">{{ order.total_amount}} $</span>
                        </li>



                    </ul>
                    <p class="text-green-700">Nous vous remercions de votre achat et espérons vous revoir bientôt !</p>

                    <div class="mt-8 space-x-4">
                        <a :href="route('facturation', [transaction.data.transaction_numero])"
                            class="px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600">Imprimer
                            facture</a>

                        <Link :href="route('user.commandes')"
                            class="px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600">
                            voir l'evolution</Link>
                    </div>
                </div>




            </div>


        </div>

            </div>

        </div>

</template>

<style>

</style>

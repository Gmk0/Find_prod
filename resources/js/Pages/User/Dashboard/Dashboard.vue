


<template>


            <div
                class="flex flex-col min-h-screen gap-6 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto dark:bg-inherit">

                <div class="flex flex-col">

                    <h1 class="text-2xl font-bega-semibold">DASHBOARD</h1>


                </div>

                <div  class="grid grid-cols-2 gap-4 px-auto lg:grid-cols-4">
                    <Link :href="route('user.transactions')"
                        class="px-4 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900 lg:px-6 lg:py-6">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-indigo-600 font-bega-medium">Total Depense</span>
                            <span
                                class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-500 md:flex hover:bg-gray-500 dark:text-gray-900 hover:text-gray-200">Today</span>
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <div>
                                <svg class="w-8 h-8 p-1 text-indigo-600 bg-indigo-400 border border-indigo-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex items-end">
                                    <span class="text-xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-3xl">{{ depense }}</span>
                                    <div class="flex items-center hidden mb-1 ml-2">

                                        <svg class="w-12 h-12 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                        </svg>
                                        <span class="font-bega-medium text-sm text-gray-500 ml-0.5">2</span>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link :href="route('user.commandes')" class="px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-green-600 font-bega-medium">Commande</span>
                            <span
                                class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-600 md:hidden dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200">7
                                days</span>
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <div>
                                <svg class="w-8 h-8 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex items-end">
                                    <span class="text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl">{{ commandeTotal }}</span>
                                    <div class="flex items-center mb-1 ml-2">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link :href="route('user.transactions')"
                        class="px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-blue-600 font-bega-medium">Transaction</span>
                            <span
                                class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-600 md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200">7
                                days</span>
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <div>
                                <svg class="w-8 h-8 p-1 text-blue-600 bg-blue-400 border border-blue-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div class="flex-col ">
                                <div class="flex items-end ">
                                    <span class="text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl">{{ transactionTotal }}</span>
                                    <div class="items-center hidden mb-1 ml-2 ">
                                        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                        </svg>
                                        <span class="font-bega-medium text-sm text-gray-500 ml-0.5">7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link :href="route('user.missions')"
                        class="px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-800 dark:text-gray-100 font-bega-medium">Mission en attente</span>
                            <span
                                class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-00 6md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200">
                                days</span>
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <div>
                                <svg class="w-8 h-8 p-1 text-yellow-600 bg-yellow-400 border border-yellow-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex items-end">
                                    <span class="text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl">{{ missionAttente }}</span>
                                    <div class="flex items-center hidden mb-1 ml-2">
                                        <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                                        </svg>
                                        <span class="font-bega-medium text-sm text-gray-500 ml-0.5">-1%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>


                <div>

            <div class="mt-4">
                    <div>
                    <H1 class="mb-4 text-lg text-gray-700 font-bega-medium dark:text-gray-200">Dernier commande</H1>
                    </div>
                <div>
                    <div class="card">
                        <DataTable stripedRows   paginator :rows="10" :rowsPerPageOptions="[10, 20, 50,100]" :value="commandes.data" tableStyle="min-width: 50rem"
                        >

                            <template #empty> Pas de Commande disponible. </template>
                            <template #loading>  Chargement de commandes ... </template>

                            <Column sortable  field="order_numero" header="Numero commande"></Column>
                            <Column field="service.title" header="Service"></Column>
                            <Column field="total_amount" header="Montant">
                            <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.total_amount) }} $
                            </template>
                            </Column>
                            <Column  header="Status">
                                <template #body="slotProps">
                                <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data)"/>

                                </template>


                            </Column>
                            <Column :exportable="false" style="min-width:4rem">
                                <template #body="slotProps">
                                    <Link :href="route('user.commandes.one', [slotProps.data.order_numero])">
                                        <span><i class="pi pi-pencil"></i></span>
                                    </Link>


                                </template>
                                </Column>

                        </DataTable>
                    </div>
                </div>
            </div>

                </div>



            </div>




</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';



defineProps({
    depense:String,
    commandeTotal: String,
    transactionTotal :String,
    missionAttente:String,
    commandes :Array
})

defineOptions({
    layout: UserLayout,

});

const formatCurrency = (value) => {
     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


const getSeverity = (commande) => {
    switch (commande.status) {
        case 'pending':
            return 'warning';
            break;
        case 'completed':
            return 'success';
            break;

         case 'failed':
            return 'danger';
            break;
        default:
            return null;

    }
}


</script>

<style lang="scss" scoped>

</style>

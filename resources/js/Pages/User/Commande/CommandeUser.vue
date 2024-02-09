


<template>

   <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

    <div class="flex flex-col">
        <div>
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                    <Link :href="route('user.dashboard')" class="inline-flex items-center text-sm font-bega-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        Tableau de bord
                    </Link>
                    </li>

                    <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ml-1 text-sm font-bega-medium text-gray-500 md:ml-2 dark:text-gray-400">Commande</span>
                    </div>
                    </li>
                </ol>
            </nav>


        </div>

        <h1 class="mt-4 text-3xl text-black font-bega-semibold dark:text-white">Commandes</h1>

    </div>

    <div>


    </div>




    <div class="mt-4">
        <div>
            <div class="card font-bega-medium">
                <DataTable stripedRows   paginator :rows="10" :rowsPerPageOptions="[2, 10, 20, 50]" :value="commandes.data" tableStyle="min-width: 50rem"
                 >

                   <template #empty> Aucune commande. </template>
    <template #loading> Chargement des données. Veuillez patienter. </template>

                    <Column sortable  field="order_numero" header="Numero de commande"></Column>
                    <Column field="service.title" header="Service"></Column>
                    <Column field="total_amount" header="Montant">
                     <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.total_amount) }} $
                    </template>
                    </Column>
                    <Column  header="status">
                                    <template #body="slotProps">
                                    <Tag :value="getStatus(slotProps.data)" :severity="getSeverity(slotProps.data)"/>

                                    </template>


                    </Column>
                     <Column :exportable="false" style="min-width:4rem">
                        <template #body="slotProps">
                            <Link :href="route('user.commandes.one',[slotProps.data.order_numero])">
                                <span><i class="pi pi-pencil"></i></span>
                            </Link>


                        </template>
                          </Column>

                </DataTable>
            </div>
        </div>
    </div>

    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';




defineProps({
    commandes : Array
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
const getSeverity = (commande) => {
    switch (commande.status) {
        case 'pending':
            return 'info';
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

const getStatus = (commande) => {
    switch (commande.status) {
        case 'pending':
            return 'en Attente';
            break;
        case 'completed':
            return 'Reussie';
            break;

        case 'failed':
            return 'Echouer';
            break;
        default:
            return null;

    }
}



defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

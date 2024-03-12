


<template>
   <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">


      <BreadUser
                        title="Transactions"
                        first_title="Transactions"
                        :first_url="route('user.transactions')"


                        />



         <div class="mt-4">

            <div>

                <div class="card font-bega-medium">
                    <DataTable stripedRows
                    v-model:filters="filters"
                    dataKey="id"
                    filterDisplay="row"
                    paginator
                    :rows="10"
                     :rowsPerPageOptions="[2, 10, 20, 50]"
                    :value="transactions.data"
                    tableStyle="min-width: 50rem"
                    :globalFilterFields="['status']"
                     >

                         <template #empty> Aucune commande. </template>
        <template #loading> Chargement des données. Veuillez patienter. </template>

                        <Column sortable  field="transaction_numero" header="Numero Transaction "></Column>

                        <Column field="amount" header="Montant">
                         <template #body="slotProps">
                            {{ formatCurrency(slotProps.data.amount) }} $
                        </template>
                        </Column>


                             <Column sortable  field="date" header="Date">
                            </Column>
                                <Column  header="status" field="status">
                                <template #body="slotProps">
                                <Tag :value="getStatus(slotProps.data.status)" :severity="getSeverity(slotProps.data.status)"/>

                                </template>
                                 <template #filter="{ filterModel, filterCallback }">
                                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Filtrer" class="p-column-filter" style="min-width: 10rem" :showClear="true">
                                        <template #option="slotProps">
                                            <Tag :value="getStatus(slotProps.option)" :severity="getSeverity(slotProps.option)" />
                                        </template>
                                    </Dropdown>
                                </template>


                        </Column>

                         <Column :exportable="false" style="min-width:4rem">
                            <template #body="slotProps">

                                <Link :href="route('user.transactions.one', [slotProps.data.transaction_numero])">
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

import { FilterMatchMode } from 'primevue/api';

import {ref } from 'vue';


defineProps(
    {
        transactions:Object
    });


defineOptions({
    layout: UserLayout,

});

const filters = ref({
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
})

const statuses = ref(['pending','completed','failed']);

const getSeverity = (status) => {
    switch (status) {
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


const getStatus = (status) => {
    switch (status) {
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

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}



</script>

<style lang="scss" scoped></style>

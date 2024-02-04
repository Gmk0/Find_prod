


<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 lg:max-w-7xl md:container px-auto bg-inherit">

        <div class="flex flex-col">
            <div>
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                        <Link :href="route('user.dashboard')" Fclass="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Dashboard
                        </Link>
                        </li>
                        <li aria-current="page">
                            <Link :href="route('user.commandes')" class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400">Commande</span>
                            </Link>
                        </li>


                        <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{{ order.order_numero }}</span>
                        </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Commandes</h1>

        </div>




         <Toast position="bottom-right" group="br" />


        <div class="">
            <div class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <!-- Informations sur la commande -->
                        <div class="grid grid-cols-1 px-6 py-4 lg:grid-cols-2">
                            <p class="mb-4 font-sans text-lg text-gray-800 dark:text-gray-300">Commande
                                <span class="font-bold font-inter ">{{ order.order_numero }}</span>
                            </p>
                            <p class="mb-4 text-lg text-gray-800 md:mb-2 dark:text-gray-300">Service : <span>
                                    {{ order.service.title }}</span> </p>
                            <p class="mb-4 text-base text-gray-600 dark:text-gray-400 md:mb-2">Date de commande :
                                <span>{{ order.created_at }}</span>
                            </p>
                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Date de livraison :

                                <span class="text-green-500">{{ order.feedback?.delai_livraison_estimee }}</span>
                            </p>


                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement :


                                <span v-if="order.status==='pending'" class="text-red-300 px-1.5 py-0.5 rounded-lg ">en Attente</span>

                                <span v-else-if="order.status==='completed'" class="text-green-500 px-1.5 py-0.5 rounded-lg ">Payé</span>

                                <span v-else class="bg-red-500 px-1.5 py-0.5 rounded-lg ">Rejeter</span>



                            </p>


                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement au Freelance :



                                <span v-if="order.is_paid !=null" class="text-green-500 px-1.5 py-0.5 rounded-lg ">Payé</span>

                             <span v-else  class="text-red-300 px-1.5 py-0.5 rounded-lg ">en Attente</span>



                            </p>

                            <p v-if="order.feedback !=null" class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">statut :




                                <span v-if="order.feedback.etat==='En attente de traitement'" class="text-blue-300 px-1.5 py-0.5 rounded-lg ">En attente de traitement</span>

                                <span v-else-if="order.feedback.etat==='Livré'" class="text-green-500 px-1.5 py-0.5 rounded-lg ">Livré</span>


                                <span v-else-if="order.feedback.etat==='En cours de préparation'" class="text-red-200 px-1.5 py-0.5 rounded-lg ">En cours de préparation</span>

                                <span v-else class="bg-red-500 px-1.5 py-0.5 rounded-lg ">En transit</span>




                            </p>
                            <p v-else class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">
                                Etat de la commande :
                                <span>Pas d'etat disponible</span>

                            </p>

                        </div>
                    <div class="px-6 py-4 border-t border-gray-200">
                        <p class="mb-2 text-lg text-gray-800">Avancement</p>
                        <div class="flex items-center">
                            <div class="flex-1">
                                <ProgressBar :value="order.progress" class="dark:!bg-gray-700"></ProgressBar>
                            </div>
                            <p class="ml-2 text-sm text-gray-600 dark:text-gray-300">{{ order.progress }}%</p>
                        </div>
                    </div>
                      <div class="px-6 py-4 border-t border-gray-300">

                        <h1 class="flex items-start gap-2 text-lg font-bold cursor-pointer lg:text-xl">
                            Freelance lié

                        </h1>

                        <div class="flex items-center mt-4">
                                <Photo :user="order.freelance_user" :taille="'20'" />

                            <div class="ml-4">
                                <a href="" class="text-sm text-gray-600 dark:text-gray-300">{{ order.freelance_user.name }}
                                </a>

                            </div>
                        </div>
                    </div>
                     <div  class="px-6 py-4 border-t border-gray-200">


                        <h1 @click="open = !open"
                            class="flex items-start gap-2 text-lg font-bold cursor-pointer lg:text-xl">
                            Rapport Envoyer
                            <button>
                                <svg :class="{ 'rotate-180': open }" class="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path
                                        d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z" />
                                </svg>
                            </button>
                        </h1>


                        <Collapse :when="open"  class="">


                            <div v-if="true">
                                <template v-for="rapport in order.rapports">
                                <div class="mb-3 border-b border-gray-50">
                                <p class="text-base text-gray-600 dark:text-gray-300">
                                    {{ rapport.description }}
                                </p>
                                <span class="mt-4 text-sm text-gray-500">{{ rapport.created_at }}</span>
                            </div>
                                </template>

                            </div>


                            <div v-else>
                                <p class="text-base text-gray-600 dark:text-gray-300">Pas de raport</p>
                            </div>




                        </Collapse>


                    </div>

                    <div class="px-6 py-4 border-t border-gray-200">
                        <p class="mb-2 text-lg text-gray-800">Options supplémentaires</p>
                        <div class="grid grid-cols-2 gap-2 lg:grid-cols-5 md:grid-cols-4 lg:flex-row">


                            <div v-if="order.transaction ==null">
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact</button>


                            </div>

                                <div  class="w-full">
                                    <div>
                                          <Button outlined severity="info" @click="contacterUser" label="Contact"  />
                                    </div>



                                </div>



                            <div v-if="order.feedback?.etat == 'Livré'" class="w-full">
                                <div>
                                    <Button @click="visible = !visible" outlined="" severity="info" label="Feedback"  />

                                </div>



                            </div>
                             <div v-if="order.feedback?.etat == 'Livré' && order.is_paid ==null " class="w-full">

                                <div>
                                     <Button @click="debloquer = !debloquer" outlined severity="success" label="Debloquer Paiment"  />


                                </div>

                                </div>


                            <div class="hidden">

                                  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Payer</button>

                            </div>

                            <div class="hidden">
                                  <Button size="small" raised severity="danger" label="Annuler" />
                            </div>

                        </div>

                    </div>


                    <div>
                        <div  class="px-6 py-4 border-t border-gray-200">

                            <h1 class="flex items-start gap-2 text-xl font-bold cursor-pointer">
                                Transaction de paiement liée
                                <button @click="open2 = !open2">
                                    <svg :class="{ 'rotate-180': open2 }" class="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z" />
                                    </svg>
                                </button>
                            </h1>






                            <Collapse :when="open2">

                            <div  v-if="order.transaction != null"
                             class="pt-4">
                                <p class="text-base text-gray-600 dark:text-gray-300">Numéro de transaction :
                                    <span class="text-lg font-bold">#{{ order.transaction.transaction_numero }}</span>

                                </p>
                                <p class="text-base text-gray-600 dark:text-gray-300">Méthode de paiement :








                                    <span>••• {{ order.transaction.payment_method['last4'] }}</span>

                                </p>
                                <div class="flex gap-4">
                                    <div class="">
                                        <p class="text-base text-gray-600 dark:text-gray-300">Montant payé :

                                            <span class="p-2 text-xl font-extrabold text-green-400 rounded">
                                                {{ order.transaction.amount }} $
                                            </span>
                                        </p>

                                    </div>



                                </div>
                                <div class="p-2">

                                     <Link :href="route('user.transactions.one', [order.transaction.transaction_numero])">
                                        <span><i class="pi pi-eye"></i></span>
                                    </Link>


                                </div>


                            </div>


                            <div v-else>
                                <p class="text-sm text-gray-600 dark:text-gray-300">Numéro de transaction :
                                    Pas de transaction en cours</p>



                            </div>
                            </Collapse>



                        </div>
                    </div>


             </div>


        </div>

         <Dialog v-model:visible="visible"
                position="'bottom'"
                 modal
                  header="Feedback"
                  :style="{ width: '50rem' }"
                  :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
                  >
                 <div class="flex flex-col w-full mt-8">
                     <div>
                        <textarea v-model="form.description" id="message" placeholder="Message" rows="4"
                                                 class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus:  focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500">

                                            </textarea>

                      </div>
                      <div class="flex gap-4 mt-4">
                        <Button @click="envoyerFeddback" label="Envoyer" outlined  />
                        <Button severity="danger" outlined @click="visible =!visible" label="Annuler"  />
                      </div>
                 </div>

            </Dialog>

          <Dialog v-model:visible="debloquer"
                    position="'bottom'"
                     modal
                      header="Confirmer Comannde Finis"
                      :style="{ width: '50rem' }"
                      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
                      >
                     <div class="flex flex-col w-full mt-4">
                         <div>
                            <div>
                                <div class="flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100">Confirmez la réception de votre commande</div>
                                <div class="px-4 mt-4 text-lg text-gray-700 dark:text-gray-50">
                                    En confirmant la réception,
                                     vous attestez que la commande a été
                                     réalisée à votre satisfaction.
                                      Cela permettra au freelance de
                                      recevoir son paiement. Êtes-vous prêt à
                                      procéder?
                                    </div>



                            </div>
                          </div>
                          <div class="flex items-center justify-center gap-4 mt-4">

                            <Button @click="debloquerPaiement" outlined severity="success" label="Oui, je confirme"/>
                          </div>
                     </div>

        </Dialog>



    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';
//import DataTable from 'primevue/datatable';
//import Column from 'primevue/column';
//import ColumnGroup from 'primevue/columngroup';   // optional
//import Row from 'primevue/row';

//import Paginator from 'primevue/paginator';

import ProgressBar from 'primevue/progressbar';


//import Button from 'primevue/button';
import {computed ,ref} from 'vue';
import { Link , useForm } from '@inertiajs/vue3';
import { useToast } from "primevue/usetoast";

const toast = useToast();


const props = defineProps({
    commande: Object
});

const open2 = ref(false);

const order = computed(()=>props.commande.data);

const open = ref(false);

const debloquer =ref(false);


const form = useForm({
    description : props.commande.data.feedback.commentaires,
    rating: props.commande.data.feedback.satisfactions,
    feedback_id : props.commande.data.feedback.id,
});


const paiement=useForm({
    order_id: props.commande.data.id,
})

const contact = useForm({
    freelance_user_id: props.commande.data.freelance_user.id,
    freelance_id: props.commande.data.freelance.id,
    message:'',
    order: props.commande.data.id,
});



const contacterUser=()=>{

    contact.post(route('user.paiements.contacterUser'));
}




const visible = ref(false);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}



const envoyerFeddback=()=>{


    form.post(route('user.commandes.sendFeeback'),{
        preserveScroll:true,
        onFinish:()=>{
            visible.value=false;
        },
        onError :(error)=>{

             toast.add({ severity: 'danger', summary: 'Message', detail: error.message, group: 'br', life: 3000 });
            //alert(error.message);
        }

    })

}

const debloquerPaiement = ()=>{


    paiement.post(route('user.paiements.debloquerPaiement'),{

        onSuccess:()=>{

            debloquer.value=false;
             //alert('tres bien');
              toast.add({ severity: 'info', summary: 'Message', detail: 'Paiement debloquer avec success', group: 'br', life: 3000 });

        },
        onError:(error)=>{
             toast.add({ severity: 'danger', summary: 'Message', detail: error.message, group: 'br', life: 3000 });
            //alert(error.message);


        }

    })

}


defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

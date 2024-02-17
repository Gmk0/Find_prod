


<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

       <BreadUser
            title="Mission Gestion"
            first_title="Mission"
            :first_url="route('user.missions')"
            second_title="Gestion"


            />




        <div>

              <section class="px-2 px-4 py-6 dark:text-gray-400">



                <div class="max-w-6xl mx-auto">

                    <!-- Titre de la section -->

                    <!-- Contenu de la section -->
                    <div class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <!-- Informations sur la commande -->
                        <div class="grid grid-cols-1 px-6 py-4 font-bega-light lg:grid-cols-2">

                            <p class="mb-4 text-lg text-gray-800 md:mb-2 dark:text-gray-300">Mission : <span>
                                    {{ missionResponse.mission.title }}</span> </p>
                            <p class="mb-4 text-base text-gray-600 dark:text-gray-300 md:mb-2">Date de creation :
                                <span>{{ missionResponse.mission.created_at }}</span>
                            </p>
                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Debut :
                                Du {{ missionResponse.mission.begin_mission }}

                            </p>
                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Fin  :

                                    {{ missionResponse.mission.end_mission }}
                                </p>

                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Budjet :
                                <span class="text-lg font-bega-semibold text-amber-600 ">{{ missionResponse.budget }}$</span>



                            </p>
                            <p class="hidden mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Proposition :
                                <span class="font-bega-semibold">{{ missionResponse.budget }}$</span>



                            </p>
                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement :



                                <span v-if="missionResponse.mission.is_paid !=null"
                                    class="bg-green-100 text-green-800 text-xs font-bega-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Payer</span>


                                <span v-else
                                    class="bg-blue-100 text-blue-800 text-xs font-bega-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">en
                                    Attente</span>



                            </p>

                            <p v-if="missionResponse.is_paid != null"
                             class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement Debloquer :

                                <span
                                    class="bg-green-100 text-green-800 text-xs font-bega-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Paiement veser</span>
                            </p>


                            <p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Avancement :


                                <span v-if="missionResponse.feedbackmission.etat==='En attente de traitement'" class="text-red-300 px-1.5 py-0.5 rounded-lg ">En attente de traitement</span>

                                <span v-else-if="missionResponse.feedbackmission.etat==='Livré'" class="text-green-500 px-1.5 py-0.5 rounded-lg ">Livré</span>


                                <span v-else-if="missionResponse.feedbackmission.etat==='En cours de préparation'" class="text-blue-400 px-1.5 py-0.5 rounded-lg ">En cours de préparation</span>

                                <span v-else class="bg-red-500 px-1.5 py-0.5 rounded-lg ">En transit</span>





                            </p>
                        </div>

                        <!-- Avancement de la commande -->
                        <div class="px-6 py-4 bprojet-t bprojet-gray-200">
                            <p class="mb-2 text-lg text-gray-800">Avancement</p>
                            <div class="flex items-center">

                                     <div class="flex-1">
                                    <ProgressBar :value="missionResponse.mission.progress" class="dark:!bg-gray-700"></ProgressBar>

                                </div>
                                <p class="ml-2 text-sm text-gray-600 dark:text-gray-300">{{ missionResponse.mission.progress }}%</p>
                            </div>
                        </div>

                        <!-- Freelance lié à la commande -->
                        <div class="px-6 py-4 bprojet-t bprojet-gray-300">

                            <h1 class="flex items-start gap-2 text-lg cursor-pointer font-bega-semibold lg:text-xl">
                                Freelance lié

                            </h1>
                            <div class="flex items-center mt-4">

                                <Photo :user="missionResponse.freelance_user" taille="20" />
                                <div class="ml-4">
                                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ missionResponse.freelance_user.name }}
                                    </p>
                                    <p class="hidden text-sm text-gray-600 dark:text-gray-300">
                                        {{ missionResponse.freelance_user.email }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="mx-4">
                            <div v-if="missionResponse.rapports != null"  class="relative mb-3">
                                <h6 class="mb-0">
                                    <button @click="open = !open"
                                        class="relative flex items-center w-full p-4 text-base font-semibold text-left text-gray-600 transition-all ease-in border-b border-solid cursor-pointer border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                        data-collapse-target="animated-collapse-1">
                                        <span>Rapport Envoyer</span>
                                        <i :class="open ? 'rotate-180 transition-transform' : ''"
                                            class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                                    </button>
                                </h6>
                                <div x-show="open" x-collapse class="overflow-hidden transition-all duration-300 ease-in-out ">
                                    <div v-if="missionResponse.rapports !=null" class="p-4 text-sm leading-normal">



                                        <div v-for="rapport in missionResponse.rapports">
                                            <div class="text-base text-gray-600 dark:text-gray-300">
                                                {{ rapport.description }}
                                            </div>
                                            <Span class="mt-4 text-sm text-gray-500"></Span>

                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="px-6 py-4 bprojet-t bprojet-gray-200">
                            <p class="mb-2 text-lg text-gray-800">Options supplémentaires</p>
                            <div class="flex flex-col gap-2">

                                <div class="flex gap-2 lg:flex-row">

                                    <div  class="">

                                    <Button outlined @click="contacter()"  label="Contacter" />
                                    </div>

                                    <div v-if="missionResponse.mission.is_paid ==null"  class="lg:w-full">

                                        <Link :href="route('user.missions.missionPaiement',[missionResponse.mission.mission_numero, missionResponse.response_numero])">

                                        <Button outlined  label="Proceder au paiement" />
                                        </Link>
                                    </div>

                                    <div class="hidden lg:w-1/2">
                                          <Button outlined  label="Evaluer" />

                                    </div>

                                    <div v-if="missionResponse.mission.is_paid != null && missionResponse.feedbackmission.etat==='Livré' && missionResponse.is_paid==null"  class="lg:w-1/2">
                                         <Button outlined @click="missionDebloquer=true"  severity="success" label="Debloquer Paiement" />

                                    </div>

                                    <div class="lg:w-full">

                                    </div>


                                </div>



                            </div>

                        </div>



                         <div>
                            <div  class="px-6 py-4 border-t border-gray-200">

                                <h1 class="flex items-start gap-2 text-xl cursor-pointer font-bega-semibold">
                                    Transaction de paiement liée
                                    <button @click="open2= !open2">
                                        <svg :class="{ 'rotate-180': open2 }" class="w-6 h-6 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z" />
                                        </svg>
                                    </button>
                                </h1>






                                <Collapse :when="open2">

                                <div  v-if="missionResponse.transaction != null"
                                 class="pt-4">
                                    <p class="text-base text-gray-600 dark:text-gray-300">Numéro de transaction :
                                        <span class="text-lg font-bega-semibold">#{{ missionResponse.transaction.transaction_numero }}</span>

                                    </p>
                                    <p class="text-base text-gray-600 dark:text-gray-300">Méthode de paiement :








                                        <span>••• {{ missionResponse.transaction.payment_method['last4'] }}</span>

                                    </p>
                                    <div class="flex gap-4">
                                        <div class="">
                                            <p class="text-base text-gray-600 dark:text-gray-300">Montant payé :

                                                <span class="p-2 text-xl text-green-400 rounded font-bega-semibolde">
                                                    {{ missionResponse.transaction.amount }} $
                                                </span>
                                            </p>

                                        </div>



                                    </div>
                                    <div class="flex flex-col gap-4 p-2">

                                         <Link :href="route('user.transactions.one', [missionResponse.transaction.transaction_numero])">

                                             <Button size="small" outlined severity="success"  label="voir la transaction" />
                                        </Link>
                                        <div v-if="missionResponse.transaction.status==='pending'">
                                            <Button size="small" outlined label="verifier l'etat" @click="verification()" />
                                        </div>


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








            </section>






        </div>

        <Dialog v-model:visible="missionDebloquer" position="'bottom'" modal header="Confirmer Comannde Finis"
            :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="flex flex-col w-full mt-4">
                <div>
                    <div>
                        <div class="flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100">
                            Confirmez la réception de votre commande</div>
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

                    <Button @click="debloquerPaiement" outlined severity="success" label="Oui, je confirme" />
                </div>
            </div>

        </Dialog>



    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';
import { Link, useForm, router } from '@inertiajs/vue3';

import { computed, ref,inject } from 'vue';

const swal=inject('$swal');

const props = defineProps({
    missionResponse: Object,
})



const missionResponse = computed(() => props.missionResponse.data);

const showMore = ref(false);
const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
}

const mission = ref(false);

const form = useForm({
    responce_id: null,
})

const missionDebloquer=ref(false);


const open2 = ref(false);

const open =ref(false);

const contact = useForm({
    freelance_user_id: props.missionResponse.data.freelance_user.id,
    freelance_id: props.missionResponse.data.freelance.id,
    message: '',
    mission_id: props.missionResponse.data.mission_id,
});



const contacter = () => {

    contact.post(route('user.missions.contacterUser'));
}


const debloquerPaiement=()=>{

    router.post(route('debloquerPaiementMission'),{
        mission_id: props.missionResponse.data.mission_id,
        mission_response_id:props.missionResponse.data.id,
    }),{
        onSuccess:()=>{
            missionDebloquer.value=false;

            swal.fire({
                title: 'Success',
                icon: "success",
                text: 'Deblocage effectuer avec succees',
                // position: 'top-end',
                timerProgressBar: true,
            });

        },
        onError :(error)=>{
             swal.fire({
                title: 'une erreur s\'est produite',
                icon: "error",
                text: error.message,
                // position: 'top-end',
                timerProgressBar: true,
            });

        }
    };
    missionDebloquer.value=false;

}


const verification=()=>{

    router.post(route('checkoutStatusMission'),{
        order_id: props.missionResponse.data.transaction.transaction_numero
    },{
        onSuccess:()=>{
              swal.fire({
                title: 'Etat du paiement',
                icon: "success",
                text: 'Votre Paiement a éte effectuer avec succees',
                // position: 'top-end',
                timerProgressBar: true,
            });
        },
        onError:(error)=>{
              swal.fire({
                title: 'une erreur s\'est produite',
                icon: "error",
                text: 'votre paimeent n\'a pas aboutie',
                // position: 'top-end',
                timerProgressBar: true,
            });

        }
    })
}


defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

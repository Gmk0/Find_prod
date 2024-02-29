


<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">



        <BreadUser
                title="Mission Paiement"
                first_title="Mission"
                :first_url="route('user.missions')"
                second_title="Paiement"


                />



        <div>
             <div>
                <Error />

            </div>



    <div class="min-h-screen rounded-lg lg:max-w-6xl lg:mx-auto">
        <div x-data="">
            <div>
                <div class="flex flex-col items-center py-4 bg-white border-b dark:bg-gray-800 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                    <a href="#" class="text-2xl text-gray-800 font-bega-semibold dark:text-gray-50">Paiement</a>
                    <div class="py-2 mt-4 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                        <div class="relative mx-2">
                            <ul class="relative flex items-center justify-between w-full space-x-2 sm:space-x-4">
                                <li @click="stepP = 1"
                                    class="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a :class="{ 'ring ring-gray-600 ring-offset-2 bg-gray-600 dark:text-gray-100': stepP == 1 }"
                                        class="flex items-center justify-center w-6 h-6 text-xs text-white bg-gray-400 rounded-full font-bega-semibold "
                                        href="#">1</a>
                                    <span class="text-gray-800 font-bega-semibold dark:text-gray-50">Info</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <li @click="stepP = 2"
                                    class="flex items-center space-x-3 text-left cursor-pointer sm:space-x-4">
                                    <a :class="{ 'ring ring-gray-600 ring-offset-2 dark:text-gray-100 bg-gray-600': stepP == 2 }"
                                        class="flex items-center justify-center w-6 h-6 text-xs text-white bg-gray-400 rounded-full font-bega-semibold"
                                        href="#">2</a>
                                    <span class="text-gray-800 font-bega-semibold dark:text-gray-50">Mission</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <li @click="stepP = 3"
                                    class="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a :class="{ 'ring ring-gray-600  dark:text-gray-100 ring-offset-2 bg-gray-600': stepP == 3 }"
                                        class="flex items-center justify-center w-6 h-6 text-xs text-white bg-gray-400 rounded-full font-bega-semibold"
                                        href="#">3</a>
                                    <span class="text-gray-800 font-bega-semibold dark:text-gray-50">Paiement</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <section v-if="stepP == 1" class="py-8 bg-gray-100 dark:bg-gray-800">
                <div class="container mx-auto">
                    <div class="max-w-6xl mx-auto">
                        <h2 class="mb-4 text-3xl text-center font-bega-semibold">Paiement pour la mission
                        </h2>

                        <div class="p-8 text-base text-gray-700 rounded-lg font-bega-light dark:text-gray-200">
                            <p class="text-lg text-gray-700 dark:text-gray-200">
                                Cher client,<br>
                                Nous souhaitons vous informer qu'il est maintenant temps de procéder au paiement pour votre
                                mission
                                auprès du freelance. Nous apprécions votre confiance en notre plateforme de mise en relation
                                et
                                nous
                                sommes impatients de vo-us voir progresser avec succès dans votre projet.<br><br>

                                Avant de passer au paiement, nous aimerions vous rappeler quelques points importants :
                            <ul class="pl-4 text-gray-700 list-disc list-inside dark:text-gray-200">
                                <li>Vérifiez les détails de la mission</li>
                                <li>Établissez un accord clair</li>
                                <li>Assurez-vous de disposer des fonds nécessaires</li>
                                <li>Suivez les instructions de paiement</li>
                                <li>Communiquez avec le freelance</li>
                            </ul>

                            Nous vous remercions de votre confiance et de votre collaboration. Nous sommes là pour vous
                            soutenir
                            tout au long de votre projet et nous espérons que vous serez pleinement satisfait des résultats
                            obtenus
                            avec l'aide du freelance.<br><br>

                            Si vous avez des questions supplémentaires ou avez besoin d'assistance, n'hésitez pas à nous
                            contacter.
                            Nous sommes là pour vous aider.<br><br>

                            Nous vous souhaitons le meilleur dans votre mission et nous sommes impatients de voir les
                            résultats
                            exceptionnels que vous obtiendrez avec l'aide du freelance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div v-if="stepP == 2" class="py-8 bg-gray-100 dark:bg-gray-800">

                <div class="rounded-lg">
                    <section class="py-8 dark:bg-gray-800">
                        <div class="px-4 max-w-7xl lg:mx-auto sm:px-2 lg:px-8">
                            <div class="rounded-lg ">
                                <div class="p-3 lg:p-6 dark:text-gray-200">
                                    <h2 class="mb-4 text-2xl text-gray-800 font-bega-semibold dark:text-gray-50">Récapitulation de la mission</h2>
                                    <!-- Informations de la mission -->
                                    <p class="mb-2 text-base font-bega-medium"> Titre :
                                        <span class="text-base font-bega-semibold">

                                        {{ missionResponse.mission.title }}</span>

                                    </p>
                                    <p class="mb-2 text-base font-bega-medium">Description : <span class="text-base font-bega-semibold">
                                        {{ missionResponse.mission.description }}
                                    </span>
                                        </p>
                                    <p class="mb-2">
                                        <span class="font-bega-semibold">Budget :

                                        </span>
                                        <span class="text-lg font-bega-semibold text-amber-600">    {{ missionResponse.mission.budget }} $</span>
                                     </p>


                                    <p class="mb-4 text-base font-bega-medium md:mb-2">Délai
                                        d'echance :
                                        Du {{ missionResponse.mission.begin_mission }} au
                                        {{ missionResponse.mission.end_mission }}
                                    </p>
                                    <!-- Proposition acceptée -->
                                    <h2 class="mt-8 mb-4 text-2xl font-bega-semibold">Proposition acceptée</h2>
                                    <div class="p-4 bg-blue-100 rounded-lg dark:bg-gray-900">
                                        <p class="text-base text-gray-800 font-bega-semibold dark:text-gray-50">{{ missionResponse.freelance_user.name }} /
                                            {{  missionResponse.freelance_user.email }}</p>


                                        <p class="mb-2">Budget proposer : <span class="text-lg font-bega-semibold text-amber-600"> {{ missionResponse.budget }} $</span>

                                         </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </div>

            <div v-if="stepP == 3"
                class="p-3 py-8 bg-gray-100 dark:bg-gray-800">

                <div class="mb-4">
                    <a href="#" class="mb-4 text-2xl text-center text-gray-800 font-bega-semibold">Methode de Paiment</a>
                </div>

                <div class="flex flex-col gap-2 lg:flex-row">
                    <div class="hidden w-full p-4 mb-4 bg-white border border-gray-200 rounded-md font-bega-semibold dark:bg-gray-900">
                        <div class="grid hidden grid-cols-1 gap-4">
                            <h1>Address de Facturation / Livraison</h1>





                        </div>


                    </div>

                    <div
                        class="w-full mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900">


                        <div class="w-full p-6 border-b border-gray-200">
                            <div class="mb-5">
                                <label for="type2" class="flex items-center cursor-pointer">





                                </label>
                            </div>

                            <div>

                            <PaiementC :solde="missionResponse.budget"
                            route="Mission"
                            :response="missionResponse.id" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="flex justify-between mt-4">
                <div>

                      <MazBtn color="success" v-if="stepP != 1"  @click="stepP--">
                                Retour
                        </MazBtn>
                </div>


                <div>
                <MazBtn v-if="stepP !=3" @click="stepP++">
                        Suivant
                </MazBtn>
                </div>
            </div>

        </div>




    </div>

        </div>

        <Dialog v-model:visible="mission" position="'bottom'" modal header="Confirmer Comannde Finis"
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

                    <Button @click="debloquerPaiement" severity="success" label="Oui, je confirme" />
                </div>
            </div>

        </Dialog>



    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';
import { Link, useForm, router } from '@inertiajs/vue3';

import { computed, ref } from 'vue';

import PaiementC from '@/Components/PaiementC.vue';

import MazBtn from 'maz-ui/components/MazBtn'


const props = defineProps({
    missionResponse: Object,
    userSetting :Object,
});


const stepP =ref(1);





const missionResponse = computed(() => props.missionResponse.data);

const showMore = ref(false);
const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
}

const mission = ref(false);

const form = useForm({
    responce_id: null,
})


const open2 = ref(false);

const open = ref(false);

const paiement = useForm({
    numero :'',
    nom:'',
    montant : props.missionResponse.data.budget,
    response : props.missionResponse.data.id,
    adresse: props.userSetting.addresse_facturation?.adresse,
    commune: props.userSetting.addresse_facturation?.commune,
    ville: props.userSetting.addresse_facturation?.ville,
    pays: props.userSetting.addresse_facturation?.pays,

});
const checkoutMaxi =()=>{

    paiement.post(route('user.missions.missionPaiementMaxi'),{

        onError :(error)=>{
        }
    })

}


const selectedProvider = ref('');

const provider = [
    {
        value: "10",
        label: "Orange Money",
        areaName: "orange",
        areaEnsignUrl: "https://www.jordanfinancialservices.com/2021/sites/default/files/images/logos/orange_money-01.jpg",
    },
    {
        value: "9",
        label: "Vodacom Mpesa",
        areaName: "Vodacom",
        areaEnsignUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtTAhz7LJHKfRf5ZGowNS3ZKJH_X_26iPUv3wzBkcug&s",
    },
    {
        value: "17",
        label: "airtel Money",
        areaName: "airtel",
        areaEnsignUrl: "https://zoom-eco.net/wp-content/uploads/2021/02/15.png",
    },


]







defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

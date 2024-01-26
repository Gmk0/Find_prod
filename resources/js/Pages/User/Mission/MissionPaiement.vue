


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

            <h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">Paiement</h1>

        </div>




        <div>
             <div>
                <Error />

            </div>



    <div class="min-h-screen rounded-lg lg:max-w-6xl lg:mx-auto">
        <div x-data="">
            <div>
                <div class="flex flex-col items-center py-4 bg-white border-b dark:bg-gray-800 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                    <a href="#" class="text-2xl font-bold text-gray-800 dark:text-gray-50">Paiment</a>
                    <div class="py-2 mt-4 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                        <div class="relative mx-2">
                            <ul class="relative flex items-center justify-between w-full space-x-2 sm:space-x-4">
                                <li @click="stepP = 1"
                                    class="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a :class="{ 'ring ring-gray-600 ring-offset-2 bg-gray-600 dark:text-gray-100': stepP == 1 }"
                                        class="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full "
                                        href="#">1</a>
                                    <span class="font-semibold text-gray-800 dark:text-gray-50">Info</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <li @click="stepP = 2"
                                    class="flex items-center space-x-3 text-left cursor-pointer sm:space-x-4">
                                    <a :class="{ 'ring ring-gray-600 ring-offset-2 dark:text-gray-100 bg-gray-600': stepP == 2 }"
                                        class="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"
                                        href="#">2</a>
                                    <span class="font-semibold text-gray-800 dark:text-gray-50">Mission</span>
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                <li @click="stepP = 3"
                                    class="flex items-center space-x-3 text-left sm:space-x-4">
                                    <a :class="{ 'ring ring-gray-600  dark:text-gray-100 ring-offset-2 bg-gray-600': stepP == 3 }"
                                        class="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"
                                        href="#">3</a>
                                    <span class="font-semibold text-gray-800 dark:text-gray-50">Paiement</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <section v-if="stepP == 1" class="py-8 bg-gray-100 dark:bg-gray-800">
                <div class="container mx-auto">
                    <div class="max-w-6xl mx-auto">
                        <h2 class="mb-4 text-3xl font-bold text-center">Paiement pour la mission
                        </h2>

                        <div class="p-8 text-gray-700 rounded-lg dark:text-gray-200">
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
                                <div class="p-3 lg:p-6">
                                    <h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-50">Récapitulation de la mission</h2>
                                    <!-- Informations de la mission -->
                                    <p class="mb-2 text-base font-medium"> Titre :
                                        <span class="text-base font-semibold">

                                        {{ missionResponse.mission.title }}</span>

                                    </p>
                                    <p class="mb-2 text-base font-medium">Description : <span class="text-base font-semibold">
                                        {{ missionResponse.mission.description }}
                                    </span>
                                        </p>
                                    <p class="mb-2">
                                        <span class="font-semibold">Budget :

                                        </span>
                                        <span class="text-lg font-bold text-amber-600">    {{ missionResponse.mission.budget }} $</span>
                                     </p>


                                    <p class="mb-4 text-base font-medium text-gray-600 md:mb-2 dark:text-gray-300">Délai
                                        d'echance :
                                        Du {{ missionResponse.mission.begin_mission }} au
                                        {{ missionResponse.mission.end_mission }}
                                    </p>
                                    <!-- Proposition acceptée -->
                                    <h2 class="mt-8 mb-4 text-2xl font-bold">Proposition acceptée</h2>
                                    <div class="p-4 bg-blue-100 rounded-lg dark:bg-gray-900">
                                        <p class="text-base font-semibold text-gray-800 dark:text-gray-50">{{ missionResponse.freelance_user.name }} /
                                            {{  missionResponse.freelance_user.email }}</p>


                                        <p class="mb-2">Budget proposer : <span class="text-lg font-bold text-amber-600"> {{ missionResponse.budget }} $</span>

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
                    <a href="#" class="mb-4 text-2xl font-bold text-center text-gray-800">Methode de Paiment</a>
                </div>

                <div class="flex flex-col gap-2 lg:flex-row">
                    <div class="w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900">
                        <div class="grid grid-cols-1 gap-4">
                            <h1>Address de Facturation / Livraison</h1>


                                                <InputText v-model="paiement.adresse" placeholder="Addresse" />
                                                 <InputError :message="paiement.errors.adresse" />
                                                <InputText v-model="paiement.commune" placeholder="commune" />
                                                  <InputError :message="paiement.errors.commune" />
                                                <InputText  v-model="paiement.ville" placeholder="ville"/>
                                                  <InputError :message="paiement.errors.ville" />
                                                <InputText v-model="paiement.pays" placeholder="Pays"/>
                                                  <InputError :message="paiement.errors.pays" />


                        </div>


                    </div>

                    <div
                        class="w-full mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900">
                        <div class="hidden w-full p-3 border-b border-gray-200 ">
                            <div class="mb-5">
                                <label for="type1" class="flex items-center cursor-pointer">
                                    <input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type1"
                                        x-model="isCard" @click="isOther = false">
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                        class="h-6 ml-3">
                                </label>
                            </div>
                        <div x-collapse class="px-2" x-cloak x-show="isCard">




                            <div class="mt-4">

                                <button wire:click="pay()" wire:loading.attr='disabled'
                                    class=" block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle
                                                                                                                                                                                    font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all
                                                                                                                                                                                   hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none
                                                                                active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50
                                                                                                                                                                                    disabled:shadow-none"
                                    data-ripple-light="true">
                                    <span wire:loading.remove>PAYER
                                        (450)</span>
                                    <span wire:loading wire:target='pay'>PAIEMENT...</span>
                                </button>

                            </div>

                        </div>

                        </div>

                        <div class="w-full p-6 border-b border-gray-200">
                            <div class="mb-5">
                                <label for="type2" class="flex items-center cursor-pointer">


                                    <img src="/images/icon/maxicash.png" class="h-6 ml-3">


                                </label>
                            </div>

                            <div x-collapse x-cloak x-show="isOther">

                            <form @submit.prevent="checkoutMaxi">

                                                      <div class="grid grid-cols-1 gap-4 px-4 mb-4">
                                                        <InputText required v-model="paiement.nom" placeholder="Nom"   class="rounded-md"  />
                                                             <InputText v-model="paiement.numero" placeholder="Telephone"  required class="rounded-md" />

                                                             <InputError :message="paiement.errors.numero" />

                                                      </div>




                                    <button
                                        class=" block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle
                                                                                                                                                font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all
                                                                                                                                                hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none
                                                                                                                                                active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50
                                                                                                                                                disabled:shadow-none" data-ripple-light="true">
                                        <span>PAYER
                                            ({{ missionResponse.budget }}) $</span>

                                    </button>

                                </form>

                            </div>
                        </div>
                    </div>
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








defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

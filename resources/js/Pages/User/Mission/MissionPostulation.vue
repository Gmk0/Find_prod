


<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 bg-green-400 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

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
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission</span>
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

            <h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">Proposition</h1>

        </div>




        <div>


            <div class="grid gap-4 mt-4">


                    <div v-for="proposition in missionResponce">
                        <div
                        :class="{'boder boder-red-600' : proposition.status === 'rejected','border border-green-400': proposition.status === 'approved' }"
                        class="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 min-w-48">
                            <div class="flex flex-col items-center justify-center">
                               <Photo :user="proposition.freelance_user" :taille="'20'" />
                               <div class="mt-3 mb-2 text-gray-600">
                                    <Link href="">
                                         <span class="text-base text-gray-700 dark:text-gray-200">{{ proposition.freelance_user.name }}</span>
                                    </Link>
                                </div>
                            </div>
                            <div class="mt-2 mb-2 text-lg font-semibold">Proposition du Freelance</div>


                            <div class="mb-2 text-gray-600 dark:text-gray-300">Tarif : <span
                                    class="text-gray-700 dark:text-gray-200">{{ proposition.budget }} $</span></div>
                            <div class="mt-4 text-gray-600 dark:text-gray-300">Description</div>
                            <div v-html="proposition.content" class="prose text-gray-700 dark:text-gray-200">

                            </div>


                            <div v-if="proposition.status ==='approved'" class="flex flex-grow gap-4 py-4 ">
                                <div class="p-2">
                                    <h1 class="font-bold text-gray-600 dark:text-gray-300">Vous avez accepter cette proposition </h1>
                                </div>
                                <div>

                                    <Link :href="route('user.missions.missionGestion',[proposition.mission.mission_numero ,proposition.response_numero])">
                                          <Button size="small" outlined severity="info" label="evolution" />
                                    </Link>

                                </div>

                            </div>



                            <div v-else class="flex gap-4 py-4 bg-gray-200 dark:bg-gray-800">


                                <div class="flex gap-4">
                                    <Button size="small" @click="accepter(proposition.id)" outlined="" label="Accepter" />
                                      <Button size="small"  @click="refuser((proposition.id))" outlined severity="danger" label="Decliner" />


                                </div>


                            <div>

                            </div>




                            </div>


                        </div>
                    </div>



                    <div v-if="missionResponce.length ===0" class="text-lg text-gray-800 dark:text-gray-300">
                       Vous n'avez aucune proposition pour cette mission
                    </div>



                </div>



        </div>

          <Dialog v-model:visible="mission"
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

                                <Button @click="debloquerPaiement" severity="success" label="Oui, je confirme"/>
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
    missionResponces : Array,
})



const missionResponce = computed(() => props.missionResponces.data);

const showMore = ref(false);
const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
}

const mission =ref(false);

const form = useForm({
    responce_id:null,
})


const accepter =(responce_id)=>{





         router.post(route('accepterMission'),{
            responce_id: responce_id,

         }, {

            onSuccess: () => {
                form.reset();
                alert('ok');

            },
            onError: (error) => {
                alert(error.message);
                 form.reset();
            }
        })




}

const refuser =(responce_id)=>{

     form.responce_id = responce_id;

    if (form.responce_id != null) {

        form.post(route('refuserMission'), {

            onSuccess: () => {
                 form.reset();

            },
            onError: (error) => {
                alert(error.message),
                 form.reset();s
            }
        })
    }

};


defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

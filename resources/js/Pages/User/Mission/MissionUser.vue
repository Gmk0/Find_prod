


<template>

  <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">


                <BreadUser
                title="Mission"
                first_title="Mission"
                :first_url="route('user.missions')"


                />



        <div>



               <div  class="grid grid-cols-1 gap-4 mx-auto ">
                <div v-for="mission in missions"
                :class="{'border border-blue-500' : mission.status =='pending', 'border border-green-500': mission.status != 'pending' }"
                class="flex flex-col mb-4 card md:flex-row">
                    <img class="object-cover object-center w-full h-48 bg-center bg-cover rounded-t-lg shrink-0 lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
                        src="/images/illustrations/missionF.svg" alt="image" />
                    <div class="flex flex-col w-full px-4 py-3 grow sm:px-5">
                        <div class="flex items-center justify-between">
                            <a class="text-xs+ text-info" href="#">
                                {{ mission.category.name }}</a>
                            <div class="-mr-1.5 flex space-x-1">


                                <button
                                    class="hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </button>

                                <div class="p-2 text-lg text-amber-600">
                                     {{ mission.budget }} $

                                </div>
                            </div>
                        </div>
                        <div class="max-w-xs ">
                            <a href="{{route('PropostionProjet',[$projet->mission_numero])}}"
                                class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
                                {{ mission.title }}</a>
                        </div>
                        <p  class="max-w-xs mt-1 line-clamp-3">


                                <div class="max-w-xs break-words truncate lg:max-w-lg">

                                    {{ truncateText(mission.description,100) }}
                                </div>


                        </p>
                        <div class="grow">
                            <div class="flex items-center mt-2 text-xs">
                                <a href="#" class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100">
                                    <div class="w-12">

                                        <Photo :user="mission.user" taille="12" />

                                    </div>
                                    <span class="line-clamp-1">{{mission.user.name }}</span>
                                </a>
                                <div class="self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"></div>
                                <span class="shrink-0 text-slate-400 dark:text-navy-300">
                                    {{ mission.created_at}}
                                </span>
                            </div>
                        </div>

                        <div class="flex justify-end gap-4 mt-1">

                            <div v-if="mission.status =='completed'">
                                <Button size="small" outlined severity="success" label="Mission terminer" />

                            </div>

                            <div v-else-if="mission.status =='active'">
                                <Link :href="route('user.missions.missionGestion',[mission.mission_numero,mission.missionApproved.response_numero])">
                                   <Button size="small"
                                   outlined severity="success"
                                   label="Evolution" />
                                </Link>

                            </div>



                            <div v-else-if="mission.status == 'pending'" class="flex gap-4 mt-4">

                                <Link :href="route('user.missions.candidature', mission.mission_numero)">
                                 <Button size="small"
                                       outlined severity="success"
                                       label="Proposition" :badge="mission.countMissionResponses" />
                                </Link>
                                       <Link :href="route('user.missionEdit', mission.mission_numero)">
                                         <Button  size="small"
                                           outlined severity="info"
                                           label="Modifier" />
                                    </Link>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="missions.length  === 0 " class="flex flex-col items-center justify-center col-span-2 text-xl font-bega-medium">
                <div class="flex flex-col gap-4 px-4 mx-4 text-gray-800 rounded-md lg:mx-12 dark:text-white dark:bg-gray-800 bg-gray-50">
                    <p>Si vous avez besoin d'un service particulier, n'hésitez pas à
                        soumettre
                        votre projet et
                        notre communauté de freelances
                        talentueux sera ravie de vous aider</p>
                    <div class="mx-auto md:w-1/4">


                        <Link :href="route('createProject')" class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-bega-medium text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">

                                      Soumettre
                        </Link>

                    </div>


                </div>

    </div>


    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';

import {computed, ref} from 'vue';


const props= defineProps({
    missions:Object,
})



const missions=computed(()=>props.missions.data);

const showMore = ref(false);
const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
}



defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

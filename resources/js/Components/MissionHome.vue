<template>
    <div v-if="getMissions.length > 0" class=" bg-findDark-50 lg:min-h-screen dark:bg-findDark-900">
                  <div class="max-w-6xl px-8 py-6 mx-auto md:px-6">
                        <!-- heading text -->
                        <div class="mb-10 text-center">
                            <span class="font-bega-medium text-amber-600">Mission</span>
                            <h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-findDark-200 sm:text-xl">Découvrez quelques missions</h1>

                        </div>

                          <div class="py-4 mx-2">

                            <div class="flex items-end justify-end mb-2">
                                <div class="flex gap-4">



                                    <button @click="navigate('prev')"
                                        class="w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button @click="navigate('next')"
                                        class="w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                            </div>



                         <swiper class="flex py-8 mb-4"
                            :modules="[Navigation, Pagination, Scrollbar, EffectCube, A11y]"

                            :spaceBetween="30"

                            :space-between="25"
                            :breakpoints="{ 300: { slidesPerView: 1 }, 900: { slidesPerView: 3, } }"
                            @swiper="onSwiperInitialized"
                            >
                            <swiper-slide v-for="mission in getMissions" class="p-2">

                            <div class="p-2 mb-4 rounded-md shadow-md min-h-[25rem] lg:flex-col">
                                <img class="object-cover object-center  rounded-md  w-full h-48 bg-center bg-cover shrink-0"
                                    src="/images/illustrations/missionF.svg" alt="image" />
                                <div class="flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5">
                                    <div class="flex items-center justify-between">
                                        <a class="text-xs+ font-medium text-info" href="#">
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

                                            <div class="p-2">

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p href="#"
                                            class="max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 ">
                                            {{ mission.title }}</p>
                                    </div>
                                    <p  class="mt-1 line-clamp-3">


                                            <div class="max-w-xs truncate font-bega-light">

                                                {{ truncateText(mission.description, 80) }}
                                            </div>






                                    </p>
                                    <div class="grow">
                                        <div class="flex items-center mt-2 text-xs">
                                            <a href="#" class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100">
                                                <div class="w-10 h-10 mb-2">

                                                    <Photo :user="mission.user" taille="10" />

                                                </div>
                                                <span class="line-clamp-1">{{ mission.user.name }}</span>
                                            </a>
                                            <div class="self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"></div>
                                            <span class="shrink-0 text-slate-400 dark:text-navy-300">
                                                {{ mission.created_at }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between gap-4 mt-1">

                                               <div class="flex items-center ">
                                                <h1 class="text-lg font-bega-semibold text-amber-600">{{ mission.budget }} $</h1>

                                            </div>



                                        <div v-if="mission.status == 'pending' && $page.props.auth.freelance"  class="flex gap-4 mt-4">


                                                   <a href="/freelance-gestion/missions">
                                                     <Button  size="small"
                                                       outlined severity="info"
                                                       label="Postuler" />
                                                   </a>


                                        </div>
                                           <div v-if="mission.status == 'pending' && !$page.props.auth.freelance && !$page.props.auth.user == null"  class="flex gap-4 mt-4">


                                                       <Link :href="route('register.begin')">
                                                         <Button  size="small"
                                                           outlined severity="info"
                                                           label="Etre prestaire pour postuler" />
                                                    </Link>


                                            </div>


                                        <div v-if="$page.props.auth.user == null" class="px-4">
                                            <Link :href="route('register')">
                                                  <Button size="small"
                                                   outlined severity="info"
                                                   label="postuler" />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            </swiper-slide>

                            </swiper>



                        </div>







                </div>

            </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useStore, useMissions, homeSetting } from '@/store/store';// Assurez-vous d'ajuster le chemin d'importation
import { onMounted } from 'vue';

import { Head, usePage } from '@inertiajs/vue3';
import { Collapse } from 'vue-collapsed';
import { ref, computed } from 'vue'
import { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y, EffectCube } from 'swiper/modules';



const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
}




const showMore = ref(false);


const missions = useMissions();
const getMissions = computed(() => missions.missionGeters);
const swiperInstance = ref(null);
const navigate = (direction) => {
    if (swiperInstance.value) {
        if (direction === 'prev') {
            swiperInstance.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstance.value.slideNext();
        }
    }
};

const onSwiperInitialized = (swiper) => {
    swiperInstance.value = swiper;
};

</script>

<style lang="scss" scoped>

</style>

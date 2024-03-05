





<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
 // Assurez-vous d'ajuster le chemin d'importation
import { onMounted, ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import {Link, router} from '@inertiajs/vue3';
import ServiceCard from '@/Components/ServiceCard.vue';

import { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Collapse } from 'vue-collapsed';




const props= defineProps({
    freelance:Object,
    services: Object,
    realisations : Array,
})

const freelance= computed(()=>props.freelance.data);

const services= computed(()=>props.services.data);



const contacter = () => {

    router.post(route('user.createChat'), {
        freelance_id: props.freelance.data.id,
    })


}


defineOptions({
    layout: WebLayout,

});

const swiperInstanceServices = ref(null);
const onSwiperInitializedService = (swiper) => {
    swiperInstanceServices.value = swiper;

}

const swiperInstanceRealisation =ref(null);

const onSwiperInstanceRealisation= (swiper) => {
    swiperInstanceRealisation.value = swiper;
};

const navigateService = (direction) => {
    if (swiperInstanceServices.value) {
        if (direction === 'prev') {
            swiperInstanceServices.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstanceServices.value.slideNext();
        }
    }
};

const navigateRealisation =(direction)=>{
     if (swiperInstanceRealisation.value) {
        if (direction === 'prev') {
            swiperInstanceRealisation.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstanceRealisation.value.slideNext();
        }
    }

}

const showMore = ref(false);

const truncateText =(text, length)=> {
    return text.length > length ? text.slice(0, length) + '...' : text;
}

const toggler=ref(false);

const images = ref([]);

const open=ref(false);
const open2 = ref(false);

const tab=ref('profile');

const toogleTab=(value)=>{
    tab.value = value;
}


props.realisations.forEach((realisation) => {
    // Assuming 'media' is the name of the array within the 'realisation' object
realisation.media.forEach((media) => {

    images.value.push(media.url);

});


});






</script>


<template>
     <div class="min-h-screen py-16 font-bega-light">
        <div class="flex flex-col border-t border-gray-400">
            <div>
                 <div class="px-4 mt-4">
                              <nav class="flex" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                                <li class="inline-flex items-center">
                                <Link href="/" class="inline-flex items-center text-sm text-gray-700 font-bega-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg>
                                    Acceuil
                                </Link>
                                </li>

                                <li >
                                <Link :href="route('find_freelance')" class="flex items-center">
                                    <svg class="w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span class="ml-1 text-sm text-gray-500 font-bega-medium md:ml-2 dark:text-gray-400">freelance</span>
                                </Link>
                                </li>
                                 <li aria-current="page">
                                    <div class="flex items-center">
                                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                        </svg>
                                        <span class="ml-1 text-sm text-gray-500 font-bega-medium md:ml-2 break-before-auto dark:text-gray-400">{{ freelance.slugUser }}</span>
                                    </div>
                                    </li>
                            </ol>
                            </nav>
                </div>
            </div>
            <div class="flex flex-col justify-between w-full px-6 pt-8 pb-8 border-b border-gray-300 lg:pt-12 lg:flex-row min-h-48">
                <div class="flex flex-col items-center gap-6 lg:flex-row">
                    <div>
                        <img v-if="freelance.user.profile_photo_path != null" class="h-auto rounded-lg w-52 lg:w-48"
                       :src="'/storage/' + freelance.user.profile_photo_path" />
                       <img v-else class="h-auto rounded-lg w-52 lg:w-48"
                           :src="freelance.user.profile_photo_url" />

                    </div>
                    <div class="flex flex-col items-center lg:items-start">
                        <div class="mb-4 lg:mb-0">

                            <div v-if="freelance.user.is_online" class="mx-auto lg:mx-0 px-2 w-[70%]">
                                 <p class="items-center px-2 py-1 text-center text-green-500 bg-green-100 lg:items-start text-md rounded-xl ">En ligne</p>

                            </div>

                            <p class="px-2 py-1 text-lg text-center lg:text-start text-skin-fill rounded-xl ">{{ freelance.category.name }}</p>
                            <p class="px-2 py-1 text-xl text-center text-gray-800 dark:text-gray-100 lg:text-start rounded-xl font-bega-medium"> {{ freelance.prenom }}
                                {{ freelance.nom }}</p>
                        </div>
                        <div class="flex flex-wrap gap-6 mt-4 ">
                             <div class="flex flex-wrap gap-3 px-2">
                            <template v-for="(subCategory, index) in freelance.subCategorie.slice(0, 3)" :key="subCategory.id">
                                            <span v-tooltip.top="subCategory.name"
                                                    class=" flex gap-2 p-2 transition-all transform rounded-lg shadow-sm bg-gray-50  items-center py-1 cursor-default px-3  text-[12px] lg:text-sm  border border-secondary-200   text-gray-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none">
                                                {{ subCategory.name }}
                                            </span>



                            </template>
                            <span v-if="props.freelance.data.subCategorie?.length > 4"
                                                class="ml-2 text-sm text-gray-500">
                                            (+{{ props.freelance.data.subCategorie.length - 4 }} de plus)
                            </span>

                            </div>

                            <p class="flex gap-1 py-1 text-base ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                <span>  {{ freelance.localisation['ville'] ?
                                    freelance.localisation['ville'] : '' }} ,{{ freelance.localisation['commune']? props.freelance.data.localisation['commune'] : ''  }}</span>

                            </p>

                            <p class="flex gap-1 py-1 text-base ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                <span>
                                    {{ freelance.taux_journalier }} $ / jour
                                </span>
                            </p>



                        </div>
                    </div>


                </div>

                <div class="flex gap-6 p-4 lg:items-center lg:justify-center py-auto">

                  <div class="w-full mt-8">
                        <button v-if="$page.props.auth.user" type="button" @click="contacter()"
                            class="block w-full select-none rounded-lg bg-skin-fill py-3 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true">
                            Contacter
                        </button >
                         <Link v-else :href="route('login')"
                                class="block w-full select-none rounded-lg bg-skin-fill py-3 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    data-ripple-light="true">
                                Connecter-vous
                    </Link>

                    </div>
                    </div>







            </div>

            <div class="min-h-screen pt-2 m-2 lg:flex lg:flex-row ">
                <div class="w-full min-h-screen lg:w-8/12">

                     <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm text-center font-bega-medium" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="me-2" role="presentation">
                    <button @click="toogleTab('profile')" :class="{'active-tab': tab ==='profile'}" class="inline-block p-4 text-lg border-b-2 rounded-t-lg font-bega-medium" id="profile-tab" data-tabs-target="#profile" type="button" role="tab"
                    aria-controls="profile" aria-selected="false">Resume</button>
                </li>
                <li class="me-2" role="presentation">
                    <button @click="toogleTab('portefolio')" :class="{ 'active-tab': tab === 'portefolio' }" class="inline-block p-4 text-lg border-b-2 rounded-t-lg font-bega-medium hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard">
                        Portefolio</button>
                </li>
                <li class="me-2" role="presentation">
                    <button @click="toogleTab('service')" :class="{ 'active-tab': tab === 'service' }" class="inline-block p-4 text-lg border-b-2 rounded-t-lg font-bega-medium hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab">Service</button>
                </li>

            </ul>
        </div>
        <div id="default-tab-content">
            <div  v-if="tab==='profile'" class="bg-white rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                <section class="rounded-md dark:bg-gray-800">
                    <div class="px-4 mx-auto mb-4 max-w-7xl">
                    <div class="max-w-5xl p-4 mx-auto">
                        <h2
                            class="my-4 text-lg text-gray-800 text-start font-bega-semibold md:text-xl dark:text-gray-200">
                            Apropos de Moi
                        </h2>

                        <div
                            class="max-w-4xl mb-4 text-base text-gray-700 break-words dark:text-gray-300">
                            <template v-if="true">
                                <p class="text-justify font-bega-light">
                                    {{ freelance.description }}
                                </p>

                            </template>
                            <template v-else>
                                <p></p>

                            </template>





                        </div>
                    </div>
                    </div>
                </section>
                <section v-if="freelance.diplome.length > 0" class="rounded-md dark:bg-gray-800">
                                            <div class="px-4 mx-auto mb-4 max-w-7xl">
                                            <div class="max-w-5xl p-4 mx-auto ">
                                                <h2
                                                    class="mt-4 mb-2 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200">
                                                    Education
                                                </h2>


                                                <div class="max-w-4xl px-4 py-4 mb-3 text-base text-gray-700 border-l border-gray-300 dark:text-gray-300">


                                                        <div v-for="(diplome, index) in freelance.diplome " class="flex flex-col gap-3 mb-3">
                                                            <div class="flex flex-wrap gap-3">

                                                                 <li class="px-2 text-base font-bega-medium">{{ diplome['diplome'] }}</li>
                                                                  <h2 class="flex gap-1 px-2 font-bega-medium">{{ diplome['universite'] }} / <span>{{ diplome['annee'] }}</span></h2>


                                                            </div>


                                                        </div>

                                                </div>
                                            </div>
                                         </div>
                    </section>
                <section v-if="freelance.certificat.length > 0" class="my-8 rounded-md dark:bg-gray-800">
                                            <div class="px-4 mx-auto mb-4 max-w-7xl">
                                            <div class="max-w-5xl p-4 mx-auto ">
                                                <h2
                                                    class="mt-4 mb-2 text-lg text-gray-800 text-start font-bega-semibold md:text-xl dark:text-gray-200">
                                                    Certification
                                                </h2>

                                                <div class="max-w-4xl px-4 py-4 mb-4 text-base text-gray-700 border-l border-gray-300 dark:text-gray-300">

                                                        <div v-for="(certificat, index) in freelance.certificat" class="flex flex-col gap-3 mb-3">
                                                            <div class="flex flex-wrap gap-3">
                                                                 <li class="px-2 text-base font-bega-medium">{{ certificat['certifier'] }}</li>
                                                                <h2 class="flex gap-1 px-2 font-bega-medium"> {{ certificat['delivrer'] }} /<span>{{ certificat['annee'] }}</span></h2>



                                                            </div>




                                                        </div>


                                                </div>
                                            </div>
                                         </div>
                </section>
                <section v-if="freelance.competences.length > 0" class="my-8 rounded-md dark:bg-gray-800">
                                                <div class="px-4 mx-auto mb-4 max-w-7xl">
                                                <div class="max-w-5xl p-4 mx-auto ">
                                                    <h2
                                                        class="mt-4 mb-2 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200">
                                                        Experience
                                                    </h2>

                                                    <div class="max-w-4xl px-6 mb-4 text-base text-gray-700 border-l border-gray-300 dark:text-gray-300">

                                                            <div v-for="(compt, index) in freelance.competences" class="flex flex-col gap-4 mb-3">
                                                                <div class="flex flex-wrap gap-4">
                                                                    <li class="px-2 text-base font-bega-medium">{{ compt.title }}</li>
                                                                    <h2 class="">{{ compt.level }}</h2>

                                                                </div>



                                                            </div>


                                                    </div>
                                                </div>
                                             </div>
                 </section>

                <section class="hidden rounded-md dark:bg-gray-800">
                                            <div class="px-4 mx-auto mb-4 max-w-7xl">
                                            <div class="max-w-5xl mx-auto ">
                                                <h2
                                                    class="my-4 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200">
                                                    Apropos de Moi
                                                </h2>

                                                <div
                                                    class="max-w-4xl mb-4 text-base text-gray-700 break-words dark:text-gray-300">





                                                </div>
                                            </div>
                                         </div>
                </section>



            </div>
            <div v-if="tab === 'portefolio'" class="p-4 bg-white rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                                    <section class="rounded-md ">
                                            <div class="max-w-5xl mx-auto ">
                                                    <h2 class="my-4 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200">Mes réalisations</h2>

                                            </div >


                                 <div v-if="props.realisations.length > 0" class="flex items-center justify-between">

                                    <div v-if="props.realisations.length > 0" class="mb-4">


                                        <FsLightbox
                                            :toggler="toggler"
                                            :sources="images" />

                                    </div>
                                    <div class="flex gap-4 p-2">

                                        <button @click="navigateRealisation('prev')"
                                            class="p-2 rounded-full btn btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button @click="navigateRealisation('next')"
                                            class="p-2 rounded-full btn btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                    <div v-if="props.realisations.length > 0 " class="">
                                        <div class="p-4 bg-white rounded-md shadow dark:bg-gray-800">

                                                <Swiper
                                                        :modules="[Navigation, Scrollbar, Pagination, A11y]"

                                                        :slides-per-view="1"

                                                        @swiper="onSwiperInstanceRealisation"
                                                        >
                                                        <swiper-slide v-for="realisation in props.realisations">


                                                            <div class="my-3">

                                                                <div class="py-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12">
                                                        <div class="max-w-6xl px-4 mx-auto">
                                                            <div class="grid gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8">

                                                            <template v-for="(media, index) in realisation.media">

                                                                <a  href="#" @click="toggler = !toggler"
                                                                        :class="{ 'md:!col-span-2': index === 1, 'md:col-span-2': index === 2, }"
                                                                        class="relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80">
                                                                        <img :src="media.url" loading="lazy" :alt="media.alt" class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />

                                                                        <div
                                                                            class="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent">
                                                                        </div>

                                                                        <span class="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg">{{ media.alt}}</span>
                                                                </a>


                                                            </template>


                                                            </div>
                                                        </div>
                                                    </div>




                                                            </div>


                                                                <div class="p-4 mt-auto bg-gray-200 rounded-md dark:bg-gray-700">
                                                                    {{ realisation.description }}
                                                                </div>
                                                        </swiper-slide>

                                                </Swiper>
                                        </div>

                                    </div>
                                    <div v-else class="text-center">
                                        <h1 class="text-lg dark:text-gray-100 font-bega-medium ">Rien pour l'instant</h1>

                                    </div>
                                </section>

            </div>
            <div v-if="tab === 'service'" class="p-4 bg-white rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                   <section class=" dark:bg-gray-800">
                                            <div class="px-2 mx-auto mb-4 max-w-7xl">

                                    <div class="max-w-5xl mx-auto ">
                                            <h2 class="my-4 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200">Mes Services</h2>

                                        </div>

                                        <div v-if="services.length > 0" class="py-8 swiper">
                                            <div class="flex items-center justify-between">

                                                <div>

                                                </div>
                                                <div class="flex gap-4">

                                                    <button @click="navigateService('prev')"
                                                        class="p-0 rounded-full btn btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <button @click="navigateService('next')"
                                                        class="p-0 rounded-full btn btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="mt-5">

                                                <swiper class="flex py-8"
                                                     :modules="[Navigation, Pagination, Scrollbar, EffectCube, A11y]"
                                                    :spaceBetween="30"
                                                    :breakpoints="{ 600: { slidesPerView: 1 }, 768: { slidesPerView: 2, }, 992: { slidesPerView: 3, } }"
                                                    :space-between="25"
                                                     @swiper="onSwiperInitializedService"
                                                    >
                                                 <swiper-slide v-for="service in services" class="px-2 py-2">

                                                 <ServiceCard :service="service" />
                                              </swiper-slide>

                                             </swiper>


                                            </div>
                                        </div>
                                        <div v-else class="text-lg text-center dark:text-gray-100 font-bega-medium">
                                            <h1>  Le freelance n'a pas encore créé de services</h1>
                                        </div>

                        </div>
                    </section>
            </div>

        </div>
                                   </div>
                 <div class="w-full px-4 py-8 mx-auto lg:px-6 lg:mx-0 lg:w-4/12">
                    <div class="flex flex-col w-full gap-6 p-6 m-2 bg-white rounded-lg dark:bg-findDark-800 min-h-72">

                         <div class="flex justify-between py-3 border-b border-gray-300">
                                                    <h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold ">Niveau</h1>
                                                     <div class="flex flex-row gap-6 text-gray-800 font-bega-light dark:text-gray-100">

                                                              <span v-tooltip.left="'Compte verifier'" class="cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                                                </svg>
                                                                 </span>

                                                                  <span class="cursor-pointer" v-tooltip.top="'Niveau ' + freelance.level + ' sur la plateforme'">
                                                                    {{ freelance.level }}
                                                                </span>




                                                    </div>

                                    </div>
                        <div class="flex justify-between py-3 border-b border-gray-300">
                                <h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold ">Localisation</h1>
                                 <h1 class="text-lg text-gray-800 dark:text-gray-100 font-bega-light">{{ freelance.localisation['ville'] ?
                                     freelance.localisation['ville'] : '' }} </h1>

                        </div>
                         <div class="flex justify-between py-3 border-b border-gray-300">
                                    <h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold ">Experience</h1>
                                     <h1 class="text-lg text-gray-800 font-bega-light dark:text-gray-100">{{ freelance.experience }}</h1>

                        </div>

                        <div class="flex justify-between py-3 border-b border-gray-300">
                                        <h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold ">Langue</h1>
                                         <h1 class="text-lg text-gray-800 font-bega-light dark:text-gray-100">
                                            <template v-for="(langue,index) in freelance.langue">
                                                    {{ langue['langue'] }}

                                                <span v-if="index !== freelance.langue.length - 1">, </span>
                                            </template>

                                        </h1>

                        </div>
                         <div v-if="freelance.comptes.length > 0" class="flex justify-between py-3 border-b border-gray-300">
                          <div class="flex items-center gap-4 mx-auto space-x-4 text-lg">
                            <template v-for="(compte,index) in freelance.comptes">

                                <a v-if="compte['compte']==='Facebook'" :href="compte['lien']" class="px-3 py-1.5 text-center transition-colors bg-gray-200 rounded-full hover:bg-skin-fill hover:text-white">
                                    <i class=" fab fa-facebook-f"></i>
                                </a>
                                 <a v-if="compte['compte'] === 'Twitter'" :href="compte['lien']" class="px-3 py-1.5 text-center transition-colors bg-gray-200 rounded-full hover:bg-skin-fill hover:text-white">
                                        <i class=" fab fa-twitter"></i>
                                    </a>
                                    <a v-if="compte['instagram'] === 'Instagram'" :href="compte['lien']" class="px-3 py-1.5 text-center transition-colors bg-gray-200 rounded-full hover:bg-skin-fill hover:text-white">
                                            <i class=" fab fa-instagram"></i>
                                        </a>

                            </template>


                     </div>


                            </div>


                    </div>
                 </div>


            </div>

        </div>


        </div>

</template>

<style lang="css">

.p-tabview-selected{
    background-color: black !important;
}

.active-tab {

      @apply text-skin-fill hover:text-skin-fill  border-skin-fill ;
}

</style>

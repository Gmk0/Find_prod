<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
// Assurez-vous d'ajuster le chemin d'importation
import {  ref, computed } from 'vue';


import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { useToast } from 'primevue/usetoast';
import axios from 'axios';

import { useForm, usePage } from '@inertiajs/vue3';



const toast = useToast();

const page =usePage();

import { cartStore } from '@/store/store';

const usecartStore = cartStore();

const contactMe = ref(false);



const props = defineProps({
    service: Object,
    otherService: Array,
    commentaires: Array,
    countReferrals:Object,
});

const like = ref(props.service.data.likeUser);
const level = ref('basic');

const progress=ref(false);

const service = computed(() => props.service.data)

const price = ref(props.service.data.basic_price);

const swiperInstanceRealisation = ref(null);

const onSwiperInstanceRealisation = (swiper) => {
    swiperInstanceRealisation.value = swiper;
};

const navigateCommentaire = (direction) => {
    if (swiperInstanceServices.value) {
        if (direction === 'prev') {
            swiperInstanceServices.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstanceServices.value.slideNext();
        }
    }
};


const changePrice = (Newprice) => {
    price.value = Newprice
};

const contacter = () => {


    message.post(route('contactFreelance'), {

        preserveScroll: true,

        onSuccess: () => {

            toast.add({ severity: 'info', summary: 'Message', detail: 'Message envoyer', group: 'br', life: 1000 });
        }
    })
}

const sendMessageLoading = ref(false);
const messageSent = ref(false);
const chatID = ref('');
const sendMessage = async () => {

    sendMessageLoading.value = !sendMessageLoading.value;

    try {
        const response = await axios.post(route('contactFreelance'), {
            body: message.body,
            freelance_id: props.service.data.freelance.id,
            user_id: props.service.data.user.id,
            service_id: props.service.data.id,
        });

        chatID.value = response.data.chatId;
        //console.log(response.data.chatId)
        sendMessageLoading.value = false;
        messageSent.value = true;

    } catch (e) {

        sendMessageLoading.value = false;
        console.log(e);
    }
}

const message = useForm({
    body: '',
    freelance_id: props.service.data.freelance.id,
    user_id: props.service.data.user.id,
    service_id: props.service.data.id
});



const toogleFavorite = async () => {

    like.value = !like.value;

    try {
        const response = await axios.post(route('like.service'), {
            like: like.value,
            service: props.service.data.id
        });

    } catch (e) {

        console.log(e);
    }
}

const images = ref([]);

for (let i = 0; i < props.service.data.files.length; i++) {
    images.value.push({
        itemImageSrc: '/storage/' + props.service.data.files[i],
        thumbnailImageSrc: '/storage/' + props.service.data.files[i],
        alt: `Description for Image ${i + 1}`,
        title: `Title ${i + 1}`
    });
}


const add_cart = () => {


}
const url = '/storage/';

const form=useForm({
    service_numero: props.service.data.service_numero,
    id_client: page.props.auth.user.id,
})

const getGift = () => {

    form.post(route('getGiftPost'),{
        onStart: () =>{
            progress.value = true;
        },
        onFinish:()=>{
             progress.value = false;
        },onError:(error)=>{

            alert(error.message);
        },

    })


};




const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);




defineOptions({
    layout: WebLayout,

});



</script>

<template>
    <div class="min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-findDark-950">
        <div class="hidden px-2">
            All/Service
        </div>
        <div class="px-4 mt-4">
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <Link :href="route('Allservices')"
                            class="inline-flex items-center text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Services
                        </Link>
                    </li>


                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ml-1 text-sm text-gray-500 md:ml-2 dark:text-gray-400">{{
                                service.service_numero }}</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

        <Toast position="bottom-right" group="br" />
        <div class="px-4 mx-auto my-4">
                    <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-findDark-900 dark:text-blue-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-bega_medium">Parrainez au moins 3 personnes pour profiter de l'offre {{ props.countReferrals }}/3  !</span>
            </div>
            </div>

             </div>

        <div class="container relative px-4 py-4 lg:mx-auto">

            <div class="relative flex flex-col gap-4 lg:flex-row lg:space-x-4">
                <div id="card" class="relative flex-col mx-2 mb-6 lg:flex lg:order-2 lg:mb-0 lg:w-1/3">
                    <div class="flex lg:sticky lg:top-[8rem] flex-col gap-2 p-4 card-sticky ">

                        <div class="p-2 bg-white rounded-md shadow-lg lg:sticky dark:bg-findDark-900">

                            <div class="mt-2 sm:col-span-8 lg:col-span-7">

                                <h2
                                    class="block my-4 text-base text-gray-800 truncate font-bega_medium lg:text-lg lg:hidden dark:text-gray-300 ">
                                    {{ service.title }}
                                </h2>
                                <section aria-labelledby="information-heading" class="mt-1 ">
                                    <h3 id="information-heading" class="sr-only">Product information</h3>
                                    <div class="flex justify-between my-3">
                                        <h4 class="sr-only">Reviews</h4>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <svg class="w-4 h-4 mr-1 text-yellow-500 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" />
                                                </svg>

                                                <span class="text-sm text-gray-700 dark:text-gray-100">(2)
                                                </span>
                                            </div>

                                            <p class="sr-only">3 out of 5 stars</p>
                                            <a href="#"
                                                class="ml-3 text-sm text-amber-600 hover:text-indigo-500">{{
                                                    service.orderCount }}
                                                reviews</a>
                                        </div>
                                        <div class="flex justify-between mt-3">
                                            <div class="flex items-center">
                                                <button @click="toogleFavorite()" class="flex gap-1 mr-2">


                                                    <span v-show="!like" class="">
                                                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                        </svg>

                                                    </span>
                                                    <span v-show="like">
                                                        <svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                        </svg>
                                                    </span>


                                                </button>



                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>



                                    <div v-if="service.premium_price && service.extra_price" class="mt-4 mb-3 font-bega_medium">
                                        <ul
                                            class="flex items-center w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            <li class="w-full sm:border-r dark:border-gray-600" @click="level = 'Basic'"
                                                :class="level === 'Basic' ? 'border-b-4 border-amber-600' : ''">
                                                <button @click="changePrice(service.basic_price)"
                                                    class="w-full py-3 ml-2 text-sm text-gray-900 dark:text-gray-300 focus:outline-none">
                                                    Basic
                                                </button>
                                            </li>
                                            <li class="w-full sm:border-r dark:border-gray-600" @click="level = 'Premium'"
                                                :class="level === 'Premium' ? 'border-b-4 border-amber-600' : ''">
                                                <button @click="changePrice(service.premium_price)"
                                                    class="w-full py-3 ml-2 text-sm text-gray-900 dark:text-gray-300 focus:outline-none">
                                                    Premium
                                                </button>
                                            </li>
                                            <li class="w-full dark:border-gray-600" @click="level = 'Extra'"
                                                :class="level === 'Extra' ? 'border-b-4 border-amber-600' : ''">
                                                <button @click="changePrice(service.extra_price)"
                                                    class="w-full py-3 ml-2 text-sm text-gray-900 dark:text-gray-300 focus:outline-none">
                                                    Extra
                                                </button>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="flex justify-between gap-2 px-4 ">
                                        <p class="py-2 text-lg text-gray-800"></p>
                                        <p class="text-lg font-bega_semibold text-amber-600">Gratuit</p>
                                    </div>

                                    <div>
                                        <div id="" class="mt-4">

                                            <div class="px-4">
                                                <ul class="flex gap-4">


                                                </ul>
                                            </div>
                                        </div>

                                    </div>


                                </section>

                                <section aria-labelledby="options-heading" class="px-4 mt-1">
                                    <h3 id="options-heading" class="sr-only">Service options</h3>
                                    <div>
                                        <div class="flex justify-between mt-4">
                                            <p class="flex gap-2 text-gray-700 dark:text-gray-100">
                                                <span><i class="pi pi-clock"></i></span>

                                                <span v-if="level === 'basic'">
                                                    {{ service.basic_delivery_time }}
                                                </span>

                                                <span v-else-if="level === 'Premium'">

                                                    {{ service.premium_delivery_time }}
                                                </span>
                                                <span v-else>
                                                    {{ service.extra_delivery_time }}

                                                </span>




                                                Jours Delai
                                            </p>

                                            <p class="flex gap-2 text-gray-700 dark:text-gray-100">

                                                <span><i class="pi pi-replay"></i></span>

                                                <span v-if="level === 'basic'">
                                                    {{ service.basic_revision }}
                                                </span>

                                                <span v-else-if="level === 'Premium'">

                                                    {{ service.premium_revision }}
                                                </span>
                                                <span v-else>
                                                    {{ service.extra_revision }}

                                                </span>


                                                Revisions

                                            </p>

                                        </div>

                                        <div class="flex mb-8">
                                            <button v-if="countReferrals >=3" @click="getGift()" type="button" id=""
                                                class="flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base  text-white border border-transparent bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 shadow-sm shadow-amber-500/20 transition-all
                                                hover:shadow-lg focus:opacity-[0.85] focus:shadow-none
                                                active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50
                                                disabled:shadow-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>

                                                <span>Recuperer</span>

                                            </button>

                                            <button   type="button" id=""
                                                    class="flex items-center justify-center w-full  gap-1 px-8 py-3 mt-4 text-base  text-white border border-transparent bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 shadow-sm shadow-amber-500/20 transition-all
                                                hover:shadow-lg focus:opacity-[0.85] focus:shadow-none
                                                active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50
                                                disabled:shadow-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                    </svg>

                                                    <span>Parainer</span>

                                                </button>

                                        </div>






                                    </div>
                                </section>


                            </div>

                        </div>

                    </div>
                </div>

                <div class="w-full px-2 bg-white lg:px-4 dark:bg-findDark-900 md:w-2/3">
                    <div class="lg:p-4 dark:bg-findDark-900">
                        <div class="flex flex-col mb-4">

                            <div>
                                <p class="mb-4 text-lg text-gray-700 font-bega_medium md:text-xl dark:text-gray-200">
                                    {{ service.title }}
                                </p>
                            </div>

                            <div class="flex gap-4 mt-2">

                                <div class="flex flex-col gap-3 my-auto">
                                    <a class="hidden text-base text-gray-500">{{ service.freelance.nom }}</a>
                                    <div class="flex flex-row gap-2">

                                        <span class="hidden text-base ">Niveau {{ service.freelance.level }}

                                        </span>

                                        <span v-if="service.commandeEncours != 0" class="text-base ">
                                            <span class="text-green-600">
                                                {{ service.commandeEncours }}</span> commande en cours



                                        </span>

                                    </div>

                                </div>
                            </div>
                            <div class="mt-4">

                                <div class="w-full rounded-lg lg:w-10/12">
                                    <Swiper :modules="[Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y]"
                                        effect="fade" :slides-per-view="1" navigation>
                                        <swiper-slide v-for="(image, index) in props.service.data.files">

                                            <img class="object-cover w-auto h-auto rounded-md lg:h-10/12 swiper-lazy"
                                                :src="'/storage/' + image" :alt="image" />
                                        </swiper-slide>

                                    </Swiper>

                                </div>

                                <!--
                                        <div class="card">
                                            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                                                <template #item="slotProps">
                                                    <Image  :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" preview  />
                                                </template>
                                                <template #thumbnail="slotProps">
                                                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 15%;" />
                                                </template>
                                            </Galleria>
                                        </div>
                                        -->

                            </div>


                            <div class="hidden">
                                <p class="mt-4 text-lg text-gray-800 font-bega_medium md:text-2xl dark:text-gray-200">
                                    {{ service.title }}</p>

                            </div>

                            <div class="mt-8">
                                <TabView>
                                    <TabPanel header="INFO">


                                        <div class="py-5 min-h-64">
                                            <div class="mb-4 prose text-gray-800 md:text-base dark:text-gray-200">



                                                <div v-html="service.description"></div>

                                            </div>


                                            <div class="grid grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <p class="text-gray-500 dark:text-gray-200">Support :</p>
                                                    <div id="support" class="text-gray-800">
                                                        <div class="px-2 mt-2">
                                                            <ul class="px-4 list-disc dark:text-gray-50">

                                                                <li v-for="(value, index ) in service.basic_support">{{
                                                                    value }}</li>


                                                            </ul>

                                                        </div>

                                                    </div>


                                                </div>


                                            </div>

                                            <div class="grid hidden grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <p class="text-gray-500 dark:text-gray-200">Prix :</p>
                                                    <p class="px-2 mt-2 text-gray-700 dark:text-gray-300">à partir de
                                                        <span class="text-lg text-green-700">{{ service.price }}</span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p class="text-gray-500 dark:text-gray-200">Délai :</p>
                                                    <p class="text-gray-700 dark:text-gray-300">{{
                                                        service.basic_delivery_time }} jours
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-2 gap-4 mb-4">



                                            </div>
                                            <div class="grid grid-cols-2 gap-4 mb-6">
                                                <div class="col-span-2">
                                                    <p class="text-base text-gray-500 dark:text-gray-200">Besoin
                                                        pour ce service :</p>


                                                    <div class="prose" v-html="service.need_service"></div>
                                                </div>
                                            </div>



                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Example">


                                        <div v-if="service.example != null" class="grid grid-cols-1 gap-4 ">


                                            <div class="p-4 bg-white rounded-md shadow dark:bg-findDark-900">
                                                <div class="flex flex-row gap-2 p-4 mb-4">
                                                    <Swiper
                                                        :modules="[Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y]"
                                                        effect="fade" :slides-per-view="1" navigation>
                                                        <swiper-slide v-for="(image, index) in service.example.image">

                                                            <img class="object-fill rounded-md h-10/12 swiper-lazy"
                                                                :src="'/storage/' + image" alt="bro" />
                                                        </swiper-slide>

                                                    </Swiper>
                                                </div>
                                                <div class="p-4 mt-2 font-sans text-gray-700 dark:text-gray-200">
                                                    <div v-html="service.example.description"></div>
                                                </div>
                                            </div>


                                        </div>
                                    </TabPanel>
                                    <TabPanel header="Commentaires">

                                        <div v-if="props.commentaires.length > 0">
                                            <div class="flex gap-4 p-2">

                                                <button @click="navigateCommentaire('prev')"
                                                    class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <button @click="navigateCommentaire('next')"
                                                    class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="1.5" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <swiper :modules="[Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y]"
                                            effect="fade" :slides-per-view="1" navigation
                                            @swiper="onSwiperInstanceRealisation">

                                            <swiper-slide v-for="commentaire in props.commentaires">


                                                <div>
                                                    <div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600">
                                                        <p class="text-sm text-gray-700 md:text-base dark:text-gray-300">
                                                            {{ commentaire.commentaire }}
                                                        </p>

                                                        <div class="flex items-center my-4">
                                                            <svg class="w-4 h-4 mr-1 text-yellow-500 fill-current"
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                <path
                                                                    d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" />
                                                            </svg>

                                                            <span
                                                                class="text-sm font-semibold text-gray-700 dark:text-gray-100">
                                                                {{ commentaire.satisfaction }}
                                                            </span>
                                                        </div>
                                                        <div>

                                                            <div class="flex items-center gap-2">
                                                                <Photo :user="commentaire.user" taille="10" />
                                                                <div>
                                                                    <p class="text-gray-800 dark:text-gray-200">
                                                                        {{ commentaire.user.name }}</p>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>

                                            </swiper-slide>
                                        </swiper>

                                    </TabPanel>
                                </TabView>
                            </div>

                            <div class="px-4 mt-6">
                                <p class="mb-4 text-lg text-gray-800 font-bega_medium dark:text-gray-200">À propos du freelance
                                </p>
                                <div class="flex items-center gap-4 mb-8">

                                    <template v-if="service.user != null">

                                        <Photo :user="service.user" />
                                    </template>



                                    <div>
                                        <Link :href="route('profileFreelance', service.freelance.identifiant)"
                                            class="text-gray-800 dark:text-gray-300">
                                        {{ service.freelance.nom }}</Link>
                                        <p class="block text-gray-700 truncate dark:text-gray-300">
                                            {{ service.category.name }}</p>
                                    </div>

                                </div>


                                <div class="max-w-md text-base text-gray-700 break-words font-bega_light dark:text-gray-100">
                                    {{ service.freelance.description }}
                                </div>
                            </div>




                        </div>

                    </div>

                </div>
            </div>


        </div>

        <div class="px-4 mt-4">
            <div class="px-4">
                <p class="text-lg text-gray-800 font-bega_semibold dark:text-gray-200">Du meme Categorie</p>
            </div>




            <div class="grid gap-4 px-4 py-4 mx-auto md:grid-cols-4">

                <div v-for="service in props.otherService.data">


                    <ServiceCard :service="service" :key="service.id" />

                </div>

                <div v-if="props.otherService == null" class="flex items-center justify-center h-64">
                    <span class="text-lg text-gray-500 font-bega_medium">
                        Aucun élément trouvé.
                    </span>
                </div>

            </div>
        </div>

        <div v-if="false"
            class="fixed bottom-[4rem] top-[8rem] left-[2rem] sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 md:top-[8rem] md:left-[2rem] md:transform-none z-[85] flex flex-col bg-white dark:bg-gray-900 shadow-lg bg-opacity-20">

            <transition enter-active-class="duration-300 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100"
                leave-active-class="duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="contactMe" class="">





                    <div
                        class="flex flex-col justify-center flex-grow w-full max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
                        <!-- Bouton de fermeture -->
                        <button @click="contactMe = !contactMe"
                            class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>

                        <!-- En-tête du chat -->
                        <div class="flex flex-col items-start justify-between mb-4">
                            <div class="flex items-center space-x-2">
                                <span class="text-lg font-bega_medium">{{ service.user.name }}</span>
                                <span class="w-2 h-2 rounded-full">
                                </span>
                                <span class="text-xs text-gray-500">En ligne</span>
                            </div>
                            <span class="text-xs text-gray-500">Temps de réponse : 2 heures</span>
                        </div>

                        <!-- Corps du chat -->
                        <div class="flex-grow space-y-2">

                            <textarea x-model="message"
                                class="w-full p-2 rounded-lg focus:ring-0 dark:bg-findDark-900 dark:text-gray-100 focus:border-amber-500"
                                rows="4" placeholder="Votre message..."></textarea>

                            <div class="flex flex-col gap-2">


                                <div class="flex flex-col gap-2">
                                    <div @click="message += ' Quelle est la durée estimée pour la réalisation de ce service ?'"
                                        class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200">
                                        <p>Quelle est la durée estimée pour la réalisation de ce service ?</p>
                                    </div>
                                    <div @click="message += ' Quels sont les détails spécifiques inclus dans ce service ?'"
                                        class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200">
                                        <p>Quels sont les détails spécifiques inclus dans ce service ?</p>
                                    </div>
                                    <div @click="message += ' Pouvez-vous me fournir plus d\'informations sur les tarifs ?'"
                                        class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200">
                                        <p>Pouvez-vous me fournir plus d'informations sur les tarifs ?</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <!-- Champ de texte et bouton pour envoyer -->
                        <div class="flex justify-between mt-4 space-x-2">
                            <div class="flex gap-3">
                                <button
                                    class="flex items-center p-2 rounded-full shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <Button label="Envoyer" />
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col justify-center flex-grow w-full max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
                        <!-- Bouton de fermeture -->
                        <button @click="contactMe = !contactMe"
                            class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12">
                                </path>
                            </svg>
                        </button>

                        <!-- En-tête du chat -->

                    </div>
                </div>

            </transition>





        </div>


        <Dialog v-model:visible="contactMe" position="left" modal header="Confirmer Comannde Finis"
            :style="{ width: '40rem' }" :breakpoints="{ '1199px': '20vw', '575px': '90vw' }">


            <form @submit.prevent="sendMessage" class="flex flex-col justify-center flex-grow">

                <div class="flex flex-col items-start justify-between mb-4">
                    <div class="flex items-center space-x-2">
                        <span class="text-lg font-bega_medium">{{ service.user.name }}</span>
                        <span class="w-2 h-2 rounded-full">
                        </span>
                        <template v-if="service.user.is_online">
                            <span class="text-xs text-green-500">
                                En ligne
                            </span>
                        </template>
                        <template v-else>
                            en ligne {{ service.user.last_activity }}

                        </template>
                    </div>
                    <span class="text-xs text-gray-500">Temps de réponse : 2 heures</span>
                </div>

                <!-- Corps du chat -->
                <div class="flex-grow space-y-2">

                    <textarea required v-model="message.body"
                        class="w-full p-2 rounded-lg focus:ring-0 dark:bg-findDark-900 dark:text-gray-100 focus:border-amber-500"
                        rows="4" placeholder="Votre message..."></textarea>

                    <div class="flex flex-col gap-2">


                        <div class="flex flex-col gap-2">
                            <div @click="message.body += ' Quelle est la durée estimée pour la réalisation de ce service ?'"
                                class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200">
                                <p>Quelle est la durée estimée pour la réalisation de ce service ?</p>
                            </div>
                            <div @click="message.body += ' Quels sont les détails spécifiques inclus dans ce service ?'"
                                class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200">
                                <p>Quels sont les détails spécifiques inclus dans ce service ?</p>
                            </div>
                            <div @click="message.body += ' Pouvez-vous me fournir plus d\'informations sur les tarifs ?'"
                                class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200">
                                <p>Pouvez-vous me fournir plus d'informations sur les tarifs ?</p>
                            </div>
                        </div>


                    </div>
                </div>

                <!-- Champ de texte et bouton pour envoyer -->
                <div class="flex justify-between mt-4 space-x-2">
                    <div class="flex gap-3">
                        <button
                            class="flex items-center p-2 rounded-full shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                        </button>
                    </div>
                    <div v-if="chatID === ''">
                        <Button type="submit" :loading="sendMessageLoading" outlined label="Envoyer" />
                    </div>
                    <div v-else>
                        <Link :href="route('user.chat', chatID)">
                        <Button severity="success" outlined label="Voir la conversation" />

                        </Link>

                    </div>
                </div>
            </form>




        </Dialog>

        *   <div v-if="progress">
                        <div>

                            <div class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen"
                                style="background: rgba(0, 0, 0, 0.3);">
                                <div class="flex flex-col items-center px-5 py-2 bg-white border rounded-lg">
                                    <div class="relative block w-20 h-5 mt-2 loader-dots">
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div class="mt-2 text-xs text-center text-gray-500 font-bega_medium">
                                        Obtention en cours...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    </div>
</template>







<style ></style>



<script setup>

import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
//import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';
import { useToast } from 'primevue/usetoast';
import Avatar from 'primevue/avatar';

//import Chip from 'primevue/chip';


const toast = useToast();


const props = defineProps({
    service: Object,
})

import { cartStore } from '@/store/store';

const usecartStore = cartStore();

const swiperInstance = ref(null);
const onSwiperInitialized = (swiper) => {
    swiperInstance.value = swiper;
};


const navigateFreelance = (direction) => {
    if (swiperInstance.value) {
        if (direction === 'prev') {
            swiperInstance.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstance.value.slideNext();
        }
    }
};

const url = '/storage/';
const imageDefault = '/images/illustrations/missionF.svg';

const addToCart = () => {
    const item =
    {
        id: props.service.id,
        name: props.service.title,
        price: props.service.basic_price,
        level: 'basic',
        image: url + props.service.image ? props.service.image[0] : imageDefault,
    }; // Exemple d'article
    usecartStore.addItem(item);

    toast.add({ severity: 'info', summary: 'Message', detail: 'Service Ajouter au panier', group: 'br', life: 1000 });


};

</script>


<template>
    <div>
        <Toast position="bottom-right" group="br" />

        <div class="md:h-[24rem] h-52  overflow-hidden bg-white rounded-xl shadow-md dark:text-gray-200 dark:bg-gray-900 ">

            <div class="relative flex flex-row lg:flex-col">

                <div class="relative group w-[48%] md:w-full">




                    <div class="p-2">
                        <div v-if="props.service.image != null"
                            class=" h-48 transition duration-500 ease-out bg-center bg-cover border rounded-xl lg:h-44"
                            :style="'background-image: url(/storage/' + props.service.image[0] + ')'">

                        </div>
                        <div v-else
                            class=" h-48 transition duration-500 ease-out bg-center bg-cover border rounded-xl lg:h-44"
                            :style="'background-image: url(' + imageDefault + ')'">

                        </div>

                    </div>



                    <!--

                 <div v-if="props.service.image.lenght > 1" class="px-4 ">
                                <button type="button" @click="navigateFreelance('prev')" class="absolute left-0 z-50 p-4 ml-3 transition-opacity opacity-0 top-1/2 btn-outline btn-circle btn-sm group-hover:opacity-100 btn">
                                    prev
                                </button>
                                <button type="button" @click="navigateFreelance('next')" class="absolute right-0 z-50 p-4 mr-3 transition-opacity opacity-0 top-1/2 group-hover:opacity-100 btn btn-outline btn-circle btn-sm">
                                    next
                                </button>

                    </div>
                    -->



                </div>



                <div class="w-[52%]  md:w-full flex gap-1 lg:px-4 px-2 pt-1 pb-2 flex-col">
                    <div class="flex justify-between mt-1 lg:mt-0 ">
                        <div class="flex gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-6 lg:h-6 w-4 h-4 mr-1 text-yellow-200"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 13.165l-4.53 2.73 1.088-5.997L.976 6.305l6.018-.873L10 0l2.006 5.432 6.018.873-4.582 3.593 1.088 5.997L10 13.165z" />
                            </svg>
                            <p class="text-sm text-gray-700 dark:text-gray-300">{{ props.service.average }}
                                ({{ props.service.orderCount }})
                            </p>
                        </div>
                        <div class="flex">
                            <p class="text-sm text-gray-700 dark:text-gray-300">
                                {{ props.service.freelance.level }}</p>

                            <!--
                <div wire:ignore x-data="{ like: @json($service->isFavorite()) }"
                    class="absolute flex items-center top-4 left-4 lg:right-4">
                    <button class="mr-2" x-on:click="like=!like" @click="$wire.toogleFavorite({{ $service-> id}})">


                        <span x-cloak x-show="!like" class="">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </span>
                        <span x-cloak x-show="like">
                            <svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </span>


                    </button>



                </div>
                @endauth
                -->

                        </div>

                    </div>
                    <div class="mt-1 text-start">
                        <Link :href="route('getGift', [$page.props.auth.user.id,props.service.service_numero])"
                            class="mr-1 font-bold text-gray-600 hover:text-amber-600 ">
                        {{ props.service.title }}

                        </Link>


                    </div>
                    <div class="lg:mt-2 mt-3">
                        <div class="flex items-center gap-1">
                            <Photo :user="props.service.user" taille="8" />


                            <a href="" class="flex">

                                <span class="text-xs md:flex">{{ props.service.user.name }}</span>

                            </a>

                        </div>
                    </div>
                    <div class="flex justify-between mt-auto mb-2 md:mt-3">
                        <div class="">
                            <button class="hidden"></button>
                        </div>

                        <div class="flex items-center gap-2 pt-auto">
                            <div class="text-gray-600">

                            </div>

                            <button @click="addToCart()"
                                class=" p-2 text-amber-600 font-bold text-lg !rounded-br-xl !rounded-md">
                                <span class="font-semibold"> Gratuit</span>
                            </button>



                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

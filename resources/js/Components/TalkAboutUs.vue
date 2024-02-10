<template>
   <div v-if="fetchLast?.length > 0 " id="talkAbout" class="bg-white  dark:bg-gray-900 lg:min-h-screen xl:min-h-full">

                <div class="container max-w-6xl p-4 m-4 mx-auto 2xl:max-w-7xl 2xl:p-2 md:p-6">
                    <div class="mb-10 text-center xl:mb-14">
                        <span class="font-bega-medium text-amber-600">Presentation</span>
                        <h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 ">Ils en parlent mieux que nous</h1>

                    </div>

                    <div class="my-10">

                          <swiper class="flex py-8 xl:py-12"
                                :modules="[Navigation, Pagination, Scrollbar, EffectCube, A11y]"

                                :spaceBetween="30"
                                :slides-per-view="1"
                                :space-between="25"
                                :pagination="{ clickable: true }"
                                >

                                <template v-for="(comment, index) in fetchLast">
                        <swiper-slide class="mb-8 xl:mb-12">
                            <div class="!bg-transparent px-2 md:px-0">
                                <div
                                    class="px-2 bg-white border border-gray-300 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12">
                                    <div class="grid md:grid-cols-5">

                                        <div class="w-full m-2 h-50 xl:h-72 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl">

                                            <iframe v-if="comment.lien !=null" class="w-full h-full rounded-sm aspect-video hover:aspect-square"
                                                :src="comment.lien" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>
                                        </div>
                                        <div class="p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8">
                                            <div class="w-20 mx-auto rounded-lg xl:w-28">
                                                <img  :src="'/storage/'+ comment.image" alt="company logo" loading="lazy" />
                                            </div>
                                            <p class="dark:text-gray-200 font-bega-light xl:text-lg">
                                                <span v-html="comment.commentaire" class=""></span>

                                            </p>
                                            <h6 class="text-lg leading-none font-bega-semibold dark:text-gray-200">{{ comment.utilisateur  }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </swiper-slide>
                        </template>



                        </swiper>

                    </div>

                    {{ fetchLast }}
                </div>

            </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';

import { Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import {computed} from 'vue';


import { getLastComment } from '@/store/otherStore';

const useStoreLast = getLastComment();



const fetchLast =computed(()=> useStoreLast.getLastTalkAbout);


</script>

<style lang="scss" scoped>

</style>

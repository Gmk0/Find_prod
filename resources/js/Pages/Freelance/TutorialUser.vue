<template>
    <div class="min-h-screen pt-20 mx-auto max-w-7xl lg:px-8">

        <BreadCumbWeb link1="Tutorial" />
        <section class="relative  overflow-hidden pt-8 pb-12  lg:pb-[90px]">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600">
                                Tutorial
                            </span>
                            <h2 class="mb-4 text-lg font-bega-medium text-dark md:text-xl">
                               Apprenez à utiliser la plateforme grâce à ces tutoriels.

                            </h2>

                        </div>
                    </div>
                </div>
                <div class="max-w-5xl mx-auto">


                    <div id="accordion-flush" data-accordion="collapse"
                        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-inactive-classes="text-gray-500 dark:text-gray-400">

                        <template v-for="(tuto, index) in props.tutorial">
                            <h2 :class="{ 'text-amber-600': expandedItems.includes(index) }">
                                <button type="button" @click="toggleAccordion(index)"
                                    class="flex items-center justify-between w-full gap-3 py-5 text-lg border-b border-gray-500 font-bega-medium rtl:text-right dark:border-gray-700">
                                    <span>{{ tuto.titre }}</span>
                                    <svg :class="{ 'rotate-180': !expandedItems.includes(index), 'rotate-0': expandedItems.includes(index) }"
                                        class="w-3 h-3 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>


                            <Collapse :when="expandedItems.includes(index)" class="m-2">
                                <div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
                                    <div class="py-5 border-b border-gray-400 dark:border-gray-700">

                                        <div class="flex flex-col">
                                            <div
                                                class="w-[75%] h-48 mx-auto my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl">


                                                <iframe class="w-full h-full aspect-video" :src="tuto.lien"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowfullscreen></iframe>
                                            </div>
                                            <div class="w-full mt-4 text-base prose text-justify dark:text-gray-200 font-bega-light">
                                                <p v-html="tuto.content" class="mx-auto dark:!text-gray-200 ">

                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Collapse>

                        </template>

                    </div>


                </div>
            </div>

        </section>

    </div>
</template>






<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
import BreadCumbWeb from '@/Components/BreadCumbWeb.vue';

import { Collapse } from 'vue-collapsed';


import { computed, ref } from 'vue';


const props = defineProps({
    tutorial: Array,
});

const expandedItems = ref([]);

const toggleAccordion = (key) => {

    if (expandedItems.value.includes(key)) {
        expandedItems.value = expandedItems.value.filter((item) => item !== key);

    } else {
        expandedItems.value = [];
        expandedItems.value.push(key);
    }
};


defineOptions({
    layout: WebLayout,

});

const toggle = ref(false);



</script>
<style lang="scss" scoped></style>

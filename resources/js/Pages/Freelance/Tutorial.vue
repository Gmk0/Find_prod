<template>
    <div class="min-h-screen pt-20 mx-auto max-w-7xl lg:px-8">

        <BreadCumbWeb link1="Tutorial" li />
        <section class="relative  overflow-hidden pt-8 pb-12  lg:pb-[90px]">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600">
                                Tutorial
                            </span>
                            <h2 class="mb-4 text-lg font-bega-medium text-dark md:text-xl">
                                Apprenez a utiliser la plateforme find a traves ces tutorial

                            </h2>

                        </div>
                    </div>
                </div>
                <div class="flex flex-col max-w-5xl gap-6 mx-auto md:flex-row ">

             <div class="flex flex-wrap w-full transition duration-300 ease-in-out transform border border-gray-200 rounded-lg md:w-1/2 hover:text-white hover:bg-amber-600 hover:scale-105">
        <Link :href="route('tutorialUtilisateur')" class="p-4 ">
            <h2 class="mb-4 text-xl font-bega-semibold">Tutoriel pour les utilisateurs</h2>
            <p class="mb-4 hover:text-white">Cette section vous explique comment utiliser la plateforme.</p>
            <div class="tutorial-grid1">
                <!-- Contenu de la première grille pour le tutoriel -->
            </div>
        </Link>
    </div>



    <div class="flex flex-wrap w-full transition duration-300 ease-in-out transform border border-gray-200 rounded-lg md:w-1/2 hover:text-white hover:bg-amber-600 hover:scale-105">
        <Link :href="route('tutorialsFrealance')" class="p-4">
            <h2 class="mb-4 text-xl font-bega-semibold">Tutoriel pour les freelances</h2>
            <p class="mb-4">Cette section vous explique comment utiliser la plateforme en tant que freelance.</p>
            <div class="tutorial-grid2">
                <!-- Contenu de la deuxième grille pour le tutoriel -->
            </div>
        </Link>
    </div>











                </div>
            </div>

        </section>
    </div>
</template>






<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
import BreadCumbWeb from '@/Components/BreadCumbWeb.vue';


import { computed } from 'vue';


import { getLastComment } from '@/store/otherStore';
import { Link } from '@inertiajs/vue3';

const useStoreLast = getLastComment();

const about = computed(() => useStoreLast.getAbout)

defineOptions({
    layout: WebLayout,

});



</script>
<style lang="scss" scoped></style>

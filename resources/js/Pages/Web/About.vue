<template>



    <div class="min-h-screen pt-20 mx-auto max-w-7xl lg:px-8">

        <BreadCumbWeb link1="A propos" />
     <section class="relative  overflow-hidden pt-8 pb-12  lg:pb-[90px]">
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                <span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600">
                                    À Propos de FIND
                                </span>
                                <h2 class="mb-4 text-xl font-bega-medium text-dark sm:text-4xl md:text-[40px]">
                                Trouvez le meilleur talent pour votre projet

                                </h2>

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-4">

                             <p class="max-w-4xl mt-4  text-justify prose text-lg text-findDark-500 dark:text-findDark-200 lg:mx-auto">
                       <span v-html="about"></span>
                    </p>



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

const useStoreLast = getLastComment();

const about = computed(()=> useStoreLast.getAbout)

defineOptions({
    layout: WebLayout,

});



</script>
<style lang="scss" scoped></style>

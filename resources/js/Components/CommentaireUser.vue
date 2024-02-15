<template>
    <div v-if="commentaires !=null && commentaires.length > 0" id="confiance" class="bg-white dark:bg-gray-800">
                <div class="px-4 py-4 mx-auto sm:mx-2 md:px-auto">
                    <div class="container text-gray-600 dark:text-gray-300 ">
                        <div class="mb-10 text-center">
                            <span class="font-bega-medium text-amber-600">Comentaire</span>
                            <h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl">Ils nous font confiance</h1>

                        </div>
                        <div class="container flex flex-col mx-auto my-10 overflow-hidden shadow-sm md:my-24 md:flex-row"
                            >
                            <div
                                class="relative flex flex-col justify-center w-full py-2 bg-indigo-700 md:py-24 md:w-1/2 item-center">

                                <div class="absolute top-0 left-0 z-10 w-16 h-16 grid-indigo md:w-40 md:h-40 md:ml-20 md:mt-24">
                                </div>

                                <div
                                    class="relative z-20 px-6 py-2 mb-0 text-2xl leading-tight tracking-tight text-indigo-100 font-bega-semibold md:text-5xl md:py-6 md:px-1 md:w-64 md:mx-auto">
                                    <span class="md:block">Ce que</span>

                                    <span class="md-block">disent</span>
                                    <span class="block">nos clients !</span>


                                </div>

                                <div class="absolute bottom-0 right-0 hidden mb-4 mr-4 md:block">
                                    <button
                                        class="w-12 h-10 text-gray-500 bg-gray-100 border-r rounded-l-full font-bega-semibold focus:outline-none hover:text-indigo-500"
                                         @click="decrementTestimonial">
                                        &#8592;
                                    </button><button
                                        class="w-12 h-10 text-gray-500 bg-gray-100 rounded-r-full font-bega-semibold focus:outline-none hover:text-indigo-500"
                                       @click="incrementTestimonial">
                                        &#8594;
                                    </button>
                                </div>
                            </div>

                            <div  class="bg-gray-100 md:w-1/2">
                                <div v-if="!useStoreLast.isLoading" class="relative flex flex-col h-full">

                                    <div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-12 h-12 text-indigo-200 fill-current md:w-16 md:h-16" viewBox="0 0 24 24">
                                            <path
                                                d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                                        </svg>
                                    </div>




                                    <div  class="relative z-10 h-full">
                                        <div v-for="(comment, index) in commentaires" class="">
                                            <p v-if="incrementTestimonialExist(index)" class="px-6 py-6 text-xl italic text-gray-600 font-bega-light md:px-16 md:text-2xl">


                                                <span class="" v-html="comment.commentaire"></span>
                                            </p>
                                        </div>


                                    </div>



                                    <div class="flex items-center justify-center my-4">
                                           <template v-for="(comment, index) in commentaires">
                                        <button @click="setTestimonialActive(index)"
                                            class="inline-block mx-2 text-center rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline"
                                            :class="{ 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600': !incrementTestimonialExist(index), 'h-16 w-16 opacity-100 bg-indigo-600 text-white': incrementTestimonialExist(index) }">{{getClientInitials(comment?.client)}}</button>
     </template>
                                    </div>



                                    <div class="flex justify-center px-6 pt-2 pb-6 md:py-6">
                                        <template v-for="(comment, index) in commentaires">
                                        <div class="text-center" v-show="incrementTestimonialExist(index)">
                                            <h2 class="text-sm leading-tight text-gray-700 font-bega-semibold md:text-base">{{ comment.client }}</h2>
                                            <small class="text-xs text-gray-500 truncate md:text-sm">{{ comment.entreprise }}.</small>
                                        </div>
                                        </template>

                                    </div>


                                </div>
                                <div v-else class="w-full h-full animate-pulse">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue';

import { getLastComment } from '@/store/otherStore';

const useStoreLast= getLastComment();








const getClientInitials=(clientName)=> {
    // Sépare le nom du client par les espaces
    const parts = clientName.split(' ');

    // Initialise une variable pour stocker les initiales
    let initials = '';

    // Boucle à travers les parties du nom
    parts.forEach(part => {
        // Ajoute la première lettre de chaque partie à initials
        initials += part.charAt(0);
    });

    // Retourne les initiales
    return initials.toUpperCase();
}

const commentaires = computed(() => useStoreLast.getLastComment);

const testimonialActive = ref(0);

const incrementTestimonial = () => {
    if (testimonialActive.value < commentaires.value.length - 1) {
        testimonialActive.value++;
    } else {
        testimonialActive.value = 0;
    }
};

const decrementTestimonial = () => {
    if (testimonialActive.value > 0) {
        testimonialActive.value--;
    } else {
        testimonialActive.value = commentaires.value.length - 1;
    }
};


const incrementTestimonialExist =(index)=>{

    if(testimonialActive.value ===index)
        return true;
    else
        return false;
}



const setTestimonialActive = (index) => {


    testimonialActive.value = index;
};
</script>

<style lang="scss" scoped>

</style>

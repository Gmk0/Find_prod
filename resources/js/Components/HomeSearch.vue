<template>
    <div>
        <div>
            <div class="flex flex-col w-full mt-6 lg:mt-6 2xl:mt-10">
                <div class="relative">

                    <form @submit.prevent="searchResult"
                        class="relative flex p-1 mb-4 bg-white shadow-2xl lg:dark:bg-white rounded-xl 2xl:p-4 md:p-2">

                        <input required v-model="search" @focus="afficher"
                            class="w-full p-4 mr-2 text-gray-600 border-white 2xl:p-6 focus:border-white rounded-xl " type="text">
                        <button type="submit" class="px-6 py-3 ml-auto text-center transition rounded-lg bg-skin-fill">
                            <span class="hidden font-semibold text-white md:block">
                                Recherche
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 mx-auto text-white md:hidden"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>






                    </form>




                    <div v-if="searchPerformed"
                        class="absolute w-full mt-1 overflow-y-auto bg-white border divide-y rounded-lg shadow z-[60] custom-scrollbar max-h-72">
                        <div v-if="results.length > 0">


                            <div v-for="result in results" :key="result.id">

                                <Link :href="route('oneService', [result.userSlug, result.slug])"
                                    class="block p-2 text-sm text-gray-800 cursor-pointer hover:bg-amber-700 hover:text-white">
                                    {{ result.title }} - {{ result.category.name }}
                            </Link>

                            </div>


                        </div>

                        <a v-else-if="loading" class="block p-2 text-gray-800" href="#">Chargement en cours...</a>

                        <a v-else class="block p-2 text-gray-800" href="#">Pas de résultat</a>


                        <div class="p-2 mt-2">
                             <button @click="searchPerformed=!searchPerformed" class="btn btn-sm btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                        </div>
                    </div>





                </div>




                <div class="flex justify-center gap-4 mt-4">
                    <div class="flex items-center space-x-2">

                        <Link href="/categories'"
                            class="flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100">
                            Photographie</Link>
                    </div>
                    <div class="flex items-center space-x-2">

                        <Link href="/categories"
                            class="flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100">
                            Design
                        </Link>
                    </div>
                    <div class="flex items-center space-x-2">

                        <Link href='/categories'
                            class="flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100">
                            Technologie</Link>
                    </div>
                </div>
                <p class="mt-2 text-center text-gray-100 2xl:text-lg ">Catégories les plus populaires</p>


            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';

import axios from 'axios';
import { Link, router } from '@inertiajs/vue3';


const search = ref('');

const results = ref([]);

const loading = ref(false);

const searchPerformed = ref(false);


const afficher=()=>{

    if(results.value.length > 0)
    {
         searchPerformed.value = true;
    }else{
         searchPerformed.value = false;
    }


}

const searchResults =()=>{
    router.post(route('searchElement'), {

        search: search.value

    });

}

const searchResult = async () => {
    try {
        loading.value = true;
        searchPerformed.value = true;

         results.value=[];

        const response = await axios.post(route('searchElement'), {

                search: search.value

        });
        results.value = response.data.results;
        //loading.value = false;

        console.log(results.value)


    } catch (e) {
        console.log(e);

        loading.value = false;

    }



}

</script>

<style lang="scss" scoped></style>



<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
//import  SelectCategory from '@/Components/SelectCategory.vue';
import Pagination from '@/Components/Pagination.vue';
import FreelanceCard from '@/Components/FreelanceCard.vue';
import TextInput from '@/Components/TextInput.vue';
import { ref ,watch, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { Collapse } from 'vue-collapsed'
//import Checkbox from '@/Components/Checkbox.vue';
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import {useCategoryStore} from '@/store/store';

const props= defineProps({
    freelances: Object,
    filters: Object,
});


const useCategory = useCategoryStore();
const form = ref({
    search: props.filters.search,
    category: props.filters.category,
    price: props.filters.price,
    level: props.filters.level,
    localisation: props.filters.localisation,
    disponible : props.filters.disponibilite,
    sub_category : props.filters.sub_category,
    experience_annee :props.filters.experience_annee,
    orderBy: props.filters.orderBy


});


const clearFiltre=()=>{
    form.value={};
}
const search = ref("");
const showFilters= ref(false);





const niveauFiltre = ref([
    { name: 'Niveau 1', code: '1' },
    { name: 'Niveau 2', code: '2' },
    { name: 'Niveau 3', code: '3' },
    { name: 'Professionnel', code: '4' },

]);


const tauxFiltres= ref([
    {name: 'de 10-100 $', id: '10-100'},
    { name: 'de 100-200 $', id: '100-200' },
    { name: 'plus de 200 $', id: '200-10000' },
]);


const experienceAnnee = ref([
    { name: '0 a 2 ans', id: '0-2 ans' },
    { name: '2 a 5 ans', id: '2-5 ans' },
    { name: '+ 7 ans', id: '+ 7 ans' },
]);

const trieElement = ref([
    {
        name: 'Plus Ancien', code: 'created_at-asc'
    },
    {
        name: 'Plus recent', code: 'created_at-desc'
    },
    {
        name: 'Prix descendant', code: 'taux_journalier-desc'
    },
    {
        name: 'Prix ascendant', code: 'taux_journalier-asc'
    },
    {
        name: 'populaire', code: 'populaire-asc'
    }
])

const categories = computed(()=> useCategory.categoriesGet.categories);

const showCategoryFilter = ref(false);
const Specialite = ref(false);
const experience = ref(false);
const showPriceFilter = ref(false);
const disponibilteFilter = ref(false);
const niveauFilter = ref(false);
const localisationFilter = ref(false);
const setCategory =()=>{
    showCategoryFilter.value = !showCategoryFilter.value
}
const subcategories = ref([]);
const selectedCategoryId = ref(null);
const selectedSubcategoryId = ref(null);
const fetchSubcategories = async () => {
    try {

        if (form.value.category) {
            const response = await axios.get(`/api/subcategories/${form.value.category}`);
            subcategories.value = response.data.subcategories;
        } else {
            subcategories.value = [];
        }
    } catch (error) {
        console.error('An error occurred while fetching subcategories:', error);
    }
};

watch(form, () => {
    fetchSubcategories();
});













watch(form, throttle(() => {

    fetchSubcategories();

    router.get('/find-freelance',
        pickBy(form.value),
        {
            preserveState: true,
            preserveScroll: true,
            only:['freelances','filters']
        })
}, 1000), { deep: true,})

defineOptions({
    layout: WebLayout,

});



</script >



<template>
    <div class="min-h-screen pt-16 lg:pt-14">
        <div class="relative flex flex-col pb-8 ">
            <div class="relative py-8 lg:py-4 lg:h-20 bg-skin-fill dark:bg-gray-800 ">

                <div class="absolute inset-0 flex items-center justify-center">
                    <h1 class="text-xl text-white font-bega-semibold lg:text-4xl">Trouver un freelance</h1>
                </div>
            </div>
             <div class="px-4 my-4">
                <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                <Link href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    Acceuil
                </Link>
                </li>


                    <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 break-before-auto dark:text-gray-400">find-freelance</span>
                    </div>
                    </li>
            </ol>
                </nav>
            </div>

            <div class="sticky top-0 z-30 grid h-auto grid-cols-12 px-4 py-2 bg-white dark:bg-gray-800 lg:z-0 lg:bg-transparent lg:relative ">
                <div class="hidden lg:col-span-3 lg:flex">
                </div>

                <div class="relative grid col-span-12 gap-4 py-2 lg:px-6 lg:grid-cols-12 lg:col-span-9 lg:gap-2 ">
                    <div class="px-4 lg:col-span-9">

                        <MazInput v-model="form.search"
                        placeholder="recherche"
                                            right-iconicon='magnifying-glass' />
                    </div>
                    <div class="sticky top-0 flex flex-row justify-between gap-2 px-4 lg:col-span-3">

                        <div class="block lg:hidden">


                            <Button icon="pi pi-filter-fill"  @click="showFilters = !showFilters"
                            rounded
                            outlined
                            aria-label="Filter" />
                        </div>


                        <div class="flex gap-2">

                            <div>

                            </div>
                            <div class="">


                                    <div class="block">

                                          <Dropdown v-model="form.orderBy" optionValue="code"
                                          :options="trieElement" showClear
                                            optionLabel="name"
                                           placeholder="Trier par" size="small"
                                          class="" />


                                    </div>

                            </div>


                        </div>


                    </div>

                </div>


            </div>

             <div  class="grid grid-cols-12 px-2">
                <div class="w-full col-span-3 mt-4 leading-normal text-gray-900 lg:px-2">

                    <div :class="showFilters ? 'fixed inset-0  top-0  bottom-0  dark:bg-gray-900 bg-white z-[600] p-4 transition-all duration-200 w-full' : 'hidden w-full h-auto mt-0  md:top-[6rem]  inset-0 z-20'"
                        class="overflow-x-hidden overflow-y-auto border border-gray-400 rounded-md shadow lg:h-auto lg:block lg:border-transparent lg:shadow-none lg:bg-transparent custom-scrollbar"
                        id="menu-content">

                        <nav class="overflow-y-auto">
                            <!-- Filtres -->
                            <div
                                class="w-full p-4 overflow-y-auto bg-white rounded-lg custom-scrollbar dark:bg-gray-800">
                                <h3 class="mb-6 font-bold text-gray-700 dark:text-gray-100">Filtres</h3>
                                <div class="mt-4 mb-4 border-t py-2.5 border-b relative border-gray-400 ">
                                    <button @click="setCategory()"
                                        class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                        <span class="text-base dark:text-gray-100"> Catégorie</span>
                                        <svg v-show="!showCategoryFilter" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        <svg v-show="showCategoryFilter" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                        </svg>
                                    </button>
                                     <Collapse :when="showCategoryFilter" class="overflow-hidden leading-normal">

                                        <div class="m-2">

                                              <Dropdown v-model="form.category" :options="categories" optionValue="id" optionLabel="name" placeholder="Votre categorie" showClear
                                                 class="w-full border border-gray-300 md:w-12rem"/>

                                        </div>

                                    </Collapse>

                                </div>


                                <div class="py-3 mb-4 border-b border-gray-400">
                                    <button @:click="Specialite= !Specialite"
                                        class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 dark:text-gray-100 focus:outline-none">
                                        <span class="text-base dark:text-gray-100">Specialite</span>
                                        <svg v-show="!Specialite" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        <svg v-show="Specialite" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                        </svg>
                                    </button>
                                    <Collapse :when="Specialite" class="overflow-hidden leading-normal">

                                        <div class="m-2">
                                              <Dropdown v-model="form.sub_category" :options="subcategories" optionValue="id" optionLabel="name" placeholder="Votre sous categories" showClear
                                                         class="w-full"/>

                                        </div>


                                      </Collapse>
                                </div>



                                <div class="py-3 mb-4 border-b border-gray-400">
                                    <button @click="experience=!experience"
                                        class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 dark:text-gray-100 focus:outline-none">
                                        <span class="text-base dark:text-gray-100">Annee Experience</span>
                                        <svg v-show="!experience" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        <svg v-show="experience" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                        </svg>
                                    </button>
                                    <Collapse :when="experience">

                                     <div class="m-2">
                                                  <Dropdown v-model="form.experience_annee"
                                                  :options="experienceAnnee"
                                                  optionValue="id"
                                                  optionLabel="name"
                                                  placeholder="Annee experience"
                                                  showClear
                                                    class=""/>

                                            </div>




                                    </Collapse>
                                </div>



                                <div class="py-3 mb-4 border-b border-gray-400">
                                    <button @click="showPriceFilter=!showPriceFilter"
                                        class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                        <span class="text-base dark:text-gray-100">Taux Journalier</span>
                                        <svg v-show="!showPriceFilter" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        <svg v-show="showPriceFilter" class="w-4 h-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                        </svg>
                                    </button>
                                    <Collapse :when="showPriceFilter">


                                        <div class="m-2">
                                            <Dropdown v-model="form.price"
                                            :options="tauxFiltres"
                                             optionValue="id"
                                              optionLabel="name"
                                              placeholder="Le taux journalier"
                                               showClear
                                               class="" />

                                        </div>


                                                                 />


                                    </Collapse>
                                </div>



                               <div class="relative py-3 mt-4 mb-4 border-gray-400 ">
                                    <button @click="disponibilteFilter = !disponibilteFilter"
                                        class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                        <span class="text-base dark:text-gray-100">Disponibilte</span>
                                        <svg v-show="!disponibilteFilter" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        <svg v-show="disponibilteFilter" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                        </svg>
                                    </button>
                                    <Collapse :when="disponibilteFilter" class="">

                                    <div class="m-2">

                                        <div class="flex card justify-content-center">
                                            <div class="flex flex-wrap gap-3">
                                                <div class="flex align-items-center">
                                                    <Checkbox v-model="form.disponible" value="En ligne" />
                                                    <label for="ingredient1" class="ml-2 dark:text-white">En ligne </label>
                                                </div>


                                            </div>
                                        </div>

                                        </div>
                                    </Collapse>
                                </div>


                                <div class="relative py-3 mt-4 mb-4 border-t border-gray-400 ">
                                    <button @click="niveauFilter = !niveauFilter"
                                        class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                        <span class="text-base dark:text-gray-100"> Niveau Freelannce</span>
                                        <svg v-show="!niveauFilter" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        <svg v-show="niveauFilter" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                        </svg>
                                    </button>
                                    <Collapse :when="niveauFilter">



                                             <div class="m-2">
                                                  <Dropdown v-model="form.level" :options="niveauFiltre" optionValue="code" optionLabel="name" placeholder="Disponibilite" showClear
                                                    class="w-full border border-gray-300 md:w-12rem"/>

                                                </div>





                                    </Collapse>
                                </div>



                                <div class="relative hidden py-3 mt-4 mb-4 border-t border-gray-400 ">
                                    <button @click="localisationFilter = !localisationFilter"
                                        class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                        <span class="text-base dark:text-gray-100"> Localisation</span>
                                        <svg v-show="!localisationFilter" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        <svg v-show="localisationFilter" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                        </svg>
                                    </button>
                                    <Collapse :when="localisationFilter">
                                        <div class="m-2">

                                             <Dropdown v-model="form.level" :options="niveauFiltre"
                                             optionValue="code"
                                             optionLabel="name"
                                             placeholder=""
                                             showClear
                                                      />

                                        </div>


                                    </Collapse>
                                </div>

                                    <div class="hidden lg:flex"
                                    v-if="form">


                                    <Button size="small"
                                    outlined
                                    label="Effacer le filtre"
                                     @click="clearFiltre()" />

                                    </div>

                            </div>
                         </nav>




                            <div class="flex w-full gap-4 px-4 md:hidden ">


                                 <Button label="appliquer" severity="success"  @click="showFilters=!showFilters" />

                                <Button label="Fermer" @click="showFilters=!showFilters" />

                            </div>





                    </div>


                </div>


                <div class="col-span-12 pt-2 lg:col-span-9">



                    <div class="px-4 py-4">
                        <!--
                        @if($count = $this->countFiltersApplied())
                        <div class="flex items-center gap-4 p-2 mb-4 rounded">

                            <span class="text-sm text-amber-600">Filtres appliqués : {{ $count }}</span>


                            <x-button.circle icon="x" wire:click='resetAll' />
                        </div>
                        @
                         -->


                        <div class="hidden ">
                            <pagination class="mt-6" :links="props.freelances.links" />

                        </div>


                    </div>





                    <div class="z-0 grid gap-4 p-2 md:grid-cols-2 lg:grid-cols-3">


                        <div v-for="freelance in props.freelances.data" class="mx-auto lg:mx-0  w-[80%]">

                            <FreelanceCard :freelance="freelance" :key="freelance.id" />

                        </div>



                        <h1 v-if="props.freelances.data.length === 0" class="text-lg text-gray-800 dark:text-gray-100 md:text-2xl">Pas de Resultat</h1>



                    </div>

                    <div class="mt-4">

                        <pagination class="mt-6" :links="props.freelances.links" />

                    </div>



                </div>



            </div>






        </div>

    </div>
</template>

<style>
.collapse {
    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}
</style>

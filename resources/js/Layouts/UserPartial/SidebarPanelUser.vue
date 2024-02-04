<script setup>

import { useLayoutStore }  from '@/store/store';

import {ref,reactive} from 'vue';


const  pageName = ref('');
const  expandedItems = ref([]);




const LayoutStore = useLayoutStore();


const toogleRightExpande = ()=>{

    LayoutStore.toogleRight()

    if(LayoutStore.SidebarExpanded){
        document.body.classList.add("is-sidebar-open")
    }else{
        document.body.classList.remove("is-sidebar-open")
    }
}



const toggleAccordion = (key) => {

        if (expandedItems.value.includes(key)) {
        expandedItems.value = expandedItems.value.filter((item) => item !== key);
        console.log(expandedItems.value)
    } else {
        expandedItems.value.push(key);
    }
};

const scrollToAndExpand=(routeName, key)=> {
    // Ajoutez la logique pour faire défiler la vue et ouvrir l'élément
    // Vous pouvez utiliser Vue Router pour la navigation
};

const sidebarMenu = {
    title: 'Racourci',
    items: [
        {
            service: {
                title: 'Service',
                submenu: [
                    {
                            title: 'Trouver un service',
                            route_name: 'categories',

                    },

                ],
            },
             freelance: {
                title: 'freelance',
                submenu: [
                    {
                        title: 'Trouver un freelance',
                        route_name: 'find_freelance',

                    },
                    {

                        title: 'Devenir freelance',
                        route_name: 'find_freelance',

                    },
                ],
            },
            parametres: {
                title: 'Profile',
                submenu: [
                    {
                        title: 'Modifier le profile',
                        route_name: 'profile.show',

                    },
                    {

                        title: 'Afillier un membre',
                        route_name: 'user.parainage',

                    },
                ],
            },

            /*
             Aide: {
                title: 'Aide',
                submenu: [

                     {
                        title: 'Signaler un comportement',
                        route_name: 'user.signalement',

                    },
                     {
                        title: 'Contact',
                        route_name: 'user.aide',

                    },

                ],
            },
            */
        },

        // ... Autres éléments du menu
    ],
};

</script>





<template>
    <div class="sidebar-panel">
            <div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-findDark-900">
                <!-- Sidebar Panel Header -->
                <div class="flex items-center justify-between w-full h-16 pl-4 pr-1">
                    <p class="text-base tracking-wider text-slate-800 dark:text-navy-100">
                        {{ sidebarMenu.title }}


                    </p>
                    <button @click="toogleRightExpande()"
                        class="p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>


                <div class="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6">
                    <template v-for="(menuItems, key) in sidebarMenu.items">
                        <div v-if="key > 0" class="h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"></div>
                        <ul class="flex flex-col flex-1 px-4 font-bega-light">


                            <template v-for="(menu, keyMenu) in menuItems" :key="keyMenu">
                                <template v-if="menu.submenu">





                                    <li>
                                        <a  @click="toggleAccordion(keyMenu)" :class="{
                                            'text-slate-800 font-bega-semibold dark:text-navy-50': expandedItems.includes(keyMenu),
                                            'text-slate-600 dark:text-navy-200': !expandedItems.includes(keyMenu)
                                        }"
                                            class="flex items-center justify-between py-2 text-xs+ tracking-wide  outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800  dark:hover:text-navy-50">
                                            <span>{{ menu.title }}</span>

                                            <svg :class="{ 'rotate-90': expandedItems.includes(keyMenu) }"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-4 h-4 transition-transform ease-in-out text-slate-400" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>

                                        <ul v-if="expandedItems.includes(keyMenu)">
                                            <template v-for="(submenu, keySubMenu) in menu.submenu">
                                                <li @click="scrollToAndExpand(submenu.route_name, keyMenu)">
                                                    <Link :href="route(submenu.route_name)"
                                                        class="flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                                                        :class="{ 'text-blue-600 dark:text-accent-light font-bega-medium': submenu.route_name === pageName, 'text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50': submenu.route_name !== pageName }">
                                                        <div class="flex items-center space-x-2">
                                                            <div
                                                                class="h-1.5 w-1.5 rounded-full border border-current opacity-40">
                                                            </div>
                                                            <span>{{ submenu.title }}</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </template>
                                        </ul>

                                    </li>

                                </template>

                                <template v-else>
                                    <li :key="keyMenu">
                                        <a :href="menu.route_name"
                                            class="flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out"
                                            :class="{ 'text-primary dark:text-accent-light font-bega-medium': menu.route_name === pageName, 'text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50': menu.route_name !== pageName }">
                                            {{ menu.title }}
                                        </a>
                                    </li>
                                </template>
                            </template>

                        </ul>
                    </template>
                </div>

            </div>
        </div>
</template>

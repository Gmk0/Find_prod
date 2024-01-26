<script setup>
import { computed } from 'vue'

const props = defineProps({ status: Number })

const title = computed(() => {
    return {
        503: '503',
        500: '500',
        404: '404',
        403: '403',
    }[props.status]
})

const description = computed(() => {
    return {
         503: "Oh non, nous sommes en mode maintenance. Revenez nous voir bientôt, nous ne faisons que des retouches de beauté !",
        500: "Whoops, quelque chose a dérapé sur nos serveurs. Nos ingénieurs ont été envoyés en mission de sauvetage de bits perdus.",
        404: "Désolé, la page que vous cherchez s'est égarée dans l'univers numérique. Nous avons envoyé une équipe de recherche de liens.",
        403: "Oh la la ! L'accès à cette page est interdit. Apparemment, même les octets ont besoin d'une invitation VIP."
    }[props.status]
})
</script>

<template>
    <div>
     <!-- component -->
    <!-- This is an example component -->
    <div class="h-screen w-screen bg-gray-50 dark:bg-gray-900 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div class="w-full lg:w-1/2 mx-8">
                    <div class="text-7xl text-amber-500 font-dark font-extrabold mb-8"> {{ title }}</div>
                <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                   {{ description }}
                </p>

                <Link href="/" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-amber-600 active:bg-red-600 hover:bg-amber-700">retourner à la page d'accueil</Link>
        </div>
            <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found">
            </div>

        </div>
    </div>
    </div>
</template>

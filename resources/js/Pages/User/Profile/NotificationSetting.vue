

<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

        <BreadUser
        title="Notification"
        first_title="Profile"
        :first_url="route('profile.show')"
        second_title="Notification"

        />

        <div>

            <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">

                <ProfileSetting />

                 <div class="col-span-12 lg:col-span-8">
                        <div class="md:grid md:grid-cols-1 md:gap-6">
                                <div class="flex justify-between md:col-span-1">
                                    <div class="px-4 sm:px-0">
                                        <h3 class="text-lg text-findDark-900 font-bega-medium dark:text-findDark-50">
                                            Paramètres de notifications
                                            </h3>

                                            <p class="mt-1 text-sm text-findDark-600 dark:text-findDark-100">
                                            Restez informé(e) sur les dernières opportunités! Personnalisez vos notifications et profitez d'avantages exclusifs en mettant à jour votre profil.
                                            </p>

                                    </div>


                                </div>

                            <div class="mt-5 rounded-md md:mt-0 md:col-span-2">
                                <div class="p-4 space-y-4 bg-white dark:bg-findDark-900">
                                    <div class="flex items-center">
                                        <div>
                                            <label class="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" class="sr-only peer" v-model="userParamaitres.push_notifications_enabled" @change='toogle()'>
                                                <div
                                                    class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600">
                                                </div>
                                                <span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir des notifications par push</span>
                                            </label>
                                        </div>


                                    </div>

                                    <div class="flex items-center">

                                            <div>
                                                <label class="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" class="sr-only peer" v-model="userParamaitres.email_notifications_enabled" @change='toogle()'>
                                                    <div
                                                        class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600">
                                                    </div>
                                                    <span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir des notifications par email
                                                        </span>
                                                </label>
                                            </div>


                                    </div>

                                    <div class="flex items-center">

                                        <div>
                                            <label class="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" class="sr-only peer" v-model="userParamaitres.number_notifications_enabled" @change='toogle()'>
                                                <div
                                                    class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600">
                                                </div>
                                                <span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir des notifications par telephone
                                                </span>
                                            </label>
                                        </div>


                                    </div>
                                    <div class="flex items-center">
                                        <div>
                                            <label class="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" class="sr-only peer" v-model="userParamaitres.send_invoice_enabled"  @change='toogle()'>
                                                <div
                                                    class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600">
                                                </div>
                                                <span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir les facture par
                                                    telephone
                                                </span>
                                            </label>
                                        </div>


                                    </div>



                            </div>
                            </div>


                        </div>
                    </div>



            </div>
        </div>
    </div>
</template>
<script setup>

import ProfileSetting from '@/Components/ProfileSetting.vue';
import UserLayout from '@/Layouts/UserLayout.vue';

import { useToast } from 'maz-ui';


import {  router } from '@inertiajs/vue3';

import {computed } from 'vue';
import { useNotification } from '@/store/store';


const toast = useToast()

const props=defineProps({
    notification:Object,
});

const notification = useNotification();

const userParamaitres = computed(() => props.notification);

const toogle = () => {

    router.post(route('updateNotificationParametres'), userParamaitres.value, {
        preserveScroll: true,
        onSuccess: () => {
            notification.getNotificationParametres();


        },
        onError: (error) => {
            console.log(error.messages);
        }
    })


}

defineOptions({
    layout: UserLayout,

});


</script>



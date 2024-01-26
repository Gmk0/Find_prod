<script setup>


import UserLayout from '@/Layouts/UserLayout.vue';
import { ref } from "vue";

import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';




import ProfileSetting from '@/Components/ProfileSetting.vue';

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
});

const activeTab = ref('AccountP');

defineOptions({
    layout: UserLayout,

});

</script>

<template>


     <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

           <BreadUser
                title="Profile"
                first_title="Profile"
                :first_url="route('profile.show')"


                />

            <div>

                <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">

                    <ProfileSetting />



                    <div v-cloak v-show="activeTab === 'AccountP'" class="col-span-12 lg:col-span-8">
                    <transition
                    enter-class="transition-all duration-300 easy-in-out"
                    enter-start-class="'opacity-0 [transform:translate3d(1rem,0,0)]'"
                    enter-end-class="'opacity-100 [transform:translate3d(0,0,0)]'"
                    >

                           <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                                <UpdateProfileInformationForm :user="$page.props.auth.user" />

                                <SectionBorder />
                            </div>

                    </transition>


                    </div>

                    <div  v-if="activeTab === 'Security'" x-transition:enter="transition-all duration-300 easy-in-out"
                        x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                        x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">










                    </div>






                </div>



            </div>


        </div>
</template>








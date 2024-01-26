

<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">

        <BreadUser title="Securite" first_title="Profile" :first_url="route('profile.show')"
            second_title="Securite" />

        <div>

            <div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">

                <ProfileSetting />

                 <div class="col-span-12 lg:col-span-8">
                        <div v-if="$page.props.jetstream.canUpdatePassword">
                        <UpdatePasswordForm class="mt-10 sm:mt-0" />

                        <SectionBorder />
                    </div>




                             <div   class="col-span-12 mt-4 lg:col-span-8">



                                    <LogoutOtherBrowserSessionsForm :sessions="sessions" class="mt-10 sm:mt-0" />






                                </div>
                 </div>





            </div>
        </div>
    </div>
</template>
<script setup>

import ProfileSetting from '@/Components/ProfileSetting.vue';
import UserLayout from '@/Layouts/UserLayout.vue';

import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';

import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import { useToast } from 'maz-ui';



defineProps(['sessions']);
const toast = useToast()





defineOptions({
    layout: UserLayout,

});


</script>



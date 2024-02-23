

<script setup>

import ChatLayout from '@/Layouts/ChatLayout.vue';
import MainSidebarF from '@/Layouts/FreelancePartial/MainSidebarF.vue';

import ChatFreelance from '@/Components/ChatFreelance.vue';



import BodyMessage from '@/Components/BodyMessage.vue';

import { router, usePage } from '@inertiajs/vue3';

const page = usePage();

defineOptions({
    layout: ChatLayout,

});


const props=defineProps({
    conversations: Array,
    messages: Array,
    chat: Object,
    user: Object,
})




window.Echo.private(`chat.${page.props.auth.user.id}`)
    .listen('MessageSent', (e) => {

        props.messages.push(e.message);
        // props.conversations.data.push(e.conversation);


        //props.conversations.push(e.conversations);
        //  console.log(e.conversation);
        // Traitez les données reçues lors de l'événement
    });
</script>


<template>
    <div class="flex overflow-hidden min-h-[100vh] grow dark:bg-navy-900">
        <div class="overflow-hidden">
            <div class="sidebar print:hidden">

                <!-- Main Sidebar -->

                <MainSidebarF />
                <!-- Sidebar Panel -->





                <ChatFreelance :Conversations="props.conversations" />




            </div>
        </div>



        <BodyMessage :messages="props.messages" :chatId="props.chat?.id" :user="props.user" />




    </div>
</template>



<style scoped></style>

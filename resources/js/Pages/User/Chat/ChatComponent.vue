

<script setup>

import ChatLayout from '@/Layouts/ChatLayout.vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';

import ChatComponentUser from '@/Components/ChatComponentUser.vue';

import BodyMessage from '@/Components/BodyMessage.vue';

import { Link, useForm, router,usePage } from '@inertiajs/vue3';

const page = usePage();

defineOptions({
    layout: ChatLayout,

});



const props=defineProps({
    conversations:Object,
    messages:Array,
    chat:Object,
    user:Object,
})

var data = { soundurl: '/sound/bell.mp3' }

const playSound = () => {
    var audio = new Audio(data.soundurl);
    audio.play();
}


window.Echo.private(`chat.${page.props.auth.user.id}`)
    .listen('MessageSent', (e) => {

        props.messages.push(e.message);

        playSound();
       // props.conversations.data.push(e.conversation);


        //props.conversations.push(e.conversations);
        //  console.log(e.conversation);
        // Traitez les données reçues lors de l'événement
    });


</script>


<template>
    <div class="flex overflow-hidden min-h-100vh grow dark:bg-navy-900">
        <div class="overflow-hidden">
            <div class="sidebar print:hidden">
                <!-- Main Sidebar -->

                 <MainSidebarUser />
                <!-- Sidebar Panel -->




                <ChatComponentUser :Conversations="props.conversations" />




            </div>
        </div>

        <BodyMessage :messages="props.messages" :chatId="props.chat?.id" :user="props.user"/>




    </div>


</template>



<style scoped></style>

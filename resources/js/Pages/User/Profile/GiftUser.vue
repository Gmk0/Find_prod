


<template>

    <!-- Section Félicitations et Choix des Cadeaux -->
    <section class="bg-gray-100 min-h-screen py-20  ">
      <div class="container mx-auto ">
        <div class="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <h2 class="text-3xl font-semibold text-[#F47521] mb-6">Félicitations ! ​🥳​🥳​</h2>
          <p class="text-gray-600 mb-8 text-lg">Vous avez parrainé avec succès 10 personnes. Nous vous remercions pour votre soutien et votre engagement. ​❤️​</p>

          <p class="text-gray-600 text-lg mb-8">Pour célébrer cet accomplissement, veuillez choisir votre cadeau parmi les options ci-dessous :</p>

          <!-- Ajoutez vos cartes cadeaux ici -->


          <div class="grid lg:grid-cols-3 gap-6 space-x-4">


            <template v-for="service in props.services.data">
                  <CardGift :service="service"/>
            </template>



          </div>
        </div>
      </div>
    </section>

</template>

<script setup>

import ServiceCard from '@/Components/ServiceCard.vue';
import UserLayout from '@/Layouts/WebLayout.vue';

import { computed, ref } from 'vue';



const props=defineProps({
    services: Object
});


defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>

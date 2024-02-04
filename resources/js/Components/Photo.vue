<template>
    <div>




        <img v-if="user.profile_photo_path !=null"
        :class="`w-${taille} h-${taille}  rounded-full`"
            :src="'/storage/' + user.profile_photo_path" alt="">

        <img v-else
       :class="`w-${taille} h-${taille}   rounded-full`"
        :src="user.profile_photo_url"
            alt="">




    </div>
</template>

<script setup>

defineProps({
    user : Object,
    taille :  {
        type: String,
        default: '12',
    }
});

</script>

<style lang="scss" scoped>

</style>

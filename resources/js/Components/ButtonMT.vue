<template>
    <div>
         <button :type="type" class="block mt-4 w-full select-none font-bega-medium rounded-lg bg-amber-600 py-2 px-2 text-center align-middle
                                                 text-sm  uppercase text-white shadow-md shadow-pink-500/20 transition-all
                                                hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none
                                                active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50
                                                disabled:shadow-none">
                                                                     <slot />

                                                                    </button>

    </div>
</template>

<script setup>
    defineProps({
        type: {
        type: String,
    default: 'button',
    },
});
</script>


<style lang="scss" scoped>

</style>

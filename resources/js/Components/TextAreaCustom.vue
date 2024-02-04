<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
    placeholder:{
        type:String,
        default:'Ecrivez votre message'
    }

});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <textarea id="message" rows="4"
    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"
     :placeholder="placeholder"
    :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">

    </textarea>



</template>

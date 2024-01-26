

<script setup>
import { onMounted, ref, computed } from 'vue';

import { useCategoryStore } from '@/store/store';

import Dropdown from 'primevue/dropdown';

defineProps({
    modelValue: Object,
});

defineEmits(['update:modelValue']);

const input = ref(null);

const category = useCategoryStore();

const categories= computed(()=> category.categoriesGet.categories);


</script>

<template>

       <Dropdown :value="modelValue" :options="categories" optionValue="id" optionLabel="name" placeholder="Votre categorie" showClear
        class="w-full border border-gray-300 md:w-12rem" @input="$emit('update:modelValue', $event.target.value)"/>


</template>


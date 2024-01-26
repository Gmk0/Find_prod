<script setup>
defineProps({
    value: String,
});
</script>

<template>
    <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-200">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: String,
    as: String,
});
</script>

<template>
    <div>
        <button v-if="as == 'button'" type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-50 hover:dark:bg-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
            <slot />
        </button>

        <a v-else-if="as =='a'" :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-50 hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none focus:bg-gray-100">
            <slot />
        </a>

        <Link v-else :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 dark:text-gray-50 focus:outline-none hover:dark:bg-gray-700 focus:bg-gray-100">
            <slot />
        </Link>
    </div>
</template>

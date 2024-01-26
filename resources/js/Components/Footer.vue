<template>
    <div>
        <footer class="px-4 py-6 md:flex md:items-center md:justify-between 2xl:px-0 md:py-10">
        <p class="mb-4 text-sm text-center text-gray-500 md:mb-0">

            <a href="" class="hover:underline" target="_blank">FIND</a>. All rights reserved.
        </p>
        <ul class="flex flex-wrap justify-center s-center">
            <li>
                <a href="{{url('/terms-of-service')}}"
                    class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a>
            </li>
            <li><a href="{{url('/privacy-policy')}}"
                    class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Policy</a>
            </li>

            <li><a href="{{url('/contact')}}"
                    class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a>
            </li>
        </ul>
    </footer>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

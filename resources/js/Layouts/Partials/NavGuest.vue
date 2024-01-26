<template>

    <nav class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
                        <div class="container flex items-center justify-between py-0 flex-wrap-inherit">
                            <Link :href="route('home')"
                                class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"><span
                                    class=" to-orange-400">FIND</span>
                            </Link>

                            <div navbar-menu
                                class="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto">
                                <ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                                    <li>
                                        <Link :href="route('home')" class="flex items-center px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
                                            aria-current="page" >
                                            <i class="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60"></i>
                                            Accueil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link :href="route('profile.show')" class="block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
                                            >
                                            <i class="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60"></i>
                                           Profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
                                            :href="route('login')">
                                            <i class="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60"></i>
                                           Connexion
                                        </Link>
                                    </li>
                                </ul>


                            </div>
                        </div>
        </nav>
</template>

<script>
export default {
    setup () {


        return {}
    }
}
</script>

<style lang="css" scoped>
@import url('../../../css/tailwind.css');
@import url('../../../css/app.css');

</style>

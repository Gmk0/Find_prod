<template>

    <Head title="Accueil">
         <meta name="description" content="Find-freelance regorge des excellents professionnels africains. Gagner du temps et soyez satisfait des services de nos freelances à des prix équitables.">
    </Head>


         <div class="relative min-h-screen 2xl:min-h-full slideshow slideshow-wrapper pb-section sliderFull">

            <div class="hidden lg:block">

                  <div class="home-slideshow">
                 <Swiper
                        :modules="[Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y]"
                        effect="fade"
                        :loop="true"
                        :spaceBetween="30"
                        :slides-per-view="1"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false
                        }"
                        >
                        <swiper-slide>

                            <div class="slide slideshow--medium">
                                <div class="blur-up lazyload bg-size">
                                    <img class="blur-up lazyload bg-[#FFAA76] " data-src="/images/optimize/sans.png" src="/images/optimize/sans.png"
                                        alt="women sans" title="women sans" />
                                    <div class="slideshow__text-wrap slideshow__overlay classic middle">
                                        <div class="slideshow__text-content classic middle">
                                            <div class="container">
                                                <div class="wrap-caption right">
                                                    <h2 class="h1 mega-title slideshow__title"></h2>
                                                    <span class="mega-subtitle slideshow__subtitle"></span>
                                                    <span class=""></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </swiper-slide>
                        <swiper-slide>
                        <div class="relative slide slideshow--medium">
                            <div class="blur-up lazyload bg-size">
                                <img class="blur-up lazyload bg-img" data-src="/canva/graceBrand.svg" src="/canva/graceBrand.svg"
                                    alt="graceP" title="graceP" />
                                <div class="slideshow__text-wrap slideshow__overlay classic middle">
                                    <div class="slideshow__text-content classic middle">
                                        <div class="container">
                                            <div class="wrap-caption right">
                                                <h2 class="h1 mega-title slideshow__title"></h2>
                                                <span class="mega-subtitle slideshow__subtitle"></span>
                                                <span class=""></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute flex flex-col hidden floating gap-1 right-[30%] top-1/2">
                                <h1 class="text-lg text-white font-bega-medium ">Grace K.</h1>
                                <p class="text-base text-white font-bega-medium">Marketeuse Digital</p>

                            </div>
                        </div>
                        </swiper-slide>




                        <swiper-slide>
                        <div class="slide slideshow--medium">
                            <div class="blur-up lazyload bg-size">
                                <img class="blur-up lazyload " data-src="/images/optimize/homme.png" src="/images/optimize/homme.png"
                                    alt="New Season Styles" title="New Season Styles" />
                                <div class="slideshow__text-wrap slideshow__overlay classic middle">
                                    <div class="slideshow__text-content classic middle">
                                        <div class="container">
                                            <div class="wrap-caption right">
                                                <h2 class="h1 mega-title slideshow__title"></h2>
                                                <span class="mega-subtitle slideshow__subtitle"></span>
                                                <span class=""></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </swiper-slide>

                      </Swiper>
                </div>
            </div>

            <div class="absolute top-0 left-0 w-full h-screen bg-skin-fill dark:bg-findDark-900 lg:hidden">

                <div
                    class="hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] absolute bottom-[-100px] md:w-[800px] md:h-[750px] lg:top-[120px] lg:right-[-100px] xl:right-0 w-[500px] h-[500px] 2xl:w-[1026px] 2xl:h-[1026px]">
                    <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                        class="absolute inset-0 w-full h-full animate-spin-slow">
                        <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                            stroke="#D4D4D4" stroke-opacity="0.7"></path>
                        <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:R65m:-gradient-1)" stroke-linecap="round">
                        </path>
                        <defs>
                            <linearGradient id=":R65m:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#f8fafc"></stop>
                                <stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                        class="absolute inset-0 w-full h-full animate-spin-slow">
                        <path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                            stroke="#D4D4D4" stroke-opacity="0.7"></path>
                        <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:R65m:-gradient-2)" stroke-linecap="round">
                        </path>
                        <defs>
                            <linearGradient id=":R65m:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#f8fafc"></stop>
                                <stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div class="relative w-full lg:-mt-10" id="girl">

                    <!-- calendar -->

                    <!-- ux class -->

                </div>

            </div>




            <div data-aos="fade-right" data-aos-duration="800"
                class="absolute top-0 left-0 z-50 px-6 py-8 xl:py-10 lg:mt-8 2xl:mt-16 lg:col-span-6 lg:py-12 md:mb-8 xl:place-self-center lg:mb-0 lg:w-1/2">
                <div class="pt-[8rem] 2xl:pt-[10rem] px-1">

                    <h1 class="text-3xl text-center text-white font-bega-bold lg:text-5xl 2xl:text-6xl lg:text-left">
                        Votre satisfaction dans nos services Freelance <br />
                    </h1>

                     <HomeSearch />


                </div>

            </div>



        </div>

        <div id="features" class="bg-findDark-100 dark:bg-findDark-800">

            <div data-aos="" class="z-10 px-8 py-8 overflow-hidden lg:max-w-6xl 2xl:max-w-7xl 2xl:px-2 lg:mx-auto md:px-6">
                <div class="flex flex-col-reverse lg:flex-row ">
                    <div data-aos="fade-up" data-aos-duration="500" class="w-full lg:w-5/12">
                        <h1
                            class="text-slate-800 mb-4 xl:mb-6  dark:text-white text-2xl font-bega-semibold leading-snug lg:text-[40px] xl:text-5xl">

                            Atteignez vos objectifs plus rapidement avec

                            <span class="text-amber-600 font-bega-semibold">FIND</span>
                        </h1>

                        <div class="grid grid-cols-1 gap-2 mx-auto md:mx-0 md:grid-cols-2">

                            <Link :href="route('find_freelance')"
                                class="w-10/12 rounded-md mx-auto 2xl:py-3  2xl:text-lg text-center bg-amber-600 px-8 py-2.5 font-bega-medium text-white shadow-md shadow-amber-500/20 hover:bg-amber-700 duration-200 sm:w-auto">Trouver
                                un freelance</Link>

                            <Link :href="route('register.begin')"
                                class="mt-4 md:mt-0 mx-auto text-center box-border w-10/12 2xl:py-3  2xl:text-lg   rounded-md border border-amber-500/20 px-8 py-2.5 font-bega-medium text-amber-600 shadow-md shadow-amber-500/10 hover:bg-findDark-100 duration-200   ">Dévenir

                                freelance</Link>

                        </div>


                        <!-- brand -->
                        <div class="mt-4 mb-2 text-center">
                            <h1 class="text-xl text-findDark-500 font-bega-light">Nos partenaires</h1>

                        </div>
                        <div class="grid grid-cols-2 gap-4 mx-4 mt-6 md:mx-0 px-auto md:gap-2 md:grid-cols-3 ">



                              <img src="/images/brand/makutano.png" alt="makutano"
                                    class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 findDarkscale hover:findDarkscale-0 bg-findDark-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95">

                                <img src="/images/brand/silikin.png" alt="silikin"
                                    class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 findDarkscale hover:findDarkscale-0 bg-findDark-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95">

                        </div>

                    </div>

                    <div class="px-4 lg:w-1/12"></div>

                    <div data-aos="fade-left" data-aos-duration="500" class="hidden w-full px-4 lg:block md:w-6/12">
                        <div class="lg:ml-auto lg:text-right">
                            <div class="relative z-10 inline-block pt-11 lg:pt-0">
                                <img src="/canva/fon2.jpg" alt="hero div bg-img img" class="rounded-lg lg:ml-auto">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <TalkAboutUs />

          <div  id="monde2" class=" xl:min-h-full lg:min-h-screen dark:bg-findDark-900">

            <div class="p-4">
                <div class="px-6 m-auto text-findDark-600 xl:container md:px-12 xl:px-16">
                    <div
                        class="flex-row-reverse justify-center p-4 space-y-6 bg-findDark-100 rounded-lg dark:bg-findDark-800 lg:p-16 md:flex md:gap-6 md:space-y-0 lg:items-center">
                        <div data-aos="flip-left" data-aos-duration="500" class="md:5/12 lg:w-1/2">
                            <img src="/images/services/presentation3.png" alt="image"
                                class="rounded-lg dark:bg-findDark-800 floating bg-skin-fill" loading="lazy" width="" height="" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="300" class="md:7/12 lg:w-1/2">
                            <div class="px-4">
                            <h2 class="text-xl text-findDark-900 font-bega-semibold md:text-4xl dark:text-white">
                                Trouvez dès aujourd'hui la personne idéale pour votre projet !
                            </h2>
                            </div>

                            <div class="space-y-4 divide-y divide-findDark-100 font-bega-light dark:divide-findDark-800">
                                <div class="flex gap-4 mt-4 md:items-start">
                                    <div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">

                                          <CheckCircleIcon class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"  />
                                    </div>
                                    <div class="w-5/6">
                                        <h4 class="text-lg text-findDark-700 font-bega-medium dark:text-indigo-300">Des services de
                                            haute qualité
                                            pour
                                            un prix équitable</h4>
                                            <p class="text-findDark-500 dark:text-findDark-50">Mettez la main sur d'excellents services
                                                a bon prix . Une
                                                taxation en fonction de la demande de service</p>
                                    </div>
                                </div>
                                <div class="flex gap-4 pt-2 md:items-start">
                                    <div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">

                                        <DocumentTextIcon class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"  />
                                    </div>
                                    <div class="w-5/6">
                                        <h4 class="text-lg text-findDark-700 font-bega-medium dark:text-teal-300">Des services
                                            efficacement fait</h4>
                                            <p class="text-findDark-500 dark:text-findDark-50">Decouvrez les freelancers qui convient
                                                afin de travailler
                                                avec vous</p>
                                    </div>
                                </div>
                                <div class="flex gap-4 mt-4 md:items-start">
                                    <div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">


                                            <svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>


                                    </div>
                                    <div class="w-5/6">
                                        <h4 class="text-lg text-findDark-700 font-bega-medium dark:text-indigo-300">Des Paiement
                                            protégés</h4>
                                            <p class="text-findDark-500 dark:text-findDark-50">Assurez-vous de connaître le coût total
                                                dès le départ.
                                                Votre rémunération ne sera versée que lorsque vous aurez confirmé
                                                que le travail est satisfaisant.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4 pt-2 md:items-start">
                                    <div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">

                                        <svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>



                                    </div>
                                    <div class="w-5/6">
                                        <h4 class="text-lg text-findDark-700 font-bega-medium dark:text-teal-300">Une Assistance 24h/24
                                            et 7j/7</h4>
                                            <p class="text-findDark-500 dark:text-findDark-50">Des Questions ? notre equipe d'assistance
                                                est disponible
                                                24h/24 pour vous aider à tout moment et en tout lieu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>


        <div id="Services" class="bg-findDark-100 lg:min-h-screen dark:bg-findDark-800">

            <div class="max-w-6xl px-8 py-6 mx-auto md:px-6">
                <!-- heading text -->
                <div class="mb-10 text-center">
                    <span class="font-bega-medium text-amber-600">Categories</span>
                    <h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-findDark-200 sm:text-xl">Découvrez les services</h1>

                </div>

                <!-- box wrapper -->
                <div class="grid grid-cols-2 gap-4 font-bega-light md:gap-6 md:grid-cols-4 xl:gap-8">
                    <div v-for="category in categories">


                        <Link :href="route('categoryName', category.slug)"
                            class="flex flex-col items-center px-2 py-4 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">

                            <img v-if ="category.media.url !=''" :src="category.media.url" class="w-20 h-20 rounded-md" :alt="category.media.url">
                             <img v-else src="/images/logo/ff3.png" class="w-20 h-20 rounded-md" :alt="category.media.url">

                            <h4
                                class="mt-3 mb-1 md:text-[20px] text-[16px]   font-bega-medium text-slate-600 duration-200 group-hover:text-white">
                                {{ category.name }}</h4>

                        </Link>
                    </div>

                </div>
            </div>

        </div>

        <div v-if="getMissions.length > 0" class=" bg-findDark-50 lg:min-h-screen dark:bg-findDark-900">
              <div class="max-w-6xl px-8 py-6 mx-auto md:px-6">
                    <!-- heading text -->
                    <div class="mb-10 text-center">
                        <span class="font-bega-medium text-amber-600">Mission</span>
                        <h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-findDark-200 sm:text-xl">Découvrez quelques missions</h1>

                    </div>

                      <div class="py-4 mx-2">

                        <div class="flex items-end justify-end mb-2">
                            <div class="flex gap-4">



                                <button @click="navigate('prev')"
                                    class="w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button @click="navigate('next')"
                                    class="w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                        </div>



                     <swiper class="flex py-8 mb-4"
                        :modules="[Navigation, Pagination, Scrollbar, EffectCube, A11y]"

                        :spaceBetween="30"

                        :space-between="25"
                        :breakpoints="{ 300: { slidesPerView: 1 }, 900: { slidesPerView: 3, } }"
                        @swiper="onSwiperInitialized"
                        >
                        <swiper-slide v-for="mission in getMissions" class="p-2">

                        <div class="p-2 mb-4 rounded-md shadow-md h-[25rem] lg:flex-col">
                            <img class="object-cover object-center w-full h-48 bg-center bg-cover shrink-0"
                                src="/images/illustrations/missionF.svg" alt="image" />
                            <div class="flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5">
                                <div class="flex items-center justify-between">
                                    <a class="text-xs+ font-medium text-info" href="#">
                                        {{ mission.category.name }}</a>
                                    <div class="-mr-1.5 flex space-x-1">
                                        <button
                                            class="hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>
                                        </button>

                                        <div class="p-2">

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p href="#"
                                        class="max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 ">
                                        {{ mission.title }}</p>
                                </div>
                                <p  class="mt-1 line-clamp-3">

                                    <template v-if="!showMore">
                                        <div class="max-w-xs truncate font-bega-light">

                                            {{ truncateText(mission.description, 70) }}
                                        </div>

                                    </template>
                                    <template v-else>
                                          <div class="max-w-xs break-words font-bega-light">
                                        {{ mission.description }}

                                        </div>

                                    </template>


                                <div v-if="mission.description.length > 70">
                                    <button @click="showMore = !showMore">
                                        <span v-show="showMore" class="text-blue-600">Lire moins</span>
                                        <span v-show="!showMore" class="text-blue-600">Lire la suite</span>
                                    </button>

                                </div>
                                </p>
                                <div class="grow">
                                    <div class="flex items-center mt-2 text-xs">
                                        <a href="#" class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100">
                                            <div class="w-10 h-10 mb-2">

                                                <Photo :user="mission.user" taille="10" />

                                            </div>
                                            <span class="line-clamp-1">{{ mission.user.name }}</span>
                                        </a>
                                        <div class="self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"></div>
                                        <span class="shrink-0 text-slate-400 dark:text-navy-300">
                                            {{ mission.created_at }}
                                        </span>
                                    </div>
                                </div>
                                <div class="flex justify-between gap-4 mt-1">

                                           <div class="flex items-center ">
                                            <h1 class="text-lg font-bega-semibold text-amber-600">{{ mission.budget }} $</h1>

                                        </div>



                                    <div v-if="mission.status == 'pending' && $page.props.auth.freelance"  class="flex gap-4 mt-4">


                                               <a href="/freelance-gestion/missions">
                                                 <Button  size="small"
                                                   outlined severity="info"
                                                   label="Postuler" />
                                               </a>


                                    </div>
                                       <div v-if="mission.status == 'pending' && !$page.props.auth.freelance && !$page.props.auth.user ==null"  class="flex gap-4 mt-4">


                                                   <Link :href="route('register.begin')">
                                                     <Button  size="small"
                                                       outlined severity="info"
                                                       label="Etre prestaire pour postuler" />
                                                </Link>


                                        </div>


                                    <div v-if="$page.props.auth.user ==null" class="px-4">
                                        <Link :href="route('register')">
                                              <Button size="small"
                                               outlined severity="info"
                                               label="postuler" />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        </swiper-slide>

                        </swiper>



                    </div>







            </div>

        </div>


        <CommentaireUser />


          <div id="getStarted" class="bg-findDark-900 lg:min-h-screen">
            <div class="py-16 ">
                <div class="container px-6 m-auto space-y-8 text-findDark-500 md:px-12 lg:px-20">
                    <div
                        class="justify-center gap-6 p-3 mx-auto text-center rounded-lg md:flex md:text-left lg:items-center lg:gap-16">
                        <div data-aos="fade-up" data-aos-duration="500" class="mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                            <h1 class="text-3xl text-white font-bega-semibold md:text-4xl dark:text-white">Vous êtes un freelance à la
                                recherche
                                de
                                nouvelles opportunités ?
                            </h1>
                            <p class="text-base font-bega-light text-findDark-50 dark:text-findDark-300">
                                FIND permet aux freelances de proposer leurs compétences aux entreprises et autres personnes
                                intéressées
                                par
                                les offres
                                disponibles sur le site. En outre, la plateforme met en œuvre des tactiques de marketing pour
                                augmenter le
                                nombre
                                d'achats de services.
                            </p>
                            <div class="flex flex-wrap gap-6">
                                <Link  :href="route('register.begin')"
                                    class="relative flex items-center justify-center w-[6/12] h-12 px-8 mx-auto duration-300 bg-white rounded-full before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max">
                                    <span class="relative text-base font-bega-medium text-amber-600">Rejoignez
                                                                            Nous</span>
                                </Link>

                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="800"
                            class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">

                            <div class="col-span-5 row-span-4">
                                <img src="/images/services/work2.png"
                                    class="object-cover object-top w-full h-full mb-3 md:mb-0 rounded-xl" width="640"
                                    height="427" alt="work" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
          <div id="presentation" class="bg-findDark-100 dark:bg-findDark-950 lg:min-h-screen ">
            <div class="max-w-6xl px-8 py-6 mx-auto md:px-4">

                <!-- heading text -->
                <div class="mb-10 text-center">
                    <span class="font-bega-medium text-amber-600">Decouverte</span>
                    <h1 class="text-2xl font-bega-semibold text-slate-700 sm:text-3xl">Find </h1>

                </div>
                <div class="flex flex-col ">

                    <div data-aos="fade-in" data-aos-duration="500"
                        class="grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-8">
                        <div
                            class="flex flex-col items-center w-full px-8 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-findDark-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">
                            <i name="people-outline"
                                class="text-[55px] text-amber-600 duration-200  group-hover:text-white">
                            </i>
                            <h4
                                class="mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 dark:text-white duration-200 group-hover:text-white">
                                +200 Freelance</h4>

                        </div>

                        <div
                            class="flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl dark:bg-findDark-800 border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">
                            <i name="bag-check-outline"
                                class="text-[55px] text-amber-600 duration-200 group-hover:text-white">
                            </i>
                            <h4
                                class="mt-3 mb-1 text-[20px]  font-bega-medium dark:text-white text-slate-600 duration-200 group-hover:text-white">
                                500
                                Marchés
                            </h4>

                        </div>
                        <div
                            class="flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-findDark-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600">
                            <i name="albums-outline"
                                class="text-[55px] text-amber-600 duration-200 group-hover:text-white">
                            </i>
                            <h4
                                class="mt-3 mb-1 text-[20px]  font-bega-medium text-slate-600 duration-200 group-hover:text-white dark:text-white">
                                +10
                                Categories
                            </h4>

                        </div>
                    </div>



                    <div
                        class="p-2 bg-white border border-findDark-100 dark:border-findDark-700 rounded-3xl dark:bg-findDark-800 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12">
                        <div class="flex flex-col px-2 py-4 md:py-6 ">

                            <div class="space-y-6 py-auto justify md:col-span-2 sm:p-8">
                                <div class="px-6">
                                    <h1 class="mt-4 text-xl text-center text-findDark-800 font-bega-medium dark:text-white">Comment
                                        s'inscrire
                                        comme
                                        <span class="text-amber-800 dark:text-white">freelance ?</span>
                                    </h1>
                                </div>
                                <p class="mt-2 text-lg leading-none text-center text-findDark-700 text-md dark:text-white">
                                    <span class="font-serif">"</span>
                                    Apprenez à utiliser la Plateforme Find-freelance à l'aide de ces tutoriels.
                                    <span class="font-serif">"</span>
                                </p>

                            </div>
                            <div class="order-2 w-full h-48 mx-2 my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl">


                                <iframe class="w-full h-full aspect-video" src="https://www.youtube.com/embed/rw_3Yv-rhZM"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

        </div>

          <div id="faqs" class="bg-white lg:min-h-screen dark:bg-findDark-800 dark:text-white">

            <div class="px-8 py-6 mx-auto max-w-7xl md:px-6">

                <div class="mb-10 text-center">
                    <span class="font-bega-medium text-amber-600">Faqs</span>
                    <h1 class="text-2xl font-bega-semibold dark:text-findDark-50 text-slate-700 sm:text-3xl">Faqs </h1>

                </div>


                <div class="grid sm:grid-cols-2">
                    <div data-aos="fade-right" data-aos-duration="1000" class="w-full px-4">
                        <img src="/images//services/faq.png" alt="hero div img" class="rounded-full lg:ml-auto">
                    </div>
                    <div class="w-full lg:w-11/12">

                        <div class="px-1 py-2 text-findDark-800">

                            <div class="mt-6 text-lg leading-loose">

                            <div>
                                <div v-for="(faq, index) in faqsGet" :key="faq.id">
                                <button
                                    class="flex items-center justify-between w-full py-3 mt-4 text-findDark-800 border-b font-bega-semibold dark:text-white"
                                    :class="index !== faqsGet.length - 1 && 'border-b border-findDark-400'"
                                    @click="toggleAccordion(faq.id)"
                                >
                                    <div class="text-left">{{ faq.questions }}</div>

                                    <svg v-show="!expandedItems.includes(faq.id)" class="fill-current" viewBox="0 0 24 24" width="24" height="24">
                                    <path class="heroicon-ui"
                                                    d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z" />
                                    </svg>
                                    <svg v-show="expandedItems.includes(faq.id)" class="fill-current" viewBox="0 0 24 24" width="24" height="24">
                                         <path class="heroicon-ui"
                                                    d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z" />
                                    </svg>
                                </button>

                                <Collapse :when="expandedItems.includes(faq.id)" class="m-2 ">

                                        <p class="m-2 text-sm text-justify text-findDark-800 dark:text-white">{{ faq.reponses }}</p>

                                    </Collapse>



                                </div>
                            </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>





</template>


<script setup>

import WebLayout from '@/Layouts/WebLayout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useStore, useMissions, homeSetting } from '@/store/store';// Assurez-vous d'ajuster le chemin d'importation
import { onMounted } from 'vue';

import { Head, usePage } from '@inertiajs/vue3';
import { Collapse } from 'vue-collapsed';
import {ref, computed } from 'vue';

import CommentaireUser from '@/Components/CommentaireUser.vue';

import {DocumentTextIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'



import HomeSearch from '@/Components/HomeSearch.vue';

import TalkAboutUs from '@/Components/TalkAboutUs.vue';



import { Navigation, Pagination, Autoplay , EffectFade,Scrollbar, A11y, EffectCube } from 'swiper/modules';



defineProps({
    categories:Array
});







const expandedItems = ref([]);

const toggleAccordion = (key) => {

    if (expandedItems.value.includes(key)) {
        expandedItems.value = expandedItems.value.filter((item) => item !== key);

    } else {
        expandedItems.value=[];
        expandedItems.value.push(key);
    }
};


const swiperInstance=ref(null);
const navigate = (direction) => {
    if (swiperInstance.value) {
        if (direction === 'prev') {
            swiperInstance.value.slidePrev();
        } else if (direction === 'next') {
            swiperInstance.value.slideNext();
        }
    }
};

const onSwiperInitialized = (swiper) => {
    swiperInstance.value = swiper;
};

const store = useStore();
const homeSettingStore = homeSetting()

const faqsGet= computed(()=> homeSettingStore.faqsGetter)
const missions =useMissions();
const getMissions= computed(()=> missions.missionGeters);

onMounted(() => {
    // Change la valeur de isNotHome dans le store
    store.updateIsHome();
    missions.fetchLastMission();
    homeSettingStore.fetchLastFaq();



});

defineOptions({
    layout: WebLayout,


});

const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
}




const showMore=ref(false);


</script>

<style>

.collapse {
    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}
</style>




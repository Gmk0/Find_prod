<template>
    <!--
    <div>

        <div class="w-full bg-gray-900 lg:bg-base-200">

        <div class="text-white bg-gray-900 border-t border-gray-800 md:hidden">


            <div class="container flex flex-col p-4 mx-auto overflow-hidden lg:flex-row">
                <div class="w-full p-2 mx-auto">


                    <div  class="relative mb-3">
                        <h6 class="mb-0">
                            <button @click="handleCollapse"
                                class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                data-collapse-target="animated-collapse-1">
                                <span>Categories</span>
                                <i :class="isOpen ? 'rotate-180 transition-transform' : ''"
                                    class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                            </button>
                        </h6>
                         <Collapse :when="isOpen" class="px-6 overflow-hidden collapse">


                                <ul class="flex flex-col w-full px-4 space-y-2 text-left list-none list-inside text-gray-50">


                                    <li v-for="category in categories">
                                        <Link :href="route('categoryName', category.slug)"
                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-200">{{category.name}}</Link>
                                    </li>


                                </ul>


                        </Collapse>

                    </div>


                    <div  class="relative mb-3">
                        <h6 class="mb-0">
                            <button @click="handleCollapse2"
                                class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                data-collapse-target="animated-collapse-1">
                                <span>A propos</span>
                                <i :class="isOpen2 ? 'rotate-180 transition-transform' : ''"
                                    class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                            </button>
                        </h6>

                        <Collapse :when="isOpen2" class="px-6 overflow-hidden collapse">


                                <ul class="flex flex-col w-full px-4 text-left list-none text-gray-50">
                                    <li><Link :href="route('terms.show')"                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Privacy
                                            Policy</Link></li>
                                    <li><Link href="/contact"
                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100 ">Contact</Link>
                                    </li>

                                    <li> <Link :href="route('terms.show')"
                                            class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Terms
                                            of
                                            Service</Link></li>
                                </ul>
                         </Collapse>


                    </div>

                    <div  class="relative hidden mb-3">
                            <h6 class="mb-0">
                                <button @click="handleCollapse3"
                                    class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                    data-collapse-target="animated-collapse-1">
                                    <span>Freelance</span>
                                    <i :class="isOpen3 ? 'rotate-180 transition-transform' : ''"
                                        class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                                </button>
                            </h6>
                              <Collapse :when="isOpen3" class="px-6 overflow-hidden collapse">


                                    <ul class="flex flex-col w-full px-4 font-thin text-left list-none text-gray-50">
                                        <li><Link href="/find-freelance"
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Trouver un Freelance</Link>
                                        </li>
                                        <li><Link :href="route('createProject')"
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">
                                                Mission</Link>
                                        </li>

                                    </ul>
                             </Collapse>

                    </div>
                    <div  class="relative mb-3">
                        <h6 class="mb-0">
                            <button @click="handleCollapse4"
                                class="relative flex items-center w-full p-4 text-base font-semibold text-left transition-all ease-in border-solid cursor-pointer text-gray-50 border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500"
                                data-collapse-target="animated-collapse-1">
                                <span>Freelance</span>
                                <i :class="isOpen4 ? 'rotate-180 transition-transform' : ''"
                                    class="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down "></i>
                            </button>
                        </h6>

                        <Collapse :when="isOpen4" class="px-6 overflow-hidden collapse">


                                  <ul class="flex flex-col w-full p-0 px-4 font-thin text-left list-none text-gray-50">
                                        <li><a href=""
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">Freelance</a>
                                        </li>
                                        <li><a href=""
                                                class="inline-block py-2 pl-3 pr-5 text-white hover:text-gray-800 dark:hover:text-gray-100">
                                                Mission</a>
                                        </li>

                                    </ul>
                        </Collapse>
                    </div>



                </div>
            </div>


            <div class="flex flex-col items-center justify-center p-6 mt-4 text-gray-600 md:flex-row">

                <div
                    class="flex flex-col flex-wrap gap-6 mt-6 border-t border-gray-600 sm:mt-0 sm:flex-row sm:items-center">


                    <div class="flex gap-6 p-2">
                        <a href="#" target="blank" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-dribbble"></span>
                        </a>
                        <a href="https://twitter.com/find_freelance_?s=11&t=qv6NIovEcQsLxmQv9mo_Zw" target="blank"
                            aria-label="twitter" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-twitter"></span>
                        </a>
                        <a href="https://instagram.com/find_freelance?igshid=YmMyMTA2M2Y=" target="blank"
                            aria-label="medium" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-instagram"></span>
                        </a>


                        <a href="#" target="blank" aria-label="twitter" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-pinterest"></span>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100087893680900&mibextid=LQQJ4d" target="blank"
                            aria-label="medium" class="px-2 hover:text-primary">
                            <span class="text-lg fab fa-facebook"></span>
                        </a>


                    </div>
                    <div class="flex gap-6 mx-auto ">

                        <a href="" class="px-3 py-2 hover:text-primary">

                            <span class="text-sm fab fa-dollar">USD</span>
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-2 border-t border-gray-800">
                    <img src="/images/logo/find_02.png" alt="logo find" class="h-8" />
                    <div class="flex flex-col items-center justify-center p-3 mt-2 text-gray-600 md:flex-row">Copyright ©
                        2023
                    </div>
                </div>



            </div>
        </div>



        <div class="hidden md:flex">
            <div class="p-10 footer bg-base-200 text-base-content">
                <div>

                    <img src="/images/logo/find_02.png" alt="logo find" class="h-8" />
                    <p>FIND Ltd.<br />Providing reliable tech since 2020</p>
                </div>
                <div>
                    <span class="footer-title">Categories</span>
                    <div class="grid grid-cols-2 gap-4">


                       <li v-for="category in categories">
                                            <Link :href="route('categoryName', category.slug)"
                                                class="inline-block py-2 pl-3 pr-5 hover:text-gray-200">{{ category.name }}</Link>
                                        </li>



                    </div>

                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link :href="route('about')"  class="link link-hover hover:text-gray-200">Apropos de nous </Link>
                    <Link :href="route('contact')"  class="link link-hover hover:text-gray-200">Contact</Link>
                    <Link :href="route('faq')"  class="link link-hover hover:text-gray-200">FaQ</Link>

                </div>
                <div>

                    <span class="footer-title">Legal</span>
                    <Link :href="route('terms.show')" class="link link-hover">Conditions d'utilisation</Link>
                    <Link :href="route('policy.show')" class="link link-hover">Politique de confidentialité</Link>


                </div>
            </div>

        </div>





    </div>


    </div>
    -->

    <footer class="bg-gray-200 dark:bg-black">
      <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div class="">
                  <img src="/images/logo/find_02.png" alt="logo find" class="h-8" />

            </div>

            <p class="max-w-xs mt-4 text-gray-500 dark:text-gray-400">
Votre satisfaction dans nos services Freelance.
            </p>

            <ul class="flex gap-6 mt-8">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100087893680900&mibextid=LQQJ4d"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
                >
                  <span class="sr-only">Facebook</span>

                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/find_freelance?igshid=YmMyMTA2M2Y="
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
                >
                  <span class="sr-only">Instagram</span>

                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/find_freelance_?s=11&t=qv6NIovEcQsLxmQv9mo_Zw"
                  rel="noreferrer"
                  target="_blank"
                  class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
                >
                  <span class="sr-only">Twitter</span>

                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
              </li>




            </ul>
          </div>

          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p class="text-gray-900 font-bega-medium lg:text-lg dark:text-white">Categories</p>

              <ul class="mt-6 space-y-4 text-base">
                 <li v-for="category in categories">
                <Link :href="route('categoryName', category.slug)"
                    class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200">{{ category.name }}</Link>
                </li>




              </ul>
            </div>

            <div>
              <p class="text-lg text-gray-900 font-bega-medium dark:text-white">Companie</p>

              <ul class="mt-6 space-y-4 text-base ">
                <li>
                <Link href="/about" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200">

                    Apropos

                </Link>
                </li>

              </ul>
            </div>

            <div>
              <p class="text-lg text-gray-900 font-bega-medium dark:text-white">
                Liens Utiles
              </p>

              <ul class="mt-6 space-y-4 text-base">
                <li>
                  <Link href="/contact" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link :href="route('faq')" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200">
                    FAQs
                  </Link>
                </li>

                <li>
                  <a href="#" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p class="text-lg text-gray-900 font-bega-medium dark:text-white">Legal</p>

              <ul class="mt-6 space-y-4 text-base">
                <li>
                  <Link :href="route('terms.show')" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200">
                        Conditions d'utilisation
                  </Link>
                </li>

                <li>
                  <Link :href="route('policy.show')" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200">
                   Politique de confidentialité
                  </Link>
                </li>




              </ul>
            </div>
          </div>
        </div>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy;{{currentYear}}. FIND. All rights reserved.
        </p>
      </div>
    </footer>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import axios from 'axios';

import { Collapse } from 'vue-collapsed';

let currentYear = new Date().getFullYear();



import { useSubcategoriesStore, useCategoryStore } from '@/store/store';


const categoriesStore = useCategoryStore();
const subcategoriesStore = useSubcategoriesStore();

const categories = computed(() => categoriesStore.categoriesGet.categories);



const isOpen = ref(false);

function handleCollapse() {
    isOpen.value = !isOpen.value
};
const isOpen2 = ref(false);

function handleCollapse2() {
    isOpen2.value = !isOpen2.value
};
const isOpen3 = ref(false);

function handleCollapse3() {
    isOpen3.value = !isOpen3.value
};
const isOpen4 = ref(false);

function handleCollapse4() {
    isOpen4.value = !isOpen4.value
};




</script>


<style>
.collapse {
    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}
</style>

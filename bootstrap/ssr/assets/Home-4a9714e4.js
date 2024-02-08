import { ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, computed, onMounted, resolveComponent, createVNode, openBlock, createBlock, withDirectives, vShow, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./WebLayout-1fc7bd97.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { e as useStore, i as homeSetting, j as useMissions } from "./NotificationComponent-1408ac1b.js";
import { Collapse } from "vue-collapsed";
import { CheckCircleIcon, DocumentTextIcon } from "@heroicons/vue/24/solid";
import { Link } from "@inertiajs/vue3";
import { Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y, EffectCube } from "swiper/modules";
import "@vueuse/core";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
const _sfc_main$1 = {
  __name: "HomeSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const results = ref([]);
    const loading = ref(false);
    const searchPerformed = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div><div class="flex flex-col w-full mt-6 lg:mt-6 2xl:mt-10"><div class="relative"><form class="relative flex p-1 mb-4 bg-white shadow-2xl lg:dark:bg-white rounded-xl 2xl:p-4 md:p-2"><input required${ssrRenderAttr("value", search.value)} class="w-full p-4 mr-2 text-gray-600 border-white 2xl:p-6 focus:border-white rounded-xl" type="text"><button type="submit" class="px-6 py-3 ml-auto text-center transition rounded-lg bg-skin-fill"><span class="hidden font-semibold text-white md:block"> Recherche </span><svg xmlns="http://www.w3.org/2000/svg" class="w-5 mx-auto text-white md:hidden" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg></button></form>`);
      if (searchPerformed.value) {
        _push(`<div class="absolute w-full mt-1 overflow-y-auto bg-white border divide-y rounded-lg shadow z-[60] custom-scrollbar max-h-72">`);
        if (results.value.length > 0) {
          _push(`<div><!--[-->`);
          ssrRenderList(results.value, (result) => {
            _push(`<div>`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("oneService", result.service_numero),
              class: "block p-2 text-sm text-gray-800 cursor-pointer hover:bg-amber-700 hover:text-white"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(result.title)} - ${ssrInterpolate(result.category.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(result.title) + " - " + toDisplayString(result.category.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else if (loading.value) {
          _push(`<a class="block p-2 text-gray-800" href="#">Chargement en cours...</a>`);
        } else {
          _push(`<a class="block p-2 text-gray-800" href="#">Pas de résultat</a>`);
        }
        _push(`<div class="p-2 mt-2"><button class="btn btn-sm btn-circle btn-outline"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-center gap-4 mt-4"><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/categories'",
        class: "flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Photographie`);
          } else {
            return [
              createTextVNode(" Photographie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/categories",
        class: "flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Design `);
          } else {
            return [
              createTextVNode(" Design ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/categories",
        class: "flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Technologie`);
          } else {
            return [
              createTextVNode(" Technologie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><p class="mt-2 text-center text-gray-100 2xl:text-lg">Catégories les plus populaires</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HomeSearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Home_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const testimonialActive = ref(1);
    const expandedItems = ref([]);
    const swiperInstance = ref(null);
    const onSwiperInitialized = (swiper) => {
      swiperInstance.value = swiper;
    };
    const store = useStore();
    const homeSettingStore = homeSetting();
    const faqsGet = computed(() => homeSettingStore.faqsGetter);
    const missions = useMissions();
    const getMissions = computed(() => missions.missionGeters);
    onMounted(() => {
      store.updateIsHome();
      missions.fetchLastMission();
      homeSettingStore.fetchLastFaq();
    });
    const truncateText = (text, length) => {
      return text.length > length ? text.slice(0, length) + "..." : text;
    };
    const showMore = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_Photo = resolveComponent("Photo");
      const _component_Button = resolveComponent("Button");
      _push(`<!--[--><div class="relative min-h-screen 2xl:min-h-full slideshow slideshow-wrapper pb-section sliderFull"><div class="hidden lg:block"><div class="home-slideshow">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
        effect: "fade",
        loop: true,
        spaceBetween: 30,
        "slides-per-view": 1,
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="slide slideshow--medium"${_scopeId2}><div class="blur-up lazyload bg-size"${_scopeId2}><img class="blur-up lazyload bg-[#FFAA76]" data-src="/images/optimize/sans.png" src="/images/optimize/sans.png" alt="women sans" title="women sans"${_scopeId2}><div class="slideshow__text-wrap slideshow__overlay classic middle"${_scopeId2}><div class="slideshow__text-content classic middle"${_scopeId2}><div class="container"${_scopeId2}><div class="wrap-caption right"${_scopeId2}><h2 class="h1 mega-title slideshow__title"${_scopeId2}></h2><span class="mega-subtitle slideshow__subtitle"${_scopeId2}></span><span class=""${_scopeId2}></span></div></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "slide slideshow--medium" }, [
                      createVNode("div", { class: "blur-up lazyload bg-size" }, [
                        createVNode("img", {
                          class: "blur-up lazyload bg-[#FFAA76]",
                          "data-src": "/images/optimize/sans.png",
                          src: "/images/optimize/sans.png",
                          alt: "women sans",
                          title: "women sans"
                        }),
                        createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                          createVNode("div", { class: "slideshow__text-content classic middle" }, [
                            createVNode("div", { class: "container" }, [
                              createVNode("div", { class: "wrap-caption right" }, [
                                createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                                createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                                createVNode("span", { class: "" })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative slide slideshow--medium"${_scopeId2}><div class="blur-up lazyload bg-size"${_scopeId2}><img class="blur-up lazyload bg-img" data-src="/canva/graceBrand.svg" src="/canva/graceBrand.svg" alt="graceP" title="graceP"${_scopeId2}><div class="slideshow__text-wrap slideshow__overlay classic middle"${_scopeId2}><div class="slideshow__text-content classic middle"${_scopeId2}><div class="container"${_scopeId2}><div class="wrap-caption right"${_scopeId2}><h2 class="h1 mega-title slideshow__title"${_scopeId2}></h2><span class="mega-subtitle slideshow__subtitle"${_scopeId2}></span><span class=""${_scopeId2}></span></div></div></div></div></div><div class="absolute flex flex-col hidden floating gap-1 right-[30%] top-1/2"${_scopeId2}><h1 class="text-lg text-white font-bega-medium"${_scopeId2}>Grace K.</h1><p class="text-base text-white font-bega-medium"${_scopeId2}>Marketeuse Digital</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative slide slideshow--medium" }, [
                      createVNode("div", { class: "blur-up lazyload bg-size" }, [
                        createVNode("img", {
                          class: "blur-up lazyload bg-img",
                          "data-src": "/canva/graceBrand.svg",
                          src: "/canva/graceBrand.svg",
                          alt: "graceP",
                          title: "graceP"
                        }),
                        createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                          createVNode("div", { class: "slideshow__text-content classic middle" }, [
                            createVNode("div", { class: "container" }, [
                              createVNode("div", { class: "wrap-caption right" }, [
                                createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                                createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                                createVNode("span", { class: "" })
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "absolute flex flex-col hidden floating gap-1 right-[30%] top-1/2" }, [
                        createVNode("h1", { class: "text-lg text-white font-bega-medium" }, "Grace K."),
                        createVNode("p", { class: "text-base text-white font-bega-medium" }, "Marketeuse Digital")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="slide slideshow--medium"${_scopeId2}><div class="blur-up lazyload bg-size"${_scopeId2}><img class="blur-up lazyload" data-src="/images/optimize/homme.png" src="/images/optimize/homme.png" alt="New Season Styles" title="New Season Styles"${_scopeId2}><div class="slideshow__text-wrap slideshow__overlay classic middle"${_scopeId2}><div class="slideshow__text-content classic middle"${_scopeId2}><div class="container"${_scopeId2}><div class="wrap-caption right"${_scopeId2}><h2 class="h1 mega-title slideshow__title"${_scopeId2}></h2><span class="mega-subtitle slideshow__subtitle"${_scopeId2}></span><span class=""${_scopeId2}></span></div></div></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "slide slideshow--medium" }, [
                      createVNode("div", { class: "blur-up lazyload bg-size" }, [
                        createVNode("img", {
                          class: "blur-up lazyload",
                          "data-src": "/images/optimize/homme.png",
                          src: "/images/optimize/homme.png",
                          alt: "New Season Styles",
                          title: "New Season Styles"
                        }),
                        createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                          createVNode("div", { class: "slideshow__text-content classic middle" }, [
                            createVNode("div", { class: "container" }, [
                              createVNode("div", { class: "wrap-caption right" }, [
                                createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                                createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                                createVNode("span", { class: "" })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "slide slideshow--medium" }, [
                    createVNode("div", { class: "blur-up lazyload bg-size" }, [
                      createVNode("img", {
                        class: "blur-up lazyload bg-[#FFAA76]",
                        "data-src": "/images/optimize/sans.png",
                        src: "/images/optimize/sans.png",
                        alt: "women sans",
                        title: "women sans"
                      }),
                      createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                        createVNode("div", { class: "slideshow__text-content classic middle" }, [
                          createVNode("div", { class: "container" }, [
                            createVNode("div", { class: "wrap-caption right" }, [
                              createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                              createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                              createVNode("span", { class: "" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative slide slideshow--medium" }, [
                    createVNode("div", { class: "blur-up lazyload bg-size" }, [
                      createVNode("img", {
                        class: "blur-up lazyload bg-img",
                        "data-src": "/canva/graceBrand.svg",
                        src: "/canva/graceBrand.svg",
                        alt: "graceP",
                        title: "graceP"
                      }),
                      createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                        createVNode("div", { class: "slideshow__text-content classic middle" }, [
                          createVNode("div", { class: "container" }, [
                            createVNode("div", { class: "wrap-caption right" }, [
                              createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                              createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                              createVNode("span", { class: "" })
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "absolute flex flex-col hidden floating gap-1 right-[30%] top-1/2" }, [
                      createVNode("h1", { class: "text-lg text-white font-bega-medium" }, "Grace K."),
                      createVNode("p", { class: "text-base text-white font-bega-medium" }, "Marketeuse Digital")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "slide slideshow--medium" }, [
                    createVNode("div", { class: "blur-up lazyload bg-size" }, [
                      createVNode("img", {
                        class: "blur-up lazyload",
                        "data-src": "/images/optimize/homme.png",
                        src: "/images/optimize/homme.png",
                        alt: "New Season Styles",
                        title: "New Season Styles"
                      }),
                      createVNode("div", { class: "slideshow__text-wrap slideshow__overlay classic middle" }, [
                        createVNode("div", { class: "slideshow__text-content classic middle" }, [
                          createVNode("div", { class: "container" }, [
                            createVNode("div", { class: "wrap-caption right" }, [
                              createVNode("h2", { class: "h1 mega-title slideshow__title" }),
                              createVNode("span", { class: "mega-subtitle slideshow__subtitle" }),
                              createVNode("span", { class: "" })
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="absolute top-0 left-0 w-full h-screen bg-skin-fill dark:bg-gray-900 lg:hidden"><div class="hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] absolute bottom-[-100px] md:w-[800px] md:h-[750px] lg:top-[120px] lg:right-[-100px] xl:right-0 w-[500px] h-[500px] 2xl:w-[1026px] 2xl:h-[1026px]"><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:R65m:-gradient-1)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:R65m:-gradient-2)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg></div><div class="relative w-full lg:-mt-10" id="girl"></div></div><div data-aos="fade-right" data-aos-duration="800" class="absolute top-0 left-0 z-50 px-6 py-8 xl:py-10 lg:mt-8 2xl:mt-16 lg:col-span-6 lg:py-12 md:mb-8 xl:place-self-center lg:mb-0 lg:w-1/2"><div class="pt-[8rem] 2xl:pt-[10rem] px-1"><h1 class="text-3xl text-center text-white font-bega-bold lg:text-5xl 2xl:text-6xl lg:text-left"> Votre satisfaction dans nos services Freelance <br></h1>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div></div></div><div id="features" class="bg-gray-100 dark:bg-gray-800"><div data-aos="" class="z-10 px-8 py-8 overflow-hidden lg:max-w-6xl 2xl:max-w-7xl 2xl:px-2 lg:mx-auto md:px-6"><div class="flex flex-col-reverse lg:flex-row"><div data-aos="fade-up" data-aos-duration="500" class="w-full lg:w-5/12"><h1 class="text-slate-800 mb-4 xl:mb-6 dark:text-white text-2xl font-bega-semibold leading-snug lg:text-[40px] xl:text-5xl"> Atteignez vos objectifs plus rapidement avec <span class="text-amber-600 font-bega-semibold">FIND</span></h1><div class="grid grid-cols-1 gap-2 mx-auto md:mx-0 md:grid-cols-2">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("find_freelance"),
        class: "w-10/12 rounded-md mx-auto 2xl:py-3 2xl:text-lg text-center bg-amber-600 px-8 py-2.5 font-bega-medium text-white shadow-md shadow-amber-500/20 hover:bg-amber-700 duration-200 sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Trouver un freelance`);
          } else {
            return [
              createTextVNode("Trouver un freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("register.begin"),
        class: "mt-4 md:mt-0 mx-auto text-center box-border w-10/12 2xl:py-3 2xl:text-lg rounded-md border border-amber-500/20 px-8 py-2.5 font-bega-medium text-amber-600 shadow-md shadow-amber-500/10 hover:bg-gray-100 duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dévenir freelance`);
          } else {
            return [
              createTextVNode("Dévenir freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-4 mb-2 text-center"><h1 class="text-xl text-gray-500 font-bega-light">Nos partenaires</h1></div><div class="grid grid-cols-2 gap-4 mx-4 mt-6 md:mx-0 px-auto md:gap-2 md:grid-cols-3"><img src="/images/brand/makutano.png" alt="makutano" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 grayscale hover:grayscale-0 bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"><img src="/images/brand/silikin.png" alt="silikin" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 grayscale hover:grayscale-0 bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"></div></div><div class="px-4 lg:w-1/12"></div><div data-aos="fade-left" data-aos-duration="500" class="hidden w-full px-4 lg:block md:w-6/12"><div class="lg:ml-auto lg:text-right"><div class="relative z-10 inline-block pt-11 lg:pt-0"><img src="/canva/fon2.jpg" alt="hero div bg-img img" class="rounded-lg lg:ml-auto"></div></div></div></div></div></div><div id="talkAbout" class="bg-white dark:bg-gray-900 lg:min-h-screen xl:min-h-full"><div class="container max-w-6xl p-4 m-4 mx-auto 2xl:max-w-7xl 2xl:p-2 md:p-6"><div class="mb-10 text-center xl:mb-14"><span class="font-bega-medium text-amber-600">Presentation</span><h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-gray-200">Ils en parlent mieux que nous</h1></div><div class="my-10">`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "flex py-8 xl:py-12",
        modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
        spaceBetween: 30,
        "slides-per-view": 1,
        "space-between": 25,
        pagination: { clickable: true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "mb-8 xl:mb-12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="!bg-transparent px-2 md:px-0"${_scopeId2}><div class="px-2 bg-white border border-gray-300 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"${_scopeId2}><div class="grid md:grid-cols-5"${_scopeId2}><div class="w-full m-2 h-50 xl:h-72 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"${_scopeId2}><iframe class="w-full h-full rounded-sm aspect-video hover:aspect-square" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen${_scopeId2}></iframe></div><div class="p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"${_scopeId2}><div class="w-20 mx-auto xl:w-28"${_scopeId2}><img src="images/brand/influnet.jpg" alt="company logo" loading="lazy"${_scopeId2}></div><p class="dark:text-gray-200 font-bega-light xl:text-lg"${_scopeId2}><span class=""${_scopeId2}></span> Find est une plateforme incontournable pour tous les demandeurs de services. J&#39;ai été impressionné par la qualité des freelances proposés. <span class="font-serif"${_scopeId2}>&quot;</span></p><h6 class="text-lg leading-none font-bega-semibold dark:text-gray-200"${_scopeId2}>Georges Mk</h6></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                      createVNode("div", { class: "px-2 bg-white border border-gray-300 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                        createVNode("div", { class: "grid md:grid-cols-5" }, [
                          createVNode("div", { class: "w-full m-2 h-50 xl:h-72 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                            createVNode("iframe", {
                              class: "w-full h-full rounded-sm aspect-video hover:aspect-square",
                              src: "",
                              frameborder: "0",
                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowfullscreen: ""
                            })
                          ]),
                          createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                            createVNode("div", { class: "w-20 mx-auto xl:w-28" }, [
                              createVNode("img", {
                                src: "images/brand/influnet.jpg",
                                alt: "company logo",
                                loading: "lazy"
                              })
                            ]),
                            createVNode("p", { class: "dark:text-gray-200 font-bega-light xl:text-lg" }, [
                              createVNode("span", { class: "" }),
                              createTextVNode(" Find est une plateforme incontournable pour tous les demandeurs de services. J'ai été impressionné par la qualité des freelances proposés. "),
                              createVNode("span", { class: "font-serif" }, '"')
                            ]),
                            createVNode("h6", { class: "text-lg leading-none font-bega-semibold dark:text-gray-200" }, "Georges Mk")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), { class: "mb-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="!bg-transparent px-2 md:px-0"${_scopeId2}><div class="px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"${_scopeId2}><div class="grid md:grid-cols-5"${_scopeId2}><div class="w-full m-2 xl:h-72 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"${_scopeId2}><iframe class="w-full h-full rounded-sm aspect-video hover:aspect-square" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen${_scopeId2}></iframe></div><div class="p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"${_scopeId2}><div class="w-20 mx-auto xl:w-28"${_scopeId2}><img src="images/brand/influnet.jpg" alt="company logo" loading="lazy"${_scopeId2}></div><p class="dark:text-gray-200 font-bega-light xl:text-lg"${_scopeId2}><span class="font-serif"${_scopeId2}></span> Find est un outil essentiel pour tous ceux qui cherchent à trouver des freelances qualifiés. La plateforme est vraiment bien conçue et facile à utiliser <span class="font-serif"${_scopeId2}>&quot;</span></p><h6 class="text-lg leading-none font-bega-semibold dark:text-gray-200"${_scopeId2}>Ulrich Lukemba</h6></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                      createVNode("div", { class: "px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                        createVNode("div", { class: "grid md:grid-cols-5" }, [
                          createVNode("div", { class: "w-full m-2 xl:h-72 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                            createVNode("iframe", {
                              class: "w-full h-full rounded-sm aspect-video hover:aspect-square",
                              src: "",
                              frameborder: "0",
                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowfullscreen: ""
                            })
                          ]),
                          createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                            createVNode("div", { class: "w-20 mx-auto xl:w-28" }, [
                              createVNode("img", {
                                src: "images/brand/influnet.jpg",
                                alt: "company logo",
                                loading: "lazy"
                              })
                            ]),
                            createVNode("p", { class: "dark:text-gray-200 font-bega-light xl:text-lg" }, [
                              createVNode("span", { class: "font-serif" }),
                              createTextVNode(" Find est un outil essentiel pour tous ceux qui cherchent à trouver des freelances qualifiés. La plateforme est vraiment bien conçue et facile à utiliser "),
                              createVNode("span", { class: "font-serif" }, '"')
                            ]),
                            createVNode("h6", { class: "text-lg leading-none font-bega-semibold dark:text-gray-200" }, "Ulrich Lukemba")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), { class: "mb-8 xl:mb-12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                    createVNode("div", { class: "px-2 bg-white border border-gray-300 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                      createVNode("div", { class: "grid md:grid-cols-5" }, [
                        createVNode("div", { class: "w-full m-2 h-50 xl:h-72 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                          createVNode("iframe", {
                            class: "w-full h-full rounded-sm aspect-video hover:aspect-square",
                            src: "",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                          })
                        ]),
                        createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                          createVNode("div", { class: "w-20 mx-auto xl:w-28" }, [
                            createVNode("img", {
                              src: "images/brand/influnet.jpg",
                              alt: "company logo",
                              loading: "lazy"
                            })
                          ]),
                          createVNode("p", { class: "dark:text-gray-200 font-bega-light xl:text-lg" }, [
                            createVNode("span", { class: "" }),
                            createTextVNode(" Find est une plateforme incontournable pour tous les demandeurs de services. J'ai été impressionné par la qualité des freelances proposés. "),
                            createVNode("span", { class: "font-serif" }, '"')
                          ]),
                          createVNode("h6", { class: "text-lg leading-none font-bega-semibold dark:text-gray-200" }, "Georges Mk")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), { class: "mb-8" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "!bg-transparent px-2 md:px-0" }, [
                    createVNode("div", { class: "px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12" }, [
                      createVNode("div", { class: "grid md:grid-cols-5" }, [
                        createVNode("div", { class: "w-full m-2 xl:h-72 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl" }, [
                          createVNode("iframe", {
                            class: "w-full h-full rounded-sm aspect-video hover:aspect-square",
                            src: "",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                          })
                        ]),
                        createVNode("div", { class: "p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8" }, [
                          createVNode("div", { class: "w-20 mx-auto xl:w-28" }, [
                            createVNode("img", {
                              src: "images/brand/influnet.jpg",
                              alt: "company logo",
                              loading: "lazy"
                            })
                          ]),
                          createVNode("p", { class: "dark:text-gray-200 font-bega-light xl:text-lg" }, [
                            createVNode("span", { class: "font-serif" }),
                            createTextVNode(" Find est un outil essentiel pour tous ceux qui cherchent à trouver des freelances qualifiés. La plateforme est vraiment bien conçue et facile à utiliser "),
                            createVNode("span", { class: "font-serif" }, '"')
                          ]),
                          createVNode("h6", { class: "text-lg leading-none font-bega-semibold dark:text-gray-200" }, "Ulrich Lukemba")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div id="monde2" class="xl:min-h-full lg:min-h-screen dark:bg-gray-900"><div class="p-4"><div class="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16"><div class="flex-row-reverse justify-center p-4 space-y-6 bg-gray-100 rounded-lg dark:bg-gray-800 lg:p-16 md:flex md:gap-6 md:space-y-0 lg:items-center"><div data-aos="flip-left" data-aos-duration="500" class="md:5/12 lg:w-1/2"><img src="/images/services/presentation3.png" alt="image" class="rounded-lg dark:bg-gray-800 floating bg-skin-fill" loading="lazy" width="" height=""></div><div data-aos="fade-right" data-aos-duration="300" class="md:7/12 lg:w-1/2"><div class="px-4"><h2 class="text-xl text-gray-900 font-bega-semibold md:text-4xl dark:text-white"> Trouvez dès aujourd&#39;hui la personne idéale pour votre projet ! </h2></div><div class="space-y-4 divide-y divide-gray-100 font-bega-light dark:divide-gray-800"><div class="flex gap-4 mt-4 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">`);
      _push(ssrRenderComponent(unref(CheckCircleIcon), { class: "text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" }, null, _parent));
      _push(`</div><div class="w-5/6"><h4 class="text-lg text-gray-700 font-bega-medium dark:text-indigo-300">Des services de haute qualité pour un prix équitable</h4><p class="text-gray-500 dark:text-gray-50">Mettez la main sur d&#39;excellents services a bon prix . Une taxation en fonction de la demande de service</p></div></div><div class="flex gap-4 pt-2 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20">`);
      _push(ssrRenderComponent(unref(DocumentTextIcon), { class: "text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" }, null, _parent));
      _push(`</div><div class="w-5/6"><h4 class="text-lg text-gray-700 font-bega-medium dark:text-teal-300">Des services efficacement fait</h4><p class="text-gray-500 dark:text-gray-50">Decouvrez les freelancers qui convient afin de travailler avec vous</p></div></div><div class="flex gap-4 mt-4 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-gray-700 font-bega-medium dark:text-indigo-300">Des Paiement protégés</h4><p class="text-gray-500 dark:text-gray-50">Assurez-vous de connaître le coût total dès le départ. Votre rémunération ne sera versée que lorsque vous aurez confirmé que le travail est satisfaisant.</p></div></div><div class="flex gap-4 pt-2 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-gray-700 font-bega-medium dark:text-teal-300">Une Assistance 24h/24 et 7j/7</h4><p class="text-gray-500 dark:text-gray-50">Des Questions ? notre equipe d&#39;assistance est disponible 24h/24 pour vous aider à tout moment et en tout lieu</p></div></div></div></div></div></div></div></div><div id="Services" class="bg-gray-100 lg:min-h-screen dark:bg-gray-800"><div class="max-w-6xl px-8 py-6 mx-auto md:px-6"><div class="mb-10 text-center"><span class="font-bega-medium text-amber-600">Categories</span><h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl">Découvrez les services</h1></div><div class="grid grid-cols-2 gap-4 font-bega-light md:gap-6 md:grid-cols-4 xl:gap-8"><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("categoryName", category.slug),
          class: "flex flex-col items-center px-2 py-4 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (category.media.url != "") {
                _push2(`<img${ssrRenderAttr("src", category.media.url)} class="w-20 h-20 rounded-md"${ssrRenderAttr("alt", category.media.url)}${_scopeId}>`);
              } else {
                _push2(`<img src="/images/logo/ff3.png" class="w-20 h-20 rounded-md"${ssrRenderAttr("alt", category.media.url)}${_scopeId}>`);
              }
              _push2(`<h4 class="mt-3 mb-1 md:text-[20px] text-[16px] font-bega-medium text-slate-600 duration-200 group-hover:text-white"${_scopeId}>${ssrInterpolate(category.name)}</h4>`);
            } else {
              return [
                category.media.url != "" ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: category.media.url,
                  class: "w-20 h-20 rounded-md",
                  alt: category.media.url
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: "/images/logo/ff3.png",
                  class: "w-20 h-20 rounded-md",
                  alt: category.media.url
                }, null, 8, ["alt"])),
                createVNode("h4", { class: "mt-3 mb-1 md:text-[20px] text-[16px] font-bega-medium text-slate-600 duration-200 group-hover:text-white" }, toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (getMissions.value.length > 0) {
        _push(`<div class="bg-gray-50 lg:min-h-screen dark:bg-gray-900"><div class="max-w-6xl px-8 py-6 mx-auto md:px-6"><div class="mb-10 text-center"><span class="font-bega-medium text-amber-600">Mission</span><h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl">Découvrez quelques missions</h1></div><div class="py-4 mx-2"><div class="flex items-end justify-end mb-2"><div class="flex gap-4"><button class="w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button><button class="w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button></div></div>`);
        _push(ssrRenderComponent(unref(Swiper), {
          class: "flex py-8 mb-4",
          modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
          spaceBetween: 30,
          "space-between": 25,
          breakpoints: { 300: { slidesPerView: 1 }, 900: { slidesPerView: 3 } },
          onSwiper: onSwiperInitialized
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(getMissions.value, (mission) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { class: "p-2" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="p-2 mb-4 rounded-md shadow-md h-[25rem] lg:flex-col"${_scopeId2}><img class="object-cover object-center w-full h-48 bg-center bg-cover shrink-0" src="/images/illustrations/missionF.svg" alt="image"${_scopeId2}><div class="flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><a class="text-xs+ font-medium text-info" href="#"${_scopeId2}>${ssrInterpolate(mission.category.name)}</a><div class="-mr-1.5 flex space-x-1"${_scopeId2}><button class="hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"${_scopeId2}></path></svg></button><div class="p-2"${_scopeId2}></div></div></div><div${_scopeId2}><p href="#" class="max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100"${_scopeId2}>${ssrInterpolate(mission.title)}</p></div><p class="mt-1 line-clamp-3"${_scopeId2}>`);
                      if (!showMore.value) {
                        _push3(`<div class="max-w-xs truncate font-bega-light"${_scopeId2}>${ssrInterpolate(truncateText(mission.description, 70))}</div>`);
                      } else {
                        _push3(`<div class="max-w-xs break-words font-bega-light"${_scopeId2}>${ssrInterpolate(mission.description)}</div>`);
                      }
                      if (mission.description.length > 70) {
                        _push3(`<div${_scopeId2}><button${_scopeId2}><span style="${ssrRenderStyle(showMore.value ? null : { display: "none" })}" class="text-blue-600"${_scopeId2}>Lire moins</span><span style="${ssrRenderStyle(!showMore.value ? null : { display: "none" })}" class="text-blue-600"${_scopeId2}>Lire la suite</span></button></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</p><div class="grow"${_scopeId2}><div class="flex items-center mt-2 text-xs"${_scopeId2}><a href="#" class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"${_scopeId2}><div class="w-10 h-10 mb-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Photo, {
                        user: mission.user,
                        taille: "10"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><span class="line-clamp-1"${_scopeId2}>${ssrInterpolate(mission.user.name)}</span></a><div class="self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"${_scopeId2}></div><span class="shrink-0 text-slate-400 dark:text-navy-300"${_scopeId2}>${ssrInterpolate(mission.created_at)}</span></div></div><div class="flex justify-between gap-4 mt-1"${_scopeId2}><div class="flex items-center"${_scopeId2}><h1 class="text-lg font-bega-semibold text-amber-600"${_scopeId2}>${ssrInterpolate(mission.budget)} $</h1></div>`);
                      if (mission.status == "pending" && _ctx.$page.props.auth.freelance) {
                        _push3(`<div class="flex gap-4 mt-4"${_scopeId2}><a href="/freelance-gestion/missions"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Button, {
                          size: "small",
                          outlined: "",
                          severity: "info",
                          label: "Postuler"
                        }, null, _parent3, _scopeId2));
                        _push3(`</a></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (mission.status == "pending" && !_ctx.$page.props.auth.freelance && !_ctx.$page.props.auth.user == null) {
                        _push3(`<div class="flex gap-4 mt-4"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Link, {
                          href: _ctx.route("register.begin")
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Button, {
                                size: "small",
                                outlined: "",
                                severity: "info",
                                label: "Etre prestaire pour postuler"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_Button, {
                                  size: "small",
                                  outlined: "",
                                  severity: "info",
                                  label: "Etre prestaire pour postuler"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (_ctx.$page.props.auth.user == null) {
                        _push3(`<div class="px-4"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Link, {
                          href: _ctx.route("register")
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Button, {
                                size: "small",
                                outlined: "",
                                severity: "info",
                                label: "postuler"
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_Button, {
                                  size: "small",
                                  outlined: "",
                                  severity: "info",
                                  label: "postuler"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "p-2 mb-4 rounded-md shadow-md h-[25rem] lg:flex-col" }, [
                          createVNode("img", {
                            class: "object-cover object-center w-full h-48 bg-center bg-cover shrink-0",
                            src: "/images/illustrations/missionF.svg",
                            alt: "image"
                          }),
                          createVNode("div", { class: "flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("a", {
                                class: "text-xs+ font-medium text-info",
                                href: "#"
                              }, toDisplayString(mission.category.name), 1),
                              createVNode("div", { class: "-mr-1.5 flex space-x-1" }, [
                                createVNode("button", { class: "hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-4.5 w-4.5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    })
                                  ]))
                                ]),
                                createVNode("div", { class: "p-2" })
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("p", {
                                href: "#",
                                class: "max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100"
                              }, toDisplayString(mission.title), 1)
                            ]),
                            createVNode("p", { class: "mt-1 line-clamp-3" }, [
                              !showMore.value ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "max-w-xs truncate font-bega-light"
                              }, toDisplayString(truncateText(mission.description, 70)), 1)) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "max-w-xs break-words font-bega-light"
                              }, toDisplayString(mission.description), 1)),
                              mission.description.length > 70 ? (openBlock(), createBlock("div", { key: 2 }, [
                                createVNode("button", {
                                  onClick: ($event) => showMore.value = !showMore.value
                                }, [
                                  withDirectives(createVNode("span", { class: "text-blue-600" }, "Lire moins", 512), [
                                    [vShow, showMore.value]
                                  ]),
                                  withDirectives(createVNode("span", { class: "text-blue-600" }, "Lire la suite", 512), [
                                    [vShow, !showMore.value]
                                  ])
                                ], 8, ["onClick"])
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "grow" }, [
                              createVNode("div", { class: "flex items-center mt-2 text-xs" }, [
                                createVNode("a", {
                                  href: "#",
                                  class: "flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                                }, [
                                  createVNode("div", { class: "w-10 h-10 mb-2" }, [
                                    createVNode(_component_Photo, {
                                      user: mission.user,
                                      taille: "10"
                                    }, null, 8, ["user"])
                                  ]),
                                  createVNode("span", { class: "line-clamp-1" }, toDisplayString(mission.user.name), 1)
                                ]),
                                createVNode("div", { class: "self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500" }),
                                createVNode("span", { class: "shrink-0 text-slate-400 dark:text-navy-300" }, toDisplayString(mission.created_at), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex justify-between gap-4 mt-1" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("h1", { class: "text-lg font-bega-semibold text-amber-600" }, toDisplayString(mission.budget) + " $", 1)
                              ]),
                              mission.status == "pending" && _ctx.$page.props.auth.freelance ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex gap-4 mt-4"
                              }, [
                                createVNode("a", { href: "/freelance-gestion/missions" }, [
                                  createVNode(_component_Button, {
                                    size: "small",
                                    outlined: "",
                                    severity: "info",
                                    label: "Postuler"
                                  })
                                ])
                              ])) : createCommentVNode("", true),
                              mission.status == "pending" && !_ctx.$page.props.auth.freelance && !_ctx.$page.props.auth.user == null ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex gap-4 mt-4"
                              }, [
                                createVNode(_component_Link, {
                                  href: _ctx.route("register.begin")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      size: "small",
                                      outlined: "",
                                      severity: "info",
                                      label: "Etre prestaire pour postuler"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])) : createCommentVNode("", true),
                              _ctx.$page.props.auth.user == null ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "px-4"
                              }, [
                                createVNode(_component_Link, {
                                  href: _ctx.route("register")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      size: "small",
                                      outlined: "",
                                      severity: "info",
                                      label: "postuler"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(getMissions.value, (mission) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { class: "p-2" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-2 mb-4 rounded-md shadow-md h-[25rem] lg:flex-col" }, [
                        createVNode("img", {
                          class: "object-cover object-center w-full h-48 bg-center bg-cover shrink-0",
                          src: "/images/illustrations/missionF.svg",
                          alt: "image"
                        }),
                        createVNode("div", { class: "flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("a", {
                              class: "text-xs+ font-medium text-info",
                              href: "#"
                            }, toDisplayString(mission.category.name), 1),
                            createVNode("div", { class: "-mr-1.5 flex space-x-1" }, [
                              createVNode("button", { class: "hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-4.5 w-4.5",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                  })
                                ]))
                              ]),
                              createVNode("div", { class: "p-2" })
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("p", {
                              href: "#",
                              class: "max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100"
                            }, toDisplayString(mission.title), 1)
                          ]),
                          createVNode("p", { class: "mt-1 line-clamp-3" }, [
                            !showMore.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "max-w-xs truncate font-bega-light"
                            }, toDisplayString(truncateText(mission.description, 70)), 1)) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "max-w-xs break-words font-bega-light"
                            }, toDisplayString(mission.description), 1)),
                            mission.description.length > 70 ? (openBlock(), createBlock("div", { key: 2 }, [
                              createVNode("button", {
                                onClick: ($event) => showMore.value = !showMore.value
                              }, [
                                withDirectives(createVNode("span", { class: "text-blue-600" }, "Lire moins", 512), [
                                  [vShow, showMore.value]
                                ]),
                                withDirectives(createVNode("span", { class: "text-blue-600" }, "Lire la suite", 512), [
                                  [vShow, !showMore.value]
                                ])
                              ], 8, ["onClick"])
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "grow" }, [
                            createVNode("div", { class: "flex items-center mt-2 text-xs" }, [
                              createVNode("a", {
                                href: "#",
                                class: "flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                              }, [
                                createVNode("div", { class: "w-10 h-10 mb-2" }, [
                                  createVNode(_component_Photo, {
                                    user: mission.user,
                                    taille: "10"
                                  }, null, 8, ["user"])
                                ]),
                                createVNode("span", { class: "line-clamp-1" }, toDisplayString(mission.user.name), 1)
                              ]),
                              createVNode("div", { class: "self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500" }),
                              createVNode("span", { class: "shrink-0 text-slate-400 dark:text-navy-300" }, toDisplayString(mission.created_at), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex justify-between gap-4 mt-1" }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("h1", { class: "text-lg font-bega-semibold text-amber-600" }, toDisplayString(mission.budget) + " $", 1)
                            ]),
                            mission.status == "pending" && _ctx.$page.props.auth.freelance ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex gap-4 mt-4"
                            }, [
                              createVNode("a", { href: "/freelance-gestion/missions" }, [
                                createVNode(_component_Button, {
                                  size: "small",
                                  outlined: "",
                                  severity: "info",
                                  label: "Postuler"
                                })
                              ])
                            ])) : createCommentVNode("", true),
                            mission.status == "pending" && !_ctx.$page.props.auth.freelance && !_ctx.$page.props.auth.user == null ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "flex gap-4 mt-4"
                            }, [
                              createVNode(_component_Link, {
                                href: _ctx.route("register.begin")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, {
                                    size: "small",
                                    outlined: "",
                                    severity: "info",
                                    label: "Etre prestaire pour postuler"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])) : createCommentVNode("", true),
                            _ctx.$page.props.auth.user == null ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "px-4"
                            }, [
                              createVNode(_component_Link, {
                                href: _ctx.route("register")
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, {
                                    size: "small",
                                    outlined: "",
                                    severity: "info",
                                    label: "postuler"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="confiance" class="bg-white dark:bg-gray-800"><div class="px-4 py-4 mx-auto sm:mx-2 md:px-auto"><div class="container text-gray-600 dark:text-gray-300"><div class="mb-10 text-center"><span class="font-bega-medium text-amber-600">Comentaire</span><h1 class="text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl">Ils nous font confiance</h1></div><div class="container flex flex-col mx-auto my-10 overflow-hidden shadow-sm md:my-24 md:flex-row"><div class="relative flex flex-col justify-center w-full py-2 bg-indigo-700 md:py-24 md:w-1/2 item-center"><div class="absolute top-0 left-0 z-10 w-16 h-16 grid-indigo md:w-40 md:h-40 md:ml-20 md:mt-24"></div><div class="relative z-20 px-6 py-2 mb-0 text-2xl leading-tight tracking-tight text-indigo-100 font-bega-semibold md:text-5xl md:py-6 md:px-1 md:w-64 md:mx-auto"><span class="md:block">Ce que</span><span class="md-block">disent</span><span class="block">nos clients !</span></div><div class="absolute bottom-0 right-0 hidden mb-4 mr-4 md:block"><button class="w-12 h-10 text-gray-500 bg-gray-100 border-r rounded-l-full font-bega-semibold focus:outline-none hover:text-indigo-500"> ← </button><button class="w-12 h-10 text-gray-500 bg-gray-100 rounded-r-full font-bega-semibold focus:outline-none hover:text-indigo-500"> → </button></div></div><div class="bg-gray-100 md:w-1/2"><div class="relative flex flex-col h-full"><div class="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12"><svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-indigo-200 fill-current md:w-16 md:h-16" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"></path></svg></div><div class="relative z-10 h-full"><div style="${ssrRenderStyle(testimonialActive.value === 1 ? null : { display: "none" })}"><p class="px-6 py-6 text-xl italic text-gray-600 font-bega-light md:px-16 md:py-10 md:text-2xl" x-show.transition="testimonialActive == 1"> Votre plateforme m&#39;a permis de trouver rapidement et facilement le freelance idéal pour mon projet. C&#39;était vraiment simple à utiliser et j&#39;ai apprécié la transparence dans le processus de sélection.&quot; </p></div><div style="${ssrRenderStyle(testimonialActive.value === 2 ? null : { display: "none" })}"><p class="px-6 py-6 text-xl italic text-gray-600 font-bega-light md:px-16 md:py-10 md:text-2xl" x-show.transition="testimonialActive == 2"> Je suis très satisfaite des résultats que j&#39;ai obtenus grâce à votre plateforme. J&#39;ai pu trouver un freelance expérimenté qui a su répondre parfaitement à mes besoins et à mes attentes. </p></div><div style="${ssrRenderStyle(testimonialActive.value === 3 ? null : { display: "none" })}"><p class="px-6 py-6 text-xl italic text-gray-600 font-bega-light serif md:px-16 md:py-10 md:text-2xl" x-show.transition="testimonialActive == 3"> Je recommande vivement votre plateforme à tous ceux qui cherchent à trouver des freelances de qualité. J&#39;ai été très satisfait des résultats obtenus et je n&#39;hésiterai pas à utiliser à nouveau votre service à l&#39;avenir. </p></div></div><div class="flex items-center justify-center my-4"><button class="${ssrRenderClass([{ "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600": testimonialActive.value != 1, "h-16 w-16 opacity-100 bg-indigo-600 text-white": testimonialActive.value == 1 }, "inline-block mx-2 text-center rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline"])}">JD</button><button class="${ssrRenderClass([{ "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600": testimonialActive.value != 2, "h-16 w-16 opacity-100 bg-indigo-600 text-white": testimonialActive.value == 2 }, "inline-block w-16 h-16 mx-2 text-center bg-indigo-600 rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline"])}">WM</button><button class="${ssrRenderClass([{ "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600": testimonialActive.value != 3, "h-16 w-16 opacity-100 bg-indigo-600 text-white": testimonialActive.value == 3 }, "inline-block w-12 h-12 mx-2 text-center bg-indigo-600 rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline"])}">JW</button></div><div class="flex justify-center px-6 pt-2 pb-6 md:py-6"><div class="text-center" style="${ssrRenderStyle(testimonialActive.value == 1 ? null : { display: "none" })}"><h2 class="text-sm leading-tight text-gray-700 font-bega-semibold md:text-base">Jean Dongo</h2><small class="text-xs text-gray-500 truncate md:text-sm">CEO, ABC Inc.</small></div><div class="text-center" style="${ssrRenderStyle(testimonialActive.value == 2 ? null : { display: "none" })}"><h2 class="text-sm leading-tight text-gray-700 font-bega-semibold md:text-base">William Muka </h2><small class="text-xs text-gray-500 truncate md:text-sm">CTO, Ack Corp.</small></div><div class="text-center" style="${ssrRenderStyle(testimonialActive.value == 3 ? null : { display: "none" })}"><h2 class="text-sm leading-tight text-gray-700 font-bega-semibold md:text-base">John Wata</h2><small class="text-xs text-gray-500 truncate md:text-sm">Product Manager, Fortran Corp.</small></div></div></div></div></div></div></div></div><div id="getStarted" class="bg-gray-900 lg:min-h-screen"><div class="py-16"><div class="container px-6 m-auto space-y-8 text-gray-500 md:px-12 lg:px-20"><div class="justify-center gap-6 p-3 mx-auto text-center rounded-lg md:flex md:text-left lg:items-center lg:gap-16"><div data-aos="fade-up" data-aos-duration="500" class="mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12"><h1 class="text-3xl text-white font-bega-semibold md:text-4xl dark:text-white">Vous êtes un freelance à la recherche de nouvelles opportunités ? </h1><p class="text-base font-bega-light text-gray-50 dark:text-gray-300"> FIND permet aux freelances de proposer leurs compétences aux entreprises et autres personnes intéressées par les offres disponibles sur le site. En outre, la plateforme met en œuvre des tactiques de marketing pour augmenter le nombre d&#39;achats de services. </p><div class="flex flex-wrap gap-6">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("register.begin"),
        class: "relative flex items-center justify-center w-[6/12] h-12 px-8 mx-auto duration-300 bg-white rounded-full before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="relative text-base font-bega-medium text-amber-600"${_scopeId}>Rejoignez Nous</span>`);
          } else {
            return [
              createVNode("span", { class: "relative text-base font-bega-medium text-amber-600" }, "Rejoignez Nous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div data-aos="fade-up" data-aos-duration="800" class="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12"><div class="col-span-5 row-span-4"><img src="/images/services/work2.png" class="object-cover object-top w-full h-full mb-3 md:mb-0 rounded-xl" width="640" height="427" alt="work" loading="lazy"></div></div></div></div></div></div><div id="presentation" class="bg-gray-100 dark:bg-gray-950 lg:min-h-screen"><div class="max-w-6xl px-8 py-6 mx-auto md:px-4"><div class="mb-10 text-center"><span class="font-bega-medium text-amber-600">Decouverte</span><h1 class="text-2xl font-bega-semibold text-slate-700 sm:text-3xl">Find </h1></div><div class="flex flex-col"><div data-aos="fade-in" data-aos-duration="500" class="grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-8"><div class="flex flex-col items-center w-full px-8 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-gray-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"><i name="people-outline" class="text-[55px] text-amber-600 duration-200 group-hover:text-white"></i><h4 class="mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 dark:text-white duration-200 group-hover:text-white"> +200 Freelance</h4></div><div class="flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl dark:bg-gray-800 border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"><i name="bag-check-outline" class="text-[55px] text-amber-600 duration-200 group-hover:text-white"></i><h4 class="mt-3 mb-1 text-[20px] font-bega-medium dark:text-white text-slate-600 duration-200 group-hover:text-white"> 500 Marchés </h4></div><div class="flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-gray-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"><i name="albums-outline" class="text-[55px] text-amber-600 duration-200 group-hover:text-white"></i><h4 class="mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 duration-200 group-hover:text-white dark:text-white"> +10 Categories </h4></div></div><div class="p-2 bg-white border border-gray-100 dark:border-gray-700 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12"><div class="flex flex-col px-2 py-4 md:py-6"><div class="space-y-6 py-auto justify md:col-span-2 sm:p-8"><div class="px-6"><h1 class="mt-4 text-xl text-center text-gray-800 font-bega-medium dark:text-white">Comment s&#39;inscrire comme <span class="text-amber-800 dark:text-white">freelance ?</span></h1></div><p class="mt-2 text-lg leading-none text-center text-gray-700 text-md dark:text-white"><span class="font-serif">&quot;</span> Apprenez à utiliser la Plateforme Find-freelance à l&#39;aide de ces tutoriels. <span class="font-serif">&quot;</span></p></div><div class="order-2 w-full h-48 mx-2 my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl"><iframe class="w-full h-full aspect-video" src="https://www.youtube.com/embed/rw_3Yv-rhZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div></div></div></div></div><div id="faqs" class="bg-white lg:min-h-screen dark:bg-gray-800 dark:text-white"><div class="px-8 py-6 mx-auto max-w-7xl md:px-6"><div class="mb-10 text-center"><span class="font-bega-medium text-amber-600">Faqs</span><h1 class="text-2xl font-bega-semibold dark:text-gray-50 text-slate-700 sm:text-3xl">Faqs </h1></div><div class="grid sm:grid-cols-2"><div data-aos="fade-right" data-aos-duration="1000" class="w-full px-4"><img src="/images//services/faq.png" alt="hero div img" class="rounded-full lg:ml-auto"></div><div class="w-full lg:w-11/12"><div class="px-1 py-2 text-gray-800"><div class="mt-6 text-lg leading-loose"><div><!--[-->`);
      ssrRenderList(faqsGet.value, (faq, index) => {
        _push(`<div><button class="${ssrRenderClass([index !== faqsGet.value.length - 1 && "border-b border-gray-400", "flex items-center justify-between w-full py-3 mt-4 text-gray-800 border-b font-bega-semibold dark:text-white"])}"><div class="text-left">${ssrInterpolate(faq.questions)}</div><svg style="${ssrRenderStyle(!expandedItems.value.includes(faq.id) ? null : { display: "none" })}" class="fill-current" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"></path></svg><svg style="${ssrRenderStyle(expandedItems.value.includes(faq.id) ? null : { display: "none" })}" class="fill-current" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"></path></svg></button>`);
        _push(ssrRenderComponent(unref(Collapse), {
          when: expandedItems.value.includes(faq.id),
          class: "m-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="m-2 text-sm text-justify text-gray-800 dark:text-white"${_scopeId}>${ssrInterpolate(faq.reponses)}</p>`);
            } else {
              return [
                createVNode("p", { class: "m-2 text-sm text-justify text-gray-800 dark:text-white" }, toDisplayString(faq.reponses), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

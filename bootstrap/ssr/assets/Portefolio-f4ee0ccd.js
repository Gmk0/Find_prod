import { computed, ref, resolveComponent, resolveDirective, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-0b27ba37.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "primevue/tabview/tabview.esm.js";
import "primevue/tabpanel/tabpanel.esm.js";
import "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./ServiceCard-e7761917.js";
import { Navigation, Scrollbar, Pagination, A11y, EffectCube } from "swiper/modules";
/* empty css                   */import "vue-collapsed";
import "@vueuse/core";
import "./NotificationComponent-fe8292d8.js";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
const Portefolio_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Portefolio",
  __ssrInlineRender: true,
  props: {
    freelance: Object,
    services: Object,
    realisations: Array
  },
  setup(__props) {
    const props = __props;
    const freelance = computed(() => props.freelance.data);
    const services = computed(() => props.services.data);
    const swiperInstanceServices = ref(null);
    const onSwiperInitializedService = (swiper) => {
      swiperInstanceServices.value = swiper;
    };
    const swiperInstanceRealisation = ref(null);
    const onSwiperInstanceRealisation = (swiper) => {
      swiperInstanceRealisation.value = swiper;
    };
    ref(false);
    const toggler = ref(false);
    const images = ref([]);
    ref(false);
    ref(false);
    const tab = ref("profile");
    props.realisations.forEach((realisation) => {
      realisation.media.forEach((media) => {
        images.value.push(media.url);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_FsLightbox = resolveComponent("FsLightbox");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-16 font-bega-light" }, _attrs))}><div class="flex flex-col border-t border-gray-400"><div><div class="px-4 mt-4"><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center"><a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"><svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path></svg> Acceuil </a></li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("find_freelance"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>freelance</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mx-1 text-gray-400",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 6 10"
              }, [
                createVNode("path", {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "m1 9 4-4-4-4"
                })
              ])),
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 break-before-auto dark:text-gray-400">${ssrInterpolate(freelance.value.identifiant)}</span></div></li></ol></nav></div></div><div class="flex flex-col justify-between w-full px-6 pt-8 pb-8 border-b border-gray-300 lg:pt-12 lg:flex-row min-h-48"><div class="flex flex-col items-center gap-6 lg:flex-row"><div>`);
      if (freelance.value.user.profile_photo_path != null) {
        _push(`<img class="h-auto rounded-lg w-52 lg:w-48"${ssrRenderAttr("src", "/storage/" + freelance.value.user.profile_photo_path)}>`);
      } else {
        _push(`<img class="h-auto rounded-lg w-52 lg:w-48"${ssrRenderAttr("src", freelance.value.user.profile_photo_url)}>`);
      }
      _push(`</div><div class="flex flex-col items-center lg:items-start"><div class="mb-4 lg:mb-0">`);
      if (freelance.value.user.is_online) {
        _push(`<div class="mx-auto lg:mx-0 px-2 w-[70%]"><p class="items-center px-2 py-1 text-center text-green-500 bg-green-100 lg:items-start text-md rounded-xl">En ligne</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="px-2 py-1 text-lg text-center lg:text-start text-skin-fill rounded-xl">${ssrInterpolate(freelance.value.category.name)}</p><p class="px-2 py-1 text-xl text-center text-gray-800 dark:text-gray-100 lg:text-start rounded-xl font-bega-medium">${ssrInterpolate(freelance.value.prenom)} ${ssrInterpolate(freelance.value.nom)}</p></div><div class="flex flex-wrap gap-6"><div class="flex gap-3 px-2"><!--[-->`);
      ssrRenderList(freelance.value.subCategorie, (subCategory, index) => {
        var _a;
        _push(`<!--[--><span${ssrRenderAttrs(mergeProps({ class: "flex gap-2 p-2 transition-all transform rounded-lg shadow-sm bg-gray-50 items-center py-1 cursor-default px-3 text-[12px] lg:text-sm border border-secondary-200 text-gray-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, subCategory.name, void 0, { top: true })))}>${ssrInterpolate(subCategory.name)}</span>`);
        if (index === 4 && ((_a = props.freelance.data.subCategorie) == null ? void 0 : _a.length) > 5) {
          _push(`<span class="ml-2 text-sm text-gray-500"> (+${ssrInterpolate(props.freelance.data.subCategorie.length - 5)} de plus) </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><p class="flex gap-1 py-1 text-base"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>${ssrInterpolate(freelance.value.localisation["ville"] ? freelance.value.localisation["ville"] : "")} ,${ssrInterpolate(freelance.value.localisation["commune"] ? props.freelance.data.localisation["commune"] : "")}</span></p><p class="flex gap-1 py-1 text-base"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg><span>${ssrInterpolate(freelance.value.taux_journalier)} $ / jour </span></p></div></div></div><div class="flex gap-6 p-4 lg:items-center lg:justify-center py-auto"><div class="w-full mt-8">`);
      if (_ctx.$page.props.auth.user) {
        _push(`<button type="button" class="block w-full select-none rounded-lg bg-skin-fill py-3 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"> Contacter </button>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("login"),
          class: "block w-full select-none rounded-lg bg-skin-fill py-3 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
          "data-ripple-light": "true"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Connecter-vous `);
            } else {
              return [
                createTextVNode(" Connecter-vous ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></div><div class="min-h-screen pt-2 m-2 lg:flex lg:flex-row"><div class="w-full min-h-screen lg:w-8/12"><div class="mb-4 border-b border-gray-200 dark:border-gray-700"><ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist"><li class="me-2" role="presentation"><button class="${ssrRenderClass([{ "active-tab": tab.value === "profile" }, "inline-block p-4 text-lg border-b-2 rounded-t-lg font-bega-medium"])}" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Resume</button></li><li class="me-2" role="presentation"><button class="${ssrRenderClass([{ "active-tab": tab.value === "portefolio" }, "inline-block p-4 text-lg border-b-2 rounded-t-lg font-bega-medium hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"])}" id="dashboard-tab" data-tabs-target="#dashboard"> Portefolio</button></li><li class="me-2" role="presentation"><button class="${ssrRenderClass([{ "active-tab": tab.value === "service" }, "inline-block p-4 text-lg border-b-2 rounded-t-lg font-bega-medium hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"])}" id="settings-tab">Service</button></li></ul></div><div id="default-tab-content">`);
      if (tab.value === "profile") {
        _push(`<div class="bg-white rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab"><section class="rounded-md dark:bg-gray-800"><div class="px-4 mx-auto mb-4 max-w-7xl"><div class="max-w-5xl p-4 mx-auto"><h2 class="my-4 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200"> Apropos de Moi </h2><div class="max-w-4xl mb-4 text-base text-gray-700 break-words dark:text-gray-300">`);
        {
          _push(`<p class="text-justify font-bega-light">${ssrInterpolate(freelance.value.description)}</p>`);
        }
        _push(`</div></div></div></section>`);
        if (freelance.value.diplome.length > 0) {
          _push(`<section class="rounded-md dark:bg-gray-800"><div class="px-4 mx-auto mb-4 max-w-7xl"><div class="max-w-5xl p-4 mx-auto"><h2 class="mt-4 mb-2 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200"> Education </h2><div class="max-w-4xl px-4 py-4 mb-3 text-base text-gray-700 border-l border-gray-300 dark:text-gray-300"><!--[-->`);
          ssrRenderList(freelance.value.diplome, (diplome, index) => {
            _push(`<div class="flex flex-col gap-3"><div class="flex flex-wrap gap-3"><h2 class="px-2 text-base font-bega-medium">${ssrInterpolate(diplome["diplome"])}</h2><h2 class="px-2 text-base font-bega-medium">${ssrInterpolate(diplome["universite"])}</h2><h2 class="text-base">${ssrInterpolate(diplome["annee"])}</h2></div></div>`);
          });
          _push(`<!--]--></div></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (freelance.value.certificat.length > 0) {
          _push(`<section class="my-8 rounded-md dark:bg-gray-800"><div class="px-4 mx-auto mb-4 max-w-7xl"><div class="max-w-5xl p-4 mx-auto"><h2 class="mt-4 mb-2 text-lg text-gray-800 text-start font-bega-semibold md:text-xl dark:text-gray-200"> Certification </h2><div class="max-w-4xl px-4 py-4 mb-4 text-base text-gray-700 border-l border-gray-300 dark:text-gray-300"><!--[-->`);
          ssrRenderList(freelance.value.certificat, (certificat, index) => {
            _push(`<div class="flex flex-col gap-3"><div class="flex flex-wrap gap-3"><h2 class="px-2 text-base font-bega-medium">${ssrInterpolate(certificat["certifier"])}</h2><h2 class="px-2 text-base font-bega-medium">${ssrInterpolate(certificat["delivrer"])}</h2><h2 class="text-base">${ssrInterpolate(certificat["annee"])}</h2></div></div>`);
          });
          _push(`<!--]--></div></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (freelance.value.competences.length > 0) {
          _push(`<section class="my-8 rounded-md dark:bg-gray-800"><div class="px-4 mx-auto mb-4 max-w-7xl"><div class="max-w-5xl p-4 mx-auto"><h2 class="mt-4 mb-2 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200"> Experience </h2><div class="max-w-4xl px-6 mb-4 text-base text-gray-700 border-l border-gray-300 dark:text-gray-300"><!--[-->`);
          ssrRenderList(freelance.value.competences, (compt, index) => {
            _push(`<div class="flex flex-col gap-4"><div class="flex flex-wrap gap-4"><h2 class="px-2 text-base font-bega-medium">${ssrInterpolate(compt.title)}</h2><h2 class="text-base">${ssrInterpolate(compt.level)}</h2></div></div>`);
          });
          _push(`<!--]--></div></div></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="hidden rounded-md dark:bg-gray-800"><div class="px-4 mx-auto mb-4 max-w-7xl"><div class="max-w-5xl mx-auto"><h2 class="my-4 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200"> Apropos de Moi </h2><div class="max-w-4xl mb-4 text-base text-gray-700 break-words dark:text-gray-300"></div></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
      if (tab.value === "portefolio") {
        _push(`<div class="p-4 bg-white rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab"><section class="rounded-md"><div class="max-w-5xl mx-auto"><h2 class="my-4 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200">Mes réalisations</h2></div>`);
        if (props.realisations.length != 0) {
          _push(`<div class="flex items-center justify-between">`);
          if (props.realisations.length != 0) {
            _push(`<div class="mb-4">`);
            _push(ssrRenderComponent(_component_FsLightbox, {
              toggler: toggler.value,
              sources: images.value
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex gap-4 p-2"><button class="p-0 rounded-full btn btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button><button class="p-0 rounded-full btn btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (props.realisations.lenght > 0) {
          _push(`<div class=""><div class="p-4 bg-white rounded-md shadow dark:bg-gray-800">`);
          _push(ssrRenderComponent(unref(Swiper), {
            modules: [unref(Navigation), unref(Scrollbar), unref(Pagination), unref(A11y)],
            "slides-per-view": 1,
            onSwiper: onSwiperInstanceRealisation
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(props.realisations, (realisation) => {
                  _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="my-3"${_scopeId2}><div class="py-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12"${_scopeId2}><div class="max-w-6xl px-4 mx-auto"${_scopeId2}><div class="grid gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8"${_scopeId2}><!--[-->`);
                        ssrRenderList(realisation.media, (media, index) => {
                          _push3(`<a href="#" class="${ssrRenderClass([{ "md:!col-span-2": index === 1, "md:col-span-2": index === 2 }, "relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"])}"${_scopeId2}><img${ssrRenderAttr("src", media.url)} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"${_scopeId2}><div class="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent"${_scopeId2}></div><span class="relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg"${_scopeId2}>VR</span></a>`);
                        });
                        _push3(`<!--]--></div></div></div></div><div class="p-4 mt-auto bg-gray-200 rounded-md dark:bg-gray-700"${_scopeId2}>${ssrInterpolate(realisation.description)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "my-3" }, [
                            createVNode("div", { class: "py-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12" }, [
                              createVNode("div", { class: "max-w-6xl px-4 mx-auto" }, [
                                createVNode("div", { class: "grid gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(realisation.media, (media, index) => {
                                    return openBlock(), createBlock("a", {
                                      href: "#",
                                      onClick: ($event) => toggler.value = !toggler.value,
                                      class: [{ "md:!col-span-2": index === 1, "md:col-span-2": index === 2 }, "relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"]
                                    }, [
                                      createVNode("img", {
                                        src: media.url,
                                        loading: "lazy",
                                        alt: "Photo by Minh Pham",
                                        class: "absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent" }),
                                      createVNode("span", { class: "relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg" }, "VR")
                                    ], 10, ["onClick"]);
                                  }), 256))
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "p-4 mt-auto bg-gray-200 rounded-md dark:bg-gray-700" }, toDisplayString(realisation.description), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.realisations, (realisation) => {
                    return openBlock(), createBlock(unref(SwiperSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "my-3" }, [
                          createVNode("div", { class: "py-6 bg-white dark:bg-gray-800 sm:py-8 lg:py-12" }, [
                            createVNode("div", { class: "max-w-6xl px-4 mx-auto" }, [
                              createVNode("div", { class: "grid gap-4 lg:grid-cols-3 md:gap-6 xl:gap-8" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(realisation.media, (media, index) => {
                                  return openBlock(), createBlock("a", {
                                    href: "#",
                                    onClick: ($event) => toggler.value = !toggler.value,
                                    class: [{ "md:!col-span-2": index === 1, "md:col-span-2": index === 2 }, "relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80"]
                                  }, [
                                    createVNode("img", {
                                      src: media.url,
                                      loading: "lazy",
                                      alt: "Photo by Minh Pham",
                                      class: "absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110"
                                    }, null, 8, ["src"]),
                                    createVNode("div", { class: "absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent" }),
                                    createVNode("span", { class: "relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg" }, "VR")
                                  ], 10, ["onClick"]);
                                }), 256))
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "p-4 mt-auto bg-gray-200 rounded-md dark:bg-gray-700" }, toDisplayString(realisation.description), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="text-center"><h1 class="text-lg dark:text-gray-100 font-bega-medium">Rien pour l&#39;instant</h1></div>`);
        }
        _push(`</section></div>`);
      } else {
        _push(`<!---->`);
      }
      if (tab.value === "service") {
        _push(`<div class="p-4 bg-white rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab"><section class="dark:bg-gray-800"><div class="px-2 mx-auto mb-4 max-w-7xl"><div class="max-w-5xl mx-auto"><h2 class="my-4 text-lg text-gray-800 text-start font-bega-semibold Apropos de Moimd:text-xl dark:text-gray-200">Mes Services</h2></div>`);
        if (services.value.length > 0) {
          _push(`<div class="py-8 swiper"><div class="flex items-center justify-between"><div></div><div class="flex gap-4"><button class="p-0 rounded-full btn btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg></button><button class="p-0 rounded-full btn btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg></button></div></div><div class="mt-5">`);
          _push(ssrRenderComponent(unref(Swiper), {
            class: "flex py-8",
            modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(EffectCube), unref(A11y)],
            spaceBetween: 30,
            breakpoints: { 600: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
            "space-between": 25,
            onSwiper: onSwiperInitializedService
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(services.value, (service) => {
                  _push2(ssrRenderComponent(unref(SwiperSlide), { class: "px-2 py-2" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_sfc_main$2, { service }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_sfc_main$2, { service }, null, 8, ["service"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(services.value, (service) => {
                    return openBlock(), createBlock(unref(SwiperSlide), { class: "px-2 py-2" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2, { service }, null, 8, ["service"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="text-lg text-center dark:text-gray-100 font-bega-medium"><h1> Le freelance n&#39;a pas encore créé de services</h1></div>`);
        }
        _push(`</div></section></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-full px-4 py-8 mx-auto lg:px-6 lg:mx-0 lg:w-4/12"><div class="flex flex-col w-full gap-6 p-6 m-2 bg-white rounded-lg dark:bg-findDark-800 min-h-72"><div class="flex justify-between py-3 border-b border-gray-300"><h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold">Niveau</h1><h1 class="text-lg text-gray-800 font-bega-light dark:text-gray-100"> 1</h1></div><div class="flex justify-between py-3 border-b border-gray-300"><h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold">Localisation</h1><h1 class="text-lg text-gray-800 dark:text-gray-100 font-bega-light">${ssrInterpolate(freelance.value.localisation["ville"] ? freelance.value.localisation["ville"] : "")}</h1></div><div class="flex justify-between py-3 border-b border-gray-300"><h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold">Experience</h1><h1 class="text-lg text-gray-800 font-bega-light dark:text-gray-100">${ssrInterpolate(freelance.value.experience)}</h1></div><div class="flex justify-between py-3 border-b border-gray-300"><h1 class="text-lg text-gray-500 dark:text-gray-200 font-bega-semibold">Langue</h1><h1 class="text-lg text-gray-800 font-bega-light dark:text-gray-100"><!--[-->`);
      ssrRenderList(freelance.value.langue, (langue, index) => {
        _push(`<!--[-->${ssrInterpolate(langue["langue"])} , <!--]-->`);
      });
      _push(`<!--]--></h1></div>`);
      if (freelance.value.comptes.length > 0) {
        _push(`<div class="flex justify-between py-3 border-b border-gray-300"><div class="flex items-center gap-4 mx-auto space-x-4 text-lg"><!--[-->`);
        ssrRenderList(freelance.value.comptes, (compte, index) => {
          _push(`<!--[-->`);
          if (compte["compte"] === "Facebook") {
            _push(`<a${ssrRenderAttr("href", compte["lien"])} class="px-3 py-2 text-center transition-colors bg-gray-200 rounded-full hover:bg-skin-fill hover:text-white"><i class="fab fa-facebook-f"></i></a>`);
          } else {
            _push(`<!---->`);
          }
          if (compte["compte"] === "Twitter") {
            _push(`<a${ssrRenderAttr("href", compte["lien"])} class="px-3 py-2 text-center transition-colors bg-gray-200 rounded-full hover:bg-skin-fill hover:text-white"><i class="fab fa-twitter"></i></a>`);
          } else {
            _push(`<!---->`);
          }
          if (compte["instagram"] === "Instagram") {
            _push(`<a${ssrRenderAttr("href", compte["lien"])} class="px-3 py-2 text-center transition-colors bg-gray-200 rounded-full hover:bg-skin-fill hover:text-white"><i class="fab fa-instagram"></i></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Freelance/Portefolio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

import { ref, computed, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, Fragment, renderList, toDisplayString, createCommentVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-9b20c3c4.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y } from "swiper/modules";
import TabView from "primevue/tabview/tabview.esm.js";
import TabPanel from "primevue/tabpanel/tabpanel.esm.js";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import axios from "axios";
import { usePage, useForm } from "@inertiajs/vue3";
import { d as cartStore } from "./NotificationComponent-c4834522.js";
import "@vueuse/core";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "GetOneGift",
  __ssrInlineRender: true,
  props: {
    service: Object,
    otherService: Array,
    commentaires: Array,
    countReferrals: Object
  },
  setup(__props) {
    useToast();
    const page = usePage();
    cartStore();
    const contactMe = ref(false);
    const props = __props;
    const like = ref(props.service.data.likeUser);
    const level = ref("basic");
    const progress = ref(false);
    const service = computed(() => props.service.data);
    ref(props.service.data.basic_price);
    const swiperInstanceRealisation = ref(null);
    const onSwiperInstanceRealisation = (swiper) => {
      swiperInstanceRealisation.value = swiper;
    };
    const navigateCommentaire = (direction) => {
      if (swiperInstanceServices.value) {
        if (direction === "prev") {
          swiperInstanceServices.value.slidePrev();
        } else if (direction === "next") {
          swiperInstanceServices.value.slideNext();
        }
      }
    };
    const sendMessageLoading = ref(false);
    const messageSent = ref(false);
    const chatID = ref("");
    const sendMessage = async () => {
      sendMessageLoading.value = !sendMessageLoading.value;
      try {
        const response = await axios.post(route("contactFreelance"), {
          body: message.body,
          freelance_id: props.service.data.freelance.id,
          user_id: props.service.data.user.id,
          service_id: props.service.data.id
        });
        chatID.value = response.data.chatId;
        sendMessageLoading.value = false;
        messageSent.value = true;
      } catch (e) {
        sendMessageLoading.value = false;
        console.log(e);
      }
    };
    const message = useForm({
      body: "",
      freelance_id: props.service.data.freelance.id,
      user_id: props.service.data.user.id,
      service_id: props.service.data.id
    });
    const images = ref([]);
    for (let i = 0; i < props.service.data.files.length; i++) {
      images.value.push({
        itemImageSrc: "/storage/" + props.service.data.files[i],
        thumbnailImageSrc: "/storage/" + props.service.data.files[i],
        alt: `Description for Image ${i + 1}`,
        title: `Title ${i + 1}`
      });
    }
    useForm({
      service_numero: props.service.data.service_numero,
      id_client: page.props.auth.user.id
    });
    ref([
      {
        breakpoint: "991px",
        numVisible: 4
      },
      {
        breakpoint: "767px",
        numVisible: 3
      },
      {
        breakpoint: "575px",
        numVisible: 1
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_Toast = resolveComponent("Toast");
      const _component_Photo = resolveComponent("Photo");
      const _component_ServiceCard = resolveComponent("ServiceCard");
      const _component_Button = resolveComponent("Button");
      const _component_Dialog = resolveComponent("Dialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-2 pt-16 bg-gray-100 md:px-6 dark:bg-findDark-950" }, _attrs))}><div class="hidden px-2"> All/Service </div><div class="px-4 mt-4"><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("Allservices"),
        class: "inline-flex items-center text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Services `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mr-2.5",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" })
              ])),
              createTextVNode(" Services ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm text-gray-500 md:ml-2 dark:text-gray-400">${ssrInterpolate(service.value.service_numero)}</span></div></li></ol></nav></div>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="px-4 mx-auto my-4"><div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-findDark-900 dark:text-blue-400" role="alert"><svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path></svg><span class="sr-only">Info</span><div><span class="font-bega_medium">Parrainez au moins 3 personnes pour profiter de l&#39;offre ${ssrInterpolate(props.countReferrals)}/3 !</span></div></div></div><div class="container relative px-4 py-4 lg:mx-auto"><div class="relative flex flex-col gap-4 lg:flex-row lg:space-x-4"><div id="card" class="relative flex-col mx-2 mb-6 lg:flex lg:order-2 lg:mb-0 lg:w-1/3"><div class="flex lg:sticky lg:top-[8rem] flex-col gap-2 p-4 card-sticky"><div class="p-2 bg-white rounded-md shadow-lg lg:sticky dark:bg-findDark-900"><div class="mt-2 sm:col-span-8 lg:col-span-7"><h2 class="block my-4 text-base text-gray-800 truncate font-bega_medium lg:text-lg lg:hidden dark:text-gray-300">${ssrInterpolate(service.value.title)}</h2><section aria-labelledby="information-heading" class="mt-1"><h3 id="information-heading" class="sr-only">Product information</h3><div class="flex justify-between my-3"><h4 class="sr-only">Reviews</h4><div class="flex items-center"><div class="flex items-center"><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"></path></svg><span class="text-sm text-gray-700 dark:text-gray-100">(2) </span></div><p class="sr-only">3 out of 5 stars</p><a href="#" class="ml-3 text-sm text-amber-600 hover:text-indigo-500">${ssrInterpolate(service.value.orderCount)} reviews</a></div><div class="flex justify-between mt-3"><div class="flex items-center"><button class="flex gap-1 mr-2"><span style="${ssrRenderStyle(!like.value ? null : { display: "none" })}" class=""><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></span><span style="${ssrRenderStyle(like.value ? null : { display: "none" })}"><svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></span></button></div><div></div></div></div>`);
      if (service.value.premium_price && service.value.extra_price) {
        _push(`<div class="mt-4 mb-3 font-bega_medium"><ul class="flex items-center w-full text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"><li class="${ssrRenderClass([level.value === "Basic" ? "border-b-4 border-amber-600" : "", "w-full sm:border-r dark:border-gray-600"])}"><button class="w-full py-3 ml-2 text-sm text-gray-900 dark:text-gray-300 focus:outline-none"> Basic </button></li><li class="${ssrRenderClass([level.value === "Premium" ? "border-b-4 border-amber-600" : "", "w-full sm:border-r dark:border-gray-600"])}"><button class="w-full py-3 ml-2 text-sm text-gray-900 dark:text-gray-300 focus:outline-none"> Premium </button></li><li class="${ssrRenderClass([level.value === "Extra" ? "border-b-4 border-amber-600" : "", "w-full dark:border-gray-600"])}"><button class="w-full py-3 ml-2 text-sm text-gray-900 dark:text-gray-300 focus:outline-none"> Extra </button></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-between gap-2 px-4"><p class="py-2 text-lg text-gray-800"></p><p class="text-lg font-bega_semibold text-amber-600">Gratuit</p></div><div><div id="" class="mt-4"><div class="px-4"><ul class="flex gap-4"></ul></div></div></div></section><section aria-labelledby="options-heading" class="px-4 mt-1"><h3 id="options-heading" class="sr-only">Service options</h3><div><div class="flex justify-between mt-4"><p class="flex gap-2 text-gray-700 dark:text-gray-100"><span><i class="pi pi-clock"></i></span>`);
      if (level.value === "basic") {
        _push(`<span>${ssrInterpolate(service.value.basic_delivery_time)}</span>`);
      } else if (level.value === "Premium") {
        _push(`<span>${ssrInterpolate(service.value.premium_delivery_time)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(service.value.extra_delivery_time)}</span>`);
      }
      _push(` Jours Delai </p><p class="flex gap-2 text-gray-700 dark:text-gray-100"><span><i class="pi pi-replay"></i></span>`);
      if (level.value === "basic") {
        _push(`<span>${ssrInterpolate(service.value.basic_revision)}</span>`);
      } else if (level.value === "Premium") {
        _push(`<span>${ssrInterpolate(service.value.premium_revision)}</span>`);
      } else {
        _push(`<span>${ssrInterpolate(service.value.extra_revision)}</span>`);
      }
      _push(` Revisions </p></div><div class="flex mb-8">`);
      if (__props.countReferrals >= 3) {
        _push(`<button type="button" id="" class="flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base text-white border border-transparent bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 shadow-sm shadow-amber-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg><span>Recuperer</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" id="" class="flex items-center justify-center w-full gap-1 px-8 py-3 mt-4 text-base text-white border border-transparent bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 shadow-sm shadow-amber-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg><span>Parainer</span></button></div></div></section></div></div></div></div><div class="w-full px-2 bg-white lg:px-4 dark:bg-findDark-900 md:w-2/3"><div class="lg:p-4 dark:bg-findDark-900"><div class="flex flex-col mb-4"><div><p class="mb-4 text-lg text-gray-700 font-bega_medium md:text-xl dark:text-gray-200">${ssrInterpolate(service.value.title)}</p></div><div class="flex gap-4 mt-2"><div class="flex flex-col gap-3 my-auto"><a class="hidden text-base text-gray-500">${ssrInterpolate(service.value.freelance.nom)}</a><div class="flex flex-row gap-2"><span class="hidden text-base">Niveau ${ssrInterpolate(service.value.freelance.level)}</span>`);
      if (service.value.commandeEncours != 0) {
        _push(`<span class="text-base"><span class="text-green-600">${ssrInterpolate(service.value.commandeEncours)}</span> commande en cours </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="mt-4"><div class="w-full rounded-lg lg:w-10/12">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
        effect: "fade",
        "slides-per-view": 1,
        navigation: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.service.data.files, (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="object-cover w-auto h-auto rounded-md lg:h-10/12 swiper-lazy"${ssrRenderAttr("src", "/storage/" + image)}${ssrRenderAttr("alt", image)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "object-cover w-auto h-auto rounded-md lg:h-10/12 swiper-lazy",
                        src: "/storage/" + image,
                        alt: image
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.service.data.files, (image, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "object-cover w-auto h-auto rounded-md lg:h-10/12 swiper-lazy",
                      src: "/storage/" + image,
                      alt: image
                    }, null, 8, ["src", "alt"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden"><p class="mt-4 text-lg text-gray-800 font-bega_medium md:text-2xl dark:text-gray-200">${ssrInterpolate(service.value.title)}</p></div><div class="mt-8">`);
      _push(ssrRenderComponent(unref(TabView), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabPanel), { header: "INFO" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-5 min-h-64"${_scopeId2}><div class="mb-4 prose text-gray-800 md:text-base dark:text-gray-200"${_scopeId2}><div${_scopeId2}>${service.value.description}</div></div><div class="grid grid-cols-2 gap-4 mb-4"${_scopeId2}><div${_scopeId2}><p class="text-gray-500 dark:text-gray-200"${_scopeId2}>Support :</p><div id="support" class="text-gray-800"${_scopeId2}><div class="px-2 mt-2"${_scopeId2}><ul class="px-4 list-disc dark:text-gray-50"${_scopeId2}><!--[-->`);
                  ssrRenderList(service.value.basic_support, (value, index) => {
                    _push3(`<li${_scopeId2}>${ssrInterpolate(value)}</li>`);
                  });
                  _push3(`<!--]--></ul></div></div></div></div><div class="grid hidden grid-cols-2 gap-4 mb-4"${_scopeId2}><div${_scopeId2}><p class="text-gray-500 dark:text-gray-200"${_scopeId2}>Prix :</p><p class="px-2 mt-2 text-gray-700 dark:text-gray-300"${_scopeId2}>à partir de <span class="text-lg text-green-700"${_scopeId2}>${ssrInterpolate(service.value.price)}</span></p></div><div${_scopeId2}><p class="text-gray-500 dark:text-gray-200"${_scopeId2}>Délai :</p><p class="text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(service.value.basic_delivery_time)} jours </p></div></div><div class="grid grid-cols-2 gap-4 mb-4"${_scopeId2}></div><div class="grid grid-cols-2 gap-4 mb-6"${_scopeId2}><div class="col-span-2"${_scopeId2}><p class="text-base text-gray-500 dark:text-gray-200"${_scopeId2}>Besoin pour ce service :</p><div class="prose"${_scopeId2}>${service.value.need_service}</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-5 min-h-64" }, [
                      createVNode("div", { class: "mb-4 prose text-gray-800 md:text-base dark:text-gray-200" }, [
                        createVNode("div", {
                          innerHTML: service.value.description
                        }, null, 8, ["innerHTML"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-gray-500 dark:text-gray-200" }, "Support :"),
                          createVNode("div", {
                            id: "support",
                            class: "text-gray-800"
                          }, [
                            createVNode("div", { class: "px-2 mt-2" }, [
                              createVNode("ul", { class: "px-4 list-disc dark:text-gray-50" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(service.value.basic_support, (value, index) => {
                                  return openBlock(), createBlock("li", null, toDisplayString(value), 1);
                                }), 256))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid hidden grid-cols-2 gap-4 mb-4" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-gray-500 dark:text-gray-200" }, "Prix :"),
                          createVNode("p", { class: "px-2 mt-2 text-gray-700 dark:text-gray-300" }, [
                            createTextVNode("à partir de "),
                            createVNode("span", { class: "text-lg text-green-700" }, toDisplayString(service.value.price), 1)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-gray-500 dark:text-gray-200" }, "Délai :"),
                          createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, toDisplayString(service.value.basic_delivery_time) + " jours ", 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }),
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                        createVNode("div", { class: "col-span-2" }, [
                          createVNode("p", { class: "text-base text-gray-500 dark:text-gray-200" }, "Besoin pour ce service :"),
                          createVNode("div", {
                            class: "prose",
                            innerHTML: service.value.need_service
                          }, null, 8, ["innerHTML"])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanel), { header: "Example" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (service.value.example != null) {
                    _push3(`<div class="grid grid-cols-1 gap-4"${_scopeId2}><div class="p-4 bg-white rounded-md shadow dark:bg-findDark-900"${_scopeId2}><div class="flex flex-row gap-2 p-4 mb-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Swiper), {
                      modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                      effect: "fade",
                      "slides-per-view": 1,
                      navigation: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(service.value.example.image, (image, index) => {
                            _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img class="object-fill rounded-md h-10/12 swiper-lazy"${ssrRenderAttr("src", "/storage/" + image)} alt="bro"${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      class: "object-fill rounded-md h-10/12 swiper-lazy",
                                      src: "/storage/" + image,
                                      alt: "bro"
                                    }, null, 8, ["src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(service.value.example.image, (image, index) => {
                              return openBlock(), createBlock(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "object-fill rounded-md h-10/12 swiper-lazy",
                                    src: "/storage/" + image,
                                    alt: "bro"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="p-4 mt-2 font-sans text-gray-700 dark:text-gray-200"${_scopeId2}><div${_scopeId2}>${service.value.example.description}</div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    service.value.example != null ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-1 gap-4"
                    }, [
                      createVNode("div", { class: "p-4 bg-white rounded-md shadow dark:bg-findDark-900" }, [
                        createVNode("div", { class: "flex flex-row gap-2 p-4 mb-4" }, [
                          createVNode(unref(Swiper), {
                            modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                            effect: "fade",
                            "slides-per-view": 1,
                            navigation: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(service.value.example.image, (image, index) => {
                                return openBlock(), createBlock(unref(SwiperSlide), null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      class: "object-fill rounded-md h-10/12 swiper-lazy",
                                      src: "/storage/" + image,
                                      alt: "bro"
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          }, 8, ["modules"])
                        ]),
                        createVNode("div", { class: "p-4 mt-2 font-sans text-gray-700 dark:text-gray-200" }, [
                          createVNode("div", {
                            innerHTML: service.value.example.description
                          }, null, 8, ["innerHTML"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanel), { header: "Commentaires" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (props.commentaires.length > 0) {
                    _push3(`<div${_scopeId2}><div class="flex gap-4 p-2"${_scopeId2}><button class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg></button><button class="p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"${_scopeId2}></path></svg></button></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(Swiper), {
                    modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                    effect: "fade",
                    "slides-per-view": 1,
                    navigation: "",
                    onSwiper: onSwiperInstanceRealisation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(props.commentaires, (commentaire) => {
                          _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}><div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600"${_scopeId4}><p class="text-sm text-gray-700 md:text-base dark:text-gray-300"${_scopeId4}>${ssrInterpolate(commentaire.commentaire)}</p><div class="flex items-center my-4"${_scopeId4}><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId4}><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"${_scopeId4}></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100"${_scopeId4}>${ssrInterpolate(commentaire.satisfaction)}</span></div><div${_scopeId4}><div class="flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Photo, {
                                  user: commentaire.user,
                                  taille: "10"
                                }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}><p class="text-gray-800 dark:text-gray-200"${_scopeId4}>${ssrInterpolate(commentaire.user.name)}</p></div></div></div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", null, [
                                    createVNode("div", { class: "p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" }, [
                                      createVNode("p", { class: "text-sm text-gray-700 md:text-base dark:text-gray-300" }, toDisplayString(commentaire.commentaire), 1),
                                      createVNode("div", { class: "flex items-center my-4" }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4 mr-1 text-yellow-500 fill-current",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 20 20"
                                        }, [
                                          createVNode("path", { d: "M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" })
                                        ])),
                                        createVNode("span", { class: "text-sm font-semibold text-gray-700 dark:text-gray-100" }, toDisplayString(commentaire.satisfaction), 1)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode(_component_Photo, {
                                            user: commentaire.user,
                                            taille: "10"
                                          }, null, 8, ["user"]),
                                          createVNode("div", null, [
                                            createVNode("p", { class: "text-gray-800 dark:text-gray-200" }, toDisplayString(commentaire.user.name), 1)
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(props.commentaires, (commentaire) => {
                            return openBlock(), createBlock(unref(SwiperSlide), null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("div", { class: "p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" }, [
                                    createVNode("p", { class: "text-sm text-gray-700 md:text-base dark:text-gray-300" }, toDisplayString(commentaire.commentaire), 1),
                                    createVNode("div", { class: "flex items-center my-4" }, [
                                      (openBlock(), createBlock("svg", {
                                        class: "w-4 h-4 mr-1 text-yellow-500 fill-current",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20"
                                      }, [
                                        createVNode("path", { d: "M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" })
                                      ])),
                                      createVNode("span", { class: "text-sm font-semibold text-gray-700 dark:text-gray-100" }, toDisplayString(commentaire.satisfaction), 1)
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode(_component_Photo, {
                                          user: commentaire.user,
                                          taille: "10"
                                        }, null, 8, ["user"]),
                                        createVNode("div", null, [
                                          createVNode("p", { class: "text-gray-800 dark:text-gray-200" }, toDisplayString(commentaire.user.name), 1)
                                        ])
                                      ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    props.commentaires.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "flex gap-4 p-2" }, [
                        createVNode("button", {
                          onClick: ($event) => navigateCommentaire("prev"),
                          class: "p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "w-5 h-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "1.5",
                              d: "M15 19l-7-7 7-7"
                            })
                          ]))
                        ], 8, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => navigateCommentaire("next"),
                          class: "p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "w-5 h-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "1.5",
                              d: "M9 5l7 7-7 7"
                            })
                          ]))
                        ], 8, ["onClick"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode(unref(Swiper), {
                      modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                      effect: "fade",
                      "slides-per-view": 1,
                      navigation: "",
                      onSwiper: onSwiperInstanceRealisation
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(props.commentaires, (commentaire) => {
                          return openBlock(), createBlock(unref(SwiperSlide), null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("div", { class: "p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" }, [
                                  createVNode("p", { class: "text-sm text-gray-700 md:text-base dark:text-gray-300" }, toDisplayString(commentaire.commentaire), 1),
                                  createVNode("div", { class: "flex items-center my-4" }, [
                                    (openBlock(), createBlock("svg", {
                                      class: "w-4 h-4 mr-1 text-yellow-500 fill-current",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20"
                                    }, [
                                      createVNode("path", { d: "M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" })
                                    ])),
                                    createVNode("span", { class: "text-sm font-semibold text-gray-700 dark:text-gray-100" }, toDisplayString(commentaire.satisfaction), 1)
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_Photo, {
                                        user: commentaire.user,
                                        taille: "10"
                                      }, null, 8, ["user"]),
                                      createVNode("div", null, [
                                        createVNode("p", { class: "text-gray-800 dark:text-gray-200" }, toDisplayString(commentaire.user.name), 1)
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["modules"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TabPanel), { header: "INFO" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "py-5 min-h-64" }, [
                    createVNode("div", { class: "mb-4 prose text-gray-800 md:text-base dark:text-gray-200" }, [
                      createVNode("div", {
                        innerHTML: service.value.description
                      }, null, 8, ["innerHTML"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-gray-500 dark:text-gray-200" }, "Support :"),
                        createVNode("div", {
                          id: "support",
                          class: "text-gray-800"
                        }, [
                          createVNode("div", { class: "px-2 mt-2" }, [
                            createVNode("ul", { class: "px-4 list-disc dark:text-gray-50" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(service.value.basic_support, (value, index) => {
                                return openBlock(), createBlock("li", null, toDisplayString(value), 1);
                              }), 256))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid hidden grid-cols-2 gap-4 mb-4" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-gray-500 dark:text-gray-200" }, "Prix :"),
                        createVNode("p", { class: "px-2 mt-2 text-gray-700 dark:text-gray-300" }, [
                          createTextVNode("à partir de "),
                          createVNode("span", { class: "text-lg text-green-700" }, toDisplayString(service.value.price), 1)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("p", { class: "text-gray-500 dark:text-gray-200" }, "Délai :"),
                        createVNode("p", { class: "text-gray-700 dark:text-gray-300" }, toDisplayString(service.value.basic_delivery_time) + " jours ", 1)
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-4" }),
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                      createVNode("div", { class: "col-span-2" }, [
                        createVNode("p", { class: "text-base text-gray-500 dark:text-gray-200" }, "Besoin pour ce service :"),
                        createVNode("div", {
                          class: "prose",
                          innerHTML: service.value.need_service
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(TabPanel), { header: "Example" }, {
                default: withCtx(() => [
                  service.value.example != null ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-1 gap-4"
                  }, [
                    createVNode("div", { class: "p-4 bg-white rounded-md shadow dark:bg-findDark-900" }, [
                      createVNode("div", { class: "flex flex-row gap-2 p-4 mb-4" }, [
                        createVNode(unref(Swiper), {
                          modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                          effect: "fade",
                          "slides-per-view": 1,
                          navigation: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(service.value.example.image, (image, index) => {
                              return openBlock(), createBlock(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "object-fill rounded-md h-10/12 swiper-lazy",
                                    src: "/storage/" + image,
                                    alt: "bro"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 256))
                          ]),
                          _: 1
                        }, 8, ["modules"])
                      ]),
                      createVNode("div", { class: "p-4 mt-2 font-sans text-gray-700 dark:text-gray-200" }, [
                        createVNode("div", {
                          innerHTML: service.value.example.description
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(unref(TabPanel), { header: "Commentaires" }, {
                default: withCtx(() => [
                  props.commentaires.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "flex gap-4 p-2" }, [
                      createVNode("button", {
                        onClick: ($event) => navigateCommentaire("prev"),
                        class: "p-0 rounded-full btn2 btn-outline btn-circle btn-sm prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "w-5 h-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M15 19l-7-7 7-7"
                          })
                        ]))
                      ], 8, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => navigateCommentaire("next"),
                        class: "p-0 rounded-full btn2 btn-outline btn-circle btn-sm next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "w-5 h-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M9 5l7 7-7 7"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode(unref(Swiper), {
                    modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
                    effect: "fade",
                    "slides-per-view": 1,
                    navigation: "",
                    onSwiper: onSwiperInstanceRealisation
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.commentaires, (commentaire) => {
                        return openBlock(), createBlock(unref(SwiperSlide), null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("div", { class: "p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-600" }, [
                                createVNode("p", { class: "text-sm text-gray-700 md:text-base dark:text-gray-300" }, toDisplayString(commentaire.commentaire), 1),
                                createVNode("div", { class: "flex items-center my-4" }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-4 h-4 mr-1 text-yellow-500 fill-current",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20"
                                  }, [
                                    createVNode("path", { d: "M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" })
                                  ])),
                                  createVNode("span", { class: "text-sm font-semibold text-gray-700 dark:text-gray-100" }, toDisplayString(commentaire.satisfaction), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(_component_Photo, {
                                      user: commentaire.user,
                                      taille: "10"
                                    }, null, 8, ["user"]),
                                    createVNode("div", null, [
                                      createVNode("p", { class: "text-gray-800 dark:text-gray-200" }, toDisplayString(commentaire.user.name), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ]),
                    _: 1
                  }, 8, ["modules"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-4 mt-6"><p class="mb-4 text-lg text-gray-800 font-bega_medium dark:text-gray-200">À propos du freelance </p><div class="flex items-center gap-4 mb-8">`);
      if (service.value.user != null) {
        _push(ssrRenderComponent(_component_Photo, {
          user: service.value.user
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("profileFreelance", service.value.freelance.identifiant),
        class: "text-gray-800 dark:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(service.value.freelance.nom)}`);
          } else {
            return [
              createTextVNode(toDisplayString(service.value.freelance.nom), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="block text-gray-700 truncate dark:text-gray-300">${ssrInterpolate(service.value.category.name)}</p></div></div><div class="max-w-md text-base text-gray-700 break-words font-bega_light dark:text-gray-100">${ssrInterpolate(service.value.freelance.description)}</div></div></div></div></div></div></div><div class="px-4 mt-4"><div class="px-4"><p class="text-lg text-gray-800 font-bega_semibold dark:text-gray-200">Du meme Categorie</p></div><div class="grid gap-4 px-4 py-4 mx-auto md:grid-cols-4"><!--[-->`);
      ssrRenderList(props.otherService.data, (service2) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ServiceCard, {
          service: service2,
          key: service2.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (props.otherService == null) {
        _push(`<div class="flex items-center justify-center h-64"><span class="text-lg text-gray-500 font-bega_medium"> Aucun élément trouvé. </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Dialog, {
        visible: contactMe.value,
        "onUpdate:visible": ($event) => contactMe.value = $event,
        position: "left",
        modal: "",
        header: "Confirmer Comannde Finis",
        style: { width: "40rem" },
        breakpoints: { "1199px": "20vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col justify-center flex-grow"${_scopeId}><div class="flex flex-col items-start justify-between mb-4"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><span class="text-lg font-bega_medium"${_scopeId}>${ssrInterpolate(service.value.user.name)}</span><span class="w-2 h-2 rounded-full"${_scopeId}></span>`);
            if (service.value.user.is_online) {
              _push2(`<span class="text-xs text-green-500"${_scopeId}> En ligne </span>`);
            } else {
              _push2(`<!--[--> en ligne ${ssrInterpolate(service.value.user.last_activity)}<!--]-->`);
            }
            _push2(`</div><span class="text-xs text-gray-500"${_scopeId}>Temps de réponse : 2 heures</span></div><div class="flex-grow space-y-2"${_scopeId}><textarea required class="w-full p-2 rounded-lg focus:ring-0 dark:bg-findDark-900 dark:text-gray-100 focus:border-amber-500" rows="4" placeholder="Votre message..."${_scopeId}>${ssrInterpolate(unref(message).body)}</textarea><div class="flex flex-col gap-2"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><div class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"${_scopeId}><p${_scopeId}>Quelle est la durée estimée pour la réalisation de ce service ?</p></div><div class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"${_scopeId}><p${_scopeId}>Quels sont les détails spécifiques inclus dans ce service ?</p></div><div class="p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"${_scopeId}><p${_scopeId}>Pouvez-vous me fournir plus d&#39;informations sur les tarifs ?</p></div></div></div></div><div class="flex justify-between mt-4 space-x-2"${_scopeId}><div class="flex gap-3"${_scopeId}><button class="flex items-center p-2 rounded-full shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"${_scopeId}></path></svg></button></div>`);
            if (chatID.value === "") {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                type: "submit",
                loading: sendMessageLoading.value,
                outlined: "",
                label: "Envoyer"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("user.chat", chatID.value)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      severity: "success",
                      outlined: "",
                      label: "Voir la conversation"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Button, {
                        severity: "success",
                        outlined: "",
                        label: "Voir la conversation"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(sendMessage, ["prevent"]),
                class: "flex flex-col justify-center flex-grow"
              }, [
                createVNode("div", { class: "flex flex-col items-start justify-between mb-4" }, [
                  createVNode("div", { class: "flex items-center space-x-2" }, [
                    createVNode("span", { class: "text-lg font-bega_medium" }, toDisplayString(service.value.user.name), 1),
                    createVNode("span", { class: "w-2 h-2 rounded-full" }),
                    service.value.user.is_online ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xs text-green-500"
                    }, " En ligne ")) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(" en ligne " + toDisplayString(service.value.user.last_activity), 1)
                    ], 64))
                  ]),
                  createVNode("span", { class: "text-xs text-gray-500" }, "Temps de réponse : 2 heures")
                ]),
                createVNode("div", { class: "flex-grow space-y-2" }, [
                  withDirectives(createVNode("textarea", {
                    required: "",
                    "onUpdate:modelValue": ($event) => unref(message).body = $event,
                    class: "w-full p-2 rounded-lg focus:ring-0 dark:bg-findDark-900 dark:text-gray-100 focus:border-amber-500",
                    rows: "4",
                    placeholder: "Votre message..."
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(message).body]
                  ]),
                  createVNode("div", { class: "flex flex-col gap-2" }, [
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", {
                        onClick: ($event) => unref(message).body += " Quelle est la durée estimée pour la réalisation de ce service ?",
                        class: "p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"
                      }, [
                        createVNode("p", null, "Quelle est la durée estimée pour la réalisation de ce service ?")
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        onClick: ($event) => unref(message).body += " Quels sont les détails spécifiques inclus dans ce service ?",
                        class: "p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"
                      }, [
                        createVNode("p", null, "Quels sont les détails spécifiques inclus dans ce service ?")
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        onClick: ($event) => unref(message).body += " Pouvez-vous me fournir plus d'informations sur les tarifs ?",
                        class: "p-1 transition bg-gray-100 rounded-lg cursor-pointer dark:bg-gray-700 hover:bg-gray-200"
                      }, [
                        createVNode("p", null, "Pouvez-vous me fournir plus d'informations sur les tarifs ?")
                      ], 8, ["onClick"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex justify-between mt-4 space-x-2" }, [
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode("button", { class: "flex items-center p-2 rounded-full shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-4 h-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "1.5"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        })
                      ]))
                    ])
                  ]),
                  chatID.value === "" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_Button, {
                      type: "submit",
                      loading: sendMessageLoading.value,
                      outlined: "",
                      label: "Envoyer"
                    }, null, 8, ["loading"])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("user.chat", chatID.value)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          severity: "success",
                          outlined: "",
                          label: "Voir la conversation"
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]))
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` * `);
      if (progress.value) {
        _push(`<div><div><div class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen" style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.3)" })}"><div class="flex flex-col items-center px-5 py-2 bg-white border rounded-lg"><div class="relative block w-20 h-5 mt-2 loader-dots"><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div></div><div class="mt-2 text-xs text-center text-gray-500 font-bega_medium"> Obtention en cours... </div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Profile/GetOneGift.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

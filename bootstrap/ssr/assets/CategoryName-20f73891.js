import { ref, watch, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-0b27ba37.js";
import { router, Link } from "@inertiajs/vue3";
import { e as useStore } from "./NotificationComponent-fe8292d8.js";
import { Collapse } from "vue-collapsed";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import "./TextInput-14bc0530.js";
import { _ as _sfc_main$2 } from "./ServiceCard-e7761917.js";
import Dropdown from "primevue/dropdown/dropdown.esm.js";
import "@vueuse/core";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Checkbox-74b17051.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
import "swiper/vue";
import "swiper/modules";
const CategoryName_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "CategoryName",
  __ssrInlineRender: true,
  props: {
    services: Object,
    categories: Array,
    subcategories: Array,
    category: Object,
    filters: Object,
    tags: Array
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      search: props.filters.search,
      sub_categorie: props.filters.search,
      price: props.filters.price,
      priceMin: props.filters.priceMin,
      level: props.filters.level,
      tag: props.filters.tag,
      deliveryTime: props.filters.deliveryTime,
      orderBy: props.filters.orderBy
    });
    const showDeliveryFilter = ref(false);
    const showCategoryFilter = ref(true);
    const showTagFilter = ref(true);
    const showFiltre = ref(false);
    ref(null);
    const cities = ref([
      { name: "Nouveau 1", code: "1" },
      { name: "Nouveau 2", code: "2" },
      { name: "Nouveau 3", code: "3" },
      { name: "Nouveau 4", code: "4" }
    ]);
    const deliveryTime = ref([
      {
        name: "1-5 jours",
        code: "1-5"
      },
      {
        name: "5-10 jours",
        code: "5-10"
      },
      {
        name: " +10 jours",
        code: "10-100"
      }
    ]);
    const trieElement = ref([
      {
        name: "Plus recent",
        code: "created_at-asc"
      },
      {
        name: "Plus ancient",
        code: "created_at-desc"
      },
      {
        name: "Prix descendant",
        code: "basic_price-desc"
      },
      {
        name: "Prix ascendant",
        code: "basic_price-asc"
      },
      {
        name: "populaire",
        code: "populaire-asc"
      }
    ]);
    watch(form, throttle(() => {
      router.get(
        route("categoryName", props.category.slug),
        pickBy(form.value),
        {
          preserveState: true,
          preserveScroll: true,
          only: ["services", "filters"]
        }
      );
    }, 3e3), { deep: true });
    useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MazInput = resolveComponent("MazInput");
      const _component_Button = resolveComponent("Button");
      const _component_MazInputNumber = resolveComponent("MazInputNumber");
      const _component_pagination = resolveComponent("pagination");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full min-h-screen pb-12 pt-14" }, _attrs))}><div class="relative flex items-center justify-between px-8 py-5 lg:py-4 dark:bg-gray-800 bg-skin-fill"><div class="flex items-center justify-center"><h1 class="text-lg text-white font-bega-semibold lg:text-4xl">${ssrInterpolate(props.category.name)}</h1></div><div class="flex">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("createProject"),
        class: "relative items-center justify-center hidden h-10 px-4 mx-auto text-sm duration-300 rounded-md lg:flex bg-gray-50 before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="relative text-base font-bega-semibold text-skin-fill"${_scopeId}>Soumettre un projet</span>`);
          } else {
            return [
              createVNode("span", { class: "relative text-base font-bega-semibold text-skin-fill" }, "Soumettre un projet")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><div class="px-4 mt-4"><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center hidden"><a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"><svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path></svg> Acceuil </a></li><li aria-current="page">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("categories"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="hidden w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Categories</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "hidden w-3 h-3 mx-1 text-gray-400",
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Categories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 break-before-auto dark:text-gray-400">${ssrInterpolate(props.category.name)}</span></div></li></ol></nav></div><div class="relative mt-4"><div class="sticky top-0 z-30 grid h-auto grid-cols-12 px-4 py-2 bg-white dark:bg-gray-800 lg:z-0 lg:relative"><div class="lg:col-span-3"></div><div class="grid col-span-12 gap-4 lg:col-span-9 lg:grid-cols-12 lg:gap-2"><div class="px-4 lg:col-span-12">`);
      _push(ssrRenderComponent(_component_MazInput, {
        modelValue: form.value.search,
        "onUpdate:modelValue": ($event) => form.value.search = $event,
        placeholder: "recherche",
        "right-icon": "magnifying-glass"
      }, null, _parent));
      _push(`</div><div class="flex flex-row justify-between gap-2 px-4 lg:col-span-3"><div class=""><div class="block lg:hidden">`);
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-filter-fill",
        size: "small",
        onClick: ($event) => showFiltre.value = !showFiltre.value,
        rounded: "",
        outlined: "",
        "aria-label": "Filter"
      }, null, _parent));
      _push(`</div></div><div class="flex gap-2 lg:hidden"><div>`);
      _push(ssrRenderComponent(unref(Dropdown), {
        modelValue: form.value.orderBy,
        "onUpdate:modelValue": ($event) => form.value.orderBy = $event,
        optionValue: "code",
        options: trieElement.value,
        showClear: "",
        optionLabel: "name",
        placeholder: "Trier par",
        size: "small",
        class: "w-full md:w-14rem"
      }, null, _parent));
      _push(`</div></div></div></div></div><div class="grid grid-cols-12 px-4"><div class="relative col-span-3 p-2"><div class="${ssrRenderClass([showFiltre.value ? "fixed inset-0    top-0  bottom-0   z-[250] p-4 transition-all duration-200 w-full" : "hidden w-full mt-0  bg-white p-4  z-20", "overflow-x-hidden overflow-y-auto bg-white rounded-md dark:bg-gray-800 lg:h-auto lg:block"])}"><div class="flex flex-col p-2"><h1 class="mb-2 text-lg font-bold text-gray-800">Sous category</h1><div class="flex flex-wrap gap-2 lg:grid lg:grid-cols-1"><!--[-->`);
      ssrRenderList(__props.subcategories, (subcategory) => {
        _push(`<div><button class="${ssrRenderClass([{ "border-2 border-amber-500 dark:bg-gray-600 bg-amber-100 text-amber-700 translate-x-4": form.value.sub_categorie == subcategory.name, "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200": form.value.sub_categorie != subcategory.name }, "flex gap-2 p-2 transition-all transform rounded-lg shadow-sm bg-gray-50 dark: hover:translate-x-4"])}">`);
        if (subcategory.illustration != null) {
          _push(`<img src="" class="object-fill w-8 p-1 rounded-md" alt="">`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-gray-700 dark:text-gray-50">${ssrInterpolate(subcategory.name)}</span><span class="ml-2 bg-white dark:bg-gray-4 text-gray-800 px-1 py-0.5 text-[10px] rounded-full">${ssrInterpolate(subcategory.service_count)}</span></button></div>`);
      });
      _push(`<!--]--></div><div class="mt-4"><h1 class="mb-4 text-lg font-bold text-gray-800">Prix</h1><div class="w-full space-y-1 dark:text-gray-100"><div class="flex flex-col gap-2 p-2"></div><div aria-hidden="true" class="flex flex-col justify-between gap-4 px-1"><span class="mb-4 text-base dark:text-gray-100"> Prix Service</span><div class="flex justify-between gap-4 p-2 border">`);
      _push(ssrRenderComponent(_component_MazInputNumber, {
        modelValue: form.value.priceMin,
        "onUpdate:modelValue": ($event) => form.value.priceMin = $event,
        "no-buttons": true
      }, null, _parent));
      _push(ssrRenderComponent(_component_MazInputNumber, {
        modelValue: form.value.price,
        "onUpdate:modelValue": ($event) => form.value.price = $event,
        placeholder: "Prix",
        "no-buttons": true,
        min: 5,
        max: 1e4,
        style: { "width": "200px" }
      }, null, _parent));
      _push(`</div></div>`);
      if (form.value.price != null) {
        _push(`<button class="p-2 text-gray-800 bg-gray-200 rounded-md"> Effacer </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative py-3 mt-4 mb-4 border-t border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Niveau Freelannce</span><svg style="${ssrRenderStyle(!showCategoryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(showCategoryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), { when: showCategoryFilter.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dropdown), {
              modelValue: form.value.level,
              "onUpdate:modelValue": ($event) => form.value.level = $event,
              optionValue: "code",
              options: cities.value,
              showClear: "",
              optionLabel: "name",
              placeholder: "Choisir un niveau",
              class: "w-full md:w-14rem"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dropdown), {
                modelValue: form.value.level,
                "onUpdate:modelValue": ($event) => form.value.level = $event,
                optionValue: "code",
                options: cities.value,
                showClear: "",
                optionLabel: "name",
                placeholder: "Choisir un niveau",
                class: "w-full md:w-14rem"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative py-3 mt-4 mb-4 border-t border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Temps de livraison</span><svg style="${ssrRenderStyle(!showDeliveryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(showDeliveryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), { when: showDeliveryFilter.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Dropdown), {
              modelValue: form.value.deliveryTime,
              "onUpdate:modelValue": ($event) => form.value.deliveryTime = $event,
              options: deliveryTime.value,
              showClear: "",
              optionLabel: "name",
              optionValue: "code",
              placeholder: "Choisir un le temps",
              class: "w-full md:w-14rem"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" }, [
                createVNode(unref(Dropdown), {
                  modelValue: form.value.deliveryTime,
                  "onUpdate:modelValue": ($event) => form.value.deliveryTime = $event,
                  options: deliveryTime.value,
                  showClear: "",
                  optionLabel: "name",
                  optionValue: "code",
                  placeholder: "Choisir un le temps",
                  class: "w-full md:w-14rem"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative py-3 mt-4 mb-4 border-t border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Tag de recherche</span><svg style="${ssrRenderStyle(!showTagFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(showTagFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), { when: showTagFilter.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.tags, (tag, index) => {
              _push2(`<span class="${ssrRenderClass([{ "border-2 border-amber-500 bg-amber-100 text-amber-700": form.value.tag === tag, "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200": form.value.tag !== tag }, "inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full cursor-pointer"])}"${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag, index) => {
                return openBlock(), createBlock("span", {
                  class: ["inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full cursor-pointer", { "border-2 border-amber-500 bg-amber-100 text-amber-700": form.value.tag === tag, "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200": form.value.tag !== tag }]
                }, toDisplayString(tag), 3);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex gap-4 lg:hidden"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> appliquer </button><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> Fermer </button></div></div></div><div class="col-span-12 pt-8 lg:col-span-9"><div class="flex-row-reverse justify-between hidden px-4 py-4 lg:flex"><div class="lg:block">`);
      _push(ssrRenderComponent(unref(Dropdown), {
        modelValue: form.value.orderBy,
        "onUpdate:modelValue": ($event) => form.value.orderBy = $event,
        optionValue: "code",
        options: trieElement.value,
        showClear: "",
        optionLabel: "name",
        placeholder: "Trier par",
        size: "small",
        class: "w-full md:w-14rem"
      }, null, _parent));
      _push(`</div><div class="lg:block">`);
      _push(ssrRenderComponent(_component_pagination, {
        class: "mt-6",
        links: props.services.links
      }, null, _parent));
      _push(`</div></div><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(props.services.data, (service) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          service,
          key: service.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (props.services.data.length == 0) {
        _push(`<div class="flex items-center justify-center h-64"><span class="text-lg font-medium text-gray-500"> Aucun élément trouvé. </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="py-4"><div>`);
      _push(ssrRenderComponent(_component_pagination, {
        class: "mt-6",
        links: props.services.links
      }, null, _parent));
      _push(`</div></div></div></div><div class="grid px-4 pt-16 border-t border-gray-300 dark:border-gray-400 lg:grid-cols-12"><div class="hidden lg:col-span-3 lg:block"></div><div class="lg:col-span-9"><div class="items-center mb-4"><h1 class="text-lg font-semibold text-center">Du meme Categories</h1></div><div class="flex flex-wrap gap-4"><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("categoryName", category.slug),
          class: "flex gap-2 p-2 transition-all transform bg-gray-200 rounded-lg shadow-sm dark:bg-gray-700 hover:scale-95 active:bg-skin-fill focus:bg-skin-fill focus:text-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (category.illustration != null) {
                _push2(`<img${ssrRenderAttr("src", "/storage/" + category.illustration)} class="object-fill w-8 p-1 rounded-md" alt=""${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class=""${_scopeId}>${ssrInterpolate(category.name)}</span><div class="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-gray-400 p-2 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900"${_scopeId}>${ssrInterpolate(category.servcies_counts)}</div>`);
            } else {
              return [
                category.illustration != null ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: "/storage/" + category.illustration,
                  class: "object-fill w-8 p-1 rounded-md",
                  alt: ""
                }, null, 8, ["src"])) : createCommentVNode("", true),
                createVNode("span", { class: "" }, toDisplayString(category.name), 1),
                createVNode("div", { class: "absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-gray-400 p-2 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900" }, toDisplayString(category.servcies_counts), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Category/CategoryName.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

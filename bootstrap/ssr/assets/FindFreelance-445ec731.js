import { resolveComponent, useSSRContext, ref, computed, watch, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./WebLayout-1fc7bd97.js";
import { Link, router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$3 } from "./FreelanceCard-108f1a35.js";
import "./TextInput-14bc0530.js";
import "./SecondaryButton-a67db6fc.js";
import { Collapse } from "vue-collapsed";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import { a as useCategoryStore } from "./NotificationComponent-1408ac1b.js";
import "@vueuse/core";
import "./Checkbox-74b17051.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
const _sfc_main$1 = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="px-4 py-3 mb-1 mr-1 text-sm leading-4 text-gray-400 border rounded">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          class: ["px-4 py-3 mb-1 mr-1 text-sm leading-4 border rounded focus:text-indigo-500 hover:bg-white focus:border-indigo-500", { "bg-white": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const FindFreelance_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "FindFreelance",
  __ssrInlineRender: true,
  props: {
    freelances: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const useCategory = useCategoryStore();
    const form = ref({
      search: props.filters.search,
      category: props.filters.category,
      price: props.filters.price,
      level: props.filters.level,
      localisation: props.filters.localisation,
      disponible: props.filters.disponibilite,
      sub_category: props.filters.sub_category,
      experience_annee: props.filters.experience_annee,
      orderBy: props.filters.orderBy
    });
    ref("");
    const showFilters = ref(false);
    const niveauFiltre = ref([
      { name: "Niveau 1", code: "1" },
      { name: "Niveau 2", code: "2" },
      { name: "Niveau 3", code: "3" },
      { name: "Professionnel", code: "4" }
    ]);
    const tauxFiltres = ref([
      { name: "de 10-100 $", id: "10-100" },
      { name: "de 100-200 $", id: "100-200" },
      { name: "plus de 200 $", id: "200-10000" }
    ]);
    const experienceAnnee = ref([
      { name: "0 a 2 ans", id: "0-2 ans" },
      { name: "2 a 5 ans", id: "2-5 ans" },
      { name: "+ 7 ans", id: "+ 7 ans" }
    ]);
    const trieElement = ref([
      {
        name: "Plus Ancien",
        code: "created_at-asc"
      },
      {
        name: "Plus recent",
        code: "created_at-desc"
      },
      {
        name: "Prix descendant",
        code: "taux_journalier-desc"
      },
      {
        name: "Prix ascendant",
        code: "taux_journalier-asc"
      },
      {
        name: "populaire",
        code: "populaire-asc"
      }
    ]);
    const categories = computed(() => useCategory.categoriesGet.categories);
    const showCategoryFilter = ref(false);
    const Specialite = ref(false);
    const experience = ref(false);
    const showPriceFilter = ref(false);
    const disponibilteFilter = ref(false);
    const niveauFilter = ref(false);
    const localisationFilter = ref(false);
    const subcategories = ref([]);
    ref(null);
    ref(null);
    const fetchSubcategories = async () => {
      try {
        if (form.value.category) {
          const response = await axios.get(`/api/subcategories/${form.value.category}`);
          subcategories.value = response.data.subcategories;
        } else {
          subcategories.value = [];
        }
      } catch (error) {
        console.error("An error occurred while fetching subcategories:", error);
      }
    };
    watch(form, () => {
      fetchSubcategories();
    });
    watch(form, throttle(() => {
      fetchSubcategories();
      router.get(
        "/find-freelance",
        pickBy(form.value),
        {
          preserveState: true,
          preserveScroll: true,
          only: ["freelances", "filters"]
        }
      );
    }, 1e3), { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_MazInput = resolveComponent("MazInput");
      const _component_Button = resolveComponent("Button");
      const _component_MazSelect = resolveComponent("MazSelect");
      const _component_Checkbox = resolveComponent("Checkbox");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-16 lg:pt-14" }, _attrs))}><div class="relative flex flex-col pb-8"><div class="relative py-8 lg:py-4 lg:h-20 bg-skin-fill dark:bg-gray-800"><div class="absolute inset-0 flex items-center justify-center"><h1 class="text-xl text-white font-bega-semibold lg:text-4xl">Trouver un freelance</h1></div></div><div class="px-4 my-4"><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/",
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Accueil `);
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
              createTextVNode(" Accueil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 break-before-auto dark:text-gray-400">find-freelance</span></div></li></ol></nav></div><div class="sticky top-0 z-30 grid h-auto grid-cols-12 px-4 py-2 bg-white dark:bg-gray-800 lg:z-0 lg:bg-transparent lg:relative"><div class="hidden lg:col-span-3 lg:flex"></div><div class="relative grid col-span-12 gap-4 py-2 lg:px-6 lg:grid-cols-12 lg:col-span-9 lg:gap-2"><div class="px-4 lg:col-span-12">`);
      _push(ssrRenderComponent(_component_MazInput, {
        modelValue: form.value.search,
        "onUpdate:modelValue": ($event) => form.value.search = $event,
        placeholder: "recherche",
        "right-icon": "magnifying-glass"
      }, null, _parent));
      _push(`</div><div class="sticky top-0 flex flex-row justify-between gap-2 px-4 lg:col-span-3"><div class="block lg:hidden">`);
      _push(ssrRenderComponent(_component_Button, {
        icon: "pi pi-filter-fill",
        onClick: ($event) => showFilters.value = !showFilters.value,
        rounded: "",
        outlined: "",
        "aria-label": "Filter"
      }, null, _parent));
      _push(`</div><div class="flex gap-2"><div></div><div class=""><div class="block lg:hidden"><div class="relative flex">`);
      _push(ssrRenderComponent(_component_MazSelect, {
        modelValue: form.value.orderBy,
        "onUpdate:modelValue": ($event) => form.value.orderBy = $event,
        label: "Trier par",
        "option-value-key": "code",
        "option-label-key": "name",
        "option-input-value-key": "name",
        options: trieElement.value
      }, null, _parent));
      if (form.value.orderBy) {
        _push(`<button class="absolute right-7 p-1 tdark:ext-white z-[100] rounded top-[20%]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div></div><div class="grid grid-cols-12 px-2"><div class="w-full col-span-3 mt-4 leading-normal text-gray-900 lg:px-2"><div class="${ssrRenderClass([showFilters.value ? "fixed inset-0  top-0  bottom-0  dark:bg-gray-900 bg-white z-[600] p-4 transition-all duration-200 w-full" : "hidden w-full h-auto mt-0  md:top-[6rem]  inset-0 z-20", "overflow-x-hidden overflow-y-auto border border-gray-400 rounded-md shadow lg:h-auto lg:block lg:border-transparent lg:shadow-none lg:bg-transparent custom-scrollbar"])}" id="menu-content"><nav class="overflow-y-auto"><div class="w-full p-4 overflow-y-auto bg-white rounded-lg custom-scrollbar dark:bg-gray-800"><h3 class="mb-6 font-bold text-gray-700 dark:text-gray-100">Filtres</h3><div class="mt-4 mb-4 border-t py-2.5 border-b relative border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Catégorie</span><svg style="${ssrRenderStyle(!showCategoryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(showCategoryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: showCategoryFilter.value,
        class: "m-1 leading-normal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazSelect, {
              modelValue: form.value.category,
              "onUpdate:modelValue": ($event) => form.value.category = $event,
              label: "Choisir une categorie",
              "option-value-key": "id",
              "option-label-key": "name",
              "option-input-value-key": "name",
              options: categories.value
            }, null, _parent2, _scopeId));
            if (form.value.category) {
              _push2(`<button class="absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex" }, [
                createVNode(_component_MazSelect, {
                  modelValue: form.value.category,
                  "onUpdate:modelValue": ($event) => form.value.category = $event,
                  label: "Choisir une categorie",
                  "option-value-key": "id",
                  "option-label-key": "name",
                  "option-input-value-key": "name",
                  options: categories.value
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                form.value.category ? (openBlock(), createBlock("button", {
                  key: 0,
                  onClick: ($event) => form.value.category = null,
                  class: "absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-5 h-5"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-3 mb-4 border-b border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 dark:text-gray-100 focus:outline-none"><span class="text-base dark:text-gray-100">Specialite</span><svg style="${ssrRenderStyle(!Specialite.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(Specialite.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: Specialite.value,
        class: "m-2 leading-normal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazSelect, {
              modelValue: form.value.sub_category,
              "onUpdate:modelValue": ($event) => form.value.sub_category = $event,
              label: "Choisir  la specialite",
              "option-value-key": "id",
              "option-label-key": "name",
              "option-input-value-key": "name",
              options: subcategories.value
            }, null, _parent2, _scopeId));
            if (form.value.sub_category) {
              _push2(`<button class="absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex" }, [
                createVNode(_component_MazSelect, {
                  modelValue: form.value.sub_category,
                  "onUpdate:modelValue": ($event) => form.value.sub_category = $event,
                  label: "Choisir  la specialite",
                  "option-value-key": "id",
                  "option-label-key": "name",
                  "option-input-value-key": "name",
                  options: subcategories.value
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                form.value.sub_category ? (openBlock(), createBlock("button", {
                  key: 0,
                  onClick: ($event) => form.value.sub_category = null,
                  class: "absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-5 h-5"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-3 mb-4 border-b border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 dark:text-gray-100 focus:outline-none"><span class="text-base dark:text-gray-100">Annee Experience</span><svg style="${ssrRenderStyle(!experience.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(experience.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: experience.value,
        class: "m-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazSelect, {
              modelValue: form.value.experience_annee,
              "onUpdate:modelValue": ($event) => form.value.experience_annee = $event,
              label: "Année experience",
              "option-value-key": "id",
              "option-label-key": "name",
              "option-input-value-key": "name",
              options: experienceAnnee.value
            }, null, _parent2, _scopeId));
            if (form.value.experience_annee) {
              _push2(`<button class="absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex" }, [
                createVNode(_component_MazSelect, {
                  modelValue: form.value.experience_annee,
                  "onUpdate:modelValue": ($event) => form.value.experience_annee = $event,
                  label: "Année experience",
                  "option-value-key": "id",
                  "option-label-key": "name",
                  "option-input-value-key": "name",
                  options: experienceAnnee.value
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                form.value.experience_annee ? (openBlock(), createBlock("button", {
                  key: 0,
                  onClick: ($event) => form.value.experience_annee = null,
                  class: "absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-5 h-5"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-3 mb-4 border-b border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100">Taux Journalier</span><svg style="${ssrRenderStyle(!showPriceFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(showPriceFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: showPriceFilter.value,
        class: "m-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazSelect, {
              modelValue: form.value.price,
              "onUpdate:modelValue": ($event) => form.value.price = $event,
              label: "Le taux journalier",
              "option-value-key": "id",
              "option-label-key": "name",
              "option-input-value-key": "name",
              options: tauxFiltres.value
            }, null, _parent2, _scopeId));
            if (form.value.price) {
              _push2(`<button class="absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex" }, [
                createVNode(_component_MazSelect, {
                  modelValue: form.value.price,
                  "onUpdate:modelValue": ($event) => form.value.price = $event,
                  label: "Le taux journalier",
                  "option-value-key": "id",
                  "option-label-key": "name",
                  "option-input-value-key": "name",
                  options: tauxFiltres.value
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                form.value.price ? (openBlock(), createBlock("button", {
                  key: 0,
                  onClick: ($event) => form.value.price = null,
                  class: "absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-5 h-5"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative py-3 mt-4 mb-4 border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Niveau Freelannce</span><svg style="${ssrRenderStyle(!niveauFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(niveauFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: niveauFilter.value,
        class: "m-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazSelect, {
              modelValue: form.value.level,
              "onUpdate:modelValue": ($event) => form.value.level = $event,
              label: "Niveau sur la plateform",
              "option-value-key": "code",
              "option-label-key": "name",
              "option-input-value-key": "name",
              options: niveauFiltre.value
            }, null, _parent2, _scopeId));
            if (form.value.level) {
              _push2(`<button class="absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex" }, [
                createVNode(_component_MazSelect, {
                  modelValue: form.value.level,
                  "onUpdate:modelValue": ($event) => form.value.level = $event,
                  label: "Niveau sur la plateform",
                  "option-value-key": "code",
                  "option-label-key": "name",
                  "option-input-value-key": "name",
                  options: niveauFiltre.value
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                form.value.level ? (openBlock(), createBlock("button", {
                  key: 0,
                  onClick: ($event) => form.value.level = null,
                  class: "absolute right-16 p-1 dark:text-white z-[100] rounded top-[20%]"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-5 h-5"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative py-3 mt-4 mb-4 border-t border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100">Disponibilte</span><svg style="${ssrRenderStyle(!disponibilteFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(disponibilteFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: disponibilteFilter.value,
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}><div class="flex card justify-content-center"${_scopeId}><div class="flex flex-wrap gap-3"${_scopeId}><div class="flex align-items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Checkbox, {
              modelValue: form.value.disponible,
              "onUpdate:modelValue": ($event) => form.value.disponible = $event,
              value: "En ligne"
            }, null, _parent2, _scopeId));
            _push2(`<label for="ingredient1" class="ml-2 dark:text-white"${_scopeId}>En ligne </label></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" }, [
                createVNode("div", { class: "flex card justify-content-center" }, [
                  createVNode("div", { class: "flex flex-wrap gap-3" }, [
                    createVNode("div", { class: "flex align-items-center" }, [
                      createVNode(_component_Checkbox, {
                        modelValue: form.value.disponible,
                        "onUpdate:modelValue": ($event) => form.value.disponible = $event,
                        value: "En ligne"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", {
                        for: "ingredient1",
                        class: "ml-2 dark:text-white"
                      }, "En ligne ")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative hidden py-3 mt-4 mb-4 border-t border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Localisation</span><svg style="${ssrRenderStyle(!localisationFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(localisationFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), { when: localisationFilter.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav><div class="flex w-full gap-4 px-4 md:hidden">`);
      _push(ssrRenderComponent(_component_Button, {
        label: "appliquer",
        severity: "success",
        onClick: ($event) => showFilters.value = !showFilters.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Fermer",
        onClick: ($event) => showFilters.value = !showFilters.value
      }, null, _parent));
      _push(`</div></div></div><div class="col-span-12 pt-2 lg:col-span-9"><div class="px-10 items-end justify-end flex py-4"><div class="lg:block hidden"><div class="relative flex">`);
      _push(ssrRenderComponent(_component_MazSelect, {
        modelValue: form.value.orderBy,
        "onUpdate:modelValue": ($event) => form.value.orderBy = $event,
        label: "Trier par",
        "option-value-key": "code",
        "option-label-key": "name",
        "option-input-value-key": "name",
        options: trieElement.value
      }, null, _parent));
      if (form.value.orderBy) {
        _push(`<button class="absolute right-7 p-1 tdark:ext-white z-[100] rounded top-[20%]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="relative grid gap-4 p-2 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(props.freelances.data, (freelance) => {
        _push(`<div class="">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          freelance,
          key: freelance.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (props.freelances.data.length === 0) {
        _push(`<h1 class="text-lg text-gray-800 dark:text-gray-100 text-center md:text-2xl">Pas de resultat</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(Pagination, {
        class: "mt-6",
        links: props.freelances.links
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Freelance/FindFreelance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

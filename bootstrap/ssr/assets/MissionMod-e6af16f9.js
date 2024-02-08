import { computed, ref, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-04df2d32.js";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import { useForm, Link, router } from "@inertiajs/vue3";
import { a as useCategoryStore } from "./NotificationComponent-1408ac1b.js";
import Dialog from "primevue/dialog/dialog.esm.js";
import MazPicker from "maz-ui/components/MazPicker";
import "./OtherPanelUser-4d65415a.js";
import "vue3-popper";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "pinia";
import "axios";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "MissionMod",
  __ssrInlineRender: true,
  props: {
    mission: Object
  },
  setup(__props) {
    const toast = useToast();
    const props = __props;
    const useCategory = useCategoryStore();
    const category = computed(() => useCategory.categoriesGet.categories);
    const visible = ref(false);
    const mission = computed(() => props.mission.data);
    const formatDate = (dateString) => {
      const [day, month, year] = dateString.split("-");
      const date = /* @__PURE__ */ new Date(`${year}-${month}-${day}`);
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      return formattedDate;
    };
    const form = useForm({
      id: props.mission.data.id,
      title: props.mission.data.title,
      exigence: props.mission.data.exigences,
      description: props.mission.data.description,
      dateD: formatDate(props.mission.data.begin_mission),
      dateF: formatDate(props.mission.data.end_mission),
      budget: props.mission.data.budget,
      category_id: props.mission.data.category.id,
      mission_id: props.mission.data.id,
      image: null,
      masquer: props.mission.data.masquer
    });
    const formattedPrice = ref();
    const effacer = () => {
      form.post(route("deleteMission"), {
        onError: (error) => {
          toast.add({ severity: "info", summary: "Message", detail: error.message, group: "br", life: 3e3 });
          visible.value = false;
        }
      });
    };
    const remove = (index) => {
      router.post(route("removeFileMission"), {
        file_index: index,
        mission_id: props.mission.data.id
      }, {
        preserveScroll: true,
        onSuccess: () => {
          form.image = null;
          toast.add({ severity: "info", summary: "Message", detail: "Photo supprimer", group: "br", life: 1e3 });
        }
      });
    };
    const onAdvancedUpload = () => {
    };
    ref(1);
    ref("");
    const onSelect = (event) => {
      form.image = event.files;
    };
    const isImage = (fileName) => {
      let imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
      let extension = fileName.split(".").pop().toLowerCase();
      return imageExtensions.includes(extension);
    };
    const currentDate = /* @__PURE__ */ new Date();
    const minMaxDates = ref({
      min: currentDate.toISOString().split("T")[0],
      max: currentDate.toISOString().split("T")[0]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      const _component_MazInput = resolveComponent("MazInput");
      const _component_MazSelect = resolveComponent("MazSelect");
      const _component_MazInputPrice = resolveComponent("MazInputPrice");
      const _component_Button = resolveComponent("Button");
      const _component_FileUpload = resolveComponent("FileUpload");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user.dashboard"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Dashboard `);
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
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user.missions"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Edit</span>`);
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Edit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Mission Modification</h1></div><div><form class="p-4 mt-2 border border-gray-100 rounded-md min-h-72"><div class="flex flex-col mt-4"><div class="w-full">`);
      _push(ssrRenderComponent(_component_MazInput, {
        id: "name",
        required: "",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event,
        placeholder: "Titre"
      }, null, _parent));
      _push(`</div><div class="w-full mt-4"><textarea id="message" placeholder="Decrivez votre mission" rows="4" class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500">${ssrInterpolate(unref(form).description)}</textarea></div><div class="mt-4 W-full">`);
      _push(ssrRenderComponent(_component_MazSelect, {
        modelValue: unref(form).category_id,
        "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
        options: category.value,
        "option-value-key": "id",
        "option-label-key": "name",
        "option-input-value-key": "name",
        placeholder: "Categories"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col w-full mt-4"><div class="flex gap-8"><div class="flex w-full">`);
      _push(ssrRenderComponent(unref(MazPicker), {
        locale: "fr-FR",
        "min-date": minMaxDates.value.min,
        modelValue: unref(form).dateD,
        "onUpdate:modelValue": ($event) => unref(form).dateD = $event,
        label: "Date debut"
      }, null, _parent));
      _push(`</div><div class="flex w-full">`);
      _push(ssrRenderComponent(unref(MazPicker), {
        locale: "fr-FR",
        "min-date": minMaxDates.value.min,
        modelValue: unref(form).dateF,
        "onUpdate:modelValue": ($event) => unref(form).dateF = $event,
        label: "Date debut"
      }, null, _parent));
      _push(`</div></div><div class="mt-4 mb-4"><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exigences</label><textarea id="message" placeholder="Exigences pour la mission" rows="4" class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500">${ssrInterpolate(unref(form).exigence)}</textarea></div><div>`);
      _push(ssrRenderComponent(_component_MazInputPrice, {
        modelValue: unref(form).budget,
        "onUpdate:modelValue": ($event) => unref(form).budget = $event,
        label: "Budget de la mission",
        currency: "USD",
        locale: "en-US",
        onFormatted: ($event) => formattedPrice.value = $event
      }, null, _parent));
      _push(`</div></div><div class="grid mt-6 lg:grid-cols-2"><div class="flex flex-col items-start justify-start py-4"><div class="flex flex-wrap mt-4 space-x-2"><!--[-->`);
      ssrRenderList(mission.value.files, (file, index) => {
        _push(`<div>`);
        if (!isImage(file)) {
          _push(`<div><div class="relative group"><div class="flex flex-wrap items-center"><p>${ssrInterpolate(file.name)}</p><i class="fas fa-file-alt"></i></div><div class="absolute top-0 right-0 mt-2 mr-2">`);
          _push(ssrRenderComponent(_component_Button, {
            onClick: ($event) => remove(index),
            size: "small",
            outlined: "",
            icon: "pi pi-trash"
          }, null, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<div class="flex-flex-wrap"><div class="relative group"><img${ssrRenderAttr("src", "/storage/" + file)} alt="Product Name" class="w-16 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80"><div class="absolute top-0 right-0 mt-2 mr-2">`);
          _push(ssrRenderComponent(_component_Button, {
            onClick: ($event) => remove(index),
            size: "small",
            outlined: "",
            icon: "pi pi-trash"
          }, null, _parent));
          _push(`</div></div></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="lg:col-span-1 card">`);
      _push(ssrRenderComponent(_component_Toast, null, null, _parent));
      _push(ssrRenderComponent(_component_FileUpload, {
        auto: true,
        onSelect,
        onUpload: ($event) => onAdvancedUpload(),
        multiple: true,
        accept: "image/*",
        maxFileSize: 1e6
      }, {
        header: withCtx(({ chooseCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => chooseCallback(),
              icon: "pi pi-images",
              rounded: "",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" }, [
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => chooseCallback(),
                    icon: "pi pi-images",
                    rounded: "",
                    outlined: ""
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Glissez et déposez les fichiers ici pour les uploader.</p>`);
          } else {
            return [
              createVNode("p", null, "Glissez et déposez les fichiers ici pour les uploader.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex px-6 py-8 lg:justify-end lg:items-end"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).masquer) ? ssrLooseContain(unref(form).masquer, null) : unref(form).masquer) ? " checked" : ""} class="sr-only peer"><div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div><span class="text-sm font-medium text-gray-900 ms-3 dark:text-gray-300">Afficher</span></label></div></div><div class="flex justify-center gap-6 mt-4"><div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        label: "Modifier",
        outlined: ""
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        label: "Supprimer",
        severity: "danger",
        onClick: ($event) => visible.value = !visible.value,
        outlined: ""
      }, null, _parent));
      _push(`</div></div></form></div>`);
      _push(ssrRenderComponent(unref(Dialog), {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        modal: "",
        header: "Confirmation",
        style: { width: "40rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> Êtes-vous sûr de vouloir supprimer cette mission ? Veuillez noter que si vous avez déjà accepté une proposition pour cette mission, il sera impossible de la supprimer. Si vous êtes sûr, cliquez sur ‘Confirmer’. Sinon, cliquez sur ‘Annuler’ </p><div class="flex justify-center gap-6 mt-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => effacer(),
              type: "button",
              label: "Confirmer",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              label: "Annuler",
              severity: "danger",
              onClick: ($event) => visible.value = !visible.value,
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("p", null, " Êtes-vous sûr de vouloir supprimer cette mission ? Veuillez noter que si vous avez déjà accepté une proposition pour cette mission, il sera impossible de la supprimer. Si vous êtes sûr, cliquez sur ‘Confirmer’. Sinon, cliquez sur ‘Annuler’ "),
              createVNode("div", { class: "flex justify-center gap-6 mt-4" }, [
                createVNode("div", null, [
                  createVNode(_component_Button, {
                    onClick: ($event) => effacer(),
                    type: "button",
                    label: "Confirmer",
                    outlined: ""
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", null, [
                  createVNode(_component_Button, {
                    type: "button",
                    label: "Annuler",
                    severity: "danger",
                    onClick: ($event) => visible.value = !visible.value,
                    outlined: ""
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Mission/MissionMod.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

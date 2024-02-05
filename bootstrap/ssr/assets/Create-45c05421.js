import { inject, ref, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-9b20c3c4.js";
import MazBtn from "maz-ui/components/MazBtn";
import { a as _sfc_main$2 } from "./TextInput-14bc0530.js";
import MazStepper from "maz-ui/components/MazStepper";
import MazPicker from "maz-ui/components/MazPicker";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "./NotificationComponent-c4834522.js";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
import "vue-collapsed";
import "./Checkbox-74b17051.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
const Create_vue_vue_type_style_index_0_scoped_587c6d53_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    categories: Array
  },
  setup(__props) {
    const swal = inject("$swal");
    const props = __props;
    ref(props.categories);
    ref(null);
    const form = useForm({
      title: "",
      exigence: "",
      description: "",
      dateD: "",
      dateF: "",
      budget: "",
      category_id: "",
      image: null
    });
    const submit = () => {
      if (!form.budget || !form.dateD || !form.dateF || !form.title || !form.description || !form.category_id) {
        let errorMessage = "Veuillez remplir tous les champs requis: ";
        if (!form.budget) {
          errorMessage += "Budget, ";
        }
        if (!form.dateD) {
          errorMessage += "Date de début, ";
        }
        if (!form.dateF) {
          errorMessage += "Date de fin, ";
        }
        if (!form.title) {
          errorMessage += "Titre, ";
        }
        if (!form.description) {
          errorMessage += "Description, ";
        }
        if (!form.category_id) {
          errorMessage += "Catégorie, ";
        }
        swal(errorMessage.slice(0, -2));
        return false;
      }
      form.post(route("storeMission"), {
        onSuccess: () => {
          form.reset(), swal("Mission créée avec succès");
        },
        onError: (error) => console.log(error)
      });
    };
    const formattedPrice = ref();
    const toast = useToast();
    const onAdvancedUpload = () => {
      toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3e3 });
    };
    ref(1);
    ref("");
    const onSelect = (event) => {
      form.image = event.files;
    };
    const currentDate = /* @__PURE__ */ new Date();
    const minMaxDates = ref({
      min: currentDate.toISOString().split("T")[0],
      max: currentDate.toISOString().split("T")[0]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MazInput = resolveComponent("MazInput");
      const _component_Toast = resolveComponent("Toast");
      const _component_FileUpload = resolveComponent("FileUpload");
      const _component_Button = resolveComponent("Button");
      const _component_MazSelect = resolveComponent("MazSelect");
      const _component_MazInputPrice = resolveComponent("MazInputPrice");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-16 border-t border-gray-100" }, _attrs))} data-v-587c6d53><div class="mx-4 mt-2 mb-4" data-v-587c6d53><nav class="flex" aria-label="Breadcrumb" data-v-587c6d53><ol class="inline-flex items-center space-x-1 md:space-x-3" data-v-587c6d53><li class="inline-flex items-center" data-v-587c6d53>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-v-587c6d53${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" data-v-587c6d53${_scopeId}></path></svg> Accueil `);
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
      _push(`</li><li aria-current="page" data-v-587c6d53><div class="flex items-center" data-v-587c6d53><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-v-587c6d53><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-v-587c6d53></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" data-v-587c6d53>Mission-creation</span></div></li></ol></nav></div><div class="grid px-2 py-3 lg:grid-cols-2" data-v-587c6d53><div class="hidden col-span-1 p-4 lg:block" data-v-587c6d53><img src="/images/hero/team.svg" class="object-cover w-full h-auto p-2 bg-white rounded-md" alt="" data-v-587c6d53></div><div class="flex flex-col w-full mx-auto h-min-72 lg:col-span-1 lg:mx-0" data-v-587c6d53><div data-v-587c6d53>`);
      _push(ssrRenderComponent(unref(MazStepper), { "isabled-next-steps": "true" }, {
        "title-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Détails de la mission `);
          } else {
            return [
              createTextVNode(" Détails de la mission ")
            ];
          }
        }),
        "subtitle-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Décrivez la mission en détail `);
          } else {
            return [
              createTextVNode(" Décrivez la mission en détail ")
            ];
          }
        }),
        "content-1": withCtx(({ nextStep }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col mt-4" data-v-587c6d53${_scopeId}><div class="w-full" data-v-587c6d53${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInput, {
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event,
              placeholder: "Titre",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.title
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full mt-4 mb-4" data-v-587c6d53${_scopeId}><textarea id="message" placeholder="Decrivez votre mission" rows="4" class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500" data-v-587c6d53${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.description
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="card" data-v-587c6d53${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Toast, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FileUpload, {
              auto: true,
              onSelect,
              onUpload: ($event) => onAdvancedUpload(),
              multiple: true,
              accept: "image/*",
              maxFileSize: 1e6
            }, {
              header: withCtx(({ chooseCallback }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" data-v-587c6d53${_scopeId2}><div class="flex gap-2" data-v-587c6d53${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => chooseCallback(),
                    icon: "pi pi-images",
                    rounded: "",
                    outlined: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
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
              empty: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-587c6d53${_scopeId2}>Glissez et déposez les fichiers ici pour les uploader.</p>`);
                } else {
                  return [
                    createVNode("p", null, "Glissez et déposez les fichiers ici pour les uploader.")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 mb-4 W-full" data-v-587c6d53${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazSelect, {
              modelValue: unref(form).category_id,
              "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
              options: props.categories,
              "option-value-key": "id",
              "option-label-key": "name",
              "option-input-value-key": "name",
              placeholder: "Categories"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.category_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-587c6d53${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MazBtn), { type: "submit" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Suivant `);
                } else {
                  return [
                    createTextVNode(" Suivant ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(nextStep, ["prevent"]),
                class: "flex flex-col mt-4"
              }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(_component_MazInput, {
                    modelValue: unref(form).title,
                    "onUpdate:modelValue": ($event) => unref(form).title = $event,
                    placeholder: "Titre",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.title
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "w-full mt-4 mb-4" }, [
                  withDirectives(createVNode("textarea", {
                    id: "message",
                    placeholder: "Decrivez votre mission",
                    rows: "4",
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    class: "block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"
                  }, "\n\n                                            ", 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).description]
                  ]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.description
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "card" }, [
                  createVNode(_component_Toast),
                  createVNode(_component_FileUpload, {
                    auto: true,
                    onSelect,
                    onUpload: ($event) => onAdvancedUpload(),
                    multiple: true,
                    accept: "image/*",
                    maxFileSize: 1e6
                  }, {
                    header: withCtx(({ chooseCallback }) => [
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
                    ]),
                    empty: withCtx(() => [
                      createVNode("p", null, "Glissez et déposez les fichiers ici pour les uploader.")
                    ]),
                    _: 1
                  }, 8, ["onUpload"])
                ]),
                createVNode("div", { class: "mt-4 mb-4 W-full" }, [
                  createVNode(_component_MazSelect, {
                    modelValue: unref(form).category_id,
                    "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                    options: props.categories,
                    "option-value-key": "id",
                    "option-label-key": "name",
                    "option-input-value-key": "name",
                    placeholder: "Categories"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.category_id
                  }, null, 8, ["message"])
                ]),
                createVNode("div", null, [
                  createVNode(unref(MazBtn), { type: "submit" }, {
                    default: withCtx(() => [
                      createTextVNode(" Suivant ")
                    ]),
                    _: 1
                  })
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        "title-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Échéance &amp; Budget `);
          } else {
            return [
              createTextVNode(" Échéance & Budget ")
            ];
          }
        }),
        "subtitle-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Date d&#39;échéance &amp; Budge `);
          } else {
            return [
              createTextVNode(" Date d'échéance & Budge ")
            ];
          }
        }),
        "title-info-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        "content-2": withCtx(({ nextStep, previousStep }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full mt-4" data-v-587c6d53${_scopeId}><div class="flex flex-col gap-4 md:flex-row lg:gap-8" data-v-587c6d53${_scopeId}><div class="flex w-full" data-v-587c6d53${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MazPicker), {
              locale: "fr-FR",
              "min-date": minMaxDates.value.min,
              modelValue: unref(form).dateD,
              "onUpdate:modelValue": ($event) => unref(form).dateD = $event,
              label: "Date debut"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.dateD
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex w-full" data-v-587c6d53${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MazPicker), {
              locale: "fr-FR",
              "min-date": minMaxDates.value.min,
              modelValue: unref(form).dateF,
              "onUpdate:modelValue": ($event) => unref(form).dateF = $event,
              label: "Date Fin"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.dateF
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-4 mb-4" data-v-587c6d53${_scopeId}><textarea id="message" placeholder="Exigences pour la mission" rows="4" class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500" data-v-587c6d53${_scopeId}>${ssrInterpolate(unref(form).exigence)}</textarea></div><div data-v-587c6d53${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInputPrice, {
              modelValue: unref(form).budget,
              "onUpdate:modelValue": ($event) => unref(form).budget = $event,
              label: "Budget de la mission",
              currency: "USD",
              locale: "en-US",
              onFormatted: ($event) => formattedPrice.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.budget
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-end mt-4" data-v-587c6d53${_scopeId}><button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800" data-v-587c6d53${_scopeId}> Soumettre </button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full mt-4" }, [
                createVNode("div", { class: "flex flex-col gap-4 md:flex-row lg:gap-8" }, [
                  createVNode("div", { class: "flex w-full" }, [
                    createVNode(unref(MazPicker), {
                      locale: "fr-FR",
                      "min-date": minMaxDates.value.min,
                      modelValue: unref(form).dateD,
                      "onUpdate:modelValue": ($event) => unref(form).dateD = $event,
                      label: "Date debut"
                    }, null, 8, ["min-date", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$2, {
                      class: "mt-2",
                      message: unref(form).errors.dateD
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex w-full" }, [
                    createVNode(unref(MazPicker), {
                      locale: "fr-FR",
                      "min-date": minMaxDates.value.min,
                      modelValue: unref(form).dateF,
                      "onUpdate:modelValue": ($event) => unref(form).dateF = $event,
                      label: "Date Fin"
                    }, null, 8, ["min-date", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$2, {
                      class: "mt-2",
                      message: unref(form).errors.dateF
                    }, null, 8, ["message"])
                  ])
                ]),
                createVNode("div", { class: "mt-4 mb-4" }, [
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => unref(form).exigence = $event,
                    id: "message",
                    placeholder: "Exigences pour la mission",
                    rows: "4",
                    class: "block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"
                  }, "\n\n                                            ", 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).exigence]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_component_MazInputPrice, {
                    modelValue: unref(form).budget,
                    "onUpdate:modelValue": ($event) => unref(form).budget = $event,
                    label: "Budget de la mission",
                    currency: "USD",
                    locale: "en-US",
                    onFormatted: ($event) => formattedPrice.value = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onFormatted"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2",
                    message: unref(form).errors.budget
                  }, null, 8, ["message"])
                ])
              ]),
              createVNode("div", { class: "flex items-end mt-4" }, [
                createVNode("button", {
                  type: "button",
                  onClick: ($event) => submit(),
                  class: "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                }, " Soumettre ", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Mission/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-587c6d53"]]);
export {
  Create as default
};

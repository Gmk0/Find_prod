import { computed, ref, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-04df2d32.js";
import { useForm, Link } from "@inertiajs/vue3";
import "./NotificationComponent-1408ac1b.js";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-4d65415a.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "MissionGestion",
  __ssrInlineRender: true,
  props: {
    missionResponse: Object
  },
  setup(__props) {
    const props = __props;
    const missionResponse = computed(() => props.missionResponse.data);
    ref(false);
    const mission = ref(false);
    useForm({
      responce_id: null
    });
    const open2 = ref(false);
    const open = ref(false);
    const contact = useForm({
      freelance_user_id: props.missionResponse.data.freelance_user.id,
      freelance_id: props.missionResponse.data.freelance.id,
      message: "",
      mission_id: props.missionResponse.data.mission_id
    });
    const contacter = () => {
      contact.post(route("user.missions.contacterUser"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProgressBar = resolveComponent("ProgressBar");
      const _component_Photo = resolveComponent("Photo");
      const _component_Span = resolveComponent("Span");
      const _component_Button = resolveComponent("Button");
      const _component_Collapse = resolveComponent("Collapse");
      const _component_Dialog = resolveComponent("Dialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
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
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Mission</span>`);
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Candidature</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">Candidature</h1></div><div><section class="px-2 px-4 py-6 dark:text-gray-400"><div class="max-w-6xl mx-auto"><div class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"><div class="grid grid-cols-1 px-6 py-4 lg:grid-cols-2"><p class="mb-4 text-lg text-gray-800 md:mb-2 dark:text-gray-300">Mission : <span>${ssrInterpolate(missionResponse.value.mission.title)}</span></p><p class="mb-4 text-base text-gray-600 dark:text-gray-400 md:mb-2">Date de creation : <span>${ssrInterpolate(missionResponse.value.mission.created_at)}</span></p><p class="mb-4 text-base font-medium text-gray-600 md:mb-2 dark:text-gray-300">Debut : Du ${ssrInterpolate(missionResponse.value.mission.begin_mission)}</p><p class="mb-4 text-base font-medium text-gray-600 md:mb-2 dark:text-gray-300">Fin : ${ssrInterpolate(missionResponse.value.mission.end_mission)}</p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Budjet : <span class="text-lg font-bold text-amber-600">${ssrInterpolate(missionResponse.value.budget)}$</span></p><p class="hidden mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Proposition : <span class="font-bold">${ssrInterpolate(missionResponse.value.budget)}$</span></p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement : `);
      if (missionResponse.value.mission.is_paid != null) {
        _push(`<span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Payer</span>`);
      } else {
        _push(`<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">en Attente</span>`);
      }
      _push(`</p>`);
      if (missionResponse.value.mission.statuS === "completed" && missionResponse.value.mission.missionResponse.mission.statu != null) {
        _push(`<p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement : <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Paiement veser</span></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Avancement : `);
      if (missionResponse.value.feedbackmission.etat === "En attente de traitement") {
        _push(`<span class="text-red-300 px-1.5 py-0.5 rounded-lg">En attente de traitement</span>`);
      } else if (missionResponse.value.feedbackmission.etat === "Livré") {
        _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">Livré</span>`);
      } else if (missionResponse.value.feedbackmission.etat === "En cours de préparation") {
        _push(`<span class="text-blue-400 px-1.5 py-0.5 rounded-lg">En cours de préparation</span>`);
      } else {
        _push(`<span class="bg-red-500 px-1.5 py-0.5 rounded-lg">En transit</span>`);
      }
      _push(`</p></div><div class="px-6 py-4 bprojet-t bprojet-gray-200"><p class="mb-2 text-lg text-gray-800">Avancement</p><div class="flex items-center"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_ProgressBar, {
        value: missionResponse.value.mission.progress,
        class: "dark:!bg-gray-700"
      }, null, _parent));
      _push(`</div><p class="ml-2 text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(missionResponse.value.mission.progress)}%</p></div></div><div class="px-6 py-4 bprojet-t bprojet-gray-300"><h1 class="flex items-start gap-2 text-lg font-bold cursor-pointer lg:text-xl"> Freelance lié </h1><div class="flex items-center mt-4">`);
      _push(ssrRenderComponent(_component_Photo, {
        user: missionResponse.value.freelance_user,
        taille: "20"
      }, null, _parent));
      _push(`<div class="ml-4"><p class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(missionResponse.value.freelance_user.name)}</p><p class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(missionResponse.value.freelance_user.email)}</p></div></div></div><div class="mx-4">`);
      if (missionResponse.value.rapports != null) {
        _push(`<div class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left text-gray-600 transition-all ease-in border-b border-solid cursor-pointer border-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Rapport Envoyer</span><i class="${ssrRenderClass([open.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6><div x-show="open" x-collapse class="overflow-hidden transition-all duration-300 ease-in-out">`);
        if (missionResponse.value.rapports != null) {
          _push(`<div class="p-4 text-sm leading-normal"><!--[-->`);
          ssrRenderList(missionResponse.value.rapports, (rapport) => {
            _push(`<div><div class="text-base text-gray-600 dark:text-gray-300">${ssrInterpolate(rapport.description)}</div>`);
            _push(ssrRenderComponent(_component_Span, { class: "mt-4 text-sm text-gray-500" }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="px-6 py-4 bprojet-t bprojet-gray-200"><p class="mb-2 text-lg text-gray-800">Options supplémentaires</p><div class="flex flex-col gap-2"><div class="flex gap-2 lg:flex-row"><div class="">`);
      _push(ssrRenderComponent(_component_Button, {
        outlined: "",
        onClick: ($event) => contacter(),
        label: "Contacter"
      }, null, _parent));
      _push(`</div>`);
      if (missionResponse.value.mission.is_paid == null) {
        _push(`<div class="lg:w-full">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("user.missions.missionPaiement", [missionResponse.value.mission.mission_numero, missionResponse.value.response_numero])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                outlined: "",
                label: "Proceder au paiement"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  outlined: "",
                  label: "Proceder au paiement"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hidden lg:w-1/2">`);
      _push(ssrRenderComponent(_component_Button, {
        outlined: "",
        label: "Evaluer"
      }, null, _parent));
      _push(`</div><div class="lg:w-1/2"></div><div class="lg:w-full"></div></div></div></div><div><div class="px-6 py-4 border-t border-gray-200"><h1 class="flex items-start gap-2 text-xl font-bold cursor-pointer"> Transaction de paiement liée <button><svg class="${ssrRenderClass([{ "rotate-180": open2.value }, "w-6 h-6 fill-current"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"></path></svg></button></h1>`);
      _push(ssrRenderComponent(_component_Collapse, { when: open2.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (missionResponse.value.transaction != null) {
              _push2(`<div class="pt-4"${_scopeId}><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>Numéro de transaction : <span class="text-lg font-bold"${_scopeId}>#${ssrInterpolate(missionResponse.value.transaction.transaction_numero)}</span></p><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>Méthode de paiement : <span${_scopeId}>••• ${ssrInterpolate(missionResponse.value.transaction.payment_method["last4"])}</span></p><div class="flex gap-4"${_scopeId}><div class=""${_scopeId}><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>Montant payé : <span class="p-2 text-xl font-extrabold text-green-400 rounded"${_scopeId}>${ssrInterpolate(missionResponse.value.transaction.amount)} $ </span></p></div></div><div class="p-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("user.transactions.one", [missionResponse.value.transaction.transaction_numero])
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}><i class="pi pi-eye"${_scopeId2}></i></span>`);
                  } else {
                    return [
                      createVNode("span", null, [
                        createVNode("i", { class: "pi pi-eye" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div${_scopeId}><p class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}>Numéro de transaction : Pas de transaction en cours</p></div>`);
            }
          } else {
            return [
              missionResponse.value.transaction != null ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pt-4"
              }, [
                createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, [
                  createTextVNode("Numéro de transaction : "),
                  createVNode("span", { class: "text-lg font-bold" }, "#" + toDisplayString(missionResponse.value.transaction.transaction_numero), 1)
                ]),
                createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, [
                  createTextVNode("Méthode de paiement : "),
                  createVNode("span", null, "••• " + toDisplayString(missionResponse.value.transaction.payment_method["last4"]), 1)
                ]),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, [
                      createTextVNode("Montant payé : "),
                      createVNode("span", { class: "p-2 text-xl font-extrabold text-green-400 rounded" }, toDisplayString(missionResponse.value.transaction.amount) + " $ ", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "p-2" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("user.transactions.one", [missionResponse.value.transaction.transaction_numero])
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, [
                        createVNode("i", { class: "pi pi-eye" })
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-300" }, "Numéro de transaction : Pas de transaction en cours")
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: mission.value,
        "onUpdate:visible": ($event) => mission.value = $event,
        position: "'bottom'",
        modal: "",
        header: "Confirmer Comannde Finis",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full mt-4"${_scopeId}><div${_scopeId}><div${_scopeId}><div class="flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100"${_scopeId}> Confirmez la réception de votre commande</div><div class="px-4 mt-4 text-lg text-gray-700 dark:text-gray-50"${_scopeId}> En confirmant la réception, vous attestez que la commande a été réalisée à votre satisfaction. Cela permettra au freelance de recevoir son paiement. Êtes-vous prêt à procéder? </div></div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: _ctx.debloquerPaiement,
              severity: "success",
              label: "Oui, je confirme"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full mt-4" }, [
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100" }, " Confirmez la réception de votre commande"),
                    createVNode("div", { class: "px-4 mt-4 text-lg text-gray-700 dark:text-gray-50" }, " En confirmant la réception, vous attestez que la commande a été réalisée à votre satisfaction. Cela permettra au freelance de recevoir son paiement. Êtes-vous prêt à procéder? ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  createVNode(_component_Button, {
                    onClick: _ctx.debloquerPaiement,
                    severity: "success",
                    label: "Oui, je confirme"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Mission/MissionGestion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

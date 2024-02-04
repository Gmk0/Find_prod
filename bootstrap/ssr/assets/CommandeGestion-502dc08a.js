import { ref, computed, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, Fragment, renderList, toDisplayString, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-b6ab4ba7.js";
import ProgressBar from "primevue/progressbar/progressbar.esm.js";
import { useForm, Link } from "@inertiajs/vue3";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import "./NotificationComponent-a50edf8a.js";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-24c4f26b.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "CommandeGestion",
  __ssrInlineRender: true,
  props: {
    commande: Object
  },
  setup(__props) {
    const toast = useToast();
    const props = __props;
    const open2 = ref(false);
    const order = computed(() => props.commande.data);
    const open = ref(false);
    const debloquer = ref(false);
    const form = useForm({
      description: props.commande.data.feedback.commentaires,
      rating: props.commande.data.feedback.satisfactions,
      feedback_id: props.commande.data.feedback.id
    });
    const paiement = useForm({
      order_id: props.commande.data.id
    });
    const contact = useForm({
      freelance_user_id: props.commande.data.freelance_user.id,
      freelance_id: props.commande.data.freelance.id,
      message: "",
      order: props.commande.data.id
    });
    const contacterUser = () => {
      contact.post(route("user.paiements.contacterUser"));
    };
    const visible = ref(false);
    const envoyerFeddback = () => {
      form.post(route("user.commandes.sendFeeback"), {
        preserveScroll: true,
        onFinish: () => {
          visible.value = false;
        },
        onError: (error) => {
          toast.add({ severity: "danger", summary: "Message", detail: error.message, group: "br", life: 3e3 });
        }
      });
    };
    const debloquerPaiement = () => {
      paiement.post(route("user.paiements.debloquerPaiement"), {
        onSuccess: () => {
          debloquer.value = false;
          toast.add({ severity: "info", summary: "Message", detail: "Paiement debloquer avec success", group: "br", life: 3e3 });
        },
        onError: (error) => {
          toast.add({ severity: "danger", summary: "Message", detail: error.message, group: "br", life: 3e3 });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Toast = resolveComponent("Toast");
      const _component_Photo = resolveComponent("Photo");
      const _component_Collapse = resolveComponent("Collapse");
      const _component_Button = resolveComponent("Button");
      const _component_Dialog = resolveComponent("Dialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 lg:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user.dashboard"),
        Fclass: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
        href: _ctx.route("user.commandes"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400"${_scopeId}>Commande</span>`);
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400" }, "Commande")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">${ssrInterpolate(order.value.order_numero)}</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Commandes</h1></div>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class=""><div class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"><div class="grid grid-cols-1 px-6 py-4 lg:grid-cols-2"><p class="mb-4 font-sans text-lg text-gray-800 dark:text-gray-300">Commande <span class="font-bold font-inter">${ssrInterpolate(order.value.order_numero)}</span></p><p class="mb-4 text-lg text-gray-800 md:mb-2 dark:text-gray-300">Service : <span>${ssrInterpolate(order.value.service.title)}</span></p><p class="mb-4 text-base text-gray-600 dark:text-gray-400 md:mb-2">Date de commande : <span>${ssrInterpolate(order.value.created_at)}</span></p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Date de livraison : <span class="text-green-500">${ssrInterpolate((_a = order.value.feedback) == null ? void 0 : _a.delai_livraison_estimee)}</span></p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement : `);
      if (order.value.status === "pending") {
        _push(`<span class="text-red-300 px-1.5 py-0.5 rounded-lg">en Attente</span>`);
      } else if (order.value.status === "completed") {
        _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">Payé</span>`);
      } else {
        _push(`<span class="bg-red-500 px-1.5 py-0.5 rounded-lg">Rejeter</span>`);
      }
      _push(`</p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement au Freelance : `);
      if (order.value.is_paid != null) {
        _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">Payé</span>`);
      } else {
        _push(`<span class="text-red-300 px-1.5 py-0.5 rounded-lg">en Attente</span>`);
      }
      _push(`</p>`);
      if (order.value.feedback != null) {
        _push(`<p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">statut : `);
        if (order.value.feedback.etat === "En attente de traitement") {
          _push(`<span class="text-blue-300 px-1.5 py-0.5 rounded-lg">En attente de traitement</span>`);
        } else if (order.value.feedback.etat === "Livré") {
          _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">Livré</span>`);
        } else if (order.value.feedback.etat === "En cours de préparation") {
          _push(`<span class="text-red-200 px-1.5 py-0.5 rounded-lg">En cours de préparation</span>`);
        } else {
          _push(`<span class="bg-red-500 px-1.5 py-0.5 rounded-lg">En transit</span>`);
        }
        _push(`</p>`);
      } else {
        _push(`<p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300"> Etat de la commande : <span>Pas d&#39;etat disponible</span></p>`);
      }
      _push(`</div><div class="px-6 py-4 border-t border-gray-200"><p class="mb-2 text-lg text-gray-800">Avancement</p><div class="flex items-center"><div class="flex-1">`);
      _push(ssrRenderComponent(unref(ProgressBar), {
        value: order.value.progress,
        class: "dark:!bg-gray-700"
      }, null, _parent));
      _push(`</div><p class="ml-2 text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(order.value.progress)}%</p></div></div><div class="px-6 py-4 border-t border-gray-300"><h1 class="flex items-start gap-2 text-lg font-bold cursor-pointer lg:text-xl"> Freelance lié </h1><div class="flex items-center mt-4">`);
      _push(ssrRenderComponent(_component_Photo, {
        user: order.value.freelance_user,
        taille: "20"
      }, null, _parent));
      _push(`<div class="ml-4"><a href="" class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(order.value.freelance_user.name)}</a></div></div></div><div class="px-6 py-4 border-t border-gray-200"><h1 class="flex items-start gap-2 text-lg font-bold cursor-pointer lg:text-xl"> Rapport Envoyer <button><svg class="${ssrRenderClass([{ "rotate-180": open.value }, "w-6 h-6 fill-current"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"></path></svg></button></h1>`);
      _push(ssrRenderComponent(_component_Collapse, {
        when: open.value,
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(order.value.rapports, (rapport) => {
                _push2(`<div class="mb-3 border-b border-gray-50"${_scopeId}><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(rapport.description)}</p><span class="mt-4 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(rapport.created_at)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
            }
          } else {
            return [
              (openBlock(), createBlock("div", { key: 0 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(order.value.rapports, (rapport) => {
                  return openBlock(), createBlock("div", { class: "mb-3 border-b border-gray-50" }, [
                    createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, toDisplayString(rapport.description), 1),
                    createVNode("span", { class: "mt-4 text-sm text-gray-500" }, toDisplayString(rapport.created_at), 1)
                  ]);
                }), 256))
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-6 py-4 border-t border-gray-200"><p class="mb-2 text-lg text-gray-800">Options supplémentaires</p><div class="grid grid-cols-2 gap-2 lg:grid-cols-5 md:grid-cols-4 lg:flex-row">`);
      if (order.value.transaction == null) {
        _push(`<div><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full"><div>`);
      _push(ssrRenderComponent(_component_Button, {
        outlined: "",
        severity: "info",
        onClick: contacterUser,
        label: "Contact"
      }, null, _parent));
      _push(`</div></div>`);
      if (((_b = order.value.feedback) == null ? void 0 : _b.etat) == "Livré") {
        _push(`<div class="w-full"><div>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => visible.value = !visible.value,
          outlined: "",
          severity: "info",
          label: "Feedback"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_c = order.value.feedback) == null ? void 0 : _c.etat) == "Livré" && order.value.is_paid == null) {
        _push(`<div class="w-full"><div>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => debloquer.value = !debloquer.value,
          outlined: "",
          severity: "success",
          label: "Debloquer Paiment"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="hidden"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Payer</button></div><div class="hidden">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "small",
        raised: "",
        severity: "danger",
        label: "Annuler"
      }, null, _parent));
      _push(`</div></div></div><div><div class="px-6 py-4 border-t border-gray-200"><h1 class="flex items-start gap-2 text-xl font-bold cursor-pointer"> Transaction de paiement liée <button><svg class="${ssrRenderClass([{ "rotate-180": open2.value }, "w-6 h-6 fill-current"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"></path></svg></button></h1>`);
      _push(ssrRenderComponent(_component_Collapse, { when: open2.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (order.value.transaction != null) {
              _push2(`<div class="pt-4"${_scopeId}><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>Numéro de transaction : <span class="text-lg font-bold"${_scopeId}>#${ssrInterpolate(order.value.transaction.transaction_numero)}</span></p><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>Méthode de paiement : <span${_scopeId}>••• ${ssrInterpolate(order.value.transaction.payment_method["last4"])}</span></p><div class="flex gap-4"${_scopeId}><div class=""${_scopeId}><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>Montant payé : <span class="p-2 text-xl font-extrabold text-green-400 rounded"${_scopeId}>${ssrInterpolate(order.value.transaction.amount)} $ </span></p></div></div><div class="p-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("user.transactions.one", [order.value.transaction.transaction_numero])
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
              order.value.transaction != null ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pt-4"
              }, [
                createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, [
                  createTextVNode("Numéro de transaction : "),
                  createVNode("span", { class: "text-lg font-bold" }, "#" + toDisplayString(order.value.transaction.transaction_numero), 1)
                ]),
                createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, [
                  createTextVNode("Méthode de paiement : "),
                  createVNode("span", null, "••• " + toDisplayString(order.value.transaction.payment_method["last4"]), 1)
                ]),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, [
                      createTextVNode("Montant payé : "),
                      createVNode("span", { class: "p-2 text-xl font-extrabold text-green-400 rounded" }, toDisplayString(order.value.transaction.amount) + " $ ", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "p-2" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("user.transactions.one", [order.value.transaction.transaction_numero])
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
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        position: "'bottom'",
        modal: "",
        header: "Feedback",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full mt-8"${_scopeId}><div${_scopeId}><textarea id="message" placeholder="Message" rows="4" class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea></div><div class="flex gap-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: envoyerFeddback,
              label: "Envoyer",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              severity: "danger",
              outlined: "",
              onClick: ($event) => visible.value = !visible.value,
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full mt-8" }, [
                createVNode("div", null, [
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => unref(form).description = $event,
                    id: "message",
                    placeholder: "Message",
                    rows: "4",
                    class: "block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"
                  }, "\n\n                                            ", 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).description]
                  ])
                ]),
                createVNode("div", { class: "flex gap-4 mt-4" }, [
                  createVNode(_component_Button, {
                    onClick: envoyerFeddback,
                    label: "Envoyer",
                    outlined: ""
                  }),
                  createVNode(_component_Button, {
                    severity: "danger",
                    outlined: "",
                    onClick: ($event) => visible.value = !visible.value,
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: debloquer.value,
        "onUpdate:visible": ($event) => debloquer.value = $event,
        position: "'bottom'",
        modal: "",
        header: "Confirmer Comannde Finis",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full mt-4"${_scopeId}><div${_scopeId}><div${_scopeId}><div class="flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100"${_scopeId}>Confirmez la réception de votre commande</div><div class="px-4 mt-4 text-lg text-gray-700 dark:text-gray-50"${_scopeId}> En confirmant la réception, vous attestez que la commande a été réalisée à votre satisfaction. Cela permettra au freelance de recevoir son paiement. Êtes-vous prêt à procéder? </div></div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: debloquerPaiement,
              outlined: "",
              severity: "success",
              label: "Oui, je confirme"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full mt-4" }, [
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100" }, "Confirmez la réception de votre commande"),
                    createVNode("div", { class: "px-4 mt-4 text-lg text-gray-700 dark:text-gray-50" }, " En confirmant la réception, vous attestez que la commande a été réalisée à votre satisfaction. Cela permettra au freelance de recevoir son paiement. Êtes-vous prêt à procéder? ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  createVNode(_component_Button, {
                    onClick: debloquerPaiement,
                    outlined: "",
                    severity: "success",
                    label: "Oui, je confirme"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Commande/CommandeGestion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

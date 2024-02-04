import { computed, ref, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-b6ab4ba7.js";
import { useForm, Link, router } from "@inertiajs/vue3";
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
  __name: "MissionPostulation",
  __ssrInlineRender: true,
  props: {
    missionResponces: Array
  },
  setup(__props) {
    const props = __props;
    const missionResponce = computed(() => props.missionResponces.data);
    ref(false);
    const mission = ref(false);
    const form = useForm({
      responce_id: null
    });
    const accepter = (responce_id) => {
      router.post(route("accepterMission"), {
        responce_id
      }, {
        onSuccess: () => {
          form.reset();
          alert("ok");
        },
        onError: (error) => {
          alert(error.message);
          form.reset();
        }
      });
    };
    const refuser = (responce_id) => {
      form.responce_id = responce_id;
      if (form.responce_id != null) {
        form.post(route("refuserMission"), {
          onSuccess: () => {
            form.reset();
          },
          onError: (error) => {
            alert(error.message), form.reset();
            s;
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Photo = resolveComponent("Photo");
      const _component_Button = resolveComponent("Button");
      const _component_Dialog = resolveComponent("Dialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 bg-green-400 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Candidature</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">Proposition</h1></div><div><div class="grid gap-4 mt-4"><!--[-->`);
      ssrRenderList(missionResponce.value, (proposition) => {
        _push(`<div><div class="${ssrRenderClass([{ "boder boder-red-600": proposition.status === "rejected", "border border-green-400": proposition.status === "approved" }, "p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 min-w-48"])}"><div class="flex flex-col items-center justify-center">`);
        _push(ssrRenderComponent(_component_Photo, {
          user: proposition.freelance_user,
          taille: "20"
        }, null, _parent));
        _push(`<div class="mt-3 mb-2 text-gray-600">`);
        _push(ssrRenderComponent(unref(Link), { href: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-base text-gray-700 dark:text-gray-200"${_scopeId}>${ssrInterpolate(proposition.freelance_user.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-base text-gray-700 dark:text-gray-200" }, toDisplayString(proposition.freelance_user.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div><div class="mt-2 mb-2 text-lg font-semibold">Proposition du Freelance</div><div class="mb-2 text-gray-600 dark:text-gray-300">Tarif : <span class="text-gray-700 dark:text-gray-200">${ssrInterpolate(proposition.budget)} $</span></div><div class="mt-4 text-gray-600 dark:text-gray-300">Description</div><div class="prose text-gray-700 dark:text-gray-200">${proposition.content}</div>`);
        if (proposition.status === "approved") {
          _push(`<div class="flex flex-grow gap-4 py-4"><div class="p-2"><h1 class="font-bold text-gray-600 dark:text-gray-300">Vous avez accepter cette proposition </h1></div><div>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("user.missions.missionGestion", [proposition.mission.mission_numero, proposition.response_numero])
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Button, {
                  size: "small",
                  outlined: "",
                  severity: "info",
                  label: "evolution"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Button, {
                    size: "small",
                    outlined: "",
                    severity: "info",
                    label: "evolution"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="flex gap-4 py-4 bg-gray-200 dark:bg-gray-800"><div class="flex gap-4">`);
          _push(ssrRenderComponent(_component_Button, {
            size: "small",
            onClick: ($event) => accepter(proposition.id),
            outlined: "",
            label: "Accepter"
          }, null, _parent));
          _push(ssrRenderComponent(_component_Button, {
            size: "small",
            onClick: ($event) => refuser(proposition.id),
            outlined: "",
            severity: "danger",
            label: "Decliner"
          }, null, _parent));
          _push(`</div><div></div></div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      if (missionResponce.value.length === 0) {
        _push(`<div class="text-lg text-gray-800 dark:text-gray-300"> Vous n&#39;avez aucune proposition pour cette mission </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
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
            _push2(`<div class="flex flex-col w-full mt-4"${_scopeId}><div${_scopeId}><div${_scopeId}><div class="flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100"${_scopeId}>Confirmez la réception de votre commande</div><div class="px-4 mt-4 text-lg text-gray-700 dark:text-gray-50"${_scopeId}> En confirmant la réception, vous attestez que la commande a été réalisée à votre satisfaction. Cela permettra au freelance de recevoir son paiement. Êtes-vous prêt à procéder? </div></div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
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
                    createVNode("div", { class: "flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100" }, "Confirmez la réception de votre commande"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Mission/MissionPostulation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

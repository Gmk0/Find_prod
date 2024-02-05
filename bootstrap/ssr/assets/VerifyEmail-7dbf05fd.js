import { computed, resolveComponent, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import "./AuthenticationCard-1035e63a.js";
import { _ as _sfc_main$1 } from "./PrimaryButton-d4e5ebf1.js";
const _sfc_main = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavGuest = resolveComponent("NavGuest");
      const _component_CardGuest = resolveComponent("CardGuest");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent));
      _push(ssrRenderComponent(unref(Head), { title: "Two-factor Confirmation" }, null, _parent));
      _push(ssrRenderComponent(_component_NavGuest, null, null, _parent));
      _push(ssrRenderComponent(_component_CardGuest, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Authentification a double facteur `);
          } else {
            return [
              createTextVNode(" Authentification a double facteur ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="hidden"${_scopeId}>Trouvez les services parfaits dont vous avez besoin</span>`);
          } else {
            return [
              createVNode("span", { class: "hidden" }, "Trouvez les services parfaits dont vous avez besoin")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl"${_scopeId}><h5 class="text-gray-600 dark:text-gray-300"${_scopeId}>Verification </h5></div><div class="p-4"${_scopeId}><div class="mb-4 text-sm text-gray-600 dark:text-white"${_scopeId}> Avant de continuer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer par e-mail ? Si vous n&#39;avez pas reçu l&#39;e-mail, nous serons heureux de vous en envoyer un autre. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}> Un nouveau lien de vérification a été envoyé à l&#39;adresse e-mail que vous avez fournie dans vos paramètres de profil. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="flex flex-col items-center justify-between gap-3 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: ["gradient2", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Renvoyer le code. `);
                } else {
                  return [
                    createTextVNode(" Renvoyer le code. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Modifier le profile`);
                } else {
                  return [
                    createTextVNode(" Modifier le profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "ml-2 text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Deconnexion `);
                } else {
                  return [
                    createTextVNode(" Deconnexion ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border" }, [
                createVNode("div", { class: "p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl" }, [
                  createVNode("h5", { class: "text-gray-600 dark:text-gray-300" }, "Verification ")
                ]),
                createVNode("div", { class: "p-4" }, [
                  createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-white" }, " Avant de continuer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer par e-mail ? Si vous n'avez pas reçu l'e-mail, nous serons heureux de vous en envoyer un autre. "),
                  verificationLinkSent.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4 text-sm font-medium text-green-600"
                  }, " Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie dans vos paramètres de profil. ")) : createCommentVNode("", true),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "flex flex-col items-center justify-between gap-3 mt-4" }, [
                      createVNode(_sfc_main$1, {
                        class: ["gradient2", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Renvoyer le code. ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"]),
                      createVNode("div", null, [
                        createVNode(unref(Link), {
                          href: _ctx.route("profile.show"),
                          class: "text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Modifier le profile")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("logout"),
                          method: "post",
                          as: "button",
                          class: "ml-2 text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Deconnexion ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ], 32)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

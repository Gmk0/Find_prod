import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, unref, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import "./AuthenticationCard-1035e63a.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./TextInput-14bc0530.js";
import { _ as _sfc_main$3 } from "./InputLabel-d47442f5.js";
import "./PrimaryButton-d4e5ebf1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const NavGuest_vue_vue_type_style_index_0_scoped_a9c06ba3_lang = "";
const _sfc_main$2 = {
  setup() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start" }, _attrs))} data-v-a9c06ba3><div class="container flex items-center justify-between py-0 flex-wrap-inherit" data-v-a9c06ba3>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home"),
    class: "leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="to-orange-400" data-v-a9c06ba3${_scopeId}>FIND</span>`);
      } else {
        return [
          createVNode("span", { class: "to-orange-400" }, "FIND")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div navbar-menu class="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto" data-v-a9c06ba3><ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto" data-v-a9c06ba3><li data-v-a9c06ba3>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home"),
    class: "flex items-center px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75",
    "aria-current": "page"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60" data-v-a9c06ba3${_scopeId}></i> Accueil `);
      } else {
        return [
          createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60" }),
          createTextVNode(" Accueil ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-a9c06ba3>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("profile.show"),
    class: "block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60" data-v-a9c06ba3${_scopeId}></i> Profile `);
      } else {
        return [
          createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60" }),
          createTextVNode(" Profile ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-a9c06ba3>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75",
    href: _ctx.route("login")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60" data-v-a9c06ba3${_scopeId}></i> Connexion `);
      } else {
        return [
          createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60" }),
          createTextVNode(" Connexion ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/NavGuest.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavGuest = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a9c06ba3"]]);
const CardGuest_vue_vue_type_style_index_0_scoped_c27c1bd8_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FooterGuest = resolveComponent("FooterGuest");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c27c1bd8><main class="mt-0 transition-all duration-200 dark:bg-gray-900 ease-soft-in-out" data-v-c27c1bd8><section class="min-h-screen pt-4 mb-32" data-v-c27c1bd8><div class="relative flex items-start pt-12 pb-56 mx-6 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl" style="${ssrRenderStyle({ "background-image": "url('/images/logo/ff3.png')" })}" data-v-c27c1bd8><span class="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-50 gradient2 from-gray-900 to-slate-800" data-v-c27c1bd8></span><div class="container z-10" data-v-c27c1bd8><div class="flex flex-wrap justify-center -mx-3" data-v-c27c1bd8><div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12" data-v-c27c1bd8><h1 class="mt-12 mb-2 text-white" data-v-c27c1bd8>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h1><p class="text-white" data-v-c27c1bd8>`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div></div></div></div><div class="container" data-v-c27c1bd8><div class="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48" data-v-c27c1bd8><div class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12" data-v-c27c1bd8>`);
  ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
  _push(`</div></div></div></section>`);
  _push(ssrRenderComponent(_component_FooterGuest, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CardGuest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardGuest = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c27c1bd8"]]);
const ForgotPassword_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Mot de passe Oublier" }, null, _parent));
      _push(ssrRenderComponent(NavGuest, null, null, _parent));
      _push(ssrRenderComponent(CardGuest, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mot de passe Oublier `);
          } else {
            return [
              createTextVNode(" Mot de passe Oublier ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Trouvez les services parfaits dont vous avez besoin</span>`);
          } else {
            return [
              createVNode("span", null, "Trouvez les services parfaits dont vous avez besoin")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl"${_scopeId}><h5 class="text-gray-600 dark:text-gray-300"${_scopeId}>Mot de passe Oublier </h5></div><div class="flex-auto px-6 py-2 pb-12"${_scopeId}><div class="mb-4 text-sm text-gray-600 dark:text-gray-200"${_scopeId}> Mot de passe oublié ? Pas de problème. Indiquez simplement votre adresse e-mail et nous vous enverrons un lien de réinitialisation de mot de passe par e-mail qui vous permettra d&#39;en choisir un nouveau. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form role="grid grid-cols-1 gap-6"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "block w-full mt-1",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-center"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}>Lien de réinitialisation</span></button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border" }, [
                createVNode("div", { class: "p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl" }, [
                  createVNode("h5", { class: "text-gray-600 dark:text-gray-300" }, "Mot de passe Oublier ")
                ]),
                createVNode("div", { class: "flex-auto px-6 py-2 pb-12" }, [
                  createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-200" }, " Mot de passe oublié ? Pas de problème. Indiquez simplement votre adresse e-mail et nous vous enverrons un lien de réinitialisation de mot de passe par e-mail qui vous permettra d'en choisir un nouveau. "),
                  __props.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4 text-sm font-medium text-green-600"
                  }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    role: "grid grid-cols-1 gap-6"
                  }, [
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        for: "email",
                        value: "Email"
                      }),
                      createVNode(_sfc_main$4, {
                        id: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        type: "email",
                        class: "block w-full mt-1",
                        required: "",
                        autofocus: "",
                        autocomplete: "username"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.email
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("button", {
                        type: "submit",
                        class: [{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"],
                        disabled: unref(form).processing
                      }, [
                        createVNode("span", null, "Lien de réinitialisation")
                      ], 10, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

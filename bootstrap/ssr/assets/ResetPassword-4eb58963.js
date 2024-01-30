import { resolveComponent, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import "./AuthenticationCard-1035e63a.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./TextInput-14bc0530.js";
import { _ as _sfc_main$1 } from "./InputLabel-d47442f5.js";
import "./PrimaryButton-b82fb16e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const ResetPassword_vue_vue_type_style_index_0_scoped_95989c42_lang = "";
const _sfc_main = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavGuest = resolveComponent("NavGuest");
      const _component_CardGuest = resolveComponent("CardGuest");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Mot de passe Oublier" }, null, _parent));
      _push(ssrRenderComponent(_component_NavGuest, null, null, _parent));
      _push(ssrRenderComponent(_component_CardGuest, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Réinitialiser le mot de passe `);
          } else {
            return [
              createTextVNode(" Réinitialiser le mot de passe ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="hidden" data-v-95989c42${_scopeId}>Trouvez les services parfaits dont vous avez besoin</span>`);
          } else {
            return [
              createVNode("span", { class: "hidden" }, "Trouvez les services parfaits dont vous avez besoin")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border" data-v-95989c42${_scopeId}><div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl" data-v-95989c42${_scopeId}><h5 class="text-gray-600 dark:text-gray-300" data-v-95989c42${_scopeId}>Réinitialiser le mot de passe </h5></div><div class="flex-auto px-6 py-2 pb-12" data-v-95989c42${_scopeId}>`);
            if (_ctx.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600" data-v-95989c42${_scopeId}>${ssrInterpolate(_ctx.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form role="grid grid-cols-1 gap-6" data-v-95989c42${_scopeId}><div data-v-95989c42${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "block w-full mt-1",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4" data-v-95989c42${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "password",
              value: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "block w-full mt-1",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4" data-v-95989c42${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              for: "password_confirmation",
              value: "Confirmation"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "block w-full mt-1",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-center" data-v-95989c42${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-95989c42${_scopeId}><span data-v-95989c42${_scopeId}>Réinitialiser le mot de passe</span></button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border" }, [
                createVNode("div", { class: "p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl" }, [
                  createVNode("h5", { class: "text-gray-600 dark:text-gray-300" }, "Réinitialiser le mot de passe ")
                ]),
                createVNode("div", { class: "flex-auto px-6 py-2 pb-12" }, [
                  _ctx.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4 text-sm font-medium text-green-600"
                  }, toDisplayString(_ctx.status), 1)) : createCommentVNode("", true),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    role: "grid grid-cols-1 gap-6"
                  }, [
                    createVNode("div", null, [
                      createVNode(_sfc_main$1, {
                        for: "email",
                        value: "Email"
                      }),
                      createVNode(_sfc_main$2, {
                        id: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        type: "email",
                        class: "block w-full mt-1",
                        required: "",
                        autofocus: "",
                        autocomplete: "username"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$3, {
                        class: "mt-2",
                        message: unref(form).errors.email
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$1, {
                        for: "password",
                        value: "Mot de passe"
                      }),
                      createVNode(_sfc_main$2, {
                        id: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        class: "block w-full mt-1",
                        required: "",
                        autocomplete: "new-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$3, {
                        class: "mt-2",
                        message: unref(form).errors.password
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$1, {
                        for: "password_confirmation",
                        value: "Confirmation"
                      }),
                      createVNode(_sfc_main$2, {
                        id: "password_confirmation",
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        type: "password",
                        class: "block w-full mt-1",
                        required: "",
                        autocomplete: "new-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$3, {
                        class: "mt-2",
                        message: unref(form).errors.password_confirmation
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("button", {
                        type: "submit",
                        class: [{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"],
                        disabled: unref(form).processing
                      }, [
                        createVNode("span", null, "Réinitialiser le mot de passe")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95989c42"]]);
export {
  ResetPassword as default
};

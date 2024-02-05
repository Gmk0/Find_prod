import { ref, resolveComponent, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, withModifiers, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import "./AuthenticationCard-1035e63a.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./TextInput-14bc0530.js";
import { _ as _sfc_main$1 } from "./InputLabel-d47442f5.js";
import "./PrimaryButton-d4e5ebf1.js";
const TwoFactorChallenge_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  setup(__props) {
    const recovery = ref(false);
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const recoveryCodeInput = ref(null);
    const codeInput = ref(null);
    const toggleRecovery = async () => {
      recovery.value ^= true;
      await nextTick();
      if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = "";
      } else {
        codeInput.value.focus();
        form.recovery_code = "";
      }
    };
    const submit = () => {
      form.post(route("two-factor.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavGuest = resolveComponent("NavGuest");
      const _component_CardGuest = resolveComponent("CardGuest");
      _push(`<!--[-->`);
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
            _push2(`<div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border"${_scopeId}><div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl"${_scopeId}><h5 class="text-gray-600 dark:text-gray-300"${_scopeId}>Authentification </h5></div><div class="flex-auto px-6 py-2 pb-12"${_scopeId}><div class="mb-4 text-sm text-gray-600 dark:text-gray-100"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[--> Veuillez confirmer l&#39;accès à votre compte en entrant l&#39;un de vos codes de récupération d&#39;urgence. <!--]-->`);
            } else {
              _push2(`<!--[--> Veuillez confirmer l&#39;accès à votre compte en entrant l&#39;un de vos codes de récupération d&#39;urgence. <!--]-->`);
            }
            _push2(`</div><form role="grid grid-cols-1 gap-6"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                for: "code",
                value: "Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                id: "code",
                ref_key: "codeInput",
                ref: codeInput,
                modelValue: unref(form).code,
                "onUpdate:modelValue": ($event) => unref(form).code = $event,
                type: "text",
                inputmode: "numeric",
                class: "block w-full mt-1",
                autofocus: "",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.code
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                for: "recovery_code",
                value: "Recovery Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                id: "recovery_code",
                ref_key: "recoveryCodeInput",
                ref: recoveryCodeInput,
                modelValue: unref(form).recovery_code,
                "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                type: "text",
                class: "block w-full mt-1",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.recovery_code
              }, null, _parent2, _scopeId));
              _push2(`<button type="button" class="mt-6 text-sm text-gray-600 underline cursor-pointer dark:text-gray-300 hover:text-gray-900"${_scopeId}>`);
              if (!recovery.value) {
                _push2(`<!--[--> Use a recovery code <!--]-->`);
              } else {
                _push2(`<!--[--> Use an authentication code <!--]-->`);
              }
              _push2(`</button></div>`);
            }
            _push2(`<div class="text-center"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}>Connexion</span></button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border" }, [
                createVNode("div", { class: "p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl" }, [
                  createVNode("h5", { class: "text-gray-600 dark:text-gray-300" }, "Authentification ")
                ]),
                createVNode("div", { class: "flex-auto px-6 py-2 pb-12" }, [
                  createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-100" }, [
                    !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" Veuillez confirmer l'accès à votre compte en entrant l'un de vos codes de récupération d'urgence. ")
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(" Veuillez confirmer l'accès à votre compte en entrant l'un de vos codes de récupération d'urgence. ")
                    ], 64))
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    role: "grid grid-cols-1 gap-6"
                  }, [
                    !recovery.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_sfc_main$1, {
                        for: "code",
                        value: "Code"
                      }),
                      createVNode(_sfc_main$2, {
                        id: "code",
                        ref_key: "codeInput",
                        ref: codeInput,
                        modelValue: unref(form).code,
                        "onUpdate:modelValue": ($event) => unref(form).code = $event,
                        type: "text",
                        inputmode: "numeric",
                        class: "block w-full mt-1",
                        autofocus: "",
                        autocomplete: "one-time-code"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$3, {
                        class: "mt-2",
                        message: unref(form).errors.code
                      }, null, 8, ["message"])
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_sfc_main$1, {
                        for: "recovery_code",
                        value: "Recovery Code"
                      }),
                      createVNode(_sfc_main$2, {
                        id: "recovery_code",
                        ref_key: "recoveryCodeInput",
                        ref: recoveryCodeInput,
                        modelValue: unref(form).recovery_code,
                        "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                        type: "text",
                        class: "block w-full mt-1",
                        autocomplete: "one-time-code"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$3, {
                        class: "mt-2",
                        message: unref(form).errors.recovery_code
                      }, null, 8, ["message"]),
                      createVNode("button", {
                        type: "button",
                        class: "mt-6 text-sm text-gray-600 underline cursor-pointer dark:text-gray-300 hover:text-gray-900",
                        onClick: withModifiers(toggleRecovery, ["prevent"])
                      }, [
                        !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(" Use a recovery code ")
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(" Use an authentication code ")
                        ], 64))
                      ])
                    ])),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("button", {
                        type: "submit",
                        class: [{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"],
                        disabled: unref(form).processing
                      }, [
                        createVNode("span", null, "Connexion")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

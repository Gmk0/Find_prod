import { ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import "./AuthenticationCard-1035e63a.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./TextInput-14bc0530.js";
import { _ as _sfc_main$1 } from "./InputLabel-d47442f5.js";
import "./PrimaryButton-b82fb16e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const ConfirmPassword_vue_vue_type_style_index_0_scoped_eab1b9aa_lang = "";
const _sfc_main = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const passwordInput = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Mot de passe Oublier" }, null, _parent));
      _push(`<nav class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start" data-v-eab1b9aa><div class="container flex items-center justify-between py-0 flex-wrap-inherit" data-v-eab1b9aa>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="to-orange-400" data-v-eab1b9aa${_scopeId}>FIND</span>`);
          } else {
            return [
              createVNode("span", { class: "to-orange-400" }, "FIND")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div navbar-menu class="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto" data-v-eab1b9aa><ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto" data-v-eab1b9aa><li data-v-eab1b9aa>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex items-center px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75",
        "aria-current": "page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60" data-v-eab1b9aa${_scopeId}></i> Accueil `);
          } else {
            return [
              createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60" }),
              createTextVNode(" Accueil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-eab1b9aa>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("profile.show"),
        class: "block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60" data-v-eab1b9aa${_scopeId}></i> Profile `);
          } else {
            return [
              createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60" }),
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-eab1b9aa>`);
      _push(ssrRenderComponent(_component_Link, {
        class: "block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75",
        href: _ctx.route("login")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60" data-v-eab1b9aa${_scopeId}></i> Connexion `);
          } else {
            return [
              createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60" }),
              createTextVNode(" Connexion ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></nav><main class="mt-0 transition-all duration-200 dark:bg-gray-900 ease-soft-in-out" data-v-eab1b9aa><section class="min-h-screen pt-4 mb-32" data-v-eab1b9aa><div class="relative flex items-start pt-12 pb-56 mx-6 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl" style="${ssrRenderStyle({ "background-image": "url('/images/logo/ff3.png')" })}" data-v-eab1b9aa><span class="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-50 gradient2 from-gray-900 to-slate-800" data-v-eab1b9aa></span><div class="container z-10" data-v-eab1b9aa><div class="flex flex-wrap justify-center -mx-3" data-v-eab1b9aa><div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12" data-v-eab1b9aa><h1 class="mt-12 mb-2 text-white" data-v-eab1b9aa>Mot de passe Oublier</h1><p class="hidden text-white" data-v-eab1b9aa><span data-v-eab1b9aa>Trouvez les services parfaits dont vous avez besoin</span></p></div></div></div></div><div class="container" data-v-eab1b9aa><div class="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48" data-v-eab1b9aa><div class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12" data-v-eab1b9aa><div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border" data-v-eab1b9aa><div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl" data-v-eab1b9aa><h5 class="text-gray-600 dark:text-gray-300" data-v-eab1b9aa>Mot de passe Oublier </h5></div><div class="flex-auto px-6 py-2 pb-12" data-v-eab1b9aa><div class="mb-4 text-sm text-gray-600 dark:text-gray-200" data-v-eab1b9aa> Ceci est une zone sécurisée de l&#39;application. Veuillez confirmer votre mot de passe avant de continuer. </div>`);
      if (_ctx.status) {
        _push(`<div class="mb-4 text-sm font-medium text-green-600" data-v-eab1b9aa>${ssrInterpolate(_ctx.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form role="grid grid-cols-1 gap-6" data-v-eab1b9aa><div data-v-eab1b9aa>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: "password",
        value: "Mot de passe"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "block w-full mt-1",
        required: "",
        autocomplete: "current-password",
        autofocus: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="text-center" data-v-eab1b9aa><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-eab1b9aa><span data-v-eab1b9aa>Lien de réinitialisation</span></button></div></form></div></div></div></div></div></section><footer class="py-12" data-v-eab1b9aa><div class="container" data-v-eab1b9aa><div class="flex flex-wrap -mx-3" data-v-eab1b9aa><div class="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12" data-v-eab1b9aa><a href="{{url(&#39;/services&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-eab1b9aa> Servives </a><a href="{{url(&#39;/apropos&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-eab1b9aa> A propos </a><a href="{{url(&#39;/categories&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-eab1b9aa> Categories </a><a href="{{url(&#39;/faq&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-eab1b9aa> FaQ </a></div><div class="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12" data-v-eab1b9aa><a href="" target="_blank" class="mr-6 text-slate-400" data-v-eab1b9aa><span class="text-lg fab fa-dribbble" data-v-eab1b9aa></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-eab1b9aa><span class="text-lg fab fa-twitter" data-v-eab1b9aa></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-eab1b9aa><span class="text-lg fab fa-instagram" data-v-eab1b9aa></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-eab1b9aa><span class="text-lg fab fa-pinterest" data-v-eab1b9aa></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-eab1b9aa><span class="text-lg fab fa-github" data-v-eab1b9aa></span></a></div></div><div class="flex flex-wrap -mx-3" data-v-eab1b9aa><div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0" data-v-eab1b9aa><p class="mb-0 text-slate-400" data-v-eab1b9aa> Copyright © Find 2034 </p></div></div><div class="flex flex-wrap mt-8 -mx-3" data-v-eab1b9aa><div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0" data-v-eab1b9aa><label class="relative inline-flex items-center mb-5 cursor-pointer" data-v-eab1b9aa><input type="checkbox" x-model="dark" class="sr-only peer" data-v-eab1b9aa><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" data-v-eab1b9aa></div><div class="px-2" data-v-eab1b9aa><template x-if="!dark" data-v-eab1b9aa><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-eab1b9aa><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" data-v-eab1b9aa></path></svg></template><template x-if="dark" data-v-eab1b9aa><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-eab1b9aa><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" data-v-eab1b9aa></path></svg></template></div></label></div></div></div></footer></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConfirmPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eab1b9aa"]]);
export {
  ConfirmPassword as default
};

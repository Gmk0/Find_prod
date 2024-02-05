import { onMounted, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Checkbox-74b17051.js";
import { a as _sfc_main$1 } from "./TextInput-14bc0530.js";
import { _ as _sfc_main$2 } from "./InputLabel-d47442f5.js";
import "./PrimaryButton-d4e5ebf1.js";
import { initFlowbite } from "flowbite";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const Register_vue_vue_type_style_index_0_scoped_05548b3e_lang = "";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    onMounted(() => {
      initFlowbite();
    });
    const props = __props;
    const form = useForm({
      name: "",
      email: "",
      password: "",
      phone: "",
      password_confirmation: "",
      terms: false,
      referral_code: props.code
    });
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MazInput = resolveComponent("MazInput");
      const _component_MazPhoneNumberInput = resolveComponent("MazPhoneNumberInput");
      const _component_FooterGuest = resolveComponent("FooterGuest");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Inscription" }, null, _parent));
      _push(`<nav class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start" data-v-05548b3e><div class="container flex items-center justify-between py-0 flex-wrap-inherit" data-v-05548b3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="to-orange-400" data-v-05548b3e${_scopeId}>FIND</span>`);
          } else {
            return [
              createVNode("span", { class: "to-orange-400" }, "FIND")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div navbar-menu class="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto" data-v-05548b3e><ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto" data-v-05548b3e><li data-v-05548b3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex items-center px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75",
        "aria-current": "page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60" data-v-05548b3e${_scopeId}></i> Accueil `);
          } else {
            return [
              createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60" }),
              createTextVNode(" Accueil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-05548b3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profile.show"),
        class: "block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60" data-v-05548b3e${_scopeId}></i> Profile `);
          } else {
            return [
              createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60" }),
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-05548b3e>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75",
        href: _ctx.route("login")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60" data-v-05548b3e${_scopeId}></i> Connexion `);
          } else {
            return [
              createVNode("i", { class: "mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60" }),
              createTextVNode(" Connexion ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></nav><main class="mt-0 transition-all duration-200 dark:bg-gray-900 ease-soft-in-out" data-v-05548b3e><section class="min-h-screen pt-4 mb-32" data-v-05548b3e><div class="relative flex items-start pt-12 pb-56 mx-6 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl" style="${ssrRenderStyle({ "background-image": "url('/images/logo/ff3.png')" })}" data-v-05548b3e><span class="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-50 gradient2 from-gray-900 to-slate-800" data-v-05548b3e></span><div class="container z-10" data-v-05548b3e><div class="flex flex-wrap justify-center -mx-3" data-v-05548b3e><div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12" data-v-05548b3e><h1 class="mt-12 mb-2 text-white" data-v-05548b3e>Bienvenue</h1><p class="text-white" data-v-05548b3e><span data-v-05548b3e>Trouvez les services parfaits dont vous avez besoin</span></p></div></div></div></div><div class="container" data-v-05548b3e><div class="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48" data-v-05548b3e><div class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12" data-v-05548b3e><div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border" data-v-05548b3e><div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl" data-v-05548b3e><h5 data-v-05548b3e>Inscrivez-vous</h5></div>`);
      if (props.code === "") {
        _push(`<div class="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12" data-v-05548b3e><div class="w-3/12 max-w-full px-1 ml-auto flex-0" data-v-05548b3e><a class="inline-block w-full px-6 py-3 mb-4 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="auth/facebook" data-v-05548b3e><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink32" data-v-05548b3e><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-05548b3e><g transform="translate(3.000000, 3.000000)" fill-rule="nonzero" data-v-05548b3e><circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047" data-v-05548b3e></circle><path d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z" fill="#FFFFFF" data-v-05548b3e></path></g></g></svg></a></div><div class="w-3/12 max-w-full px-1 mr-auto flex-0" data-v-05548b3e><a class="inline-block w-full px-6 py-3 mb-4 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="auth/google" data-v-05548b3e><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-05548b3e><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-05548b3e><g transform="translate(3.000000, 2.000000)" fill-rule="nonzero" data-v-05548b3e><path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" fill="#4285F4" data-v-05548b3e></path><path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" fill="#34A853" data-v-05548b3e></path><path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" fill="#FBBC05" data-v-05548b3e></path><path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" fill="#EB4335" data-v-05548b3e></path></g></g></svg></a></div><div class="relative w-full max-w-full px-3 mt-2 text-center shrink-0" data-v-05548b3e><p class="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white dark:bg-gray-800 text-slate-400" data-v-05548b3e> or</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-05548b3e><div data-v-05548b3e><div class="flex-auto px-6 py-2 pb-12" data-v-05548b3e><form role="grid grid-cols-1 gap-6" data-v-05548b3e><div class="mb-4" data-v-05548b3e>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Nom",
        type: "text",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        color: "#9acd32"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div class="mt-4" data-v-05548b3e>`);
      _push(ssrRenderComponent(_component_MazPhoneNumberInput, {
        label: "Telephone",
        "country-locale": "fr-FR",
        success: false,
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
        translations: {
          countrySelector: {
            placeholder: "Code pays",
            error: "Choisissez un pays",
            searchPlaceholder: "Rechercher un pays"
          },
          phoneInput: {
            placeholder: "Numéro de téléphone",
            example: "Exemple :"
          }
        }
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.phone
      }, null, _parent));
      _push(`</div><div class="mt-4" data-v-05548b3e>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Email",
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        color: "#9acd32"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4" data-v-05548b3e>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Mot de passe",
        type: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        "data-popover-target": "popover-password",
        "data-popover-placement": "bottom",
        color: "#9acd32"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="mt-4" data-v-05548b3e>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Mot de passe Confirmer",
        type: "password",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        required: "",
        color: "#9acd32"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div><div class="mt-4" data-v-05548b3e>`);
      _push(ssrRenderComponent(_component_MazInput, {
        label: "Code de parrainage (facultatif)",
        type: "text",
        modelValue: unref(form).referral_code,
        "onUpdate:modelValue": ($event) => unref(form).referral_code = $event,
        color: "#9acd32"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.referral_code
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
        _push(`<div class="mt-4" data-v-05548b3e>`);
        _push(ssrRenderComponent(_sfc_main$2, { for: "terms" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center" data-v-05548b3e${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                id: "terms",
                checked: unref(form).terms,
                "onUpdate:checked": ($event) => unref(form).terms = $event,
                name: "terms",
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`<div class="ml-2" data-v-05548b3e${_scopeId}> j&#39;accepte <a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="text-sm text-gray-600 underline rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-v-05548b3e${_scopeId}>Conditions d&#39;utilisation</a> et <a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="text-sm text-gray-600 underline rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-v-05548b3e${_scopeId}>Politique de confidentialité</a></div></div>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                class: "mt-2",
                message: unref(form).errors.terms
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_sfc_main$3, {
                    id: "terms",
                    checked: unref(form).terms,
                    "onUpdate:checked": ($event) => unref(form).terms = $event,
                    name: "terms",
                    required: ""
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("div", { class: "ml-2" }, [
                    createTextVNode(" j'accepte "),
                    createVNode("a", {
                      target: "_blank",
                      href: _ctx.route("terms.show"),
                      class: "text-sm text-gray-600 underline rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, "Conditions d'utilisation", 8, ["href"]),
                    createTextVNode(" et "),
                    createVNode("a", {
                      target: "_blank",
                      href: _ctx.route("policy.show"),
                      class: "text-sm text-gray-600 underline rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, "Politique de confidentialité", 8, ["href"])
                  ])
                ]),
                createVNode(_sfc_main$1, {
                  class: "mt-2",
                  message: unref(form).errors.terms
                }, null, 8, ["message"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-center" data-v-05548b3e><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-05548b3e><span data-v-05548b3e>Inscription</span></button></div><p class="mt-4 mb-0 text-sm leading-normal" data-v-05548b3e>Vous avez deja un compte ? `);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "relative z-10 font-semibold text-transparent bg-gradient-to-tl from-orange-600 to-orange-400 bg-clip-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Connectez vous `);
          } else {
            return [
              createTextVNode("Connectez vous ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></form></div></div></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_FooterGuest, null, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05548b3e"]]);
export {
  Register as default
};

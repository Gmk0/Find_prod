import { resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-726137d3.js";
import { _ as _sfc_main$2 } from "./BreadCumbWeb-866446df.js";
import { useForm } from "@inertiajs/vue3";
import "@vueuse/core";
import "./NotificationComponent-1408ac1b.js";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MazInput = resolveComponent("MazInput");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-20 mx-auto font-bega-light max-w-7xl lg:px-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, { link1: "Contact" }, null, _parent));
      _push(`<section class="relative overflow-hidden pt-8 pb-12 lg:pb-[90px]"><div class="container px-4 mx-auto"><div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600"> Contact </span><h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"></h2><p class="text-base font-bega-medium"> Besoin de plus d&#39;information contacter nous </p></div></div></div><div class="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-2"><div class="grid grid-cols-1 gap-8 p-4 bg-white rounded-lg dark:bg-gray-800 md:grid-cols-2"><div><span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></span><h2 class="mt-4 text-base text-gray-800 font-bega-medium dark:text-white">Email</h2><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Notre équipe amicale est ici pour vous aide</p><p class="mt-2 text-sm text-blue-500 dark:text-blue-400">support@find-freelance.com</p></div><div><span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg></span><h2 class="mt-4 text-base text-gray-800 font-bega-medium dark:text-white">Live chat</h2><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p><p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p></div><div><span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg></span><h2 class="mt-4 text-base text-gray-800 font-bega-medium dark:text-white">Office</h2><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Venez dire bonjour à notre siège social.</p><p class="mt-2 text-sm text-blue-500 dark:text-blue-400">63,avenue Colonel Mondjiba , Kinshasa-RDC AU </p></div><div><span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg></span><h2 class="mt-4 text-base text-gray-800 font-bega-medium dark:text-white">Phone</h2><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Du lundi au Samedi de 8h à 20h.</p><p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+243 8447-20350</p></div></div><div class="p-4 py-6 bg-white rounded-lg dark:bg-gray-800 md:p-8"><div><form><div class="mt-4">`);
      _push(ssrRenderComponent(_component_MazInput, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        label: "Name"
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_MazInput, {
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        label: "e-mail"
      }, null, _parent));
      _push(`</div><div class="w-full mt-4"><textarea id="message" placeholder="Exigences pour la mission" rows="4" class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500">${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="block mt-4 w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"> Envoyer </button></form></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

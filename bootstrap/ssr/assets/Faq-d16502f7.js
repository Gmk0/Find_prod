import { ref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-726137d3.js";
import { _ as _sfc_main$2 } from "./BreadCumbWeb-866446df.js";
import "@inertiajs/vue3";
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
  __name: "Faq",
  __ssrInlineRender: true,
  props: {
    faqs: Array
  },
  setup(__props) {
    const expandedItems = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Collapse = resolveComponent("Collapse");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-20 mx-auto max-w-7xl lg:px-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, { link1: "Faq" }, null, _parent));
      _push(`<section class="relative overflow-hidden pt-8 pb-12 lg:pb-[90px]"><div class="container px-4 mx-auto"><div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600"> FAQ </span><h2 class="mb-4 text-3xl font-bega-medium text-dark sm:text-4xl md:text-[40px]"> Des questions ? Regardez ici ! </h2><p class="text-base text-body-color"> Réponses aux questions fréquemment posées : Tout ce que vous devez savoir ! </p></div></div></div><div class="flex flex-wrap -mx-4"><div class="grid w-full gap-4 px-4 md:grid-cols-2"><!--[-->`);
      ssrRenderList(__props.faqs, (faq) => {
        _push(`<div class="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8"><button class="flex w-full text-left faq-btn"><div class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-amber-600 bg-opacity-5 text-amber-600"><svg style="${ssrRenderStyle(!expandedItems.value.includes(faq.id) ? null : { display: "none" })}" class="fill-current" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"></path></svg><svg style="${ssrRenderStyle(expandedItems.value.includes(faq.id) ? null : { display: "none" })}" class="fill-current" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"></path></svg></div><div class="w-full"><h4 class="text-lg font-semibold text-gray-800 dark:text-gray-100">${ssrInterpolate(faq.questions)}</h4></div></button>`);
        _push(ssrRenderComponent(_component_Collapse, {
          when: expandedItems.value.includes(faq.id),
          class: "faq-content pl-[62px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="py-3 text-base leading-relaxed text-body-color" x-text="faq.answer"${_scopeId}>${ssrInterpolate(faq.reponses)}</p>`);
            } else {
              return [
                createVNode("p", {
                  class: "py-3 text-base leading-relaxed text-body-color",
                  "x-text": "faq.answer"
                }, toDisplayString(faq.reponses), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="absolute bottom-0 right-0 z-[-1]"><svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="1308.65" y1="1142.58" x2="602.827" y2="-418.681" gradientUnits="userSpaceOnUse"><stop stop-color="#3056D3" stop-opacity="0.36"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144"></stop></linearGradient></defs></svg></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

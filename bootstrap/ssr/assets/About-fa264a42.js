import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-1fc7bd97.js";
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
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-20 mx-auto max-w-7xl lg:px-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, { link1: "A propos" }, null, _parent));
      _push(`<section class="relative overflow-hidden pt-8 pb-12 lg:pb-[90px]"><div class="container px-4 mx-auto"><div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600"> À Propos de FIND </span><h2 class="mb-4 text-xl font-bega-medium text-dark sm:text-4xl md:text-[40px]"> Trouvez le meilleur talent pour votre projet </h2></div></div></div><div class="flex flex-wrap -mx-4"><p class="max-w-2xl mt-4 text-lg text-findDark-500 dark:text-findDark-200 lg:mx-auto"> FIND est une plateforme qui met en relation des freelances qualifiés avec des clients à la recherche de compétences spécifiques pour leurs projets. Que vous ayez besoin d&#39;un développeur, d&#39;un designer, d&#39;un responsable financier ou d&#39;un autre professionnel, nous avons les talents qu&#39;il vous faut pour mener à bien votre projet. </p></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./WebLayout-726137d3.js";
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
  __name: "TermsOfService",
  __ssrInlineRender: true,
  props: {
    terms: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Terms of Service" }, null, _parent));
      _push(`<div class="pt-16 font-sans antialiased text-gray-900"><div class="pt-4 bg-gray-100"><div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0"><div class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg">${__props.terms}</div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

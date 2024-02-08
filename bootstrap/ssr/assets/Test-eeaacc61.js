import { ref, onMounted, onBeforeUnmount, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-726137d3.js";
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
const Test_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Test",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    ref("333333");
    useForm({
      message: ""
    });
    ref("home");
    const filtres = ref(false);
    const isMobile = ref(false);
    const handleResize = () => {
      if (window.innerWidth <= 768)
        filtres.value = false;
    };
    onMounted(() => {
      isMobile.value = window.innerWidth <= 768;
      window.addEventListener("resize", handleResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen px-6 py-16 font-bega-light" }, _attrs))}><form class="flex items-center justify-center mt-16"><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Test/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

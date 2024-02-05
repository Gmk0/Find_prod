import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import "./ServiceCard-57531902.js";
import { _ as _sfc_main$1 } from "./WebLayout-9b20c3c4.js";
import "@inertiajs/vue3";
import "swiper/vue";
import "swiper/modules";
import "./NotificationComponent-c4834522.js";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
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
  __name: "GiftUser",
  __ssrInlineRender: true,
  props: {
    services: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardGift = resolveComponent("CardGift");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 min-h-screen py-20" }, _attrs))}><div class="container mx-auto"><div class="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md text-center"><h2 class="text-3xl font-semibold text-[#F47521] mb-6">Félicitations ! ​🥳​🥳​</h2><p class="text-gray-600 mb-8 text-lg">Vous avez parrainé avec succès 10 personnes. Nous vous remercions pour votre soutien et votre engagement. ​❤️​</p><p class="text-gray-600 text-lg mb-8">Pour célébrer cet accomplissement, veuillez choisir votre cadeau parmi les options ci-dessous :</p><div class="grid lg:grid-cols-3 gap-6 space-x-4"><!--[-->`);
      ssrRenderList(props.services.data, (service) => {
        _push(ssrRenderComponent(_component_CardGift, { service }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Profile/GiftUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

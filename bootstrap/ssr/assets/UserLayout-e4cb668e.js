import { useSSRContext, onMounted, resolveComponent, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { a as useCategoryStore, g as useParrainage, u as useLayoutStore, h as useNotification } from "./NotificationComponent-fe8292d8.js";
import { M as MainSidebarUser, _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./OtherPanelUser-f188b63f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><footer class="px-4 py-6 md:flex md:items-center md:justify-between 2xl:px-0 md:py-10"><p class="mb-4 text-sm text-center text-gray-500 md:mb-0"><a href="" class="hover:underline" target="_blank">FIND</a>. All rights reserved. </p><ul class="flex flex-wrap justify-center s-center"><li><a href="{{url(&#39;/terms-of-service&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms</a></li><li><a href="{{url(&#39;/privacy-policy&#39;)}}" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Policy</a></li><li><a href="{{url(&#39;/contact&#39;)}}" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li></ul></footer></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "UserLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const categoryStore = useCategoryStore();
    useParrainage();
    const layoutStore = useLayoutStore();
    const notification = useNotification();
    onMounted(() => {
      categoryStore.fetchCategories();
      notification.fetchLastNotification();
      notification.getNotificationParametres();
    });
    function resize() {
      if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();
      }
    }
    resize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Error = resolveComponent("Error");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["font-bega-light", { "is-sidebar-open": unref(layoutStore).SidebarExpanded }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`<div id="root" class="flex min-h-[100vh] grow bg-slate-50 dark:bg-findDark-950"><div class="sidebar">`);
      _push(ssrRenderComponent(MainSidebarUser, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="main-content pt-4 w-full px-[var(--margin-x)] pb-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/UserLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

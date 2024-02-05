import { useSSRContext, ref, resolveComponent, mergeProps } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./UserLayout-9ca6fa30.js";
import { S as SectionBorder } from "./SectionBorder-50fdc36f.js";
import _sfc_main$4 from "./UpdateProfileInformationForm-ecb77301.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$3 } from "./ProfileSetting-c0ca6773.js";
import "./NotificationComponent-c4834522.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-50d0f569.js";
import "flowbite";
import "./ActionMessage-c43f20d9.js";
import "./FormSection-08117000.js";
import "./SectionTitle-021c14f5.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "./PrimaryButton-d4e5ebf1.js";
import "./SecondaryButton-a67db6fc.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  if (_ctx.$page.props.flash.message) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div id="alert-additional-content-3" class="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert"><div class="flex items-center"><svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path></svg><span class="sr-only">Message</span><h3 class="text-lg font-medium">Message</h3></div><div class="mt-2 mb-4 text-sm font-bega-light">${ssrInterpolate(_ctx.$page.props.flash.message)}</div><div class="flex"><button type="button" class="text-white hidden bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14"><path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"></path></svg> View more </button><button type="button" class="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:text-green-400 dark:hover:text-white dark:focus:ring-green-800" data-dismiss-target="#alert-additional-content-3" aria-label="Close"> Fermer </button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Info.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Info = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array
  },
  setup(__props) {
    const activeTab = ref("AccountP");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadUser = resolveComponent("BreadUser");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(Info, null, null, _parent));
      _push(ssrRenderComponent(_component_BreadUser, {
        title: "Profile",
        first_title: "Profile",
        first_url: _ctx.route("profile.show")
      }, null, _parent));
      _push(`<div><div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div style="${ssrRenderStyle(activeTab.value === "AccountP" ? null : { display: "none" })}" class="col-span-12 lg:col-span-8">`);
      if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$4, {
          user: _ctx.$page.props.auth.user
        }, null, _parent));
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (activeTab.value === "Security") {
        _push(`<div x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

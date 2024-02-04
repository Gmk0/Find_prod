import { ref, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-b6ab4ba7.js";
import { S as SectionBorder } from "./SectionBorder-50fdc36f.js";
import _sfc_main$3 from "./UpdateProfileInformationForm-97b730d1.js";
import { _ as _sfc_main$2 } from "./ProfileSetting-c0ca6773.js";
import "./NotificationComponent-a50edf8a.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-24c4f26b.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./ActionMessage-c43f20d9.js";
import "./FormSection-08117000.js";
import "./SectionTitle-021c14f5.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "./PrimaryButton-b82fb16e.js";
import "./SecondaryButton-0974b11b.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
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
      _push(ssrRenderComponent(_component_BreadUser, {
        title: "Profile",
        first_title: "Profile",
        first_url: _ctx.route("profile.show")
      }, null, _parent));
      _push(`<div><div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div style="${ssrRenderStyle(activeTab.value === "AccountP" ? null : { display: "none" })}" class="col-span-12 lg:col-span-8">`);
      if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
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

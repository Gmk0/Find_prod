import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./ProfileSetting-c0ca6773.js";
import { _ as _sfc_main$1 } from "./UserLayout-e218b838.js";
import _sfc_main$3 from "./UpdatePasswordForm-4ce070f1.js";
import "./DeleteUserForm-7322f5b7.js";
import _sfc_main$4 from "./LogoutOtherBrowserSessionsForm-0923a491.js";
import { useToast } from "maz-ui";
import "@inertiajs/vue3";
import "./NotificationComponent-fe8292d8.js";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-0bd0f449.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./ActionMessage-c43f20d9.js";
import "./FormSection-08117000.js";
import "./SectionTitle-021c14f5.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "./PrimaryButton-b82fb16e.js";
import "./DialogModal-7451f4e9.js";
import "./DangerButton-5ac62031.js";
import "./SecondaryButton-0974b11b.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Security",
  __ssrInlineRender: true,
  props: ["sessions"],
  setup(__props) {
    useToast();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadUser = resolveComponent("BreadUser");
      const _component_SectionBorder = resolveComponent("SectionBorder");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadUser, {
        title: "Securite",
        first_title: "Profile",
        first_url: _ctx.route("profile.show"),
        second_title: "Securite"
      }, null, _parent));
      _push(`<div><div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="col-span-12 lg:col-span-8">`);
      if (_ctx.$page.props.jetstream.canUpdatePassword) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, { class: "mt-10 sm:mt-0" }, null, _parent));
        _push(ssrRenderComponent(_component_SectionBorder, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-span-12 mt-4 lg:col-span-8">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        sessions: __props.sessions,
        class: "mt-10 sm:mt-0"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Profile/Security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

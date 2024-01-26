import { ref, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-e218b838.js";
import "./DeleteUserForm-7322f5b7.js";
import "./LogoutOtherBrowserSessionsForm-0923a491.js";
import { S as SectionBorder } from "./SectionBorder-50fdc36f.js";
import "./TwoFactorAuthenticationForm-1c45115d.js";
import _sfc_main$3 from "./UpdatePasswordForm-4ce070f1.js";
import _sfc_main$2 from "./UpdateProfileInformationForm-97b730d1.js";
import "./NotificationComponent-fe8292d8.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-0bd0f449.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./DialogModal-7451f4e9.js";
import "./SectionTitle-021c14f5.js";
import "./DangerButton-5ac62031.js";
import "./TextInput-14bc0530.js";
import "./SecondaryButton-0974b11b.js";
import "./ActionMessage-c43f20d9.js";
import "./PrimaryButton-b82fb16e.js";
import "./InputLabel-d47442f5.js";
import "./FormSection-08117000.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Profile",
  __ssrInlineRender: true,
  props: ["sessions"],
  setup(__props) {
    const activeTab = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("user.dashboard"),
        class: "inline-flex items-center text-sm text-gray-700 font-bega-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Dashboard `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mr-2.5",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" })
              ])),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm text-gray-500 font-bega-medium md:ml-2 dark:text-gray-400">Profile</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Profile</h1></div><div><div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"><div class="col-span-12 lg:col-span-4"><div style="${ssrRenderStyle({ "top": "8rem" })}" class="sticky p-4 bg-white rounded-[25px] dark:bg-gray-800 sm:p-5"><div class="flex items-center space-x-4"><div class="avatar h-14 w-14">`);
      if (_ctx.$page.props.auth.user.profile_photo_path != null) {
        _push(`<img class="object-cover rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)} alt="">`);
      } else {
        _push(`<img class="rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)} alt="">`);
      }
      _push(`</div><div><h3 class="text-base font-bega-medium text-slate-700 dark:text-navy-100">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</h3></div></div><ul class="mt-6 space-y-1.5 font-inter font-bega-medium"><li><a class="${ssrRenderClass([activeTab.value === "AccountP" ? "border-amber-600 border-b" : "hover:bg-slate-100 hover:text-slate-800 text-gray-700 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "AccountP" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="${ssrRenderClass(activeTab.value === "AccountP" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}">Comptes Utilisateur</span></a></li><li><a class="${ssrRenderClass([activeTab.value === "Notification" ? "border-amber-600 border-b text-slate-800 " : "hover:bg-slate-100  hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "Notification" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg><span class="${ssrRenderClass(activeTab.value === "Notification" ? "dark:text-white text-slate-800" : "text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}">Notification</span></a></li><li><a class="${ssrRenderClass([activeTab.value === "Security" ? "border-amber-600 border-b" : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "Security" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg><span class="${ssrRenderClass(activeTab.value === "Security" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}">Security</span></a></li><li><a class="${ssrRenderClass([activeTab.value === "Privacy" ? "border-amber-600 border-b" : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "Privacy" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg><span class="${ssrRenderClass(activeTab.value === "Privacy" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}"> Activites </span></a></li></ul></div></div><div style="${ssrRenderStyle(activeTab.value === "AccountP" ? null : { display: "none" })}" x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">`);
      if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          user: _ctx.$page.props.auth.user
        }, null, _parent));
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div style="${ssrRenderStyle(activeTab.value === "Security" ? null : { display: "none" })}" x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">`);
      if (_ctx.$page.props.jetstream.canUpdatePassword) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, { class: "mt-10 sm:mt-0" }, null, _parent));
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
        _push(`<div>`);
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.sessions)}</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Profile/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

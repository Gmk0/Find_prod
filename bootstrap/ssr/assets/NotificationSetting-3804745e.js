import { computed, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./ProfileSetting-c0ca6773.js";
import { _ as _sfc_main$1 } from "./UserLayout-9ca6fa30.js";
import { useToast } from "maz-ui";
import "@inertiajs/vue3";
import { h as useNotification } from "./NotificationComponent-c4834522.js";
import "./OtherPanelUser-50d0f569.js";
import "vue3-popper";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "pinia";
import "axios";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "NotificationSetting",
  __ssrInlineRender: true,
  props: {
    notification: Object
  },
  setup(__props) {
    useToast();
    const props = __props;
    useNotification();
    const userParamaitres = computed(() => props.notification);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadUser = resolveComponent("BreadUser");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadUser, {
        title: "Notification",
        first_title: "Profile",
        first_url: _ctx.route("profile.show"),
        second_title: "Notification"
      }, null, _parent));
      _push(`<div><div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="col-span-12 lg:col-span-8"><div class="md:grid md:grid-cols-1 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg text-findDark-900 font-bega-medium dark:text-findDark-50"> Paramètres de notifications </h3><p class="mt-1 text-sm text-findDark-600 dark:text-findDark-100"> Restez informé(e) sur les dernières opportunités! Personnalisez vos notifications et profitez d&#39;avantages exclusifs en mettant à jour votre profil. </p></div></div><div class="mt-5 rounded-md md:mt-0 md:col-span-2"><div class="p-4 space-y-4 bg-white dark:bg-findDark-900"><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.push_notifications_enabled) ? ssrLooseContain(userParamaitres.value.push_notifications_enabled, null) : userParamaitres.value.push_notifications_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir des notifications par push</span></label></div></div><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.email_notifications_enabled) ? ssrLooseContain(userParamaitres.value.email_notifications_enabled, null) : userParamaitres.value.email_notifications_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir des notifications par email </span></label></div></div><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.number_notifications_enabled) ? ssrLooseContain(userParamaitres.value.number_notifications_enabled, null) : userParamaitres.value.number_notifications_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir des notifications par telephone </span></label></div></div><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.send_invoice_enabled) ? ssrLooseContain(userParamaitres.value.send_invoice_enabled, null) : userParamaitres.value.send_invoice_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-findDark-200 rounded-full peer dark:bg-findDark-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-findDark-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-findDark-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm text-findDark-400 font-bega-medium dark:text-findDark-500">Recevoir les facture par telephone </span></label></div></div></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Profile/NotificationSetting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

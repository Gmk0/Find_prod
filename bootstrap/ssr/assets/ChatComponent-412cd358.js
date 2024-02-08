import { ref, resolveDirective, unref, withCtx, createVNode, mergeProps, openBlock, createBlock, toDisplayString, withModifiers, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$3, B as BodyMessage } from "./BodyMessage-8c732849.js";
import Popper from "vue3-popper";
import { Link, router, usePage } from "@inertiajs/vue3";
import { u as useLayoutStore } from "./NotificationComponent-1408ac1b.js";
import "./OtherPanelUser-4d65415a.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "flowbite";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
import "pinia";
const _sfc_main$2 = {
  __name: "MainSidebarF",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(null);
    ref("");
    ref(null);
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="main-sidebar"><div class="flex flex-col items-center w-full h-full bg-white border-r border-slate-150 dark:border-navy-700 dark:bg-findDark-900"><div class="flex pt-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-10 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" src="/images/logo/find_01.png" alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-10 transition-transform duration-500 ease-in-out hover:rotate-[360deg]",
                src: "/images/logo/find_01.png",
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col pt-6 space-y-4 overflow-y-auto is-scrollbar-hidden grow"><a${ssrRenderAttrs(mergeProps({
        href: "/freelance-gestion",
        class: [_ctx.$page.component.startsWith("Freelance/Dashboard") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Dashboard", void 0, { right: true })))}><svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity=".3" d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"></path><path fill="currentColor" d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"></path><path fill="currentColor" d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"></path><path fill="currentColor" d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"></path></svg></a><a${ssrRenderAttrs(mergeProps({
        href: "/freelance-gestion/services",
        class: [_ctx.$page.component.startsWith("Freelance/Service") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Services", void 0, { right: true })))}><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></a><a${ssrRenderAttrs(mergeProps({
        href: "/freelance-gestion/orders",
        class: [_ctx.$page.component.startsWith("Freelance/Commande") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Commande freelance", void 0, { right: true })))}><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></a><a${ssrRenderAttrs(mergeProps({
        href: "/freelance-gestion/orders",
        class: [_ctx.$page.component.startsWith("Freelance/Paiement") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Paiment", void 0, { right: true })))}><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a><a${ssrRenderAttrs(mergeProps({
        href: "/freelance-gestion/missions",
        class: [_ctx.$page.component.startsWith("Freelance/Mission") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Mission", void 0, { right: true })))}><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg></a><a${ssrRenderAttrs(mergeProps({
        href: "/freelance-gestion/transactions",
        class: [_ctx.$page.component.startsWith("Freelance/Transaction") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Transaction", void 0, { right: true })))}><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg></a>`);
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("freelance.chat"),
        class: [_ctx.$page.component.startsWith("Freelance/Chat") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Message", void 0, { right: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-7 h-7",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col items-center py-3 space-y-3"><div class="">`);
      _push(ssrRenderComponent(unref(Popper), { placement: "right" }, {
        content: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bottom-0 left-20"${_scopeId}><div class="w-64 bg-white border rounded-lg popper-box border-slate-150 shadow-soft dark:border-navy-600 dark:bg-navy-700"${_scopeId}><div class="flex items-center px-4 py-5 space-x-4 rounded-t-lg bg-slate-100 dark:bg-navy-800"${_scopeId}><div class="avatar h-14 w-14"${_scopeId}><img class="object-cover rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)} alt=""${_scopeId}></div><div${_scopeId}><a href="#" class="text-base font-medium text-slate-700 hover:text-amber-600 focus:text-amber-600 dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</a><p class="text-xs text-slate-400 dark:text-navy-300"${_scopeId}></p></div></div><div class="flex flex-col pt-2 pb-5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-warning"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId2}></path></svg></div><div${_scopeId2}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId2}> Profile </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId2}> Paramètre de votre profil </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-warning" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4.5 w-4.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        })
                      ]))
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Profile "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètre de votre profil ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-info"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"${_scopeId2}></path></svg></div><div${_scopeId2}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId2}> Messages </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId2}> Vos messages </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-info" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4.5 w-4.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        })
                      ]))
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Messages "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Vos messages ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-error"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId2}></path></svg></div><div${_scopeId2}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId2}> Activité </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId2}> Votre activité et événements </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-error" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4.5 w-4.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        })
                      ]))
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Activité "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Votre activité et événements ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-success"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId2}></path></svg></div><div${_scopeId2}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId2}> Paramètres </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId2}> Paramètres de l&#39;application Web </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-success" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4.5 w-4.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        }),
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        })
                      ]))
                    ]),
                    createVNode("div", null, [
                      createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Paramètres "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètres de l'application Web ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="px-4 mt-3"${_scopeId}><form${_scopeId}><button type="submit" class="flex items-center justify-center w-full px-6 py-3 space-x-2 text-center text-white rounded-lg btn bg-skin-fill hover:bg-amber-600 focus:bg-amber-600-focus active:bg-amber-600-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"${_scopeId}></path></svg><span${_scopeId}>Deconnexion</span></button></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bottom-0 left-20" }, [
                createVNode("div", { class: "w-64 bg-white border rounded-lg popper-box border-slate-150 shadow-soft dark:border-navy-600 dark:bg-navy-700" }, [
                  createVNode("div", { class: "flex items-center px-4 py-5 space-x-4 rounded-t-lg bg-slate-100 dark:bg-navy-800" }, [
                    createVNode("div", { class: "avatar h-14 w-14" }, [
                      createVNode("img", {
                        class: "object-cover rounded-full",
                        src: "/storage/" + _ctx.$page.props.auth.user.profile_photo_path,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", null, [
                      createVNode("a", {
                        href: "#",
                        class: "text-base font-medium text-slate-700 hover:text-amber-600 focus:text-amber-600 dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                      }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
                      createVNode("p", { class: "text-xs text-slate-400 dark:text-navy-300" })
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col pt-2 pb-5" }, [
                    createVNode(unref(Link), {
                      href: "/",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-warning" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4.5 w-4.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            })
                          ]))
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Profile "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètre de votre profil ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      href: "/",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-info" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4.5 w-4.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            })
                          ]))
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Messages "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Vos messages ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      href: "/",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-error" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4.5 w-4.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            })
                          ]))
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Activité "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Votre activité et événements ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      href: "/",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-success" }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-4.5 w-4.5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "2"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            }),
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            })
                          ]))
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Paramètres "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètres de l'application Web ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-4 mt-3" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(logout, ["prevent"])
                      }, [
                        createVNode("button", {
                          type: "submit",
                          class: "flex items-center justify-center w-full px-6 py-3 space-x-2 text-center text-white rounded-lg btn bg-skin-fill hover:bg-amber-600 focus:bg-amber-600-focus active:bg-amber-600-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                        }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "w-5 h-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "1.5",
                              d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            })
                          ])),
                          createVNode("span", null, "Deconnexion")
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="w-12 h-12 avatar"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.profile_photo_path != null) {
              _push2(`<img class="object-cover rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}>`);
            } else {
              _push2(`<img class="object-cover rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}>`);
            }
            _push2(`<span class="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", { class: "w-12 h-12 avatar" }, [
                _ctx.$page.props.auth.user.profile_photo_path != null ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "object-cover rounded-full",
                  src: "/storage/" + _ctx.$page.props.auth.user.profile_photo_path,
                  alt: _ctx.$page.props.auth.user.name
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  class: "object-cover rounded-full",
                  src: _ctx.$page.props.auth.user.profile_photo_url,
                  alt: _ctx.$page.props.auth.user.name
                }, null, 8, ["src", "alt"])),
                createVNode("span", { class: "absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/MainSidebarF.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ChatFreelance",
  __ssrInlineRender: true,
  props: {
    Conversations: Array
  },
  setup(__props) {
    useLayoutStore();
    const page = usePage();
    const props = __props;
    window.Echo.private(`chat.${page.props.auth.user.id}`).listen("MessageSent", (e) => {
      const index = props.Conversations.data.findIndex((conv) => conv.id === e.conversation.id);
      if (index !== -1) {
        props.Conversations.data.splice(index, 1, e.conversation);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Photo = resolveComponent("Photo");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="sidebar-panel"><div class="flex h-full pt-6 grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-findDark-900"><div class="flex items-center justify-between w-full pl-4 pr-1 h-18"><div class="flex items-center"><div class="hidden mr-3 avatar h-9 w-9 lg:flex"><div class="rounded-full is-initial bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div></div><p class="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100"> Chat Freelance </p></div><button class="p-0 rounded-full btn2 h-7 w-7 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button></div><div class="flex h-[calc(100%-4.5rem)] grow flex-col"><div><div class="flex items-center justify-between px-4"><span class="text-xs+ font-medium uppercase"></span><div class="-mr-1.5 flex"><button class="hidden w-6 h-6 p-0 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg></button></div></div></div><div class="flex px-4 pt-4"><label class="relative mr-1.5 flex"><input wire:model="query" class="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs+ ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900" placeholder="Search chats" type="text"><span class="absolute flex items-center justify-center w-10 h-full pointer-events-none text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24"><path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"></path></svg></span></label><button class="hidden w-8 h-8 p-0 -mr-2 rounded-full btn2 shrink-0 text-slate-500 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22 6.5h-9.5M6 6.5H2M9 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 17.5h-6M9.5 17.5H2M13 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path></svg></button></div><div class="flex flex-col mt-3 overflow-y-auto is-scrollbar-hidden grow">`);
      if (props.Conversations.data != null) {
        _push(`<div><!--[-->`);
        ssrRenderList(props.Conversations.data, (user) => {
          var _a;
          _push(`<div class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"><div class="w-10 h-10 avatar">`);
          _push(ssrRenderComponent(_component_Photo, {
            user: user.user
          }, null, _parent));
          _push(`<div class="absolute right-0 w-3 h-3 border-2 border-white rounded-full dark:border-navy-700"></div></div><div class="flex flex-col flex-1"><div class="flex items-baseline justify-between space-x-1.5"><p class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100">${ssrInterpolate(user.user.name)}</p><span class="text-tiny+ text-slate-400 dark:text-navy-300">2032</span></div><div class="flex items-center justify-between mt-1 space-x-1"><p class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300">${ssrInterpolate((_a = user.message) == null ? void 0 : _a.body)}</p>`);
          if (user.messagesNonLue != 0) {
            _push(`<div class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white">${ssrInterpolate(user.messagesNonLue)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="flex items-center gap-1 px-2.5 mt-6 text-sm"><span>pas de conversations trouver Rechercher </span></div>`);
      }
      _push(`</div><div class="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600"><a href="#" x-tooltip="&#39;All Chats&#39;" class="p-0 rounded-full btn2 h-9 w-9 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg></a><a href="#" x-tooltip="&#39;freelances&#39;" class="hidden p-0 rounded-full btn2 h-9 w-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></a></div></div></div></div><div class="sidebar-panel-min"><div class="flex flex-col h-full pt-6 bg-white dark:bg-findDark-900"><div class="flex items-center justify-center h-18 shrink-0"><div class="flex w-10 h-10 avatar"><div class="rounded-full is-initial bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg></div></div></div><div class="flex h-[calc(100%-4.5rem)] grow flex-col"><div class="flex flex-col overflow-y-auto is-scrollbar-hidden grow"><ul class="flex flex-col items-center justify-center mt-2 space-y-1"><li><a href="#" class="w-6 h-6 p-0 btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></a></li><li><a href="#" class="w-6 h-6 p-0 btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></a></li></ul><div class="h-px mx-4 my-4 shrink-0 bg-slate-200 dark:bg-navy-500"></div><div class="flex flex-col"><!--[-->`);
      ssrRenderList(props.Conversations.data, (user) => {
        _push(`<div class="px-2"><button class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"><div${ssrRenderAttrs(mergeProps({ class: "w-10 h-10 avatar" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, user.user.name, void 0, { right: true })))}>`);
        _push(ssrRenderComponent(_component_Photo, {
          user: user.user
        }, null, _parent));
        _push(`</div></button></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ChatFreelance.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$3
}, {
  __name: "ChatComponent",
  __ssrInlineRender: true,
  props: {
    conversations: Array,
    messages: Array,
    chat: Object,
    user: Object
  },
  setup(__props) {
    const page = usePage();
    const props = __props;
    window.Echo.private(`chat.${page.props.auth.user.id}`).listen("MessageSent", (e) => {
      props.messages.push(e.message);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex overflow-hidden min-h-[100vh ]grow dark:bg-navy-900" }, _attrs))}><div class="overflow-hidden"><div class="sidebar print:hidden">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        Conversations: props.conversations
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(BodyMessage, {
        messages: props.messages,
        chatId: (_a = props.chat) == null ? void 0 : _a.id,
        user: props.user
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Chat/ChatComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

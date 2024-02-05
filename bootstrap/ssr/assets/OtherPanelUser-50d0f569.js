import { ref, resolveDirective, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, withModifiers, useSSRContext, resolveComponent, computed, onMounted } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import Popper from "vue3-popper";
import { u as useLayoutStore, _ as _sfc_main$4, b as _sfc_main$5, c as useSidebarPanelUser } from "./NotificationComponent-c4834522.js";
import { Link, router, usePage } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { useDark, useToggle } from "@vueuse/core";
const MainSidebarUser_vue_vue_type_style_index_0_scoped_4798a2b3_lang = "";
const _sfc_main$3 = {
  __name: "MainSidebarUser",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(null);
    ref("");
    ref(null);
    const logout = () => {
      router.post(route("logout"));
    };
    const LayoutStore = useLayoutStore();
    const toogleRightExpande = () => {
      if (LayoutStore.SidebarExpanded) {
        document.body.classList.add("is-sidebar-open");
      } else {
        document.body.classList.remove("is-sidebar-open");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-sidebar" }, _attrs))} data-v-4798a2b3><div class="flex flex-col items-center w-full h-full bg-white border-r dark:bg-findDark-900 border-slate-200 dark:border-navy-700" data-v-4798a2b3><div class="flex pt-4" data-v-4798a2b3>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-10 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" src="/images/logo/find_01.png" lazy alt="logo" data-v-4798a2b3${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-10 transition-transform duration-500 ease-in-out hover:rotate-[360deg]",
                src: "/images/logo/find_01.png",
                lazy: "",
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col pt-6 space-y-4 overflow-y-auto is-scrollbar-hidden grow" data-v-4798a2b3>`);
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("user.dashboard"),
        onClick: ($event) => toogleRightExpande(),
        class: [_ctx.$page.component.startsWith("User/Dashboard") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Dashboard", void 0, { right: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-4798a2b3${_scopeId}><path fill="currentColor" fill-opacity=".3" d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z" data-v-4798a2b3${_scopeId}></path><path fill="currentColor" d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z" data-v-4798a2b3${_scopeId}></path><path fill="currentColor" d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z" data-v-4798a2b3${_scopeId}></path><path fill="currentColor" d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" data-v-4798a2b3${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-7 w-7",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  "fill-opacity": ".3",
                  d: "M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
                }),
                createVNode("path", {
                  fill: "currentColor",
                  d: "M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
                }),
                createVNode("path", {
                  fill: "currentColor",
                  d: "M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
                }),
                createVNode("path", {
                  fill: "currentColor",
                  d: "M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("user.commandes"),
        onClick: ($event) => toogleRightExpande(),
        class: [_ctx.$page.component.startsWith("User/Commande") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Commande", void 0, { right: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-4798a2b3${_scopeId}></path></svg>`);
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
                  d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: "",
        class: [_ctx.$page.component.startsWith("User/Paiement") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "items-center justify-center hidden transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Paiment", void 0, { right: true })))} data-v-4798a2b3><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-4798a2b3></path></svg></a>`);
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("user.missions"),
        class: [_ctx.$page.component.startsWith("User/Mission") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Mission", void 0, { right: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" data-v-4798a2b3${_scopeId}></path></svg>`);
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
                  d: "M4 6h16M4 10h16M4 14h16M4 18h16"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("user.transactions"),
        class: [_ctx.$page.component.startsWith("User/Transaction") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Transaction", void 0, { right: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" data-v-4798a2b3${_scopeId}></path></svg>`);
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
                  d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("user.chat"),
        class: [_ctx.$page.component.startsWith("User/Chat") ? "text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90" : "hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25", "flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"]
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Message", void 0, { right: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-v-4798a2b3${_scopeId}></path></svg>`);
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
      _push(`</div><div class="flex flex-col items-center py-3 space-y-3" data-v-4798a2b3><div class="" data-v-4798a2b3>`);
      _push(ssrRenderComponent(unref(Popper), { placement: "right" }, {
        content: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bottom-0 left-20" data-v-4798a2b3${_scopeId}><div class="w-64 bg-white border rounded-lg popper-box border-slate-150 shadow-soft dark:border-navy-600 dark:bg-navy-700" data-v-4798a2b3${_scopeId}><div class="flex items-center px-4 py-5 space-x-4 rounded-t-lg bg-slate-100 dark:bg-navy-800" data-v-4798a2b3${_scopeId}><div class="avatar h-14 w-14" data-v-4798a2b3${_scopeId}><img class="object-cover rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)} alt="" data-v-4798a2b3${_scopeId}></div><div data-v-4798a2b3${_scopeId}><a href="#" class="text-base font-bega-medium text-slate-700 hover:text-amber-600 focus:text-amber-600 dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light" data-v-4798a2b3${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</a><p class="text-xs text-slate-400 dark:text-navy-300" data-v-4798a2b3${_scopeId}></p></div></div><div class="flex flex-col pt-2 pb-5" data-v-4798a2b3${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-warning" data-v-4798a2b3${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-v-4798a2b3${_scopeId2}></path></svg></div><div data-v-4798a2b3${_scopeId2}><h2 class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" data-v-4798a2b3${_scopeId2}> Profile </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300" data-v-4798a2b3${_scopeId2}> Paramètre de votre profil </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-warning" }, [
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
                      createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Profile "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètre de votre profil ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("user.chat"),
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500" data-v-4798a2b3${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-v-4798a2b3${_scopeId2}></path></svg></div><div data-v-4798a2b3${_scopeId2}><h2 class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" data-v-4798a2b3${_scopeId2}> Messages </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300" data-v-4798a2b3${_scopeId2}> Vos messages </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500" }, [
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
                      createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Messages "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Vos messages ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-error" data-v-4798a2b3${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-4798a2b3${_scopeId2}></path></svg></div><div data-v-4798a2b3${_scopeId2}><h2 class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" data-v-4798a2b3${_scopeId2}> Activité </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300" data-v-4798a2b3${_scopeId2}> Votre activité et événements </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-error" }, [
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
                      createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Activité "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Votre activité et événements ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-success" data-v-4798a2b3${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-4798a2b3${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-v-4798a2b3${_scopeId2}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-4798a2b3${_scopeId2}></path></svg></div><div data-v-4798a2b3${_scopeId2}><h2 class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" data-v-4798a2b3${_scopeId2}> Paramètres </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300" data-v-4798a2b3${_scopeId2}> Paramètres de l&#39;application Web </div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-success" }, [
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
                      createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Paramètres "),
                      createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètres de l'application Web ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="px-4 mt-3" data-v-4798a2b3${_scopeId}><form data-v-4798a2b3${_scopeId}><button type="submit" class="flex items-center justify-center w-full px-6 py-3 space-x-2 text-center text-white rounded-lg btn bg-skin-fill hover:bg-amber-600 focus:bg-amber-600-focus active:bg-amber-600-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90" data-v-4798a2b3${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-4798a2b3${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-v-4798a2b3${_scopeId}></path></svg><span data-v-4798a2b3${_scopeId}>Deconnexion</span></button></form></div></div></div></div>`);
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
                        class: "text-base font-bega-medium text-slate-700 hover:text-amber-600 focus:text-amber-600 dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                      }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
                      createVNode("p", { class: "text-xs text-slate-400 dark:text-navy-300" })
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col pt-2 pb-5" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.show"),
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-warning" }, [
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
                          createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Profile "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètre de votre profil ")
                        ])
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("user.chat"),
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500" }, [
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
                          createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Messages "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Vos messages ")
                        ])
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.show"),
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-error" }, [
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
                          createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Activité "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Votre activité et événements ")
                        ])
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.show"),
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-success" }, [
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
                          createVNode("h2", { class: "transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Paramètres "),
                          createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètres de l'application Web ")
                        ])
                      ]),
                      _: 1
                    }, 8, ["href"]),
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
            _push2(`<button class="w-12 h-12 avatar" data-v-4798a2b3${_scopeId}>`);
            if (_ctx.$page.props.auth.user.profile_photo_path != null) {
              _push2(`<img class="object-cover rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)} data-v-4798a2b3${_scopeId}>`);
            } else {
              _push2(`<img class="object-cover rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)} data-v-4798a2b3${_scopeId}>`);
            }
            _push2(`<span class="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700" data-v-4798a2b3${_scopeId}></span></button>`);
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
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/UserPartial/MainSidebarUser.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MainSidebarUser = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4798a2b3"]]);
const _sfc_main$2 = {
  __name: "SidebarPanelUser",
  __ssrInlineRender: true,
  setup(__props) {
    const pageName = ref("");
    const expandedItems = ref([]);
    useLayoutStore();
    const sidebarMenu = {
      title: "Racourci",
      items: [
        {
          service: {
            title: "Service",
            submenu: [
              {
                title: "Trouver un service",
                route_name: "categories"
              }
            ]
          },
          freelance: {
            title: "freelance",
            submenu: [
              {
                title: "Trouver un freelance",
                route_name: "find_freelance"
              },
              {
                title: "Devenir freelance",
                route_name: "find_freelance"
              }
            ]
          },
          parametres: {
            title: "Profile",
            submenu: [
              {
                title: "Modifier le profile",
                route_name: "profile.show"
              },
              {
                title: "Afillier un membre",
                route_name: "user.parainage"
              }
            ]
          }
          /*
                       Aide: {
                          title: 'Aide',
                          submenu: [
          
                               {
                                  title: 'Signaler un comportement',
                                  route_name: 'user.signalement',
          
                              },
                               {
                                  title: 'Contact',
                                  route_name: 'user.aide',
          
                              },
          
                          ],
                      },
                      */
        }
        // ... Autres éléments du menu
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-panel" }, _attrs))}><div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-findDark-900"><div class="flex items-center justify-between w-full h-16 pl-4 pr-1"><p class="text-base tracking-wider text-slate-800 dark:text-navy-100">${ssrInterpolate(sidebarMenu.title)}</p><button class="p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button></div><div class="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"><!--[-->`);
      ssrRenderList(sidebarMenu.items, (menuItems, key) => {
        _push(`<!--[-->`);
        if (key > 0) {
          _push(`<div class="h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="flex flex-col flex-1 px-4 font-bega-light"><!--[-->`);
        ssrRenderList(menuItems, (menu, keyMenu) => {
          _push(`<!--[-->`);
          if (menu.submenu) {
            _push(`<li><a class="${ssrRenderClass([{
              "text-slate-800 font-bega-semibold dark:text-navy-50": expandedItems.value.includes(keyMenu),
              "text-slate-600 dark:text-navy-200": !expandedItems.value.includes(keyMenu)
            }, "flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])}"><span>${ssrInterpolate(menu.title)}</span><svg class="${ssrRenderClass([{ "rotate-90": expandedItems.value.includes(keyMenu) }, "w-4 h-4 transition-transform ease-in-out text-slate-400"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>`);
            if (expandedItems.value.includes(keyMenu)) {
              _push(`<ul><!--[-->`);
              ssrRenderList(menu.submenu, (submenu, keySubMenu) => {
                _push(`<li>`);
                _push(ssrRenderComponent(_component_Link, {
                  href: _ctx.route(submenu.route_name),
                  class: ["flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4", { "text-blue-600 dark:text-accent-light font-bega-medium": submenu.route_name === pageName.value, "text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50": submenu.route_name !== pageName.value }]
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="flex items-center space-x-2"${_scopeId}><div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(submenu.title)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode("div", { class: "h-1.5 w-1.5 rounded-full border border-current opacity-40" }),
                          createVNode("span", null, toDisplayString(submenu.title), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`</li>`);
              });
              _push(`<!--]--></ul>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</li>`);
          } else {
            _push(`<li><a${ssrRenderAttr("href", menu.route_name)} class="${ssrRenderClass([{ "text-primary dark:text-accent-light font-bega-medium": menu.route_name === pageName.value, "text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50": menu.route_name !== pageName.value }, "flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out"])}">${ssrInterpolate(menu.title)}</a></li>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></ul><!--]-->`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/UserPartial/SidebarPanelUser.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PartialHeaderUser_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "PartialHeaderUser",
  __ssrInlineRender: true,
  setup(__props) {
    useLayoutStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="header print:hidden"><div class="relative flex w-full bg-white header-container dark:bg-findDark-900 print:hidden"><div class="flex items-center justify-between w-full"><div class="h-7 w-7"><button class="menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80"><span></span><span></span><span></span></button></div><div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: "flex ml-2 md:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/logo/find_02.png" class="h-8 lg:mr-3" alt="FIND"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/logo/find_02.png",
                class: "h-8 lg:mr-3",
                alt: "FIND"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="-mr-1.5 flex items-center space-x-2"><button class="w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600 !dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<button class="w-8 h-8 p-0 rounded-full cursor-pointer hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button></div></div></div></nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/UserPartial/PartialHeaderUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "OtherPanelUser",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    const page = usePage();
    const SidebarPanel = useSidebarPanelUser();
    const lastMessage = computed(() => SidebarPanel.lastMessageUser);
    const lastData = computed(() => SidebarPanel.lastCommandeUser);
    useToggle(isDark);
    onMounted(() => {
      SidebarPanel.fetchLastMessage(page.props.auth.user.id);
      SidebarPanel.fetchLastCommande(page.props.auth.user.id);
    });
    ref("");
    ref([]);
    const activeTab = ref("tabHome");
    const LayoutStore = useLayoutStore();
    const getHourFromDate = (created_at) => {
      const date = new Date(created_at);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Photo = resolveComponent("Photo");
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(LayoutStore).RightSidebarExpanded ? null : { display: "none" }
      }, _attrs))}>`);
      if (unref(LayoutStore).RightSidebarExpanded) {
        _push(`<div><div class="fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="fixed right-0 top-0 z-[151] h-full w-full sm:w-80">`);
      if (unref(LayoutStore).RightSidebarExpanded) {
        _push(`<div class="relative flex flex-col w-full h-full transition-transform duration-200 bg-white transform-gpu dark:bg-navy-750"><div class="flex items-center justify-between px-4 py-2"><p style="${ssrRenderStyle(activeTab.value === "tabHome" ? null : { display: "none" })}" class="flex shrink-0 items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-xs"> 1234 </span></p><p style="${ssrRenderStyle(activeTab.value === "tabProjects" ? null : { display: "none" })}" class="flex shrink-0 items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg><span class="text-xs">Commande</span></p><p style="${ssrRenderStyle(activeTab.value === "tabActivity" ? null : { display: "none" })}" class="flex shrink-0 items-center space-x-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-xs">Activity</span></p><button class="w-6 h-6 p-0 -mr-1 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
        if (activeTab.value === "tabHome") {
          _push(`<div x-transition:enter="transition-all duration-500 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"><div class="mt-4"></div><div class="mt-4"><h2 class="px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"> Dernier message </h2><div class="px-2 mt-4 space-y-3"><!--[-->`);
          ssrRenderList(lastMessage.value.messages, (message) => {
            _push(`<div class="flex flex-col justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700"><div class="flex flex-col justify-between px-3 mb-2 px-auto"><div class="mb-1 line-clamp-2">`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("user.chat", message.conversation_id),
              class: "font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span${_scopeId}>${message.body}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      innerHTML: message.body
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div><div class="flex items-center justify-between"><div class="flex flex-col space-x-2"><div class="flex items-center gap-3 mb-4">`);
            _push(ssrRenderComponent(_component_Photo, {
              user: message.senderUser,
              taille: "12"
            }, null, _parent));
            _push(`<p class="text-xs font-medium line-clamp-1">${ssrInterpolate(message.senderUser.name)}</p></div><div><p class="text-xs font-medium line-clamp-1">${ssrInterpolate(getHourFromDate(message.created_at))}</p></div></div></div></div></div>`);
          });
          _push(`<!--]--><div> Aucun message</div></div></div><div class="px-3 mt-3"><h2 class="text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"> Settings </h2><div class="flex flex-col mt-2 space-y-2"><label class="inline-flex items-center space-x-2"><input${ssrIncludeBooleanAttr(Array.isArray(unref(isDark)) ? ssrLooseContain(unref(isDark), null) : unref(isDark)) ? " checked" : ""} class="w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white" type="checkbox"><span>Dark Mode</span></label><label class="inline-flex items-center space-x-2"><input x-model="$store.global.isMonochromeModeEnabled" class="w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white" type="checkbox"><span>Monochrome Mode</span></label></div></div><div class="hidden px-3 mt-3"><div class="p-3 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex items-center justify-between"><p><span class="font-medium text-slate-600 dark:text-navy-100">35GB</span> of 1TB </p><a href="#" class="text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Upgrade</a></div><div class="h-2 mt-2 progress bg-slate-150 dark:bg-navy-500"><div class="w-7/12 rounded-full bg-info"></div></div></div></div><div class="h-18"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "tabProjects") {
          _push(`<div class="px-3 pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"><div class="grid grid-cols-2 gap-3"><div class="p-3 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between space-x-1"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(lastData.value.total)}</p><svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="w-5 h-5 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="mt-1 text-xs+">Total</p></div><div class="p-3 rounded-lg bg-slate-100 dark:bg-navy-600"><div class="flex justify-between"><p class="text-xl font-semibold text-slate-700 dark:text-navy-100">${ssrInterpolate(lastData.value.totalEnAttente)}</p><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div><p class="mt-1 text-xs+">En attente</p></div></div><div class="h-18"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute flex justify-center w-full pointer-events-none bottom-4"><div class="pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900"><button class="${ssrRenderClass([activeTab.value === "tabHome" && "text-primary dark:text-accent", "px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])}"><svg style="${ssrRenderStyle(activeTab.value === "tabHome" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg><svg style="${ssrRenderStyle(activeTab.value !== "tabHome" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></button><button class="${ssrRenderClass([activeTab.value === "tabProjects" && "text-primary dark:text-accent", "px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])}"><svg style="${ssrRenderStyle(activeTab.value === "tabProjects" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><svg style="${ssrRenderStyle(activeTab.value !== "tabProjects" ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg></button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/UserPartial/OtherPanelUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  MainSidebarUser as M,
  _sfc_main$2 as _,
  _sfc_main$1 as a,
  _sfc_main as b
};

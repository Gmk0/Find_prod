import { unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-73ca8f25.js";
import { Link } from "@inertiajs/vue3";
import "@vueuse/core";
import "./NotificationComponent-fe8292d8.js";
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
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    categoriesAll: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-full px-4 py-20 mb-8 md:px-8"><div class="mx-2 mb-4"><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Acceuil `);
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
              createTextVNode(" Acceuil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Categories</span></div></li></ol></nav></div><div class="flex flex-col"><div><h1 class="text-2xl font-semibold text-black dark:text-white">Parcourir par catégorie</h1></div><div><form class="hidden my-4"><label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche..." required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Recherche</button></div></form></div></div><div class="grid grid-cols-2 gap-4 mt-8 md:gap-6 md:grid-cols-4 xl:gap-8"><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("categoryName", category.slug),
          class: "flex flex-row items-center gap-2 px-2 py-4 duration-200 bg-white border shadow cursor-pointer group rounded-xl border-amber-500/10 hover:bg-amber-600 dark:bg-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (category.media.url != "") {
                _push2(`<img${ssrRenderAttr("src", category.media.url)} class="w-12 rounded-md lg:w-20 lg:h-20"${ssrRenderAttr("alt", category.media.alt)}${_scopeId}>`);
              } else {
                _push2(`<img src="/images/logo/ff3.png" class="w-12 rounded-md lg:w-20 lg:h-20"${ssrRenderAttr("alt", category.media.alt)}${_scopeId}>`);
              }
              _push2(`<div class="flex flex-col gap-2"${_scopeId}><h4 class="mt-3 mb-1 md:text-[20px] text-sm dark:text-white block font-semibold text-slate-600 duration-200 group-hover:text-white"${_scopeId}>${ssrInterpolate(category.name)}</h4><div${_scopeId}><span${_scopeId}></span></div></div>`);
            } else {
              return [
                category.media.url != "" ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: category.media.url,
                  class: "w-12 rounded-md lg:w-20 lg:h-20",
                  alt: category.media.alt
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: "/images/logo/ff3.png",
                  class: "w-12 rounded-md lg:w-20 lg:h-20",
                  alt: category.media.alt
                }, null, 8, ["alt"])),
                createVNode("div", { class: "flex flex-col gap-2" }, [
                  createVNode("h4", { class: "mt-3 mb-1 md:text-[20px] text-sm dark:text-white block font-semibold text-slate-600 duration-200 group-hover:text-white" }, toDisplayString(category.name), 1),
                  createVNode("div", null, [
                    createVNode("span")
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="px-4 pt-4 bg-white dark:bg-gray-800 md:px-8"><div class="flex justify-start"><h1 class="text-2xl font-semibold text-black dark:text-white"> Parcourir toutes les catégories </h1></div><!--[-->`);
      ssrRenderList(__props.categoriesAll, (category) => {
        _push(`<div class="px-4 mb-8"><div class="my-4">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("categoryName", category.name),
          class: "text-xl text-black dark:text-gray-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><hr><div class="flex flex-wrap my-4"><!--[-->`);
        ssrRenderList(category.sub_categories, (sub) => {
          _push(`<div class="mb-4">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("SubcategoryName", [category.name, sub.name]),
            class: "block px-4 text-sm font-semibold text-gray-600 lg:text-base dark:text-gray-200"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(sub.name)} <span${_scopeId}></span>`);
              } else {
                return [
                  createTextVNode(toDisplayString(sub.name) + " ", 1),
                  createVNode("span")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

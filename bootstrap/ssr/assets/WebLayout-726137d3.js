import { computed, ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, unref, useSSRContext, onMounted, withDirectives, vShow, withModifiers, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link, useForm, Head } from "@inertiajs/vue3";
import { useDark, useToggle } from "@vueuse/core";
import { d as cartStore, e as useStore, a as useCategoryStore, f as useSubcategoriesStore, _ as _sfc_main$6, b as _sfc_main$7 } from "./NotificationComponent-1408ac1b.js";
import { Collapse } from "vue-collapsed";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$9 } from "./Checkbox-74b17051.js";
import { a as _sfc_main$8 } from "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import { initFlowbite } from "flowbite";
const _sfc_main$5 = {
  __name: "CartComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const usecartStore = cartStore();
    const items = computed(() => usecartStore.items);
    const totalPrice = computed(() => usecartStore.totalCost);
    const visible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = resolveComponent("Sidebar");
      const _component_Link = resolveComponent("Link");
      const _component_ButtonMt = resolveComponent("ButtonMt");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex card justify-content-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Sidebar, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        position: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2${_scopeId}>CART</h2><div class="flex-1 max-h-full p-4 soft-scrollbar"${_scopeId}>`);
            if (items.value) {
              _push2(`<div class="flex-1 overflow-x-hidden overflow-y-auto"${_scopeId}><!--[-->`);
              ssrRenderList(items.value, (item) => {
                _push2(`<div class="flex items-center p-4 space-x-4"${_scopeId}><img class="object-cover w-16 h-16 rounded-lg"${ssrRenderAttr("src", item.image)} alt="Service 1"${_scopeId}><div class="flex-1"${_scopeId}><h3 class="mb-2 font-semibold text-gray-800 dark:text-gray-100"${_scopeId}>${ssrInterpolate(item.name)}</h3><p class="text-gray-500 truncate dark:text-gray-100"${_scopeId}>${ssrInterpolate(item.price)} $</p><div class="mt-4"${_scopeId}><label for="Quantity" class="sr-only"${_scopeId}> Quantity </label><div class="flex items-center gap-1"${_scopeId}><button type="button"${ssrIncludeBooleanAttr(item.quantity === 1) ? " disabled" : ""} class="w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"${_scopeId}> − </button><input disabled type="number" id="Quantity"${ssrRenderAttr("value", item.quantity)} class="h-8 w-10 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none"${_scopeId}><button type="button" disabled class="w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"${_scopeId}> + </button></div></div></div><button class="text-gray-500 hover:text-gray-600 focus:outline-none"${_scopeId}><svg class="w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div${_scopeId}> la carte est vide </div>`);
            }
            if (totalPrice.value != 0) {
              _push2(`<div class="flex flex-col gap-4 p-4 border-t border-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("panier"),
                onClick: ($event) => visible.value = !visible.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ButtonMt, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Paiement ${ssrInterpolate(totalPrice.value)} $ `);
                        } else {
                          return [
                            createTextVNode(" Paiement " + toDisplayString(totalPrice.value) + " $ ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_ButtonMt, null, {
                        default: withCtx(() => [
                          createTextVNode(" Paiement " + toDisplayString(totalPrice.value) + " $ ", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<button${_scopeId}>VIDER</button></div>`);
            } else {
              _push2(`<div${_scopeId}> votre panier est vide </div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("h2", null, "CART"),
              createVNode("div", { class: "flex-1 max-h-full p-4 soft-scrollbar" }, [
                items.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex-1 overflow-x-hidden overflow-y-auto"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(items.value, (item) => {
                    return openBlock(), createBlock("div", { class: "flex items-center p-4 space-x-4" }, [
                      createVNode("img", {
                        class: "object-cover w-16 h-16 rounded-lg",
                        src: item.image,
                        alt: "Service 1"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("h3", { class: "mb-2 font-semibold text-gray-800 dark:text-gray-100" }, toDisplayString(item.name), 1),
                        createVNode("p", { class: "text-gray-500 truncate dark:text-gray-100" }, toDisplayString(item.price) + " $", 1),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("label", {
                            for: "Quantity",
                            class: "sr-only"
                          }, " Quantity "),
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("button", {
                              type: "button",
                              disabled: item.quantity === 1,
                              onClick: ($event) => unref(usecartStore).updateItemQuantity(item.id, item.quantity--),
                              class: "w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"
                            }, " − ", 8, ["disabled", "onClick"]),
                            createVNode("input", {
                              disabled: "",
                              type: "number",
                              id: "Quantity",
                              value: item.quantity,
                              class: "h-8 w-10 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                            }, null, 8, ["value"]),
                            createVNode("button", {
                              type: "button",
                              disabled: "",
                              onClick: ($event) => unref(usecartStore).updateItemQuantity(item.id, item.quantity++),
                              class: "w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75"
                            }, " + ", 8, ["onClick"])
                          ])
                        ])
                      ]),
                      createVNode("button", {
                        onClick: ($event) => unref(usecartStore).removeItem(item.id),
                        class: "text-gray-500 hover:text-gray-600 focus:outline-none"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-5 h-5",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          createVNode("path", { d: "M6 18L18 6M6 6l12 12" })
                        ]))
                      ], 8, ["onClick"])
                    ]);
                  }), 256))
                ])) : (openBlock(), createBlock("div", { key: 1 }, " la carte est vide ")),
                totalPrice.value != 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex flex-col gap-4 p-4 border-t border-gray-200"
                }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("panier"),
                    onClick: ($event) => visible.value = !visible.value
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ButtonMt, null, {
                        default: withCtx(() => [
                          createTextVNode(" Paiement " + toDisplayString(totalPrice.value) + " $ ", 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["href", "onClick"]),
                  createVNode("button", {
                    onClick: ($event) => unref(usecartStore).clearCart()
                  }, "VIDER", 8, ["onClick"])
                ])) : (openBlock(), createBlock("div", { key: 3 }, " votre panier est vide "))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="site-cart lg:mr-2"><a href="#" class="site-header__cart" title="Cart"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-700 dark:text-white lg:block"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg><span id="CartCount" class="site-header__cart-count" data-cart-render="item_count">${ssrInterpolate(unref(usecartStore).totalItems)}</span></a></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CartComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "SvgIcon",
  __ssrInlineRender: true,
  props: {
    illustration: String,
    fillColor: {
      type: String,
      default: "#6B7278"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.illustration === "1") {
        _push(`<svg${ssrRenderAttr("fill", __props.fillColor)} class="w-6 h-6 !text-gray-500 hover:!text-skin-fill" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 419.931 419.931" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><g><path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293 V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146 c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066 C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702 c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702 h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702 c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z"></path> <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38 l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68 c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104 v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392 c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679 c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38 l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744 c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695 c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711 c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709 l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224 c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361 s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345 c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809 l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492 c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787 c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327 c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336 c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z"></path> <g><path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118 v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333 c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336 c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373 L164.695,235.373z"></path> <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27 c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516 l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z"></path> <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912 c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331 c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923 c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877 C315.094,200.735,312.311,196.371,308.001,194.366z"></path></g></g></g></g></g></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.illustration === "3") {
        _push(`<svg${ssrRenderAttr("fill", __props.fillColor)} class="w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><g><path d="M128,273.067h51.2c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533h-42.667v-17.067h8.533 c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533V204.8h8.533c4.71,0,8.533-3.823,8.533-8.533 s-3.823-8.533-8.533-8.533h-8.533v-17.067H179.2c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533h-42.667v-17.067 h8.533c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533h-8.533V102.4h8.533c4.71,0,8.533-3.823,8.533-8.533 c0-4.71-3.823-8.533-8.533-8.533h-8.533V68.267H179.2c4.71,0,8.533-3.823,8.533-8.533S183.91,51.2,179.2,51.2h-42.667V17.067H256 v247.467c0,4.71,3.823,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533v-256c0-4.71-3.823-8.533-8.533-8.533H128 c-4.71,0-8.533,3.823-8.533,8.533v256C119.467,269.244,123.29,273.067,128,273.067z"></path> <path d="M8.533,273.067c4.71,0,8.533-3.823,8.533-8.533V42.667c0-12.442,13.158-25.6,25.6-25.6h51.2 c4.71,0,8.533-3.823,8.533-8.533S98.577,0,93.867,0h-51.2C20.736,0,0,20.736,0,42.667v221.867 C0,269.244,3.823,273.067,8.533,273.067z"></path> <path d="M384,102.4c-4.71,0-8.533,3.823-8.533,8.533v153.6c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-153.6 C392.533,106.223,388.71,102.4,384,102.4z"></path> <path d="M332.8,110.933v153.6c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-153.6c0-4.71-3.823-8.533-8.533-8.533 S332.8,106.223,332.8,110.933z"></path> <path d="M349.867,494.933h-8.533V486.4c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v8.533H307.2V486.4 c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v8.533h-17.067V486.4c0-4.71-3.823-8.533-8.533-8.533 c-4.71,0-8.533,3.823-8.533,8.533v8.533h-17.067V486.4c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v8.533H204.8 V486.4c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v8.533h-17.067V486.4c0-4.71-3.823-8.533-8.533-8.533 c-4.71,0-8.533,3.823-8.533,8.533v8.533h-17.067V486.4c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v8.533H102.4 V486.4c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v8.533H68.267V486.4c0-4.71-3.823-8.533-8.533-8.533 S51.2,481.69,51.2,486.4v8.533h-8.533c-4.71,0-8.533,3.823-8.533,8.533S37.956,512,42.667,512h307.2 c4.71,0,8.533-3.823,8.533-8.533S354.577,494.933,349.867,494.933z"></path> <path d="M298.667,273.067c4.71,0,8.533-3.823,8.533-8.533V79.249l34.133-54.613l27.273,43.631H332.8 c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533H384c3.106,0,5.956-1.681,7.467-4.395 c1.502-2.714,1.417-6.033-0.23-8.661L348.57,4.011c-3.123-4.992-11.349-4.992-14.473,0L291.43,72.277 c-0.845,1.357-1.297,2.918-1.297,4.523v187.733C290.133,269.244,293.956,273.067,298.667,273.067z"></path> <path d="M469.333,0H384c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h85.333c12.442,0,25.6,13.158,25.6,25.6v307.2 c0,12.442-13.158,25.6-25.6,25.6H42.667c-12.442,0-25.6-13.158-25.6-25.6V307.2h452.267c4.71,0,8.533-3.823,8.533-8.533 s-3.823-8.533-8.533-8.533H8.533c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,21.931,20.736,42.667,42.667,42.667h426.667 c21.931,0,42.667-20.736,42.667-42.667v-307.2C512,20.736,491.264,0,469.333,0z"></path> <path d="M238.933,341.333c0,9.412,7.654,17.067,17.067,17.067c9.412,0,17.067-7.654,17.067-17.067 c0-9.412-7.654-17.067-17.067-17.067C246.588,324.267,238.933,331.921,238.933,341.333z"></path> <path d="M298.667,460.8c4.71,0,8.533-3.823,8.533-8.533v-34.133c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v34.133 C290.133,456.977,293.956,460.8,298.667,460.8z"></path> <path d="M221.867,452.267v-34.133c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v34.133 c0,4.71,3.823,8.533,8.533,8.533C218.044,460.8,221.867,456.977,221.867,452.267z"></path> <path d="M443.733,460.8h-17.067c-18.825,0-34.133,15.309-34.133,34.133v8.533c0,4.71,3.823,8.533,8.533,8.533h68.267 c4.71,0,8.533-3.823,8.533-8.533v-8.533C477.867,476.109,462.558,460.8,443.733,460.8z M409.6,494.933 c0-9.412,7.654-17.067,17.067-17.067h17.067c9.412,0,17.067,7.654,17.067,17.067H409.6z"></path></g></g></g></g></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.illustration === "2") {
        _push(`<svg class="w-6 h-6" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"${ssrRenderAttr("fill", __props.fillColor)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path class="feather_een" d="M28,7h-5l-1.171-2.342C21.321,3.642,20.282,3,19.146,3h-6.292c-1.136,0-2.175,0.642-2.683,1.658L9,7H4 c-1.657,0-3,1.343-3,3v15c0,1.657,1.343,3,3,3h24c1.657,0,3-1.343,3-3V10C31,8.343,29.657,7,28,7z M30,25c0,1.103-0.897,2-2,2H4 c-1.103,0-2-0.897-2-2V10c0-1.103,0.897-2,2-2h5.618l1.447-2.894C11.406,4.424,12.092,4,12.854,4h6.292 c0.762,0,1.448,0.424,1.789,1.106L22.382,8H28c1.103,0,2,0.897,2,2V25z M8,10c0-0.552-0.448-1-1-1H4c-0.552,0-1,0.448-1,1v2 c0,0.552,0.448,1,1,1h3c0.552,0,1-0.448,1-1V10z M7,12H4v-2h3V12z M16,9c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8 S20.418,9,16,9z M16,24c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S19.86,24,16,24z M16,11c-3.314,0-6,2.686-6,6s2.686,6,6,6 s6-2.686,6-6S19.314,11,16,11z M16,22c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,22,16,22z"></path></g></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.illustration === "4") {
        _push(`<svg${ssrRenderAttr("fill", __props.fillColor)} class="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.968 488.968" xml:space="preserve" stroke="#6B7278"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M390.384,39.968c-2.4-4.3-7.8-5.9-12.1-3.5l-31.9,17.5c-4.3,2.4-5.9,7.8-3.5,12.1l0.1,0.2c2.4,4.3,7.8,5.9,12.1,3.5 l31.9-17.5c4.3-2.4,5.9-7.8,3.5-12.1L390.384,39.968z"></path> <path d="M298.184,57.268l-25.8-46.9c-2.3-4.2-7.3-6.3-11.8-4.6c-5,2-7.1,7.8-4.9,12.5c-12.3,38.6-44.1,68.3-64.4,84.3l-4.2-7.7 l-51.1,28.1c-10.2,5.6-13.9,18.3-8.3,28.5l4.5,8.2l-5.6,3.1c-3.4,1.9-4.6,6.1-2.8,9.5l12.7,23c1.9,3.4,6.1,4.6,9.5,2.8l5.6-3.1 l3.9,7.1c5.6,10.2,18.3,13.9,28.5,8.3l4.7-2.6l17.7,19.4c-18.6,7.1-27.6,34.5-27.6,34.5c-1.4,5.1-1.3,10-0.9,13.8 c0.1,0.9,0.2,1.8,0.4,2.5c0.1,1.1-0.2,3-0.9,5.2c-1.5,5.3-5.2,9.7-10.1,12.4l-77.4,42v-166.7h5.9h3c-0.3-5.8,1-11.5,3.9-16.5 c-2.7-9-2.3-18.5,0.6-27.1h-7.5h-17.4c-17.7,0-32,14.3-32,32v224.4c0,17.7,14.3,32,32,32h130.3v35.7h-25.4c-4.2,0-7.7,3.4-7.7,7.7 v22.2c0,4.2,3.4,7.7,7.7,7.7h122.4c4.2,0,7.7-3.4,7.7-7.7v-22.2c0-4.2-3.4-7.7-7.7-7.7h-25.4v-35.7h130.3c17.7,0,32-14.3,32-32 v-224.4c0-17.7-14.3-32-32-32h-27.7h-18.9l9.6,17.5c4.6,8.3,5.2,17.7,2.6,26.1h6.7h16.1v200.8h-215.3l51-28 c9.3-4,24.6-11,39.2-19.4c9.7-4.4,19.7-9.8,26.6-15.8c23.6-20.4,6.7-35.3,6.7-35.3c8.5-18.8-7.2-27.8-7.2-27.8 c5.5-20.4-13.3-24.7-13.3-24.7s1-14.6-12.4-17.8c-11.3-2.7-27.1,7-36.1,13.7l-22.1-23.7l19-10.4l-4.2-7.7 c24.4-8.7,66.5-19.5,105.7-9.2c2.8,4.4,8.7,5.8,13.2,2.6c3.9-2.8,4.8-8.2,2.5-12.4l-26-47.3c8.2-9.6,10.1-23.6,3.7-35.3 C323.484,61.368,310.684,55.468,298.184,57.268z"></path> <path d="M348.584,3.268l-23.6,28.6c-3,3.6-2.7,8.9,0.7,12.1c3.7,3.5,9.7,3.2,13-0.8l23.7-28.6c3-3.6,2.7-8.9-0.7-12.1 C357.784-1.132,351.884-0.732,348.584,3.268z"></path> <path d="M352.484,92.768c0.9,4.6,5.2,7.7,9.8,7.1l36.8-4.6c5.1-0.6,8.6-5.5,7.6-10.5c-0.9-4.6-5.2-7.7-9.8-7.1l-36.8,4.6 C354.984,82.868,351.484,87.668,352.484,92.768z"></path></g></g></g></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SvgIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Navbar_vue_vue_type_style_index_0_scoped_b56c4f3e_lang = "";
const _sfc_main$3 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const isDark = useDark();
    useToggle(isDark);
    useStore();
    const categoriesStore = useCategoryStore();
    useSubcategoriesStore();
    const categories = computed(() => categoriesStore.categoriesGet.categories);
    const selectedCategory = ref(null);
    const isSSR = ref(true);
    onMounted(() => {
      isSSR.value = false;
    });
    const open = ref(false);
    const navOpen = ref(false);
    ref(false);
    const isSticky = ref(false);
    const hoverOpen = ref(false);
    const isNotHome = computed(() => {
      return page.url === "/" ? false : true;
    });
    const expandedItems = ref([]);
    const toggleAccordion = (key) => {
      if (expandedItems.value.includes(key)) {
        expandedItems.value = expandedItems.value.filter((item) => item !== key);
        console.log(expandedItems.value);
      } else {
        expandedItems.value.push(key);
      }
    };
    function handleMouseover(category) {
      selectedCategory.value = category;
    }
    function handleScroll() {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 1199) {
          if (window.scrollY > 145) {
            isSticky.value = true;
          } else {
            isSticky.value = false;
          }
        }
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-[100]" }, _attrs))} data-v-b56c4f3e><div class="${ssrRenderClass([[
        isSticky.value ? "stickyNav fadeInDown  dark:text-white fadeInDown dark:!bg-findDark-900" : "",
        _ctx.$page.url === "/" ? "" : "dark:bg-findDark-900 bg-white"
      ], "flex header-wrap !z-[100] classicHeader animated"])}" data-v-b56c4f3e><div class="w-full px-4 lg:px-12" data-v-b56c4f3e><div class="grid items-center justify-between w-full grid-cols-12 lg:mx-auto" data-v-b56c4f3e><div class="hidden logo md:col-span-2 lg:block" data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/optimize/find_02.png" class="hidden w-20 lg:block" alt="FInd" title="Find" data-v-b56c4f3e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/optimize/find_02.png",
                class: "hidden w-20 lg:block",
                alt: "FInd",
                title: "Find"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-3 lg:col-span-8" data-v-b56c4f3e><div class="block lg:hidden" data-v-b56c4f3e><button class="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-white hover:bg-findDark-700 focus:outline-none focus:bg-findDark-700 focus:text-white" x-bind:aria-label="navOpen ? &#39;Close main menu&#39; : &#39;Main menu&#39;" x-bind:aria-expanded="navOpen" data-v-b56c4f3e><svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" data-v-b56c4f3e><path class="${ssrRenderClass([{ "hidden": navOpen.value, "inline-flex": !navOpen.value }, "inline-flex"])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-b56c4f3e></path><path class="${ssrRenderClass([{ "hidden": !navOpen.value, "inline-flex": navOpen.value }, "hidden"])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-b56c4f3e></path></svg></button></div><nav class="relative grid__item" id="AccessibleNav" data-v-b56c4f3e><ul id="siteNav" class="site-nav medium center hidearrow" data-v-b56c4f3e><li class="lvl1 parent megamenu" data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "boder-b-2 border-amber-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "text-white ": !isSticky.value && !isNotHome.value, "lg:hidden dark:!text-white": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e${_scopeId}>Accueil</span><span class="${ssrRenderClass([{ "hidden dark:!text-white": !isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e${_scopeId}>Accueil</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["dark:!text-white", { "text-white ": !isSticky.value && !isNotHome.value, "lg:hidden dark:!text-white": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }]
              }, "Accueil", 2),
              createVNode("span", {
                class: ["dark:!text-white", { "hidden dark:!text-white": !isNotHome.value }]
              }, "Accueil", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="lvl1 parent z-[60] megamenu" data-v-b56c4f3e><a href="" data-v-b56c4f3e><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>Categories</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>Categories</span></a><div class="flex w-full megamenu style4" data-v-b56c4f3e><div class="flex flex-col w-4/12 px-4 pt-10 pb-4 bg-white border border-gray-300 dark:bg-findDark-900 rounded-l-md min-h-72" data-v-b56c4f3e><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("categoryName", category.slug),
          onMouseover: ($event) => handleMouseover(category)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{ "bg-findDark-200 dark:bg-findDark-800 dark:text-skin-fill text-skin-fill ": selectedCategory.value === category }, "flex gap-4 px-2 py-4 text-gray-900 dark:text-gray-100 hover:text-skin-fill"])}" data-v-b56c4f3e${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                illustration: category.illustration
              }, null, _parent2, _scopeId));
              _push2(`<h1 class="text-lg rounded-md cursor-pointer font-bega-medium" data-v-b56c4f3e${_scopeId}>${ssrInterpolate(category.name)}</h1></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex gap-4 px-2 py-4 text-gray-900 dark:text-gray-100 hover:text-skin-fill", { "bg-findDark-200 dark:bg-findDark-800 dark:text-skin-fill text-skin-fill ": selectedCategory.value === category }]
                }, [
                  createVNode(_sfc_main$4, {
                    illustration: category.illustration
                  }, null, 8, ["illustration"]),
                  createVNode("h1", { class: "text-lg rounded-md cursor-pointer font-bega-medium" }, toDisplayString(category.name), 1)
                ], 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (selectedCategory.value != null) {
        _push(`<div class="w-8/12 p-4 bg-white border border-gray-300 dark:bg-findDark-900 rounded-r-md min-h-72" data-v-b56c4f3e><h2 class="text-lg text-gray-900 cursor-pointer dark:text-gray-100 font-bega-medium" data-v-b56c4f3e>${ssrInterpolate(selectedCategory.value.name)}</h2><div class="flex justify-between" data-v-b56c4f3e><div class="mt-4" data-v-b56c4f3e><ul class="flex flex-wrap gap-6 text-gray-700 dark:text-gray-200 font-bega-light" data-v-b56c4f3e><!--[-->`);
        ssrRenderList(selectedCategory.value.subcategories, (subcategory) => {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("SubcategoryName", [selectedCategory.value.slug, subcategory.name]),
            class: "text-base hover:text-skin-fill link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(subcategory.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(subcategory.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></li><li class="lvl1 parent dropdown" data-v-b56c4f3e><a href="#" data-v-b56c4f3e><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:text-black lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>Freelance</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>Freelance</span></a><ul class="dropdown dark:!bg-findDark-800" data-v-b56c4f3e><li data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register.begin")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Devenir Freelance`);
          } else {
            return [
              createTextVNode("Devenir Freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("find_freelance")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Trouver un freelance`);
          } else {
            return [
              createTextVNode("Trouver un freelance")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="lvl1 parent dropdown" data-v-b56c4f3e><a href="#" data-v-b56c4f3e><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>Mission</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>Mission</span></a><ul class="dropdown" data-v-b56c4f3e><li data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("createProject"),
        class: "site-nav"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Soumettre une Mission`);
          } else {
            return [
              createTextVNode("Soumettre une Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="lvl1 parent dropdown" data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Allservices")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e${_scopeId}>Services</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e${_scopeId}>Services</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["dark:!text-white", { "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }]
              }, "Services", 2),
              createVNode("span", {
                class: ["dark:!text-white", { "hidden": !isNotHome.value }]
              }, "Services", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="lvl1 parent dropdown" data-v-b56c4f3e><a href="#" data-v-b56c4f3e><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>A propos</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>A propos</span></a><ul class="dropdown dark:!bg-findDark-900" data-v-b56c4f3e><li data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("feedBack")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Feed back`);
          } else {
            return [
              createTextVNode("Feed back")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A propos de nous`);
          } else {
            return [
              createTextVNode("A propos de nous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("faq")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Faq`);
          } else {
            return [
              createTextVNode("Faq")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></nav>`);
      if (hoverOpen.value) {
        _push(`<div class="absolute z-50 hidden w-full h-16 mx-auto right-4 top-16" data-v-b56c4f3e><div class="w-full h-24 max-w-5xl mx-auto mt-4 bg-red-300" data-v-b56c4f3e></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block col-span-6 mx-auto lg:col-span-2 lg:hidden mobile-logo" data-v-b56c4f3e><div class="logo" data-v-b56c4f3e>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="flex w-20 dark:hidden" src="/images/optimize/find_03.png" alt="logo-find" data-v-b56c4f3e${_scopeId}><img style="${ssrRenderStyle(isNotHome.value ? null : { display: "none" })}" src="/images/optimize/find_02.png" alt="logo-find" class="w-24" data-v-b56c4f3e${_scopeId}><img style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="hidden w-24 dark:flex" src="/images/optimize/find_02.png" alt="logo-find" data-v-b56c4f3e${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("img", {
                class: "flex w-20 dark:hidden",
                src: "/images/optimize/find_03.png",
                alt: "logo-find"
              }, null, 512), [
                [vShow, !isNotHome.value]
              ]),
              withDirectives(createVNode("img", {
                src: "/images/optimize/find_02.png",
                alt: "logo-find",
                class: "w-24"
              }, null, 512), [
                [vShow, isNotHome.value]
              ]),
              withDirectives(createVNode("img", {
                class: "hidden w-24 dark:flex",
                src: "/images/optimize/find_02.png",
                alt: "logo-find"
              }, null, 512), [
                [vShow, !isNotHome.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center justify-end col-span-3 gap-2 lg:col-span-2" data-v-b56c4f3e>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<div class="flex items-center gap-4" data-v-b56c4f3e>`);
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
        _push(`<div class="hidden site-cart" data-v-b56c4f3e><button type="button" class="search-trigger" data-v-b56c4f3e><svg style="${ssrRenderStyle(isNotHome.value ? null : { display: "none" })}" class="${ssrRenderClass([isSticky.value ? "dark:!text-white" : "!text-white dark:!text-white", "hidden w-5 h-5 lg:block"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b56c4f3e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b56c4f3e></path></svg><svg style="${ssrRenderStyle(!isNotHome.value ? null : { display: "none" })}" class="hidden w-5 h-5 lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b56c4f3e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b56c4f3e></path></svg><svg class="block w-5 h-5 text-gray-700 dark:text-white lg:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b56c4f3e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-b56c4f3e></path></svg></button></div><div class="hidden lg:block" data-v-b56c4f3e>`);
        _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.$page.props.auth.user) {
        _push(`<div class="flex items-center gap-6 ml-2" data-v-b56c4f3e><a href="#" class="relative items-center justify-center hidden w-full h-12 px-2 mx-auto text-base bg-transparent rounded-full lg:flex group hover:scale-105 active:duration-75 active:scale-95 sm:w-max" data-v-b56c4f3e><span class="${ssrRenderClass([{ "lg:text-white": !isSticky.value && !isNotHome.value, "lg:hidden": isNotHome.value && !isSticky.value, "hidden": isSticky.value && isNotHome.value }, "dark:!text-white"])}" data-v-b56c4f3e>Connexion</span><span class="${ssrRenderClass([{ "hidden": !isNotHome.value }, "dark:!text-white text-gray-800"])}" data-v-b56c4f3e>Connexion</span></a>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register", ["code"]),
          class: "relative items-center justify-center hidden w-full h-12 px-8 mx-auto rounded-full lg:flex bg-skin-fill group dark:bg-skin-fill hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative text-base font-semibold text-white dark:text-white underline-none" data-v-b56c4f3e${_scopeId}>S&#39;inscrire</span>`);
            } else {
              return [
                createVNode("span", { class: "relative text-base font-semibold text-white dark:text-white underline-none" }, "S'inscrire")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register", ["code"]),
          class: "relative flex items-center justify-center h-10 px-4 mx-auto text-sm duration-300 rounded-md lg:hidden bg-findDark-50 before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="relative text-base font-semibold text-amber-600" data-v-b56c4f3e${_scopeId}>S&#39;inscrire</span>`);
            } else {
              return [
                createVNode("span", { class: "relative text-base font-semibold text-amber-600" }, "S'inscrire")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div style="${ssrRenderStyle([
        navOpen.value ? null : { display: "none" },
        { "backdrop-filter": "blur(14px)", "-webkit-backdrop-filter": "blur(14px)" }
      ])}" class="fixed inset-0 z-[400] bg-black bg-opacity-20 lg:hidden" data-v-b56c4f3e></div>`);
      if (navOpen.value) {
        _push(`<div style="${ssrRenderStyle({ "backdrop-filter": "blur(14px)", "-webkit-backdrop-filter": "blur(14px)" })}" class="fixed inset-0 bottom-0 left-0 z-[500] w-10/12 overflow-auto origin-left transform shadow-lg bg-findDark-200 dark:bg-findDark-900 custom-scrollbar lg:hidden" data-v-b56c4f3e><div class="sticky top-0 z-20 flex justify-between h-24 p-2 border-b border-gray-700 bg-findDark-200 dark:bg-findDark-900 dark:border-gray-300" data-v-b56c4f3e><div class="flex p-3 mx-1" data-v-b56c4f3e>`);
        if (_ctx.$page.props.auth.user) {
          _push(`<div class="flex w-full text-left" data-v-b56c4f3e><div class="flex-shrink-0" data-v-b56c4f3e>`);
          if (_ctx.$page.props.auth.user.profile_photo_path != null) {
            _push(`<img class="w-12 h-12 rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)} alt="" data-v-b56c4f3e>`);
          } else {
            _push(`<img class="w-16 h-16 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)} alt="" data-v-b56c4f3e>`);
          }
          _push(`</div><div class="px-4 py-3" data-v-b56c4f3e><span class="block text-base text-gray-800 truncate dark:text-white" data-v-b56c4f3e>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span></div></div>`);
        } else {
          _push(`<div data-v-b56c4f3e><a href="#" class="relative flex items-center justify-center w-full h-12 px-8 mx-auto duration-300 rounded-full dark:border dark:border-white bg-skin-fill before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max" data-v-b56c4f3e><span class="relative text-base font-semibold text-white" data-v-b56c4f3e>Connexion</span></a></div>`);
        }
        _push(`</div><div class="text-left" data-v-b56c4f3e><button class="btn btn-sm btn-circle btn-outline" data-v-b56c4f3e><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b56c4f3e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-b56c4f3e></path></svg></button></div></div><div class="p-4 overflow-auto custom-scrollbar" data-v-b56c4f3e><div class="flex flex-col" data-v-b56c4f3e><div class="flex-1 border-gray-800 dark:border-white custom-scrollbar" data-v-b56c4f3e><div class="pt-4 pb-3" data-v-b56c4f3e>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("home"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 text-base text-gray-800 rounded-md font-bega-medium dark:text-white focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b56c4f3e${_scopeId}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-v-b56c4f3e${_scopeId}></path><polyline points="9 22 9 12 15 12 15 22" data-v-b56c4f3e${_scopeId}></polyline></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Accueil</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "w-6 h-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
                  createVNode("polyline", { points: "9 22 9 12 15 12 15 22" })
                ])),
                createVNode("span", { class: "ml-2" }, "Accueil")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("register.begin"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base text-gray-800 rounded-md font-bega-medium dark:text-white hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b56c4f3e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Devenir Prestataire</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Devenir Prestataire")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="relative" data-v-b56c4f3e><button type="button" class="flex flex-row items-center w-full px-3 py-2 mt-1 text-lg text-left text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:dark:text-white focus:text-white focus:bg-amber-600" data-v-b56c4f3e><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b56c4f3e><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" data-v-b56c4f3e></path></svg><span class="ml-2" data-v-b56c4f3e>Categories</span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "rotate-180": open.value, "rotate-0": !open.value }, "w-5 h-5 px-1 mt-1 transform"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b56c4f3e><polyline points="6 9 12 15 18 9" data-v-b56c4f3e></polyline></svg></button>`);
        _push(ssrRenderComponent(unref(Collapse), {
          when: open.value,
          class: "flex flex-col px-2 py-2 rounded-md shadow-xs bg-inherit"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(categories.value, (category) => {
                _push2(`<div data-v-b56c4f3e${_scopeId}><button class="flex items-center justify-between w-full px-3 py-2 mt-1 text-lg text-left text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:dark:text-white focus:text-white focus:bg-amber-600" data-v-b56c4f3e${_scopeId}><span class="flex gap-2 ml-3" data-v-b56c4f3e${_scopeId}>`);
                if (!unref(isDark)) {
                  _push2(ssrRenderComponent(_sfc_main$4, {
                    illustration: category.illustration,
                    fillColor: "#000"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_sfc_main$4, {
                    illustration: category.illustration,
                    fillColor: "#FFF"
                  }, null, _parent2, _scopeId));
                }
                _push2(`<span class="ml-3" data-v-b56c4f3e${_scopeId}>${ssrInterpolate(category.name)}</span></span><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([{ "rotate-180": expandedItems.value.includes(category.id), "rotate-0": !expandedItems.value.includes(category.id) }, "w-6 h-6 px-1 mt-1 transform"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b56c4f3e${_scopeId}><polyline points="6 9 12 15 18 9" data-v-b56c4f3e${_scopeId}></polyline></svg></button>`);
                _push2(ssrRenderComponent(unref(Collapse), {
                  when: expandedItems.value.includes(category.id),
                  class: "flex flex-col px-6 py-2 mt-2 rounded-md shadow-xs bg-inherit",
                  "aria-orientation": "vertical",
                  "aria-labelledby": "user-menu",
                  role: "menuitem"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("categoryName", category.slug),
                        onClick: ($event) => navOpen.value = false,
                        class: "flex flex-row items-center px-8 py-2 text-base text-gray-800 rounded-md font-bega-medium mxr-4 dark:text-white hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
                        role: "menuitem"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Tout sur ${ssrInterpolate(category.name)}`);
                          } else {
                            return [
                              createTextVNode(" Tout sur " + toDisplayString(category.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<!--[-->`);
                      ssrRenderList(category.subcategories, (subcategory) => {
                        _push3(`<div class="px-8" data-v-b56c4f3e${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(Link), {
                          href: _ctx.route("SubcategoryName", [category.slug, subcategory.name]),
                          class: "flex flex-row items-center px-3 py-2 text-base text-gray-800 rounded-md font-bega-medium dark:text-white hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
                          to: { name: "sub.name", params: { name: category.name, sub: subcategory.name } }
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(subcategory.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(subcategory.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        createVNode(unref(Link), {
                          href: _ctx.route("categoryName", category.slug),
                          onClick: ($event) => navOpen.value = false,
                          class: "flex flex-row items-center px-8 py-2 text-base text-gray-800 rounded-md font-bega-medium mxr-4 dark:text-white hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
                          role: "menuitem"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tout sur " + toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "onClick"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(category.subcategories, (subcategory) => {
                          return openBlock(), createBlock("div", {
                            class: "px-8",
                            onClick: ($event) => navOpen.value = false
                          }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("SubcategoryName", [category.slug, subcategory.name]),
                              class: "flex flex-row items-center px-3 py-2 text-base text-gray-800 rounded-md font-bega-medium dark:text-white hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
                              to: { name: "sub.name", params: { name: category.name, sub: subcategory.name } }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(subcategory.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href", "to"])
                          ], 8, ["onClick"]);
                        }), 256))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                  return openBlock(), createBlock("div", {
                    key: category.id
                  }, [
                    createVNode("button", {
                      onClick: ($event) => toggleAccordion(category.id),
                      class: "flex items-center justify-between w-full px-3 py-2 mt-1 text-lg text-left text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:dark:text-white focus:text-white focus:bg-amber-600"
                    }, [
                      createVNode("span", { class: "flex gap-2 ml-3" }, [
                        !unref(isDark) ? (openBlock(), createBlock(_sfc_main$4, {
                          key: 0,
                          illustration: category.illustration,
                          fillColor: "#000"
                        }, null, 8, ["illustration"])) : (openBlock(), createBlock(_sfc_main$4, {
                          key: 1,
                          illustration: category.illustration,
                          fillColor: "#FFF"
                        }, null, 8, ["illustration"])),
                        createVNode("span", { class: "ml-3" }, toDisplayString(category.name), 1)
                      ]),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: [{ "rotate-180": expandedItems.value.includes(category.id), "rotate-0": !expandedItems.value.includes(category.id) }, "w-6 h-6 px-1 mt-1 transform"],
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("polyline", { points: "6 9 12 15 18 9" })
                      ], 2))
                    ], 8, ["onClick"]),
                    createVNode(unref(Collapse), {
                      when: expandedItems.value.includes(category.id),
                      class: "flex flex-col px-6 py-2 mt-2 rounded-md shadow-xs bg-inherit",
                      "aria-orientation": "vertical",
                      "aria-labelledby": "user-menu",
                      role: "menuitem"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("categoryName", category.slug),
                          onClick: ($event) => navOpen.value = false,
                          class: "flex flex-row items-center px-8 py-2 text-base text-gray-800 rounded-md font-bega-medium mxr-4 dark:text-white hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
                          role: "menuitem"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Tout sur " + toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "onClick"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(category.subcategories, (subcategory) => {
                          return openBlock(), createBlock("div", {
                            class: "px-8",
                            onClick: ($event) => navOpen.value = false
                          }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("SubcategoryName", [category.slug, subcategory.name]),
                              class: "flex flex-row items-center px-3 py-2 text-base text-gray-800 rounded-md font-bega-medium dark:text-white hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
                              to: { name: "sub.name", params: { name: category.name, sub: subcategory.name } }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(subcategory.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["href", "to"])
                          ], 8, ["onClick"]);
                        }), 256))
                      ]),
                      _: 2
                    }, 1032, ["when"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("Allservices"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b56c4f3e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Services</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Services")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("find_freelance"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b56c4f3e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Trouver un Freelance</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Trouver un Freelance")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("createProject"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b56c4f3e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Soumettre une mission</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Soumettre une mission")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("about"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b56c4f3e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Apropos</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Apropos")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("faq"),
          onClick: ($event) => navOpen.value = false,
          class: "flex flex-row items-center px-3 py-2 mt-1 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:dark:text-white focus:text-white focus:bg-amber-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" data-v-b56c4f3e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Foire aux Questions</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  })
                ])),
                createVNode("span", { class: "ml-2" }, "Foire aux Questions")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="flex flex-row items-center px-3 py-2 mt-1 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-50 hover:dark:text-white hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:dark:text-white focus:text-white" aria-label="Toggle color mode" data-v-b56c4f3e>`);
        if (!unref(isDark)) {
          _push(`<svg class="w-5 h-5 text-gray-800" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-b56c4f3e><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" data-v-b56c4f3e></path></svg>`);
        } else {
          _push(`<svg class="w-5 h-5 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-b56c4f3e><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" data-v-b56c4f3e></path></svg>`);
        }
        if (!unref(isDark)) {
          _push(`<span class="ml-2 text-gray-800" data-v-b56c4f3e>Sombre</span>`);
        } else {
          _push(`<span class="ml-2 text-gray-200" data-v-b56c4f3e>Clair</span>`);
        }
        _push(`</button></div></div>`);
        if (_ctx.$page.props.auth.user) {
          _push(`<div class="container mt-4 border-t border-gray-800 dark:border-gray-50" data-v-b56c4f3e><div class="pt-2 pb-3" data-v-b56c4f3e>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("user.dashboard"),
            onClick: ($event) => navOpen.value = false,
            class: "flex flex-row items-center px-3 py-2 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-100 hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
            role: "menuitem"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" data-v-b56c4f3e${_scopeId}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Dashboard</span>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-5 h-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                  ])),
                  createVNode("span", { class: "ml-2" }, "Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("profile.show"),
            onClick: ($event) => navOpen.value = false,
            class: "flex flex-row items-center px-2 py-2 text-base text-gray-800 rounded-md font-bega-medium dark:text-gray-100 hover:text-gray-900 hover:bg-findDark-200 dark:hover:bg-findDark-600 focus:outline-none focus:text-gray-900 dark:hover:text-gray-200 focus:bg-findDark-200",
            role: "menuitem"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b56c4f3e${_scopeId}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-b56c4f3e${_scopeId}></path><circle cx="12" cy="7" r="4" data-v-b56c4f3e${_scopeId}></circle></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>profile</span>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-6 h-6",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    createVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                    createVNode("circle", {
                      cx: "12",
                      cy: "7",
                      r: "4"
                    })
                  ])),
                  createVNode("span", { class: "ml-2" }, "profile")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("user.chat"),
            onClick: ($event) => navOpen.value = false,
            class: "flex flex-row items-center px-2 py-2 text-gray-800 font-bega-medium dark:text-gray-200 text-md focus:text-gray-900 dark:hover:text-gray-200 hover:text-gray-900 focus:outline-none dark:hover:bg-findDark-600",
            role: "menuitem"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-b56c4f3e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" data-v-b56c4f3e${_scopeId}></path></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Conversation </span>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-6 h-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    })
                  ])),
                  createVNode("span", { class: "ml-2" }, "Conversation ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (_ctx.$page.props.auth.freelance) {
            _push(`<!--[--><a href="/freelance-gestion" class="flex flex-row items-center px-2 py-2 text-gray-800 font-bega-medium dark:text-gray-200 text-md focus:text-gray-900 dark:hover:text-gray-200 hover:text-gray-900 focus:outline-none dark:hover:bg-findDark-600" role="menuitem" data-v-b56c4f3e><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b56c4f3e><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-b56c4f3e></path><circle cx="12" cy="7" r="4" data-v-b56c4f3e></circle></svg><span class="ml-2" data-v-b56c4f3e>Espace Freelance</span></a>`);
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("freelance.chat"),
              onClick: ($event) => navOpen.value = false,
              class: "flex flex-row items-center px-2 py-2 text-gray-800 font-bega-medium dark:text-gray-200 text-md focus:text-gray-900 dark:hover:text-gray-200 hover:text-gray-900 focus:outline-none dark:hover:bg-findDark-600",
              role: "menuitem"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b56c4f3e${_scopeId}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-v-b56c4f3e${_scopeId}></path><circle cx="12" cy="7" r="4" data-v-b56c4f3e${_scopeId}></circle></svg><span class="ml-2" data-v-b56c4f3e${_scopeId}>Conversation freelance</span>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-6 h-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                      createVNode("circle", {
                        cx: "12",
                        cy: "7",
                        r: "4"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, "Conversation freelance")
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<form data-v-b56c4f3e><button type="submit" class="flex flex-row items-center px-4 py-2 text-red-500 text-md hover:text-red-700 hover:bg-red-100 focus:outline-none focus:text-red-700 focus:bg-red-100" data-v-b56c4f3e><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b56c4f3e><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-v-b56c4f3e></path><polyline points="16 17 21 12 16 7" data-v-b56c4f3e></polyline><line x1="21" y1="12" x2="9" y2="12" data-v-b56c4f3e></line></svg> Deconnexion </button></form></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b56c4f3e"]]);
const Footer_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const categoriesStore = useCategoryStore();
    useSubcategoriesStore();
    const categories = computed(() => categoriesStore.categoriesGet.categories);
    ref(false);
    ref(false);
    ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-200 dark:bg-black" }, _attrs))}><div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"><div class="grid grid-cols-1 gap-8 lg:grid-cols-3"><div><div class=""><img src="/images/logo/find_02.png" alt="logo find" class="h-8"></div><p class="max-w-xs mt-4 text-gray-500 dark:text-gray-400"> Votre satisfaction dans nos services Freelance. </p><ul class="flex gap-6 mt-8"><li><a href="https://www.facebook.com/profile.php?id=100087893680900&amp;mibextid=LQQJ4d" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200"><span class="sr-only">Facebook</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a></li><li><a href="https://instagram.com/find_freelance?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200"><span class="sr-only">Instagram</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a></li><li><a href="https://twitter.com/find_freelance_?s=11&amp;t=qv6NIovEcQsLxmQv9mo_Zw" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200"><span class="sr-only">Twitter</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a></li></ul></div><div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"><div><p class="text-gray-900 font-bega-medium lg:text-lg dark:text-white">Categories</p><ul class="mt-6 space-y-4 text-base"><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("categoryName", category.slug),
          class: "text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
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
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><p class="text-lg text-gray-900 font-bega-medium dark:text-white">Companie</p><ul class="mt-6 space-y-4 text-base"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/about",
        class: "text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Apropos `);
          } else {
            return [
              createTextVNode(" Apropos ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><p class="text-lg text-gray-900 font-bega-medium dark:text-white"> Liens Utiles </p><ul class="mt-6 space-y-4 text-base"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/contact",
        class: "text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("faq"),
        class: "text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQs `);
          } else {
            return [
              createTextVNode(" FAQs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#" class="text-gray-700 transition hover:text-skin-fill dark:text-gray-200"> Live Chat </a></li></ul></div><div><p class="text-lg text-gray-900 font-bega-medium dark:text-white">Legal</p><ul class="mt-6 space-y-4 text-base"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("terms.show"),
        class: "text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conditions d&#39;utilisation `);
          } else {
            return [
              createTextVNode(" Conditions d'utilisation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("policy.show"),
        class: "text-gray-700 transition hover:text-skin-fill dark:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Politique de confidentialité `);
          } else {
            return [
              createTextVNode(" Politique de confidentialité ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div><p class="text-sm text-gray-500 dark:text-gray-400"> ©${ssrInterpolate(unref(currentYear))}. FIND. All rights reserved. </p></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    computed(() => store.canLogin);
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password"),
        onSuccess: () => {
          store.loginUser();
          form.reset("password", "email");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = resolveComponent("Dialog");
      const _component_MazInput = resolveComponent("MazInput");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: unref(store).canLogin,
        "onUpdate:visible": ($event) => unref(store).canLogin = $event,
        closable: false,
        style: { width: "30rem" },
        breakpoints: { "1199px": "75vw", "900px": "80vw", "575px": "90vw" },
        position: "top",
        modal: true,
        pt: {
          mask: {
            style: "backdrop-filter: blur(2px)"
          }
        },
        draggable: false
      }, {
        container: withCtx(({ closeCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="scrollbar-sm dark:bg-gray-800 bg-gray-100 p-6 rounded-lg !overflow-hidden"${_scopeId}><div class="flex justify-between !overflow-hidden scrollbar-sm"${_scopeId}><div class="text-gray-800 dark:text-gray-100"${_scopeId}><h1${_scopeId}>Connexion</h1></div><div${_scopeId}><button class="btn btn-sm btn-circle btn-outline"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></div></div><div class="relative flex items-center p-0 !overflow-hidden scrollbar-sm"${_scopeId}><div class="z-10 !overflow-hidden scrollbar-sm"${_scopeId}><div class="flex flex-wrap"${_scopeId}><div class="flex flex-col w-full px-3 scrollbar-sm md:mx-auto md:flex-0 shrink-0"${_scopeId}><div class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"${_scopeId}><div class="p-2 pb-0 mb-0 bg-transparent border-b-0 md:p-6 rounded-t-2xl"${_scopeId}><h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text"${_scopeId}> Content de te revoir</h3><p class="mb-0"${_scopeId}>Entrez votre email et votre mot de passe pour vous connecter</p></div><div class="flex-auto p-4 md:p-6"${_scopeId}><form role="form"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInput, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              label: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInput, {
              label: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between"${_scopeId}><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Se souvenir de moi</span></label></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("password.request"),
              class: "mt-4 text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-900 focus:outline-none"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mot de passe oublié ? `);
                } else {
                  return [
                    createTextVNode(" Mot de passe oublié ? ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-center"${_scopeId}><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft gradient hover:scale-102 hover:shadow-soft-xs active:opacity-85"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}>Connexion `);
            if (unref(form).processing) {
              _push2(`<span${_scopeId}>....</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span></button></div><div class="relative w-full max-w-full px-3 mt-2 text-center shrink-0"${_scopeId}><p class="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white rounded text-slate-400"${_scopeId}> Ou </p></div><div class="flex flex-wrap px-3 mt-3 -mx-3 sm:px-6 xl:px-12"${_scopeId}><div class="hidden w-4/12 max-w-full px-1 ml-auto flex-0"${_scopeId}><a class="hidden inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="auth/facebook"${_scopeId}><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink32"${_scopeId}><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(3.000000, 3.000000)" fill-rule="nonzero"${_scopeId}><circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047"${_scopeId}></circle><path d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z" fill="#FFFFFF"${_scopeId}></path></g></g></svg></a></div><div class="w-4/12 max-w-full px-1 mx-auto flex-0"${_scopeId}><a class="inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="auth/google"${_scopeId}><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${_scopeId}><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"${_scopeId}><g transform="translate(3.000000, 2.000000)" fill-rule="nonzero"${_scopeId}><path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" fill="#4285F4"${_scopeId}></path><path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" fill="#34A853"${_scopeId}></path><path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" fill="#FBBC05"${_scopeId}></path><path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" fill="#EB4335"${_scopeId}></path></g></g></svg></a></div></div></form></div><div class="hidden p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2"${_scopeId}><p class="mx-auto mb-2 text-sm leading-normal"${_scopeId}> Vous avez déjà un compte? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "relative z-10 font-semibold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`S&#39;inscrire`);
                } else {
                  return [
                    createTextVNode("S'inscrire")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</p></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "scrollbar-sm dark:bg-gray-800 bg-gray-100 p-6 rounded-lg !overflow-hidden" }, [
                createVNode("div", { class: "flex justify-between !overflow-hidden scrollbar-sm" }, [
                  createVNode("div", { class: "text-gray-800 dark:text-gray-100" }, [
                    createVNode("h1", null, "Connexion")
                  ]),
                  createVNode("div", null, [
                    createVNode("button", {
                      onClick: ($event) => unref(store).loginUser(),
                      class: "btn btn-sm btn-circle btn-outline"
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
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      ]))
                    ], 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "relative flex items-center p-0 !overflow-hidden scrollbar-sm" }, [
                  createVNode("div", { class: "z-10 !overflow-hidden scrollbar-sm" }, [
                    createVNode("div", { class: "flex flex-wrap" }, [
                      createVNode("div", { class: "flex flex-col w-full px-3 scrollbar-sm md:mx-auto md:flex-0 shrink-0" }, [
                        createVNode("div", { class: "relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border" }, [
                          createVNode("div", { class: "p-2 pb-0 mb-0 bg-transparent border-b-0 md:p-6 rounded-t-2xl" }, [
                            createVNode("h3", { class: "relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text" }, " Content de te revoir"),
                            createVNode("p", { class: "mb-0" }, "Entrez votre email et votre mot de passe pour vous connecter")
                          ]),
                          createVNode("div", { class: "flex-auto p-4 md:p-6" }, [
                            createVNode("form", {
                              role: "form",
                              onSubmit: withModifiers(submit, ["prevent"])
                            }, [
                              createVNode("div", null, [
                                createVNode(_component_MazInput, {
                                  id: "email",
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  type: "email",
                                  label: "email"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_sfc_main$8, {
                                  class: "mt-2",
                                  message: unref(form).errors.email
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "mt-4" }, [
                                createVNode(_component_MazInput, {
                                  label: "password",
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  type: "password",
                                  required: "",
                                  autocomplete: "current-password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_sfc_main$8, {
                                  class: "mt-2",
                                  message: unref(form).errors.password
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", { class: "block mt-4" }, [
                                  createVNode("label", { class: "flex items-center" }, [
                                    createVNode(_sfc_main$9, {
                                      checked: unref(form).remember,
                                      "onUpdate:checked": ($event) => unref(form).remember = $event,
                                      name: "remember"
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Se souvenir de moi")
                                  ])
                                ]),
                                createVNode(unref(Link), {
                                  href: _ctx.route("password.request"),
                                  class: "mt-4 text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-900 focus:outline-none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Mot de passe oublié ? ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              createVNode("div", { class: "text-center" }, [
                                createVNode("button", {
                                  type: "submit",
                                  class: [{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft gradient hover:scale-102 hover:shadow-soft-xs active:opacity-85"],
                                  disabled: unref(form).processing
                                }, [
                                  createVNode("span", null, [
                                    createTextVNode("Connexion "),
                                    unref(form).processing ? (openBlock(), createBlock("span", { key: 0 }, "....")) : createCommentVNode("", true)
                                  ])
                                ], 10, ["disabled"])
                              ]),
                              createVNode("div", { class: "relative w-full max-w-full px-3 mt-2 text-center shrink-0" }, [
                                createVNode("p", { class: "z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white rounded text-slate-400" }, " Ou ")
                              ]),
                              createVNode("div", { class: "flex flex-wrap px-3 mt-3 -mx-3 sm:px-6 xl:px-12" }, [
                                createVNode("div", { class: "hidden w-4/12 max-w-full px-1 ml-auto flex-0" }, [
                                  createVNode("a", {
                                    class: "hidden inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75",
                                    href: "auth/facebook"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      width: "24px",
                                      height: "32px",
                                      viewBox: "0 0 64 64",
                                      version: "1.1",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink": "http://www.w3.org/1999/xlink32"
                                    }, [
                                      createVNode("g", {
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd"
                                      }, [
                                        createVNode("g", {
                                          transform: "translate(3.000000, 3.000000)",
                                          "fill-rule": "nonzero"
                                        }, [
                                          createVNode("circle", {
                                            fill: "#3C5A9A",
                                            cx: "29.5091719",
                                            cy: "29.4927506",
                                            r: "29.4882047"
                                          }),
                                          createVNode("path", {
                                            d: "M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z",
                                            fill: "#FFFFFF"
                                          })
                                        ])
                                      ])
                                    ]))
                                  ])
                                ]),
                                createVNode("div", { class: "w-4/12 max-w-full px-1 mx-auto flex-0" }, [
                                  createVNode("a", {
                                    class: "inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75",
                                    href: "auth/google"
                                  }, [
                                    (openBlock(), createBlock("svg", {
                                      width: "24px",
                                      height: "32px",
                                      viewBox: "0 0 64 64",
                                      version: "1.1",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      "xmlns:xlink": "http://www.w3.org/1999/xlink"
                                    }, [
                                      createVNode("g", {
                                        stroke: "none",
                                        "stroke-width": "1",
                                        fill: "none",
                                        "fill-rule": "evenodd"
                                      }, [
                                        createVNode("g", {
                                          transform: "translate(3.000000, 2.000000)",
                                          "fill-rule": "nonzero"
                                        }, [
                                          createVNode("path", {
                                            d: "M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267",
                                            fill: "#4285F4"
                                          }),
                                          createVNode("path", {
                                            d: "M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667",
                                            fill: "#34A853"
                                          }),
                                          createVNode("path", {
                                            d: "M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782",
                                            fill: "#FBBC05"
                                          }),
                                          createVNode("path", {
                                            d: "M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769",
                                            fill: "#EB4335"
                                          })
                                        ])
                                      ])
                                    ]))
                                  ])
                                ])
                              ])
                            ], 32)
                          ]),
                          createVNode("div", { class: "hidden p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2" }, [
                            createVNode("p", { class: "mx-auto mb-2 text-sm leading-normal" }, [
                              createTextVNode(" Vous avez déjà un compte? "),
                              createVNode(unref(Link), {
                                href: _ctx.route("register"),
                                class: "relative z-10 font-semibold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("S'inscrire")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "WebLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const categoriesStore = useCategoryStore();
    const subcategoriesStore = useSubcategoriesStore();
    const page = usePage();
    const titlePage = computed(() => {
      const urlPath = page.url.split("/");
      if (urlPath.length <= 1 || urlPath[1] === "") {
        return "Accueil";
      } else {
        return urlPath[1];
      }
    });
    onMounted(() => {
      subcategoriesStore.fetchSubCategories();
      categoriesStore.fetchCategories();
      initFlowbite();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Error = resolveComponent("Error");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-gray-800 font-bega_light" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), { title: titlePage.value }, null, _parent));
      _push(`<div class="pageWrapper">`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`<main class="min-h-screen bg-[#f8f8f8] dark:bg-gray-950">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/WebLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

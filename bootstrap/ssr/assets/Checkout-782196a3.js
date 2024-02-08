import { inject, ref, computed, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-726137d3.js";
import { d as cartStore } from "./NotificationComponent-1408ac1b.js";
import "@inertiajs/vue3";
import MazRadioButtons from "maz-ui/components/MazRadioButtons";
import MazAvatar from "maz-ui/components/MazAvatar";
import "@vueuse/core";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
const Checkout_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Checkout",
  __ssrInlineRender: true,
  props: {
    userSetting: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    inject("$swal");
    const usecartStore = cartStore();
    const props = __props;
    const form = ref({
      numero: "",
      provider: "",
      adresse: (_b = (_a = props.userSetting) == null ? void 0 : _a.addresse_facturation) == null ? void 0 : _b.adresse,
      commune: (_d = (_c = props.userSetting) == null ? void 0 : _c.addresse_facturation) == null ? void 0 : _d.commune,
      ville: (_f = (_e = props.userSetting) == null ? void 0 : _e.addresse_facturation) == null ? void 0 : _f.ville,
      pays: (_h = (_g = props.userSetting) == null ? void 0 : _g.addresse_facturation) == null ? void 0 : _h.pays
    });
    const country = ref(["CD"]);
    const coupon = ref("");
    const reduction = ref(null);
    const items = computed(() => usecartStore.items);
    const errorMessage = ref(null);
    const isShow = ref(false);
    const isOrange = ref(false);
    const totalPrice = computed(() => usecartStore.totalCost);
    const paideLoading = ref(false);
    const countdown = ref(60);
    const order_id = ref("");
    ref("");
    ref("");
    const provider = [
      {
        value: "10",
        label: "Orange Money",
        areaName: "orange",
        areaEnsignUrl: "https://www.jordanfinancialservices.com/2021/sites/default/files/images/logos/orange_money-01.jpg"
      },
      {
        value: "9",
        label: "Vodacom Mpesa",
        areaName: "Vodacom",
        areaEnsignUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtTAhz7LJHKfRf5ZGowNS3ZKJH_X_26iPUv3wzBkcug&s"
      },
      {
        value: "17",
        label: "airtel Money",
        areaName: "airtel",
        areaEnsignUrl: "https://zoom-eco.net/wp-content/uploads/2021/02/15.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Error = resolveComponent("Error");
      const _component_MazInput = resolveComponent("MazInput");
      const _component_MazPhoneNumberInput = resolveComponent("MazPhoneNumberInput");
      const _component_ButtonMt = resolveComponent("ButtonMt");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen py-5 pt-16 overflow-y-auto custom scrollbar bg-gray-50 min-w-screen dark:bg-findDark-950"><div class="px-2 md:px-12"><div><div class="mb-2"></div><div class="mb-2"><h1 class="text-5xl font-bold text-gray-600 md:text-2xl dark:text-gray-200">Panier</h1></div></div><div>`);
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`</div>`);
      if (items.value.length > 0) {
        _push(`<div class="w-full px-5 py-10 mx-0 text-gray-800 bg-white border-t border-b border-gray-200 rounded-md dark:bg-gray-800"><div class="w-full"><div class="items-start -mx-3 md:flex"><div class="px-3 md:w-7/12 lg:pr-10"><ul class="flex flex-col divide-y divide-gray-700"><!--[-->`);
        ssrRenderList(items.value, (item) => {
          _push(`<li class="flex flex-col py-6 sm:flex-row sm:justify-between"><div class="flex w-full space-x-2 sm:space-x-4"><img class="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500"${ssrRenderAttr("src", item.image)} alt="service"><div class="flex flex-col justify-between w-full pb-4"><div class="flex justify-between w-full pb-2 space-x-2"><div class="space-y-1"><h3 class="text-lg leading-snug font-bega-semibold dark:text-gray-100 sm:pr-8">${ssrInterpolate(item.name)}</h3><p class="text-sm dark:text-gray-100">${ssrInterpolate(item.basic)}</p></div><div class="hidden text-right dark:text-gray-100"><p class="text-lg font-bega-semibold">${ssrInterpolate(item.price * item.quantity)} $</p></div></div><div class="flex text-sm divide-x dark:text-white"><button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current"><path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path><rect width="32" height="200" x="168" y="216"></rect><rect width="32" height="200" x="240" y="216"></rect><rect width="32" height="200" x="312" y="216"></rect><path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path></svg><span>Retirer</span></button><div><div class="px-4 dark:text-gray-100"><p class="text-lg font-bega-semibold">${ssrInterpolate(item.price * item.quantity)} $</p></div></div></div></div></div></li>`);
        });
        _push(`<!--]--></ul><div class="pb-6 mb-6 border-b border-gray-200"><button class=""><label class="flex gap-1 mb-2 ml-1 text-sm text-gray-600 font-bega-semibold dark:text-gray-200">Coupon de reduction <span class="py-1"><svg style="${ssrRenderStyle(!isShow.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg></span><span class="py-1"><svg style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></span></label></button><form class="flex flex-col w-full" style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}"><div class="w-3/4"><div class="p-2">`);
        _push(ssrRenderComponent(_component_MazInput, {
          modelValue: coupon.value,
          "onUpdate:modelValue": ($event) => coupon.value = $event
        }, null, _parent));
        if (errorMessage.value) {
          _push(`<div class="text-red-600">${ssrInterpolate(errorMessage.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="w-2/4 px-4"><button type="submit" class="block w-full max-w-xs px-5 py-2 text-white bg-gray-400 border border-transparent rounded-md font-bega-semibold hover:bg-gray-500 focus:bg-gray-500">APPLIQUER</button></div></form></div><div class="pb-6 mb-6 text-gray-800 border-b border-gray-200"><div class="flex items-center w-full mb-3"><div class="flex-grow"><span class="text-gray-600 dark:text-gray-200">Sous total</span></div><div class="pl-3"><span class="font-bega-semibold dark:text-gray-50">${ssrInterpolate(totalPrice.value)} $</span></div></div>`);
        if (reduction.value) {
          _push(`<div class="flex items-center w-full"><div class="flex-grow"><span class="text-gray-600 dark:text-gray-200">Reduction</span></div><div class="pl-3"><span class="font-bega-semibold dark:text-gray-50">${ssrInterpolate(reduction.value)}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center w-full"><div class="flex-grow"><span class="text-gray-600 dark:text-gray-200">Taxes(GST)</span></div><div class="pl-3"><span class="font-bega-semibold dark:text-gray-50">0 $</span></div></div></div><div class="pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none"><div class="flex items-center w-full"><div class="flex-grow"><span class="text-gray-600 dark:text-gray-200">Total</span></div><div class="pl-3"><span class="text-gray-400 font-bega-semibold dark:text-gray-200">${ssrInterpolate(totalPrice.value)}$</span></div></div></div></div><form class="flex flex-col px-2 md:w-5/12"><div><div class="hidden w-full p-4 mb-4 bg-white border border-gray-200 rounded-md font-bega-semibold dark:bg-gray-900"><div class="flex flex-col gap-4">`);
        _push(ssrRenderComponent(_component_MazInput, {
          label: "Addresse",
          type: "Addresse",
          modelValue: form.value.adresse,
          "onUpdate:modelValue": ($event) => form.value.adresse = $event
        }, null, _parent));
        _push(ssrRenderComponent(_component_MazInput, {
          label: "commune",
          type: "commune",
          modelValue: form.value.commune,
          "onUpdate:modelValue": ($event) => form.value.commune = $event
        }, null, _parent));
        _push(ssrRenderComponent(_component_MazInput, {
          label: "ville",
          type: "ville",
          modelValue: form.value.ville,
          "onUpdate:modelValue": ($event) => form.value.ville = $event
        }, null, _parent));
        _push(ssrRenderComponent(_component_MazInput, {
          label: "Pays",
          type: "Pays",
          modelValue: form.value.pays,
          "onUpdate:modelValue": ($event) => form.value.pays = $event
        }, null, _parent));
        _push(`</div></div><div class="w-full mx-auto mb-6 text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900"><div class="hidden w-full p-6 border-b border-gray-200"><div class="mb-5"><label for="type1" class="flex items-center cursor-pointer"><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type1"${ssrIncludeBooleanAttr(Array.isArray(isOrange.value) ? ssrLooseContain(isOrange.value, null) : isOrange.value) ? " checked" : ""}><img src="https://www.jordanfinancialservices.com/2021/sites/default/files/images/logos/orange_money-01.jpg" class="h-6 ml-3"></label></div>`);
        if (isOrange.value) {
          _push(`<div class="px-2"><div class="relative grid grid-cols-3 gap-2 mb-3"></div><div class="mt-4"><button class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"><span>PAYER ($)</span></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full p-2 border-b border-gray-200 lg:p-6"><div class="flex flex-wrap gap-4 mb-5">`);
        _push(ssrRenderComponent(unref(MazRadioButtons), {
          modelValue: form.value.provider,
          "onUpdate:modelValue": ($event) => form.value.provider = $event,
          options: provider,
          color: "primary"
        }, {
          default: withCtx(({ option, selected }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle({ "display": "flex" })}"${_scopeId}>`);
              if (option.areaEnsignUrl) {
                _push2(ssrRenderComponent(unref(MazAvatar), {
                  src: option.areaEnsignUrl,
                  style: { "margin-right": "16px" },
                  size: "0.8rem"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"${_scopeId}><span class="dark:text-gray-200"${_scopeId}>${ssrInterpolate(option.label)}</span><span class="${ssrRenderClass({ "maz-text-muted": !selected })}"${_scopeId}>${ssrInterpolate(option.areaName)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { style: { "display": "flex" } }, [
                  option.areaEnsignUrl ? (openBlock(), createBlock(unref(MazAvatar), {
                    key: 0,
                    src: option.areaEnsignUrl,
                    style: { "margin-right": "16px" },
                    size: "0.8rem"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  createVNode("div", { style: { "display": "flex", "flex-direction": "column" } }, [
                    createVNode("span", { class: "dark:text-gray-200" }, toDisplayString(option.label), 1),
                    createVNode("span", {
                      class: { "maz-text-muted": !selected }
                    }, toDisplayString(option.areaName), 3)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (form.value.provider !== "") {
          _push(`<div><div><div class="grid grid-cols-1 gap-4 mb-4 lg:px-4">`);
          _push(ssrRenderComponent(_component_MazPhoneNumberInput, {
            label: "Telephone",
            "only-countries": country.value,
            success: false,
            required: "",
            modelValue: form.value.numero,
            "onUpdate:modelValue": ($event) => form.value.numero = $event,
            translations: {
              countrySelector: {
                placeholder: "Code pays",
                error: "Choisissez un pays",
                searchPlaceholder: "Rechercher un pays"
              },
              phoneInput: {
                placeholder: "Numéro de téléphone",
                example: "Exemple :"
              }
            }
          }, null, _parent));
          _push(`</div><div class="flex flex-col gap-4 px-3 mb-3">`);
          _push(ssrRenderComponent(_component_ButtonMt, { type: "submit" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` payer `);
              } else {
                return [
                  createTextVNode(" payer ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></form></div></div></div>`);
      } else {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-8"><h1 class="text-2xl">Votre panier est vide</h1></div>`);
      }
      _push(`</div>`);
      if (paideLoading.value) {
        _push(`<div><div><div class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen" style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.3)" })}"><div class="flex flex-col items-center px-5 py-2 bg-white border rounded-lg"><div class="relative block w-20 h-5 mt-2 loader-dots"><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div></div><div class="mt-2 text-xs font-medium text-center text-gray-500"> Paiement en cours... </div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (order_id.value) {
        _push(`<div style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.3)" })}" class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen"><div class="flex flex-col items-center justify-center px-12 py-8 mx-4 bg-gray-100 rounded-lg"><div class="w-32 h-32 px-12 py-12 mb-4 text-center text-gray-800 bg-gray-200 rounded-full"><p class="text-4xl font-bold">${ssrInterpolate(countdown.value)}</p><p class="text-lg"></p></div><p class="mb-4 text-xl text-gray-700">Veuillez confirmer votre paiement</p><p class="max-w-md text-base text-gray-600 font-bega-light">Une fenêtre pop-up va s&#39;ouvrir pour vous permettre de confirmer votre paiement. Veuillez suivre les instructions à l&#39;écran pour compléter la transaction. Ne fermez pas ni ne rafraîchissez cette page pendant le processus de paiement.</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Checkout/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

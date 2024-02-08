import { ref, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-1fc7bd97.js";
import { d as cartStore } from "./NotificationComponent-1408ac1b.js";
import "@inertiajs/vue3";
import MazRadioButtons from "maz-ui/components/MazRadioButtons";
import MazAvatar from "maz-ui/components/MazAvatar";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "vue-collapsed";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "flowbite";
import "./ResponsiveNavLink-79527a9d.js";
import "vue3-popper";
import "pinia";
import "axios";
const CheckoutCustom_vue_vue_type_style_index_0_scoped_e0f04bdc_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "CheckoutCustom",
  __ssrInlineRender: true,
  props: {
    userSetting: Object,
    proposal: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    cartStore();
    const props = __props;
    const form = ref({
      name: "",
      numero: "",
      adresse: (_b = (_a = props.userSetting) == null ? void 0 : _a.addresse_facturation) == null ? void 0 : _b.adresse,
      commune: (_d = (_c = props.userSetting) == null ? void 0 : _c.addresse_facturation) == null ? void 0 : _d.commune,
      ville: (_f = (_e = props.userSetting) == null ? void 0 : _e.addresse_facturation) == null ? void 0 : _f.ville,
      pays: (_h = (_g = props.userSetting) == null ? void 0 : _g.addresse_facturation) == null ? void 0 : _h.pays
    });
    const isShow = ref(false);
    ref(false);
    ref(false);
    ref(false);
    const country = ref(["CD"]);
    const isOrange = ref(false);
    ref(false);
    ref(false);
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
      const _component_TextInput = resolveComponent("TextInput");
      const _component_MazInput = resolveComponent("MazInput");
      const _component_MazPhoneNumberInput = resolveComponent("MazPhoneNumberInput");
      const _component_ButtonMt = resolveComponent("ButtonMt");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e0f04bdc><div class="min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900" data-v-e0f04bdc><div class="px-6 md:px-12" data-v-e0f04bdc><div data-v-e0f04bdc><div class="mb-2" data-v-e0f04bdc></div><div class="mb-2" data-v-e0f04bdc><h1 class="text-5xl font-bold text-gray-600 md:text-2xl dark:text-gray-200" data-v-e0f04bdc>Panier Personnaliser</h1></div></div><div data-v-e0f04bdc>`);
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`</div>`);
      if (props.proposal != null) {
        _push(`<div class="w-full px-5 py-10 mx-0 text-gray-800 bg-white border-t border-b border-gray-200 rounded-md dark:bg-gray-800" data-v-e0f04bdc><div class="w-full" data-v-e0f04bdc><div class="items-start -mx-3 md:flex" data-v-e0f04bdc><div class="px-3 md:w-7/12 lg:pr-10" data-v-e0f04bdc><ul class="flex flex-col divide-y divide-gray-700" data-v-e0f04bdc><li class="flex flex-col py-6 sm:flex-row sm:justify-between" data-v-e0f04bdc><div class="flex w-full space-x-2 sm:space-x-4" data-v-e0f04bdc><img class="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500"${ssrRenderAttr("src", "/storage/" + props.proposal.service.files[0])} alt="service" data-v-e0f04bdc><div class="flex flex-col justify-between w-full pb-4" data-v-e0f04bdc><div class="flex justify-between w-full pb-2 space-x-2" data-v-e0f04bdc><div class="space-y-1" data-v-e0f04bdc><h3 class="text-lg font-semibold leading-snug dark:text-gray-100 sm:pr-8" data-v-e0f04bdc>${ssrInterpolate(props.proposal.service.title)}</h3><p class="text-sm dark:text-gray-100" data-v-e0f04bdc></p></div><div class="text-right dark:text-gray-100" data-v-e0f04bdc><p class="text-lg font-semibold" data-v-e0f04bdc>$${ssrInterpolate(props.proposal.proposed_price)}</p><p class="text-sm line-through" data-v-e0f04bdc> $</p></div></div></div></div></li></ul><div class="pb-6 mb-6 border-b border-gray-200" data-v-e0f04bdc><div class="flex items-end justify-end" style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}" data-v-e0f04bdc><div class="flex-grow px-2 lg:max-w-md" data-v-e0f04bdc><div class="p-2" data-v-e0f04bdc>`);
        _push(ssrRenderComponent(_component_TextInput, null, null, _parent));
        _push(`</div></div><div class="p-2" data-v-e0f04bdc><button class="block w-full max-w-xs px-5 py-2 mx-auto font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:bg-gray-500" data-v-e0f04bdc>APPLIQUER</button></div></div></div><div class="pb-6 mb-6 text-gray-800 border-b border-gray-200" data-v-e0f04bdc><div class="flex items-center w-full mb-3" data-v-e0f04bdc><div class="flex-grow" data-v-e0f04bdc><span class="text-gray-600 dark:text-gray-200" data-v-e0f04bdc>Sous total</span></div><div class="pl-3" data-v-e0f04bdc><span class="font-semibold dark:text-gray-50" data-v-e0f04bdc>${ssrInterpolate(props.proposal.proposed_price)} $</span></div></div><div class="flex items-center w-full" data-v-e0f04bdc><div class="flex-grow" data-v-e0f04bdc><span class="text-gray-600 dark:text-gray-200" data-v-e0f04bdc>Taxes(GST)</span></div><div class="pl-3" data-v-e0f04bdc><span class="font-semibold dark:text-gray-50" data-v-e0f04bdc>$0</span></div></div></div><div class="pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none" data-v-e0f04bdc><div class="flex items-center w-full" data-v-e0f04bdc><div class="flex-grow" data-v-e0f04bdc><span class="text-gray-600 dark:text-gray-200" data-v-e0f04bdc>Total</span></div><div class="pl-3" data-v-e0f04bdc><span class="text-sm font-semibold text-gray-400 dark:text-gray-20" data-v-e0f04bdc></span><span class="font-semibold" data-v-e0f04bdc>${ssrInterpolate(props.proposal.proposed_price)} $</span></div></div></div></div><form class="flex flex-col px-2 md:w-5/12" data-v-e0f04bdc><div data-v-e0f04bdc><div class="hidden w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900" data-v-e0f04bdc><div class="flex flex-col gap-4" data-v-e0f04bdc>`);
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
        _push(`</div></div><div class="w-full mx-auto mb-6 text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900" data-v-e0f04bdc><div class="hidden w-full p-6 border-b border-gray-200" data-v-e0f04bdc><div class="mb-5" data-v-e0f04bdc><label for="type1" class="flex items-center cursor-pointer" data-v-e0f04bdc><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type1"${ssrIncludeBooleanAttr(Array.isArray(isOrange.value) ? ssrLooseContain(isOrange.value, null) : isOrange.value) ? " checked" : ""} data-v-e0f04bdc><img src="https://www.jordanfinancialservices.com/2021/sites/default/files/images/logos/orange_money-01.jpg" class="h-6 ml-3" data-v-e0f04bdc></label></div>`);
        if (isOrange.value) {
          _push(`<div class="px-2" data-v-e0f04bdc><div class="relative grid grid-cols-3 gap-2 mb-3" data-v-e0f04bdc></div><div class="mt-4" data-v-e0f04bdc><button class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true" data-v-e0f04bdc><span data-v-e0f04bdc>PAYER ($)</span></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full p-2 border-b border-gray-200 lg:p-6" data-v-e0f04bdc><div class="flex flex-wrap gap-4 mb-5" data-v-e0f04bdc>`);
        _push(ssrRenderComponent(unref(MazRadioButtons), {
          modelValue: form.value.provider,
          "onUpdate:modelValue": ($event) => form.value.provider = $event,
          options: provider,
          color: "primary"
        }, {
          default: withCtx(({ option, selected }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle({ "display": "flex" })}" data-v-e0f04bdc${_scopeId}>`);
              if (option.areaEnsignUrl) {
                _push2(ssrRenderComponent(unref(MazAvatar), {
                  src: option.areaEnsignUrl,
                  style: { "margin-right": "16px" },
                  size: "0.8rem"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}" data-v-e0f04bdc${_scopeId}><span class="dark:text-gray-200" data-v-e0f04bdc${_scopeId}>${ssrInterpolate(option.label)}</span><span class="${ssrRenderClass({ "maz-text-muted": !selected })}" data-v-e0f04bdc${_scopeId}>${ssrInterpolate(option.areaName)}</span></div></div>`);
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
          _push(`<div data-v-e0f04bdc><div data-v-e0f04bdc><div class="grid grid-cols-1 gap-4 mb-4 lg:px-4" data-v-e0f04bdc>`);
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
          _push(`</div><div class="flex flex-col gap-4 px-3 mb-3" data-v-e0f04bdc>`);
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
          _push(`</div> ${ssrInterpolate(form.value.provider)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></form></div></div></div>`);
      } else {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-8" data-v-e0f04bdc><h1 class="text-2xl" data-v-e0f04bdc>Votre panier est vide</h1></div>`);
      }
      _push(`</div>`);
      if (paideLoading.value) {
        _push(`<div data-v-e0f04bdc><div data-v-e0f04bdc><div class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen" style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.3)" })}" data-v-e0f04bdc><div class="flex flex-col items-center px-5 py-2 bg-white border rounded-lg" data-v-e0f04bdc><div class="relative block w-20 h-5 mt-2 loader-dots" data-v-e0f04bdc><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-e0f04bdc></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-e0f04bdc></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-e0f04bdc></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-e0f04bdc></div></div><div class="mt-2 text-xs font-medium text-center text-gray-500" data-v-e0f04bdc> Paiement en cours... </div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (order_id.value) {
        _push(`<div style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.3)" })}" class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen" data-v-e0f04bdc><div class="flex flex-col items-center justify-center px-12 py-8 mx-4 bg-gray-100 rounded-lg" data-v-e0f04bdc><div class="w-32 h-32 px-12 py-12 mb-4 text-center text-gray-800 bg-gray-200 rounded-full" data-v-e0f04bdc><p class="text-4xl font-bold" data-v-e0f04bdc>${ssrInterpolate(countdown.value)}</p><p class="text-lg" data-v-e0f04bdc></p></div><p class="mb-4 text-xl text-gray-700" data-v-e0f04bdc>Veuillez confirmer votre paiement</p><p class="max-w-md text-base text-gray-600 font-bega-light" data-v-e0f04bdc>Une fenêtre pop-up va s&#39;ouvrir pour vous permettre de confirmer votre paiement. Veuillez suivre les instructions à l&#39;écran pour compléter la transaction. Ne fermez pas ni ne rafraîchissez cette page pendant le processus de paiement.</p></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Checkout/CheckoutCustom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckoutCustom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0f04bdc"]]);
export {
  CheckoutCustom as default
};

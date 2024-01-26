import { ref, computed, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-e218b838.js";
import { useForm, Link } from "@inertiajs/vue3";
import "./NotificationComponent-fe8292d8.js";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-0bd0f449.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "MissionPaiement",
  __ssrInlineRender: true,
  props: {
    missionResponse: Object,
    userSetting: Object
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const stepP = ref(1);
    const missionResponse = computed(() => props.missionResponse.data);
    ref(false);
    const mission = ref(false);
    useForm({
      responce_id: null
    });
    ref(false);
    ref(false);
    const paiement = useForm({
      numero: "",
      nom: "",
      montant: props.missionResponse.data.budget,
      response: props.missionResponse.data.id,
      adresse: (_a = props.userSetting.addresse_facturation) == null ? void 0 : _a.adresse,
      commune: (_b = props.userSetting.addresse_facturation) == null ? void 0 : _b.commune,
      ville: (_c = props.userSetting.addresse_facturation) == null ? void 0 : _c.ville,
      pays: (_d = props.userSetting.addresse_facturation) == null ? void 0 : _d.pays
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Error = resolveComponent("Error");
      const _component_InputText = resolveComponent("InputText");
      const _component_InputError = resolveComponent("InputError");
      const _component_Dialog = resolveComponent("Dialog");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user.dashboard"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
      _push(`</li><li aria-current="page">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user.missions"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Mission</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mx-1 text-gray-400",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 6 10"
              }, [
                createVNode("path", {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "m1 9 4-4-4-4"
                })
              ])),
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Candidature</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">Paiement</h1></div><div><div>`);
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`</div><div class="min-h-screen rounded-lg lg:max-w-6xl lg:mx-auto"><div x-data=""><div><div class="flex flex-col items-center py-4 bg-white border-b dark:bg-gray-800 sm:flex-row sm:px-10 lg:px-20 xl:px-32"><a href="#" class="text-2xl font-bold text-gray-800 dark:text-gray-50">Paiment</a><div class="py-2 mt-4 text-xs sm:mt-0 sm:ml-auto sm:text-base"><div class="relative mx-2"><ul class="relative flex items-center justify-between w-full space-x-2 sm:space-x-4"><li class="flex items-center space-x-3 text-left sm:space-x-4"><a class="${ssrRenderClass([{ "ring ring-gray-600 ring-offset-2 bg-gray-600 dark:text-gray-100": stepP.value == 1 }, "flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"])}" href="#">1</a><span class="font-semibold text-gray-800 dark:text-gray-50">Info</span></li><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg><li class="flex items-center space-x-3 text-left cursor-pointer sm:space-x-4"><a class="${ssrRenderClass([{ "ring ring-gray-600 ring-offset-2 dark:text-gray-100 bg-gray-600": stepP.value == 2 }, "flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"])}" href="#">2</a><span class="font-semibold text-gray-800 dark:text-gray-50">Mission</span></li><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg><li class="flex items-center space-x-3 text-left sm:space-x-4"><a class="${ssrRenderClass([{ "ring ring-gray-600  dark:text-gray-100 ring-offset-2 bg-gray-600": stepP.value == 3 }, "flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"])}" href="#">3</a><span class="font-semibold text-gray-800 dark:text-gray-50">Paiement</span></li></ul></div></div></div></div>`);
      if (stepP.value == 1) {
        _push(`<section class="py-8 bg-gray-100 dark:bg-gray-800"><div class="container mx-auto"><div class="max-w-6xl mx-auto"><h2 class="mb-4 text-3xl font-bold text-center">Paiement pour la mission </h2><div class="p-8 text-gray-700 rounded-lg dark:text-gray-200"><p class="text-lg text-gray-700 dark:text-gray-200"> Cher client,<br> Nous souhaitons vous informer qu&#39;il est maintenant temps de procéder au paiement pour votre mission auprès du freelance. Nous apprécions votre confiance en notre plateforme de mise en relation et nous sommes impatients de vo-us voir progresser avec succès dans votre projet.<br><br> Avant de passer au paiement, nous aimerions vous rappeler quelques points importants : <ul class="pl-4 text-gray-700 list-disc list-inside dark:text-gray-200"><li>Vérifiez les détails de la mission</li><li>Établissez un accord clair</li><li>Assurez-vous de disposer des fonds nécessaires</li><li>Suivez les instructions de paiement</li><li>Communiquez avec le freelance</li></ul> Nous vous remercions de votre confiance et de votre collaboration. Nous sommes là pour vous soutenir tout au long de votre projet et nous espérons que vous serez pleinement satisfait des résultats obtenus avec l&#39;aide du freelance.<br><br> Si vous avez des questions supplémentaires ou avez besoin d&#39;assistance, n&#39;hésitez pas à nous contacter. Nous sommes là pour vous aider.<br><br> Nous vous souhaitons le meilleur dans votre mission et nous sommes impatients de voir les résultats exceptionnels que vous obtiendrez avec l&#39;aide du freelance. </p></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (stepP.value == 2) {
        _push(`<div class="py-8 bg-gray-100 dark:bg-gray-800"><div class="rounded-lg"><section class="py-8 dark:bg-gray-800"><div class="px-4 max-w-7xl lg:mx-auto sm:px-2 lg:px-8"><div class="rounded-lg"><div class="p-3 lg:p-6"><h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-50">Récapitulation de la mission</h2><p class="mb-2 text-base font-medium"> Titre : <span class="text-base font-semibold">${ssrInterpolate(missionResponse.value.mission.title)}</span></p><p class="mb-2 text-base font-medium">Description : <span class="text-base font-semibold">${ssrInterpolate(missionResponse.value.mission.description)}</span></p><p class="mb-2"><span class="font-semibold">Budget : </span><span class="text-lg font-bold text-amber-600">${ssrInterpolate(missionResponse.value.mission.budget)} $</span></p><p class="mb-4 text-base font-medium text-gray-600 md:mb-2 dark:text-gray-300">Délai d&#39;echance : Du ${ssrInterpolate(missionResponse.value.mission.begin_mission)} au ${ssrInterpolate(missionResponse.value.mission.end_mission)}</p><h2 class="mt-8 mb-4 text-2xl font-bold">Proposition acceptée</h2><div class="p-4 bg-blue-100 rounded-lg dark:bg-gray-900"><p class="text-base font-semibold text-gray-800 dark:text-gray-50">${ssrInterpolate(missionResponse.value.freelance_user.name)} / ${ssrInterpolate(missionResponse.value.freelance_user.email)}</p><p class="mb-2">Budget proposer : <span class="text-lg font-bold text-amber-600">${ssrInterpolate(missionResponse.value.budget)} $</span></p></div></div></div></div></section></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (stepP.value == 3) {
        _push(`<div class="p-3 py-8 bg-gray-100 dark:bg-gray-800"><div class="mb-4"><a href="#" class="mb-4 text-2xl font-bold text-center text-gray-800">Methode de Paiment</a></div><div class="flex flex-col gap-2 lg:flex-row"><div class="w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900"><div class="grid grid-cols-1 gap-4"><h1>Address de Facturation / Livraison</h1>`);
        _push(ssrRenderComponent(_component_InputText, {
          modelValue: unref(paiement).adresse,
          "onUpdate:modelValue": ($event) => unref(paiement).adresse = $event,
          placeholder: "Addresse"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputError, {
          message: unref(paiement).errors.adresse
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          modelValue: unref(paiement).commune,
          "onUpdate:modelValue": ($event) => unref(paiement).commune = $event,
          placeholder: "commune"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputError, {
          message: unref(paiement).errors.commune
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          modelValue: unref(paiement).ville,
          "onUpdate:modelValue": ($event) => unref(paiement).ville = $event,
          placeholder: "ville"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputError, {
          message: unref(paiement).errors.ville
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          modelValue: unref(paiement).pays,
          "onUpdate:modelValue": ($event) => unref(paiement).pays = $event,
          placeholder: "Pays"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputError, {
          message: unref(paiement).errors.pays
        }, null, _parent));
        _push(`</div></div><div class="w-full mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900"><div class="hidden w-full p-3 border-b border-gray-200"><div class="mb-5"><label for="type1" class="flex items-center cursor-pointer"><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type1" x-model="isCard"><img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3"></label></div><div x-collapse class="px-2" x-cloak x-show="isCard"><div class="mt-4"><button wire:click="pay()" wire:loading.attr="disabled" class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"><span wire:loading.remove>PAYER (450)</span><span wire:loading wire:target="pay">PAIEMENT...</span></button></div></div></div><div class="w-full p-6 border-b border-gray-200"><div class="mb-5"><label for="type2" class="flex items-center cursor-pointer"><img src="/images/icon/maxicash.png" class="h-6 ml-3"></label></div><div x-collapse x-cloak x-show="isOther"><form><div class="grid grid-cols-1 gap-4 px-4 mb-4">`);
        _push(ssrRenderComponent(_component_InputText, {
          required: "",
          modelValue: unref(paiement).nom,
          "onUpdate:modelValue": ($event) => unref(paiement).nom = $event,
          placeholder: "Nom",
          class: "rounded-md"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          modelValue: unref(paiement).numero,
          "onUpdate:modelValue": ($event) => unref(paiement).numero = $event,
          placeholder: "Telephone",
          required: "",
          class: "rounded-md"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputError, {
          message: unref(paiement).errors.numero
        }, null, _parent));
        _push(`</div><button class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"><span>PAYER (${ssrInterpolate(missionResponse.value.budget)}) $</span></button></form></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: mission.value,
        "onUpdate:visible": ($event) => mission.value = $event,
        position: "'bottom'",
        modal: "",
        header: "Confirmer Comannde Finis",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col w-full mt-4"${_scopeId}><div${_scopeId}><div${_scopeId}><div class="flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100"${_scopeId}> Confirmez la réception de votre commande</div><div class="px-4 mt-4 text-lg text-gray-700 dark:text-gray-50"${_scopeId}> En confirmant la réception, vous attestez que la commande a été réalisée à votre satisfaction. Cela permettra au freelance de recevoir son paiement. Êtes-vous prêt à procéder? </div></div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: _ctx.debloquerPaiement,
              severity: "success",
              label: "Oui, je confirme"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col w-full mt-4" }, [
                createVNode("div", null, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center justify-center mb-2 text-lg text-gray-800 dark:text-gray-100" }, " Confirmez la réception de votre commande"),
                    createVNode("div", { class: "px-4 mt-4 text-lg text-gray-700 dark:text-gray-50" }, " En confirmant la réception, vous attestez que la commande a été réalisée à votre satisfaction. Cela permettra au freelance de recevoir son paiement. Êtes-vous prêt à procéder? ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  createVNode(_component_Button, {
                    onClick: _ctx.debloquerPaiement,
                    severity: "success",
                    label: "Oui, je confirme"
                  }, null, 8, ["onClick"])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Mission/MissionPaiement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

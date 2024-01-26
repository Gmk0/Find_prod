import { computed, resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Error",
  __ssrInlineRender: true,
  props: { status: Number },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      return {
        503: "503",
        500: "500",
        404: "404",
        403: "403"
      }[props.status];
    });
    const description = computed(() => {
      return {
        503: "Oh non, nous sommes en mode maintenance. Revenez nous voir bientôt, nous ne faisons que des retouches de beauté !",
        500: "Whoops, quelque chose a dérapé sur nos serveurs. Nos ingénieurs ont été envoyés en mission de sauvetage de bits perdus.",
        404: "Désolé, la page que vous cherchez s'est égarée dans l'univers numérique. Nous avons envoyé une équipe de recherche de liens.",
        403: "Oh la la ! L'accès à cette page est interdit. Apparemment, même les octets ont besoin d'une invitation VIP."
      }[props.status];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="h-screen w-screen bg-gray-50 dark:bg-gray-900 flex items-center"><div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700"><div class="w-full lg:w-1/2 mx-8"><div class="text-7xl text-amber-500 font-dark font-extrabold mb-8">${ssrInterpolate(title.value)}</div><p class="text-2xl md:text-3xl font-light leading-normal mb-8">${ssrInterpolate(description.value)}</p>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/",
        class: "px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-amber-600 active:bg-red-600 hover:bg-amber-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`retourner à la page d&#39;accueil`);
          } else {
            return [
              createTextVNode("retourner à la page d'accueil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12"><img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found"></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

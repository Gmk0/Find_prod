import { ref, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "FreelanceCard",
  __ssrInlineRender: true,
  props: {
    freelance: Object
  },
  setup(__props) {
    const toggler = ref(false);
    const props = __props;
    const like = ref(props.freelance.like);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FsLightbox = resolveComponent("FsLightbox");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-1 lg:mx-0" }, _attrs))}><div class="relative flex w-full min-w-[18rem] flex-col font-bega-light rounded-xl bg-white dark:bg-gray-900 bg-clip-border text-gray-700 shadow-lg"><div class="relative h-48 mx-4 mt-2 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">`);
      if (props.freelance.user.profile_photo_path != null) {
        _push(ssrRenderComponent(_component_FsLightbox, {
          toggler: toggler.value,
          sources: ["/storage/" + props.freelance.user.profile_photo_path]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.freelance.user.profile_photo_path != null) {
        _push(`<img class="object-cover w-full h-full"${ssrRenderAttr("src", "/storage/" + props.freelance.user.profile_photo_path)}${ssrRenderAttr("alt", props.freelance.user.name)}>`);
      } else {
        _push(`<img class="object-cover w-full h-48"${ssrRenderAttr("src", props.freelance.user.profile_photo_url)} alt="">`);
      }
      if (props.freelance.user.profile_photo_path != null) {
        _push(`<div class="flex items-center"><button class="absolute text-lg top-2 left-2"><i class="w-6 pi pi-eye"></i></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$page.props.auth.user) {
        _push(`<div class="flex items-center"><button class="absolute top-2 right-2"><span style="${ssrRenderStyle(!like.value ? null : { display: "none" })}" class=""><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></span><span style="${ssrRenderStyle(like.value ? null : { display: "none" })}"><svg class="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="p-3"><div class="flex items-center justify-between mb-2"><h5 class="block text-base antialiased leading-snug tracking-normal text-gray-800 font-bega_medium dark:text-gray-100">${ssrInterpolate(props.freelance.nomComplet)}</h5><p class="flex items-center gap-1.5 text-sm leading-relaxed text-gray-800 dark:text-gray-100 antialiased"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="-mt-0.5 h-3 w-3 text-yellow-400"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg> (${ssrInterpolate(props.freelance.level)}) </p></div><p class="block text-sm antialiased leading-relaxed text-gray-700 dark:text-gray-200"> (${ssrInterpolate(props.freelance.category.name)}) </p><div class="inline-flex flex-wrap items-center h-20 gap-3 mt-2 group"><!--[-->`);
      ssrRenderList(props.freelance.sub_categorie, (sub, index) => {
        _push(`<span class="items-center cursor-pointer py-1 px-2 rounded-md text-[10px] lg:text-[10px] border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none"><span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_tooltip, sub.name, void 0, { top: true }))}>${ssrInterpolate(sub.name)}</span></span>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-row justify-between gap-2 p-3 pt-auto"><button type="button" class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle text-sm font-bega_medium uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true"> Contacter </button>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profileFreelance", props.freelance.identifiant),
        class: "block w-full select-none rounded-lg py-2 px-2 text-center align-middle text-sm font-bega_medium uppercase dark:text-white shadow-md dark:shadow-white-500/20 text-amber-600 transition-all hover:shadow-lg focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` profile `);
          } else {
            return [
              createTextVNode(" profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FreelanceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-9b20c3c4.js";
import { Link } from "@inertiajs/vue3";
import "@vueuse/core";
import "./NotificationComponent-c4834522.js";
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
  __name: "Info",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen pt-16 bg-white border-t border-gray-200 dark:bg-gray-900"><div class="py-3"><div class="container px-6 m-auto text-gray-600 md:px-12 xl:px-6"><div class="space-y-6 lg:flex lg:space-y-0 lg:items-center lg:gap-12"><div class="hidden md:4/12 lg:w-6/12 md:flex"><img src="/images/hero/inscription.jpg" alt="image" class="object-cover rounded-md" loading="lazy" width="" height=""></div><div class="md:8/12 lg:w-6/12"><h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"> Qu&#39;est-ce qui fait un profil FIND réussi ? </h2><p class="mt-2 text-gray-600 dark:text-gray-300"> Votre première impression compte ! Créez un profil qui se démarquera de la foule sur FIND. </p><div class="grid items-center gap-4 mt-4 md:grid-cols-2"><div><div class="flex w-16 h-16 gap-4 rounded-full dark:bg-teal-900/20"><img src="/images/icon/user.gif" class="w-32 rounded" alt=""></div><div class="w-5/6 mt-2"><p class="font-semibold text-gray-500 dark:text-gray-400"> Prenez votre temps pour créer votre profil afin qu&#39;il soit exactement comme vous le souhaitez..</p></div></div><div><div class="flex w-16 h-16 gap-4 rounded-full dark:bg-teal-900/20"><img src="/images/icon/social-media.gif" class="w-32 rounded" alt=""></div><div class="w-5/6 mt-2"><p class="font-semibold text-gray-500 dark:text-gray-400">Ajoutez de la crédibilité en vous connectant à vos réseaux professionnels pertinents.</p></div></div><div><div class="flex w-16 h-16 gap-4 bg-purple-100 rounded-full dark:bg-purple-900/20"><img src="/images/icon/checklist.gif" class="w-32 rounded" alt=""></div><div class="w-5/6"><p class="text-gray-500 dark:text-gray-400"> Décrivez avec précision vos compétences professionnelles pour vous aider à obtenir plus de travail. </p></div></div><div><div class="flex w-16 h-16 gap-4 bg-purple-100 rounded-full dark:bg-purple-900/20"><img src="/images/icon/profile.gif" class="w-32 rounded" alt=""></div><div class="w-5/6 mt-2"><p class="font-semibold text-gray-500 dark:text-gray-400">Mettez un visage sur votre nom ! Téléchargez une photo de profil qui montre clairement votre visage..</p></div></div></div></div></div><div class="flex items-end justify-end mt-2 md:mt-5"><div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("freelancer.register"),
        class: "block w-full select-none rounded-lg bg-skin-fill py-2 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Continuer `);
          } else {
            return [
              createTextVNode(" Continuer ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Registration/Info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

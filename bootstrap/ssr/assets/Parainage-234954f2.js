import { computed, ref, onMounted, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrGetDirectiveProps } from "vue/server-renderer";
import { g as useParrainage } from "./NotificationComponent-c4834522.js";
import { _ as _sfc_main$2 } from "./ProfileSetting-c0ca6773.js";
import { _ as _sfc_main$1 } from "./UserLayout-9ca6fa30.js";
import { useToast } from "maz-ui";
import Skeleton from "primevue/skeleton/skeleton.esm.js";
import { Link, router } from "@inertiajs/vue3";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-50d0f569.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Parainage",
  __ssrInlineRender: true,
  props: {
    codeParainage: String,
    lienParainage: String
  },
  setup(__props) {
    const toast = useToast();
    const props = __props;
    const parrainageStore = useParrainage();
    const codeParainage = computed(() => props.codeParainage);
    const utilisateurParainer = computed(() => parrainageStore.getUsers);
    const loading = ref(false);
    const skeleton = ref(true);
    onMounted(async () => {
      parrainageStore.getAllUser();
      setTimeout(() => {
        skeleton.value = false;
      }, 2e3);
    });
    const genererCode = () => {
      router.post("/api/generate-code-parainage", {}, {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          loading.value = false;
        },
        onStart: () => {
          loading.value = true;
        },
        onError: (error) => {
          loading.value = false;
        }
      });
    };
    ref("");
    const modal = ref(false);
    const modelShare = () => {
      modal.value = !modal.value;
    };
    const onCopy = (e) => {
      toast.success("Lien copier");
    };
    const onError = (e) => {
      toast.warning("Failed to copy texts");
    };
    const networks = [
      { network: "email", name: "Email", icon: "far fah fa-lg fa-envelope", color: "#333333" },
      { network: "facebook", name: "Facebook", icon: "fab fah fa-lg fa-facebook-f", color: "#1877f2" },
      { network: "linkedin", name: "LinkedIn", icon: "fab fah fa-lg fa-linkedin", color: "#007bb5" },
      { network: "messenger", name: "Messenger", icon: "fab fah fa-lg fa-facebook-messenger", color: "#0084ff" },
      { network: "sms", name: "SMS", icon: "far fah fa-lg fa-comment-dots", color: "#333333" },
      { network: "telegram", name: "Telegram", icon: "fab fah fa-lg fa-telegram-plane", color: "#0088cc" },
      { network: "twitter", name: "Twitter", icon: "fab fah fa-lg fa-twitter", color: "#1da1f2" },
      { network: "whatsapp", name: "Whatsapp", icon: "fab fah fa-lg fa-whatsapp", color: "#25d366" }
    ];
    const sharing = {
      url: props.lienParainage,
      title: "Rejoignez-nous sur FIND!.",
      description: "Inscrivez-vous sur Find Freelance et découvrez un monde d'opportunités.Utilisez mon lien de parrainage pour une inscription rapide et facile!.",
      quote: "Explorez de nouvelles opportunités et élargissez vos horizons sur Find Freelance. Rejoignez-moi dès maintenant!",
      hashtags: "Freelance, Opportunités,Photographies,Design,Progammation",
      twitterUser: "Find Freelance"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadUser = resolveComponent("BreadUser");
      const _component_Button = resolveComponent("Button");
      const _component_Photo = resolveComponent("Photo");
      const _component_Dialog = resolveComponent("Dialog");
      const _component_ShareNetwork = resolveComponent("ShareNetwork");
      const _component_MazInput = resolveComponent("MazInput");
      const _directive_clipboard = resolveDirective("clipboard");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadUser, {
        title: "Parainage",
        first_title: "Profile",
        first_url: _ctx.route("profile.show"),
        second_title: "Parainage"
      }, null, _parent));
      _push(`<div><div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="col-span-12 lg:col-span-8"><div class="md:grid md:grid-cols-1 md:gap-6"><div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg text-gray-900 font-bega-medium dark:text-gray-50"> Boostez vos Avantages avec le Parrainage! </h3><p class="mt-1 text-sm text-gray-600 font-bega-light dark:text-gray-100"><span class="dark:text-gray-50">Mettez à jour votre profil et votre adresse e-mail pour débloquer des avantages exclusifs grâce à notre programme de parrainage. Invitez vos amis à rejoindre et profitez ensemble des opportunités exceptionnelles qui vous attendent!</span></p></div></div><div class="mt-5 rounded-md md:mt-0 md:col-span-2"><div><div class="px-4 py-5 bg-white shadow dark:bg-gray-900 sm:p-6"><div class="">`);
      if (!skeleton.value) {
        _push(`<div class="mb-6">`);
        if (codeParainage.value != null) {
          _push(`<h2 class="mb-2 text-2xl font-bega-medium dark:text-gray-100">Votre code Parainage : <span class="dark:text-gray-50">${ssrInterpolate(codeParainage.value)}</span></h2>`);
        } else {
          _push(`<div class="flex flex-col gap-4"><p class="text-base text-gray-800 dark:text-gray-50">Vous n&#39;avez pas encore de code de parainage veuillez en generer Un</p><div>`);
          _push(ssrRenderComponent(_component_Button, {
            loading: loading.value,
            onClick: ($event) => genererCode(),
            label: "Generer un code de parainage",
            outlined: ""
          }, null, _parent));
          _push(`</div></div>`);
        }
        if (codeParainage.value != null) {
          _push(ssrRenderComponent(_component_Button, {
            label: "Partager",
            onClick: ($event) => modelShare(),
            outlined: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div></div>`);
      if (skeleton.value) {
        _push(`<div class="p-4 border-round border-1 surface-border surface-card"><ul class="p-0 m-0 list-none"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<li class="mb-3"><div class="flex">`);
          _push(ssrRenderComponent(unref(Skeleton), {
            shape: "circle",
            size: "4rem",
            class: "mr-2 dark:!bg-gray-200"
          }, null, _parent));
          _push(`<div class="align-self-center" style="${ssrRenderStyle({ "flex": "1" })}">`);
          _push(ssrRenderComponent(unref(Skeleton), {
            width: "100%",
            class: "mb-2 dark:!bg-gray-200"
          }, null, _parent));
          _push(ssrRenderComponent(unref(Skeleton), {
            width: "75%",
            class: "dark:!bg-gray-200"
          }, null, _parent));
          _push(`</div></div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div>`);
        if (utilisateurParainer.value.length > 0) {
          _push(`<div class="mt-4"><div class="py-4"><h1 class="text-base dark:text-gray-100">Utilisateurs Parrainés</h1></div><!--[-->`);
          ssrRenderList(utilisateurParainer.value, (user) => {
            _push(`<div class="flex items-center mt-4">`);
            _push(ssrRenderComponent(_component_Photo, { user }, null, _parent));
            _push(`<div class="ml-4"><a href="" class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(user.name)}</a></div></div>`);
          });
          _push(`<!--]-->`);
          if (!_ctx.$page.props.auth.user.gift_used) {
            _push(`<div>`);
            if (utilisateurParainer.value.length >= 3) {
              _push(`<div class="mt-4"><p class="mb-4 text-lg text-amber-500">Félicitations! Vous avez parrainé 10 utilisateurs et vous avez gagné un cadeau spécial! 🥳​🥳​</p>`);
              _push(ssrRenderComponent(unref(Link), { class: "mt-6 text-lg text-green-500" }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("gift", _ctx.$page.props.auth.user.id)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`Recuperez votre cadeau 🎁`);
                        } else {
                          return [
                            createTextVNode("Recuperez votre cadeau 🎁")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(unref(Link), {
                        href: _ctx.route("gift", _ctx.$page.props.auth.user.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Recuperez votre cadeau 🎁")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ];
                  }
                }),
                _: 1
              }, _parent));
              _push(`</div>`);
            } else {
              _push(`<div class="mt-4"><p>Parrainez encore ${ssrInterpolate(10 - utilisateurParainer.value.length)} utilisateurs pour recevoir un cadeau spécial!</p></div>`);
            }
            _push(`</div>`);
          } else {
            _push(`<div class="mt-8">`);
            _push(ssrRenderComponent(unref(Link), { class: "mt-6 text-lg text-green-500" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(Link), null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Offre deja utiliser 🎁`);
                      } else {
                        return [
                          createTextVNode("Offre deja utiliser 🎁")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(unref(Link), null, {
                      default: withCtx(() => [
                        createTextVNode("Offre deja utiliser 🎁")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: modal.value,
        "onUpdate:visible": ($event) => modal.value = $event,
        style: { width: "25rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" },
        position: "center",
        modal: true,
        header: "Partager",
        draggable: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><div class="flex flex-row py-2 overflow-auto scrollbar-sm"${_scopeId}><!--[-->`);
            ssrRenderList(networks, (network) => {
              _push2(`<button class="flex flex-col items-center p-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ShareNetwork, {
                class: "p-4 text-white rounded-full",
                network: network.network,
                key: network.network,
                style: { backgroundColor: network.color },
                url: sharing.url,
                title: sharing.title,
                description: sharing.description,
                quote: sharing.quote,
                hashtags: sharing.hashtags,
                twitterUser: sharing.twitterUser
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="${ssrRenderClass(network.icon)}"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", {
                        class: network.icon
                      }, null, 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<span class="p-2"${_scopeId}>${ssrInterpolate(network.name)}</span></button>`);
            });
            _push2(`<!--]--></div><div class="flex gap-2 mt-4"${_scopeId}><div class="w-[80%]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInput, {
              modelValue: props.lienParainage,
              "onUpdate:modelValue": ($event) => props.lienParainage = $event,
              class: "block w-full mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-[20%]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, mergeProps({
              label: "copier",
              outlined: ""
            }, ssrGetDirectiveProps(_ctx, _directive_clipboard, props.lienParainage, "copy"), ssrGetDirectiveProps(_ctx, _directive_clipboard, onCopy, "success"), ssrGetDirectiveProps(_ctx, _directive_clipboard, onError, "error")), null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("div", { class: "flex flex-row py-2 overflow-auto scrollbar-sm" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(networks, (network) => {
                    return createVNode("button", { class: "flex flex-col items-center p-2" }, [
                      (openBlock(), createBlock(_component_ShareNetwork, {
                        class: "p-4 text-white rounded-full",
                        network: network.network,
                        key: network.network,
                        style: { backgroundColor: network.color },
                        url: sharing.url,
                        title: sharing.title,
                        description: sharing.description,
                        quote: sharing.quote,
                        hashtags: sharing.hashtags,
                        twitterUser: sharing.twitterUser
                      }, {
                        default: withCtx(() => [
                          createVNode("i", {
                            class: network.icon
                          }, null, 2)
                        ]),
                        _: 2
                      }, 1032, ["network", "style", "url", "title", "description", "quote", "hashtags", "twitterUser"])),
                      createVNode("span", { class: "p-2" }, toDisplayString(network.name), 1)
                    ]);
                  }), 64))
                ]),
                createVNode("div", { class: "flex gap-2 mt-4" }, [
                  createVNode("div", { class: "w-[80%]" }, [
                    createVNode(_component_MazInput, {
                      modelValue: props.lienParainage,
                      "onUpdate:modelValue": ($event) => props.lienParainage = $event,
                      class: "block w-full mt-1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "w-[20%]" }, [
                    withDirectives(createVNode(_component_Button, {
                      label: "copier",
                      outlined: ""
                    }, null, 512), [
                      [_directive_clipboard, props.lienParainage, "copy"],
                      [_directive_clipboard, onCopy, "success"],
                      [_directive_clipboard, onError, "error"]
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Profile/Parainage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

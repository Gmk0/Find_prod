import { onMounted, mergeProps, unref, useSSRContext, ref, computed, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useLayoutStore } from "./NotificationComponent-1408ac1b.js";
import "./OtherPanelUser-6298989a.js";
import { initFlowbite } from "flowbite";
import { usePage, useForm, Link } from "@inertiajs/vue3";
import axios from "axios";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {
  __name: "ChatLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const layoutStore = useLayoutStore();
    onMounted(() => {
      initFlowbite();
    });
    function resize() {
      if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();
      }
    }
    resize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["overflow-hidden has-min-sidebar", { "is-sidebar-open": unref(layoutStore).SidebarExpanded }]
      }, _attrs))}><main class="">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/ChatLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BodyMessage_vue_vue_type_style_index_0_scoped_e312d3af_lang = "";
const _sfc_main = {
  __name: "BodyMessage",
  __ssrInlineRender: true,
  props: {
    messages: Array,
    user: Object,
    chatId: String
  },
  setup(__props) {
    var _a, _b, _c;
    const layoutStore = useLayoutStore();
    const isShowChatInfo = ref(true);
    const activeTab = ref("tabImages");
    function initWindow() {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 800) {
          isShowChatInfo.value = true;
        } else {
          isShowChatInfo.value = false;
        }
      }
    }
    initWindow();
    const page = usePage();
    var data = { soundurl: "/sound/bell.mp3" };
    const playSound = () => {
      var audio = new Audio(data.soundurl);
      audio.play();
    };
    const user = computed(() => props.user);
    const visible = ref(false);
    ref(0);
    const scrollContainer = ref(null);
    ref([]);
    const props = __props;
    const form = useForm({
      message: "",
      chat: props.chatId,
      user: (_a = props.user) == null ? void 0 : _a.id,
      files: null
    });
    const proposalModal = ref(false);
    const refuserProposalModal = ref(false);
    const acceptProposalModal = ref(false);
    const accepterProposal = (id) => {
      proposal.proposalId = id;
      acceptProposalModal.value = true;
    };
    const refuserProposal = (id) => {
      proposal.proposalId = id;
      refuserProposalModal.value = true;
    };
    const declinePropasal = () => {
      if (proposal.proposalId != "") {
        proposal.post(route("declinePropasalUser"), {
          preserveScroll: true,
          onFinish: () => {
            refuserProposalModal.value = false;
            bottomScroll2();
          }
        });
      }
    };
    const acceptPropasalUser = () => {
      if (proposal.proposalId != "") {
        proposal.post(route("acceptPropasalUser"), {
          preserveScroll: true,
          onFinish: () => {
            acceptProposalModal.value = false;
            bottomScroll2();
          }
        });
      }
    };
    ref(false);
    const chooseProposal = ref(false);
    const changerProposal = async (id) => {
      try {
        const response = await axios.post(route("proposalGetPrice"), {
          proposal_id: id
        });
        proposal.price = response.data.price;
        proposal.proposalId = id;
        chooseProposal.value = !chooseProposal.value;
      } catch (e) {
      }
    };
    const changePrice = () => {
      if (proposal.proposalId != "") {
        proposal.post(route("proposalChangePrice"), {
          preserveScroll: true,
          onFinish: () => {
            chooseProposal.value = false, proposal.service_id = "";
          }
        });
      } else {
        alert("id absence");
      }
    };
    const annulerProposal = () => {
    };
    const proposal = useForm({
      price: "",
      service_id: "",
      freelance_user_id: (_b = props.user) == null ? void 0 : _b.id,
      user_id: (_c = props.user) == null ? void 0 : _c.id,
      chat_id: props.chatId,
      proposalId: ""
    });
    const DiscuterPrice = (id) => {
      proposal.service_id = id;
      if (proposal.service_id != "") {
        proposalModal.value = !proposalModal.value;
      } else {
        alert("id absence");
      }
    };
    const sendPropasal = () => {
      if (proposal.service_id != "") {
        proposal.post(route("proposalPrice"), {
          preserveScroll: true,
          onFinish: () => {
            proposalModal.value = false, proposal.service_id = "", bottomScroll2();
          }
        });
      } else {
        alert("id absence");
      }
    };
    const sendMessage = () => {
      var _a2;
      let date = /* @__PURE__ */ new Date();
      date.getFullYear();
      date.getMonth() + 1;
      date.getDate();
      const temporaryMessage = {
        id: null,
        body: form.message,
        //created_at: formattedDate,
        sender_id: page.props.auth.user.id,
        receiver_id: (_a2 = props.user) == null ? void 0 : _a2.id,
        temporary: true
      };
      props.messages.push(temporaryMessage);
      bottomScroll2();
      playSound();
      form.post(route("chat.Send"), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
      cancelFile();
      form.reset("message");
    };
    const bottomScroll2 = () => {
      setTimeout(() => {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
      }, 0);
    };
    computed(() => {
      if (!props.messages)
        return null;
      const grouped = {};
      props.messages.forEach((message) => {
        const date = message.created_at ? formatMessageDate(message.created_at) : null;
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(message);
      });
      return grouped;
    });
    const groupedMessages2 = computed(() => {
      if (!props.messages)
        return null;
      const grouped = {};
      props.messages.forEach((message, index) => {
        const date = message.created_at ? formatMessageDate(message.created_at) : null;
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push({
          message,
          shouldRenderButtons: shouldRenderButtons(message, index),
          shouldRenderChangerButton: shouldRenderChangerButton(message, index)
        });
      });
      return grouped;
    });
    const onSelect = (event) => {
      form.files = event.files;
    };
    const cancelFile = () => {
      visible.value = false;
      form.reset("files", "message");
    };
    const formatMessageDate = (timestamp) => {
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };
    onMounted(() => {
      topScroll();
    });
    window.Echo.private(`chat.${page.props.auth.user.id}`).listen("MessageSent", (e) => {
      bottomScroll2();
    });
    const topScroll = () => {
      const container = scrollContainer.value;
      const scrollHeight = container.scrollHeight;
      const duration = 500;
      const startTime = performance.now();
      const scrollStep = (timestamp) => {
        const currentTime = timestamp - startTime;
        const progress = currentTime / duration;
        container.scrollTop = Math.min(progress * scrollHeight, scrollHeight);
        if (currentTime < duration) {
          window.requestAnimationFrame(scrollStep);
        }
      };
      window.requestAnimationFrame(scrollStep);
    };
    const isImage = (fileName) => {
      let imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
      let extension = fileName.split(".").pop().toLowerCase();
      return imageExtensions.includes(extension);
    };
    const getFileName = (file) => {
      return file.split("/").pop();
    };
    const getHourFromDate = (created_at) => {
      const date = new Date(created_at);
      const hour = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hour}:${minutes}`;
    };
    const shouldRenderButtons = (message, index) => {
      return message.proposal != null && message.proposal.status === "pending" && page.props.auth.user.id === message.proposal_user && message.sender_id !== message.proposal_user && isLastPendingMessage(index);
    };
    const shouldRenderChangerButton = (message, index) => {
      return message.proposal != null && message.proposal.status === "rejected" && message.receiver_id === page.props.auth.user.id && page.props.auth.user.id != message.proposal_user && isLastRejectedMessage(index);
    };
    const isLastPendingMessage = (index) => {
      for (let i = props.messages.length - 1; i >= 0; i--) {
        if (props.messages[i].proposal && props.messages[i].proposal.status === "pending") {
          return i === index;
        }
      }
      return false;
    };
    const isLastRejectedMessage = (index) => {
      for (let i = props.messages.length - 1; i >= 0; i--) {
        if (props.messages[i].proposal && props.messages[i].proposal.status === "rejected") {
          return i === index;
        }
      }
      return false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d;
      const _component_Error = resolveComponent("Error");
      const _component_Photo = resolveComponent("Photo");
      const _component_Button = resolveComponent("Button");
      const _component_Dialog = resolveComponent("Dialog");
      const _component_Toast = resolveComponent("Toast");
      const _component_FileUpload = resolveComponent("FileUpload");
      const _component_MazInput = resolveComponent("MazInput");
      const _component_MazInputNumber = resolveComponent("MazInputNumber");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`<main class="${ssrRenderClass([isShowChatInfo.value && "lg:mr-80", "flex flex-col w-full font-bega_light mt-0 main-content h-[100vh] chat-app"])}" data-v-e312d3af><div class="chat-header h-[61px] border-b border-slate-150 dark:border-navy-700 relative z-10 flex w-full shrink-0 items-center justify-between bg-white px-[calc(var(--margin-x)-.5rem)] shadow-sm transition-[padding,width] duration-[.25s] dark:bg-navy-800" data-v-e312d3af><div class="flex items-center space-x-5" data-v-e312d3af><div class="ml-1 h-7 w-7" data-v-e312d3af><button class="${ssrRenderClass([unref(layoutStore).isSidebarExpanded && "active", "menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"])}" data-v-e312d3af><span data-v-e312d3af></span><span data-v-e312d3af></span><span data-v-e312d3af></span></button></div><div class="flex items-center space-x-4 cursor-pointer font-inter" data-v-e312d3af>`);
      if (user.value != null) {
        _push(`<div class="w-12 h-12" data-v-e312d3af>`);
        _push(ssrRenderComponent(_component_Photo, {
          user: user.value,
          taille: "12"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-e312d3af><p class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100" x-text="activeChat.name" data-v-e312d3af>${ssrInterpolate((_a2 = user.value) == null ? void 0 : _a2.name)}</p>`);
      if ((_b2 = user.value) == null ? void 0 : _b2.is_online) {
        _push(`<p class="mt-0.5 text-xs" data-v-e312d3af>En ligne </p>`);
      } else {
        _push(`<p class="mt-0.5 text-xs" data-v-e312d3af>${ssrInterpolate((_c2 = user.value) == null ? void 0 : _c2.last_activity)}</p>`);
      }
      _push(`</div></div></div><div class="flex px-4 -mr-1 gap-4items-center" data-v-e312d3af><button class="w-6 h-6 p-0 rounded-full btn2 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-e312d3af></path></svg></button><button class="${ssrRenderClass([isShowChatInfo.value ? "text-primary dark:text-accent-light" : "text-slate-500 dark:text-navy-200", "p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"])}" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M9.25 21.167h5.5c4.584 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417ZM13.834 2.833v18.334" data-v-e312d3af></path></svg></button></div></div><div class="grow overflow-y-auto scrollbar-sm px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]" data-v-e312d3af>`);
      if (groupedMessages2.value) {
        _push(`<div class="space-y-5" data-v-e312d3af><!--[-->`);
        ssrRenderList(groupedMessages2.value, (messages, date) => {
          _push(`<!--[-->`);
          if (date !== "null") {
            _push(`<div class="flex items-center mx-4 space-x-3" data-v-e312d3af><div class="flex-1 h-px bg-slate-200 dark:bg-navy-500" data-v-e312d3af></div><p data-v-e312d3af>${ssrInterpolate(date)}</p><div class="flex-1 h-px bg-slate-200 dark:bg-navy-500" data-v-e312d3af></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(messages, (groupedMessage, index) => {
            _push(`<div data-v-e312d3af><div class="${ssrRenderClass([groupedMessage.message.receiver_id == props.user.id ? "justify-end " : "items-start", "flex space-x-2.5 sm:space-x-5"])}" data-v-e312d3af><div class="${ssrRenderClass([groupedMessage.message.receiver_id == props.user.id ? "hidden" : "flex", ""])}" class="" data-v-e312d3af>`);
            _push(ssrRenderComponent(_component_Photo, { user: user.value }, null, _parent));
            _push(`</div><div class="flex flex-col items-start space-y-3.5" data-v-e312d3af><div class="${ssrRenderClass([groupedMessage.message.receiver_id == props.user.id ? "ml-4 md:ml-10 " : "mr-4 sm:mr-10", "max-w-lg"])}" data-v-e312d3af>`);
            if (groupedMessage.message.body != null) {
              _push(`<div class="${ssrRenderClass([groupedMessage.message.receiver_id == props.user.id ? "rounded-br-none dark:text-white bg-info/10 text-slate-700 dark:bg-accent" : " bg-white text-slate-700 dark:text-navy-100 dark:bg-navy-700 rounded-tl-none ", "p-3 shadow-sm rounded-2xl"])}" data-v-e312d3af><p data-v-e312d3af>${groupedMessage.message.body}</p></div>`);
            } else {
              _push(`<!---->`);
            }
            if (groupedMessage.message.service != null) {
              _push(`<div data-v-e312d3af><p class="mt-2 text-xs text-gray-500 dark:text-gray-400" data-v-e312d3af>Ce message est lié à un service :</p><div class="flex flex-col" data-v-e312d3af><div class="flex items-center p-3 bg-gray-200 rounded-t-lg shadow-sm dark:bg-navy-700 dark:text-navy-100" data-v-e312d3af><img class="w-10 h-10 mr-2 rounded-lg"${ssrRenderAttr("src", "/storage/" + groupedMessage.message.service.files[0])} alt="Service Image" data-v-e312d3af>`);
              _push(ssrRenderComponent(unref(Link), {
                href: _ctx.route("oneService", groupedMessage.message.service.service_numero),
                class: "truncate hover:text-amber-500"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(groupedMessage.message.service.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(groupedMessage.message.service.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div><div class="p-2 bg-gray-200 border-t border-gray-300 rounded-b-lg shadow-sm dark:bg-navy-700" data-v-e312d3af>`);
              if (_ctx.$page.props.auth.user.id != groupedMessage.message.user_service) {
                _push(ssrRenderComponent(_component_Button, {
                  size: "small",
                  outlined: "",
                  onClick: ($event) => DiscuterPrice(groupedMessage.message.service.id),
                  label: "Discuter prix"
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div></div>`);
            } else {
              _push(`<!---->`);
            }
            if (groupedMessage.shouldRenderButtons) {
              _push(`<div data-v-e312d3af><div class="flex gap-2 mt-4" data-v-e312d3af>`);
              _push(ssrRenderComponent(_component_Button, {
                size: "small",
                outlined: "",
                onClick: ($event) => accepterProposal(groupedMessage.message.proposal.id),
                label: "Accepter"
              }, null, _parent));
              _push(ssrRenderComponent(_component_Button, {
                size: "small",
                severity: "danger",
                outlined: "",
                onClick: ($event) => refuserProposal(groupedMessage.message.proposal.id),
                label: "Refuser"
              }, null, _parent));
              _push(`</div></div>`);
            } else {
              _push(`<!---->`);
            }
            if (groupedMessage.shouldRenderChangerButton) {
              _push(`<div class="mt-2" data-v-e312d3af>`);
              _push(ssrRenderComponent(_component_Button, {
                size: "small",
                outlined: "",
                onClick: ($event) => changerProposal(groupedMessage.message.proposal.id),
                label: "Changer"
              }, null, _parent));
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            if (groupedMessage.message.temporary != null) {
              _push(`<span class="flex items-center justify-end" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e312d3af></path></svg></span>`);
            } else {
              _push(`<!---->`);
            }
            if (groupedMessage.message.file != null) {
              _push(`<div data-v-e312d3af>`);
              if (isImage(groupedMessage.message.file[0])) {
                _push(`<div class="relative group" data-v-e312d3af><img class="object-cover rounded-lg h-44"${ssrRenderAttr("src", "/storage/" + groupedMessage.message.file[0])} alt="image" data-v-e312d3af><div class="absolute top-0 flex items-center justify-center w-full h-full transition-all duration-300 rounded-lg opacity-0 bg-black/30 group-hover:opacity-100" data-v-e312d3af><a${ssrRenderAttr("href", "/storage/" + groupedMessage.message.file[0])} target="_blank" class="p-0 font-medium text-white rounded-full btn2 h-9 w-9 bg-info hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" data-v-e312d3af></path></svg></a></div></div>`);
              } else {
                _push(`<a${ssrRenderAttr("href", "/storage/" + groupedMessage.message.file[0])} target="_blank" class="${ssrRenderClass([groupedMessage.message.receiver_id == props.user.id ? "rounded-br-none dark:text-white bg-info/10 text-slate-700 dark:bg-accent" : " bg-white text-slate-700 dark:text-navy-100 dark:bg-navy-700 rounded-tl-none ", "p-3 mb-4 shadow-sm rounded-2xl"])}" data-v-e312d3af>${ssrInterpolate(getFileName(groupedMessage.message.file[0]))}</a>`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            if (getHourFromDate(groupedMessage.message.created_at) !== "NaN:NaN") {
              _push(`<p class="${ssrRenderClass([groupedMessage.message.receiver_id == props.user.id ? " text-left" : "text-right", "mt-2 ml-auto text-xs text-right text-slate-400 dark:text-navy-300"])}" data-v-e312d3af>${ssrInterpolate(getHourFromDate(groupedMessage.message.created_at))}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div></div>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.messages.length === 0) {
        _push(`<div data-v-e312d3af><div class="flex flex-col items-center justify-center mt-8" data-v-e312d3af><div class="flex flex-col items-center mx-4 space-x-3" data-v-e312d3af><div class="p-2 bg-yellow-100 rounded-md" data-v-e312d3af><p class="text-lg text-gray-800" data-v-e312d3af>Pour plus de sécurité et votre protection, effectuez les paiements et les communications directement sur FIND.</p></div><div class="w-4/12 py-8" data-v-e312d3af><img src="/images/illustrations/chat-ui.svg" alt="illustation" data-v-e312d3af></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="chat-footer relative flex h-16 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800" data-v-e312d3af><div class="-ml-1.5 flex flex-1 space-x-2" data-v-e312d3af><button class="w-6 h-6 p-0 rounded-full btn22 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" data-v-e312d3af></path></svg></button><input type="text"${ssrRenderAttr("value", unref(form).message)} class="w-full h-10 bg-transparent border-none focus:ring-0 placeholder:text-slate-400/70" placeholder="Ecrivez un message" data-v-e312d3af></div><div class="-mr-1.5 flex" data-v-e312d3af><button class="hidden w-6 h-6 p-0 rounded-full btn22 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-e312d3af></path></svg></button><button class="w-10 h-10 p-0 rounded-full btn22 shrink-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341" data-v-e312d3af></path></svg></button></div></div>`);
      if (isShowChatInfo.value) {
        _push(`<div class="fixed sidebar-user right-0 top-0 z-[101] h-full w-full sm:w-80" data-v-e312d3af>`);
        if (isShowChatInfo.value) {
          _push(`<div class="flex flex-col w-full h-full transition-transform duration-200 bg-white border-l border-slate-150 dark:border-navy-600 dark:bg-navy-750" data-v-e312d3af><div class="flex h-[60px] items-center justify-between p-4" data-v-e312d3af><h3 class="text-base font-medium text-slate-700 dark:text-navy-100" data-v-e312d3af> Utilisateur info </h3><div class="-mr-1.5 flex space-x-1" data-v-e312d3af><button class="w-8 h-8 p-0 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-e312d3af></path></svg></button></div></div><div class="flex flex-col items-center mt-5" data-v-e312d3af>`);
          if (user.value) {
            _push(`<div class="w-20 h-20 avatar" data-v-e312d3af>`);
            _push(ssrRenderComponent(_component_Photo, {
              user: user.value,
              taille: "20"
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h3 class="mt-2 text-lg font-medium text-slate-700 dark:text-navy-100" data-v-e312d3af>${ssrInterpolate((_d = user.value) == null ? void 0 : _d.name)}</h3><p data-v-e312d3af></p><div class="mt-2 flex space-x-1.5" data-v-e312d3af><button class="hidden w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-e312d3af></path></svg></button><button class="hidden w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-v-e312d3af></path></svg></button><button class="hidden w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-e312d3af></path></svg></button></div></div><div class="flex flex-col mt-6" data-v-e312d3af><div class="px-4 overflow-x-auto is-scrollbar-hidden" data-v-e312d3af><div class="flex tabs-list" data-v-e312d3af><button class="${ssrRenderClass([activeTab.value === "tabImages" ? "border-amber-500  text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "px-3 py-2 font-medium border-b-2 rounded-none btn2 shrink-0"])}" data-v-e312d3af> Images </button><button class="${ssrRenderClass([activeTab.value === "tabFiles" ? "border-amber-500  text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "px-3 py-2 font-medium border-b-2 rounded-none btn2 shrink-0"])}" data-v-e312d3af> Files </button></div></div><div class="px-4 pt-4 tab-content" data-v-e312d3af>`);
          if (activeTab.value === "tabImages") {
            _push(`<div data-v-e312d3af><div class="grid grid-cols-4 gap-2" data-v-e312d3af><!--[-->`);
            ssrRenderList(props.messages, (message) => {
              _push(`<!--[-->`);
              if (message.file != null) {
                _push(`<div data-v-e312d3af>`);
                if (isImage(message.file[0])) {
                  _push(`<img class="object-cover object-center rounded-lg aspect-square"${ssrRenderAttr("src", "/storage/" + message.file[0])}${ssrRenderAttr("alt", message.file[0])} data-v-e312d3af>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (activeTab.value === "tabFiles") {
            _push(`<div data-v-e312d3af><div class="flex flex-col space-y-3.5" data-v-e312d3af><!--[-->`);
            ssrRenderList(props.messages, (message) => {
              _push(`<!--[-->`);
              if (message.file != null) {
                _push(`<div data-v-e312d3af>`);
                if (!isImage(message.file[0])) {
                  _push(`<a${ssrRenderAttr("href", "/storage/" + message.file[0])} target="_blank" class="flex items-center space-x-3 cursor-pointer" data-v-e312d3af><div class="flex items-center justify-center text-white mask is-squircle h-11 w-11 bg-warning" data-v-e312d3af><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-e312d3af><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-e312d3af></path></svg></div><div class="block max-w-md" data-v-e312d3af><p class="block font-medium break-before-auto text-slate-700 dark:text-navy-100" data-v-e312d3af>${ssrInterpolate(getFileName(message.file[0]))}</p></div></a>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Dialog, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        position: "bottom",
        modal: "",
        header: "Fichier",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e312d3af${_scopeId}><div class="card" data-v-e312d3af${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Toast, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FileUpload, {
              name: "demo[]",
              auto: true,
              onSelect,
              multiple: true,
              maxFileSize: 5e6
            }, {
              header: withCtx(({ chooseCallback }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" data-v-e312d3af${_scopeId2}><div class="flex gap-2" data-v-e312d3af${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => chooseCallback(),
                    icon: "pi pi-images",
                    rounded: "",
                    outlined: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" }, [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_Button, {
                          onClick: ($event) => chooseCallback(),
                          icon: "pi pi-images",
                          rounded: "",
                          outlined: ""
                        }, null, 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-e312d3af${_scopeId2}>Glissez-déposez des fichiers ici pour les télécharger.</p>`);
                } else {
                  return [
                    createVNode("p", null, "Glissez-déposez des fichiers ici pour les télécharger.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-1" data-v-e312d3af${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInput, {
              modelValue: unref(form).message,
              "onUpdate:modelValue": ($event) => unref(form).message = $event,
              placeholder: "Rajouter un message"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end gap-4 mt-4" data-v-e312d3af${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              label: "Envoyer",
              outlined: "",
              onClick: ($event) => sendMessage()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              severity: "danger",
              outlined: "",
              onClick: ($event) => cancelFile(),
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "card" }, [
                  createVNode(_component_Toast),
                  createVNode(_component_FileUpload, {
                    name: "demo[]",
                    auto: true,
                    onSelect,
                    multiple: true,
                    maxFileSize: 5e6
                  }, {
                    header: withCtx(({ chooseCallback }) => [
                      createVNode("div", { class: "flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" }, [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_Button, {
                            onClick: ($event) => chooseCallback(),
                            icon: "pi pi-images",
                            rounded: "",
                            outlined: ""
                          }, null, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    empty: withCtx(() => [
                      createVNode("p", null, "Glissez-déposez des fichiers ici pour les télécharger.")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mt-1" }, [
                  createVNode(_component_MazInput, {
                    modelValue: unref(form).message,
                    "onUpdate:modelValue": ($event) => unref(form).message = $event,
                    placeholder: "Rajouter un message"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "flex justify-end gap-4 mt-4" }, [
                  createVNode(_component_Button, {
                    label: "Envoyer",
                    outlined: "",
                    onClick: ($event) => sendMessage()
                  }, null, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    severity: "danger",
                    outlined: "",
                    onClick: ($event) => cancelFile(),
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: proposalModal.value,
        "onUpdate:visible": ($event) => proposalModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Proposer un prix ",
        style: { width: "30rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e312d3af${_scopeId}><form data-v-e312d3af${_scopeId}><div class="p-2 mb-4" data-v-e312d3af${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInputNumber, {
              modelValue: unref(proposal).price,
              "onUpdate:modelValue": ($event) => unref(proposal).price = $event,
              placeholder: "Proposer un prix"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              label: "Proposer"
            }, null, _parent2, _scopeId));
            _push2(`</form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(sendPropasal, ["prevent"])
                }, [
                  createVNode("div", { class: "p-2 mb-4" }, [
                    createVNode(_component_MazInputNumber, {
                      modelValue: unref(proposal).price,
                      "onUpdate:modelValue": ($event) => unref(proposal).price = $event,
                      placeholder: "Proposer un prix"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_Button, {
                    type: "submit",
                    label: "Proposer"
                  })
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: acceptProposalModal.value,
        "onUpdate:visible": ($event) => acceptProposalModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Accepter prix ",
        style: { width: "30rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e312d3af${_scopeId}><form data-v-e312d3af${_scopeId}><div class="mb-4" data-v-e312d3af${_scopeId}><label for="price" class="block mb-1 font-bold" data-v-e312d3af${_scopeId}>Proposer un prix :</label></div>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              label: "Accepter"
            }, null, _parent2, _scopeId));
            _push2(`</form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(acceptPropasalUser, ["prevent"])
                }, [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", {
                      for: "price",
                      class: "block mb-1 font-bold"
                    }, "Proposer un prix :")
                  ]),
                  createVNode(_component_Button, {
                    type: "submit",
                    label: "Accepter"
                  })
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: refuserProposalModal.value,
        "onUpdate:visible": ($event) => refuserProposalModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Refuser prix ",
        style: { width: "30rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e312d3af${_scopeId}><form data-v-e312d3af${_scopeId}><div class="flex gap-4" data-v-e312d3af${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              severety: "danger",
              outlined: "",
              label: "Refuser"
            }, null, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(declinePropasal, ["prevent"])
                }, [
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_Button, {
                      type: "submit",
                      severety: "danger",
                      outlined: "",
                      label: "Refuser"
                    })
                  ])
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: chooseProposal.value,
        "onUpdate:visible": ($event) => chooseProposal.value = $event,
        position: "bottom",
        modal: "",
        header: "Changer prix ",
        style: { width: "30rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-e312d3af${_scopeId}><form data-v-e312d3af${_scopeId}><div class="mb-4" data-v-e312d3af${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MazInputNumber, {
              modelValue: unref(proposal).price,
              "onUpdate:modelValue": ($event) => unref(proposal).price = $event,
              placeholder: "Prix du service"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex gap-4" data-v-e312d3af${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "submit",
              label: "Changer",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              onClick: annulerProposal,
              outlined: "",
              severity: "danger",
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(changePrice, ["prevent"])
                }, [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode(_component_MazInputNumber, {
                      modelValue: unref(proposal).price,
                      "onUpdate:modelValue": ($event) => unref(proposal).price = $event,
                      placeholder: "Prix du service"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_Button, {
                      type: "submit",
                      label: "Changer",
                      outlined: ""
                    }),
                    createVNode(_component_Button, {
                      onClick: annulerProposal,
                      outlined: "",
                      severity: "danger",
                      label: "Annuler"
                    })
                  ])
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BodyMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BodyMessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e312d3af"]]);
export {
  BodyMessage as B,
  _sfc_main$1 as _
};

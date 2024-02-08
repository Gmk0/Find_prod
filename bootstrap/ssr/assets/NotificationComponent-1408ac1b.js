import { withCtx, createVNode, openBlock, createBlock, unref, createCommentVNode, withModifiers, useSSRContext, computed, ref, toDisplayString, Transition, withDirectives, Fragment, renderList, vShow } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { a as _sfc_main$2, b as _sfc_main$3 } from "./ResponsiveNavLink-79527a9d.js";
import { useDark, useToggle } from "@vueuse/core";
import Popper from "vue3-popper";
import { defineStore } from "pinia";
import axios from "axios";
useDark();
const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    subCategoriesbyId: [],
    subCategoriesby: []
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get("/api/fetchAll");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchSubCategoriesByCategoryid(categoryid) {
      try {
        const response = await axios.get(`/api/subcategories/${categoryid}`);
        this.subCategoriesby = response.data.subcategories;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
  },
  getters: {
    categoriesGet: (state) => state.categories,
    subCategoriesGet: (state) => state.subCategoriesby
  },
  persist: true
});
const useParrainage = defineStore("useParrainage", {
  state: () => ({
    parrainagesUser: [],
    referalCode: null
  }),
  getters: {
    getReferalCode: (state) => state.referalCode,
    getUsers: (state) => state.parrainagesUser
  },
  actions: {
    async getCodeUser() {
      try {
        const response = await axios.get("/api/getCodeUser");
        this.referalCode = response.data.referral_code;
      } catch (e) {
      }
    },
    async getAllUser() {
      try {
        const response = await axios.get("/api/getAllUserParainer");
        if (response.status === 200) {
          this.parrainagesUser = response.data.users;
        } else {
          console.log("error:" + response.status);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
});
const useStore = defineStore({
  id: "isNotHome",
  state: () => ({
    isNotHome: false,
    login: false
  }),
  actions: {
    updateIsHome() {
      this.isNotHome = false;
    },
    updateIsNotHomeTrue() {
      this.isNotHome = true;
    },
    loginUser() {
      this.login = !this.login;
    }
  },
  getters: {
    getVariable() {
      return this.isNotHome;
    },
    canLogin: (state) => state.login
  }
});
const useSubcategoriesStore = defineStore("subcategories", {
  state: () => ({
    subCategories: []
  }),
  actions: {
    async fetchSubCategories() {
      try {
        const response = await axios.get("/api/subcategoriesAll");
        this.subCategories = response.data.subCategories;
      } catch (error) {
        console.error("Erreur lors de la récupération des sous-catégories:", error);
      }
    },
    setSubCategories(subCategories) {
      this.subCategories = subCategories;
    }
  },
  getters: {
    getSubCategories() {
      return this.subCategories;
    }
  }
});
const cartStore = defineStore("cart", {
  state: () => ({
    items: [],
    status: null,
    statusPayement: [],
    payementGetLink: ""
  }),
  getters: {
    totalItems: (state) => state.items.length,
    totalCost: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    statusError: (state) => state.status,
    statusPayementGet: (state) => state.statusPayement
  },
  actions: {
    async addItem(item) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    async removeItem(itemId) {
      const index = this.items.findIndex((item) => item.id === itemId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    async updateItemQuantity({ itemId, newQuantity }) {
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        item.quantity = newQuantity;
      }
    },
    async updatePriceCoupons({ itemId, price }) {
      console.log(itemId, price);
      const item = this.items.find((i) => i.id === itemId);
      if (item) {
        item.price = price;
      }
    },
    async clearCart() {
      this.items = [];
    },
    async checkoutMaxi(data) {
      this.status = [];
      try {
        console.log(data);
        const response = await axiosClient.post("/checkout-maxi", {
          name: data.name,
          numero: data.numero,
          items: this.items,
          totalprice: this.totalCost
        });
        return response.data;
      } catch (error) {
        if (error.response.status === 422) {
          console.log(error.response.data.errors);
        }
      }
    },
    updateTotalCost(newTotalCost) {
      console.log("Nouveau prix total :", newTotalCost);
      this.$patch((state) => {
        state.totalCost = newTotalCost;
      });
    },
    async handleMaxiStatus(data) {
      this.status = [];
      try {
        const response = await axiosClient.post("/checkout-maxi-status", {
          status: data.status,
          reference: data.reference,
          method: data.reference
          // Enlevez la virgule en trop ici
        });
        this.clearCart();
        return response.data;
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          this.status = error.response.data;
        } else {
          console.log("Une erreur inattendue s'est produite :", error);
        }
      }
    }
  },
  persist: true
});
const useLayoutStore = defineStore("userLayout", {
  state: () => ({
    isDarkModeEnabled: false,
    isMonochromeModeEnabled: false,
    isSearchbarActive: false,
    isSidebarExpanded: false,
    isRightSidebarExpanded: false,
    isRightSidebarPanel: false
  }),
  getters: {
    SidebarExpanded: (state) => state.isRightSidebarExpanded,
    RightSidebarExpanded: (state) => state.isRightSidebarPanel
  },
  actions: {
    toogleRight() {
      this.isRightSidebarExpanded = !this.isRightSidebarExpanded;
    },
    tooglePanel() {
      this.isRightSidebarPanel = !this.isRightSidebarPanel;
    },
    ToogleFalse() {
      this.isRightSidebarExpanded = false;
    },
    tooglePanelFalse() {
      this.isRightSidebarPanel = false;
    },
    ToogleTrue() {
      this.isRightSidebarExpanded = true;
    }
  }
});
const useSidebarPanelUser = defineStore("useSidebarPanelUser", {
  state: () => ({
    lastMessage: [],
    lastCommande: false,
    statusElement: []
  }),
  getters: {
    lastMessageUser: (state) => state.lastMessage,
    lastCommandeUser: (state) => state.statusElement
  },
  actions: {
    async fetchLastMessage(id) {
      try {
        const response = await axios.get(`/api/fetchLastUserMessage/${id}`);
        if (response.status === 200) {
          if (response.data.messages.length > 0) {
            this.lastMessage = response.data;
          } else {
            console.log("Aucun message trouvé.");
          }
        } else if (response.status === 203) {
          console.log("Aucun message n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des messages :", error);
      }
    },
    async fetchLastCommande(id) {
      try {
        const response = await axios.get(`/api/fetchLastCommande/${id}`);
        if (response.status === 200) {
          this.statusElement = response.data.status;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    }
  }
});
const useNotification = defineStore("useNotification", {
  state: () => ({
    lastNotification: [],
    lastCommande: false,
    statusElement: [],
    notificationParametres: null
  }),
  getters: {
    lastNotificationGet: (state) => state.lastNotification,
    getParametres: (state) => state.notificationParametres
    // lastCommandeUser: (state) => state.statusElement,
  },
  actions: {
    async fetchLastNotification() {
      try {
        const response = await axios.get(`/api/fetchLastNotification`);
        if (response.status === 200) {
          this.lastNotification = response.data.notifications;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    },
    async removeNotification(id) {
      try {
        const response = await axios.get(`/api/removeNotification/${id}`);
        if (response.status === 200) {
          this.fetchLastNotification();
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    },
    async getNotificationParametres() {
      try {
        const response = await axios.get("/api/getNotificationParametres");
        if (response.status == 200) {
          this.notificationParametres = response.data.userSetting;
        }
      } catch (error) {
      }
    }
  }
});
const useMissions = defineStore("useMissions", {
  state: () => ({
    missions: []
  }),
  getters: {
    missionGeters: (state) => state.missions
  },
  actions: {
    async fetchLastMission() {
      try {
        const response = await axios.get(`/api/fetchLastMissions`);
        if (response.status === 200) {
          this.missions = response.data.missions;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    }
  }
});
const homeSetting = defineStore("homeSetting", {
  state: () => ({
    faqs: []
  }),
  getters: {
    faqsGetter: (state) => state.faqs
  },
  actions: {
    async fetchLastFaq() {
      try {
        const response = await axios.get(`/api/getLastFaq`);
        if (response.status === 200) {
          this.faqs = response.data.faqs;
        } else if (response.status === 203) {
          console.log("Aucun element n'est renvoyé.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des element :", error);
      }
    }
  }
});
const _sfc_main$1 = {
  __name: "userInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    const dark = useToggle(isDark);
    const ToggleDark = () => {
      dark();
    };
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex text-sm transition border-2 border-transparent rounded-full dark:bg-gray-800 focus:outline-none focus:border-gray-300"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.profile_photo_path != null) {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "flex text-sm transition border-2 border-transparent rounded-full dark:bg-gray-800 focus:outline-none focus:border-gray-300" }, [
                _ctx.$page.props.auth.user.profile_photo_path != null ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("img", {
                    class: "object-cover w-8 h-8 rounded-full",
                    src: "/storage/" + _ctx.$page.props.auth.user.profile_photo_path,
                    alt: _ctx.$page.props.auth.user.name
                  }, null, 8, ["src", "alt"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("img", {
                    class: "object-cover w-8 h-8 rounded-full",
                    src: _ctx.$page.props.auth.user.profile_photo_url,
                    alt: _ctx.$page.props.auth.user.name
                  }, null, 8, ["src", "alt"])
                ]))
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-50"${_scopeId}> Manage Account </div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}>Profile</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, "Profile")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("user.dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"${_scopeId2}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Espace utilisateur</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Espace utilisateur")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.auth.freelance) {
              _push2(`<a href="/freelance-gestion" class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-50 hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none focus:bg-gray-100"${_scopeId}><span class="flex"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"${_scopeId}></path></svg><span class="ml-2"${_scopeId}> Espace Freelance</span></span></a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("user.missions")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Mes Mission</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Mes Mission")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("user.chat")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Conversation</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
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
                      createVNode("span", { class: "ml-2" }, " Conversation")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              onClick: ($event) => ToggleDark(),
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}>`);
                  if (unref(isDark)) {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"${_scopeId2}></path></svg>`);
                  }
                  _push3(`<span class="ml-2"${_scopeId2}>Dark Mode</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      unref(isDark) ? (openBlock(), createBlock("svg", {
                        key: 0,
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        })
                      ])) : (openBlock(), createBlock("svg", {
                        key: 1,
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
                          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, "Dark Mode")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-t border-gray-200"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"${_scopeId2}></path></svg><span class="ml-2"${_scopeId2}> Deconnexion</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Deconnexion")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-50" }, " Manage Account "),
              createVNode(_sfc_main$3, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, "Profile")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$3, {
                href: _ctx.route("user.dashboard")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                    ])),
                    createVNode("span", { class: "ml-2" }, " Espace utilisateur")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.auth.freelance ? (openBlock(), createBlock("a", {
                key: 0,
                href: "/freelance-gestion",
                class: "block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-50 hover:bg-gray-100 hover:dark:bg-gray-700 focus:outline-none focus:bg-gray-100"
              }, [
                createVNode("span", { class: "flex" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "w-5 h-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" })
                  ])),
                  createVNode("span", { class: "ml-2" }, " Espace Freelance")
                ])
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$3, {
                href: _ctx.route("user.missions")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, " Mes Mission")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$3, {
                href: _ctx.route("user.chat")
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
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
                    createVNode("span", { class: "ml-2" }, " Conversation")
                  ])
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$3, {
                onClick: ($event) => ToggleDark(),
                as: "button"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex" }, [
                    unref(isDark) ? (openBlock(), createBlock("svg", {
                      key: 0,
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      })
                    ])) : (openBlock(), createBlock("svg", {
                      key: 1,
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
                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      })
                    ])),
                    createVNode("span", { class: "ml-2" }, "Dark Mode")
                  ])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "border-t border-gray-200" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$3, { as: "button" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "flex" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        })
                      ])),
                      createVNode("span", { class: "ml-2" }, " Deconnexion")
                    ])
                  ]),
                  _: 1
                })
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/userInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "NotificationComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const useNotify = useNotification();
    const newLink = async (id, url) => {
      router.get(url);
      useNotify.removeNotification(id);
    };
    const notifications = computed(() => useNotify.lastNotificationGet);
    console.log(useNotify.lastNotificationGet);
    const activeTab = ref("tabAll");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(unref(Popper), null, {
        content: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80"${_scopeId}><div class="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200"${_scopeId}><div class="flex items-center justify-between px-4 pt-2"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><h3 class="font-medium text-slate-700 dark:text-navy-100"${_scopeId}> Notifications </h3><div class="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light"${_scopeId}>${ssrInterpolate(notifications.value.length)}</div></div><div class="inline-flex"${_scopeId}></div></div><div class="flex px-3 overflow-x-auto is-scrollbar-hidden shrink-0"${_scopeId}><button class="${ssrRenderClass([activeTab.value === "tabAll" ? "border-amber-600   bg-transparent text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 bg-transparent dark:hover:text-navy-100 dark:focus:text-navy-100", "shrink-0 rounded-none border-b-2 px-3.5 py-2.5"])}"${_scopeId}><span${_scopeId}>Tout</span></button><button class="${ssrRenderClass([activeTab.value === "Commande" ? "border-amber-600  text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "shrink-0 rounded-none border-b-2 px-3.5 py-2.5"])}"${_scopeId}><span${_scopeId}>Commande</span></button><button class="${ssrRenderClass([activeTab.value === "tabEvents" ? "border-amber-600  text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "shrink-0 rounded-none border-b-2 px-3.5 py-2.5"])}"${_scopeId}><span${_scopeId}>Evenement</span></button></div></div><div class="flex flex-col overflow-hidden"${_scopeId}><div style="${ssrRenderStyle(activeTab.value === "tabAll" ? null : { display: "none" })}" class="px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden"${_scopeId}>`);
            if (notifications.value.length > 0) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(notifications.value, (notification) => {
                _push2(`<div class="flex items-center mb-4 space-x-3"${_scopeId}><div class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15"${_scopeId}><i class="${ssrRenderClass({ "text-amber-600 dark:text--amber-600": notification.data.icon })}"${_scopeId}></i></div><a href="#" class="flex flex-col items-start"${_scopeId}>`);
                if (notification.data.title != null) {
                  _push2(`<p class="font-medium text-slate-600 dark:text-navy-100"${_scopeId}>${ssrInterpolate(notification.data.title)}</p>`);
                } else {
                  _push2(`<p class="font-medium text-slate-600 dark:text-navy-100"${_scopeId}> Notifications </p>`);
                }
                _push2(`<div class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId}>${ssrInterpolate(notification.data.message)}</div></a></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="pb-8 mt-8 text-center"${_scopeId}><img class="mx-auto w-36" src="/images/illustrations/empty.svg" alt="image"${_scopeId}><div class="mt-5"${_scopeId}><p class="text-base font-semibold text-slate-700 dark:text-navy-100"${_scopeId}> Pas de notificacion </p></div></div>`);
            }
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "tabEvents" ? null : { display: "none" })}" x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden"${_scopeId}>`);
            if (notifications.value.length > 0) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(notifications.value, (notification) => {
                _push2(`<div class="flex items-center mb-4 space-x-3"${_scopeId}><div class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15"${_scopeId}><i class="${ssrRenderClass({ "text-amber-600 dark:text--amber-600": notification.data.icon })}"${_scopeId}></i></div><a href="#" class="flex flex-col items-start"${_scopeId}>`);
                if (notification.data.title != null) {
                  _push2(`<p class="font-medium text-slate-600 dark:text-navy-100"${_scopeId}>${ssrInterpolate(notification.data.title)}</p>`);
                } else {
                  _push2(`<p class="font-medium text-slate-600 dark:text-navy-100"${_scopeId}> Notifications </p>`);
                }
                _push2(`<div class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId}>${ssrInterpolate(notification.data.message)}</div></a></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="pb-8 mt-8 text-center"${_scopeId}><img class="mx-auto w-36" src="/images/illustrations/empty.svg" alt="image"${_scopeId}><div class="mt-5"${_scopeId}><p class="text-base font-semibold text-slate-700 dark:text-navy-100"${_scopeId}> Pas de notificacion </p></div></div>`);
            }
            _push2(`</div><div style="${ssrRenderStyle(activeTab.value === "Commande" ? null : { display: "none" })}" x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden"${_scopeId}>`);
            if (notifications.value.length > 0) {
              _push2(`<div${_scopeId}><!--[-->`);
              ssrRenderList(notifications.value, (notification) => {
                _push2(`<div class="flex items-center mb-4 space-x-3"${_scopeId}><div class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15"${_scopeId}><i class="${ssrRenderClass({ "text-amber-600 dark:text--amber-600": notification.data.icon })}"${_scopeId}></i></div><a href="#" class="flex flex-col items-start"${_scopeId}>`);
                if (notification.data.title != null) {
                  _push2(`<p class="font-medium text-slate-600 dark:text-navy-100"${_scopeId}>${ssrInterpolate(notification.data.title)}</p>`);
                } else {
                  _push2(`<p class="font-medium text-slate-600 dark:text-navy-100"${_scopeId}> Notifications </p>`);
                }
                _push2(`<div class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId}>${ssrInterpolate(notification.data.message)}</div></a></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="pb-8 mt-8 text-center"${_scopeId}><img class="mx-auto w-36" src="/images/illustrations/empty.svg" alt="image"${_scopeId}><div class="mt-5"${_scopeId}><p class="text-base font-semibold text-slate-700 dark:text-navy-100"${_scopeId}> Pas de notificacion </p></div></div>`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80" }, [
                  createVNode("div", { class: "rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200" }, [
                    createVNode("div", { class: "flex items-center justify-between px-4 pt-2" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode("h3", { class: "font-medium text-slate-700 dark:text-navy-100" }, " Notifications "),
                        createVNode("div", { class: "badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light" }, toDisplayString(notifications.value.length), 1)
                      ]),
                      createVNode("div", { class: "inline-flex" })
                    ]),
                    createVNode("div", { class: "flex px-3 overflow-x-auto is-scrollbar-hidden shrink-0" }, [
                      createVNode("button", {
                        onClick: ($event) => activeTab.value = "tabAll",
                        class: [activeTab.value === "tabAll" ? "border-amber-600   bg-transparent text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 bg-transparent dark:hover:text-navy-100 dark:focus:text-navy-100", "shrink-0 rounded-none border-b-2 px-3.5 py-2.5"]
                      }, [
                        createVNode("span", null, "Tout")
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => activeTab.value = "Commande",
                        class: [activeTab.value === "Commande" ? "border-amber-600  text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "shrink-0 rounded-none border-b-2 px-3.5 py-2.5"]
                      }, [
                        createVNode("span", null, "Commande")
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => activeTab.value = "tabEvents",
                        class: [activeTab.value === "tabEvents" ? "border-amber-600  text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "shrink-0 rounded-none border-b-2 px-3.5 py-2.5"]
                      }, [
                        createVNode("span", null, "Evenement")
                      ], 10, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col overflow-hidden" }, [
                    createVNode(Transition, {
                      "enter-class": "transition-all duration-300 easy-in-out",
                      "enter-active-class": "opacity-0 [transform:translate3d(1rem,0,0)]",
                      "enter-to-class": "opacity-100 [transform:translate3d(0,0,0)]"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode("div", { class: "px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden" }, [
                          notifications.value.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(notifications.value, (notification) => {
                              return openBlock(), createBlock("div", { class: "flex items-center mb-4 space-x-3" }, [
                                createVNode("div", { class: "flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15" }, [
                                  createVNode("i", {
                                    class: { "text-amber-600 dark:text--amber-600": notification.data.icon }
                                  }, null, 2)
                                ]),
                                createVNode("a", {
                                  href: "#",
                                  onClick: ($event) => {
                                    var _a;
                                    return newLink(notification.id, (_a = notification.data) == null ? void 0 : _a.url);
                                  },
                                  class: "flex flex-col items-start"
                                }, [
                                  notification.data.title != null ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "font-medium text-slate-600 dark:text-navy-100"
                                  }, toDisplayString(notification.data.title), 1)) : (openBlock(), createBlock("p", {
                                    key: 1,
                                    class: "font-medium text-slate-600 dark:text-navy-100"
                                  }, " Notifications ")),
                                  createVNode("div", { class: "mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, toDisplayString(notification.data.message), 1)
                                ], 8, ["onClick"])
                              ]);
                            }), 256))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "pb-8 mt-8 text-center"
                          }, [
                            createVNode("img", {
                              class: "mx-auto w-36",
                              src: "/images/illustrations/empty.svg",
                              alt: "image"
                            }),
                            createVNode("div", { class: "mt-5" }, [
                              createVNode("p", { class: "text-base font-semibold text-slate-700 dark:text-navy-100" }, " Pas de notificacion ")
                            ])
                          ]))
                        ], 512), [
                          [vShow, activeTab.value === "tabAll"]
                        ])
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode("div", {
                      "x-transition:enter": "transition-all duration-300 easy-in-out",
                      "x-transition:enter-start": "opacity-0 [transform:translate3d(1rem,0,0)]",
                      "x-transition:enter-end": "opacity-100 [transform:translate3d(0,0,0)]",
                      class: "px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden"
                    }, [
                      notifications.value.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(notifications.value, (notification) => {
                          return openBlock(), createBlock("div", { class: "flex items-center mb-4 space-x-3" }, [
                            createVNode("div", { class: "flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15" }, [
                              createVNode("i", {
                                class: { "text-amber-600 dark:text--amber-600": notification.data.icon }
                              }, null, 2)
                            ]),
                            createVNode("a", {
                              href: "#",
                              onClick: ($event) => {
                                var _a;
                                return newLink(notification.id, (_a = notification.data) == null ? void 0 : _a.url);
                              },
                              class: "flex flex-col items-start"
                            }, [
                              notification.data.title != null ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "font-medium text-slate-600 dark:text-navy-100"
                              }, toDisplayString(notification.data.title), 1)) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "font-medium text-slate-600 dark:text-navy-100"
                              }, " Notifications ")),
                              createVNode("div", { class: "mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, toDisplayString(notification.data.message), 1)
                            ], 8, ["onClick"])
                          ]);
                        }), 256))
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "pb-8 mt-8 text-center"
                      }, [
                        createVNode("img", {
                          class: "mx-auto w-36",
                          src: "/images/illustrations/empty.svg",
                          alt: "image"
                        }),
                        createVNode("div", { class: "mt-5" }, [
                          createVNode("p", { class: "text-base font-semibold text-slate-700 dark:text-navy-100" }, " Pas de notificacion ")
                        ])
                      ]))
                    ], 512), [
                      [vShow, activeTab.value === "tabEvents"]
                    ]),
                    withDirectives(createVNode("div", {
                      "x-transition:enter": "transition-all duration-300 easy-in-out",
                      "x-transition:enter-start": "opacity-0 [transform:translate3d(1rem,0,0)]",
                      "x-transition:enter-end": "opacity-100 [transform:translate3d(0,0,0)]",
                      class: "px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden"
                    }, [
                      notifications.value.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(notifications.value, (notification) => {
                          return openBlock(), createBlock("div", { class: "flex items-center mb-4 space-x-3" }, [
                            createVNode("div", { class: "flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15" }, [
                              createVNode("i", {
                                class: { "text-amber-600 dark:text--amber-600": notification.data.icon }
                              }, null, 2)
                            ]),
                            createVNode("a", {
                              href: "#",
                              onClick: ($event) => {
                                var _a;
                                return newLink(notification.id, (_a = notification.data) == null ? void 0 : _a.url);
                              },
                              class: "flex flex-col items-start"
                            }, [
                              notification.data.title != null ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "font-medium text-slate-600 dark:text-navy-100"
                              }, toDisplayString(notification.data.title), 1)) : (openBlock(), createBlock("p", {
                                key: 1,
                                class: "font-medium text-slate-600 dark:text-navy-100"
                              }, " Notifications ")),
                              createVNode("div", { class: "mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, toDisplayString(notification.data.message), 1)
                            ], 8, ["onClick"])
                          ]);
                        }), 256))
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "pb-8 mt-8 text-center"
                      }, [
                        createVNode("img", {
                          class: "mx-auto w-36",
                          src: "/images/illustrations/empty.svg",
                          alt: "image"
                        }),
                        createVNode("div", { class: "mt-5" }, [
                          createVNode("p", { class: "text-base font-semibold text-slate-700 dark:text-navy-100" }, " Pas de notificacion ")
                        ])
                      ]))
                    ], 512), [
                      [vShow, activeTab.value === "Commande"]
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex p-2 text-gray-100 rounded-lg hover:text-gray-900 dark:text-gray-400"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-300" stroke="currentColor" fill="none" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z"${_scopeId}></path></svg>`);
            if (notifications.value.length > 0) {
              _push2(`<sub${_scopeId}><span class="bg-red-600 text-gray-100 px-1.5 py-0.5 rounded-full -ml-1"${_scopeId}>${ssrInterpolate(notifications.value.length)}</span></sub>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "flex p-2 text-gray-100 rounded-lg hover:text-gray-900 dark:text-gray-400" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "w-5 h-5 text-gray-300",
                  stroke: "currentColor",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z"
                  })
                ])),
                notifications.value.length > 0 ? (openBlock(), createBlock("sub", { key: 0 }, [
                  createVNode("span", { class: "bg-red-600 text-gray-100 px-1.5 py-0.5 rounded-full -ml-1" }, toDisplayString(notifications.value.length), 1)
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NotificationComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  useCategoryStore as a,
  _sfc_main$1 as b,
  useSidebarPanelUser as c,
  cartStore as d,
  useStore as e,
  useSubcategoriesStore as f,
  useParrainage as g,
  useNotification as h,
  homeSetting as i,
  useMissions as j,
  useLayoutStore as u
};

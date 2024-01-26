import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-e218b838.js";
import "./NotificationComponent-fe8292d8.js";
import "@inertiajs/vue3";
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
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    depense: String,
    commandeTotal: String,
    transactionTotal: String,
    missionAttente: String,
    commandes: Array
  },
  setup(__props) {
    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };
    const getSeverity = (commande) => {
      switch (commande.status) {
        case "pending":
          return "warning";
        case "completed":
          return "success";
        case "failed":
          return "danger";
        default:
          return null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_H1 = resolveComponent("H1");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Column = resolveComponent("Column");
      const _component_Tag = resolveComponent("Tag");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto dark:bg-inherit" }, _attrs))}><div class="flex flex-col"><h1 class="text-2xl font-bega-semibold">DASHBOARD</h1></div><div class="grid grid-cols-2 gap-4 px-auto lg:grid-cols-4">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("user.transactions"),
        class: "px-4 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900 lg:px-6 lg:py-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><span class="text-sm text-indigo-600 font-bega-medium"${_scopeId}>Total Depense</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-500 md:flex hover:bg-gray-500 dark:text-gray-900 hover:text-gray-200"${_scopeId}>Today</span></div><div class="flex items-center justify-between mt-6"${_scopeId}><div${_scopeId}><svg class="w-8 h-8 p-1 text-indigo-600 bg-indigo-400 border border-indigo-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><div class="flex flex-col"${_scopeId}><div class="flex items-end"${_scopeId}><span class="text-xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-3xl"${_scopeId}>${ssrInterpolate(__props.depense)}</span><div class="flex items-center hidden mb-1 ml-2"${_scopeId}><svg class="w-12 h-12 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${_scopeId}></path></svg><span class="font-bega-medium text-sm text-gray-500 ml-0.5"${_scopeId}>2</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("span", { class: "text-sm text-indigo-600 font-bega-medium" }, "Total Depense"),
                createVNode("span", { class: "hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-500 md:flex hover:bg-gray-500 dark:text-gray-900 hover:text-gray-200" }, "Today")
              ]),
              createVNode("div", { class: "flex items-center justify-between mt-6" }, [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: "w-8 h-8 p-1 text-indigo-600 bg-indigo-400 border border-indigo-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1",
                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    })
                  ]))
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "flex items-end" }, [
                    createVNode("span", { class: "text-xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-3xl" }, toDisplayString(__props.depense), 1),
                    createVNode("div", { class: "flex items-center hidden mb-1 ml-2" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-12 h-12 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "1",
                          d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        })
                      ])),
                      createVNode("span", { class: "font-bega-medium text-sm text-gray-500 ml-0.5" }, "2")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("user.commandes"),
        class: "px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><span class="text-sm text-green-600 font-bega-medium"${_scopeId}>Commande</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-600 md:hidden dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200"${_scopeId}>7 days</span></div><div class="flex items-center justify-between mt-6"${_scopeId}><div${_scopeId}><svg class="w-8 h-8 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${_scopeId}></path></svg></div><div class="flex flex-col"${_scopeId}><div class="flex items-end"${_scopeId}><span class="text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl"${_scopeId}>${ssrInterpolate(__props.commandeTotal)}</span><div class="flex items-center mb-1 ml-2"${_scopeId}></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("span", { class: "text-sm text-green-600 font-bega-medium" }, "Commande"),
                createVNode("span", { class: "hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-600 md:hidden dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200" }, "7 days")
              ]),
              createVNode("div", { class: "flex items-center justify-between mt-6" }, [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: "w-8 h-8 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1",
                      d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    })
                  ]))
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "flex items-end" }, [
                    createVNode("span", { class: "text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl" }, toDisplayString(__props.commandeTotal), 1),
                    createVNode("div", { class: "flex items-center mb-1 ml-2" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("user.transactions"),
        class: "px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><span class="text-sm text-blue-600 font-bega-medium"${_scopeId}>Transaction</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-600 md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200"${_scopeId}>7 days</span></div><div class="flex items-center justify-between mt-6"${_scopeId}><div${_scopeId}><svg class="w-8 h-8 p-1 text-blue-600 bg-blue-400 border border-blue-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg></div><div class="flex-col"${_scopeId}><div class="flex items-end"${_scopeId}><span class="text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl"${_scopeId}>${ssrInterpolate(__props.transactionTotal)}</span><div class="items-center hidden mb-1 ml-2"${_scopeId}><svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"${_scopeId}></path></svg><span class="font-bega-medium text-sm text-gray-500 ml-0.5"${_scopeId}>7%</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("span", { class: "text-sm text-blue-600 font-bega-medium" }, "Transaction"),
                createVNode("span", { class: "hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-600 md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200" }, "7 days")
              ]),
              createVNode("div", { class: "flex items-center justify-between mt-6" }, [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: "w-8 h-8 p-1 text-blue-600 bg-blue-400 border border-blue-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1",
                      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    })
                  ]))
                ]),
                createVNode("div", { class: "flex-col" }, [
                  createVNode("div", { class: "flex items-end" }, [
                    createVNode("span", { class: "text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl" }, toDisplayString(__props.transactionTotal), 1),
                    createVNode("div", { class: "items-center hidden mb-1 ml-2" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 h-5 text-green-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        })
                      ])),
                      createVNode("span", { class: "font-bega-medium text-sm text-gray-500 ml-0.5" }, "7%")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("user.missions"),
        class: "px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer dark:bg-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><span class="text-sm text-gray-800 dark:text-gray-100 font-bega-medium"${_scopeId}>Mission en attente</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-00 6md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200"${_scopeId}> days</span></div><div class="flex items-center justify-between mt-6"${_scopeId}><div${_scopeId}><svg class="w-8 h-8 p-1 text-yellow-600 bg-yellow-400 border border-yellow-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg></div><div class="flex flex-col"${_scopeId}><div class="flex items-end"${_scopeId}><span class="text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl"${_scopeId}>${ssrInterpolate(__props.missionAttente)}</span><div class="flex items-center hidden mb-1 ml-2"${_scopeId}><svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"${_scopeId}></path></svg><span class="font-bega-medium text-sm text-gray-500 ml-0.5"${_scopeId}>-1%</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("span", { class: "text-sm text-gray-800 dark:text-gray-100 font-bega-medium" }, "Mission en attente"),
                createVNode("span", { class: "hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default dark:bg-gray-00 6md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200" }, " days")
              ]),
              createVNode("div", { class: "flex items-center justify-between mt-6" }, [
                createVNode("div", null, [
                  (openBlock(), createBlock("svg", {
                    class: "w-8 h-8 p-1 text-yellow-600 bg-yellow-400 border border-yellow-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1",
                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }),
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1",
                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    })
                  ]))
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("div", { class: "flex items-end" }, [
                    createVNode("span", { class: "text-2xl text-gray-800 font-bega-medium dark:text-gray-100 2xl:text-4xl" }, toDisplayString(__props.missionAttente), 1),
                    createVNode("div", { class: "flex items-center hidden mb-1 ml-2" }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 h-5 text-red-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        })
                      ])),
                      createVNode("span", { class: "font-bega-medium text-sm text-gray-500 ml-0.5" }, "-1%")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><div class="mt-4"><div>`);
      _push(ssrRenderComponent(_component_H1, { class: "mb-4 text-lg text-gray-700 font-bega-medium dark:text-gray-200" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dernier commande`);
          } else {
            return [
              createTextVNode("Dernier commande")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><div class="card">`);
      _push(ssrRenderComponent(_component_DataTable, {
        stripedRows: "",
        paginator: "",
        rows: 10,
        rowsPerPageOptions: [10, 20, 50, 100],
        value: __props.commandes.data,
        tableStyle: "min-width: 50rem"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pas de Commande disponible. `);
          } else {
            return [
              createTextVNode(" Pas de Commande disponible. ")
            ];
          }
        }),
        loading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Chargement de commandes ... `);
          } else {
            return [
              createTextVNode(" Chargement de commandes ... ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              sortable: "",
              field: "order_numero",
              header: "Numero commande"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "service.title",
              header: "Service"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "total_amount",
              header: "Montant"
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(slotProps.data.total_amount))} $ `);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(slotProps.data.total_amount)) + " $ ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, { header: "Status" }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Tag, {
                    value: slotProps.data.status,
                    severity: getSeverity(slotProps.data)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Tag, {
                      value: slotProps.data.status,
                      severity: getSeverity(slotProps.data)
                    }, null, 8, ["value", "severity"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              exportable: false,
              style: { "min-width": "4rem" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("user.commandes.one", [slotProps.data.order_numero])
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}><i class="pi pi-pencil"${_scopeId3}></i></span>`);
                      } else {
                        return [
                          createVNode("span", null, [
                            createVNode("i", { class: "pi pi-pencil" })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Link, {
                      href: _ctx.route("user.commandes.one", [slotProps.data.order_numero])
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, [
                          createVNode("i", { class: "pi pi-pencil" })
                        ])
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Column, {
                sortable: "",
                field: "order_numero",
                header: "Numero commande"
              }),
              createVNode(_component_Column, {
                field: "service.title",
                header: "Service"
              }),
              createVNode(_component_Column, {
                field: "total_amount",
                header: "Montant"
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(formatCurrency(slotProps.data.total_amount)) + " $ ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, { header: "Status" }, {
                body: withCtx((slotProps) => [
                  createVNode(_component_Tag, {
                    value: slotProps.data.status,
                    severity: getSeverity(slotProps.data)
                  }, null, 8, ["value", "severity"])
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                exportable: false,
                style: { "min-width": "4rem" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode(_component_Link, {
                    href: _ctx.route("user.commandes.one", [slotProps.data.order_numero])
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, [
                        createVNode("i", { class: "pi pi-pencil" })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Dashboard/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

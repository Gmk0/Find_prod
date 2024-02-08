import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-713639fe.js";
import "./NotificationComponent-1408ac1b.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-79527a9d.js";
import "@vueuse/core";
import "vue3-popper";
import "pinia";
import "axios";
import "./OtherPanelUser-6298989a.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "flowbite";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "TransactionUser",
  __ssrInlineRender: true,
  props: {
    transactions: Array
  },
  setup(__props) {
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
    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Column = resolveComponent("Column");
      const _component_Tag = resolveComponent("Tag");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Transactions</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">Transactions</h1></div><div class="mt-4"><div><div class="card">`);
      _push(ssrRenderComponent(_component_DataTable, {
        stripedRows: "",
        paginator: "",
        rows: 10,
        rowsPerPageOptions: [2, 10, 20, 50],
        value: __props.transactions.data,
        tableStyle: "min-width: 50rem"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` No customers found. `);
          } else {
            return [
              createTextVNode(" No customers found. ")
            ];
          }
        }),
        loading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Loading customers data. Please wait. `);
          } else {
            return [
              createTextVNode(" Loading customers data. Please wait. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              sortable: "",
              field: "transaction_numero",
              header: "transaction_numero"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "amount",
              header: "amount"
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(formatCurrency(slotProps.data.amount))} $ `);
                } else {
                  return [
                    createTextVNode(toDisplayString(formatCurrency(slotProps.data.amount)) + " $ ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, { header: "status" }, {
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
                    href: _ctx.route("user.transactions.one", [slotProps.data.transaction_numero])
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
                      href: _ctx.route("user.transactions.one", [slotProps.data.transaction_numero])
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
                field: "transaction_numero",
                header: "transaction_numero"
              }),
              createVNode(_component_Column, {
                field: "amount",
                header: "amount"
              }, {
                body: withCtx((slotProps) => [
                  createTextVNode(toDisplayString(formatCurrency(slotProps.data.amount)) + " $ ", 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, { header: "status" }, {
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
                    href: _ctx.route("user.transactions.one", [slotProps.data.transaction_numero])
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
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Transaction/TransactionUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

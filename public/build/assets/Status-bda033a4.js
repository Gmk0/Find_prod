import{_}from"./WebLayout-3bb570bf.js";import{q as m,ar as u,B as p,E as i,s as h,c as a,b as t,F as g,l as x,f as b,w as f,o as r,t as d,i as v,p as y,a as w}from"./app-20d75b28.js";import"./userInfo-5eaad828.js";import"./index-2630c011.js";const s=e=>(y("data-v-bbd45c39"),e=e(),w(),e),S={class:"min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900"},k={class:"flex flex-col items-center justify-center min-h-screen py-24"},B={class:"text-center bg-white rounded-md shadow-md dark:bg-gray-800"},C=s(()=>t("svg",{class:"w-20 h-20 mx-auto mb-6 text-green-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4.707-8.293a1 1 0 1 1 1.414 1.414l2.793 2.793 5.793-5.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-4.5-4.5z"})],-1)),I=s(()=>t("h3",{class:"mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100"},"Paiement réussi",-1)),V={class:"p-4 rounded-lg"},j=s(()=>t("p",{class:"px-6 mb-4 text-lg text-gray-800 dark:text-gray-100"},"Votre paiement a été traité avec succès. Voici un récapitulatif de votre commande : ",-1)),N={class:"mb-4"},L={class:"flex justify-between px-6"},z={class:"text-lg font-medium"},E={class:"text-lg font-bold"},F=s(()=>t("p",{class:"text-green-700"},"Nous vous remercions de votre achat et espérons vous revoir bientôt !",-1)),M={class:"mt-8 space-x-4"},O=["href"],$=Object.assign({layout:_},{__name:"Status",props:{transaction:Object},setup(e){const o=u();return p(()=>{o.clearCart()}),i(()=>o.items),i(()=>o.totalCost),(n,q)=>{const l=h("Link");return r(),a("div",null,[t("div",S,[t("div",k,[t("div",B,[C,I,t("div",V,[j,t("ul",N,[(r(!0),a(g,null,x(e.transaction.data.orders,c=>(r(),a("li",L,[t("span",z,"Service : "+d(c.service.title),1),t("span",E,d(c.total_amount)+" $",1)]))),256))]),F,t("div",M,[t("a",{href:n.route("facturation",[e.transaction.data.transaction_numero]),class:"px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"},"Imprimer facture",8,O),b(l,{href:n.route("user.commandes"),class:"px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600"},{default:f(()=>[v(" voir l'evolution")]),_:1},8,["href"])])])])])])])}}}),G=m($,[["__scopeId","data-v-bbd45c39"]]);export{G as default};
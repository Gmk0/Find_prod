import{_ as d}from"./WebLayout-13406620.js";import{at as m,B as u,E as c,s as _,c as s,b as t,F as h,l as p,f as g,w as f,o,t as i,i as x}from"./app-b4f14d42.js";import"./userInfo-5f9c9a3a.js";import"./index-2630c011.js";const v={class:"min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900"},b={class:"flex flex-col items-center justify-center min-h-screen py-24"},y={class:"text-center bg-white rounded-md shadow-md dark:bg-gray-800"},w=t("svg",{class:"w-20 h-20 mx-auto mb-6 text-green-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-4.707-8.293a1 1 0 1 1 1.414 1.414l2.793 2.793 5.793-5.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414 0l-4.5-4.5z"})],-1),k=t("h3",{class:"mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100"},"Paiement réussi",-1),B={class:"p-4 rounded-lg"},C=t("p",{class:"px-6 mb-4 text-lg text-gray-800 dark:text-gray-100"},"Votre paiement a été traité avec succès. Voici un récapitulatif de votre commande : ",-1),S={class:"mb-4"},V={class:"flex justify-between px-6"},j={class:"text-lg font-medium"},N={class:"text-lg font-bold"},L=t("p",{class:"text-green-700"},"Nous vous remercions de votre achat et espérons vous revoir bientôt !",-1),z={class:"mt-8 space-x-4"},E=["href"],I=Object.assign({layout:d},{__name:"Status",props:{transaction:Object},setup(a){const e=m();return u(()=>{e.clearCart()}),c(()=>e.items),c(()=>e.totalCost),(r,F)=>{const l=_("Link");return o(),s("div",null,[t("div",v,[t("div",b,[t("div",y,[w,k,t("div",B,[C,t("ul",S,[(o(!0),s(h,null,p(a.transaction.data.orders,n=>(o(),s("li",V,[t("span",j,"Service : "+i(n.service.title),1),t("span",N,i(n.total_amount)+" $",1)]))),256))]),L,t("div",z,[t("a",{href:r.route("facturation",[a.transaction.data.transaction_numero]),class:"px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"},"Imprimer facture",8,E),g(l,{href:r.route("user.commandes"),class:"px-4 py-2 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600"},{default:f(()=>[x(" voir l'evolution")]),_:1},8,["href"])])])])])])])}}});export{I as default};

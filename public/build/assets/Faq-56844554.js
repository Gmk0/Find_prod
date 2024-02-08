import{g as _,s as m,c as o,f as n,b as t,F as v,l as f,x as p,o as a,H as c,P as r,t as d,w as g}from"./app-6a5e3ea6.js";import{_ as b}from"./WebLayout-b4b319c4.js";import{_ as w}from"./BreadCumbWeb-8110618b.js";import"./userInfo-3418e365.js";import"./index-2630c011.js";const y={class:"min-h-screen pt-20 mx-auto max-w-7xl lg:px-8"},F={class:"relative overflow-hidden pt-8 pb-12 lg:pb-[90px]"},k={class:"container px-4 mx-auto"},z=p('<div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600"> FAQ </span><h2 class="mb-4 text-3xl font-bega-medium text-dark sm:text-4xl md:text-[40px]"> Des questions ? Regardez ici ! </h2><p class="text-base text-body-color"> Réponses aux questions fréquemment posées : Tout ce que vous devez savoir ! </p></div></div></div>',1),C={class:"flex flex-wrap -mx-4"},q={class:"grid w-full gap-4 px-4 md:grid-cols-2"},B=["onClick"],D={class:"mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-amber-600 bg-opacity-5 text-amber-600"},L={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},S=t("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"},null,-1),V=[S],A={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},H=t("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"},null,-1),M=[H],N={class:"w-full"},$={class:"text-lg font-semibold text-gray-800 dark:text-gray-100"},j={class:"py-3 text-base leading-relaxed text-body-color","x-text":"faq.answer"},E=p('<div class="absolute bottom-0 right-0 z-[-1]"><svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="1308.65" y1="1142.58" x2="602.827" y2="-418.681" gradientUnits="userSpaceOnUse"><stop stop-color="#3056D3" stop-opacity="0.36"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144"></stop></linearGradient></defs></svg></div>',1),Q=Object.assign({layout:b},{__name:"Faq",props:{faqs:Array},setup(x){const s=_([]),h=i=>{s.value.includes(i)?s.value=s.value.filter(l=>l!==i):s.value.push(i)};return(i,l)=>{const u=m("Collapse");return a(),o("div",y,[n(w,{link1:"Faq"}),t("section",F,[t("div",k,[z,t("div",C,[t("div",q,[(a(!0),o(v,null,f(x.faqs,e=>(a(),o("div",{key:e.id,class:"single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white dark:bg-gray-800 p-4 sm:p-8 lg:px-6 xl:px-8"},[t("button",{class:"flex w-full text-left faq-btn",onClick:G=>h(e.id)},[t("div",D,[c((a(),o("svg",L,V,512)),[[r,!s.value.includes(e.id)]]),c((a(),o("svg",A,M,512)),[[r,s.value.includes(e.id)]])]),t("div",N,[t("h4",$,d(e.questions),1)])],8,B),n(u,{when:s.value.includes(e.id),class:"faq-content pl-[62px]"},{default:g(()=>[t("p",j,d(e.reponses),1)]),_:2},1032,["when"])]))),128))])])]),E])])}}});export{Q as default};
import{_ as x}from"./WebLayout-ed4bc1be.js";import{_ as h}from"./BreadCumbWeb-95d36fcf.js";import{g as c,c as l,f as n,b as e,F as d,l as f,x as b,o,n as u,t as g,w as v,u as w,K as y}from"./app-eeef37ed.js";import"./userInfo-7c1dc5ab.js";import"./index-2630c011.js";const k={class:"min-h-screen pt-20 mx-auto max-w-7xl lg:px-8"},T={class:"relative overflow-hidden pt-8 pb-12 lg:pb-[90px]"},C={class:"container px-4 mx-auto"},j=b('<div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600"> Tutorial </span><h2 class="mb-4 text-lg font-bega-medium text-dark md:text-xl"> Apprenez à utiliser la plateforme grâce à ces tutoriels. </h2></div></div></div>',1),B={class:"max-w-5xl mx-auto"},N={id:"accordion-flush","data-accordion":"collapse","data-active-classes":"bg-white dark:bg-gray-900 text-gray-900 dark:text-white","data-inactive-classes":"text-gray-500 dark:text-gray-400"},A=["onClick"],F={class:"max-w-xs break-words md:max-w-lg text-start"},L=e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"},null,-1),M=[L],V={id:"accordion-flush-body-1",class:"","aria-labelledby":"accordion-flush-heading-1"},$={class:"py-5 border-b border-gray-400 dark:border-gray-700"},z={class:"flex flex-col"},H={class:"w-[75%] h-48 mx-auto my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl"},S=["src"],D={class:"w-full mt-4 text-base prose text-justify font-bega-light"},E=["innerHTML"],G=Object.assign({layout:x},{__name:"TutorielFreelance",props:{tutorial:Array},setup(p){const m=p,t=c([]),_=a=>{t.value.includes(a)?t.value=t.value.filter(i=>i!==a):(t.value=[],t.value.push(a))};return c(!1),(a,i)=>(o(),l("div",k,[n(h,{link1:"Tutorial",routeName:"tutorial",link2:"freelance"}),e("section",T,[e("div",C,[j,e("div",B,[e("div",N,[(o(!0),l(d,null,f(m.tutorial,(r,s)=>(o(),l(d,null,[e("h2",{class:u({"t text-amber-600":t.value.includes(s)})},[e("button",{type:"button",onClick:I=>_(s),class:"flex items-center justify-between w-full gap-3 py-5 text-lg border-b border-gray-500 font-bega-medium rtl:text-right dark:border-gray-700"},[e("span",F,g(r.titre),1),(o(),l("svg",{class:u([{"rotate-180":!t.value.includes(s),"rotate-0":t.value.includes(s)},"w-3 h-3 shrink-0"]),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},M,2))],8,A)],2),n(w(y),{when:t.value.includes(s),class:"m-2"},{default:v(()=>[e("div",V,[e("div",$,[e("div",z,[e("div",H,[e("iframe",{class:"w-full h-full aspect-video",src:r.lien,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,S)]),e("div",D,[e("p",{innerHTML:r.content},null,8,E)])])])])]),_:2},1032,["when"])],64))),256))])])])])]))}});export{G as default};

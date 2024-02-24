import{S as p}from"./SectionTitle-99bbee26.js";import{o as h,c as v,f as c,w as n,r as o,b as s,M as x,B as g,a1 as _,E as b,e as f,H as m,R as u,P as y,n as $,h as k,a2 as B}from"./app-20d75b28.js";const S={class:"md:grid md:gap-6"},C={class:"mt-5 md:mt-0 md:col-span-2"},E={class:"px-4 py-5 bg-white shadow dark:bg-gray-900 sm:p-6 sm:rounded-lg"},O={__name:"ActionSection",setup(e){return(a,t)=>(h(),v("div",S,[c(p,null,{title:n(()=>[o(a.$slots,"title")]),description:n(()=>[o(a.$slots,"description")]),_:3}),s("div",C,[s("div",E,[o(a.$slots,"content")])])]))}},W={class:"fixed inset-0 z-50 px-4 py-6 overflow-y-auto sm:px-0","scroll-region":""},M=s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),N=[M],T={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=e,i=a;x(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const l=()=>{t.closeable&&i("close")},d=r=>{r.key==="Escape"&&t.show&&l()};g(()=>document.addEventListener("keydown",d)),_(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const w=b(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(r,j)=>(h(),f(B,{to:"body"},[c(u,{"leave-active-class":"duration-200"},{default:n(()=>[m(s("div",W,[c(u,{"enter-active-class":"duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[m(s("div",{class:"fixed inset-0 transition-all transform",onClick:l},N,512),[[y,e.show]])]),_:1}),c(u,{"enter-active-class":"duration-300 ease-out","enter-from-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95","enter-to-class":"translate-y-0 opacity-100 sm:scale-100","leave-active-class":"duration-200 ease-in","leave-from-class":"translate-y-0 opacity-100 sm:scale-100","leave-to-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"},{default:n(()=>[m(s("div",{class:$(["mb-6 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:w-full sm:mx-auto",w.value])},[e.show?o(r.$slots,"default",{key:0}):k("",!0)],2),[[y,e.show]])]),_:3})],512),[[y,e.show]])]),_:3})]))}},V={class:"px-6 py-4"},z={class:"text-lg font-medium text-gray-900"},D={class:"mt-4 text-sm text-gray-600 dark:text-gray-300"},L={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-900 text-right"},P={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=a,i=()=>{t("close")};return(l,d)=>(h(),f(T,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:i},{default:n(()=>[s("div",V,[s("div",z,[o(l.$slots,"title")]),s("div",D,[o(l.$slots,"content")])]),s("div",L,[o(l.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{T as _,O as a,P as b};
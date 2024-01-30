import{g as u,T as C,s as v,c as r,f as t,u as s,w as m,F as c,o as a,Z as V,i as l,b as o,v as f,j as g,k as y,n as T,D as z}from"./app-37766abe.js";import{_ as b}from"./TextInput-62d8cc6a.js";const N=o("span",{class:"hidden"},"Trouvez les services parfaits dont vous avez besoin",-1),F={class:"relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border"},G=o("div",{class:"p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl"},[o("h5",{class:"text-gray-600 dark:text-gray-300"},"Authentification ")],-1),I={class:"flex-auto px-6 py-2 pb-12"},U={class:"mb-4 text-sm text-gray-600 dark:text-gray-100"},B={key:0},$={key:1},A={class:"text-center"},R=["disabled"],j=o("span",null,"Connexion",-1),D=[j],q={__name:"TwoFactorChallenge",setup(E){const n=u(!1),e=C({code:"",recovery_code:""}),_=u(null),p=u(null),x=async()=>{n.value^=!0,await z(),n.value?(_.value.focus(),e.code=""):(p.value.focus(),e.recovery_code="")},h=()=>{e.post(route("two-factor.login"))};return(M,d)=>{const k=v("NavGuest"),w=v("CardGuest");return a(),r(c,null,[t(s(V),{title:"Two-factor Confirmation"}),t(k),t(w,null,{title:m(()=>[l(" Authentification a double facteur ")]),description:m(()=>[N]),form:m(()=>[o("div",F,[G,o("div",I,[o("div",U,[n.value?(a(),r(c,{key:1},[l(" Veuillez confirmer l'accès à votre compte en entrant l'un de vos codes de récupération d'urgence. ")],64)):(a(),r(c,{key:0},[l(" Veuillez confirmer l'accès à votre compte en entrant l'un de vos codes de récupération d'urgence. ")],64))]),o("form",{onSubmit:f(h,["prevent"]),role:"grid grid-cols-1 gap-6"},[n.value?(a(),r("div",$,[t(g,{for:"recovery_code",value:"Recovery Code"}),t(b,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:_,modelValue:s(e).recovery_code,"onUpdate:modelValue":d[1]||(d[1]=i=>s(e).recovery_code=i),type:"text",class:"block w-full mt-1",autocomplete:"one-time-code"},null,8,["modelValue"]),t(y,{class:"mt-2",message:s(e).errors.recovery_code},null,8,["message"]),o("button",{type:"button",class:"mt-6 text-sm text-gray-600 underline cursor-pointer dark:text-gray-300 hover:text-gray-900",onClick:f(x,["prevent"])},[n.value?(a(),r(c,{key:1},[l(" Use an authentication code ")],64)):(a(),r(c,{key:0},[l(" Use a recovery code ")],64))])])):(a(),r("div",B,[t(g,{for:"code",value:"Code"}),t(b,{id:"code",ref_key:"codeInput",ref:p,modelValue:s(e).code,"onUpdate:modelValue":d[0]||(d[0]=i=>s(e).code=i),type:"text",inputmode:"numeric",class:"block w-full mt-1",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),t(y,{class:"mt-2",message:s(e).errors.code},null,8,["message"])])),o("div",A,[o("button",{type:"submit",class:T([{"opacity-25":s(e).processing},"inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"]),disabled:s(e).processing},D,10,R)])],32)])])]),_:1})],64)}}};export{q as default};
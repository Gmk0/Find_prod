import{T as c,c as l,f as s,u as a,w as o,C as m,F as p,o as n,Z as b,N as _,i as g,b as e,t as v,h as x,v as f,j as h,k as w,n as y}from"./app-20d75b28.js";import{_ as k}from"./TextInput-97a8ac70.js";const V=e("span",null,"Trouvez les services parfaits dont vous avez besoin",-1),N={class:"relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border"},z=e("div",{class:"p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl"},[e("h5",{class:"text-gray-600 dark:text-gray-300"},"Mot de passe oublié ")],-1),C={class:"flex-auto px-6 py-2 pb-12"},M=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-200"}," Mot de passe oublié ? Pas de problème. Indiquez simplement votre adresse e-mail et nous vous enverrons un lien de réinitialisation de mot de passe par e-mail qui vous permettra d'en choisir un nouveau. ",-1),F={key:0,class:"mb-4 text-sm font-medium text-green-600"},q={class:"text-center"},B=["disabled"],P=e("span",null,"Lien de réinitialisation",-1),S=[P],G={__name:"ForgotPassword",props:{status:String},setup(i){const t=c({email:""}),d=()=>{t.post(route("password.email"))};return(T,r)=>(n(),l(p,null,[s(a(b),{title:"Mot de passe Oublier"}),s(_),s(m,null,{title:o(()=>[g(" Mot de passe oublié ")]),description:o(()=>[V]),form:o(()=>[e("div",N,[z,e("div",C,[M,i.status?(n(),l("div",F,v(i.status),1)):x("",!0),e("form",{onSubmit:f(d,["prevent"]),role:"grid grid-cols-1 gap-6"},[e("div",null,[s(h,{for:"email",value:"Email"}),s(k,{id:"email",modelValue:a(t).email,"onUpdate:modelValue":r[0]||(r[0]=u=>a(t).email=u),type:"email",class:"block w-full mt-1",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(w,{class:"mt-2",message:a(t).errors.email},null,8,["message"])]),e("div",q,[e("button",{type:"submit",class:y([{"opacity-25":a(t).processing},"inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white"]),disabled:a(t).processing},S,10,B)])],32)])])]),_:1})],64))}};export{G as default};
import{T as h,E as x,s as a,c as d,f as t,u as s,w as o,F as b,o as u,Z as c,i as n,b as e,h as y,v as w,n as k,A as l}from"./app-f175eda0.js";import{_ as z}from"./PrimaryButton-a79368f1.js";const C=e("span",{class:"hidden"},"Trouvez les services parfaits dont vous avez besoin",-1),V={class:"relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border"},N=e("div",{class:"p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl"},[e("h5",{class:"text-gray-600 dark:text-gray-300"},"Verification ")],-1),E={class:"p-4"},G=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-white"}," Avant de continuer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer par e-mail ? Si vous n'avez pas reçu l'e-mail, nous serons heureux de vous en envoyer un autre. ",-1),S={key:0,class:"mb-4 text-sm font-medium text-green-600"},T={class:"flex flex-col items-center justify-between gap-3 mt-4"},F={__name:"VerifyEmail",props:{status:String},setup(f){const m=f,i=h({}),v=()=>{i.post(route("verification.send"))},p=x(()=>m.status==="verification-link-sent");return(r,q)=>{const _=a("NavGuest"),g=a("CardGuest");return u(),d(b,null,[t(s(c),{title:"Email Verification"}),t(s(c),{title:"Two-factor Confirmation"}),t(_),t(g,null,{title:o(()=>[n(" Authentification a double facteur ")]),description:o(()=>[C]),form:o(()=>[e("div",V,[N,e("div",E,[G,p.value?(u(),d("div",S," Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie dans vos paramètres de profil. ")):y("",!0),e("form",{onSubmit:w(v,["prevent"])},[e("div",T,[t(z,{class:k(["gradient2",{"opacity-25":s(i).processing}]),disabled:s(i).processing},{default:o(()=>[n(" Renvoyer le code. ")]),_:1},8,["class","disabled"]),e("div",null,[t(s(l),{href:r.route("profile.show"),class:"text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>[n(" Modifier le profile")]),_:1},8,["href"]),t(s(l),{href:r.route("logout"),method:"post",as:"button",class:"ml-2 text-sm text-gray-600 underline rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>[n(" Deconnexion ")]),_:1},8,["href"])])])],32)])])]),_:1})],64)}}};export{F as default};

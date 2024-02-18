import{aQ as R,aj as T,E as V,g as f,B as A,s as c,G,c as s,f as o,b as e,i as y,t as _,e as B,h as w,F as z,l as P,w as d,u as l,x as H,O as Q,o as t,aR as S,A as v,n as W,a6 as J,H as K}from"./app-48ededcf.js";import{_ as X}from"./ProfileSetting-1f875472.js";import{_ as Y}from"./UserLayout-2f5c009b.js";import"./MainSidebarUser-5fc6a346.js";import"./PartialHeaderUser.vue_vue_type_style_index_0_lang-1b113f6d.js";import"./userInfo-40a1752f.js";import"./index-2630c011.js";const Z={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},ee={class:"grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"},ae={class:"col-span-12 lg:col-span-8"},te={class:"md:grid md:grid-cols-1 md:gap-6"},se=H('<div class="flex justify-between md:col-span-1"><div class="px-4 sm:px-0"><h3 class="text-lg text-gray-900 font-bega-medium dark:text-gray-50"> Boostez vos Avantages avec le Parrainage! </h3><p class="mt-1 text-sm text-gray-600 font-bega-light dark:text-gray-100"><span class="dark:text-gray-50">Mettez à jour votre profil et votre adresse e-mail pour débloquer des avantages exclusifs grâce à notre programme de parrainage. Invitez vos amis à rejoindre et profitez ensemble des opportunités exceptionnelles qui vous attendent!</span></p></div></div>',1),oe={class:"mt-5 rounded-md md:mt-0 md:col-span-2"},re={class:"px-4 py-5 bg-white shadow dark:bg-gray-900 sm:p-6"},ne={class:""},le={key:0,class:"mb-6"},ie={key:0,class:"mb-2 text-2xl text-gray-700 font-bega-medium dark:text-gray-100"},ce={class:"dark:text-gray-50"},de={key:1,class:"flex flex-col gap-4"},ue=e("p",{class:"text-base text-gray-800 font-bega-medium dark:text-gray-50"},"Vous n'avez pas encore de code de parainage veuillez en generer Un",-1),ge=e("div",null,null,-1),pe={key:1,class:"p-4 border-round border-1 surface-border surface-card"},me={class:"p-0 m-0 list-none"},fe={class:"flex"},_e={class:"align-self-center",style:{flex:"1"}},ve={key:2},he={key:0,class:"mt-4"},xe=e("div",{class:"py-4"},[e("h1",{class:"text-base dark:text-gray-100"},"Utilisateurs Parrainés")],-1),ke={class:"ml-4"},be={href:"",class:"text-sm text-gray-600 dark:text-gray-300"},ye={key:0},we={key:0,class:"mt-4"},ze=e("p",{class:"mb-4 text-lg text-amber-500"},"Félicitations! Vous avez parrainé 10 utilisateurs et vous avez gagné un cadeau spécial vous allez etre notifier! 🥳​🥳​",-1),Pe={key:1,class:"mt-4"},Se={key:1,class:"mt-8"},Fe={class:"flex flex-col"},Ue={class:"flex flex-row py-2 overflow-auto scrollbar-sm"},Ve={class:"flex flex-col items-center p-2"},Be={class:"p-2"},Ce={class:"flex gap-2 mt-4"},je={class:"w-[80%]"},Ne={class:"w-[20%]"},Le=Object.assign({layout:Y},{__name:"Parainage",props:{codeParainage:String,lienParainage:String},setup(C){const F=R(),u=C,U=T(),h=V(()=>u.codeParainage),g=V(()=>U.getUsers),p=f(!1),x=f(!0);A(async()=>{U.getAllUser(),setTimeout(()=>{x.value=!1},2e3)});const j=()=>{Q.post("/api/generate-code-parainage",{},{preserveScroll:!0,preserveState:!0,onSuccess:()=>{p.value=!1},onStart:()=>{p.value=!0},onError:n=>{p.value=!1}})};f("");const m=f(!1),N=()=>{m.value=!m.value},D=n=>{F.success("Lien copier")},q=n=>{F.warning("Failed to copy texts")},E=[{network:"email",name:"Email",icon:"far fah fa-lg fa-envelope",color:"#333333"},{network:"facebook",name:"Facebook",icon:"fab fah fa-lg fa-facebook-f",color:"#1877f2"},{network:"linkedin",name:"LinkedIn",icon:"fab fah fa-lg fa-linkedin",color:"#007bb5"},{network:"messenger",name:"Messenger",icon:"fab fah fa-lg fa-facebook-messenger",color:"#0084ff"},{network:"sms",name:"SMS",icon:"far fah fa-lg fa-comment-dots",color:"#333333"},{network:"telegram",name:"Telegram",icon:"fab fah fa-lg fa-telegram-plane",color:"#0088cc"},{network:"twitter",name:"Twitter",icon:"fab fah fa-lg fa-twitter",color:"#1da1f2"},{network:"whatsapp",name:"Whatsapp",icon:"fab fah fa-lg fa-whatsapp",color:"#25d366"}],i={url:u.lienParainage,title:"Rejoignez-nous sur FIND!.",description:"Inscrivez-vous sur Find Freelance et découvrez un monde d'opportunités.Utilisez mon lien de parrainage pour une inscription rapide et facile!.",quote:"Explorez de nouvelles opportunités et élargissez vos horizons sur Find Freelance. Rejoignez-moi dès maintenant!",hashtags:"Freelance, Opportunités,Photographies,Design,Progammation",twitterUser:"Find Freelance"};return(n,r)=>{const I=c("BreadUser"),k=c("Button"),M=c("Photo"),$=c("ShareNetwork"),O=c("MazInput"),L=c("Dialog"),b=G("clipboard");return t(),s("div",Z,[o(I,{title:"Parainage",first_title:"Profile",first_url:n.route("profile.show"),second_title:"Parainage"},null,8,["first_url"]),e("div",null,[e("div",ee,[o(X),e("div",ae,[e("div",te,[se,e("div",oe,[e("div",null,[e("div",re,[e("div",ne,[x.value?w("",!0):(t(),s("div",le,[h.value!=null?(t(),s("h2",ie,[y("Votre code Parainage : "),e("span",ce,_(h.value),1)])):(t(),s("div",de,[ue,e("div",null,[o(k,{loading:p.value,onClick:r[0]||(r[0]=a=>j()),label:"Generer un code de parainage",outlined:""},null,8,["loading"])])])),h.value!=null?(t(),B(k,{key:2,label:"Partager",onClick:r[1]||(r[1]=a=>N()),outlined:""})):w("",!0)])),ge,x.value?(t(),s("div",pe,[e("ul",me,[(t(),s(z,null,P(4,a=>e("li",{key:a,class:"mb-3"},[e("div",fe,[o(l(S),{shape:"circle",size:"4rem",class:"mr-2 dark:!bg-gray-200"}),e("div",_e,[o(l(S),{width:"100%",class:"mb-2 dark:!bg-gray-200"}),o(l(S),{width:"75%",class:"dark:!bg-gray-200"})])])])),64))])])):(t(),s("div",ve,[g.value.length>0?(t(),s("div",he,[xe,(t(!0),s(z,null,P(g.value,a=>(t(),s("div",{key:a.id,class:"flex items-center mt-4"},[o(M,{user:a},null,8,["user"]),e("div",ke,[e("a",be,_(a.name),1)])]))),128)),n.$page.props.auth.user.gift_used?(t(),s("div",Se,[o(l(v),{class:"mt-6 text-lg text-green-500"},{default:d(()=>[o(l(v),null,{default:d(()=>[y("Offre deja utiliser 🎁")]),_:1})]),_:1})])):(t(),s("div",ye,[g.value.length>=10?(t(),s("div",we,[ze,o(l(v),{class:"hidden mt-6 text-lg text-green-500"},{default:d(()=>[o(l(v),{href:n.route("gift",n.$page.props.auth.user.id)},{default:d(()=>[y("Recuperez votre cadeau 🎁")]),_:1},8,["href"])]),_:1})])):(t(),s("div",Pe,[e("p",null,"Parrainez encore "+_(10-g.value.length)+" utilisateurs pour recevoir un cadeau spécial!",1)]))]))])):w("",!0)]))])])])]),o(L,{visible:m.value,"onUpdate:visible":r[3]||(r[3]=a=>m.value=a),style:{width:"25rem"},breakpoints:{"1199px":"75vw","575px":"90vw"},position:"center",modal:!0,header:"Partager",draggable:!1},{default:d(()=>[e("div",Fe,[e("div",Ue,[(t(),s(z,null,P(E,a=>e("button",Ve,[(t(),B($,{class:"p-4 text-white rounded-full",network:a.network,key:a.network,style:J({backgroundColor:a.color}),url:i.url,title:i.title,description:i.description,quote:i.quote,hashtags:i.hashtags,twitterUser:i.twitterUser},{default:d(()=>[e("i",{class:W(a.icon)},null,2)]),_:2},1032,["network","style","url","title","description","quote","hashtags","twitterUser"])),e("span",Be,_(a.name),1)])),64))]),e("div",Ce,[e("div",je,[o(O,{modelValue:u.lienParainage,"onUpdate:modelValue":r[2]||(r[2]=a=>u.lienParainage=a),class:"block w-full mt-1"},null,8,["modelValue"])]),e("div",Ne,[K(o(k,{label:"copier",outlined:""},null,512),[[b,u.lienParainage,"copy"],[b,D,"success"],[b,q,"error"]])])])])]),_:1},8,["visible"])])])])])])}}});export{Le as default};

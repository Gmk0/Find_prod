import{g as M,J as B,s as j,o as t,c as s,b as e,t as f,F as y,l as P,h as $,n as g,f as r,w as p,u,a6 as T,y as V,Q as F,ac as U,E as z,z as N,B as E,H as v,R as x,S as D,A,ad as R,ae as I,L as q,i as C,q as K,a4 as G,af as J,ag as O,r as Q}from"./app-dae173bd.js";import{M as W}from"./MainSidebarUser-98bb675e.js";import{_ as Y}from"./userInfo-6e845423.js";/* empty css                                                          */import{i as X}from"./index-2630c011.js";const Z={class:"sidebar-panel"},ee={class:"flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-findDark-900"},te={class:"flex items-center justify-between w-full h-16 pl-4 pr-1"},se={class:"text-base tracking-wider text-slate-800 dark:text-navy-100"},oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),ae=[oe],ne={class:"h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"},le={key:0,class:"h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"},re={class:"flex flex-col flex-1 px-4 font-bega-light"},ie={key:0},ce=["onClick"],de=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"},null,-1),ue=[de],he={key:0},ve=["onClick"],_e={class:"flex items-center space-x-2"},xe=e("div",{class:"h-1.5 w-1.5 rounded-full border border-current opacity-40"},null,-1),fe=["href"],pe={__name:"SidebarPanelUser",setup(L){const i=M(""),o=M([]),c=B(),m=()=>{c.toogleRight(),c.SidebarExpanded?document.body.classList.add("is-sidebar-open"):document.body.classList.remove("is-sidebar-open")},_=n=>{o.value.includes(n)?(o.value=o.value.filter(d=>d!==n),console.log(o.value)):o.value.push(n)},S=(n,d)=>{},b={title:"Racourci",items:[{service:{title:"Service",submenu:[{title:"Trouver un service",route_name:"categories"}]},freelance:{title:"freelance",submenu:[{title:"Trouver un freelance",route_name:"find_freelance"},{title:"Devenir freelance",route_name:"find_freelance"}]},parametres:{title:"Profile",submenu:[{title:"Modifier le profile",route_name:"profile.show"},{title:"Afillier un membre",route_name:"user.parainage"}]}}]};return(n,d)=>{const H=j("Link");return t(),s("div",Z,[e("div",ee,[e("div",te,[e("p",se,f(b.title),1),e("button",{onClick:d[0]||(d[0]=k=>m()),class:"p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"},ae)]),e("div",ne,[(t(!0),s(y,null,P(b.items,(k,l)=>(t(),s(y,null,[l>0?(t(),s("div",le)):$("",!0),e("ul",re,[(t(!0),s(y,null,P(k,(h,a)=>(t(),s(y,{key:a},[h.submenu?(t(),s("li",ie,[e("a",{onClick:w=>_(a),class:g([{"text-slate-800 font-bega-semibold dark:text-navy-50":o.value.includes(a),"text-slate-600 dark:text-navy-200":!o.value.includes(a)},"flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])},[e("span",null,f(h.title),1),(t(),s("svg",{class:g([{"rotate-90":o.value.includes(a)},"w-4 h-4 transition-transform ease-in-out text-slate-400"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ue,2))],10,ce),o.value.includes(a)?(t(),s("ul",he,[(t(!0),s(y,null,P(h.submenu,(w,ts)=>(t(),s("li",{onClick:ss=>S(w.route_name)},[r(H,{href:n.route(w.route_name),class:g(["flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4",{"text-blue-600 dark:text-accent-light font-bega-medium":w.route_name===i.value,"text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":w.route_name!==i.value}])},{default:p(()=>[e("div",_e,[xe,e("span",null,f(w.title),1)])]),_:2},1032,["href","class"])],8,ve))),256))])):$("",!0)])):(t(),s("li",{key:a},[e("a",{href:h.route_name,class:g(["flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out",{"text-primary dark:text-accent-light font-bega-medium":h.route_name===i.value,"text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50":h.route_name!==i.value}])},f(h.title),11,fe)]))],64))),128))])],64))),256))])])])}}},me={class:"header print:hidden"},ge={class:"relative flex w-full bg-white header-container dark:bg-findDark-900 print:hidden"},be={class:"flex items-center justify-between w-full"},ke={class:"h-7 w-7"},we=e("span",null,null,-1),ye=e("span",null,null,-1),$e=e("span",null,null,-1),Me=[we,ye,$e],Ce=e("img",{src:"/images/logo/find_02.png",class:"h-8 lg:mr-3",alt:"FIND"},null,-1),je={class:"-mr-1.5 flex items-center space-x-2"},Le=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5.5 w-5.5 text-slate-500 dark:text-navy-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1),Se=[Le],Pe={__name:"PartialHeaderUser",setup(L){const i=B();return(o,c)=>{const m=j("Link");return t(),s("div",null,[e("nav",me,[e("div",ge,[e("div",be,[e("div",ke,[e("button",{class:"menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80",onClick:c[0]||(c[0]=_=>u(i).toogleRight())},Me)]),e("div",null,[r(m,{href:o.route("home"),class:"flex ml-2 md:hidden"},{default:p(()=>[Ce]),_:1},8,["href"])]),e("div",je,[r(T),r(Y),e("button",{onClick:c[1]||(c[1]=_=>u(i).tooglePanel()),class:"w-8 h-8 p-0 rounded-full cursor-pointer hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Se)])])])])])}}},Be=e("div",{class:"fixed inset-0 z-[150] bg-slate-900/60 transition-opacity duration-200"},null,-1),He={class:"fixed right-0 top-0 z-[151] h-full w-full sm:w-80"},ze={key:0,class:"relative flex flex-col w-full h-full transition-transform duration-200 bg-white transform-gpu dark:bg-navy-750"},De={class:"flex items-center justify-between px-4 py-2"},Ee={class:"flex shrink-0 items-center space-x-1.5"},Te=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),Ve=e("span",{class:"text-xs"},null,-1),Fe=[Te,Ve],Ue={class:"flex shrink-0 items-center space-x-1.5"},Ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"})],-1),Ae=e("span",{class:"text-xs"},"Commande",-1),Re=[Ne,Ae],Ie={class:"flex shrink-0 items-center space-x-1.5"},qe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Ke=e("span",{class:"text-xs"},"Activity",-1),Ge=[qe,Ke],Je=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Oe=[Je],Qe={key:0,"x-transition:enter":"transition-all duration-500 easy-in-out","x-transition:enter-start":"opacity-0 [transform:translate3d(0,1rem,0)]","x-transition:enter-end":"opacity-100 [transform:translate3d(0,0,0)]",class:"pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},We=e("div",{class:"mt-4"},null,-1),Ye={class:"mt-4"},Xe=e("h2",{class:"px-3 text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Dernier message ",-1),Ze={class:"px-2 mt-4 space-y-3"},et={class:"flex flex-col justify-between space-x-2 rounded-lg bg-slate-100 p-2.5 dark:bg-navy-700"},tt={class:"flex flex-col justify-between px-3 mb-2 px-auto"},st={class:"mb-1 line-clamp-2"},ot=["innerHTML"],at={class:"flex items-center justify-between"},nt={class:"flex flex-col space-x-2"},lt={class:"flex items-center gap-3 mb-4"},rt={class:"text-xs font-medium line-clamp-1"},it={class:"text-xs font-medium line-clamp-1"},ct=e("div",null," Aucun message",-1),dt={class:"px-3 mt-3"},ut=e("h2",{class:"text-xs+ font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100"}," Settings ",-1),ht={class:"flex flex-col mt-2 space-y-2"},vt={class:"inline-flex items-center space-x-2"},_t=e("span",null,"Dark Mode",-1),xt=e("label",{class:"inline-flex items-center space-x-2"},[e("input",{"x-model":"$store.global.isMonochromeModeEnabled",class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"}),e("span",null,"Monochrome Mode")],-1),ft=e("div",{class:"hidden px-3 mt-3"},[e("div",{class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},[e("div",{class:"flex items-center justify-between"},[e("p",null,[e("span",{class:"font-medium text-slate-600 dark:text-navy-100"},"35GB"),C(" of 1TB ")]),e("a",{href:"#",class:"text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"},"Upgrade")]),e("div",{class:"h-2 mt-2 progress bg-slate-150 dark:bg-navy-500"},[e("div",{class:"w-7/12 rounded-full bg-info"})])])],-1),pt=e("div",{class:"h-18"},null,-1),mt={key:1,class:"px-3 pt-1 overflow-y-auto is-scrollbar-hidden overscroll-contain"},gt={class:"grid grid-cols-2 gap-3"},bt={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},kt={class:"flex justify-between space-x-1"},wt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},yt=e("svg",{xmlns:"http://www.w3.org/2000/svg","stroke-width":"1.5",class:"w-5 h-5 text-primary dark:text-accent",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),$t=e("p",{class:"mt-1 text-xs+"},"Total",-1),Mt={class:"p-3 rounded-lg bg-slate-100 dark:bg-navy-600"},Ct={class:"flex justify-between"},jt={class:"text-xl font-semibold text-slate-700 dark:text-navy-100"},Lt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-success",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1),St=e("p",{class:"mt-1 text-xs+"},"En attente",-1),Pt=e("div",{class:"h-18"},null,-1),Bt={class:"absolute flex justify-center w-full pointer-events-none bottom-4"},Ht={class:"pointer-events-auto mx-auto flex space-x-1 rounded-full border border-slate-150 bg-white px-4 py-0.5 shadow-lg dark:border-navy-700 dark:bg-navy-900"},zt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Dt=e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),Et=[Dt],Tt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},Vt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),Ft=[Vt],Ut={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",viewBox:"0 0 20 20",fill:"currentColor"},Nt=e("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),At=[Nt],Rt={xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},It=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},null,-1),qt=[It],Kt={__name:"OtherPanelUser",setup(L){const i=V(),o=F(),c=U(),m=z(()=>c.lastMessageUser),_=z(()=>c.lastCommandeUser),S=N(i),b=()=>{S()};E(()=>{c.fetchLastMessage(o.props.auth.user.id),c.fetchLastCommande(o.props.auth.user.id)}),M(""),M([]);const n=M("tabHome"),d=B(),H=k=>{const l=new Date(k);return`${l.getFullYear()}-${l.getMonth()+1}-${l.getDate()}`};return(k,l)=>{const h=j("Photo");return v((t(),s("div",{onKeydown:l[6]||(l[6]=q(a=>u(d).tooglePanelFalse(),["window","escape"]))},[u(d).RightSidebarExpanded?(t(),s("div",{key:0,onClick:l[0]||(l[0]=a=>u(d).tooglePanelFalse())},[r(D,{"enter-class":"ease-out","enter-to-class":"opacity-100","enter-active-class":"opacity-100","leave-class":"ease-in","leave-active-class":"opacity-100","leave-to-class":"opacity-0"},{default:p(()=>[Be]),_:1})])):$("",!0),e("div",He,[r(D,{"enter-class":"ease-out","enter-to-class":"translate-x-0","enter-active-class":"translate-x-full","leave-class":"ease-out","leave-to-class":"translate-y-0","leave-active-class":"-translate-x-full"},{default:p(()=>[u(d).RightSidebarExpanded?(t(),s("div",ze,[e("div",De,[v(e("p",Ee,Fe,512),[[x,n.value==="tabHome"]]),v(e("p",Ue,Re,512),[[x,n.value==="tabProjects"]]),v(e("p",Ie,Ge,512),[[x,n.value==="tabActivity"]]),e("button",{onClick:l[1]||(l[1]=a=>u(d).tooglePanelFalse()),class:"w-6 h-6 p-0 -mr-1 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Oe)]),n.value==="tabHome"?(t(),s("div",Qe,[We,e("div",Ye,[Xe,e("div",Ze,[(t(!0),s(y,null,P(m.value.messages,a=>(t(),s("div",et,[e("div",tt,[e("div",st,[r(u(A),{href:k.route("user.chat",a.conversation_id),class:"font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"},{default:p(()=>[e("span",{innerHTML:a.body},null,8,ot)]),_:2},1032,["href"])]),e("div",at,[e("div",nt,[e("div",lt,[r(h,{user:a.senderUser,taille:"12"},null,8,["user"]),e("p",rt,f(a.senderUser.name),1)]),e("div",null,[e("p",it,f(H(a.created_at)),1)])])])])]))),256)),ct])]),e("div",dt,[ut,e("div",ht,[e("label",vt,[v(e("input",{"onUpdate:modelValue":l[2]||(l[2]=a=>R(i)?i.value=a:null),onClick:l[3]||(l[3]=a=>b()),class:"w-10 h-5 rounded-lg form-switch bg-slate-300 before:rounded-md before:bg-slate-50 checked:bg-slate-500 checked:before:bg-white dark:bg-navy-900 dark:before:bg-navy-300 dark:checked:bg-navy-400 dark:checked:before:bg-white",type:"checkbox"},null,512),[[I,u(i)]]),_t]),xt])]),ft,pt])):$("",!0),n.value==="tabProjects"?(t(),s("div",mt,[e("div",gt,[e("div",bt,[e("div",kt,[e("p",wt,f(_.value.total),1),yt]),$t]),e("div",Mt,[e("div",Ct,[e("p",jt,f(_.value.totalEnAttente),1),Lt]),St])]),Pt])):$("",!0),e("div",Bt,[e("div",Ht,[e("button",{onClick:l[4]||(l[4]=a=>n.value="tabHome"),class:g([n.value==="tabHome"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[v((t(),s("svg",zt,Et,512)),[[x,n.value==="tabHome"]]),v((t(),s("svg",Tt,Ft,512)),[[x,n.value!=="tabHome"]])],2),e("button",{onClick:l[5]||(l[5]=a=>n.value="tabProjects"),class:g([n.value==="tabProjects"&&"text-primary dark:text-accent","px-4 py-0 rounded-full btn2 h-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"])},[v((t(),s("svg",Ut,At,512)),[[x,n.value==="tabProjects"]]),v((t(),s("svg",Rt,qt,512)),[[x,n.value!=="tabProjects"]])],2)])])])):$("",!0)]),_:1})])],544)),[[x,u(d).RightSidebarExpanded]])}}},Gt={},Jt={class:"px-4 py-6 md:flex md:items-center md:justify-between 2xl:px-0 md:py-10"},Ot=e("p",{class:"mb-4 text-sm text-center text-gray-500 md:mb-0"},[e("a",{href:"",class:"hover:underline",target:"_blank"},"FIND"),C(". All rights reserved. ")],-1),Qt={class:"flex flex-wrap justify-center s-center"};function Wt(L,i){const o=j("Link");return t(),s("div",null,[e("footer",Jt,[Ot,e("ul",Qt,[e("li",null,[r(o,{href:"/terms-of-service",class:"mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400"},{default:p(()=>[C("Termes")]),_:1})]),e("li",null,[r(o,{href:"/privacy-policy",class:"mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400"},{default:p(()=>[C("Politique de confidentialité")]),_:1})]),e("li",null,[r(o,{href:"/contact",class:"text-sm font-normal text-gray-500 hover:underline dark:text-gray-400"},{default:p(()=>[C("Contact")]),_:1})])])])])}const Yt=K(Gt,[["render",Wt]]),Xt={id:"root",class:"flex min-h-[100vh] grow bg-slate-50 dark:bg-findDark-950"},Zt={class:"sidebar"},es={class:"main-content pt-4 w-full px-[var(--margin-x)] pb-8"},is={__name:"UserLayout",setup(L){const i=G();J();const o=B(),c=O();E(()=>{i.fetchCategories(),c.fetchLastNotification(),c.getNotificationParametres(),X()});function m(){window.innerWidth<768&&o.ToogleFalse()}return m(),(_,S)=>{const b=j("Error");return t(),s("div",{class:g(["font-bega-light",{"is-sidebar-open":u(o).SidebarExpanded}])},[r(b),e("div",Xt,[e("div",Zt,[r(W),r(pe)]),r(Pe),r(Kt),e("div",es,[Q(_.$slots,"default"),r(Yt)])])],2)}}};export{is as _};

import{E as z,g as _,o as t,c as a,b as e,u as l,F as k,l as y,h as w,n as q,t as p,H as j,P as B,x as C,aX as P,s as S,f as o,w as u,e as T,v as G,V as I,i as b,A as M,X as U,a4 as Z,aY as R,B as O,Z as Y,J as X}from"./app-23676eb8.js";import{g as N,_ as J}from"./WebLayout-6a7675f1.js";import{S as D,N as A,P as L,a as H,A as F,b as V}from"./effect-init-0f8e1c1a.js";import{E}from"./effect-cube-f75370bb.js";import{A as K,E as Q}from"./effect-fade-ad3d98df.js";import"./userInfo-132dd916.js";import"./index-2630c011.js";const W={key:0,id:"confiance",class:"bg-white dark:bg-gray-800"},ee={class:"px-4 py-4 mx-auto sm:mx-2 md:px-auto"},te={class:"container text-gray-600 dark:text-gray-300"},se=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Commentaires"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl"},"Ils nous font confiance")],-1),ae={class:"container flex flex-col mx-auto my-10 overflow-hidden shadow-sm md:my-24 md:flex-row"},le=C('<div class="absolute top-0 left-0 z-10 w-16 h-16 grid-indigo md:w-40 md:h-40 md:ml-20 md:mt-24"></div><div class="relative z-20 px-6 py-2 mb-0 text-2xl leading-tight tracking-tight text-indigo-100 font-bega-semibold md:text-5xl md:py-6 md:px-1 md:w-64 md:mx-auto"><span class="md:block">Ce que </span><span class="md-block"> disent</span><span class="block">nos clients !</span></div>',2),oe={class:"bg-gray-100 md:w-1/2"},ie={key:0,class:"relative flex flex-col h-full"},re=e("div",{class:"absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-12 h-12 text-indigo-200 fill-current md:w-16 md:h-16",viewBox:"0 0 24 24"},[e("path",{d:"M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"})])],-1),de={class:"relative z-10 h-full"},ne={class:""},ce={key:0,class:"px-6 py-6 text-xl italic text-gray-600 font-bega-light md:px-16 md:text-2xl"},ue=["innerHTML"],me={class:"flex items-center justify-center my-4"},he=["onClick"],xe={class:"flex justify-center px-6 pt-2 pb-6 md:py-6"},ge={class:"text-center"},pe={class:"text-sm leading-tight text-gray-700 font-bega-semibold md:text-base"},fe={class:"text-xs text-gray-500 truncate md:text-sm"},ve={key:1,class:"w-full h-full animate-pulse"},_e={__name:"CommentaireUser",setup($){const n=N(),g=r=>{const c=r.split(" ");let x="";return c.forEach(d=>{x+=d.charAt(0)}),x.toUpperCase()},m=z(()=>n.getLastComment),i=_(0),v=()=>{i.value<m.value.length-1?i.value++:i.value=0},f=()=>{i.value>0?i.value--:i.value=m.value.length-1},s=r=>i.value===r,h=r=>{i.value=r};return(r,c)=>m.value!=null&&m.value.length>0?(t(),a("div",W,[e("div",ee,[e("div",te,[se,e("div",ae,[e("div",{class:"relative flex flex-col justify-center w-full py-2 bg-indigo-700 md:py-24 md:w-1/2 item-center"},[le,e("div",{class:"absolute bottom-0 right-0 hidden mb-4 mr-4 md:block"},[e("button",{class:"w-12 h-10 text-gray-500 bg-gray-100 border-r rounded-l-full font-bega-semibold focus:outline-none hover:text-indigo-500",onClick:f}," ← "),e("button",{class:"w-12 h-10 text-gray-500 bg-gray-100 rounded-r-full font-bega-semibold focus:outline-none hover:text-indigo-500",onClick:v}," → ")])]),e("div",oe,[l(n).isLoading?(t(),a("div",ve)):(t(),a("div",ie,[re,e("div",de,[(t(!0),a(k,null,y(m.value,(x,d)=>(t(),a("div",ne,[s(d)?(t(),a("p",ce,[e("span",{class:"",innerHTML:x.commentaire},null,8,ue)])):w("",!0)]))),256))]),e("div",me,[(t(!0),a(k,null,y(m.value,(x,d)=>(t(),a("button",{onClick:Xs=>h(d),class:q(["inline-block mx-2 text-center rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline",{"h-12 w-12 opacity-25 bg-indigo-300 text-gray-600":!s(d),"h-16 w-16 opacity-100 bg-indigo-600 text-white":s(d)}])},p(g(x==null?void 0:x.client)),11,he))),256))]),e("div",xe,[(t(!0),a(k,null,y(m.value,(x,d)=>j((t(),a("div",ge,[e("h2",pe,p(x.client),1),e("small",fe,p(x.entreprise)+".",1)],512)),[[B,s(d)]])),256))])]))])])])])])):w("",!0)}};function be($,n){return t(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clip-rule":"evenodd"})])}function we($,n){return t(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z","clip-rule":"evenodd"}),e("path",{d:"M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"})])}const ke={key:0,class:"bg-findDark-50 lg:min-h-screen dark:bg-findDark-900"},ye={class:"max-w-6xl px-8 py-6 mx-auto md:px-6"},$e=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Mission"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-findDark-200 sm:text-xl"},"Découvrez quelques missions")],-1),De={class:"py-4 mx-2"},ze={class:"flex items-end justify-end mb-2"},Ce={class:"flex gap-4"},Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),Se=[Me],je=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),Be=[je],Ae={class:"p-2 mb-4 rounded-md shadow-md min-h-[25rem] lg:flex-col"},Le=e("img",{class:"object-cover object-center rounded-md w-full h-48 bg-center bg-cover shrink-0",src:"/images/illustrations/missionF.svg",alt:"image"},null,-1),He={class:"flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5"},Fe={class:"flex items-center justify-between"},Ve={class:"text-xs+ font-medium text-info",href:"#"},qe=e("div",{class:"-mr-1.5 flex space-x-1"},[e("button",{class:"hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4.5 w-4.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})])]),e("div",{class:"p-2"})],-1),Pe={href:"#",class:"max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100"},Te={class:"mt-1 line-clamp-3"},Ne={class:"max-w-xs truncate font-bega-light"},Ee={class:"grow"},Ge={class:"flex items-center mt-2 text-xs"},Ie={href:"#",class:"flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"},Ue={class:"w-10 h-10 mb-2"},Ze={class:"line-clamp-1"},Re=e("div",{class:"self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"},null,-1),Oe={class:"shrink-0 text-slate-400 dark:text-navy-300"},Ye={class:"flex justify-between gap-4 mt-1"},Xe={class:"flex items-center"},Je={class:"text-lg font-bega-semibold text-amber-600"},Ke={key:0,class:"flex gap-4 mt-4"},Qe={href:"/freelance-gestion/missions"},We={key:1,class:"flex gap-4 mt-4"},et={key:2,class:"px-4"},tt={__name:"MissionHome",setup($){const n=(s,h)=>s.length>h?s.slice(0,h)+"...":s;_(!1);const g=P(),m=z(()=>g.missionGeters),i=_(null),v=s=>{i.value&&(s==="prev"?i.value.slidePrev():s==="next"&&i.value.slideNext())},f=s=>{i.value=s};return(s,h)=>{const r=S("Photo"),c=S("Button"),x=S("Link");return m.value.length>0?(t(),a("div",ke,[e("div",ye,[$e,e("div",De,[e("div",ze,[e("div",Ce,[e("button",{onClick:h[0]||(h[0]=d=>v("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Se),e("button",{onClick:h[1]||(h[1]=d=>v("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Be)])]),o(l(V),{class:"flex py-8 mb-4",modules:[l(A),l(L),l(H),l(E),l(F)],spaceBetween:30,"space-between":25,breakpoints:{300:{slidesPerView:1},900:{slidesPerView:3}},onSwiper:f},{default:u(()=>[(t(!0),a(k,null,y(m.value,d=>(t(),T(l(D),{class:"p-2"},{default:u(()=>[e("div",Ae,[Le,e("div",He,[e("div",Fe,[e("a",Ve,p(d.category.name),1),qe]),e("div",null,[e("p",Pe,p(d.title),1)]),e("p",Te,[e("div",Ne,p(n(d.description,80)),1)]),e("div",Ee,[e("div",Ge,[e("a",Ie,[e("div",Ue,[o(r,{user:d.user,taille:"10"},null,8,["user"])]),e("span",Ze,p(d.user.name),1)]),Re,e("span",Oe,p(d.created_at),1)])]),e("div",Ye,[e("div",Xe,[e("h1",Je,p(d.budget)+" $",1)]),d.status=="pending"&&s.$page.props.auth.freelance?(t(),a("div",Ke,[e("a",Qe,[o(c,{size:"small",outlined:"",severity:"info",label:"Postuler"})])])):w("",!0),d.status=="pending"&&!s.$page.props.auth.freelance&&!s.$page.props.auth.user==null?(t(),a("div",We,[o(x,{href:s.route("register.begin")},{default:u(()=>[o(c,{size:"small",outlined:"",severity:"info",label:"Etre prestaire pour postuler"})]),_:1},8,["href"])])):w("",!0),s.$page.props.auth.user==null?(t(),a("div",et,[o(x,{href:s.route("register")},{default:u(()=>[o(c,{size:"small",outlined:"",severity:"info",label:"postuler"})]),_:1},8,["href"])])):w("",!0)])])])]),_:2},1024))),256))]),_:1},8,["modules"])])])])):w("",!0)}}},st={class:"flex flex-col w-full mt-6 lg:mt-6 2xl:mt-10"},at={class:"relative"},lt=e("button",{type:"submit",class:"px-6 py-3 ml-auto text-center transition rounded-lg bg-skin-fill"},[e("span",{class:"hidden font-semibold text-white md:block"}," Recherche "),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 mx-auto text-white md:hidden",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})])],-1),ot={key:0,class:"absolute w-full mt-1 overflow-y-auto bg-white border divide-y rounded-lg shadow z-[60] custom-scrollbar max-h-72"},it={key:0},rt={key:1,class:"block p-2 text-gray-800",href:"#"},dt={key:2,class:"block p-2 text-gray-800",href:"#"},nt={class:"p-2 mt-2"},ct=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ut=[ct],mt={class:"flex justify-center gap-4 mt-4"},ht={class:"flex items-center space-x-2"},xt={class:"flex items-center space-x-2"},gt={class:"flex items-center space-x-2"},pt=e("p",{class:"mt-2 text-center text-gray-100 2xl:text-lg"},"Catégories les plus populaires",-1),ft={__name:"HomeSearch",setup($){const n=_(""),g=_([]),m=_(!1),i=_(!1),v=()=>{g.value.length>0?i.value=!0:i.value=!1},f=async()=>{try{m.value=!0,i.value=!0,g.value=[];const s=await U.post(route("searchElement"),{search:n.value});g.value=s.data.results,console.log(g.value)}catch(s){console.log(s),m.value=!1}};return(s,h)=>(t(),a("div",null,[e("div",null,[e("div",st,[e("div",at,[e("form",{onSubmit:G(f,["prevent"]),class:"relative flex p-1 mb-4 bg-white shadow-2xl lg:dark:bg-white rounded-xl 2xl:p-4 md:p-2"},[j(e("input",{required:"","onUpdate:modelValue":h[0]||(h[0]=r=>n.value=r),onFocus:v,class:"w-full p-4 mr-2 text-gray-600 border-white 2xl:p-6 focus:border-white rounded-xl",type:"text"},null,544),[[I,n.value]]),lt],32),i.value?(t(),a("div",ot,[g.value.length>0?(t(),a("div",it,[(t(!0),a(k,null,y(g.value,r=>(t(),a("div",{key:r.id},[o(l(M),{href:s.route("oneService",[r.userSlug,r.slug]),class:"block p-2 text-sm text-gray-800 cursor-pointer hover:bg-amber-700 hover:text-white"},{default:u(()=>[b(p(r.title)+" - "+p(r.category.name),1)]),_:2},1032,["href"])]))),128))])):m.value?(t(),a("a",rt,"Chargement en cours...")):(t(),a("a",dt,"Pas de résultat")),e("div",nt,[e("button",{onClick:h[1]||(h[1]=r=>i.value=!i.value),class:"btn btn-sm btn-circle btn-outline"},ut)])])):w("",!0)]),e("div",mt,[e("div",ht,[o(l(M),{href:"/categories'",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:u(()=>[b(" Photographie")]),_:1})]),e("div",xt,[o(l(M),{href:"/categories",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:u(()=>[b(" Design ")]),_:1})]),e("div",gt,[o(l(M),{href:"/categories",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:u(()=>[b(" Technologie")]),_:1})])]),pt])])]))}},vt={key:0,id:"talkAbout",class:"bg-white dark:bg-gray-900 lg:min-h-screen xl:min-h-full"},_t={class:"container max-w-6xl p-4 m-4 mx-auto 2xl:max-w-7xl 2xl:p-2 md:p-6"},bt=e("div",{class:"mb-10 text-center xl:mb-14"},[e("span",{class:"font-bega-medium text-amber-600"},"Presentation"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200"},"Ils en parlent mieux que nous")],-1),wt={class:"my-10"},kt={class:"!bg-transparent px-2 md:px-0"},yt={class:"px-2 bg-white border border-gray-300 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"},$t={class:"grid md:grid-cols-5"},Dt={class:"w-full m-2 h-50 xl:h-72 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"},zt=["src"],Ct={class:"p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"},Mt={class:"w-20 mx-auto rounded-lg xl:w-28"},St=["src"],jt={class:"dark:text-gray-200 font-bega-light xl:text-lg"},Bt=["innerHTML"],At={class:"text-lg leading-none font-bega-semibold dark:text-gray-200"},Lt={__name:"TalkAboutUs",setup($){const n=N(),g=z(()=>n.getLastTalkAbout);return(m,i)=>{var v;return((v=g.value)==null?void 0:v.length)>0?(t(),a("div",vt,[e("div",_t,[bt,e("div",wt,[o(l(V),{class:"flex py-8 xl:py-12",modules:[l(A),l(L),l(H),l(E),l(F)],spaceBetween:30,"slides-per-view":1,"space-between":25,pagination:{clickable:!0}},{default:u(()=>[(t(!0),a(k,null,y(g.value,(f,s)=>(t(),T(l(D),{class:"mb-8 xl:mb-12"},{default:u(()=>[e("div",kt,[e("div",yt,[e("div",$t,[e("div",Dt,[f.lien!=null?(t(),a("iframe",{key:0,class:"w-full h-full rounded-sm aspect-video hover:aspect-square",src:f.lien,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,zt)):w("",!0)]),e("div",Ct,[e("div",Mt,[e("img",{src:"/storage/"+f.image,alt:"company logo",loading:"lazy"},null,8,St)]),e("p",jt,[e("span",{innerHTML:f.commentaire,class:""},null,8,Bt)]),e("h6",At,p(f.utilisateur),1)])])])])]),_:2},1024))),256))]),_:1},8,["modules"])])])])):w("",!0)}}};const Ht=e("meta",{name:"description",content:"Find-freelance regorge des excellents professionnels africains. Gagner du temps et soyez satisfait des services de nos freelances à des prix équitables."},null,-1),Ft={class:"relative min-h-screen 2xl:min-h-full slideshow slideshow-wrapper pb-section sliderFull"},Vt={class:"hidden lg:block"},qt={class:"home-slideshow"},Pt=e("div",{class:"slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload bg-[#FFAA76]","data-src":"/images/optimize/sans.png",src:"/images/optimize/sans.png",alt:"women sans",title:"women sans"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])])],-1),Tt=e("div",{class:"relative slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload bg-img","data-src":"/canva/graceBrand.svg",src:"/canva/graceBrand.svg",alt:"graceP",title:"graceP"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])]),e("div",{class:"absolute flex flex-col hidden floating gap-1 right-[30%] top-1/2"},[e("h1",{class:"text-lg text-white font-bega-medium"},"Grace K."),e("p",{class:"text-base text-white font-bega-medium"},"Marketeuse Digital")])],-1),Nt=e("div",{class:"slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload","data-src":"/images/optimize/homme.png",src:"/images/optimize/homme.png",alt:"New Season Styles",title:"New Season Styles"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])])],-1),Et=C('<div class="absolute top-0 left-0 w-full h-screen bg-skin-fill dark:bg-findDark-900 lg:hidden"><div class="hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] absolute bottom-[-100px] md:w-[800px] md:h-[750px] lg:top-[120px] lg:right-[-100px] xl:right-0 w-[500px] h-[500px] 2xl:w-[1026px] 2xl:h-[1026px]"><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:R65m:-gradient-1)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:R65m:-gradient-2)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg></div><div class="relative w-full lg:-mt-10" id="girl"></div></div>',1),Gt={"data-aos":"fade-right","data-aos-duration":"800",class:"absolute top-0 left-0 z-50 px-6 py-8 xl:py-10 lg:mt-8 2xl:mt-16 lg:col-span-6 lg:py-12 md:mb-8 xl:place-self-center lg:mb-0 lg:w-1/2"},It={class:"pt-[8rem] 2xl:pt-[10rem] px-1"},Ut=e("h1",{class:"text-3xl text-center text-white font-bega-bold lg:text-5xl 2xl:text-6xl lg:text-left"},[b(" Votre satisfaction dans nos services Freelance "),e("br")],-1),Zt={id:"features",class:"bg-findDark-100 dark:bg-findDark-800"},Rt={"data-aos":"",class:"z-10 px-8 py-8 overflow-hidden lg:max-w-6xl 2xl:max-w-7xl 2xl:px-2 lg:mx-auto md:px-6"},Ot={class:"flex flex-col-reverse lg:flex-row"},Yt={"data-aos":"fade-up","data-aos-duration":"500",class:"w-full lg:w-5/12"},Xt=e("h1",{class:"text-slate-800 mb-4 xl:mb-6 dark:text-white text-2xl font-bega-semibold leading-snug lg:text-[40px] xl:text-5xl"},[b(" Atteignez vos objectifs plus rapidement avec "),e("span",{class:"text-amber-600 font-bega-semibold"},"FIND")],-1),Jt={class:"grid grid-cols-1 gap-2 mx-auto md:mx-0 md:grid-cols-2"},Kt=C('<div class="mt-4 mb-2 text-center"><h1 class="text-xl text-findDark-500 font-bega-light">Nos partenaires</h1></div><div class="grid grid-cols-2 gap-4 mx-4 mt-6 md:mx-0 px-auto md:gap-2 md:grid-cols-3"><img src="/images/brand/makutano.png" alt="makutano" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 findDarkscale hover:findDarkscale-0 bg-findDark-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"><img src="/images/brand/silikin.png" alt="silikin" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 findDarkscale hover:findDarkscale-0 bg-findDark-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"></div>',2),Qt=C('<div class="px-4 lg:w-1/12"></div><div data-aos="fade-left" data-aos-duration="500" class="hidden w-full px-4 lg:block md:w-6/12"><div class="lg:ml-auto lg:text-right"><div class="relative z-10 inline-block pt-11 lg:pt-0"><img src="/canva/fon2.jpg" alt="hero div bg-img img" class="rounded-lg lg:ml-auto"></div></div></div>',2),Wt={id:"monde2",class:"xl:min-h-full lg:min-h-screen dark:bg-findDark-900"},es={class:"p-4"},ts={class:"px-6 m-auto text-findDark-600 xl:container md:px-12 xl:px-16"},ss={class:"flex-row-reverse justify-center p-4 space-y-6 bg-findDark-100 rounded-lg dark:bg-findDark-800 lg:p-16 md:flex md:gap-6 md:space-y-0 lg:items-center"},as=e("div",{"data-aos":"flip-left","data-aos-duration":"500",class:"md:5/12 lg:w-1/2"},[e("img",{src:"/images/services/presentation3.png",alt:"image",class:"rounded-lg dark:bg-findDark-800 floating bg-skin-fill",loading:"lazy",width:"",height:""})],-1),ls={"data-aos":"fade-right","data-aos-duration":"300",class:"md:7/12 lg:w-1/2"},os=e("div",{class:"px-4"},[e("h2",{class:"text-xl text-findDark-900 font-bega-semibold md:text-4xl dark:text-white"}," Trouvez dès aujourd'hui la personne idéale pour votre projet ! ")],-1),is={class:"space-y-4 divide-y divide-findDark-100 font-bega-light dark:divide-findDark-800"},rs={class:"flex gap-4 mt-4 md:items-start"},ds={class:"flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"},ns=e("div",{class:"w-5/6"},[e("h4",{class:"text-lg text-findDark-700 font-bega-medium dark:text-indigo-300"},"Des services de haute qualité pour un prix équitable"),e("p",{class:"text-findDark-500 dark:text-findDark-50"},"Mettez la main sur d'excellents services a bon prix . Une taxation en fonction de la demande de service")],-1),cs={class:"flex gap-4 pt-2 md:items-start"},us={class:"flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"},ms=e("div",{class:"w-5/6"},[e("h4",{class:"text-lg text-findDark-700 font-bega-medium dark:text-teal-300"},"Des services efficacement fait"),e("p",{class:"text-findDark-500 dark:text-findDark-50"},"Decouvrez les freelancers qui convient afin de travailler avec vous")],-1),hs=C('<div class="flex gap-4 mt-4 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-findDark-700 font-bega-medium dark:text-indigo-300">Des Paiement protégés</h4><p class="text-findDark-500 dark:text-findDark-50">Assurez-vous de connaître le coût total dès le départ. Votre rémunération ne sera versée que lorsque vous aurez confirmé que le travail est satisfaisant.</p></div></div><div class="flex gap-4 pt-2 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-findDark-700 font-bega-medium dark:text-teal-300">Une Assistance 24h/24 et 7j/7</h4><p class="text-findDark-500 dark:text-findDark-50">Des Questions ? notre equipe d&#39;assistance est disponible 24h/24 pour vous aider à tout moment et en tout lieu</p></div></div>',2),xs={id:"Services",class:"bg-findDark-100 lg:min-h-screen dark:bg-findDark-800"},gs={class:"max-w-6xl px-8 py-6 mx-auto md:px-6"},ps=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Categories"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-findDark-200 sm:text-xl"},"Découvrez les services")],-1),fs={class:"grid grid-cols-2 gap-4 font-bega-light md:gap-6 md:grid-cols-4 xl:gap-8"},vs=["src","alt"],_s=["alt"],bs={class:"mt-3 mb-1 md:text-[20px] text-[16px] font-bega-medium text-slate-600 duration-200 group-hover:text-white"},ws={id:"getStarted",class:"bg-findDark-900 lg:min-h-screen"},ks={class:"py-16"},ys={class:"container px-6 m-auto space-y-8 text-findDark-500 md:px-12 lg:px-20"},$s={class:"justify-center gap-6 p-3 mx-auto text-center rounded-lg md:flex md:text-left lg:items-center lg:gap-16"},Ds={"data-aos":"fade-up","data-aos-duration":"500",class:"mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12"},zs=e("h1",{class:"text-3xl text-white font-bega-semibold md:text-4xl dark:text-white"},"Vous êtes un freelance à la recherche de nouvelles opportunités ? ",-1),Cs=e("p",{class:"text-base font-bega-light text-findDark-50 dark:text-findDark-300"}," FIND permet aux freelances de proposer leurs compétences aux entreprises et autres personnes intéressées par les offres disponibles sur le site. En outre, la plateforme met en œuvre des tactiques de marketing pour augmenter le nombre d'achats de services. ",-1),Ms={class:"flex flex-wrap gap-6"},Ss=e("span",{class:"relative text-base font-bega-medium text-amber-600"},"Rejoignez Nous",-1),js=e("div",{"data-aos":"fade-up","data-aos-duration":"800",class:"grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12"},[e("div",{class:"col-span-5 row-span-4"},[e("img",{src:"/images/services/work2.png",class:"object-cover object-top w-full h-full mb-3 md:mb-0 rounded-xl",width:"640",height:"427",alt:"work",loading:"lazy"})])],-1),Bs=e("div",{id:"presentation",class:"bg-findDark-100 dark:bg-findDark-950 lg:min-h-screen"},[e("div",{class:"max-w-6xl px-8 py-6 mx-auto md:px-4"},[e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Decouverte"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 sm:text-3xl"},"Find ")]),e("div",{class:"flex flex-col"},[e("div",{"data-aos":"fade-in","data-aos-duration":"500",class:"grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-8"},[e("div",{class:"flex flex-col items-center w-full px-8 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-findDark-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"people-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 dark:text-white duration-200 group-hover:text-white"}," +200 Freelance")]),e("div",{class:"flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl dark:bg-findDark-800 border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"bag-check-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium dark:text-white text-slate-600 duration-200 group-hover:text-white"}," 500 Marchés ")]),e("div",{class:"flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-findDark-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"albums-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 duration-200 group-hover:text-white dark:text-white"}," +10 Categories ")])]),e("div",{class:"p-2 bg-white border border-findDark-100 dark:border-findDark-700 rounded-3xl dark:bg-findDark-800 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12"},[e("div",{class:"flex flex-col px-2 py-4 md:py-6"},[e("div",{class:"space-y-6 py-auto justify md:col-span-2 sm:p-8"},[e("div",{class:"px-6"},[e("h1",{class:"mt-4 text-xl text-center text-findDark-800 font-bega-medium dark:text-white"},[b("Comment s'inscrire comme "),e("span",{class:"text-amber-800 dark:text-white"},"freelance ?")])]),e("p",{class:"mt-2 text-lg leading-none text-center text-findDark-700 text-md dark:text-white"},[e("span",{class:"font-serif"},'"'),b(" Apprenez à utiliser la Plateforme Find-freelance à l'aide de ces tutoriels. "),e("span",{class:"font-serif"},'"')])]),e("div",{class:"order-2 w-full h-48 mx-2 my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl"},[e("iframe",{class:"w-full h-full aspect-video",src:"https://www.youtube.com/embed/rw_3Yv-rhZM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])])])])])],-1),As={id:"faqs",class:"bg-white lg:min-h-screen dark:bg-findDark-800 dark:text-white"},Ls={class:"px-8 py-6 mx-auto max-w-7xl md:px-6"},Hs=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Faqs"),e("h1",{class:"text-2xl font-bega-semibold dark:text-findDark-50 text-slate-700 sm:text-3xl"},"Faqs ")],-1),Fs={class:"grid sm:grid-cols-2"},Vs=e("div",{"data-aos":"fade-right","data-aos-duration":"1000",class:"w-full px-4"},[e("img",{src:"/images//services/faq.png",alt:"hero div img",class:"rounded-full lg:ml-auto"})],-1),qs={class:"w-full lg:w-11/12"},Ps={class:"px-1 py-2 text-findDark-800"},Ts={class:"mt-6 text-lg leading-loose"},Ns=["onClick"],Es={class:"text-left"},Gs={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},Is=e("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"},null,-1),Us=[Is],Zs={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},Rs=e("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"},null,-1),Os=[Rs],Ys={class:"m-2 text-sm text-justify text-findDark-800 dark:text-white"},aa=Object.assign({layout:J},{__name:"Home",props:{categories:Array},setup($){const n=_([]),g=s=>{n.value.includes(s)?n.value=n.value.filter(h=>h!==s):(n.value=[],n.value.push(s))};_(null);const m=Z(),i=R(),v=z(()=>i.faqsGetter),f=P();return z(()=>f.missionGeters),O(()=>{m.updateIsHome(),f.fetchLastMission(),i.fetchLastFaq()}),_(!1),(s,h)=>{const r=S("Link");return t(),a(k,null,[o(l(Y),{title:"Accueil"},{default:u(()=>[Ht]),_:1}),e("div",Ft,[e("div",Vt,[e("div",qt,[o(l(V),{modules:[l(A),l(K),l(L),l(H),l(Q),l(F)],effect:"fade",loop:!0,spaceBetween:30,"slides-per-view":1,autoplay:{delay:3e3,disableOnInteraction:!1}},{default:u(()=>[o(l(D),null,{default:u(()=>[Pt]),_:1}),o(l(D),null,{default:u(()=>[Tt]),_:1}),o(l(D),null,{default:u(()=>[Nt]),_:1})]),_:1},8,["modules"])])]),Et,e("div",Gt,[e("div",It,[Ut,o(ft)])])]),e("div",Zt,[e("div",Rt,[e("div",Ot,[e("div",Yt,[Xt,e("div",Jt,[o(r,{href:s.route("find_freelance"),class:"w-10/12 rounded-md mx-auto 2xl:py-3 2xl:text-lg text-center bg-amber-600 px-8 py-2.5 font-bega-medium text-white shadow-md shadow-amber-500/20 hover:bg-amber-700 duration-200 sm:w-auto"},{default:u(()=>[b("Trouver un freelance")]),_:1},8,["href"]),o(r,{href:s.route("register.begin"),class:"mt-4 md:mt-0 mx-auto text-center box-border w-10/12 2xl:py-3 2xl:text-lg rounded-md border border-amber-500/20 px-8 py-2.5 font-bega-medium text-amber-600 shadow-md shadow-amber-500/10 hover:bg-findDark-100 duration-200"},{default:u(()=>[b("Dévenir freelance")]),_:1},8,["href"])]),Kt]),Qt])])]),o(Lt),e("div",Wt,[e("div",es,[e("div",ts,[e("div",ss,[as,e("div",ls,[os,e("div",is,[e("div",rs,[e("div",ds,[o(l(be),{class:"text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"})]),ns]),e("div",cs,[e("div",us,[o(l(we),{class:"text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"})]),ms]),hs])])])])])]),e("div",xs,[e("div",gs,[ps,e("div",fs,[(t(!0),a(k,null,y($.categories,c=>(t(),a("div",null,[o(r,{href:s.route("categoryName",c.slug),class:"flex flex-col items-center px-2 py-4 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},{default:u(()=>[c.media.url!=""?(t(),a("img",{key:0,src:c.media.url,class:"w-20 h-20 rounded-md",alt:c.media.url},null,8,vs)):(t(),a("img",{key:1,src:"/images/logo/ff3.png",class:"w-20 h-20 rounded-md",alt:c.media.url},null,8,_s)),e("h4",bs,p(c.name),1)]),_:2},1032,["href"])]))),256))])])]),o(tt),o(_e),e("div",ws,[e("div",ks,[e("div",ys,[e("div",$s,[e("div",Ds,[zs,Cs,e("div",Ms,[o(r,{href:s.route("register.begin"),class:"relative flex items-center justify-center w-[6/12] h-12 px-8 mx-auto duration-300 bg-white rounded-full before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"},{default:u(()=>[Ss]),_:1},8,["href"])])]),js])])])]),Bs,e("div",As,[e("div",Ls,[Hs,e("div",Fs,[Vs,e("div",qs,[e("div",Ps,[e("div",Ts,[e("div",null,[(t(!0),a(k,null,y(v.value,(c,x)=>(t(),a("div",{key:c.id},[e("button",{class:q(["flex items-center justify-between w-full py-3 mt-4 text-findDark-800 border-b font-bega-semibold dark:text-white",x!==v.value.length-1&&"border-b border-findDark-400"]),onClick:d=>g(c.id)},[e("div",Es,p(c.questions),1),j((t(),a("svg",Gs,Us,512)),[[B,!n.value.includes(c.id)]]),j((t(),a("svg",Zs,Os,512)),[[B,n.value.includes(c.id)]])],10,Ns),o(l(X),{when:n.value.includes(c.id),class:"m-2"},{default:u(()=>[e("p",Ys,p(c.reponses),1)]),_:2},1032,["when"])]))),128))])])])])])])])],64)}}});export{aa as default};

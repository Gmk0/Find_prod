import{E as F,g as D,o as t,c as s,b as e,u as a,F as k,l as $,h as b,n as I,t as m,H as M,P as j,x as A,v as Y,U as J,f as o,w as r,i as _,A as L,V as K,e as Z,a8 as Q,aW as W,aX as X,B as ee,s as V,Z as te,J as se}from"./app-4928752d.js";import{g as G,_ as ae}from"./WebLayout-99251bde.js";import{S as B,N as q,P,a as T,A as N,b as E}from"./effect-init-718aeb35.js";import{E as R}from"./effect-cube-0f170f78.js";import{A as le,E as oe}from"./effect-fade-2225c69a.js";import"./userInfo-3d0173f2.js";import"./index-2630c011.js";const ie={key:0,id:"confiance",class:"bg-white dark:bg-gray-800"},re={class:"px-4 py-4 mx-auto sm:mx-2 md:px-auto"},de={class:"container text-gray-600 dark:text-gray-300"},ne=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Comentaire"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl"},"Ils nous font confiance")],-1),ce={class:"container flex flex-col mx-auto my-10 overflow-hidden shadow-sm md:my-24 md:flex-row"},ue=A('<div class="absolute top-0 left-0 z-10 w-16 h-16 grid-indigo md:w-40 md:h-40 md:ml-20 md:mt-24"></div><div class="relative z-20 px-6 py-2 mb-0 text-2xl leading-tight tracking-tight text-indigo-100 font-bega-semibold md:text-5xl md:py-6 md:px-1 md:w-64 md:mx-auto"><span class="md:block">Ce que</span><span class="md-block">disent</span><span class="block">nos clients !</span></div>',2),me={class:"bg-gray-100 md:w-1/2"},he={key:0,class:"relative flex flex-col h-full"},xe=e("div",{class:"absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-12 h-12 text-indigo-200 fill-current md:w-16 md:h-16",viewBox:"0 0 24 24"},[e("path",{d:"M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"})])],-1),ge={class:"relative z-10 h-full"},pe={class:""},fe={key:0,class:"px-6 py-6 text-xl italic text-gray-600 font-bega-light md:px-16 md:text-2xl"},ve=["innerHTML"],be={class:"flex items-center justify-center my-4"},_e=["onClick"],we={class:"flex justify-center px-6 pt-2 pb-6 md:py-6"},ke={class:"text-center"},ye={class:"text-sm leading-tight text-gray-700 font-bega-semibold md:text-base"},De={class:"text-xs text-gray-500 truncate md:text-sm"},$e={key:1,class:"w-full h-full animate-pulse"},ze={__name:"CommentaireUser",setup(z){const d=G(),g=c=>{const S=c.split(" ");let p="";return S.forEach(h=>{p+=h.charAt(0)}),p.toUpperCase()},u=F(()=>d.getLastComment),n=D(0),y=()=>{n.value<u.value.length-1?n.value++:n.value=0},f=()=>{n.value>0?n.value--:n.value=u.value.length-1},x=c=>n.value===c,w=c=>{n.value=c};return(c,S)=>u.value!=null&&u.value.length>0?(t(),s("div",ie,[e("div",re,[e("div",de,[ne,e("div",ce,[e("div",{class:"relative flex flex-col justify-center w-full py-2 bg-indigo-700 md:py-24 md:w-1/2 item-center"},[ue,e("div",{class:"absolute bottom-0 right-0 hidden mb-4 mr-4 md:block"},[e("button",{class:"w-12 h-10 text-gray-500 bg-gray-100 border-r rounded-l-full font-bega-semibold focus:outline-none hover:text-indigo-500",onClick:f}," ← "),e("button",{class:"w-12 h-10 text-gray-500 bg-gray-100 rounded-r-full font-bega-semibold focus:outline-none hover:text-indigo-500",onClick:y}," → ")])]),e("div",me,[a(d).isLoading?(t(),s("div",$e)):(t(),s("div",he,[xe,e("div",ge,[(t(!0),s(k,null,$(u.value,(p,h)=>(t(),s("div",pe,[x(h)?(t(),s("p",fe,[e("span",{class:"",innerHTML:p.commentaire},null,8,ve)])):b("",!0)]))),256))]),e("div",be,[(t(!0),s(k,null,$(u.value,(p,h)=>(t(),s("button",{onClick:i=>w(h),class:I(["inline-block mx-2 text-center rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline",{"h-12 w-12 opacity-25 bg-indigo-300 text-gray-600":!x(h),"h-16 w-16 opacity-100 bg-indigo-600 text-white":x(h)}])},m(g(p==null?void 0:p.client)),11,_e))),256))]),e("div",we,[(t(!0),s(k,null,$(u.value,(p,h)=>M((t(),s("div",ke,[e("h2",ye,m(p.client),1),e("small",De,m(p.entreprise)+".",1)],512)),[[j,x(h)]])),256))])]))])])])])])):b("",!0)}};function Ce(z,d){return t(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clip-rule":"evenodd"})])}function Me(z,d){return t(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z","clip-rule":"evenodd"}),e("path",{d:"M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"})])}const Se={class:"flex flex-col w-full mt-6 lg:mt-6 2xl:mt-10"},je={class:"relative"},Be=e("button",{type:"submit",class:"px-6 py-3 ml-auto text-center transition rounded-lg bg-skin-fill"},[e("span",{class:"hidden font-semibold text-white md:block"}," Recherche "),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 mx-auto text-white md:hidden",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})])],-1),Ae={key:0,class:"absolute w-full mt-1 overflow-y-auto bg-white border divide-y rounded-lg shadow z-[60] custom-scrollbar max-h-72"},Le={key:0},Fe={key:1,class:"block p-2 text-gray-800",href:"#"},He={key:2,class:"block p-2 text-gray-800",href:"#"},Ve={class:"p-2 mt-2"},qe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Pe=[qe],Te={class:"flex justify-center gap-4 mt-4"},Ne={class:"flex items-center space-x-2"},Ee={class:"flex items-center space-x-2"},Ue={class:"flex items-center space-x-2"},Ie=e("p",{class:"mt-2 text-center text-gray-100 2xl:text-lg"},"Catégories les plus populaires",-1),Ze={__name:"HomeSearch",setup(z){const d=D(""),g=D([]),u=D(!1),n=D(!1),y=()=>{g.value.length>0?n.value=!0:n.value=!1},f=async()=>{try{u.value=!0,n.value=!0,g.value=[];const x=await K.post(route("searchElement"),{search:d.value});g.value=x.data.results,console.log(g.value)}catch(x){console.log(x),u.value=!1}};return(x,w)=>(t(),s("div",null,[e("div",null,[e("div",Se,[e("div",je,[e("form",{onSubmit:Y(f,["prevent"]),class:"relative flex p-1 mb-4 bg-white shadow-2xl lg:dark:bg-white rounded-xl 2xl:p-4 md:p-2"},[M(e("input",{required:"","onUpdate:modelValue":w[0]||(w[0]=c=>d.value=c),onFocus:y,class:"w-full p-4 mr-2 text-gray-600 border-white 2xl:p-6 focus:border-white rounded-xl",type:"text"},null,544),[[J,d.value]]),Be],32),n.value?(t(),s("div",Ae,[g.value.length>0?(t(),s("div",Le,[(t(!0),s(k,null,$(g.value,c=>(t(),s("div",{key:c.id},[o(a(L),{href:x.route("oneService",[c.userSlug,c.slug]),class:"block p-2 text-sm text-gray-800 cursor-pointer hover:bg-amber-700 hover:text-white"},{default:r(()=>[_(m(c.title)+" - "+m(c.category.name),1)]),_:2},1032,["href"])]))),128))])):u.value?(t(),s("a",Fe,"Chargement en cours...")):(t(),s("a",He,"Pas de résultat")),e("div",Ve,[e("button",{onClick:w[1]||(w[1]=c=>n.value=!n.value),class:"btn btn-sm btn-circle btn-outline"},Pe)])])):b("",!0)]),e("div",Te,[e("div",Ne,[o(a(L),{href:"/categories'",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:r(()=>[_(" Photographie")]),_:1})]),e("div",Ee,[o(a(L),{href:"/categories",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:r(()=>[_(" Design ")]),_:1})]),e("div",Ue,[o(a(L),{href:"/categories",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:r(()=>[_(" Technologie")]),_:1})])]),Ie])])]))}},Ge={key:0,id:"talkAbout",class:"bg-white dark:bg-gray-900 lg:min-h-screen xl:min-h-full"},Re={class:"container max-w-6xl p-4 m-4 mx-auto 2xl:max-w-7xl 2xl:p-2 md:p-6"},Oe=e("div",{class:"mb-10 text-center xl:mb-14"},[e("span",{class:"font-bega-medium text-amber-600"},"Presentation"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200"},"Ils en parlent mieux que nous")],-1),Ye={class:"my-10"},Je={class:"!bg-transparent px-2 md:px-0"},Ke={class:"px-2 bg-white border border-gray-300 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"},Qe={class:"grid md:grid-cols-5"},We={class:"w-full m-2 h-50 xl:h-72 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"},Xe=["src"],et={class:"p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"},tt={class:"w-20 mx-auto rounded-lg xl:w-28"},st=["src"],at={class:"dark:text-gray-200 font-bega-light xl:text-lg"},lt=["innerHTML"],ot={class:"text-lg leading-none font-bega-semibold dark:text-gray-200"},it={__name:"TalkAboutUs",setup(z){const d=G(),g=F(()=>d.getLastTalkAbout);return(u,n)=>{var y;return((y=g.value)==null?void 0:y.length)>0?(t(),s("div",Ge,[e("div",Re,[Oe,e("div",Ye,[o(a(E),{class:"flex py-8 xl:py-12",modules:[a(q),a(P),a(T),a(R),a(N)],spaceBetween:30,"slides-per-view":1,"space-between":25,pagination:{clickable:!0}},{default:r(()=>[(t(!0),s(k,null,$(g.value,(f,x)=>(t(),Z(a(B),{class:"mb-8 xl:mb-12"},{default:r(()=>[e("div",Je,[e("div",Ke,[e("div",Qe,[e("div",We,[f.lien!=null?(t(),s("iframe",{key:0,class:"w-full h-full rounded-sm aspect-video hover:aspect-square",src:f.lien,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,Xe)):b("",!0)]),e("div",et,[e("div",tt,[e("img",{src:"/storage/"+f.image,alt:"company logo",loading:"lazy"},null,8,st)]),e("p",at,[e("span",{innerHTML:f.commentaire,class:""},null,8,lt)]),e("h6",ot,m(f.utilisateur),1)])])])])]),_:2},1024))),256))]),_:1},8,["modules"])])])])):b("",!0)}}};const rt=e("meta",{name:"description",content:"Find-freelance regorge des excellents professionnels africains. Gagner du temps et soyez satisfait des services de nos freelances à des prix équitables."},null,-1),dt={class:"relative min-h-screen 2xl:min-h-full slideshow slideshow-wrapper pb-section sliderFull"},nt={class:"hidden lg:block"},ct={class:"home-slideshow"},ut=e("div",{class:"slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload bg-[#FFAA76]","data-src":"/images/optimize/sans.png",src:"/images/optimize/sans.png",alt:"women sans",title:"women sans"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])])],-1),mt=e("div",{class:"relative slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload bg-img","data-src":"/canva/graceBrand.svg",src:"/canva/graceBrand.svg",alt:"graceP",title:"graceP"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])]),e("div",{class:"absolute flex flex-col hidden floating gap-1 right-[30%] top-1/2"},[e("h1",{class:"text-lg text-white font-bega-medium"},"Grace K."),e("p",{class:"text-base text-white font-bega-medium"},"Marketeuse Digital")])],-1),ht=e("div",{class:"slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload","data-src":"/images/optimize/homme.png",src:"/images/optimize/homme.png",alt:"New Season Styles",title:"New Season Styles"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])])],-1),xt=A('<div class="absolute top-0 left-0 w-full h-screen bg-skin-fill dark:bg-findDark-900 lg:hidden"><div class="hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] absolute bottom-[-100px] md:w-[800px] md:h-[750px] lg:top-[120px] lg:right-[-100px] xl:right-0 w-[500px] h-[500px] 2xl:w-[1026px] 2xl:h-[1026px]"><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:R65m:-gradient-1)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:R65m:-gradient-2)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg></div><div class="relative w-full lg:-mt-10" id="girl"></div></div>',1),gt={"data-aos":"fade-right","data-aos-duration":"800",class:"absolute top-0 left-0 z-50 px-6 py-8 xl:py-10 lg:mt-8 2xl:mt-16 lg:col-span-6 lg:py-12 md:mb-8 xl:place-self-center lg:mb-0 lg:w-1/2"},pt={class:"pt-[8rem] 2xl:pt-[10rem] px-1"},ft=e("h1",{class:"text-3xl text-center text-white font-bega-bold lg:text-5xl 2xl:text-6xl lg:text-left"},[_(" Votre satisfaction dans nos services Freelance "),e("br")],-1),vt={id:"features",class:"bg-findDark-100 dark:bg-findDark-800"},bt={"data-aos":"",class:"z-10 px-8 py-8 overflow-hidden lg:max-w-6xl 2xl:max-w-7xl 2xl:px-2 lg:mx-auto md:px-6"},_t={class:"flex flex-col-reverse lg:flex-row"},wt={"data-aos":"fade-up","data-aos-duration":"500",class:"w-full lg:w-5/12"},kt=e("h1",{class:"text-slate-800 mb-4 xl:mb-6 dark:text-white text-2xl font-bega-semibold leading-snug lg:text-[40px] xl:text-5xl"},[_(" Atteignez vos objectifs plus rapidement avec "),e("span",{class:"text-amber-600 font-bega-semibold"},"FIND")],-1),yt={class:"grid grid-cols-1 gap-2 mx-auto md:mx-0 md:grid-cols-2"},Dt=A('<div class="mt-4 mb-2 text-center"><h1 class="text-xl text-findDark-500 font-bega-light">Nos partenaires</h1></div><div class="grid grid-cols-2 gap-4 mx-4 mt-6 md:mx-0 px-auto md:gap-2 md:grid-cols-3"><img src="/images/brand/makutano.png" alt="makutano" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 findDarkscale hover:findDarkscale-0 bg-findDark-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"><img src="/images/brand/silikin.png" alt="silikin" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 findDarkscale hover:findDarkscale-0 bg-findDark-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"></div>',2),$t=A('<div class="px-4 lg:w-1/12"></div><div data-aos="fade-left" data-aos-duration="500" class="hidden w-full px-4 lg:block md:w-6/12"><div class="lg:ml-auto lg:text-right"><div class="relative z-10 inline-block pt-11 lg:pt-0"><img src="/canva/fon2.jpg" alt="hero div bg-img img" class="rounded-lg lg:ml-auto"></div></div></div>',2),zt={id:"monde2",class:"xl:min-h-full lg:min-h-screen dark:bg-findDark-900"},Ct={class:"p-4"},Mt={class:"px-6 m-auto text-findDark-600 xl:container md:px-12 xl:px-16"},St={class:"flex-row-reverse justify-center p-4 space-y-6 bg-findDark-100 rounded-lg dark:bg-findDark-800 lg:p-16 md:flex md:gap-6 md:space-y-0 lg:items-center"},jt=e("div",{"data-aos":"flip-left","data-aos-duration":"500",class:"md:5/12 lg:w-1/2"},[e("img",{src:"/images/services/presentation3.png",alt:"image",class:"rounded-lg dark:bg-findDark-800 floating bg-skin-fill",loading:"lazy",width:"",height:""})],-1),Bt={"data-aos":"fade-right","data-aos-duration":"300",class:"md:7/12 lg:w-1/2"},At=e("div",{class:"px-4"},[e("h2",{class:"text-xl text-findDark-900 font-bega-semibold md:text-4xl dark:text-white"}," Trouvez dès aujourd'hui la personne idéale pour votre projet ! ")],-1),Lt={class:"space-y-4 divide-y divide-findDark-100 font-bega-light dark:divide-findDark-800"},Ft={class:"flex gap-4 mt-4 md:items-start"},Ht={class:"flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"},Vt=e("div",{class:"w-5/6"},[e("h4",{class:"text-lg text-findDark-700 font-bega-medium dark:text-indigo-300"},"Des services de haute qualité pour un prix équitable"),e("p",{class:"text-findDark-500 dark:text-findDark-50"},"Mettez la main sur d'excellents services a bon prix . Une taxation en fonction de la demande de service")],-1),qt={class:"flex gap-4 pt-2 md:items-start"},Pt={class:"flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"},Tt=e("div",{class:"w-5/6"},[e("h4",{class:"text-lg text-findDark-700 font-bega-medium dark:text-teal-300"},"Des services efficacement fait"),e("p",{class:"text-findDark-500 dark:text-findDark-50"},"Decouvrez les freelancers qui convient afin de travailler avec vous")],-1),Nt=A('<div class="flex gap-4 mt-4 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-findDark-700 font-bega-medium dark:text-indigo-300">Des Paiement protégés</h4><p class="text-findDark-500 dark:text-findDark-50">Assurez-vous de connaître le coût total dès le départ. Votre rémunération ne sera versée que lorsque vous aurez confirmé que le travail est satisfaisant.</p></div></div><div class="flex gap-4 pt-2 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-findDark-700 font-bega-medium dark:text-teal-300">Une Assistance 24h/24 et 7j/7</h4><p class="text-findDark-500 dark:text-findDark-50">Des Questions ? notre equipe d&#39;assistance est disponible 24h/24 pour vous aider à tout moment et en tout lieu</p></div></div>',2),Et={id:"Services",class:"bg-findDark-100 lg:min-h-screen dark:bg-findDark-800"},Ut={class:"max-w-6xl px-8 py-6 mx-auto md:px-6"},It=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Categories"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-findDark-200 sm:text-xl"},"Découvrez les services")],-1),Zt={class:"grid grid-cols-2 gap-4 font-bega-light md:gap-6 md:grid-cols-4 xl:gap-8"},Gt=["src","alt"],Rt=["alt"],Ot={class:"mt-3 mb-1 md:text-[20px] text-[16px] font-bega-medium text-slate-600 duration-200 group-hover:text-white"},Yt={key:0,class:"bg-findDark-50 lg:min-h-screen dark:bg-findDark-900"},Jt={class:"max-w-6xl px-8 py-6 mx-auto md:px-6"},Kt=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Mission"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-findDark-200 sm:text-xl"},"Découvrez quelques missions")],-1),Qt={class:"py-4 mx-2"},Wt={class:"flex items-end justify-end mb-2"},Xt={class:"flex gap-4"},es=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),ts=[es],ss=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),as=[ss],ls={class:"p-2 mb-4 rounded-md shadow-md h-[25rem] lg:flex-col"},os=e("img",{class:"object-cover object-center w-full h-48 bg-center bg-cover shrink-0",src:"/images/illustrations/missionF.svg",alt:"image"},null,-1),is={class:"flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5"},rs={class:"flex items-center justify-between"},ds={class:"text-xs+ font-medium text-info",href:"#"},ns=e("div",{class:"-mr-1.5 flex space-x-1"},[e("button",{class:"hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4.5 w-4.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})])]),e("div",{class:"p-2"})],-1),cs={href:"#",class:"max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100"},us={class:"mt-1 line-clamp-3"},ms={key:0,class:"max-w-xs truncate font-bega-light"},hs={key:1,class:"max-w-xs break-words font-bega-light"},xs={key:2},gs={class:"text-blue-600"},ps={class:"text-blue-600"},fs={class:"grow"},vs={class:"flex items-center mt-2 text-xs"},bs={href:"#",class:"flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"},_s={class:"w-10 h-10 mb-2"},ws={class:"line-clamp-1"},ks=e("div",{class:"self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"},null,-1),ys={class:"shrink-0 text-slate-400 dark:text-navy-300"},Ds={class:"flex justify-between gap-4 mt-1"},$s={class:"flex items-center"},zs={class:"text-lg font-bega-semibold text-amber-600"},Cs={key:0,class:"flex gap-4 mt-4"},Ms={href:"/freelance-gestion/missions"},Ss={key:1,class:"flex gap-4 mt-4"},js={key:2,class:"px-4"},Bs={id:"getStarted",class:"bg-findDark-900 lg:min-h-screen"},As={class:"py-16"},Ls={class:"container px-6 m-auto space-y-8 text-findDark-500 md:px-12 lg:px-20"},Fs={class:"justify-center gap-6 p-3 mx-auto text-center rounded-lg md:flex md:text-left lg:items-center lg:gap-16"},Hs={"data-aos":"fade-up","data-aos-duration":"500",class:"mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12"},Vs=e("h1",{class:"text-3xl text-white font-bega-semibold md:text-4xl dark:text-white"},"Vous êtes un freelance à la recherche de nouvelles opportunités ? ",-1),qs=e("p",{class:"text-base font-bega-light text-findDark-50 dark:text-findDark-300"}," FIND permet aux freelances de proposer leurs compétences aux entreprises et autres personnes intéressées par les offres disponibles sur le site. En outre, la plateforme met en œuvre des tactiques de marketing pour augmenter le nombre d'achats de services. ",-1),Ps={class:"flex flex-wrap gap-6"},Ts=e("span",{class:"relative text-base font-bega-medium text-amber-600"},"Rejoignez Nous",-1),Ns=e("div",{"data-aos":"fade-up","data-aos-duration":"800",class:"grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12"},[e("div",{class:"col-span-5 row-span-4"},[e("img",{src:"/images/services/work2.png",class:"object-cover object-top w-full h-full mb-3 md:mb-0 rounded-xl",width:"640",height:"427",alt:"work",loading:"lazy"})])],-1),Es=e("div",{id:"presentation",class:"bg-findDark-100 dark:bg-findDark-950 lg:min-h-screen"},[e("div",{class:"max-w-6xl px-8 py-6 mx-auto md:px-4"},[e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Decouverte"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 sm:text-3xl"},"Find ")]),e("div",{class:"flex flex-col"},[e("div",{"data-aos":"fade-in","data-aos-duration":"500",class:"grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-8"},[e("div",{class:"flex flex-col items-center w-full px-8 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-findDark-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"people-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 dark:text-white duration-200 group-hover:text-white"}," +200 Freelance")]),e("div",{class:"flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl dark:bg-findDark-800 border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"bag-check-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium dark:text-white text-slate-600 duration-200 group-hover:text-white"}," 500 Marchés ")]),e("div",{class:"flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-findDark-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"albums-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 duration-200 group-hover:text-white dark:text-white"}," +10 Categories ")])]),e("div",{class:"p-2 bg-white border border-findDark-100 dark:border-findDark-700 rounded-3xl dark:bg-findDark-800 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12"},[e("div",{class:"flex flex-col px-2 py-4 md:py-6"},[e("div",{class:"space-y-6 py-auto justify md:col-span-2 sm:p-8"},[e("div",{class:"px-6"},[e("h1",{class:"mt-4 text-xl text-center text-findDark-800 font-bega-medium dark:text-white"},[_("Comment s'inscrire comme "),e("span",{class:"text-amber-800 dark:text-white"},"freelance ?")])]),e("p",{class:"mt-2 text-lg leading-none text-center text-findDark-700 text-md dark:text-white"},[e("span",{class:"font-serif"},'"'),_(" Apprenez à utiliser la Plateforme Find-freelance à l'aide de ces tutoriels. "),e("span",{class:"font-serif"},'"')])]),e("div",{class:"order-2 w-full h-48 mx-2 my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl"},[e("iframe",{class:"w-full h-full aspect-video",src:"https://www.youtube.com/embed/rw_3Yv-rhZM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])])])])])],-1),Us={id:"faqs",class:"bg-white lg:min-h-screen dark:bg-findDark-800 dark:text-white"},Is={class:"px-8 py-6 mx-auto max-w-7xl md:px-6"},Zs=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Faqs"),e("h1",{class:"text-2xl font-bega-semibold dark:text-findDark-50 text-slate-700 sm:text-3xl"},"Faqs ")],-1),Gs={class:"grid sm:grid-cols-2"},Rs=e("div",{"data-aos":"fade-right","data-aos-duration":"1000",class:"w-full px-4"},[e("img",{src:"/images//services/faq.png",alt:"hero div img",class:"rounded-full lg:ml-auto"})],-1),Os={class:"w-full lg:w-11/12"},Ys={class:"px-1 py-2 text-findDark-800"},Js={class:"mt-6 text-lg leading-loose"},Ks=["onClick"],Qs={class:"text-left"},Ws={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},Xs=e("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"},null,-1),ea=[Xs],ta={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},sa=e("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"},null,-1),aa=[sa],la={class:"m-2 text-sm text-justify text-findDark-800 dark:text-white"},ha=Object.assign({layout:ae},{__name:"Home",props:{categories:Array},setup(z){const d=D([]),g=i=>{d.value.includes(i)?d.value=d.value.filter(v=>v!==i):(d.value=[],d.value.push(i))},u=D(null),n=i=>{u.value&&(i==="prev"?u.value.slidePrev():i==="next"&&u.value.slideNext())},y=i=>{u.value=i},f=Q(),x=W(),w=F(()=>x.faqsGetter),c=X(),S=F(()=>c.missionGeters);ee(()=>{f.updateIsHome(),c.fetchLastMission(),x.fetchLastFaq()});const p=(i,v)=>i.length>v?i.slice(0,v)+"...":i,h=D(!1);return(i,v)=>{const C=V("Link"),O=V("Photo"),H=V("Button");return t(),s(k,null,[o(a(te),{title:"Accueil"},{default:r(()=>[rt]),_:1}),e("div",dt,[e("div",nt,[e("div",ct,[o(a(E),{modules:[a(q),a(le),a(P),a(T),a(oe),a(N)],effect:"fade",loop:!0,spaceBetween:30,"slides-per-view":1,autoplay:{delay:3e3,disableOnInteraction:!1}},{default:r(()=>[o(a(B),null,{default:r(()=>[ut]),_:1}),o(a(B),null,{default:r(()=>[mt]),_:1}),o(a(B),null,{default:r(()=>[ht]),_:1})]),_:1},8,["modules"])])]),xt,e("div",gt,[e("div",pt,[ft,o(Ze)])])]),e("div",vt,[e("div",bt,[e("div",_t,[e("div",wt,[kt,e("div",yt,[o(C,{href:i.route("find_freelance"),class:"w-10/12 rounded-md mx-auto 2xl:py-3 2xl:text-lg text-center bg-amber-600 px-8 py-2.5 font-bega-medium text-white shadow-md shadow-amber-500/20 hover:bg-amber-700 duration-200 sm:w-auto"},{default:r(()=>[_("Trouver un freelance")]),_:1},8,["href"]),o(C,{href:i.route("register.begin"),class:"mt-4 md:mt-0 mx-auto text-center box-border w-10/12 2xl:py-3 2xl:text-lg rounded-md border border-amber-500/20 px-8 py-2.5 font-bega-medium text-amber-600 shadow-md shadow-amber-500/10 hover:bg-findDark-100 duration-200"},{default:r(()=>[_("Dévenir freelance")]),_:1},8,["href"])]),Dt]),$t])])]),o(it),e("div",zt,[e("div",Ct,[e("div",Mt,[e("div",St,[jt,e("div",Bt,[At,e("div",Lt,[e("div",Ft,[e("div",Ht,[o(a(Ce),{class:"text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"})]),Vt]),e("div",qt,[e("div",Pt,[o(a(Me),{class:"text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"})]),Tt]),Nt])])])])])]),e("div",Et,[e("div",Ut,[It,e("div",Zt,[(t(!0),s(k,null,$(z.categories,l=>(t(),s("div",null,[o(C,{href:i.route("categoryName",l.slug),class:"flex flex-col items-center px-2 py-4 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},{default:r(()=>[l.media.url!=""?(t(),s("img",{key:0,src:l.media.url,class:"w-20 h-20 rounded-md",alt:l.media.url},null,8,Gt)):(t(),s("img",{key:1,src:"/images/logo/ff3.png",class:"w-20 h-20 rounded-md",alt:l.media.url},null,8,Rt)),e("h4",Ot,m(l.name),1)]),_:2},1032,["href"])]))),256))])])]),S.value.length>0?(t(),s("div",Yt,[e("div",Jt,[Kt,e("div",Qt,[e("div",Wt,[e("div",Xt,[e("button",{onClick:v[0]||(v[0]=l=>n("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},ts),e("button",{onClick:v[1]||(v[1]=l=>n("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},as)])]),o(a(E),{class:"flex py-8 mb-4",modules:[a(q),a(P),a(T),a(R),a(N)],spaceBetween:30,"space-between":25,breakpoints:{300:{slidesPerView:1},900:{slidesPerView:3}},onSwiper:y},{default:r(()=>[(t(!0),s(k,null,$(S.value,l=>(t(),Z(a(B),{class:"p-2"},{default:r(()=>[e("div",ls,[os,e("div",is,[e("div",rs,[e("a",ds,m(l.category.name),1),ns]),e("div",null,[e("p",cs,m(l.title),1)]),e("p",us,[h.value?(t(),s("div",hs,m(l.description),1)):(t(),s("div",ms,m(p(l.description,70)),1)),l.description.length>70?(t(),s("div",xs,[e("button",{onClick:v[2]||(v[2]=U=>h.value=!h.value)},[M(e("span",gs,"Lire moins",512),[[j,h.value]]),M(e("span",ps,"Lire la suite",512),[[j,!h.value]])])])):b("",!0)]),e("div",fs,[e("div",vs,[e("a",bs,[e("div",_s,[o(O,{user:l.user,taille:"10"},null,8,["user"])]),e("span",ws,m(l.user.name),1)]),ks,e("span",ys,m(l.created_at),1)])]),e("div",Ds,[e("div",$s,[e("h1",zs,m(l.budget)+" $",1)]),l.status=="pending"&&i.$page.props.auth.freelance?(t(),s("div",Cs,[e("a",Ms,[o(H,{size:"small",outlined:"",severity:"info",label:"Postuler"})])])):b("",!0),l.status=="pending"&&!i.$page.props.auth.freelance&&!i.$page.props.auth.user==null?(t(),s("div",Ss,[o(C,{href:i.route("register.begin")},{default:r(()=>[o(H,{size:"small",outlined:"",severity:"info",label:"Etre prestaire pour postuler"})]),_:1},8,["href"])])):b("",!0),i.$page.props.auth.user==null?(t(),s("div",js,[o(C,{href:i.route("register")},{default:r(()=>[o(H,{size:"small",outlined:"",severity:"info",label:"postuler"})]),_:1},8,["href"])])):b("",!0)])])])]),_:2},1024))),256))]),_:1},8,["modules"])])])])):b("",!0),o(ze),e("div",Bs,[e("div",As,[e("div",Ls,[e("div",Fs,[e("div",Hs,[Vs,qs,e("div",Ps,[o(C,{href:i.route("register.begin"),class:"relative flex items-center justify-center w-[6/12] h-12 px-8 mx-auto duration-300 bg-white rounded-full before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"},{default:r(()=>[Ts]),_:1},8,["href"])])]),Ns])])])]),Es,e("div",Us,[e("div",Is,[Zs,e("div",Gs,[Rs,e("div",Os,[e("div",Ys,[e("div",Js,[e("div",null,[(t(!0),s(k,null,$(w.value,(l,U)=>(t(),s("div",{key:l.id},[e("button",{class:I(["flex items-center justify-between w-full py-3 mt-4 text-findDark-800 border-b font-bega-semibold dark:text-white",U!==w.value.length-1&&"border-b border-findDark-400"]),onClick:oa=>g(l.id)},[e("div",Qs,m(l.questions),1),M((t(),s("svg",Ws,ea,512)),[[j,!d.value.includes(l.id)]]),M((t(),s("svg",ta,aa,512)),[[j,d.value.includes(l.id)]])],10,Ks),o(a(se),{when:d.value.includes(l.id),class:"m-2"},{default:r(()=>[e("p",la,m(l.reponses),1)]),_:2},1032,["when"])]))),128))])])])])])])])],64)}}});export{ha as default};

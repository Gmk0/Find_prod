import{o as a,c as o,b as e,g as f,v as Y,H as m,U as K,F as j,l as A,f as l,w as d,i as u,t as c,u as t,A as S,h as z,V as Q,a5 as X,aT as ee,E as G,aU as te,B as se,s as F,P as p,n as B,x as M,e as ae,a9 as le}from"./app-62185122.js";import{_ as oe}from"./WebLayout-62b8cbc8.js";import{S as k,N as V,P,a as N,A as H,b as L}from"./effect-init-14af509b.js";import{A as ie,E as re}from"./effect-fade-400221e5.js";import{E as Z}from"./effect-cube-25d2f261.js";import"./userInfo-ba0863b0.js";import"./index-2630c011.js";function de($,i){return a(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clip-rule":"evenodd"})])}function ne($,i){return a(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z","clip-rule":"evenodd"}),e("path",{d:"M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"})])}const ce={class:"flex flex-col w-full mt-6 lg:mt-6 2xl:mt-10"},ue={class:"relative"},me=e("button",{type:"submit",class:"px-6 py-3 ml-auto text-center transition rounded-lg bg-skin-fill"},[e("span",{class:"hidden font-semibold text-white md:block"}," Recherche "),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 mx-auto text-white md:hidden",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})])],-1),ge={key:0,class:"absolute w-full mt-1 overflow-y-auto bg-white border divide-y rounded-lg shadow z-[60] custom-scrollbar max-h-72"},xe={key:0},he={key:1,class:"block p-2 text-gray-800",href:"#"},pe={key:2,class:"block p-2 text-gray-800",href:"#"},ve={class:"p-2 mt-2"},be=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),fe=[be],_e={class:"flex justify-center gap-4 mt-4"},we={class:"flex items-center space-x-2"},ye={class:"flex items-center space-x-2"},ke={class:"flex items-center space-x-2"},ze=e("p",{class:"mt-2 text-center text-gray-100 2xl:text-lg"},"Catégories les plus populaires",-1),Ce={__name:"HomeSearch",setup($){const i=f(""),b=f([]),w=f(!1),g=f(!1),x=()=>{b.value.length>0?g.value=!0:g.value=!1},q=async()=>{try{w.value=!0,g.value=!0,b.value=[];const h=await Q.post(route("searchElement"),{search:i.value});b.value=h.data.results,w.value=!1,console.log(h.data)}catch{w.value=!1,b.value=[]}};return(h,_)=>(a(),o("div",null,[e("div",null,[e("div",ce,[e("div",ue,[e("form",{onSubmit:Y(q,["prevent"]),class:"relative flex p-1 mb-4 bg-white shadow-2xl lg:dark:bg-white rounded-xl 2xl:p-4 md:p-2"},[m(e("input",{required:"","onUpdate:modelValue":_[0]||(_[0]=v=>i.value=v),onFocus:x,class:"w-full p-4 mr-2 text-gray-600 border-white 2xl:p-6 focus:border-white rounded-xl",type:"text"},null,544),[[K,i.value]]),me],32),g.value?(a(),o("div",ge,[b.value.length>0?(a(),o("div",xe,[(a(!0),o(j,null,A(b.value,v=>(a(),o("div",{key:v.id},[l(t(S),{href:h.route("oneService",v.service_numero),class:"block p-2 text-sm text-gray-800 cursor-pointer hover:bg-amber-700 hover:text-white"},{default:d(()=>[u(c(v.title)+" - "+c(v.category.name),1)]),_:2},1032,["href"])]))),128))])):w.value?(a(),o("a",he,"Chargement en cours...")):(a(),o("a",pe,"Pas de résultat")),e("div",ve,[e("button",{onClick:_[1]||(_[1]=v=>g.value=!g.value),class:"btn btn-sm btn-circle btn-outline"},fe)])])):z("",!0)]),e("div",_e,[e("div",we,[l(t(S),{href:"/categories'",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:d(()=>[u(" Photographie")]),_:1})]),e("div",ye,[l(t(S),{href:"/categories",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:d(()=>[u(" Design ")]),_:1})]),e("div",ke,[l(t(S),{href:"/categories",class:"flex items-center h-8 px-2 text-gray-100 border border-gray-100 rounded-full 2xl:h-12 2xl:text-lg dark:border-gray-100"},{default:d(()=>[u(" Technologie")]),_:1})])]),ze])])]))}};const je={class:"relative min-h-screen 2xl:min-h-full slideshow slideshow-wrapper pb-section sliderFull"},Me={class:"hidden lg:block"},$e={class:"home-slideshow"},Se=e("div",{class:"slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload bg-[#FFAA76]","data-src":"/images/optimize/sans.png",src:"/images/optimize/sans.png",alt:"women sans",title:"women sans"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])])],-1),Be=e("div",{class:"relative slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload bg-img","data-src":"/canva/graceBrand.svg",src:"/canva/graceBrand.svg",alt:"graceP",title:"graceP"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])]),e("div",{class:"absolute flex flex-col hidden floating gap-1 right-[30%] top-1/2"},[e("h1",{class:"text-lg text-white font-bega-medium"},"Grace K."),e("p",{class:"text-base text-white font-bega-medium"},"Marketeuse Digital")])],-1),Ae=e("div",{class:"slide slideshow--medium"},[e("div",{class:"blur-up lazyload bg-size"},[e("img",{class:"blur-up lazyload","data-src":"/images/optimize/homme.png",src:"/images/optimize/homme.png",alt:"New Season Styles",title:"New Season Styles"}),e("div",{class:"slideshow__text-wrap slideshow__overlay classic middle"},[e("div",{class:"slideshow__text-content classic middle"},[e("div",{class:"container"},[e("div",{class:"wrap-caption right"},[e("h2",{class:"h1 mega-title slideshow__title"}),e("span",{class:"mega-subtitle slideshow__subtitle"}),e("span",{class:""})])])])])])],-1),qe=M('<div class="absolute top-0 left-0 w-full h-screen bg-skin-fill dark:bg-gray-900 lg:hidden"><div class="hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] absolute bottom-[-100px] md:w-[800px] md:h-[750px] lg:top-[120px] lg:right-[-100px] xl:right-0 w-[500px] h-[500px] 2xl:w-[1026px] 2xl:h-[1026px]"><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:R65m:-gradient-1)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-1" x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg><svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true" class="absolute inset-0 w-full h-full animate-spin-slow"><path d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z" stroke="#D4D4D4" stroke-opacity="0.7"></path><path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:R65m:-gradient-2)" stroke-linecap="round"></path><defs><linearGradient id=":R65m:-gradient-2" x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse"><stop stop-color="#f8fafc"></stop><stop offset="1" stop-color="#f8fafc" stop-opacity="0"></stop></linearGradient></defs></svg></div><div class="relative w-full lg:-mt-10" id="girl"></div></div>',1),De={"data-aos":"fade-right","data-aos-duration":"800",class:"absolute top-0 left-0 z-50 px-6 py-8 xl:py-10 lg:mt-8 2xl:mt-16 lg:col-span-6 lg:py-12 md:mb-8 xl:place-self-center lg:mb-0 lg:w-1/2"},Fe={class:"pt-[8rem] 2xl:pt-[10rem] px-1"},Ve=e("h1",{class:"text-3xl text-center text-white font-bega-bold lg:text-5xl 2xl:text-6xl lg:text-left"},[u(" Votre satisfaction dans nos services Freelance "),e("br")],-1),Pe={id:"features",class:"bg-gray-100 dark:bg-gray-800"},Ne={"data-aos":"",class:"z-10 px-8 py-8 overflow-hidden lg:max-w-6xl 2xl:max-w-7xl 2xl:px-2 lg:mx-auto md:px-6"},He={class:"flex flex-col-reverse lg:flex-row"},Le={"data-aos":"fade-up","data-aos-duration":"500",class:"w-full lg:w-5/12"},Te=e("h1",{class:"text-slate-800 mb-4 xl:mb-6 dark:text-white text-2xl font-bega-semibold leading-snug lg:text-[40px] xl:text-5xl"},[u(" Atteignez vos objectifs plus rapidement avec "),e("span",{class:"text-amber-600 font-bega-semibold"},"FIND")],-1),Ee={class:"grid grid-cols-1 gap-2 mx-auto md:mx-0 md:grid-cols-2"},Ie=M('<div class="mt-4 mb-2 text-center"><h1 class="text-xl text-gray-500 font-bega-light">Nos partenaires</h1></div><div class="grid grid-cols-2 gap-4 mx-4 mt-6 md:mx-0 px-auto md:gap-2 md:grid-cols-3"><img src="/images/brand/makutano.png" alt="makutano" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 grayscale hover:grayscale-0 bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"><img src="/images/brand/silikin.png" alt="silikin" class="object-contain w-32 h-24 px-5 py-3 duration-200 border rounded-lg shadow-md cursor-pointer xl:px-auto xl:py-auto xl:w-40 grayscale hover:grayscale-0 bg-gray-50 border-blue-300/20 shadow-blue-500/5 hover:scale-95"></div>',2),Je=M('<div class="px-4 lg:w-1/12"></div><div data-aos="fade-left" data-aos-duration="500" class="hidden w-full px-4 lg:block md:w-6/12"><div class="lg:ml-auto lg:text-right"><div class="relative z-10 inline-block pt-11 lg:pt-0"><img src="/canva/fon2.jpg" alt="hero div bg-img img" class="rounded-lg lg:ml-auto"></div></div></div>',2),Ue={id:"talkAbout",class:"bg-white dark:bg-gray-900 lg:min-h-screen xl:min-h-full"},Ge={class:"container max-w-6xl p-4 m-4 mx-auto 2xl:max-w-7xl 2xl:p-2 md:p-6"},Ze=e("div",{class:"mb-10 text-center xl:mb-14"},[e("span",{class:"font-bega-medium text-amber-600"},"Presentation"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200"},"Ils en parlent mieux que nous")],-1),Re={class:"my-10"},Oe=e("div",{class:"!bg-transparent px-2 md:px-0"},[e("div",{class:"px-2 bg-white border border-gray-300 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"},[e("div",{class:"grid md:grid-cols-5"},[e("div",{class:"w-full m-2 h-50 xl:h-72 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"},[e("iframe",{class:"w-full h-full rounded-sm aspect-video hover:aspect-square",src:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})]),e("div",{class:"p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"},[e("div",{class:"w-20 mx-auto xl:w-28"},[e("img",{src:"images/brand/influnet.jpg",alt:"company logo",loading:"lazy"})]),e("p",{class:"dark:text-gray-200 font-bega-light xl:text-lg"},[e("span",{class:""}),u(" Find est une plateforme incontournable pour tous les demandeurs de services. J'ai été impressionné par la qualité des freelances proposés. "),e("span",{class:"font-serif"},'"')]),e("h6",{class:"text-lg leading-none font-bega-semibold dark:text-gray-200"},"Georges Mk")])])])],-1),We=e("div",{class:"!bg-transparent px-2 md:px-0"},[e("div",{class:"px-2 bg-white border border-gray-100 dark:border-gray-300 rounded-3xl dark:bg-gray-900 dark:shadow-none md:mx-auto lg:w-11/12 xl:w-8/12"},[e("div",{class:"grid md:grid-cols-5"},[e("div",{class:"w-full m-2 xl:h-72 h-50 aspect-w-8 aspect-h-9 md:col-span-2 rounded-2xl"},[e("iframe",{class:"w-full h-full rounded-sm aspect-video hover:aspect-square",src:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})]),e("div",{class:"p-6 mx-auto space-y-6 text-center md:col-span-3 sm:p-8"},[e("div",{class:"w-20 mx-auto xl:w-28"},[e("img",{src:"images/brand/influnet.jpg",alt:"company logo",loading:"lazy"})]),e("p",{class:"dark:text-gray-200 font-bega-light xl:text-lg"},[e("span",{class:"font-serif"}),u(" Find est un outil essentiel pour tous ceux qui cherchent à trouver des freelances qualifiés. La plateforme est vraiment bien conçue et facile à utiliser "),e("span",{class:"font-serif"},'"')]),e("h6",{class:"text-lg leading-none font-bega-semibold dark:text-gray-200"},"Ulrich Lukemba")])])])],-1),Ye={id:"monde2",class:"xl:min-h-full lg:min-h-screen dark:bg-gray-900"},Ke={class:"p-4"},Qe={class:"px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16"},Xe={class:"flex-row-reverse justify-center p-4 space-y-6 bg-gray-100 rounded-lg dark:bg-gray-800 lg:p-16 md:flex md:gap-6 md:space-y-0 lg:items-center"},et=e("div",{"data-aos":"flip-left","data-aos-duration":"500",class:"md:5/12 lg:w-1/2"},[e("img",{src:"/images/services/presentation3.png",alt:"image",class:"rounded-lg dark:bg-gray-800 floating bg-skin-fill",loading:"lazy",width:"",height:""})],-1),tt={"data-aos":"fade-right","data-aos-duration":"300",class:"md:7/12 lg:w-1/2"},st=e("div",{class:"px-4"},[e("h2",{class:"text-xl text-gray-900 font-bega-semibold md:text-4xl dark:text-white"}," Trouvez dès aujourd'hui la personne idéale pour votre projet ! ")],-1),at={class:"space-y-4 divide-y divide-gray-100 font-bega-light dark:divide-gray-800"},lt={class:"flex gap-4 mt-4 md:items-start"},ot={class:"flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"},it=e("div",{class:"w-5/6"},[e("h4",{class:"text-lg text-gray-700 font-bega-medium dark:text-indigo-300"},"Des services de haute qualité pour un prix équitable"),e("p",{class:"text-gray-500 dark:text-gray-50"},"Mettez la main sur d'excellents services a bon prix . Une taxation en fonction de la demande de service")],-1),rt={class:"flex gap-4 pt-2 md:items-start"},dt={class:"flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"},nt=e("div",{class:"w-5/6"},[e("h4",{class:"text-lg text-gray-700 font-bega-medium dark:text-teal-300"},"Des services efficacement fait"),e("p",{class:"text-gray-500 dark:text-gray-50"},"Decouvrez les freelancers qui convient afin de travailler avec vous")],-1),ct=M('<div class="flex gap-4 mt-4 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-gray-700 font-bega-medium dark:text-indigo-300">Des Paiement protégés</h4><p class="text-gray-500 dark:text-gray-50">Assurez-vous de connaître le coût total dès le départ. Votre rémunération ne sera versée que lorsque vous aurez confirmé que le travail est satisfaisant.</p></div></div><div class="flex gap-4 pt-2 md:items-start"><div class="flex w-12 h-12 gap-4 rounded-full dark:bg-teal-900/20"><svg xmlns="http://www.w3.org/2000/svg" class="text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></div><div class="w-5/6"><h4 class="text-lg text-gray-700 font-bega-medium dark:text-teal-300">Une Assistance 24h/24 et 7j/7</h4><p class="text-gray-500 dark:text-gray-50">Des Questions ? notre equipe d&#39;assistance est disponible 24h/24 pour vous aider à tout moment et en tout lieu</p></div></div>',2),ut={id:"Services",class:"bg-gray-100 lg:min-h-screen dark:bg-gray-800"},mt={class:"max-w-6xl px-8 py-6 mx-auto md:px-6"},gt=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Categories"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl"},"Découvrez les services")],-1),xt={class:"grid grid-cols-2 gap-4 font-bega-light md:gap-6 md:grid-cols-4 xl:gap-8"},ht=["src","alt"],pt=["alt"],vt={class:"mt-3 mb-1 md:text-[20px] text-[16px] font-bega-medium text-slate-600 duration-200 group-hover:text-white"},bt={key:0,class:"bg-gray-50 lg:min-h-screen dark:bg-gray-900"},ft={class:"max-w-6xl px-8 py-6 mx-auto md:px-6"},_t=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Mission"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl"},"Découvrez quelques missions")],-1),wt={class:"py-4 mx-2"},yt={class:"flex items-end justify-end mb-2"},kt={class:"flex gap-4"},zt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),Ct=[zt],jt=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),Mt=[jt],$t={class:"p-2 mb-4 rounded-md shadow-md h-[25rem] lg:flex-col"},St=e("img",{class:"object-cover object-center w-full h-48 bg-center bg-cover shrink-0",src:"/images/illustrations/missionF.svg",alt:"image"},null,-1),Bt={class:"flex flex-col w-full px-4 py-3 bg-white dark:bg-findDark-800 font-bega-light grow sm:px-5"},At={class:"flex items-center justify-between"},qt={class:"text-xs+ font-medium text-info",href:"#"},Dt=e("div",{class:"-mr-1.5 flex space-x-1"},[e("button",{class:"hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4.5 w-4.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})])]),e("div",{class:"p-2"})],-1),Ft={href:"#",class:"max-w-xs text-base break-words truncate font-bega-light text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100"},Vt={class:"mt-1 line-clamp-3"},Pt={key:0,class:"max-w-xs truncate font-bega-light"},Nt={key:1,class:"max-w-xs break-words font-bega-light"},Ht={key:2},Lt={class:"text-blue-600"},Tt={class:"text-blue-600"},Et={class:"grow"},It={class:"flex items-center mt-2 text-xs"},Jt={href:"#",class:"flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"},Ut={class:"w-10 h-10 mb-2"},Gt={class:"line-clamp-1"},Zt=e("div",{class:"self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"},null,-1),Rt={class:"shrink-0 text-slate-400 dark:text-navy-300"},Ot={class:"flex justify-between gap-4 mt-1"},Wt={class:"flex items-center"},Yt={class:"text-lg font-bega-semibold text-amber-600"},Kt={key:0,class:"flex gap-4 mt-4"},Qt={href:"/freelance-gestion/missions"},Xt={key:1,class:"flex gap-4 mt-4"},es={key:2,class:"px-4"},ts={id:"confiance",class:"bg-white dark:bg-gray-800"},ss={class:"px-4 py-4 mx-auto sm:mx-2 md:px-auto"},as={class:"container text-gray-600 dark:text-gray-300"},ls=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Comentaire"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 dark:text-gray-200 sm:text-xl"},"Ils nous font confiance")],-1),os={class:"container flex flex-col mx-auto my-10 overflow-hidden shadow-sm md:my-24 md:flex-row"},is=M('<div class="absolute top-0 left-0 z-10 w-16 h-16 grid-indigo md:w-40 md:h-40 md:ml-20 md:mt-24"></div><div class="relative z-20 px-6 py-2 mb-0 text-2xl leading-tight tracking-tight text-indigo-100 font-bega-semibold md:text-5xl md:py-6 md:px-1 md:w-64 md:mx-auto"><span class="md:block">Ce que</span><span class="md-block">disent</span><span class="block">nos clients !</span></div>',2),rs={class:"bg-gray-100 md:w-1/2"},ds={class:"relative flex flex-col h-full"},ns=e("div",{class:"absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-12 h-12 text-indigo-200 fill-current md:w-16 md:h-16",viewBox:"0 0 24 24"},[e("path",{d:"M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"})])],-1),cs={class:"relative z-10 h-full"},us=e("p",{class:"px-6 py-6 text-xl italic text-gray-600 font-bega-light md:px-16 md:py-10 md:text-2xl","x-show.transition":"testimonialActive == 1"},` Votre plateforme m'a permis de trouver rapidement et facilement le freelance idéal pour mon projet. C'était vraiment simple à utiliser et j'ai apprécié la transparence dans le processus de sélection." `,-1),ms=[us],gs=e("p",{class:"px-6 py-6 text-xl italic text-gray-600 font-bega-light md:px-16 md:py-10 md:text-2xl","x-show.transition":"testimonialActive == 2"}," Je suis très satisfaite des résultats que j'ai obtenus grâce à votre plateforme. J'ai pu trouver un freelance expérimenté qui a su répondre parfaitement à mes besoins et à mes attentes. ",-1),xs=[gs],hs=e("p",{class:"px-6 py-6 text-xl italic text-gray-600 font-bega-light serif md:px-16 md:py-10 md:text-2xl","x-show.transition":"testimonialActive == 3"}," Je recommande vivement votre plateforme à tous ceux qui cherchent à trouver des freelances de qualité. J'ai été très satisfait des résultats obtenus et je n'hésiterai pas à utiliser à nouveau votre service à l'avenir. ",-1),ps=[hs],vs={class:"flex items-center justify-center my-4"},bs={class:"flex justify-center px-6 pt-2 pb-6 md:py-6"},fs={class:"text-center"},_s=e("h2",{class:"text-sm leading-tight text-gray-700 font-bega-semibold md:text-base"},"Jean Dongo",-1),ws=e("small",{class:"text-xs text-gray-500 truncate md:text-sm"},"CEO, ABC Inc.",-1),ys=[_s,ws],ks={class:"text-center"},zs=e("h2",{class:"text-sm leading-tight text-gray-700 font-bega-semibold md:text-base"},"William Muka ",-1),Cs=e("small",{class:"text-xs text-gray-500 truncate md:text-sm"},"CTO, Ack Corp.",-1),js=[zs,Cs],Ms={class:"text-center"},$s=e("h2",{class:"text-sm leading-tight text-gray-700 font-bega-semibold md:text-base"},"John Wata",-1),Ss=e("small",{class:"text-xs text-gray-500 truncate md:text-sm"},"Product Manager, Fortran Corp.",-1),Bs=[$s,Ss],As={id:"getStarted",class:"bg-gray-900 lg:min-h-screen"},qs={class:"py-16"},Ds={class:"container px-6 m-auto space-y-8 text-gray-500 md:px-12 lg:px-20"},Fs={class:"justify-center gap-6 p-3 mx-auto text-center rounded-lg md:flex md:text-left lg:items-center lg:gap-16"},Vs={"data-aos":"fade-up","data-aos-duration":"500",class:"mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12"},Ps=e("h1",{class:"text-3xl text-white font-bega-semibold md:text-4xl dark:text-white"},"Vous êtes un freelance à la recherche de nouvelles opportunités ? ",-1),Ns=e("p",{class:"text-base font-bega-light text-gray-50 dark:text-gray-300"}," FIND permet aux freelances de proposer leurs compétences aux entreprises et autres personnes intéressées par les offres disponibles sur le site. En outre, la plateforme met en œuvre des tactiques de marketing pour augmenter le nombre d'achats de services. ",-1),Hs={class:"flex flex-wrap gap-6"},Ls=e("span",{class:"relative text-base font-bega-medium text-amber-600"},"Rejoignez Nous",-1),Ts=e("div",{"data-aos":"fade-up","data-aos-duration":"800",class:"grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12"},[e("div",{class:"col-span-5 row-span-4"},[e("img",{src:"/images/services/work2.png",class:"object-cover object-top w-full h-full mb-3 md:mb-0 rounded-xl",width:"640",height:"427",alt:"work",loading:"lazy"})])],-1),Es=e("div",{id:"presentation",class:"bg-gray-100 dark:bg-gray-950 lg:min-h-screen"},[e("div",{class:"max-w-6xl px-8 py-6 mx-auto md:px-4"},[e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Decouverte"),e("h1",{class:"text-2xl font-bega-semibold text-slate-700 sm:text-3xl"},"Find ")]),e("div",{class:"flex flex-col"},[e("div",{"data-aos":"fade-in","data-aos-duration":"500",class:"grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 xl:gap-8"},[e("div",{class:"flex flex-col items-center w-full px-8 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-gray-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"people-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 dark:text-white duration-200 group-hover:text-white"}," +200 Freelance")]),e("div",{class:"flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl dark:bg-gray-800 border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"bag-check-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium dark:text-white text-slate-600 duration-200 group-hover:text-white"}," 500 Marchés ")]),e("div",{class:"flex flex-col items-center px-5 py-8 duration-200 bg-white border shadow-lg cursor-pointer dark:bg-gray-800 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},[e("i",{name:"albums-outline",class:"text-[55px] text-amber-600 duration-200 group-hover:text-white"}),e("h4",{class:"mt-3 mb-1 text-[20px] font-bega-medium text-slate-600 duration-200 group-hover:text-white dark:text-white"}," +10 Categories ")])]),e("div",{class:"p-2 bg-white border border-gray-100 dark:border-gray-700 rounded-3xl dark:bg-gray-800 dark:shadow-none md:mx-auto lg:w-10/12 xl:w-8/12"},[e("div",{class:"flex flex-col px-2 py-4 md:py-6"},[e("div",{class:"space-y-6 py-auto justify md:col-span-2 sm:p-8"},[e("div",{class:"px-6"},[e("h1",{class:"mt-4 text-xl text-center text-gray-800 font-bega-medium dark:text-white"},[u("Comment s'inscrire comme "),e("span",{class:"text-amber-800 dark:text-white"},"freelance ?")])]),e("p",{class:"mt-2 text-lg leading-none text-center text-gray-700 text-md dark:text-white"},[e("span",{class:"font-serif"},'"'),u(" Apprenez à utiliser la Plateforme Find-freelance à l'aide de ces tutoriels. "),e("span",{class:"font-serif"},'"')])]),e("div",{class:"order-2 w-full h-48 mx-2 my-4 aspect-w-16 aspect-h-9 md:col-span-3 rounded-2xl"},[e("iframe",{class:"w-full h-full aspect-video",src:"https://www.youtube.com/embed/rw_3Yv-rhZM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])])])])])],-1),Is={id:"faqs",class:"bg-white lg:min-h-screen dark:bg-gray-800 dark:text-white"},Js={class:"px-8 py-6 mx-auto max-w-7xl md:px-6"},Us=e("div",{class:"mb-10 text-center"},[e("span",{class:"font-bega-medium text-amber-600"},"Faqs"),e("h1",{class:"text-2xl font-bega-semibold dark:text-gray-50 text-slate-700 sm:text-3xl"},"Faqs ")],-1),Gs={class:"grid sm:grid-cols-2"},Zs=e("div",{"data-aos":"fade-right","data-aos-duration":"1000",class:"w-full px-4"},[e("img",{src:"/images//services/faq.png",alt:"hero div img",class:"rounded-full lg:ml-auto"})],-1),Rs={class:"w-full lg:w-11/12"},Os={class:"px-1 py-2 text-gray-800"},Ws={class:"mt-6 text-lg leading-loose"},Ys=["onClick"],Ks={class:"text-left"},Qs={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},Xs=e("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"},null,-1),ea=[Xs],ta={class:"fill-current",viewBox:"0 0 24 24",width:"24",height:"24"},sa=e("path",{class:"heroicon-ui",d:"M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"},null,-1),aa=[sa],la={class:"m-2 text-sm text-justify text-gray-800 dark:text-white"},ga=Object.assign({layout:oe},{__name:"Home",props:{categories:Array},setup($){const i=f(1),b=()=>{i.value=i.value>=3?1:i.value+1},w=()=>{i.value=i.value===1?3:i.value-1},g=r=>{i.value=r},x=f([]),q=r=>{x.value.includes(r)?x.value=x.value.filter(n=>n!==r):(x.value=[],x.value.push(r))},h=f(null),_=r=>{h.value&&(r==="prev"?h.value.slidePrev():r==="next"&&h.value.slideNext())},v=r=>{h.value=r},R=X(),T=ee(),E=G(()=>T.faqsGetter),I=te(),J=G(()=>I.missionGeters);se(()=>{R.updateIsHome(),I.fetchLastMission(),T.fetchLastFaq()});const O=(r,n)=>r.length>n?r.slice(0,n)+"...":r,C=f(!1);return(r,n)=>{const y=F("Link"),W=F("Photo"),D=F("Button");return a(),o(j,null,[e("div",je,[e("div",Me,[e("div",$e,[l(t(L),{modules:[t(V),t(ie),t(P),t(N),t(re),t(H)],effect:"fade",loop:!0,spaceBetween:30,"slides-per-view":1,autoplay:{delay:3e3,disableOnInteraction:!1}},{default:d(()=>[l(t(k),null,{default:d(()=>[Se]),_:1}),l(t(k),null,{default:d(()=>[Be]),_:1}),l(t(k),null,{default:d(()=>[Ae]),_:1})]),_:1},8,["modules"])])]),qe,e("div",De,[e("div",Fe,[Ve,l(Ce)])])]),e("div",Pe,[e("div",Ne,[e("div",He,[e("div",Le,[Te,e("div",Ee,[l(y,{href:r.route("find_freelance"),class:"w-10/12 rounded-md mx-auto 2xl:py-3 2xl:text-lg text-center bg-amber-600 px-8 py-2.5 font-bega-medium text-white shadow-md shadow-amber-500/20 hover:bg-amber-700 duration-200 sm:w-auto"},{default:d(()=>[u("Trouver un freelance")]),_:1},8,["href"]),l(y,{href:r.route("register.begin"),class:"mt-4 md:mt-0 mx-auto text-center box-border w-10/12 2xl:py-3 2xl:text-lg rounded-md border border-amber-500/20 px-8 py-2.5 font-bega-medium text-amber-600 shadow-md shadow-amber-500/10 hover:bg-gray-100 duration-200"},{default:d(()=>[u("Dévenir freelance")]),_:1},8,["href"])]),Ie]),Je])])]),e("div",Ue,[e("div",Ge,[Ze,e("div",Re,[l(t(L),{class:"flex py-8 xl:py-12",modules:[t(V),t(P),t(N),t(Z),t(H)],spaceBetween:30,"slides-per-view":1,"space-between":25,pagination:{clickable:!0}},{default:d(()=>[l(t(k),{class:"mb-8 xl:mb-12"},{default:d(()=>[Oe]),_:1}),l(t(k),{class:"mb-8"},{default:d(()=>[We]),_:1})]),_:1},8,["modules"])])])]),e("div",Ye,[e("div",Ke,[e("div",Qe,[e("div",Xe,[et,e("div",tt,[st,e("div",at,[e("div",lt,[e("div",ot,[l(t(de),{class:"text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"})]),it]),e("div",rt,[e("div",dt,[l(t(ne),{class:"text-[20px] text-amber-600 duration-200 hover:text-dark w-12 h-12 ml-2"})]),nt]),ct])])])])])]),e("div",ut,[e("div",mt,[gt,e("div",xt,[(a(!0),o(j,null,A($.categories,s=>(a(),o("div",null,[l(y,{href:r.route("categoryName",s.slug),class:"flex flex-col items-center px-2 py-4 duration-200 bg-white border shadow-lg cursor-pointer group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},{default:d(()=>[s.media.url!=""?(a(),o("img",{key:0,src:s.media.url,class:"w-20 h-20 rounded-md",alt:s.media.url},null,8,ht)):(a(),o("img",{key:1,src:"/images/logo/ff3.png",class:"w-20 h-20 rounded-md",alt:s.media.url},null,8,pt)),e("h4",vt,c(s.name),1)]),_:2},1032,["href"])]))),256))])])]),J.value.length>0?(a(),o("div",bt,[e("div",ft,[_t,e("div",wt,[e("div",yt,[e("div",kt,[e("button",{onClick:n[0]||(n[0]=s=>_("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Ct),e("button",{onClick:n[1]||(n[1]=s=>_("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Mt)])]),l(t(L),{class:"flex py-8 mb-4",modules:[t(V),t(P),t(N),t(Z),t(H)],spaceBetween:30,"space-between":25,breakpoints:{300:{slidesPerView:1},900:{slidesPerView:3}},onSwiper:v},{default:d(()=>[(a(!0),o(j,null,A(J.value,s=>(a(),ae(t(k),{class:"p-2"},{default:d(()=>[e("div",$t,[St,e("div",Bt,[e("div",At,[e("a",qt,c(s.category.name),1),Dt]),e("div",null,[e("p",Ft,c(s.title),1)]),e("p",Vt,[C.value?(a(),o("div",Nt,c(s.description),1)):(a(),o("div",Pt,c(O(s.description,70)),1)),s.description.length>70?(a(),o("div",Ht,[e("button",{onClick:n[2]||(n[2]=U=>C.value=!C.value)},[m(e("span",Lt,"Lire moins",512),[[p,C.value]]),m(e("span",Tt,"Lire la suite",512),[[p,!C.value]])])])):z("",!0)]),e("div",Et,[e("div",It,[e("a",Jt,[e("div",Ut,[l(W,{user:s.user,taille:"10"},null,8,["user"])]),e("span",Gt,c(s.user.name),1)]),Zt,e("span",Rt,c(s.created_at),1)])]),e("div",Ot,[e("div",Wt,[e("h1",Yt,c(s.budget)+" $",1)]),s.status=="pending"&&r.$page.props.auth.freelance?(a(),o("div",Kt,[e("a",Qt,[l(D,{size:"small",outlined:"",severity:"info",label:"Postuler"})])])):z("",!0),s.status=="pending"&&!r.$page.props.auth.freelance&&!r.$page.props.auth.user==null?(a(),o("div",Xt,[l(y,{href:r.route("register.begin")},{default:d(()=>[l(D,{size:"small",outlined:"",severity:"info",label:"Etre prestaire pour postuler"})]),_:1},8,["href"])])):z("",!0),r.$page.props.auth.user==null?(a(),o("div",es,[l(y,{href:r.route("register")},{default:d(()=>[l(D,{size:"small",outlined:"",severity:"info",label:"postuler"})]),_:1},8,["href"])])):z("",!0)])])])]),_:2},1024))),256))]),_:1},8,["modules"])])])])):z("",!0),e("div",ts,[e("div",ss,[e("div",as,[ls,e("div",os,[e("div",{class:"relative flex flex-col justify-center w-full py-2 bg-indigo-700 md:py-24 md:w-1/2 item-center"},[is,e("div",{class:"absolute bottom-0 right-0 hidden mb-4 mr-4 md:block"},[e("button",{class:"w-12 h-10 text-gray-500 bg-gray-100 border-r rounded-l-full font-bega-semibold focus:outline-none hover:text-indigo-500",onClick:w}," ← "),e("button",{class:"w-12 h-10 text-gray-500 bg-gray-100 rounded-r-full font-bega-semibold focus:outline-none hover:text-indigo-500",onClick:b}," → ")])]),e("div",rs,[e("div",ds,[ns,e("div",cs,[m(e("div",null,ms,512),[[p,i.value===1]]),m(e("div",null,xs,512),[[p,i.value===2]]),m(e("div",null,ps,512),[[p,i.value===3]])]),e("div",vs,[e("button",{onClick:n[3]||(n[3]=s=>g(1)),class:B(["inline-block mx-2 text-center rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline",{"h-12 w-12 opacity-25 bg-indigo-300 text-gray-600":i.value!=1,"h-16 w-16 opacity-100 bg-indigo-600 text-white":i.value==1}])},"JD",2),e("button",{onClick:n[4]||(n[4]=s=>g(2)),class:B(["inline-block w-16 h-16 mx-2 text-center bg-indigo-600 rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline",{"h-12 w-12 opacity-25 bg-indigo-300 text-gray-600":i.value!=2,"h-16 w-16 opacity-100 bg-indigo-600 text-white":i.value==2}])},"WM",2),e("button",{onClick:n[5]||(n[5]=s=>g(3)),class:B(["inline-block w-12 h-12 mx-2 text-center bg-indigo-600 rounded-full shadow-xs font-bega-semibold focus:outline-none focus:shadow-outline",{"h-12 w-12 opacity-25 bg-indigo-300 text-gray-600":i.value!=3,"h-16 w-16 opacity-100 bg-indigo-600 text-white":i.value==3}])},"JW",2)]),e("div",bs,[m(e("div",fs,ys,512),[[p,i.value==1]]),m(e("div",ks,js,512),[[p,i.value==2]]),m(e("div",Ms,Bs,512),[[p,i.value==3]])])])])])])])]),e("div",As,[e("div",qs,[e("div",Ds,[e("div",Fs,[e("div",Vs,[Ps,Ns,e("div",Hs,[l(y,{href:r.route("register.begin"),class:"relative flex items-center justify-center w-[6/12] h-12 px-8 mx-auto duration-300 bg-white rounded-full before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max"},{default:d(()=>[Ls]),_:1},8,["href"])])]),Ts])])])]),Es,e("div",Is,[e("div",Js,[Us,e("div",Gs,[Zs,e("div",Rs,[e("div",Os,[e("div",Ws,[e("div",null,[(a(!0),o(j,null,A(E.value,(s,U)=>(a(),o("div",{key:s.id},[e("button",{class:B(["flex items-center justify-between w-full py-3 mt-4 text-gray-800 border-b font-bega-semibold dark:text-white",U!==E.value.length-1&&"border-b border-gray-400"]),onClick:oa=>q(s.id)},[e("div",Ks,c(s.questions),1),m((a(),o("svg",Qs,ea,512)),[[p,!x.value.includes(s.id)]]),m((a(),o("svg",ta,aa,512)),[[p,x.value.includes(s.id)]])],10,Ys),l(t(le),{when:x.value.includes(s.id),class:"m-2"},{default:d(()=>[e("p",la,c(s.reponses),1)]),_:2},1032,["when"])]))),128))])])])])])])])],64)}}});export{ga as default};

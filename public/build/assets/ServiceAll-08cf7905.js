import{_ as $}from"./WebLayout-b4b319c4.js";import{g as f,s as A,c as i,b as e,f as r,w as a,u as s,F as p,l as b,o as l,e as g,A as S,t as I,aN as j,i as F}from"./app-6a5e3ea6.js";import{_ as E}from"./FreelanceCard-f3da5de0.js";import{S as m,N as h,P as _,a as B,A as P,b as x}from"./effect-init-e1abac09.js";import{E as C}from"./effect-cube-230a3239.js";import"./userInfo-3418e365.js";import"./index-2630c011.js";const L={class:"flex flex-col min-h-screen pt-16 mb-6 bg-findDark-100 dark:bg-findDark-800"},q={class:"flex flex-col p-2 mx-6 my-8 bg-white rounded-lg md:min-h-64 dark:bg-findDark-900"},O=e("div",{class:"mb-2"},[e("h3",{class:"text-lg text-center md:text-xl font-bega_medium dark:text-findDark-400 text-slate-800"}," Découvrez une communauté de freelances talentueux prêts à donner vie à vos projets. Trouvez le service parfait pour vous, choisissez parmi une large sélection de compétences et laissez notre communauté de professionnels vous aider à réaliser vos rêves. ")],-1),T={class:""},G={class:"py-4 mx-6"},H={class:"flex items-end justify-end mb-2"},J={class:"flex gap-4"},K=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),Q=[K],R=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),U=[R],W={class:"mt-3 mb-1 md:text-[12px] text-[10px] font-semibold text-slate-600 duration-200 group-hover:text-white"},X={class:"py-8 mx-2 mb-4 bg-white rounded-lg dark:bg-findDark-800 lg:mx-4"},Y={class:"flex items-center justify-between px-4"},Z=e("p",{class:"text-xl font-bega_medium text-slate-700 dark:text-navy-100"}," Les Services populaire ",-1),ee={class:"flex gap-4"},se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),te=[se],oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),ne=[oe],le={class:"mt-5 lg:mx-6 lg:p-4"},ae={class:"py-8 mx-2 mb-4 bg-white rounded-lg dark:bg-findDark-800 lg:mx-4"},re={class:"flex items-center justify-between px-4"},ie=e("p",{class:"text-xl font-bega_medium text-slate-700 dark:text-navy-100"}," Les Freelance populaire ",-1),de={class:"flex gap-4"},ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M15 19l-7-7 7-7"})],-1),ue=[ce],ve=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M9 5l7 7-7 7"})],-1),pe=[ve],be={class:"mt-5 lg:mx-2 lg:py-4"},ge={class:"flex flex-col p-2 mx-2 mt-4 bg-white rounded-lg dark:bg-findDark-800 lg:mx-6 justify-beetwen"},fe=e("div",{class:"mb-4"},[e("h1",{class:"text-xl font-bold text-findDark-800 dark:text-findDark-300"},"Services que vous pourriez aimer")],-1),me={class:"grid grid-cols-1 gap-4 lg:mx-6 lg:p-4 md:grid-cols-2 lg:md:grid-cols-4 md:gap-4"},he={class:"flex flex-col items-center justify-center p-6 mx-6 mt-4 bg-white rounded-lg shadow-lg dark:bg-findDark-900 min-h-64 lg:flex-row lg:justify-start"},_e=e("img",{src:"/images/hero/team.svg",alt:"Illustration de projet",class:"hidden w-1/2 h-64 mb-4 rounded-md lg:mr-6 md:block lg:mb-0"},null,-1),xe={class:"text-center lg:text-left"},we=e("h2",{class:"mb-2 text-xl text-findDark-100 dark! font-bega_medium"},"Vous ne trouvez pas ce que vous cherchez ?",-1),ke=e("p",{class:"mb-4 dark:text-findDark-300"},"Si vous avez besoin d'un service particulier, n'hésitez pas à soumettre votre projet et notre communauté de freelances talentueux sera ravie de vous aider..",-1),ye={class:"flex items-center justify-center"},ze=Object.assign({layout:$},{__name:"ServiceAll",props:{categories:Array,freelances:Array,servicesBest:Array},setup(D){const d=D,c=f(null),u=f(null),v=f(null),V=t=>{v.value=t},z=t=>{c.value=t},N=t=>{u.value=t},w=t=>{u.value&&(t==="prev"?u.value.slidePrev():t==="next"&&u.value.slideNext())},k=t=>{v.value&&(t==="prev"?v.value.slidePrev():t==="next"&&v.value.slideNext())},y=t=>{c.value&&(t==="prev"?c.value.slidePrev():t==="next"&&c.value.slideNext())};return(t,n)=>{const M=A("ButtonMt");return l(),i("div",L,[e("div",q,[O,e("div",T,[e("div",G,[e("div",H,[e("div",J,[e("button",{onClick:n[0]||(n[0]=o=>y("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},Q),e("button",{onClick:n[1]||(n[1]=o=>y("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},U)])]),r(s(x),{class:"flex py-8 mb-4",modules:[s(h),s(_),s(B),s(C),s(P)],spaceBetween:30,"space-between":25,breakpoints:{300:{slidesPerView:1},900:{slidesPerView:3}},onSwiper:z},{default:a(()=>[(l(!0),i(p,null,b(d.categories,o=>(l(),g(s(m),{class:"m-2"},{default:a(()=>[r(s(S),{href:t.route("categoryName",[o.name]),class:"flex flex-col items-center px-4 py-2.5 duration-200 border shadow-lg cursor-pointer bg-findDark-50 group rounded-xl border-amber-500/10 shadow-amber-300/10 hover:bg-amber-600"},{default:a(()=>[e("h4",W,I(o.name),1)]),_:2},1032,["href"])]),_:2},1024))),256))]),_:1},8,["modules"])])])]),e("div",X,[e("div",Y,[Z,e("div",ee,[e("button",{onClick:n[2]||(n[2]=o=>k("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},te),e("button",{onClick:n[3]||(n[3]=o=>k("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},ne)])]),e("div",le,[r(s(x),{class:"flex px-4 py-8",modules:[s(h),s(_),s(B),s(C),s(P)],spaceBetween:30,breakpoints:{600:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:4}},"space-between":25,onSwiper:V},{default:a(()=>[(l(!0),i(p,null,b(d.servicesBest,o=>(l(),g(s(m),{class:"p-2"},{default:a(()=>[r(j,{service:o},null,8,["service"])]),_:2},1024))),256))]),_:1},8,["modules"])])]),e("div",ae,[e("div",re,[ie,e("div",de,[e("button",{onClick:n[4]||(n[4]=o=>w("prev")),class:"w-10 h-10 p-0 rounded-full btn2 prev-btn hover:bg-slate-300/20 focus:bg-slate-300/20 dark:active:bg-slate-300/25 active:bg-slate-100/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},ue),e("button",{onClick:n[5]||(n[5]=o=>w("next")),class:"w-10 h-10 p-0 rounded-full btn2 next-btn hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"},pe)])]),e("div",be,[r(s(x),{class:"flex px-4 py-8",modules:[s(h),s(_)],watchSlidesProgress:!0,cssMode:!0,mousewheel:!0,watchOverflow:!0,spaceBetween:10,breakpoints:{500:{slidesPerView:1},600:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:4}},onSwiper:N},{default:a(()=>[(l(!0),i(p,null,b(d.freelances,o=>(l(),g(s(m),{class:"p-4 lg:mx-4"},{default:a(()=>[r(E,{freelance:o},null,8,["freelance"])]),_:2},1024))),256))]),_:1},8,["modules"])])]),e("div",ge,[fe,e("div",me,[(l(!0),i(p,null,b(d.servicesBest,o=>(l(),i("div",null,[(l(),g(j,{service:o,key:o.id},null,8,["service"]))]))),256))])]),e("div",he,[_e,e("div",xe,[we,ke,e("div",ye,[r(s(S),{href:t.route("createProject")},{default:a(()=>[r(M,null,{default:a(()=>[F(" Soumettre une mission ")]),_:1})]),_:1},8,["href"])])])])])}}});export{ze as default};

import{g as h,s as v,G as b,o,c as s,b as e,e as k,h as d,H as p,P as g,t as i,i as u,F as y,l as C,f as L,w as j,u as B,A as F,O as V,V as z}from"./app-816520c7.js";const D={class:"m-1 lg:mx-0"},N={class:"relative flex w-full min-w-[19rem] flex-col font-bega-light rounded-xl bg-white dark:bg-gray-900 bg-clip-border text-gray-700 shadow-lg"},$={class:"relative h-[14rem] mx-4 mt-2 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"},M=["src","alt"],O=["src"],S={key:3,class:"flex items-center"},A=e("i",{class:"w-6 pi pi-eye"},null,-1),E=[A],G={key:4,class:"flex items-center"},H={class:""},P=e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),T=[P],q=e("svg",{class:"w-5 h-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),I=[q],J={class:"p-3"},K={class:"flex items-center justify-between mb-2"},Q={class:"block text-base antialiased leading-snug tracking-normal text-gray-800 font-bega_medium dark:text-gray-100"},R={class:"flex items-center gap-1.5 text-sm leading-relaxed text-gray-800 dark:text-gray-100 antialiased"},U=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",class:"-mt-0.5 h-3 w-3 text-yellow-400"},[e("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})],-1),W={class:"block text-sm antialiased leading-relaxed text-gray-700 dark:text-gray-200"},X={class:"inline-flex flex-wrap items-center h-20 gap-3 mt-2 group"},Y={class:"items-center cursor-pointer py-1 px-2 rounded-md text-[10px] lg:text-[10px] border border-secondary-200 shadow-sm bg-secondary-100 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-400 dark:border-none"},Z={class:"flex flex-row justify-between gap-2 p-3 pt-auto"},oe={__name:"FreelanceCard",props:{freelance:Object},setup(f){const c=h(!1),_=()=>{V.post(route("user.createChat"),{freelance_id:t.freelance.id})},w=async()=>{l.value=!l.value;try{const r=await z.post(route("like.freelance"),{like:l.value,freelance:t.freelance.id})}catch(r){console.log(r)}},t=f,l=h(t.freelance.like);return(r,a)=>{const m=v("FsLightbox"),x=b("tooltip");return o(),s("div",D,[e("div",N,[e("div",$,[t.freelance.user.profile_photo_path!=null?(o(),k(m,{key:0,toggler:c.value,sources:["/storage/"+t.freelance.user.profile_photo_path]},null,8,["toggler","sources"])):d("",!0),t.freelance.user.profile_photo_path!=null?(o(),s("img",{key:1,class:"object-containzegDV w-full h-full",src:"/storage/"+t.freelance.user.profile_photo_path,alt:t.freelance.user.name},null,8,M)):(o(),s("img",{key:2,class:"object-cover w-full h-full",src:t.freelance.user.profile_photo_url,alt:""},null,8,O)),t.freelance.user.profile_photo_path!=null?(o(),s("div",S,[e("button",{onClick:a[0]||(a[0]=n=>c.value=!c.value),class:"absolute text-lg top-2 left-2"},E)])):d("",!0),r.$page.props.auth.user?(o(),s("div",G,[e("button",{class:"absolute top-2 right-2",onClick:a[1]||(a[1]=n=>w())},[p(e("span",H,T,512),[[g,!l.value]]),p(e("span",null,I,512),[[g,l.value]])])])):d("",!0)]),e("div",J,[e("div",K,[e("h5",Q,i(t.freelance.nomComplet),1),e("p",R,[U,u(" ("+i(t.freelance.level)+") ",1)])]),e("p",W," ("+i(t.freelance.category.name)+") ",1),e("div",X,[(o(!0),s(y,null,C(t.freelance.sub_categorie,(n,ee)=>(o(),s("span",Y,[p((o(),s("span",null,[u(i(n.name),1)])),[[x,n.name,void 0,{top:!0}]])]))),256))])]),e("div",Z,[e("button",{type:"button",onClick:a[2]||(a[2]=n=>_()),class:"block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle text-sm font-bega_medium uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none","data-ripple-light":"true"}," Contacter "),L(B(F),{href:r.route("profileFreelance",t.freelance.identifiant),class:"block w-full select-none rounded-lg py-2 px-2 text-center align-middle text-sm font-bega_medium uppercase dark:text-white shadow-md dark:shadow-white-500/20 text-amber-600 transition-all hover:shadow-lg focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"},{default:j(()=>[u(" profile ")]),_:1},8,["href"])])])])}}};export{oe as _};

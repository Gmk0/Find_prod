import{X as P,$ as L,E as M,g as p,T as G,s as c,c as g,f as a,b as e,w as f,u as o,v as R,H as h,U as C,F as H,l as W,a0 as X,x as Y,o as v,i as Z,A as D,t as J,a1 as K,O as Q}from"./app-3a044357.js";import{_ as ee}from"./UserLayout-fc2a0176.js";import{D as z}from"./MazPicker-KEFEA2or-c649f29c.js";import"./MainSidebarUser-cdaee1f6.js";/* empty css                                                          */import"./userInfo-5e82aa22.js";const te={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},se={class:"flex flex-col"},oe={class:"flex","aria-label":"Breadcrumb"},ie={class:"inline-flex items-center space-x-1 md:space-x-3"},ae={class:"inline-flex items-center"},le=e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),re={"aria-current":"page"},ne=e("svg",{class:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),de=e("span",{class:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"},"Edit",-1),ue=Y('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission</span></div></li>',1),ce=e("h1",{class:"mt-4 text-3xl font-bold text-black dark:text-white"},"Mission Modification",-1),me={class:"flex flex-col mt-4"},pe={class:"w-full"},ge={class:"w-full mt-4"},fe={class:"mt-4 W-full"},ve={class:"flex flex-col w-full mt-4"},xe={class:"flex gap-8"},be={class:"flex w-full"},_e={class:"flex w-full"},he={class:"mt-4 mb-4"},ye=e("label",{for:"message",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Exigences",-1),ke={class:"grid mt-6 lg:grid-cols-2"},we={class:"flex flex-col items-start justify-start py-4"},Se={class:"flex flex-wrap mt-4 space-x-2"},Ve={key:0},Me={class:"relative group"},Ce={class:"flex flex-wrap items-center"},De=e("i",{class:"fas fa-file-alt"},null,-1),ze={class:"absolute top-0 right-0 mt-2 mr-2"},Ue={key:1,class:"flex-flex-wrap"},$e={class:"relative group"},Fe=["src"],je={class:"absolute top-0 right-0 mt-2 mr-2"},Be={class:"lg:col-span-1 card"},Ee={class:"flex flex-wrap flex-1 gap-2 justify-content-between align-items-center"},Te={class:"flex gap-2"},qe=e("p",null,"Glissez et déposez les fichiers ici pour les uploader.",-1),Ie={class:"flex px-6 py-8 lg:justify-end lg:items-end"},Oe={class:"relative inline-flex items-center cursor-pointer"},Ae=e("div",{class:"w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),Ne=e("span",{class:"text-sm font-medium text-gray-900 ms-3 dark:text-gray-300"},"Afficher",-1),Pe={class:"flex justify-center gap-6 mt-4"},Le=e("p",null," Êtes-vous sûr de vouloir supprimer cette mission ? Veuillez noter que si vous avez déjà accepté une proposition pour cette mission, il sera impossible de la supprimer. Si vous êtes sûr, cliquez sur ‘Confirmer’. Sinon, cliquez sur ‘Annuler’ ",-1),Ge={class:"flex justify-center gap-6 mt-4"},Je=Object.assign({layout:ee},{__name:"MissionMod",props:{mission:Object},setup(U){const x=P(),r=U,$=L(),F=M(()=>$.categoriesGet.categories),n=p(!1),j=M(()=>r.mission.data),y=l=>{const[t,u,b]=l.split("-"),m=new Date(`${b}-${u}-${t}`);return`${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,"0")}-${String(m.getDate()).padStart(2,"0")}`},i=G({id:r.mission.data.id,title:r.mission.data.title,exigence:r.mission.data.exigences,description:r.mission.data.description,dateD:y(r.mission.data.begin_mission),dateF:y(r.mission.data.end_mission),budget:r.mission.data.budget,category_id:r.mission.data.category.id,mission_id:r.mission.data.id,image:null,masquer:r.mission.data.masquer}),B=p(),E=()=>{i.post(route("deleteMission"),{onError:l=>{x.add({severity:"info",summary:"Message",detail:l.message,group:"br",life:3e3}),n.value=!1}})},T=()=>{i.post(route("missionEdit"),{onSuccess:()=>{x.add({severity:"info",summary:"Message",detail:"Mission modifier",group:"br",life:1e3})},onError:l=>{console.log(l)}})},k=l=>{Q.post(route("removeFileMission"),{file_index:l,mission_id:r.mission.data.id},{preserveScroll:!0,onSuccess:()=>{i.image=null,x.add({severity:"info",summary:"Message",detail:"Photo supprimer",group:"br",life:1e3})}})},q=()=>{};p(1),p("");const I=l=>{i.image=l.files},O=l=>{let t=["jpg","jpeg","png","gif","bmp"],u=l.split(".").pop().toLowerCase();return t.includes(u)},w=new Date,S=p({min:w.toISOString().split("T")[0],max:w.toISOString().split("T")[0]});return(l,t)=>{const u=c("Toast"),b=c("MazInput"),m=c("MazSelect"),V=c("MazInputPrice"),d=c("Button"),A=c("FileUpload");return v(),g("div",te,[a(u,{position:"bottom-right",group:"br"}),e("div",se,[e("div",null,[e("nav",oe,[e("ol",ie,[e("li",ae,[a(o(D),{href:l.route("user.dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:f(()=>[le,Z(" Dashboard ")]),_:1},8,["href"])]),e("li",re,[a(o(D),{href:l.route("user.missions"),class:"flex items-center"},{default:f(()=>[ne,de]),_:1},8,["href"])]),ue])])]),ce]),e("div",null,[e("form",{onSubmit:t[11]||(t[11]=R(s=>T(),["prevent"])),class:"p-4 mt-2 border border-gray-100 rounded-md min-h-72"},[e("div",me,[e("div",pe,[a(b,{id:"name",required:"",modelValue:o(i).title,"onUpdate:modelValue":t[0]||(t[0]=s=>o(i).title=s),placeholder:"Titre"},null,8,["modelValue"])]),e("div",ge,[h(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>o(i).description=s),id:"message",placeholder:"Decrivez votre mission",rows:"4",class:"block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"},`

                                            `,512),[[C,o(i).description]])]),e("div",fe,[a(m,{modelValue:o(i).category_id,"onUpdate:modelValue":t[2]||(t[2]=s=>o(i).category_id=s),options:F.value,"option-value-key":"id","option-label-key":"name","option-input-value-key":"name",placeholder:"Categories"},null,8,["modelValue","options"])])]),e("div",ve,[e("div",xe,[e("div",be,[a(o(z),{locale:"fr-FR","min-date":S.value.min,modelValue:o(i).dateD,"onUpdate:modelValue":t[3]||(t[3]=s=>o(i).dateD=s),label:"Date debut"},null,8,["min-date","modelValue"])]),e("div",_e,[a(o(z),{locale:"fr-FR","min-date":S.value.min,modelValue:o(i).dateF,"onUpdate:modelValue":t[4]||(t[4]=s=>o(i).dateF=s),label:"Date debut"},null,8,["min-date","modelValue"])])]),e("div",he,[ye,h(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=s=>o(i).exigence=s),id:"message",placeholder:"Exigences pour la mission",rows:"4",class:"block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus: focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"},`

                                            `,512),[[C,o(i).exigence]])]),e("div",null,[a(V,{modelValue:o(i).budget,"onUpdate:modelValue":t[6]||(t[6]=s=>o(i).budget=s),label:"Budget de la mission",currency:"USD",locale:"en-US",onFormatted:t[7]||(t[7]=s=>B.value=s)},null,8,["modelValue"])])]),e("div",ke,[e("div",we,[e("div",Se,[(v(!0),g(H,null,W(j.value.files,(s,_)=>(v(),g("div",null,[O(s)?(v(),g("div",Ue,[e("div",$e,[e("img",{src:"/storage/"+s,alt:"Product Name",class:"w-16 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80"},null,8,Fe),e("div",je,[a(d,{onClick:N=>k(_),size:"small",outlined:"",icon:"pi pi-trash"},null,8,["onClick"])])])])):(v(),g("div",Ve,[e("div",Me,[e("div",Ce,[e("p",null,J(s.name),1),De]),e("div",ze,[a(d,{onClick:N=>k(_),size:"small",outlined:"",icon:"pi pi-trash"},null,8,["onClick"])])])]))]))),256))])]),e("div",Be,[a(u),a(A,{auto:!0,onSelect:I,onUpload:t[8]||(t[8]=s=>q()),multiple:!0,accept:"image/*",maxFileSize:1e6},{header:f(({chooseCallback:s})=>[e("div",Ee,[e("div",Te,[a(d,{onClick:_=>s(),icon:"pi pi-images",rounded:"",outlined:""},null,8,["onClick"])])])]),empty:f(()=>[qe]),_:1})])]),e("div",Ie,[e("div",null,[e("label",Oe,[h(e("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=s=>o(i).masquer=s),class:"sr-only peer"},null,512),[[X,o(i).masquer]]),Ae,Ne])])]),e("div",Pe,[e("div",null,[a(d,{type:"submit",label:"Modifier",outlined:""})]),e("div",null,[a(d,{type:"button",label:"Supprimer",severity:"danger",onClick:t[10]||(t[10]=s=>n.value=!n.value),outlined:""})])])],32)]),a(o(K),{visible:n.value,"onUpdate:visible":t[14]||(t[14]=s=>n.value=s),modal:"",header:"Confirmation",style:{width:"40rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:f(()=>[Le,e("div",Ge,[e("div",null,[a(d,{onClick:t[12]||(t[12]=s=>E()),type:"button",label:"Confirmer",outlined:""})]),e("div",null,[a(d,{type:"button",label:"Annuler",severity:"danger",onClick:t[13]||(t[13]=s=>n.value=!n.value),outlined:""})])])]),_:1},8,["visible"])])}}});export{Je as default};

import{d as Z,o as n,c as i,F as I,l as H,n as z,ac as L,b as e,r as D,i as q,t as m,am as K,g as v,E as P,s as w,f as u,H as k,P as S,v as G,a0 as F,h as V,w as J,u as x,x as R,e as X,aR as Y,O as W}from"./app-f175eda0.js";import{_ as ee}from"./WebLayout-d3c4b8b9.js";import"./userInfo-bcdc7c94.js";import"./index-2630c011.js";const te=["for","aria-checked","onKeydown"],se=["id","name","value","onChange"],oe=Z({__name:"MazRadioButtons",props:{modelValue:{type:[String,Number],default:void 0},options:{type:Array,required:!0},name:{type:String,default:"MazButtonsRadio"},color:{type:String,default:"primary"},noElevation:{type:Boolean,default:!1},orientation:{type:String,default:"row"}},emits:["update:model-value","change"],setup(d,{emit:r}){const c=d,s=r;function _(a){s("update:model-value",a.value)}function p(a){return c.modelValue===a}function g(a,h){["Space"].includes(a.code)&&(a.preventDefault(),_(h))}return(a,h)=>(n(),i("div",{class:z(["m-radio-buttons",[d.orientation==="row"?"maz-flex-row":"maz-flex-col"]])},[(n(!0),i(I,null,H(d.options,(l,C)=>(n(),i("label",{key:C,for:l.value.toString(),class:z(["m-radio-buttons__items",{"--is-selected":p(l.value),"maz-elevation":!d.noElevation}]),tabindex:"0",style:L(p(l.value)?{color:`var(--maz-color-${d.color}-contrast)`,backgroundColor:`var(--maz-color-${d.color})`}:void 0),role:"radio","aria-checked":p(l.value),onKeydown:y=>g(y,l)},[e("input",{id:l.value.toString(),type:"radio",name:d.name,value:l.value,class:"maz-hidden",onChange:y=>_(l)},null,40,se),D(a.$slots,"default",{option:l,selected:p(l.value)},()=>[q(m(l.label),1)],!0)],46,te))),128))],2))}}),ae=(d,r)=>{const c=d.__vccOpts||d;for(const[s,_]of r)c[s]=_;return c},le=ae(oe,[["__scopeId","data-v-feb27873"]]);const ne={class:"min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900"},de={class:"px-6 md:px-12"},ie=e("div",null,[e("div",{class:"mb-2"}),e("div",{class:"mb-2"},[e("h1",{class:"text-5xl font-bold text-gray-600 md:text-2xl dark:text-gray-200"},"Panier")])],-1),re={key:0,class:"w-full px-5 py-10 mx-0 text-gray-800 bg-white border-t border-b border-gray-200 rounded-md dark:bg-gray-800"},ce={class:"w-full"},ue={class:"items-start -mx-3 md:flex"},pe={class:"px-3 md:w-7/12 lg:pr-10"},me={class:"flex flex-col divide-y divide-gray-700"},ve={class:"flex flex-col py-6 sm:flex-row sm:justify-between"},_e={class:"flex w-full space-x-2 sm:space-x-4"},he=["src"],ge={class:"flex flex-col justify-between w-full pb-4"},ye={class:"flex justify-between w-full pb-2 space-x-2"},be={class:"space-y-1"},xe={class:"text-lg font-semibold leading-snug dark:text-gray-100 sm:pr-8"},fe={class:"text-sm dark:text-gray-100"},we={class:"text-right dark:text-gray-100"},ke={class:"text-lg font-semibold"},Ve=e("p",{class:"text-sm line-through"}," $",-1),Ce={class:"flex text-sm divide-x dark:text-white"},Se=["onClick"],ze=R('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current"><path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path><rect width="32" height="200" x="168" y="216"></rect><rect width="32" height="200" x="240" y="216"></rect><rect width="32" height="200" x="312" y="216"></rect><path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path></svg><span>Retirer</span>',2),Me=[ze],Ne={"x-data":"{ productQuantity: @json($item['quantity']) }"},$e=e("label",{for:"Quantity",class:"sr-only"}," Quantity ",-1),Ue={class:"flex items-center gap-1"},Ee=["disabled","onClick"],je=["value"],Be=["onClick"],Pe={class:"pb-6 mb-6 border-b border-gray-200"},Ie={class:"flex gap-1 mb-2 ml-1 text-sm font-semibold text-gray-600 dark:text-gray-200"},He={class:"py-1.5"},qe={class:"w-4 h-4 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Re=e("path",{d:"M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"},null,-1),Te=[Re],Ae={class:"py-1.5"},Oe={class:"w-4 h-4 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Qe=e("path",{d:"M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"},null,-1),Ze=[Qe],Le={class:"flex items-end justify-end"},De={class:"flex-grow px-2 lg:max-w-md"},Ke={class:"p-2"},Ge=e("div",{class:"p-2"},[e("button",{class:"block w-full max-w-xs px-5 py-2 mx-auto font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:bg-gray-500"},"APPLIQUER")],-1),Fe={class:"pb-6 mb-6 text-gray-800 border-b border-gray-200"},Je={class:"flex items-center w-full mb-3"},Xe=e("div",{class:"flex-grow"},[e("span",{class:"text-gray-600 dark:text-gray-200"},"Sous total")],-1),Ye={class:"pl-3"},We={class:"font-semibold dark:text-gray-50"},et=R('<div class="flex items-center w-full"><div class="flex-grow"><span class="text-gray-600 dark:text-gray-200">Taxes(GST)</span></div><div class="pl-3"><span class="font-semibold dark:text-gray-50">$0</span></div></div>',1),tt={class:"pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none"},st={class:"flex items-center w-full"},ot=e("div",{class:"flex-grow"},[e("span",{class:"text-gray-600 dark:text-gray-200"},"Total")],-1),at={class:"pl-3"},lt=e("span",{class:"text-sm font-semibold text-gray-400 dark:text-gray-20"},null,-1),nt={class:"font-semibold"},dt={class:"w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900"},it={class:"flex flex-col gap-4"},rt={class:"w-full mx-auto mb-6 text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900"},ct={class:"hidden w-full p-6 border-b border-gray-200"},ut={class:"mb-5"},pt={for:"type1",class:"flex items-center cursor-pointer"},mt=e("img",{src:"https://www.jordanfinancialservices.com/2021/sites/default/files/images/logos/orange_money-01.jpg",class:"h-6 ml-3"},null,-1),vt={key:0,class:"px-2"},_t=e("div",{class:"relative grid grid-cols-3 gap-2 mb-3"},null,-1),ht=e("div",{class:"mt-4"},[e("button",{class:"block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none","data-ripple-light":"true"},[e("span",null,"PAYER ($)")])],-1),gt=[_t,ht],yt={class:"w-full p-6 border-b border-gray-200"},bt={class:"flex flex-wrap gap-4 mb-5"},xt={style:{display:"flex"}},ft={style:{display:"flex","flex-direction":"column"}},wt={class:"dark:text-gray-200"},kt={key:0},Vt={class:"grid grid-cols-1 gap-4 px-4 mb-4"},Ct=e("div",{class:"flex flex-col gap-4 px-3 mb-3"},[e("button",{type:"submit",disabled:"",class:"block w-full select-none rounded-lg bg-skin-fill py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"}," payer ")],-1),St={key:1,class:"flex flex-col items-center justify-center gap-4 py-8"},zt=e("h1",{class:"text-2xl"},"Votre panier est vide",-1),Mt=[zt],jt=Object.assign({layout:ee},{__name:"Checkout",props:{userSetting:Object},setup(d){var y,M,N,$,U,E,j,B;const r=K(),c=d,s=v({name:"",numero:"",provider:"",adresse:(M=(y=c.userSetting)==null?void 0:y.addresse_facturation)==null?void 0:M.adresse,commune:($=(N=c.userSetting)==null?void 0:N.addresse_facturation)==null?void 0:$.commune,ville:(E=(U=c.userSetting)==null?void 0:U.addresse_facturation)==null?void 0:E.ville,pays:(B=(j=c.userSetting)==null?void 0:j.addresse_facturation)==null?void 0:B.pays}),_=v(["CD"]),p=P(()=>r.items),g=P(()=>r.totalCost),a=v(!1),h=v(!1);v(!1),v(!1);const l=async()=>{W.post(route("checkoutMaxi"),{form:s.value,items:p.value,total:g.value},{})};v("");const C=[{value:"10",label:"Orange Money",areaName:"orange",areaEnsignUrl:"https://www.jordanfinancialservices.com/2021/sites/default/files/images/logos/orange_money-01.jpg"},{value:"9",label:"Vodacom Mpesa",areaName:"Vodacom",areaEnsignUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtTAhz7LJHKfRf5ZGowNS3ZKJH_X_26iPUv3wzBkcug&s"},{value:"15",label:"airtel Money",areaName:"airtel",areaEnsignUrl:"https://zoom-eco.net/wp-content/uploads/2021/02/15.png"}];return(T,o)=>{const A=w("Error"),O=w("TextInput"),b=w("MazInput"),Q=w("MazPhoneNumberInput");return n(),i("div",null,[e("div",ne,[e("div",de,[ie,e("div",null,[u(A)]),p.value.length>0?(n(),i("div",re,[e("div",ce,[e("div",ue,[e("div",pe,[e("ul",me,[(n(!0),i(I,null,H(p.value,t=>(n(),i("li",ve,[e("div",_e,[e("img",{class:"flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500",src:t.image,alt:"service"},null,8,he),e("div",ge,[e("div",ye,[e("div",be,[e("h3",xe,m(t.name),1),e("p",fe,m(t.basic),1)]),e("div",we,[e("p",ke,"$"+m(t.price*t.quantity),1),Ve])]),e("div",Ce,[e("button",{type:"button",onClick:f=>x(r).removeItem(t.id),class:"flex items-center px-2 py-1 pl-0 space-x-1"},Me,8,Se),e("div",null,[e("div",Ne,[$e,e("div",Ue,[e("button",{type:"button",disabled:t.quantity===1,onClick:f=>x(r).updateItemQuantity(t.id,t.quantity--),class:"w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"}," − ",8,Ee),e("input",{disabled:"",type:"number",id:"Quantity",value:t.quantity,class:"h-10 w-16 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"},null,8,je),e("button",{type:"button",onClick:f=>x(r).updateItemQuantity(t.id,t.quantity++),class:"w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"}," + ",8,Be)])])])])])])]))),256))]),e("div",Pe,[e("button",{onClick:o[0]||(o[0]=t=>a.value=!a.value),class:""},[e("label",Ie,[q("Coupon de reduction code "),e("span",He,[k((n(),i("svg",qe,Te,512)),[[S,!a.value]])]),e("span",Ae,[k((n(),i("svg",Oe,Ze,512)),[[S,a.value]])])])]),k(e("div",Le,[e("div",De,[e("div",Ke,[u(O)])]),Ge],512),[[S,a.value]])]),e("div",Fe,[e("div",Je,[Xe,e("div",Ye,[e("span",We,m(g.value)+" $",1)])]),et]),e("div",tt,[e("div",st,[ot,e("div",at,[lt,e("span",nt,m(g.value)+" $",1)])])])]),e("form",{onSubmit:G(l,["prevent"]),class:"px-3 md:w-5/12"},[e("div",dt,[e("div",it,[u(b,{label:"Addresse",type:"Addresse",modelValue:s.value.adresse,"onUpdate:modelValue":o[1]||(o[1]=t=>s.value.adresse=t)},null,8,["modelValue"]),u(b,{label:"commune",type:"commune",modelValue:s.value.commune,"onUpdate:modelValue":o[2]||(o[2]=t=>s.value.commune=t)},null,8,["modelValue"]),u(b,{label:"ville",type:"ville",modelValue:s.value.ville,"onUpdate:modelValue":o[3]||(o[3]=t=>s.value.ville=t)},null,8,["modelValue"]),u(b,{label:"Pays",type:"Pays",modelValue:s.value.pays,"onUpdate:modelValue":o[4]||(o[4]=t=>s.value.pays=t)},null,8,["modelValue"])])]),e("div",rt,[e("div",ct,[e("div",ut,[e("label",pt,[k(e("input",{type:"checkbox",class:"w-5 h-5 text-indigo-500 form-radio",id:"type1","onUpdate:modelValue":o[5]||(o[5]=t=>h.value=t),onClick:o[6]||(o[6]=t=>T.isProviderToogle("orange"))},null,512),[[F,h.value]]),mt])]),h.value?(n(),i("div",vt,gt)):V("",!0)]),e("div",yt,[e("div",bt,[u(x(le),{modelValue:s.value.provider,"onUpdate:modelValue":o[7]||(o[7]=t=>s.value.provider=t),options:C,color:"primary"},{default:J(({option:t,selected:f})=>[e("div",xt,[t.areaEnsignUrl?(n(),X(x(Y),{key:0,src:t.areaEnsignUrl,style:{"margin-right":"16px"},size:"0.8rem"},null,8,["src"])):V("",!0),e("div",ft,[e("span",wt,m(t.label),1),e("span",{class:z({"maz-text-muted":!f})},m(t.areaName),3)])])]),_:1},8,["modelValue"])]),s.value.provider!==""?(n(),i("div",kt,[e("div",null,[e("div",Vt,[u(b,{label:"Nom",type:"text",modelValue:s.value.name,"onUpdate:modelValue":o[8]||(o[8]=t=>s.value.name=t)},null,8,["modelValue"]),u(Q,{label:"Telephone","only-countries":_.value,success:!1,modelValue:s.value.numero,"onUpdate:modelValue":o[9]||(o[9]=t=>s.value.numero=t),translations:{countrySelector:{placeholder:"Code pays",error:"Choisissez un pays",searchPlaceholder:"Rechercher un pays"},phoneInput:{placeholder:"Numéro de téléphone",example:"Exemple :"}}},null,8,["only-countries","modelValue"])]),Ct])])):V("",!0)])])],32)])])])):(n(),i("div",St,Mt))]),V("",!0)])])}}});export{jt as default};

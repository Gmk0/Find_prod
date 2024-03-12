import{_ as C}from"./UserLayout-68d09b3b.js";import{g as _,a0 as T,s,c as U,f as t,b as l,w as a,o as D,i,t as S}from"./app-6fb5be8c.js";import"./MainSidebarUser-e64e1718.js";/* empty css                                                          */import"./userInfo-9a92e8e0.js";import"./index-2630c011.js";const V={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},B={class:"mt-4"},k={class:"card font-bega-medium"},F=l("span",null,[l("i",{class:"pi pi-pencil"})],-1),$=Object.assign({layout:C},{__name:"TransactionUser",props:{transactions:Object},setup(f){const u=_({status:{value:null,matchMode:T.EQUALS}}),h=_(["pending","completed","failed"]),c=n=>{switch(n){case"pending":return"info";case"completed":return"success";case"failed":return"danger";default:return null}},d=n=>{switch(n){case"pending":return"en Attente";case"completed":return"Reussie";case"failed":return"Echouer";default:return null}},g=n=>n.toLocaleString("en-US",{style:"currency",currency:"USD"});return(n,m)=>{const v=s("BreadUser"),o=s("Column"),p=s("Tag"),y=s("Dropdown"),b=s("Link"),w=s("DataTable");return D(),U("div",V,[t(v,{title:"Transactions",first_title:"Transactions",first_url:n.route("user.transactions")},null,8,["first_url"]),l("div",B,[l("div",null,[l("div",k,[t(w,{stripedRows:"",filters:u.value,"onUpdate:filters":m[0]||(m[0]=e=>u.value=e),dataKey:"id",filterDisplay:"row",paginator:"",rows:10,rowsPerPageOptions:[2,10,20,50],value:f.transactions.data,tableStyle:"min-width: 50rem",globalFilterFields:["status"]},{empty:a(()=>[i(" Aucune commande. ")]),loading:a(()=>[i(" Chargement des données. Veuillez patienter. ")]),default:a(()=>[t(o,{sortable:"",field:"transaction_numero",header:"Numero Transaction "}),t(o,{field:"amount",header:"Montant"},{body:a(e=>[i(S(g(e.data.amount))+" $ ",1)]),_:1}),t(o,{sortable:"",field:"date",header:"Date"}),t(o,{header:"status",field:"status"},{body:a(e=>[t(p,{value:d(e.data.status),severity:c(e.data.status)},null,8,["value","severity"])]),filter:a(({filterModel:e,filterCallback:x})=>[t(y,{modelValue:e.value,"onUpdate:modelValue":r=>e.value=r,onChange:r=>x(),options:h.value,placeholder:"Filtrer",class:"p-column-filter",style:{"min-width":"10rem"},showClear:!0},{option:a(r=>[t(p,{value:d(r.option),severity:c(r.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),t(o,{exportable:!1,style:{"min-width":"4rem"}},{body:a(e=>[t(b,{href:n.route("user.transactions.one",[e.data.transaction_numero])},{default:a(()=>[F]),_:2},1032,["href"])]),_:1})]),_:1},8,["filters","value"])])])])])}}});export{$ as default};

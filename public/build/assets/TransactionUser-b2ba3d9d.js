import{_ as h}from"./UserLayout-9ba2076b.js";import{s as r,c as p,b as e,f as t,w as a,x,o as f,i,t as g}from"./app-f175eda0.js";import"./MainSidebarUser-ca2f2fcb.js";/* empty css                                                          */import"./userInfo-bcdc7c94.js";const v={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},w={class:"flex flex-col"},y={class:"flex","aria-label":"Breadcrumb"},b={class:"inline-flex items-center space-x-1 md:space-x-3"},k={class:"inline-flex items-center"},T=e("svg",{class:"w-3 h-3 mr-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),C=x('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Transactions</span></div></li>',1),S=e("h1",{class:"mt-4 text-3xl text-black font-bega_semibold dark:text-white"},"Transactions",-1),B={class:"mt-4"},D={class:"card"},L=e("span",null,[e("i",{class:"pi pi-pencil"})],-1),$=Object.assign({layout:h},{__name:"TransactionUser",props:{transactions:Array},setup(c){const d=s=>{switch(s.status){case"pending":return"warning";case"completed":return"success";case"failed":return"danger";default:return null}},m=s=>s.toLocaleString("en-US",{style:"currency",currency:"USD"});return(s,N)=>{const l=r("Link"),o=r("Column"),u=r("Tag"),_=r("DataTable");return f(),p("div",v,[e("div",w,[e("div",null,[e("nav",y,[e("ol",b,[e("li",k,[t(l,{href:s.route("user.dashboard"),class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:a(()=>[T,i(" Dashboard ")]),_:1},8,["href"])]),C])])]),S]),e("div",B,[e("div",null,[e("div",D,[t(_,{stripedRows:"",paginator:"",rows:10,rowsPerPageOptions:[2,10,20,50],value:c.transactions.data,tableStyle:"min-width: 50rem"},{empty:a(()=>[i(" No customers found. ")]),loading:a(()=>[i(" Loading customers data. Please wait. ")]),default:a(()=>[t(o,{sortable:"",field:"transaction_numero",header:"transaction_numero"}),t(o,{field:"amount",header:"amount"},{body:a(n=>[i(g(m(n.data.amount))+" $ ",1)]),_:1}),t(o,{header:"status"},{body:a(n=>[t(u,{value:n.data.status,severity:d(n.data)},null,8,["value","severity"])]),_:1}),t(o,{exportable:!1,style:{"min-width":"4rem"}},{body:a(n=>[t(l,{href:s.route("user.transactions.one",[n.data.transaction_numero])},{default:a(()=>[L]),_:2},1032,["href"])]),_:1})]),_:1},8,["value"])])])])])}}});export{$ as default};

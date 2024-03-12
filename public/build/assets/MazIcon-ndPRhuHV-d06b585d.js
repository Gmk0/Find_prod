import{d as b,g as v,E as p,B as k,ak as T,o as f,c as g,h as s,ao as H,F as $,b9 as C,D as F}from"./app-6fb5be8c.js";const G=["innerHTML"],q=b({__name:"MazIcon",props:{src:{type:String,default:void 0},path:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:void 0},title:{type:String,default:void 0},transformSource:{type:Function,default:i=>i}},emits:["loaded","unloaded","error"],setup(i,{emit:h}){const u={},o=v(),c=v(),y=()=>{try{return C("mazIconPath")}catch{return}},a=i,d=h,m=p(()=>a.path??y()),w=p(()=>a.src?a.src:m.value?`${m.value}/${a.name}.svg`:`/${a.name}.svg`);k(()=>{!a.name&&!a.src&&console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop')});const S=(e,r)=>{const t=e.querySelectorAll("title");if(t.length>0)t[0].textContent=r;else{const n=document.createElementNS("http://www.w3.org/2000/svg","title");n.textContent=r,e.append(n)}},E=e=>Object.keys(e).reduce((r,t)=>(e[t]!==!1&&e[t]!==null&&e[t]!==void 0&&(r[t]=e[t]),r),{}),L=e=>{const r={},t=e.attributes;if(!t)return r;for(let n=t.length-1;n>=0;n--)r[t[n].name]=t[n].value;return r},M=e=>{let r=e.cloneNode(!0);return r=a.transformSource(e),a.title&&S(r,a.title),e.innerHTML},x=async e=>{u[e]||(u[e]=z(e));try{o.value=await u[e],await F(),d("loaded",c.value)}catch(r){o.value&&(o.value=void 0,d("unloaded")),delete u[e],d("error",r)}},z=e=>new Promise((r,t)=>{const n=new XMLHttpRequest;n.open("GET",e,!0),n.addEventListener("load",()=>{if(n.status>=200&&n.status<400)try{let l=new DOMParser().parseFromString(n.responseText,"text/xml").querySelectorAll("svg")[0];l?(l=a.transformSource(l),r(l)):t(new Error('Loaded file is not valid SVG"'))}catch(l){t(l)}else t(new Error("Error loading SVG"))}),n.addEventListener("error",()=>t()),n.send()});return T(()=>x(w.value)),(e,r)=>(f(),g($,null,[s(" eslint-disable vue/no-v-html "),s(" eslint-disable vue/html-self-closing "),o.value?(f(),g("svg",H({key:0,ref_key:"svgElem",ref:c,width:"1em",height:"1em"},{...L(o.value),...E(e.$attrs)},{style:`font-size: ${i.size}`,innerHTML:M(o.value)}),null,16,G)):s("v-if",!0),s(" eslint-enable vue/no-v-html "),s(" eslint-enable vue/html-self-closing ")],2112))}});export{q as default};

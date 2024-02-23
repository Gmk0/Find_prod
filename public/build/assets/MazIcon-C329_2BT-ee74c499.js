import{d as T,g as f,E as p,B as b,aj as k,o as g,c as h,h as u,an as $,F as C,D as H,a0 as j}from"./app-20d75b28.js";function F(a,c){const s=j(a,c);if(!s)throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${a}`);return s}const G=["innerHTML"],P=T({__name:"MazIcon",props:{src:{type:String,default:void 0},path:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:void 0},title:{type:String,default:void 0},transformSource:{type:Function,default:a=>a}},emits:["loaded","unloaded","error"],setup(a,{emit:c}){const s={},l=f(),m=f(),y=()=>{try{return F("mazIconPath")}catch{return}},o=a,d=c,v=p(()=>o.path??y()),w=p(()=>o.src?o.src:v.value?`${v.value}/${o.name}.svg`:`/${o.name}.svg`);b(()=>{!o.name&&!o.src&&console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop')});const S=(e,n)=>{const t=e.querySelectorAll("title");if(t.length>0)t[0].textContent=n;else{const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=n,e.append(r)}},E=e=>Object.keys(e).reduce((n,t)=>(e[t]!==!1&&e[t]!==null&&e[t]!==void 0&&(n[t]=e[t]),n),{}),z=e=>{const n={},t=e.attributes;if(!t)return n;for(let r=t.length-1;r>=0;r--)n[t[r].name]=t[r].value;return n},M=e=>{let n=e.cloneNode(!0);return n=o.transformSource(e),o.title&&S(n,o.title),e.innerHTML},x=async e=>{s[e]||(s[e]=L(e));try{l.value=await s[e],await H(),d("loaded",m.value)}catch(n){l.value&&(l.value=void 0,d("unloaded")),delete s[e],d("error",n)}},L=e=>new Promise((n,t)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.addEventListener("load",()=>{if(r.status>=200&&r.status<400)try{let i=new DOMParser().parseFromString(r.responseText,"text/xml").querySelectorAll("svg")[0];i?(i=o.transformSource(i),n(i)):t(new Error('Loaded file is not valid SVG"'))}catch(i){t(i)}else t(new Error("Error loading SVG"))}),r.addEventListener("error",()=>t()),r.send()});return k(()=>x(w.value)),(e,n)=>(g(),h(C,null,[u(" eslint-disable vue/no-v-html "),u(" eslint-disable vue/html-self-closing "),l.value?(g(),h("svg",$({key:0,ref_key:"svgElem",ref:m,width:"1em",height:"1em"},{...z(l.value),...E(e.$attrs)},{style:`font-size: ${a.size}`,innerHTML:M(l.value)}),null,16,G)):u("v-if",!0),u(" eslint-enable vue/no-v-html "),u(" eslint-enable vue/html-self-closing ")],2112))}});export{P as default};

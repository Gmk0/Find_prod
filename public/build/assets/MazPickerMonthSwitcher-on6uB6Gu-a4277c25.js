import{d as g,E as w,o as s,c as d,b as m,f as p,w as h,u as l,v as u,F as C,l as v,e as x,i as S,t as B,n as f}from"./app-62185122.js";import{C as D,p as M,X as c,a as n,h as b}from"./MazPicker-KEFEA2or-44854116.js";import k from"./MazBtn-2B_gHtFc-e373736d.js";import{h as q}from"./x-mark-d7yqulTI-c174403d.js";/* empty css               */const N={class:"maz-picker-month-switcher"},V={class:"maz-picker-month-switcher__header"},$=g({__name:"MazPickerMonthSwitcher",props:{calendarDate:{type:String,required:!0},color:{type:String,required:!0},locale:{type:String,required:!0},double:{type:Boolean,required:!0}},emits:["update:calendar-date","close"],setup(r,{emit:_}){const t=r,i=_,y=w(()=>Array.from({length:12},(o,e)=>e).map(o=>{const e=M(t.calendarDate).set("month",o);return t.double?{label:`${c(n(e.format(),t.locale,{month:"short"}))} - ${c(n(e.add(1,"month").format(),t.locale,{month:"short"}))}`,date:e}:{label:c(n(e.format(),t.locale,{month:"long"})),date:e}})),z=o=>{i("update:calendar-date",o.format()),i("close")};return(o,e)=>(s(),d("div",N,[m("div",V,[p(k,{size:"xs",color:"transparent",type:"button",onClick:e[0]||(e[0]=u(a=>o.$emit("close",a),["stop"]))},{default:h(()=>[p(l(q),{class:"maz-text-lg"})]),_:1})]),m("div",{class:f(["maz-picker-month-switcher__main",{"--has-double":r.double}])},[(s(!0),d(C,null,v(y.value,a=>(s(),x(k,{key:a.label,size:t.double?"sm":"xs",class:f({"--is-selected":l(b)(a.date,r.calendarDate,"month")}),color:l(b)(a.date,r.calendarDate,"month")?r.color:"transparent",type:"button",onClick:u(E=>z(a.date),["stop"])},{default:h(()=>[S(B(a.label),1)]),_:2},1032,["size","class","color","onClick"]))),128))],2)]))}}),I=D($,[["__scopeId","data-v-0730e711"]]);export{I as default};
import{d as f,o as s,c as d,F as y,l as g,n as m,ad as z,b as S,r as b,i as B,t as _}from"./app-07a65eff.js";const h=["for","aria-checked","onKeydown"],k=["id","name","value","onChange"],w=f({__name:"MazRadioButtons",props:{modelValue:{type:[String,Number],default:void 0},options:{type:Array,required:!0},name:{type:String,default:"MazButtonsRadio"},color:{type:String,default:"primary"},noElevation:{type:Boolean,default:!1},orientation:{type:String,default:"row"}},emits:["update:model-value","change"],setup(o,{emit:r}){const t=o,i=r;function n(a){i("update:model-value",a.value)}function l(a){return t.modelValue===a}function p(a,u){["Space"].includes(a.code)&&(a.preventDefault(),n(u))}return(a,u)=>(s(),d("div",{class:m(["m-radio-buttons",[o.orientation==="row"?"maz-flex-row":"maz-flex-col"]])},[(s(!0),d(y,null,g(o.options,(e,v)=>(s(),d("label",{key:v,for:e.value.toString(),class:m(["m-radio-buttons__items",{"--is-selected":l(e.value),"maz-elevation":!o.noElevation}]),tabindex:"0",style:z(l(e.value)?{color:`var(--maz-color-${o.color}-contrast)`,backgroundColor:`var(--maz-color-${o.color})`}:void 0),role:"radio","aria-checked":l(e.value),onKeydown:c=>p(c,e)},[S("input",{id:e.value.toString(),type:"radio",name:o.name,value:e.value,class:"maz-hidden",onChange:c=>n(e)},null,40,k),b(a.$slots,"default",{option:e,selected:l(e.value)},()=>[B(_(e.label),1)],!0)],46,h))),128))],2))}}),x=(o,r)=>{const t=o.__vccOpts||o;for(const[i,n]of r)t[i]=n;return t},V=x(w,[["__scopeId","data-v-feb27873"]]);export{V};
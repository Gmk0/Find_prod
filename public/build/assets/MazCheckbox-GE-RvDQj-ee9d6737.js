/* empty css                    */import{a$ as k,d as S,aW as A,ah as $,b0 as C,E as r,o as B,c as _,b as m,aj as N,u as o,f as j,n as p,r as w,ac as I}from"./app-3a044357.js";import D from"./check-_5Up9njX-2e32b05d.js";const E=["for","aria-checked"],M=["id","checked","disabled","name"],O=S({inheritAttrs:!1,__name:"MazCheckbox",props:{style:{type:[String,Array,Object],default:void 0},class:{type:[String,Array,Object],default:void 0},modelValue:{type:[Boolean,Array],default:void 0},id:{type:String,default:void 0},color:{type:String,default:"primary"},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:"m-checkbox"},size:{type:String,default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:model-value","change"],setup(t,{emit:f}){A(a=>({"3a21591b":x.value,"4953c77d":b.value,d5250ce8:h.value,"105d84cf":z.value}));const v=$(),e=t,n=f,s=C({componentName:"MazCheckbox",instance:v,providedId:e.id}),d=r(()=>typeof e.value!="boolean"&&Array.isArray(e.modelValue)?e.modelValue.includes(e.value):typeof e.modelValue=="boolean"?e.modelValue:!1),b=r(()=>{switch(e.size){case"xl":return"2.25rem";case"lg":return"2rem";default:return"1.625rem";case"sm":return"1.425rem";case"xs":return"1.325rem";case"mini":return"1.2rem"}}),y=r(()=>{switch(e.size){case"xl":return"maz-text-2xl";case"lg":return"maz-text-xl";default:return"maz-text-lg";case"sm":return"maz-text-base";case"xs":return"maz-text-sm";case"mini":return"maz-text-xs"}}),x=r(()=>`var(--maz-color-${e.color}-contrast)`),h=r(()=>`var(--maz-color-${e.color})`),z=r(()=>["black","transparent"].includes(e.color)?"var(--maz-color-muted)":`var(--maz-color-${e.color}-alpha)`);function V(a){["Space"].includes(a.code)&&(a.preventDefault(),c(e.value??!e.modelValue))}function g(a){return typeof a=="boolean"&&(typeof e.modelValue=="boolean"||e.modelValue===void 0||e.modelValue===null)?!e.modelValue:Array.isArray(e.modelValue)&&typeof a!="boolean"?e.modelValue.includes(a)?e.modelValue.filter(l=>l!==a):[...e.modelValue,a]:[a]}function c(a){const l=g(a);n("update:model-value",l),n("change",l)}return(a,l)=>(B(),_("label",{for:o(s),class:p(["m-checkbox",[{"--disabled":t.disabled},e.class]]),tabindex:"0",style:I(t.style),role:"checkbox","aria-checked":d.value,onKeydown:V},[m("input",N({id:o(s),checked:d.value},a.$attrs,{tabindex:"-1",disabled:t.disabled,name:t.name,type:"checkbox",onChange:l[0]||(l[0]=u=>{var i;return c(t.value??((i=u==null?void 0:u.target)==null?void 0:i.checked))})}),null,16,M),m("span",null,[j(o(D),{class:p(["check-icon",y.value])},null,8,["class"])]),w(a.$slots,"default",{},void 0,!0)],46,E))}}),W=k(O,[["__scopeId","data-v-05f6558f"]]);export{W as default};
import{b2 as L,d as x,aY as A,a2 as M,am as R,E as a,o as n,e as l,w,c as d,n as s,h as t,r as c,u,aO as r,ao as g,ap as h}from"./app-816520c7.js";/* empty css               */const D=x({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},noLeading:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{default:void 0},leftIcon:{default:void 0},rightIcon:{default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},contentClass:{default:void 0}},setup(_){const k=g(()=>h(()=>import("./MazSpinner-C-0tZDud-e1e50dbf.js"),["assets/MazSpinner-C-0tZDud-e1e50dbf.js","assets/app-816520c7.js","assets/app-fd1e1e7b.css","assets/MazSpinner-lJlSCSDC-3735f199.css"])),f=g(()=>h(()=>import("./MazIcon-C329_2BT-787e4a63.js"),["assets/MazIcon-C329_2BT-787e4a63.js","assets/app-816520c7.js","assets/app-fd1e1e7b.css"])),{href:B,to:I}=A(),v=M(),o=_;R(()=>{o.icon&&!o.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const p=a(()=>B?"a":I?"router-link":"button"),z=a(()=>o.pastel?`--${o.color}-pastel`:o.outline?`--${o.color}-outline`:`--${o.color}`),m=a(()=>(o.loading||o.disabled)&&p.value==="button"),$=a(()=>m.value?"--cursor-default":"--cursor-pointer"),C=a(()=>`--is-${o.variant}`),i=a(()=>o.loading&&o.variant==="button"),y=a(()=>!!v["left-icon"]||o.leftIcon),b=a(()=>!!v["right-icon"]||o.rightIcon),E=a(()=>y.value||b.value),T=a(()=>o.fab&&(o.icon||!!v.icon)),P=a(()=>p.value==="button"?o.type:void 0);return(e,O)=>(n(),l(r(p.value),{disabled:m.value,class:s(["m-btn",[`--${e.size}`,z.value,$.value,C.value,{"--block":e.block,"--no-underline":e.noUnderline,"--no-leading":e.noLeading,"--fab":e.fab,"--loading":e.loading,"--disabled":m.value,"--icon":E.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]]),type:P.value},{default:w(()=>[y.value?(n(),d("div",{key:0,class:s(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":i.value}])},[t(`
        @slot left-icon - The icon to display on the left of the button
      `),c(e.$slots,"left-icon",{},()=>[typeof e.leftIcon=="string"?(n(),l(u(f),{key:0,name:e.leftIcon},null,8,["name"])):e.leftIcon?(n(),l(r(e.leftIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),T.value?(n(),d("div",{key:1,class:s(["m-btn__icon",{"maz-invisible":i.value}])},[t(`
        @slot icon - The icon to display on the fab button
      `),c(e.$slots,"icon",{},()=>[typeof e.icon=="string"?(n(),l(u(f),{key:0,name:e.icon},null,8,["name"])):e.icon?(n(),l(r(e.icon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),e.$slots.default?(n(),d("span",{key:2,class:s([{"maz-invisible":i.value},e.contentClass])},[t(`
        @slot default - The content of the button
      `),c(e.$slots,"default",{},void 0,!0)],2)):t("v-if",!0),b.value?(n(),d("div",{key:3,class:s(["m-btn__icon-right",{"maz-invisible":i.value}])},[t(`
        @slot right-icon - The icon to display on the right of the button
      `),c(e.$slots,"right-icon",{},()=>[typeof e.rightIcon=="string"?(n(),l(u(f),{key:0,name:e.rightIcon},null,8,["name"])):e.rightIcon?(n(),l(r(e.rightIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),i.value?(n(),l(u(k),{key:4,class:"m-btn-loader",size:"2em",color:e.color},null,8,["color"])):t("v-if",!0)]),_:3},8,["disabled","class","type"]))}}),S=L(D,[["__scopeId","data-v-0caaaef5"]]);export{S as default};

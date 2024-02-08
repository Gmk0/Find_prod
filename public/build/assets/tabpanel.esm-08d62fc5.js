import{aD as C,aE as A,aj as l,aF as c,aG as S,aH as K,aI as H,G as D,o as d,c as p,b,H as f,r as P,e as g,aJ as y,h as v,F as w,l as I,t as E,P as L,aK as k}from"./app-62185122.js";var O=`
@layer primevue {
    .p-tabview-nav-container {
        position: relative;
    }

    .p-tabview-scrollable .p-tabview-nav-container {
        overflow: hidden;
    }

    .p-tabview-nav-content {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tabview-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
    }

    .p-tabview-header-action {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabview-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabview-header-action:focus {
        z-index: 1;
    }

    .p-tabview-title {
        line-height: 1;
        white-space: nowrap;
    }

    .p-tabview-nav-btn {
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tabview-nav-prev {
        left: 0;
    }

    .p-tabview-nav-next {
        right: 0;
    }

    .p-tabview-nav-content::-webkit-scrollbar {
        display: none;
    }
}
`,N={root:function(e){var n=e.props;return["p-tabview p-component",{"p-tabview-scrollable":n.scrollable}]},navContainer:"p-tabview-nav-container",previousButton:"p-tabview-nav-prev p-tabview-nav-btn p-link",navContent:"p-tabview-nav-content",nav:"p-tabview-nav",tab:{header:function(e){var n=e.instance,a=e.tab,i=e.index;return["p-tabview-header",n.getTabProp(a,"headerClass"),{"p-highlight":n.d_activeIndex===i,"p-disabled":n.getTabProp(a,"disabled")}]},headerAction:"p-tabview-nav-link p-tabview-header-action",headerTitle:"p-tabview-title",content:function(e){var n=e.instance,a=e.tab;return["p-tabview-panel",n.getTabProp(a,"contentClass")]}},inkbar:"p-tabview-ink-bar",nextButton:"p-tabview-nav-next p-tabview-nav-btn p-link",panelContainer:"p-tabview-panels"},V=C.extend({name:"tabview",css:O,classes:N}),j={name:"BaseTabView",extends:k,props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},previousButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},prevIcon:{type:String,default:void 0},nextIcon:{type:String,default:void 0}},style:V,provide:function(){return{$parentInstance:this}}},F={name:"TabView",extends:j,emits:["update:activeIndex","tab-change","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex,isPrevButtonDisabled:!0,isNextButtonDisabled:!1}},watch:{"$attrs.id":function(e){this.id=e||A()},activeIndex:function(e){this.d_activeIndex=e,this.scrollInView({index:e})}},mounted:function(){this.id=this.id||A(),this.updateInkBar(),this.scrollable&&this.updateButtonState()},updated:function(){this.updateInkBar()},methods:{isTabPanel:function(e){return e.type.name==="TabPanel"},isTabActive:function(e){return this.d_activeIndex===e},getTabProp:function(e,n){return e.props?e.props[n]:void 0},getKey:function(e,n){return this.getTabProp(e,"header")||n},getTabHeaderActionId:function(e){return"".concat(this.id,"_").concat(e,"_header_action")},getTabContentId:function(e){return"".concat(this.id,"_").concat(e,"_content")},getTabPT:function(e,n,a){var i=this.tabs.length,r={props:e.props,parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:i,first:a===0,last:a===i-1,active:this.isTabActive(a)}};return l(this.ptm("tab.".concat(n),{tab:r}),this.ptm("tabpanel.".concat(n),{tabpanel:r}),this.ptm("tabpanel.".concat(n),r),this.ptmo(this.getTabProp(e,"pt"),n,r))},onScroll:function(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,n=c.getWidth(e),a=e.scrollLeft-n;e.scrollLeft=a<=0?0:a},onNextButtonClick:function(){var e=this.$refs.content,n=c.getWidth(e)-this.getVisibleButtonWidths(),a=e.scrollLeft+n,i=e.scrollWidth-n;e.scrollLeft=a>=i?i:a},onTabClick:function(e,n,a){this.changeActiveIndex(e,n,a),this.$emit("tab-click",{originalEvent:e,index:a})},onTabKeyDown:function(e,n,a){switch(e.code){case"ArrowLeft":this.onTabArrowLeftKey(e);break;case"ArrowRight":this.onTabArrowRightKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onTabEnterKey(e,n,a);break}},onTabArrowRightKey:function(e){var n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(e,n):this.onTabHomeKey(e),e.preventDefault()},onTabArrowLeftKey:function(e){var n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(e,n):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var n=this.findFirstHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onTabEndKey:function(e){var n=this.findLastHeaderAction();this.changeFocusedTab(e,n),e.preventDefault()},onPageDownKey:function(e){this.scrollInView({index:this.$refs.nav.children.length-2}),e.preventDefault()},onPageUpKey:function(e){this.scrollInView({index:0}),e.preventDefault()},onTabEnterKey:function(e,n,a){this.changeActiveIndex(e,n,a),e.preventDefault()},findNextHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling;return a?c.getAttribute(a,"data-p-disabled")||c.getAttribute(a,"data-pc-section")==="inkbar"?this.findNextHeaderAction(a):c.findSingle(a,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling;return a?c.getAttribute(a,"data-p-disabled")||c.getAttribute(a,"data-pc-section")==="inkbar"?this.findPrevHeaderAction(a):c.findSingle(a,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$refs.nav.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$refs.nav.lastElementChild,!0)},changeActiveIndex:function(e,n,a){!this.getTabProp(n,"disabled")&&this.d_activeIndex!==a&&(this.d_activeIndex=a,this.$emit("update:activeIndex",a),this.$emit("tab-change",{originalEvent:e,index:a}),this.scrollInView({index:a}))},changeFocusedTab:function(e,n){if(n&&(c.focus(n),this.scrollInView({element:n}),this.selectOnFocus)){var a=parseInt(n.parentElement.dataset.index,10),i=this.tabs[a];this.changeActiveIndex(e,i,a)}},scrollInView:function(e){var n=e.element,a=e.index,i=a===void 0?-1:a,r=n||this.$refs.nav.children[i];r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest"})},updateInkBar:function(){var e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=c.getWidth(e)+"px",this.$refs.inkbar.style.left=c.getOffset(e).left-c.getOffset(this.$refs.nav).left+"px"},updateButtonState:function(){var e=this.$refs.content,n=e.scrollLeft,a=e.scrollWidth,i=c.getWidth(e);this.isPrevButtonDisabled=n===0,this.isNextButtonDisabled=parseInt(n)===a-i},getVisibleButtonWidths:function(){var e=this.$refs,n=e.prevBtn,a=e.nextBtn;return[n,a].reduce(function(i,r){return r?i+c.getWidth(r):i},0)}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(n,a){return e.isTabPanel(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(i){e.isTabPanel(i)&&n.push(i)}),n},[])},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},directives:{ripple:S},components:{ChevronLeftIcon:K,ChevronRightIcon:H}};function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B(Object(n),!0).forEach(function(a){W(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function W(t,e,n){return e=R(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t){var e=z(t,"string");return h(e)=="symbol"?e:String(e)}function z(t,e){if(h(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(h(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var U=["tabindex","aria-label"],$=["data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],G=["id","tabindex","aria-disabled","aria-selected","aria-controls","onClick","onKeydown"],q=["tabindex","aria-label"],J=["id","aria-labelledby","data-pc-index","data-p-active"];function M(t,e,n,a,i,r){var m=D("ripple");return d(),p("div",l({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"tabview"}),[b("div",l({class:t.cx("navContainer")},t.ptm("navContainer")),[t.scrollable&&!i.isPrevButtonDisabled?f((d(),p("button",l({key:0,ref:"prevBtn",type:"button",class:t.cx("previousButton"),tabindex:t.tabindex,"aria-label":r.prevButtonAriaLabel,onClick:e[0]||(e[0]=function(){return r.onPrevButtonClick&&r.onPrevButtonClick.apply(r,arguments)})},u(u({},t.previousButtonProps),t.ptm("previousButton")),{"data-pc-group-section":"navbutton"}),[P(t.$slots,"previcon",{},function(){return[(d(),g(y(t.prevIcon?"span":"ChevronLeftIcon"),l({"aria-hidden":"true",class:t.prevIcon},t.ptm("previousIcon")),null,16,["class"]))]})],16,U)),[[m]]):v("",!0),b("div",l({ref:"content",class:t.cx("navContent"),onScroll:e[1]||(e[1]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)})},t.ptm("navContent")),[b("ul",l({ref:"nav",class:t.cx("nav"),role:"tablist"},t.ptm("nav")),[(d(!0),p(w,null,I(r.tabs,function(o,s){return d(),p("li",l({key:r.getKey(o,s),style:r.getTabProp(o,"headerStyle"),class:t.cx("tab.header",{tab:o,index:s}),role:"presentation"},u(u(u({},r.getTabProp(o,"headerProps")),r.getTabPT(o,"root",s)),r.getTabPT(o,"header",s)),{"data-pc-name":"tabpanel","data-p-highlight":i.d_activeIndex===s,"data-p-disabled":r.getTabProp(o,"disabled"),"data-pc-index":s,"data-p-active":i.d_activeIndex===s}),[f((d(),p("a",l({id:r.getTabHeaderActionId(s),class:t.cx("tab.headerAction"),tabindex:r.getTabProp(o,"disabled")||!r.isTabActive(s)?-1:t.tabindex,role:"tab","aria-disabled":r.getTabProp(o,"disabled"),"aria-selected":r.isTabActive(s),"aria-controls":r.getTabContentId(s),onClick:function(T){return r.onTabClick(T,o,s)},onKeydown:function(T){return r.onTabKeyDown(T,o,s)}},u(u({},r.getTabProp(o,"headerActionProps")),r.getTabPT(o,"headerAction",s))),[o.props&&o.props.header?(d(),p("span",l({key:0,class:t.cx("tab.headerTitle")},r.getTabPT(o,"headerTitle",s)),E(o.props.header),17)):v("",!0),o.children&&o.children.header?(d(),g(y(o.children.header),{key:1})):v("",!0)],16,G)),[[m]])],16,$)}),128)),b("li",l({ref:"inkbar",class:t.cx("inkbar"),role:"presentation","aria-hidden":"true"},t.ptm("inkbar")),null,16)],16)],16),t.scrollable&&!i.isNextButtonDisabled?f((d(),p("button",l({key:1,ref:"nextBtn",type:"button",class:t.cx("nextButton"),tabindex:t.tabindex,"aria-label":r.nextButtonAriaLabel,onClick:e[2]||(e[2]=function(){return r.onNextButtonClick&&r.onNextButtonClick.apply(r,arguments)})},u(u({},t.nextButtonProps),t.ptm("nextButton")),{"data-pc-group-section":"navbutton"}),[P(t.$slots,"nexticon",{},function(){return[(d(),g(y(t.nextIcon?"span":"ChevronRightIcon"),l({"aria-hidden":"true",class:t.nextIcon},t.ptm("nextIcon")),null,16,["class"]))]})],16,q)),[[m]]):v("",!0)],16),b("div",l({class:t.cx("panelContainer")},t.ptm("panelContainer")),[(d(!0),p(w,null,I(r.tabs,function(o,s){return d(),p(w,{key:r.getKey(o,s)},[!t.lazy||r.isTabActive(s)?f((d(),p("div",l({key:0,id:r.getTabContentId(s),style:r.getTabProp(o,"contentStyle"),class:t.cx("tab.content",{tab:o}),role:"tabpanel","aria-labelledby":r.getTabHeaderActionId(s)},u(u(u({},r.getTabProp(o,"contentProps")),r.getTabPT(o,"root",s)),r.getTabPT(o,"content",s)),{"data-pc-name":"tabpanel","data-pc-index":s,"data-p-active":i.d_activeIndex===s}),[(d(),g(y(o)))],16,J)),[[L,t.lazy?!0:r.isTabActive(s)]]):v("",!0)],64)}),128))],16)],16)}F.render=M;var Q={},X={name:"BaseTabPanel",extends:k,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Q},Y={name:"TabPanel",extends:X};function Z(t,e,n,a,i,r){return P(t.$slots,"default")}Y.render=Z;export{F as a,Y as s};

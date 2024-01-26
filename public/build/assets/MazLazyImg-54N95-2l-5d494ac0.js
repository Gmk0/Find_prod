import{b3 as A,d as b,E as m,H as y,u as g,o as d,c as h,F as I,l as f,b as C,aj as O,h as L,f as E,r as z,n as P,ac as w,ak as B,al as u}from"./app-f175eda0.js";var S=Object.defineProperty,H=(a,e,s)=>e in a?S(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,n=(a,e,s)=>(H(a,typeof e!="symbol"?e+"":e,s),s);const _="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",k={baseClass:"m-lazy-img",loadedClass:"m-lazy-loaded",loadingClass:"m-lazy-loading",errorClass:"m-lazy-error",noPhotoClass:"m-lazy-no-photo",noPhoto:!1,observerOnce:!0,loadOnce:!1,noUseErrorPhoto:!1,observerOptions:{threshold:.1}};class M{constructor(e={}){n(this,"observers",[]),n(this,"defaultOptions",k),n(this,"options"),n(this,"onImgLoadedCallback"),n(this,"onImgErrorCallback"),n(this,"hasImgLoaded",!1),this.options=this.buildOptions(e),this.onImgLoadedCallback=this.imageIsLoaded.bind(this),this.onImgErrorCallback=this.imageHasError.bind(this)}async loadErrorPhoto(){const{default:e}=await u(()=>import("./no-photography-wUW_pcrD-1565c7ac.js"),[]);return e}buildOptions(e){return{...this.defaultOptions,...e,observerOptions:{...this.defaultOptions.observerOptions,...e.observerOptions}}}removeClass(e,s){e.classList.remove(s)}addClass(e,s){e.classList.add(s)}removeAllStateClasses(e){this.removeClass(e,this.options.loadedClass),this.removeClass(e,this.options.loadingClass),this.removeClass(e,this.options.errorClass),this.removeClass(e,this.options.noPhotoClass)}setBaseClass(e){this.addClass(e,this.options.baseClass)}imageIsLoading(e){var s,t;this.addClass(e,this.options.loadingClass),(t=(s=this.options).onLoading)==null||t.call(s,e)}imageHasNoPhoto(e){this.removeClass(e,this.options.loadingClass),this.addClass(e,this.options.noPhotoClass),this.setDefaultPhoto(e)}imageIsLoaded(e){var s,t;this.hasImgLoaded=!0,this.removeClass(e,this.options.loadingClass),this.addClass(e,this.options.loadedClass),(t=(s=this.options).onLoaded)==null||t.call(s,e)}imageHasError(e,s){var t,o;console.warn("[maz-ui][MazLazyImg] Error while loading image",s),this.removeClass(e,this.options.loadingClass),this.addClass(e,this.options.errorClass),(o=(t=this.options).onError)==null||o.call(t,e),this.setDefaultPhoto(e)}getImageUrl(e,s){const t=this.getImgElement(e).getAttribute("data-lazy-src");if(t)return t;s.value;const o=typeof s.value=="object"?s.value.src:s.value;return o||console.warn("[maz-ui][MazLazyImg] src url is not defined"),o}async setPictureSourceUrls(e){const s=e.querySelectorAll("source");if(s.length>0)for await(const t of s){const o=t.getAttribute("data-lazy-srcset");o?t.srcset=o:console.warn('[maz-ui][MazLazyImg] the "[data-lazy-srcset]" attribute is not provided on "<source />"')}else console.warn('[maz-ui][MazLazyImg] No "<source />" elements provided into the "<picture />" element'),this.imageHasError(e)}hasBgImgMode(e){return e.arg==="bg-image"}isPictureElement(e){return e instanceof HTMLPictureElement}getImgElement(e){return this.isPictureElement(e)?e.querySelector("img"):e}async setDefaultPhoto(e){if(this.options.noUseErrorPhoto)return;const s=this.options.errorPhoto??await this.loadErrorPhoto(),t=e.querySelectorAll("source");if(t.length>0)for await(const o of t)o.srcset=s;else this.setImgSrc(e,s)}addEventListenerToImg(e){const s=this.getImgElement(e);s.addEventListener("load",()=>this.onImgLoadedCallback(e),{once:!0}),s.addEventListener("error",t=>this.onImgErrorCallback(e,t),{once:!0})}async loadImage(e,s){if(this.imageIsLoading(e),this.isPictureElement(e))this.addEventListenerToImg(e),await this.setPictureSourceUrls(e);else{const t=this.getImageUrl(e,s);if(!t)return this.imageHasError(e);this.hasBgImgMode(s)?(e.style.backgroundImage=`url('${t}')`,this.imageIsLoaded(e)):(this.addEventListenerToImg(e),this.setImgSrc(e,t))}}setImgSrc(e,s){const t=this.getImgElement(e);t.src=s}handleIntersectionObserver(e,s,t,o){var r,l;this.observers.push(o);for(const i of t)if(i.isIntersecting){if((l=(r=this.options).onIntersecting)==null||l.call(r,i.target),this.options.observerOnce&&o.unobserve(e),this.options.loadOnce&&this.hasImgLoaded)return;this.loadImage(e,s)}}createObserver(e,s){const t=(r,l)=>{this.handleIntersectionObserver(e,s,r,l)},o=this.options.observerOptions;new IntersectionObserver(t,o).observe(e)}async imageHandler(e,s,t){if(t==="update")for await(const o of this.observers)o.unobserve(e);window.IntersectionObserver?this.createObserver(e,s):this.loadImage(e,s)}async bindUpdateHandler(e,s,t){if(this.options.noPhoto)return this.imageHasNoPhoto(e);await this.imageHandler(e,s,t)}async add(e,s){if(this.hasBgImgMode(s)&&this.isPictureElement(e))throw new Error(`[MazLazyImg] You can't use the "bg-image" mode with "<picture />" element`);setTimeout(()=>this.setBaseClass(e),0),e.getAttribute("src")||this.setImgSrc(e,_),await this.bindUpdateHandler(e,s,"bind")}async update(e,s){s.value!==s.oldValue&&(this.hasImgLoaded=!1,this.removeAllStateClasses(e),await this.bindUpdateHandler(e,s,"update"))}remove(e,s){this.hasImgLoaded=!1,this.hasBgImgMode(s)&&(e.style.backgroundImage=""),this.removeAllStateClasses(e);for(const t of this.observers)t.unobserve(e);this.observers=[]}}let c;const j={created(a,e){const s=typeof e.value=="object"?e.value:{};c=new M(s),c.add(a,e)},updated(a,e){c.update(a,e)},unmounted(a,e){c.remove(a,e)}},U=["data-lazy-srcset","media"],D=["alt"],N={key:0,class:"m-lazy-img-component-loader"},T=b({inheritAttrs:!1,__name:"MazLazyImg",props:{style:{type:[String,Array,Object],default:void 0},class:{type:[String,Array,Object],default:void 0},image:{type:[String,Object],default:void 0},src:{type:[String,Object],default:void 0},alt:{type:String,default:void 0},noPhoto:{type:Boolean,default:!1},noLoader:{type:Boolean,default:!1},noObserverOnce:{type:Boolean,default:!1},loadOnce:{type:Boolean,default:!1},imageHeightFull:{type:Boolean,default:!1},observerOptions:{type:Object,default:null}},emits:["intersecting","loading","loaded","error"],setup(a){const e=B(()=>u(()=>import("./MazSpinner-XIz7dcXv-093a303b.js"),["assets/MazSpinner-XIz7dcXv-093a303b.js","assets/app-f175eda0.js","assets/app-6ff002f4.css","assets/MazSpinner-lJlSCSDC-3735f199.css"])),s=a,t=m(()=>s.image||s.src),o=m(()=>{var r;return typeof t.value=="string"?[{srcset:t.value}]:(r=t.value)==null?void 0:r.sources});return(r,l)=>y((d(),h("picture",{class:P(["m-lazy-img-component",[{"-use-loader":!a.noLoader,"--height-full":a.imageHeightFull},s.class]]),style:w(a.style)},[(d(!0),h(I,null,f(o.value,({srcset:i,media:p},v)=>(d(),h("source",{key:v,"data-lazy-srcset":i,media:p},null,8,U))),128)),C("img",O(r.$attrs,{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",alt:a.alt}),null,16,D),a.noLoader?L("v-if",!0):(d(),h("div",N,[E(g(e),{size:"2em"})])),z(r.$slots,"default",{},void 0,!0)],6)),[[g(j),{noPhoto:a.noPhoto,observerOnce:!a.noObserverOnce,loadOnce:a.loadOnce,onIntersecting:i=>r.$emit("intersecting",i),onLoading:i=>r.$emit("loading",i),onLoaded:i=>r.$emit("loaded",i),onError:i=>r.$emit("error",i),observerOptions:a.observerOptions}]])}}),R=A(T,[["__scopeId","data-v-e5a5e832"]]);export{R as default};

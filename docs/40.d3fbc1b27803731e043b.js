(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{UCMy:function(e,n,t){"use strict";t.r(n),t.d(n,"IonLoading",function(){return c}),t.d(n,"IonLoadingController",function(){return p});var o=t("cBjU"),i=t("euO/"),r=t("MdJQ");function a(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.3),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function s(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.3,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function l(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.5),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function d(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.5,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}var c=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.dismissOnPageChange=!1,this.enableBackdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.componentWillLoad=function(){this.spinner||(this.spinner=this.config.get("loadingSpinner","ios"===this.mode?"lines":"crescent"))},e.prototype.componentDidLoad=function(){this.ionLoadingDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionLoadingDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(null,i.e)},e.prototype.present=function(){return e=this,void 0,t=function(){var e=this;return function(e,n){var t,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(e,a)}catch(e){r=[6,e],o=0}finally{t=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(n){switch(n.label){case 0:return[4,Object(i.i)(this,"loadingEnter",a,l,void 0)];case 1:return n.sent(),this.duration&&(this.durationTimeout=setTimeout(function(){return e.dismiss()},this.duration+10)),[2]}})},new((n=void 0)||(n=Promise))(function(o,i){function r(e){try{s(t.next(e))}catch(e){i(e)}}function a(e){try{s(t.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n(function(n){n(e.value)}).then(r,a)}s((t=t.apply(e,[])).next())});var e,n,t},e.prototype.dismiss=function(e,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(i.f)(this,e,n,"loadingLeave",s,d)},e.prototype.onDidDismiss=function(e){return Object(i.g)(this.el,"ionLoadingDidDismiss",e)},e.prototype.onWillDismiss=function(e){return Object(i.g)(this.el,"ionLoadingWillDismiss",e)},e.prototype.hostData=function(){var e=this.translucent?Object(r.a)(this.mode,"loading-translucent"):{};return{style:{zIndex:2e4+this.overlayId},class:Object.assign({},Object(r.a)(this.mode,"loading"),e,Object(r.d)(this.cssClass))}},e.prototype.render=function(){return[Object(o.b)("ion-backdrop",{visible:this.showBackdrop,tappable:!1}),Object(o.b)("div",{class:"loading-wrapper",role:"dialog"},"hide"!==this.spinner&&Object(o.b)("div",{class:"loading-spinner"},Object(o.b)("ion-spinner",{name:this.spinner})),this.content&&Object(o.b)("div",{class:"loading-content"},this.content))]},Object.defineProperty(e,"is",{get:function(){return"ion-loading"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},config:{context:"config"},content:{type:String,attr:"content"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},dismissOnPageChange:{type:Boolean,attr:"dismiss-on-page-change"},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},spinner:{type:String,attr:"spinner",mutable:!0},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionLoadingDidUnload",method:"ionLoadingDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidLoad",method:"ionLoadingDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-loading{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;position:fixed;z-index:1000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-touch-action:none;touch-action:none;contain:strict}ion-loading-controller{display:none}.loading-wrapper{z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0}.loading-md{font-family:var(--ion-font-family,inherit);font-size:14px}.loading-md .loading-wrapper{border-radius:2px;padding:24px;max-width:280px;max-height:90%;color:var(--ion-text-color-step-150,#262626);background:var(--ion-background-color-step-50,#f2f2f2);-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}.loading-md .loading-spinner+.loading-content{margin-left:16px}.loading-md .spinner-lines-md line,.loading-md .spinner-lines-small-md line{stroke:var(--ion-color-primary,#3880ff)}.loading-md .spinner-bubbles circle,.loading-md .spinner-circles circle{fill:var(--ion-color-primary,#3880ff)}.loading-md .spinner-crescent circle{stroke:var(--ion-color-primary,#3880ff)}.loading-md .spinner-dots circle{fill:var(--ion-color-primary,#3880ff)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),p=function(){function e(){this.loadings=new Map}return e.prototype.loadingWillPresent=function(e){this.loadings.set(e.target.overlayId,e.target)},e.prototype.loadingWillDismiss=function(e){this.loadings.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){Object(i.d)(this.loadings)},e.prototype.create=function(e){return Object(i.a)(this.doc.createElement("ion-loading"),e)},e.prototype.dismiss=function(e,n,t){return void 0===t&&(t=-1),Object(i.b)(e,n,this.loadings,t)},e.prototype.getTop=function(){return Object(i.c)(this.loadings)},Object.defineProperty(e,"is",{get:function(){return"ion-loading-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionLoadingWillPresent",method:"loadingWillPresent"},{name:"body:ionLoadingWillDismiss",method:"loadingWillDismiss"},{name:"body:ionLoadingDidUnload",method:"loadingWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),e}()}}]);
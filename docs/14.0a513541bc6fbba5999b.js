(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{sKpR:function(e,t,n){"use strict";n.r(t),n.d(t,"IonApp",function(){return u}),n.d(t,"IonFooter",function(){return s}),n.d(t,"IonHeader",function(){return d}),n.d(t,"IonTapClick",function(){return p});var o=n("cBjU"),r=n("jyuE"),i=n("MdJQ"),a=n("tTLQ"),c=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,c)}l((o=o.apply(e,t||[])).next())})},l=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(){function e(){}return e.prototype.componentDidLoad=function(){(function(e,t){c(this,void 0,void 0,function(){return l(this,function(o){switch(o.label){case 0:return t.getBoolean("inputShims",Object(r.c)(e))?[4,n.e(84).then(n.bind(null,"m22C"))]:[3,2];case 1:o.sent().startInputShims(e.document,t),o.label=2;case 2:return[2]}})})})(this.win,this.config),function(e,t,o){c(this,void 0,void 0,function(){return l(this,function(i){switch(i.label){case 0:return t.getBoolean("isDevice",Object(r.a)(e))?[4,n.e(85).then(n.bind(null,"A1Zs"))]:[3,2];case 1:i.sent().startStatusTap(e,o),i.label=2;case 2:return[2]}})})}(this.win,this.config,this.queue)},e.prototype.hostData=function(){var e=Object(r.b)(this.win);return{class:{"statusbar-padding":this.config.getBoolean("statusbarPadding",e)}}},e.prototype.render=function(){return[Object(o.b)("ion-tap-click",null),Object(o.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-app"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".ion-page,ion-app,ion-nav,ion-router-outlet,ion-tab,ion-tabs{left:0;right:0;top:0;bottom:0;position:absolute;z-index:0;overflow:hidden;contain:layout size style}.ion-page,ion-app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.hide-page{opacity:0}[hidden]{display:none!important}ion-action-sheet-controller,ion-alert-controller,ion-animation-controller,ion-loading-controller,ion-menu-controller,ion-modal-controller,ion-nav-controller,ion-picker-controller,ion-route,ion-route-redirect,ion-router,ion-tap-click,ion-toast-controller{display:none}"},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){this.translucent=!1}return e.prototype.hostData=function(){var e=Object(i.a)(this.mode,"footer"),t=this.translucent?Object(i.a)(this.mode,"footer-translucent"):null;return{class:Object.assign({},e,t)}},Object.defineProperty(e,"is",{get:function(){return"ion-footer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-footer{position:relative;z-index:10;display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:100%}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--border-color:transparent;--opacity:0.8;--backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),d=function(){function e(){this.translucent=!1}return e.prototype.hostData=function(){var e=Object(i.a)(this.mode,"header"),t=this.translucent?Object(i.a)(this.mode,"header-translucent"):null;return{class:Object.assign({},e,t)}},Object.defineProperty(e,"is",{get:function(){return"ion-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-header{position:relative;z-index:10;display:block;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;width:100%}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--border-color:transparent;--opacity:0.8;--backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),p=function(){function e(){this.lastTouch=10*-m,this.lastActivated=0,this.cancelled=!1,this.clearDefers=new WeakMap}return e.prototype.onBodyClick=function(e){this.cancelled&&(e.preventDefault(),e.stopPropagation())},e.prototype.onTouchStart=function(e){this.lastTouch=Object(a.a)(e),this.pointerDown(e)},e.prototype.onTouchEnd=function(e){this.lastTouch=Object(a.a)(e),this.pointerUp(e)},e.prototype.onMouseDown=function(e){var t=Object(a.a)(e)-m;this.lastTouch<t&&this.pointerDown(e)},e.prototype.onMouseUp=function(e){var t=Object(a.a)(e)-m;this.lastTouch<t&&this.pointerUp(e)},e.prototype.cancelActive=function(){clearTimeout(this.activeDefer),this.activatableEle&&(this.removeActivated(!1),this.activatableEle=void 0),this.cancelled=!0},e.prototype.pointerDown=function(e){this.activatableEle||(this.cancelled=!1,this.setActivatedElement(function(e){return e.closest(":not([tappable]) > a, :not([tappable]) > button, [tappable]")}(e.target),e))},e.prototype.pointerUp=function(e){this.setActivatedElement(void 0,e),this.cancelled&&e.cancelable&&e.preventDefault()},e.prototype.setActivatedElement=function(e,t){var n=this,o=this.activatableEle;if(!e||e!==o){clearTimeout(this.activeDefer),this.activeDefer=void 0;var r=Object(a.b)(t),i=r.x,c=r.y;if(o){if(this.clearDefers.has(o))throw new Error("internal error");o.classList.contains(f)||this.addActivated(o,i,c),this.removeActivated(!0)}if(e){var l=this.clearDefers.get(e);l&&(clearTimeout(l),this.clearDefers.delete(e)),e.classList.remove(f),this.activeDefer=setTimeout(function(){n.addActivated(e,i,c),n.activeDefer=void 0},b)}this.activatableEle=e}},e.prototype.addActivated=function(e,t,n){this.lastActivated=Date.now(),e.classList.add(f);var o=new CustomEvent("ionActivated",{bubbles:!1,detail:{x:t,y:n}});e.dispatchEvent(o)},e.prototype.removeActivated=function(e){var t=this,n=this.activatableEle;if(n){var o=h-Date.now()+this.lastActivated;if(e&&o>0){var r=setTimeout(function(){n.classList.remove(f),t.clearDefers.delete(n)},h);this.clearDefers.set(n,r)}else n.classList.remove(f)}},Object.defineProperty(e,"is",{get:function(){return"ion-tap-click"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},enableListener:{context:"enableListener"},isServer:{context:"isServer"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:click",method:"onBodyClick",capture:!0},{name:"document:touchstart",method:"onTouchStart",capture:!0,passive:!0},{name:"document:touchcancel",method:"onTouchEnd",capture:!0},{name:"document:touchend",method:"onTouchEnd",capture:!0},{name:"document:mousedown",method:"onMouseDown",capture:!0,passive:!0},{name:"document:mouseup",method:"onMouseUp",capture:!0},{name:"body:ionScrollStart",method:"cancelActive"},{name:"body:ionGestureCaptured",method:"cancelActive"}]},enumerable:!0,configurable:!0}),e}(),f="activated",b=200,h=200,m=2500}}]);
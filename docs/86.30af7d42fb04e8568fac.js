(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{aLs3:function(e,n,i){"use strict";i.r(n),i.d(n,"mdTransitionAnimation",function(){return t});var o="translateY",a="40px",r="0px";function t(e,n,i){var t=i.enteringEl,s=i.leavingEl,d=c(t),u=new e;u.addElement(d).beforeRemoveClass("hide-page");var p="back"===i.direction;if(t){p?u.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):u.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo(o,a,r,!0).fromTo("opacity",.01,1,!0);var l=d.querySelector("ion-toolbar");if(l){var b=new e;b.addElement(l),u.add(b)}}if(s&&p){u.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var f=new e;f.addElement(c(s)).fromTo(o,r,a).fromTo("opacity",1,0),u.add(f)}return Promise.resolve(u)}function c(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}}}]);
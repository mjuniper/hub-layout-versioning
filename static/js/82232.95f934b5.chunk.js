/*! For license information please see 82232.95f934b5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[82232],{82232:function(t,n,e){e.r(n),e.d(n,{calcite_chip:function(){return y}});var r=e(74165),i=e(15861),a=e(15671),o=e(43144),c=e(72585),l=e(40566),s=e(88814),u=e(95640),d=(e(84261),"title"),p="close",f="image-container",h="chip-icon",m="close-icon",v="Close",b="image",g="x",y=function(){function t(n){var e=this;(0,a.Z)(this,t),(0,c.r)(this,n),this.calciteChipDismiss=(0,c.c)(this,"calciteChipDismiss",6),this.appearance="solid",this.color="grey",this.dismissible=!1,this.closable=!1,this.dismissLabel=v,this.iconFlipRtl=!1,this.scale="m",this.closed=!1,this.closeClickHandler=function(t){t.preventDefault(),e.calciteChipDismiss.emit(e.el),e.closed=!0},this.guid=(0,s.g)()}return(0,o.Z)(t,[{key:"handleDismissible",value:function(t){this.closable=t}},{key:"handleClosable",value:function(t){this.dismissible=t}},{key:"connectedCallback",value:function(){(0,u.c)(this),this.dismissible&&this.handleDismissible(this.dismissible),this.closable&&this.handleClosable(this.closable)}},{key:"disconnectedCallback",value:function(){(0,u.d)(this)}},{key:"setFocus",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(n=this.closeButton)||void 0===n||n.focus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"renderChipImage",value:function(){var t=this.el;return(0,l.b)(t,b)?(0,c.h)("div",{class:f,key:"image"},(0,c.h)("slot",{name:b})):null}},{key:"render",value:function(){var t=this,n=(0,c.h)("calcite-icon",{class:h,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"}),e=(0,c.h)("button",{"aria-describedby":this.guid,"aria-label":this.dismissLabel,class:p,onClick:this.closeClickHandler,ref:function(n){return t.closeButton=n}},(0,c.h)("calcite-icon",{class:m,icon:g,scale:"s"}));return(0,c.h)("div",{class:"container"},this.renderChipImage(),this.icon?n:null,(0,c.h)("span",{class:d,id:this.guid},(0,c.h)("slot",null)),this.closable?e:null)}},{key:"el",get:function(){return(0,c.g)(this)}}],[{key:"watchers",get:function(){return{dismissible:["handleDismissible"],closable:["handleClosable"]}}}]),t}();y.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) .image-container{block-size:1.5rem;inline-size:1.5rem;-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .image-container{block-size:2rem;inline-size:2rem;-webkit-padding-start:0.25rem;padding-inline-start:0.25rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host span{padding-block:0;padding-inline:var(--calcite-chip-spacing-unit-l)}:host([closable]) span{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([closable])) span{padding-block:0;padding-inline:var(--calcite-chip-spacing-unit-l)}:host button{margin:0px;display:inline-flex;max-block-size:100%;min-block-size:100%;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0;padding-block:0;padding-inline:var(--calcite-chip-spacing-unit-s);color:inherit;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}:host button:hover{background-color:var(--calcite-chip-transparent-hover)}:host button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host button:active{background-color:var(--calcite-chip-transparent-press)}.image-container{display:inline-flex;overflow:hidden;border-radius:50%}:host slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:var(--calcite-chip-spacing-unit-l);margin-inline-start:var(--calcite-chip-spacing-unit-l);border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0}:host([color=blue]){border-color:transparent;background-color:var(--calcite-ui-info);color:var(--calcite-ui-text-inverse)}:host([color=red]){border-color:transparent;background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([color=yellow]){border-color:transparent;background-color:var(--calcite-ui-warning);color:#151515}:host([color=green]){border-color:transparent;background-color:var(--calcite-ui-success);color:#151515}:host([color=grey]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([color=grey]) button,:host([color=grey]) .close-icon{color:var(--calcite-ui-text-3)}:host([color=grey]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([appearance=clear]),:host([appearance=transparent]){background-color:transparent;color:var(--calcite-ui-text-1)}:host([color=blue][appearance=clear]),:host([color=blue][appearance=transparent]){border-color:var(--calcite-ui-info)}:host([color=blue][appearance=clear]) .chip-icon,:host([color=blue][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-info))}:host([color=red][appearance=clear]),:host([color=red][appearance=transparent]){border-color:var(--calcite-ui-danger)}:host([color=red][appearance=clear]) .chip-icon,:host([color=red][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-danger))}:host([color=yellow][appearance=clear]),:host([color=yellow][appearance=transparent]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .chip-icon,:host([color=yellow][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-warning))}:host([color=green][appearance=clear]),:host([color=green][appearance=transparent]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .chip-icon,:host([color=green][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-success))}:host([color=grey][appearance=clear]),:host([color=grey][appearance=transparent]){border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .chip-icon,:host([color=grey][appearance=transparent]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-ui-text-3))}:host([closed]){display:none}"},95640:function(t,n,e){e.d(n,{c:function(){return u},d:function(){return d}});var r,i=e(29439),a=e(37762),o=e(72585),c=e(91864),l=new Set,s={childList:!0};function u(t){r||(r=(0,c.c)("mutation",p)),r.observe(t.el,s)}function d(t){l.delete(t.el),p(r.takeRecords()),r.disconnect();var n,e=(0,a.Z)(l.entries());try{for(e.s();!(n=e.n()).done;){var o=(0,i.Z)(n.value,1)[0];r.observe(o,s)}}catch(c){e.e(c)}finally{e.f()}}function p(t){t.forEach((function(t){var n=t.target;(0,o.f)(n)}))}},40566:function(t,n,e){e.d(n,{a:function(){return d},b:function(){return Z},c:function(){return v},d:function(){return y},e:function(){return S},f:function(){return w},g:function(){return p},h:function(){return u},i:function(){return E},j:function(){return C},k:function(){return f},l:function(){return l},m:function(){return k},n:function(){return s},q:function(){return m},s:function(){return A},t:function(){return _}});var r=e(74165),i=e(93433),a=e(15861),o=e(84261),c=e(88814);function l(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,c.g)()):""}function s(t){return Array.isArray(t)?t:Array.from(t)}function u(t){var n=v(t,".".concat(o.C.darkTheme,", .").concat(o.C.lightTheme));return(null===n||void 0===n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function d(t){var n=v(t,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function p(t,n,e){var r="[".concat(n,"]"),i=t.closest(r);return i?i.getAttribute(n):e}function f(t){return t.getRootNode()}function h(t){return t.host||null}function m(t,n){var e=n.selector,r=n.id;return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var i=f(n),a=r?"getElementById"in i?i.getElementById(r):null:e?i.querySelector(e):null,o=h(i);return a||(o?t(o):null)}(t)}function v(t,n){return function t(e){return e?e.closest(n)||t(h(f(e))):null}(t)}function b(t,n){return g(t,n)}function g(t,n){if(t){var e=n(t);if(void 0!==e)return e;var r=t.parentNode;return g(r instanceof ShadowRoot?r.host:r,n)}}function y(t,n){return!!b(n,(function(n){return n===t||void 0}))}function k(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",k(n)?n.setFocus():n.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var z=":not([slot])";function Z(t,n,e){n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);var r=n?Array.isArray(n)?n.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(n,'"]'):z;return(null===e||void 0===e?void 0:e.all)?function(t,n,e){var r=n===z?D(t,z):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((function(n){return n.parentElement===t})),r=(null===e||void 0===e?void 0:e.matches)?r.filter((function(t){return null===t||void 0===t?void 0:t.matches(e.matches)})):r;var a=null===e||void 0===e?void 0:e.selector;return a?r.map((function(t){return Array.from(t.querySelectorAll(a))})).reduce((function(t,n){return[].concat((0,i.Z)(t),(0,i.Z)(n))}),[]).filter((function(t){return!!t})):r}(t,r,e):function(t,n,e){var r=n===z?D(t,z)[0]||null:t.querySelector(n);r=e&&!1===e.direct||(null===r||void 0===r?void 0:r.parentElement)===t?r:null,r=(null===e||void 0===e?void 0:e.matches)?(null===r||void 0===r?void 0:r.matches(e.matches))?r:null:r;var i=null===e||void 0===e?void 0:e.selector;return i?null===r||void 0===r?void 0:r.querySelector(i):r}(t,r,e)}function D(t,n){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(n)})):[]}function C(t,n){return Array.from(t.children).filter((function(t){return t.matches(n)}))}function A(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}function S(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function _(t){return Boolean(t).toString()}function E(t){return!(!t.isPrimary||0!==t.button)}},88814:function(t,n,e){e.d(n,{g:function(){return r}});var r=function(){return[2,1,1,1,3].map((function(t){for(var n="",e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}},91864:function(t,n,e){e.d(n,{c:function(){return s}});var r=e(15671),i=e(43144),a=e(11752),o=e(61120),c=e(60136),l=e(92572);function s(t,n,e){var s=function(t){var n=function(t){(0,c.Z)(e,t);var n=(0,l.Z)(e);function e(t){var i;return(0,r.Z)(this,e),(i=n.call(this,t)).observedEntry=[],i.callback=t,i}return(0,i.Z)(e,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,a.Z)((0,o.Z)(e.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,r=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,a.Z)((0,o.Z)(e.prototype),"takeRecords",this).call(this),this),this.disconnect(),r.forEach((function(t){return n.observe(t.target,t.options)}))}}]),e}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new s(n,e)}},37762:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(40181);function i(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,r.Z)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw o}}}}},11752:function(t,n,e){e.d(n,{Z:function(){return a}});var r=e(61120);function i(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=(0,r.Z)(t)););return t}function a(){return a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,n,e){var r=i(t,n);if(r){var a=Object.getOwnPropertyDescriptor(r,n);return a.get?a.get.call(arguments.length<3?t:e):a.value}},a.apply(this,arguments)}}}]);
//# sourceMappingURL=82232.95f934b5.chunk.js.map
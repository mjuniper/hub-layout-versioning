/*! For license information please see 94934.97cc8e8c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[94934],{94934:function(t,n,r){r.r(n),r.d(n,{calcite_shell_center_row:function(){return f}});var e=r(15671),i=r(43144),o=r(72585),a=r(40566),c=r(95640),u=(r(84261),"action-bar-container"),l="content",s="action-bar",f=function(){function t(n){(0,e.Z)(this,t),(0,o.r)(this,n),this.detached=!1,this.heightScale="s",this.position="end"}return(0,i.Z)(t,[{key:"connectedCallback",value:function(){(0,c.c)(this)}},{key:"disconnectedCallback",value:function(){(0,c.d)(this)}},{key:"render",value:function(){var t=this.el,n=(0,o.h)("div",{class:l},(0,o.h)("slot",null)),r=(0,a.b)(t,s),e=[r?(0,o.h)("div",{class:u,key:"action-bar"},(0,o.h)("slot",{name:s})):null,n];return"end"===(null===r||void 0===r?void 0:r.position)&&e.reverse(),(0,o.h)(o.F,null,e)}},{key:"el",get:function(){return(0,o.g)(this)}}]),t}();f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;flex:1 1 auto;overflow:hidden;background-color:transparent}.content{margin:0px;display:flex;block-size:100%;inline-size:100%;overflow:hidden;flex:1 0 0}.action-bar-container{display:flex}:host([detached]){margin-inline:0.5rem;margin-block:0.5rem 1.5rem}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}:host([detached]){-webkit-animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;border-width:0px;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([position=end]){align-self:flex-end}:host([position=start]){align-self:flex-start}:host([height-scale=s]){block-size:33.333333%}:host([height-scale=m]){block-size:70%}:host([height-scale=l]){block-size:100%}:host([height-scale=l][detached]){block-size:calc(100% - 2rem)}::slotted(calcite-panel){block-size:100%;inline-size:100%}::slotted(calcite-action-bar),::slotted(calcite-action-bar[position=end]){-webkit-border-end:1px solid;border-inline-end:1px solid;border-color:var(--calcite-ui-border-3)}"},95640:function(t,n,r){r.d(n,{c:function(){return s},d:function(){return f}});var e,i=r(29439),o=r(37762),a=r(72585),c=r(91864),u=new Set,l={childList:!0};function s(t){e||(e=(0,c.c)("mutation",d)),e.observe(t.el,l)}function f(t){u.delete(t.el),d(e.takeRecords()),e.disconnect();var n,r=(0,o.Z)(u.entries());try{for(r.s();!(n=r.n()).done;){var a=(0,i.Z)(n.value,1)[0];e.observe(a,l)}}catch(c){r.e(c)}finally{r.f()}}function d(t){t.forEach((function(t){var n=t.target;(0,a.f)(n)}))}},40566:function(t,n,r){r.d(n,{a:function(){return f},b:function(){return A},c:function(){return p},d:function(){return g},e:function(){return z},f:function(){return k},g:function(){return d},h:function(){return s},i:function(){return R},j:function(){return S},k:function(){return m},l:function(){return u},m:function(){return w},n:function(){return l},q:function(){return h},s:function(){return _},t:function(){return E}});var e=r(74165),i=r(93433),o=r(15861),a=r(84261),c=r(88814);function u(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,c.g)()):""}function l(t){return Array.isArray(t)?t:Array.from(t)}function s(t){var n=p(t,".".concat(a.C.darkTheme,", .").concat(a.C.lightTheme));return(null===n||void 0===n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function f(t){var n=p(t,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function d(t,n,r){var e="[".concat(n,"]"),i=t.closest(e);return i?i.getAttribute(n):r}function m(t){return t.getRootNode()}function v(t){return t.host||null}function h(t,n){var r=n.selector,e=n.id;return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var i=m(n),o=e?"getElementById"in i?i.getElementById(e):null:r?i.querySelector(r):null,a=v(i);return o||(a?t(a):null)}(t)}function p(t,n){return function t(r){return r?r.closest(n)||t(v(m(r))):null}(t)}function y(t,n){return b(t,n)}function b(t,n){if(t){var r=n(t);if(void 0!==r)return r;var e=t.parentNode;return b(e instanceof ShadowRoot?e.host:e,n)}}function g(t,n){return!!y(n,(function(n){return n===t||void 0}))}function w(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function k(t){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)((0,e.Z)().mark((function t(n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",w(n)?n.setFocus():n.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Z=":not([slot])";function A(t,n,r){n&&!Array.isArray(n)&&"string"!==typeof n&&(r=n,n=null);var e=n?Array.isArray(n)?n.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(n,'"]'):Z;return(null===r||void 0===r?void 0:r.all)?function(t,n,r){var e=n===Z?D(t,Z):Array.from(t.querySelectorAll(n));e=r&&!1===r.direct?e:e.filter((function(n){return n.parentElement===t})),e=(null===r||void 0===r?void 0:r.matches)?e.filter((function(t){return null===t||void 0===t?void 0:t.matches(r.matches)})):e;var o=null===r||void 0===r?void 0:r.selector;return o?e.map((function(t){return Array.from(t.querySelectorAll(o))})).reduce((function(t,n){return[].concat((0,i.Z)(t),(0,i.Z)(n))}),[]).filter((function(t){return!!t})):e}(t,e,r):function(t,n,r){var e=n===Z?D(t,Z)[0]||null:t.querySelector(n);e=r&&!1===r.direct||(null===e||void 0===e?void 0:e.parentElement)===t?e:null,e=(null===r||void 0===r?void 0:r.matches)?(null===e||void 0===e?void 0:e.matches(r.matches))?e:null:e;var i=null===r||void 0===r?void 0:r.selector;return i?null===e||void 0===e?void 0:e.querySelector(i):e}(t,e,r)}function D(t,n){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(n)})):[]}function S(t,n){return Array.from(t.children).filter((function(t){return t.matches(n)}))}function _(t,n,r){return"string"===typeof n&&""!==n?n:""===n?t[r]:void 0}function z(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function E(t){return Boolean(t).toString()}function R(t){return!(!t.isPrimary||0!==t.button)}},88814:function(t,n,r){r.d(n,{g:function(){return e}});var e=function(){return[2,1,1,1,3].map((function(t){for(var n="",r=0;r<t;r++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}},91864:function(t,n,r){r.d(n,{c:function(){return l}});var e=r(15671),i=r(43144),o=r(11752),a=r(61120),c=r(60136),u=r(92572);function l(t,n,r){var l=function(t){var n=function(t){(0,c.Z)(r,t);var n=(0,u.Z)(r);function r(t){var i;return(0,e.Z)(this,r),(i=n.call(this,t)).observedEntry=[],i.callback=t,i}return(0,i.Z)(r,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,o.Z)((0,a.Z)(r.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,e=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,o.Z)((0,a.Z)(r.prototype),"takeRecords",this).call(this),this),this.disconnect(),e.forEach((function(t){return n.observe(t.target,t.options)}))}}]),r}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new l(n,r)}},37762:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(40181);function i(t,n){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=(0,e.Z)(t))||n&&t&&"number"===typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}},11752:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(61120);function i(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=(0,e.Z)(t)););return t}function o(){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,n,r){var e=i(t,n);if(e){var o=Object.getOwnPropertyDescriptor(e,n);return o.get?o.get.call(arguments.length<3?t:r):o.value}},o.apply(this,arguments)}}}]);
//# sourceMappingURL=94934.97cc8e8c.chunk.js.map
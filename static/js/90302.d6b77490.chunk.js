/*! For license information please see 90302.d6b77490.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[90302],{90302:function(t,n,e){e.r(n),e.d(n,{calcite_action:function(){return w}});var i=e(4942),o=e(74165),r=e(15861),a=e(15671),c=e(43144),l=e(5692),u=e(1118),s=e(57203),d=e(3511),f=(e(45548),"button"),b="button--text-visible",h="button--compact",v="icon-container",m="slot-container",p="slot-container--hidden",g="text-container",y="text-container--visible",k="Loading",x="tooltip",w=function(){function t(n){var e=this;(0,a.Z)(this,t),(0,l.r)(this,n),this.calciteActionClick=(0,l.c)(this,"calciteActionClick",6),this.active=!1,this.appearance="solid",this.compact=!1,this.disabled=!1,this.indicator=!1,this.intlLoading=k,this.loading=!1,this.scale="m",this.textEnabled=!1,this.mutationObserver=(0,u.c)("mutation",(function(){return(0,l.f)(e)})),this.handleTooltipSlotChange=function(t){var n=t.target.assignedElements({flatten:!0}).filter((function(t){return null===t||void 0===t?void 0:t.matches("calcite-tooltip")}))[0];n&&(n.referenceElement=e.buttonEl)},this.calciteActionClickHandler=function(){e.disabled||e.calciteActionClick.emit()}}return(0,c.Z)(t,[{key:"connectedCallback",value:function(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}},{key:"componentDidRender",value:function(){(0,s.u)(this)}},{key:"setFocus",value:function(){var t=(0,r.Z)((0,o.Z)().mark((function t(){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(n=this.buttonEl)||void 0===n||n.focus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"renderTextContainer",value:function(){var t,n=this.text,e=this.textEnabled,o=(t={},(0,i.Z)(t,g,!0),(0,i.Z)(t,y,e),t);return n?(0,l.h)("div",{class:o,key:"text-container"},n):null}},{key:"renderIconContainer",value:function(){var t,n,e=this.loading,o=this.icon,r=this.scale,a=this.el,c=this.intlLoading,u="l"===r?"m":"s",s="l"===r?"l":"m",d=e?(0,l.h)("calcite-loader",{active:!0,inline:!0,label:c,scale:s}):null,f=o?(0,l.h)("calcite-icon",{icon:o,scale:u}):null,b=d||f,h=b||(null===(n=a.children)||void 0===n?void 0:n.length),g=(0,l.h)("div",{class:(t={},(0,i.Z)(t,m,!0),(0,i.Z)(t,p,e),t)},(0,l.h)("slot",null));return h?(0,l.h)("div",{"aria-hidden":"true",class:v,key:"icon-container"},b,g):null}},{key:"render",value:function(){var t,n=this,e=this.compact,o=this.disabled,r=this.loading,a=this.textEnabled,c=this.label,u=this.text,s=c||u,v=(t={},(0,i.Z)(t,f,!0),(0,i.Z)(t,b,a),(0,i.Z)(t,h,e),t);return(0,l.h)(l.H,{onClick:this.calciteActionClickHandler},(0,l.h)("button",{"aria-busy":(0,d.t)(r),"aria-disabled":(0,d.t)(o),"aria-label":s,class:v,disabled:o,ref:function(t){return n.buttonEl=t}},this.renderIconContainer(),this.renderTextContainer()),(0,l.h)("slot",{name:x,onSlotchange:this.handleTooltipSlotChange}))}},{key:"el",get:function(){return(0,l.g)(this)}}]),t}();w.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{-webkit-margin-end:0.75rem;margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{-webkit-margin-end:1rem;margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance=clear]) .button,:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus,:host([active][appearance=transparent]) .button,:host([active][appearance=transparent]) .button:hover,:host([active][appearance=transparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button,:host([appearance=transparent][loading]) .button,:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);-webkit-margin-end:0px;margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button--text-visible .text-container--visible{-webkit-margin-end:1rem;margin-inline-end:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale=s]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale=s]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}'},3511:function(t,n,e){e.d(n,{a:function(){return d},b:function(){return A},c:function(){return m},d:function(){return y},e:function(){return D},f:function(){return x},g:function(){return f},h:function(){return s},i:function(){return _},j:function(){return b},k:function(){return E},l:function(){return l},m:function(){return k},n:function(){return u},q:function(){return v},s:function(){return C},t:function(){return S}});var i=e(74165),o=e(93433),r=e(15861),a=e(45548),c=e(55055);function l(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,c.g)()):""}function u(t){return Array.isArray(t)?t:Array.from(t)}function s(t){var n=m(t,".".concat(a.C.darkTheme,", .").concat(a.C.lightTheme));return(null===n||void 0===n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function d(t){var n=m(t,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function f(t,n,e){var i="[".concat(n,"]"),o=t.closest(i);return o?o.getAttribute(n):e}function b(t){return t.getRootNode()}function h(t){return t.host||null}function v(t,n){var e=n.selector,i=n.id;return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var o=b(n),r=i?"getElementById"in o?o.getElementById(i):null:e?o.querySelector(e):null,a=h(o);return r||(a?t(a):null)}(t)}function m(t,n){return function t(e){return e?e.closest(n)||t(h(b(e))):null}(t)}function p(t,n){return g(t,n)}function g(t,n){if(t){var e=n(t);if(void 0!==e)return e;var i=t.parentNode;return g(i instanceof ShadowRoot?i.host:i,n)}}function y(t,n){return!!p(n,(function(n){return n===t||void 0}))}function k(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function x(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",k(n)?n.setFocus():n.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Z=":not([slot])";function A(t,n,e){n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);var i=n?Array.isArray(n)?n.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(n,'"]'):Z;return(null===e||void 0===e?void 0:e.all)?function(t,n,e){var i=n===Z?z(t,Z):Array.from(t.querySelectorAll(n));i=e&&!1===e.direct?i:i.filter((function(n){return n.parentElement===t})),i=(null===e||void 0===e?void 0:e.matches)?i.filter((function(t){return null===t||void 0===t?void 0:t.matches(e.matches)})):i;var r=null===e||void 0===e?void 0:e.selector;return r?i.map((function(t){return Array.from(t.querySelectorAll(r))})).reduce((function(t,n){return[].concat((0,o.Z)(t),(0,o.Z)(n))}),[]).filter((function(t){return!!t})):i}(t,i,e):function(t,n,e){var i=n===Z?z(t,Z)[0]||null:t.querySelector(n);i=e&&!1===e.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===e||void 0===e?void 0:e.matches)?(null===i||void 0===i?void 0:i.matches(e.matches))?i:null:i;var o=null===e||void 0===e?void 0:e.selector;return o?null===i||void 0===i?void 0:i.querySelector(o):i}(t,i,e)}function z(t,n){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(n)})):[]}function E(t,n){return Array.from(t.children).filter((function(t){return t.matches(n)}))}function C(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}function D(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function S(t){return Boolean(t).toString()}function _(t){return!(!t.isPrimary||0!==t.button)}},55055:function(t,n,e){e.d(n,{g:function(){return i}});var i=function(){return[2,1,1,1,3].map((function(t){for(var n="",e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}},57203:function(t,n,e){function i(){}function o(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"===typeof n?t.el.setAttribute("tabindex",n.call(t)?"0":"-1"):!0===n?t.el.setAttribute("tabindex","0"):!1===n&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}e.d(n,{u:function(){return o}})},1118:function(t,n,e){e.d(n,{c:function(){return u}});var i=e(15671),o=e(43144),r=e(11752),a=e(61120),c=e(60136),l=e(92572);function u(t,n,e){var u=function(t){var n=function(t){(0,c.Z)(e,t);var n=(0,l.Z)(e);function e(t){var o;return(0,i.Z)(this,e),(o=n.call(this,t)).observedEntry=[],o.callback=t,o}return(0,o.Z)(e,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,r.Z)((0,a.Z)(e.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,i=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,r.Z)((0,a.Z)(e.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(t){return n.observe(t.target,t.options)}))}}]),e}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new u(n,e)}},11752:function(t,n,e){e.d(n,{Z:function(){return r}});var i=e(61120);function o(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=(0,i.Z)(t)););return t}function r(){return r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,n,e){var i=o(t,n);if(i){var r=Object.getOwnPropertyDescriptor(i,n);return r.get?r.get.call(arguments.length<3?t:e):r.value}},r.apply(this,arguments)}}}]);
//# sourceMappingURL=90302.d6b77490.chunk.js.map
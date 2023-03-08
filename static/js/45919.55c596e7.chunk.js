/*! For license information please see 45919.55c596e7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[45919],{45919:function(t,n,e){e.r(n),e.d(n,{calcite_block_section:function(){return _}});var i=e(4942),r=e(15671),o=e(43144),a=e(5692),c=e(3511),l=e(55055),u=e(11786),s=(e(45548),"content"),d="invalid",f="toggle",m="toggle--switch",h="toggle--switch__content",g="toggle--switch__text",v="section-header",p="section-header__text",y="status-icon",b="valid",k="Collapse",w="Expand",x={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},_=function(){function t(n){var e=this;(0,r.Z)(this,t),(0,a.r)(this,n),this.calciteBlockSectionToggle=(0,a.c)(this,"calciteBlockSectionToggle",6),this.open=!1,this.toggleDisplay="button",this.guid=(0,l.g)(),this.handleHeaderKeyDown=function(t){(0,u.i)(t.key)&&(e.toggleSection(),t.preventDefault(),t.stopPropagation())},this.toggleSection=function(){e.open=!e.open,e.calciteBlockSectionToggle.emit()}}return(0,o.Z)(t,[{key:"renderStatusIcon",value:function(){var t,n,e=this.status,r=null!==(n=x[e])&&void 0!==n&&n,o=(t={},(0,i.Z)(t,y,!0),(0,i.Z)(t,b,"valid"==e),(0,i.Z)(t,d,"invalid"==e),t);return r?(0,a.h)("calcite-icon",{class:o,icon:r,scale:"s"}):null}},{key:"render",value:function(){var t,n,e=this.el,r=this.intlCollapse,o=this.intlExpand,l=this.open,u=this.text,d=this.toggleDisplay,y=(0,c.a)(e),b=l?x.menuOpen:"rtl"===y?x.menuClosedLeft:x.menuClosedRight,_=l?r||k:o||w,S=this.guid,D="".concat(S,"-region"),A="".concat(S,"-button"),Z="switch"===d?(0,a.h)("div",{"aria-controls":D,"aria-label":_,class:(t={},(0,i.Z)(t,f,!0),(0,i.Z)(t,m,!0),t),id:A,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,title:_},(0,a.h)("div",{class:h},(0,a.h)("span",{class:g},u)),(0,a.h)("calcite-switch",{checked:l,label:_,scale:"s",tabIndex:-1}),this.renderStatusIcon()):(0,a.h)("button",{"aria-controls":D,"aria-label":_,class:(n={},(0,i.Z)(n,v,!0),(0,i.Z)(n,f,!0),n),id:A,name:_,onClick:this.toggleSection},(0,a.h)("calcite-icon",{icon:b,scale:"s"}),(0,a.h)("span",{class:p},u),this.renderStatusIcon());return(0,a.h)(a.H,null,Z,(0,a.h)("section",{"aria-expanded":(0,c.t)(l),"aria-labelledby":A,class:s,hidden:!l,id:D},(0,a.h)("slot",null)))}},{key:"el",get:function(){return(0,a.g)(this)}}]),t}();_.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}.toggle--switch .status-icon{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}"},3511:function(t,n,e){e.d(n,{a:function(){return d},b:function(){return S},c:function(){return v},d:function(){return b},e:function(){return C},f:function(){return w},g:function(){return f},h:function(){return s},i:function(){return E},j:function(){return m},k:function(){return A},l:function(){return l},m:function(){return k},n:function(){return u},q:function(){return g},s:function(){return Z},t:function(){return z}});var i=e(74165),r=e(93433),o=e(15861),a=e(45548),c=e(55055);function l(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,c.g)()):""}function u(t){return Array.isArray(t)?t:Array.from(t)}function s(t){var n=v(t,".".concat(a.C.darkTheme,", .").concat(a.C.lightTheme));return(null===n||void 0===n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function d(t){var n=v(t,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function f(t,n,e){var i="[".concat(n,"]"),r=t.closest(i);return r?r.getAttribute(n):e}function m(t){return t.getRootNode()}function h(t){return t.host||null}function g(t,n){var e=n.selector,i=n.id;return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var r=m(n),o=i?"getElementById"in r?r.getElementById(i):null:e?r.querySelector(e):null,a=h(r);return o||(a?t(a):null)}(t)}function v(t,n){return function t(e){return e?e.closest(n)||t(h(m(e))):null}(t)}function p(t,n){return y(t,n)}function y(t,n){if(t){var e=n(t);if(void 0!==e)return e;var i=t.parentNode;return y(i instanceof ShadowRoot?i.host:i,n)}}function b(t,n){return!!p(n,(function(n){return n===t||void 0}))}function k(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",k(n)?n.setFocus():n.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _=":not([slot])";function S(t,n,e){n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);var i=n?Array.isArray(n)?n.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(n,'"]'):_;return(null===e||void 0===e?void 0:e.all)?function(t,n,e){var i=n===_?D(t,_):Array.from(t.querySelectorAll(n));i=e&&!1===e.direct?i:i.filter((function(n){return n.parentElement===t})),i=(null===e||void 0===e?void 0:e.matches)?i.filter((function(t){return null===t||void 0===t?void 0:t.matches(e.matches)})):i;var o=null===e||void 0===e?void 0:e.selector;return o?i.map((function(t){return Array.from(t.querySelectorAll(o))})).reduce((function(t,n){return[].concat((0,r.Z)(t),(0,r.Z)(n))}),[]).filter((function(t){return!!t})):i}(t,i,e):function(t,n,e){var i=n===_?D(t,_)[0]||null:t.querySelector(n);i=e&&!1===e.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===e||void 0===e?void 0:e.matches)?(null===i||void 0===i?void 0:i.matches(e.matches))?i:null:i;var r=null===e||void 0===e?void 0:e.selector;return r?null===i||void 0===i?void 0:i.querySelector(r):i}(t,i,e)}function D(t,n){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(n)})):[]}function A(t,n){return Array.from(t.children).filter((function(t){return t.matches(n)}))}function Z(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}function C(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function z(t){return Boolean(t).toString()}function E(t){return!(!t.isPrimary||0!==t.button)}},55055:function(t,n,e){e.d(n,{g:function(){return i}});var i=function(){return[2,1,1,1,3].map((function(t){for(var n="",e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}},11786:function(t,n,e){function i(t){return"Enter"===t||" "===t}e.d(n,{i:function(){return i},n:function(){return r}});var r=["0","1","2","3","4","5","6","7","8","9"]}}]);
//# sourceMappingURL=45919.55c596e7.chunk.js.map
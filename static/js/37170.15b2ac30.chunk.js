/*! For license information please see 37170.15b2ac30.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[37170],{37170:function(t,n,i){i.r(n),i.d(n,{calcite_pagination:function(){return k}});var e=i(4942),r=i(74165),a=i(15861),o=i(15671),c=i(43144),s=i(72585),l=i(34051),u=(i(40566),i(84261),"page"),h="is-selected",f="previous",m="next",d="is-disabled",p="ellipsis",v="ellipsis--start",g="ellipsis--end",y="Next",b="Previous",k=function(){function t(n){var i=this;(0,o.Z)(this,t),(0,s.r)(this,n),this.calcitePaginationUpdate=(0,s.c)(this,"calcitePaginationUpdate",6),this.calcitePaginationChange=(0,s.c)(this,"calcitePaginationChange",6),this.groupSeparator=!1,this.num=20,this.start=1,this.total=0,this.textLabelNext=y,this.textLabelPrevious=b,this.scale="m",this.effectiveLocale="",this.previousClicked=function(){i.previousPage().then(),i.emitUpdate()},this.nextClicked=function(){i.nextPage(),i.emitUpdate()},this.determineGroupSeparator=function(t){return l.n.numberFormatOptions={locale:i.effectiveLocale,numberingSystem:i.numberingSystem,useGrouping:i.groupSeparator},i.groupSeparator?l.n.localize(t.toString()):t.toString()}}return(0,c.Z)(t,[{key:"connectedCallback",value:function(){(0,l.c)(this)}},{key:"disconnectedCallback",value:function(){(0,l.d)(this)}},{key:"nextPage",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.start=Math.min(this.getLastStart(),this.start+this.num);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"previousPage",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.start=Math.max(1,this.start-this.num);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getLastStart",value:function(){var t=this.total,n=this.num;return(t%n===0?t-n:Math.floor(t/n)*n)+1}},{key:"showLeftEllipsis",value:function(){return Math.floor(this.start/this.num)>3}},{key:"showRightEllipsis",value:function(){return(this.total-this.start)/this.num>3}},{key:"emitUpdate",value:function(){var t={start:this.start,total:this.total,num:this.num};this.calcitePaginationChange.emit(t),this.calcitePaginationUpdate.emit(t)}},{key:"renderPages",value:function(){var t,n,i=this,e=this.getLastStart();this.total/this.num<=5?(n=1+this.num,t=e-this.num):this.start/this.num<4?(n=1+this.num,t=1+4*this.num):this.start+3*this.num>=this.total?(n=e-4*this.num,t=e-this.num):(n=this.start-this.num,t=this.start+this.num);for(var r=[];n<=t;)r.push(n),n+=this.num;return r.map((function(t){return i.renderPage(t)}))}},{key:"renderPage",value:function(t){var n,i=this,r=Math.floor(t/this.num)+(1===this.num?0:1),a=this.determineGroupSeparator(r);return(0,s.h)("button",{class:(n={},(0,e.Z)(n,u,!0),(0,e.Z)(n,h,t===this.start),n),onClick:function(){i.start=t,i.emitUpdate()}},a)}},{key:"renderLeftEllipsis",value:function(){if(this.total/this.num>5&&this.showLeftEllipsis())return(0,s.h)("span",{class:"".concat(p," ").concat(v)},"\u2026")}},{key:"renderRightEllipsis",value:function(){if(this.total/this.num>5&&this.showRightEllipsis())return(0,s.h)("span",{class:"".concat(p," ").concat(g)},"\u2026")}},{key:"render",value:function(){var t,n,i=this.total,r=this.num,a=this.start,o=1===r?a<=r:a<r,c=a+r>i;return(0,s.h)(s.F,null,(0,s.h)("button",{"aria-label":this.textLabelPrevious,class:(t={},(0,e.Z)(t,f,!0),(0,e.Z)(t,d,o),t),disabled:o,onClick:this.previousClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:"chevronLeft",scale:"s"})),i>r?this.renderPage(1):null,this.renderLeftEllipsis(),this.renderPages(),this.renderRightEllipsis(),this.renderPage(this.getLastStart()),(0,s.h)("button",{"aria-label":this.textLabelNext,class:(n={},(0,e.Z)(n,m,!0),(0,e.Z)(n,d,c),n),disabled:c,onClick:this.nextClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:"chevronRight",scale:"s"})))}},{key:"el",get:function(){return(0,s.g)(this)}}]),t}();k.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .previous,:host([scale=s]) .next{padding-inline:0.25rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .previous,:host([scale=m]) .next{padding-inline:0.5rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-inline:1rem}:host{display:flex;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{box-sizing:border-box;display:flex;cursor:pointer;align-items:center;border-style:none;--tw-border-opacity:0;background-color:transparent;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);border-block:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{-webkit-margin-end:0px;margin-inline-end:0px}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:flex;align-items:flex-end;color:var(--calcite-ui-text-3)}"},40566:function(t,n,i){i.d(n,{a:function(){return h},b:function(){return P},c:function(){return v},d:function(){return b},e:function(){return A},f:function(){return x},g:function(){return f},h:function(){return u},i:function(){return _},j:function(){return C},k:function(){return m},l:function(){return s},m:function(){return k},n:function(){return l},q:function(){return p},s:function(){return L},t:function(){return z}});var e=i(74165),r=i(93433),a=i(15861),o=i(84261),c=i(88814);function s(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,c.g)()):""}function l(t){return Array.isArray(t)?t:Array.from(t)}function u(t){var n=v(t,".".concat(o.C.darkTheme,", .").concat(o.C.lightTheme));return(null===n||void 0===n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function h(t){var n=v(t,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function f(t,n,i){var e="[".concat(n,"]"),r=t.closest(e);return r?r.getAttribute(n):i}function m(t){return t.getRootNode()}function d(t){return t.host||null}function p(t,n){var i=n.selector,e=n.id;return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var r=m(n),a=e?"getElementById"in r?r.getElementById(e):null:i?r.querySelector(i):null,o=d(r);return a||(o?t(o):null)}(t)}function v(t,n){return function t(i){return i?i.closest(n)||t(d(m(i))):null}(t)}function g(t,n){return y(t,n)}function y(t,n){if(t){var i=n(t);if(void 0!==i)return i;var e=t.parentNode;return y(e instanceof ShadowRoot?e.host:e,n)}}function b(t,n){return!!g(n,(function(n){return n===t||void 0}))}function k(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function x(t){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)((0,e.Z)().mark((function t(n){return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",k(n)?n.setFocus():n.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var S=":not([slot])";function P(t,n,i){n&&!Array.isArray(n)&&"string"!==typeof n&&(i=n,n=null);var e=n?Array.isArray(n)?n.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(n,'"]'):S;return(null===i||void 0===i?void 0:i.all)?function(t,n,i){var e=n===S?Z(t,S):Array.from(t.querySelectorAll(n));e=i&&!1===i.direct?e:e.filter((function(n){return n.parentElement===t})),e=(null===i||void 0===i?void 0:i.matches)?e.filter((function(t){return null===t||void 0===t?void 0:t.matches(i.matches)})):e;var a=null===i||void 0===i?void 0:i.selector;return a?e.map((function(t){return Array.from(t.querySelectorAll(a))})).reduce((function(t,n){return[].concat((0,r.Z)(t),(0,r.Z)(n))}),[]).filter((function(t){return!!t})):e}(t,e,i):function(t,n,i){var e=n===S?Z(t,S)[0]||null:t.querySelector(n);e=i&&!1===i.direct||(null===e||void 0===e?void 0:e.parentElement)===t?e:null,e=(null===i||void 0===i?void 0:i.matches)?(null===e||void 0===e?void 0:e.matches(i.matches))?e:null:e;var r=null===i||void 0===i?void 0:i.selector;return r?null===e||void 0===e?void 0:e.querySelector(r):e}(t,e,i)}function Z(t,n){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(n)})):[]}function C(t,n){return Array.from(t.children).filter((function(t){return t.matches(n)}))}function L(t,n,i){return"string"===typeof n&&""!==n?n:""===n?t[i]:void 0}function A(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function z(t){return Boolean(t).toString()}function _(t){return!(!t.isPrimary||0!==t.button)}},88814:function(t,n,i){i.d(n,{g:function(){return e}});var e=function(){return[2,1,1,1,3].map((function(t){for(var n="",i=0;i<t;i++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}}}]);
//# sourceMappingURL=37170.15b2ac30.chunk.js.map
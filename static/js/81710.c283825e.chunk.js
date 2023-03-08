/*! For license information please see 81710.c283825e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[81710],{81710:function(t,e,i){i.r(e),i.d(e,{calcite_alert:function(){return b}});var n=i(74165),a=i(15861),r=i(4942),o=i(15671),s=i(43144),l=i(5692),c=i(3511),u=i(14520),d=i(25945),m=i(42533),h=(i(45548),"Close"),f={slow:14e3,medium:1e4,fast:6e3},p="title",v="message",g="link",b=function(){function t(e){var i=this;(0,o.Z)(this,t),(0,l.r)(this,e),this.calciteAlertBeforeClose=(0,l.c)(this,"calciteAlertBeforeClose",6),this.calciteAlertClose=(0,l.c)(this,"calciteAlertClose",6),this.calciteAlertBeforeOpen=(0,l.c)(this,"calciteAlertBeforeOpen",6),this.calciteAlertOpen=(0,l.c)(this,"calciteAlertOpen",6),this.calciteInternalAlertSync=(0,l.c)(this,"calciteInternalAlertSync",6),this.calciteInternalAlertRegister=(0,l.c)(this,"calciteInternalAlertRegister",6),this.active=!1,this.open=!1,this.autoDismiss=!1,this.autoDismissDuration=this.autoDismiss?"medium":null,this.color="blue",this.intlClose=h,this.placement="bottom",this.scale="m",this.effectiveLocale="",this.queue=[],this.queueLength=0,this.queued=!1,this.autoDismissTimeoutId=null,this.trackTimer=Date.now(),this.openTransitionProp="opacity",this.setTransitionEl=function(t){i.transitionEl=t,(0,d.c)(i)},this.closeAlert=function(){i.autoDismissTimeoutId=null,i.queued=!1,i.open=!1,i.queue=i.queue.filter((function(t){return t!==i.el})),i.determineActiveAlert(),i.calciteInternalAlertSync.emit({queue:i.queue})}}return(0,s.Z)(t,[{key:"activeHandler",value:function(t){this.open=t}},{key:"openHandler",value:function(t){var e=this;this.open&&!this.queued&&(this.calciteInternalAlertRegister.emit(),this.active=t),this.open||(this.queue=this.queue.filter((function(t){return t!==e.el})),this.calciteInternalAlertSync.emit({queue:this.queue}),this.active=!1)}},{key:"updateRequestedIcon",value:function(){this.requestedIcon=(0,c.s)(u.S,this.icon,this.color)}},{key:"updateDuration",value:function(){var t=this;this.autoDismiss&&this.autoDismissTimeoutId&&(window.clearTimeout(this.autoDismissTimeoutId),this.autoDismissTimeoutId=window.setTimeout((function(){return t.closeAlert()}),f[this.autoDismissDuration]-(Date.now()-this.trackTimer)))}},{key:"connectedCallback",value:function(){(0,m.c)(this);var t=this.open||this.active;t&&!this.queued&&(this.activeHandler(t),this.openHandler(t),this.calciteInternalAlertRegister.emit()),(0,d.c)(this)}},{key:"componentWillLoad",value:function(){this.requestedIcon=(0,c.s)(u.S,this.icon,this.color)}},{key:"disconnectedCallback",value:function(){window.clearTimeout(this.autoDismissTimeoutId),(0,d.d)(this),(0,m.a)(this)}},{key:"render",value:function(){var t=this,e=(0,l.h)("button",{"aria-label":this.intlClose,class:"alert-close",onClick:this.closeAlert,ref:function(e){return t.closeButton=e},type:"button"},(0,l.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"}));m.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"};var i=this.queueLength>2?this.queueLength-1:1,n=m.n.numberFormatter.format(i),a=(0,l.h)("div",{class:"".concat(this.queueLength>1?"active ":"","alert-queue-count")},(0,l.h)("calcite-chip",{scale:this.scale,value:n},n)),o=this.active,s=this.autoDismiss,u=this.label,d=this.placement,h=this.queued,f=this.requestedIcon,b=s?"alert":"alertdialog",k=!o;return(0,l.h)(l.H,{"aria-hidden":(0,c.t)(k),"aria-label":u,"calcite-hydrated-hidden":k,role:b},(0,l.h)("div",{class:(0,r.Z)({container:!0,queued:h},d,!0),ref:this.setTransitionEl},f?(0,l.h)("div",{class:"alert-icon"},(0,l.h)("calcite-icon",{icon:f,scale:"l"===this.scale?"m":"s"})):null,(0,l.h)("div",{class:"alert-content"},(0,l.h)("slot",{name:p}),(0,l.h)("slot",{name:v}),(0,l.h)("slot",{name:g})),a,s?null:e,o&&!h&&s?(0,l.h)("div",{class:"alert-dismiss-progress"}):null))}},{key:"alertSync",value:function(t){this.queue!==t.detail.queue&&(this.queue=t.detail.queue),this.queueLength=this.queue.length,this.determineActiveAlert(),t.stopPropagation()}},{key:"alertRegister",value:function(){this.open&&!this.queue.includes(this.el)&&(this.queued=!0,this.queue.push(this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}),this.determineActiveAlert()}},{key:"setFocus",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(0,c.b)(this.el,{selector:"calcite-link"}),this.closeButton||e){t.next=5;break}return t.abrupt("return");case 5:e?e.setFocus():this.closeButton&&this.closeButton.focus();case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"determineActiveAlert",value:function(){var t,e=this;(null===(t=this.queue)||void 0===t?void 0:t[0])===this.el&&(this.openAlert(),this.autoDismiss&&!this.autoDismissTimeoutId&&(this.trackTimer=Date.now(),this.autoDismissTimeoutId=window.setTimeout((function(){return e.closeAlert()}),f[this.autoDismissDuration])))}},{key:"onBeforeOpen",value:function(){this.calciteAlertBeforeOpen.emit()}},{key:"onOpen",value:function(){this.calciteAlertOpen.emit()}},{key:"onBeforeClose",value:function(){this.calciteAlertBeforeClose.emit()}},{key:"onClose",value:function(){this.calciteAlertClose.emit()}},{key:"openAlert",value:function(){var t=this;window.clearTimeout(this.queueTimeout),this.queueTimeout=window.setTimeout((function(){return t.queued=!1}),300)}},{key:"el",get:function(){return(0,l.g)(this)}}],[{key:"watchers",get:function(){return{active:["activeHandler"],open:["openHandler"],icon:["updateRequestedIcon"],color:["updateRequestedIcon"],autoDismissDuration:["updateDuration"]}}}]),t}();b.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .alert-queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=s]) .alert-close{padding:0.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .alert-queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){-webkit-margin-after:0.25rem;margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .alert-queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host{--calcite-alert-edge-distance:2rem;display:block}:host .container{pointer-events:none;position:fixed;z-index:500;margin-block:0px;margin-inline:auto;display:flex;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius);-webkit-border-before:0px solid transparent;border-block-start:0px solid transparent;border-inline:1px solid var(--calcite-ui-border-3);-webkit-border-after:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3);min-block-size:var(--calcite-alert-min-height);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - (var(--calcite-alert-edge-distance) * 2 + 2px));max-block-size:0;transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}:host .container.bottom,:host .container.top{inset-inline-end:0;inset-inline-start:0}:host .container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}:host .container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}:host .container[class*=-start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}:host .container[class*=-end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.container{display:flex;inline-size:100%;align-items:center;justify-content:center}.alert-close{outline-color:transparent}.alert-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([open]) .container:not(.queued){max-block-size:100%;border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-ui-text-link)}.alert-content{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;overflow-wrap:break-word;background-color:var(--calcite-ui-foreground-1);flex:1 1 auto;min-inline-size:0;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:0 var(--calcite-alert-spacing-token-small);border-end-start-radius:var(--calcite-border-radius);border-end-end-radius:var(--calcite-border-radius)}.alert-content:first-of-type:not(:only-child){-webkit-padding-start:var(--calcite-alert-spacing-token-large);padding-inline-start:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}.alert-icon{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;display:flex;align-items:center;align-self:stretch;background-color:var(--calcite-ui-foreground-1);padding-block:0px}.alert-close{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;cursor:pointer;align-self:stretch;overflow:hidden;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-block:0px;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;border-end-end-radius:var(--calcite-border-radius)}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.alert-close:open{background-color:var(--calcite-ui-foreground-3)}.alert-queue-count{visibility:hidden;display:flex;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-ui-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0px solid transparent;border-start-end-radius:0}.alert-queue-count.active{visibility:visible;opacity:1}:host([auto-dismiss])>.alert-queue-count{-webkit-border-end:0px solid transparent;border-inline-end:0px solid transparent}.alert-dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}:host([color=blue]) .container{border-block-start-color:var(--calcite-ui-info)}:host([color=blue]) .container .alert-icon{color:var(--calcite-ui-info)}:host([color=red]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([color=red]) .container .alert-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-block-start-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .alert-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-block-start-color:var(--calcite-ui-success)}:host([color=green]) .container .alert-icon{color:var(--calcite-ui-success)}:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 6000ms ease-out;animation:dismissProgress 6000ms ease-out}:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 10000ms ease-out;animation:dismissProgress 10000ms ease-out}:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 14000ms ease-out;animation:dismissProgress 14000ms ease-out}@-webkit-keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}'},3511:function(t,e,i){i.d(e,{a:function(){return d},b:function(){return A},c:function(){return v},d:function(){return k},e:function(){return I},f:function(){return w},g:function(){return m},h:function(){return u},i:function(){return S},j:function(){return h},k:function(){return D},l:function(){return l},m:function(){return y},n:function(){return c},q:function(){return p},s:function(){return T},t:function(){return C}});var n=i(74165),a=i(93433),r=i(15861),o=i(45548),s=i(55055);function l(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,s.g)()):""}function c(t){return Array.isArray(t)?t:Array.from(t)}function u(t){var e=v(t,".".concat(o.C.darkTheme,", .").concat(o.C.lightTheme));return(null===e||void 0===e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function d(t){var e=v(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function m(t,e,i){var n="[".concat(e,"]"),a=t.closest(n);return a?a.getAttribute(e):i}function h(t){return t.getRootNode()}function f(t){return t.host||null}function p(t,e){var i=e.selector,n=e.id;return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);var a=h(e),r=n?"getElementById"in a?a.getElementById(n):null:i?a.querySelector(i):null,o=f(a);return r||(o?t(o):null)}(t)}function v(t,e){return function t(i){return i?i.closest(e)||t(f(h(i))):null}(t)}function g(t,e){return b(t,e)}function b(t,e){if(t){var i=e(t);if(void 0!==i)return i;var n=t.parentNode;return b(n instanceof ShadowRoot?n.host:n,e)}}function k(t,e){return!!g(e,(function(e){return e===t||void 0}))}function y(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",y(e)?e.setFocus():e.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var q=":not([slot])";function A(t,e,i){e&&!Array.isArray(e)&&"string"!==typeof e&&(i=e,e=null);var n=e?Array.isArray(e)?e.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(e,'"]'):q;return(null===i||void 0===i?void 0:i.all)?function(t,e,i){var n=e===q?z(t,q):Array.from(t.querySelectorAll(e));n=i&&!1===i.direct?n:n.filter((function(e){return e.parentElement===t})),n=(null===i||void 0===i?void 0:i.matches)?n.filter((function(t){return null===t||void 0===t?void 0:t.matches(i.matches)})):n;var r=null===i||void 0===i?void 0:i.selector;return r?n.map((function(t){return Array.from(t.querySelectorAll(r))})).reduce((function(t,e){return[].concat((0,a.Z)(t),(0,a.Z)(e))}),[]).filter((function(t){return!!t})):n}(t,n,i):function(t,e,i){var n=e===q?z(t,q)[0]||null:t.querySelector(e);n=i&&!1===i.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null,n=(null===i||void 0===i?void 0:i.matches)?(null===n||void 0===n?void 0:n.matches(i.matches))?n:null:n;var a=null===i||void 0===i?void 0:i.selector;return a?null===n||void 0===n?void 0:n.querySelector(a):n}(t,n,i)}function z(t,e){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(e)})):[]}function D(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function T(t,e,i){return"string"===typeof e&&""!==e?e:""===e?t[i]:void 0}function I(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function C(t){return Boolean(t).toString()}function S(t){return!(!t.isPrimary||0!==t.button)}},55055:function(t,e,i){i.d(e,{g:function(){return n}});var n=function(){return[2,1,1,1,3].map((function(t){for(var e="",i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},14520:function(t,e,i){var n;i.d(e,{S:function(){return n}}),function(t){t.green="checkCircle",t.yellow="exclamationMarkTriangle",t.red="exclamationMarkTriangle",t.blue="lightbulb"}(n||(n={}))},25945:function(t,e,i){i.d(e,{c:function(){return s},d:function(){return l}});var n=i(29439),a=new WeakMap;function r(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function o(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function s(t){if(l(t),t.transitionEl){var e=r.bind(t),i=o.bind(t);a.set(t,[t.transitionEl,e,i]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",i)}}function l(t){if(a.has(t)){var e=a.get(t),i=(0,n.Z)(e,3),r=i[0],o=i[1],s=i[2];r.removeEventListener("transitionstart",o),r.removeEventListener("transitionend",s),a.delete(t)}}}}]);
//# sourceMappingURL=81710.c283825e.chunk.js.map
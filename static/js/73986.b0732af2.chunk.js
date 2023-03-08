/*! For license information please see 73986.b0732af2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[73986],{73986:function(t,n,e){e.r(n),e.d(n,{calcite_tile:function(){return f},calcite_tile_select:function(){return C},calcite_tile_select_group:function(){return S}});var i=e(4942),a=e(74165),o=e(15861),r=e(15671),c=e(43144),l=e(5692),s=e(3511),u=e(29259),d=e(57203),h=e(55055),m=(e(45548),"content-start"),p="content-end",f=function(){function t(n){(0,r.Z)(this,t),(0,l.r)(this,n),this.active=!1,this.disabled=!1,this.embed=!1,this.focused=!1,this.hidden=!1}return(0,c.Z)(t,[{key:"connectedCallback",value:function(){(0,u.c)(this)}},{key:"disconnectedCallback",value:function(){(0,u.d)(this)}},{key:"componentDidRender",value:function(){(0,d.u)(this)}},{key:"renderTile",value:function(){var t=this.icon,n=this.el,e=this.heading,i=this.description,a=e&&t&&!i,o=a?{height:"64px",width:"64px"}:void 0;return(0,l.h)("div",{class:{container:!0,"large-visual":a}},t&&(0,l.h)("div",{class:"icon"},(0,l.h)("calcite-icon",{icon:t,scale:"l",style:o})),(0,l.h)("div",{class:"content-container"},(0,s.b)(n,m)?(0,l.h)("div",{class:"content-slot-container"},(0,l.h)("slot",{name:m})):null,(0,l.h)("div",{class:"content"},e&&(0,l.h)("div",{class:"heading"},e),i&&(0,l.h)("div",{class:"description"},i)),(0,s.b)(n,p)?(0,l.h)("div",{class:"content-slot-container"},(0,l.h)("slot",{name:p})):null))}},{key:"render",value:function(){return(0,l.h)(l.F,null,this.href?(0,l.h)("calcite-link",{disabled:this.disabled,href:this.href},this.renderTile()):this.renderTile())}},{key:"el",get:function(){return(0,l.g)(this)}}]),t}();f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}";var b="description",v="description-only",g="heading",y="heading-only",k="icon",w="icon-only",x="input-alignment-end",Z="input-alignment-start",D="input-enabled",_="large-visual",A="width-auto",z="width-full",C=function(){function t(n){(0,r.Z)(this,t),(0,l.r)(this,n),this.calciteTileSelectChange=(0,l.c)(this,"calciteTileSelectChange",6),this.checked=!1,this.disabled=!1,this.hidden=!1,this.inputEnabled=!1,this.inputAlignment="start",this.type="radio",this.width="auto",this.guid="calcite-tile-select-".concat((0,h.g)()),this.focused=!1}return(0,c.Z)(t,[{key:"checkedChanged",value:function(t){this.input.checked=t}},{key:"nameChanged",value:function(t){this.input.name=t}},{key:"setFocus",value:function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(n=this.input)||void 0===n||n.setFocus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"checkboxChangeHandler",value:function(t){var n=t.target;n===this.input&&(this.checked=n.checked),t.stopPropagation(),this.calciteTileSelectChange.emit()}},{key:"checkboxFocusBlurHandler",value:function(t){t.target===this.input&&(this.focused=t.detail),t.stopPropagation()}},{key:"radioButtonChangeHandler",value:function(t){var n=t.target;n===this.input&&(this.checked=n.checked),t.stopPropagation(),this.calciteTileSelectChange.emit()}},{key:"radioButtonCheckedChangeHandler",value:function(t){var n=t.target;n===this.input&&(this.checked=n.checked),t.stopPropagation()}},{key:"radioButtonFocusBlurHandler",value:function(t){var n=t.target;n===this.input&&(this.focused=n.focused),t.stopPropagation()}},{key:"click",value:function(t){var n=t.target;["calcite-tile","calcite-tile-select"].includes(n.localName)&&this.input.click()}},{key:"mouseenter",value:function(){"calcite-radio-button"===this.input.localName&&(this.input.hovered=!0),"calcite-checkbox"===this.input.localName&&(this.input.hovered=!0)}},{key:"mouseleave",value:function(){"calcite-radio-button"===this.input.localName&&(this.input.hovered=!1),"calcite-checkbox"===this.input.localName&&(this.input.hovered=!1)}},{key:"connectedCallback",value:function(){this.renderInput()}},{key:"disconnectedCallback",value:function(){this.input.parentNode.removeChild(this.input)}},{key:"componentDidRender",value:function(){(0,d.u)(this)}},{key:"renderInput",value:function(){this.input=document.createElement("radio"===this.type?"calcite-radio-button":"calcite-checkbox"),this.input.checked=this.checked,this.input.disabled=this.disabled,this.input.hidden=this.hidden,this.input.id=this.guid,this.input.label=this.heading||this.name||"",this.name&&(this.input.name=this.name),this.value&&(this.input.value=null!=this.value?this.value.toString():""),this.el.insertAdjacentElement("beforeend",this.input)}},{key:"render",value:function(){var t,n=this.checked,e=this.description,a=this.disabled,o=this.focused,r=this.heading,c=this.icon,s=this.inputAlignment,u=this.inputEnabled,d=this.width;return(0,l.h)("div",{class:(t={checked:n,container:!0},(0,i.Z)(t,b,Boolean(e)),(0,i.Z)(t,v,Boolean(!r&&!c&&e)),(0,i.Z)(t,"disabled",a),(0,i.Z)(t,"focused",o),(0,i.Z)(t,g,Boolean(r)),(0,i.Z)(t,y,r&&!c&&!e),(0,i.Z)(t,k,Boolean(c)),(0,i.Z)(t,w,!r&&c&&!e),(0,i.Z)(t,x,"end"===s),(0,i.Z)(t,Z,"start"===s),(0,i.Z)(t,D,u),(0,i.Z)(t,_,r&&c&&!e),(0,i.Z)(t,A,"auto"===d),(0,i.Z)(t,z,"full"===d),t)},(0,l.h)("calcite-tile",{active:n,description:e,embed:!0,heading:r,icon:c}),(0,l.h)("slot",null))}},{key:"el",get:function(){return(0,l.g)(this)}}],[{key:"watchers",get:function(){return{checked:["checkedChanged"],name:["nameChanged"]}}}]),t}();C.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host .container{background-color:var(--calcite-ui-foreground-1);box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-sizing:border-box;cursor:pointer;display:inline-block;block-size:100%;max-inline-size:300px;padding:0.75rem;position:relative;vertical-align:top;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .container.checked{z-index:1;box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host .container.heading-only{align-items:center}:host .container:not(.input-enabled) ::slotted(calcite-checkbox),:host .container:not(.input-enabled) ::slotted(calcite-radio-button){position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .container.focused{outline-color:transparent}:host .container.focused:not(.disabled):not(.input-enabled){outline:2px solid var(--calcite-ui-brand);outline-offset:-4px;box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1)}:host .container.input-enabled.input-alignment-start.width-auto.heading-only,:host .container.input-enabled.input-alignment-start.width-auto.icon-only,:host .container.input-enabled.input-alignment-start.width-auto.description-only,:host .container.input-enabled.input-alignment-start.width-auto.heading.description,:host .container.input-enabled.input-alignment-start.width-auto.icon.description,:host .container.input-enabled.input-alignment-start.width-auto.heading.icon.description{display:inline-grid;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-start.heading-only,:host .container.input-enabled.input-alignment-start.icon-only,:host .container.input-enabled.input-alignment-start.description-only,:host .container.input-enabled.input-alignment-start.heading.description,:host .container.input-enabled.input-alignment-start.icon.description,:host .container.input-enabled.input-alignment-start.heading.icon.description{gap:0.75rem}:host .container.input-enabled.input-alignment-start calcite-tile{order:1}:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-start:0.75rem}:host .container.input-enabled.input-alignment-end.width-auto.heading-only,:host .container.input-enabled.input-alignment-end.width-auto.icon-only{display:inline-grid;grid-gap:0.75rem;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-end.heading-only,:host .container.input-enabled.input-alignment-end.icon-only{gap:0.75rem}:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.width-full{display:flex;max-inline-size:none}:host .container.width-full calcite-tile{flex:1 1 auto}:host(:hover) .container:not(.input-enabled){box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";var S=function(){function t(n){(0,r.Z)(this,t),(0,l.r)(this,n),this.disabled=!1,this.layout="horizontal"}return(0,c.Z)(t,[{key:"componentDidRender",value:function(){(0,d.u)(this)}},{key:"render",value:function(){return(0,l.h)("slot",null)}},{key:"el",get:function(){return(0,l.g)(this)}}]),t}();S.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-wrap:wrap}:host ::slotted(calcite-tile-select){-webkit-margin-after:1px;margin-block-end:1px;-webkit-margin-end:1px;margin-inline-end:1px}:host([layout=vertical]){flex-direction:column}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"},29259:function(t,n,e){e.d(n,{c:function(){return u},d:function(){return d}});var i,a=e(29439),o=e(37762),r=e(5692),c=e(1118),l=new Set,s={childList:!0};function u(t){i||(i=(0,c.c)("mutation",h)),i.observe(t.el,s)}function d(t){l.delete(t.el),h(i.takeRecords()),i.disconnect();var n,e=(0,o.Z)(l.entries());try{for(e.s();!(n=e.n()).done;){var r=(0,a.Z)(n.value,1)[0];i.observe(r,s)}}catch(c){e.e(c)}finally{e.f()}}function h(t){t.forEach((function(t){var n=t.target;(0,r.f)(n)}))}},3511:function(t,n,e){e.d(n,{a:function(){return d},b:function(){return D},c:function(){return b},d:function(){return y},e:function(){return C},f:function(){return w},g:function(){return h},h:function(){return u},i:function(){return E},j:function(){return m},k:function(){return A},l:function(){return l},m:function(){return k},n:function(){return s},q:function(){return f},s:function(){return z},t:function(){return S}});var i=e(74165),a=e(93433),o=e(15861),r=e(45548),c=e(55055);function l(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,c.g)()):""}function s(t){return Array.isArray(t)?t:Array.from(t)}function u(t){var n=b(t,".".concat(r.C.darkTheme,", .").concat(r.C.lightTheme));return(null===n||void 0===n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function d(t){var n=b(t,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function h(t,n,e){var i="[".concat(n,"]"),a=t.closest(i);return a?a.getAttribute(n):e}function m(t){return t.getRootNode()}function p(t){return t.host||null}function f(t,n){var e=n.selector,i=n.id;return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var a=m(n),o=i?"getElementById"in a?a.getElementById(i):null:e?a.querySelector(e):null,r=p(a);return o||(r?t(r):null)}(t)}function b(t,n){return function t(e){return e?e.closest(n)||t(p(m(e))):null}(t)}function v(t,n){return g(t,n)}function g(t,n){if(t){var e=n(t);if(void 0!==e)return e;var i=t.parentNode;return g(i instanceof ShadowRoot?i.host:i,n)}}function y(t,n){return!!v(n,(function(n){return n===t||void 0}))}function k(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)((0,i.Z)().mark((function t(n){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",k(n)?n.setFocus():n.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Z=":not([slot])";function D(t,n,e){n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);var i=n?Array.isArray(n)?n.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(n,'"]'):Z;return(null===e||void 0===e?void 0:e.all)?function(t,n,e){var i=n===Z?_(t,Z):Array.from(t.querySelectorAll(n));i=e&&!1===e.direct?i:i.filter((function(n){return n.parentElement===t})),i=(null===e||void 0===e?void 0:e.matches)?i.filter((function(t){return null===t||void 0===t?void 0:t.matches(e.matches)})):i;var o=null===e||void 0===e?void 0:e.selector;return o?i.map((function(t){return Array.from(t.querySelectorAll(o))})).reduce((function(t,n){return[].concat((0,a.Z)(t),(0,a.Z)(n))}),[]).filter((function(t){return!!t})):i}(t,i,e):function(t,n,e){var i=n===Z?_(t,Z)[0]||null:t.querySelector(n);i=e&&!1===e.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===e||void 0===e?void 0:e.matches)?(null===i||void 0===i?void 0:i.matches(e.matches))?i:null:i;var a=null===e||void 0===e?void 0:e.selector;return a?null===i||void 0===i?void 0:i.querySelector(a):i}(t,i,e)}function _(t,n){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(n)})):[]}function A(t,n){return Array.from(t.children).filter((function(t){return t.matches(n)}))}function z(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}function C(t,n){return!(n.left>t.right||n.right<t.left||n.top>t.bottom||n.bottom<t.top)}function S(t){return Boolean(t).toString()}function E(t){return!(!t.isPrimary||0!==t.button)}},55055:function(t,n,e){e.d(n,{g:function(){return i}});var i=function(){return[2,1,1,1,3].map((function(t){for(var n="",e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}},57203:function(t,n,e){function i(){}function a(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"===typeof n?t.el.setAttribute("tabindex",n.call(t)?"0":"-1"):!0===n?t.el.setAttribute("tabindex","0"):!1===n&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}e.d(n,{u:function(){return a}})},1118:function(t,n,e){e.d(n,{c:function(){return s}});var i=e(15671),a=e(43144),o=e(11752),r=e(61120),c=e(60136),l=e(92572);function s(t,n,e){var s=function(t){var n=function(t){(0,c.Z)(e,t);var n=(0,l.Z)(e);function e(t){var a;return(0,i.Z)(this,e),(a=n.call(this,t)).observedEntry=[],a.callback=t,a}return(0,a.Z)(e,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,o.Z)((0,r.Z)(e.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,i=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,o.Z)((0,r.Z)(e.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(t){return n.observe(t.target,t.options)}))}}]),e}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new s(n,e)}},37762:function(t,n,e){e.d(n,{Z:function(){return a}});var i=e(40181);function a(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,i.Z)(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw r}}}}},11752:function(t,n,e){e.d(n,{Z:function(){return o}});var i=e(61120);function a(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=(0,i.Z)(t)););return t}function o(){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,n,e){var i=a(t,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(arguments.length<3?t:e):o.value}},o.apply(this,arguments)}}}]);
//# sourceMappingURL=73986.b0732af2.chunk.js.map
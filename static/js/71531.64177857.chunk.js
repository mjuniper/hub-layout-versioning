/*! For license information please see 71531.64177857.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[71531],{71531:function(t,e,i){i.r(e),i.d(e,{calcite_checkbox:function(){return k}});var n=i(74165),a=i(15861),o=i(15671),c=i(43144),r=i(5692),s=i(55055),l=i(90025),h=i(9652),u=i(57203),d=i(3511),m=i(11786),k=(i(45548),function(){function t(e){var i=this;(0,o.Z)(this,t),(0,r.r)(this,e),this.calciteInternalCheckboxBlur=(0,r.c)(this,"calciteInternalCheckboxBlur",6),this.calciteCheckboxChange=(0,r.c)(this,"calciteCheckboxChange",6),this.calciteInternalCheckboxFocus=(0,r.c)(this,"calciteInternalCheckboxFocus",6),this.checked=!1,this.disabled=!1,this.hovered=!1,this.indeterminate=!1,this.required=!1,this.scale="m",this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=function(){return i.indeterminate?i.indeterminatePath:i.checked?i.checkedPath:""},this.toggle=function(){i.disabled||(i.checked=!i.checked,i.setFocus(),i.indeterminate=!1,i.calciteCheckboxChange.emit())},this.keyDownHandler=function(t){(0,m.i)(t.key)&&(i.toggle(),t.preventDefault())},this.clickHandler=function(){i.toggle()},this.onToggleBlur=function(){i.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=function(){i.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=function(){i.toggle()}}return(0,c.Z)(t,[{key:"setFocus",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===(e=this.toggleEl)||void 0===e||e.focus();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectedCallback",value:function(){this.guid=this.el.id||"calcite-checkbox-".concat((0,s.g)()),(0,h.c)(this),(0,l.c)(this)}},{key:"disconnectedCallback",value:function(){(0,h.d)(this),(0,l.d)(this)}},{key:"componentDidRender",value:function(){(0,u.u)(this)}},{key:"render",value:function(){var t=this;return(0,r.h)(r.H,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,r.h)("div",{"aria-checked":(0,d.t)(this.checked),"aria-label":(0,h.g)(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,ref:function(e){return t.toggleEl=e},role:"checkbox",tabIndex:this.disabled?void 0:0},(0,r.h)("svg",{"aria-hidden":"true",class:"check-svg",viewBox:"0 0 16 16"},(0,r.h)("path",{d:this.getPath()})),(0,r.h)("slot",null)),(0,r.h)(l.H,{component:this}))}},{key:"el",get:function(){return(0,r.g)(this)}}]),t}());k.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.toggle{outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},11786:function(t,e,i){function n(t){return"Enter"===t||" "===t}i.d(e,{i:function(){return n},n:function(){return a}});var a=["0","1","2","3","4","5","6","7","8","9"]}}]);
//# sourceMappingURL=71531.64177857.chunk.js.map
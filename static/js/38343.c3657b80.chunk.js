/*! For license information please see 38343.c3657b80.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[38343],{38343:function(e,t,i){i.r(t),i.d(t,{calcite_input_number:function(){return S}});var n=i(4942),a=i(74165),r=i(15861),o=i(93433),l=i(15671),u=i(43144),s=i(5692),c=i(3511),d=i(9652),m=i(90025),b=i(42533),h=i(11786),p=i(45548),v=i(62708),f=i(1118),g=i(57203),y="loader",x="clear-button",k="icon",w="prefix",N="suffix",I="number-button-wrapper",z="number-button-item--horizontal",V="element-wrapper",E="wrapper",D="action-wrapper",C="number-button-item",O="action",H="Clear value",S=function(){function e(t){var i=this;(0,l.Z)(this,e),(0,s.r)(this,t),this.calciteInternalInputNumberFocus=(0,s.c)(this,"calciteInternalInputNumberFocus",6),this.calciteInternalInputNumberBlur=(0,s.c)(this,"calciteInternalInputNumberBlur",6),this.calciteInputNumberInput=(0,s.c)(this,"calciteInputNumberInput",7),this.calciteInputNumberChange=(0,s.c)(this,"calciteInputNumberChange",6),this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.groupSeparator=!1,this.hidden=!1,this.intlLoading=p.T.loading,this.iconFlipRtl=!1,this.loading=!1,this.localeFormat=!1,this.numberButtonType="vertical",this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.editingEnabled=!1,this.value="",this.previousValueOrigin="initial",this.mutationObserver=(0,f.c)("mutation",(function(){return i.setDisabledAction()})),this.userChangedValue=!1,this.effectiveLocale="",this.keyDownHandler=function(e){i.readOnly||i.disabled||(i.isClearable&&"Escape"===e.key&&(i.clearInputValue(e),e.preventDefault()),"Enter"!==e.key||e.defaultPrevented||(0,m.s)(i)&&e.preventDefault())},this.clearInputValue=function(e){i.setNumberValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=function(){"user"===i.previousValueOrigin&&i.value!==i.previousEmittedValue&&i.calciteInputNumberChange.emit(),i.previousEmittedValue=i.value},this.inputNumberBlurHandler=function(){i.calciteInternalInputNumberBlur.emit(),i.emitChangeIfUserModified()},this.inputNumberFocusHandler=function(e){var t=(0,c.b)(i.el,"action");e.target!==t&&i.setFocus(),i.calciteInternalInputNumberFocus.emit()},this.inputNumberInputHandler=function(e){if(!i.disabled&&!i.readOnly){var t=e.target.value;b.n.numberFormatOptions={locale:i.effectiveLocale,numberingSystem:i.numberingSystem,useGrouping:i.groupSeparator};var n=b.n.delocalize(t);"insertFromPaste"===e.inputType?((0,b.i)(n)||e.preventDefault(),i.setNumberValue({nativeEvent:e,origin:"user",value:(0,b.p)(n)}),i.childNumberEl.value=i.localizedValue):i.setNumberValue({nativeEvent:e,origin:"user",value:n})}},this.inputNumberKeyDownHandler=function(e){if(!i.disabled&&!i.readOnly){if("ArrowUp"===e.key)return e.preventDefault(),void i.nudgeNumberValue("up",e);if("ArrowDown"!==e.key){var t=[].concat((0,o.Z)(h.n),["ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"]);if(!(e.altKey||e.ctrlKey||e.metaKey)){var n=e.shiftKey&&"Tab"===e.key;if(!t.includes(e.key)||e.shiftKey&&!n){if(b.n.numberFormatOptions={locale:i.effectiveLocale,numberingSystem:i.numberingSystem,useGrouping:i.groupSeparator},e.key===b.n.decimal){if(!i.value&&!i.childNumberEl.value)return;if(i.value&&-1===i.childNumberEl.value.indexOf(b.n.decimal))return}if(/[eE]/.test(e.key)){if(!i.value&&!i.childNumberEl.value)return;if(i.value&&!/[eE]/.test(i.childNumberEl.value))return}if("-"===e.key){if(!i.value&&!i.childNumberEl.value)return;if(i.value&&i.childNumberEl.value.split("-").length<=2)return}e.preventDefault()}else"Enter"===e.key&&i.emitChangeIfUserModified()}}else i.nudgeNumberValue("down",e)}},this.nudgeNumberValue=function(e,t){if(!(t instanceof KeyboardEvent&&t.repeat)){var n=i.maxString?parseFloat(i.maxString):null,a=i.minString?parseFloat(i.minString):null;i.incrementOrDecrementNumberValue(e,n,a,t),i.nudgeNumberValueIntervalId&&window.clearInterval(i.nudgeNumberValueIntervalId);var r=!0;i.nudgeNumberValueIntervalId=window.setInterval((function(){r?r=!1:i.incrementOrDecrementNumberValue(e,n,a,t)}),100)}},this.nudgeButtonPointerUpAndOutHandler=function(e){(0,c.i)(e)&&window.clearInterval(i.nudgeNumberValueIntervalId)},this.nudgeButtonPointerDownHandler=function(e){if((0,c.i)(e)){e.preventDefault();var t=e.target.dataset.adjustment;i.disabled||i.nudgeNumberValue(t,e)}},this.hiddenInputChangeHandler=function(e){e.target.name===i.name&&i.setNumberValue({value:e.target.value,origin:"direct"}),e.stopPropagation()},this.setChildNumberElRef=function(e){i.childNumberEl=e},this.setInputNumberValue=function(e){i.childNumberEl&&(i.childNumberEl.value=e)},this.setPreviousEmittedNumberValue=function(e){i.previousEmittedValue=(0,b.i)(e)?e:""},this.setPreviousNumberValue=function(e){i.previousValue=(0,b.i)(e)?e:""},this.setNumberValue=function(e){var t=e.committing,n=void 0!==t&&t,a=e.nativeEvent,r=e.origin,o=e.previousValue,l=e.value;b.n.numberFormatOptions={locale:i.effectiveLocale,numberingSystem:i.numberingSystem,useGrouping:i.groupSeparator};var u=(0,b.s)(i.numberingSystem&&"latn"!==i.numberingSystem||"latn"!==b.d?b.n.delocalize(l):l),s=l&&!u?(0,b.i)(i.previousValue)?i.previousValue:"":u,c=b.n.localize(s);if(i.setPreviousNumberValue(o||i.value),i.previousValueOrigin=r,i.userChangedValue="user"===r&&i.value!==s,i.value=s,i.localizedValue=c,"direct"===r&&i.setInputNumberValue(c),a)if(i.calciteInputNumberInput.emit({element:i.childNumberEl,nativeEvent:a,value:i.value}).defaultPrevented){var d=b.n.localize(i.previousValue);i.value=i.previousValue,i.localizedValue=d}else n&&i.emitChangeIfUserModified()},this.inputNumberKeyUpHandler=function(){window.clearInterval(i.nudgeNumberValueIntervalId)}}return(0,u.Z)(e,[{key:"disabledWatcher",value:function(){this.setDisabledAction()}},{key:"localeChanged",value:function(){(0,b.u)(this)}},{key:"maxWatcher",value:function(){var e;this.maxString=(null===(e=this.max)||void 0===e?void 0:e.toString())||null}},{key:"minWatcher",value:function(){var e;this.minString=(null===(e=this.min)||void 0===e?void 0:e.toString())||null}},{key:"valueWatcher",value:function(e,t){this.userChangedValue||(this.setNumberValue({origin:"direct",previousValue:t,value:null==e||""==e?"":(0,b.i)(e)?e:this.previousValue||""}),this.warnAboutInvalidNumberValue(e)),this.userChangedValue=!1}},{key:"updateRequestedIcon",value:function(){this.requestedIcon=(0,c.s)({},this.icon,"number")}},{key:"isClearable",get:function(){return this.clearable&&this.value.length>0}},{key:"connectedCallback",value:function(){var e;(0,b.c)(this),this.scale=(0,c.g)(this.el,"scale",this.scale),this.status=(0,c.g)(this.el,"status",this.status),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),(0,d.c)(this),(0,m.c)(this),this.setPreviousEmittedNumberValue(this.value),this.setPreviousNumberValue(this.value),this.warnAboutInvalidNumberValue(this.value),this.setNumberValue({origin:"connected",value:(0,b.i)(this.value)?this.value:""}),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}},{key:"disconnectedCallback",value:function(){var e;(0,d.d)(this),(0,m.d)(this),(0,b.a)(this),null===(e=this.mutationObserver)||void 0===e||e.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}},{key:"componentWillLoad",value:function(){var e,t;this.maxString=null===(e=this.max)||void 0===e?void 0:e.toString(),this.minString=null===(t=this.min)||void 0===t?void 0:t.toString(),this.requestedIcon=(0,c.s)({},this.icon,"number")}},{key:"componentShouldUpdate",value:function(e,t,i){return!("value"===i&&e&&!(0,b.i)(e))||(this.setNumberValue({origin:"reset",value:t}),!1)}},{key:"componentDidRender",value:function(){(0,g.u)(this)}},{key:"setFocus",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.childNumberEl)||void 0===t||t.focus();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selectText",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.childNumberEl)||void 0===t||t.select();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onLabelClick",value:function(){this.setFocus()}},{key:"incrementOrDecrementNumberValue",value:function(e,t,i,n){var a=this.value,r="any"===this.step?1:Math.abs(this.step||1),o=a&&""!==a?parseFloat(a):0,l=o+r*("up"===e?1:-1),u="number"===typeof i&&!isNaN(i)&&l<i||"number"===typeof t&&!isNaN(t)&&l>t?o:l,s=(0,v.d)(o),c=(0,v.d)(r);this.setNumberValue({committing:!0,nativeEvent:n,origin:"user",value:u.toFixed(Math.max(s,c))})}},{key:"onFormReset",value:function(){this.setNumberValue({origin:"reset",value:this.defaultValue})}},{key:"syncHiddenFormInput",value:function(e){var t,i,n,a;e.type="number",e.min=null!==(i=null===(t=this.min)||void 0===t?void 0:t.toString(10))&&void 0!==i?i:"",e.max=null!==(a=null===(n=this.max)||void 0===n?void 0:n.toString(10))&&void 0!==a?a:""}},{key:"setDisabledAction",value:function(){var e=(0,c.b)(this.el,"action");e&&(this.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled"))}},{key:"warnAboutInvalidNumberValue",value:function(e){e&&!(0,b.i)(e)&&console.warn('The specified value "'.concat(e,'" cannot be parsed, or is out of range.'))}},{key:"render",value:function(){var e,t,i,a=(0,c.a)(this.el),r=(0,s.h)("div",{class:y},(0,s.h)("calcite-progress",{label:this.intlLoading,type:"indeterminate"})),o=(0,s.h)("button",{"aria-label":this.intlClear||H,class:x,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},(0,s.h)("calcite-icon",{icon:"x",scale:"s"})),l=(0,s.h)("calcite-icon",{class:k,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"s"}),u="horizontal"===this.numberButtonType,b=(0,s.h)("button",{"aria-hidden":"true",class:(e={},(0,n.Z)(e,C,!0),(0,n.Z)(e,z,u),e),"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerUpAndOutHandler,onPointerUp:this.nudgeButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},(0,s.h)("calcite-icon",{icon:"chevron-up",scale:"s"})),h=(0,s.h)("button",{"aria-hidden":"true",class:(t={},(0,n.Z)(t,C,!0),(0,n.Z)(t,z,u),t),"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.nudgeButtonPointerDownHandler,onPointerOut:this.nudgeButtonPointerUpAndOutHandler,onPointerUp:this.nudgeButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},(0,s.h)("calcite-icon",{icon:"chevron-down",scale:"s"})),v=(0,s.h)("div",{class:I},b,h),f=(0,s.h)("div",{class:w},this.prefixText),g=(0,s.h)("div",{class:N},this.suffixText),S=(0,s.h)("input",{"aria-label":(0,d.g)(this),autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,name:void 0,onBlur:this.inputNumberBlurHandler,onFocus:this.inputNumberFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputNumberKeyUpHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.localizedValue});return(0,s.h)(s.H,{onClick:this.inputNumberFocusHandler,onKeyDown:this.keyDownHandler},(0,s.h)("div",{class:(i={},(0,n.Z)(i,E,!0),(0,n.Z)(i,p.C.rtl,"rtl"===a),i)},"horizontal"!==this.numberButtonType||this.readOnly?null:h,this.prefixText?f:null,(0,s.h)("div",{class:V},S,this.isClearable?o:null,this.requestedIcon?l:null,this.loading?r:null),(0,s.h)("div",{class:D},(0,s.h)("slot",{name:O})),"vertical"!==this.numberButtonType||this.readOnly?null:v,this.suffixText?g:null,"horizontal"!==this.numberButtonType||this.readOnly?null:b,(0,s.h)(m.H,{component:this})))}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledWatcher"],locale:["localeChanged"],max:["maxWatcher"],min:["minWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"]}}}]),e}();S.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input:-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host input{outline-color:transparent}:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{-webkit-padding-start:2rem;padding-inline-start:2rem}:host([icon][scale=m]) input{-webkit-padding-start:2.5rem;padding-inline-start:2.5rem}:host([icon][scale=l]) input{-webkit-padding-start:3rem;padding-inline-start:3rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:1;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;-webkit-padding-start:0;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},62708:function(e,t,i){i.d(t,{c:function(){return n},d:function(){return a}});var n=function(e,t,i){return Math.max(t,Math.min(e,i))},a=function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}}}]);
//# sourceMappingURL=38343.c3657b80.chunk.js.map
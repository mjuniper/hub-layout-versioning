"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[99862],{32836:function(n,i,o){o.d(i,{b:function(){return t}});var t=function(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];o.forEach((function(i){if("function"!==typeof n[i])throw new Error("Cannot bind context. ".concat(i," must be a function"));n[i]=n[i].bind(n)}))}},36962:function(n,i,o){o.d(i,{g:function(){return t}});var t=function(n,i,o,t){var a,e=((null===(a=null===n||void 0===n?void 0:n.options)||void 0===a?void 0:a.enum)||{}).i18nScope,r=t||{},u=r.fallback,c=r.path,l=u;if(o&&e){var d="".concat(e,".").concat(i);c&&(d="".concat(d,".").concat(c)),l=o(d,void 0,{fallback:u})}return l}},99862:function(n,i,o){o.r(i),o.d(i,{hub_field_input_radio_group:function(){return l}});var t=o(93433),a=o(15671),e=o(43144),r=o(72585),u=o(32836),c=o(36962),l=function(){function n(i){(0,a.Z)(this,n),(0,r.r)(this,i),this.arcgisConfigurationEditorFieldInputChange=(0,r.c)(this,"arcgisConfigurationEditorFieldInputChange",7),(0,u.b)(this,"handleCalciteRadioGroupChange")}return(0,e.Z)(n,[{key:"handleCalciteRadioGroupChange",value:function(n){this.arcgisConfigurationEditorFieldInputChange.emit(n.detail)}},{key:"renderOptions",value:function(n){var i,o=n.schema,a=n.uiSchema,e=n.value,u=n.t,l=(null===(i=null===a||void 0===a?void 0:a.options)||void 0===i?void 0:i.enum)||{},d=l.values,h=void 0===d?[]:d,s=l.override;return(void 0!==s&&s?h:[].concat((0,t.Z)(o.enum),(0,t.Z)(h))).map((function(n,i){var o,t=n===e,l=(0,c.g)(a,n,u,{path:"label",fallback:n}),d=null===(o=a.options)||void 0===o?void 0:o.icons[i];return(0,r.h)("calcite-radio-group-item",{checked:t,"data-option-index":i,iconStart:d,key:n,value:n},l)}))}},{key:"render",value:function(){return(0,r.h)("calcite-radio-group",{disabled:this.params.disabled,layout:"horizontal",name:this.params.schema.title,onCalciteRadioGroupChange:this.handleCalciteRadioGroupChange,scale:"m"},this.renderOptions(this.params))}}]),n}()}}]);
//# sourceMappingURL=99862.44f55b0b.chunk.js.map
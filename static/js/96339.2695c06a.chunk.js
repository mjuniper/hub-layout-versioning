"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[96339],{96339:function(t,n,i){i.r(n),i.d(n,{arcgis_configuration_form:function(){return l}});var r=i(74165),o=i(15861),e=i(15671),a=i(43144),c=i(5692),s=i(13129),u=i(54825),f=i(12969),l=(i(7597),function(){function t(n){(0,e.Z)(this,t),(0,c.r)(this,n),this.arcgisConfigurationFormChanged=(0,c.c)(this,"arcgisConfigurationFormChanged",7),this.arcgisConfigurationFormSaved=(0,c.c)(this,"arcgisConfigurationFormSaved",7),this.isSaving=!1,this.stickyFooter=!0,this.isValid=!0,this.alert=null,(0,u.b)(this,"handleEditorChangeEvent","handleEditorInitialized","onSaveButtonClick")}return(0,a.Z)(t,[{key:"componentWillLoad",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.i.loadIntlForComponent(this.element);case 2:this.intl=t.sent,this.internalValues=(0,f.c)(this.values)||{};case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleEditorInitialized",value:function(t){this.handleEditorChange(t,!0)}},{key:"handleEditorChangeEvent",value:function(t){this.handleEditorChange(t)}},{key:"handleEditorChange",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t.detail,r=i.valid,o=i.values;t.stopPropagation(),this.isValid=r,this.internalValues=Object.assign(Object.assign({},this.internalValues),o),!n&&this.arcgisConfigurationFormChanged.emit(this.internalValues)}},{key:"onSaveButtonClick",value:function(){this.arcgisConfigurationFormSaved.emit(this.internalValues)}},{key:"triggerAlert",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(n){var i,o,e,a,s=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=n.kind,o=n.title,e=n.message,a="success"===i?this.intl.t("success"):this.intl.t("error"),this.alert=(0,c.h)("calcite-alert",{"auto-dismiss":!0,"auto-dismiss-duration":"fast",color:"success"===i?"green":"red",icon:!0,label:this.intl.t("formAlert"),open:!0,placement:"top-end"},(0,c.h)("div",{slot:"title"},o||a),e&&(0,c.h)("div",{slot:"message"},e)),setTimeout((function(){s.alert=null}),6e3);case 4:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"renderEditor",value:function(){return(0,c.h)("arcgis-configuration-editor",{context:this.context,onArcgisConfigurationEditorChange:this.handleEditorChangeEvent,onArcgisConfigurationEditorInitialized:this.handleEditorInitialized,schema:this.schema,t:this.t,uiSchema:this.uiSchema,values:this.values})}},{key:"renderFooter",value:function(){return(0,c.h)("div",{class:{"configuration-form__footer":!0,"configuration-form__footer--sticky":this.stickyFooter}},(0,c.h)("span",{class:"configuration-form__footer--secondary"},(0,c.h)("calcite-button",{appearance:"transparent",disabled:this.isSaving,round:!0},this.intl.t("undoChanges"))),(0,c.h)("span",{class:"configuration-form__footer--primary",id:"configuration-form-primary-tooltip"},(0,c.h)("calcite-button",{disabled:!this.isValid,loading:this.isSaving,onClick:this.onSaveButtonClick,round:!0},this.intl.t("save")),!this.isValid&&(0,c.h)("calcite-tooltip",{label:this.intl.t("saveDisabled"),placement:"top","reference-element":"configuration-form-primary-tooltip"},this.intl.t("invalidForm"))))}},{key:"render",value:function(){return(0,c.h)(c.H,{"data-element":"configuration-form"},this.alert,(0,c.h)("div",{class:"configuration-form__container"},this.renderEditor(),this.renderFooter()))}},{key:"element",get:function(){return(0,c.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),t}());l.style=".sc-arcgis-configuration-form-h{--arcgis-configuration-form-footer-bg-color:inherit;--arcgis-configuration-form-footer-negative-margin:0;display:block;height:100%}.configuration-form__container.sc-arcgis-configuration-form{display:flex;height:100%;flex-direction:column;justify-content:space-between}.configuration-form__footer.sc-arcgis-configuration-form{background-color:var(--arcgis-configuration-form-footer-bg-color);display:flex;justify-content:flex-end}.configuration-form__footer--sticky.sc-arcgis-configuration-form{border-top:1px solid var(--calcite-ui-foreground-3);margin-left:calc(-1 * var(--arcgis-configuration-form-footer-negative-margin));margin-right:calc(-1 * var(--arcgis-configuration-form-footer-negative-margin));position:-webkit-sticky;position:sticky;left:0px;bottom:0px;padding-top:1rem;padding-bottom:1rem;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.configuration-form__footer--primary.sc-arcgis-configuration-form{margin-right:var(--arcgis-configuration-form-footer-negative-margin);margin-left:0.5rem}"},54825:function(t,n,i){i.d(n,{b:function(){return r}});var r=function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];i.forEach((function(n){if("function"!==typeof t[n])throw new Error("Cannot bind context. ".concat(n," must be a function"));t[n]=t[n].bind(t)}))}},13115:function(t,n,i){function r(t,n){return n.split(".").reduce((function(t,n){return t?t[n]:void 0}),t)}i.d(n,{g:function(){return r}})},12969:function(t,n,i){i.d(n,{a:function(){return c},b:function(){return f},c:function(){return o},d:function(){return g},e:function(){return s},f:function(){return d},g:function(){return e},i:function(){return h},m:function(){return u},u:function(){return l},w:function(){return a}});var r=i(13115);function o(t){var n={};if(Array.isArray(t))n=t.map(o);else if("object"===typeof t){for(var i in t)if(t.hasOwnProperty(i)){var r=t[i];null!=r&&"object"===typeof r?r instanceof Date?n[i]=new Date(r.getTime()):"undefined"!==typeof Blob&&r instanceof Blob?n[i]=new Blob([r],{type:r.type}):n[i]=o(r):n[i]=r}}else n=t;return n}function e(t,n,i){return t?t.reduce((function(t,o){return(0,r.g)(o,n)===i&&(t=o),t}),null):null}function a(t,n){return t.filter((function(t){return t!==n}))}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"i";return"".concat(t).concat(Math.random().toString(36).substr(2,8))}function s(t,n,i){return null!==n&&void 0!==n&&((i=o(i))[t]=n),i}function u(t,n){return null!==t&&void 0!==t&&(n=o(n)).push(t),n}function f(t){return(t=(t=t.toLowerCase()).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi," ")).replace(/(\-|\_|\.|\s)+(.)?/g,(function(t,n,i){return i?i.toUpperCase():""})).replace(/(^|\/)([A-Z])/g,(function(t,n,i){return t.toLowerCase()}))}function l(t,n,i){return i.indexOf(t)===n}var h=function(t){return null==t},g=function(t){var n=Array.from(t);return n[0]=n[0].toUpperCase(),n.join("")};function d(t){return t.reduce((function(t,n){return t.concat(n)}),[])}}}]);
//# sourceMappingURL=96339.2695c06a.chunk.js.map
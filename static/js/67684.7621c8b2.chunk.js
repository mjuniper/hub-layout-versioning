"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[67684],{67684:function(e,t,n){n.r(t),n.d(t,{arcgis_hub_license_picker:function(){return b}});var i=n(74165),r=n(15861),c=n(15671),o=n(43144),s=n(72585),a=n(32836),l=n(32862),u=n(12868),C=n(79399),b=(n(84371),function(){function e(t){(0,c.Z)(this,e),(0,s.r)(this,t),this.arcgisHubLicensePickerChange=(0,s.c)(this,"arcgisHubLicensePickerChange",7),this.modalIsOpen=!1,(0,a.b)(this,"handleApply","handleModalClose","handleModalOpen","handleOpenLink","handleRemove")}return(0,o.Z)(e,[{key:"structuredLicense",get:function(){return(0,C.g)(this.licenseInfo)}},{key:"componentWillLoad",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleApply",value:function(e){var t=e.detail;this.licenseInfo=t,this.arcgisHubLicensePickerChange.emit(this.licenseInfo),this.handleModalClose()}},{key:"handleModalClose",value:function(){this.modalIsOpen=!1}},{key:"handleModalOpen",value:function(){this.modalIsOpen=!0}},{key:"handleRemove",value:function(){confirm(this.intl.t("editorRemoveWarning"))&&(this.licenseInfo="",this.arcgisHubLicensePickerChange.emit(this.licenseInfo))}},{key:"handleOpenLink",value:function(e){window.open(e.target.dataset.url)}},{key:"render",value:function(){var e=(0,l.g)(this.intl,this.structuredLicense.type);return(0,s.h)(s.H,{"data-element":"license-picker"},(0,s.h)("arcgis-wormhole",null,(0,s.h)("arcgis-hub-license-picker-modal",{licenseInfo:this.licenseInfo,modalIsOpen:this.modalIsOpen,wasCustomLicense:(0,l.i)(this.structuredLicense.type),wasStructuredLicense:!(0,l.a)(this.structuredLicense.type)})),(0,s.h)("div",{class:"license-picker-container"},(0,s.h)("div",{class:"license-picker-editor"},(0,s.h)("calcite-label",{class:"active-license-label",for:"active-license"},this.intl.t("editorLabel")),(0,s.h)("calcite-value-list",{class:"active-license"},(0,s.h)("calcite-value-list-item",{description:e,label:e?this.structuredLicense.abbr||this.intl.t("selectedLicenseLabelFallback"):this.intl.t("selectedLicenseLabelNoLicense"),nonInteractive:!0,value:this.structuredLicense.type},!!e&&[!!this.structuredLicense.url&&(0,s.h)("calcite-action",{"aria-label":this.intl.t("licenseInfoButtonAriaLabel"),"aria-labelledby":this.structuredLicense.abbr,"data-url":this.structuredLicense.url,icon:"information",key:"information",onClick:this.handleOpenLink,slot:"actions-end",text:""}),(0,s.h)("calcite-action",{icon:"trash",key:"trash",onClick:this.handleRemove,slot:"actions-end",text:""})])),(0,s.h)("calcite-button",{appearance:"solid",class:"choose-button",onClick:this.handleModalOpen,type:"button"},this.intl.t("chooseButton")))))}},{key:"element",get:function(){return(0,s.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}());b.style=":host{display:block;--calcite-font-size--1:1rem;--calcite-font-size--2:1rem}.choose-button{margin-top:30px}"},32836:function(e,t,n){n.d(t,{b:function(){return i}});var i=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];n.forEach((function(t){if("function"!==typeof e[t])throw new Error("Cannot bind context. ".concat(t," must be a function"));e[t]=e[t].bind(e)}))}},79399:function(e,t,n){n.d(t,{g:function(){return r}});var i=[{type:"CC0-1.0",abbr:"CC0",name:"Public Domain Dedication",url:"https://creativecommons.org/publicdomain/zero/1.0"},{type:"CC-BY-4.0",abbr:"CC BY",name:"Attribution 4.0 International",url:"https://creativecommons.org/licenses/by/4.0"},{type:"CC-BY-3.0",abbr:"CC BY 3.0",name:"Attribution 3.0 Unported",url:"https://creativecommons.org/licenses/by/3.0"},{type:"CC-BY-2.5",abbr:"CC BY 2.5",name:"Attribution 2.5 Generic",url:"https://creativecommons.org/licenses/by/2.5"},{type:"CC-BY-2.0",abbr:"CC BY 2.0",name:"Attribution 2.0 Generic",url:"https://creativecommons.org/licenses/by/2.0"},{type:"CC-BY-1.0",abbr:"CC BY 1.0",name:"Attribution 1.0 Generic",url:"https://creativecommons.org/licenses/by/1.0"},{type:"CC-BY-SA-4.0",abbr:"CC BY-SA",name:"Attribution-ShareAlike 4.0 International",url:"https://creativecommons.org/licenses/by-sa/4.0"},{type:"CC-BY-SA-3.0",abbr:"CC BY-SA 3.0",name:"Attribution-ShareAlike 3.0 Unported",url:"https://creativecommons.org/licenses/by-sa/3.0"},{type:"CC-BY-SA-2.5",abbr:"CC BY-SA 2.5",name:"Attribution-ShareAlike 2.5 Generic",url:"https://creativecommons.org/licenses/by-sa/2.5"},{type:"CC-BY-SA-2.0",abbr:"CC BY-SA 2.0",name:"Attribution-ShareAlike 2.0 Generic",url:"https://creativecommons.org/licenses/by-sa/2.0"},{type:"CC-BY-SA-1.0",abbr:"CC BY-SA 1.0",name:"Attribution-ShareAlike 1.0 Generic",url:"https://creativecommons.org/licenses/by-sa/1.0"},{type:"CC-BY-ND-4.0",abbr:"CC BY-ND",name:"Attribution-NoDerivatives 4.0 International",url:"https://creativecommons.org/licenses/by-nd/4.0"},{type:"CC-BY-ND-3.0",abbr:"CC BY-ND 3.0",name:"Attribution-NoDerivs 3.0 Unported",url:"https://creativecommons.org/licenses/by-nd/3.0"},{type:"CC-BY-ND-2.5",abbr:"CC BY-ND 2.5",name:"Attribution-NoDerivs 2.5 Generic",url:"https://creativecommons.org/licenses/by-nd/2.5"},{type:"CC-BY-ND-2.0",abbr:"CC BY-ND 2.0",name:"Attribution-NoDerivs 2.0 Generic",url:"https://creativecommons.org/licenses/by-nd/2.0"},{type:"CC-BY-ND-1.0",abbr:"CC BY-ND 1.0",name:"Attribution-NoDerivs 1.0 Generic",url:"https://creativecommons.org/licenses/by-nd/1.0"},{type:"CC-BY-NC-4.0",abbr:"CC BY-NC",name:"Attribution-NonCommercial 4.0 International",url:"https://creativecommons.org/licenses/by-nc/4.0"},{type:"CC-BY-NC-3.0",abbr:"CC BY-NC 3.0",name:"Attribution-NonCommercial 3.0 Unported",url:"https://creativecommons.org/licenses/by-nc/3.0"},{type:"CC-BY-NC-2.5",abbr:"CC BY-NC 2.5",name:"Attribution-NonCommercial 2.5 Generic",url:"https://creativecommons.org/licenses/by-nc/2.5"},{type:"CC-BY-NC-2.0",abbr:"CC BY-NC 2.0",name:"Attribution-NonCommercial 2.0 Generic",url:"https://creativecommons.org/licenses/by-nc/2.0"},{type:"CC-BY-NC-1.0",abbr:"CC BY-NC 1.0",name:"Attribution-NonCommercial 1.0 Generic",url:"https://creativecommons.org/licenses/by-nc/1.0"},{type:"CC-BY-NC-SA-4.0",abbr:"CC BY-NC-SA",name:"Attribution-NonCommercial-ShareAlike 4.0 International",url:"https://creativecommons.org/licenses/by-nc-sa/4.0"},{type:"CC-BY-NC-SA-3.0",abbr:"CC BY-NC-SA 3.0",name:"Attribution-NonCommercial-ShareAlike 3.0 Unported",url:"https://creativecommons.org/licenses/by-nc-sa/3.0"},{type:"CC-BY-NC-SA-2.5",abbr:"CC BY-NC-SA 2.5",name:"Attribution-NonCommercial-ShareAlike 2.5 Generic",url:"https://creativecommons.org/licenses/by-nc-sa/2.5"},{type:"CC-BY-NC-SA-2.0",abbr:"CC BY-NC-SA 2.0",name:"Attribution-NonCommercial-ShareAlike 2.0 Generic",url:"https://creativecommons.org/licenses/by-nc-sa/2.0"},{type:"CC-BY-NC-SA-1.0",abbr:"CC BY-NC-SA 1.0",name:"Attribution-NonCommercial-ShareAlike 1.0 Generic",url:"https://creativecommons.org/licenses/by-nc-sa/1.0"},{type:"CC-BY-NC-ND-4.0",abbr:"CC BY-NC-ND",name:"Attribution-NonCommercial-NoDerivatives 4.0 International",url:"https://creativecommons.org/licenses/by-nc-nd/4.0"},{type:"CC-BY-NC-ND-3.0",abbr:"CC BY-NC-ND 3.0",name:"Attribution-NonCommercial-NoDerivs 3.0 Unported",url:"https://creativecommons.org/licenses/by-nc-nd/3.0"},{type:"CC-BY-NC-ND-2.5",abbr:"CC BY-NC-ND 2.5",name:"Attribution-NonCommercial-NoDerivs 2.5 Generic",url:"https://creativecommons.org/licenses/by-nc-nd/2.5"},{type:"CC-BY-NC-ND-2.0",abbr:"CC BY-NC-ND 2.0",name:"Attribution-NonCommercial-NoDerivs 2.0 Generic",url:"https://creativecommons.org/licenses/by-nc-nd/2.0"},{type:"CC-BY-NC-ND-1.0",abbr:"CC BY-NC-ND 1.0",name:"Attribution-NonCommercial-NoDerivs 1.0 Generic",url:"https://creativecommons.org/licenses/by-nc-nd/1.0"},{type:"PDDL-1.0",abbr:"PDDL",name:"ODC Public Domain Dedication and License",url:"https://opendatacommons.org/licenses/pddl/summary"},{type:"ODbL-1.0",abbr:"ODbL",name:"ODC Open Database License",url:"https://opendatacommons.org/licenses/odbl/summary"},{type:"ODC-BY-1.0",abbr:"ODC BY",name:"ODC Attribution License",url:"https://opendatacommons.org/licenses/by/summary"}];function r(e){var t;t={type:(e=e||"")?"custom":"none",text:e};var n=!1,r=i.filter((function(t){return function(e,t){return e=e.toLowerCase(),e.includes(t.name.toLowerCase())||e.includes(t.url.toLowerCase())||e.includes(t.abbr.toLowerCase())}(e,t)}));if(r.length&&(n=!0,t=r.pop()),!n){var c;if(function(e){try{return!!new URL(e).protocol}catch(t){return!1}}(e))c=e;else if(function(e){return new RegExp(/^<a[\s]+(href\s?=\s?["'].*?["'])+([^>]?)>((?:.(?!\<\/a\>))*.)?<\/a>$|^<a[\s]+(href\s?=\s?["'].*?["'])+([^>]?)\/>/).test(e)}(e)){var o=new RegExp(/href\s?=\s?["'](.*?)["']/);c=e.match(o)[1]}c&&(t.url=c,t.text="")}return t.text||delete t.text,t}},32862:function(e,t,n){n.d(t,{a:function(){return l},c:function(){return o},g:function(){return s},i:function(){return a}});var i,r=n(79399);!function(e){e.Custom="custom",e.None="none"}(i||(i={}));var c={custom:"licenseDescriptionCustom",cc0:"licenseDescriptionCc0","cc-by":"licenseDescriptionCcBy","cc-by-sa":"licenseDescriptionCcBySa","cc-by-nd":"licenseDescriptionCcByNd","cc-by-nc":"licenseDescriptionCcByNc","cc-by-nc-sa":"licenseDescriptionCcByNcSa","cc-by-nc-nd":"licenseDescriptionCcByNcNd",pddl:"licenseDescriptionPddl",odbl:"licenseDescriptionOdbl","odc-by":"licenseDescriptionOdcBy"};function o(e){return e.map((function(e){return(0,r.g)(e)}))}function s(e,t){var n=function(e){var t=e.toString().match(/(?:(?!-\d).)+/),n=t&&t[0].toLowerCase();return c[n]||null}(t);return n&&e.t(n)}function a(e){return e===i.Custom}function l(e){return Object.values(i).includes(e)}}}]);
//# sourceMappingURL=67684.7621c8b2.chunk.js.map
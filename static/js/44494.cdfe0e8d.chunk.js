/*! For license information please see 44494.cdfe0e8d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[44494],{80046:function(t,e,n){n.d(e,{a:function(){return o}});var r=n(77843);function o(t,e,n){var o=(0,r._)((0,r._)({params:{}},n),t);return o.params=e.reduce((function(e,n){return(t[n]||"boolean"===typeof t[n])&&(e[n]=t[n]),e}),o.params),["params","httpMethod","rawResponse","authentication","portal","fetch","maxUrlLength","headers"].reduce((function(t,e){return o[e]&&(t[e]=o[e]),t}),{})}},44494:function(t,e,n){n.r(e),n.d(e,{arcgis_notebook:function(){return h}});var r=n(74165),o=n(15861),i=n(15671),a=n(43144),u=n(72585),s=n(12868),c=n(36106),l=n(69207),h=(n(84371),n(77843),n(80046),function(){function t(e){(0,i.Z)(this,t),(0,u.r)(this,e),this.arcGisNotebookError=(0,u.c)(this,"arcGisNotebookError",7),this.portalUrl="https://www.arcgis.com/sharing/rest",this.allowScripts=!1,this.isLoading=!0}return(0,a.Z)(t,[{key:"onItemIdChanged",value:function(){this.fetchPreview()}},{key:"onTokenChanged",value:function(){this.fetchPreview()}},{key:"onPortalUrlChanged",value:function(){this.fetchPreview()}},{key:"onPreviewChanged",value:function(t,e){t!==e&&this.updateIframe()}},{key:"componentWillLoad",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.i.loadIntlForComponent(this.el);case 2:return this.intl=t.sent,t.abrupt("return",this.fetchPreview());case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentShouldUpdate",value:function(t,e,n){return!["portalUrl","itemId","token","notebookPreview"].includes(n)}},{key:"requestOpts",get:function(){return{fileName:"notebook_preview.json",readAs:"json",authentication:new c.U({portal:this.portalUrl,token:this.token}),httpMethod:"GET"}}},{key:"sandboxSettings",get:function(){var t=["allow-same-origin"];return this.allowScripts&&t.push("allow-scripts"),t.join(" ")}},{key:"reset",value:function(){this.notebookPreview="",this.isLoading=!0,this.error=null}},{key:"updateIframe",value:function(){var t,e=null===(t=this.iFrameEl)||void 0===t?void 0:t.contentWindow.document;e&&(e.write(this.notebookPreview),e.close())}},{key:"fetchPreview",value:function(){var t=this;this.reset();var e=this.requestOpts;(0,l.h)(this.itemId,e).then((function(e){t.notebookPreview=e.html})).catch((function(e){t.error=t.intl.t("messageFetchError"),t.arcGisNotebookError.emit("Error in arcgis-notebook fetchPreview: ".concat(e.message))})).finally((function(){t.isLoading=!1}))}},{key:"setIframeEl",value:function(t){this.iFrameEl=t}},{key:"render",value:function(){return(0,u.h)(u.H,null,(0,u.h)("calcite-notice",{color:"red",dir:"ltr",scale:"m",width:"half"},(0,u.h)("div",{slot:"title"},this.error)),(0,u.h)("calcite-loader",{label:this.intl.t("labelLoading")}),(0,u.h)("iframe",{ref:this.setIframeEl.bind(this),sandbox:this.sandboxSettings,title:this.notebookTitle}))}},{key:"el",get:function(){return(0,u.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}},{key:"watchers",get:function(){return{itemId:["onItemIdChanged"],token:["onTokenChanged"],portalUrl:["onPortalUrlChanged"],notebookPreview:["onPreviewChanged"]}}}]),t}());h.style=":host{display:block;height:100%;width:100%}iframe{height:100%;width:100%;border-style:none}calcite-notice[active],calcite-loader[active]{margin-top:1rem}"},30678:function(t,e,n){function r(t){return"string"!==typeof t||"/"===(t=t.trim())[t.length-1]&&(t=t.slice(0,-1)),t}n.d(e,{c:function(){return r}})},69207:function(t,e,n){n.d(e,{a:function(){return g},b:function(){return l},c:function(){return p},d:function(){return s},e:function(){return k},f:function(){return m},g:function(){return f},h:function(){return v},i:function(){return c},j:function(){return w},s:function(){return u}});var r=n(63613),o=n(98825),i=n(77843),a=n(80046);function u(t){var e=JSON.parse(JSON.stringify(t));return e.data&&("undefined"!==typeof Blob&&t.data instanceof Blob||"ReadStream"===t.data.constructor.name?e.file=t.data:e.text=t.data,delete e.data),e}function s(t){return t.owner?Promise.resolve(t.owner):t.item&&t.item.owner?Promise.resolve(t.item.owner):t.authentication&&t.authentication.getUsername?t.authentication.getUsername():Promise.reject(new Error("Could not determine the owner of this item. Pass the `owner`, `item.owner`, or `authentication` option."))}function c(t){return Array.isArray(t)&&Array.isArray(t[0])&&Array.isArray(t[1])}function l(t){return t.join(",")}var h=/[\x00-\x1F\x7F-\x9F\xA0]/g;function f(t,e){var n=d(t,e),o=(0,r._)({httpMethod:"GET"},e);return(0,i.r)(n,o)}var d=function(t,e){return("string"===typeof e?e:(0,o.g)(e))+"/content/items/"+t};function p(t,e){var n=d(t,e)+"/data",o=(0,r._)({httpMethod:"GET",params:{}},e);return o.file&&(o.params.f=null),(0,i.r)(n,o).catch((function(t){if(!RegExp(/The string did not match the expected pattern|(Unexpected end of (JSON input|data at line 1 column 1))/i).test(t.message))throw t}))}function m(t,e){var n=d(t,e)+"/resources",o=(0,r._)({},e);return o.params=(0,r._)({num:1e3},o.params),(0,i.r)(n,o)}function v(t,e){var n=e.readAs||"blob";return y(t,"/resources/"+e.fileName,n,e)}function g(t,e){var n=d(t,e)+"/groups";return(0,i.r)(n,e)}function w(t){return s(t).then((function(e){var n=(0,o.g)(t)+"/content/users/"+e+"/items/"+t.id+"/status",u=(0,a.a)(t,["jobId","jobType"],{params:(0,r._)({},t.params)});return(0,i.r)(n,u)}))}function k(t,e){return function(t,e){var n=e||{},o=n.fileName,i=void 0===o?"iteminfo.xml":o,a=n.readAs;return y(t,"/info/"+i,void 0===a?"text":a,(0,r._)({httpMethod:"GET"},e))}(t,(0,r._)((0,r._)({},e),{fileName:"metadata/metadata.xml"}))}function y(t,e,n,o){var a=""+d(t,o)+e,u=(0,r._)({params:{}},o),s=u.rawResponse;return u.rawResponse=!0,u.params.f=null,(0,i.r)(a,u).then((function(t){return s?t:"json"!==n?t[n]():t.text().then((function(t){return JSON.parse(t.replace(h,""))}))}))}},98825:function(t,e,n){n.d(e,{g:function(){return o}});var r=n(30678);function o(t){return void 0===t&&(t={}),t.portal?(0,r.c)(t.portal):t.authentication?t.authentication.portal:"https://www.arcgis.com/sharing/rest"}},63613:function(t,e,n){n.d(e,{_:function(){return r},a:function(){return o}});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function o(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}}}]);
//# sourceMappingURL=44494.cdfe0e8d.chunk.js.map
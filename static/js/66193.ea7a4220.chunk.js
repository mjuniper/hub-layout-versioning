(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[66193,63058,51130,29302,29899,63050],{63058:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=63058,e.exports=t},10625:function(e,t,i){"use strict";i.d(t,{a:function(){return n},b:function(){return r},c:function(){return o},g:function(){return a}});var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof i.g?i.g:"undefined"!==typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},i.exports),i.exports}function a(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(i){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})})),t}},62230:function(e,t,i){"use strict";i.d(t,{l:function(){return s}});var n=i(10625),r=i(19545),o=(0,n.c)((function(e,t){n.a,function(e){var t={Promise:"undefined"!==typeof window?window.Promise:void 0},i="4.25",n="next";function r(e){if(e.toLowerCase()===n)return n;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function o(e){return void 0===e&&(e=i),"https://js.arcgis.com/".concat(e,"/")}function a(e){void 0===e&&(e=i);var t=o(e),a=r(e);if(a!==n&&3===a.major){var s=a.minor<=10?"js/":"";return"".concat(t).concat(s,"esri/css/esri.css")}return"".concat(t,"esri/themes/light/main.css")}function s(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}function u(e,t){if(t){var i=document.querySelector(t);i.parentNode.insertBefore(e,i)}else document.head.appendChild(e)}function l(e){return document.querySelector('link[href*="'.concat(e,'"]'))}function c(e){return!e||r(e)?a(e):e}function d(e,t){var i=c(e),n=l(i);return n||u(n=s(i),t),n}var h={};function f(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}function m(e,t,i){var n;i&&(n=v(e,i));var r=function i(){t(e),e.removeEventListener("load",i,!1),n&&e.removeEventListener("error",n,!1)};e.addEventListener("load",r,!1)}function v(e,t){var i=function i(n){t(n.error||new Error("There was an error attempting to load ".concat(e.src))),e.removeEventListener("error",i,!1)};return e.addEventListener("error",i,!1),i}function g(e){void 0===e&&(e={}),h=e}function p(){return document.querySelector("script[data-esri-loader]")}function y(){var e=window.require;return e&&e.on}function b(e){void 0===e&&(e={});var i={};[h,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])}));var n=i.version,r=i.url||o(n);return new t.Promise((function(e,t){var o=p();if(o){var a=o.getAttribute("src");a!==r?t(new Error("The ArcGIS API for JavaScript is already loaded (".concat(a,")."))):y()?e(o):m(o,e,t)}else if(y())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var s=i.css;s&&d(!0===s?n:s,i.insertCssBefore),m(o=f(r),(function(){o.setAttribute("data-esri-loader","loaded"),e(o)}),t),document.body.appendChild(o)}}))}function S(e){return new t.Promise((function(t,i){var n=window.require.on("error",i);window.require(e,(function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];n.remove(),t(e)}))}))}function w(e,t){if(void 0===t&&(t={}),y())return S(e);var i=p(),n=i&&i.getAttribute("src");return!t.url&&n&&(t.url=n),b(t).then((function(){return S(e)}))}e.utils=t,e.loadModules=w,e.getScript=p,e.isLoaded=y,e.loadScript=b,e.setDefaultOptions=g,e.loadCss=d,Object.defineProperty(e,"__esModule",{value:!0})}(t)})),a={themeOrUrl:"light"},s=function(){var e=document.querySelector('link[rel="stylesheet"][href*="/esri/themes"]');if(e){new RegExp(r.i8).test(e.href)||console.warn("Your ArcGIS API for JavaScript StyleSheet file should match the current hub-components version: ".concat(r.i8,"."))}else{var t=a.themeOrUrl,i=a.insertBefore,n=["light","dark"].includes(t)?"https://js.arcgis.com/".concat(r.i8,"/esri/themes/").concat(t,"/main.css"):t;o.loadCss(n,i)}}},29090:function(e,t,i){"use strict";i.r(t),i.d(t,{arcgis_time_slider:function(){return h}});var n=i(4942),r=i(74165),o=i(15861),a=i(15671),s=i(43144),u=i(72585),l=i(32836),c=i(50675),d=i(62230),h=(i(10625),i(19545),function(){function e(t){(0,a.Z)(this,e),(0,u.r)(this,t),this.triggerAction=(0,u.c)(this,"trigger-action",7),this.handles=[],this.timeExtent=null,(0,l.b)(this,"emitTriggerAction")}return(0,s.Z)(e,[{key:"actionsChanged",value:function(e){this.timeSlider&&(this.timeSlider.actions=e)}},{key:"disabledChanged",value:function(e){this.timeSlider&&(this.timeSlider.disabled=e)}},{key:"fullTimeExtentChanged",value:function(e){this.timeSlider&&(this.timeSlider.fullTimeExtent=e)}},{key:"labelChanged",value:function(e){this.timeSlider&&(this.timeSlider.label=e)}},{key:"labelFormatFunctionChanged",value:function(e){this.timeSlider&&(this.timeSlider.labelFormatFunction=e)}},{key:"layoutChanged",value:function(e){this.timeSlider&&(this.timeSlider.layout=e)}},{key:"loopChanged",value:function(e){this.timeSlider&&(this.timeSlider.loop=e)}},{key:"modeChanged",value:function(e){this.timeSlider&&(this.timeSlider.mode=e)}},{key:"playRateChanged",value:function(e){this.timeSlider&&(this.timeSlider.playRate=e)}},{key:"positionChanged",value:function(e){this.skipDestroy=!0,this.view.ui.move(this.container,e)}},{key:"stopsChanged",value:function(e){this.timeSlider&&(this.timeSlider.stops=e)}},{key:"tickConfigsChanged",value:function(e){this.timeSlider&&(this.timeSlider.tickConfigs=e)}},{key:"timeExtentChanged",value:function(e){this.timeSlider&&(this.timeSlider.timeExtent=e)}},{key:"timeVisibleChanged",value:function(e){this.timeSlider&&(this.timeSlider.timeVisible=e)}},{key:"viewChanged",value:function(e){this.timeSlider&&(this.timeSlider.view=e)}},{key:"viewModelChanged",value:function(e){this.timeSlider&&(this.timeSlider.viewModel=e)}},{key:"visibleChanged",value:function(e){this.timeSlider&&(this.timeSlider.visible=e)}},{key:"connectedCallback",value:function(){this.createSlider()}},{key:"disconnectedCallback",value:function(){this.skipDestroy?this.skipDestroy=!1:this.destroySlider()}},{key:"componentWillLoad",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.createSlider(),(0,d.l)();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createSlider",value:function(){var e=this.container,t=this.timeSlider;if(e&&!t){var i=this.view,n=this.position,r=this.container,o=this.widgetProperties;this.timeSlider=new c.Z(o),this.handles.push(this.timeSlider.on("trigger-action",this.emitTriggerAction)),this.skipDestroy=!0,i.ui.add(r,n)}}},{key:"widgetProperties",get:function(){var e=this;return["container","disabled","fullTimeExtent","label","labelFormatFunction","layout","loop","mode","playRate","stops","tickConfigs","timeExtent","timeVisible","view","viewModel","visible"].reduce((function(t,i){return void 0===e[i]?t:Object.assign(Object.assign({},t),(0,n.Z)({},i,e[i]))}),{id:this.widgetId})}},{key:"widgetId",get:function(){return[this.container.getAttribute("id"),"time-slider"].filter(Boolean).join("-")}},{key:"emitTriggerAction",value:function(e){this.triggerAction.emit(e.action)}},{key:"destroySlider",value:function(){this.timeSlider&&(this.handles.forEach((function(e){return e.remove()})),this.handles=[],this.view.ui.remove(this.timeSlider.id),this.timeSlider.destroy(),this.timeSlider=null)}},{key:"render",value:function(){return(0,u.h)(u.H,null,(0,u.h)("slot",null))}},{key:"container",get:function(){return(0,u.g)(this)}}],[{key:"watchers",get:function(){return{actions:["actionsChanged"],disabled:["disabledChanged"],fullTimeExtent:["fullTimeExtentChanged"],label:["labelChanged"],labelFormatFunction:["labelFormatFunctionChanged"],layout:["layoutChanged"],loop:["loopChanged"],mode:["modeChanged"],playRate:["playRateChanged"],position:["positionChanged"],stops:["stopsChanged"],tickConfigs:["tickConfigsChanged"],timeExtent:["timeExtentChanged"],timeVisible:["timeVisibleChanged"],view:["viewChanged"],viewModel:["viewModelChanged"],visible:["visibleChanged"]}}}]),e}());h.style=":host{display:block}"},32836:function(e,t,i){"use strict";i.d(t,{b:function(){return n}});var n=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];i.forEach((function(t){if("function"!==typeof e[t])throw new Error("Cannot bind context. ".concat(t," must be a function"));e[t]=e[t].bind(e)}))}}}]);
//# sourceMappingURL=66193.ea7a4220.chunk.js.map
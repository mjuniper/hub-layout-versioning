"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[43525],{43525:function(n,t,e){e.r(t),e.d(t,{arcgis_countdown_editor:function(){return d}});var r=e(29439),u=e(74165),o=e(15861),i=e(15671),c=e(43144),a=e(5692),f=e(13129),s=e(12969),l=(e(7597),{require:["countdownDate"],type:"object",properties:{cardTitle:{type:"string"},countdownDate:{type:"string",format:"date"}}}),d=function(){function n(t){(0,i.Z)(this,n),(0,a.r)(this,t),this.arcgisCountdownEditorChange=(0,a.c)(this,"arcgisCountdownEditorChange",7),this.values={}}return(0,c.Z)(n,[{key:"handleEditorChangeEvent",value:function(n){n.stopPropagation(),this.arcgisCountdownEditorChange.emit(n.detail)}},{key:"componentWillLoad",value:function(){var n=(0,o.Z)((0,u.Z)().mark((function n(){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.i.loadIntlForComponent(this.element);case 2:this.intl=n.sent;case 3:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"schema",get:function(){var n=this,t=(0,s.c)(l);return Object.entries(t.properties).forEach((function(t){var e=(0,r.Z)(t,2),u=e[0];e[1].title=function(t){return n.intl.t(t)}(u)})),t}},{key:"render",value:function(){return(0,a.h)("arcgis-configuration-editor",{schema:this.schema,values:this.values})}},{key:"element",get:function(){return(0,a.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),n}()},13115:function(n,t,e){function r(n,t){return t.split(".").reduce((function(n,t){return n?n[t]:void 0}),n)}e.d(t,{g:function(){return r}})},12969:function(n,t,e){e.d(t,{a:function(){return c},b:function(){return s},c:function(){return u},d:function(){return p},e:function(){return a},f:function(){return h},g:function(){return o},i:function(){return d},m:function(){return f},u:function(){return l},w:function(){return i}});var r=e(13115);function u(n){var t={};if(Array.isArray(n))t=n.map(u);else if("object"===typeof n){for(var e in n)if(n.hasOwnProperty(e)){var r=n[e];null!=r&&"object"===typeof r?r instanceof Date?t[e]=new Date(r.getTime()):"undefined"!==typeof Blob&&r instanceof Blob?t[e]=new Blob([r],{type:r.type}):t[e]=u(r):t[e]=r}}else t=n;return t}function o(n,t,e){return n?n.reduce((function(n,u){return(0,r.g)(u,t)===e&&(n=u),n}),null):null}function i(n,t){return n.filter((function(n){return n!==t}))}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"i";return"".concat(n).concat(Math.random().toString(36).substr(2,8))}function a(n,t,e){return null!==t&&void 0!==t&&((e=u(e))[n]=t),e}function f(n,t){return null!==n&&void 0!==n&&(t=u(t)).push(n),t}function s(n){return(n=(n=n.toLowerCase()).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi," ")).replace(/(\-|\_|\.|\s)+(.)?/g,(function(n,t,e){return e?e.toUpperCase():""})).replace(/(^|\/)([A-Z])/g,(function(n,t,e){return n.toLowerCase()}))}function l(n,t,e){return e.indexOf(n)===t}var d=function(n){return null==n},p=function(n){var t=Array.from(n);return t[0]=t[0].toUpperCase(),t.join("")};function h(n){return n.reduce((function(n,t){return n.concat(t)}),[])}}}]);
//# sourceMappingURL=43525.366f0174.chunk.js.map
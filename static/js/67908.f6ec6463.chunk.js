"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[67908],{67908:function(e,t,n){n.d(t,{c:function(){return T},g:function(){return D},u:function(){return A}});var r,o,i,s,a=n(74165),l=n(15861),p=n(48103),c=n(12969),u=n(61584);function f(e,t,n){return n=n||"",Array.isArray(e)?e.map(i):!e||!b(e)||y(e)||m(e)||d(e)?t(e,n):Object.assign({},e,(r=e,o=i,Object.keys(r).reduce((function(e,t){return e[t]=o(r[t],t,r),e}),{})));var r,o;function i(e,r){return f(e,t,""+(n?n+"."+r:r))}}function y(e){return e instanceof Date}function d(e){return"function"===typeof e}function b(e){return"object"===typeof e}function m(e){return e instanceof RegExp}function v(e,t){return Array.isArray(e)?e.reduce((function(e,n){if(t(n))e=n;else if(h(n)){var r=v(n,t);r&&(e=r)}return e}),void 0):h(e)?t(e)?e:Object.keys(e).reduce((function(n,r){if(h(e[r])){var o=v(e[r],t);o&&(n=o)}return n}),void 0):void 0}function h(e){var t=!1;return!e||!b(e)||y(e)||m(e)||d(e)||(t=!0),t}!function(e){e.notStarted="notStarted",e.inProgress="inProgress",e.complete="complete"}(r||(r={})),function(e){e.SHOW="SHOW",e.HIDE="HIDE",e.DISABLE="DISABLE",e.NONE=""}(o||(o={})),function(e){e.section="Section",e.step="Step",e.control="Control",e.layout="Layout",e.slot="Slot"}(i||(i={})),function(e){e.accordion="accordion",e.stepper="stepper"}(s||(s={}));var S={required:["name"],type:"object",properties:{name:{type:"string",minLength:1,maxLength:250},summary:{type:"string"},description:{type:"string"},status:{type:"string",default:r.notStarted,enum:Object.keys(r)},extent:{type:"object"},view:{type:"object",properties:{featuredContentIds:{type:"array",items:{type:"string"}},featuredImage:{type:"object"},showMap:{type:"boolean"},timeline:{type:"object"}}}}},g={type:"Layout",elements:[{type:"Section",options:{section:"stepper",scale:"l"},elements:[{type:"Step",labelKey:"{{i18nScope}}.sections.details.label",elements:[{type:"Section",labelKey:"{{i18nScope}}.sections.basicInfo.label",elements:[{labelKey:"{{i18nScope}}.fields.name.label",scope:"/properties/name",type:"Control"},{labelKey:"{{i18nScope}}.fields.summary.label",scope:"/properties/summary",type:"Control",options:{control:"hub-field-input-input",type:"textarea",helperText:{labelKey:"{{i18nScope}}.fields.summary.helperText"}}},{labelKey:"{{i18nScope}}.fields.description.label",scope:"/properties/description",type:"Control",options:{control:"hub-field-input-input",type:"textarea",helperText:{labelKey:"{{i18nScope}}.fields.description.helperText"}}}]}]},{type:"Step",labelKey:"{{i18nScope}}.sections.location.label",rule:{effect:o.DISABLE,condition:{scope:"/properties/name",schema:{const:""}}},elements:[{type:"Section",labelKey:"{{i18nScope}}.sections.location.label",elements:[{scope:"/properties/extent",type:"Control",options:{control:"hub-field-input-boundary-picker"}}]}]},{type:"Step",labelKey:"{{i18nScope}}.sections.statusAndTimeline.label",rule:{effect:o.DISABLE,condition:{scope:"/properties/name",schema:{const:""}}},elements:[{type:"Section",labelKey:"{{i18nScope}}.sections.status.label",elements:[{labelKey:"{{i18nScope}}.fields.status.label",scope:"/properties/status",type:"Control",options:{control:"hub-field-input-select",enum:{i18nScope:"{{i18nScope}}.fields.status.enum"}}}]},{type:"Section",labelKey:"{{i18nScope}}.sections.timeline.label",elements:[{scope:"/properties/view/properties/timeline",type:"Control",options:{control:"arcgis-hub-timeline-editor"}}]}]}]}]},x={type:"Layout",elements:[{type:"Section",labelKey:"{{i18nScope}}.sections.basicInfo.label",elements:[{labelKey:"{{i18nScope}}.fields.name.label",scope:"/properties/name",type:"Control"},{labelKey:"{{i18nScope}}.fields.summary.label",scope:"/properties/summary",type:"Control",options:{control:"hub-field-input-input",type:"textarea",helperText:{labelKey:"{{i18nScope}}.fields.summary.helperText"}}},{labelKey:"{{i18nScope}}.fields.description.label",scope:"/properties/description",type:"Control",options:{control:"hub-field-input-input",type:"textarea",helperText:{labelKey:"{{i18nScope}}.fields.description.helperText"}}},{labelKey:"{{i18nScope}}.fields.featuredImage.label",scope:"/properties/view/properties/featuredImage",type:"Control",options:{control:"hub-field-input-image-picker",maxWidth:727,maxHeight:484,aspectRatio:1.5,helperText:{labelKey:"{{i18nScope}}.fields.featuredImage.helperText"},sizeDescription:{labelKey:"{{i18nScope}}.fields.featuredImage.sizeDescription"}}}]},{type:"Section",labelKey:"{{i18nScope}}.sections.location.label",elements:[{scope:"/properties/extent",type:"Control",options:{control:"hub-field-input-boundary-picker"}},{labelKey:"{{i18nScope}}.fields.showMap.label",scope:"/properties/view/properties/showMap",type:"Control"}]},{type:"Section",labelKey:"{{i18nScope}}.sections.status.label",elements:[{scope:"/properties/status",type:"Control",labelKey:"{{i18nScope}}.fields.status.label",options:{control:"hub-field-input-select",enum:{i18nScope:"{{i18nScope}}.fields.status.enum"}}}]},{type:"Section",labelKey:"{{i18nScope}}.sections.timeline.label",elements:[{scope:"/properties/view/properties/timeline",type:"Control",options:{control:"arcgis-hub-timeline-editor"}}]},{type:"Section",labelKey:"{{i18nScope}}.sections.featuredContent.label",options:{helperText:{labelKey:"{{i18nScope}}.sections.featuredContent.helperText"}},elements:[{scope:"/properties/view/properties/featuredContentIds",type:"Control",options:{control:"hub-field-input-gallery-picker",targetEntity:"item",limit:4}}]}]},K="Hub Project",j={catalog:{schemaVersion:0},name:"No title provided",permissions:[],schemaVersion:1,status:r.notStarted,tags:[],typeKeywords:[K],view:{contacts:[],featuredContentIds:[],showMap:!0}},w={item:{type:K,title:"No Title Provided",description:"",snippet:"",tags:[],typeKeywords:[K],properties:{slug:"",schemaVersion:1}},data:{display:"about",permissions:[],status:r.notStarted,view:{contacts:[],featuredContentIds:[],showMap:!0}}};function k(e){return function(e,t){var n=[];return f(e,(function(e,r){return r.split(".").pop()===t&&n.push(e),e})),n.filter(c.u)}(e,"scope").map((function(e){return e.split("/")[2]})).filter(c.u)}function C(e,t){return e=function(e,t){var n=(0,c.c)(e);return Object.keys(n.properties).forEach((function(e){-1===t.indexOf(e)&&delete n.properties[e]})),n}(e,k(t))}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=(0,c.c)(e);return t.forEach((function(e){var t=v(n,(function(t){return!(null===t||void 0===t?void 0:t.schema)&&(null===t||void 0===t?void 0:t.scope)===e.scope}));t&&(t.options=Object.assign(Object.assign({},t.options||{}),e.options))})),n}function I(e,t){return Object.entries(e).reduce((function(e,n){var r=t[n[0]];return r&&e.push({filename:r,resource:n[1]}),e}),[])}function T(e,t){return E.apply(this,arguments)}function E(){return(E=(0,l.Z)((0,a.Z)().mark((function e(t,n){var r,o,i,s,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=Object.assign(Object.assign({},j),t)).slug||(o.slug=(0,p.e)(o.name,o.orgUrlKey)),e.next=4,(0,p.b)({slug:o.slug},n);case 4:return o.slug=e.sent,o.typeKeywords=(0,p.s)(o.typeKeywords,o.slug),i=new p.P((0,p.h)()),(s=i.objectToModel(o,(0,c.c)(w))).resources&&(r=I((0,c.c)(s.resources),p.E),delete s.resources),e.next=11,(0,p.i)(s,n);case 11:if(s=e.sent,!r){e.next=16;break}return e.next=15,(0,p.j)(s,r,n);case 15:s=e.sent;case 16:return l=i.modelToObject(s,{}),l=(0,p.k)(s,l,n),e.abrupt("return",l);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return L.apply(this,arguments)}function L(){return(L=(0,l.Z)((0,a.Z)().mark((function e(t,n){var r,o,i,s,l,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.b)({slug:t.slug,existingId:t.id},n);case 2:return t.slug=e.sent,e.next=5,(0,p.c)(t.id,n);case 5:return o=e.sent,i=new p.P((0,p.h)()),(s=i.objectToModel(t,o)).resources&&(r=I((0,c.c)(s.resources),p.E),delete s.resources),e.next=11,(0,p.d)(s,n);case 11:if(l=e.sent,!r){e.next=16;break}return e.next=15,(0,p.j)(l,r,n);case 15:l=e.sent;case 16:return u=i.modelToObject(l,t),u=(0,p.k)(o,u,n),e.abrupt("return",u);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return Z.apply(this,arguments)}function Z(){return Z=(0,l.Z)((0,a.Z)().mark((function e(t,n){var r,o,i,s,l=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=l.length>2&&void 0!==l[2]?l[2]:[],o=(0,c.c)(S),i=(0,c.c)(x),s=!1,e.t0=n,e.next="create"===e.t0?7:10;break;case 7:return i=(0,c.c)(g),s=!0,e.abrupt("break",10);case 10:return s&&(o=C(o,i)),i=O(i,r),i=(0,u.i)(i,{i18nScope:t}),e.abrupt("return",Promise.resolve({schema:o,uiSchema:i}));case 14:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}},61584:function(e,t,n){n.d(t,{i:function(){return b}});var r=function(e,t,n){return void 0===n&&(n=void 0),t.split(".").reduce((function(e,t){return e?e[t]:n}),e)};function o(e,t){return Object.keys(e).reduce((function(n,r){return n[r]=t(e[r],r,e),n}),{})}function i(e,t,n){return n=n||"",Array.isArray(e)?e.map(r):!e||"object"!==typeof e||function(e){return e instanceof Date}(e)||function(e){return e instanceof RegExp}(e)||function(e){return"function"===typeof e}(e)?t(e,n):Object.assign({},e,o(e,r));function r(e,r){return i(e,t,n?n+"."+r:r)}}function s(e,t){return Array.isArray(e)?function(e){var t=e,n=e.reduce((function(e,t){if(p(t)&&l(t)){var n=a(t);n>e&&(e=n)}return e}),-1);n>-1&&(t=0===n?[]:"{{delete:"+(n-1)+"}}");return t}(e.map(n).filter((function(e){return null!==e&&void 0!==e}))):e&&"object"===typeof e?function(e){var t,n={obj:{},maxLevel:-1},r=Object.keys(e).reduce((function(t,n){var r=e[n];if(p(r)&&l(r)){var o=a(r);o>t.maxLevel&&(t.maxLevel=o)}else t.obj[n]=r;return t}),n);t=r.maxLevel>0?1===r.maxLevel?void 0:"{{delete:"+(r.maxLevel-1)+"}}":r.obj;return t}(o(e,n)):function(e){var t=e;"string"===typeof e&&l(e)&&(t=function(e){var t=e,n=a(e);t=0===n?void 0:"{{delete:"+n+"}}";return t}(e));return t}(e);function n(e,t){return s(e)}}var a=function(e){return parseInt(e.replace(/{|}/g,"").split(":")[1])};function l(e){return!(!e||"string"!==typeof e)&&e.indexOf("{{delete")>-1}var p=function(e){return"string"===typeof e};function c(e,t,n,r){void 0===r&&(r=0);var o=t;return t||(o="{{delete:"+r+"}}"),o}var u=function e(t){var n={};if(Array.isArray(t))n=t.map(e);else if("object"===typeof t)for(var r in t)null!=t[r]&&"object"===typeof t[r]?n[r]=e(t[r]):n[r]=t[r];else n=t;return n},f=/{{\s*?[\w].*?}}/g;function y(e){return e||""===e||0===e}function d(e,t,n){if(void 0===n&&(n=null),(n=u(n)||{}).optional)throw new Error("Please do not pass in an `optional` transform; adlib provides that internally.");n.optional=c;var o=i(e,(function(e,o){if("string"!==typeof e)return e;var i,s=e.match(f);if(s&&s.length){var a=s.map((function(e){var o=!1,i=e.replace(/{|}/g,"").trim();if(i.indexOf("||")>-1){var s=i.split("||").map((function(e){return e.trim()})),a=s.length;i=s.find((function(e,n){return function(e,t){var n=e.split(":")[0],o=r(t,n,null);return null!==o&&void 0!==o}(e,t)?e:n+1===a&&(o=!0,isNaN(e)||(e=parseInt(e)),e)}))}var l={key:e,value:i};if(!o){var p=function(e,t,n){var o,i=e.split(":");if(i.length>1){var s,a=i[0],l=i[1];if(i[2]&&(s=i[2]),!n||!n[l]||"function"!==typeof n[l])throw new Error("Attempted to apply non-existant transform "+l+" on "+a+" with params "+e);o=r(t,a),o=n[l](a,o,t,s)}else o=r(t,e);return o}(i,t,n);l.value=y(p)?p:e}return l}));return a.forEach((function(t){e===t.key?("string"===typeof t.value&&(isNaN(t.value)||""===t.value||(t.value.indexOf(".")>-1?t.value=parseFloat(t.value):"0"!==t.value[0]&&(t.value=parseInt(t.value)))),i=t.value):e=e.replace(t.key,t.value)})),y(i)?i:e}return e}));return s(o)}function b(e,t,n){return d(e,t,n)}}}]);
//# sourceMappingURL=67908.f6ec6463.chunk.js.map
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[60195,71907],{71907:function(e,t,n){n.d(t,{D:function(){return d}});var r="randomUUID"in crypto;function d(){if(r)return crypto.randomUUID();var e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var t=function(t){return e[t].toString(16).padStart(4,"0")};return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}},56601:function(e,t,n){n.d(t,{dU:function(){return f},lQ:function(){return I},o1:function(){return y}});var r=n(43144),d=n(15671),i=n(97326),l=n(60136),a=n(92572),u=n(27366),o=n(91505),c=n(84652),s=(n(32718),n(25243),n(10064),n(93169),n(69912)),f=new o.Z.EventEmitter,b="esri.layers.mixins.EditBusLayer",v=Symbol(b);function I(e){return null!=e&&"object"==typeof e&&v in e}var y=function(e){var t,n=function(e){(0,l.Z)(u,e);var n=(0,a.Z)(u);function u(){var e;(0,d.Z)(this,u);for(var r=arguments.length,l=new Array(r),a=0;a<r;a++)l[a]=arguments[a];return(e=n.call.apply(n,[this].concat(l)))[t]=!0,e.when().then((function(){e.own([f.on("edits",(function(t){var n,r,d,l="layer"in t?t.layer:null,a="layer"in t?null===(n=t.layer)||void 0===n?void 0:n.url:t.serviceUrl,u="layer"in t?null===(r=t.layer)||void 0===r?void 0:r.layerId:t.layerId,o=t.event;if(l!==(0,i.Z)(e)&&a===e.url)if(null==u||null==e.layerId||u!==e.layerId){var s=null===(d=o.editedFeatures)||void 0===d?void 0:d.find((function(t){return t.layerId===e.layerId}));if(s){var f=s.editedFeatures,b=f.adds,v=f.updates,I=f.deletes,y={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:b?b.map((function(t){var n=t.attributes;return{objectId:e.objectIdField&&n[e.objectIdField],globalId:e.globalIdField&&n[e.globalIdField]}})):[],deletedFeatures:I?I.map((function(t){var n=t.attributes;return{objectId:e.objectIdField&&n[e.objectIdField],globalId:e.globalIdField&&n[e.globalIdField]}})):[],updatedFeatures:v?v.map((function(t){var n=t.current.attributes;return{objectId:e.objectIdField&&n[e.objectIdField],globalId:e.globalIdField&&n[e.globalIdField]}})):[],editedFeatures:(0,c.d9)(o.editedFeatures),exceededTransferLimit:!1};e.emit("edits",y)}}else e.emit("edits",(0,c.d9)(o))}))])}),(function(){})),e}return(0,r.Z)(u)}(e);return t=v,n=(0,u._)([(0,s.j)(b)],n),n}}}]);
//# sourceMappingURL=60195.4f39183b.chunk.js.map
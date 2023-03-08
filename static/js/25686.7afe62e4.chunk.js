"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[25686],{3182:function(e,t,n){n.d(t,{S6:function(){return l},nd:function(){return c},u_:function(){return u}});var r=n(60136),i=n(92572),a=n(15671),s=n(43144),o=n(92026),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,a.Z)(this,e),this.geometry=t,this.attributes=n,this.centroid=r,this.objectId=i,this.displayId=0,this.geohashX=0,this.geohashY=0}return(0,s.Z)(e,[{key:"weakClone",value:function(){var t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}]),e}();function l(e){return!((0,o.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}var c=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n)}(u)},6908:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(15671),i=n(43144),a=function(){function e(){(0,r.Z)(this,e),this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}return(0,i.Z)(e,[{key:"weakClone",value:function(){var t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}]),e}()},80457:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(29439),i=n(93433),a=n(15671),s=n(43144),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,a.Z)(this,e),this.lengths=null!==t&&void 0!==t?t:[],this.coords=null!==n&&void 0!==n?n:[],this.hasIndeterminateRingOrder=r}return(0,s.Z)(e,[{key:"isPoint",get:function(){return 0===this.lengths.length}},{key:"maxLength",get:function(){return Math.max.apply(Math,(0,i.Z)(this.lengths))}},{key:"size",get:function(){return this.lengths.reduce((function(e,t){return e+t}))}},{key:"forEachVertex",value:function(e){var t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(var n=0;n<this.lengths.length;n++){for(var r=this.lengths[n],i=0;i<r;i++)e(this.coords[2*(i+t)],this.coords[2*(i+t)+1]);t+=r}}},{key:"clone",value:function(t){return t?(t.set(this.coords),new e(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new e(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}],[{key:"fromRect",value:function(t){var n=(0,r.Z)(t,4),i=n[0],a=n[1],s=n[2]-i,o=n[3]-a;return new e([5],[i,a,s,0,0,o,-s,0,0,-o])}}]),e}()},22585:function(e,t,n){function r(e){var t={};for(var n in e)if("declaredClass"!==n){var i=e[n];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){t[n]=[];for(var a=0;a<i.length;a++)t[n][a]=r(i[a])}else"object"==typeof i?i.toJSON&&(t[n]=JSON.stringify(i)):t[n]=i}return t}n.d(t,{A:function(){return r}})},5192:function(e,t,n){n.d(t,{Ev:function(){return b},JT:function(){return m},Vn:function(){return E},Vr:function(){return R},hH:function(){return Z},n7:function(){return S},qp:function(){return v}});var r=n(74165),i=n(1413),a=n(15861),s=n(76200),o=n(92026),u=n(35995),l=n(77981),c=n(91340),d=n(22585),h=n(27607),f=n(68620),y="Layer does not support extent calculation.";function p(e,t){var n=e.geometry,r=e.toJSON();delete r.compactGeometryEnabled,delete r.defaultSpatialReferenceEnabled;var i,a,s,u=r;if((0,o.pC)(n)&&(a=n.spatialReference,s=n.spatialReference.wkid||JSON.stringify(n.spatialReference),u.geometryType=(0,l.Ji)(n),u.geometry=function(e,t){if(t&&"extent"===e.type)return"".concat(e.xmin,",").concat(e.ymin,",").concat(e.xmax,",").concat(e.ymax);if(t&&"point"===e.type)return"".concat(e.x,",").concat(e.y);var n=e.toJSON();return delete n.spatialReference,JSON.stringify(n)}(n,e.compactGeometryEnabled),u.inSR=s),r.groupByFieldsForStatistics&&(u.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(u.objectIds=r.objectIds.join(",")),r.orderByFields&&(u.orderByFields=r.orderByFields.join(",")),!r.outFields||!r.returnDistinctValues&&(null!==t&&void 0!==t&&t.returnCountOnly||null!==t&&void 0!==t&&t.returnExtentOnly||null!==t&&void 0!==t&&t.returnIdsOnly)?delete u.outFields:r.outFields.includes("*")?u.outFields="*":u.outFields=r.outFields.join(","),r.outSR?(u.outSR=r.outSR.wkid||JSON.stringify(r.outSR),i=e.outSpatialReference):n&&(r.returnGeometry||r.returnCentroid)&&(u.outSR=u.inSR,i=a),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(u.outStatistics=JSON.stringify(r.outStatistics)),r.fullText&&(u.fullText=JSON.stringify(r.fullText)),r.pixelSize&&(u.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&(0,o.pC)(a)&&(0,o.pC)(e.quantizationParameters)&&(0,o.pC)(e.quantizationParameters.extent)&&a.equals(e.quantizationParameters.extent.spatialReference)&&delete r.quantizationParameters.extent.spatialReference,u.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.parameterValues&&(u.parameterValues=JSON.stringify(r.parameterValues)),r.rangeValues&&(u.rangeValues=JSON.stringify(r.rangeValues)),r.dynamicDataSource&&(u.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r.timeExtent){var c=r.timeExtent,d=c.start,h=c.end;null==d&&null==h||(u.time=d===h?d:"".concat(null!==d&&void 0!==d?d:"null",",").concat(null!==h&&void 0!==h?h:"null")),delete r.timeExtent}return e.defaultSpatialReferenceEnabled&&(0,o.pC)(a)&&(0,o.pC)(i)&&a.equals(i)&&(u.defaultSR=u.inSR,delete u.inSR,delete u.outSR),u}function m(e,t,n,r){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)((0,r.Z)().mark((function e(t,n,i,a){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,o.pC)(n.timeExtent)||!n.timeExtent.isEmpty){e.next=4;break}e.t0={data:{features:[]}},e.next=7;break;case 4:return e.next=6,E(t,n,"json",a);case 6:e.t0=e.sent;case 7:return s=e.t0,e.abrupt("return",((0,f.p)(n,i,s.data),s));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n,r){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function e(t,n,i,a){var s,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,o.pC)(n.timeExtent)||!n.timeExtent.isEmpty){e.next=2;break}return e.abrupt("return",{data:i.createFeatureResult()});case 2:return e.next=4,S(t,n,a);case 4:return s=e.sent,u=s,e.abrupt("return",(u.data=(0,h.C)(s.data,i),u));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){return E(e,t,"pbf",n)}function b(e,t,n){return(0,o.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):E(e,t,"json",n,{returnIdsOnly:!0})}function Z(e,t,n){return(0,o.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(e,t,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function R(e,t,n){return(0,o.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):E(e,t,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(y);if(t.hasOwnProperty("count"))throw new Error(y);return e}))}function E(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l="string"==typeof e?(0,u.mN)(e):e,h=t.geometry?[t.geometry]:[];return r.responseType="pbf"===n?"array-buffer":"json",(0,c.aX)(h,null,r).then((function(e){var c=e&&e[0];(0,o.pC)(c)&&((t=t.clone()).geometry=c);var h=(0,d.A)((0,i.Z)((0,i.Z)((0,i.Z)({},l.query),{},{f:n},a),p(t,a)));return(0,s.default)((0,u.v_)(l.path,"query"),(0,i.Z)((0,i.Z)({},r),{},{query:(0,i.Z)((0,i.Z)({},h),r.query)}))}))}},68620:function(e,t,n){n.d(t,{p:function(){return s}});var r=n(37762),i=n(92026),a=n(93501);function s(e,t,n){if(n&&n.features&&n.hasZ){var s=(0,a.k)(n.geometryType,t,e.outSpatialReference);if(!(0,i.Wi)(s)){var o,u=(0,r.Z)(n.features);try{for(u.s();!(o=u.n()).done;){s(o.value.geometry)}}catch(l){u.e(l)}finally{u.f()}}}}}}]);
//# sourceMappingURL=25686.7afe62e4.chunk.js.map
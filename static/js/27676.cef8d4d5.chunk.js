"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[27676],{77188:function(e,t,r){r.d(t,{Z:function(){return B}});var n=r(37762),a=r(29439),i=r(74165),u=r(15861),o=r(15671),s=r(43144),c=r(60136),l=r(92572),f=r(27366),p=r(31319),d=r(10064),h=r(93169),y=r(92026),m=r(66978),v=r(35995),x=r(49861),b=(r(25243),r(63780),r(69912)),Z=r(64020),_=r(23084),S=r(34211),g=r(1413),k=(r(59486),r(5192)),C=r(21149),F=r(53866);function w(){return w=(0,u.Z)((0,i.Z)().mark((function e(t,r,n){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,_.en)(t),e.abrupt("return",(0,k.Vr)(a,C.Z.from(r),(0,g.Z)({},n)).then((function(e){return{count:e.data.count,extent:F.Z.fromJSON(e.data.extent)}})));case 2:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var O=r(24246),P=r(77946),R=r(93501),D=r(83406);function G(e,t){return t}function E(e,t,r,n){switch(r){case 0:return j(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?j(e,t+n,1):function(e,t,r){var n=e.translate,a=e.scale;return n[r]-t*a[r]}(e,t+n,1)}}function q(e,t,r,n){return 2===r?j(e,t,2):E(e,t,r,n)}function T(e,t,r,n){return 2===r?j(e,t,3):E(e,t,r,n)}function V(e,t,r,n){return 3===r?j(e,t,3):q(e,t,r,n)}function j(e,t,r){var n=e.translate,a=e.scale;return n[r]+t*a[r]}var J=function(){function e(t){(0,o.Z)(this,e),this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=function(){return(0,s.Z)((function e(){(0,o.Z)(this,e)}))}()}return(0,s.Z)(e,[{key:"createFeatureResult",value:function(){return{fields:[],features:[]}}},{key:"finishFeatureResult",value:function(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){return(0,s.Z)((function e(){(0,o.Z)(this,e)}))}(),this._coordinateBuffer=null,this._lengths.length=0,e.hasZ){var t=(0,R.k)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(!(0,y.Wi)(t)){var r,a=(0,n.Z)(e.features);try{for(a.s();!(r=a.n()).done;){t(r.value.geometry)}}catch(i){a.e(i)}finally{a.f()}}}}},{key:"createSpatialReference",value:function(){return{}}},{key:"addField",value:function(e,t){var r=e.fields;(0,y.O3)(r),r.push(t);var a=r.map((function(e){return e.name}));this._attributesConstructor=function(){var e,t=(0,n.Z)(a);try{for(t.s();!(e=t.n()).done;){this[e.value]=null}}catch(r){t.e(r)}finally{t.f()}}}},{key:"addFeature",value:function(e,t){e.features.push(t)}},{key:"prepareFeatures",value:function(e){var t=this;switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=function(e,r,n){return t.addCoordinatePoint(e,r,n)},this.createGeometry=function(e){return t.createPointGeometry(e)};break;case"esriGeometryPolygon":this.addCoordinate=function(e,r,n){return t._addCoordinatePolygon(e,r,n)},this.createGeometry=function(e){return t._createPolygonGeometry(e)};break;case"esriGeometryPolyline":this.addCoordinate=function(e,r,n){return t._addCoordinatePolyline(e,r,n)},this.createGeometry=function(e){return t._createPolylineGeometry(e)};break;case"esriGeometryMultipoint":this.addCoordinate=function(e,r,n){return t._addCoordinateMultipoint(e,r,n)},this.createGeometry=function(e){return t._createMultipointGeometry(e)}}}},{key:"createFeature",value:function(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}},{key:"allocateCoordinates",value:function(){}},{key:"addLength",value:function(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}},{key:"addQueryGeometry",value:function(e,t){var r=t.queryGeometry,n=t.queryGeometryType,a=(0,D.$g)(r.clone(),r,!1,!1,this._transform),i=(0,D.di)(a,n,!1,!1);e.queryGeometryType=n,e.queryGeometry=(0,g.Z)({},i)}},{key:"createPointGeometry",value:function(e){var t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}},{key:"addCoordinatePoint",value:function(e,t,r){var n=(0,y.s3)(this._transform,"transform");switch(t=this._applyTransform(n,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}},{key:"_transformPathLikeValue",value:function(e,t){var r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);var n=(0,y.s3)(this._transform,"transform");return this._applyTransform(n,e,t,r)}},{key:"_addCoordinatePolyline",value:function(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}},{key:"_addCoordinatePolygon",value:function(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}},{key:"_addCoordinateMultipoint",value:function(e,t,r){0===r&&e.points.push([]);var n=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)}},{key:"_createPolygonGeometry",value:function(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createPolylineGeometry",value:function(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createMultipointGeometry",value:function(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_dehydratedAddPointsCoordinate",value:function(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);var n=this._transformPathLikeValue(t,r),a=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),a.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=n}},{key:"_deriveApplyTransform",value:function(e){var t=e.hasZ,r=e.hasM;return t&&r?V:t?q:r?T:E}}]),e}(),I=r(49818);function N(e,t,r){return z.apply(this,arguments)}function z(){return z=(0,u.Z)((0,i.Z)().mark((function e(t,r,n){var a,u,o,s,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,_.en)(t),u=(0,g.Z)({},n),o=C.Z.from(r),s=!o.quantizationParameters,e.next=6,(0,k.qp)(a,o,new J({sourceSpatialReference:o.sourceSpatialReference,applyTransform:s}),u);case 6:return c=e.sent,l=c.data,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var A=function(e){(0,c.Z)(f,e);var t=(0,l.Z)(f);function f(e){var r;return(0,o.Z)(this,f),(r=t.call(this,e)).dynamicDataSource=null,r.fieldsIndex=null,r.gdbVersion=null,r.infoFor3D=null,r.pbfSupported=!1,r.queryAttachmentsSupported=!1,r.sourceSpatialReference=null,r.url=null,r}return(0,s.Z)(f,[{key:"parsedUrl",get:function(){return(0,v.mN)(this.url)}},{key:"execute",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,r){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.executeJSON(t,r);case 2:return n=e.sent,e.abrupt("return",this.featureSetFromJSON(t,n,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeJSON",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,r){var n,a,u,o,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this._normalizeQuery(t),u=null!=(null===(n=t.outStatistics)||void 0===n?void 0:n[0]),o=(0,h.Z)("featurelayer-pbf-statistics"),s=!u||o,!this.pbfSupported||!s){e.next=13;break}return e.prev=2,e.next=5,N(this.url,a,r);case 5:c=e.sent,e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(2),"query:parsing-pbf"===e.t0.name){e.next=12;break}throw e.t0;case 12:this.pbfSupported=!1;case 13:if(e.t1=this.pbfSupported&&s,e.t1){e.next=18;break}return e.next=17,(0,P.F)(this.url,a,r);case 17:c=e.sent;case 18:return this._normalizeFields(c.fields),e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"featureSetFromJSON",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n,a){var u,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._queryIs3DObjectFormat(t)&&!(0,y.Wi)(this.infoFor3D)&&n.assetMaps&&n.features&&n.features.length){e.next=2;break}return e.abrupt("return",I.Z.fromJSON(n));case 2:return e.next=4,(0,m.Hl)(Promise.all([r.e(25158),r.e(46333),r.e(45957)]).then(r.bind(r,45957)),a);case 4:return u=e.sent,o=u.meshFeatureSetFromJSON,e.abrupt("return",o(t,this.infoFor3D,n));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"executeForCount",value:function(e,t){return(0,S.P)(this.url,this._normalizeQuery(e),t)}},{key:"executeForExtent",value:function(e,t){return function(e,t,r){return w.apply(this,arguments)}(this.url,this._normalizeQuery(e),t)}},{key:"executeForIds",value:function(e,t){return(0,O.G)(this.url,this._normalizeQuery(e),t)}},{key:"executeRelationshipQuery",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var u,o,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(Promise.all([r.e(99086).then(r.bind(r,99086)),r.e(12964).then(r.bind(r,12964))]),n);case 2:return u=e.sent,o=(0,a.Z)(u,2),s=o[0].default,c=o[1].executeRelationshipQuery,e.abrupt("return",(t=s.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),c(this.url,t,n)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeRelationshipQueryForCount",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var u,o,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(Promise.all([r.e(99086).then(r.bind(r,99086)),r.e(12964).then(r.bind(r,12964))]),n);case 2:return u=e.sent,o=(0,a.Z)(u,2),s=o[0].default,c=o[1].executeRelationshipQueryForCount,e.abrupt("return",(t=s.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),c(this.url,t,n)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeAttachmentQuery",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var a,u,o,s,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(59301).then(r.bind(r,59301)),n);case 2:return a=e.sent,u=a.executeAttachmentQuery,o=a.fetchAttachments,s=a.processAttachmentQueryResult,c=(0,_.en)(this.url),e.t0=s,e.t1=c,e.next=11,this.queryAttachmentsSupported?u(c,t,n):o(c,t,n);case 11:return e.t2=e.sent,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 13:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeTopFeaturesQuery",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(82200).then(r.bind(r,82200)),n);case 2:return a=e.sent,u=a.executeTopFeaturesQuery,e.abrupt("return",u(this.parsedUrl,t,this.sourceSpatialReference,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeForTopIds",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(75182).then(r.bind(r,75182)),n);case 2:return a=e.sent,u=a.executeForTopIds,e.abrupt("return",u(this.parsedUrl,t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeForTopExtents",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(55641).then(r.bind(r,55641)),n);case 2:return a=e.sent,u=a.executeForTopExtents,e.abrupt("return",u(this.parsedUrl,t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"executeForTopCount",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Hl)(r.e(19406).then(r.bind(r,19406)),n);case 2:return a=e.sent,u=a.executeForTopCount,e.abrupt("return",u(this.parsedUrl,t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_normalizeQuery",value:function(e){var t=C.Z.from(e);if(t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&((t=t===e?t.clone():t).gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?Z.n.from(e.dynamicDataSource):this.dynamicDataSource),(0,y.pC)(this.infoFor3D)&&this._queryIs3DObjectFormat(e)){(t=t===e?t.clone():t).formatOf3DObjects=null;var r,a=(0,n.Z)(this.infoFor3D.queryFormats);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("3D_glb"===i){t.formatOf3DObjects=i;break}"3D_gltf"!==i||t.formatOf3DObjects||(t.formatOf3DObjects=i)}}catch(g){a.e(g)}finally{a.f()}if(!t.formatOf3DObjects)throw new d.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if((0,y.Wi)(t.outFields)||!t.outFields.includes("*")){t=t===e?t.clone():t,(0,y.Wi)(t.outFields)&&(t.outFields=[]);var u=this.infoFor3D.transformFieldRoles,o=u.originX,s=u.originY,c=u.originZ,l=u.translationX,f=u.translationY,p=u.translationZ,h=u.scaleX,m=u.scaleY,v=u.scaleZ,x=u.rotationX,b=u.rotationY,_=u.rotationZ,S=u.rotationDeg;t.outFields.push(o,s,c,l,f,p,h,m,v,x,b,_,S)}}return t}},{key:"_normalizeFields",value:function(e){if((0,y.pC)(this.fieldsIndex)&&(0,y.pC)(e)){var t,r=(0,n.Z)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value,i=this.fieldsIndex.get(a.name);i&&Object.assign(a,i.toJSON())}}catch(u){r.e(u)}finally{r.f()}}}},{key:"_queryIs3DObjectFormat",value:function(e){return(0,y.pC)(this.infoFor3D)&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}}]),f}(p.Z);(0,f._)([(0,x.Cb)({type:Z.n})],A.prototype,"dynamicDataSource",void 0),(0,f._)([(0,x.Cb)()],A.prototype,"fieldsIndex",void 0),(0,f._)([(0,x.Cb)()],A.prototype,"gdbVersion",void 0),(0,f._)([(0,x.Cb)()],A.prototype,"infoFor3D",void 0),(0,f._)([(0,x.Cb)({readOnly:!0})],A.prototype,"parsedUrl",null),(0,f._)([(0,x.Cb)()],A.prototype,"pbfSupported",void 0),(0,f._)([(0,x.Cb)()],A.prototype,"queryAttachmentsSupported",void 0),(0,f._)([(0,x.Cb)()],A.prototype,"sourceSpatialReference",void 0),(0,f._)([(0,x.Cb)({type:String})],A.prototype,"url",void 0);var B=A=(0,f._)([(0,b.j)("esri.tasks.QueryTask")],A)},22585:function(e,t,r){function n(e){var t={};for(var r in e)if("declaredClass"!==r){var a=e[r];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){t[r]=[];for(var i=0;i<a.length;i++)t[r][i]=n(a[i])}else"object"==typeof a?a.toJSON&&(t[r]=JSON.stringify(a)):t[r]=a}return t}r.d(t,{A:function(){return n}})},34211:function(e,t,r){r.d(t,{P:function(){return c}});var n=r(74165),a=r(1413),i=r(15861),u=r(23084),o=r(5192),s=r(21149);function c(e,t,r){return l.apply(this,arguments)}function l(){return l=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(0,u.en)(t),e.abrupt("return",(0,o.hH)(c,s.Z.from(r),(0,a.Z)({},i)).then((function(e){return e.data.count})));case 2:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},24246:function(e,t,r){r.d(t,{G:function(){return c}});var n=r(74165),a=r(1413),i=r(15861),u=r(23084),o=r(5192),s=r(21149);function c(e,t,r){return l.apply(this,arguments)}function l(){return l=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(0,u.en)(t),e.abrupt("return",(0,o.Ev)(c,s.Z.from(r),(0,a.Z)({},i)).then((function(e){return e.data.objectIds})));case 2:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},77946:function(e,t,r){r.d(t,{F:function(){return p},e:function(){return l}});var n=r(1413),a=r(74165),i=r(15861),u=r(23084),o=r(5192),s=r(49818),c=r(21149);function l(e,t,r){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,a.Z)().mark((function e(t,r,n){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,r,n);case 2:return i=e.sent,e.abrupt("return",s.Z.fromJSON(i));case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(e,t,r){return d.apply(this,arguments)}function d(){return d=(0,i.Z)((0,a.Z)().mark((function e(t,r,i){var s,l,f,p,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,u.en)(t),l=(0,n.Z)({},i),f=c.Z.from(r),e.next=5,(0,o.JT)(s,f,f.sourceSpatialReference,l);case 5:return p=e.sent,d=p.data,e.abrupt("return",d);case 8:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}},5192:function(e,t,r){r.d(t,{Ev:function(){return _},JT:function(){return m},Vn:function(){return k},Vr:function(){return g},hH:function(){return S},n7:function(){return Z},qp:function(){return x}});var n=r(74165),a=r(1413),i=r(15861),u=r(76200),o=r(92026),s=r(35995),c=r(77981),l=r(91340),f=r(22585),p=r(27607),d=r(68620),h="Layer does not support extent calculation.";function y(e,t){var r=e.geometry,n=e.toJSON();delete n.compactGeometryEnabled,delete n.defaultSpatialReferenceEnabled;var a,i,u,s=n;if((0,o.pC)(r)&&(i=r.spatialReference,u=r.spatialReference.wkid||JSON.stringify(r.spatialReference),s.geometryType=(0,c.Ji)(r),s.geometry=function(e,t){if(t&&"extent"===e.type)return"".concat(e.xmin,",").concat(e.ymin,",").concat(e.xmax,",").concat(e.ymax);if(t&&"point"===e.type)return"".concat(e.x,",").concat(e.y);var r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}(r,e.compactGeometryEnabled),s.inSR=u),n.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(s.objectIds=n.objectIds.join(",")),n.orderByFields&&(s.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(null!==t&&void 0!==t&&t.returnCountOnly||null!==t&&void 0!==t&&t.returnExtentOnly||null!==t&&void 0!==t&&t.returnIdsOnly)?delete s.outFields:n.outFields.includes("*")?s.outFields="*":s.outFields=n.outFields.join(","),n.outSR?(s.outSR=n.outSR.wkid||JSON.stringify(n.outSR),a=e.outSpatialReference):r&&(n.returnGeometry||n.returnCentroid)&&(s.outSR=s.inSR,a=i),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(s.outStatistics=JSON.stringify(n.outStatistics)),n.fullText&&(s.fullText=JSON.stringify(n.fullText)),n.pixelSize&&(s.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&(0,o.pC)(i)&&(0,o.pC)(e.quantizationParameters)&&(0,o.pC)(e.quantizationParameters.extent)&&i.equals(e.quantizationParameters.extent.spatialReference)&&delete n.quantizationParameters.extent.spatialReference,s.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(s.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(s.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(s.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){var l=n.timeExtent,f=l.start,p=l.end;null==f&&null==p||(s.time=f===p?f:"".concat(null!==f&&void 0!==f?f:"null",",").concat(null!==p&&void 0!==p?p:"null")),delete n.timeExtent}return e.defaultSpatialReferenceEnabled&&(0,o.pC)(i)&&(0,o.pC)(a)&&i.equals(a)&&(s.defaultSR=s.inSR,delete s.inSR,delete s.outSR),s}function m(e,t,r,n){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)((0,n.Z)().mark((function e(t,r,a,i){var u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,o.pC)(r.timeExtent)||!r.timeExtent.isEmpty){e.next=4;break}e.t0={data:{features:[]}},e.next=7;break;case 4:return e.next=6,k(t,r,"json",i);case 6:e.t0=e.sent;case 7:return u=e.t0,e.abrupt("return",((0,d.p)(r,a,u.data),u));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,r,n){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)((0,n.Z)().mark((function e(t,r,a,i){var u,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,o.pC)(r.timeExtent)||!r.timeExtent.isEmpty){e.next=2;break}return e.abrupt("return",{data:a.createFeatureResult()});case 2:return e.next=4,Z(t,r,i);case 4:return u=e.sent,s=u,e.abrupt("return",(s.data=(0,p.C)(u.data,a),s));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,r){return k(e,t,"pbf",r)}function _(e,t,r){return(0,o.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):k(e,t,"json",r,{returnIdsOnly:!0})}function S(e,t,r){return(0,o.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):k(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function g(e,t,r){return(0,o.pC)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):k(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(h);if(t.hasOwnProperty("count"))throw new Error(h);return e}))}function k(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c="string"==typeof e?(0,s.mN)(e):e,p=t.geometry?[t.geometry]:[];return n.responseType="pbf"===r?"array-buffer":"json",(0,l.aX)(p,null,n).then((function(e){var l=e&&e[0];(0,o.pC)(l)&&((t=t.clone()).geometry=l);var p=(0,f.A)((0,a.Z)((0,a.Z)((0,a.Z)({},c.query),{},{f:r},i),y(t,i)));return(0,u.default)((0,s.v_)(c.path,"query"),(0,a.Z)((0,a.Z)({},n),{},{query:(0,a.Z)((0,a.Z)({},p),n.query)}))}))}}}]);
//# sourceMappingURL=27676.cef8d4d5.chunk.js.map
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[25655],{6693:function(e,r,a){a.d(r,{h:function(){return p}});var t=a(43144),n=a(15671),i=a(60136),o=a(92572),l=a(27366),c=a(49861),s=(a(25243),a(63780),a(69912)),u=a(60676),y={read:{reader:u.ij},write:{allowNull:!0,writer:u.cW}},p=function(e){var r=function(e){(0,i.Z)(a,e);var r=(0,o.Z)(a);function a(){var e;return(0,n.Z)(this,a),(e=r.apply(this,arguments)).blendMode="normal",e.effect=null,e}return(0,t.Z)(a)}(e);return(0,l._)([(0,c.Cb)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],r.prototype,"blendMode",void 0),(0,l._)([(0,c.Cb)({json:{read:!1,write:!1,origins:{"web-map":y,"portal-item":y}}})],r.prototype,"effect",void 0),r=(0,l._)([(0,s.j)("esri.layers.mixins.BlendLayer")],r)}},6061:function(e,r,a){a.d(r,{q:function(){return L}});var t=a(1413),n=a(15671),i=a(43144),o=a(11752),l=a(61120),c=a(60136),s=a(92572),u=a(27366),y=a(10064),p=a(35995),d=a(49861),v=(a(25243),a(63780),a(69912)),S=a(31201),f=a(92562),h=a(18987),m={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0}},g=a(61289),L=function(e){var r=function(e){(0,c.Z)(a,e);var r=(0,s.Z)(a);function a(){var e;return(0,n.Z)(this,a),(e=r.apply(this,arguments)).title=null,e}return(0,i.Z)(a,[{key:"writeListMode",value:function(e,r,a,t){(t&&"ground"===t.layerContainerType||e&&(0,h.d)(this,a,{},t))&&(r[a]=e)}},{key:"writeOperationalLayerType",value:function(e,r,a,t){!e||t&&"tables"===t.layerContainerType||(r.layerType=e)}},{key:"writeTitle",value:function(e,r){r.title=null!==e&&void 0!==e?e:"Layer"}},{key:"read",value:function(e,r){var t=this;r&&(r.layer=this),(0,f.$)(this,e,(function(r){return(0,o.Z)((0,l.Z)(a.prototype),"read",t).call(t,e,r)}),r)}},{key:"write",value:function(e,r){var n;if(null!==r&&void 0!==r&&r.origin){var i,c="".concat(r.origin,"/").concat(r.layerContainerType||"operational-layers"),s=m[c],u=s&&s[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===c&&(u=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===c&&(u=!1),!u)return null!==(i=r.messages)&&void 0!==i&&i.push(new y.Z("layer:unsupported","Layers (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' are not supported in the context of '").concat(c,"'"),{layer:this})),null}var d=(0,o.Z)((0,l.Z)(a.prototype),"write",this).call(this,e,(0,t.Z)((0,t.Z)({},r),{},{layer:this})),v=!!r&&!!r.messages&&!!r.messages.filter((function(e){return e instanceof y.Z&&"web-document-write:property-required"===e.name})).length;return(0,p.jc)(null===d||void 0===d?void 0:d.url)?(null!==r&&void 0!==r&&null!==(n=r.messages)&&void 0!==n&&n.push(new y.Z("layer:invalid-url","Layer (".concat(this.title,", ").concat(this.id,") of type '").concat(this.declaredClass,"' using a Blob URL cannot be written to web scenes and web maps"),{layer:this})),null):!this.url&&v?null:d}},{key:"beforeSave",value:function(){}}]),a}(e);return(0,u._)([(0,d.Cb)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],r.prototype,"id",void 0),(0,u._)([(0,d.Cb)(g.rT)],r.prototype,"listMode",void 0),(0,u._)([(0,S.c)("listMode")],r.prototype,"writeListMode",null),(0,u._)([(0,d.Cb)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],r.prototype,"operationalLayerType",void 0),(0,u._)([(0,S.c)("operationalLayerType")],r.prototype,"writeOperationalLayerType",null),(0,u._)([(0,d.Cb)(g.Oh)],r.prototype,"opacity",void 0),(0,u._)([(0,d.Cb)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],r.prototype,"title",void 0),(0,u._)([(0,S.c)("title"),(0,S.c)(["web-scene"],"title")],r.prototype,"writeTitle",null),(0,u._)([(0,d.Cb)({type:Boolean,json:{name:"visibility"}})],r.prototype,"visible",void 0),r=(0,u._)([(0,v.j)("esri.layers.mixins.OperationalLayer")],r)}},71684:function(e,r,a){a.d(r,{Q:function(){return M},d:function(){return A}});var t=a(74165),n=a(15861),i=a(15671),o=a(43144),l=a(97326),c=a(60136),s=a(92572),u=a(27366),y=a(32718),p=a(66978),d=a(49861),v=(a(25243),a(63780),a(69912)),S=a(37762),f=a(80987),h=(a(93169),a(10064),a(3073),a(27088)),m=new f.Z,g=new WeakMap;function L(e){b(e)&&m.push(e)}function b(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function w(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:w(r,e%r):0}var I=0,G=0;function T(){var e,r=Date.now(),a=(0,S.Z)(m);try{for(a.s();!(e=a.n()).done;){var t,n=e.value;if(n.refreshInterval)r-(null!==(t=g.get(n))&&void 0!==t?t:0)+5>=6e4*n.refreshInterval&&(g.set(n,r),n.refresh(r))}}catch(i){a.e(i)}finally{a.f()}}(0,h.EH)((function(){var e,r=Date.now(),a=0,t=(0,S.Z)(m);try{for(t.s();!(e=t.n()).done;){var n=e.value;a=w(Math.round(6e4*n.refreshInterval),a),n.refreshInterval?g.get(n)||g.set(n,r):g.delete(n)}}catch(i){t.e(i)}finally{t.f()}if(a!==G){if(G=a,clearInterval(I),0===G)return void(I=0);I=setInterval(T,G)}}));function A(e){return null!=e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}var M=function(e){var r=function(e){(0,c.Z)(a,e);var r=(0,s.Z)(a);function a(){var e;(0,i.Z)(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).refreshInterval=0,e.refreshTimestamp=0,e._debounceHasDataChanged=(0,p.Ds)((function(){return e.hasDataChanged()})),e.when().then((function(){L((0,l.Z)(e))}),(function(){})),e}return(0,o.Z)(a,[{key:"destroy",value:function(){var e;b(e=this)&&m.includes(e)&&m.remove(e)}},{key:"refreshParameters",get:function(){return{_ts:this.refreshTimestamp||null}}},{key:"refresh",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now();(0,p.R8)(this._debounceHasDataChanged()).then((function(a){a&&e._set("refreshTimestamp",r),e.emit("refresh",{dataChanged:a})}),(function(r){y.Z.getLogger(e.declaredClass).error(r),e.emit("refresh",{dataChanged:!1,error:r})}))}},{key:"hasDataChanged",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),a}(e);return(0,u._)([(0,d.Cb)({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0}})],r.prototype,"refreshInterval",void 0),(0,u._)([(0,d.Cb)({readOnly:!0})],r.prototype,"refreshTimestamp",void 0),(0,u._)([(0,d.Cb)()],r.prototype,"refreshParameters",null),r=(0,u._)([(0,v.j)("esri.layers.mixins.RefreshableLayer")],r),r}},56811:function(e,r,a){a.d(r,{M:function(){return u}});var t=a(15671),n=a(43144),i=a(60136),o=a(92572),l=a(27366),c=a(49861),s=(a(25243),a(63780),a(69912)),u=function(e){var r=function(e){(0,i.Z)(a,e);var r=(0,o.Z)(a);function a(){var e;return(0,t.Z)(this,a),(e=r.apply(this,arguments)).minScale=0,e.maxScale=0,e}return(0,n.Z)(a,[{key:"effectiveScaleRange",get:function(){var e={minScale:this.minScale,maxScale:this.maxScale},r=this.parent;r&&"effectiveScaleRange"in r&&function(e,r){e.minScale=e.minScale>0?r.minScale>0?Math.min(e.minScale,r.minScale):e.minScale:r.minScale,e.maxScale=e.maxScale>0?r.maxScale>0?Math.max(e.maxScale,r.maxScale):e.maxScale:r.maxScale}(e,r.effectiveScaleRange);var a=this._get("effectiveScaleRange");return a&&a.minScale===e.minScale&&a.maxScale===e.maxScale?a:e}}]),a}(e);return(0,l._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minScale",void 0),(0,l._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxScale",void 0),(0,l._)([(0,c.Cb)({readOnly:!0})],r.prototype,"effectiveScaleRange",null),r=(0,l._)([(0,s.j)("esri.layers.mixins.ScaleRangeLayer")],r)}}}]);
//# sourceMappingURL=25655.e6ab4621.chunk.js.map
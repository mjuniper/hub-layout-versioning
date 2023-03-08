"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[59147],{59147:function(e,t,r){r.d(t,{Z:function(){return H}});var o=r(74165),n=r(15861),i=r(37762),a=r(15671),s=r(43144),p=r(60136),u=r(92572),l=r(27366),y=r(52639),d=r(44055),c=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),f=r(76200),v=r(10064),h=r(43404),b=r(54472),m=r(32718),g=r(92026),C=r(67426),_=r(49861),Z=(r(25243),r(63780),r(27135)),x=r(38511),S=r(69912),I=r(53866),k=r(78952),F=r(64326),w=r(58550),T=r(96978),L=r(61289),j=r(25610),O=r(52410),q=r(80031),R=r(30494),U=r(34207),Q=r(21149),P=r(81085),A=r(64575),D=r(44011),N=r(24405),M="esri.layers.buildingSublayers.BuildingComponentSublayer",E=m.Z.getLogger(M),B=(0,j.v)(),G=function(e){(0,p.Z)(r,e);var t=(0,u.Z)(r);function r(e){var o;return(0,a.Z)(this,r),(o=t.call(this,e)).type="building-component",o.nodePages=null,o.materialDefinitions=[],o.textureSetDefinitions=[],o.geometryDefinitions=[],o.indexInfo=null,o.serviceUpdateTimeStamp=null,o.store=null,o.attributeStorageInfo=[],o.fields=[],o.associatedLayer=null,o.outFields=null,o.listMode="show",o.renderer=null,o.definitionExpression=null,o.popupEnabled=!0,o.popupTemplate=null,o.layerType="3d-object",o}return(0,s.Z)(r,[{key:"parsedUrl",get:function(){var e,t;return this.layer?{path:"".concat(null===(e=this.layer.parsedUrl)||void 0===e?void 0:e.path,"/sublayers/").concat(this.id),query:null===(t=this.layer.parsedUrl)||void 0===t?void 0:t.query}:{path:""}}},{key:"fieldsIndex",get:function(){return new O.Z(this.fields)}},{key:"readAssociatedLayer",value:function(e,t){var r=this.layer.associatedFeatureServiceItem,o=t.associatedLayerID;return(0,g.pC)(r)&&"number"==typeof o?new F.default({portalItem:r,layerId:o}):null}},{key:"objectIdField",get:function(){if(null!=this.fields){var e,t=(0,i.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var r=e.value;if("oid"===r.type)return r.name}}catch(o){t.e(o)}finally{t.f()}}return null}},{key:"displayField",get:function(){return(0,g.pC)(this.associatedLayer)?this.associatedLayer.displayField:void 0}},{key:"apiKey",get:function(){return this.layer.apiKey}},{key:"fullExtent",get:function(){return this.layer.fullExtent}},{key:"spatialReference",get:function(){return this.layer.spatialReference}},{key:"version",get:function(){return this.layer.version}},{key:"elevationInfo",get:function(){return this.layer.elevationInfo}},{key:"minScale",get:function(){return this.layer.minScale}},{key:"maxScale",get:function(){return this.layer.maxScale}},{key:"effectiveScaleRange",get:function(){return this.layer.effectiveScaleRange}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"load",value:function(e){var t=this,r=(0,g.pC)(e)?e.signal:null,o=this._fetchService(r).then((function(){t.indexInfo=(0,R.T)(t.parsedUrl.path,t.rootNode,t.nodePages,t.apiKey,E,r)}));return this.addResolvingPromise(o),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){return(0,P.eZ)(this,e)}},{key:"_fetchService",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(t){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.default)(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t});case 2:r=e.sent.data,this.read(r,{origin:"service",url:this.parsedUrl});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,o,n,i,a=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(o=r.domains)||void 0===o?void 0:o[e];return a&&"inherited"!==a.type?a:null!==(n=null===(i=this.getField(e))||void 0===i?void 0:i.domain)&&void 0!==n?n:null}},{key:"getFeatureType",value:function(e){return e&&(0,g.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){var e;return(0,g.pC)(this.associatedLayer)&&null!==(e=this.associatedLayer.types)&&void 0!==e?e:[]}},{key:"typeIdField",get:function(){return(0,g.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"geometryType",get:function(){return"3d-object"===this.layerType?"mesh":"point"}},{key:"profile",get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}},{key:"capabilities",get:function(){var e=(0,g.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:T.C,t=e.query,r=e.data;return{query:t,data:{supportsZ:r.supportsZ,supportsM:r.supportsM,isVersioned:r.isVersioned}}}},{key:"createQuery",value:function(){var e=new Q.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,o=(0,i.Z)(e.features);try{for(o.s();!(t=o.n()).done;){var n=t.value;n.layer=r.layer,n.sourceLayer=r}}catch(a){o.e(a)}finally{o.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(o){return o.queryObjectIds(e||r.createQuery(),t)}))}},{key:"queryCachedAttributes",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(t,r){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=q.Lk,e.t1=this.fieldsIndex,e.next=4,(0,N.e)(this,(0,N.V)(this));case 4:return e.t2=e.sent,n=(0,e.t0)(e.t1,e.t2),e.abrupt("return",(0,D.xe)(this.parsedUrl.path,this.attributeStorageInfo,t,r,n));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryCachedFeature",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(t,r){var n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.queryCachedAttributes(t,[r]);case 2:if((n=e.sent)&&0!==n.length){e.next=5;break}throw new v.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");case 5:return i=new y.Z,e.abrupt("return",(i.attributes=n[0],i.layer=this,i.sourceLayer=this,i));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getFieldUsageInfo",value:function(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,g.pC)(this.associatedLayer)}}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return(0,g.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!(0,g.Wi)(this.associatedLayer)){e.next=4;break}throw new v.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new v.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()}]),r}(b.Z.LoadableMixin((0,C.v)(w.Z)));(0,l._)([(0,_.Cb)({readOnly:!0})],G.prototype,"parsedUrl",null),(0,l._)([(0,_.Cb)({type:U.U4,readOnly:!0})],G.prototype,"nodePages",void 0),(0,l._)([(0,_.Cb)({type:[U.QI],readOnly:!0})],G.prototype,"materialDefinitions",void 0),(0,l._)([(0,_.Cb)({type:[U.Yh],readOnly:!0})],G.prototype,"textureSetDefinitions",void 0),(0,l._)([(0,_.Cb)({type:[U.H3],readOnly:!0})],G.prototype,"geometryDefinitions",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],G.prototype,"serviceUpdateTimeStamp",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],G.prototype,"store",void 0),(0,l._)([(0,_.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],G.prototype,"rootNode",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],G.prototype,"attributeStorageInfo",void 0),(0,l._)([(0,_.Cb)(B.fields)],G.prototype,"fields",void 0),(0,l._)([(0,_.Cb)({readOnly:!0})],G.prototype,"fieldsIndex",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:F.default})],G.prototype,"associatedLayer",void 0),(0,l._)([(0,x.r)("service","associatedLayer",["associatedLayerID"])],G.prototype,"readAssociatedLayer",null),(0,l._)([(0,_.Cb)(B.outFields)],G.prototype,"outFields",void 0),(0,l._)([(0,_.Cb)({type:String,readOnly:!0})],G.prototype,"objectIdField",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:String,json:{read:!1}})],G.prototype,"displayField",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:String})],G.prototype,"apiKey",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:I.Z})],G.prototype,"fullExtent",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:k.Z})],G.prototype,"spatialReference",null),(0,l._)([(0,_.Cb)({readOnly:!0})],G.prototype,"version",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:A.Z})],G.prototype,"elevationInfo",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:Number})],G.prototype,"minScale",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:Number})],G.prototype,"maxScale",null),(0,l._)([(0,_.Cb)({readOnly:!0,type:Number})],G.prototype,"effectiveScaleRange",null),(0,l._)([(0,_.Cb)({type:["hide","show"],json:{write:!0}})],G.prototype,"listMode",void 0),(0,l._)([(0,_.Cb)({types:c.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],G.prototype,"renderer",void 0),(0,l._)([(0,_.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],G.prototype,"definitionExpression",void 0),(0,l._)([(0,_.Cb)(L.C_)],G.prototype,"popupEnabled",void 0),(0,l._)([(0,_.Cb)({type:d.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],G.prototype,"popupTemplate",void 0),(0,l._)([(0,_.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],G.prototype,"normalReferenceFrame",void 0),(0,l._)([(0,_.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"defaultPopupTemplate",null),(0,l._)([(0,_.Cb)()],G.prototype,"types",null),(0,l._)([(0,_.Cb)()],G.prototype,"typeIdField",null),(0,l._)([(0,_.Cb)({json:{write:!1}}),(0,Z.J)(new h.X({"3DObject":"3d-object",Point:"point"}))],G.prototype,"layerType",void 0),(0,l._)([(0,_.Cb)()],G.prototype,"geometryType",null),(0,l._)([(0,_.Cb)()],G.prototype,"profile",null),(0,l._)([(0,_.Cb)({readOnly:!0,json:{read:!1}})],G.prototype,"capabilities",null);var H=G=(0,l._)([(0,S.j)(M)],G)},58550:function(e,t,r){r.d(t,{Z:function(){return h}});var o=r(15671),n=r(43144),i=r(60136),a=r(92572),s=r(27366),p=r(79056),u=r(97642),l=r(49861),y=r(25243),d=(r(63780),r(38511)),c=r(69912),f=r(61289),v=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).title="",n.id=-1,n.modelName=null,n.isEmpty=null,n.visible=!0,n.opacity=1,n}return(0,n.Z)(r,[{key:"readTitle",value:function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}},{key:"readIdOnlyOnce",value:function(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}}]),r}((0,p.IG)(u.w));(0,s._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],v.prototype,"title",void 0),(0,s._)([(0,d.r)("service","title",["alias","name"])],v.prototype,"readTitle",null),(0,s._)([(0,l.Cb)()],v.prototype,"layer",void 0),(0,s._)([(0,l.Cb)({type:y.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],v.prototype,"id",void 0),(0,s._)([(0,d.r)("service","id")],v.prototype,"readIdOnlyOnce",null),(0,s._)([(0,l.Cb)((0,f.Lx)(String))],v.prototype,"modelName",void 0),(0,s._)([(0,l.Cb)((0,f.Lx)(Boolean))],v.prototype,"isEmpty",void 0),(0,s._)([(0,l.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],v.prototype,"visible",void 0),(0,s._)([(0,l.Cb)({type:Number,json:{write:!0}})],v.prototype,"opacity",void 0);var h=v=(0,s._)([(0,c.j)("esri.layers.buildingSublayers.BuildingSublayer")],v)},34207:function(e,t,r){r.d(t,{H3:function(){return _},QI:function(){return v},U4:function(){return d},Yh:function(){return b}});var o=r(43144),n=r(15671),i=r(60136),a=r(92572),s=r(27366),p=r(46784),u=r(49861),l=(r(25243),r(63780),r(27135)),y=r(69912),d=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:Number})],d.prototype,"nodesPerPage",void 0),(0,s._)([(0,u.Cb)({type:Number})],d.prototype,"rootIndex",void 0),(0,s._)([(0,u.Cb)({type:String})],d.prototype,"lodSelectionMetricType",void 0),d=(0,s._)([(0,y.j)("esri.layer.support.I3SNodePageDefinition")],d);var c=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).factor=1,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],c.prototype,"id",void 0),(0,s._)([(0,u.Cb)({type:Number})],c.prototype,"factor",void 0),c=(0,s._)([(0,y.j)("esri.layer.support.I3SMaterialTexture")],c);var f=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:[Number]})],f.prototype,"baseColorFactor",void 0),(0,s._)([(0,u.Cb)({type:c})],f.prototype,"baseColorTexture",void 0),(0,s._)([(0,u.Cb)({type:c})],f.prototype,"metallicRoughnessTexture",void 0),(0,s._)([(0,u.Cb)({type:Number})],f.prototype,"metallicFactor",void 0),(0,s._)([(0,u.Cb)({type:Number})],f.prototype,"roughnessFactor",void 0),f=(0,s._)([(0,y.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],f);var v=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({opaque:"opaque",mask:"mask",blend:"blend"})],v.prototype,"alphaMode",void 0),(0,s._)([(0,u.Cb)({type:Number})],v.prototype,"alphaCutoff",void 0),(0,s._)([(0,u.Cb)({type:Boolean})],v.prototype,"doubleSided",void 0),(0,s._)([(0,l.J)({none:"none",back:"back",front:"front"})],v.prototype,"cullFace",void 0),(0,s._)([(0,u.Cb)({type:c})],v.prototype,"normalTexture",void 0),(0,s._)([(0,u.Cb)({type:c})],v.prototype,"occlusionTexture",void 0),(0,s._)([(0,u.Cb)({type:c})],v.prototype,"emissiveTexture",void 0),(0,s._)([(0,u.Cb)({type:[Number]})],v.prototype,"emissiveFactor",void 0),(0,s._)([(0,u.Cb)({type:f})],v.prototype,"pbrMetallicRoughness",void 0),v=(0,s._)([(0,y.j)("esri.layer.support.I3SMaterialDefinition")],v);var h=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],h.prototype,"name",void 0),(0,s._)([(0,l.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],h.prototype,"format",void 0),h=(0,s._)([(0,y.j)("esri.layer.support.I3STextureFormat")],h);var b=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:[h]})],b.prototype,"formats",void 0),(0,s._)([(0,u.Cb)({type:Boolean})],b.prototype,"atlas",void 0),b=(0,s._)([(0,y.j)("esri.layer.support.I3STextureSetDefinition")],b);var m=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],m.prototype,"type",void 0),(0,s._)([(0,u.Cb)({type:Number})],m.prototype,"component",void 0),m=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryAttribute")],m);var g=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({draco:"draco"})],g.prototype,"encoding",void 0),(0,s._)([(0,u.Cb)({type:[String]})],g.prototype,"attributes",void 0),g=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryCompressedAttributes")],g);var C=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments)).offset=0,e}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,u.Cb)({type:Number})],C.prototype,"offset",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"position",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"normal",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"uv0",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"color",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"uvRegion",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"featureId",void 0),(0,s._)([(0,u.Cb)({type:m})],C.prototype,"faceRange",void 0),(0,s._)([(0,u.Cb)({type:g})],C.prototype,"compressedAttributes",void 0),C=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryBuffer")],C);var _=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r)}(p.wq);(0,s._)([(0,l.J)({triangle:"triangle"})],_.prototype,"topology",void 0),(0,s._)([(0,u.Cb)()],_.prototype,"geometryBuffers",void 0),_=(0,s._)([(0,y.j)("esri.layer.support.I3SGeometryDefinition")],_)},96978:function(e,t,r){r.d(t,{C:function(){return o}});var o={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}}}]);
//# sourceMappingURL=59147.79456ec3.chunk.js.map
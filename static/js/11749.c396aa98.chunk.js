"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[11749],{42069:function(e,t,n){n.d(t,{A:function(){return m}});var r=n(74165),a=n(15861),i=n(15671),s=n(43144),l=n(11752),o=n(61120),u=n(60136),c=n(92572),d=n(27366),p=n(42537),h=n(66978),v=n(94172),y=n(49861),f=(n(25243),n(63780),n(69912)),b=n(5354),m=function(e){var t=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments)).slicePlaneEnabled=!1,e.supportsHeightUnitConversion=!1,e}return(0,s.Z)(n,[{key:"postscript",value:function(e){(0,l.Z)((0,o.Z)(n.prototype),"postscript",this).call(this,e),(0,b.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}},{key:"_validateHeightModelInfo",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,i=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,n=t.signal,this.handles.add((0,p.kB)((function(){return t.abort()}))),e.next=4,(0,v.N1)((function(){var e;return null===(e=i.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),n);case 4:if((0,h.k_)(n),!(a=(0,b.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion))){e.next=8;break}throw a;case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,l.Z)((0,o.Z)(n.prototype),"canResume",this).call(this)&&(!e||!e.minScale||!e.maxScale||e.minScale>=e.maxScale)}},{key:"getSuspendInfo",value:function(){var e=(0,l.Z)((0,o.Z)(n.prototype),"getSuspendInfo",this).call(this),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}}]),n}(e);return(0,d._)([(0,y.Cb)()],t.prototype,"view",void 0),(0,d._)([(0,y.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,d._)([(0,f.j)("esri.views.3d.layers.LayerView3D")],t)}},11749:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r,a,i=n(74165),s=n(15861),l=n(37762),o=n(15671),u=n(43144),c=n(60136),d=n(92572),p=n(27366),h=(n(59486),n(10064)),v=n(100),y=n(32718),f=n(92026),b=n(94172),m=n(49861),w=(n(25243),n(63780),n(69912)),g=n(11186),_=n(71353),S=n(79803),V=n(41414),x=n(92975),W=n(42069),C=n(23224),k=n(67581),I=n(49800),Z=n(78952);(a=r||(r={}))[a.API=1]="API",a[a.VerboseAPI=2]="VerboseAPI",a[a.Error=3]="Error";var E=(0,_.c)(),T=(0,_.c)(),P=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments))._suspendedHandle=null,e._usedMemory=0,e._futureMemory=0,e.type="voxel-3d",e.slicePlaneEnabled=!1,e._wasmLayerId=-1,e._handles=new v.Z,e._dbgFlags=new Set,e}return(0,u.Z)(n,[{key:"baseUrl",get:function(){var e,t;return null!==(e=null===(t=this.layer.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:""}},{key:"wasmLayerId",get:function(){return this._wasmLayerId}},{key:"initialize",value:function(){var e,t=this;if(this._dbgFlags.add(r.Error),"local"!==this.view.viewingMode)throw new h.Z("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(this.view._stage.renderView.renderingContext.type!==I.zO.WEBGL2)throw new h.Z("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(null===(e=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)||void 0===e||!e.textureFloat)throw new h.Z("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});var n=this.layer.spatialReference;if(!(0,x.fS)(n,this.view.spatialReference))throw new h.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});var a=this.layer.currentVariableId,i=this.layer.getVolume(a),s=this.layer.getVariable(a);if((0,f.pC)(i)&&(0,f.pC)(s)){var l=i.dimensions[0],o=i.dimensions[1],u=i.zDimension;if(u>1){var c=i.dimensions[u],d=l.size*o.size*c.size,p=1;switch(s.renderingFormat.type){case"Int16":case"UInt16":p=2;break;case"Int32":case"UInt32":case"Float32":p=4}this._futureMemory=p*d}}var v=this.view.addVoxelLayerViewToWasm(this).then((function(e){t._wasmLayerId=e,t._suspendedHandle=(0,b.YP)((function(){return t.suspended}),(function(e){var n=t.view.voxelWasm;(0,f.pC)(n)&&n.setEnabled(t,!e)}),b.nn),t._handles.add([(0,b.YP)((function(){return t.layer.renderMode}),(function(e){return t._pushRenderModeToWasm(e)})),(0,b.YP)((function(){return t.layer.currentVariableId}),(function(e){return t._pushCurrentVariableIdToWasm(e)})),(0,b.YP)((function(){return t.layer.getSections()}),(function(e){return t._pushSectionsToWasm(e)})),(0,b.YP)((function(){return t.layer.getVariableStyles()}),(function(e){return t._pushVariableStylesToWasm(e)})),(0,b.YP)((function(){return t.layer.getVolumeStyles()}),(function(e){return t._pushVolumeStylesToWasm(e)})),(0,b.YP)((function(){return t.layer.enableDynamicSections}),(function(e){return t._pushEnableDynamicSectionsToWasm(e)})),(0,b.YP)((function(){return t.layer.enableIsosurfaces}),(function(e){return t._pushEnableIsosurfacesToWasm(e)})),(0,b.YP)((function(){return t.layer.enableSections}),(function(e){return t._pushEnableSectionsToWasm(e)})),(0,b.YP)((function(){return t.layer.enableSlices}),(function(e){return t._pushEnableSlicesToWasm(e)})),(0,b.YP)((function(){return t.slicePlaneEnabled}),(function(e){return t._pushAnalysisSliceToWasm(e,t.view.slicePlane)})),(0,b.YP)((function(){return t.view.slicePlane}),(function(e){return t._pushAnalysisSliceToWasm(t.slicePlaneEnabled,e)}))])})).catch((function(e){if(t.view.removeVoxelLayerViewFromWasm(t),t._wasmLayerId=-1,-1===e)throw new h.Z("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new h.Z("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(v)}},{key:"destroy",value:function(){this.view.removeVoxelLayerViewFromWasm(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._handles=(0,f.SC)(this._handles)}},{key:"isUpdating",value:function(){var e=this.view.voxelWasm;return!(this._wasmLayerId<0||!(0,f.pC)(e))&&e.isUpdating(this._wasmLayerId)}},{key:"updatingFlagChanged",value:function(){this.notifyChange("updating")}},{key:"getUsedMemory",value:function(){return this._usedMemory}},{key:"getUnloadedMemory",value:function(){return this._futureMemory}},{key:"ignoresMemoryFactor",value:function(){return!0}},{key:"performanceInfo",get:function(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}},{key:"whenGraphicBounds",value:function(e,t){var n=e.attributes["Voxel.WorldPosition"];if(n){var r=(0,V.cS)(),a=JSON.parse(n);if((0,S.SH)(a,this.view.renderSpatialReference,T,this.view.spatialReference||Z.Z.WGS84))return(0,V.pp)(r,T),Promise.resolve({boundingBox:r,screenSpaceObjects:[]})}return Promise.reject()}},{key:"setUsedMemory",value:function(e){this._usedMemory=e,this._futureMemory=0}},{key:"captureFrustum",value:function(){var e=this.view.voxelWasm;(0,f.pC)(e)&&e.captureFrustum()}},{key:"toggleFullVolumeExtentDraw",value:function(){var e=this.view.voxelWasm;(0,f.pC)(e)&&e.toggleFullVolumeExtentDraw(this)}},{key:"getLayerTimes",value:function(){var e=[],t=this.view.voxelWasm;return(0,f.pC)(t)&&(e=t.getLayerTimes(this)),e}},{key:"getCurrentLayerTimeIndex",value:function(){var e=0,t=this.view.voxelWasm;return(0,f.pC)(t)&&(e=t.getCurrentLayerTimeIndex(this)),e}},{key:"_pushRenderModeToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!")),(0,f.pC)(t)&&t.setRenderMode(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}},{key:"_pushSectionsToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!")),(0,f.pC)(t)&&t.setStaticSections(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}},{key:"_pushCurrentVariableIdToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!")),(0,f.pC)(t)&&t.setCurrentVariable(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}},{key:"_pushVariableStylesToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!"));(0,f.pC)(t)&&(t.setVariableStyles(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!"))}},{key:"_accountForEnableSlices",value:function(e,t){for(var n=(0,f.pC)(t)?t:this.layer.enableSlices,r=0;r<e.length;++r){var a,i=e[r],s=(0,l.Z)(i.slices);try{for(s.s();!(a=s.n()).done;){var o=a.value;o.enabled=o.enabled&&n}}catch(u){s.e(u)}finally{s.f()}}}},{key:"_pushVolumeStylesToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!"));(0,f.pC)(t)&&(this._accountForEnableSlices(e,null),t.setVolumeStyles(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}},{key:"_pushAnalysisSliceToWasm",value:function(e,t){var n=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+((0,f.pC)(n)?"have WASM":"don't have WASM!!!"));var a=!1;if((0,f.pC)(n)){if((0,f.pC)(t)){var i=t.origin;(0,g.f)(E,t.basis1,t.basis2),(0,g.n)(E,E),a=n.setAnalysisSlice(this,e,i,E)}else(0,g.s)(E,0,0,1),a=n.setAnalysisSlice(this,!1,E,E);a||this._dbg(r.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}},{key:"_pushEnableDynamicSectionsToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!"));(0,f.pC)(t)&&(t.setEnableDynamicSections(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!"))}},{key:"_pushEnableSlicesToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!"));if((0,f.pC)(t)){var n=this.layer.getVolumeStyles();this._accountForEnableSlices(n,e),t.setVolumeStyles(this,n)||this._dbg(r.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}},{key:"_pushEnableIsosurfacesToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!"));(0,f.pC)(t)&&(t.setEnableIsosurfaces(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!"))}},{key:"_pushEnableSectionsToWasm",value:function(e){var t=this.view.voxelWasm;this._dbg(r.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+((0,f.pC)(t)?"have WASM":"don't have WASM!!!"));(0,f.pC)(t)&&(t.setEnableSections(this,e)||this._dbg(r.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!"))}},{key:"whenGraphicAttributes",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_dbg",value:function(e,t){this._dbgFlags.has(e)&&(e===r.Error?y.Z.getLogger(this.declaredClass).error(t):y.Z.getLogger(this.declaredClass).warn(t))}}]),n}((0,C.i)((0,W.A)(k.Z)));(0,p._)([(0,m.Cb)()],P.prototype,"layer",void 0),(0,p._)([(0,m.Cb)()],P.prototype,"baseUrl",null),(0,p._)([(0,m.Cb)({type:Boolean})],P.prototype,"slicePlaneEnabled",void 0);var L=P=(0,p._)([(0,w.j)("esri.views.3d.layers.VoxelLayerView3D")],P)},23224:function(e,t,n){n.d(t,{i:function(){return b}});var r=n(93433),a=n(37762),i=n(74165),s=n(15861),l=n(15671),o=n(43144),u=n(60136),c=n(92572),d=n(27366),p=n(10064),h=n(92026),v=(n(32718),n(25243),n(63780),n(93169),n(69912)),y=n(80031),f=n(24405),b=function(e){var t=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"_validateFetchPopupFeatures",value:function(e){var t=this.layer;if(!t.popupEnabled)throw new p.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t});if(!(0,f.V)(t,e))throw new p.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}},{key:"prepareFetchPopupFeatures",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchPopupFeatures",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t,n){var s,l,o,u,c,d,p,v,b;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._validateFetchPopupFeatures(n),(s=(0,h.pC)(n)?n.clientGraphics:null)&&0!==s.length){e.next=4;break}return e.abrupt("return",[]);case 4:if(l="scene"===this.layer.type&&(0,h.pC)(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,o=[],e.t0="fieldsIndex"in this.layer,!e.t0){e.next=14;break}return e.t1=y.Lk,e.t2=this.layer.fieldsIndex,e.next=12,(0,f.e)(l,(0,f.V)(this.layer,n));case 12:e.t3=e.sent,o=(0,e.t1)(e.t2,e.t3);case 14:return e.next=16,this.prepareFetchPopupFeatures(o);case 16:u=new Set,c=[],d=[],p=(0,a.Z)(s);try{for(p.s();!(v=p.n()).done;)b=v.value,(0,y.Gm)(o,b,u)?d.push(b):c.push(b)}catch(t){p.e(t)}finally{p.f()}return e.abrupt("return",0===d.length?c:this.whenGraphicAttributes(d,(0,r.Z)(u)).catch((function(){return d})).then((function(e){return c.concat(e)})));case 20:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}(e);return t=(0,d._)([(0,v.j)("esri.views.3d.layers.support.PopupSceneLayerView")],t)}},67581:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(15671),a=n(43144),i=n(60136),s=n(92572),l=n(27366),o=n(31319),u=n(91505),c=n(41691),d=n(79056),p=n(32718),h=n(92026),v=n(67426),y=n(49861),f=(n(25243),n(63780),n(69912)),b=function(e){(0,i.Z)(n,e);var t=(0,s.Z)(n);function n(e){var a;return(0,r.Z)(this,n),(a=t.call(this,e)).layer=null,a.parent=null,a}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var n=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";p.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(n,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){this._overrideIfSome("visible",e)}},{key:"canResume",value:function(){var e,t,n;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(n=this.view)||void 0===n?void 0:n.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),n}((0,c.p)((0,d.IG)((0,v.v)(u.Z.EventedMixin(o.Z)))));(0,l._)([(0,y.Cb)()],b.prototype,"fullOpacity",null),(0,l._)([(0,y.Cb)()],b.prototype,"layer",void 0),(0,l._)([(0,y.Cb)()],b.prototype,"parent",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"suspended",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"suspendInfo",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"legendEnabled",null),(0,l._)([(0,y.Cb)({type:Boolean,readOnly:!0})],b.prototype,"updating",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"updatingProgress",null),(0,l._)([(0,y.Cb)()],b.prototype,"visible",null),(0,l._)([(0,y.Cb)()],b.prototype,"view",void 0);var m=b=(0,l._)([(0,f.j)("esri.views.layers.LayerView")],b)},24405:function(e,t,n){n.d(t,{V:function(){return c},e:function(){return o}});var r=n(74165),a=n(93433),i=n(15861),s=n(92026),l=n(80031);function o(e){return u.apply(this,arguments)}function u(){return u=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,o,u,c,d,p,h,v,y,f,b=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=b.length>1&&void 0!==b[1]?b[1]:t.popupTemplate,!(0,s.Wi)(o)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,o.getRequiredFields(t.fieldsIndex);case 5:if(u=e.sent,c=o.lastEditInfoEnabled,d=t.objectIdField,p=t.typeIdField,h=t.globalIdField,v=t.relationships,!u.includes("*")){e.next=13;break}return e.abrupt("return",["*"]);case 13:if(!c){e.next=19;break}return e.next=16,(0,l.CH)(t);case 16:e.t0=e.sent,e.next=20;break;case 19:e.t0=[];case 20:return y=e.t0,f=(0,l.Q0)(t.fieldsIndex,[].concat((0,a.Z)(u),(0,a.Z)(y))),e.abrupt("return",(p&&f.push(p),f&&d&&null!==(n=t.fieldsIndex)&&void 0!==n&&n.has(d)&&!f.includes(d)&&f.push(d),f&&h&&null!==(i=t.fieldsIndex)&&void 0!==i&&i.has(h)&&!f.includes(h)&&f.push(h),v&&v.forEach((function(e){var n,r=e.keyField;f&&r&&(null===(n=t.fieldsIndex)||void 0===n?void 0:n.has(r))&&!f.includes(r)&&f.push(r)})),f));case 23:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function c(e,t){return e.popupTemplate?e.popupTemplate:(0,s.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,s.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=11749.c396aa98.chunk.js.map
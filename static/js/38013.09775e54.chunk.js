"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[38013],{82582:function(e,t,i){i.d(t,{D9:function(){return o},DE:function(){return s},dp:function(){return a},yZ:function(){return n}});var r=i(68860);function n(e,t){var i=t||e.extent,n=e.width,a=(0,r.c9)(i&&i.spatialReference);return i&&n?i.width/n*a*r.hd*96:0}function a(e,t){return e/((0,r.c9)(t)*r.hd*96)}function s(e){return e/(96*r.hd)}function o(e,t){var i=e.extent,r=e.width-(e.padding?e.padding.left+e.padding.right:0),n=a(t,i.spatialReference);return i.clone().expand(n*r/i.width)}},44041:function(e,t,i){i.d(t,{R:function(){return b}});var r=i(1413),n=i(15671),a=i(43144),s=i(60136),o=i(92572),l=i(27366),u=i(31319),h=i(41691),p=i(92026),c=i(76672),y=i(49861),d=(i(25243),i(63780),i(69912)),f=i(61289),g=i(87072),m=i(58132),v={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},b=function(e){(0,s.Z)(i,e);var t=(0,o.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).floors=null,r.scale=0,r}return(0,a.Z)(i,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var t=this.visibleSublayers.map((function(t){var i=(0,g.f)(e.floors,t);return t.toExportImageJSON(i)}));return t.length?JSON.stringify(t):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&(0,m.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}},{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return t.notifyChange(v[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,t=this,i=!(null===(e=this.floors)||void 0===e||!e.length),r=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||i&&null!=e.floorInfo}));return r.length?JSON.stringify(r.reduce((function(e,i){var r=(0,g.f)(t.floors,i),n=(0,c._)(r,i.definitionExpression);return(0,p.pC)(n)&&(e[i.id]=n),e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,t=[];if(!this.layer)return t;var i=this.layer.sublayers;i&&i.forEach((function i(r){var n=e.scale,a=0===n,s=0===r.minScale||n<=r.minScale,o=0===r.maxScale||n>=r.maxScale;r.visible&&(a||s&&o)&&(r.sublayers?r.sublayers.forEach(i):t.unshift(r))}));var r=this._get("visibleSublayers");return!r||r.length!==t.length||r.some((function(e,i){return t[i]!==e}))?t:r}},{key:"toJSON",value:function(){var e=this.layer,t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t=(0,r.Z)((0,r.Z)({},t),{},{layers:this.layers,layerDefs:this.layerDefs}),t}}]),i}((0,h.p)(u.Z));(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"dynamicLayers",null),(0,l._)([(0,y.Cb)()],b.prototype,"floors",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"hasDynamicLayers",null),(0,l._)([(0,y.Cb)()],b.prototype,"layer",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"layers",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"layerDefs",null),(0,l._)([(0,y.Cb)({type:Number})],b.prototype,"scale",void 0),(0,l._)([(0,y.Cb)(f.qG)],b.prototype,"timeExtent",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"version",null),(0,l._)([(0,y.Cb)({readOnly:!0})],b.prototype,"visibleSublayers",null),b=(0,l._)([(0,d.j)("esri.layers.mixins.ExportImageParameters")],b)},57682:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var r=i(1413),n=i(74165),a=i(15861),s=i(15671),o=i(43144),l=i(60136),u=i(92572),h=i(27366),p=i(32718),c=i(66978),y=i(94172),d=i(49861),f=(i(25243),i(63780),i(69912)),g=i(78983),m=i(90110),v=i(95986),b=i(77318),_=i(83978),x=i(9229),Z=i(67581),C=i(21881),w=i(13107),k=i(32645),S=i(45008),H=function(e){(0,l.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments))._highlightGraphics=new g.J,e._updateHash="",e}return(0,o.Z)(i,[{key:"fetchPopupFeatures",value:function(e,t){return this._popupHighlightHelper.fetchPopupFeatures(e,t)}},{key:"update",value:function(e){var t=this,i="".concat(this.exportImageVersion,"/").concat(e.state.id,"/").concat(e.pixelRatio,"/").concat(e.stationary);this._updateHash!==i&&(this._updateHash=i,this.strategy.update(e).catch((function(e){(0,c.D_)(e)||p.Z.getLogger(t.declaredClass).error(e)})),e.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(e.state.resolution)),this._highlightView.processUpdate(e)}},{key:"attach",value:function(){var e=this,t=this.layer,i=t.imageMaxWidth,r=t.imageMaxHeight,n=t.version,a=n>=10.3,s=n>=10;this._bitmapContainer=new m.c,this.container.addChild(this._bitmapContainer),this._highlightView=new b.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new _.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new k.VF({createFetchPopupFeaturesQueryGeometry:function(t,i){return(0,S.K)(t,i,e.view)},highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:function(t,i){e._highlightView.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new x.Z({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:i,imageMaxHeight:r,imageRotationSupported:a,imageNormalizationSupported:s,hidpi:!0}),this.addAttachHandles((0,y.YP)((function(){return e.exportImageVersion}),(function(){return e.requestUpdate()}))),this.requestUpdate()}},{key:"detach",value:function(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){return this.layer.serviceSupportsSpatialReference(e)}},{key:"doRefresh",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._updateHash="",this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,i,n){return this.layer.fetchImage(e,t,i,(0,r.Z)({timeExtent:this.timeExtent,floors:this.floors},n))}},{key:"fetchImageBitmap",value:function(e,t,i,n){return this.layer.fetchImageBitmap(e,t,i,(0,r.Z)({timeExtent:this.timeExtent,floors:this.floors},n))}},{key:"highlight",value:function(e){return this._popupHighlightHelper.highlight(e)}}]),i}((0,C.Z)((0,w.Z)((0,v.y)(Z.Z))));(0,h._)([(0,d.Cb)()],H.prototype,"strategy",void 0),(0,h._)([(0,d.Cb)()],H.prototype,"updating",void 0);var I=H=(0,h._)([(0,f.j)("esri.views.2d.layers.MapImageLayerView2D")],H)},83978:function(e,t,i){i.d(t,{Z:function(){return f}});var r=i(15671),n=i(43144),a=i(11752),s=i(61120),o=i(60136),l=i(92572),u=i(27366),h=(i(32718),i(25243),i(63780),i(10064),i(93169),i(69912)),p=i(80613),c=i(82022),y=i(8548),d=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,n.Z)(i,[{key:"doRender",value:function(e){e.drawPhase===p.jx.HIGHLIGHT&&(0,a.Z)((0,s.Z)(i.prototype),"doRender",this).call(this,e)}},{key:"renderChildren",value:function(e){if(this.attributeView.update(),this.children.some((function(e){return e.hasData}))){this.attributeView.bindTextures(e.context),(0,a.Z)((0,s.Z)(i.prototype),"renderChildren",this).call(this,e);var t=e.painter.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(y.lk.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}}}]),i}(c.Z),f=d=(0,u._)([(0,h.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],d)},21881:function(e,t,i){i.d(t,{Z:function(){return d}});var r=i(15671),n=i(43144),a=i(11752),s=i(61120),o=i(60136),l=i(92572),u=i(27366),h=i(49861),p=(i(25243),i(63780),i(69912)),c=i(61289),y=i(44041),d=function(e){var t=function(e){(0,o.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,r.Z)(this,i),t.apply(this,arguments)}return(0,n.Z)(i,[{key:"initialize",value:function(){this.exportImageParameters=new y.R({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"floors",get:function(){var e,t;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.floors)&&void 0!==e?e:null}},{key:"exportImageVersion",get:function(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}},{key:"canResume",value:function(){var e;return!!(0,a.Z)((0,s.Z)(i.prototype),"canResume",this).call(this)&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}}]),i}(e);return(0,u._)([(0,h.Cb)()],t.prototype,"exportImageParameters",void 0),(0,u._)([(0,h.Cb)({readOnly:!0})],t.prototype,"floors",null),(0,u._)([(0,h.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,u._)([(0,h.Cb)()],t.prototype,"layer",void 0),(0,u._)([(0,h.Cb)()],t.prototype,"suspended",void 0),(0,u._)([(0,h.Cb)(c.qG)],t.prototype,"timeExtent",void 0),t=(0,u._)([(0,p.j)("esri.views.layers.MapImageLayerView")],t)}}}]);
//# sourceMappingURL=38013.09775e54.chunk.js.map
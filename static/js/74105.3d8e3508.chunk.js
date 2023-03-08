"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[74105],{47037:function(e,i,t){t.d(i,{G:function(){return h}});var r=t(1413),n=t(37762),a=t(15671),l=t(43144),s=t(11752),u=t(61120),o=t(60136),y=t(92572),c=t(64510),d=t(8548),h=function(e){(0,o.Z)(t,e);var i=(0,y.Z)(t);function t(){var e;return(0,a.Z)(this,t),(e=i.apply(this,arguments))._prevFBO=void 0,e.requiresDedicatedFBO=!1,e}return(0,l.Z)(t,[{key:"dispose",value:function(){}},{key:"doRender",value:function(e){var i=this.createRenderParams(e),t=i.context,r=i.painter,a=i.profiler;this._prevFBO=t.getBoundFramebufferObject(),a.recordContainerStart(this.name);var l=this._getFbo(i),s=r.getRenderTarget();t.bindFramebuffer(l),r.setRenderTarget(l),t.setDepthWriteEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1);var u,o=(0,n.Z)(this.children);try{for(o.s();!(u=o.n()).done;){u.value.beforeRender(e)}}catch(v){o.e(v)}finally{o.f()}var y,c=(0,n.Z)(this.children);try{for(c.s();!(y=c.n()).done;){y.value.processRender(i)}}catch(v){c.e(v)}finally{c.f()}var h,f=(0,n.Z)(this.children);try{for(f.s();!(h=f.n()).done;){h.value.afterRender(e)}}catch(v){f.e(v)}finally{f.f()}r.setRenderTarget(s),r.releaseFbo(l),t.bindFramebuffer(this._prevFBO),r.beforeRenderLayer(i,this._clippingInfos?255:0,this.computedOpacity),l.colorTexture&&(t.setStencilTestEnabled(!1),t.setStencilWriteMask(0),r.blitTexture(t,l.colorTexture,d.cw.NEAREST)),r.compositeLayer(i,this.computedOpacity),a.recordContainerEnd()}},{key:"createRenderParams",value:function(e){return(0,r.Z)((0,r.Z)({},(0,s.Z)((0,u.Z)(t.prototype),"createRenderParams",this).call(this,e)),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}},{key:"_getFbo",value:function(e){var i=e.context,t=e.painter,r=i.getViewport(),n=r.width,a=r.height;return t.acquireFbo(n,a)}}]),t}(c.Z)},74105:function(e,i,t){t.r(i),t.d(i,{default:function(){return h}});var r=t(15671),n=t(43144),a=t(60136),l=t(92572),s=t(27366),u=(t(32718),t(25243),t(63780),t(10064),t(93169),t(69912)),o=t(47037),y=t(95986),c=t(5407),d=function(e){(0,a.Z)(t,e);var i=(0,l.Z)(t);function t(){var e;return(0,r.Z)(this,t),(e=i.apply(this,arguments)).container=new o.G,e}return(0,n.Z)(t,[{key:"attach",value:function(){var e=this;this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})))}},{key:"detach",value:function(){this.container.removeAllChildren()}},{key:"update",value:function(e){}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){}},{key:"_updateStageChildren",value:function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(i,t){return e.container.addChildAt(i.container,t)}))}}]),t}((0,y.y)(c.default)),h=d=(0,s._)([(0,u.j)("esri.views.2d.layers.GroupLayerView2D")],d)},5407:function(e,i,t){t.r(i),t.d(i,{default:function(){return v}});var r=t(15671),n=t(43144),a=t(60136),l=t(92572),s=t(27366),u=t(80987),o=t(60354),y=t(92026),c=t(94172),d=t(49861),h=(t(25243),t(63780),t(69912)),f=function(e){(0,a.Z)(t,e);var i=(0,l.Z)(t);function t(e){var n;return(0,r.Z)(this,t),(n=i.call(this,e)).type="group",n.layerViews=new u.Z,n}return(0,n.Z)(t,[{key:"_allLayerViewVisibility",value:function(e){this.layerViews.forEach((function(i){i.visible=e}))}},{key:"initialize",value:function(){var e=this;this.handles.add([this.layerViews.on("change",(function(i){return e._layerViewsChangeHandler(i)})),(0,c.YP)((function(){return e.layer.visibilityMode}),(function(){return e._applyVisibility((function(){return e._allLayerViewVisibility(e.visible)}),(function(){return e._applyExclusiveVisibility(null)}))}),c.Z_),(0,c.YP)((function(){return e.visible}),(function(i){e._applyVisibility((function(){return e._allLayerViewVisibility(i)}),(function(){}))}),c.Z_)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}},{key:"layerViews",set:function(e){this._set("layerViews",(0,o.Z)(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((function(e,i){return e+i.updatingProgress}),0)/this.layerViews.length}},{key:"isUpdating",value:function(){return this.layerViews.some((function(e){return e.updating}))}},{key:"_hasLayerViewVisibleOverrides",value:function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))}},{key:"_findLayerViewForLayer",value:function(e){return e&&this.layerViews.find((function(i){return i.layer===e}))}},{key:"_firstVisibleOnLayerOrder",value:function(){var e=this,i=this.layer.layers.find((function(i){var t;return!(null===(t=e._findLayerViewForLayer(i))||void 0===t||!t.visible)}));return i&&this._findLayerViewForLayer(i)}},{key:"_applyExclusiveVisibility",value:function(e){(0,y.Wi)(e)&&(e=this._firstVisibleOnLayerOrder(),(0,y.Wi)(e)&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0)))),this.layerViews.forEach((function(i){i.visible=i===e}))}},{key:"_layerViewsChangeHandler",value:function(e){var i=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return(0,c.YP)((function(){return e.visible}),(function(t){return i._applyVisibility((function(){t!==i.visible&&(e.visible=i.visible)}),(function(){return i._applyExclusiveVisibility(t?e:null)}))}),c.Z_)})).toArray(),"grouplayerview:visible");var t=e.added[e.added.length-1];this._applyVisibility((function(){return i._allLayerViewVisibility(i.visible)}),(function(){return i._applyExclusiveVisibility(null!==t&&void 0!==t&&t.visible?t:null)}))}},{key:"_applyVisibility",value:function(e,i){var t,r;this._hasLayerViewVisibleOverrides()&&("inherited"===(null===(t=this.layer)||void 0===t?void 0:t.visibilityMode)?e():"exclusive"===(null===(r=this.layer)||void 0===r?void 0:r.visibilityMode)&&i())}}]),t}(t(67581).Z);(0,s._)([(0,d.Cb)({cast:o.R})],f.prototype,"layerViews",null),(0,s._)([(0,d.Cb)({readOnly:!0})],f.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],f.prototype,"view",void 0);var v=f=(0,s._)([(0,h.j)("esri.views.layers.GroupLayerView")],f)}}]);
//# sourceMappingURL=74105.3d8e3508.chunk.js.map
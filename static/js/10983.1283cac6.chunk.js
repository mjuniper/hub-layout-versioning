"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[10983],{10983:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var r=i(15671),n=i(43144),a=i(11752),o=i(61120),s=i(60136),l=i(92572),u=i(27366),d=i(52639),c=i(92026),y=i(94172),p=i(49861),v=(i(25243),i(63780),i(69912)),h=i(22075),g=i(26279),f=i(42069),_=i(58890),b=i(67581),m=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).type="integrated-mesh-3d",e._elevationContext="im",e._isIntegratedMesh=!0,e._supportsLabeling=!1,e.drapeTargetType=g.al.WithoutRasterImage,e}return(0,n.Z)(i,[{key:"i3slayer",get:function(){return this.layer}},{key:"updatingProgressValue",get:function(){var e,t;return null!==(e=null===(t=this._controller)||void 0===t?void 0:t.updatingProgress)&&void 0!==e?e:0}},{key:"lodFactor",get:function(){var e,t,i,r,n;return null!==(e=null===(t=this.view)||void 0===t||null===(i=t.qualitySettings)||void 0===i||null===(r=i.sceneService)||void 0===r||null===(n=r.integratedMesh)||void 0===n?void 0:n.lodFactor)&&void 0!==e?e:1}},{key:"progressiveLoadFactor",get:function(){return this.lodFactor>=1?.2:1}},{key:"layerPopupEnabled",get:function(){return!1}},{key:"initialize",value:function(){var e=this;this.updatingHandles.add((function(){return e.layer.modifications}),(function(){return e._loadModifications()}),y.nn),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}},{key:"destroy",value:function(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}},{key:"_createLayerGraphic",value:function(){var e=new d.Z;return e.layer=this.layer,e.sourceLayer=this.layer,e}},{key:"canResume",value:function(){return(0,a.Z)((0,o.Z)(i.prototype),"canResume",this).call(this)&&(!this._controller||this._controller.rootNodeVisible)}},{key:"_loadModifications",value:function(){var e=this;if(this.handles.remove("modifications"),(0,c.Wi)(this.layer.modifications))this._modifications=[];else{var t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange((function(){return t}),(function(){return e._modifications=t.toArray()}),y.nn),"modifications")}}}]),i}((0,h.N)((0,f.A)(b.Z)));(0,u._)([(0,p.Cb)()],m.prototype,"layer",void 0),(0,u._)([(0,p.Cb)()],m.prototype,"i3slayer",null),(0,u._)([(0,p.Cb)(_.q)],m.prototype,"updatingProgress",void 0),(0,u._)([(0,p.Cb)()],m.prototype,"updatingProgressValue",null),(0,u._)([(0,p.Cb)()],m.prototype,"lodFactor",null),(0,u._)([(0,p.Cb)({readOnly:!0})],m.prototype,"progressiveLoadFactor",null);var k=m=(0,u._)([(0,v.j)("esri.views.3d.layers.SceneLayerView3D")],m)}}]);
//# sourceMappingURL=10983.1283cac6.chunk.js.map
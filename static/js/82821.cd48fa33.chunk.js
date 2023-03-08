"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[82821],{59447:function(e,t,n){n.d(t,{r:function(){return a}});var r=n(15671),i=n(43144),a=function(){function e(){(0,r.Z)(this,e),this._outer=new Map}return(0,i.Z)(e,[{key:"clear",value:function(){this._outer.clear()}},{key:"empty",get:function(){return 0===this._outer.size}},{key:"get",value:function(e,t){var n;return null===(n=this._outer.get(e))||void 0===n?void 0:n.get(t)}},{key:"set",value:function(e,t,n){var r=this._outer.get(e);r?r.set(t,n):this._outer.set(e,new Map([[t,n]]))}},{key:"delete",value:function(e,t){var n=this._outer.get(e);n&&(n.delete(t),0===n.size&&this._outer.delete(e))}},{key:"forEach",value:function(e){this._outer.forEach((function(t,n){return e(t,n)}))}}]),e}()},21857:function(e,t,n){n.d(t,{CS:function(){return y},Cw:function(){return _},Yu:function(){return w},j5:function(){return x},lm:function(){return S}});var r=n(74165),i=n(15861),a=n(37762),s=n(42265),o=n(19545),u=n(44055),l=n(76200),c=n(84652),h=n(35995),f=n(78952),d=n(41414),p=n(376),v=n(9014),m=n(49818),g={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function _(e){var t=e.folders||[],n=t.slice(),r=new Map,i=new Map,s=new Map,o=new Map,u=new Map,l={esriGeometryPoint:i,esriGeometryPolyline:s,esriGeometryPolygon:o};(e.featureCollection&&e.featureCollection.layers||[]).forEach((function(e){var t=(0,c.d9)(e);t.featureSet.features=[];var n=e.featureSet.geometryType;r.set(n,t);var a=e.layerDefinition.objectIdField;"esriGeometryPoint"===n?b(i,a,e.featureSet.features):"esriGeometryPolyline"===n?b(s,a,e.featureSet.features):"esriGeometryPolygon"===n&&b(o,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){u.set(e.id,e)})),t.forEach((function(t){t.networkLinkIds.forEach((function(r){var i=function(e,t,n){var r=function(e,t){var n;return t.some((function(t){return t.id===e&&(n=t,!0)})),n}(e,n);return r&&(r.parentFolderId=t,r.networkLink=r),r}(r,t.id,e.networkLinks);i&&n.push(i)}))})),n.forEach((function(e){if(e.featureInfos){e.points=(0,c.d9)(r.get("esriGeometryPoint")),e.polylines=(0,c.d9)(r.get("esriGeometryPolyline")),e.polygons=(0,c.d9)(r.get("esriGeometryPolygon")),e.mapImages=[];var t,n=(0,a.Z)(e.featureInfos);try{for(n.s();!(t=n.n()).done;){var i=t.value;switch(i.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var s=l[i.type].get(i.id);s&&e[g[i.type]].featureSet.features.push(s);break;case"GroundOverlay":var o=u.get(i.id);o&&e.mapImages.push(o)}}}catch(h){n.e(h)}finally{n.f()}e.fullExtent=S([e])}}));var h=S(n);return{folders:t,sublayers:n,extent:h}}function y(e,t,n,r){var i=o.id&&o.id.findCredential(e);e=(0,h.fl)(e,{token:i&&i.token});var a=s.Z.kmlServiceUrl;return(0,l.default)(a,{query:{url:e,model:"simple",folders:"",refresh:0!==n||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=[],a={},s=t.sublayers,o=t.folders.map((function(e){return e.id}));return s.forEach((function(t){var s=new e;if(n?s.read(t,n):s.read(t),r.length&&o.includes(s.id)&&(s.visible=r.includes(s.id)),a[t.id]=s,null!=t.parentFolderId&&-1!==t.parentFolderId){var u,l=a[t.parentFolderId];l.sublayers||(l.sublayers=[]),null===(u=l.sublayers)||void 0===u||u.unshift(s)}else i.unshift(s)})),i}function b(e,t,n){n.forEach((function(n){e.set(n.attributes[t],n)}))}function w(e){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,r.Z)().mark((function e(t){var n,i,s,o,l,c,h,f,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=m.Z.fromJSON(t.featureSet).features,i=t.layerDefinition,s=(0,v.i)(i.drawingInfo.renderer),o=u.Z.fromJSON(t.popupInfo),l=[],c=(0,a.Z)(n),e.prev=2,c.s();case 4:if((h=c.n()).done){e.next=12;break}return f=h.value,e.next=8,s.getSymbolAsync(f);case 8:d=e.sent,f.symbol=d,f.popupTemplate=o,f.visible=!0,l.push(f);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),c.e(e.t0);case 17:return e.prev=17,c.f(),e.finish(17);case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})))).apply(this,arguments)}function S(e){var t,n=(0,d.Ue)(d.Gv),r=(0,d.Ue)(d.Gv),i=(0,a.Z)(e);try{for(i.s();!(t=i.n()).done;){var s=t.value;if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features){var o,u=(0,a.Z)(s.polygons.featureSet.features);try{for(u.s();!(o=u.n()).done;){var l=o.value;(0,p.Yg)(n,l.geometry),(0,d.TC)(r,n)}}catch(w){u.e(w)}finally{u.f()}}if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features){var c,h=(0,a.Z)(s.polylines.featureSet.features);try{for(h.s();!(c=h.n()).done;){var v=c.value;(0,p.Yg)(n,v.geometry),(0,d.TC)(r,n)}}catch(w){h.e(w)}finally{h.f()}}if(s.points&&s.points.featureSet&&s.points.featureSet.features){var m,g=(0,a.Z)(s.points.featureSet.features);try{for(g.s();!(m=g.n()).done;){var _=m.value;(0,p.Yg)(n,_.geometry),(0,d.TC)(r,n)}}catch(w){g.e(w)}finally{g.f()}}if(s.mapImages){var y,x=(0,a.Z)(s.mapImages);try{for(x.s();!(y=x.n()).done;){var b=y.value;(0,p.Yg)(n,b.extent),(0,d.TC)(r,n)}}catch(w){x.e(w)}finally{x.f()}}}}catch(w){i.e(w)}finally{i.f()}return(0,d.fS)(r,d.Gv)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:f.Z.WGS84}}},45956:function(e,t,n){n.d(t,{JZ:function(){return k},RL:function(){return S},eY:function(){return Z}});var r=n(29439),i=n(74165),a=n(15861),s=n(15671),o=n(43144),u=n(97326),l=n(11752),c=n(61120),h=n(60136),f=n(92572),d=n(92026),p=n(66978),v=n(22753),m=n(23588),g=n(15245),_=n(87422),y=n(10978),x=n(49800),b=n(8548),w=n(371);function k(e){return e&&"render"in e}function S(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}var Z=function(e){(0,h.Z)(n,e);var t=(0,f.Z)(n);function n(){var e,r,i,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1?arguments[1]:void 0;return(0,s.Z)(this,n),(i=t.call(this)).blendFunction="standard",i._sourceWidth=0,i._sourceHeight=0,i._textureInvalidated=!1,i._texture=null,i.stencilRef=0,i.coordScale=[1,1],i._height=void 0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._source=null,i._width=void 0,i.x=0,i.y=0,i.immutable=null!==(e=o.immutable)&&void 0!==e&&e,i.requestRenderOnSourceChangedEnabled=null===(r=o.requestRenderOnSourceChangedEnabled)||void 0===r||r,i.source=a,i.requestRender=i.requestRender.bind((0,u.Z)(i)),i}return(0,o.Z)(n,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null),(0,d.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}},{key:"isSourceScaled",get:function(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this._sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}},{key:"width",get:function(){return void 0!==this._width?this._width:this._sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,l.Z)((0,c.Z)(n.prototype),"beforeRender",this).call(this,e),this.updateTexture(e)}},{key:"setSourceAsync",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,d.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort(),r=new AbortController,a=(0,p.hh)(),e.abrupt("return",((0,p.$F)(n,(function(){return r.abort()})),(0,p.$F)(r,(function(e){return a.reject(e)})),this._uploadStatus={controller:r,resolver:a},this.source=t,a.promise));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),(0,l.Z)((0,c.Z)(n.prototype),"updateTransitionProperties",this).call(this,e,t)}},{key:"setTransform",value:function(e){var t=(0,v.g)(this.transforms.dvs),n=e.toScreenNoRotation([0,0],[this.x,this.y]),i=(0,r.Z)(n,2),a=i[0],s=i[1],o=this.resolution/this.pixelRatio/e.resolution,u=o*this.width,l=o*this.height,c=Math.PI*this.rotation/180;(0,v.h)(t,t,(0,g.f)(a,s)),(0,v.h)(t,t,(0,g.f)(u/2,l/2)),(0,v.r)(t,t,-c),(0,v.h)(t,t,(0,g.f)(-u/2,-l/2)),(0,v.k)(t,t,(0,g.f)(u,l)),(0,v.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,s,o,u,l,c,h,f,v;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.context,r=t.painter,this._textureInvalidated){e.next=3;break}return e.abrupt("return");case 3:if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(n)),this.source){e.next=5;break}return e.abrupt("return",void this._texture.setData(null));case 5:if(this._texture.resize(this._sourceWidth,this._sourceHeight),i=this.source,a=k(i)?i instanceof y.Z?(0,d.yw)(i.getRenderedRasterPixels(),(function(e){return e.renderedRasterPixels})):S(i):i,e.prev=7,!(0,d.pC)(this._uploadStatus)){e.next=16;break}return s=this._uploadStatus,o=s.controller,u=s.resolver,l={signal:o.signal},c=this.width,h=this.height,f=this._texture,v=r.textureUploadManager,e.next=12,v.enqueueTextureUpdate({data:a,texture:f,width:c,height:h},l);case 12:u.resolve(),this._uploadStatus=null,e.next=17;break;case 16:this._texture.setData(a);case 17:this.ready(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),(0,p.H9)(e.t0);case 23:case"end":return e.stop()}var i}),e,this,[[7,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onDetach",value:function(){this.destroy()}},{key:"_createTransforms",value:function(){return{dvs:(0,m.c)()}}},{key:"_createTexture",value:function(e){var t=this.immutable&&e.type===x.zO.WEBGL2;return new w.x(e,{target:b.No.TEXTURE_2D,pixelFormat:b.VI.RGBA,internalFormat:t?b.lP.RGBA8:b.VI.RGBA,dataType:b.Br.UNSIGNED_BYTE,wrapMode:b.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}]),n}(_.s)},90110:function(e,t,n){n.d(t,{c:function(){return f}});var r=n(93433),i=n(15671),a=n(43144),s=n(11752),o=n(61120),u=n(60136),l=n(92572),c=n(70739),h=n(80613),f=function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments))._hasCrossfade=!1,e}return(0,a.Z)(n,[{key:"requiresDedicatedFBO",get:function(){return this._hasCrossfade}},{key:"beforeRender",value:function(e){(0,s.Z)((0,o.Z)(n.prototype),"beforeRender",this).call(this,e),this._manageFade()}},{key:"prepareRenderPasses",value:function(e){var t=this,i=e.registerRenderPass({name:"bitmap",brushes:[c.U.bitmap],target:function(){return t.children},drawPhase:h.jx.MAP});return[].concat((0,r.Z)((0,s.Z)((0,o.Z)(n.prototype),"prepareRenderPasses",this).call(this,e)),[i])}},{key:"_manageFade",value:function(){this.children.reduce((function(e,t){return e+(t.inFadeTransition?1:0)}),0)>=2?(this.children.forEach((function(e){return e.blendFunction="additive"})),this._hasCrossfade=!0):(this.children.forEach((function(e){return e.blendFunction="standard"})),this._hasCrossfade=!1)}}]),n}(n(64510).Z)},10978:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(15671),i=n(43144),a=n(92026),s=function(){function e(t,n,i){(0,r.Z)(this,e),this.pixelBlock=t,this.extent=n,this.originalPixelBlock=i}return(0,i.Z)(e,[{key:"width",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t,n=this.pixelBlock;if(!(0,a.Wi)(n)){var r=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:n});if(!(0,a.Wi)(r.pixelBlock)){r.pixelBlock.maskIsAlpha&&(r.pixelBlock.premultiplyAlpha=!0);var i=r.pixelBlock.getAsRGBA(),s=e.createImageData(r.pixelBlock.width,r.pixelBlock.height);s.data.set(i),e.putImageData(s,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return(0,a.Wi)(e.pixelBlock)?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}]),e}()},40658:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(54711),i=n(65706),a=function(e){var t="";t+=e[0].toUpperCase();for(var n=1;n<e.length;n++){var r=e[n];r===r.toUpperCase()?(t+="_",t+=r):t+=r.toUpperCase()}return t},s=function(e){var t={};for(var n in e)t[a(n)]=e[n];return(0,i.K)(t)},o=function(e,t,n,i){var a=e+e.substring(e.lastIndexOf("/")),o=t+t.substring(t.lastIndexOf("/")),u=s(i);return{attributes:n,shaders:{vertexShader:u+(0,r.w)("".concat(a,".vert")),fragmentShader:u+(0,r.w)("".concat(o,".frag"))}}}},6326:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(93433),i=n(1413),a=n(29439),s=n(37762),o=n(74165),u=n(15861),l=n(60136),c=n(92572),h=n(43144),f=n(15671),d=n(27366),p=n(19545),v=n(80987),m=n(92026),g=n(94172),_=n(35995),y=n(49861),x=(n(25243),n(63780),n(69912)),b=n(53866),w=n(79803),k=n(78952),S=n(21857),Z=n(23084),C=n(78983),V=n(45956),T=n(90110),I=n(95986),E=n(75391),R=n(77318),A=n(67581),P=n(76200),B=n(585),M=n(80394),G=n(25866),D=n(40658),U=n(8548),O=n(53634),F=n(48673),L=n(86401),N=n(371),q=function(){function e(t){if((0,f.Z)(this,e),this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(e._instance)return e._instanceRefCount++,e._instance;e._instanceRefCount=1,e._instance=this,this._ownsRctx=!0;var n=document.createElement("canvas").getContext("webgl");n.getExtension("OES_texture_float"),this._rctx=new L.x(n,{})}var r=(0,D.s)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new G.Z(this._rctx,[0,0,1,0,0,1,1,1])}return(0,h.Z)(e,[{key:"reprojectTexture",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=(0,w.iV)(e.extent,t),i=new B.Z({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),a=(0,M.VO)(i,t,e.extent),s=a.x,o=a.y,u=(s+o)/2,l=Math.round((r.xmax-r.xmin)/u),c=Math.round((r.ymax-r.ymin)/u);u=(r.width/l+r.height/c)/2;var h=new B.Z({x:u,y:u,spatialReference:r.spatialReference}),f=(0,M.Qp)({projectedExtent:r,srcBufferExtent:e.extent,pixelSize:h,hasWrapAround:!0,spacing:[16,16]}),d=(0,F.Br)(this._rctx,f),p=new N.x(this._rctx,{width:l,height:c,pixelFormat:U.VI.RGBA,dataType:U.Br.UNSIGNED_BYTE,wrapMode:U.e8.CLAMP_TO_EDGE,samplingMode:U.cw.LINEAR,hasMipmap:!1}),v=new O.X(this._rctx,{colorTarget:U.Lm.TEXTURE,depthStencilTarget:U.OU.NONE,width:l,height:c},p);this._rctx.bindFramebuffer(v),this._rctx.setViewport(0,0,l,c),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(d,1),this._quad.bind();var m=e.texture.descriptor,g=m.width,_=void 0===g?0:g,y=m.height,x=void 0===y?0:y;if(this._program.setUniform2f("u_srcImageSize",_,x),this._program.setUniform2fv("u_transformSpacing",f.spacing),this._program.setUniform2fv("u_transformGridSize",f.size),this._program.setUniform2f("u_targetImageSize",l,c),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),d.dispose(),n){var b=v.descriptor,k=b.width,S=void 0===k?0:k,Z=b.height,C=void 0===Z?0:Z,V=new ImageData(S,C);return v.readPixels(0,0,S,C,U.VI.RGBA,U.Br.UNSIGNED_BYTE,V.data),v.detachColorTexture(U.VY.COLOR_ATTACHMENT0),v.dispose(),{texture:p,extent:r,imageData:V}}return v.detachColorTexture(U.VY.COLOR_ATTACHMENT0),v.dispose(),{texture:p,extent:r}}},{key:"reprojectBitmapData",value:function(e,t){var n=(0,V.JZ)(e.bitmapData)?(0,V.RL)(e.bitmapData):e.bitmapData,r=new N.x(this._rctx,{width:e.bitmapData.width,height:e.bitmapData.height,pixelFormat:U.VI.RGBA,dataType:U.Br.UNSIGNED_BYTE,wrapMode:U.e8.CLAMP_TO_EDGE,samplingMode:U.cw.LINEAR,hasMipmap:!1},n),i=this.reprojectTexture({texture:r,extent:e.extent},t,!0);i.texture.dispose();var a=document.createElement("canvas"),s=i.imageData;return a.width=s.width,a.height=s.height,a.getContext("2d").putImageData(s,0,0),{bitmapData:a,extent:i.extent}}},{key:"loadAndReprojectBitmapData",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n,r){var i,a,s,u,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,P.default)(t,{responseType:"image"});case 2:if(i=e.sent.data,(a=document.createElement("canvas")).width=i.width,a.height=i.height,(s=a.getContext("2d")).drawImage(i,0,0),u=s.getImageData(0,0,a.width,a.height),!n.spatialReference.equals(r)){e.next=10;break}return e.abrupt("return",{bitmapData:u,extent:n});case 10:return l=this.reprojectBitmapData({bitmapData:u,extent:n},r),e.abrupt("return",{bitmapData:l.bitmapData,extent:l.extent});case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this._ownsRctx?(e._instanceRefCount--,0===e._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),e._instance=null)):(this._quad.dispose(),this._program.dispose())}}]),e}();q._instanceRefCount=0;var z=(0,h.Z)((function e(){(0,f.Z)(this,e),this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]})),j=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,f.Z)(this,n),(e=t.apply(this,arguments))._bitmapIndex=new Map,e._mapImageContainer=new T.c,e._kmlVisualData=new z,e._fetchController=null,e.allVisiblePoints=new C.J,e.allVisiblePolylines=new C.J,e.allVisiblePolygons=new C.J,e.allVisibleMapImages=new v.Z,e}return(0,h.Z)(n,[{key:"hitTest",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n){var r,i,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.layer,e.abrupt("return",[null===(r=this._pointsView)||void 0===r?void 0:r.hitTest(t),null===(i=this._polylinesView)||void 0===i?void 0:i.hitTest(t),null===(a=this._polygonsView)||void 0===a?void 0:a.hitTest(t)].flat().filter(Boolean).map((function(e){return e.layer=s,e.sourceLayer=s,{type:"graphic",graphic:e,layer:s,mapPoint:t}})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"update",value:function(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}},{key:"attach",value:function(){var e=this;this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:function(){return e.requestUpdate()},container:new E.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:function(){return e.requestUpdate()},container:new E.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:function(){return e.requestUpdate()},container:new E.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(function(t){t.added.forEach((function(t){return e._addMapImage(t)})),t.removed.forEach((function(t){return e._removeMapImage(t)}))})),(0,g.YP)((function(){return e.layer.visibleSublayers}),(function(t){var n,r=(0,s.Z)(e._kmlVisualData.allSublayers);try{for(r.s();!(n=r.n()).done;){var i=(0,a.Z)(n.value,2);i[0];i[1].visibility=0}}catch(h){r.e(h)}finally{r.f()}var o,u=(0,s.Z)(t);try{for(u.s();!(o=u.n()).done;){var l=o.value,c=e._kmlVisualData.allSublayers.get(l.id);c&&(c.visibility=1)}}catch(h){u.e(h)}finally{u.f()}e._refreshCollections()}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new q}},{key:"detach",value:function(){this._fetchController=(0,m.IM)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,m.SC)(this._polygonsView),this._polylinesView=(0,m.SC)(this._polylinesView),this._pointsView=(0,m.SC)(this._pointsView),this._imageReprojector=(0,m.SC)(this._imageReprojector)}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}},{key:"moveEnd",value:function(){}},{key:"isUpdating",value:function(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}},{key:"_addMapImage",value:function(e){var t,n,r=this;((null===(t=this.view.spatialReference)||void 0===t?void 0:t.isWGS84)||(null===(n=this.view.spatialReference)||void 0===n?void 0:n.isWebMercator))&&this._imageReprojector.loadAndReprojectBitmapData(e.href,b.Z.fromJSON(e.extent),this.view.spatialReference).then((function(t){var n=new V.eY(t.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});n.x=t.extent.xmin,n.y=t.extent.ymax,n.resolution=t.extent.width/t.bitmapData.width,n.rotation=e.rotation,r._mapImageContainer.addChild(n),r._bitmapIndex.set(e,n)}))}},{key:"_getViewDependentUrl",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t,n){var r,a,s,u,l,c,h,f,d,v,g,y,x,S,C,V,T,I;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.viewFormat,a=t.viewBoundScale,s=t.httpQuery,!(0,m.pC)(r)){e.next=20;break}if(!(0,m.Wi)(n)){e.next=4;break}throw new Error("Loading this network link requires a view state.");case 4:return e.next=6,(0,w.zD)();case 6:if(!(0,m.pC)(a)||1===a){e.next=11;break}(l=new b.Z(n.extent)).expand(a),u=l,e.next=12;break;case 11:u=n.extent;case 12:return u=(0,w.iV)(u,k.Z.WGS84),c=(0,w.iV)(u,k.Z.WebMercator),h=u.xmin,f=u.xmax,d=u.ymin,v=u.ymax,g=n.size[0]*n.pixelRatio,y=n.size[1]*n.pixelRatio,x=Math.max(c.width,c.height),S={"[bboxWest]":h.toString(),"[bboxEast]":f.toString(),"[bboxSouth]":d.toString(),"[bboxNorth]":v.toString(),"[lookatLon]":u.center.x.toString(),"[lookatLat]":u.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":n.rotation.toString(),"[lookatTerrainLon]":u.center.x.toString(),"[lookatTerrainLat]":u.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":u.center.x.toString(),"[cameraLat]":u.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":g.toString(),"[vertPixels]":y.toString(),"[terrainEnabled]":"0","[clientVersion]":p.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=function(e){for(var t in e)for(var n in S)e[t]=e[t].replace(n,S[n])},V=(0,_.u0)(r),C(V),T={},(0,m.pC)(s)&&(T=(0,_.u0)(s),C(T)),(I=(0,Z.en)(t.href)).query=(0,i.Z)((0,i.Z)((0,i.Z)({},I.query),V),T),e.abrupt("return","".concat(I.path,"?").concat((0,_.B7)(V)));case 20:return e.abrupt("return",t.href);case 21:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,u.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new z,e.next=3,this._loadVisualData(this.layer.url,n,t);case 3:this._kmlVisualData=n,this._refreshCollections();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_refreshCollections",value:function(){var e=this;this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((function(t){return e._isSublayerVisible(t.sublayerId)})).map((function(e){return e.item})))}},{key:"_isSublayerVisible",value:function(e){var t=this._kmlVisualData.allSublayers.get(e);return!(null===t||void 0===t||!t.visibility)&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}},{key:"_loadVisualData",value:function(e,t,n){var i=this;return this._fetchParsedKML(e,n).then(function(){var e=(0,u.Z)((0,o.Z)().mark((function e(a){var u,l,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=(0,s.Z)(a.sublayers),e.prev=1,c=(0,o.Z)().mark((function e(){var a,s,u,c,h,f,d,p,v,m;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=l.value,t.allSublayers.set(h.id,h),!h.points){e.next=8;break}return e.next=5,(0,S.Yu)(h.points);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=[];case 9:if(f=e.t0,!h.polylines){e.next=16;break}return e.next=13,(0,S.Yu)(h.polylines);case 13:e.t1=e.sent,e.next=17;break;case 16:e.t1=[];case 17:if(d=e.t1,!h.polygons){e.next=24;break}return e.next=21,(0,S.Yu)(h.polygons);case 21:e.t2=e.sent,e.next=25;break;case 24:e.t2=[];case 25:if(p=e.t2,v=h.mapImages||[],(a=t.allPoints).push.apply(a,(0,r.Z)(f.map((function(e){return{item:e,sublayerId:h.id}})))),(s=t.allPolylines).push.apply(s,(0,r.Z)(d.map((function(e){return{item:e,sublayerId:h.id}})))),(u=t.allPolygons).push.apply(u,(0,r.Z)(p.map((function(e){return{item:e,sublayerId:h.id}})))),(c=t.allMapImages).push.apply(c,(0,r.Z)(v.map((function(e){return{item:e,sublayerId:h.id}})))),!h.networkLink){e.next=33;break}return e.next=30,i._getViewDependentUrl(h.networkLink,i.view.state);case 30:return m=e.sent,e.next=33,i._loadVisualData(m,t,n);case 33:case"end":return e.stop()}}),e)})),u.s();case 4:if((l=u.n()).done){e.next=8;break}return e.delegateYield(c(),"t0",6);case 6:e.next=4;break;case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(1),u.e(e.t1);case 13:return e.prev=13,u.f(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}())}},{key:"_fetchParsedKML",value:function(e,t){return(0,S.CS)(e,this.layer.spatialReference,this.layer.refreshInterval,t).then((function(e){return(0,S.Cw)(e.data)}))}},{key:"_removeMapImage",value:function(e){var t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}}]),n}((0,I.y)(A.Z));(0,d._)([(0,y.Cb)()],j.prototype,"_pointsView",void 0),(0,d._)([(0,y.Cb)()],j.prototype,"_polylinesView",void 0),(0,d._)([(0,y.Cb)()],j.prototype,"_polygonsView",void 0),(0,d._)([(0,y.Cb)()],j.prototype,"updating",void 0);var W=j=(0,d._)([(0,x.j)("esri.views.2d.layers.KMLLayerView2D")],j)},75391:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(15671),i=n(43144),a=n(11752),s=n(61120),o=n(60136),u=n(92572),l=n(80613),c=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.children.some((function(e){return e.hasData}))&&(this.attributeView.bindTextures(e.context,!1),(0,a.Z)((0,s.Z)(n.prototype),"renderChildren",this).call(this,e),e.drawPhase===l.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===l.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),n}(n(82022).Z)},43411:function(e,t,n){function r(e,t,n){for(var r=0;r<n;++r)t[2*r]=e[r],t[2*r+1]=e[r]-t[2*r]}function i(e,t){for(var n=e.length,r=0;r<n;++r)s[0]=e[r],t[r]=s[0];return t}function a(e,t){for(var n=e.length,r=0;r<n;++r)s[0]=e[r],s[1]=e[r]-s[0],t[r]=s[1];return t}n.d(t,{GB:function(){return a},LF:function(){return r},U8:function(){return i}});var s=new Float32Array(2)},65706:function(e,t,n){function r(e){return"number"==typeof e.options[e.value]}function i(e){var t="";for(var n in e){var i=e[n];if("boolean"==typeof i)i&&(t+="#define ".concat(n,"\n"));else if("number"==typeof i)t+="#define ".concat(n," ").concat(i.toFixed(),"\n");else if("object"==typeof i)if(r(i)){var a=i.value,s=i.options,o=i.namespace,u=o?"".concat(o,"_"):"";for(var l in s)t+="#define ".concat(u).concat(l," ").concat(s[l].toFixed(),"\n");t+="#define ".concat(n," ").concat(u).concat(a,"\n")}else{var c=i.options,h=0;for(var f in c)t+="#define ".concat(c[f]," ").concat((h++).toFixed(),"\n");t+="#define ".concat(n," ").concat(c[i.value],"\n")}}return t}n.d(t,{K:function(){return i}})},48673:function(e,t,n){n.d(t,{Br:function(){return c},Fm:function(){return m},N9:function(){return _},RA:function(){return y},Tc:function(){return f},Ue:function(){return d},iC:function(){return h},s9:function(){return l},v:function(){return g},xW:function(){return v},zS:function(){return p}});var r=n(29439),i=n(92026),a=n(6394),s=n(49800),o=n(8548),u=n(371);function l(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=!(i&&"u8"===t.pixelType),l=a?o.Br.FLOAT:o.Br.UNSIGNED_BYTE,c=null==t.pixels||0===t.pixels.length?null:a?t.getAsRGBAFloat():t.getAsRGBA(),h=null===(n=e.capabilities.textureFloat)||void 0===n?void 0:n.textureFloatLinear,f={width:t.width,height:t.height,target:o.No.TEXTURE_2D,pixelFormat:o.VI.RGBA,internalFormat:e.type===s.zO.WEBGL2&&a?o.lP.RGBA32F:o.VI.RGBA,samplingMode:!h||"bilinear"!==r&&"cubic"!==r?o.cw.NEAREST:o.cw.LINEAR,dataType:l,wrapMode:o.e8.CLAMP_TO_EDGE,flipped:!1};return new u.x(e,f,c)}function c(e,t){var n=t.spacing,i=t.offsets,a=t.coefficients,l=(0,r.Z)(t.size,2),c=l[0],h=l[1],f=n[0]>1,d={width:f?4*c:c,height:h,target:o.No.TEXTURE_2D,pixelFormat:o.VI.RGBA,internalFormat:e.type===s.zO.WEBGL2?o.lP.RGBA32F:o.VI.RGBA,dataType:o.Br.FLOAT,samplingMode:o.cw.NEAREST,wrapMode:o.e8.CLAMP_TO_EDGE,flipped:!1},p=new Float32Array(f?c*h*16:2*i.length);if(f&&null!=a)for(var v=0,m=0;v<a.length;v++)p[m++]=a[v],v%3==2&&(p[m++]=1);else for(var g=0;g<h;g++)for(var _=0;_<c;_++){var y=4*(g*c+_),x=2*(_*h+g);p[y]=i[x],p[y+1]=i[x+1],p[y+3]=-1===i[x]?0:1}return new u.x(e,d,p)}function h(e,t){var n={width:t.length/4,height:1,target:o.No.TEXTURE_2D,pixelFormat:o.VI.RGBA,internalFormat:o.VI.RGBA,dataType:o.Br.UNSIGNED_BYTE,samplingMode:o.cw.NEAREST,wrapMode:o.e8.CLAMP_TO_EDGE,flipped:!1};return new u.x(e,n,t)}function f(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return{u_flipY:i,u_applyTransform:!!e,u_opacity:r,u_transformSpacing:e?e.spacing:a.Z,u_transformGridSize:e?e.size:a.Z,u_targetImageSize:t,u_srcImageSize:n}}function d(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function p(e,t){return{u_scale:e,u_offset:t}}function v(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function m(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function g(e,t){var n=e.gl,r=t.glName,a=new Map;if((0,i.Wi)(r))return a;for(var s,o=n.getProgramParameter(r,n.ACTIVE_UNIFORMS),u=0;u<o;u++)(s=n.getActiveUniform(r,u))&&a.set(s.name,{location:n.getUniformLocation(r,s.name),info:s});return a}function _(e,t,n){Object.keys(n).forEach((function(r){var i=t.get(r)||t.get(r+"[0]");i&&function(e,t,n,r){if(null===r||null==n)return!1;var i=r.info;switch(i.type){case o.Se.FLOAT:i.size>1?e.setUniform1fv(t,n):e.setUniform1f(t,n);break;case o.Se.FLOAT_VEC2:e.setUniform2fv(t,n);break;case o.Se.FLOAT_VEC3:e.setUniform3fv(t,n);break;case o.Se.FLOAT_VEC4:e.setUniform4fv(t,n);break;case o.Se.FLOAT_MAT3:e.setUniformMatrix3fv(t,n);break;case o.Se.FLOAT_MAT4:e.setUniformMatrix4fv(t,n);break;case o.Se.INT:i.size>1?e.setUniform1iv(t,n):e.setUniform1i(t,n);break;case o.Se.BOOL:e.setUniform1i(t,n?1:0);break;case o.Se.INT_VEC2:case o.Se.BOOL_VEC2:e.setUniform2iv(t,n);break;case o.Se.INT_VEC3:case o.Se.BOOL_VEC3:e.setUniform3iv(t,n);break;case o.Se.INT_VEC4:case o.Se.BOOL_VEC4:e.setUniform4iv(t,n);break;default:return!1}}(e,r,n[r],i)}))}function y(e,t,n,r){n.length===r.length&&(r.some((function(e){return null==e}))||n.some((function(e){return null==e}))||n.forEach((function(n,i){t.setUniform1i(n,i),e.bindTexture(r[i],i)})))}}}]);
//# sourceMappingURL=82821.cd48fa33.chunk.js.map
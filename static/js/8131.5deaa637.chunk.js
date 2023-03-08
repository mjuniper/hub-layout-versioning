"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[8131],{92251:function(e,t,r){r.d(t,{KS:function(){return l},PX:function(){return s},QS:function(){return c},_I:function(){return i},jL:function(){return o},nE:function(){return h},vs:function(){return u},xp:function(){return a}});var i=8388607,n=8388608,s=0,a=1,u=function(e){return(e&n)>>>23},o=function(e){return e&i},l=function(e){return u(e)===a?254:255};function h(e){return u(e)===a}function c(e,t){return((t?n:0)|e)>>>0}},64668:function(e,t,r){r.d(t,{J:function(){return n},g:function(){return i}});var i=function(e,t){return e&&function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.warn.apply(t,["DEBUG:"].concat(r))}||function(){return null}},n=!1},45367:function(e,t,r){r.d(t,{Z:function(){return z}});var i=r(74165),n=r(15861),s=r(37762),a=r(15671),u=r(43144),o=r(10064),l=r(93169),h=r(32718),c=r(16889),d=r(92026),f=r(66978),y=r(48732),v=r(52410),_=r(94109),p=r(92251),g=r(84319),m=r(64668),k=r(98290),b=r(8548),x=h.Z.getLogger("esri.views.layers.2d.features.support.AttributeStore"),I=(0,m.g)(m.J,x),S={sharedArrayBuffer:(0,l.Z)("esri-shared-array-buffer"),atomics:(0,l.Z)("esri-atomics")};function T(e,t){return function(r){return t(e(r))}}var A=function(){function e(t,r,i,n){(0,a.Z)(this,e),this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;var s=n.pixelType,u=n.layout,o=n.textureOnly;this.textureOnly=o||!1,this.pixelType=s,this._ctype=r,this.layout=u,this._resetRange(),this._shared=t,this.size=i,o||(this.data=this._initData(s,i,t,r))}return(0,u.Z)(e,[{key:"buffer",get:function(){return(0,d.yw)(this.data,(function(e){return e.buffer}))}},{key:"unsetComponentAllTexels",value:function(e,t){for(var r=(0,d.Wg)(this.data),i=0;i<this.size*this.size;i++)r[i*this.texelSize+e]&=~t;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}},{key:"setComponentAllTexels",value:function(e,t){for(var r=(0,d.Wg)(this.data),i=0;i<this.size*this.size;i++)r[i*this.texelSize+e]|=255&t;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}},{key:"setComponent",value:function(e,t,r){var i,n=(0,d.Wg)(this.data),a=(0,s.Z)(r);try{for(a.s();!(i=a.n()).done;){var u=i.value;n[u*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,u),this.dirtyEnd=Math.max(this.dirtyEnd,u)}}catch(o){a.e(o)}finally{a.f()}}},{key:"setComponentTexel",value:function(e,t,r){(0,d.Wg)(this.data)[r*this.texelSize+e]|=t,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"unsetComponentTexel",value:function(e,t,r){(0,d.Wg)(this.data)[r*this.texelSize+e]&=~t,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}},{key:"getData",value:function(e,t){var r=(0,p.jL)(e);return(0,d.Wg)(this.data)[r*this.texelSize+t]}},{key:"setData",value:function(e,t,r){var i=(0,p.jL)(e),n=1<<t;0!=(this.layout&n)?(0,d.Wi)(this.data)||(this.data[i*this.texelSize+t]=r,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):x.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}},{key:"lock",value:function(){this.pixelType===b.Br.UNSIGNED_BYTE&&this._shared&&S.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}},{key:"unlock",value:function(){this.pixelType===b.Br.UNSIGNED_BYTE&&this._shared&&S.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}},{key:"expand",value:function(e){if(this.size=e,!this.textureOnly){var t=this._initData(this.pixelType,e,this._shared,this._ctype),r=(0,d.Wg)(this.data);t.set(r),this.data=t}}},{key:"toMessage",value:function(){var e=this.dirtyStart,t=this.dirtyEnd,r=this.texelSize;if(e>t)return null;this._resetRange();var i=!(this._shared||"local"===this._ctype),n=this.pixelType,s=this.layout,a=(0,d.Wg)(this.data);return{start:e,end:t,data:i&&a.slice(e*r,(t+1)*r)||null,pixelType:n,layout:s}}},{key:"_initData",value:function(e,t,r,i){for(var n=r&&"local"!==i?SharedArrayBuffer:ArrayBuffer,s=(0,g.UK)(e),a=new s(new n(t*t*4*s.BYTES_PER_ELEMENT)),u=0;u<a.length;u+=4)a[u+1]=255;return a}},{key:"_resetRange",value:function(){this.dirtyStart=2147483647,this.dirtyEnd=0}}]),e}(),z=function(){function e(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};(0,a.Z)(this,e),this._client=t,this.config=r,this._notifyChange=i,this._blocks=new Array,this._filters=new Array(_.m4),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;var n=r.supportsTextureFloat?b.Br.FLOAT:b.Br.UNSIGNED_BYTE;I("Creating AttributeStore ".concat(S.sharedArrayBuffer?"with":"without"," shared memory")),this._blockDescriptors=[{pixelType:b.Br.UNSIGNED_BYTE,layout:1},{pixelType:b.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:b.Br.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:n,layout:15},{pixelType:n,layout:15},{pixelType:n,layout:15},{pixelType:n,layout:15}],this._blocks=this._blockDescriptors.map((function(){return null}))}return(0,u.Z)(e,[{key:"destroy",value:function(){this._abortController.abort()}},{key:"hasScaleExpr",get:function(){return this._hasScaleExpr}},{key:"_signal",get:function(){return this._abortController.signal}},{key:"hasHighlight",get:function(){return this._idsToHighlight.size>0}},{key:"isUpdating",value:function(){return!!this._currUpdate||!!this._nextUpdate}},{key:"update",value:function(e,t){this.config=t;var r=t.schema.processors[0].storage,i=(0,y.Hg)(this._schema,r);if((e.targets.feature||e.targets.aggregate)&&(e.storage.data=!0),i&&((0,l.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",i),e.storage.data=!0,this._schema=r,this._attributeComputeInfo=null,!(0,d.Wi)(r))){switch(r.target){case"feature":this._targetType=p.PX;break;case"aggregate":this._targetType=p.xp}if("subtype"===r.type)for(var n in this._attributeComputeInfo={isSubtype:!0,subtypeField:r.subtypeField,map:new Map},r.mapping){var a=r.mapping[n];if((0,d.pC)(a)&&(0,d.pC)(a.vvMapping)){var u,o=(0,s.Z)(a.vvMapping);try{for(o.s();!(u=o.n()).done;){var h=u.value;this._bindAttribute(h,parseInt(n,10))}}catch(k){o.e(k)}finally{o.f()}}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},(0,d.pC)(r.vvMapping)){var c,f=(0,s.Z)(r.vvMapping);try{for(f.s();!(c=f.n()).done;){var v=c.value;this._bindAttribute(v)}}catch(k){f.e(k)}finally{f.f()}}if((0,d.pC)(r.attributeMapping)){var _,g=(0,s.Z)(r.attributeMapping);try{for(g.s();!(_=g.n()).done;){var m=_.value;this._bindAttribute(m)}}catch(k){g.e(k)}finally{g.f()}}}}}},{key:"onTileData",value:function(e,t){if(!(0,d.Wi)(t.addOrUpdate))for(var r=t.addOrUpdate.getCursor();r.next();){var i=r.getDisplayId();this.setAttributeData(i,r)}}},{key:"setHighlight",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,r){var n,a,u,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1,n=this._getBlock(0),a=r.map((function(e){return(0,p.jL)(e)})),n.lock(),n.unsetComponentAllTexels(0,1),n.setComponent(0,1,a),n.unlock(),this._idsToHighlight.clear(),u=(0,s.Z)(t);try{for(u.s();!(o=u.n()).done;)l=o.value,this._idsToHighlight.add(l)}catch(i){u.e(i)}finally{u.f()}return e.next=6,this.sendUpdates();case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateFilters",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,r,n){var s,a,u,o,h=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.service,a=n.spatialReference,u=r.filters,o=u.map((function(e,t){return h._updateFilter(e,t,s,a)})),e.next=3,Promise.all(o);case 3:if(e.t0=e.sent.some((function(e){return e})),!e.t0){e.next=6;break}t.storage.filters=!0,(0,l.Z)("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed");case 6:case"end":return e.stop()}}),e)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"setData",value:function(e,t,r,i){var n=(0,p.jL)(e);this._ensureSizeForTexel(n),this._getBlock(t).setData(e,r,i)}},{key:"getData",value:function(e,t,r){return this._getBlock(t).getData(e,r)}},{key:"getHighlightFlag",value:function(e){return this._idsToHighlight.has(e)?_.uG:0}},{key:"unsetAttributeData",value:function(e){var t=(0,p.jL)(e);this._getBlock(0).setData(t,0,0)}},{key:"setAttributeData",value:function(e,t){var r=this,i=(0,p.jL)(e);if(this._ensureSizeForTexel(i),this._getBlock(0).setData(i,0,this.getFilterFlags(t)),this._targetType===(0,p.vs)(e)){var n=this._attributeComputeInfo,s=this.config.supportsTextureFloat?1:2,a=null;n&&((a=n.isSubtype?n.map.get(t.readAttribute(n.subtypeField)):n.map)&&a.size&&a.forEach((function(e,n){var a=n*s%4,u=Math.floor(n*s/4),o=r._getBlock(u+_.aK),l=e(t);if(r.config.supportsTextureFloat)o.setData(i,a,l);else if(l===_.AI)o.setData(i,a,255),o.setData(i,a+1,255);else{var h=(0,c.uZ)(Math.round(l),-32767,32766)+32768,d=255&h,f=(65280&h)>>8;o.setData(i,a,d),o.setData(i,a+1,f)}})))}}},{key:"sendUpdates",value:function(){var e=this;if((0,l.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._notifyChange(),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=(0,f.hh)(),this._nextUpdate.promise;var t={blocks:this._blocks.map((function(e){return(0,d.pC)(e)?e.toMessage():null}))};return this._currUpdate=this._createResources().then((function(){var r=function(){if(e._currUpdate=null,e._nextUpdate){var t=e._nextUpdate;e._nextUpdate=null,e.sendUpdates().then((function(){return t.resolve()}))}else(0,l.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued");e._notifyChange()};(0,l.Z)("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");var i=e._client.update(t,e._signal).then(r).catch(r);return e._client.render(e._signal),i})).catch((function(t){if((0,f.D_)(t))return e._createResourcesPromise=null,e._createResources();e._notifyChange(),x.error(new o.Z("mapview-attribute-store","Encountered an error during client update",t))})),this._currUpdate}},{key:"_ensureSizeForTexel",value:function(e){for(;e>=this._size*this._size;)if(this._expand())return}},{key:"_bindAttribute",value:function(e,t){var r;if(null!=e.fieldIndex)e.normalizationField&&x.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),r=function(t){return t.getComputedNumericAtIndex(e.fieldIndex)};else{if(!e.field)return;r=function(){var t=e.normalizationField;return t?function(r){var i=r.readAttribute(t);return i?r.readAttribute(e.field)/i:null}:function(t){return t.readAttribute(e.field)}}()}var i=e.valueRepresentation;i&&(r=T(r,(function(e){return(0,k.qc)(e,i)})));var n=function(e){return null===e||isNaN(e)||e===1/0||e===-1/0?_.AI:e},s=this._attributeComputeInfo;if(s.isSubtype){var a,u=null!==(a=s.map.get(t))&&void 0!==a?a:new Map;u.set(e.binding,T(r,n)),s.map.set(t,u)}else s.map.set(e.binding,T(r,n))}},{key:"_createResources",value:function(){var e=this;if((0,d.pC)(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(_.xl),this._getBlock(_.pU),I("Initializing AttributeStore");var t={shared:S.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:(0,d.Fd)(this._blocks,(function(e){return{textureOnly:e.textureOnly,buffer:e.buffer,pixelType:e.pixelType}}))},r=this._client.initialize(t,this._signal).catch((function(t){(0,f.D_)(t)?e._createResourcesPromise=null:x.error(new o.Z("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=r,r.then((function(){return(0,d.Wi)(e._createResourcesPromise)?e._createResources():void 0})),r}},{key:"_getBlock",value:function(e){var t=this._blocks[e];if((0,d.pC)(t))return t;I("Initializing AttributeBlock at index ".concat(e));var r=S.sharedArrayBuffer,i=this._client.type,n=new A(r,i,this._size,this._blockDescriptors[e]);return this._blocks[e]=n,this._createResourcesPromise=null,n}},{key:"_expand",value:function(){if(this._size<this.config.maxTextureSize){var e=this._size<<=1;return I("Expanding block size to",e,this._blocks),(0,d.JR)(this._blocks,(function(t){return t.expand(e)})),this._createResourcesPromise=null,this._size=e,0}return x.error(new o.Z("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}},{key:"_updateFilter",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,r,n,s){var a,u,o,l,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this._filters[r],u=(0,d.pC)(a)&&a.hash,a||t){e.next=3;break}return e.abrupt("return",!1);case 3:if(u!==JSON.stringify(t)){e.next=5;break}return e.abrupt("return",!1);case 5:if(!(0,d.Wi)(t)){e.next=10;break}if(a){e.next=8;break}return e.abrupt("return",!1);case 8:return o=1<<r+1,l=this._getBlock(0),e.abrupt("return",(this._filters[r]=null,l.setComponentAllTexels(0,o),this.sendUpdates(),!0));case 10:return e.next=12,this._getFilter(r,n);case 12:return h=e.sent,e.next=15,h.update(t,s);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n){return e.apply(this,arguments)}}()},{key:"_getFilter",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,n){var s,a,u,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this._filters[t],!(0,d.pC)(s)){e.next=3;break}return e.abrupt("return",s);case 3:return e.next=5,Promise.all([r.e(36876),r.e(37481)]).then(r.bind(r,37481));case 5:return a=e.sent,u=a.default,o=new u({geometryType:n.geometryType,hasM:!1,hasZ:!1,timeInfo:n.timeInfo,fieldsIndex:new v.Z(n.fields)}),e.abrupt("return",(this._filters[t]=o,o));case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"isVisible",value:function(e){return!!(2&this._getBlock(0).getData(e,0))}},{key:"getFilterFlags",value:function(e){for(var t=0,r=(0,p.KS)(e.getDisplayId()),i=0;i<this._filters.length;i++){var n=!!(r&1<<i),s=this._filters[i];t|=(!n||(0,d.Wi)(s)||s.check(e)?1:0)<<i}var a=0;if(this._idsToHighlight.size){var u=e.getObjectId();a=this.getHighlightFlag(u)}return t<<1|a}}]),e}()},56078:function(e,t,r){r.d(t,{O:function(){return h}});var i=r(37762),n=r(15671),s=r(43144),a=r(92251),u=function(){function e(){(0,n.Z)(this,e),this._freeIds=[],this._idCounter=1}return(0,s.Z)(e,[{key:"createId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,a.QS)(this._getFreeId(),e)}},{key:"releaseId",value:function(e){this._freeIds.push(e)}},{key:"_getFreeId",value:function(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}]),e}(),o=r(44333);function l(e,t,r){if(!(e.length>t))for(;e.length<=t;)e.push(r)}var h=function(){function e(){(0,n.Z)(this,e),this._numerics=[],this._strings=[],this._idGenerator=new u,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}return(0,s.Z)(e,[{key:"createBitset",value:function(){var e=this._bitsets.length;return this._bitsets.push(o.p.create(this._allocatedSize,a._I)),e+1}},{key:"getBitset",value:function(e){return this._bitsets[e-1]}},{key:"_expand",value:function(){this._allocatedSize<<=1;var e,t=(0,i.Z)(this._bitsets);try{for(t.s();!(e=t.n()).done;){e.value.resize(this._allocatedSize)}}catch(r){t.e(r)}finally{t.f()}}},{key:"_ensureNumeric",value:function(e,t){this._numerics[e]||(this._numerics[e]=[]),l(this._numerics[e],t,0)}},{key:"_ensureInstanceId",value:function(e){l(this._instanceIds,e,0)}},{key:"_ensureString",value:function(e,t){this._strings[e]||(this._strings[e]=[]),l(this._strings[e],t,null)}},{key:"createDisplayId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._idGenerator.createId();return t>this._allocatedSize&&this._expand(),(0,a.QS)(t,e)}},{key:"releaseDisplayId",value:function(e){var t,r=(0,i.Z)(this._bitsets);try{for(r.s();!(t=r.n()).done;){t.value.unset(e)}}catch(n){r.e(n)}finally{r.f()}return this._idGenerator.releaseId(e&a._I)}},{key:"getComputedNumeric",value:function(e,t){return this.getComputedNumericAtIndex(e&a._I,0)}},{key:"setComputedNumeric",value:function(e,t,r){return this.setComputedNumericAtIndex(e&a._I,r,0)}},{key:"getComputedString",value:function(e,t){return this.getComputedStringAtIndex(e&a._I,0)}},{key:"setComputedString",value:function(e,t,r){return this.setComputedStringAtIndex(e&a._I,0,r)}},{key:"getComputedNumericAtIndex",value:function(e,t){var r=e&a._I;return this._ensureNumeric(t,r),this._numerics[t][r]}},{key:"setComputedNumericAtIndex",value:function(e,t,r){var i=e&a._I;this._ensureNumeric(t,i),this._numerics[t][i]=r}},{key:"getInstanceId",value:function(e){var t=e&a._I;return this._ensureInstanceId(t),this._instanceIds[t]}},{key:"setInstanceId",value:function(e,t){var r=e&a._I;this._ensureInstanceId(r),this._instanceIds[r]=t}},{key:"getComputedStringAtIndex",value:function(e,t){var r=e&a._I;return this._ensureString(t,r),this._strings[t][r]}},{key:"setComputedStringAtIndex",value:function(e,t,r){var i=e&a._I;this._ensureString(t,i),this._strings[t][i]=r}},{key:"getXMin",value:function(e){return this._bounds[4*(e&a._I)]}},{key:"getYMin",value:function(e){return this._bounds[4*(e&a._I)+1]}},{key:"getXMax",value:function(e){return this._bounds[4*(e&a._I)+2]}},{key:"getYMax",value:function(e){return this._bounds[4*(e&a._I)+3]}},{key:"setBounds",value:function(e,t){var r=t.readHydratedGeometry();if(!r||!r.coords.length)return!1;var i=1/0,n=1/0,s=-1/0,u=-1/0;r.forEachVertex((function(e,t){i=Math.min(i,e),n=Math.min(n,t),s=Math.max(s,e),u=Math.max(u,t)}));var o=e&a._I;return l(this._bounds,4*o+4,0),this._bounds[4*o]=i,this._bounds[4*o+1]=n,this._bounds[4*o+2]=s,this._bounds[4*o+3]=u,!0}}]),e}()},92010:function(e,t,r){r.d(t,{s:function(){return D}});var i,n,s,a=r(74165),u=r(1413),o=r(37762),l=r(15671),h=r(43144),c=(r(59486),r(51064)),d=r(18016),f=r(93169),y=r(92026),v=r(85403),_=r(83406),p=r(80457),g=r(44333),m=r(77981),k=0,b=null!==(i=(0,f.Z)("featurelayer-simplify-thresholds"))&&void 0!==i?i:[.5,.5,.5,.5],x=b[0],I=b[1],S=b[2],T=b[3],A=null!==(n=(0,f.Z)("featurelayer-simplify-payload-size-factors"))&&void 0!==n?n:[1,2,4],z=A[0],Z=A[1],C=A[2],w=null!==(s=(0,f.Z)("featurelayer-simplify-mobile-factor"))&&void 0!==s?s:2,F=(0,f.Z)("esri-mobile"),D=function(){function e(t,r){(0,l.Z)(this,e),this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=t,this._layerSchema=r}return(0,h.Z)(e,[{key:"isEmpty",get:function(){return(0,y.pC)(this._deleted)&&this._deleted.countSet()===this.getSize()}},{key:"level",set:function(e){this._level=e}},{key:"getAreaSimplificationThreshold",value:function(e,t){var r=1,i=F?w:1;t>4e6?r=C*i:t>1e6?r=Z*i:t>5e5?r=z*i:t>1e5&&(r=i);var n=0;e>4e3?n=T*r:e>2e3?n=S*r:e>100?n=I:e>15&&(n=x);var s=8;return this._level<4?s=1:this._level<5?s=2:this._level<6&&(s=4),n*s}},{key:"createQuantizedExtrudedQuad",value:function(e,t){return new p.Z([5],[e-1,t,1,-1,1,1,-1,1,-1,-1])}},{key:"setArcadeSpatialReference",value:function(e){this._arcadeSpatialReference=e}},{key:"attachStorage",value:function(e){this._storage=e}},{key:"getQuantizationTransform",value:function(){throw new Error("Unable to find transform for featureSet")}},{key:"getStorage",value:function(){return this._storage}},{key:"getComputedNumeric",value:function(e){return this.getComputedNumericAtIndex(0)}},{key:"setComputedNumeric",value:function(e,t){return this.setComputedNumericAtIndex(t,0)}},{key:"getComputedString",value:function(e){return this.getComputedStringAtIndex(0)}},{key:"setComputedString",value:function(e,t){return this.setComputedStringAtIndex(0,t)}},{key:"getComputedNumericAtIndex",value:function(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}},{key:"setComputedNumericAtIndex",value:function(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}},{key:"getComputedStringAtIndex",value:function(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}},{key:"setComputedStringAtIndex",value:function(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}},{key:"transform",value:function(e,t,r,i){var n=this.copy();return n._tx+=e,n._ty+=t,n._sx*=r,n._sy*=i,n}},{key:"readAttribute",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this._readAttribute(e,t);if(void 0!==r)return r;var i,n=(0,o.Z)(this._joined);try{for(n.s();!(i=n.n()).done;){var s=i.value;s.setIndex(this.getIndex());var a=s._readAttribute(e,t);if(void 0!==a)return a}}catch(u){n.e(u)}finally{n.f()}}},{key:"readAttributes",value:function(){var e,t=this._readAttributes(),r=(0,o.Z)(this._joined);try{for(r.s();!(e=r.n()).done;){var i=e.value;i.setIndex(this.getIndex());for(var n=i._readAttributes(),s=0,a=Object.keys(n);s<a.length;s++){var u=a[s];t[u]=n[u]}}}catch(l){r.e(l)}finally{r.f()}return t}},{key:"joinAttributes",value:function(e){this._joined.push(e)}},{key:"readArcadeFeature",value:function(){return this}},{key:"geometry",value:function(){var e=this.readHydratedGeometry(),t=(0,_.di)(e,this.geometryType,this.hasZ,this.hasM),r=(0,m.im)(t);return r&&(r.spatialReference=this._arcadeSpatialReference),r}},{key:"dateTimeReferenceFieldIndex",get:function(){return this._datetimeMetadata||(this._datetimeMetadata=d.nu.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}},{key:"autocastArcadeDate",value:function(e,t){var r,i;return t&&t instanceof Date?this.isUnknownDateTimeField(e)?c.iG.unknownDateJSToArcadeDate(t):c.iG.dateJSAndZoneToArcadeDate(t,null!==(r=null===(i=this.contextTimeReference)||void 0===i?void 0:i.timeZone)&&void 0!==r?r:"system"):t}},{key:"isUnknownDateTimeField",value:function(e){var t;return"unknown"===(null===(t=this.dateTimeReferenceFieldIndex)||void 0===t?void 0:t.fieldTimeZone(e))}},{key:"fieldSourceTimeZone",value:function(e){var t,r;return null!==(t=null===(r=this.dateTimeReferenceFieldIndex)||void 0===r?void 0:r.fieldTimeZone(e))&&void 0!==t?t:""}},{key:"layerPreferredTimeZone",get:function(){var e,t;return null!==(e=null===(t=this.dateTimeReferenceFieldIndex)||void 0===t?void 0:t.layerPreferredTimeZone)&&void 0!==e?e:""}},{key:"field",value:function(e){if(this.hasField(e))return this.autocastArcadeDate(e,this.readAttribute(e,!0));var t,r=(0,o.Z)(this._joined);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(i.setIndex(this.getIndex()),i.hasField(e)){var n=i._readAttribute(e,!0);return this.autocastArcadeDate(e,n)}}}catch(s){r.e(s)}finally{r.f()}throw new Error("Field ".concat(e," does not exist"))}},{key:"setField",value:function(e,t){throw new Error("Unable to update feature attribute values, feature is readonly")}},{key:"keys",value:function(){return this.getFieldNames()}},{key:"castToText",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!e)return JSON.stringify(this.readLegacyFeature());var t=this.readLegacyFeature();if(!t)return JSON.stringify(null);var r={geometry:t.geometry,attributes:(0,u.Z)({},t.attributes?t.attributes:{})};for(var i in r.attributes){var n=r.attributes[i];n instanceof Date&&(r.attributes[i]=n.getTime())}return JSON.stringify(r)}},{key:"gdbVersion",value:function(){return null}},{key:"fullSchema",value:function(){return this._layerSchema}},{key:"castAsJson",value:function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{attributes:this._readAttributes(),geometry:!0===(null===r||void 0===r?void 0:r.keepGeometryType)?this.geometry():null!==(e=null===(t=this.geometry())||void 0===t?void 0:t.toJSON())&&void 0!==e?e:null}}},{key:"castAsJsonAsync",value:function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Promise.resolve(this.castAsJson(e))}},{key:"removeIds",value:function(e){if((0,y.Wi)(this._objectIdToIndex)){for(var t=new Map,r=this.getCursor();r.next();){var i=(0,y.s3)(r.getObjectId());t.set(i,r.getIndex())}this._objectIdToIndex=t}var n,s=this._objectIdToIndex,a=(0,o.Z)(e);try{for(a.s();!(n=a.n()).done;){var u=n.value;s.has(u)&&this.removeAtIndex(s.get(u))}}catch(l){a.e(l)}finally{a.f()}}},{key:"removeAtIndex",value:function(e){(0,y.Wi)(this._deleted)&&(this._deleted=g.p.create(this.getSize())),this._deleted.set(e)}},{key:"readGeometryForDisplay",value:function(){return this.readUnquantizedGeometry(!0)}},{key:"readLegacyGeometryForDisplay",value:function(){return this.readLegacyGeometry(!0)}},{key:"features",value:(0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getCursor();case 1:if(!t.next()){e.next=6;break}return e.next=4,t.readOptimizedFeature();case 4:e.next=1;break;case 6:case"end":return e.stop()}}),e,this)}))},{key:"_getExists",value:function(){return(0,y.Wi)(this._deleted)||!this._deleted.has(this.getIndex())}},{key:"_computeCentroid",value:function(){if("esriGeometryPolygon"!==this.geometryType)return null;var e=this.readUnquantizedGeometry();if(!e||e.hasIndeterminateRingOrder)return null;var t=(0,y.Pt)(this.getQuantizationTransform(),null);return(0,v.Y)(new p.Z,e,this.hasM,this.hasZ,t)}},{key:"copyInto",value:function(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex}}],[{key:"createInstance",value:function(){return k=++k>65535?0:k}}]),e}()},28941:function(e,t,r){r.d(t,{i:function(){return v}});var i=r(29439),n=r(15671),s=r(43144),a=r(11752),u=r(61120),o=r(60136),l=r(92572),h=r(37762),c=r(92026),d=r(83406),f=r(3182),y=r(92010);var v=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(e,i,s){var a;return(0,n.Z)(this,r),(a=t.call(this,e,s))._exceededTransferLimit=!1,a._featureIndex=-1,a._dateFields=new Set,a._geometryType=null===s||void 0===s?void 0:s.geometryType,a._features=i,a}return(0,s.Z)(r,[{key:"_current",get:function(){return this._features[this._featureIndex]}},{key:"geometryType",get:function(){return this._geometryType}},{key:"hasFeatures",get:function(){return!!this._features.length}},{key:"hasNext",get:function(){return this._featureIndex+1<this._features.length}},{key:"exceededTransferLimit",get:function(){return this._exceededTransferLimit}},{key:"hasZ",get:function(){return!1}},{key:"hasM",get:function(){return!1}},{key:"removeIds",value:function(e){var t=new Set(e);this._features=this._features.filter((function(e){return!(e.objectId&&t.has(e.objectId))}))}},{key:"append",value:function(e){var t,r=(0,h.Z)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;this._features.push(i)}}catch(n){r.e(n)}finally{r.f()}}},{key:"getSize",value:function(){return this._features.length}},{key:"getCursor",value:function(){return this.copy()}},{key:"getQuantizationTransform",value:function(){return this._transform}},{key:"getAttributeHash",value:function(){var e="";for(var t in this._current.attributes)e+=this._current.attributes[t];return e}},{key:"getIndex",value:function(){return this._featureIndex}},{key:"setIndex",value:function(e){this._featureIndex=e}},{key:"getObjectId",value:function(){var e;return null===(e=this._current)||void 0===e?void 0:e.objectId}},{key:"getDisplayId",value:function(){return this._current.displayId}},{key:"setDisplayId",value:function(e){this._current.displayId=e}},{key:"getGroupId",value:function(){return this._current.groupId}},{key:"setGroupId",value:function(e){this._current.groupId=e}},{key:"copy",value:function(){var e=new r(this.instance,this._features,this.fullSchema());return this.copyInto(e),e}},{key:"next",value:function(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}},{key:"readLegacyFeature",value:function(){return(0,d.EI)(this._current,this.geometryType,this.hasZ,this.hasM)}},{key:"readOptimizedFeature",value:function(){return this._current}},{key:"readLegacyPointGeometry",value:function(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}},{key:"readLegacyGeometry",value:function(){var e=this.readGeometry();return(0,d.di)(e,this.geometryType,this.hasZ,this.hasM)}},{key:"readLegacyCentroid",value:function(){var e=this.readCentroid();return(0,c.Wi)(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}},{key:"readGeometryArea",value:function(){return(0,f.S6)(this._current)?(0,d.lz)(this._current.geometry,2):0}},{key:"readUnquantizedGeometry",value:function(){var e=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!e)return e;var t=e.clone();return function(e){var t,r=e.coords,i=e.lengths,n=0,s=(0,h.Z)(i);try{for(s.s();!(t=s.n()).done;){for(var a=t.value,u=1;u<a;u++)r[2*(n+u)]+=r[2*(n+u)-2],r[2*(n+u)+1]+=r[2*(n+u)-1];n+=a}}catch(o){s.e(o)}finally{s.f()}}(t),t}},{key:"readHydratedGeometry",value:function(){var e=this._current.geometry;if((0,c.Wi)(e))return null;var t=e.clone();return(0,c.pC)(this._transform)&&(0,d.$g)(t,t,this.hasZ,this.hasM,this._transform),t}},{key:"getXHydrated",value:function(){if(!(0,f.S6)(this._current))return 0;var e=this._current.geometry.coords[0],t=this.getQuantizationTransform();return(0,c.Wi)(t)?e:e*t.scale[0]+t.translate[0]}},{key:"getYHydrated",value:function(){if(!(0,f.S6)(this._current))return 0;var e=this._current.geometry.coords[1],t=this.getQuantizationTransform();return(0,c.Wi)(t)?e:t.translate[1]-e*t.scale[1]}},{key:"getX",value:function(){return(0,f.S6)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}},{key:"getY",value:function(){return(0,f.S6)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}},{key:"readGeometry",value:function(){if(!(0,f.S6)(this._current)){if((0,c.pC)(this._current.centroid)){var e=(0,i.Z)(this._current.centroid.coords,2),t=e[0],r=e[1];return this.createQuantizedExtrudedQuad(t,r)}return null}var n=this._current.geometry.clone();if(n.isPoint)return n.coords[0]=n.coords[0]*this._sx+this._tx,n.coords[1]=n.coords[1]*this._sy+this._ty,n;var s,a=0,u=(0,h.Z)(n.lengths);try{for(u.s();!(s=u.n()).done;){var o=s.value;n.coords[2*a]=n.coords[2*a]*this._sx+this._tx,n.coords[2*a+1]=n.coords[2*a+1]*this._sy+this._ty,a+=o}}catch(l){u.e(l)}finally{u.f()}return n}},{key:"readCentroid",value:function(){return(0,f.S6)(this._current)?this._computeCentroid():this._current.centroid}},{key:"hasField",value:function(e){return e in this._current.attributes||this.getFieldNames().map((function(e){return e.toLowerCase()})).includes(e.toLowerCase())}},{key:"getFieldNames",value:function(){return Object.keys(this._current.attributes)}},{key:"_readAttribute",value:function(e,t){var r=this._current.attributes[e];if(void 0!==r)return null!=r&&t&&this._dateFields.has(e)?new Date(r):r;var i=this.readAttributes(),n=null===e||void 0===e?void 0:e.toLocaleLowerCase().trim();for(var s in i)if(s.toLocaleLowerCase().trim()===n){var a=this._current.attributes[s];return null!=a&&t&&this._dateFields.has(s)?new Date(a):a}}},{key:"copyInto",value:function(e){(0,a.Z)((0,u.Z)(r.prototype),"copyInto",this).call(this,e),e._featureIndex=this._featureIndex,e._transform=this._transform,e._dateFields=this._dateFields}},{key:"_readAttributes",value:function(){return this._current.attributes}}],[{key:"fromFeatures",value:function(e,t){for(var i=t.objectIdField,n=t.geometryType,s=(0,d.Yn)([],e,n,!1,!1,i),a=0;a<s.length;a++)s[a].displayId=e[a].displayId;return r.fromOptimizedFeatures(s,t)}},{key:"fromFeatureSet",value:function(e,t){var i=(0,d.h_)(e,t.objectIdField);return r.fromOptimizedFeatureSet(i,t)}},{key:"fromOptimizedFeatureSet",value:function(e,t){var i=e.features,n=r.fromOptimizedFeatures(i,t);n._exceededTransferLimit=e.exceededTransferLimit,n._transform=e.transform;var s,a=(0,h.Z)(e.fields);try{for(a.s();!(s=a.n()).done;){var u=s.value;"esriFieldTypeDate"===u.type&&n._dateFields.add(u.name)}}catch(o){a.e(o)}finally{a.f()}return n}},{key:"fromOptimizedFeatures",value:function(e,t,i){var n=new r(y.s.createInstance(),e,t);return n._transform=i,n}}]),r}(y.s)},44333:function(e,t,r){r.d(t,{p:function(){return s}});var i=r(15671),n=r(43144),s=function(){function e(t,r){(0,i.Z)(this,e),this._mask=0,this._buf=t,this._mask=r}return(0,n.Z)(e,[{key:"_getIndex",value:function(e){return Math.floor(e/32)}},{key:"has",value:function(e){var t=this._mask&e;return!!(this._buf[this._getIndex(t)]&1<<t%32)}},{key:"hasRange",value:function(e,t){for(var r=e,i=t;r%32&&r!==i;){if(this.has(r))return!0;r++}for(;i%32&&r!==i;){if(this.has(r))return!0;i--}if(r===i)return!1;for(var n=r/32;n!==i/32;n++)if(this._buf[n])return!0;return!1}},{key:"set",value:function(e){var t=this._mask&e,r=this._getIndex(t),i=1<<t%32;this._buf[r]|=i}},{key:"setRange",value:function(e,t){for(var r=e,i=t;r%32&&r!==i;)this.set(r++);for(;i%32&&r!==i;)this.set(i--);if(r!==i)for(var n=r/32;n!==i/32;n++)this._buf[n]=4294967295}},{key:"unset",value:function(e){var t=this._mask&e,r=this._getIndex(t),i=1<<t%32;this._buf[r]&=4294967295^i}},{key:"resize",value:function(e){var t=this._buf,r=new Uint32Array(Math.ceil(e/32));r.set(t),this._buf=r}},{key:"or",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]|=e._buf[t];return this}},{key:"and",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]&=e._buf[t];return this}},{key:"xor",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]^=e._buf[t];return this}},{key:"ior",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]|=~e._buf[t];return this}},{key:"iand",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]&=~e._buf[t];return this}},{key:"ixor",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]^=~e._buf[t];return this}},{key:"any",value:function(){for(var e=0;e<this._buf.length;e++)if(this._buf[e])return!0;return!1}},{key:"copy",value:function(e){for(var t=0;t<this._buf.length;t++)this._buf[t]=e._buf[t];return this}},{key:"clone",value:function(){return new e(this._buf.slice(),this._mask)}},{key:"clear",value:function(){for(var e=0;e<this._buf.length;e++)this._buf[e]=0}},{key:"forEachSet",value:function(e){for(var t=0;t<this._buf.length;t++){var r=this._buf[t],i=32*t;if(r)for(;r;)1&r&&e(i),r>>>=1,i++}}},{key:"countSet",value:function(){var e=0;return this.forEachSet((function(t){e++})),e}}],[{key:"fromBuffer",value:function(t,r){return new e(t,r)}},{key:"create",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4294967295,i=new Uint32Array(Math.ceil(t/32));return new e(i,r)}}]),e}()},98290:function(e,t,r){r.d(t,{I:function(){return v},qc:function(){return c}});var i=r(1413),n=r(37762),s=r(92026),a=r(17842),u=r(65800),o=r(94109),l=r(80613),h=r(18745);function c(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function d(e){return(null!==e&&void 0!==e?e:[]).map((function(e){return function(e){return{value:e.value,size:(0,a.t_)(e.size)}}(e)}))}function f(e){if("string"==typeof e||"number"==typeof e)return(0,a.t_)(e);var t=e;return{type:"size",expression:t.expression,stops:d(t.stops)}}var y=function(e){for(var t=[],r=[],i=d(e),n=i.length,s=0;s<6;s++){var u=i[Math.min(s,n-1)];t.push(u.value),r.push(null==u.size?o.AI:(0,a.F2)(u.size))}return{values:new Float32Array(t),sizes:new Float32Array(r)}};function v(e){var t,r=e&&e.length>0?{}:null,s=r?{}:null;if(!r||!s)return{vvFields:r,vvRanges:s};var a,u=(0,n.Z)(e);try{for(u.s();!(a=u.n()).done;){var o=a.value;if(o.field&&(r[o.type]=o.field),"size"===o.type){s.size||(s.size={});var c=o;switch((0,h.a)(c)){case l.X.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:c.minDataValue,maxDataValue:c.maxDataValue,minSize:f(c.minSize),maxSize:f(c.maxSize)};break;case l.X.SIZE_SCALE_STOPS:s.size.scaleStops={stops:d(c.stops)};break;case l.X.SIZE_FIELD_STOPS:if(c.levels){var v={};for(var p in c.levels)v[p]=y(c.levels[p]);s.size.fieldStops={type:"level-dependent",levels:v}}else s.size.fieldStops=(0,i.Z)({type:"static"},y(c.stops));break;case l.X.SIZE_UNIT_VALUE:s.size.unitValue={unit:c.valueUnit,valueRepresentation:null!==(t=c.valueRepresentation)&&void 0!==t?t:void 0}}}else if("color"===o.type)s.color=g(o);else if("opacity"===o.type)s.opacity=_(o);else if("rotation"===o.type){var m=o;s.rotation={type:m.rotationType}}}}catch(k){u.e(k)}finally{u.f()}return{vvFields:r,vvRanges:s}}function _(e){var t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;for(var r=e.stops,i=0;i<8;++i){var n=r[Math.min(i,r.length-1)];t.values[i]=n.value,t.opacities[i]=n.opacity}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var s=e.stops&&e.stops.length>=0?e.stops[0].opacity:0,a=0;a<8;a++)t.values[a]=1/0,t.opacities[a]=s}return t}function p(e,t,r){e[4*t+0]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function g(e){if((0,s.Wi)(e))return null;if(e.normalizationField)return null;var t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;if(e.stops.length>8)return null;t.field=e.field;for(var r=e.stops,i=0;i<8;++i){var n=r[Math.min(i,r.length-1)];t.values[i]=n.value,p(t.colors,i,n.color)}}else{if(!(e.stops&&e.stops.length>=0))return null;for(var a=e.stops&&e.stops.length>=0&&e.stops[0].color,o=0;o<8;o++)t.values[o]=1/0,p(t.colors,o,a)}for(var l=0;l<32;l+=4)(0,u.pr)(t.colors,l,!0);return t}}}]);
//# sourceMappingURL=8131.5deaa637.chunk.js.map
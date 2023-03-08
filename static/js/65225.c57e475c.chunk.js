"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[65225],{65225:function(e,t,r){r.r(t),r.d(t,{default:function(){return re}});var i=r(37762),n=r(74165),a=r(93433),o=r(15861),s=r(15671),u=r(43144),l=r(11752),d=r(61120),c=r(60136),h=r(92572),p=r(27366),f=r(52639),v=r(63780),g=r(32718),y=r(92026),_=r(94172),b=r(49861),m=(r(25243),r(69912)),x=r(11186),C=r(71353),k=r(79803),w=r(34066),E=r(93501),I=r(28970),N=r(65618),O=r(37818),Z=r(54748),D=r(18661),F=r(21149),S=function(e){(0,c.Z)(r,e);var t=(0,h.Z)(r);function r(e){return(0,s.Z)(this,r),t.call(this,"SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:function(e){return[e.geometryBuffer]}},e,{hasInitialize:!0})}return(0,u.Z)(r)}(r(46798).q),G=r(42069),A=r(53586),M=r(82607),P=r(46169),L=r(91505),R=r(77427),j=function(e){(0,c.Z)(r,e);var t=(0,h.Z)(r);function r(e,i){var n;return(0,s.Z)(this,r),(n=t.call(this))._updateAndCompare=e,n._notifyUpdated=i,n._nodes=new Map,n._graphics=new Map,n._duplicates=new Map,n}return(0,u.Z)(r,[{key:"clear",value:function(){if(this._graphics.size>0){var e=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:e})}this._nodes.clear()}},{key:"length",get:function(){return this._graphics.size}},{key:"get",value:function(e){return this._graphics.get(e)}},{key:"getNode",value:function(e){return this._nodes.get(e)}},{key:"hasNode",value:function(e){return this._nodes.has(e)}},{key:"nodes",value:function(){return this._nodes.values()}},{key:"addNode",value:function(e,t){this._nodes.set(e,t);var r=t.graphics;if(0!==r.length){for(var i=new Set,n=0;n<r.length;n++){var a=r[n],o=a.objectId,s=this._graphics.get(o);if(s){i.add(o),a!==s&&(r[n]=s);var u=this._duplicates.get(o);u?u.push(e):this._duplicates.set(o,[s.nodeIndex,e])}else a.nodeIndex=e,this._graphics.set(o,a)}i.size&&this._updateForeignGraphics(t);var l=i.size>0?r.filter((function(e){return!i.has(e.objectId)})):r;l.length>0&&this.emit("change",{added:l,removed:[]})}}},{key:"removeNode",value:function(e){var t=this,r=this._nodes.get(e);if(r){this._nodes.delete(e);var n,a=new Set,o=[],s=(0,i.Z)(r.graphics);try{for(s.s();!(n=s.n()).done;){var u=n.value,l=u.objectId,d=this._graphics.get(l);if(d){var c=this._duplicates.get(l);if(c){var h=c.indexOf(e);if(-1===h){console.error("error: removing graphic from node that should not reference it.");continue}if(c.splice(h,1),d.nodeIndex===e){for(var p=this.getNode(c[0]),f=1;f<c.length;f++){var v=this.getNode(c[f]);((0,y.Wi)(p)||(0,y.pC)(v)&&v.node.level>p.node.level)&&(p=v)}(0,y.pC)(p)&&a.add(p)}1===c.length&&this._duplicates.delete(l)}else this._graphics.delete(l),o.push(u)}}}catch(g){s.e(g)}finally{s.f()}o.length>0&&this.emit("change",{added:[],removed:o}),a.forEach((function(e){return t._updateForeignGraphics(e)}))}else console.error("Removing unknown node")}},{key:"_updateForeignGraphics",value:function(e){for(var t=[],r=e.node.index,i=e.node.level,n=0;n<e.graphics.length;){var a=e.graphics[n].nodeIndex;if(a!==r){for(var o=1;n+o<e.graphics.length&&e.graphics[n+o].nodeIndex===a;)o++;var s=this.getNode(a);if((0,y.pC)(s)&&s.node.level>i)n+=o;else{for(var u=n;u<n+o;u++){var l=e.graphics[u];l.nodeIndex=r,this._updateAndCompare(l,e,u)&&t.push(l)}n+=o}}else n++}this._notifyUpdated(t)}},{key:"toArray",value:function(){return Array.from(this._graphics.values())}},{key:"find",value:function(e){var t;return(0,R.oE)(this._graphics,(function(r){return!!e(r)&&(t=r,!0)})),t}},{key:"forEach",value:function(e){this._graphics.forEach((function(t){return e(t)}))}},{key:"forEachNode",value:function(e){this._nodes.forEach((function(t,r){return e(t,r)}))}},{key:"nodeCount",get:function(){return this._nodes.size}},{key:"_checkInvariants",value:function(){var e=this,t=new Map;this._nodes.forEach((function(r,i){i!==r.node.index&&console.error("Mismatched node index"),r.graphics.forEach((function(r){var n;t.set(r.objectId,1+(null!==(n=t.get(r.objectId))&&void 0!==n?n:0));var a=e._duplicates.get(r.objectId);a&&!a.includes(i)&&console.error("Node not listed in duplicate list"),a||r.nodeIndex===i||console.error("Unique graphic does not reference owning node index")}))})),this._graphics.size!==t.size&&console.error("Mismatch between actual and expected number of graphics");var r=0;t.forEach((function(t,i){r+=t>1?1:0;var n=e._graphics.get(i);if(n){var a=e._nodes.get(n.nodeIndex);if(a){var o=e._duplicates.get(i);o?(o.length!==t&&console.error("Wrong number of entries in duplicate list"),o.forEach((function(t){var r=e._nodes.get(t);r?r.node.level>a.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")}))):t>1&&console.error("Missing duplicates entry")}else console.error("Graphic references unkown node")}else console.error("Missing graphic entry")})),this._duplicates.size!==r&&console.error("Mismatch between expected and actual number of duplicate entries")}}]),r}(L.Z),q=r(75162),V=r(44011),W=r(1247),H=r(48252),U=r(23224),Q=r(6777),T=r(94463),z=r(89414),B=r(58890),K=r(91526),J=r(88699),Y=r(78485),X=r(17006),$=r(93463),ee=(0,H.v)(),te=function(e){(0,c.Z)(p,e);var t=(0,h.Z)(p);function p(){var e;return(0,s.Z)(this,p),(e=t.apply(this,arguments)).type="scene-layer-graphics-3d",e._queryEngine=null,e._memCache=null,e._interactiveEditingSessions=new Map,e.loadedGraphics=new j((function(e,t,r){return ae(e,t,r)}),(function(t){return e.processor.graphicsCore.recreateGraphics(t)})),e.holeFilling="always",e.progressiveLoadFactor=1,e.supportsHeightUnitConversion=!0,e._coordinatesOutsideExtentErrors=0,e._maxCoordinatesOutsideExtentErrors=20,e}return(0,u.Z)(p,[{key:"tryRecycleWith",value:function(e,t){var r=this;return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then((function(){var t;(0,V.tq)(r.layer,e,r._i3sOverrides),r.layer=e,r._i3sOverrides.destroy();var i=null===(t=r.view.resourceController)||void 0===t?void 0:t.memoryController;r._i3sOverrides=new q.v({view:r.view,layer:e,memoryController:i}),(0,y.SC)(r._queryEngine),r._setupQueryEngine(),r.processor.resetObjectStates()})):null}},{key:"initialize",value:function(){var e,t,i=this;this.addResolvingPromise(this.layer.indexInfo);var n=null===(e=this.view.resourceController)||void 0===e?void 0:e.memoryController;this._i3sOverrides=new q.v({view:this.view,layer:this.layer,memoryController:n}),(0,V.OJ)(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new Q.K({layerView:this}),this.updatingHandles.add((function(){return i.layer.rangeInfos}),(function(e){return i._rangeInfosChanged(e)}),_.nn),this.updatingHandles.add((function(){return i.layer.renderer}),(function(e,t){return i._rendererChange(e,t)})),this.updatingHandles.add((function(){return[i.parsedDefinitionExpression,i._excludeObjectIdsSorted]}),(function(){return i._filterChange()})),this.handles.add((0,_.YP)((function(){return T.Z.I3S_TREE_SHOW_TILES}),(function(e){if(e&&!i._treeDebugger){var t=i._controller.crsIndex;r.e(80322).then(r.bind(r,80322)).then((function(e){var r=e.I3STreeDebugger;!i._treeDebugger&&T.Z.I3S_TREE_SHOW_TILES&&(i._treeDebugger=new r({lv:i,view:i.view,nodeSR:t}))}))}else e||!i._treeDebugger||T.Z.I3S_TREE_SHOW_TILES||(i._treeDebugger.destroy(),i._treeDebugger=null)}),_.nn)),this._set("processor",new A.Z({owner:this,preferredUpdatePolicy:Y.j.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:function(e){return i._updateClippingExtent(e)}})),null!==(t=this.processor.elevationAlignment)&&void 0!==t&&t.events.on("invalidate-elevation",(function(e){return i._controller.updateElevationChanged(e.extent,e.spatialReference)})),this.supportsHeightUnitConversion&&(this._verticalScale=(0,E.k)("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(this.uid),this._controller=new Z.Z({layerView:this,scaleVisibilityEnabled:!1}),(0,V.X5)(this.layer.geometryDefinitions)&&(this._worker=new S((function(e){return i.view.resourceController.immediate.schedule(e)}))),this.handles.add(this.layer.on("apply-edits",(function(e){return i.updatingHandles.addPromise(e.result)}))),this.handles.add(this.layer.on("edits",(function(e){return i._handleEdits(e)}))),this.when((function(){i._setupQueryEngine(),i.updatingHandles.add((function(){return i.maximumNumberOfFeatures}),(function(e){return i._controller.featureTarget=e}),_.nn),i.updatingHandles.add((function(){return i.suspended}),(function(e){e&&i._removeAllNodeData()}))}))}},{key:"destroy",value:function(){this._treeDebugger=(0,y.SC)(this._treeDebugger),this._i3sOverrides=(0,y.SC)(this._i3sOverrides),this._set("processor",(0,y.SC)(this.processor)),this._controller=(0,y.SC)(this._controller),this._queryEngine=(0,y.SC)(this._queryEngine),this._worker=(0,y.SC)(this._worker),this._memCache=(0,y.SC)(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=(0,y.SC)(this._fieldsHelper)}},{key:"i3slayer",get:function(){return this.layer}},{key:"updatingProgressValue",get:function(){var e,t;return null!==(e=null===(t=this._controller)||void 0===t?void 0:t.updatingProgress)&&void 0!==e?e:1}},{key:"requiredFields",get:function(){var e,t;return null!==(e=null===(t=this._fieldsHelper)||void 0===t?void 0:t.requiredFields)&&void 0!==e?e:[]}},{key:"maximumNumberOfFeatures",get:function(){var e,t,r,i=null===(e=this.processor)||void 0===e||null===(t=e.graphicsCore)||void 0===t?void 0:t.displayFeatureLimit;return null!==(r=null===i||void 0===i?void 0:i.maximumNumberOfFeatures)&&void 0!==r?r:0},set:function(e){null!=e?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}},{key:"maximumNumberOfFeaturesExceeded",get:function(){var e;return!this.suspended&&!(null===(e=this._controller)||void 0===e||!e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}},{key:"_excludeObjectIdsSorted",get:function(){var e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((function(e,t){return e-t})):null}},{key:"lodFactor",get:function(){return"Labels"===this.layer.semantic?1:this.view.qualitySettings.sceneService.point.lodFactor}},{key:"hasM",get:function(){return!1}},{key:"hasZ",get:function(){return!0}},{key:"whenGraphicAttributes",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var i=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,V.bf)(this.layer,t,this._getObjectIdField(),r,(function(){return(0,a.Z)(i.loadedGraphics.nodes())})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getHit",value:function(e){if(!this.loadedGraphics)return null;var t=(0,O.mW)(this.loadedGraphics.find((function(t){return t.uid===e})),this.layer),r=this._getObjectIdField();return t&&t.attributes&&t.attributes[r]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}},{key:"whenGraphicBounds",value:function(e,t){return this.processor.whenGraphicBounds(e,t)}},{key:"computeAttachmentOrigin",value:function(e,t){return this.processor.computeAttachmentOrigin(e,t)}},{key:"canResume",value:function(){return(0,l.Z)((0,d.Z)(p.prototype),"canResume",this).call(this)&&(!this._controller||this._controller.rootNodeVisible)}},{key:"isUpdating",value:function(){var e,t,r;return!!(null!==(e=this._controller)&&void 0!==e&&e.updating||null!==(t=this.processor)&&void 0!==t&&t.updating||null!==(r=this._fieldsHelper)&&void 0!==r&&r.updating||this.layerFilterUpdating)}},{key:"highlight",value:function(e){return this.processor.highlight(e,this.layer.objectIdField)}},{key:"updatePolicy",get:function(){return this.processor.graphicsCore.effectiveUpdatePolicy}},{key:"createInteractiveEditSession",value:function(e){return(0,P.sw)(this._attributeEditingContext,e)}},{key:"_decompressBinaryPointData",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var i,a,o=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={geometryBuffer:t.geometryBuffer},(0,y.Wi)(this._worker)&&(this._worker=new S((function(e){return o.view.resourceController.immediate.schedule(e)}))),e.next=4,this._worker.invoke(i,r);case 4:if(a=e.sent,!(0,y.Wi)(a)){e.next=7;break}throw new Error("Failed to decompress Draco point data");case 7:return e.abrupt("return",{positionData:a.positions,featureIds:a.featureIds});case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"addNode",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,a){var o,s,u,l,d,c,h,p,f,v,_,b,m,x,C;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne(r)||ie(r)){e.next=2;break}throw new Error;case 2:if(!this.loadedGraphics.hasNode(t.index)){e.next=4;break}return e.abrupt("return",void g.Z.getLogger(this.declaredClass).error("I3S node "+t.id+" already added"));case 4:if(o=(0,y.pC)(this.layer.fullExtent)?se(this.layer.fullExtent.clone(),.5):null,s=[],!ne(r)){e.next=12;break}return e.next=9,this._extractBinaryPointPositions(t,r,a);case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=this._extractLegacyPointPositions(r);case 13:return u=e.t0,l=u.featureIds,d=u.pointPositions,this._validatePositions(t,l,d,o,s),c=this._controller.crsVertex,h=this.view.spatialReference,(0,k.CM)(d,c,0,d,h,0,l.length),p=ne(r)?t.level:0,f={graphics:this._createGraphics(l,d,t.index,p),featureIds:l,attributeInfo:r.attributeDataInfo,node:t},e.next=22,this._i3sOverrides.apply(f.featureIds,r.attributeDataInfo,a);case 22:if(t.numFeatures=f.graphics.length,this._updateNodeMemory(t),oe(f),s.length>0&&(this._computeObb(t,s,c),this._controller.updateVisibility(t.index)),this._controller.isGeometryVisible(t)){e.next=28;break}return e.abrupt("return",void this._cacheNodeData(f));case 28:if((0,y.pC)(this._verticalScale)){v=(0,i.Z)(f.graphics);try{for(v.s();!(_=v.n()).done;)b=_.value,this._verticalScale(b.geometry)}catch(n){v.e(n)}finally{v.f()}}if(m=this.view._stage.renderView.objectAndLayerIdRenderHelper,(0,y.pC)(m))for(x=0;x<f.featureIds.length;x++)C=f.featureIds[x],m.setUidToObjectAndLayerId(C,f.graphics[x].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled,f.node.resources.attributes,x);this.loadedGraphics.addNode(t.index,f),this._controller.updateLoadStatus(t.index,!0),this._filterNode(f),this._treeDebugger&&this._treeDebugger.update();case 32:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"_computeObb",value:function(e,t,r){var i=this._controller.crsIndex,n=i.isGeographic?this.view.renderSpatialReference:i;(0,k.CM)(t,r,0,t,n,0,t.length/3),e.serviceObb=(0,z.Qb)(new K.a(t,3)),i.isGeographic&&(0,k.SH)(e.serviceObb.center,n,e.serviceObb.center,i)}},{key:"isNodeLoaded",value:function(e){return this.loadedGraphics.hasNode(e)}},{key:"isNodeReloading",value:function(){return!1}},{key:"updateNodeState",value:function(){}},{key:"_extractBinaryPointPositions",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,i){var a,o,s,u,l,d,c,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._decompressBinaryPointData(r,i);case 2:for(a=e.sent,o=a.positionData,3,s=o.length/3,u=(0,J.bg)(3*s),l=(0,y.pC)(t.serviceObb)?t.serviceObb.center:[0,0,0],d=Math.abs(l[2])*Math.pow(2,-20),c=0;c<s;c++)u[(h=3*c)+0]=o[h+0]+l[0],u[h+1]=o[h+1]+l[1],u[h+2]=o[h+2]+l[2],Math.abs(u[h+2])<d&&(u[h+2]=0);return e.abrupt("return",{featureIds:a.featureIds?Array.from(a.featureIds):[],pointPositions:u});case 11:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"_extractLegacyPointPositions",value:function(e){for(var t=e.pointData.length,r=(0,J.bg)(3*t),i=new Array,n=0;n<t;n++){var a,o,s,u,l=e.pointData[n],d=l.featureDataPosition,c=d.length,h=null!==(a=null===(o=l.geometries)||void 0===o?void 0:o[0])&&void 0!==a?a:ue[c],p=l.featureIds[0];if(!("Embedded"!==h.type||"points"!==h.params.type||c<2||c>3)){var f=null!==(s=null===(u=h.params.vertexAttributes)||void 0===u?void 0:u.position)&&void 0!==s?s:[0,0,0],v=3*i.length;r[v+0]=d[0]+f[0],r[v+1]=d[1]+f[1],r[v+2]=3===c?d[2]+f[2]:NaN,i.push(p)}}return{featureIds:i,pointPositions:r}}},{key:"_validatePositions",value:function(e,t,r,i,n){if(!(0,y.Wi)(i)||!e.serviceObb)for(var a=t.length,o=0;o<a;o++){var s=3*o;(0,x.s)(le,r[s],r[s+1],r[s+2]),(0,y.pC)(i)&&!(0,w.Qg)(i,le)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&g.Z.getLogger(this.declaredClass).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&g.Z.getLogger(this.declaredClass).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObb||n.push(le[0],le[1],le[2])}}},{key:"_createGraphics",value:function(e,t,r,i){for(var n=e.length,a=this._getObjectIdField(),o=this.processor.graphicsCore,s=new Array,u=this.view.spatialReference,l=0;l<n;l++){var d=e[l],c={};null!=d&&(c[a]=d);var h=null!==d&&void 0!==d?d:f.Z.generateUID(),p=3*l,v=isNaN(t[p+2])?void 0:t[p+2],g=(0,N.Tx)(t[p],t[p+1],v,u),_=this.loadedGraphics.get(h);if((0,y.pC)(_))(null==_.level||_.level<i)&&(de.property="geometry",de.graphic=_,de.oldValue=(0,y.Wg)(_.geometry),de.newValue=g,_.geometry=g,_.level=i,o.graphicUpdateHandler(de)),s.push(_);else{var b=f.Z.generateUID();s.push({objectId:h,uid:b,geometry:g,attributes:c,visible:!0,nodeIndex:r,level:i})}}return s}},{key:"_updateNodeMemory",value:function(e){e.memory=4096+((0,y.pC)(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}},{key:"_cacheNodeData",value:function(e){var t=e.graphics.reduce((function(e,t){return(0,N.Xw)(t)+e}),512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}},{key:"_getMemCacheKey",value:function(e){return"".concat(e.index)}},{key:"_removeAllNodeData",value:function(){var e=this;this.loadedGraphics.forEachNode((function(t,r){if(t){var i=t.node;e._updateNodeMemory(i),e._cacheNodeData(t)}e._controller.updateLoadStatus(r,!1)})),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}},{key:"removeNode",value:function(e){var t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}},{key:"_removeNodeStageData",value:function(e){var t=this.loadedGraphics.getNode(e);return(0,y.Wi)(t)?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}},{key:"loadCachedNodeData",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(r=this._memCache)||void 0===r?void 0:r.pop(this._getMemCacheKey(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addCachedNodeData",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,i,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.loadedGraphics.hasNode(t.index)){e.next=4;break}g.Z.getLogger(this.declaredClass).error("I3S node "+t.id+" already added"),e.next=13;break;case 4:return e.next=6,this._i3sOverrides.apply(r.featureIds,i,a);case 6:this.loadedGraphics.addNode(t.index,r),this._controller.updateLoadStatus(t.index,!0),this._updateNodeMemory(t),r.attributeInfo=i,this._attributeValuesChanged(r),this._filterNode(r),this._treeDebugger&&this._treeDebugger.update();case 13:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n){return e.apply(this,arguments)}}()},{key:"getLoadedNodeIds",value:function(){var e=[];return this.loadedGraphics.forEachNode((function(t){return e.push(t.node.id)})),e.sort()}},{key:"getVisibleNodes",value:function(){var e=new Array;return this.loadedGraphics.forEachNode((function(t){return e.push(t.node)})),e}},{key:"getLoadedNodeIndices",value:function(e){this.loadedGraphics.forEachNode((function(t,r){return e.push(r)}))}},{key:"getLoadedAttributes",value:function(e){var t=this.loadedGraphics.getNode(e);if((0,y.pC)(t)&&(0,y.pC)(t.attributeInfo))return t.attributeInfo.loadedAttributes}},{key:"getAttributeData",value:function(e){var t=this.loadedGraphics.getNode(e);if((0,y.pC)(t)&&(0,y.pC)(t.attributeInfo))return t.attributeInfo.attributeData}},{key:"_setAttributeData",value:function(e,t){var r=this.loadedGraphics.getNode(e);(0,y.Wi)(r)||(0,y.Wi)(r.attributeInfo)||(r.attributeInfo.attributeData=t,this._attributeValuesChanged(r))}},{key:"updateAttributes",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,i){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.loadedGraphics.getNode(t),e.t0=(0,y.Wi)(a),e.t0){e.next=7;break}return e.next=5,this._i3sOverrides.apply(a.featureIds,r,i);case 5:a.attributeInfo=r,this._attributeValuesChanged(a);case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,i){return e.apply(this,arguments)}}()},{key:"_attributeValuesChanged",value:function(e){if(oe(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){var t=e.graphics.map((function(e){return e.uid}));this.processor.graphicsCore.updateLabelingInfo(t)}}},{key:"_updateClippingExtent",value:function(e){return this._controller&&this._controller.updateClippingArea(e),!1}},{key:"_getObjectIdField",value:function(){return this.layer.objectIdField||I.d}},{key:"_rendererChange",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var i,a,o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.layer.fieldsIndex,a=new Set,!t){e.next=7;break}return e.next=4,t.collectRequiredFields(a,i);case 4:o=Array.from(a).sort(),e.next=8;break;case 7:o=[];case 8:if(a.clear(),!r){e.next=15;break}return e.next=12,r.collectRequiredFields(a,i);case 12:s=Array.from(a).sort(),e.next=16;break;case 15:s=[];case 16:o.length===s.length&&o.every((function(e,t){return o[t]===s[t]}))||this._reloadAllNodes();case 17:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_rangeInfosChanged",value:function(e){null!=e&&e.length>0&&g.Z.getLogger(this.declaredClass).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}},{key:"_filterChange",value:function(){var e=this;this.loadedGraphics.forEachNode((function(t){return e._filterNode(t)}))}},{key:"_reloadAllNodes",value:function(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}},{key:"_filterNode",value:function(e){var t,r=this.parsedDefinitionExpression,n=this._excludeObjectIdsSorted,a=this._getObjectIdField(),o=(0,i.Z)(e.graphics);try{for(o.s();!(t=o.n()).done;){var s=t.value,u=s.visible,l=!r||this._evaluateClause(r,s),d=(0,y.Wi)(n)||(0,v.$A)(n,s.attributes[a])<0;s.visible=l&&d,u!==s.visible&&(de.graphic=s,de.property="visible",de.oldValue=u,de.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(de))}}catch(c){o.e(c)}finally{o.f()}}},{key:"createQuery",value:function(){var e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return(0,y.pC)(this.filter)?this.filter.createQuery(e):new F.Z(e)}},{key:"queryFeatures",value:function(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}},{key:"queryObjectIds",value:function(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}},{key:"queryFeatureCount",value:function(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}},{key:"queryExtent",value:function(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}},{key:"_ensureQuery",value:function(e){return this._addDefinitionExpressionToQuery((0,y.Wi)(e)?this.createQuery():F.Z.from(e))}},{key:"_setupQueryEngine",value:function(){var e=this;this._queryEngine=new M.q({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e.processor.featureStore},hasZ:this.hasZ,hasM:this.hasM},priority:$.T8.FEATURE_QUERY_ENGINE})}},{key:"getUsedMemory",value:function(){var e,t,r;return null!==(e=null===(t=this.processor)||void 0===t||null===(r=t.graphicsCore)||void 0===r?void 0:r.usedMemory)&&void 0!==e?e:0}},{key:"getUnloadedMemory",value:function(){var e,t,r,i,n;return.8*((null!==(e=null===(t=this._controller)||void 0===t?void 0:t.unloadedMemoryEstimate)&&void 0!==e?e:0)+(null!==(r=null===(i=this.processor)||void 0===i||null===(n=i.graphicsCore)||void 0===n?void 0:n.unprocessedMemoryEstimate)&&void 0!==r?r:0))}},{key:"ignoresMemoryFactor",value:function(){return this._controller&&this._controller.fixedFeatureTarget}},{key:"_handleEdits",value:function(e){(0,P.Z6)(this._attributeEditingContext,e)}},{key:"_attributeEditingContext",get:function(){var e,t=this,r=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:r,forEachNode:function(e){return t.loadedGraphics.forEachNode((function(t){return e(t.node,t.featureIds)}))},attributeStorageInfo:null!==(e=this.i3slayer.attributeStorageInfo)&&void 0!==e?e:[],i3sOverrides:this._i3sOverrides,getAttributeData:function(e){return t.getAttributeData(e)},setAttributeData:function(e,i,n){t._setAttributeData(e,i);var a=t.loadedGraphics.getNode(e);if((0,y.pC)(n)){var o=t.loadedGraphics.get(n.attributes[r]);(0,y.pC)(o)&&t.processor.graphicsCore.recreateGraphics([o])}else(0,y.pC)(a)&&t.processor.graphicsCore.recreateGraphics(a.graphics)},clearMemCache:function(){}}}},{key:"performanceInfo",get:function(){var e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this.loadedGraphics.nodeCount,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}},{key:"test",get:function(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}}]),p}((0,W.l)((0,U.i)((0,G.A)(X.Z))));(0,p._)([(0,b.Cb)()],te.prototype,"processor",void 0),(0,p._)([(0,b.Cb)({type:D.Z})],te.prototype,"filter",void 0),(0,p._)([(0,b.Cb)()],te.prototype,"loadedGraphics",void 0),(0,p._)([(0,b.Cb)()],te.prototype,"i3slayer",null),(0,p._)([(0,b.Cb)()],te.prototype,"_controller",void 0),(0,p._)([(0,b.Cb)()],te.prototype,"updating",void 0),(0,p._)([(0,b.Cb)()],te.prototype,"suspended",void 0),(0,p._)([(0,b.Cb)()],te.prototype,"holeFilling",void 0),(0,p._)([(0,b.Cb)(B.q)],te.prototype,"updatingProgress",void 0),(0,p._)([(0,b.Cb)()],te.prototype,"updatingProgressValue",null),(0,p._)([(0,b.Cb)(ee.requiredFields)],te.prototype,"requiredFields",null),(0,p._)([(0,b.Cb)(ee.availableFields)],te.prototype,"availableFields",void 0),(0,p._)([(0,b.Cb)()],te.prototype,"_fieldsHelper",void 0),(0,p._)([(0,b.Cb)({type:Number})],te.prototype,"maximumNumberOfFeatures",null),(0,p._)([(0,b.Cb)({readOnly:!0})],te.prototype,"maximumNumberOfFeaturesExceeded",null),(0,p._)([(0,b.Cb)()],te.prototype,"_excludeObjectIdsSorted",null),(0,p._)([(0,b.Cb)({readOnly:!0})],te.prototype,"lodFactor",null),(0,p._)([(0,b.Cb)({readOnly:!0})],te.prototype,"hasM",null),(0,p._)([(0,b.Cb)({readOnly:!0})],te.prototype,"hasZ",null);var re=te=(0,p._)([(0,m.j)("esri.views.3d.layers.SceneLayerGraphicsView3D")],te);function ie(e){return"pointData"in e}function ne(e){return"geometryBuffer"in e&&null!==e.geometryBuffer}function ae(e,t,r){var n=t.attributeInfo;if((0,y.Wi)(n)||(0,y.Wi)(n.loadedAttributes)||(0,y.Wi)(n.attributeData))return!1;var a,o=!1,s=(0,i.Z)(n.loadedAttributes);try{for(s.s();!(a=s.n()).done;){var u=a.value.name;if(n.attributeData[u]){var l=(0,V.Jx)(n.attributeData[u],r);l!==e.attributes[u]&&(e.attributes[u]=l,o=!0)}}}catch(d){s.e(d)}finally{s.f()}return o}function oe(e){var t=e.attributeInfo,r=e.node.index;if(!((0,y.Wi)(t)||(0,y.Wi)(t.loadedAttributes)||(0,y.Wi)(t.attributeData)))for(var n=0;n<e.graphics.length;n++){var a=e.graphics[n];if(a.nodeIndex===r){a.attributes||(a.attributes={});var o,s=(0,i.Z)(t.loadedAttributes);try{for(s.s();!(o=s.n()).done;){var u=o.value.name;t.attributeData[u]&&(a.attributes[u]=(0,V.Jx)(t.attributeData[u],n))}}catch(l){s.e(l)}finally{s.f()}}}}function se(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,null!=e.zmin&&null!=e.zmax&&(e.zmin-=t,e.zmax+=t),null!=e.mmin&&null!=e.mmax&&(e.mmin-=t,e.mmax+=t),e}var ue={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},le=(0,C.c)(),de={graphic:null,property:null,oldValue:null,newValue:null}}}]);
//# sourceMappingURL=65225.c57e475c.chunk.js.map
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[83639],{32500:function(e,t,n){n.d(t,{I:function(){return O},b:function(){return w}});var i,r,a,o=n(30168),s=n(92026),c=n(6394),l=n(37081),u=n(33280),d=n(94951),h=n(15226),f=n(26461),v=n(116),p=n(41012),_=n(82999),g=n(58406),y=n(98634),m=n(64201),b=n(19253),S=n(25920),T=n(4760);function w(e){var t=new m.kG,n=t.vertex,w=t.fragment;return(0,p.Sv)(n,e),t.include(d.w,e),t.attributes.add(T.T.POSITION,"vec3"),t.attributes.add(T.T.UV0,"vec2"),t.varyings.add("vpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),n.uniforms.add(new _.A("textureCoordinateScaleFactor",(function(e){return(0,s.pC)(e.texture)&&(0,s.pC)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:c.O}))),n.code.add((0,y.H)(i||(i=(0,o.Z)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0 * textureCoordinateScaleFactor;\n      gl_Position = transformPosition(proj, view, vpos);\n    }\n  "])),e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":"")),t.include(u.f5,e),t.include(h.l,e),w.uniforms.add([new b.A("tex",(function(e){return e.texture})),new g.p("opacity",(function(e){return e.opacity}))]),t.varyings.add("vTexCoord","vec2"),e.output===l.H.Alpha?w.code.add((0,y.H)(r||(r=(0,o.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture2D(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      gl_FragColor = vec4(alpha);\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",y.H.float(f.F))):(w.include(v.Y),w.code.add((0,y.H)(a||(a=(0,o.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      gl_FragColor = texture2D(tex, vTexCoord) * opacity;\n\n      if (gl_FragColor.a < ",") {\n        discard;\n      }\n\n      gl_FragColor = highlightSlice(gl_FragColor, vpos);\n      ","\n    }\n    "])),e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":"",y.H.float(f.F),e.transparencyPassType===S.A.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""))),t}var O=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}))},72511:function(e,t,n){n.d(t,{S:function(){return C},b:function(){return R}});var i,r,a,o,s,c,l,u,d,h,f=n(30168),v=n(67077),p=n(43505),_=n(37081),g=n(33280),y=n(94951),m=n(15226),b=n(26461),S=n(116),T=n(41012),w=n(49450),O=n(95276),A=n(98634),E=n(64201),L=n(25920),P=n(4760);function R(e){var t=new E.kG,n=e.hasMultipassTerrain&&(e.output===_.H.Color||e.output===_.H.Alpha);t.include(y.w,e),t.include(p.A,e),t.include(g.f5,e);var v=t.vertex,R=t.fragment;return R.include(S.Y),(0,T.Sv)(v,e),R.uniforms.add(new O.N("uColor",(function(e){return e.color}))),t.attributes.add(P.T.POSITION,"vec3"),t.varyings.add("vWorldPosition","vec3"),n&&t.varyings.add("depth","float"),e.screenSizeEnabled&&t.attributes.add(P.T.OFFSET,"vec3"),e.shadingEnabled&&((0,T._8)(v),t.attributes.add(P.T.NORMAL,"vec3"),t.varyings.add("vViewNormal","vec3")),v.code.add((0,A.H)(i||(i=(0,f.Z)(["\n    void main(void) {\n      vWorldPosition = ",";\n  "])),e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position")),e.shadingEnabled&&v.code.add((0,A.H)(r||(r=(0,f.Z)(["vec3 worldNormal = normal;\nvViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;"])))),v.code.add((0,A.H)(a||(a=(0,f.Z)(["\n    ","\n    gl_Position = transformPosition(proj, view, vWorldPosition);\n  }\n  "])),n?"depth = (view * vec4(vWorldPosition, 1.0)).z;":"")),n&&t.include(m.l,e),R.code.add((0,A.H)(o||(o=(0,f.Z)(["\n    void main() {\n      discardBySlice(vWorldPosition);\n      ","\n    "])),n?"terrainDepthTest(gl_FragCoord, depth);":"")),e.shadingEnabled?(R.uniforms.add(new w.J("shadingDirection",(function(e){return e.shadingDirection}))),R.uniforms.add(new O.N("shadedColor",(function(e){return k(e.shadingTint,e.color)}))),R.code.add((0,A.H)(s||(s=(0,f.Z)(["vec3 viewNormalNorm = normalize(vViewNormal);\nfloat shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);\nvec4 finalColor = mix(uColor, shadedColor, shadingFactor);"]))))):R.code.add((0,A.H)(c||(c=(0,f.Z)(["vec4 finalColor = uColor;"])))),R.code.add((0,A.H)(l||(l=(0,f.Z)(["\n      ","\n      if (finalColor.a < ",") {\n        discard;\n      }\n      ","\n\n      ","\n    }\n    "])),e.output===_.H.ObjectAndLayerIdColor?(0,A.H)(u||(u=(0,f.Z)(["finalColor.a = 1.0;"]))):"",A.H.float(b.b),e.output===_.H.Alpha?(0,A.H)(d||(d=(0,f.Z)(["gl_FragColor = vec4(finalColor.a);"]))):"",e.output===_.H.Color?(0,A.H)(h||(h=(0,f.Z)(["gl_FragColor = highlightSlice(finalColor, vWorldPosition); ",""])),e.transparencyPassType===L.A.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""):"")),t}function k(e,t){var n=1-e[3],i=e[3]+t[3]*n;return 0===i?(F[3]=i,F):(F[0]=(e[0]*e[3]+t[0]*t[3]*n)/i,F[1]=(e[1]*e[3]+t[1]*t[3]*n)/i,F[2]=(e[2]*e[3]+t[2]*t[3]*n)/i,F[3]=t[3],F)}var F=(0,v.c)(),C=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"}))},35284:function(e,t,n){n.d(t,{Z:function(){return D}});var i=n(37762),r=n(15671),a=n(43144),o=(n(59486),n(41644)),s=n(91505),c=n(16889),l=n(92026),u=n(17842),d=n(23879),h=n(22753),f=n(11873),v=n(14226),p=n(81949),_=n(88396),g=n(11186),y=n(71353),m=n(83448),b=n(79803),S=n(65156),T=n(85981),w=n(55652),O=n(40885),A=n(51378),E=n(37818),L=n(77648),P=n(81703),R=n(86755),k=n(66327),F=n(78485),C=n(97882),j=n(99034),Z=n(585),D=function(){function e(t){var n;for(var i in(0,r.Z)(this,e),this.metadata=void 0,this._camera=new R.V,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=new Array,this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=(0,p.c)(),this._worldFrame=null,this._renderLocation=(0,y.c)(),this._renderLocationDirty=!0,this._location=new Z.Z({x:0,y:0,z:0}),this._elevationAlignedLocation=new Z.Z,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.cursor=null,this.grabCursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=j.jg.None,this._focused=!1,this.events=new s.Z.EventEmitter,this._screenLocation={screenPointArray:(0,u.s1)(),renderScreenPointArray:(0,u.J$)(),pixelSize:0},this._screenLocationDirty=!0,this._engineResourcesAddedToStage=!1,this._attached=!1,this._location.spatialReference=t.view.spatialReference,t)this[i]=t[i];var a=null===(n=this.view.state)||void 0===n?void 0:n.camera;a&&this._camera.copyFrom(a)}return(0,a.Z)(e,[{key:"destroy",value:function(){this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this._camera=null}},{key:"_stage",get:function(){var e;return null===(e=this.view)||void 0===e?void 0:e._stage}},{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}},{key:"renderObjects",get:function(){return this._renderObjects},set:function(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}},{key:"available",get:function(){return this._available},set:function(e){e!==this._available&&(this._available=e,this._updateEngineObject())}},{key:"disableDisplay",value:function(){var e=this;return this._noDisplayCount++,1===this._noDisplayCount&&this._updateEngineObject(),{remove:(0,d.IH)((function(){e._noDisplayCount--,0===e._noDisplayCount&&e._updateEngineObject()}))}}},{key:"radius",get:function(){return this._radius},set:function(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}},{key:"worldSized",get:function(){return this._worldSized},set:function(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}},{key:"modelTransform",get:function(){return this._modelTransform},set:function(e){M(e)&&(this._screenLocationDirty=!0),(0,v.c)(this._modelTransform,e),this._updateEngineObject()}},{key:"renderLocation",get:function(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=(0,p.c)()),function(e,t,n){switch(e.viewingMode){case"local":return(0,v.i)(n),!0;case"global":var i=(0,m.Iu)(e.renderCoordsHelper.spatialReference);(0,b.PR)(t,0,U,0,i.radius),(0,b.yH)((0,c.Vl)(U[0]),(0,c.Vl)(U[1]),n)}}(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation},set:function(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}},{key:"location",get:function(){return this._location},set:function(e){(0,E.WG)(e,this._location),this._notifyLocationChanged()}},{key:"_notifyLocationChanged",value:function(){this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}},{key:"elevationAlignedLocation",get:function(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation},set:function(e){(0,E.WG)(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}},{key:"_updateElevationAlignedLocation",value:function(){var e=(0,l.pC)(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y,this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=(0,E.D)(this.location.spatialReference),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}},{key:"grabbableForEvent",value:function(){return!0}},{key:"grabbing",get:function(){return this._grabbing},set:function(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}},{key:"hovering",get:function(){return this._hovering},set:function(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}},{key:"selected",get:function(){return this._selected},set:function(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}},{key:"state",get:function(){return this._state},set:function(e){e!==this._state&&(this._state=e,this._updateEngineObject())}},{key:"updateStateEnabled",value:function(e,t){t?this.state|=e:this.state&=~e}},{key:"_setFocused",value:function(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:!0===e?"focus":"unfocus"}))}},{key:"focused",get:function(){return this._focused}},{key:"screenLocation",get:function(){return this._ensureScreenLocation(),this._screenLocation}},{key:"_ensureScreenLocation",value:function(){if(this._screenLocationDirty){var e;if(this._screenLocation.pixelSize=this._camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1,M(this._modelTransform)){var t=this._calculateModelTransformOffset(K);e=(0,g.a)(t,t,this.renderLocation)}else e=this.renderLocation;this._camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}}},{key:"applyObjectTransform",get:function(){return this._applyObjectTransform},set:function(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}},{key:"attached",get:function(){return this._attached}},{key:"intersectionDistance",value:function(e,t){if(!this.available)return null;var n=(0,u.md)(e,z),r=this._getCollisionRadius(t),a=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if((0,_.k)(this.screenLocation.screenPointArray,n)<r*r)return this.screenLocation.renderScreenPointArray[2]+a;break;case"line":var s=this.collisionType.paths,c=this._getWorldToScreenObjectScale(),d=this._calculateObjectTransform(c,H),f=r*this.screenLocation.pixelSize,v=(0,P.u4)(this._camera,n,N);if((0,l.Wi)(v))return null;var p,m=(0,i.Z)(s);try{for(m.s();!(p=m.n()).done;){var b=p.value;if(0!==b.length)for(var S=(0,g.m)(U,b[0],d),O=1;O<b.length;O++){var E=(0,g.m)(V,b[O],d),L=(0,T.Gr)((0,T.zk)(S,E,x),v);if(null!=L&&L<f*f){var R=(0,g.a)(A.WM.get(),S,E);(0,g.g)(R,R,.5);var k=(0,u.So)(A.WM.get());return this._camera.projectToRenderScreen(R,k),k[2]+a}(0,g.c)(S,E)}}}catch(me){m.e(me)}finally{m.f()}break;case"disc":var F,C=this.collisionType.direction,j=null!==(F=this.collisionType.offset)&&void 0!==F?F:y.Z,Z=this._getWorldToScreenObjectScale(),D=this._calculateObjectTransform(Z,H),M=r*this.screenLocation.pixelSize,W=(0,P.u4)(this._camera,n,N);if((0,l.Wi)(W))return null;var K=(0,h.f)(I,D),Y=(0,g.t)(G,C,K),J=(0,g.m)(q,j,D);(0,w.Yq)(J,Y,B);var $=Q;if((0,w.BR)(B,W,$)&&(0,g.d)($,J)<M*M)return this.screenLocation.renderScreenPointArray[2]+a;break;case"ribbon":var X=this.collisionType,ee=X.paths,te=X.direction,ne=this._getWorldToScreenObjectScale(),ie=this._calculateObjectTransform(ne,H),re=r*this._camera.computeScreenPixelSizeAt(this.renderLocation),ae=(0,P.u4)(this._camera,n,N);if((0,l.Wi)(ae))return null;var oe=(0,h.f)(I,ie),se=(0,g.t)(G,te,oe),ce=this._calculateModelTransformPosition(q);(0,w.Yq)(ce,se,B);var le=Q;if(!(0,w.BR)(B,ae,le))break;var ue,de=(0,i.Z)(ee);try{for(de.s();!(ue=de.n()).done;){var he=ue.value;if(0!==he.length)for(var fe=(0,g.m)(U,he[0],ie),ve=1;ve<he.length;ve++){var pe=(0,g.m)(V,he[ve],ie),_e=(0,T.Jk)((0,T.zk)(fe,pe,x),le);if(null!=_e&&_e<re*re){var ge=(0,g.a)(A.WM.get(),fe,pe);(0,g.g)(ge,ge,.5);var ye=(0,u.So)(A.WM.get());return this._camera.projectToRenderScreen(ge,ye),ye[2]+a}(0,g.c)(fe,pe)}}}catch(me){de.e(me)}finally{de.f()}break;default:(0,o.Bg)(this.collisionType)}return null}},{key:"attach",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{manipulator3D:{}},t=this._stage;if(t){var n=e.manipulator3D;if((0,l.Wi)(n.engineLayerId)){var i=new C.F({pickable:!1,updatePolicy:F.j.SYNC});t.add(i),n.engineLayerId=i.id,this._engineLayer=i}else(null===t||void 0===t?void 0:t.getObject)&&(this._engineLayer=t.getObject(n.engineLayerId));n.engineLayerReferences=(n.engineLayerReferences||0)+1,this._materialIdReferences=n.materialIdReferences,(0,l.Wi)(this._materialIdReferences)&&(this._materialIdReferences=new Map,n.materialIdReferences=this._materialIdReferences),this._camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),(0,b.Up)(this._location.spatialReference,this.view.spatialReference)||(this.location=new Z.Z({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}}},{key:"detach",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{manipulator3D:{}},t=e.manipulator3D;t.engineLayerReferences--;var n=0===t.engineLayerReferences;n&&(t.engineLayerId=null),this._removeResourcesFromStage(n),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}},{key:"onViewChange",value:function(){this._camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}},{key:"onElevationChange",value:function(e){(0,b.nF)(this.location,Y,e.spatialReference)&&(0,S.Qn)(e.extent,Y)&&this._notifyLocationChanged()}},{key:"_evaluateElevationAlignment",value:function(){if(!(0,l.Wi)(this.elevationInfo)){var e=null,t=0,n=(0,l.Pt)(this.elevationInfo.offset,0);switch(this.elevationInfo.mode){case"on-the-ground":e=(0,l.Pt)((0,L.KO)(this.view.elevationProvider,this.location,"ground"),0);break;case"relative-to-ground":t=(0,l.Pt)((0,L.KO)(this.view.elevationProvider,this.location,"ground"),0)+n;break;case"relative-to-scene":t=(0,l.Pt)((0,L.KO)(this.view.elevationProvider,this.location,"scene"),0)+n;break;case"absolute-height":t=n}return t!==this._elevation.offset||e!==this._elevation.override?(this._elevation.offset=t,void(this._elevation.override=e)):void 0}}},{key:"_updateEngineObject",value:function(){if(this._attached)if(this.available){var e=this._getWorldToScreenObjectScale(),t=H;if(!0===this.autoScaleRenderObjects){var n=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(n,t)}else this._calculateObjectTransform(e,t);var r,a=this._ensureEngineResources().objectsByState,o=(this.focused?j.Q9.Focused:j.Q9.Unfocused)|(this.selected?j.Q9.Selected:j.Q9.Unselected),s=this._noDisplayCount>0,c=(0,i.Z)(a);try{for(c.s();!(r=c.n()).done;){var l=r.value,u=l.stateMask,d=l.objects;if(s){var h,f=(0,i.Z)(d);try{for(f.s();!(h=f.n()).done;){h.value.visible=!1}}catch(w){f.e(w)}finally{f.f()}}else{var v=(u&j.Q9.All)!==j.Q9.None,p=(u&j.jg.All)!==j.jg.None,_=!v||(o&u)==(u&j.Q9.All),g=!p||(this.state&u)==(u&j.jg.All);if(_&&g){var y,m=(0,i.Z)(d);try{for(m.s();!(y=m.n()).done;){var b=y.value;b.visible=!0,b.transformation=t}}catch(w){m.e(w)}finally{m.f()}}else{var S,T=(0,i.Z)(d);try{for(T.s();!(S=T.n()).done;){S.value.visible=!1}}catch(w){T.e(w)}finally{T.f()}}}}}catch(w){c.e(w)}finally{c.f()}}else this._removeResourcesFromStage()}},{key:"_ensureEngineResources",value:function(){if((0,l.Wi)(this._engineResources)){var e=(0,l.Wg)(this._engineLayer),t=[],n=new Set;this.renderObjects.forEach((function(e){var i=e.geometry.material;n.has(i)||(t.push(i),n.add(i))}));var i=new Map;this._renderObjects.forEach((function(e){var t=new k.T({castShadow:!1,geometries:[e.geometry]}),n=i.get(e.stateMask)||[];n.push(t),i.set(e.stateMask,n)}));var r=[];i.forEach((function(e,t){return r.push({stateMask:t,objects:e})})),this._engineResources={objectsByState:r,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}},{key:"_addResourcesToStage",value:function(){var e=this,t=this._stage;if(!this._engineResourcesAddedToStage&&!(0,l.Wi)(this._engineResources)&&t){var n=this._engineResources,i=n.objectsByState,r=n.layer;n.materials.forEach((function(n){var i=(0,l.Wg)(e._materialIdReferences),r=i.get(n.id)||0;0===r&&t.add(n),i.set(n.id,r+1)})),i.forEach((function(e){var n=e.objects;r.addMany(n),t.addMany(n)})),this._engineResourcesAddedToStage=!0}}},{key:"_removeResourcesFromStage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._stage;if(this._engineResourcesAddedToStage&&!(0,l.Wi)(this._engineResources)&&n){var i=this._engineResources,r=i.objectsByState,a=i.layer,o=i.materials;r.forEach((function(e){var t=e.objects;a.removeMany(t),n.removeMany(t)})),o.forEach((function(t){var i=(0,l.Wg)(e._materialIdReferences),r=i.get(t.id);1===r?(n.remove(t),i.delete(t.id)):i.set(t.id,r-1)})),t&&n.remove(a),this._engineResourcesAddedToStage=!1}}},{key:"_getCollisionRadius",value:function(e){return this._getFocusedSize(this.radius,!0)*("touch"===e?this.touchMultiplier:1)}},{key:"_getFocusedSize",value:function(e,t){return e*(t?this.focusMultiplier:1)}},{key:"_getWorldToScreenObjectScale",value:function(){return this._worldSized?1:this.screenLocation.pixelSize}},{key:"_calculateModelTransformPosition",value:function(e){var t=this._getWorldToScreenObjectScale(),n=this._calculateObjectTransform(t,W);return(0,g.s)(e,n[12],n[13],n[14])}},{key:"_calculateModelTransformOffset",value:function(e){var t=this._calculateModelTransformPosition(e);return(0,g.b)(e,t,this.renderLocation)}},{key:"_calculateObjectTransform",value:function(e,t){return(0,v.s)(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&(0,v.m)(t,t,this._worldFrame),(0,v.m)(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,(0,l.pC)(this._applyObjectTransform)&&this._applyObjectTransform(t),t}},{key:"test",get:function(){var e=!1;if((0,l.pC)(this._engineResources))for(var t in this._engineResources.objectsByState){var n,r=this._engineResources.objectsByState[t],a=(0,i.Z)(r.objects);try{for(a.s();!(n=a.n()).done;){if(n.value.visible){e=!0;break}}}catch(o){a.e(o)}finally{a.f()}if(e)break}return{areAnyResourcesVisible:e}}}]),e}();function M(e){return 0!==e[12]||0!==e[13]||0!==e[14]}var z=(0,u.s1)(),x=(0,T.Ue)(),N=(0,O.Ue)(),I=(0,f.c)(),W=(0,p.c)(),H=(0,p.c)(),B=(0,w.Ue)(),U=(0,y.c)(),V=(0,y.c)(),Q=(0,y.c)(),G=(0,y.c)(),q=(0,y.c)(),K=(0,y.c)(),Y=new Z.Z({x:0,y:0,z:0,spatialReference:null})},40508:function(e,t,n){n.d(t,{r:function(){return o}});var i=n(43144),r=n(15671),a=n(99034),o=(0,i.Z)((function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Q9.None;(0,r.Z)(this,e),this.geometry=t,this.stateMask=n}))},83639:function(e,t,n){n.d(t,{Aq:function(){return j},Bz:function(){return R},EA:function(){return A},Gd:function(){return C},Ju:function(){return P},X9:function(){return F},aD:function(){return k},du:function(){return Z},qJ:function(){return E},u2:function(){return D}});var i=n(92026),r=n(14226),a=n(11186),o=n(71353),s=n(67077),c=n(51378),l=n(37818),u=n(35284),d=n(40508),h=n(96387),f=n(91526),v=n(68401),p=n(40779),_=n(70619),g=n(56529),y=n(4760),m=n(66832),b=n(66156),S=n(24231),T=n(58901),w=n(11606),O=n(99034);function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.yD.OccludeAndTransparent,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=(0,s.f)(e[0],e[1],e[2],e.length>3?e[3]:1),r=e[3]<1;return n?new w.Q({color:i,transparent:r,writeDepth:!0,cullFace:v.Vr.Back,renderOccluded:t}):new m.E({color:i,transparent:r,writeDepth:!0,cullFace:v.Vr.Back,renderOccluded:t})}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.yD.OccludeAndTransparent,n=(0,s.f)(e[0],e[1],e[2],4===e.length?e[3]:1);return new m.E({color:n,transparent:!0,writeDepth:!0,cullFace:v.Vr.Front,renderOccluded:t})}var L=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1,calloutColor:(0,o.f)(1,.5,0)});function P(e,t){var n=new u.Z({view:e,autoScaleRenderObjects:!1,collisionPriority:1,metadata:t.metadata});return R(n,t),n}function R(e,t){var n,i,r,a,o,c,l,u,h=null!==(n=t.material)&&void 0!==n?n:new b.j({transparent:!0,writeDepth:!1,textureId:null===(i=t.texture)||void 0===i?void 0:i.id,renderOccluded:g.yD.Opaque}),v=null!==(r=t.focusMultiplier)&&void 0!==r?r:L.focusMultiplier,m=null!==(a=t.calloutLength)&&void 0!==a?a:L.calloutLength,w=L.discRadius*(null!==(o=t.discScale)&&void 0!==o?o:1),A=w*v,E=function(e,t){var n=[0,1,2,2,3,0];return new p.Z(t,[[y.T.POSITION,new f.a([m-e,-e,0,m+e,-e,0,m+e,e,0,m-e,e,0],3,!0)],[y.T.UV0,new f.a([0,0,1,0,1,1,0,1],2,!0)]],[[y.T.POSITION,n],[y.T.UV0,n]])},P=L.calloutColor,R=null!==(c=t.calloutWidth)&&void 0!==c?c:L.calloutWidth,k=new(R>1?T.U:S.Y)({width:R,color:(0,s.f)(P[0],P[1],P[2],null!==(l=t.calloutOpacity)&&void 0!==l?l:1),renderOccluded:g.yD.OccludeAndTransparent}),F=(0,_.rh)(k,[[0,0,0],[m-w,0,0]]),C=(0,_.rh)(k,[[0,0,0],[m-A,0,0]]),j=null!==(u=t.customStateMask)&&void 0!==u?u:O.jg.None;e.collisionType={type:"disc",direction:[0,0,1],offset:[m,0,0]},e.focusMultiplier=v,e.metadata=t.metadata,e.radius=w,e.renderObjects=[new d.r(E(w,h),O.Q9.Unfocused|j),new d.r(F,O.Q9.Unfocused|j),new d.r(E(A,h),O.Q9.Focused|j),new d.r(C,O.Q9.Focused|j)]}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:O.jg.None,r=A((0,s.f)(t[0],t[1],t[2],null!=n?n:1)),a=[new d.r((0,_.PI)(r,1,32,32),i)];return new u.Z({view:e,renderObjects:a})}var F=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});function C(e,t,n,i){var o=(0,a.b)(c.WM.get(),e,n),s=j(o,(0,a.f)(c.WM.get(),i,o),n,c.MP.get());(0,r.a)(s,s);var l=(0,a.m)(c.WM.get(),t,s);return Math.atan2(l[1],l[0])}function j(e,t,n,i){var r=(0,a.n)(c.WM.get(),e),o=(0,a.n)(c.WM.get(),t),s=(0,a.f)(c.WM.get(),r,o);return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=0,i[4]=o[0],i[5]=o[1],i[6]=o[2],i[7]=0,i[8]=s[0],i[9]=s[1],i[10]=s[2],i[11]=0,i[12]=n[0],i[13]=n[1],i[14]=n[2],i[15]=1,i}function Z(e,t){var n=e.getViewForGraphic(t);return(0,i.pC)(n)&&"computeAttachmentOrigin"in n?n.computeAttachmentOrigin(t,e.spatialReference):null}function D(e,t,n){var r=Z(e,n);(0,i.pC)(r)?t.elevationAlignedLocation=r:function(e,t){if((0,i.Wi)(t))return;var n="mesh"===t.type?t.anchor:(0,h.zE)(t);(0,i.Wi)(n)||(e.location=(0,l.kB)(n))}(t,n.geometry)}},43505:function(e,t,n){n.d(t,{A:function(){return c}});var i,r=n(30168),a=n(41012),o=n(58406),s=n(98634);function c(e,t){if(t.screenSizeEnabled){var n=e.vertex;(0,a.hY)(n,t),n.uniforms.add(new o.p("perScreenPixelRatio",(function(e,t){return t.camera.perScreenPixelRatio}))),n.uniforms.add(new o.p("screenSizeScale",(function(e){return e.screenSizeScale}))),n.code.add((0,s.H)(i||(i=(0,r.Z)(["float computeRenderPixelSizeAt( vec3 pWorld ){\nvec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);\nfloat viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));\nreturn viewDirectionDistance * perScreenPixelRatio;\n}\nvec3 screenSizeScaling(vec3 position, vec3 anchor){\nreturn position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;\n}"]))))}}},66156:function(e,t,n){n.d(t,{j:function(){return D}});var i=n(1413),r=n(15671),a=n(43144),o=n(60136),s=n(92572),c=n(37081),l=n(68401),u=n(17363),d=n(56529),h=n(78041),f=n(93822),v=n(12594),p=n(64642),_=n(11983),g=n(11752),y=n(61120),m=n(27366),b=n(98634),S=n(82144),T=n(31132),w=n(33559),O=n(7566),A=n(27627),E=n(50411),L=n(25920),P=n(8883),R=n(32500),k=n(8548),F=n(36207),C=(b.K,function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"initializeProgram",value:function(e){return new A.$(e.rctx,n.shader.get().build(this.configuration),O.i)}},{key:"_setPipelineState",value:function(e,t){var n=this.configuration,i=e===L.A.NONE,r=e===L.A.FrontFace;return(0,F.sm)({blending:n.output!==c.H.Color&&n.output!==c.H.Alpha||!n.transparent?null:i?j:(0,h.j7)(e),culling:(0,F.zp)(n.cullFace),depthTest:{func:(0,h.Bh)(e)},depthWrite:i?n.writeDepth?F.LZ:null:(0,h.K5)(e),colorWrite:F.BK,stencilWrite:n.hasOccludees?E.s3:null,stencilTest:n.hasOccludees?t?E.eD:E.RY:null,polygonOffset:i||r?null:(0,h.je)(n.enableOffset)})}},{key:"initializePipeline",value:function(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}},{key:"getPipelineState",value:function(e,t){return t?this._occludeePipelineState:(0,g.Z)((0,y.Z)(n.prototype),"getPipelineState",this).call(this,e,t)}}]),n}(T.A));C.shader=new S.J(R.I,(function(){return n.e(18957).then(n.bind(n,18957))}));var j=(0,F.if)(k.zi.ONE,k.zi.ONE_MINUS_SRC_ALPHA),Z=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).output=c.H.Color,e.cullFace=l.Vr.None,e.hasSlicePlane=!1,e.transparent=!1,e.enableOffset=!0,e.writeDepth=!0,e.hasOccludees=!1,e.transparencyPassType=L.A.NONE,e.hasMultipassTerrain=!1,e.cullAboveGround=!1,e}return(0,a.Z)(n)}(P.W);(0,m._)([(0,w.o)({count:c.H.COUNT})],Z.prototype,"output",void 0),(0,m._)([(0,w.o)({count:l.Vr.COUNT})],Z.prototype,"cullFace",void 0),(0,m._)([(0,w.o)()],Z.prototype,"hasSlicePlane",void 0),(0,m._)([(0,w.o)()],Z.prototype,"transparent",void 0),(0,m._)([(0,w.o)()],Z.prototype,"enableOffset",void 0),(0,m._)([(0,w.o)()],Z.prototype,"writeDepth",void 0),(0,m._)([(0,w.o)()],Z.prototype,"hasOccludees",void 0),(0,m._)([(0,w.o)({count:L.A.COUNT})],Z.prototype,"transparencyPassType",void 0),(0,m._)([(0,w.o)()],Z.prototype,"hasMultipassTerrain",void 0),(0,m._)([(0,w.o)()],Z.prototype,"cullAboveGround",void 0);var D=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e,new z)).supportsEdges=!0,i._configuration=new Z,i}return(0,a.Z)(n,[{key:"getConfiguration",value:function(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<h.ve,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}},{key:"requiresSlot",value:function(e,t){return(t===c.H.Color||t===c.H.Alpha||t===c.H.Highlight)&&(e===f.r.DRAPED_MATERIAL||(t===c.H.Highlight?e===f.r.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?f.r.TRANSPARENT_MATERIAL:f.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:f.r.OPAQUE_MATERIAL)))}},{key:"createGLMaterial",value:function(e){return new M(e)}},{key:"createBufferWriter",value:function(){return new v.G(p.W1)}}]),n}(_.c),M=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){return(0,r.Z)(this,n),t.call(this,(0,i.Z)((0,i.Z)({},e),e.material.parameters))}return(0,a.Z)(n,[{key:"_updateParameters",value:function(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(C,e)}},{key:"_updateOccludeeState",value:function(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}},{key:"beginSlot",value:function(e){return this._output!==c.H.Color&&this._output!==c.H.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}]),n}(u.F),z=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).transparent=!1,e.writeDepth=!0,e.hasSlicePlane=!1,e.cullFace=l.Vr.None,e.hasOccludees=!1,e.opacity=1,e.textureId=null,e.initTextureTransparent=!0,e}return(0,a.Z)(n)}(d.Mt)},11606:function(e,t,n){n.d(t,{Q:function(){return M}});var i=n(15671),r=n(43144),a=n(60136),o=n(92572),s=n(11186),c=n(71353),l=n(67077),u=n(41414),d=n(25158),h=n(55158),f=n(37081),v=n(68401),p=n(23620),_=n(56529),g=n(93822),y=n(97731),m=n(4760),b=n(33236),S=n(22909),T=n(27366),w=n(82144),O=n(31132),A=n(33559),E=n(78041),L=n(27627),P=n(25920),R=n(8883),k=n(72511),F=n(8548),C=n(36207),j=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"initializeProgram",value:function(e){return new L.$(e.rctx,n.shader.get().build(this.configuration),D)}},{key:"_setPipelineState",value:function(e){var t=this.configuration,n=e===P.A.NONE,i=e===P.A.FrontFace;return(0,C.sm)({blending:t.output!==f.H.Color&&t.output!==f.H.Alpha||!t.transparent?null:n?E.wu:(0,E.j7)(e),culling:(0,C.zp)(t.cullFace),depthTest:{func:i?F.wb.LESS:t.shadingEnabled?F.wb.LEQUAL:F.wb.LESS},depthWrite:n?t.writeDepth?C.LZ:null:(0,E.K5)(e),colorWrite:C.BK,polygonOffset:n||i?null:E.E0})}},{key:"initializePipeline",value:function(){return this._setPipelineState(this.configuration.transparencyPassType)}}]),n}(O.A);j.shader=new w.J(k.S,(function(){return n.e(36556).then(n.bind(n,36556))}));var Z=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments)).output=f.H.Color,e.cullFace=v.Vr.None,e.transparencyPassType=P.A.NONE,e.hasSlicePlane=!1,e.transparent=!1,e.writeDepth=!0,e.screenSizeEnabled=!0,e.shadingEnabled=!0,e.hasMultipassTerrain=!1,e.cullAboveGround=!1,e}return(0,r.Z)(n)}(R.W);(0,T._)([(0,A.o)({count:f.H.COUNT})],Z.prototype,"output",void 0),(0,T._)([(0,A.o)({count:v.Vr.COUNT})],Z.prototype,"cullFace",void 0),(0,T._)([(0,A.o)({count:P.A.COUNT})],Z.prototype,"transparencyPassType",void 0),(0,T._)([(0,A.o)()],Z.prototype,"hasSlicePlane",void 0),(0,T._)([(0,A.o)()],Z.prototype,"transparent",void 0),(0,T._)([(0,A.o)()],Z.prototype,"writeDepth",void 0),(0,T._)([(0,A.o)()],Z.prototype,"screenSizeEnabled",void 0),(0,T._)([(0,A.o)()],Z.prototype,"shadingEnabled",void 0),(0,T._)([(0,A.o)()],Z.prototype,"hasMultipassTerrain",void 0),(0,T._)([(0,A.o)()],Z.prototype,"cullAboveGround",void 0);var D=new Map([[m.T.POSITION,0],[m.T.NORMAL,1],[m.T.OFFSET,2]]),M=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e,new x)).supportsEdges=!0,r._configuration=new Z,r._vertexAttributeLocations=D,r}return(0,r.Z)(n,[{key:"getConfiguration",value:function(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}},{key:"intersect",value:function(e,t,n,i,r,a){var o=this;if(this.parameters.screenSizeEnabled){var c=e.vertexAttributes.get(m.T.OFFSET),l={applyToVertex:function(e,t,i,r){var a=(0,s.s)(I,c.data[3*r+0],c.data[3*r+1],c.data[3*r+2]),l=(0,s.s)(W,e,t,i);return(0,s.g)(a,a,o.parameters.screenSizeScale*n.camera.computeRenderPixelSizeAt(a)),(0,s.a)(l,l,a),[l[0],l[1],l[2]]},applyToAabb:function(e){var t=(0,u.be)(e,I);return(0,u.bA)(e,o.parameters.screenSizeScale*n.camera.computeRenderPixelSizeAt(t))}};(0,S.Bw)(e,n,i,r,l,a)}else(0,S.Bw)(e,n,i,r,void 0,a)}},{key:"requiresSlot",value:function(e,t){if(t===f.H.Highlight)return e===g.r.OPAQUE_MATERIAL;if(t===f.H.Color||t===f.H.Alpha||t===f.H.ObjectAndLayerIdColor){var n=g.r.OPAQUE_MATERIAL;return this.parameters.transparent&&(n=this.parameters.writeDepth?g.r.TRANSPARENT_MATERIAL:g.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===n||e===g.r.DRAPED_MATERIAL}return!1}},{key:"createGLMaterial",value:function(e){return new z(e)}},{key:"createBufferWriter",value:function(){return new N(this.parameters.screenSizeEnabled)}}]),n}(_.F5),z=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"beginSlot",value:function(e){return this.ensureTechnique(j,e)}}]),n}(p.Z),x=function(e){(0,a.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments)).color=(0,l.f)(1,1,1,1),e.shadingTint=(0,l.f)(0,0,0,.25),e.shadingDirection=(0,s.n)((0,c.c)(),[.5,-.5,-.5]),e.screenSizeScale=14,e.transparent=!1,e.writeDepth=!0,e.hasSlicePlane=!1,e.cullFace=v.Vr.None,e.screenSizeEnabled=!1,e.shadingEnabled=!0,e}return(0,r.Z)(n)}(_.Mt),N=function(){function e(t){(0,i.Z)(this,e),this.screenSizeEnabled=t;var n=(0,h.U$)().vec3f(m.T.POSITION).vec3f(m.T.NORMAL);this.screenSizeEnabled&&n.vec3f(m.T.OFFSET),this.vertexBufferLayout=n}return(0,r.Z)(e,[{key:"allocate",value:function(e){return this.vertexBufferLayout.createBuffer(e)}},{key:"elementCount",value:function(e){return e.indices.get(m.T.POSITION).length}},{key:"write",value:function(e,t,n,i,r){if((0,b.NK)(n,this.vertexBufferLayout,e,t,i,r),this.screenSizeEnabled){if(!n.vertexAttributes.has(m.T.OFFSET))throw new Error("".concat(m.T.OFFSET," vertex attribute required for screenSizeEnabled ShadedColorMaterial"));var a=n.vertexAttributes.get(m.T.OFFSET),o=n.indices.get(m.T.OFFSET);(0,y.hu)(3===a.size);var s=i.getField(m.T.OFFSET,d.ct);if(!s)throw new Error("unable to acquire view for "+m.T.OFFSET);(0,b.ho)(o,a.data,t,s,r)}}}]),e}(),I=(0,c.c)(),W=(0,c.c)()}}]);
//# sourceMappingURL=83639.9a217549.chunk.js.map
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[90170],{20008:function(t,n,e){e.d(n,{Ru:function(){return f},bA:function(){return c},cM:function(){return h},e7:function(){return s},pB:function(){return l}});var a=e(29439),i=e(16889),r=e(65156),o=e(376),u=e(69662);function l(t,n,e,a){var i,r;if(null==a||t.hasZ||(a=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=a&&(t.z+=a),t;if("multipoint"===t.type){for(var o=t.points,l=0;l<o.length;l++)o[l]=p(o[l],n,e,a);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=a&&(null!==(i=t.zmin)&&void 0!==i||(t.zmin=0),t.zmin+=a,null!==(r=t.zmax)&&void 0!==r||(t.zmax=0),t.zmax+=a),t;for(var s=(0,u.nA)(t),c="polyline"===t.type?t.paths:t.rings,f=0;f<s.length;f++)for(var h=s[f],v=0;v<h.length;v++)h[v]=p(h[v],n,e,a);return"paths"in t?t.paths=c:t.rings=c,t}function s(t,n,e,a,i){var r=t.clone(),o=a.resolution;if("point"===r.type){if(i)l(r,n*o,-e*o);else{var s=a.state.transform,c=a.state.inverseTransform,f=s[0]*r.x+s[2]*r.y+s[4],h=s[1]*r.x+s[3]*r.y+s[5];r.x=c[0]*(f+n)+c[2]*(h+e)+c[4],r.y=c[1]*(f+n)+c[3]*(h+e)+c[5]}return r}if("multipoint"===r.type){if(i)l(r,n*o,-e*o);else for(var p=r.points,d=a.state.transform,y=a.state.inverseTransform,m=0;m<p.length;m++){var g=p[m],x=d[0]*g[0]+d[2]*g[1]+d[4],b=d[1]*g[0]+d[3]*g[1]+d[5],_=y[0]*(x+n)+y[2]*(b+e)+y[4],E=y[1]*(x+n)+y[3]*(b+e)+y[5];p[m]=v(g,_,E,void 0)}return r}if("extent"===r.type){if(i)l(r,n*o,-e*o);else{var C=a.state.transform,M=a.state.inverseTransform,k=C[0]*r.xmin+C[2]*r.ymin+C[4],Z=C[1]*r.xmin+C[3]*r.ymin+C[5],S=C[0]*r.xmax+C[2]*r.ymax+C[4],A=C[1]*r.xmax+C[3]*r.ymax+C[5];r.xmin=M[0]*(k+n)+M[2]*(Z+e)+M[4],r.ymin=M[1]*(k+n)+M[3]*(Z+e)+M[5],r.xmax=M[0]*(S+n)+M[2]*(A+e)+M[4],r.ymax=M[1]*(S+n)+M[3]*(A+e)+M[5]}return r}if(i)l(r,n*o,-e*o);else{for(var w=(0,u.nA)(r),z="polyline"===r.type?r.paths:r.rings,R=a.state.transform,T=a.state.inverseTransform,W=0;W<w.length;W++)for(var F=w[W],G=0;G<F.length;G++){var O=F[G],D=R[0]*O[0]+R[2]*O[1]+R[4],H=R[1]*O[0]+R[3]*O[1]+R[5],I=T[0]*(D+n)+T[2]*(H+e)+T[4],V=T[1]*(D+n)+T[3]*(H+e)+T[5];F[G]=v(O,I,V,void 0)}"paths"in r?r.paths=z:r.rings=z}return r}function c(t,n,e,i){if("point"===t.type){var l=t.x,s=t.y,c=i?i[0]:l,f=i?i[1]:s,h=t.clone(),p=(l-c)*n+c,d=(s-f)*e+f;return h.x=p,h.y=d,h}if("multipoint"===t.type){for(var y=(0,u.nA)(t),m=(0,r.Ue)(),g=(0,o.C6)(m,[y]),x=(0,a.Z)(g,4),b=x[0],_=x[1],E=x[2],C=x[3],M=i?i[0]:(b+E)/2,k=i?i[1]:(C+_)/2,Z=t.clone(),S=Z.points,A=0;A<S.length;A++){var w=S[A],z=(0,a.Z)(w,2),R=(z[0]-M)*n+M,T=(z[1]-k)*e+k;S[A]=v(w,R,T,void 0)}return Z}if("extent"===t.type){var W=t.xmin,F=t.xmax,G=t.ymin,O=t.ymax,D=i?i[0]:(W+F)/2,H=i?i[1]:(O+G)/2,I=t.clone();if(I.xmin=(W-D)*n+D,I.ymax=(O-H)*e+H,I.xmax=(F-D)*n+D,I.ymin=(G-H)*e+H,I.xmin>I.xmax){var V=I.xmin,P=I.xmax;I.xmin=P,I.xmax=V}if(I.ymin>I.ymax){var q=I.ymin,U=I.ymax;I.ymin=U,I.ymax=q}return I}for(var N=(0,u.nA)(t),Y=(0,r.Ue)(),B=(0,o.C6)(Y,N),X=(0,a.Z)(B,4),L=X[0],j=X[1],J=X[2],Q=X[3],K=i?i[0]:(L+J)/2,$=i?i[1]:(Q+j)/2,tt=t.clone(),nt="polyline"===tt.type?tt.paths:tt.rings,et=0;et<N.length;et++)for(var at=N[et],it=0;it<at.length;it++){var rt=at[it],ot=(0,a.Z)(rt,2),ut=(ot[0]-K)*n+K,lt=(ot[1]-$)*e+$;nt[et][it]=v(rt,ut,lt,void 0)}return"paths"in tt?tt.paths=nt:tt.rings=nt,tt}function f(t,n,e,a,i,r){var o=Math.sqrt((e-t)*(e-t)+(a-n)*(a-n));return Math.sqrt((i-t)*(i-t)+(r-n)*(r-n))/o}function h(t,n,e){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=Math.atan2(n.y-e.y,n.x-e.x)-Math.atan2(t.y-e.y,t.x-e.x),o=Math.atan2(Math.sin(r),Math.cos(r));return a?o:(0,i.BV)(o)}function p(t,n,e,a){return v(t,t[0]+n,t[1]+e,null!=t[2]&&null!=a?t[2]+a:void 0)}function v(t,n,e,a){var i=[n,e];return t.length>2&&i.push(null!=a?a:t[2]),t.length>3&&i.push(t[3]),i}},29919:function(t,n,e){e.d(n,{m:function(){return b}});var a,i,r=e(15671),o=e(43144),u=e(60136),l=e(92572),s=e(27366),c=e(31319),f=e(32718),h=e(92026),p=e(66978),v=e(49861),d=(e(25243),e(63780),e(69912)),y=e(99034),m=e(37762),g=e(80987);(i=a||(a={}))[i.WhenToolEditable=0]="WhenToolEditable",i[i.WhenToolNotEditable=1]="WhenToolNotEditable",i[i.Always=2]="Always";var x=function(){function t(){(0,r.Z)(this,t),this._isToolEditable=!0,this._manipulators=new g.Z,this._resourceContexts={manipulator3D:{}},this._attached=!1}return(0,o.Z)(t,[{key:"isToolEditable",set:function(t){this._isToolEditable=t}},{key:"length",get:function(){return this._manipulators.length}},{key:"add",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.WhenToolEditable;this.addMany([t],n)}},{key:"addMany",value:function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.WhenToolEditable,i=(0,m.Z)(t);try{for(i.s();!(n=i.n()).done;){var r=n.value,o={manipulator:r,visibilityPredicate:e,attached:!1};this._manipulators.add(o),this._attached&&this._updateManipulatorAttachment(o)}}catch(u){i.e(u)}finally{i.f()}}},{key:"remove",value:function(t){for(var n=0;n<this._manipulators.length;n++)if(this._manipulators.getItemAt(n).manipulator===t){var e=this._manipulators.splice(n,1)[0];this._detachManipulator(e);break}}},{key:"removeAll",value:function(){var t=this;this._manipulators.forEach((function(n){t._detachManipulator(n)})),this._manipulators.removeAll()}},{key:"attach",value:function(){var t=this;this._manipulators.forEach((function(n){t._updateManipulatorAttachment(n)})),this._attached=!0}},{key:"detach",value:function(){var t=this;this._manipulators.forEach((function(n){t._detachManipulator(n)})),this._attached=!1}},{key:"destroy",value:function(){this.detach(),this._manipulators.forEach((function(t){var n=t.manipulator;n.destroy&&n.destroy()})),this._manipulators.destroy(),this._resourceContexts=null}},{key:"on",value:function(t,n){return this._manipulators.on(t,(function(t){n(t)}))}},{key:"forEach",value:function(t){var n,e=(0,m.Z)(this._manipulators.items);try{for(e.s();!(n=e.n()).done;){t(n.value)}}catch(a){e.e(a)}finally{e.f()}}},{key:"some",value:function(t){return this._manipulators.items.some(t)}},{key:"toArray",value:function(){var t=[];return this.forEach((function(n){return t.push(n.manipulator)})),t}},{key:"intersect",value:function(t,n){var e=null,a=Number.MAX_VALUE;return this._manipulators.forEach((function(i){var r=i.manipulator;if(i.attached&&r.interactive){var o=r.intersectionDistance(t,n);(0,h.pC)(o)&&o<a&&(a=o,e=r)}})),e}},{key:"_updateManipulatorAttachment",value:function(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)}},{key:"_attachManipulator",value:function(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)}},{key:"_detachManipulator",value:function(t){if(t.attached){var n=t.manipulator;n.grabbing=!1,n.dragging=!1,n.hovering=!1,n.selected=!1,n.detach&&n.detach(this._resourceContexts),t.attached=!1}}},{key:"_isManipulatorItemVisible",value:function(t){return t.visibilityPredicate===a.Always||(this._isToolEditable?t.visibilityPredicate===a.WhenToolEditable:t.visibilityPredicate===a.WhenToolNotEditable)}}]),t}(),b=function(t){(0,u.Z)(e,t);var n=(0,l.Z)(e);function e(t){var a;return(0,r.Z)(this,e),(a=n.call(this,t)).manipulators=new x,a.automaticManipulatorSelection=!0,a.hasGrabbedManipulators=!1,a.hasHoveredManipulators=!1,a.firstGrabbedManipulator=null,a.created=!1,a.removeIncompleteOnCancel=!0,a._editableFlags=new Map([[y.bH.MANAGER,!0],[y.bH.USER,!0]]),a._creationFinishedResolver=(0,p.hh)(),a}return(0,o.Z)(e,[{key:"active",get:function(){return null!=this.view&&this.view.activeTool===this}},{key:"visible",set:function(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible())}},{key:"editable",get:function(){return this.getEditableFlag(y.bH.USER)},set:function(t){this.setEditableFlag(y.bH.USER,t)}},{key:"updating",get:function(){return!1}},{key:"cursor",get:function(){return null}},{key:"hasFocusedManipulators",get:function(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}},{key:"destroy",value:function(){this.manipulators.destroy(),this._set("view",null)}},{key:"onAdd",value:function(){this._syncVisible()}},{key:"activate",value:function(){(0,h.Wi)(this.view)?f.Z.getLogger(this.declaredClass).error("Can't activate tool if view is not defined."):(this.view.focus(),this.onActivate())}},{key:"deactivate",value:function(){this.onDeactivate()}},{key:"handleInputEvent",value:function(t){this.onInputEvent(t)}},{key:"handleInputEventAfter",value:function(t){this.onInputEventAfter(t)}},{key:"setEditableFlag",value:function(t,n){this._editableFlags.set(t,n),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===y.bH.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}},{key:"getEditableFlag",value:function(t){var n;return null!==(n=this._editableFlags.get(t))&&void 0!==n&&n}},{key:"whenCreated",value:function(){return this._creationFinishedResolver.promise}},{key:"onManipulatorSelectionChanged",value:function(){}},{key:"onActivate",value:function(){}},{key:"onDeactivate",value:function(){}},{key:"onShow",value:function(){}},{key:"onHide",value:function(){}},{key:"onEditableChange",value:function(){}},{key:"onInputEvent",value:function(t){}},{key:"onInputEventAfter",value:function(t){}},{key:"internallyEditable",get:function(){return this.getEditableFlag(y.bH.USER)&&this.getEditableFlag(y.bH.MANAGER)}},{key:"finishToolCreation",value:function(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}},{key:"_syncVisible",value:function(){if(this.initialized)if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}},{key:"_show",value:function(){this._updateManipulatorAttachment(),this.onShow()}},{key:"_hide",value:function(){this._updateManipulatorAttachment(),this.onHide()}},{key:"_updateManipulatorAttachment",value:function(){this.visible?this.manipulators.attach():this.manipulators.detach()}}]),e}(c.Z);(0,s._)([(0,v.Cb)({constructOnly:!0})],b.prototype,"view",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],b.prototype,"active",null),(0,s._)([(0,v.Cb)({value:!0})],b.prototype,"visible",null),(0,s._)([(0,v.Cb)({value:!0})],b.prototype,"editable",null),(0,s._)([(0,v.Cb)({readOnly:!0})],b.prototype,"manipulators",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],b.prototype,"updating",null),(0,s._)([(0,v.Cb)()],b.prototype,"cursor",null),(0,s._)([(0,v.Cb)({readOnly:!0})],b.prototype,"automaticManipulatorSelection",void 0),(0,s._)([(0,v.Cb)()],b.prototype,"hasFocusedManipulators",null),(0,s._)([(0,v.Cb)()],b.prototype,"hasGrabbedManipulators",void 0),(0,s._)([(0,v.Cb)()],b.prototype,"hasHoveredManipulators",void 0),(0,s._)([(0,v.Cb)()],b.prototype,"firstGrabbedManipulator",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],b.prototype,"created",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],b.prototype,"removeIncompleteOnCancel",void 0),b=(0,s._)([(0,d.j)("esri.views.interactive.InteractiveToolBase")],b)},74229:function(t,n,e){e.d(n,{AN:function(){return S},BS:function(){return T},Cf:function(){return E},M2:function(){return x},Mz:function(){return F},QY:function(){return Z},Xd:function(){return g},a9:function(){return b},bD:function(){return k},di:function(){return M},hM:function(){return R},kY:function(){return w},oq:function(){return C},zh:function(){return A}});var a=e(15671),i=e(43144),r=e(37762),o=e(1413),u=(e(59486),e(93169),e(84652)),l=e(16889),s=e(92026),c=e(17842),f=e(71353),h=e(79803),p=e(37818),v=e(74509),d=e(50951),y=e(20008),m=e(585);function g(t,n){return t.events.on("drag",function(t,n){var e=null,a=null;return function(i){if("cancel"!==i.action){var r={action:i.action,screenStart:i.start,screenEnd:i.screenPoint};"start"===i.action&&(0,s.Wi)(e)&&(e=new R,a=new R,n(t,e,a,i.pointerType,r)),(0,s.pC)(e)&&e.execute(r),"end"===i.action&&(0,s.pC)(e)&&(e=null,a=null)}else(0,s.pC)(a)&&(a.execute({action:"cancel"}),e=null,a=null)}}(t,n))}function x(t,n){var e,a=[t.x,t.y,null!==(e=t.z)&&void 0!==e?e:0],i=n,r=[Math.cos(i),Math.sin(i)],u=Math.sqrt(r[0]*r[0]+r[1]*r[1]);if(0===u)return null;r[0]/=u,r[1]/=u;var l=function(t){var n=(t.x-a[0])*r[0]+(t.y-a[1])*r[1];t.x=a[0]+n*r[0],t.y=a[1]+n*r[1]};return function(t){return l(t.mapStart),l(t.mapEnd),(0,o.Z)((0,o.Z)({},t),{},{axis:r})}}function b(t,n){var e=null;return function(a){if("start"===a.action&&(e=function(t,n,e){var a=t.geometry,i=(0,p.D)(n);if((0,s.Wi)(a))return null;if("mesh"===a.type)return function(t,n,e,a){if((0,s.pC)(n.transform))return function(t,n,e,a){var i=_(e.getOriginPoint(n.spatialReference),a),r=n.spatialReference;return(0,s.Wi)(i)?null:{move:function(n,a,o){var u=(0,y.pB)(i.clone(),n,a,o);if(u.spatialReference.equals(r))e.origin=(0,f.f)(u.x,u.y,u.z);else{var l=(0,h.iV)(u,r);(0,s.pC)(l)&&(e.origin=(0,f.f)(l.x,l.y,l.z))}t.notifyMeshTransformChanged(),t.notifyGeometryChanged()}}}(t,n,n.transform,e);if(!n.spatialReference.equals(e))return null;var i=0,r=0,o=0;return{move:function(e,u,l){var s=e-i,c=u-r,f=l-o;if(s||c||f){var h=new m.Z(n.origin.x+s,n.origin.y+c,n.origin.z+f,n.origin.spatialReference);n.centerAt(h,{geographic:a===d.JY.Global}),t.notifyGeometryChanged(),i=e,r=u,o=l}}}}(t,a,i,e);var r=_(a,i),o=a.spatialReference;return(0,s.Wi)(r)?null:{move:function(n,e,a){var i=(0,y.pB)(r.clone(),n,e,a);i.spatialReference.equals(o)?t.geometry=i:t.geometry=(0,h.iV)(i,o)}}}(t,a.mapStart.spatialReference,n)),(0,s.Wi)(e))return null;var i=a.mapEnd.x-a.mapStart.x,r=a.mapEnd.y-a.mapStart.y,u=a.mapEnd.z-a.mapStart.z;return e.move(i,r,u),(0,o.Z)((0,o.Z)({},a),{},{translationX:i,translationY:r,translationZ:u})}}function _(t,n){return(0,s.Wi)(t)?null:t.spatialReference.equals(n)?t.clone():(0,h.iV)(t,n)}function E(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2?arguments[2]:void 0,i=null,r=!(0,s.pC)(e)||null!==(n=t.spatialReference)&&void 0!==n&&n.equals(e)?function(t){return t}:function(t){return(0,s.pC)(t)?(0,h.iV)(t,e):t},u=(0,o.Z)({exclude:[]},a);return function(n){if("start"===n.action&&(i=r(t.toMap(n.screenStart,u))),(0,s.Wi)(i))return null;var e=r(t.toMap(n.screenEnd,u));return(0,s.pC)(e)?(0,o.Z)((0,o.Z)({},n),{},{mapStart:i,mapEnd:e}):null}}function C(t,n){var e=t.map((function(t){return(0,s.Wg)(b(t,n))})).filter((function(t){return(0,s.pC)(t)}));return function(t){var n=t.mapEnd.x-t.mapStart.x,a=t.mapEnd.y-t.mapStart.y,i=t.mapEnd.z-t.mapStart.z;return e.forEach((function(n){return n(t)})),(0,o.Z)((0,o.Z)({},t),{},{translationX:n,translationY:a,translationZ:i})}}function M(t,n){var e,a=new Map,i=(0,r.Z)(n);try{for(i.s();!(e=i.n()).done;){var o=e.value;a.set(o,(0,u.d9)(t[o]))}}catch(l){i.e(l)}finally{i.f()}return function(n){return a.forEach((function(n,e){t[e]=n})),n}}function k(t){return(0,s.pC)(t.geometry)&&"mesh"===t.geometry.type?function(t,n){var e=(0,s.pC)(n.transform)?n.transform.clone():null,a=n.vertexAttributes.clonePositional();return function(i){return n.transform=e,n.vertexAttributes=a,t.notifyGeometryChanged(),i}}(t,t.geometry):M(t,["geometry"])}function Z(t){var n=t.map((function(t){return(0,s.Wg)(k(t))})).filter((function(t){return(0,s.pC)(t)}));return function(t){return n.forEach((function(n){return n(t)})),t}}function S(){var t=0,n=0,e=0;return function(a){"start"===a.action&&(t=a.mapStart.x,n=a.mapStart.y,e=a.mapStart.z);var i=a.mapEnd.x-t,r=a.mapEnd.y-n,u=a.mapEnd.z-e;return t=a.mapEnd.x,n=a.mapEnd.y,e=a.mapEnd.z,(0,o.Z)((0,o.Z)({},a),{},{mapDeltaX:i,mapDeltaY:r,mapDeltaZ:u,mapDeltaSpatialReference:a.mapStart.spatialReference})}}function A(){var t=0,n=0;return function(e){"start"===e.action&&(t=e.screenStart.x,n=e.screenStart.y);var a=e.screenEnd.x-t,i=e.screenEnd.y-n;return t=e.screenEnd.x,n=e.screenEnd.y,(0,o.Z)((0,o.Z)({},e),{},{screenDeltaX:a,screenDeltaY:i})}}function w(t,n){var e=null,a=0,i=0;return function(r){var o;if("start"===r.action&&(null!=(e=null===(o=t.toScreen)||void 0===o?void 0:o.call(t,n))&&(e.x<0||e.x>t.width||e.y<0||e.y>t.height?e=null:(a=r.screenStart.x-e.x,i=r.screenStart.y-e.y))),null==e)return null;var u=(0,l.uZ)(r.screenEnd.x-a,0,t.width),s=(0,l.uZ)(r.screenEnd.y-i,0,t.height),f=(0,c.vW)(u,s);return r.screenStart=e,r.screenEnd=f,r}}var z=function(){},R=function(){function t(){(0,a.Z)(this,t),this.execute=z}return(0,i.Z)(t,[{key:"next",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new t;return(0,s.pC)(n)&&(this.execute=function(t){var a=n(t);(0,s.pC)(a)&&e.execute(a)}),e}}]),t}();function T(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("2d"===t.type)return function(t){return t};var a=null;return function(i){"start"===i.action&&(a=t.toMap(i.screenStart,{exclude:e}),(0,s.pC)(a)&&(a.z=(0,v.Ou)(a,t,n)));var r=t.toMap(i.screenEnd,{exclude:e});(0,s.pC)(r)&&(r.z=(0,v.Ou)(r,t,n));var u=(0,s.pC)(a)&&(0,s.pC)(r)?{sceneStart:a,sceneEnd:r}:null;return(0,o.Z)((0,o.Z)({},i),{},{scenePoints:u})}}function W(t,n,e){var a,i,r=null!==(a=(0,s.WG)(n.elevationProvider.getElevation(t.x,t.y,null!==(i=t.z)&&void 0!==i?i:0,t.spatialReference,"scene")))&&void 0!==a?a:0,o=(0,p.WG)(t);return o.z=r,o.hasZ=!0,o.z=(0,v.Ou)(o,n,e),o}function F(t,n){if("2d"===t.type)return function(t){return t};var e=null;return function(a){"start"===a.action&&(e=W(a.mapStart,t,n));var i=W(a.mapEnd,t,n),r=(0,s.pC)(e)&&(0,s.pC)(i)?{sceneStart:e,sceneEnd:i}:null;return(0,o.Z)((0,o.Z)({},a),{},{scenePoints:r})}}}}]);
//# sourceMappingURL=90170.8cd0b970.chunk.js.map
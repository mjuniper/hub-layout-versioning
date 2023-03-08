"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[98441],{16054:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(15671),a=n(43144),i=n(18759),u=function(){function e(t,n){(0,r.Z)(this,e),this._storage=new i.WJ,this._storage.maxSize=t,n&&this._storage.registerRemoveFunc("",n)}return(0,a.Z)(e,[{key:"put",value:function(e,t,n){this._storage.put(e,t,n,1)}},{key:"pop",value:function(e){return this._storage.pop(e)}},{key:"get",value:function(e){return this._storage.get(e)}},{key:"clear",value:function(){this._storage.clearAll()}},{key:"destroy",value:function(){this._storage.destroy()}},{key:"maxSize",get:function(){return this._storage.maxSize},set:function(e){this._storage.maxSize=e}}]),e}()},59877:function(e,t,n){n.d(t,{p:function(){return y}});var r=n(29439),a=n(37762),i=n(74165),u=n(15861),c=n(15671),o=n(43144),s=(n(93169),n(16054)),f=n(77427),h=n(92026),l=n(66978),d=n(68860),v=n(88152);function y(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;if(e){var n=t.elevationInfo,r=t.alignPointsInFeatures,a=t.spatialReference;return new g(n,r,a)}return new p}var p=function(){function e(){(0,c.Z)(this,e)}return(0,o.Z)(e,[{key:"alignCandidates",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifyElevationSourceChange",value:function(){}}]),e}(),g=function(){function e(t,n,r){(0,c.Z)(this,e),this._elevationInfo=t,this._alignPointsInFeatures=n,this.spatialReference=r,this._alignmentsCache=new s.Z(1024),this._cacheVersion=0,this._metersPerVerticalUnit=(0,d._R)(r)}return(0,o.Z)(e,[{key:"alignCandidates",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._elevationInfo,e.abrupt("return",(0,h.pC)(r)&&"absolute-height"===r.mode&&!r.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(t,r),t):this._alignComputedElevationCandidates(t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifyElevationSourceChange",value:function(){this._alignmentsCache.clear(),this._cacheVersion++}},{key:"_alignAbsoluteElevationCandidates",value:function(e,t){var n=t.offset,r=t.unit;if(!(0,h.Wi)(n)){var i,u=n*((0,v.Z7)(null!==r&&void 0!==r?r:"meters")/this._metersPerVerticalUnit),c=(0,a.Z)(e);try{for(c.s();!(i=c.n()).done;){var o=i.value;switch(o.type){case"edge":o.start.z+=u,o.end.z+=u;continue;case"vertex":o.target.z+=u;continue}}}catch(s){c.e(s)}finally{c.f()}}}},{key:"_alignComputedElevationCandidates",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(t,n){var u,c,o,s,h,d,v,y,p,g,_,Z,x,C,b,z,m;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=new Map,c=(0,a.Z)(t);try{for(c.s();!(o=c.n()).done;)s=o.value,(0,f.s1)(u,s.objectId,k).push(s)}catch(i){c.e(i)}finally{c.f()}return h=this._prepareQuery(u),d=(0,r.Z)(h,3),v=d[0],y=d[1],p=d[2],e.next=10,this._alignPointsInFeatures(v,n);case 10:if(g=e.sent,(0,l.k_)(n),p===this._cacheVersion){e.next=14;break}return e.abrupt("return",this._alignComputedElevationCandidates(t,n));case 14:this._applyCacheAndResponse(v,g,y),_=g.drapedObjectIds,Z=g.failedObjectIds,x=[],C=(0,a.Z)(t);try{for(C.s();!(b=C.n()).done;)z=b.value,m=z.objectId,_.has(m)&&"edge"===z.type&&(z.draped=!0),Z.has(m)||x.push(z)}catch(i){C.e(i)}finally{C.f()}return e.abrupt("return",x);case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_prepareQuery",value:function(e){var t,n=[],i=[],u=(0,a.Z)(e);try{for(u.s();!(t=u.n()).done;){var c,o=(0,r.Z)(t.value,2),s=o[0],f=o[1],h=[],l=(0,a.Z)(f);try{for(l.s();!(c=l.n()).done;){var d=c.value;this._addToQueriesOrCachedResult(s,d.target,h,i),"edge"===d.type&&(this._addToQueriesOrCachedResult(s,d.start,h,i),this._addToQueriesOrCachedResult(s,d.end,h,i))}}catch(v){l.e(v)}finally{l.f()}0!==h.length&&n.push({objectId:s,points:h})}}catch(v){u.e(v)}finally{u.f()}return[n,i,this._cacheVersion]}},{key:"_addToQueriesOrCachedResult",value:function(e,t,n,r){var a=Z(e,t),i=this._alignmentsCache.get(a);(0,h.pC)(i)?r.push(new _(t,i)):n.push(t)}},{key:"_applyCacheAndResponse",value:function(e,t,n){var r,i=t.elevations,u=t.drapedObjectIds,c=t.failedObjectIds,o=(0,a.Z)(n);try{for(o.s();!(r=o.n()).done;){r.value.apply()}}catch(b){o.e(b)}finally{o.f()}var s,f=0,h=this._alignmentsCache,l=(0,a.Z)(e);try{for(l.s();!(s=l.n()).done;){var d=s.value,v=d.objectId,y=d.points;if(c.has(v))f+=y.length;else{var p,g=!u.has(v),_=(0,a.Z)(y);try{for(_.s();!(p=_.n()).done;){var k=p.value,x=Z(v,k),C=i[f++];k.z=C,g&&h.put(x,C,1)}}catch(b){_.e(b)}finally{_.f()}}}}catch(b){l.e(b)}finally{l.f()}}}]),e}(),_=function(){function e(t,n){(0,c.Z)(this,e),this.point=t,this.z=n}return(0,o.Z)(e,[{key:"apply",value:function(){this.point.z=this.z}}]),e}();function Z(e,t){var n=t.x,r=t.y,a=t.z;return"".concat(e,"-").concat(n,"-").concat(r,"-").concat(null!==a&&void 0!==a?a:0,"}")}function k(){return[]}},53580:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(37762),a=n(15671),i=n(43144),u=(n(93169),function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,[{key:"filter",value:function(e,t){return t}},{key:"notifyElevationSourceChange",value:function(){}}]),e}()),c=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,[{key:"filter",value:function(e,t){var n=e.point,r=e.distance;if(null==n.z)return t;if(0===t.length)return t;var a=function(e){return"number"==typeof e?{x:e,y:e,z:e}:e}(r),i=this._updateCandidatesTo3D(t,n,a).filter(o);return i.sort(l),i}},{key:"_updateCandidatesTo3D",value:function(e,t,n){var a,i=(0,r.Z)(e);try{for(i.s();!(a=i.n()).done;){var u=a.value;switch(u.type){case"edge":f(u,t,n);continue;case"vertex":h(u,t,n);continue}}}catch(c){i.e(c)}finally{i.f()}return e}}]),e}();function o(e){return e.distance<=1}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?new c:new u}function f(e,t,n){var r=n.x,a=n.y,i=n.z,u=e.start,c=e.end,o=e.target;e.draped||function(e,t,n,r){var a=r.x-n.x,i=r.y-n.y,u=r.z-n.z,c=a*a+i*i+u*u,o=(t.x-n.x)*a+(t.y-n.y)*i+u*(t.z-n.z),s=Math.min(1,Math.max(0,o/c)),f=n.x+a*s,h=n.y+i*s,l=n.z+u*s;e.x=f,e.y=h,e.z=l}(o,t,u,c);var s=(t.x-o.x)/r,f=(t.y-o.y)/a,h=(t.z-o.z)/i;e.distance=Math.sqrt(s*s+f*f+h*h)}function h(e,t,n){var r=n.x,a=n.y,i=n.z,u=e.target,c=(t.x-u.x)/r,o=(t.y-u.y)/a,s=(t.z-u.z)/i,f=Math.sqrt(c*c+o*o+s*s);e.distance=f}function l(e,t){return e.distance-t.distance}},48817:function(e,t,n){n.d(t,{k:function(){return l}});var r=n(37762),a=n(74165),i=n(15861),u=n(15671),c=n(43144),o=(n(93169),n(84652)),s=n(16054),f=n(66978),h=n(643);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return e?new v(t):new d}var d=function(){function e(){(0,u.Z)(this,e)}return(0,c.Z)(e,[{key:"fetch",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"notifySymbologyChange",value:function(){}}]),e}(),v=function(){function e(t){(0,u.Z)(this,e),this._getSymbologyCandidates=t,this._candidatesCache=new s.Z(1024),this._cacheVersion=0}return(0,c.Z)(e,[{key:"fetch",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var i,u,c,s,h,l,d,v,p,g,_,Z,k,x,C,b,z,m,w,I,S;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return",[]);case 2:i=[],u=[],c=this._candidatesCache,s=(0,r.Z)(t);try{for(s.s();!(h=s.n()).done;)if(l=h.value,d=y(l),v=c.get(d)){p=(0,r.Z)(v);try{for(p.s();!(g=p.n()).done;)_=g.value,u.push((0,o.d9)(_))}catch(a){p.e(a)}finally{p.f()}}else i.push(l),c.put(d,[],1)}catch(a){s.e(a)}finally{s.f()}if(0!==i.length){e.next=7;break}return e.abrupt("return",u);case 7:return Z=this._cacheVersion,e.next=10,this._getSymbologyCandidates(i,n);case 10:if(k=e.sent,x=k.candidates,C=k.sourceCandidateIndices,(0,f.k_)(n),Z===this._cacheVersion){e.next=16;break}return e.abrupt("return",this.fetch(t,n));case 16:for(b=[],z=x.length,m=0;m<z;++m)w=x[m],I=y(i[C[m]]),(S=c.get(I)).push(w),c.put(I,S,S.length),b.push((0,o.d9)(w));return e.abrupt("return",u.concat(b));case 19:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"notifySymbologyChange",value:function(){this._candidatesCache.clear(),this._cacheVersion++}}]),e}();function y(e){switch(e.type){case"vertex":var t,n=e.objectId,r=e.target,a="".concat(n,"-vertex-").concat(r.x,"-").concat(r.y,"-").concat(null!==(t=r.z)&&void 0!==t?t:0);return(0,h.hP)(a).toString();case"edge":var i,u,c=e.objectId,o=e.start,s=e.end,f="".concat(c,"-edge-").concat(o.x,"-").concat(o.y,"-").concat(null!==(i=o.z)&&void 0!==i?i:0,"-to-").concat(s.x,"-").concat(s.y,"-").concat(null!==(u=s.z)&&void 0!==u?u:0);return(0,h.hP)(f).toString();default:return""}}}}]);
//# sourceMappingURL=98441.70f9d500.chunk.js.map
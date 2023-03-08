"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[80322],{80322:function(e,t,l){l.r(t),l.d(t,{I3STreeDebugger:function(){return d}});var i=l(15671),n=l(43144),r=l(60136),o=l(92572),s=l(27366),a=(l(59486),l(92026)),u=l(49861),c=(l(25243),l(63780),l(69912)),h=l(14226),p=l(81949),y=l(11186),b=l(71353),v=l(79803),f=l(87287),g=l(80885),d=function(e){(0,r.Z)(l,e);var t=(0,o.Z)(l);function l(e){return(0,i.Z)(this,l),t.call(this,e)}return(0,n.Z)(l,[{key:"getTiles",value:function(){var e=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,l=this.nodeSR;return e.map((function(e){return function(e,t,l){var i=e.serviceObb;if((0,a.Wi)(i)||(0,a.Wi)(t))return null;(0,h.F)(_,i.quaternion),(0,y.c)(m,i.center),(0,v.CM)(m,l,0,m,t,0,1),_[12]=m[0],_[13]=m[1],_[14]=m[2];var n=[[],[],[]];(0,y.c)(m,i.halfSize),(0,y.m)(m,m,_),(0,v.CM)(m,t,0,m,l,0,1),n[0].push([m[0],m[1]]),(0,y.c)(m,i.halfSize),m[0]=-m[0],(0,y.m)(m,m,_),(0,v.CM)(m,t,0,m,l,0,1),n[0].push([m[0],m[1]]),(0,y.c)(m,i.halfSize),m[0]=-m[0],m[1]=-m[1],(0,y.m)(m,m,_),(0,v.CM)(m,t,0,m,l,0,1),n[0].push([m[0],m[1]]),(0,y.c)(m,i.halfSize),m[1]=-m[1],(0,y.m)(m,m,_),(0,v.CM)(m,t,0,m,l,0,1),n[0].push([m[0],m[1]]),n[1].push(n[0][0]),n[1].push(n[0][1]),(0,y.c)(m,i.halfSize),m[0]=-m[0],m[2]=-m[2],(0,y.m)(m,m,_),(0,v.CM)(m,t,0,m,l,0,1),n[1].push([m[0],m[1]]),(0,y.c)(m,i.halfSize),m[2]=-m[2],(0,y.m)(m,m,_),(0,v.CM)(m,t,0,m,l,0,1),n[1].push([m[0],m[1]]),n[2].push(n[0][0]),n[2].push(n[0][3]),(0,y.c)(m,i.halfSize),m[1]=-m[1],m[2]=-m[2],(0,y.m)(m,m,_),(0,v.CM)(m,t,0,m,l,0,1),n[2].push([m[0],m[1]]),n[2].push(n[1][3]);var r=new g.Z({rings:n,spatialReference:l});return{lij:[e.level,e.childCount,0],label:e.id,geometry:r}}(e,t,l)})).filter(a.pC).sort((function(e,t){return e.lij[0]===t.lij[0]?e.label>t.label?-1:1:e.lij[0]-t.lij[0]}))}}]),l}(f.q);(0,s._)([(0,u.Cb)({constructOnly:!0})],d.prototype,"lv",void 0),(0,s._)([(0,u.Cb)({constructOnly:!0})],d.prototype,"nodeSR",void 0),d=(0,s._)([(0,c.j)("esri.views.3d.layers.support.I3STreeDebugger")],d);var _=(0,p.c)(),m=(0,b.c)()},87287:function(e,t,l){l.d(t,{q:function(){return m}});var i=l(15671),n=l(43144),r=l(60136),o=l(92572),s=l(27366),a=l(51995),u=l(52639),c=l(85015),h=l(16889),p=l(92026),y=l(49861),b=(l(25243),l(63780),l(69912)),v=l(62554),f=l(61459),g=l(58009),d=l(87037),_=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]],m=function(e){(0,r.Z)(l,e);var t=(0,o.Z)(l);function l(e){var n;return(0,i.Z)(this,l),(n=t.call(this,e)).updating=!1,n.enablePolygons=!0,n.enableLabels=!0,n._polygons=new Map,n._labels=new Map,n._enabled=!0,n}return(0,n.Z)(l,[{key:"initialize",value:function(){this._symbols=_.map((function(e){return new f.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})})),this.update()}},{key:"destroy",value:function(){this._enabled=!1,this.clear()}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled!==e&&(this._enabled=e,this.update())}},{key:"update",value:function(){var e=this;if(this._enabled){var t=this.getTiles(),l=new Array,i=new Set((this._labels.size,this._labels.keys()));t.forEach((function(n,r){var o=n.lij.toString();i.delete(o);var s=n.lij[0],c=n.geometry;if(e.enablePolygons&&!e._polygons.has(o)){var y=new u.Z({geometry:c,symbol:e._symbols[s%e._symbols.length]});e._polygons.set(o,y),l.push(y)}if(e.enableLabels){var b=function(e){if((0,p.pC)(e.label))return e.label;var t=e.lij.toString();return(0,p.pC)(e.loadPriority)&&(t+=" (".concat(e.loadPriority,")")),t}(n),f=r/(t.length-1),_=(0,h.t7)(0,200,f),m=(0,h.t7)(20,6,f)/.75,w=(0,p.pC)(n.loadPriority)&&n.loadPriority>=t.length,C=new a.Z([_,w?0:_,w?0:_]),S="3d"===e.view.type?function(){return new v.Z({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new d.Z({text:b,halo:{color:"white",size:1/.75},material:{color:C},size:m})]})}:function(){return new g.Z({text:b,haloColor:"white",haloSize:1/.75,color:C,size:m})},Z=e._labels.get(o);if(Z){var M=S();((0,p.Wi)(Z.symbol)||JSON.stringify(M)!==JSON.stringify(Z.symbol))&&(Z.symbol=M)}else{var k=new u.Z({geometry:c.extent.center,symbol:S()});e._labels.set(o,k),l.push(k)}}}));var n=new Array;i.forEach((function(t){var l=e._polygons.get(t);null!=l&&(n.push(l),e._polygons.delete(t));var i=e._labels.get(t);null!=i&&(n.push(i),e._labels.delete(t))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(l)}else this.clear()}},{key:"clear",value:function(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}}]),l}(c.Z);(0,s._)([(0,y.Cb)({constructOnly:!0})],m.prototype,"view",void 0),(0,s._)([(0,y.Cb)({readOnly:!0})],m.prototype,"updating",void 0),(0,s._)([(0,y.Cb)()],m.prototype,"enabled",null),m=(0,s._)([(0,b.j)("esri.views.support.TileTreeDebugger")],m)}}]);
//# sourceMappingURL=80322.e0772677.chunk.js.map
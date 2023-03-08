"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[38978],{77372:function(r,n,t){t.d(n,{Z:function(){return _}});var e=t(15671),i=t(43144),o=t(60136),a=t(92572),u=t(27366),c=(t(59486),t(11582)),s=t(17768),l=t(46784),d=t(92026),f=t(49861),g=t(89125),p=(t(63780),t(69912)),v=t(25243),h=t(96866),b=t(585),m=function(r){(0,o.Z)(t,r);var n=(0,a.Z)(t);function t(r){var i;return(0,e.Z)(this,t),(i=n.call(this,r)).type="plane",i.position=null,i.heading=0,i.tilt=0,i.width=10,i.height=10,i}return(0,i.Z)(t,[{key:"equals",value:function(r){return this.heading===r.heading&&this.tilt===r.tilt&&(0,d._W)(this.position,r.position)&&this.width===r.width&&this.height===r.height}}]),t}((0,c.J)(l.wq));(0,u._)([(0,f.Cb)({readOnly:!0,json:{read:!1,write:!0}})],m.prototype,"type",void 0),(0,u._)([(0,f.Cb)({type:b.Z}),(0,h.B)()],m.prototype,"position",void 0),(0,u._)([(0,f.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,h.B)(),(0,g.p)((function(r){return s.BV.normalize((0,v.q9)(r),0,!0)}))],m.prototype,"heading",void 0),(0,u._)([(0,f.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,h.B)(),(0,g.p)((function(r){return s.BV.normalize((0,v.q9)(r),0,!0)}))],m.prototype,"tilt",void 0),(0,u._)([(0,f.Cb)({type:Number,nonNullable:!0}),(0,h.B)()],m.prototype,"width",void 0),(0,u._)([(0,f.Cb)({type:Number,nonNullable:!0}),(0,h.B)()],m.prototype,"height",void 0);var _=m=(0,u._)([(0,p.j)("esri.analysis.SlicePlane")],m)},11316:function(r,n,t){t.d(n,{S:function(){return g},b:function(){return f}});var e,i,o=t(30168),a=t(41012),u=t(95276),c=t(58406),s=t(98634),l=t(64201),d=t(4760);function f(r){var n=new l.kG;n.extensions.add("GL_OES_standard_derivatives");var t=n.vertex,f=n.fragment,g=n.attributes,p=n.varyings;return(0,a.Sv)(t,r),g.add(d.T.POSITION,"vec3"),g.add(d.T.UV0,"vec2"),p.add("vUV","vec2"),t.code.add((0,s.H)(e||(e=(0,o.Z)(["void main(void) {\nvUV = uv0;\ngl_Position = proj * view * vec4(position, 1.0);\n}"])))),f.uniforms.add([new u.N("backgroundColor",(function(r){return r.backgroundColor})),new u.N("gridColor",(function(r){return r.gridColor})),new c.p("gridWidth",(function(r){return r.gridWidth}))]),f.code.add((0,s.H)(i||(i=(0,o.Z)(["void main() {\nconst float LINE_WIDTH = 1.0;\nvec2 uvScaled = vUV * gridWidth;\nvec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\nvec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\ngrid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\ngrid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\nfloat gridFade = max(grid.x, grid.y);\nfloat gridAlpha = gridColor.a * gridFade;\ngl_FragColor =\nvec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\nvec4(gridColor.rgb, 1.0) * gridAlpha;\n}"])))),n}var g=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},96866:function(r,n,t){t.d(n,{B:function(){return v}});var e=t(74165),i=t(15861),o=t(1413),a=t(37762),u=t(80292),c=t(35995),s=t(71907),l=t(33397),d=t(25265),f=t(49861),g=t(22892),p=t(53283);function v(r){var n,t=null!==(n=null===r||void 0===r?void 0:r.origins)&&void 0!==n?n:[void 0];return function(n,e){var i,s=function(r,n,t){var e;if("resource"===(null===r||void 0===r?void 0:r.type))return function(r,n,t){var e=(0,l.Oe)(n,t);return{type:String,read:function(r,n,t){var i=(0,p.r)(r,n,t);return e.type===String?i:"function"==typeof e.type?new e.type({url:i}):void 0},write:{writer:function(n,i,a,s){if(!s||!s.resources)return"string"==typeof n?void(i[a]=(0,p.t)(n,s)):void(i[a]=n.write({},s));var l=function(r){return null==r?null:"string"==typeof r?r:r.url}(n),f=(0,p.t)(l,(0,o.Z)((0,o.Z)({},s),{},{verifyItemRelativeUrls:s&&s.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),p.M.NO),v=e.type!==String&&(!(0,u.l)(this)||s&&s.origin&&this.originIdOf(t)>(0,d.M9)(s.origin)),_={object:this,propertyName:t,value:n,targetUrl:f,dest:i,targetPropertyName:a,context:s,params:r};s&&s.portalItem&&f&&!(0,c.YP)(f)?v?function(r){var n,t=r.context,e=r.targetUrl,i=r.params,a=r.value,u=r.dest,s=r.targetPropertyName;if(!t.portalItem)return;var l=t.portalItem.resourceFromPath(e),d=m(a,e,t),f=(0,g.B)(d),p=(0,c.Ml)(l.path),v=null!==(n=null===i||void 0===i?void 0:i.compress)&&void 0!==n&&n;f===p?(t.resources&&b((0,o.Z)((0,o.Z)({},r),{},{resource:l,content:d,compress:v,updates:t.resources.toUpdate})),u[s]=e):h(r)}(_):function(r){var n=r.context,t=r.targetUrl,e=r.dest,i=r.targetPropertyName;n.portalItem&&n.resources&&(n.resources.toKeep.push({resource:n.portalItem.resourceFromPath(t),compress:!1}),e[i]=t)}(_):s&&s.portalItem&&(null==f||null!=(0,p.i)(f)||(0,c.jc)(f)||v)?h(_):i[a]=f}}}}(r,n,t);switch(null!==(e=null===r||void 0===r?void 0:r.type)&&void 0!==e?e:"other"){case"other":return{read:!0,write:!0};case"url":return{read:p.a.read,write:p.a.write}}}(r,n,e),v=(0,a.Z)(t);try{for(v.s();!(i=v.n()).done;){var _=i.value,y=(0,f.CJ)(n,_,e);for(var w in s)y[w]=s[w]}}catch(M){v.e(M)}finally{v.f()}}}function h(r){var n,t,e,i=r.targetUrl,a=r.params,u=r.value,l=r.context,d=r.dest,f=r.targetPropertyName;if(l.portalItem){var v=(0,p.p)(i),h=null!==(n=null===v||void 0===v?void 0:v.filename)&&void 0!==n?n:(0,s.D)(),y=null!==(t=null===a||void 0===a?void 0:a.prefix)&&void 0!==t?t:null===v||void 0===v?void 0:v.prefix,w=m(u,i,l),M=(0,c.v_)(y,h),O="".concat(M,".").concat((0,g.B)(w)),T=l.portalItem.resourceFromPath(O);(0,c.jc)(i)&&l.resources&&l.resources.pendingOperations.push(function(r){return _.apply(this,arguments)}(i).then((function(r){T.path="".concat(M,".").concat((0,g.B)(r)),d[f]=T.itemRelativeUrl})).catch((function(){})));var W=null!==(e=null===a||void 0===a?void 0:a.compress)&&void 0!==e&&e;l.resources&&b((0,o.Z)((0,o.Z)({},r),{},{resource:T,content:w,compress:W,updates:l.resources.toAdd})),d[f]=T.itemRelativeUrl}}function b(r){var n=r.object,t=r.propertyName,e=r.updates,i=r.resource,o=r.content,a=r.compress;e.push({resource:i,content:o,compress:a,finish:function(r){!function(r,n,t){"string"==typeof r[n]?r[n]=t.url:r[n].url=t.url}(n,t,r)}})}function m(r,n,t){return"string"==typeof r?{url:n}:new Blob([JSON.stringify(r.toJSON(t))],{type:"application/json"})}function _(){return(_=(0,i.Z)((0,e.Z)().mark((function r(n){var i,o,a;return(0,e.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(t.bind(t,76200));case 2:return i=r.sent.default,r.next=5,i(n,{responseType:"blob"});case 5:return o=r.sent,a=o.data,r.abrupt("return",a);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},22892:function(r,n,t){t.d(n,{B:function(){return i}});var e=t(35995);function i(r){return o[function(r){return r instanceof Blob?r.type:function(r){var n=(0,e.Ml)(r);return c[n]||a}(r.url)}(r)]||u}var o={},a="text/plain",u=o[a],c={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(var s in c)o[c[s]]=s},3319:function(r,n,t){t.d(n,{A:function(){return T},Ck:function(){return v},DG:function(){return B},Fj:function(){return m},GI:function(){return s},Lj:function(){return U},MO:function(){return V},MP:function(){return H},N3:function(){return g},Ox:function(){return P},SV:function(){return h},Vj:function(){return b},Wg:function(){return L},X3:function(){return C},ZE:function(){return I},a$:function(){return k},am:function(){return l},cU:function(){return Z},fe:function(){return d},go:function(){return p},hf:function(){return M},kM:function(){return N},kq:function(){return w},lY:function(){return W},nw:function(){return E},on:function(){return S},q7:function(){return y},q_:function(){return A},t:function(){return j},tW:function(){return c},uT:function(){return D},vh:function(){return R},wk:function(){return O},xJ:function(){return f},zI:function(){return x}});var e=t(93433),i=t(93169),o=t(16889),a=t(71353),u=t(67077),c=(0,i.Z)("mac")?"Meta":"Control",s="Shift",l=2,d=1.15,f=1.15,g=2500,p=.02,v=Math.cos((0,o.Vl)(45)),h=Math.cos((0,o.Vl)(5)),b=.95,m=.3,_=(0,a.f)(1,.5,0),y=2,w=1,M=(0,u.b)([].concat((0,e.Z)(_),[.7])),O=[0,0,0,.04],T=(0,u.b)([].concat((0,e.Z)(_),[.5])),W=(0,u.f)(1,1,1,1),I=(0,u.f)(1,.8,.6,1),Z=(0,u.f)(1,.93,.86,1),C=(0,u.b)([].concat((0,e.Z)(_),[1])),E=(0,u.b)([].concat((0,e.Z)(_),[1])),A=3,P=11,N=22.5,R=40,k=48,S=2.25,L=(0,u.b)([].concat((0,e.Z)(_),[1])),V=4,U=1,x=.3,j=6,D=4,B=1600,H=.4},38978:function(r,n,t){t.d(n,{do:function(){return Fr},Df:function(){return qr},lX:function(){return Gr},aZ:function(){return Br},ww:function(){return Hr},zY:function(){return _r},Lw:function(){return Cr},fT:function(){return br},R_:function(){return Rr},i3:function(){return Nr},j6:function(){return pr},vw:function(){return kr},Ju:function(){return Pr},Rd:function(){return yr},Pt:function(){return Ar},TA:function(){return mr},J0:function(){return Er},lR:function(){return Jr},Hq:function(){return Vr},m3:function(){return jr},oP:function(){return Dr},Sc:function(){return Xr},vc:function(){return Qr},Q3:function(){return hr},EC:function(){return Mr},A5:function(){return Or},wj:function(){return Tr},tF:function(){return wr}});var e=t(1413),i=t(93433),o=t(29439),a=(t(59486),t(77372)),u=(t(93169),t(32718)),c=t(16889),s=t(92026),l=t(17842),d=t(14226),f=t(81949),g=t(48976),p=t(11186),v=t(71353),h=t(79803),b=t(14320),m=t(82218),_=t(55652),y=t(40885),w=t(40927),M=t(51378),O=t(3319),T=t(33906),W=t(35284),I=t(83639),Z=t(40508),C=t(33837),E=t(15671),A=t(43144),P=t(60136),N=t(92572),R=t(90045),k=t(67077),S=t(52168),L=t(70619),V=t(56529),U=t(37081),x=t(33559),j=t(23620),D=t(93822),B=t(12594),H=t(64642),F=t(11983),G=t(98634),q=t(82144),z=t(31132),Y=t(7566),X=t(27627),Q=t(11316),J=t(8548),K=t(36207),$=function(r){(0,P.Z)(t,r);var n=(0,N.Z)(t);function t(){var r;return(0,E.Z)(this,t),(r=n.apply(this,arguments)).backgroundColor=(0,k.f)(1,0,0,.5),r.gridColor=(0,k.f)(0,1,0,.5),r.gridWidth=4,r}return(0,A.Z)(t)}(G.K),rr=function(r){(0,P.Z)(t,r);var n=(0,N.Z)(t);function t(){return(0,E.Z)(this,t),n.apply(this,arguments)}return(0,A.Z)(t,[{key:"initializeProgram",value:function(r){return new X.$(r.rctx,t.shader.get().build(this.configuration),Y.i)}},{key:"initializePipeline",value:function(){return(0,K.sm)({blending:(0,K.wK)(J.zi.ONE,J.zi.ONE,J.zi.ONE_MINUS_SRC_ALPHA,J.zi.ONE_MINUS_SRC_ALPHA),depthTest:{func:J.wb.LESS},colorWrite:K.BK})}}]),t}(z.A);rr.shader=new q.J(Q.S,(function(){return t.e(18492).then(t.bind(t,18492))}));var nr,tr,er=function(r){(0,P.Z)(t,r);var n=(0,N.Z)(t);function t(r){var e;return(0,E.Z)(this,t),(e=n.call(this,r,new or))._configuration=new x.m,e}return(0,A.Z)(t,[{key:"createBufferWriter",value:function(){return new B.G(H.W1)}},{key:"requiresSlot",value:function(r,n){return n===U.H.Color&&r===D.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL}},{key:"createGLMaterial",value:function(r){return new ir(r)}},{key:"getConfiguration",value:function(){return this._configuration}}]),t}(F.c),ir=function(r){(0,P.Z)(t,r);var n=(0,N.Z)(t);function t(r){var e;return(0,E.Z)(this,t),(e=n.call(this,r)).ensureTechnique(rr,null),e}return(0,A.Z)(t,[{key:"beginSlot",value:function(){return(0,s.Wg)(this.technique)}}]),t}(j.Z),or=function(r){(0,P.Z)(t,r);var n=(0,N.Z)(t);function t(){var r;return(0,E.Z)(this,t),(r=n.apply(this,arguments)).renderOccluded=V.yD.Occlude,r}return(0,A.Z)(t)}($),ar=function(r){(0,P.Z)(t,r);var n=(0,N.Z)(t);function t(r){var e;return(0,E.Z)(this,t),(e=n.call(this,r))._material=null,e._renderOccluded=V.yD.OccludeAndTransparent,e._gridWidth=1,e._gridColor=(0,k.f)(1,0,0,1),e._backgroundColor=(0,k.f)(1,0,0,1),e.applyProps(r),e}return(0,A.Z)(t,[{key:"renderOccluded",get:function(){return this._renderOccluded},set:function(r){r!==this._renderOccluded&&(this._renderOccluded=r,this._updateMaterial())}},{key:"gridWidth",get:function(){return this._gridWidth},set:function(r){this._gridWidth!==r&&(this._gridWidth=r,this._updateMaterial())}},{key:"gridColor",get:function(){return this._gridColor},set:function(r){(0,R.c)(this._gridColor,r),this._updateMaterial()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){(0,R.c)(this._backgroundColor,r),this._updateMaterial()}},{key:"createExternalResources",value:function(){this._material=new er(this._materialParameters)}},{key:"destroyExternalResources",value:function(){this._material=null}},{key:"forEachExternalMaterial",value:function(r){(0,s.pC)(this._material)&&r(this._material)}},{key:"createGeometries",value:function(r){if((0,s.pC)(this._material)){var n=(0,L.g7)(this._material);r.addGeometry(n)}}},{key:"_materialParameters",get:function(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded}}},{key:"_updateMaterial",value:function(){(0,s.pC)(this._material)&&this._material.setParameters(this._materialParameters)}}]),t}(S._),ur=t(17539),cr=t(81703),sr=t(68401),lr=t(66832),dr=t(24231),fr=t(58901),gr=t(99034);t(53866);function pr(r,n,t,e,i,o,a,u){return function(r,n,t,e,i,o){var a=(0,p.e)(r,n),u=M.WM.get(),c=M.WM.get();switch(e===Hr.HORIZONTAL_OR_VERTICAL?Math.abs(a)>O.Ck?Hr.HORIZONTAL:Hr.VERTICAL:e){case Hr.VERTICAL:var s=Math.abs(a)<=O.SV?r:t.viewUp;(0,p.f)(u,s,n),(0,p.c)(c,n);break;case Hr.HORIZONTAL:(0,p.f)(u,t.viewUp,n),(0,p.f)(c,n,u);break;case Hr.TILTED:var l=Math.abs(a)<=O.SV?n:t.viewUp;(0,p.f)(u,l,r),(0,p.f)(c,r,u)}var d=(0,p.f)(M.WM.get(),u,c);(0,p.e)(d,t.viewForward)>0&&(0,p.g)(c,c,-1),(0,p.n)(i,u),(0,p.n)(o,c)}(n,a.worldUpAtPosition(r,M.WM.get()),i,o,u.basis1,u.basis2),(0,p.g)(u.basis1,u.basis1,t),(0,p.g)(u.basis2,u.basis2,e),(0,p.c)(u.origin,r),(0,_.my)(u.basis2,u.basis1,u.origin,u.plane),u}function vr(r,n,t){var e=n.worldUpAtPosition(r.origin,M.WM.get()),i=r.basis1,o=Ur(r,e),a=Math.round(o/Yr)*Yr;return(0,m.r)(r,a-o,i,t)}function hr(r,n,t,e,i,o){var a=(0,p.c)(M.WM.get(),i.origin);(0,p.a)(a,a,(0,p.g)(M.WM.get(),i.basis1,r.direction[0]<0?1:-1)),(0,p.a)(a,a,(0,p.g)(M.WM.get(),i.basis2,r.direction[1]<0?1:-1));var u=(0,p.l)(i.basis1),c=(0,p.l)(i.basis2),s=(0,p.b)(M.WM.get(),t,a),l=(0,p.b)(M.WM.get(),n,a),d=0,f=0;if(Er(r)){var g=Cr(i),v=Cr(o);d=u-.5*r.direction[0]*(0,p.e)(i.basis1,l)/u,f=c-.5*r.direction[1]*(0,p.e)(i.basis2,l)/c;var h=v/g;d*=h,f*=h}var b=d+.5*r.direction[0]*(0,p.e)(i.basis1,s)/u,_=f+.5*r.direction[1]*(0,p.e)(i.basis2,s)/c,y=(0,p.g)(M.WM.get(),i.basis1,b/u),w=(0,p.g)(M.WM.get(),i.basis2,_/c);(b<=0||Ir(o.origin,y,e)<=O.DG)&&(0,p.c)(y,o.basis1),(_<=0||Ir(o.origin,w,e)<=O.DG)&&(0,p.c)(w,o.basis2);var T=(0,p.c)(M.WM.get(),a);return(0,p.a)(T,T,(0,p.g)(M.WM.get(),y,r.direction[0]<0?-1:1)),(0,p.a)(T,T,(0,p.g)(M.WM.get(),w,r.direction[1]<0?-1:1)),(0,m.f)(T,y,w,o)}function br(r,n){return O.MP*Math.min(n.width,n.height)*n.computeRenderPixelSizeAt(r)}function mr(r,n,t,e){var i=(0,p.f)(M.WM.get(),n,t);return(0,p.f)(i,i,n),(0,_.Yq)(r,i,e)}function _r(r,n){return(0,I.Aq)(r.basis1,r.basis2,r.origin,n)}function yr(r,n,t,e){var i=n.worldUpAtPosition(r.origin,M.WM.get()),o=M.WM.get();switch(t){case Br.HEADING:(0,p.c)(o,i);break;case Br.TILT:(0,p.c)(o,r.basis1)}return(0,_.Yq)(r.origin,o,e)}function wr(r,n,t,e){var i=Wr(t,nr.NEGATIVE_X),a=M.MP.get();(0,d.o)(a,n,i.edge*Math.PI/2);var u=(0,p.n)(M.WM.get(),i.basis),c=(0,p.g)(M.WM.get(),u,i.direction*e.computeScreenPixelSizeAt(i.position)*O.vh);(0,p.a)(c,c,i.position);var s=e.projectToRenderScreen(c,(0,l.Wv)(M.WM.get())),f=function(r,n){var t=(0,o.Z)(r.viewport,4),e=t[0],i=t[1],a=t[2],u=t[3],c=Math.min(a,u)/16,s=!0;return n[0]<e+c?(n[0]=e+c,s=!1):n[0]>e+a-c&&(n[0]=e+a-c,s=!1),n[1]<i+c?(n[1]=i+c,s=!1):n[1]>i+u-c&&(n[1]=i+u-c,s=!1),s}(e,s);(0,cr.Bh)(e,s,zr),(0,p.n)(zr.direction,zr.direction);var g=M.WM.get();!f&&(0,m.i)(t,zr,g)&&(c=g),a[12]=0,a[13]=0,a[14]=0,r.modelTransform=a,r.renderLocation=(0,v.a)(c),f?r.state|=qr:r.state&=~qr}function Mr(r,n,t,e){var i=(0,p.l)(e.basis1),o=(0,p.l)(e.basis2),a=Zr(e),u=Cr(e),c=(0,p.s)(M.WM.get(),0,0,0);(0,p.a)(c,(0,p.g)(M.WM.get(),e.basis1,n.direction[0]),(0,p.g)(M.WM.get(),e.basis2,n.direction[1])),(0,p.a)(c,e.origin,c);var s=0,l=1;if(Er(n))1===n.direction[0]&&-1===n.direction[1]?s=Yr:1===n.direction[0]&&1===n.direction[1]?s=Math.PI:-1===n.direction[0]&&1===n.direction[1]&&(s=3*Math.PI/2),l=u;else{var f=0!==n.direction[0]?1:2;s=1===f?Yr:0,l=(1===f?o:i)-a}var g=(0,d.b)(M.MP.get(),s);(0,d.k)(g,g,(0,p.s)(M.WM.get(),l,l,l)),(0,d.m)(g,t,g),g[12]=0,g[13]=0,g[14]=0,r.modelTransform=g,r.renderLocation=c}function Or(r,n,t,e){var i=e.worldUpAtPosition(t.origin,M.WM.get()),o=Wr(t,nr.POSITIVE_X),a=(0,d.b)(M.MP.get(),o.edge*Math.PI/2);(0,d.r)(a,a,-Ur(t,i)),(0,d.m)(a,n,a),a[12]=0,a[13]=0,a[14]=0,r.modelTransform=a,r.renderLocation=o.position}function Tr(r,n,t){var e=Wr(t,nr.POSITIVE_Y),i=(0,d.b)(M.MP.get(),e.edge*Math.PI/2);(0,d.r)(i,i,Yr),(0,d.m)(i,n,i),i[12]=0,i[13]=0,i[14]=0,r.modelTransform=i,r.renderLocation=e.position}function Wr(r,n){switch(n){case nr.POSITIVE_X:return{basis:r.basis1,direction:1,position:(0,p.a)(M.WM.get(),r.origin,r.basis1),edge:n};case nr.POSITIVE_Y:return{basis:r.basis2,direction:1,position:(0,p.a)(M.WM.get(),r.origin,r.basis2),edge:n};case nr.NEGATIVE_X:return{basis:r.basis1,direction:-1,position:(0,p.b)(M.WM.get(),r.origin,r.basis1),edge:n};case nr.NEGATIVE_Y:return{basis:r.basis2,direction:-1,position:(0,p.b)(M.WM.get(),r.origin,r.basis2),edge:n}}}function Ir(r,n,t){var e=t.projectToRenderScreen((0,p.a)(M.WM.get(),r,n),(0,l.Wv)(M.WM.get())),i=t.projectToRenderScreen((0,p.b)(M.WM.get(),r,n),(0,l.Wv)(M.WM.get()));return(0,p.p)((0,p.b)(e,e,i))}function Zr(r){var n=(0,p.l)(r.basis1),t=(0,p.l)(r.basis2);return O.zI*Math.min(n,t)}function Cr(r){return Zr(r)}function Er(r){return 0!==r.direction[0]&&0!==r.direction[1]}function Ar(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gr.CENTER_ON_ARROW,t=n===Gr.CENTER_ON_CALLOUT?O.vh:0,e=[(0,v.f)(t,0,-O.a$/2),(0,v.f)(t,0,O.a$/2)],o=Lr(e,!0),a=function(r,n){return Sr(e,r,n)},u=a(0,!1),c=a(O.on,!0),s=new dr.Y({color:O.X3,renderOccluded:V.yD.OccludeAndTransparent}),l=(0,L.rh)(s,[[t,0,0],[t-O.vh,0,0]]),d=(0,L.rh)(s,[[t,0,0],[t-O.vh,0,0]]);return new W.Z({view:r,renderObjects:[].concat((0,i.Z)(u.normal.map((function(r){return new Z.r(r,gr.Q9.Unfocused|Fr)}))),(0,i.Z)(c.normal.map((function(r){return new Z.r(r,gr.Q9.Unfocused|Fr)}))),[new Z.r(l,gr.Q9.Unfocused|Fr|qr)],(0,i.Z)(u.focused.map((function(r){return new Z.r(r,gr.Q9.Focused|Fr)}))),(0,i.Z)(c.focused.map((function(r){return new Z.r(r,gr.Q9.Focused|Fr)}))),[new Z.r(d,gr.Q9.Focused|Fr|qr)]),autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[o]},collisionPriority:1,radius:O.Ox,state:Fr})}function Pr(r,n){var t=(0,I.Ju)(r,{customStateMask:Fr,texture:n});return t.state=Fr,t}function Nr(r){return new C.r({view:r,attached:!1,color:O.hf,width:O.kq,writeDepthEnabled:!1,renderOccluded:V.yD.OccludeAndTransparent,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]]})}function Rr(r){return new ar({view:r,attached:!1,backgroundColor:(0,i.Z)(O.wk),gridColor:O.A,gridWidth:4,renderOccluded:V.yD.OccludeAndTransparent})}function kr(r,n){var t=Er(n),i=t?[(0,v.f)(1,0,0),(0,v.f)(0,0,0),(0,v.f)(0,1,0)]:[(0,v.f)(1,0,0),(0,v.f)(-1,0,0)],o=O.Wg,a=t?O.MO:O.Lj,u=a*O.am,c=O.Lj,s=function(r){return r>1?function(r){return new fr.U({color:o,width:r,renderOccluded:V.yD.OccludeAndTransparent})}(r):new dr.Y({color:o,renderOccluded:V.yD.OccludeAndTransparent})},l=[new Z.r((0,L.rh)(s(a),i),gr.Q9.Unfocused|Xr),new Z.r((0,L.rh)(s(u),i),gr.Q9.Focused|Xr),new Z.r((0,L.rh)(s(c),i),Qr)],d=new W.Z((0,e.Z)({view:r,renderObjects:l,collisionType:{type:"line",paths:[i]},radius:t?O.t:O.uT},I.X9));return d.state=Xr,d}function Sr(r,n,t){var e=new lr.E({color:O.lY,cullFace:sr.Vr.Back,renderOccluded:V.yD.Opaque}),i=new lr.E({color:O.ZE,cullFace:sr.Vr.Back,renderOccluded:V.yD.Opaque}),o=new lr.E({color:O.cU,cullFace:sr.Vr.Back,renderOccluded:V.yD.Opaque}),a=new lr.E({color:O.nw,transparent:!0,writeDepth:!1,cullFace:sr.Vr.Front,renderOccluded:V.yD.Transparent}),u=function(u){r=r.slice(0);var c=(0,p.b)(M.WM.get(),r[0],r[1]);(0,p.n)(c,c);var s=(0,p.b)(M.WM.get(),r[r.length-1],r[r.length-2]);if((0,p.n)(s,s),n>0){var l=(0,p.g)((0,v.c)(),s,-n);r[r.length-1]=(0,p.a)(l,l,r[r.length-1]);var h=(0,p.g)((0,v.c)(),c,-n);r[0]=(0,p.a)(h,h,r[0])}var b=u?O.xJ:1,m=O.kM*b,_=O.Ox*b,y=(0,d.i)(M.MP.get());if(n>0){var w=m/4,T=(0,p.s)(M.WM.get(),0,w,0),W=1+n/w;(0,d.w)(y,y,T),(0,d.k)(y,y,(0,p.s)(M.WM.get(),W,W,W)),(0,d.w)(y,y,(0,p.g)(T,T,-1/W))}var I=(0,d.i)((0,f.c)()),Z=(0,v.f)(0,1,0),C=(0,d.F)((0,f.c)(),(0,g.r)(M.vD.get(),Z,s));C[12]=r[r.length-1][0],C[13]=r[r.length-1][1],C[14]=r[r.length-1][2],(0,d.m)(C,C,y);var E=function(r,n,t){for(var e=[],i=12,o=0;o<i;o++){var a=o/i*2*Math.PI;e.push([Math.cos(a)*r,Math.sin(a)*r])}return(0,L.x2)(t,e,n,[],[],!1)}(O.q_*(u?O.fe:1)+n,r,t?a:o);E.transformation=I;var A=[E],P=(0,L.QL)(t?a:e,m,_,24,!1,!1,!0);P.transformation=C,A.push(P);var N=(0,L.QL)(t?a:i,m,_,24,!1,!0,!1);N.transformation=C,A.push(N);var R=(0,d.F)((0,f.c)(),(0,g.r)(M.vD.get(),Z,c));return R[12]=r[0][0],R[13]=r[0][1],R[14]=r[0][2],(0,d.m)(R,R,y),A.push(P.instantiate({transformation:R})),A.push(N.instantiate({transformation:R})),A};return{normal:u(!1),focused:u(!0)}}function Lr(r,n){var t=(0,p.b)((0,v.c)(),r[r.length-1],r[r.length-2]);if((0,p.n)(t,t),(0,p.g)(t,t,O.kM),(0,p.a)(t,t,r[r.length-1]),n){var e=(0,p.b)((0,v.c)(),r[0],r[1]);return(0,p.n)(e,e),(0,p.g)(e,e,O.kM),(0,p.a)(e,e,r[0]),[e].concat((0,i.Z)(r),[t])}return[].concat((0,i.Z)(r),[t])}function Vr(r,n,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.Z;if((0,s.Wi)(r))return null;var i=n.renderCoordsHelper,o=i.fromRenderCoords(r.origin,n.spatialReference);if((0,s.Wi)(o))return null;var u=(0,h.fM)(o,t);if((0,s.Wi)(u))return null;e.position=u;var l=2*(0,p.l)(r.basis1),d=2*(0,p.l)(r.basis2),f=ur.Z.renderUnitScaleFactor(n.spatialReference,t);e.width=l*f,e.height=d*f;var g=i.worldUpAtPosition(r.origin,M.WM.get());return e.tilt=(0,c.BV)(Ur(r,g)),e.heading=i.headingAtPosition(r.origin,r.basis1)-90,e}function Ur(r,n){return(0,w.cp)(n,r.basis2,r.basis1)+Yr}function xr(r,n,t,e,i,o){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:(0,m.a)();return o.toRenderCoords(r,a.origin)?(o.worldBasisAtPosition(a.origin,b.R.X,a.basis1),o.worldBasisAtPosition(a.origin,b.R.Y,a.basis2),(0,_.my)(a.basis2,a.basis1,a.origin,a.plane),(0,m.r)(a,-(0,c.Vl)(n),(0,m.n)(a),a),(0,m.r)(a,(0,c.Vl)(t),a.basis1,a),(0,p.g)(a.basis1,a.basis1,e/2),(0,p.g)(a.basis2,a.basis2,i/2),(0,m.u)(a),a):(u.Z.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error("Failed to project slice plane position, projection from ".concat(r.spatialReference.wkid," is not supported")),null)}function jr(r,n){if((0,s.Wi)(r)||(0,s.Wi)(r.position))return null;var t=(0,T.G)(r.position,n.spatialReference,n.elevationProvider);if((0,s.Wi)(t))return null;var e=ur.Z.renderUnitScaleFactor(r.position.spatialReference,n.spatialReference),i=r.width*e,o=r.height*e;return{position:t,heading:r.heading,tilt:r.tilt,renderWidth:i,renderHeight:o}}function Dr(r,n,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,m.a)();if((0,s.Wi)(r))return null;var i=xr(r.position,r.heading,r.tilt,r.renderWidth,r.renderHeight,n.renderCoordsHelper,e);return!t.tiltEnabled&&(0,s.pC)(i)&&vr(i,n.renderCoordsHelper,i),i}(tr=nr||(nr={}))[tr.POSITIVE_X=0]="POSITIVE_X",tr[tr.POSITIVE_Y=1]="POSITIVE_Y",tr[tr.NEGATIVE_X=2]="NEGATIVE_X",tr[tr.NEGATIVE_Y=3]="NEGATIVE_Y";var Br,Hr,Fr=gr.jg.Custom1;!function(r){r[r.HEADING=1]="HEADING",r[r.TILT=2]="TILT"}(Br||(Br={})),function(r){r[r.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",r[r.HORIZONTAL=1]="HORIZONTAL",r[r.VERTICAL=2]="VERTICAL",r[r.TILTED=3]="TILTED"}(Hr||(Hr={}));var Gr,qr=gr.jg.Custom2,zr=(0,y.Ue)(),Yr=Math.PI/2,Xr=gr.jg.Custom1,Qr=gr.jg.Custom2;function Jr(r){var n="building-scene-3d"===r.type?r:null;return(0,s.pC)(n)}!function(r){r[r.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",r[r.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"}(Gr||(Gr={}))}}]);
//# sourceMappingURL=38978.814a46c1.chunk.js.map
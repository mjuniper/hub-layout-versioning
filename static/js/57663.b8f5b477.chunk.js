"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[57663],{67077:function(n,t,r){function e(){return[0,0,0,0]}function a(n){return[n[0],n[1],n[2],n[3]]}function i(n,t,r,e){return[n,t,r,e]}function u(n){for(var t=[0,0,0,0],r=Math.min(4,n.length),e=0;e<r;++e)t[e]=n[e];return t}function o(n,t){return new Float64Array(n,t,4)}function l(){return[0,0,0,0]}function f(){return i(1,1,1,1)}function c(){return i(1,0,0,0)}function s(){return i(0,1,0,0)}function m(){return i(0,0,1,0)}function p(){return i(0,0,0,1)}r.d(t,{O:function(){return v},Z:function(){return d},a:function(){return o},b:function(){return u},c:function(){return e},d:function(){return a},f:function(){return i}});var d=[0,0,0,0],v=f(),h=c(),x=s(),y=m(),w=p();Object.freeze(Object.defineProperty({__proto__:null,ONES:v,UNIT_W:w,UNIT_X:h,UNIT_Y:x,UNIT_Z:y,ZEROS:d,clone:a,create:e,createView:o,fromArray:u,fromValues:i,ones:f,unitW:p,unitX:c,unitY:s,unitZ:m,zeros:l},Symbol.toStringTag,{value:"Module"}))},58971:function(n,t,r){r.d(t,{G6:function(){return T},Ie:function(){return M},J9:function(){return z},RF:function(){return y},U1:function(){return b},vY:function(){return f},ym:function(){return I}});var e=r(29439),a=r(92026),i=r(77981);var u=function(n,t,r){return[t,r]},o=function(n,t,r){return[t,r,n[2]]},l=function(n,t,r){return[t,r,n[2],n[3]]};function f(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,a.pC)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function c(n,t){var r=n.scale,e=n.translate;return Math.round((t-e[0])/r[0])}function s(n,t){var r=n.scale,e=n.translate;return Math.round((e[1]-t)/r[1])}function m(n,t,r){for(var e,a,i,u,o=[],l=0;l<r.length;l++){var f=r[l];l>0?(i=c(n,f[0]),u=s(n,f[1]),i===e&&u===a||(o.push(t(f,i-e,u-a)),e=i,a=u)):(e=c(n,f[0]),a=s(n,f[1]),o.push(t(f,e,a)))}return o.length>0?o:null}function p(n,t){var r=n.scale,e=n.translate;return t*r[0]+e[0]}function d(n,t){var r=n.scale;return n.translate[1]-t*r[1]}function v(n,t,r){var a=new Array(r.length);if(!r.length)return a;var i=(0,e.Z)(n.scale,2),u=i[0],o=i[1],l=p(n,r[0][0]),f=d(n,r[0][1]);a[0]=t(r[0],l,f);for(var c=1;c<r.length;c++){var s=r[c];l+=s[0]*u,f-=s[1]*o,a[c]=t(s,l,f)}return a}function h(n,t,r){for(var e=new Array(r.length),a=0;a<r.length;a++)e[a]=v(n,t,r[a]);return e}function x(n,t,r,e,a){var i;return t.points=null!==(i=function(n,t,r,e){return m(n,r?e?l:o:e?o:u,t)}(n,r.points,e,a))&&void 0!==i?i:[],t}function y(n,t,r,e,a){return t.x=c(n,r.x),t.y=s(n,r.y),t!==r&&(e&&(t.z=r.z),a&&(t.m=r.m)),t}function w(n,t,r,e,a){var i=function(n,t,r,e){for(var a=[],i=r?e?l:o:e?o:u,f=0;f<t.length;f++){var c=m(n,i,t[f]);c&&c.length>=3&&a.push(c)}return a.length?a:null}(n,r.rings,e,a);return i?(t.rings=i,t):null}function g(n,t,r,e,a){var i=function(n,t,r,e){for(var a=[],i=r?e?l:o:e?o:u,f=0;f<t.length;f++){var c=m(n,i,t[f]);c&&c.length>=2&&a.push(c)}return a.length?a:null}(n,r.paths,e,a);return i?(t.paths=i,t):null}function I(n,t){return n&&t?(0,i.wp)(t)?y(n,{},t,!1,!1):(0,i.l9)(t)?g(n,{},t,!1,!1):(0,i.oU)(t)?w(n,{},t,!1,!1):(0,i.aW)(t)?x(n,{},t,!1,!1):(0,i.YX)(t)?function(n,t,r,e,a){return t.xmin=c(n,r.xmin),t.ymin=s(n,r.ymin),t.xmax=c(n,r.xmax),t.ymax=s(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),a&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}(n,{},t,!1,!1):null:null}function z(n,t,r,e,i){return(0,a.pC)(r)&&(t.points=function(n,t,r,e){return v(n,r?e?l:o:e?o:u,t)}(n,r.points,e,i)),t}function b(n,t,r,e,i){return(0,a.Wi)(r)||(t.x=p(n,r.x),t.y=d(n,r.y),t!==r&&(e&&(t.z=r.z),i&&(t.m=r.m))),t}function M(n,t,r,e,i){return(0,a.pC)(r)&&(t.rings=function(n,t,r,e){return h(n,r?e?l:o:e?o:u,t)}(n,r.rings,e,i)),t}function T(n,t,r,e,i){return(0,a.pC)(r)&&(t.paths=function(n,t,r,e){return h(n,r?e?l:o:e?o:u,t)}(n,r.paths,e,i)),t}},27811:function(n,t,r){r.d(t,{AJ:function(){return c},If:function(){return v},QM:function(){return p},hy:function(){return d},k0:function(){return f},nu:function(){return l},uI:function(){return m},wx:function(){return h}});var e=r(37762),a=r(16889),i=r(17842),u=r(90045),o=r(67077),l=2.4;function f(n){return(0,i.Wz)(n*l)}function c(n){return(0,i.F2)(n)/l}function s(n,t,r,e){var i=t.color,o=t.ratio,l=r.color,f=r.ratio;if(f===o){var c=1e-6;1===f?o-=c:f+=c}var s=(0,a.uZ)((e-o)/(f-o),0,1);(0,u.l)(n,i.toArray(),l.toArray(),s)}function m(n){var t=new Uint8ClampedArray(2048);if(n=n.filter((function(n){var t=n.ratio;return t>=0&&t<=1})).sort((function(n,t){return n.ratio-t.ratio})).map((function(n){var t=n.color,r=n.ratio;return{color:t,ratio:Math.max(r,.001)}})),n.length<1)return t;for(var r=n[0],e=n[0],a=1,i=(0,o.c)(),u=0;u<512;u++){for(var l=(u+.5)/512;l>e.ratio&&a<n.length;)r=e,e=n[a++];s(i,r,e,l),t.set(i,4*u)}return t}function p(n,t,r,a){var u,o,l=t.radius,f=t.fieldOffset,c=t.field,s=Math.round((0,i.F2)(l)),m=new Float64Array(r*a),p=Number.NEGATIVE_INFINITY,d=function(n,t){return null!=n?"string"==typeof t?function(t){return-1*+t.readAttribute(n)}:function(r){return+r.readAttribute(n)+t}:function(n){return 1}}(c,f),h=new Set,x=(0,e.Z)(n);try{for(x.s();!(o=x.n()).done;)for(var y=o.value.getCursor();y.next();){var w=y.getObjectId();if(!h.has(w)){h.add(w);var g=y.readLegacyPointGeometry(),I=128;if(!(g.x<-I||g.x>=r+I||g.y<-I||g.y>a+I))for(var z=+d(y),b=Math.max(0,Math.round(g.x)-s),M=Math.max(0,Math.round(g.y)-s),T=Math.min(a,Math.round(g.y)+s),Z=Math.min(r,Math.round(g.x)+s),F=M;F<T;F++)for(var V=b;V<Z;V++){var A=F*r+V,P=v(g.x-V,g.y-F,s);(u=m[A]+=P*z)>p&&(p=u)}}}}catch(k){x.e(k)}finally{x.f()}return{matrix:m.buffer,max:p}}function d(n,t,r,e,i,u){n.canvas.width=n.canvas.height=t,n.clearRect(0,0,t,t);var o=n.getImageData(0,0,t,t);r&&e&&o.data.set(new Uint8ClampedArray(function(n,t,r,e,i){for(var u=new Uint32Array(n*n),o=("buffer"in t?t:new Float64Array(t)),l=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),f=l.length/(i-e),c=0;c<o.length;c++){var s=o[c],m=Math.floor((s-e)*f);u[c]=l[(0,a.uZ)(m,0,l.length-1)]}return u.buffer}(t,r,e,i,u))),n.putImageData(o,0,0)}function v(n,t,r){var e=Math.sqrt(Math.pow(n,2)+Math.pow(t,2))/r;return e>1?0:3/(Math.PI*Math.pow(r,2))*Math.pow(1-Math.pow(e,2),2)}function h(n,t){return"function"==typeof n?n:n?"string"==typeof t?function(t){return-1*+t[n]}:function(r){return+r[n]+t}:function(){return 1}}},57663:function(n,t,r){r.r(t),r.d(t,{classBreaks:function(){return T},heatmapStatistics:function(){return A},histogram:function(){return F},summaryStatistics:function(){return I},uniqueValues:function(){return b}});var e=r(74165),a=r(15861),i=r(1413),u=r(37762),o=(r(59486),r(10064),r(92026)),l=r(17842),f=r(78952),c=r(58971),s=r(92975),m=(r(80031),r(27811)),p=r(71486),d=r(819),v=r(585),h=null;function x(n,t,r,e){var a=(0,s.MP)(r)?(0,s.C5)(r):null,i=a?Math.round((a.valid[1]-a.valid[0])/t.scale[0]):null;return n.map((function(n){var r=new v.Z((0,o.Wg)(n.geometry));return(0,c.RF)(t,r,r,r.hasZ,r.hasM),n.geometry=a?function(n,t,r){return n.x<0?n.x+=t:n.x>r&&(n.x-=t),n}(r,i,e[0]):r,n}))}function y(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,r=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,o=new Float64Array(a*i);t=Math.round((0,l.F2)(t));var f,c=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,p=0,d=0,v=0,h=0,x=(0,m.wx)(e,r),y=(0,u.Z)(n);try{for(y.s();!(f=y.n()).done;)for(var w=f.value,g=w.geometry,I=w.attributes,z=g.x,b=g.y,M=Math.max(0,z-t),T=Math.max(0,b-t),Z=Math.min(i,b+t),F=Math.min(a,z+t),V=+x(I),A=T;A<Z;A++)for(var P=M;P<F;P++){var k=A*a+P,C=(0,m.If)(P-z,A-b,t),E=o[k],N=(p=o[k]+=C*V)-E;d+=N,v+=N*N,p<c&&(c=p),p>s&&(s=p),h++}}catch(D){y.e(D)}finally{y.f()}if(!h)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};var _=(s-c)/2;return{mean:d/h,stdDev:Math.sqrt((v-d*d/h)/h),min:c,max:s,mid:_,count:h}}function w(n,t){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,e.Z)().mark((function n(t,r){var a,u,o,l,c,s,m,v,x,y,w,g,I,z,b,M;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return",[]);case 2:if(a=t.field,u=t.field2,o=t.field3,l=t.fieldDelimiter,c=t.valueExpression,s=t.normalizationType,m=t.normalizationField,v=t.normalizationTotal,x=[],y=t.viewInfoParams,w=null,g=null,!c){n.next=12;break}if(h){n.next=11;break}return n.next=8,(0,d.LC)();case 8:I=n.sent,z=I.arcadeUtils,h=z;case 11:w=h.createFunction(c),g=y&&h.getViewInfo({viewingMode:y.viewingMode,scale:y.scale,spatialReference:new f.Z(y.spatialReference)});case 12:return b=t.fieldInfos,M=r[0]&&"declaredClass"in r[0]&&"esri.Graphic"===r[0].declaredClass||!b?null:{fields:b},n.abrupt("return",(r.forEach((function(n){var t,r=n.attributes;if(c){var e=M?(0,i.Z)((0,i.Z)({},n),{},{layer:M}):n,f=h.createExecContext(e,g);t=h.executeFunction(w,f)}else r&&(t=r[a],u&&(t="".concat((0,p.wk)(t)).concat(l).concat((0,p.wk)(r[u])),o&&(t="".concat(t).concat(l).concat((0,p.wk)(r[o])))));if(s&&"number"==typeof t&&isFinite(t)){var d=r&&parseFloat(r[m]);t=(0,p.fk)(t,s,d,v)}x.push(t)})),x));case 14:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}function I(n){return z.apply(this,arguments)}function z(){return z=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a,i,u,o,l,f,c,s,m,d;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.attribute,a=t.features,i=r.normalizationType,u=r.normalizationField,o=r.minValue,l=r.maxValue,f=r.fieldType,n.next=9,w({field:r.field,valueExpression:r.valueExpression,normalizationType:i,normalizationField:u,normalizationTotal:r.normalizationTotal,viewInfoParams:r.viewInfoParams,fieldInfos:r.fieldInfos},a);case 9:return c=n.sent,s=(0,p.S5)({normalizationType:i,normalizationField:u,minValue:o,maxValue:l}),m={value:.5,fieldType:f},d="esriFieldTypeString"===f?(0,p.H0)({values:c,supportsNullCount:s,percentileParams:m}):(0,p.i5)({values:c,minValue:o,maxValue:l,useSampleStdDev:!i,supportsNullCount:s,percentileParams:m}),n.abrupt("return",(0,p.F_)(d,"esriFieldTypeDate"===f));case 14:case"end":return n.stop()}}),n)}))),z.apply(this,arguments)}function b(n){return M.apply(this,arguments)}function M(){return(M=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a,i,u;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.attribute,a=t.features,n.next=4,w({field:r.field,field2:r.field2,field3:r.field3,fieldDelimiter:r.fieldDelimiter,valueExpression:r.valueExpression,viewInfoParams:r.viewInfoParams,fieldInfos:r.fieldInfos},a);case 4:return i=n.sent,u=(0,p.eT)(i),n.abrupt("return",(0,p.Qm)(u,r.domains,r.returnAllCodedValues,r.fieldDelimiter));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(n){return Z.apply(this,arguments)}function Z(){return Z=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a,i,u,o,l,f,c,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.attribute,a=t.features,i=r.field,u=r.normalizationType,o=r.normalizationField,l=r.normalizationTotal,f=r.classificationMethod,n.next=9,w({field:i,valueExpression:r.valueExpression,normalizationType:u,normalizationField:o,normalizationTotal:l,viewInfoParams:r.viewInfoParams,fieldInfos:r.fieldInfos},a);case 9:return c=n.sent,s=(0,p.G2)(c,{field:i,normalizationType:u,normalizationField:o,normalizationTotal:l,classificationMethod:f,standardDeviationInterval:r.standardDeviationInterval,numClasses:r.numClasses,minValue:r.minValue,maxValue:r.maxValue}),n.abrupt("return",(0,p.DL)(s,f));case 12:case"end":return n.stop()}}),n)}))),Z.apply(this,arguments)}function F(n){return V.apply(this,arguments)}function V(){return(V=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a,i,u,o,l,f,c;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.attribute,a=t.features,i=r.field,u=r.normalizationType,o=r.normalizationField,l=r.normalizationTotal,f=r.classificationMethod,n.next=9,w({field:i,valueExpression:r.valueExpression,normalizationType:u,normalizationField:o,normalizationTotal:l,viewInfoParams:r.viewInfoParams,fieldInfos:r.fieldInfos},a);case 9:return c=n.sent,n.abrupt("return",(0,p.oF)(c,{field:i,normalizationType:u,normalizationField:o,normalizationTotal:l,classificationMethod:f,standardDeviationInterval:r.standardDeviationInterval,numBins:r.numBins,minValue:r.minValue,maxValue:r.maxValue}));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function A(n){return P.apply(this,arguments)}function P(){return P=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a,i,u,o,l,f,c,s,m,p,d,v,h,w;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.attribute,a=t.features,i=r.field,u=r.radius,o=r.fieldOffset,l=r.transform,f=r.spatialReference,c=r.size,s=x(a,l,f,c),m=y(s,u,o,i,c[0],c[1]),p=m.count,d=m.min,v=m.max,h=m.mean,w=m.stdDev,n.abrupt("return",{count:p,min:d,max:v,avg:h,stddev:w});case 2:case"end":return n.stop()}}),n)}))),P.apply(this,arguments)}}}]);
//# sourceMappingURL=57663.b8f5b477.chunk.js.map
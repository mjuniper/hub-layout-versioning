"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[69655],{22018:function(t,n,r){r.d(n,{a:function(){return M},b:function(){return s},c:function(){return o},d:function(){return e},f:function(){return l},i:function(){return u},m:function(){return i},r:function(){return c},s:function(){return f},t:function(){return h}});var a=r(26277);function u(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function e(t,n,r,a,u,e,o){return t[0]=n,t[1]=r,t[2]=a,t[3]=u,t[4]=e,t[5]=o,t}function o(t,n){var r=n[0],a=n[1],u=n[2],e=n[3],o=n[4],i=n[5],c=r*e-a*u;return c?(c=1/c,t[0]=e*c,t[1]=-a*c,t[2]=-u*c,t[3]=r*c,t[4]=(u*i-e*o)*c,t[5]=(a*o-r*i)*c,t):null}function i(t,n,r){var a=n[0],u=n[1],e=n[2],o=n[3],i=n[4],c=n[5],f=r[0],h=r[1],s=r[2],l=r[3],M=r[4],b=r[5];return t[0]=a*f+e*h,t[1]=u*f+o*h,t[2]=a*s+e*l,t[3]=u*s+o*l,t[4]=a*M+e*b+i,t[5]=u*M+o*b+c,t}function c(t,n,r){var a=n[0],u=n[1],e=n[2],o=n[3],i=n[4],c=n[5],f=Math.sin(r),h=Math.cos(r);return t[0]=a*h+e*f,t[1]=u*h+o*f,t[2]=a*-f+e*h,t[3]=u*-f+o*h,t[4]=i,t[5]=c,t}function f(t,n,r){var a=n[0],u=n[1],e=n[2],o=n[3],i=n[4],c=n[5],f=r[0],h=r[1];return t[0]=a*f,t[1]=u*f,t[2]=e*h,t[3]=o*h,t[4]=i,t[5]=c,t}function h(t,n,r){var a=n[0],u=n[1],e=n[2],o=n[3],i=n[4],c=n[5],f=r[0],h=r[1];return t[0]=a,t[1]=u,t[2]=e,t[3]=o,t[4]=a*f+e*h+i,t[5]=u*f+o*h+c,t}function s(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t[4]=0,t[5]=0,t}function l(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function M(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function b(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t}var v=i,m=b;Object.freeze(Object.defineProperty({__proto__:null,add:function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t},copy:function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},equals:function(t,n){var r=t[0],u=t[1],e=t[2],o=t[3],i=t[4],c=t[5],f=n[0],h=n[1],s=n[2],l=n[3],M=n[4],b=n[5],v=(0,a.g)();return Math.abs(r-f)<=v*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-h)<=v*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-s)<=v*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(o-l)<=v*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-M)<=v*Math.max(1,Math.abs(i),Math.abs(M))&&Math.abs(c-b)<=v*Math.max(1,Math.abs(c),Math.abs(b))},exactEquals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]},frob:function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},fromRotation:s,fromScaling:l,fromTranslation:M,identity:u,invert:o,mul:v,multiply:i,multiplyScalar:function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t},multiplyScalarAndAdd:function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t},rotate:c,scale:f,set:e,str:function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},sub:m,subtract:b,translate:h},Symbol.toStringTag,{value:"Module"}))},11245:function(t,n,r){function a(){var t=new Float32Array(6);return t[0]=1,t[3]=1,t}function u(t,n,r,a){var u=n[a],e=n[a+1];t[a]=r[0]*u+r[2]*e+r[4],t[a+1]=r[1]*u+r[3]*e+r[5]}function e(t,n,r){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2,i=e||n.length/o,c=a;c<i;c++)u(t,n,r,c*o)}r.d(n,{c:function(){return a},t:function(){return e}});Object.freeze(Object.defineProperty({__proto__:null,clone:function(t){var n=new Float32Array(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n},create:a,createView:function(t,n){return new Float32Array(t,n,6)},fromValues:function(t,n,r,a,u,e){var o=new Float32Array(6);return o[0]=t,o[1]=n,o[2]=r,o[3]=a,o[4]=u,o[5]=e,o},transform:u,transformMany:e},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=69655.475ae92f.chunk.js.map
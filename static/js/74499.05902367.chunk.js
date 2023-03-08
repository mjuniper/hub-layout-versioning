/*! For license information please see 74499.05902367.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[74499],{73736:function(t,e,n){n.d(e,{S:function(){return a},a:function(){return b},b:function(){return p},c:function(){return v},d:function(){return E},f:function(){return r},i:function(){return m},r:function(){return o}});var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")(),a=o.Symbol,u=Object.prototype,c=u.hasOwnProperty,l=u.toString,s=a?a.toStringTag:void 0;var f=Object.prototype.toString;var d=a?a.toStringTag:void 0;function p(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=c.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(o){}var i=l.call(t);return r&&(e?t[s]=n:delete t[s]),i}(t):function(t){return f.call(t)}(t)}function v(t){return null!=t&&"object"==typeof t}function m(t){return"symbol"==typeof t||v(t)&&"[object Symbol]"==p(t)}var g=/\s/;var h=/^\s+/;function x(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&g.test(t.charAt(e)););return e}(t)+1).replace(h,""):t}function b(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var y=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,k=parseInt;function R(t){if("number"==typeof t)return t;if(m(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=x(t);var n=w.test(t);return n||Z.test(t)?k(t.slice(2),n?2:8):y.test(t)?NaN:+t}var O=function(){return o.Date.now()},T=Math.max,A=Math.min;function E(t,e,n){var r,i,o,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,o=i;return r=i=void 0,l=e,a=t.apply(o,n)}function v(t){return l=t,u=setTimeout(g,e),s?p(t):a}function m(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-l>=o}function g(){var t=O();if(m(t))return h(t);u=setTimeout(g,function(t){var n=e-(t-c);return f?A(n,o-(t-l)):n}(t))}function h(t){return u=void 0,d&&r?p(t):(r=i=void 0,a)}function x(){var t=O(),n=m(t);if(r=arguments,i=this,c=t,n){if(void 0===u)return v(c);if(f)return clearTimeout(u),u=setTimeout(g,e),p(c)}return void 0===u&&(u=setTimeout(g,e)),a}return e=R(e)||0,b(n)&&(s=!!n.leading,o=(f="maxWait"in n)?T(R(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},x.flush=function(){return void 0===u?a:h(O())},x}},74499:function(t,e,n){n.d(e,{F:function(){return Et},a:function(){return Ft},b:function(){return Vt},c:function(){return Mt},d:function(){return At},e:function(){return Z},f:function(){return Lt},r:function(){return St},u:function(){return Bt}});var r=n(44925),i=n(93433),o=n(74165),a=n(4942),u=n(1413),c=n(15861),l=n(3511),s=n(73736),f=["alignment","allowedPlacements","autoAlignment"],d=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"],p=["strategy"],v=["mainAxis","crossAxis","limiter"];function m(t){return t.split("-")[0]}function g(t){return t.split("-")[1]}function h(t){return["top","bottom"].includes(m(t))?"x":"y"}function x(t){return"y"===t?"height":"width"}function b(t,e,n){var r,i=t.reference,o=t.floating,a=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,c=h(e),l=x(c),s=i[l]/2-o[l]/2,f="x"===c;switch(m(e)){case"top":r={x:a,y:i.y-o.height};break;case"bottom":r={x:a,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:u};break;case"left":r={x:i.x-o.width,y:u};break;default:r={x:i.x,y:i.y}}switch(g(e)){case"start":r[c]-=s*(n&&f?-1:1);break;case"end":r[c]+=s*(n&&f?-1:1)}return r}var y=function(){var t=(0,c.Z)((0,o.Z)().mark((function t(e,n,r){var i,c,l,s,f,d,p,v,m,g,h,x,y,w,Z,k,R,O,T,A,E,P,L,j,S,D;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.placement,c=void 0===i?"bottom":i,l=r.strategy,s=void 0===l?"absolute":l,f=r.middleware,d=void 0===f?[]:f,p=r.platform,v=d.filter(Boolean),t.next=4,null==p.isRTL?void 0:p.isRTL(n);case 4:return m=t.sent,t.next=7,p.getElementRects({reference:e,floating:n,strategy:s});case 7:g=t.sent,h=b(g,c,m),x=h.x,y=h.y,w=c,Z={},k=0,R=0;case 13:if(!(R<v.length)){t.next=46;break}return O=v[R],T=O.name,A=O.fn,t.next=17,A({x:x,y:y,initialPlacement:c,placement:w,strategy:s,middlewareData:Z,rects:g,platform:p,elements:{reference:e,floating:n}});case 17:if(E=t.sent,P=E.x,L=E.y,j=E.data,S=E.reset,x=null!=P?P:x,y=null!=L?L:y,Z=(0,u.Z)((0,u.Z)({},Z),{},(0,a.Z)({},T,(0,u.Z)((0,u.Z)({},Z[T]),j))),!(S&&k<=50)){t.next=43;break}if(k++,"object"!==typeof S){t.next=41;break}if(S.placement&&(w=S.placement),!S.rects){t.next=38;break}if(!0!==S.rects){t.next=36;break}return t.next=33,p.getElementRects({reference:e,floating:n,strategy:s});case 33:t.t0=t.sent,t.next=37;break;case 36:t.t0=S.rects;case 37:g=t.t0;case 38:D=b(g,w,m),x=D.x,y=D.y;case 41:return R=-1,t.abrupt("continue",43);case 43:R++,t.next=13;break;case 46:return t.abrupt("return",{x:x,y:y,placement:w,strategy:s,middlewareData:Z});case 47:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();function w(t){return"number"!==typeof t?function(t){return(0,u.Z)({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function Z(t){return(0,u.Z)((0,u.Z)({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function k(t,e){return R.apply(this,arguments)}function R(){return R=(0,c.Z)((0,o.Z)().mark((function t(e,n){var r,i,a,c,l,s,f,d,p,v,m,g,h,x,b,y,k,R,O,T,A,E,P,L,j;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),i=e.x,a=e.y,c=e.platform,l=e.rects,s=e.elements,f=e.strategy,p=(d=n).boundary,v=void 0===p?"clippingAncestors":p,m=d.rootBoundary,g=void 0===m?"viewport":m,h=d.elementContext,x=void 0===h?"floating":h,b=d.altBoundary,y=void 0!==b&&b,k=d.padding,R=w(void 0===k?0:k),O="floating"===x?"reference":"floating",T=s[y?O:x],t.t0=Z,t.t1=c,t.next=10,null==c.isElement?void 0:c.isElement(T);case 10:if(t.t2=r=t.sent,null==t.t2){t.next=15;break}t.t3=r,t.next=16;break;case 15:t.t3=!0;case 16:if(!t.t3){t.next=20;break}t.t4=T,t.next=26;break;case 20:if(t.t5=T.contextElement,t.t5){t.next=25;break}return t.next=24,null==c.getDocumentElement?void 0:c.getDocumentElement(s.floating);case 24:t.t5=t.sent;case 25:t.t4=t.t5;case 26:return t.t6=t.t4,t.t7=v,t.t8=g,t.t9=f,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=33,t.t1.getClippingRect.call(t.t1,t.t10);case 33:return t.t11=t.sent,A=(0,t.t0)(t.t11),E="floating"===x?(0,u.Z)((0,u.Z)({},l.floating),{},{x:i,y:a}):l.reference,t.next=38,null==c.getOffsetParent?void 0:c.getOffsetParent(s.floating);case 38:return P=t.sent,t.next=41,null==c.isElement?void 0:c.isElement(P);case 41:if(!t.sent){t.next=50;break}return t.next=44,null==c.getScale?void 0:c.getScale(P);case 44:if(t.t13=t.sent,t.t13){t.next=47;break}t.t13={x:1,y:1};case 47:t.t12=t.t13,t.next=51;break;case 50:t.t12={x:1,y:1};case 51:if(L=t.t12,t.t14=Z,!c.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=59;break}return t.next=56,c.convertOffsetParentRelativeRectToViewportRelativeRect({rect:E,offsetParent:P,strategy:f});case 56:t.t15=t.sent,t.next=60;break;case 59:t.t15=E;case 60:return t.t16=t.t15,j=(0,t.t14)(t.t16),t.abrupt("return",{top:(A.top-j.top+R.top)/L.y,bottom:(j.bottom-A.bottom+R.bottom)/L.y,left:(A.left-j.left+R.left)/L.x,right:(j.right-A.right+R.right)/L.x});case 63:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}var O=Math.min,T=Math.max;function A(t,e,n){return T(t,O(e,n))}var E={left:"right",right:"left",bottom:"top",top:"bottom"};function P(t){return t.replace(/left|right|bottom|top/g,(function(t){return E[t]}))}function L(t,e,n){void 0===n&&(n=!1);var r=g(t),i=h(t),o=x(i),a="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(a=P(a)),{main:a,cross:P(a)}}var j={start:"end",end:"start"};function S(t){return t.replace(/start|end/g,(function(t){return j[t]}))}var D=["top","right","bottom","left"],C=D.reduce((function(t,e){return t.concat(e,e+"-start",e+"-end")}),[]);function H(t,e,n){return(t?[].concat((0,i.Z)(n.filter((function(e){return g(e)===t}))),(0,i.Z)(n.filter((function(e){return g(e)!==t})))):n.filter((function(t){return m(t)===t}))).filter((function(n){return!t||(g(n)===t||!!e&&S(n)!==n)}))}function W(t){var e=P(t);return[S(t),e,S(e)]}var N=function(t){return void 0===t&&(t={}),{name:"flip",options:t,fn:function(e){return(0,c.Z)((0,o.Z)().mark((function n(){var a,u,c,l,s,f,p,v,g,h,x,b,y,w,Z,R,O,T,A,E,j,S,D,C,H,N,M,F,V,B,I,z,_,U,$;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=e.placement,c=e.middlewareData,l=e.rects,s=e.initialPlacement,f=e.platform,p=e.elements,g=(v=t).mainAxis,h=void 0===g||g,x=v.crossAxis,b=void 0===x||x,y=v.fallbackPlacements,w=v.fallbackStrategy,Z=void 0===w?"bestFit":w,R=v.flipAlignment,O=void 0===R||R,T=(0,r.Z)(v,d),A=m(u),E=A===s,j=y||(E||!O?[P(s)]:W(s)),S=[s].concat((0,i.Z)(j)),n.next=8,k(e,T);case 8:if(D=n.sent,C=[],H=(null==(a=c.flip)?void 0:a.overflows)||[],h&&C.push(D[A]),!b){n.next=23;break}return n.t0=L,n.t1=u,n.t2=l,n.next=18,null==f.isRTL?void 0:f.isRTL(p.floating);case 18:n.t3=n.sent,N=(0,n.t0)(n.t1,n.t2,n.t3),M=N.main,F=N.cross,C.push(D[M],D[F]);case 23:if(H=[].concat((0,i.Z)(H),[{placement:u,overflows:C}]),C.every((function(t){return t<=0}))){n.next=40;break}if(I=(null!=(V=null==(B=c.flip)?void 0:B.index)?V:0)+1,!(z=S[I])){n.next=29;break}return n.abrupt("return",{data:{index:I,overflows:H},reset:{placement:z}});case 29:_="bottom",n.t4=Z,n.next="bestFit"===n.t4?33:"initialPlacement"===n.t4?36:38;break;case 33:return $=null==(U=H.map((function(t){return[t,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:U[0].placement,$&&(_=$),n.abrupt("break",38);case 36:return _=s,n.abrupt("break",38);case 38:if(u===_){n.next=40;break}return n.abrupt("return",{reset:{placement:_}});case 40:return n.abrupt("return",{});case 41:case"end":return n.stop()}}),n)})))()}}};function M(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function F(t){return D.some((function(e){return t[e]>=0}))}var V=function(t){var e=void 0===t?{}:t,n=e.strategy,i=void 0===n?"referenceHidden":n,a=(0,r.Z)(e,p);return{name:"hide",fn:function(t){return(0,c.Z)((0,o.Z)().mark((function e(){var n,r,c,l,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rects,e.t0=i,e.next="referenceHidden"===e.t0?4:"escaped"===e.t0?9:14;break;case 4:return e.next=6,k(t,(0,u.Z)((0,u.Z)({},a),{},{elementContext:"reference"}));case 6:return r=e.sent,c=M(r,n.reference),e.abrupt("return",{data:{referenceHiddenOffsets:c,referenceHidden:F(c)}});case 9:return e.next=11,k(t,(0,u.Z)((0,u.Z)({},a),{},{altBoundary:!0}));case 11:return l=e.sent,s=M(l,n.floating),e.abrupt("return",{data:{escapedOffsets:s,escaped:F(s)}});case 14:return e.abrupt("return",{});case 15:case"end":return e.stop()}}),e)})))()}}};function B(t,e){return I.apply(this,arguments)}function I(){return I=(0,c.Z)((0,o.Z)().mark((function t(e,n){var r,i,a,c,l,s,f,d,p,v,x,b,y,w;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.placement,i=e.platform,a=e.elements,t.next=3,null==i.isRTL?void 0:i.isRTL(a.floating);case 3:return c=t.sent,l=m(r),s=g(r),f="x"===h(r),d=["left","top"].includes(l)?-1:1,p=c&&f?-1:1,v="function"===typeof n?n(e):n,x="number"===typeof v?{mainAxis:v,crossAxis:0,alignmentAxis:null}:(0,u.Z)({mainAxis:0,crossAxis:0,alignmentAxis:null},v),b=x.mainAxis,y=x.crossAxis,w=x.alignmentAxis,s&&"number"===typeof w&&(y="end"===s?-1*w:w),t.abrupt("return",f?{x:y*p,y:b*d}:{x:b*d,y:y*p});case 13:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function z(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function _(t){if(null==t)return window;if(!z(t)){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function U(t){return _(t).getComputedStyle(t)}function $(t){return z(t)?"":t?(t.nodeName||"").toLowerCase():""}function X(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Y(t){return t instanceof _(t).HTMLElement}function q(t){return t instanceof _(t).Element}function G(t){return"undefined"!==typeof ShadowRoot&&(t instanceof _(t).ShadowRoot||t instanceof ShadowRoot)}function J(t){var e=U(t),n=e.overflow,r=e.overflowX,i=e.overflowY,o=e.display;return/auto|scroll|overlay|hidden/.test(n+i+r)&&!["inline","contents"].includes(o)}function K(t){return["table","td","th"].includes($(t))}function Q(t){var e=/firefox/i.test(X()),n=U(t);return"none"!==n.transform||"none"!==n.perspective||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((function(t){return n.willChange.includes(t)}))||["paint","layout","strict","content"].some((function(t){var e=n.contain;return null!=e&&e.includes(t)}))}function tt(){return!/^((?!chrome|android).)*safari/i.test(X())}function et(t){return["html","body","#document"].includes($(t))}var nt=Math.min,rt=Math.max,it=Math.round;function ot(t,e,n){var r,i,o,a;void 0===e&&(e=!1),void 0===n&&(n=!1);var u=t.getBoundingClientRect(),c=1,l=1;e&&Y(t)&&(c=t.offsetWidth>0&&it(u.width)/t.offsetWidth||1,l=t.offsetHeight>0&&it(u.height)/t.offsetHeight||1);var s=q(t)?_(t):window,f=!tt()&&n,d=(u.left+(f&&null!=(r=null==(i=s.visualViewport)?void 0:i.offsetLeft)?r:0))/c,p=(u.top+(f&&null!=(o=null==(a=s.visualViewport)?void 0:a.offsetTop)?o:0))/l,v=u.width/c,m=u.height/l;return{width:v,height:m,top:p,right:d+v,bottom:p+m,left:d,x:d,y:p}}function at(t){return(e=t,(e instanceof _(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function ut(t){return q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ct(t){return ot(at(t)).left+ut(t).scrollLeft}function lt(t,e,n){var r=Y(e),i=at(e),o=ot(t,r&&function(t){var e=ot(t);return it(e.width)!==t.offsetWidth||it(e.height)!==t.offsetHeight}(e),"fixed"===n),a={scrollLeft:0,scrollTop:0},u={x:0,y:0};if(r||!r&&"fixed"!==n)if(("body"!==$(e)||J(i))&&(a=ut(e)),Y(e)){var c=ot(e,!0);u.x=c.x+e.clientLeft,u.y=c.y+e.clientTop}else i&&(u.x=ct(i));return{x:o.left+a.scrollLeft-u.x,y:o.top+a.scrollTop-u.y,width:o.width,height:o.height}}function st(t){return"html"===$(t)?t:t.assignedSlot||t.parentNode||(G(t)?t.host:null)||at(t)}function ft(t){return Y(t)&&"fixed"!==U(t).position?t.offsetParent:null}function dt(t){for(var e=_(t),n=ft(t);n&&K(n)&&"static"===U(n).position;)n=ft(n);return n&&("html"===$(n)||"body"===$(n)&&"static"===U(n).position&&!Q(n))?e:n||function(t){var e=st(t);for(G(e)&&(e=e.host);Y(e)&&!et(e);){if(Q(e))return e;var n=e.parentNode;e=G(n)?n.host:n}return null}(t)||e}function pt(t){if(Y(t))return{width:t.offsetWidth,height:t.offsetHeight};var e=ot(t);return{width:e.width,height:e.height}}function vt(t){var e=st(t);return et(e)?t.ownerDocument.body:Y(e)&&J(e)?e:vt(e)}function mt(t,e){var n;void 0===e&&(e=[]);var r=vt(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),o=_(r),a=i?[o].concat(o.visualViewport||[],J(r)?r:[]):r,u=e.concat(a);return i?u:u.concat(mt(a))}function gt(t,e,n){return"viewport"===e?Z(function(t,e){var n=_(t),r=at(t),i=n.visualViewport,o=r.clientWidth,a=r.clientHeight,u=0,c=0;if(i){o=i.width,a=i.height;var l=tt();(l||!l&&"fixed"===e)&&(u=i.offsetLeft,c=i.offsetTop)}return{width:o,height:a,x:u,y:c}}(t,n)):q(e)?function(t,e){var n=ot(t,!1,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:r,left:i,x:i,y:r,right:i+t.clientWidth,bottom:r+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):Z(function(t){var e,n=at(t),r=ut(t),i=null==(e=t.ownerDocument)?void 0:e.body,o=rt(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=rt(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),u=-r.scrollLeft+ct(t),c=-r.scrollTop;return"rtl"===U(i||n).direction&&(u+=rt(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:u,y:c}}(at(t)))}function ht(t){var e=mt(t),n=function(t,e){for(var n=t;n&&!et(n)&&!e.includes(n)&&(!q(n)||!["absolute","fixed"].includes(U(n).position));){var r=st(n);n=G(r)?r.host:r}return n}(t,e),r=null;if(n&&Y(n)){var i=dt(n);J(n)?r=n:Y(i)&&(r=i)}return q(r)?e.filter((function(t){return r&&q(t)&&function(t,e){var n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&G(n)){var r=e;do{if(r&&t===r)return!0;r=r.parentNode||r.host}while(r)}return!1}(t,r)&&"body"!==$(t)})):[]}var xt={getClippingRect:function(t){var e=t.element,n=t.boundary,r=t.rootBoundary,o=t.strategy,a="clippingAncestors"===n?ht(e):[].concat(n),u=[].concat((0,i.Z)(a),[r]),c=u[0],l=u.reduce((function(t,n){var r=gt(e,n,o);return t.top=rt(r.top,t.top),t.right=nt(r.right,t.right),t.bottom=nt(r.bottom,t.bottom),t.left=rt(r.left,t.left),t}),gt(e,c,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.rect,n=t.offsetParent,r=t.strategy,i=Y(n),o=at(n);if(n===o)return e;var a={scrollLeft:0,scrollTop:0},c={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==$(n)||J(o))&&(a=ut(n)),Y(n))){var l=ot(n,!0);c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return(0,u.Z)((0,u.Z)({},e),{},{x:e.x-a.scrollLeft+c.x,y:e.y-a.scrollTop+c.y})},isElement:q,getDimensions:pt,getOffsetParent:dt,getDocumentElement:at,getElementRects:function(t){var e=t.reference,n=t.floating,r=t.strategy;return{reference:lt(e,dt(n),r),floating:(0,u.Z)((0,u.Z)({},pt(n)),{},{x:0,y:0})}},getClientRects:function(t){return Array.from(t.getClientRects())},isRTL:function(t){return"rtl"===U(t).direction}};function bt(t,e,n,r){void 0===r&&(r={});var o=r,a=o.ancestorScroll,u=void 0===a||a,c=o.ancestorResize,l=void 0===c||c,s=o.elementResize,f=void 0===s||s,d=o.animationFrame,p=void 0!==d&&d,v=u&&!p,m=v||l?[].concat((0,i.Z)(q(t)?mt(t):[]),(0,i.Z)(mt(e))):[];m.forEach((function(t){v&&t.addEventListener("scroll",n,{passive:!0}),l&&t.addEventListener("resize",n)}));var g,h=null;if(f){var x=!0;h=new ResizeObserver((function(){x||n(),x=!1})),q(t)&&!p&&h.observe(t),h.observe(e)}var b=p?ot(t):null;return p&&function e(){var r=ot(t);!b||r.x===b.x&&r.y===b.y&&r.width===b.width&&r.height===b.height||n();b=r,g=requestAnimationFrame(e)}(),n(),function(){var t;m.forEach((function(t){v&&t.removeEventListener("scroll",n),l&&t.removeEventListener("resize",n)})),null==(t=h)||t.disconnect(),h=null,p&&cancelAnimationFrame(g)}}var yt=function(t,e,n){return y(t,e,(0,u.Z)({platform:xt},n))},wt=globalThis.calciteComponentsConfig,Zt=(0,u.Z)({floatingUINonChromiumPositioningFix:!0},wt),kt=function(){return Rt.apply(this,arguments)}();function Rt(){return Rt=(0,c.Z)((0,o.Z)().mark((function t(){var e,r,i,a,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=function(){var t=navigator.userAgentData;return(null===t||void 0===t?void 0:t.brands)?t.brands.map((function(t){return"".concat(t.brand,"/").concat(t.version)})).join(" "):navigator.userAgent},!Zt.floatingUINonChromiumPositioningFix||!/firefox|safari/i.test(e())){t.next=11;break}return t.next=4,n.e(59578).then(n.bind(n,59578));case 4:r=t.sent,i=r.getClippingRect,a=r.getElementRects,u=r.getOffsetParent,xt.getClippingRect=i,xt.getOffsetParent=u,xt.getElementRects=a;case 11:case"end":return t.stop()}}),t)}))),Rt.apply(this,arguments)}var Ot="data-placement",Tt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],At="bottom-start",Et={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Pt(t){var e,n,l=t.placement,s=t.disableFlip,d=t.flipPlacements,p=t.offsetDistance,b=t.offsetSkidding,y=t.arrowEl,Z=t.type,R=[(void 0===e&&(e={}),{name:"shift",options:e,fn:function(t){return(0,c.Z)((0,o.Z)().mark((function n(){var i,c,l,s,f,d,p,g,x,b,y,w,Z,R,O,T,E,P,L,j,S,D,C,H,W;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=t.x,l=t.y,s=t.placement,d=(f=e).mainAxis,p=void 0===d||d,g=f.crossAxis,x=void 0!==g&&g,b=f.limiter,y=void 0===b?{fn:function(t){return{x:t.x,y:t.y}}}:b,w=(0,r.Z)(f,v),Z={x:c,y:l},n.next=5,k(t,w);case 5:return R=n.sent,O=h(m(s)),T="x"===O?"y":"x",E=Z[O],P=Z[T],p&&(L="y"===O?"bottom":"right",j=E+R["y"===O?"top":"left"],S=E-R[L],E=A(j,E,S)),x&&(D="y"===T?"bottom":"right",C=P+R["y"===T?"top":"left"],H=P-R[D],P=A(C,P,H)),W=y.fn((0,u.Z)((0,u.Z)({},t),{},(i={},(0,a.Z)(i,O,E),(0,a.Z)(i,T,P),i))),n.abrupt("return",(0,u.Z)((0,u.Z)({},W),{},{data:{x:W.x-c,y:W.y-l}}));case 14:case"end":return n.stop()}}),n)})))()}}),V()];if("menu"===Z)return[].concat(R,[N({fallbackPlacements:d||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})]);if("popover"===Z||"tooltip"===Z){var O=[].concat(R,[(n={mainAxis:"number"===typeof p?p:0,crossAxis:"number"===typeof b?b:0},void 0===n&&(n=0),{name:"offset",options:n,fn:function(t){return(0,c.Z)((0,o.Z)().mark((function e(){var r,i,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.x,i=t.y,e.next=3,B(t,n);case 3:return a=e.sent,e.abrupt("return",{x:r+a.x,y:i+a.y,data:a});case 5:case"end":return e.stop()}}),e)})))()}})]);return"auto"===l||"auto-start"===l||"auto-end"===l?O.push(function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,fn:function(e){return(0,c.Z)((0,o.Z)().mark((function n(){var a,u,c,l,s,d,p,v,g,h,x,b,y,w,Z,R,O,T,A,E,P,j,S,D,W,N,M,F,V,B,I,z,_;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=e.x,p=e.y,v=e.rects,g=e.middlewareData,h=e.placement,x=e.platform,b=e.elements,w=(y=t).alignment,Z=void 0===w?null:w,R=y.allowedPlacements,O=void 0===R?C:R,T=y.autoAlignment,A=void 0===T||T,E=(0,r.Z)(y,f),P=H(Z,A,O),n.next=5,k(e,E);case 5:if(j=n.sent,S=null!=(a=null==(u=g.autoPlacement)?void 0:u.index)?a:0,null!=(D=P[S])){n.next=10;break}return n.abrupt("return",{});case 10:return n.t0=L,n.t1=D,n.t2=v,n.next=15,null==x.isRTL?void 0:x.isRTL(b.floating);case 15:if(n.t3=n.sent,W=(0,n.t0)(n.t1,n.t2,n.t3),N=W.main,M=W.cross,h===D){n.next=21;break}return n.abrupt("return",{x:d,y:p,reset:{placement:P[0]}});case 21:if(F=[j[m(D)],j[N],j[M]],V=[].concat((0,i.Z)(null!=(c=null==(l=g.autoPlacement)?void 0:l.overflows)?c:[]),[{placement:D,overflows:F}]),!(B=P[S+1])){n.next=26;break}return n.abrupt("return",{data:{index:S+1,overflows:V},reset:{placement:B}});case 26:if(I=V.slice().sort((function(t,e){return t.overflows[0]-e.overflows[0]})),z=null==(s=I.find((function(t){return t.overflows.every((function(t){return t<=0}))})))?void 0:s.placement,(_=null!=z?z:I[0].placement)===h){n.next=31;break}return n.abrupt("return",{data:{index:S+1,overflows:V},reset:{placement:_}});case 31:return n.abrupt("return",{});case 32:case"end":return n.stop()}}),n)})))()}}}({alignment:"auto-start"===l?"start":"auto-end"===l?"end":null})):s||O.push(N(d?{fallbackPlacements:d}:{})),y&&O.push(function(t){return{name:"arrow",options:t,fn:function(e){return(0,c.Z)((0,o.Z)().mark((function n(){var r,i,u,c,l,s,f,d,p,v,m,b,y,Z,k,R,O,T,E,P,L,j,S,D,C,H,W,N,M,F,V;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=(u=null!=t?t:{}).element,l=u.padding,s=void 0===l?0:l,f=e.x,d=e.y,p=e.placement,v=e.rects,m=e.platform,null!=c){n.next=4;break}return n.abrupt("return",{});case 4:return b=w(s),y={x:f,y:d},Z=h(p),k=g(p),R=x(Z),n.next=11,m.getDimensions(c);case 11:return O=n.sent,T="y"===Z?"top":"left",E="y"===Z?"bottom":"right",P=v.reference[R]+v.reference[Z]-y[Z]-v.floating[R],L=y[Z]-v.reference[Z],n.next=18,null==m.getOffsetParent?void 0:m.getOffsetParent(c);case 18:return j=n.sent,0===(S=j?"y"===Z?j.clientHeight||0:j.clientWidth||0:0)&&(S=v.floating[R]),D=P/2-L/2,C=b[T],H=S-O[R]-b[E],W=S/2-O[R]/2+D,N=A(C,W,H),M="start"===k?b[T]:b[E],F=M>0&&W!==N&&v.reference[R]<=v.floating[R],V=F?W<C?C-W:H-W:0,n.abrupt("return",(i={},(0,a.Z)(i,Z,y[Z]-V),(0,a.Z)(i,"data",(r={},(0,a.Z)(r,Z,N),(0,a.Z)(r,"centerOffset",W-N),r)),i));case 30:case"end":return n.stop()}}),n)})))()}}}({element:y})),O}return[]}function Lt(t,e){var n=t.filter((function(t){return Tt.includes(t)}));return n.length!==t.length&&console.warn("".concat(e.tagName,": Invalid value found in: flipPlacements. Try any of these: ").concat(Tt.map((function(t){return'"'.concat(t,'"')})).join(", ").trim()),{el:e}),n}function jt(t,e){var n=["left","right"];return"rtl"===(0,l.a)(t)&&n.reverse(),e.replace(/-leading/gi,"-start").replace(/-trailing/gi,"-end").replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}function St(t,e){return Dt.apply(this,arguments)}function Dt(){return Dt=(0,c.Z)((0,o.Z)().mark((function t(e,n){var r,i=arguments;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=i.length>2&&void 0!==i[2]&&i[2],e.open){t.next=3;break}return t.abrupt("return");case 3:return t.abrupt("return",r?Ct(n):Ht(n));case 4:case"end":return t.stop()}}),t)}))),Dt.apply(this,arguments)}var Ct=(0,s.d)(Ht,100,{leading:!0,maxWait:100});function Ht(t){return Wt.apply(this,arguments)}function Wt(){return(Wt=(0,c.Z)((0,o.Z)().mark((function t(e){var n,r,i,a,u,c,l,s,f,d,p,v,m,g,h,x,b,y,w,Z,k,R,O,T,A,E,P;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.referenceEl,r=e.floatingEl,i=e.overlayPositioning,a=void 0===i?"absolute":i,u=e.placement,c=e.disableFlip,l=e.flipPlacements,s=e.offsetDistance,f=e.offsetSkidding,d=e.includeArrow,p=void 0!==d&&d,v=e.arrowEl,m=e.type,n&&r&&(!p||v)){t.next=3;break}return t.abrupt("return",null);case 3:return t.next=5,kt;case 5:return t.next=7,yt(n,r,{strategy:a,placement:"auto"===u||"auto-start"===u||"auto-end"===u?void 0:jt(r,u),middleware:Pt({placement:u,disableFlip:c,flipPlacements:l,offsetDistance:s,offsetSkidding:f,arrowEl:v,type:m})});case 7:h=t.sent,x=h.x,b=h.y,y=h.placement,w=h.strategy,(null===(Z=h.middlewareData)||void 0===Z?void 0:Z.arrow)&&(k=Z.arrow,R=k.x,O=k.y,Object.assign(v.style,{left:null!=R?"".concat(R,"px"):"",top:null!=O?"".concat(O,"px"):""})),T=null===(g=null===Z||void 0===Z?void 0:Z.hide)||void 0===g?void 0:g.referenceHidden,E=(A=T?"hidden":null)?"none":null,r.setAttribute(Ot,y),P="translate(".concat(Math.round(x),"px,").concat(Math.round(b),"px)"),Object.assign(r.style,{visibility:A,pointerEvents:E,position:w,top:"0",left:"0",transform:P});case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Nt=new WeakMap;function Mt(t,e,n){if(n&&e){Ft(t,e,n);var r=t.overlayPositioning;Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:r}),"absolute"===r&&_t(n);var i=bt;Nt.set(t,i(e,n,(function(){return t.reposition()})))}}function Ft(t,e,n){if(n&&e){It(n).removeEventListener("transitionend",zt);var r=Nt.get(t);r&&r(),Nt.delete(t)}}var Vt=Math.ceil(Math.hypot(4,4));function Bt(t){t&&"absolute"===t.style.position&&It(t).addEventListener("transitionend",zt)}function It(t){return t.shadowRoot||t}function zt(t){var e=t.target;if("opacity"===t.propertyName&&e.classList.contains(Et.animation)){var n=function(t){return(0,l.c)(t,"[".concat(Ot,"]"))}(e);_t(n),It(n).removeEventListener("transitionend",zt)}}function _t(t){t.style.transform="",t.style.top="0",t.style.left="0"}},44925:function(t,e,n){function r(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=74499.05902367.chunk.js.map
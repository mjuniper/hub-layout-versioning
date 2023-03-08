/*! For license information please see 17120.616d85fe.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[17120],{95101:function(r,n,e){e.d(n,{a:function(){return t},b:function(){return a},c:function(){return o},g:function(){return i}});var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:"undefined"!==typeof self?self:{};function a(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function o(r,n,e){return r(e={path:n,exports:{},require:function(r,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}function i(r){if(r.__esModule)return r;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}},3511:function(r,n,e){e.d(n,{a:function(){return h},b:function(){return j},c:function(){return b},d:function(){return y},e:function(){return S},f:function(){return k},g:function(){return f},h:function(){return c},i:function(){return E},j:function(){return d},k:function(){return O},l:function(){return u},m:function(){return w},n:function(){return s},q:function(){return v},s:function(){return q},t:function(){return Z}});var t=e(74165),a=e(93433),o=e(15861),i=e(45548),l=e(55055);function u(r){return r?r.id=r.id||"".concat(r.tagName.toLowerCase(),"-").concat((0,l.g)()):""}function s(r){return Array.isArray(r)?r:Array.from(r)}function c(r){var n=b(r,".".concat(i.C.darkTheme,", .").concat(i.C.lightTheme));return(null===n||void 0===n?void 0:n.classList.contains("calcite-theme-dark"))?"dark":"light"}function h(r){var n=b(r,"[".concat("dir","]"));return n?n.getAttribute("dir"):"ltr"}function f(r,n,e){var t="[".concat(n,"]"),a=r.closest(t);return a?a.getAttribute(n):e}function d(r){return r.getRootNode()}function g(r){return r.host||null}function v(r,n){var e=n.selector,t=n.id;return function r(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);var a=d(n),o=t?"getElementById"in a?a.getElementById(t):null:e?a.querySelector(e):null,i=g(a);return o||(i?r(i):null)}(r)}function b(r,n){return function r(e){return e?e.closest(n)||r(g(d(e))):null}(r)}function p(r,n){return m(r,n)}function m(r,n){if(r){var e=n(r);if(void 0!==e)return e;var t=r.parentNode;return m(t instanceof ShadowRoot?t.host:t,n)}}function y(r,n){return!!p(n,(function(n){return n===r||void 0}))}function w(r){return"function"===typeof(null===r||void 0===r?void 0:r.setFocus)}function k(r){return M.apply(this,arguments)}function M(){return(M=(0,o.Z)((0,t.Z)().mark((function r(n){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}return r.abrupt("return");case 2:return r.abrupt("return",w(n)?n.setFocus():n.focus());case 3:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var x=":not([slot])";function j(r,n,e){n&&!Array.isArray(n)&&"string"!==typeof n&&(e=n,n=null);var t=n?Array.isArray(n)?n.map((function(r){return'[slot="'.concat(r,'"]')})).join(","):'[slot="'.concat(n,'"]'):x;return(null===e||void 0===e?void 0:e.all)?function(r,n,e){var t=n===x?A(r,x):Array.from(r.querySelectorAll(n));t=e&&!1===e.direct?t:t.filter((function(n){return n.parentElement===r})),t=(null===e||void 0===e?void 0:e.matches)?t.filter((function(r){return null===r||void 0===r?void 0:r.matches(e.matches)})):t;var o=null===e||void 0===e?void 0:e.selector;return o?t.map((function(r){return Array.from(r.querySelectorAll(o))})).reduce((function(r,n){return[].concat((0,a.Z)(r),(0,a.Z)(n))}),[]).filter((function(r){return!!r})):t}(r,t,e):function(r,n,e){var t=n===x?A(r,x)[0]||null:r.querySelector(n);t=e&&!1===e.direct||(null===t||void 0===t?void 0:t.parentElement)===r?t:null,t=(null===e||void 0===e?void 0:e.matches)?(null===t||void 0===t?void 0:t.matches(e.matches))?t:null:t;var a=null===e||void 0===e?void 0:e.selector;return a?null===t||void 0===t?void 0:t.querySelector(a):t}(r,t,e)}function A(r,n){return r?Array.from(r.children||[]).filter((function(r){return null===r||void 0===r?void 0:r.matches(n)})):[]}function O(r,n){return Array.from(r.children).filter((function(r){return r.matches(n)}))}function q(r,n,e){return"string"===typeof n&&""!==n?n:""===n?r[e]:void 0}function S(r,n){return!(n.left>r.right||n.right<r.left||n.top>r.bottom||n.bottom<r.top)}function Z(r){return Boolean(r).toString()}function E(r){return!(!r.isPrimary||0!==r.button)}},55055:function(r,n,e){e.d(n,{g:function(){return t}});var t=function(){return[2,1,1,1,3].map((function(r){for(var n="",e=0;e<r;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}},97322:function(r,n,e){e.d(n,{c:function(){return L}});for(var t=e(37762),a=e(93433),o=e(29439),i=e(95101),l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},u=(0,i.c)((function(r){var n=Array.prototype.concat,e=Array.prototype.slice,t=r.exports=function(r){for(var t,a=[],o=0,i=r.length;o<i;o++){var l=r[o];(t=l)&&"string"!==typeof t&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))?a=n.call(a,e.call(l)):a.push(l)}return a};t.wrap=function(r){return function(){return r(t(arguments))}}})),s=(0,i.c)((function(r){var n=Object.hasOwnProperty,e=Object.create(null);for(var t in l)n.call(l,t)&&(e[l[t]]=t);var a=r.exports={to:{},get:{}};function o(r,n,e){return Math.min(Math.max(n,r),e)}function i(r){var n=Math.round(r).toString(16).toUpperCase();return n.length<2?"0"+n:n}a.get=function(r){var n,e;switch(r.substring(0,3).toLowerCase()){case"hsl":n=a.get.hsl(r),e="hsl";break;case"hwb":n=a.get.hwb(r),e="hwb";break;default:n=a.get.rgb(r),e="rgb"}return n?{model:e,value:n}:null},a.get.rgb=function(r){if(!r)return null;var e,t,a,i=[0,0,0,1];if(e=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=e[2],e=e[1],t=0;t<3;t++){var u=2*t;i[t]=parseInt(e.slice(u,u+2),16)}a&&(i[3]=parseInt(a,16)/255)}else if(e=r.match(/^#([a-f0-9]{3,4})$/i)){for(a=(e=e[1])[3],t=0;t<3;t++)i[t]=parseInt(e[t]+e[t],16);a&&(i[3]=parseInt(a+a,16)/255)}else if(e=r.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(t=0;t<3;t++)i[t]=parseInt(e[t+1],0);e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}else{if(!(e=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(e=r.match(/^(\w+)$/))?"transparent"===e[1]?[0,0,0,0]:n.call(l,e[1])?((i=l[e[1]])[3]=1,i):null:null;for(t=0;t<3;t++)i[t]=Math.round(2.55*parseFloat(e[t+1]));e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}for(t=0;t<3;t++)i[t]=o(i[t],0,255);return i[3]=o(i[3],0,1),i},a.get.hsl=function(r){if(!r)return null;var n=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(n){var e=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,o(parseFloat(n[2]),0,100),o(parseFloat(n[3]),0,100),o(isNaN(e)?1:e,0,1)]}return null},a.get.hwb=function(r){if(!r)return null;var n=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(n){var e=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,o(parseFloat(n[2]),0,100),o(parseFloat(n[3]),0,100),o(isNaN(e)?1:e,0,1)]}return null},a.to.hex=function(){var r=u(arguments);return"#"+i(r[0])+i(r[1])+i(r[2])+(r[3]<1?i(Math.round(255*r[3])):"")},a.to.rgb=function(){var r=u(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},a.to.rgb.percent=function(){var r=u(arguments),n=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),t=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+n+"%, "+e+"%, "+t+"%)":"rgba("+n+"%, "+e+"%, "+t+"%, "+r[3]+")"},a.to.hsl=function(){var r=u(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},a.to.hwb=function(){var r=u(arguments),n="";return r.length>=4&&1!==r[3]&&(n=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+n+")"},a.to.keyword=function(r){return e[r.slice(0,3)]}})),c={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},h={},f=0,d=Object.keys(c);f<d.length;f++){var g=d[f];h[c[g]]=g}for(var v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},b=v,p=0,m=Object.keys(v);p<m.length;p++){var y=m[p];if(!("channels"in v[y]))throw new Error("missing channels property: "+y);if(!("labels"in v[y]))throw new Error("missing channel labels property: "+y);if(v[y].labels.length!==v[y].channels)throw new Error("channel and label counts mismatch: "+y);var w=v[y],k=w.channels,M=w.labels;delete v[y].channels,delete v[y].labels,Object.defineProperty(v[y],"channels",{value:k}),Object.defineProperty(v[y],"labels",{value:M})}function x(r){var n=function(){for(var r={},n=Object.keys(b),e=n.length,t=0;t<e;t++)r[n[t]]={distance:-1,parent:null};return r}(),e=[r];for(n[r].distance=0;e.length;)for(var t=e.pop(),a=Object.keys(b[t]),o=a.length,i=0;i<o;i++){var l=a[i],u=n[l];-1===u.distance&&(u.distance=n[t].distance+1,u.parent=t,e.unshift(l))}return n}function j(r,n){return function(e){return n(r(e))}}function A(r,n){for(var e=[n[r].parent,r],t=b[n[r].parent][r],a=n[r].parent;n[a].parent;)e.unshift(n[a].parent),t=j(b[n[a].parent][a],t),a=n[a].parent;return t.conversion=e,t}v.rgb.hsl=function(r){var n,e=r[0]/255,t=r[1]/255,a=r[2]/255,o=Math.min(e,t,a),i=Math.max(e,t,a),l=i-o;i===o?n=0:e===i?n=(t-a)/l:t===i?n=2+(a-e)/l:a===i&&(n=4+(e-t)/l),(n=Math.min(60*n,360))<0&&(n+=360);var u=(o+i)/2;return[n,100*(i===o?0:u<=.5?l/(i+o):l/(2-i-o)),100*u]},v.rgb.hsv=function(r){var n,e,t,a,o,i=r[0]/255,l=r[1]/255,u=r[2]/255,s=Math.max(i,l,u),c=s-Math.min(i,l,u),h=function(r){return(s-r)/6/c+.5};return 0===c?(a=0,o=0):(o=c/s,n=h(i),e=h(l),t=h(u),i===s?a=t-e:l===s?a=1/3+n-t:u===s&&(a=2/3+e-n),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*s]},v.rgb.hwb=function(r){var n=r[0],e=r[1],t=r[2];return[v.rgb.hsl(r)[0],100*(1/255*Math.min(n,Math.min(e,t))),100*(t=1-1/255*Math.max(n,Math.max(e,t)))]},v.rgb.cmyk=function(r){var n=r[0]/255,e=r[1]/255,t=r[2]/255,a=Math.min(1-n,1-e,1-t);return[100*((1-n-a)/(1-a)||0),100*((1-e-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*a]},v.rgb.keyword=function(r){var n=h[r];if(n)return n;for(var e,t,a,o=1/0,i=0,l=Object.keys(c);i<l.length;i++){var u=l[i],s=(t=r,a=c[u],Math.pow(t[0]-a[0],2)+Math.pow(t[1]-a[1],2)+Math.pow(t[2]-a[2],2));s<o&&(o=s,e=u)}return e},v.keyword.rgb=function(r){return c[r]},v.rgb.xyz=function(r){var n=r[0]/255,e=r[1]/255,t=r[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*n+.7152*e+.0722*t),100*(.0193*n+.1192*e+.9505*t)]},v.rgb.lab=function(r){var n=v.rgb.xyz(r),e=n[0],t=n[1],a=n[2];return t/=100,a/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(e-t),200*(t-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},v.hsl.rgb=function(r){var n,e,t,a=r[0]/360,o=r[1]/100,i=r[2]/100;if(0===o)return[t=255*i,t,t];for(var l=2*i-(n=i<.5?i*(1+o):i+o-i*o),u=[0,0,0],s=0;s<3;s++)(e=a+1/3*-(s-1))<0&&e++,e>1&&e--,t=6*e<1?l+6*(n-l)*e:2*e<1?n:3*e<2?l+(n-l)*(2/3-e)*6:l,u[s]=255*t;return u},v.hsl.hsv=function(r){var n=r[0],e=r[1]/100,t=r[2]/100,a=e,o=Math.max(t,.01);return e*=(t*=2)<=1?t:2-t,a*=o<=1?o:2-o,[n,100*(0===t?2*a/(o+a):2*e/(t+e)),100*((t+e)/2)]},v.hsv.rgb=function(r){var n=r[0]/60,e=r[1]/100,t=r[2]/100,a=Math.floor(n)%6,o=n-Math.floor(n),i=255*t*(1-e),l=255*t*(1-e*o),u=255*t*(1-e*(1-o));switch(t*=255,a){case 0:return[t,u,i];case 1:return[l,t,i];case 2:return[i,t,u];case 3:return[i,l,t];case 4:return[u,i,t];case 5:return[t,i,l]}},v.hsv.hsl=function(r){var n,e,t=r[0],a=r[1]/100,o=r[2]/100,i=Math.max(o,.01);e=(2-a)*o;var l=(2-a)*i;return n=a*i,[t,100*(n=(n/=l<=1?l:2-l)||0),100*(e/=2)]},v.hwb.rgb=function(r){var n,e=r[0]/360,t=r[1]/100,a=r[2]/100,o=t+a;o>1&&(t/=o,a/=o);var i=Math.floor(6*e),l=1-a;n=6*e-i,0!==(1&i)&&(n=1-n);var u,s,c,h=t+n*(l-t);switch(i){default:case 6:case 0:u=l,s=h,c=t;break;case 1:u=h,s=l,c=t;break;case 2:u=t,s=l,c=h;break;case 3:u=t,s=h,c=l;break;case 4:u=h,s=t,c=l;break;case 5:u=l,s=t,c=h}return[255*u,255*s,255*c]},v.cmyk.rgb=function(r){var n=r[0]/100,e=r[1]/100,t=r[2]/100,a=r[3]/100;return[255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a))]},v.xyz.rgb=function(r){var n,e,t,a=r[0]/100,o=r[1]/100,i=r[2]/100;return e=-.9689*a+1.8758*o+.0415*i,t=.0557*a+-.204*o+1.057*i,n=(n=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(n=Math.min(Math.max(0,n),1)),255*(e=Math.min(Math.max(0,e),1)),255*(t=Math.min(Math.max(0,t),1))]},v.xyz.lab=function(r){var n=r[0],e=r[1],t=r[2];return e/=100,t/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(n-e),200*(e-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},v.lab.xyz=function(r){var n,e,t,a=r[0];n=r[1]/500+(e=(a+16)/116),t=e-r[2]/200;var o=Math.pow(e,3),i=Math.pow(n,3),l=Math.pow(t,3);return e=o>.008856?o:(e-16/116)/7.787,n=i>.008856?i:(n-16/116)/7.787,t=l>.008856?l:(t-16/116)/7.787,[n*=95.047,e*=100,t*=108.883]},v.lab.lch=function(r){var n,e=r[0],t=r[1],a=r[2];return(n=360*Math.atan2(a,t)/2/Math.PI)<0&&(n+=360),[e,Math.sqrt(t*t+a*a),n]},v.lch.lab=function(r){var n=r[0],e=r[1],t=r[2]/360*2*Math.PI;return[n,e*Math.cos(t),e*Math.sin(t)]},v.rgb.ansi16=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=(0,o.Z)(r,3),t=e[0],a=e[1],i=e[2],l=null===n?v.rgb.hsv(r)[2]:n;if(0===(l=Math.round(l/50)))return 30;var u=30+(Math.round(i/255)<<2|Math.round(a/255)<<1|Math.round(t/255));return 2===l&&(u+=60),u},v.hsv.ansi16=function(r){return v.rgb.ansi16(v.hsv.rgb(r),r[2])},v.rgb.ansi256=function(r){var n=r[0],e=r[1],t=r[2];return n===e&&e===t?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(e/255*5)+Math.round(t/255*5)},v.ansi16.rgb=function(r){var n=r%10;if(0===n||7===n)return r>50&&(n+=3.5),[n=n/10.5*255,n,n];var e=.5*(1+~~(r>50));return[(1&n)*e*255,(n>>1&1)*e*255,(n>>2&1)*e*255]},v.ansi256.rgb=function(r){if(r>=232){var n=10*(r-232)+8;return[n,n,n]}var e;return r-=16,[Math.floor(r/36)/5*255,Math.floor((e=r%36)/6)/5*255,e%6/5*255]},v.rgb.hex=function(r){var n=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},v.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var e=n[0];3===n[0].length&&(e=e.split("").map((function(r){return r+r})).join(""));var t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},v.rgb.hcg=function(r){var n,e=r[0]/255,t=r[1]/255,a=r[2]/255,o=Math.max(Math.max(e,t),a),i=Math.min(Math.min(e,t),a),l=o-i;return n=l<=0?0:o===e?(t-a)/l%6:o===t?2+(a-e)/l:4+(e-t)/l,n/=6,[360*(n%=1),100*l,100*(l<1?i/(1-l):0)]},v.hsl.hcg=function(r){var n=r[1]/100,e=r[2]/100,t=e<.5?2*n*e:2*n*(1-e),a=0;return t<1&&(a=(e-.5*t)/(1-t)),[r[0],100*t,100*a]},v.hsv.hcg=function(r){var n=r[1]/100,e=r[2]/100,t=n*e,a=0;return t<1&&(a=(e-t)/(1-t)),[r[0],100*t,100*a]},v.hcg.rgb=function(r){var n=r[0]/360,e=r[1]/100,t=r[2]/100;if(0===e)return[255*t,255*t,255*t];var a,o=[0,0,0],i=n%1*6,l=i%1,u=1-l;switch(Math.floor(i)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=u,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=u,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=u}return a=(1-e)*t,[255*(e*o[0]+a),255*(e*o[1]+a),255*(e*o[2]+a)]},v.hcg.hsv=function(r){var n=r[1]/100,e=n+r[2]/100*(1-n),t=0;return e>0&&(t=n/e),[r[0],100*t,100*e]},v.hcg.hsl=function(r){var n=r[1]/100,e=r[2]/100*(1-n)+.5*n,t=0;return e>0&&e<.5?t=n/(2*e):e>=.5&&e<1&&(t=n/(2*(1-e))),[r[0],100*t,100*e]},v.hcg.hwb=function(r){var n=r[1]/100,e=n+r[2]/100*(1-n);return[r[0],100*(e-n),100*(1-e)]},v.hwb.hcg=function(r){var n=r[1]/100,e=1-r[2]/100,t=e-n,a=0;return t<1&&(a=(e-t)/(1-t)),[r[0],100*t,100*a]},v.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},v.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},v.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},v.gray.hsl=function(r){return[0,0,r[0]]},v.gray.hsv=v.gray.hsl,v.gray.hwb=function(r){return[0,100,r[0]]},v.gray.cmyk=function(r){return[0,0,0,r[0]]},v.gray.lab=function(r){return[r[0],0,0]},v.gray.hex=function(r){var n=255&Math.round(r[0]/100*255),e=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(e.length)+e},v.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]};var O={};Object.keys(b).forEach((function(r){O[r]={},Object.defineProperty(O[r],"channels",{value:b[r].channels}),Object.defineProperty(O[r],"labels",{value:b[r].labels});var n=function(r){for(var n=x(r),e={},t=Object.keys(n),a=t.length,o=0;o<a;o++){var i=t[o];null!==n[i].parent&&(e[i]=A(i,n))}return e}(r);Object.keys(n).forEach((function(e){var t=n[e];O[r][e]=function(r){var n=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var a=e[0];if(void 0===a||null===a)return a;a.length>1&&(e=a);var o=r(e);if("object"===typeof o)for(var i=o.length,l=0;l<i;l++)o[l]=Math.round(o[l]);return o};return"conversion"in r&&(n.conversion=r.conversion),n}(t),O[r][e].raw=function(r){var n=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var a=e[0];return void 0===a||null===a?a:(a.length>1&&(e=a),r(e))};return"conversion"in r&&(n.conversion=r.conversion),n}(t)}))}));for(var q=O,S=["keyword","gray","hex"],Z={},E=0,F=Object.keys(q);E<F.length;E++){var z=F[E];Z[(0,a.Z)(q[z].labels).sort().join("")]=z}var P={};function I(r,n){if(!(this instanceof I))return new I(r,n);if(n&&n in S&&(n=null),n&&!(n in q))throw new Error("Unknown model: "+n);var e,t;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof I)this.model=r.model,this.color=(0,a.Z)(r.color),this.valpha=r.valpha;else if("string"===typeof r){var o=s.get(r);if(null===o)throw new Error("Unable to parse color from string: "+r);this.model=o.model,t=q[this.model].channels,this.color=o.value.slice(0,t),this.valpha="number"===typeof o.value[t]?o.value[t]:1}else if(r.length>0){this.model=n||"rgb",t=q[this.model].channels;var i=Array.prototype.slice.call(r,0,t);this.color=T(i,t),this.valpha="number"===typeof r[t]?r[t]:1}else if("number"===typeof r)this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var l=Object.keys(r);"alpha"in r&&(l.splice(l.indexOf("alpha"),1),this.valpha="number"===typeof r.alpha?r.alpha:0);var u=l.sort().join("");if(!(u in Z))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=Z[u];var c=q[this.model].labels,h=[];for(e=0;e<c.length;e++)h.push(r[c[e]]);this.color=T(h)}if(P[this.model])for(t=q[this.model].channels,e=0;e<t;e++){var f=P[this.model][e];f&&(this.color[e]=f(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}I.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var n=this.model in s.to?this:this.rgb(),e=1===(n=n.round("number"===typeof r?r:1)).valpha?n.color:[].concat((0,a.Z)(n.color),[this.valpha]);return s.to[n.model](e)},percentString:function(r){var n=this.rgb().round("number"===typeof r?r:1),e=1===n.valpha?n.color:[].concat((0,a.Z)(n.color),[this.valpha]);return s.to.rgb.percent(e)},array:function(){return 1===this.valpha?(0,a.Z)(this.color):[].concat((0,a.Z)(this.color),[this.valpha])},object:function(){for(var r={},n=q[this.model].channels,e=q[this.model].labels,t=0;t<n;t++)r[e[t]]=this.color[t];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new I([].concat((0,a.Z)(this.color.map(function(r){return function(n){return function(r,n){return Number(r.toFixed(n))}(n,r)}}(r))),[this.valpha]),this.model)},alpha:function(r){return void 0!==r?new I([].concat((0,a.Z)(this.color),[Math.max(0,Math.min(1,r))]),this.model):this.valpha},red:U("rgb",0,$(255)),green:U("rgb",1,$(255)),blue:U("rgb",2,$(255)),hue:U(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:U("hsl",1,$(100)),lightness:U("hsl",2,$(100)),saturationv:U("hsv",1,$(100)),value:U("hsv",2,$(100)),chroma:U("hcg",1,$(100)),gray:U("hcg",2,$(100)),white:U("hwb",1,$(100)),wblack:U("hwb",2,$(100)),cyan:U("cmyk",0,$(100)),magenta:U("cmyk",1,$(100)),yellow:U("cmyk",2,$(100)),black:U("cmyk",3,$(100)),x:U("xyz",0,$(95.047)),y:U("xyz",1,$(100)),z:U("xyz",2,$(108.833)),l:U("lab",0,$(100)),a:U("lab",1),b:U("lab",2),keyword:function(r){return void 0!==r?new I(r):q[this.model].keyword(this.color)},hex:function(r){return void 0!==r?new I(r):s.to.hex(this.rgb().round().color)},hexa:function(r){if(void 0!==r)return new I(r);var n=this.rgb().round().color,e=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===e.length&&(e="0"+e),s.to.hex(n)+e},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){var r,n=this.rgb().color,e=[],a=(0,t.Z)(n.entries());try{for(a.s();!(r=a.n()).done;){var i=(0,o.Z)(r.value,2),l=i[0],u=i[1]/255;e[l]=u<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4)}}catch(s){a.e(s)}finally{a.f()}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var n=this.luminosity(),e=r.luminosity();return n>e?(n+.05)/(e+.05):(e+.05)/(n+.05)},level:function(r){var n=this.contrast(r);return n>=7?"AAA":n>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(2126*r[0]+7152*r[1]+722*r[2])/1e4<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),n=0;n<3;n++)r.color[n]=255-r.color[n];return r},lighten:function(r){var n=this.hsl();return n.color[2]+=n.color[2]*r,n},darken:function(r){var n=this.hsl();return n.color[2]-=n.color[2]*r,n},saturate:function(r){var n=this.hsl();return n.color[1]+=n.color[1]*r,n},desaturate:function(r){var n=this.hsl();return n.color[1]-=n.color[1]*r,n},whiten:function(r){var n=this.hwb();return n.color[1]+=n.color[1]*r,n},blacken:function(r){var n=this.hwb();return n.color[2]+=n.color[2]*r,n},grayscale:function(){var r=this.rgb().color,n=.3*r[0]+.59*r[1]+.11*r[2];return I.rgb(n,n,n)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var n=this.hsl(),e=n.color[0];return e=(e=(e+r)%360)<0?360+e:e,n.color[0]=e,n},mix:function(r,n){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var e=r.rgb(),t=this.rgb(),a=void 0===n?.5:n,o=2*a-1,i=e.alpha()-t.alpha(),l=((o*i===-1?o:(o+i)/(1+o*i))+1)/2,u=1-l;return I.rgb(l*e.red()+u*t.red(),l*e.green()+u*t.green(),l*e.blue()+u*t.blue(),e.alpha()*a+t.alpha()*(1-a))}};for(var C=function(){var r=_[N];if(S.includes(r))return"continue";var n=q[r].channels;I.prototype[r]=function(){if(this.model===r)return new I(this);for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.length>0?new I(e,r):new I([].concat((0,a.Z)(D(q[this.model][r].raw(this.color))),[this.valpha]),r)},I[r]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var o=t[0];return"number"===typeof o&&(o=T(t,n)),new I(o,r)}},N=0,_=Object.keys(q);N<_.length;N++)C();function U(r,n,e){r=Array.isArray(r)?r:[r];var a,o=(0,t.Z)(r);try{for(o.s();!(a=o.n()).done;){var i=a.value;(P[i]||(P[i]=[]))[n]=e}}catch(l){o.e(l)}finally{o.f()}return r=r[0],function(t){var a;return void 0!==t?(e&&(t=e(t)),(a=this[r]()).color[n]=t,a):(a=this[r]().color[n],e&&(a=e(a)),a)}}function $(r){return function(n){return Math.max(0,Math.min(r,n))}}function D(r){return Array.isArray(r)?r:[r]}function T(r,n){for(var e=0;e<n;e++)"number"!==typeof r[e]&&(r[e]=0);return r}var L=I},37762:function(r,n,e){e.d(n,{Z:function(){return a}});var t=e(40181);function a(r,n){var e="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=(0,t.Z)(r))||n&&r&&"number"===typeof r.length){e&&(r=e);var a=0,o=function(){};return{s:o,n:function(){return a>=r.length?{done:!0}:{done:!1,value:r[a++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return l=r.done,r},e:function(r){u=!0,i=r},f:function(){try{l||null==e.return||e.return()}finally{if(u)throw i}}}}}}]);
//# sourceMappingURL=17120.616d85fe.chunk.js.map
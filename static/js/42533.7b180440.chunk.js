/*! For license information please see 42533.7b180440.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[42533],{11786:function(t,n,e){function r(t){return"Enter"===t||" "===t}e.d(n,{i:function(){return r},n:function(){return i}});var i=["0","1","2","3","4","5","6","7","8","9"]},42533:function(t,n,e){e.d(n,{a:function(){return L},b:function(){return k},c:function(){return F},d:function(){return I},g:function(){return O},i:function(){return f},n:function(){return A},p:function(){return g},s:function(){return d},u:function(){return D}});var r=e(93433),i=e(29439),u=e(15671),o=e(43144),a=e(11786),c=e(1118),l=e(3511),s=function(){function t(n){if((0,u.Z)(this,t),n instanceof t)return n;var e=String(n).split(".").concat(""),r=(0,i.Z)(e,2),o=r[0],a=r[1];this.value=BigInt(o+a.padEnd(t.DECIMALS,"0").slice(0,t.DECIMALS))+BigInt(t.ROUNDED&&a[t.DECIMALS]>="5"),this.isNegative="-"===n.charAt(0)}return(0,o.Z)(t,[{key:"toString",value:function(){var n=this.value.toString().replace(new RegExp("-","g"),"").padStart(t.DECIMALS+1,"0"),e=n.slice(0,-t.DECIMALS),r=n.slice(-t.DECIMALS).replace(/\.?0+$/,""),i=e.concat(r.length?"."+r:"");return"".concat(this.isNegative?"-":"").concat(i)}},{key:"formatToParts",value:function(n){var e=this.value.toString().replace(new RegExp("-","g"),"").padStart(t.DECIMALS+1,"0"),r=e.slice(0,-t.DECIMALS),i=e.slice(-t.DECIMALS).replace(/\.?0+$/,""),u=n.formatToParts(BigInt(r));return this.isNegative&&u.unshift({type:"minusSign",value:A.minusSign}),i.length&&(u.push({type:"decimal",value:A.decimal}),i.split("").forEach((function(t){return u.push({type:"fraction",value:t})}))),u}},{key:"format",value:function(n){var e=this.value.toString().replace(new RegExp("-","g"),"").padStart(t.DECIMALS+1,"0"),r=e.slice(0,-t.DECIMALS),i=e.slice(-t.DECIMALS).replace(/\.?0+$/,""),u="".concat(this.isNegative?A.minusSign:"").concat(n.format(BigInt(r))),o=i.length?"".concat(A.decimal).concat(n.format(BigInt(i))):"";return"".concat(u).concat(o)}},{key:"add",value:function(n){return t.fromBigInt(this.value+new t(n).value)}},{key:"subtract",value:function(n){return t.fromBigInt(this.value-new t(n).value)}},{key:"multiply",value:function(n){return t._divRound(this.value*new t(n).value,t.SHIFT)}},{key:"divide",value:function(n){return t._divRound(this.value*t.SHIFT,new t(n).value)}}],[{key:"_divRound",value:function(n,e){return t.fromBigInt(n/e+(t.ROUNDED?n*BigInt(2)/e%BigInt(2):BigInt(0)))}},{key:"fromBigInt",value:function(n){return Object.assign(Object.create(t.prototype),{value:n})}}]),t}();function f(t){return!(!t||isNaN(Number(t)))}function g(t){return t&&(n=t,a.n.some((function(t){return n.includes(t)})))?b(t,(function(t){var n=!1,e=t.split("").filter((function(t,e){return t.match(/\./g)&&!n?(n=!0,!0):!(!t.match(/\-/g)||0!==e)||a.n.includes(t)})).reduce((function(t,n){return t+n}));return f(e)?new s(e).toString():""})):"";var n}s.DECIMALS=100,s.ROUNDED=!0,s.SHIFT=BigInt("1"+"0".repeat(s.DECIMALS));var m=/^([-0])0+(?=\d)/,p=/(?!^\.)\.$/,v=/(?!^-)-/g,h=/^-\b0\b\.?0*$/,d=function(t){return b(t,(function(t){var n=t.replace(v,"").replace(p,"").replace(m,"$1");return f(n)?h.test(n)?n:new s(n).toString():t}))};function b(t,n){if(!t)return t;var e=t.toLowerCase().indexOf("e")+1;return e?t.replace(/[eE]*$/g,"").substring(0,e).concat(t.slice(e).replace(/[eE]/g,"")).split(/[eE]/).map((function(t,e){return n(1===e?t.replace(/\./g,""):t)})).join("e").replace(/^e/,"1e"):n(t)}var y="en",S=["ar","bg","bs","ca","cs","da","de","de-CH","el",y,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","nb","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],_=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],E=function(t){return _.includes(t)},w=(new Intl.NumberFormat).resolvedOptions().numberingSystem,I="arab"!==w&&E(w)?w:"latn",k=function(t){return E(t)?t:I};function O(t){return S.indexOf(t)>-1?t:t?"nb"===(t=t.toLowerCase())?"no":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,(function(t,n,e){return"".concat(n,"-").concat(e.toUpperCase())})),S.includes(t)||(t=t.split("-")[0])),S.includes(t)?t:y):y}var C=new Set;function F(t){D(t),0===C.size&&R.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),C.add(t)}function D(t){t.effectiveLocale=function(t){var n;return t.el.lang||t.locale||(null===(n=(0,l.c)(t.el,"[lang]"))||void 0===n?void 0:n.lang)||document.documentElement.lang||y}(t)}function L(t){C.delete(t),0===C.size&&R.disconnect()}var R=(0,c.c)("mutation",(function(t){t.forEach((function(t){var n=t.target;C.forEach((function(t){var e=!(!t.locale||t.el.lang),r=!(0,l.d)(n,t.el);if(!e&&!r){var i=(0,l.c)(t.el,"[lang]");if(i){var u=i.lang;t.effectiveLocale=i.hasAttribute("lang")&&""===u?y:u}else t.effectiveLocale=y}}))}))}));var A=new(function(){function t(){var n=this;(0,u.Z)(this,t),this.delocalize=function(t){return n._numberFormatOptions?b(t,(function(t){return t.trim().replace(new RegExp("[".concat(n._minusSign,"]"),"g"),"-").replace(new RegExp("[".concat(n._group,"]"),"g"),"").replace(new RegExp("[".concat(n._decimal,"]"),"g"),".").replace(new RegExp("[".concat(n._digits.join(""),"]"),"g"),n._getDigitIndex)})):t},this.localize=function(t){return n._numberFormatOptions?b(t,(function(t){return f(t.trim())?new s(t.trim()).format(n._numberFormatter).replace(new RegExp("[".concat(n._actualGroup,"]"),"g"),n._group):t})):t}}return(0,o.Z)(t,[{key:"group",get:function(){return this._group}},{key:"decimal",get:function(){return this._decimal}},{key:"minusSign",get:function(){return this._minusSign}},{key:"digits",get:function(){return this._digits}},{key:"numberFormatter",get:function(){return this._numberFormatter}},{key:"numberFormatOptions",get:function(){return this._numberFormatOptions},set:function(t){if(t.locale=O(null===t||void 0===t?void 0:t.locale),t.numberingSystem=k(null===t||void 0===t?void 0:t.numberingSystem),(this._numberFormatOptions||t.locale!==y||t.numberingSystem!==I||2!==Object.keys(t).length)&&JSON.stringify(this._numberFormatOptions)!==JSON.stringify(t)){this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=(0,r.Z)(new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)).reverse();var n=new Map(this._digits.map((function(t,n){return[t,n]}))),e=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=e.find((function(t){return"group"===t.type})).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=e.find((function(t){return"decimal"===t.type})).value,this._minusSign=e.find((function(t){return"minusSign"===t.type})).value,this._getDigitIndex=function(t){return n.get(t)}}}}]),t}())},1118:function(t,n,e){e.d(n,{c:function(){return l}});var r=e(15671),i=e(43144),u=e(11752),o=e(61120),a=e(60136),c=e(92572);function l(t,n,e){var l=function(t){var n=function(t){(0,a.Z)(e,t);var n=(0,c.Z)(e);function e(t){var i;return(0,r.Z)(this,e),(i=n.call(this,t)).observedEntry=[],i.callback=t,i}return(0,i.Z)(e,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,u.Z)((0,o.Z)(e.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,r=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,u.Z)((0,o.Z)(e.prototype),"takeRecords",this).call(this),this),this.disconnect(),r.forEach((function(t){return n.observe(t.target,t.options)}))}}]),e}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new l(n,e)}},11752:function(t,n,e){e.d(n,{Z:function(){return u}});var r=e(61120);function i(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=(0,r.Z)(t)););return t}function u(){return u="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,n,e){var r=i(t,n);if(r){var u=Object.getOwnPropertyDescriptor(r,n);return u.get?u.get.call(arguments.length<3?t:e):u.value}},u.apply(this,arguments)}}}]);
//# sourceMappingURL=42533.7b180440.chunk.js.map
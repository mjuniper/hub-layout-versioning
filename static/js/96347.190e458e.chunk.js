"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[96347,57309,65905,16354],{44925:function(e,t,i){function n(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}i.d(t,{Z:function(){return n}})},65905:function(e,t,i){i.d(t,{V:function(){return d},b:function(){return l}});var n=i(42265),a=i(76200),r=i(10064),o=i(32718),s=i(35995),u=o.Z.getLogger("esri.assets");function l(e,t){return(0,a.default)(d(e),t)}function d(e){if(!n.Z.assetsPath)throw u.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new r.Z("assets:path-not-set","config.assetsPath is not set");return(0,s.v_)(n.Z.assetsPath,e)}},84397:function(e,t,i){i.d(t,{c:function(){return n},g:function(){return a}});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},18759:function(e,t,i){i.d(t,{WJ:function(){return m},Xq:function(){return f},an:function(){return c},lN:function(){return n}});var n,a,r=i(29439),o=i(37762),s=i(15671),u=i(43144),l=i(92026),d=i(27546),c=-3;(a=n||(n={}))[a.ALL=0]="ALL",a[a.SOME=1]="SOME";var f=function(){function e(t,i,n){(0,s.Z)(this,e),this._namespace=t,this._storage=i,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",n&&(this._storage.registerRemoveFunc(this._namespace,n),this._removeFunc=!0)}return(0,u.Z)(e,[{key:"destroy",value:function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}},{key:"namespace",get:function(){return this._namespace.slice(0,-1)}},{key:"hitRate",get:function(){return this._hit/(this._hit+this._miss)}},{key:"size",get:function(){return this._storage.size}},{key:"maxSize",get:function(){return this._storage.maxSize}},{key:"resetHitRate",value:function(){this._hit=this._miss=0}},{key:"put",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this._storage.put(this._namespace+e,t,i,n)}},{key:"get",value:function(e){var t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}},{key:"pop",value:function(e){var t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}},{key:"updateSize",value:function(e,t,i){this._storage.updateSize(this._namespace+e,t,i)}},{key:"clear",value:function(){this._storage.clear(this._namespace)}},{key:"clearAll",value:function(){this._storage.clearAll()}},{key:"getStats",value:function(){return this._storage.getStats()}},{key:"resetStats",value:function(){this._storage.resetStats()}}]),e}(),m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;(0,s.Z)(this,e),this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new d.Z,this._users=new d.Z}return(0,u.Z)(e,[{key:"destroy",value:function(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}},{key:"register",value:function(e){this._users.push(e)}},{key:"deregister",value:function(e){this._users.removeUnordered(e)}},{key:"registerRemoveFunc",value:function(e,t){this._removeFuncs.push([e,t])}},{key:"deregisterRemoveFunc",value:function(e){this._removeFuncs.filterInPlace((function(t){return t[0]!==e}))}},{key:"size",get:function(){return this._size}},{key:"maxSize",get:function(){return this._maxSize},set:function(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}},{key:"put",value:function(e,t,i,a){var r=this._db.get(e);if(r&&(this._size-=r.size,this._db.delete(e),r.entry!==t&&this._notifyRemove(e,r.entry,n.ALL)),i>this._maxSize)this._notifyRemove(e,t,n.ALL);else if(void 0!==t)if(!i||i<0)console.warn("Refusing to cache entry with invalid size "+i);else{var o=1+Math.max(a,c)-c;this._db.set(e,{entry:t,size:i,lifetime:o,lives:o}),this._size+=i,this._checkSizeLimit()}else console.warn("Refusing to cache undefined entry ")}},{key:"updateSize",value:function(e,t,i){var a=this._db.get(e);if(a&&a.entry===t){for(this._size-=a.size;i>this._maxSize;){var r=this._notifyRemove(e,t,n.SOME);if(!((0,l.pC)(r)&&r>0))return void this._db.delete(e);i=r}a.size=i,this._size+=i,this._checkSizeLimit()}}},{key:"pop",value:function(e){var t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}},{key:"get",value:function(e){var t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}},{key:"getStats",value:function(){var e=this,t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},i={},n=new Array;this._db.forEach((function(t,a){var r=t.lifetime;n[r]=(n[r]||0)+t.size,e._users.forAll((function(e){var n=e.namespace;if(a.startsWith(n)){var r=i[n]||0;i[n]=r+t.size}}))}));var a={};this._users.forAll((function(e){var t=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){var n=i[t]||0;i[t]=n,a[t]=Math.round(100*e.hitRate)+"%"}else a[t]="0%"}));var r=Object.keys(i);r.sort((function(e,t){return i[t]-i[e]})),r.forEach((function(e){return t[e]=Math.round(i[e]/Math.pow(2,20))+"MB / "+a[e]}));for(var o=n.length-1;o>=0;--o){var s=n[o];s&&(t["Priority "+(o+c-1)]=Math.round(s/this.size*100)+"%")}return t}},{key:"resetStats",value:function(){this._hit=this._miss=0,this._users.forAll((function(e){return e.resetHitRate()}))}},{key:"clear",value:function(e){var t=this;this._db.forEach((function(i,a){a.startsWith(e)&&(t._size-=i.size,t._db.delete(a),t._notifyRemove(a,i.entry,n.ALL))}))}},{key:"clearAll",value:function(){var e=this;this._db.forEach((function(t,i){return e._notifyRemove(i,t.entry,n.ALL)})),this._size=0,this._db.clear()}},{key:"_getHitRate",value:function(){return this._hit/(this._hit+this._miss)}},{key:"_notifyRemove",value:function(e,t,i){var n;return this._removeFuncs.some((function(a){if(e.startsWith(a[0])){var r=a[1](t,i);return"number"==typeof r&&(n=r),!0}return!1})),n}},{key:"_checkSizeLimit",value:function(){if(!(this._size<=this._maxSize)){var e,t=(0,o.Z)(this._db);try{for(t.s();!(e=t.n()).done;){var i=(0,r.Z)(e.value,2),a=i[0],s=i[1];if(this._db.delete(a),s.lives<=1){this._size-=s.size;var u=this._notifyRemove(a,s.entry,n.SOME);(0,l.pC)(u)&&u>0&&(this._size+=u,s.lives=s.lifetime,s.size=u,this._db.set(a,s))}else--s.lives,this._db.set(a,s);if(this._size<=.9*this.maxSize)return}}catch(d){t.e(d)}finally{t.f()}}}}]),e}()},48732:function(e,t,i){i.d(t,{Hg:function(){return v},V7:function(){return h},uD:function(){return y},xb:function(){return S}});var n=i(4942),a=i(37762),r=i(31319),o=i(80987),s=i(92026),u=i(23879),l=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function d(e){return e instanceof r.Z}function c(e){return e instanceof o.Z?Object.keys(e.items):d(e)?(0,u.vw)(e).keys():e?Object.keys(e):[]}function f(e,t){return e instanceof o.Z?e.items[t]:e[t]}function m(e){return e?e.declaredClass:null}function p(e,t){var i=e.diff;if(i&&"function"==typeof i)return i(e,t);var r=c(e),o=c(t);if(0!==r.length||0!==o.length){if(!r.length||!o.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};var u,y=o.filter((function(e){return!r.includes(e)})),h=r.filter((function(e){return!o.includes(e)})),v=r.filter((function(i){return o.includes(i)&&f(e,i)!==f(t,i)})).concat(y,h).sort(),S=m(e);if(S&&l.includes(S)&&v.length)return{type:"complete",oldValue:e,newValue:t};var T,g=d(e)&&d(t),_=(0,a.Z)(v);try{for(_.s();!(T=_.n()).done;){var A=T.value,b=f(e,A),k=f(t,A),Z=void 0;if((g||"function"!=typeof b&&"function"!=typeof k)&&b!==k&&(null!=b||null!=k)){if(i&&i[A]&&"function"==typeof i[A])Z=i[A](b,k);else if(b instanceof Date&&k instanceof Date){if(b.getTime()===k.getTime())continue;Z={type:"complete",oldValue:b,newValue:k}}else Z="object"==typeof b&&"object"==typeof k&&m(b)===m(k)?p(b,k):{type:"complete",oldValue:b,newValue:k};(0,s.pC)(Z)&&((0,s.pC)(u)?u.diff[A]=Z:u={type:"partial",diff:(0,n.Z)({},A,Z)})}}}catch(C){_.e(C)}finally{_.f()}return u}}function y(e,t){if((0,s.Wi)(e))return!1;var i,n=t.split("."),r=e,o=(0,a.Z)(n);try{for(o.s();!(i=o.n()).done;){var u=i.value;if("complete"===r.type)return!0;if("partial"!==r.type)return!1;var l=r.diff[u];if(!l)return!1;r=l}}catch(d){o.e(d)}finally{o.f()}return!0}function h(e,t){var i,n=(0,a.Z)(t);try{for(n.s();!(i=n.n()).done;){if(y(e,i.value))return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function v(e,t){if(!("function"==typeof e||"function"==typeof t||(0,s.Wi)(e)&&(0,s.Wi)(t)))return(0,s.Wi)(e)||(0,s.Wi)(t)||"object"==typeof e&&"object"==typeof t&&m(e)!==m(t)?{type:"complete",oldValue:e,newValue:t}:p(e,t)}function S(e){if((0,s.Wi)(e))return!0;switch(e.type){case"complete":return!1;case"collection":var t,i=e,n=(0,a.Z)(i.added);try{for(n.s();!(t=n.n()).done;){if(!S(t.value))return!1}}catch(c){n.e(c)}finally{n.f()}var r,o=(0,a.Z)(i.removed);try{for(o.s();!(r=o.n()).done;){if(!S(r.value))return!1}}catch(c){o.e(c)}finally{o.f()}var u,l=(0,a.Z)(i.changed);try{for(l.s();!(u=l.n()).done;){if(!S(u.value))return!1}}catch(c){l.e(c)}finally{l.f()}return!0;case"partial":for(var d in e.diff)if(!S(e.diff[d]))return!1;return!0}}},9114:function(e,t,i){i.d(t,{u:function(){return f}});var n,a=i(15671),r=i(43144),o=i(60136),s=i(92572),u=i(27366),l=i(46784),d=i(49861),c=(i(25243),i(63780),i(69912)),f=n=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).name=null,n.code=null,n}return(0,r.Z)(i,[{key:"clone",value:function(){return new n({name:this.name,code:this.code})}}]),i}(l.wq);(0,u._)([(0,d.Cb)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,u._)([(0,d.Cb)({type:[String,Number],json:{write:!0}})],f.prototype,"code",void 0),f=n=(0,u._)([(0,c.j)("esri.layers.support.CodedValue")],f)},52175:function(e,t,i){i.d(t,{Z:function(){return h}});var n,a=i(15671),r=i(43144),o=i(60136),s=i(92572),u=i(27366),l=i(84652),d=i(49861),c=(i(25243),i(27135)),f=i(69912),m=i(9114),p=i(64538),y=n=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).codedValues=null,n.type="coded-value",n}return(0,r.Z)(i,[{key:"getName",value:function(e){var t=null;if(this.codedValues){var i=String(e);this.codedValues.some((function(e){return String(e.code)===i&&(t=e.name),!!t}))}return t}},{key:"clone",value:function(){return new n({codedValues:(0,l.d9)(this.codedValues),name:this.name})}}]),i}(p.Z);(0,u._)([(0,d.Cb)({type:[m.u],json:{write:!0}})],y.prototype,"codedValues",void 0),(0,u._)([(0,c.J)({codedValue:"coded-value"})],y.prototype,"type",void 0);var h=y=n=(0,u._)([(0,f.j)("esri.layers.support.CodedValueDomain")],y)},64538:function(e,t,i){i.d(t,{Z:function(){return y}});var n=i(43144),a=i(15671),r=i(60136),o=i(92572),s=i(27366),u=i(43404),l=i(46784),d=i(49861),c=(i(25243),i(63780),i(27135)),f=i(69912),m=new u.X({inherited:"inherited",codedValue:"coded-value",range:"range"}),p=function(e){(0,r.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).name=null,n.type=null,n}return(0,n.Z)(i)}(l.wq);(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,s._)([(0,c.J)(m)],p.prototype,"type",void 0);var y=p=(0,s._)([(0,f.j)("esri.layers.support.Domain")],p)},87165:function(e,t,i){i.d(t,{Z:function(){return v}});var n=i(15671),a=i(43144),r=i(60136),o=i(92572),s=i(27366),u=i(11582),l=i(46784),d=i(49861),c=(i(25243),i(63780),i(38511)),f=i(69912),m=i(31201),p=i(67755),y=i(12224),h=function(e){(0,r.Z)(i,e);var t=(0,o.Z)(i);function i(e){var a;return(0,n.Z)(this,i),(a=t.call(this,e)).id=null,a.name=null,a.domains=null,a.templates=null,a}return(0,a.Z)(i,[{key:"readDomains",value:function(e){for(var t={},i=0,n=Object.keys(e);i<n.length;i++){var a=n[i];t[a]=(0,p.im)(e[a])}return t}},{key:"writeDomains",value:function(e,t){for(var i={},n=0,a=Object.keys(e);n<a.length;n++){var r,o=a[n];e[o]&&(i[o]=null===(r=e[o])||void 0===r?void 0:r.toJSON())}t.domains=i}}]),i}((0,u.J)(l.wq));(0,s._)([(0,d.Cb)({json:{write:!0}})],h.prototype,"id",void 0),(0,s._)([(0,d.Cb)({json:{write:!0}})],h.prototype,"name",void 0),(0,s._)([(0,d.Cb)({json:{write:!0}})],h.prototype,"domains",void 0),(0,s._)([(0,c.r)("domains")],h.prototype,"readDomains",null),(0,s._)([(0,m.c)("domains")],h.prototype,"writeDomains",null),(0,s._)([(0,d.Cb)({type:[y.Z],json:{write:!0}})],h.prototype,"templates",void 0);var v=h=(0,s._)([(0,f.j)("esri.layers.support.FeatureType")],h)},83040:function(e,t,i){i.d(t,{Z:function(){return g}});var n,a=i(15671),r=i(43144),o=i(60136),s=i(92572),u=i(27366),l=i(43404),d=i(46784),c=i(49861),f=i(25243),m=(i(63780),i(27135)),p=i(38511),y=i(69912),h=i(67755),v=i(85249),S=new l.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),T=n=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).alias=null,n.defaultValue=void 0,n.description=null,n.domain=null,n.editable=!0,n.length=-1,n.name=null,n.nullable=!0,n.type=null,n.valueType=null,n.visible=!0,n}return(0,r.Z)(i,[{key:"readDescription",value:function(e,t){var i,n,a=t.description,r=null;try{r=a?JSON.parse(a):null}catch(o){}return null!==(i=null===(n=r)||void 0===n?void 0:n.value)&&void 0!==i?i:null}},{key:"readValueType",value:function(e,t){var i=t.description,n=null;try{n=i?JSON.parse(i):null}catch(a){}return n?S.fromJSON(n.fieldValueType):null}},{key:"clone",value:function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}]),i}(d.wq);(0,u._)([(0,c.Cb)({type:String,json:{write:!0}})],T.prototype,"alias",void 0),(0,u._)([(0,c.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],T.prototype,"defaultValue",void 0),(0,u._)([(0,c.Cb)()],T.prototype,"description",void 0),(0,u._)([(0,p.r)("description")],T.prototype,"readDescription",null),(0,u._)([(0,c.Cb)({types:h.V5,json:{read:{reader:h.im},write:!0}})],T.prototype,"domain",void 0),(0,u._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"editable",void 0),(0,u._)([(0,c.Cb)({type:f.z8,json:{write:!0}})],T.prototype,"length",void 0),(0,u._)([(0,c.Cb)({type:String,json:{write:!0}})],T.prototype,"name",void 0),(0,u._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"nullable",void 0),(0,u._)([(0,m.J)(v.v)],T.prototype,"type",void 0),(0,u._)([(0,c.Cb)()],T.prototype,"valueType",void 0),(0,u._)([(0,p.r)("valueType",["description"])],T.prototype,"readValueType",null),(0,u._)([(0,c.Cb)({type:Boolean,json:{read:!1}})],T.prototype,"visible",void 0);var g=T=n=(0,u._)([(0,y.j)("esri.layers.support.Field")],T)},52410:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(37762),a=i(15671),r=i(43144),o=i(80031);function s(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function u(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function l(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}var d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if((0,a.Z)(this,e),this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,t){this.fields=t;var i,r=[],d=(0,n.Z)(t);try{for(d.s();!(i=d.n()).done;){var m=i.value,p=null===m||void 0===m?void 0:m.name,y=f(null===m||void 0===m?void 0:m.name);if(p&&y){var h=c(p);this._fieldsMap.set(p,m),this._fieldsMap.set(h,m),this._normalizedFieldsMap.set(y,m),r.push(h),s(m)?(this.dateFields.push(m),this._dateFieldsSet.add(m)):(0,o.H7)(m)&&(this._numericFieldsSet.add(m),this.numericFields.push(m)),u(m)||l(m)||(m.editable=null==m.editable||!!m.editable,m.nullable=null==m.nullable||!!m.nullable)}}}catch(v){d.e(v)}finally{d.f()}r.sort(),this.uid=r.join(",")}}return(0,r.Z)(e,[{key:"destroy",value:function(){this._fieldsMap.clear()}},{key:"requiredFields",get:function(){if(!this._requiredFields){this._requiredFields=[];var e,t=(0,n.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var i=e.value;u(i)||l(i)||i.nullable||void 0!==(0,o.os)(i)||this._requiredFields.push(i)}}catch(a){t.e(a)}finally{t.f()}}return this._requiredFields}},{key:"has",value:function(e){return null!=this.get(e)}},{key:"get",value:function(e){var t;if(e){var i=this._fieldsMap.get(e);return i||((i=null!==(t=this._fieldsMap.get(c(e)))&&void 0!==t?t:this._normalizedFieldsMap.get(f(e)))&&this._fieldsMap.set(e,i),i)}}},{key:"isDateField",value:function(e){return this._dateFieldsSet.has(this.get(e))}},{key:"isNumericField",value:function(e){return this._numericFieldsSet.has(this.get(e))}},{key:"normalizeFieldName",value:function(e){var t,i=this.get(e);if(i)return null!==(t=i.name)&&void 0!==t?t:void 0}}]),e}();function c(e){return e.trim().toLowerCase()}function f(e){var t,i;return null!==(t=null===(i=(0,o.q6)(e))||void 0===i?void 0:i.toLowerCase())&&void 0!==t?t:""}},56754:function(e,t,i){i.d(t,{Z:function(){return m}});var n,a=i(15671),r=i(43144),o=i(60136),s=i(92572),u=i(27366),l=(i(32718),i(25243),i(63780),i(10064),i(93169),i(27135)),d=i(69912),c=i(64538),f=n=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).type="inherited",n}return(0,r.Z)(i,[{key:"clone",value:function(){return new n}}]),i}(c.Z);(0,u._)([(0,l.J)({inherited:"inherited"})],f.prototype,"type",void 0);var m=f=n=(0,u._)([(0,d.j)("esri.layers.support.InheritedDomain")],f)},30539:function(e,t,i){i.d(t,{Z:function(){return p}});var n,a=i(15671),r=i(43144),o=i(60136),s=i(92572),u=i(27366),l=i(49861),d=(i(25243),i(63780),i(27135)),c=i(69912),f=i(64538),m=n=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).maxValue=null,n.minValue=null,n.type="range",n}return(0,r.Z)(i,[{key:"clone",value:function(){return new n({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),i}(f.Z);(0,u._)([(0,l.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,t,i){t[i]=[this.minValue||0,e]}}}})],m.prototype,"maxValue",void 0),(0,u._)([(0,l.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,i){t[i]=[e,this.maxValue||0]}}}})],m.prototype,"minValue",void 0),(0,u._)([(0,d.J)({range:"range"})],m.prototype,"type",void 0);var p=m=n=(0,u._)([(0,c.j)("esri.layers.support.RangeDomain")],m)},67755:function(e,t,i){i.d(t,{V5:function(){return s},im:function(){return u}});i(93169);var n=i(52175),a=i(64538),r=i(56754),o=i(30539),s={key:"type",base:a.Z,typeMap:{range:o.Z,"coded-value":n.Z,inherited:r.Z}};function u(e){if(!e||!e.type)return null;switch(e.type){case"range":return o.Z.fromJSON(e);case"codedValue":return n.Z.fromJSON(e);case"inherited":return r.Z.fromJSON(e)}return null}},85249:function(e,t,i){i.d(t,{v:function(){return n}});var n=new(i(43404).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},80724:function(e,t,i){var n,a;function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function o(e){return null!=e&&!isNaN(e)&&isFinite(e)}function s(e){return e.valueExpression?n.Expression:e.field&&"string"==typeof e.field?n.Field:n.Unknown}function u(e,t){var i=t||s(e),r=e.valueUnit||"unknown";return i===n.Unknown?a.Constant:e.stops?a.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?a.ClampedLinear:"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?a.Proportional:a.Additive:a.Identity:a.RealWorldSize}i.d(t,{PS:function(){return s},QW:function(){return u},RY:function(){return n},hL:function(){return a},iY:function(){return r},qh:function(){return o}}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(n||(n={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(a||(a={}))},68620:function(e,t,i){i.d(t,{p:function(){return o}});var n=i(37762),a=i(92026),r=i(93501);function o(e,t,i){if(i&&i.features&&i.hasZ){var o=(0,r.k)(i.geometryType,t,e.outSpatialReference);if(!(0,a.Wi)(o)){var s,u=(0,n.Z)(i.features);try{for(u.s();!(s=u.n()).done;){o(s.value.geometry)}}catch(l){u.e(l)}finally{u.f()}}}}},49818:function(e,t,i){i.d(t,{Z:function(){return C}});var n,a=i(29439),r=i(37762),o=i(15671),s=i(43144),u=i(60136),l=i(92572),d=i(27366),c=i(59486),f=i(52639),m=i(43404),p=i(46784),y=i(84652),h=i(92026),v=i(49861),S=(i(25243),i(38511)),T=i(69912),g=i(31201),_=i(78952),A=i(77981),b=i(83040),k=new m.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null}),Z=n=function(e){(0,u.Z)(i,e);var t=(0,l.Z)(i);function i(e){var n;return(0,o.Z)(this,i),(n=t.call(this,e)).displayFieldName=null,n.exceededTransferLimit=!1,n.features=[],n.fields=null,n.geometryType=null,n.hasM=!1,n.hasZ=!1,n.queryGeometry=null,n.spatialReference=null,n}return(0,s.Z)(i,[{key:"readFeatures",value:function(e,t){for(var i=_.Z.fromJSON(t.spatialReference),n=[],a=0;a<e.length;a++){var r=e[a],o=f.Z.fromJSON(r),s=r.geometry&&r.geometry.spatialReference;(0,h.pC)(o.geometry)&&!s&&(o.geometry.spatialReference=i);var u=r.aggregateGeometries,l=o.aggregateGeometries;if(u&&(0,h.pC)(l))for(var d in l){var c,m=l[d],p=null===(c=u[d])||void 0===c?void 0:c.spatialReference;(0,h.pC)(m)&&!p&&(m.spatialReference=i)}n.push(o)}return n}},{key:"writeGeometryType",value:function(e,t,i,n){if(e)k.write(e,t,i,n);else{var a=this.features;if(a){var o,s=(0,r.Z)(a);try{for(s.s();!(o=s.n()).done;){var u=o.value;if(u&&(0,h.pC)(u.geometry))return void k.write(u.geometry.type,t,i,n)}}catch(l){s.e(l)}finally{s.f()}}}}},{key:"readQueryGeometry",value:function(e,t){if(!e)return null;var i=!!e.spatialReference,n=(0,A.im)(e);return n&&!i&&t.spatialReference&&(n.spatialReference=_.Z.fromJSON(t.spatialReference)),n}},{key:"writeSpatialReference",value:function(e,t){if(e)t.spatialReference=e.toJSON();else{var i=this.features;if(i){var n,a=(0,r.Z)(i);try{for(a.s();!(n=a.n()).done;){var o=n.value;if(o&&(0,h.pC)(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}}catch(s){a.e(s)}finally{a.f()}}}}},{key:"clone",value:function(){return new n(this.cloneProperties())}},{key:"cloneProperties",value:function(){return(0,y.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}},{key:"toJSON",value:function(e){var t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(var i=0;i<t.features.length;i++){var n=t.features[i];if(n.geometry){var a=e&&e[i];n.geometry=a&&a.toJSON()||n.geometry}}return t}},{key:"quantize",value:function(e){for(var t=(0,a.Z)(e.scale,2),i=t[0],n=t[1],r=(0,a.Z)(e.translate,2),o=r[0],s=r[1],u=this.features,l=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-o)/i)}),(function(e){return Math.round((s-e)/n)})),d=0,c=u.length;d<c;d++)(null===l||void 0===l?void 0:l((0,h.Wg)(u[d].geometry)))||(u.splice(d,1),d--,c--);return this.transform=e,this}},{key:"unquantize",value:function(){var e=this.geometryType,t=this.features,i=this.transform;if(!i)return this;var n,o=(0,a.Z)(i.translate,2),s=o[0],u=o[1],l=(0,a.Z)(i.scale,2),d=l[0],c=l[1],f=this._getHydrationFunction(e,(function(e){return e*d+s}),(function(e){return u-e*c})),m=(0,r.Z)(t);try{for(m.s();!(n=m.n()).done;){var p=n.value.geometry;(0,h.pC)(p)&&f&&f(p)}}catch(y){m.e(y)}finally{m.f()}return this.transform=null,this}},{key:"_quantizePoints",value:function(e,t,i){for(var n,a,r=[],o=0,s=e.length;o<s;o++){var u=e[o];if(o>0){var l=t(u[0]),d=i(u[1]);l===n&&d===a||(r.push([l-n,d-a]),n=l,a=d)}else n=t(u[0]),a=i(u[1]),r.push([n,a])}return r.length>0?r:null}},{key:"_getQuantizationFunction",value:function(e,t,i){var n=this;return"point"===e?function(e){return e.x=t(e.x),e.y=i(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var a=(0,A.oU)(e)?e.rings:e.paths,r=[],o=0,s=a.length;o<s;o++){var u=a[o],l=n._quantizePoints(u,t,i);l&&r.push(l)}return r.length>0?((0,A.oU)(e)?e.rings=r:e.paths=r,e):null}:"multipoint"===e?function(e){var a=n._quantizePoints(e.points,t,i);return a&&a.length>0?(e.points=a,e):null}:"extent"===e?function(e){return e}:null}},{key:"_getHydrationFunction",value:function(e,t,i){return"point"===e?function(e){e.x=t(e.x),e.y=i(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var n,a,r=(0,A.oU)(e)?e.rings:e.paths,o=0,s=r.length;o<s;o++)for(var u=r[o],l=0,d=u.length;l<d;l++){var c=u[l];l>0?(n+=c[0],a+=c[1]):(n=c[0],a=c[1]),c[0]=t(n),c[1]=i(a)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=i(e.ymin),e.xmax=t(e.xmax),e.ymax=i(e.ymax)}:"multipoint"===e?function(e){for(var n,a,r=e.points,o=0,s=r.length;o<s;o++){var u=r[o];o>0?(n+=u[0],a+=u[1]):(n=u[0],a=u[1]),u[0]=t(n),u[1]=i(a)}}:null}}]),i}(p.wq);(0,d._)([(0,v.Cb)({type:String,json:{write:!0}})],Z.prototype,"displayFieldName",void 0),(0,d._)([(0,v.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],Z.prototype,"exceededTransferLimit",void 0),(0,d._)([(0,v.Cb)({type:[f.Z],json:{write:!0}})],Z.prototype,"features",void 0),(0,d._)([(0,S.r)("features")],Z.prototype,"readFeatures",null),(0,d._)([(0,v.Cb)({type:[b.Z],json:{write:!0}})],Z.prototype,"fields",void 0),(0,d._)([(0,v.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:k.read}}})],Z.prototype,"geometryType",void 0),(0,d._)([(0,g.c)("geometryType")],Z.prototype,"writeGeometryType",null),(0,d._)([(0,v.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],Z.prototype,"hasM",void 0),(0,d._)([(0,v.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],Z.prototype,"hasZ",void 0),(0,d._)([(0,v.Cb)({types:c.qM,json:{write:!0}})],Z.prototype,"queryGeometry",void 0),(0,d._)([(0,S.r)("queryGeometry")],Z.prototype,"readQueryGeometry",null),(0,d._)([(0,v.Cb)({type:_.Z,json:{write:!0}})],Z.prototype,"spatialReference",void 0),(0,d._)([(0,g.c)("spatialReference")],Z.prototype,"writeSpatialReference",null),(0,d._)([(0,v.Cb)({json:{write:!0}})],Z.prototype,"transform",void 0),(Z=n=(0,d._)([(0,T.j)("esri.rest.support.FeatureSet")],Z)).prototype.toJSON.isDefaultToJSON=!0;var C=Z},76115:function(e,t,i){i.d(t,{ET:function(){return o},I4:function(){return r},SQ:function(){return n},X1:function(){return a},eG:function(){return l},lF:function(){return s},lj:function(){return c},qP:function(){return u},wW:function(){return d}});var n=[252,146,31,255],a=[153,153,153,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:n,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:n},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},u={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},c={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},16354:function(e,t,i){i.d(t,{Z:function(){return v}});var n=i(15671),a=i(43144),r=i(60136),o=i(92572),s=i(27366),u=i(11582),l=i(46784),d=i(92026),c=i(49861),f=(i(25243),i(63780),i(38511)),m=i(69912),p=i(31201),y=i(44218),h=function(e){(0,r.Z)(i,e);var t=(0,o.Z)(i);function i(e){var a;return(0,n.Z)(this,i),(a=t.call(this,e)).legacy=null,a.timeZone="system",a}return(0,a.Z)(i,[{key:"readLegacy",value:function(e,t){return{timeZone:t.timeZone,respectsDaylightSaving:t.respectsDaylightSaving}}},{key:"readTimeZone",value:function(e,t){return"timeZoneIANA"in t?t.timeZoneIANA:(0,y.G)(t)}},{key:"writeTimeZone",value:function(e,t){t.timeZoneIANA=e}},{key:"equals",value:function(e){return!((0,d.Wi)(e)||(0,d.Wi)(this.timeZone)||(0,d.Wi)(e.timeZone))&&this.timeZone===e.timeZone}}]),i}((0,u.J)(l.wq));(0,s._)([(0,c.Cb)()],h.prototype,"legacy",void 0),(0,s._)([(0,f.r)("legacy",["timeZone"])],h.prototype,"readLegacy",null),(0,s._)([(0,c.Cb)({type:String,nonNullable:!0})],h.prototype,"timeZone",void 0),(0,s._)([(0,f.r)("timeZone",["timeZone","timeZoneIANA","respectsDaylightSaving"])],h.prototype,"readTimeZone",null),(0,s._)([(0,p.c)("timeZone")],h.prototype,"writeTimeZone",null);var v=h=(0,s._)([(0,m.j)("esri.time.TimeReference")],h)},44218:function(e,t,i){i.d(t,{G:function(){return r}});var n=new Map([["AUS Central Standard Time","Australia/Darwin"],["AUS Eastern Standard Time","Australia/Sydney"],["Afghanistan Standard Time","Asia/Kabul"],["Alaskan Standard Time","America/Anchorage"],["Aleutian Standard Time","America/Adak"],["Altai Standard Time","Asia/Barnaul"],["Arab Standard Time","Asia/Riyadh"],["Arabian Standard Time","Asia/Dubai"],["Arabic Standard Time","Asia/Baghdad"],["Argentina Standard Time","America/Buenos_Aires"],["Astrakhan Standard Time","Europe/Astrakhan"],["Atlantic Standard Time","America/Halifax"],["Aus Central W. Standard Time","Australia/Eucla"],["Azerbaijan Standard Time","Asia/Baku"],["Azores Standard Time","Atlantic/Azores"],["Bahia Standard Time","America/Bahia"],["Bangladesh Standard Time","Asia/Dhaka"],["Belarus Standard Time","Europe/Minsk"],["Bougainville Standard Time","Pacific/Bougainville"],["Canada Central Standard Time","America/Regina"],["Cape Verde Standard Time","Atlantic/Cape_Verde"],["Caucasus Standard Time","Asia/Yerevan"],["Cen. Australia Standard Time","Australia/Adelaide"],["Central America Standard Time","America/Guatemala"],["Central Asia Standard Time","Asia/Almaty"],["Central Brazilian Standard Time","America/Cuiaba"],["Central Europe Standard Time","Europe/Budapest"],["Central European Standard Time","Europe/Warsaw"],["Central Pacific Standard Time","Pacific/Guadalcanal"],["Central Standard Time","America/Chicago"],["Central Standard Time (Mexico)","America/Mexico_City"],["Chatham Islands Standard Time","Pacific/Chatham"],["China Standard Time","Asia/Shanghai"],["Cuba Standard Time","America/Havana"],["Dateline Standard Time","Etc/GMT+12"],["E. Africa Standard Time","Africa/Nairobi"],["E. Australia Standard Time","Australia/Brisbane"],["E. Europe Standard Time","Europe/Chisinau"],["E. South America Standard Time","America/Sao_Paulo"],["Easter Island Standard Time","Pacific/Easter"],["Eastern Standard Time","America/New_York"],["Eastern Standard Time (Mexico)","America/Cancun"],["Egypt Standard Time","Africa/Cairo"],["Ekaterinburg Standard Time","Asia/Yekaterinburg"],["FLE Standard Time","Europe/Kiev"],["Fiji Standard Time","Pacific/Fiji"],["GMT Standard Time","Europe/London"],["GTB Standard Time","Europe/Bucharest"],["Georgian Standard Time","Asia/Tbilisi"],["Greenland Standard Time","America/Godthab"],["Greenwich Standard Time","Atlantic/Reykjavik"],["Haiti Standard Time","America/Port-au-Prince"],["Hawaiian Standard Time","Pacific/Honolulu"],["India Standard Time","Asia/Calcutta"],["Iran Standard Time","Asia/Tehran"],["Israel Standard Time","Asia/Jerusalem"],["Jordan Standard Time","Asia/Amman"],["Kaliningrad Standard Time","Europe/Kaliningrad"],["Korea Standard Time","Asia/Seoul"],["Libya Standard Time","Africa/Tripoli"],["Line Islands Standard Time","Pacific/Kiritimati"],["Lord Howe Standard Time","Australia/Lord_Howe"],["Magadan Standard Time","Asia/Magadan"],["Magallanes Standard Time","America/Punta_Arenas"],["Marquesas Standard Time","Pacific/Marquesas"],["Mauritius Standard Time","Indian/Mauritius"],["Middle East Standard Time","Asia/Beirut"],["Montevideo Standard Time","America/Montevideo"],["Morocco Standard Time","Africa/Casablanca"],["Mountain Standard Time","America/Denver"],["Mountain Standard Time (Mexico)","America/Chihuahua"],["Myanmar Standard Time","Asia/Rangoon"],["N. Central Asia Standard Time","Asia/Novosibirsk"],["Namibia Standard Time","Africa/Windhoek"],["Nepal Standard Time","Asia/Katmandu"],["New Zealand Standard Time","Pacific/Auckland"],["Newfoundland Standard Time","America/St_Johns"],["Norfolk Standard Time","Pacific/Norfolk"],["North Asia East Standard Time","Asia/Irkutsk"],["North Asia Standard Time","Asia/Krasnoyarsk"],["North Korea Standard Time","Asia/Pyongyang"],["Omsk Standard Time","Asia/Omsk"],["Pacific SA Standard Time","America/Santiago"],["Pacific Standard Time","America/Los_Angeles"],["Pacific Standard Time (Mexico)","America/Tijuana"],["Pakistan Standard Time","Asia/Karachi"],["Paraguay Standard Time","America/Asuncion"],["Qyzylorda Standard Time","Asia/Qyzylorda"],["Romance Standard Time","Europe/Paris"],["Russia Time Zone 10","Asia/Srednekolymsk"],["Russia Time Zone 11","Asia/Kamchatka"],["Russia Time Zone 3","Europe/Samara"],["Russian Standard Time","Europe/Moscow"],["SA Eastern Standard Time","America/Cayenne"],["SA Pacific Standard Time","America/Bogota"],["SA Western Standard Time","America/La_Paz"],["SE Asia Standard Time","Asia/Bangkok"],["Saint Pierre Standard Time","America/Miquelon"],["Sakhalin Standard Time","Asia/Sakhalin"],["Samoa Standard Time","Pacific/Apia"],["Sao Tome Standard Time","Africa/Sao_Tome"],["Saratov Standard Time","Europe/Saratov"],["Singapore Standard Time","Asia/Singapore"],["South Africa Standard Time","Africa/Johannesburg"],["South Sudan Standard Time","Africa/Juba"],["Sri Lanka Standard Time","Asia/Colombo"],["Sudan Standard Time","Africa/Khartoum"],["Syria Standard Time","Asia/Damascus"],["Taipei Standard Time","Asia/Taipei"],["Tasmania Standard Time","Australia/Hobart"],["Tocantins Standard Time","America/Araguaina"],["Tokyo Standard Time","Asia/Tokyo"],["Tomsk Standard Time","Asia/Tomsk"],["Tonga Standard Time","Pacific/Tongatapu"],["Transbaikal Standard Time","Asia/Chita"],["Turkey Standard Time","Europe/Istanbul"],["Turks And Caicos Standard Time","America/Grand_Turk"],["US Eastern Standard Time","America/Indianapolis"],["US Mountain Standard Time","America/Phoenix"],["UTC","Etc/GMT"],["UTC+01","Etc/GMT-1"],["UTC+02","Etc/GMT-2"],["UTC+03","Etc/GMT-3"],["UTC+04","Etc/GMT-4"],["UTC+05","Etc/GMT-5"],["UTC+06","Etc/GMT-6"],["UTC+07","Etc/GMT-7"],["UTC+08","Etc/GMT-8"],["UTC+09","Etc/GMT-9"],["UTC+10","Etc/GMT-10"],["UTC+11","Etc/GMT-11"],["UTC+12","Etc/GMT-12"],["UTC+13","Etc/GMT-13"],["UTC+14","Etc/GMT-14"],["UTC-01","Etc/GMT+1"],["UTC-02","Etc/GMT+2"],["UTC-03","Etc/GMT+3"],["UTC-04","Etc/GMT+4"],["UTC-05","Etc/GMT+5"],["UTC-06","Etc/GMT+6"],["UTC-07","Etc/GMT+7"],["UTC-08","Etc/GMT+8"],["UTC-09","Etc/GMT+9"],["UTC-10","Etc/GMT+10"],["UTC-11","Etc/GMT+11"],["UTC-12","Etc/GMT+12"],["Ulaanbaatar Standard Time","Asia/Ulaanbaatar"],["Venezuela Standard Time","America/Caracas"],["Vladivostok Standard Time","Asia/Vladivostok"],["Volgograd Standard Time","Europe/Volgograd"],["W. Australia Standard Time","Australia/Perth"],["W. Central Africa Standard Time","Africa/Lagos"],["W. Europe Standard Time","Europe/Berlin"],["W. Mongolia Standard Time","Asia/Hovd"],["West Asia Standard Time","Asia/Tashkent"],["West Bank Standard Time","Asia/Hebron"],["West Pacific Standard Time","Pacific/Port_Moresby"],["Yakutsk Standard Time","Asia/Yakutsk"],["Yukon Standard Time","America/Whitehorse"]]),a=i(99779);function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"system";if(!e||!n.has(e.timeZone))return t;var i=n.get(e.timeZone);return s(e.timeZone)||e.respectsDaylightSaving?i:o(i)}function o(e){var t=a.ou.local().setZone(e),i=Math.min(t.set({month:1,day:1}).offset,t.set({month:5}).offset);return 0===i?"Etc/UTC":"Etc/GMT".concat(a.Qf.instance(-i).formatOffset(0,"narrow"))}function s(e){return e.startsWith("UTC")}}}]);
//# sourceMappingURL=96347.190e458e.chunk.js.map
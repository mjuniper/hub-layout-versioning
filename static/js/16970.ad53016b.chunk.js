"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[16970,65905],{62044:function(e,t,r){r.d(t,{Z:function(){return w}});var n,i=r(15671),s=r(43144),o=r(60136),l=r(92572),u=r(27366),a=r(46784),c=r(92026),d=r(86710),p=r(49861),y=(r(25243),r(63780),r(38511)),f=r(69912),g=r(31201),h=n=function(e){(0,o.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).end=null,n.start=null,n}return(0,s.Z)(r,[{key:"readEnd",value:function(e,t){return null!=t.end?new Date(t.end):null}},{key:"writeEnd",value:function(e,t){t.end=e?e.getTime():null}},{key:"isAllTime",get:function(){return this.equals(n.allTime)}},{key:"isEmpty",get:function(){return this.equals(n.empty)}},{key:"readStart",value:function(e,t){return null!=t.start?new Date(t.start):null}},{key:"writeStart",value:function(e,t){t.start=e?e.getTime():null}},{key:"clone",value:function(){return new n({end:this.end,start:this.start})}},{key:"equals",value:function(e){if(!e)return!1;var t=(0,c.pC)(this.start)?this.start.getTime():this.start,r=(0,c.pC)(this.end)?this.end.getTime():this.end,n=(0,c.pC)(e.start)?e.start.getTime():e.start,i=(0,c.pC)(e.end)?e.end.getTime():e.end;return t===n&&r===i}},{key:"expandTo",value:function(e){if(this.isEmpty||this.isAllTime)return this.clone();var t=(0,c.yw)(this.start,(function(t){return(0,d.JE)(t,e)})),r=(0,c.yw)(this.end,(function(t){var r=(0,d.JE)(t,e);return t.getTime()===r.getTime()?r:(0,d.Nm)(r,1,e)}));return new n({start:t,end:r})}},{key:"intersection",value:function(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return n.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();var t,r,i=(0,c.R2)(this.start,-1/0,(function(e){return e.getTime()})),s=(0,c.R2)(this.end,1/0,(function(e){return e.getTime()})),o=(0,c.R2)(e.start,-1/0,(function(e){return e.getTime()})),l=(0,c.R2)(e.end,1/0,(function(e){return e.getTime()}));if(o>=i&&o<=s?t=o:i>=o&&i<=l&&(t=i),s>=o&&s<=l?r=s:l>=i&&l<=s&&(r=l),null!=t&&null!=r&&!isNaN(t)&&!isNaN(r)){var u=new n;return u.start=t===-1/0?null:new Date(t),u.end=r===1/0?null:new Date(r),u}return n.empty}},{key:"offset",value:function(e,t){if(this.isEmpty||this.isAllTime)return this.clone();var r=new n,i=this.start,s=this.end;return(0,c.pC)(i)&&(r.start=(0,d.Nm)(i,e,t)),(0,c.pC)(s)&&(r.end=(0,d.Nm)(s,e,t)),r}},{key:"union",value:function(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return m.clone();var t=(0,c.pC)(this.start)&&(0,c.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=(0,c.pC)(this.end)&&(0,c.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new n({start:t,end:r})}}],[{key:"allTime",get:function(){return m}},{key:"empty",get:function(){return v}}]),r}(a.wq);(0,u._)([(0,p.Cb)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"end",void 0),(0,u._)([(0,y.r)("end")],h.prototype,"readEnd",null),(0,u._)([(0,g.c)("end")],h.prototype,"writeEnd",null),(0,u._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"isAllTime",null),(0,u._)([(0,p.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"isEmpty",null),(0,u._)([(0,p.Cb)({type:Date,json:{write:{allowNull:!0}}})],h.prototype,"start",void 0),(0,u._)([(0,y.r)("start")],h.prototype,"readStart",null),(0,u._)([(0,g.c)("start")],h.prototype,"writeStart",null);var m=new(h=n=(0,u._)([(0,f.j)("esri.TimeExtent")],h)),v=new h({start:void 0,end:void 0}),w=h},65905:function(e,t,r){r.d(t,{V:function(){return c},b:function(){return a}});var n=r(42265),i=r(76200),s=r(10064),o=r(32718),l=r(35995),u=o.Z.getLogger("esri.assets");function a(e,t){return(0,i.default)(c(e),t)}function c(e){if(!n.Z.assetsPath)throw u.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.Z("assets:path-not-set","config.assetsPath is not set");return(0,l.v_)(n.Z.assetsPath,e)}},84397:function(e,t,r){r.d(t,{c:function(){return n},g:function(){return i}});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},86710:function(e,t,r){r.d(t,{JE:function(){return o},Nm:function(){return s},rJ:function(){return l}});r(93169);var n={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function s(e,t,r){var n=new Date(e.getTime());if(t&&r){var s=i[r],o=s.getter,l=s.setter,u=s.multiplier;if("months"===r){var a=function(e,t){var r=new Date(e,t+1,1);return r.setDate(0),r.getDate()}(n.getFullYear(),n.getMonth()+t);n.getDate()>a&&n.setDate(a)}n[l](n[o]()+t*u)}return n}function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function l(e,t,r){return 0===e?0:e*n[t]/n[r]}},70054:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n=r(74165),i=r(15861),s=r(1413),o=r(15671),l=r(43144),u=r(60136),a=r(92572),c=r(27366),d=r(42265),p=r(76200),y=(r(51508),r(92026)),f=r(97642),g=r(66978),h=r(35995),m=r(49861),v=(r(25243),r(63780),r(38511)),w=r(69912),b=r(53866),C=r(92975),S=r(30651),k=r(6693),_=r(6061),D=r(29598),T=r(71684),Z=r(56811),F=r(61289),M=r(22061),E=r(16851),Y=r(91946),P=r(16072),x=r(61459),R=["atom","xml"],j={base:M.Z,key:"type",typeMap:{"simple-line":E.Z},errorContext:"symbol"},A={base:M.Z,key:"type",typeMap:{"picture-marker":Y.Z,"simple-marker":P.Z},errorContext:"symbol"},G={base:M.Z,key:"type",typeMap:{"simple-fill":x.Z},errorContext:"symbol"},N=function(e){(0,u.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).description=null,e.fullExtent=null,e.legendEnabled=!0,e.lineSymbol=null,e.pointSymbol=null,e.polygonSymbol=null,e.operationalLayerType="GeoRSS",e.url=null,e.type="geo-rss",e}return(0,l.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,s.Z)({url:e},t):e}},{key:"readFeatureCollections",value:function(e,t){return t.featureCollection.layers.forEach((function(e){var t,r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&(null===(t=r.outline)||void 0===t?void 0:t.style.includes("esriSFS"))&&(r.outline.style="esriSLSSolid")})),t.featureCollection.layers}},{key:"hasPoints",get:function(){return this._hasGeometry("esriGeometryPoint")}},{key:"hasPolylines",get:function(){return this._hasGeometry("esriGeometryPolyline")}},{key:"hasPolygons",get:function(){return this._hasGeometry("esriGeometryPolygon")}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,h.vt)(this.url,R)||"GeoRSS":e||""},set:function(e){this._set("title",e)}},{key:"load",value:function(e){var t=this,r=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(g.r9).then((function(){return t._fetchService(r)})).then((function(e){t.read(e,{origin:"service"})}))),Promise.resolve(this)}},{key:"hasDataChanged",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._fetchService();case 2:return t=e.sent,e.abrupt("return",(this.read(t,{origin:"service",ignoreDefaults:!0}),!0));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchService",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this.spatialReference,e.next=3,(0,p.default)(d.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,C.oR)(i)?void 0:null!==(r=i.wkid)&&void 0!==r?r:JSON.stringify(i)},signal:t});case 3:return s=e.sent,o=s.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_hasGeometry",value:function(e){var t,r;return null!==(t=null===(r=this.featureCollections)||void 0===r?void 0:r.some((function(t){var r,n;return(null===(r=t.featureSet)||void 0===r?void 0:r.geometryType)===e&&(null===(n=t.featureSet.features)||void 0===n?void 0:n.length)>0})))&&void 0!==t&&t}}]),r}((0,k.h)((0,T.Q)((0,_.q)((0,D.I)((0,Z.M)((0,f.R)(S.Z)))))));(0,c._)([(0,m.Cb)()],N.prototype,"description",void 0),(0,c._)([(0,m.Cb)()],N.prototype,"featureCollections",void 0),(0,c._)([(0,v.r)("service","featureCollections",["featureCollection.layers"])],N.prototype,"readFeatureCollections",null),(0,c._)([(0,m.Cb)({type:b.Z,json:{name:"lookAtExtent"}})],N.prototype,"fullExtent",void 0),(0,c._)([(0,m.Cb)(F.id)],N.prototype,"id",void 0),(0,c._)([(0,m.Cb)(F.rn)],N.prototype,"legendEnabled",void 0),(0,c._)([(0,m.Cb)({types:j,json:{write:!0}})],N.prototype,"lineSymbol",void 0),(0,c._)([(0,m.Cb)({type:["show","hide"]})],N.prototype,"listMode",void 0),(0,c._)([(0,m.Cb)({types:A,json:{write:!0}})],N.prototype,"pointSymbol",void 0),(0,c._)([(0,m.Cb)({types:G,json:{write:!0}})],N.prototype,"polygonSymbol",void 0),(0,c._)([(0,m.Cb)({type:["GeoRSS"]})],N.prototype,"operationalLayerType",void 0),(0,c._)([(0,m.Cb)(F.HQ)],N.prototype,"url",void 0),(0,c._)([(0,m.Cb)({json:{origins:{service:{read:{source:"name",reader:function(e){return e||void 0}}}}}})],N.prototype,"title",null),(0,c._)([(0,m.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],N.prototype,"type",void 0);var O=N=(0,c._)([(0,w.j)("esri.layers.GeoRSSLayer")],N)}}]);
//# sourceMappingURL=16970.ad53016b.chunk.js.map
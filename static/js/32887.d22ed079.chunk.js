(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[32887,63058,51130,29302,65905,29899,63050,51534,29247],{63058:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=63058,e.exports=t},95101:function(e,t,n){"use strict";n.d(t,{a:function(){return i},b:function(){return r},c:function(){return s},g:function(){return a}});var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}function a(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})})),t}},68268:function(e,t,n){"use strict";n.r(t),n.d(t,{arcgis_time_slider:function(){return h}});var i=n(4942),r=n(74165),s=n(15861),a=n(15671),u=n(43144),o=n(5692),l=n(54825),c=n(50675),d=n(87718),h=(n(95101),n(19545),function(){function e(t){(0,a.Z)(this,e),(0,o.r)(this,t),this.triggerAction=(0,o.c)(this,"trigger-action",7),this.handles=[],this.timeExtent=null,(0,l.b)(this,"emitTriggerAction")}return(0,u.Z)(e,[{key:"actionsChanged",value:function(e){this.timeSlider&&(this.timeSlider.actions=e)}},{key:"disabledChanged",value:function(e){this.timeSlider&&(this.timeSlider.disabled=e)}},{key:"fullTimeExtentChanged",value:function(e){this.timeSlider&&(this.timeSlider.fullTimeExtent=e)}},{key:"labelChanged",value:function(e){this.timeSlider&&(this.timeSlider.label=e)}},{key:"labelFormatFunctionChanged",value:function(e){this.timeSlider&&(this.timeSlider.labelFormatFunction=e)}},{key:"layoutChanged",value:function(e){this.timeSlider&&(this.timeSlider.layout=e)}},{key:"loopChanged",value:function(e){this.timeSlider&&(this.timeSlider.loop=e)}},{key:"modeChanged",value:function(e){this.timeSlider&&(this.timeSlider.mode=e)}},{key:"playRateChanged",value:function(e){this.timeSlider&&(this.timeSlider.playRate=e)}},{key:"positionChanged",value:function(e){this.skipDestroy=!0,this.view.ui.move(this.container,e)}},{key:"stopsChanged",value:function(e){this.timeSlider&&(this.timeSlider.stops=e)}},{key:"tickConfigsChanged",value:function(e){this.timeSlider&&(this.timeSlider.tickConfigs=e)}},{key:"timeExtentChanged",value:function(e){this.timeSlider&&(this.timeSlider.timeExtent=e)}},{key:"timeVisibleChanged",value:function(e){this.timeSlider&&(this.timeSlider.timeVisible=e)}},{key:"viewChanged",value:function(e){this.timeSlider&&(this.timeSlider.view=e)}},{key:"viewModelChanged",value:function(e){this.timeSlider&&(this.timeSlider.viewModel=e)}},{key:"visibleChanged",value:function(e){this.timeSlider&&(this.timeSlider.visible=e)}},{key:"connectedCallback",value:function(){this.createSlider()}},{key:"disconnectedCallback",value:function(){this.skipDestroy?this.skipDestroy=!1:this.destroySlider()}},{key:"componentWillLoad",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.createSlider(),(0,d.l)();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createSlider",value:function(){var e=this.container,t=this.timeSlider;if(e&&!t){var n=this.view,i=this.position,r=this.container,s=this.widgetProperties;this.timeSlider=new c.Z(s),this.handles.push(this.timeSlider.on("trigger-action",this.emitTriggerAction)),this.skipDestroy=!0,n.ui.add(r,i)}}},{key:"widgetProperties",get:function(){var e=this;return["container","disabled","fullTimeExtent","label","labelFormatFunction","layout","loop","mode","playRate","stops","tickConfigs","timeExtent","timeVisible","view","viewModel","visible"].reduce((function(t,n){return void 0===e[n]?t:Object.assign(Object.assign({},t),(0,i.Z)({},n,e[n]))}),{id:this.widgetId})}},{key:"widgetId",get:function(){return[this.container.getAttribute("id"),"time-slider"].filter(Boolean).join("-")}},{key:"emitTriggerAction",value:function(e){this.triggerAction.emit(e.action)}},{key:"destroySlider",value:function(){this.timeSlider&&(this.handles.forEach((function(e){return e.remove()})),this.handles=[],this.view.ui.remove(this.timeSlider.id),this.timeSlider.destroy(),this.timeSlider=null)}},{key:"render",value:function(){return(0,o.h)(o.H,null,(0,o.h)("slot",null))}},{key:"container",get:function(){return(0,o.g)(this)}}],[{key:"watchers",get:function(){return{actions:["actionsChanged"],disabled:["disabledChanged"],fullTimeExtent:["fullTimeExtentChanged"],label:["labelChanged"],labelFormatFunction:["labelFormatFunctionChanged"],layout:["layoutChanged"],loop:["loopChanged"],mode:["modeChanged"],playRate:["playRateChanged"],position:["positionChanged"],stops:["stopsChanged"],tickConfigs:["tickConfigsChanged"],timeExtent:["timeExtentChanged"],timeVisible:["timeVisibleChanged"],view:["viewChanged"],viewModel:["viewModelChanged"],visible:["visibleChanged"]}}}]),e}());h.style=":host{display:block}"},54825:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var i=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];n.forEach((function(t){if("function"!==typeof e[t])throw new Error("Cannot bind context. ".concat(t," must be a function"));e[t]=e[t].bind(e)}))}},62044:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i,r=n(15671),s=n(43144),a=n(60136),u=n(92572),o=n(27366),l=n(46784),c=n(92026),d=n(86710),h=n(49861),f=(n(25243),n(63780),n(38511)),p=n(69912),g=n(31201),v=i=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).end=null,i.start=null,i}return(0,s.Z)(n,[{key:"readEnd",value:function(e,t){return null!=t.end?new Date(t.end):null}},{key:"writeEnd",value:function(e,t){t.end=e?e.getTime():null}},{key:"isAllTime",get:function(){return this.equals(i.allTime)}},{key:"isEmpty",get:function(){return this.equals(i.empty)}},{key:"readStart",value:function(e,t){return null!=t.start?new Date(t.start):null}},{key:"writeStart",value:function(e,t){t.start=e?e.getTime():null}},{key:"clone",value:function(){return new i({end:this.end,start:this.start})}},{key:"equals",value:function(e){if(!e)return!1;var t=(0,c.pC)(this.start)?this.start.getTime():this.start,n=(0,c.pC)(this.end)?this.end.getTime():this.end,i=(0,c.pC)(e.start)?e.start.getTime():e.start,r=(0,c.pC)(e.end)?e.end.getTime():e.end;return t===i&&n===r}},{key:"expandTo",value:function(e){if(this.isEmpty||this.isAllTime)return this.clone();var t=(0,c.yw)(this.start,(function(t){return(0,d.JE)(t,e)})),n=(0,c.yw)(this.end,(function(t){var n=(0,d.JE)(t,e);return t.getTime()===n.getTime()?n:(0,d.Nm)(n,1,e)}));return new i({start:t,end:n})}},{key:"intersection",value:function(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();var t,n,r=(0,c.R2)(this.start,-1/0,(function(e){return e.getTime()})),s=(0,c.R2)(this.end,1/0,(function(e){return e.getTime()})),a=(0,c.R2)(e.start,-1/0,(function(e){return e.getTime()})),u=(0,c.R2)(e.end,1/0,(function(e){return e.getTime()}));if(a>=r&&a<=s?t=a:r>=a&&r<=u&&(t=r),s>=a&&s<=u?n=s:u>=r&&u<=s&&(n=u),null!=t&&null!=n&&!isNaN(t)&&!isNaN(n)){var o=new i;return o.start=t===-1/0?null:new Date(t),o.end=n===1/0?null:new Date(n),o}return i.empty}},{key:"offset",value:function(e,t){if(this.isEmpty||this.isAllTime)return this.clone();var n=new i,r=this.start,s=this.end;return(0,c.pC)(r)&&(n.start=(0,d.Nm)(r,e,t)),(0,c.pC)(s)&&(n.end=(0,d.Nm)(s,e,t)),n}},{key:"union",value:function(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return m.clone();var t=(0,c.pC)(this.start)&&(0,c.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,n=(0,c.pC)(this.end)&&(0,c.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:n})}}],[{key:"allTime",get:function(){return m}},{key:"empty",get:function(){return y}}]),n}(l.wq);(0,o._)([(0,h.Cb)({type:Date,json:{write:{allowNull:!0}}})],v.prototype,"end",void 0),(0,o._)([(0,f.r)("end")],v.prototype,"readEnd",null),(0,o._)([(0,g.c)("end")],v.prototype,"writeEnd",null),(0,o._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],v.prototype,"isAllTime",null),(0,o._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],v.prototype,"isEmpty",null),(0,o._)([(0,h.Cb)({type:Date,json:{write:{allowNull:!0}}})],v.prototype,"start",void 0),(0,o._)([(0,f.r)("start")],v.prototype,"readStart",null),(0,o._)([(0,g.c)("start")],v.prototype,"writeStart",null);var m=new(v=i=(0,o._)([(0,p.j)("esri.TimeExtent")],v)),y=new v({start:void 0,end:void 0}),w=v},12355:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(15671),r=n(43144),s=n(60136),a=n(92572),u=n(27366),o=n(11582),l=n(46784),c=n(86710),d=n(49861),h=(n(25243),n(63780),n(27135)),f=n(69912),p=n(58359),g=function(e){(0,s.Z)(n,e);var t=(0,a.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).unit="milliseconds",r.value=0,r}return(0,r.Z)(n,[{key:"toMilliseconds",value:function(){return(0,c.rJ)(this.value,this.unit,"milliseconds")}}]),n}((0,o.J)(l.wq));(0,u._)([(0,h.J)(p.v,{nonNullable:!0})],g.prototype,"unit",void 0),(0,u._)([(0,d.Cb)({type:Number,json:{write:!0},nonNullable:!0})],g.prototype,"value",void 0);var v=g=(0,u._)([(0,f.j)("esri.TimeInterval")],g)},65905:function(e,t,n){"use strict";n.d(t,{V:function(){return c},b:function(){return l}});var i=n(42265),r=n(76200),s=n(10064),a=n(32718),u=n(35995),o=a.Z.getLogger("esri.assets");function l(e,t){return(0,r.default)(c(e),t)}function c(e){if(!i.Z.assetsPath)throw o.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new s.Z("assets:path-not-set","config.assetsPath is not set");return(0,u.v_)(i.Z.assetsPath,e)}},41691:function(e,t,n){"use strict";n.d(t,{p:function(){return f},r:function(){return p}});var i=n(15671),r=n(43144),s=n(60136),a=n(92572),u=n(27366),o=n(85015),l=n(100),c=n(49861),d=n(69912),h=n(61826),f=function(e){var t=function(e){(0,s.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"destroy",value:function(){var e,t;this.destroyed||(null!==(e=this._get("handles"))&&void 0!==e&&e.destroy(),null===(t=this._get("updatingHandles"))||void 0===t||t.destroy())}},{key:"handles",get:function(){return this._get("handles")||new l.Z}},{key:"updatingHandles",get:function(){return this._get("updatingHandles")||new h.t}}]),n}(e);return(0,u._)([(0,c.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,u._)([(0,c.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,u._)([(0,d.j)("esri.core.HandleOwner")],t),t},p=function(e){(0,s.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n)}(f(o.Z));p=(0,u._)([(0,d.j)("esri.core.HandleOwner")],p)},41644:function(e,t,n){"use strict";n.d(t,{Bg:function(){return i},sM:function(){return r}});n(93169);function i(e){}function r(e){return function(){return e}}},61826:function(e,t,n){"use strict";n.d(t,{t:function(){return g}});var i=n(15671),r=n(43144),s=n(60136),a=n(92572),u=n(27366),o=n(85015),l=n(100),c=n(92026),d=n(94172),h=n(99346),f=n(49861),p=n(69912),g=function(e){(0,s.Z)(n,e);var t=(0,a.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.apply(this,arguments)).updating=!1,e._handleId=0,e._handles=new l.Z,e._scheduleHandleId=0,e._pendingPromises=new Set,e}return(0,r.Z)(n,[{key:"destroy",value:function(){this.removeAll(),this._handles.destroy()}},{key:"add",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,d.YP)}},{key:"addWhen",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this._installWatch(e,t,n,d.gx)}},{key:"addOnCollectionChange",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.initial,s=void 0!==r&&r,a=i.final,u=void 0!==a&&a,o=++this._handleId;return this._handles.add([(0,d.on)(e,"after-changes",this._createSyncUpdatingCallback(),d.Z_),(0,d.on)(e,"change",t,{onListenerAdd:s?function(e){return t({added:e.toArray(),removed:[]})}:void 0,onListenerRemove:u?function(e){return t({added:[],removed:e.toArray()})}:void 0})],o),{remove:function(){return n._handles.remove(o)}}}},{key:"addPromise",value:function(e){var t=this;if((0,c.Wi)(e))return e;var n=++this._handleId;this._handles.add({remove:function(){t._pendingPromises.delete(e)&&(0!==t._pendingPromises.size||t._handles.has(v)||t._set("updating",!1))}},n),this._pendingPromises.add(e),this._set("updating",!0);var i=function(){return t._handles.remove(n)};return e.then(i,i),e}},{key:"removeAll",value:function(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}},{key:"_installWatch",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,s=++this._handleId;i.sync||this._installSyncUpdatingWatch(e,s);var a=r(e,t,i);return this._handles.add(a,s),{remove:function(){return n._handles.remove(s)}}}},{key:"_installSyncUpdatingWatch",value:function(e,t){var n=this._createSyncUpdatingCallback(),i=(0,d.YP)(e,n,{sync:!0,equals:function(){return!1}});return this._handles.add(i,t),i}},{key:"_createSyncUpdatingCallback",value:function(){var e=this;return function(){e._handles.remove(v),++e._scheduleHandleId;var t=e._scheduleHandleId;e._get("updating")||e._set("updating",!0),e._handles.add((0,h.Os)((function(){t===e._scheduleHandleId&&(e._set("updating",e._pendingPromises.size>0),e._handles.remove(v))})),v)}}}]),n}(o.Z);(0,u._)([(0,f.Cb)({readOnly:!0})],g.prototype,"updating",void 0),g=(0,u._)([(0,p.j)("esri.core.support.WatchUpdatingTracking")],g);var v=-42},86710:function(e,t,n){"use strict";n.d(t,{JE:function(){return a},Nm:function(){return s},rJ:function(){return u}});n(93169);var i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},r={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function s(e,t,n){var i=new Date(e.getTime());if(t&&n){var s=r[n],a=s.getter,u=s.setter,o=s.multiplier;if("months"===n){var l=function(e,t){var n=new Date(e,t+1,1);return n.setDate(0),n.getDate()}(i.getFullYear(),i.getMonth()+t);i.getDate()>l&&i.setDate(l)}i[u](i[a]()+t*o)}return i}function a(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function u(e,t,n){return 0===e?0:e*i[t]/i[n]}},59166:function(e,t,n){"use strict";n(76969),n(6291),n(8704),n(36257);var i=n(41201),r=n(74165),s=n(15671),a=n(43144),u=n(15861),o=n(76200),l=n(10064),c=n(92026);function d(){return d=(0,u.Z)((0,r.Z)().mark((function e(t,n,s,a){var u,o,c,d,f,p,g;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=n.exec(s)){e.next=3;break}throw new l.Z("esri-intl:invalid-bundle",'Bundle id "'.concat(s,'" is not compatible with the pattern "').concat(n,'"'));case 3:return o=u[1]?"".concat(u[1],"/"):"",c=u[2],d=(0,i.Su)(a),f="".concat(o).concat(c,".json"),p=d?"".concat(o).concat(c,"_").concat(d,".json"):f,e.prev=4,e.next=7,h(t(p));case 7:case 17:g=e.sent,e.next=23;break;case 10:if(e.prev=10,e.t0=e.catch(4),p!==f){e.next=14;break}throw new l.Z("intl:unknown-bundle",'Bundle "'.concat(s,'" cannot be loaded'),{error:e.t0});case 14:return e.prev=14,e.next=17,h(t(f));case 20:throw e.prev=20,e.t1=e.catch(14),new l.Z("intl:unknown-bundle",'Bundle "'.concat(s,'" cannot be loaded'),{error:e.t1});case 23:return e.abrupt("return",g);case 24:case"end":return e.stop()}}),e,null,[[4,10],[14,20]])}))),d.apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,c.pC)(v.fetchBundleAsset)){e.next=2;break}return e.abrupt("return",v.fetchBundleAsset(t));case 2:return e.next=4,(0,o.default)(t,{responseType:"text"});case 4:return n=e.sent,e.abrupt("return",JSON.parse(n.data));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){function e(t){var n,i=t.base,r=void 0===i?"":i,a=t.pattern,u=t.location,o=void 0===u?new URL(window.location.href):u;(0,s.Z)(this,e),n="string"==typeof o?function(e){return new URL(e,new URL(o,window.location.href)).href}:o instanceof URL?function(e){return new URL(e,o).href}:o,this.pattern="string"==typeof a?new RegExp("^".concat(a)):a,this.getAssetUrl=n,r=r?r.endsWith("/")?r:r+"/":"",this.matcher=new RegExp("^".concat(r,"(?:(.*)/)?(.*)$"))}return(0,a.Z)(e,[{key:"fetchMessageBundle",value:function(e,t){return function(e,t,n,i){return d.apply(this,arguments)}(this.getAssetUrl,this.matcher,e,t)}}]),e}();var g,v={},m=n(65905);(0,i.tz)((g={pattern:"esri/",location:m.V},new p(g)))},41201:function(e,t,n){"use strict";n.d(t,{ME:function(){return w},Su:function(){return _},tz:function(){return y}});var i=n(74165),r=n(15671),s=n(43144),a=n(29439),u=n(15861),o=n(37762),l=n(10064),c=n(66978),d=n(36257),h=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,f={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function p(e){var t;return null!==(t=f[e])&&void 0!==t&&t}var g=[],v=new Map;function m(e){var t,n=(0,o.Z)(v.keys());try{for(n.s();!(t=n.n()).done;){var i=t.value;Z(e.pattern,i)&&v.delete(i)}}catch(r){n.e(r)}finally{n.f()}}function y(e){return g.includes(e)||(m(e),g.unshift(e)),{remove:function(){var t=g.indexOf(e);t>-1&&(g.splice(t,1),m(e))}}}function w(e){return k.apply(this,arguments)}function k(){return(k=(0,u.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,d.Kd)(),v.has(t)||v.set(t,b(t,n)),r=v.get(t),e.t0=r,!e.t0){e.next=7;break}return e.next=7,S.add(r);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){if(!h.test(e))return null;var t=h.exec(e);if(null===t)return null;var n=(0,a.Z)(t,3),i=n[1],r=n[2],s=i+(r?"-"+r.toUpperCase():"");return p(s)?s:p(i)?i:null}function b(e,t){return C.apply(this,arguments)}function C(){return(C=(0,u.Z)((0,i.Z)().mark((function e(t,n){var r,s,a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],s=(0,o.Z)(g),e.prev=2,s.s();case 4:if((a=s.n()).done){e.next=18;break}if(!Z((u=a.value).pattern,t)){e.next=16;break}return e.prev=7,e.next=10,u.fetchMessageBundle(t,n);case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(7),r.push(e.t0);case 16:e.next=4;break;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(2),s.e(e.t1);case 23:return e.prev=23,s.f(),e.finish(23);case 26:if(!r.length){e.next=28;break}throw new l.Z("intl:message-bundle-error",'Errors occurred while loading "'.concat(t,'"'),{errors:r});case 28:throw new l.Z("intl:no-message-bundle-loader",'No loader found for message bundle "'.concat(t,'"'));case 29:case"end":return e.stop()}}),e,null,[[2,20,23,26],[7,13]])})))).apply(this,arguments)}function Z(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}(0,d.Ze)((function(){v.clear()}));var S=new(function(){function e(){(0,r.Z)(this,e),this._numLoading=0,this._dfd=null}return(0,s.Z)(e,[{key:"waitForAll",value:function(){var e=(0,u.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this._dfd,!e.t0){e.next=4;break}return e.next=4,this._dfd.promise;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"add",value:function(e){var t=this;return this._increase(),e.then((function(){return t._decrease()}),(function(){return t._decrease()})),this.waitForAll()}},{key:"_increase",value:function(){this._numLoading++,this._dfd||(this._dfd=(0,c.dD)())}},{key:"_decrease",value:function(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}]),e}())},8704:function(e,t,n){"use strict";n.d(t,{n:function(){return l}});var i=n(32718),r=n(18202),s=n(643),a=n(76969),u=n(6291),o=i.Z.getLogger("esri.intl.substitute");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.format,r=void 0===i?{}:i;return(0,s.gx)(e,(function(e){return c(e,t,r)}))}function c(e,t,n){var i,s,a,u=e.indexOf(":");if(-1===u?s=e.trim():(s=e.slice(0,u).trim(),a=e.slice(u+1).trim()),!s)return"";var o=(0,r.hS)(s,t);if(null==o)return"";var l=null!==(i=a?null===n||void 0===n?void 0:n[a]:null)&&void 0!==i?i:null===n||void 0===n?void 0:n[s];return l?d(o,l):a?h(o,a):f(o)}function d(e,t){switch(t.type){case"date":return(0,a.p6)(e,t.intlOptions);case"number":return(0,u.uf)(e,t.intlOptions);default:return o.warn("missing format descriptor for key {key}"),f(e)}}function h(e,t){switch(t.toLowerCase()){case"dateformat":return(0,a.p6)(e);case"numberformat":return(0,u.uf)(e);default:return o.warn("inline format is unsupported since 4.12: ".concat(t)),/^(dateformat|datestring)/i.test(t)?(0,a.p6)(e):/^numberformat/i.test(t)?(0,u.uf)(e):f(e)}}function f(e){switch(typeof e){case"string":return e;case"number":return(0,u.uf)(e);case"boolean":return""+e;default:return e instanceof Date?(0,a.p6)(e):""}}},58359:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var i=(0,n(43404).w)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})},37384:function(e,t,n){"use strict";n.d(t,{$o:function(){return r},V$:function(){return a},rk:function(){return s}});var i="calcite-mode-";function r(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replace(/\s|'|"/g,"").startsWith("dark")}function s(){return"".concat(i).concat(r()?"dark":"light")}function a(e){u(e),e.classList.add(s())}function u(e){Array.from(e.classList).forEach((function(t){t.startsWith(i)&&e.classList.remove(t)}))}},78088:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var i=n(37680);function r(){return function(e,t){if(!e[t])throw new TypeError("Cannot auto bind undefined function '".concat(t,"'"));return{value:a(e[t])}}}function s(e){var t=null===e||void 0===e?void 0:e.type;return e instanceof KeyboardEvent||"keyup"===t||"keydown"===t||"keypress"===t}function a(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];s(t)?(0,i.pf)(t.key)&&(t.preventDefault(),t.stopPropagation(),t.target.click()):e.call.apply(e,[this,t].concat(r))}}},28907:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});var i=n(93433);function r(e){return function(t){t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);var n=t._delegatedEventNames,r=Array.isArray(e)?e:function(e){return e.split(",").map((function(e){return e.trim()}))}(e);n.push.apply(n,(0,i.Z)(r))}}}}]);
//# sourceMappingURL=32887.d22ed079.chunk.js.map
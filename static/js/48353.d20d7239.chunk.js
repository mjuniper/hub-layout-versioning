"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[48353],{27151:function(t,e,n){n.r(e),n.d(e,{arcgis_telemetry_report:function(){return g}});var s,i=n(4942),r=n(93433),o=n(74165),a=n(15861),u=n(15671),c=n(43144),h=n(5692),f=n(2001),l=n(62531);!function(t){t.sessions="sessions",t.referrers="referrers",t["page-views"]="page-views",t["session-activity"]="session-activity"}(s||(s={}));var m=function(t,e,n,s){var i,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},g=function(){function t(e){(0,u.Z)(this,t),(0,h.r)(this,e),this.telemetryContext={},this.series=[],this.data=[],this.isLoading=!0}return(0,c.Z)(t,[{key:"onRequestParamsChange",value:function(){this.getReportData()}},{key:"componentWillLoad",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.getReportData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"dataTransformOptions",get:function(){return{seriesTransforms:this.seriesTransforms,requestParams:this.requestParams}}},{key:"isCustomEvent",get:function(){return this.telemetryEvent&&"string"!==typeof this.telemetryEvent}},{key:"seriesTransforms",get:function(){var t={};return this.series.forEach((function(e){"string"!==typeof e&&(t[e.name]=Object.assign(Object.assign({},e.title&&{title:e.title}),e.value&&{value:e.value}))})),t}},{key:"dimensionFilters",get:function(){var t=[],e=[];return this.contentId&&this.hostname&&(t=[{name:"contentId",any:[this.contentId]}]),this.isCustomEvent&&(e=(0,l.b)(this.telemetryEvent)),[].concat((0,r.Z)(e),(0,r.Z)(t))}},{key:"scope",get:function(){return this.hostname?{hostname:this.hostname}:this.contentId?{contentId:this.contentId}:void 0}},{key:"requestParams",get:function(){var t=this.getDimensions(this.telemetryEvent),e=this.getMetric(this.telemetryEvent);return Object.assign({scope:this.scope,startDate:this.startDate,endDate:this.endDate,timeDimension:this.category,orderBy:this.orderBy,limit:this.limit,dimensionFilters:this.dimensionFilters,metrics:[e]},t.length&&{dimensions:t})}},{key:"requestOptions",get:function(){var t;return Object.assign(Object.assign({},this.context&&(null===(t=this.context)||void 0===t?void 0:t.hubRequestOptions)),this.telemetryContext)}},{key:"getMetric",value:function(t){var e,n=(e={},(0,i.Z)(e,s.sessions,l.C.sessions),(0,i.Z)(e,s.referrers,l.C["page-views"]),(0,i.Z)(e,s["page-views"],l.C["page-views"]),(0,i.Z)(e,s["session-activity"],l.C["session-activity"]),e);return!this.isCustomEvent&&n[t]||l.C.custom}},{key:"getDimensions",value:function(t){var e=(0,i.Z)({},s.referrers,"referrer"),n=this.series.map((function(t){return"string"===typeof t?t:t.name})),o=!this.isCustomEvent&&e[t];return o?[o].concat((0,r.Z)(n)):n}},{key:"getReportData",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e=this;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.isLoading=!0,this.context&&(0,l.g)(this.requestParams,this.requestOptions).then((function(t){e.data=t.data})).catch((function(t){e.error=t.toString()})).finally((function(){e.isLoading=!1}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t="arcgis-telemetry-".concat(this.type);return(0,h.h)(h.H,{"data-element":"telemetry-report"},(0,h.h)(t,{data:this.data,isLoading:this.isLoading,options:this.dataTransformOptions,reportTitle:this.reportTitle,subtitle:this.subtitle,titleTooltip:this.titleTooltip}))}},{key:"element",get:function(){return(0,h.g)(this)}}],[{key:"watchers",get:function(){return{context:["onRequestParamsChange"],startDate:["onRequestParamsChange"],endDate:["onRequestParamsChange"],telemetryEvent:["onRequestParamsChange"]}}}]),t}();m([(0,f.D)({timeout:300})],g.prototype,"onRequestParamsChange",null)},2001:function(t,e,n){function s(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(s){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];clearTimeout(e),e=setTimeout((function(){return t.apply(s,r)}),n)}}function i(t){return function(e,n,i){var r=i.value,o="".concat(n.toString(),"Debounced");return Object.assign(Object.assign({},i),{value:function(){this[o]||Object.defineProperty(this,o,{value:s(r,t.timeout)});for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this[o].apply(this,[this].concat(n))}})}}n.d(e,{D:function(){return i}})}}]);
//# sourceMappingURL=48353.d20d7239.chunk.js.map
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[68412],{68412:function(e,t,n){n.r(t),n.d(t,{arcgis_hub_feeds_list:function(){return s}});var i=n(74165),r=n(15861),o=n(15671),a=n(43144),l=n(5692),u=n(13129),c=n(54825),s=(n(7597),function(){function e(t){(0,o.Z)(this,e),(0,l.r)(this,t),this.hubTelemetry=(0,l.c)(this,"hubTelemetry",7),(0,c.b)(this,"generateViewButtonHandler")}return(0,a.Z)(e,[{key:"onCopyButtonClicked",value:function(e){var t=e.detail,n=this.feeds.find((function(e){return e.url===t}));this.hubTelemetry.emit({category:"Interaction",action:"Copy",label:"Content",details:n.telemetryName})}},{key:"componentWillLoad",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"generateViewButtonHandler",value:function(e){var t=this;return function(){t.hubTelemetry.emit({category:"Navigation",action:"View",label:"Content",details:e.telemetryName})}}},{key:"render",value:function(){var e=this;return(0,l.h)(l.H,null,(0,l.h)("div",{class:"list-description"},(0,l.h)("slot",null)),this.feeds.map((function(t){return(0,l.h)("div",{class:"feed-container"},(0,l.h)("arcgis-copyable-input",{label:t.label,readonly:!0,value:t.copyUrl||t.url}),(0,l.h)("calcite-button",{appearance:"outline",href:t.url,onClick:e.generateViewButtonHandler(t),target:"_blank"},e.intl.t("viewButton")))})))}},{key:"element",get:function(){return(0,l.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}());s.style=":host{display:block}.list-description{margin-bottom:1.5rem}.feed-container{margin-bottom:0.75rem;display:grid;align-items:flex-end;grid-template-columns:1fr -webkit-min-content;grid-template-columns:1fr min-content}.feed-container calcite-button{margin-left:0.75rem;margin-bottom:0.75rem;height:2rem}"},54825:function(e,t,n){n.d(t,{b:function(){return i}});var i=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];n.forEach((function(t){if("function"!==typeof e[t])throw new Error("Cannot bind context. ".concat(t," must be a function"));e[t]=e[t].bind(e)}))}}}]);
//# sourceMappingURL=68412.e82b6f38.chunk.js.map
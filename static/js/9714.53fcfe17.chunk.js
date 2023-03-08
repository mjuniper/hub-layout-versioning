"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[9714],{9714:function(e,t,n){n.r(t),n.d(t,{arcgis_countdown:function(){return f}});var i=n(74165),r=n(15861),a=n(15671),o=n(43144),s=n(72585),u=n(60796),l=n(12868),c=(n(84371),"header"),h="title",d="countdown",f=function(){function e(t){(0,a.Z)(this,e),(0,s.r)(this,t),this.shareable=!1,this.shareableByValue=!1,this.shareableByReference=!1,this.shareableOnHover=!1}return(0,o.Z)(e,[{key:"onCountdownDateChange",value:function(e){this.intervalId&&this.cleanupCountdown(this.intervalId),this.initializeCountdown(e)}},{key:"componentWillLoad",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.countdownDate&&this.initializeCountdown(this.countdownDate);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.cleanupCountdown(this.intervalId)}},{key:"initializeCountdown",value:function(e){this.updateCountdown(e),this.intervalId=setInterval(this.updateCountdown.bind(this),1e3,e)}},{key:"updateCountdown",value:function(e){var t=this.getTimeRemaining(e);this.days=t.days.toString(),this.hours=("0"+t.hours).slice(-2),this.minutes=("0"+t.minutes).slice(-2),this.seconds=("0"+t.seconds).slice(-2),t.total<=0&&this.cleanupCountdown(this.intervalId)}},{key:"getTimeRemaining",value:function(e){var t="".concat(new Date(e).toISOString().split("T").shift(),"T00:00:00.000"),n=Date.parse(t)-Date.parse((new Date).toString()),i=Math.floor(n/1e3%60),r=Math.floor(n/1e3/60%60),a=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:a,minutes:r,seconds:i}}},{key:"cleanupCountdown",value:function(e){clearInterval(e)}},{key:"renderHeader",value:function(e){return(0,s.h)("div",{class:c,slot:"title"},e&&(0,s.h)("h1",{class:h},e))}},{key:"renderCountdown",value:function(){var e=this;return["days","hours","minutes","seconds"].map((function(t){return(0,s.h)("div",null,(0,s.h)("span",{class:"".concat(t," counter")},e[t]),(0,s.h)("div",{class:"unit"},e.intl.t(t)))}))}},{key:"renderError",value:function(){return(0,s.h)("calcite-notice",{color:"red",scale:"m",width:"auto"},(0,s.h)("div",{slot:"title"},this.intl.t("countdownDateMissingError")))}},{key:"render",value:function(){return this.countdownDate?(0,s.h)(u.S,{context:this,showShareUi:!0},(0,s.h)("calcite-card",null,this.renderHeader(this.cardTitle),(0,s.h)("div",{class:d},this.renderCountdown()))):this.renderError()}},{key:"element",get:function(){return(0,s.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}},{key:"watchers",get:function(){return{countdownDate:["onCountdownDateChange"]}}}]),e}();f.style=":host{display:block}.countdown{display:flex}.countdown>div{display:flex;flex-direction:column;align-items:center;padding-right:1rem}.counter{font-size:var(--calcite-font-size-3);line-height:2rem}.unit{font-size:var(--calcite-font-size-1);line-height:1.5rem}"},60796:function(e,t,n){n.d(t,{S:function(){return r}});var i=n(72585),r=function(e,t){var n=e.context,r=e.showShareUi;return(0,i.h)("arcgis-shareable-card",{referenceElement:n.element,shareable:n.shareable,shareableByReference:n.shareableByReference,shareableByValue:n.shareableByValue,shareableOnHover:n.shareableOnHover,showShareUi:r},t)}}}]);
//# sourceMappingURL=9714.53fcfe17.chunk.js.map
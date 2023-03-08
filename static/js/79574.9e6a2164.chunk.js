"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[79574],{73843:function(e,t,n){n.r(t),n.d(t,{arcgis_hub_discussions_mention_popover:function(){return p}});var r=n(74165),i=n(15861),o=n(15671),a=n(43144),c=n(5692),u=n(54825),l=n(13129),s=n(4541),h=n(9618),p=(n(7597),n(95101),n(25240),n(67450),function(){function e(t){(0,o.Z)(this,e),(0,c.r)(this,t),this.hubTelemetry=(0,c.c)(this,"hubTelemetry",7),(0,u.b)(this,"handlePopoverOpened","handleGoToProfile","emitHubTelemetry")}return(0,a.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"emitHubTelemetry",value:function(e){var t=this.postId,n=this.parentId,r=this.channelId,i=this.channelAccess,o=this.index;this.hubTelemetry.emit(Object.assign(Object.assign({},e),{postId:t,parentId:n,channelId:r,channelAccess:i,position:o}))}},{key:"handlePopoverOpened",value:function(){this.emitHubTelemetry(s.d.dictionary.category.interaction.action.open.label.popover.details.details)}},{key:"handleGoToProfile",value:function(){this.emitHubTelemetry(s.d.dictionary.category.navigation.action.view.label.users.details.profile)}},{key:"renderCreatorAvatar",value:function(){var e=this.username,t=this.fullName,n=this.thumbnail,r=this.portal,i=this.token,o=this.userId,a=this.access;return(0,c.h)("calcite-avatar",{"full-name":t,scale:"l",thumbnail:n&&(0,h.a)(r,{username:e,access:a,thumbnail:n},i),"user-id":o,username:e})}},{key:"renderCreatorDetails",value:function(){var e=this.intl,t=this.username,n=this.fullName,r=e.t("anonymous"),i=e.t("noUser");return t&&(r=n||e.t("privateUser"),i=t),(0,c.h)(c.F,null,(0,c.h)("b",null,r),(0,c.h)("span",null,i))}},{key:"renderCreatorExpandedDetails",value:function(){var e=this.intl,t=this.region,n=this.organization,r=this.username,i=this.isHub;if(t){var o=e.formatDisplayName(t.toLocaleUpperCase(),{type:"region"});return(0,c.h)(c.F,null,(0,c.h)("div",null,(0,c.h)("calcite-icon",{icon:"organization",scale:"s","text-label":e.t("orgLabel")}),n||e.t("privateOrg")),(0,c.h)("div",null,(0,c.h)("calcite-icon",{icon:"pin",scale:"s","text-label":e.t("location")}),o),i&&(0,c.h)("calcite-button",{appearance:"outline",color:"neutral",href:"/people/"+r,label:e.t("profile"),onClick:this.handleGoToProfile,round:!0,scale:"l",width:"full"},e.t("profile")))}}},{key:"renderPostDetails",value:function(){var e=this.intl,t=this.creatorUsername;return(0,c.h)("footer",null,(0,c.h)("div",null,(0,c.h)("calcite-icon",{icon:"speech-bubbles",scale:"s"}),(0,c.h)("span",null,e.t("mentionedBy",{username:t}))))}},{key:"render",value:function(){var e=this,t=this.intl;return(0,c.h)(c.H,{"data-element":"discussions-mention-popover"},this.buttonEl&&(0,c.h)("calcite-popover",{autoClose:!0,label:t.t("information"),placement:"top",referenceElement:this.buttonEl},(0,c.h)("div",{class:"popover-body"},(0,c.h)("address",null,this.renderCreatorAvatar(),this.renderCreatorDetails()),this.renderCreatorExpandedDetails()),this.renderPostDetails()),(0,c.h)("button",{ref:function(t){e.buttonEl=t},type:"button"},(0,c.h)("slot",null)))}},{key:"element",get:function(){return(0,c.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}());p.style=":host{display:inline-block}::slotted(calcite-link){font-size:var(--calcite-font-size-0) !important;line-height:1.25rem !important}calcite-popover{width:20rem}button{grid-row:span 2 / span 2;cursor:pointer;border-style:none;background-color:transparent;padding:0px}address{margin:0px;margin-bottom:1.5rem;display:grid;-moz-column-gap:0.75rem;column-gap:0.75rem;row-gap:0px;font-style:normal;grid-template-columns:44px auto}address:last-child{margin:0px}calcite-avatar{grid-row:span 2 / span 2;height:2.75rem;width:2.75rem}address calcite-icon{grid-row:span 2 / span 2;height:2.75rem;width:2.75rem}address b{font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}address span{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}address span:before{content:'@'}calcite-icon{margin-top:1px;margin-bottom:1px}.popover-body{margin:0px;padding:0.75rem}.popover-body div{margin-bottom:0.5rem;display:flex;align-items:flex-start;gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-2)}.popover-body div+div{margin-bottom:1rem}.popover-body div+div:last-child{margin:0px}footer{padding:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-background)}footer div{margin:0px;margin-bottom:0.5rem;display:flex;align-items:flex-start;gap:0.5rem}footer div:nth-of-type(3){margin-bottom:1rem}footer div:last-child{margin:0px}"},64369:function(e,t,n){function r(e){return"string"!==typeof e||"/"===(e=e.trim())[e.length-1]&&(e=e.slice(0,-1)),e}n.d(t,{c:function(){return r}})},13115:function(e,t,n){function r(e,t){return t.split(".").reduce((function(e,t){return e?e[t]:void 0}),e)}n.d(t,{g:function(){return r}})},12969:function(e,t,n){n.d(t,{a:function(){return c},b:function(){return s},c:function(){return i},d:function(){return f},e:function(){return u},f:function(){return d},g:function(){return o},i:function(){return p},m:function(){return l},u:function(){return h},w:function(){return a}});var r=n(13115);function i(e){var t={};if(Array.isArray(e))t=e.map(i);else if("object"===typeof e){for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&"object"===typeof r?r instanceof Date?t[n]=new Date(r.getTime()):"undefined"!==typeof Blob&&r instanceof Blob?t[n]=new Blob([r],{type:r.type}):t[n]=i(r):t[n]=r}}else t=e;return t}function o(e,t,n){return e?e.reduce((function(e,i){return(0,r.g)(i,t)===n&&(e=i),e}),null):null}function a(e,t){return e.filter((function(e){return e!==t}))}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"i";return"".concat(e).concat(Math.random().toString(36).substr(2,8))}function u(e,t,n){return null!==t&&void 0!==t&&((n=i(n))[e]=t),n}function l(e,t){return null!==e&&void 0!==e&&(t=i(t)).push(e),t}function s(e){return(e=(e=e.toLowerCase()).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi," ")).replace(/(\-|\_|\.|\s)+(.)?/g,(function(e,t,n){return n?n.toUpperCase():""})).replace(/(^|\/)([A-Z])/g,(function(e,t,n){return e.toLowerCase()}))}function h(e,t,n){return n.indexOf(e)===t}var p=function(e){return null==e},f=function(e){var t=Array.from(e);return t[0]=t[0].toUpperCase(),t.join("")};function d(e){return e.reduce((function(e,t){return e.concat(t)}),[])}},9618:function(e,t,n){n.d(t,{a:function(){return h},b:function(){return l},e:function(){return a},g:function(){return s},r:function(){return u},v:function(){return c}});var r=n(12969),i=n(25240),o={arcgis:{label:"ArcGIS Online",url:"https://www.arcgis.com",type:"arcgis"},arcgisQA:{label:"ArcGIS Online QAEXT",url:"https://qaext.arcgis.com",type:"arcgis"},arcgisDEV:{label:"ArcGIS Online DEVEXT",url:"https://devext.arcgis.com",type:"arcgis"},hub:{label:"ArcGIS Hub",url:"https://hub.arcgis.com/api",type:"arcgis-hub"},hubDEV:{label:"ArcGIS Hub DEV",url:"https://hubdev.arcgis.com/api",type:"arcgis-hub"},hubQA:{label:"ArcGIS Hub QA",url:"https://hubqa.arcgis.com/api",type:"arcgis-hub"}};function a(e){return"string"===typeof e&&e in o?o[e]:e}function c(e){var t={};return Array.isArray(e)?t={any:e}:("string"===typeof e&&(t={any:[e]}),"object"===typeof e&&(t=e)),t}function u(e){var t=new Date,n={type:"date-range",from:t.getTime(),to:t.getTime()};switch(e.unit){case"hours":case"days":case"weeks":n.from=n.to-{min:6e4,hours:36e5,days:864e5,weeks:6048e5}[e.unit]*e.num;break;case"months":t.setMonth(t.getMonth()-e.num),n.from=t.getTime();break;case"years":t.setFullYear(t.getFullYear()-e.num),n.from=t.getTime()}return n}function l(e,t,n,o){var a=(0,r.c)(e);return e.authentication&&(a.authentication=i.U.deserialize(e.authentication.serialize())),a.start=t>-1?t:n+1,function(e){return e&&(a.authentication=e),o(a)}}function s(e,t,n){var r=null;return t.thumbnail&&(r="".concat(e,"/community/groups/").concat(t.id,"/info/").concat(t.thumbnail),n&&"public"!==t.access&&(r="".concat(r,"?token=").concat(n))),r}function h(e,t,n){var r=null;return t.thumbnail&&(r="".concat(e,"/community/users/").concat(t.username,"/info/").concat(t.thumbnail),n&&"public"!==t.access&&(r="".concat(r,"?token=").concat(n))),r}}}]);
//# sourceMappingURL=79574.9e6a2164.chunk.js.map
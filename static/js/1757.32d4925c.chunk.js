"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[1757],{27778:function(e,t,n){n.r(t),n.d(t,{arcgis_hub_discussions_channel_settings_editor:function(){return f}});var i=n(93433),a=n(74165),s=n(29439),c=n(15861),r=n(15671),o=n(43144),l=n(72585),u=n(85621),h=n(32836),d=n(12868),p=n(29315),m=n(34802),f=(n(10625),n(84371),n(9882),n(77843),n(84354),n(80046),n(41817),n(46825),n(51274),n(94062),n(21010),n(49799),n(34601),n(69207),n(88968),n(73948),n(25831),n(18436),n(79399),n(21923),n(36106),function(){function e(t){(0,r.Z)(this,e),(0,l.r)(this,t),this.hubTelemetry=(0,l.c)(this,"hubTelemetry",7),this.saving=!1,this.activity=!0,this.notices=[],(0,h.b)(this,"handleStepperItemSelected","handleLinkClicked","handleCancelButtonClicked","handleSaveButtonClicked","handleModalClosed","handleTileSelect","handleNoticeClosed")}return(0,o.Z)(e,[{key:"isMember",get:function(){var e=this.channelDetails.channel,t=this.context;return Boolean(e)&&t.currentUser.groups.some((function(t){var n=t.id;return e.groups.includes(n)}))}},{key:"componentWillLoad",value:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n,i,c,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d.i.loadIntlForComponent(this.element),(0,p.f)(Object.assign({channelId:this.channelId},this.context.hubRequestOptions)).catch((function(){return null})),this.fetchChannelDetails(this.channelId)]);case 2:return t=e.sent,n=(0,s.Z)(t,3),i=n[0],c=n[1],r=n[2],this.intl=i,this.notifications=!c,this.channelDetails=r,e.next=12,this.fetchTotalPosts();case 12:this.postTotal=e.sent,this.activeStepIndex=this.isMember?0:1;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stepItems",get:function(){var e=this.isMember,t=this.intl,n=this.notifications,i=this.activity;return[{name:"notifications",description:e?"":t.t("notifications-disabled"),disabled:!e,heading:t.t("notifications"),options:[{checked:n,description:t.t("receiveDesc"),heading:t.t("receive"),icon:"email-address",value:!0},{checked:!n,description:t.t("stopDesc"),heading:t.t("stop"),icon:"circle-disallowed",value:!1}],notice:{title:t.t("stopNotice"),message:t.t("stopNoticeMessage"),link:t.t("noticeLink"),url:"https://doc.arcgis.com/en/hub/team/how-discussions-work.htm"}},{name:"activity",disabled:!1,heading:t.t("activity"),options:[{checked:i,description:t.t("keepDesc"),heading:t.t("keep"),icon:"speech-bubble-check",value:!0},{checked:!i,description:t.t("deleteDesc"),heading:t.t("delete"),icon:"trash",value:!1}],notice:{title:t.t("deleteNotice"),message:t.t("deleteNoticeMessage"),link:t.t("noticeLink"),url:"https://doc.arcgis.com/en/hub/team/how-discussions-work.htm"}}]}},{key:"fetchChannelDetails",value:function(e){var t=this.context.hubRequestOptions,n=Object.assign({channelDetails:{channelId:e}},t);return(0,p.e)(n)}},{key:"fetchTotalPosts",value:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n,i,s,c,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.channelId,n=this.context,i=n.hubRequestOptions,s=n.currentUser,e.next=3,(0,p.s)(Object.assign({params:{start:1,num:1,channels:t,creator:s.username}},i));case 3:return c=e.sent,r=c.total,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleStepperItemSelected",value:function(e){var t=e.currentTarget,n=this.activeStepIndex,i=this.stepItems,a=i[n];if(!t.disabled&&t.dataset.name!==a.name){var s="notifications"===t.dataset.name?"emailNotifications":"postActivity";this.hubTelemetry.emit(u.d.dictionary.category.interaction.action.open.label.stepper.details[s]),this.activeStepIndex=i.findIndex((function(e){return e.name===t.dataset.name}))}}},{key:"handleLinkClicked",value:function(e){e.preventDefault(),this.hubTelemetry.emit(u.d.dictionary.category.navigation.action.view.label.groups);var t=e.target;setTimeout((function(){window.location.href=t.href}),250)}},{key:"handleCancelButtonClicked",value:function(){this.open=!1}},{key:"removeChannelActivity",value:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.channelId,n=this.intl,s=this.context,e.prev=1,e.next=4,(0,p.r)(Object.assign({channelId:t},s.hubRequestOptions));case 4:return this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.content.action.delete.details.allPosts),{response:u.d.constants.response.SUCCESS})),e.next=7,this.fetchTotalPosts();case 7:this.postTotal=e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.content.action.delete.details.allPosts),{response:u.d.constants.response.FAILURE})),this.notices=[].concat((0,i.Z)(this.notices),[{title:n.t("deleteError"),message:n.t("deleteErrorMessage")}]);case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"createChannelNotificationOptOut",value:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.channelId,n=this.intl,s=this.context,e.prev=1,e.next=4,(0,p.c)(Object.assign({channelId:t},s.hubRequestOptions));case 4:this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.users.action.update.label.notifications.details.disabled),{response:u.d.constants.response.SUCCESS})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.users.action.update.label.notifications.details.disabled),{response:u.d.constants.response.FAILURE})),this.notices=[].concat((0,i.Z)(this.notices),[{title:n.t("stopError"),message:n.t("stopErrorMessage")}]);case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"removeChannelNotificationOptOut",value:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t,n,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.channelId,n=this.intl,s=this.context,e.prev=1,e.next=4,(0,p.a)(Object.assign({channelId:t},s.hubRequestOptions));case 4:this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.users.action.update.label.notifications.details.enabled),{response:u.d.constants.response.SUCCESS})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.users.action.update.label.notifications.details.enabled),{response:u.d.constants.response.FAILURE})),this.notices=[].concat((0,i.Z)(this.notices),[{title:n.t("receiveError"),message:n.t("receiveErrorMessage")}]);case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleSaveButtonClicked",value:function(){var e=this;this.saving=!0,this.notices=[];var t=[];this.activity||t.push(this.removeChannelActivity()),t.push(this.notifications?this.removeChannelNotificationOptOut():this.createChannelNotificationOptOut()),Promise.all(t).then((function(){e.saving=!1,e.notices.length||(e.notices=[{title:e.intl.t("updated"),message:e.intl.t("updatedMessage")}])}))}},{key:"handleModalClosed",value:function(){this.hubTelemetry.emit(u.d.dictionary.category.interaction.action.close.label.modal.details.managePreferences)}},{key:"handleTileSelect",value:function(e){var t=e.target;this[t.name]=t.value}},{key:"handleNoticeClosed",value:function(){this.notices=[]}},{key:"renderMetadata",value:function(){var e=(0,s.Z)(this.channelDetails.groups,1)[0],t=this.context,n=this.postTotal,i=this.intl;return(0,l.h)("address",null,(0,l.h)("calcite-avatar",{fullName:e.title,scale:"l",thumbnail:(0,m.g)(t.session.portal,e,t.session.token)}),(0,l.h)("div",null,(0,l.h)("b",null,e.title),(0,l.h)("span",null,i.t("totalPosts",{count:n}))))}},{key:"renderChannelDetails",value:function(){var e=(0,s.Z)(this.channelDetails.groups,1)[0],t=this.intl;return(0,l.h)("calcite-card",null,(0,l.h)("div",null,this.renderMetadata(),(0,l.h)("calcite-link",{href:"".concat(window.location.origin,"/teams/").concat(e.id),onClick:this.handleLinkClicked,target:"_blank"},t.t("viewGroup"))))}},{key:"renderContent",value:function(){var e=this,t=this.isMember;return(0,l.h)("section",{slot:"content"},t&&this.renderChannelDetails(),(0,l.h)("calcite-stepper",{layout:"vertical"},this.stepItems.map((function(t){return(0,l.h)("calcite-stepper-item",{"data-name":t.name,description:t.description,disabled:t.disabled,heading:t.heading,key:t.heading,onClick:e.handleStepperItemSelected},(0,l.h)("calcite-tile-select-group",null,t.options.map((function(n){return(0,l.h)("calcite-tile-select",{checked:n.checked,description:n.description,heading:n.heading,icon:n.icon,inputEnabled:!0,key:n.icon,name:t.name,onCalciteTileSelectChange:e.handleTileSelect,type:"radio",value:n.value})}))),t.options[1].checked&&(0,l.h)("calcite-notice",{width:"full"},(0,l.h)("p",{slot:"title"},t.notice.title),(0,l.h)("p",{slot:"message"},t.notice.message),(0,l.h)("calcite-link",{href:t.notice.url,slot:"link"},t.notice.link)))}))),this.renderNotice())}},{key:"renderNotice",value:function(){var e=this.notices,t=this.intl,n=e.length>1?{title:t.t("multipleError"),message:t.t("multipleErrorMessage")}:e[0];if(n)return(0,l.h)("calcite-notice",{closable:!0,onCalciteNoticeClose:this.handleNoticeClosed,width:"full"},(0,l.h)("p",{slot:"title"},n.title),(0,l.h)("p",{slot:"message"},n.message))}},{key:"renderModal",value:function(){var e=this.intl,t=this.saving,n=this.open;return(0,l.h)("calcite-modal",{open:n},(0,l.h)("p",{slot:"header"},e.t("header")),(0,l.h)("calcite-button",{disabled:t,loading:t,onClick:this.handleSaveButtonClicked,round:!0,scale:"l",slot:"primary"},e.t("save")),(0,l.h)("calcite-button",{appearance:"outline",disabled:t,onClick:this.handleCancelButtonClicked,round:!0,scale:"l",slot:"secondary"},e.t("cancel")),this.renderContent())}},{key:"render",value:function(){return(0,l.h)(l.H,{"data-element":"discussions-channel-settings-editor"},this.renderModal())}},{key:"element",get:function(){return(0,l.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}());f.style=":host{display:block}calcite-modal{z-index:1030}section{display:grid;gap:1rem}calcite-notice{display:none}calcite-notice[active]{display:block}calcite-stepper-item calcite-notice{margin-top:1rem}address{display:flex;gap:1rem}address div{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:0.125rem}address b{font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-bold);font-style:normal;color:var(--calcite-ui-text-1)}address span{font-size:var(--calcite-font-size--1);line-height:1rem;font-style:normal;color:var(--calcite-ui-text-2)}div{display:flex;align-items:center;justify-content:space-between}"},34802:function(e,t,n){n.d(t,{a:function(){return h},b:function(){return l},e:function(){return c},g:function(){return u},r:function(){return o},v:function(){return r}});var i=n(25434),a=n(36106),s={arcgis:{label:"ArcGIS Online",url:"https://www.arcgis.com",type:"arcgis"},arcgisQA:{label:"ArcGIS Online QAEXT",url:"https://qaext.arcgis.com",type:"arcgis"},arcgisDEV:{label:"ArcGIS Online DEVEXT",url:"https://devext.arcgis.com",type:"arcgis"},hub:{label:"ArcGIS Hub",url:"https://hub.arcgis.com/api",type:"arcgis-hub"},hubDEV:{label:"ArcGIS Hub DEV",url:"https://hubdev.arcgis.com/api",type:"arcgis-hub"},hubQA:{label:"ArcGIS Hub QA",url:"https://hubqa.arcgis.com/api",type:"arcgis-hub"}};function c(e){return"string"===typeof e&&e in s?s[e]:e}function r(e){var t={};return Array.isArray(e)?t={any:e}:("string"===typeof e&&(t={any:[e]}),"object"===typeof e&&(t=e)),t}function o(e){var t=new Date,n={type:"date-range",from:t.getTime(),to:t.getTime()};switch(e.unit){case"hours":case"days":case"weeks":n.from=n.to-{min:6e4,hours:36e5,days:864e5,weeks:6048e5}[e.unit]*e.num;break;case"months":t.setMonth(t.getMonth()-e.num),n.from=t.getTime();break;case"years":t.setFullYear(t.getFullYear()-e.num),n.from=t.getTime()}return n}function l(e,t,n,s){var c=(0,i.c)(e);return e.authentication&&(c.authentication=a.U.deserialize(e.authentication.serialize())),c.start=t>-1?t:n+1,function(e){return e&&(c.authentication=e),s(c)}}function u(e,t,n){var i=null;return t.thumbnail&&(i="".concat(e,"/community/groups/").concat(t.id,"/info/").concat(t.thumbnail),n&&"public"!==t.access&&(i="".concat(i,"?token=").concat(n))),i}function h(e,t,n){var i=null;return t.thumbnail&&(i="".concat(e,"/community/users/").concat(t.username,"/info/").concat(t.thumbnail),n&&"public"!==t.access&&(i="".concat(i,"?token=").concat(n))),i}},84506:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(83878),a=n(59199),s=n(40181),c=n(25267);function r(e){return(0,i.Z)(e)||(0,a.Z)(e)||(0,s.Z)(e)||(0,c.Z)()}}}]);
//# sourceMappingURL=1757.32d4925c.chunk.js.map
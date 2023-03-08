"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[23395],{13310:function(s,t,e){e.r(t),e.d(t,{arcgis_hub_discussions_options_modal:function(){return d}});var i=e(74165),n=e(15861),o=e(15671),a=e(43144),c=e(72585),l=e(12868),r=e(32836),u=e(85621),h=e(29315),d=(e(84371),e(10625),e(9882),e(77843),e(84354),e(80046),e(41817),e(46825),e(51274),e(94062),e(21010),e(49799),e(34601),e(69207),e(88968),e(73948),e(25831),e(18436),e(79399),e(21923),function(){function s(t){(0,o.Z)(this,s),(0,c.r)(this,t),this.hubTelemetry=(0,c.c)(this,"hubTelemetry",7),this.arcgisHubDiscussionsOptionsModalClosed=(0,c.c)(this,"arcgisHubDiscussionsOptionsModalClosed",7),this.arcgisHubDiscussionsOptionsModalUpdated=(0,c.c)(this,"arcgisHubDiscussionsOptionsModalUpdated",7),this.canDiscuss=!1,(0,r.b)(this,"handleCloseModal","handleModalClosed","handleSave","handleNoticeClosed","handleOptionsChanged")}return(0,a.Z)(s,[{key:"componentWillLoad",value:function(){var s=(0,n.Z)((0,i.Z)().mark((function s(){return(0,i.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.i.loadIntlForComponent(this.element);case 2:this.intl=s.sent,this.updateCanDiscuss();case 4:case"end":return s.stop()}}),s,this)})));return function(){return s.apply(this,arguments)}}()},{key:"updateCanDiscuss",value:function(){this.canDiscuss=(0,h.l)(this.subject)}},{key:"handleModalClosed",value:function(){this.hubTelemetry.emit(u.d.dictionary.category.interaction.action.close.label.modal.details.discussionOptions),this.arcgisHubDiscussionsOptionsModalClosed.emit()}},{key:"handleOptionsChanged",value:function(s){this.canDiscuss=s.detail}},{key:"handleCloseModal",value:function(){this.open=!1}},{key:"isGroup",get:function(){return void 0!==this.subject.isInvitationOnly}},{key:"handleSave",value:function(){var s=(0,n.Z)((0,i.Z)().mark((function s(){var t,e,n,o,a,c,l,r,d;return(0,i.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=this.subject,e=this.context,n=this.optionsElement,o=this.isGroup,a=n.value,c=o?"groups":"content",l=a?"allowDiscussions":"blockDiscussions",r=u.d.dictionary.category[c].action.update.label.settings.details[l],this.saving=!0,this.error=null,s.prev=7,s.next=10,(0,h.u)(Object.assign({subject:t,discussable:n.value},e.requestOptions));case 10:d=s.sent,this.hubTelemetry.emit(Object.assign(Object.assign({},r),{response:u.d.constants.response.SUCCESS})),this.subject=d,this.arcgisHubDiscussionsOptionsModalUpdated.emit(d),s.next=20;break;case 16:s.prev=16,s.t0=s.catch(7),this.error=s.t0,this.hubTelemetry.emit(Object.assign(Object.assign({},r),{response:u.d.constants.response.FAILURE}));case 20:return s.prev=20,this.saving=!1,s.finish(20);case 23:case"end":return s.stop()}}),s,this,[[7,16,20,23]])})));return function(){return s.apply(this,arguments)}}()},{key:"handleNoticeClosed",value:function(){this.error=null}},{key:"render",value:function(){var s=this,t=this.intl,e=this.saving,i=this.open,n=this.error,o=this.isGroup,a=this.canDiscuss;return(0,c.h)(c.H,null,(0,c.h)("arcgis-wormhole",null,(0,c.h)("calcite-modal",{"data-element":"discussions-options-modal",onCalciteModalClose:this.handleModalClosed,open:i},(0,c.h)("header",{slot:"header"},t.t("header")),(0,c.h)("arcgis-hub-discussions-options",{disabled:e,layout:"horizontal",onArcgisHubDiscussionsOptionsChange:this.handleOptionsChanged,ref:function(t){s.optionsElement=t},slot:"content",value:a,variant:o?h.D.GROUP:h.D.CONTENT}),n&&(0,c.h)("calcite-notice",{closable:!0,color:"red",onCalciteNoticeClose:this.handleNoticeClosed,slot:"content"},(0,c.h)("header",{slot:"title"},this.intl.t("error.title")),(0,c.h)("p",{slot:"message"},this.intl.t("error.message"))),(0,c.h)("calcite-button",{appearance:"outline",disabled:e,onClick:this.handleCloseModal,slot:"secondary",type:"button"},t.t("secondary")),(0,c.h)("calcite-button",{loading:e,onClick:this.handleSave,slot:"primary",type:"submit"},t.t(e?"pending":"primary")))))}},{key:"element",get:function(){return(0,c.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}},{key:"watchers",get:function(){return{open:["updateCanDiscuss"],subject:["updateCanDiscuss"]}}}]),s}());d.style=".sc-arcgis-hub-discussions-options-modal-h{display:block}calcite-notice.sc-arcgis-hub-discussions-options-modal{margin-top:0.5rem}p.sc-arcgis-hub-discussions-options-modal{margin:0px}"},84506:function(s,t,e){e.d(t,{Z:function(){return c}});var i=e(83878),n=e(59199),o=e(40181),a=e(25267);function c(s){return(0,i.Z)(s)||(0,n.Z)(s)||(0,o.Z)(s)||(0,a.Z)()}}}]);
//# sourceMappingURL=23395.e40d6001.chunk.js.map
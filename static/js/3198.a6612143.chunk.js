"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[3198],{3198:function(e,t,i){i.r(t),i.d(t,{hub_download_notice:function(){return u}});var s=i(74165),a=i(15861),l=i(15671),r=i(43144),n=i(72585),o=i(12868),u=(i(84371),function(){function e(t){(0,l.Z)(this,e),(0,n.r)(this,t),this.exportRequested=!1,this.cannotExport=!1}return(0,r.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent,this.setLabels(),this.resetUndefinedProps();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"resetUndefinedProps",value:function(){var e=this;["fileStatus","exportRequested","apiError"].forEach((function(t){e[t]="undefined"===e[t]?void 0:e[t]}))}},{key:"setLocalization",value:function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setLabels();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setLabels",value:function(){this.labels={titleFileGeneration:this.intl.t("titleFileGeneration"),titleDatasetNotFound:this.intl.t("titleDatasetNotFound"),titleApiError:this.intl.t("titleApiError"),titleFormatDisabled:this.intl.t("titleFormatDisabled"),titleFileGenerationFailed:this.intl.t("titleFileGenerationFailed"),messageCreatingFile:this.intl.t("messageCreatingFile"),messageUpdatingFile:this.intl.t("messageUpdatingFile"),messageFailedStaleAvailable:this.intl.t("messageFailedStaleAvailable"),messageFileNeedsGenerating:this.intl.t("messageFileNeedsGenerating"),messageFormatDisabled:this.intl.t("messageFormatDisabled")}}},{key:"getNoticeTitle",value:function(){return"disabled"===this.fileStatus?this.labels.titleFormatDisabled:this.exportInProgress()?this.labels.titleFileGeneration:"404"===this.apiError?this.labels.titleDatasetNotFound:this.apiError?this.labels.titleApiError:this.requestedExportHasFailed()?this.labels.titleFileGenerationFailed:void 0}},{key:"getNoticeMessage",value:function(){return"disabled"===this.fileStatus?this.labels.messageFormatDisabled:"creating"===this.fileStatus?this.labels.messageCreatingFile:"updating"===this.fileStatus?this.labels.messageUpdatingFile:this.downloadCached()&&this.requestedExportHasFailed()?this.labels.messageFailedStaleAvailable:"ready_unknown"===this.fileStatus?this.labels.messageFileNeedsGenerating:"locked"===this.fileStatus||"stale_locked"===this.fileStatus?this.labels.messageDataSourceLocked:(this.downloadCached(),this.labels.messageFileNeedsGenerating)}},{key:"shouldShowMessage",value:function(){return!this.apiError&&!this.exportFailed()&&!this.requestedExportIsReady()}},{key:"getNoticeColor",value:function(){return this.requestedExportHasFailed()||this.apiError?"red":"yellow"}},{key:"exportFailed",value:function(){return"error"===this.fileStatus||"error_creating"===this.fileStatus||"error_updating"===this.fileStatus}},{key:"exportInProgress",value:function(){return"creating"===this.fileStatus||"updating"===this.fileStatus}},{key:"requestedExportIsReady",value:function(){return this.exportRequested&&this.downloadUpToDate()}},{key:"requestedExportHasFailed",value:function(){var e=this.exportRequested,t=this.fileStatus;return e&&("error"===t||"error_updating"===t||"error_creating"===t)}},{key:"downloadCached",value:function(){return["ready","ready_unknown","stale","updating","error_updating"].includes(this.fileStatus)}},{key:"downloadUpToDate",value:function(){return"ready"===this.fileStatus}},{key:"shouldHide",value:function(){return this.downloadUpToDate()||this.cannotExport||this.exportFailed()&&!this.exportRequested}},{key:"render",value:function(){if(this.shouldHide())return(0,n.h)("calcite-notice",null);var e=this.shouldShowMessage()?(0,n.h)("div",{slot:"message"},this.getNoticeMessage()):null;return(0,n.h)("calcite-notice",{color:this.getNoticeColor(),dir:"ltr",scale:"m",width:"full"},(0,n.h)("div",{slot:"title"},(0,n.h)("calcite-loader",{inline:!0,label:this.getNoticeMessage()}),this.getNoticeTitle()),e)}},{key:"element",get:function(){return(0,n.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}());u.style="div{font-size:var(--calcite-font-size--1);line-height:1rem}calcite-notice{margin-bottom:0.5rem}calcite-loader{margin-right:0.5rem}calcite-loader[active]{display:inline-block}"}}]);
//# sourceMappingURL=3198.a6612143.chunk.js.map
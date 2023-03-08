"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[86876],{86876:function(e,t,s){s.r(t),s.d(t,{arcgis_hub_discussions_options:function(){return y},arcgis_hub_discussions_post_list:function(){return f},arcgis_hub_discussions_private_notice:function(){return b},arcgis_hub_discussions_reply_list:function(){return k},arcgis_hub_discussions_thread:function(){return w}});var i=s(93433),n=s(4942),r=s(74165),a=s(15861),l=s(15671),o=s(43144),u=s(5692),c=s(13129),d=s(54825),h=s(81724),p=s(4541),g=s(33375),v=s(37330),y=(s(7597),s(39318),s(67450),s(89732),s(1319),s(47268),s(42377),s(98942),s(60415),s(76880),s(58669),s(29398),s(35137),s(16063),s(45059),s(73576),s(90494),s(59514),s(54805),s(95101),function(){function e(t){(0,l.Z)(this,e),(0,u.r)(this,t),this.arcgisHubDiscussionsOptionsChange=(0,u.c)(this,"arcgisHubDiscussionsOptionsChange",7),this.disabled=!1,this.layout="horizontal",(0,d.b)(this,"handleTileChange")}return(0,o.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleTileChange",value:function(e){e.stopPropagation();var t=e.target;this.value=t.value,this.arcgisHubDiscussionsOptionsChange.emit(t.value)}},{key:"options",get:function(){return[{value:!0,icon:"speech-bubbles"},{value:!1,icon:"circle-disallowed"}]}},{key:"render",value:function(){var e=this,t=this.intl,s=this.options,i=this.variant,n=this.value,r=this.disabled,a=this.layout;return(0,u.h)(u.H,{"data-element":"discussions-options"},(0,u.h)("calcite-label",{scale:"l"},t.t("".concat(i,".label")),(0,u.h)("calcite-tile-select-group",{layout:a},s.map((function(s){return(0,u.h)("calcite-tile-select",{checked:s.value===n,description:t.t("".concat(i,".").concat(s.value,".description")),disabled:r,heading:t.t("".concat(s.value,".heading")),icon:s.icon,"input-enabled":!0,key:s.icon,name:"discussable",onCalciteTileSelectChange:e.handleTileChange,type:"radio",value:s.value,width:"vertical"===a?"full":"auto"})})))))}},{key:"element",get:function(){return(0,u.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}());y.style=":host{display:block}";var m;!function(e){e.List="list"}(m||(m={}));var f=function(){function e(t){(0,l.Z)(this,e),(0,u.r)(this,t),this.arcgisHubDiscussionsThreadSelect=(0,u.c)(this,"arcgisHubDiscussionsThreadSelect",7),this.arcgisHubDiscussionsDeepLinkedThreadSelect=(0,u.c)(this,"arcgisHubDiscussionsDeepLinkedThreadSelect",7),this.unsavedExistingFeatures=[],this.loading=!1,(0,d.b)(this,"renderList")}return(0,o.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handlePostSelected",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),s=t.target.index,this.arcgisHubDiscussionsThreadSelect.emit(Object.assign(Object.assign({},this.postAggregates[s]),{scrollTarget:t.detail}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleReplySelected",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),s=t.target.index,this.arcgisHubDiscussionsDeepLinkedThreadSelect.emit(Object.assign({},this.postAggregates[s]));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderList",value:function(){var e=this,t=this.postAggregates,s=this.nextStart,i=this.context,n=this.hasMap,r=this.isHub,a=this.unsavedFeatures,l=this.unsavedRelatedFeatures,o=this.unsavedExistingFeatures,c=this.loading,d=this.discussionDetails,h=this.isMobile;return(0,u.h)(u.F,null,(0,u.h)("slot",{name:"list-before"}),(0,u.h)("calcite-list",{role:"list"},t.map((function(t,s){var c,p;return t.replyDetails?(0,u.h)("arcgis-hub-discussions-reply",{channelDetails:t.channelDetails,context:i,discussionDetails:d,hasMap:n,index:s,isHub:r,isMobile:h,key:t.postDetails.postId,postDetails:t.postDetails,replyDetails:t.replyDetails,role:"listitem",unsavedExistingFeatures:o,unsavedFeatures:a,unsavedRelatedFeatures:l}):(0,u.h)("arcgis-hub-discussions-post",{autoFocus:(null===(p=null===(c=e.previousThread)||void 0===c?void 0:c.postDetails)||void 0===p?void 0:p.postId)===t.postDetails.postId,channelDetails:t.channelDetails,context:i,discussionDetails:d,hasMap:n,index:s,isHub:r,isMobile:h,key:t.postDetails.postId,linkToThread:void 0!==t.replyDetails,postDetails:t.postDetails,preview:!0,role:"listitem",unsavedExistingFeatures:o,unsavedFeatures:a,unsavedRelatedFeatures:l})}))),(0,u.h)("arcgis-load-more-button",{loading:c,nextStart:s}))}},{key:"views",get:function(){var e=this.renderList;return(0,n.Z)({},m.List,{render:e})}},{key:"view",get:function(){return this.views[m.List]}},{key:"render",value:function(){var e=this.view;return(0,u.h)(u.H,{"data-element":"discussions-post-list"},e.render())}},{key:"element",get:function(){return(0,u.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}();f.style=".sc-arcgis-hub-discussions-post-list-h{display:block;height:100%;overflow:hidden;background-color:var(--calcite-ui-foreground-1)}arcgis-load-more-button.sc-arcgis-hub-discussions-post-list{margin-top:0.75rem;margin-right:1rem;margin-bottom:1.5rem;margin-left:1rem}arcgis-hub-discussions-thread.sc-arcgis-hub-discussions-post-list:first-of-type{padding-top:1rem}arcgis-hub-discussions-thread.sc-arcgis-hub-discussions-post-list:last-of-type{padding-bottom:1rem}arcgis-hub-discussions-post.sc-arcgis-hub-discussions-post-list,arcgis-hub-discussions-reply.sc-arcgis-hub-discussions-post-list{padding-top:0.75rem;padding-bottom:0.75rem}";var b=function(){function e(t){(0,l.Z)(this,e),(0,u.r)(this,t)}return(0,o.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.i.loadIntlForComponent(this.el);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.intl;return(0,u.h)(u.H,null,(0,u.h)("calcite-notice",{active:!0,scale:"m"},(0,u.h)("div",{slot:"title"},e.t("title")),(0,u.h)("div",{slot:"message"},e.t("message")),(0,u.h)("calcite-link",{href:"https://doc.arcgis.com/en/hub/team/how-discussions-work.htm",iconEnd:"launch",slot:"link",title:e.t("link.title")},e.t("link.text"))))}},{key:"el",get:function(){return(0,u.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}();b.style=":host{display:block}";var D;!function(e){e.Loading="loading",e.List="list",e.Error="error"}(D||(D={}));var k=function(){function e(t){(0,l.Z)(this,e),(0,u.r)(this,t),this.arcgisHubDiscussionsScrollTo=(0,u.c)(this,"arcgisHubDiscussionsScrollTo",7),this.hubTelemetry=(0,u.c)(this,"hubTelemetry",7),this.unsavedExistingFeatures=[],this.loading=!0,this.nextStart=1,this.repliesDetails=[],(0,d.b)(this,"renderLoading","renderError","renderList")}return(0,o.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent,this.searchReplies(this.nextStart);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidRender",value:function(){this.autoScroll&&this.view.summary!==D.Loading&&(this.arcgisHubDiscussionsScrollTo.emit(),this.autoScroll=!1)}},{key:"handleArcgisLoadMoreChange",value:function(e){this.searchReplies(e.detail,!0)}},{key:"handleReplyUpdate",value:function(e){e.stopPropagation();var t=e.detail;this.repliesDetails=this.repliesDetails.map((function(e){return e.postId===t.postId?t:e}))}},{key:"handleReplyEdit",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var s,i,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.detail,i=this.context,n=this.repliesDetails,e.next=4,Promise.all(n.map((function(e){return s.id===e.postId?(0,h.n)(Object.assign({postDetails:Object.assign(Object.assign({},e),{post:s})},i.hubRequestOptions)):e})));case 4:this.repliesDetails=e.sent;case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleReplyDeleted",value:function(e){var t=this.repliesDetails,s=this.nextStart;this.repliesDetails=t.filter((function(t){return e.detail.id!==t.postId})),s>-1&&(this.nextStart-=1)}},{key:"addReply",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.repliesDetails=[t].concat((0,i.Z)(this.repliesDetails)),this.nextStart>-1&&(this.nextStart+=1);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchReplies",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,s){var n,a,l,o,u,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.postDetails,a=this.context,l=this.channelDetails,s||(this.repliesDetails=[]),this.loading=!0,e.prev=3,e.next=6,(0,h.o)(Object.assign({parents:[n.postId],start:t},a.hubRequestOptions));case 6:u=e.sent,c=u.items,d=u.nextStart,this.nextStart=d,(o=this.repliesDetails).push.apply(o,(0,i.Z)(c)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),this.error=e.t0,this.hubTelemetry.emit(Object.assign(Object.assign({},p.d.dictionary.category.interaction.action.viewed.label.post.details.thread),{response:p.d.constants.response.FAILURE,postId:n.post.id,channelId:l.channel.id,channelAccess:l.channel.access})),console.error("Could not load replies:",e.t0.message);case 18:return e.prev=18,this.loading=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[3,13,18,21]])})));return function(t,s){return e.apply(this,arguments)}}()},{key:"views",get:function(){var e,t=this.renderLoading,s=this.renderList,i=this.renderError;return e={},(0,n.Z)(e,D.Loading,{render:t,summary:D.Loading}),(0,n.Z)(e,D.List,{render:s,summary:D.List}),(0,n.Z)(e,D.Error,{render:i,summary:D.Error}),e}},{key:"view",get:function(){var e=this.views,t=this.loading,s=this.repliesDetails,i=this.error;return e[t&&!s.length?D.Loading:i?D.Error:D.List]}},{key:"renderLoading",value:function(){return null}},{key:"renderList",value:function(){var e=this.repliesDetails,t=this.postDetails,s=this.channelDetails,i=this.context,n=this.unsavedFeatures,r=this.unsavedRelatedFeatures,a=this.unsavedExistingFeatures,l=this.hasMap,o=this.isHub,c=this.loading,d=this.nextStart,h=this.discussionDetails,p=this.isMobile;if(e.length)return(0,u.h)(u.F,null,(0,u.h)("calcite-list",null,e.map((function(c,d){return(0,u.h)("arcgis-hub-discussions-reply",{channelDetails:s,context:i,discussionDetails:h,hasMap:l,index:d,isHub:o,isMobile:p,key:c.postId,lead:d!==e.length-1,postDetails:t,replyDetails:c,role:"listitem",unsavedExistingFeatures:a,unsavedFeatures:n,unsavedRelatedFeatures:r})}))),(0,u.h)("arcgis-load-more-button",{loading:c,nextStart:d}))}},{key:"renderError",value:function(){var e=this.intl;return(0,u.h)("calcite-notice",{active:!0,color:"red",scale:"m"},(0,u.h)("div",{slot:"title"},e.t("error")),(0,u.h)("div",{slot:"message"},e.t("repliesFailure")))}},{key:"render",value:function(){return(0,u.h)(u.H,null,this.view.render())}},{key:"element",get:function(){return(0,u.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}();k.style=".sc-arcgis-hub-discussions-reply-list-h{display:block}arcgis-load-more-button.sc-arcgis-hub-discussions-reply-list{margin-top:1.5rem;padding-left:1rem;padding-right:1rem}arcgis-hub-discussions-reply.sc-arcgis-hub-discussions-reply-list{margin-bottom:0.25rem;padding-left:1rem;padding-right:1rem}arcgis-hub-discussions-reply[loading].sc-arcgis-hub-discussions-reply-list{margin-top:1rem;margin-bottom:1rem}arcgis-hub-discussions-reply.sc-arcgis-hub-discussions-reply-list:last-of-type,arcgis-hub-discussions-reply[loading].sc-arcgis-hub-discussions-reply-list:last-of-type{margin-bottom:0px}calcite-notice.sc-arcgis-hub-discussions-reply-list{margin-left:1rem;margin-right:1rem}";var x,Z=function(e,t,s,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(r<3?n(a):r>3?n(t,s,a):n(t,s))||a);return r>3&&a&&Object.defineProperty(t,s,a),a};!function(e){e.Loading="loading",e.Preview="preview",e.Reply="reply",e.Replies="replies",e.PostAndReplyDeleted="thread_deleted",e.ChannelDeleted="channel_deleted"}(x||(x={}));var w=function(){function e(t){(0,l.Z)(this,e),(0,u.r)(this,t),this.arcgisHubDiscussionsThreadSelect=(0,u.c)(this,"arcgisHubDiscussionsThreadSelect",7),this.arcgisHubDiscusssionsChannelUpdate=(0,u.c)(this,"arcgisHubDiscusssionsChannelUpdate",7),this.hubTelemetry=(0,u.c)(this,"hubTelemetry",7),this.unsavedExistingFeatures=[],this.repliesDetails=[],this.nextStart=1,this.loading=!0,this.errorMessage=null,(0,d.b)(this,"renderPost","renderReply","renderReplies","renderPostAndReplyDeleted","handleViewAllReplies","handleViewAllThreads","renderLoading")}return(0,o.Z)(e,[{key:"componentWillLoad",value:function(){this.initialize()}},{key:"initialize",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.element,this.isEnriched?this.updateLoading():this.enrichChannelDetails(),e.next=4,c.i.loadIntlForComponent(t);case 4:this.intl=e.sent;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isEnriched",get:function(){var e=this.thread.channelDetails;return[e.channel,e.groups].every((function(e){return void 0!==e}))}},{key:"updateLoading",value:function(){var e=this.intl,t=this.isEnriched;this.loading=!Boolean(e&&t)}},{key:"handleThreadChanges",value:function(){this.initialize()}},{key:"enrichChannelDetails",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.context,s=this.thread,e.next=3,(0,h.e)(Object.assign({channelDetails:s.channelDetails},t.hubRequestOptions));case 3:i=e.sent,this.arcgisHubDiscusssionsChannelUpdate.emit({postId:s.postDetails.postId,channelDetails:i});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handlePostOrReplyDeleted",value:function(){this.deletedDuringSession=!0}},{key:"handlePostSelected",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),this.arcgisHubDiscussionsThreadSelect.emit(Object.assign(Object.assign({},this.thread),{scrollTarget:t.detail}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handlePostViewAllGeography",value:function(e){e.stopPropagation(),this.arcgisHubDiscussionsThreadSelect.emit(this.thread)}},{key:"handleViewAllReplies",value:function(e){var t=this.thread,s=t.postDetails.postId,i=t.replyDetails.postId;e.stopPropagation(),this.emitHubTelemetry(Object.assign(Object.assign({},p.d.dictionary.category.interaction.action.open.label.thread),{postId:i,parentId:s})),this.arcgisHubDiscussionsThreadSelect.emit(this.thread)}},{key:"handleReplyCreated",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.detail,i={postId:s.id,post:s},e.next=4,this.replyListEl.addReply(i);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleViewAllThreads",value:function(e){var t=this.thread;e.stopPropagation(),this.emitHubTelemetry(Object.assign(Object.assign({},p.d.dictionary.category.interaction.action.close.label.thread),{postId:t.replyDetails.postId,parentId:t.postDetails.postId})),this.arcgisHubDiscussionsThreadSelect.emit(null)}},{key:"emitHubTelemetry",value:function(e){var t,s,i,n,r=this.thread;this.hubTelemetry.emit(Object.assign({channelId:null===(s=null===(t=null===r||void 0===r?void 0:r.channelDetails)||void 0===t?void 0:t.channel)||void 0===s?void 0:s.id,channelAccess:null===(n=null===(i=null===r||void 0===r?void 0:r.channelDetails)||void 0===i?void 0:i.channel)||void 0===n?void 0:n.access},e))}},{key:"views",get:function(){var e,t=this.renderLoading,s=this.renderPost,i=this.renderReply,r=this.renderReplies,a=this.renderPostAndReplyDeleted,l=this.renderChannelDeleted;return e={},(0,n.Z)(e,x.Loading,{render:t}),(0,n.Z)(e,x.Preview,{render:s}),(0,n.Z)(e,x.Reply,{render:i}),(0,n.Z)(e,x.Replies,{render:r}),(0,n.Z)(e,x.PostAndReplyDeleted,{render:a}),(0,n.Z)(e,x.ChannelDeleted,{render:l}),e}},{key:"view",get:function(){var e=this.views,t=this.loading,s=this.thread,i=this.preview;return e[!i&&t?x.Loading:null===s.channelDetails.channel?x.ChannelDeleted:null===s.postDetails.post&&s.replyDetails&&null===s.replyDetails.post?x.PostAndReplyDeleted:s.replyDetails?x.Reply:i?x.Preview:x.Replies]}},{key:"captureThreadDeletedImpression",value:function(){var e,t=this.thread;this.emitHubTelemetry(Object.assign(Object.assign({},p.d.dictionary.category.interaction.action.viewed.label.post.details.thread),{postId:null===(e=t.replyDetails)||void 0===e?void 0:e.postId,parentId:t.postDetails.postId,response:p.d.constants.response.FAILURE}))}},{key:"renderChannelDeleted",value:function(){return(0,u.h)("p",null,"channel deleted")}},{key:"blockedNotice",get:function(){var e,t=(0,h.l)(this.thread.channelDetails.groups[0]),s=(0,h.l)(this.discussionDetails.reference);return t||s?t?s||(e="group"===this.discussionDetails.type?v.A.Group:v.A.Item):e=v.A.Group:e=v.A.Reply,e}},{key:"renderReplies",value:function(){var e=this,t=this.thread,s=this.context,i=this.hasMap,n=this.unsavedFeatures,r=this.unsavedRelatedFeatures,a=this.unsavedExistingFeatures,l=this.errorMessage,o=this.intl,c=this.isHub,d=this.discussionDetails,h=this.blockedNotice,p=this.isMobile;return l?(0,u.h)("calcite-notice",{active:!0,color:"red",scale:"m"},(0,u.h)("div",{slot:"title"},o.t("error")),(0,u.h)("div",{slot:"message"},o.t(l))):(0,u.h)(u.F,null,this.renderPost(),Boolean(t.postDetails.post)&&Boolean(t.channelDetails.groups.length)&&!h&&(0,u.h)("arcgis-hub-discussions-reply-editor",{autoScroll:"editor"===this.thread.scrollTarget,channelDetails:t.channelDetails,context:s,discussionDetails:d,hasMap:i,isMobile:p,postDetails:t.postDetails,unsavedExistingFeatures:a,unsavedFeatures:n,unsavedRelatedFeatures:r}),h&&(0,u.h)("arcgis-hub-discussions-blocked-notice",{variant:h}),(0,u.h)("arcgis-hub-discussions-reply-list",{autoScroll:"list"===this.thread.scrollTarget,channelDetails:t.channelDetails,context:s,discussionDetails:d,hasMap:i,isHub:c,isMobile:p,postDetails:t.postDetails,ref:function(t){e.replyListEl=t},unsavedExistingFeatures:a,unsavedFeatures:n,unsavedRelatedFeatures:r}))}},{key:"renderReply",value:function(){var e=this.intl,t=this.handleViewAllReplies,s=this.thread,i=this.context,n=this.unsavedFeatures,r=this.hasMap,a=this.isHub,l=this.unsavedRelatedFeatures,o=this.unsavedExistingFeatures,c=this.discussionDetails,d=this.isMobile;return(0,u.h)(u.F,null,this.renderPost(),s.replyDetails.post&&(0,u.h)("calcite-notice",{active:!0,scale:"s"},(0,u.h)("div",{slot:"title"},e.t("reply.single.title")),(0,u.h)("calcite-link",{onClick:t,slot:"link"},e.t("reply.single.link"))),(0,u.h)("arcgis-hub-discussions-reply",{channelDetails:s.channelDetails,context:i,discussionDetails:c,hasMap:r,isHub:a,isMobile:d,postDetails:s.postDetails,replyDetails:s.replyDetails,unsavedExistingFeatures:o,unsavedFeatures:n,unsavedRelatedFeatures:l}))}},{key:"renderPost",value:function(){var e,t,s=this.thread,i=this.context,n=this.hasMap,r=this.isHub,a=this.index,l=this.unsavedFeatures,o=this.unsavedRelatedFeatures,c=this.unsavedExistingFeatures,d=this.preview,h=this.discussionDetails,p=this.isMobile;return(0,u.h)("arcgis-hub-discussions-post",{autoFocus:(null===(t=null===(e=this.prevThread)||void 0===e?void 0:e.postDetails)||void 0===t?void 0:t.postId)===s.postDetails.postId,channelDetails:s.channelDetails,context:i,discussionDetails:h,hasMap:n,index:a,isHub:r,isMobile:p,linkToThread:void 0!==s.replyDetails,postDetails:s.postDetails,preview:d,unsavedExistingFeatures:c,unsavedFeatures:l,unsavedRelatedFeatures:o})}},{key:"renderPostAndReplyDeleted",value:function(){var e=this.intl;return this.deletedDuringSession||this.captureThreadDeletedImpression(),(0,u.h)("calcite-notice",{active:!0,color:"red",scale:"m"},(0,u.h)("div",{slot:"title"},e.t("thread.deleted.title")),(0,u.h)("div",{slot:"message"},e.t("thread.deleted.message")),(0,u.h)("calcite-link",{onClick:this.handleViewAllThreads,slot:"link"},e.t("thread.deleted.action")))}},{key:"renderLoading",value:function(){return null}},{key:"render",value:function(){var e=this.view;return(0,u.h)(u.H,{"data-element":"discussions-thread"},e.render())}},{key:"element",get:function(){return(0,u.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}},{key:"watchers",get:function(){return{intl:["updateLoading"],thread:["updateLoading","handleThreadChanges"]}}}]),e}();Z([(0,g.c)()],w.prototype,"captureThreadDeletedImpression",null),w.style=".sc-arcgis-hub-discussions-thread-h{display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);padding-top:0.75rem;padding-bottom:0.75rem}arcgis-hub-discussions-reply-editor.sc-arcgis-hub-discussions-thread{margin-top:1.5rem;margin-bottom:1.5rem}arcgis-hub-discussions-post[loading].sc-arcgis-hub-discussions-thread{margin-bottom:1rem}arcgis-hub-discussions-reply.sc-arcgis-hub-discussions-thread{padding-left:1rem;padding-right:1rem}calcite-notice.sc-arcgis-hub-discussions-thread{margin-top:1.5rem;margin-bottom:1.5rem;padding-left:1rem;padding-right:1rem}arcgis-hub-discussions-blocked-notice.sc-arcgis-hub-discussions-thread{margin-top:1.5rem;margin-bottom:1.5rem;margin-left:1rem;margin-right:1rem}"},33375:function(e,t,s){function i(){return function(e,t,s){var i=s.value,n="_".concat(t,"Called");Object.defineProperty(e,n,{writable:!0,value:!1});var r="_".concat(t,"Cache");return Object.defineProperty(e,r,{writable:!0}),Object.assign(Object.assign({},s),{value:function(){if(!this[n]){this[n]=!0;for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];this[r]=i.apply(this,t)}return this[r]}})}}s.d(t,{c:function(){return i}})},37330:function(e,t,s){s.d(t,{A:function(){return n},a:function(){return a}});var i,n,r=s(4942);!function(e){e.Item="item",e.EditPost="edit.post",e.EditPostGroup="edit.post.group",e.EditPostItem="edit.post.item",e.EditReply="reply.post",e.EditReplyGroup="edit.reply.group",e.EditReplyItem="edit.reply.item",e.Group="group",e.Reply="reply"}(n||(n={}));var a=(i={},(0,r.Z)(i,n.Item,{title:"item.title",message:"item.message"}),(0,r.Z)(i,n.EditPost,{title:"post.title",message:"post.message"}),(0,r.Z)(i,n.EditPostGroup,{title:"post.title",message:"post.message.group"}),(0,r.Z)(i,n.EditPostItem,{title:"post.title",message:"post.message.item"}),(0,r.Z)(i,n.EditReply,{title:"reply.title",message:"reply.message"}),(0,r.Z)(i,n.EditReplyGroup,{title:"reply.title",message:"reply.message.group"}),(0,r.Z)(i,n.EditReplyItem,{title:"reply.title",message:"reply.message.item"}),(0,r.Z)(i,n.Group,{title:"group.title",message:"group.message"}),(0,r.Z)(i,n.Reply,{title:"reply.title.generic",message:"reply.message.generic"}),i)}}]);
//# sourceMappingURL=86876.30105223.chunk.js.map
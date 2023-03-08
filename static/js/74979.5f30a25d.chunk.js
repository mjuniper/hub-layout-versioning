"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[74979],{74979:function(e,t,n){n.r(t),n.d(t,{arcgis_hub_new_content:function(){return w}});var i=n(74165),o=n(15861),r=n(15671),c=n(43144),s=n(72585),a=n(32836),l=n(12868),u=n(85621),d=n(25434),h=n(49799),p=n(63697),w=(n(84371),n(10625),n(77843),n(66287),n(91466),n(90251),n(80046),n(77699),n(69207),n(34601),n(21923),n(42016),function(){function e(t){(0,r.Z)(this,e),(0,s.r)(this,t),this.arcgisHubNewContentSuccess=(0,s.c)(this,"arcgisHubNewContentSuccess",7),this.hubTelemetry=(0,s.c)(this,"hubTelemetry",7),this.entities=[],this.resourceLinks=[],this.renderAsDropdown=!1,this.isMobile=!1,this.isLoading=!1,this.isFormOpen=!1,this.isMobileDropdownOpen=!1,(0,a.b)(this,"onOpenFormButtonClick","toggleForm","getDynamicProjectConfig","createProject","onOpenMobileDropdownButtonClick","onCloseMobileDropdownButttonClick","handleDropdownSelect","handleResourceLinkClick","handleCalciteDropdownRef")}return(0,c.Z)(e,[{key:"handleArcgisHubNewContentModalClosed",value:function(){this.toggleForm(!1),this.selectedEntityIdx=null}},{key:"handleArcgisHubNewContentModalSaved",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.isLoading=!0,e.t0=this.entityFunctions,!e.t0){e.next=7;break}return e.next=6,this.entityFunctions.create(t.detail);case 6:e.t0=e.sent;case 7:n=e.t0,this.isFormOpen=!1,this.arcgisHubNewContentSuccess.emit(n),this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.content.action.create),{response:u.d.constants.response.SUCCESS,id:n.id,type:n.type})),e.next=17;break;case 13:e.prev=13,e.t1=e.catch(0),this.error=e.t1.toString(),this.hubTelemetry.emit(Object.assign(Object.assign({},u.d.dictionary.category.content.action.create),{response:u.d.constants.response.FAILURE}));case 17:return e.prev=17,this.isLoading=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[0,13,17,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"isSingleEntity",get:function(){return 1===this.entities.length}},{key:"selectedEntity",get:function(){return this.isSingleEntity?this.entities[0]:this.entities[this.selectedEntityIdx]}},{key:"entityKey",get:function(){var e;return null===(e=this.selectedEntity)||void 0===e?void 0:e.key}},{key:"entityFunctions",get:function(){var e;return{project:{create:this.createProject,getEditorConfig:p.g,getDynamicEditorConfig:this.getDynamicProjectConfig}}[null===(e=this.selectedEntity)||void 0===e?void 0:e.key]}},{key:"hasResourceLinks",get:function(){return!!this.resourceLinks.length}},{key:"componentWillLoad",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.i.loadIntlForComponent(this.element);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleDropdownSelect",value:function(e){var t=e.currentTarget;this.selectedEntityIdx=t.getAttribute("data-index"),this.handleSelectedEntity(this.selectedEntity)}},{key:"handleResourceLinkClick",value:function(e){var t=e.currentTarget.getAttribute("data-value"),n=u.d.dictionary.category.navigation.action.new.label.content.details[t];n&&this.hubTelemetry.emit(n)}},{key:"handleSelectedEntity",value:function(e){e.href?u.d.dictionary.category.navigation.action.new.label.content.details[e.key]?this.hubTelemetry.emit(u.d.dictionary.category.navigation.action.new.label.content.details[e.key]):this.hubTelemetry.emit(u.d.dictionary.category.navigation.action.new.label.content):this.toggleForm(!0)}},{key:"handleCalciteDropdownRef",value:function(e){if(e.shadowRoot&&!e.shadowRoot.querySelector("style[data-hub]")){var t=document.createElement("style");t.dataset.hub="",t.innerHTML=".calcite-dropdown-content { max-block-size: max-content !important; }",e.shadowRoot.appendChild(t)}}},{key:"toggleForm",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isMobileDropdownOpen=!1,this.isFormOpen=t,!t){e.next=17;break}return e.prev=3,this.isLoading=!0,e.next=7,this.loadForm();case 7:this.form=e.sent,this.selectedEntity&&this.hubTelemetry.emit(t?u.d.dictionary.category.interaction.action.open.label.modal.details["create".concat((0,d.e)(this.selectedEntity.key))]:u.d.dictionary.category.interaction.action.close.label.modal.details["create".concat((0,d.e)(this.selectedEntity.key))]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.error=e.t0.toString();case 14:return e.prev=14,this.isLoading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[3,11,14,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"loadForm",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n,o,r,c,s,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.entityFunctions,!e.t0){e.next=5;break}return e.next=4,this.entityFunctions.getDynamicEditorConfig();case 4:e.t0=e.sent;case 5:if(o=e.t0,r=o.defaults,c=o.options,e.t1=this.entityFunctions,!e.t1){e.next=13;break}return e.next=12,this.entityFunctions.getEditorConfig(this.entityKey,"create",c);case 12:e.t1=e.sent;case 13:return s=e.t1,a={project:Object.assign({title:null===(t=this.intl)||void 0===t?void 0:t.t("project.form.title"),description:null===(n=this.intl)||void 0===n?void 0:n.t("project.form.description"),icon:"projects",values:Object.assign({},r)},s)},e.abrupt("return",a[this.entityKey]);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDynamicProjectConfig",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.context,!e.t0){e.next=5;break}return e.next=4,(0,h.c)(this.context.hubRequestOptions);case 4:e.t0=e.sent;case 5:return t=e.t0,e.abrupt("return",{defaults:{extent:t},options:[{scope:"/properties/extent",options:{sources:[{value:"none"},{selected:!0,value:"item",label:"Organizations Extent",graphic:{geometry:Object.assign({type:"extent"},t)}}]}}]});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onOpenFormButtonClick",value:function(){this.toggleForm(!0)}},{key:"onOpenMobileDropdownButtonClick",value:function(){this.isMobileDropdownOpen=!0}},{key:"onCloseMobileDropdownButttonClick",value:function(){this.isMobileDropdownOpen=!1}},{key:"createProject",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.extent,t.orgUrlKey=this.context.portal.urlKey,t.extent=n&&(0,h.a)(n),e.abrupt("return",(0,p.c)(t,this.context.userRequestOptions));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderButton",value:function(e,t){return this.isMobile?(0,s.h)("calcite-button",{onClick:this.onOpenMobileDropdownButtonClick,scale:this.buttonScale},(0,s.h)("calcite-icon",{icon:"plus",scale:this.buttonScale})):this.isSingleEntity&&!this.renderAsDropdown?(0,s.h)("calcite-button",{href:e[0].href,onClick:this.onOpenFormButtonClick,scale:this.buttonScale},e[0].label):this.renderDropdown(e,t)}},{key:"renderDropdown",value:function(e,t){return(0,s.h)("calcite-dropdown",{ref:this.handleCalciteDropdownRef},(0,s.h)("calcite-button",{"icon-end":"caret-down",scale:this.buttonScale,slot:"dropdown-trigger"},this.intl.t("new")),this.renderDropdownContent(e,t))}},{key:"renderDropdownContent",value:function(e,t){return(0,s.h)(s.F,null,this.renderEntityItems(e),this.hasResourceLinks&&this.renderResourceLinks(t))}},{key:"renderEntityItems",value:function(e){var t=this;return(0,s.h)("calcite-dropdown-group",{class:{"hub-new-content_dropdown-group":!0,mobile:this.isMobile},"selection-mode":"none"},e.map((function(e,n){return t.renderEntityItem(e,n)})))}},{key:"renderEntityItem",value:function(e,t){return(0,s.h)("calcite-dropdown-item",{"data-index":t,"data-value":e.key,href:e.href,key:e.key,onClick:this.handleDropdownSelect},(0,s.h)("div",{class:"hub-new-content_dropdown-item"},(0,s.h)("div",{class:"hub-new-content_dropdown-item--left"},(0,s.h)("div",{class:"hub-new-content_dropdown-item-icon"},(0,s.h)("calcite-icon",{icon:e.icon,scale:"l"})),(0,s.h)("div",{class:"hub-new-content_dropdown-item-content"},(0,s.h)("div",{class:"hub-new-content_dropdown-item-title"},e.label),(0,s.h)("div",{class:"hub-new-content_dropdown-item-description"},e.description)))))}},{key:"renderResourceLinks",value:function(e){var t=this;return(0,s.h)("calcite-dropdown-group",{class:{"hub-new-content_dropdown-group":!0,mobile:this.isMobile},"selection-mode":"none"},e.map((function(e){return t.renderResourceLink(e)})))}},{key:"renderResourceLink",value:function(e){return(0,s.h)("calcite-dropdown-item",{"data-value":e.key,href:e.href,key:e.label,onClick:this.handleResourceLinkClick},(0,s.h)("calcite-link",null,e.label))}},{key:"renderNewContentModal",value:function(){return(0,s.h)("arcgis-wormhole",null,(0,s.h)("arcgis-hub-new-content-modal",{error:this.error,form:this.form,isLoading:this.isLoading,isOpen:this.isFormOpen}))}},{key:"renderMobileModal",value:function(e,t){return(0,s.h)("calcite-modal",{onCalciteModalClose:this.onCloseMobileDropdownButttonClick,open:this.isMobileDropdownOpen},(0,s.h)("div",{slot:"header"},this.intl.t("new")),(0,s.h)("div",{slot:"content"},this.renderDropdownContent(e,t)))}},{key:"render",value:function(){var e=this.isSingleEntity?this.entities[0]:this.selectedEntity;return(0,s.h)(s.H,{"data-element":"new-content"},!!this.entities.length&&this.renderButton(this.entities,this.resourceLinks),e&&this.renderNewContentModal(),this.isMobile&&this.renderMobileModal(this.entities,this.resourceLinks))}},{key:"element",get:function(){return(0,s.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),e}());w.style=".sc-arcgis-hub-new-content-h{display:block}.sc-arcgis-hub-new-content-h:not([unthemed]) calcite-dropdown.sc-arcgis-hub-new-content{--calcite-ui-background:#f8f8f8;--calcite-ui-foreground-1:#ffffff;--calcite-ui-foreground-2:#f3f3f3}.sc-arcgis-hub-new-content-h:not([unthemed]) .hub-new-content_dropdown-group.sc-arcgis-hub-new-content{--calcite-ui-brand:var(--calcite-ui-border-1);--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-3:#dfdfdf;--calcite-ui-text-link:#151515;--calcite-link-blue-underline:#151515}.hub-new-content_dropdown-group.sc-arcgis-hub-new-content:not(.mobile){max-width:20rem}.hub-new-content_dropdown-item.sc-arcgis-hub-new-content{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:0.25rem;padding-bottom:0.25rem}.hub-new-content_dropdown-item--left.sc-arcgis-hub-new-content{display:flex}.hub-new-content_dropdown-item-content.sc-arcgis-hub-new-content{display:flex;flex-direction:column}.hub-new-content_dropdown-item-icon.sc-arcgis-hub-new-content{height:70px;width:70px;margin-right:0.75rem;display:flex;align-items:center;background-color:var(--calcite-ui-background)}.hub-new-content_dropdown-item-icon.sc-arcgis-hub-new-content calcite-icon.sc-arcgis-hub-new-content{width:70px}.hub-new-content_dropdown-item-title.sc-arcgis-hub-new-content,.hub-new-content_dropdown-item-description.sc-arcgis-hub-new-content,calcite-dropdown-item.sc-arcgis-hub-new-content calcite-link.sc-arcgis-hub-new-content{font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);font-size:var(--calcite-font-size--1);line-height:1.375rem;white-space:normal;overflow-wrap:break-word}.hub-new-content_dropdown-item-title.sc-arcgis-hub-new-content{margin-bottom:0.25rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.hub-new-content_dropdown-item-description.sc-arcgis-hub-new-content{color:var(--calcite-ui-text-2)}"}}]);
//# sourceMappingURL=74979.5f30a25d.chunk.js.map
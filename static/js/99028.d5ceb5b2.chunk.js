/*! For license information please see 99028.d5ceb5b2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[99028],{99028:function(t,e,i){i.r(e),i.d(e,{calcite_tab:function(){return h},calcite_tab_nav:function(){return f},calcite_tab_title:function(){return m},calcite_tabs:function(){return v}});var n=i(93433),a=i(74165),r=i(15861),o=i(15671),c=i(43144),s=i(72585),l=i(88814),d=i(40566),u=i(91864),b=i(13966),h=(i(84261),function(){function t(e){(0,o.Z)(this,t),(0,s.r)(this,e),this.calciteInternalTabRegister=(0,s.c)(this,"calciteInternalTabRegister",6),this.active=!1,this.selected=!1,this.scale="m",this.guid="calcite-tab-title-".concat((0,l.g)())}return(0,c.Z)(t,[{key:"activeHandler",value:function(t){this.selected=t}},{key:"selectedHandler",value:function(t){this.active=t}},{key:"render",value:function(){var t=this.el.id||this.guid;return(0,s.h)(s.H,{"aria-labelledby":this.labeledBy,id:t},(0,s.h)("div",{class:"container",role:"tabpanel",tabIndex:this.selected?0:-1},(0,s.h)("section",null,(0,s.h)("slot",null))))}},{key:"connectedCallback",value:function(){this.parentTabsEl=this.el.closest("calcite-tabs");var t=this.selected||this.active;t&&(this.activeHandler(t),this.selectedHandler(t))}},{key:"componentDidLoad",value:function(){this.calciteInternalTabRegister.emit()}},{key:"componentWillRender",value:function(){var t;this.scale=null===(t=this.parentTabsEl)||void 0===t?void 0:t.scale}},{key:"disconnectedCallback",value:function(){var t;null===(t=document.body)||void 0===t||t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}},{key:"internalTabChangeHandler",value:function(t){var e=this;t.composedPath().find((function(t){return"CALCITE-TABS"===t.tagName}))===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then((function(i){e.selected=i===t.detail.tab})),t.stopPropagation())}},{key:"getTabIndex",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Array.prototype.indexOf.call((0,d.n)(this.el.parentElement.children).filter((function(t){return t.matches("calcite-tab")})),this.el));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateAriaInfo",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var e,i,n=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.length>0&&void 0!==n[0]?n[0]:[],i=n.length>1&&void 0!==n[1]?n[1]:[],this.labeledBy=i[e.indexOf(this.el.id)]||null;case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{active:["activeHandler"],selected:["selectedHandler"]}}}]),t}());h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}section,.container{display:none;block-size:100%;inline-size:100%}:host([scale=s]){padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}";var f=function(){function t(e){var i=this;(0,o.Z)(this,t),(0,s.r)(this,e),this.calciteTabChange=(0,s.c)(this,"calciteTabChange",6),this.calciteInternalTabChange=(0,s.c)(this,"calciteInternalTabChange",6),this.scale="m",this.layout="inline",this.position="bottom",this.bordered=!1,this.animationActiveDuration=.3,this.resizeObserver=(0,u.c)("resize",(function(){i.activeIndicatorEl.style.transitionDuration="0s",i.updateActiveWidth(),i.updateOffsetPosition()})),this.handleContainerScroll=function(){i.activeIndicatorEl.style.transitionDuration="0s",i.updateOffsetPosition()}}return(0,c.Z)(t,[{key:"selectedTabChanged",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage&&this.storageId&&void 0!==this.selectedTab&&null!==this.selectedTab&&localStorage.setItem("calcite-tab-nav-".concat(this.storageId),JSON.stringify(this.selectedTab)),this.calciteInternalTabChange.emit({tab:this.selectedTab}),t.next=4,this.getTabTitleById(this.selectedTab);case 4:this.selectedTabEl=t.sent;case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"selectedTabElChanged",value:function(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration="".concat(this.animationActiveDuration,"s")}},{key:"connectedCallback",value:function(){var t;this.parentTabsEl=this.el.closest("calcite-tabs"),null===(t=this.resizeObserver)||void 0===t||t.observe(this.el)}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}},{key:"componentWillLoad",value:function(){var t="calcite-tab-nav-".concat(this.storageId);if(localStorage&&this.storageId&&localStorage.getItem(t)){var e=JSON.parse(localStorage.getItem(t));this.selectedTab=e}}},{key:"componentWillRender",value:function(){var t=this.parentTabsEl;this.layout=null===t||void 0===t?void 0:t.layout,this.position=null===t||void 0===t?void 0:t.position,this.scale=null===t||void 0===t?void 0:t.scale,this.bordered=null===t||void 0===t?void 0:t.bordered,this.selectedTabEl&&this.updateOffsetPosition()}},{key:"componentDidRender",value:function(){var t=this;this.tabTitles.length&&this.tabTitles.every((function(t){return!t.active}))&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then((function(e){t.calciteInternalTabChange.emit({tab:e})}))}},{key:"render",value:function(){var t=this,e=(0,d.a)(this.el),i="".concat(this.indicatorWidth,"px"),n="".concat(this.indicatorOffset,"px"),a="rtl"!==e?{width:i,left:n}:{width:i,right:n};return(0,s.h)(s.H,{role:"tablist"},(0,s.h)("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:function(e){return t.tabNavEl=e}},(0,s.h)("div",{class:"tab-nav-active-indicator-container",ref:function(e){return t.activeIndicatorContainerEl=e}},(0,s.h)("div",{class:"tab-nav-active-indicator",ref:function(e){return t.activeIndicatorEl=e},style:a})),(0,s.h)("slot",null)))}},{key:"focusPreviousTabHandler",value:function(t){var e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles),i=this.enabledTabTitles[e-1]||this.enabledTabTitles[this.enabledTabTitles.length-1];null===i||void 0===i||i.focus(),t.stopPropagation(),t.preventDefault()}},{key:"focusNextTabHandler",value:function(t){var e=this.getIndexOfTabTitle(t.target,this.enabledTabTitles),i=this.enabledTabTitles[e+1]||this.enabledTabTitles[0];null===i||void 0===i||i.focus(),t.stopPropagation(),t.preventDefault()}},{key:"internalActivateTabHandler",value:function(t){this.selectedTab=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()}},{key:"activateTabHandler",value:function(t){this.calciteTabChange.emit({tab:this.selectedTab}),t.stopPropagation(),t.preventDefault()}},{key:"updateTabTitles",value:function(t){t.target.active&&(this.selectedTab=t.detail)}},{key:"globalInternalTabChangeHandler",value:function(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab),t.stopPropagation()}},{key:"iconStartChangeHandler",value:function(){this.updateActiveWidth()}},{key:"updateOffsetPosition",value:function(){var t,e,i,n,a,r=(0,d.a)(this.el),o=null===(t=this.activeIndicatorContainerEl)||void 0===t?void 0:t.offsetWidth,c=null===(e=this.selectedTabEl)||void 0===e?void 0:e.offsetLeft,s=o-(c+(null===(i=this.selectedTabEl)||void 0===i?void 0:i.offsetWidth));this.indicatorOffset="rtl"!==r?c-(null===(n=this.tabNavEl)||void 0===n?void 0:n.scrollLeft):s+(null===(a=this.tabNavEl)||void 0===a?void 0:a.scrollLeft)}},{key:"updateActiveWidth",value:function(){var t;this.indicatorWidth=null===(t=this.selectedTabEl)||void 0===t?void 0:t.offsetWidth}},{key:"getIndexOfTabTitle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tabTitles;return e.indexOf(t)}},{key:"getTabTitleById",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(e){var i=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(this.tabTitles.map((function(t){return t.getTabIdentifier()}))).then((function(t){return i.tabTitles[t.indexOf(e)]})));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"tabTitles",get:function(){return(0,d.j)(this.el,"calcite-tab-title")}},{key:"enabledTabTitles",get:function(){return(0,d.j)(this.el,"calcite-tab-title:not([disabled])")}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{selectedTab:["selectedTabChanged"],selectedTabEl:["selectedTabElChanged"]}}}]),t}();f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex}:host([scale=s]){min-block-size:1.5rem}:host([scale=m]){min-block-size:2rem}:host([scale=l]){min-block-size:2.75rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([position=below]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position=bottom]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position=below]) .tab-nav-active-indicator-container{inset-block-start:0px;inset-block-end:unset}:host([position=bottom]) .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered][position=below]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}:host([bordered][position=bottom]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}";var m=function(){function t(e){var i=this;(0,o.Z)(this,t),(0,s.r)(this,e),this.calciteTabsActivate=(0,s.c)(this,"calciteTabsActivate",6),this.calciteInternalTabsActivate=(0,s.c)(this,"calciteInternalTabsActivate",6),this.calciteInternalTabsFocusNext=(0,s.c)(this,"calciteInternalTabsFocusNext",6),this.calciteInternalTabsFocusPrevious=(0,s.c)(this,"calciteInternalTabsFocusPrevious",6),this.calciteInternalTabTitleRegister=(0,s.c)(this,"calciteInternalTabTitleRegister",6),this.calciteInternalTabIconChanged=(0,s.c)(this,"calciteInternalTabIconChanged",6),this.active=!1,this.selected=!1,this.disabled=!1,this.bordered=!1,this.mutationObserver=(0,u.c)("mutation",(function(){return i.updateHasText()})),this.hasText=!1,this.resizeObserver=(0,u.c)("resize",(function(){i.calciteInternalTabIconChanged.emit()})),this.guid="calcite-tab-title-".concat((0,l.g)())}return(0,c.Z)(t,[{key:"activeHandler",value:function(t){this.selected=t}},{key:"selectedHandler",value:function(t){this.active=t,this.selected&&this.emitActiveTab(!1)}},{key:"connectedCallback",value:function(){var t=this.selected,e=this.active;t?this.active=t:e&&this.activeHandler(e),this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav"),this.parentTabsEl=this.el.closest("calcite-tabs")}},{key:"disconnectedCallback",value:function(){var t,e,i;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),null===(e=document.body)||void 0===e||e.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el})),null===(i=this.resizeObserver)||void 0===i||i.disconnect()}},{key:"componentWillLoad",value:function(){this.updateHasText(),this.tab&&this.selected&&this.emitActiveTab(!1)}},{key:"componentWillRender",value:function(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.position=this.parentTabsEl.position,this.scale=this.parentTabsEl.scale,this.bordered=this.parentTabsEl.bordered),!this.parentTabsEl&&this.parentTabNavEl&&(this.position=(0,d.g)(this.parentTabNavEl,"position",this.position),this.scale=(0,d.g)(this.parentTabNavEl,"scale",this.scale))}},{key:"render",value:function(){var t=this,e=this.el.id||this.guid,i=(0,s.h)("calcite-icon",{class:"calcite-tab-title--icon icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),n=(0,s.h)("calcite-icon",{class:"calcite-tab-title--icon icon-end",flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return(0,s.h)(s.H,{"aria-controls":this.controls,"aria-selected":(0,d.t)(this.selected),id:e,role:"tab",tabIndex:this.selected?0:-1},(0,s.h)("div",{class:{container:!0,"container--has-text":this.hasText},ref:function(e){var i;return null===(i=t.resizeObserver)||void 0===i?void 0:i.observe(e)}},this.iconStart?i:null,(0,s.h)("slot",null),this.iconEnd?n:null))}},{key:"componentDidLoad",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.calciteInternalTabTitleRegister,t.next=3,this.getTabIdentifier();case 3:t.t1=t.sent,t.t0.emit.call(t.t0,t.t1);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidRender",value:function(){var t=this;(0,b.u)(this,(function(){return t.selected}))}},{key:"internalTabChangeHandler",value:function(t){var e=this;t.composedPath().find((function(t){return"CALCITE-TABS"===t.tagName}))===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then((function(i){e.selected=i===t.detail.tab})),t.stopPropagation())}},{key:"onClick",value:function(){this.emitActiveTab()}},{key:"keyDownHandler",value:function(t){switch(t.key){case" ":case"Enter":this.emitActiveTab(),t.preventDefault();break;case"ArrowRight":t.preventDefault(),"ltr"===(0,d.a)(this.el)?this.calciteInternalTabsFocusNext.emit():this.calciteInternalTabsFocusPrevious.emit();break;case"ArrowLeft":t.preventDefault(),"ltr"===(0,d.a)(this.el)?this.calciteInternalTabsFocusPrevious.emit():this.calciteInternalTabsFocusNext.emit()}}},{key:"getTabIndex",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTabIdentifier",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.tab?this.tab:this.getTabIndex());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateAriaInfo",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var e,i,n=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.length>0&&void 0!==n[0]?n[0]:[],i=n.length>1&&void 0!==n[1]?n[1]:[],this.controls=e[i.indexOf(this.el.id)]||null;case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateHasText",value:function(){this.hasText=this.el.textContent.trim().length>0}},{key:"setupTextContentObserver",value:function(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}},{key:"emitActiveTab",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.disabled){var e={tab:this.tab};this.calciteInternalTabsActivate.emit(e),t&&this.calciteTabsActivate.emit(e)}}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{active:["activeHandler"],selected:["selectedHandler"]}}}]),t}();m.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host([layout=center]){margin-block:0px;margin-inline:1.25rem;text-align:center;flex-basis:12rem;margin:auto}:host([position=below]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host .container{outline-color:transparent}:host(:focus) .container{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){-webkit-margin-end:1rem;margin-inline-end:1rem}:host([scale=s]) .container{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .container{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){-webkit-margin-end:1.5rem;margin-inline-end:1.5rem}:host([scale=l]) .container{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;justify-content:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-block-end-width:2px;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.container--has-text{padding:0.25rem}.container--has-text .calcite-tab-title--icon.icon-start{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([bordered]){-webkit-margin-end:0;margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][selected][position=below]){box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) .container,:host([bordered]:focus) .container,:host([bordered]:active) .container{position:relative}:host([bordered]:hover) .container{background-color:var(--calcite-button-transparent-hover)}:host([bordered]) .container{border-block-end-style:unset;-webkit-border-start:1px solid transparent;border-inline-start:1px solid transparent;-webkit-border-end:1px solid transparent;border-inline-end:1px solid transparent}:host([bordered][position=below]) .container{border-block-start-style:unset}:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-ui-border-1);border-inline-end-color:var(--calcite-ui-border-1)}:host([bordered]) .container{padding-inline:0.75rem}:host([bordered][scale=s]) .container{padding-inline:0.5rem}:host([bordered][scale=l]) .container{padding-inline:1rem}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=below]) .container{border-block-start-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=below][selected]) .container{border-block-start-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}}";var p="tab-nav",v=function(){function t(e){(0,o.Z)(this,t),(0,s.r)(this,e),this.layout="inline",this.position="top",this.scale="m",this.bordered=!1,this.titles=[],this.tabs=[]}return(0,c.Z)(t,[{key:"render",value:function(){return(0,s.h)(s.F,null,(0,s.h)("slot",{name:p}),(0,s.h)("section",null,(0,s.h)("slot",null)))}},{key:"calciteInternalTabTitleRegister",value:function(t){this.titles=[].concat((0,n.Z)(this.titles),[t.target]),this.registryHandler(),t.stopPropagation()}},{key:"calciteTabTitleUnregister",value:function(t){this.titles=this.titles.filter((function(e){return e!==t.detail})),this.registryHandler(),t.stopPropagation()}},{key:"calciteInternalTabRegister",value:function(t){this.tabs=[].concat((0,n.Z)(this.tabs),[t.target]),this.registryHandler(),t.stopPropagation()}},{key:"calciteTabUnregister",value:function(t){this.tabs=this.tabs.filter((function(e){return e!==t.detail})),this.registryHandler(),t.stopPropagation()}},{key:"registryHandler",value:function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var e,i,n,r,o=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.tabs.some((function(t){return t.tab}))&&!this.titles.some((function(t){return t.tab}))){t.next=5;break}e=this.tabs.sort((function(t,e){return t.tab.localeCompare(e.tab)})).map((function(t){return t.id})),i=this.titles.sort((function(t,e){return t.tab.localeCompare(e.tab)})).map((function(t){return t.id})),t.next=13;break;case 5:return t.next=7,Promise.all(this.tabs.map((function(t){return t.getTabIndex()})));case 7:return n=t.sent,t.next=10,Promise.all(this.titles.map((function(t){return t.getTabIndex()})));case 10:r=t.sent,e=n.reduce((function(t,e,i){return t[e]=o.tabs[i].id,t}),[]),i=r.reduce((function(t,e,i){return t[e]=o.titles[i].id,t}),[]);case 13:this.tabs.forEach((function(t){return t.updateAriaInfo(e,i)})),this.titles.forEach((function(t){return t.updateAriaInfo(e,i)}));case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"el",get:function(){return(0,s.g)(this)}}]),t}();v.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=below])) ::slotted(calcite-tab-nav){-webkit-margin-after:-1px;margin-block-end:-1px}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){-webkit-margin-after:-1px;margin-block-end:-1px}:host([bordered][position=below]) ::slotted(calcite-tab-nav){-webkit-margin-before:-1px;margin-block-start:-1px}:host([bordered][position=below]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=below]){flex-direction:column-reverse}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position=below]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=below]:not([bordered])) section{border-block-end-style:solid}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=below][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}"},40566:function(t,e,i){i.d(e,{a:function(){return u},b:function(){return I},c:function(){return p},d:function(){return k},e:function(){return Z},f:function(){return w},g:function(){return b},h:function(){return d},i:function(){return z},j:function(){return E},k:function(){return h},l:function(){return s},m:function(){return g},n:function(){return l},q:function(){return m},s:function(){return A},t:function(){return C}});var n=i(74165),a=i(93433),r=i(15861),o=i(84261),c=i(88814);function s(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,c.g)()):""}function l(t){return Array.isArray(t)?t:Array.from(t)}function d(t){var e=p(t,".".concat(o.C.darkTheme,", .").concat(o.C.lightTheme));return(null===e||void 0===e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function u(t){var e=p(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function b(t,e,i){var n="[".concat(e,"]"),a=t.closest(n);return a?a.getAttribute(e):i}function h(t){return t.getRootNode()}function f(t){return t.host||null}function m(t,e){var i=e.selector,n=e.id;return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);var a=h(e),r=n?"getElementById"in a?a.getElementById(n):null:i?a.querySelector(i):null,o=f(a);return r||(o?t(o):null)}(t)}function p(t,e){return function t(i){return i?i.closest(e)||t(f(h(i))):null}(t)}function v(t,e){return y(t,e)}function y(t,e){if(t){var i=e(t);if(void 0!==i)return i;var n=t.parentNode;return y(n instanceof ShadowRoot?n.host:n,e)}}function k(t,e){return!!v(e,(function(e){return e===t||void 0}))}function g(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",g(e)?e.setFocus():e.focus());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var T=":not([slot])";function I(t,e,i){e&&!Array.isArray(e)&&"string"!==typeof e&&(i=e,e=null);var n=e?Array.isArray(e)?e.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(e,'"]'):T;return(null===i||void 0===i?void 0:i.all)?function(t,e,i){var n=e===T?D(t,T):Array.from(t.querySelectorAll(e));n=i&&!1===i.direct?n:n.filter((function(e){return e.parentElement===t})),n=(null===i||void 0===i?void 0:i.matches)?n.filter((function(t){return null===t||void 0===t?void 0:t.matches(i.matches)})):n;var r=null===i||void 0===i?void 0:i.selector;return r?n.map((function(t){return Array.from(t.querySelectorAll(r))})).reduce((function(t,e){return[].concat((0,a.Z)(t),(0,a.Z)(e))}),[]).filter((function(t){return!!t})):n}(t,n,i):function(t,e,i){var n=e===T?D(t,T)[0]||null:t.querySelector(e);n=i&&!1===i.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null,n=(null===i||void 0===i?void 0:i.matches)?(null===n||void 0===n?void 0:n.matches(i.matches))?n:null:n;var a=null===i||void 0===i?void 0:i.selector;return a?null===n||void 0===n?void 0:n.querySelector(a):n}(t,n,i)}function D(t,e){return t?Array.from(t.children||[]).filter((function(t){return null===t||void 0===t?void 0:t.matches(e)})):[]}function E(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function A(t,e,i){return"string"===typeof e&&""!==e?e:""===e?t[i]:void 0}function Z(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function C(t){return Boolean(t).toString()}function z(t){return!(!t.isPrimary||0!==t.button)}},88814:function(t,e,i){i.d(e,{g:function(){return n}});var n=function(){return[2,1,1,1,3].map((function(t){for(var e="",i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},13966:function(t,e,i){function n(){}function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=n);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}i.d(e,{u:function(){return a}})},91864:function(t,e,i){i.d(e,{c:function(){return l}});var n=i(15671),a=i(43144),r=i(11752),o=i(61120),c=i(60136),s=i(92572);function l(t,e,i){var l=function(t){var e=function(t){(0,c.Z)(i,t);var e=(0,s.Z)(i);function i(t){var a;return(0,n.Z)(this,i),(a=e.call(this,t)).observedEntry=[],a.callback=t,a}return(0,a.Z)(i,[{key:"observe",value:function(t,e){return this.observedEntry.push({target:t,options:e}),(0,r.Z)((0,o.Z)(i.prototype),"observe",this).call(this,t,e)}},{key:"unobserve",value:function(t){var e=this,n=this.observedEntry.filter((function(e){return e.target!==t}));this.observedEntry=[],this.callback((0,r.Z)((0,o.Z)(i.prototype),"takeRecords",this).call(this),this),this.disconnect(),n.forEach((function(t){return e.observe(t.target,t.options)}))}}]),i}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new l(e,i)}},11752:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(61120);function a(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=(0,n.Z)(t)););return t}function r(){return r="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,i){var n=a(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(arguments.length<3?t:i):r.value}},r.apply(this,arguments)}}}]);
//# sourceMappingURL=99028.d5ceb5b2.chunk.js.map
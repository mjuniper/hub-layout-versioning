"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[74446],{74446:function(e,t,n){n.r(t),n.d(t,{CalciteFlowItem:function(){return le},defineCustomElement:function(){return se}});var a=n(74165),i=n(15861),o=n(15671),c=n(43144),r=n(97326),l=n(60136),s=n(92572),d=n(6638),u=n(15945),h=n(72154),m=n(44497),f=n(8793),g=n(66804),v=n(4942),p=n(69307),b=n(76648),k=n(71066),y=n(2607),x=n(99580),w=n(98929),C=n(10768),E=n(83946),S="container",Z="header",H="heading",z="description",_="header-content",F="header-actions",L="header-actions--end",D="header-actions--start",A="content-wrapper",B="content-container",M="content-height",O="fab-container",P="footer",I="x",R="ellipsis",T="header-actions-start",j="header-actions-end",N="header-menu-actions",G="header-content",K="fab",W="footer",Y="footer-actions",q=(0,d.GH)(function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calcitePanelClose=(0,d.yM)((0,r.Z)(e),"calcitePanelClose",6),e.calcitePanelScroll=(0,d.yM)((0,r.Z)(e),"calcitePanelScroll",6),e.resizeObserver=(0,p.c)("resize",(function(){return e.resizeHandler()})),e.resizeHandler=function(){var t=(0,r.Z)(e).panelScrollEl;t&&"number"===typeof t.scrollHeight&&"number"===typeof t.offsetHeight&&(t.tabIndex=t.scrollHeight>t.offsetHeight?0:-1)},e.setContainerRef=function(t){e.containerEl=t},e.setCloseRef=function(t){e.closeButtonEl=t},e.setBackRef=function(t){e.backButtonEl=t},e.panelKeyDownHandler=function(t){e.closable&&"Escape"===t.key&&!t.defaultPrevented&&(e.close(),t.preventDefault())},e.close=function(){e.closed=!0,e.calcitePanelClose.emit()},e.panelScrollHandler=function(){e.calcitePanelScroll.emit()},e.handleHeaderActionsStartSlotChange=function(t){var n=t.target.assignedElements({flatten:!0});e.hasStartActions=!!n.length},e.handleHeaderActionsEndSlotChange=function(t){var n=t.target.assignedElements({flatten:!0});e.hasEndActions=!!n.length},e.handleHeaderMenuActionsSlotChange=function(t){var n=t.target.assignedElements({flatten:!0});e.hasMenuItems=!!n.length},e.handleHeaderContentSlotChange=function(t){var n=t.target.assignedElements({flatten:!0});e.hasHeaderContent=!!n.length},e.handleFooterSlotChange=function(t){var n=t.target.assignedElements({flatten:!0});e.hasFooterContent=!!n.length},e.handleFooterActionsSlotChange=function(t){var n=t.target.assignedElements({flatten:!0});e.hasFooterActions=!!n.length},e.handleFabSlotChange=function(t){var n=t.target.assignedElements({flatten:!0});e.hasFab=!!n.length},e.setPanelScrollEl=function(t){var n,a;(e.panelScrollEl=t,null===(n=e.resizeObserver)||void 0===n||n.disconnect(),t)&&(null===(a=e.resizeObserver)||void 0===a||a.observe(t),e.resizeHandler())},e.closed=!1,e.disabled=!1,e.closable=!1,e.headingLevel=void 0,e.loading=!1,e.heading=void 0,e.description=void 0,e.menuOpen=!1,e.messageOverrides=void 0,e.messages=void 0,e.hasStartActions=!1,e.hasEndActions=!1,e.hasMenuItems=!1,e.hasHeaderContent=!1,e.hasFooterContent=!1,e.hasFooterActions=!1,e.hasFab=!1,e.defaultMessages=void 0,e.effectiveLocale="",e}return(0,c.Z)(n,[{key:"onMessagesChange",value:function(){}},{key:"connectedCallback",value:function(){(0,f.c)(this),(0,g.c)(this)}},{key:"componentWillLoad",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,m.a)(this),e.next=3,(0,g.s)(this);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){(0,m.s)(this)}},{key:"componentDidRender",value:function(){(0,h.u)(this)}},{key:"disconnectedCallback",value:function(){var e;(0,f.d)(this),(0,g.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}},{key:"effectiveLocaleChange",value:function(){(0,g.u)(this,this.effectiveLocale)}},{key:"setFocus",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.c)(this);case 2:(0,u.j)(this.containerEl);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollContentTo",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=this.panelScrollEl)||void 0===n||n.scrollTo(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderHeaderContent",value:function(){var e=this.heading,t=this.headingLevel,n=this.description,a=this.hasHeaderContent,i=e?(0,d.h)(k.H,{class:H,level:t},e):null,o=n?(0,d.h)("span",{class:z},n):null;return a||!i&&!o?null:(0,d.h)("div",{class:_,key:"header-content"},i,o)}},{key:"renderHeaderSlottedContent",value:function(){return(0,d.h)("div",{class:_,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,d.h)("slot",{name:G,onSlotchange:this.handleHeaderContentSlotChange}))}},{key:"renderHeaderStartActions",value:function(){var e,t=this.hasStartActions;return(0,d.h)("div",{class:(e={},(0,v.Z)(e,D,!0),(0,v.Z)(e,F,!0),e),hidden:!t,key:"header-actions-start"},(0,d.h)("slot",{name:T,onSlotchange:this.handleHeaderActionsStartSlotChange}))}},{key:"renderHeaderActionsEnd",value:function(){var e,t=this.close,n=this.hasEndActions,a=this.messages,i=this.closable,o=a.close,c=i?(0,d.h)("calcite-action",{"aria-label":o,icon:I,onClick:t,ref:this.setCloseRef,text:o}):null,r=(0,d.h)("slot",{name:j,onSlotchange:this.handleHeaderActionsEndSlotChange}),l=n||c;return(0,d.h)("div",{class:(e={},(0,v.Z)(e,L,!0),(0,v.Z)(e,F,!0),e),hidden:!l,key:"header-actions-end"},r,c)}},{key:"renderMenu",value:function(){var e=this.hasMenuItems,t=this.messages,n=this.menuOpen;return(0,d.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,placement:"bottom-end"},(0,d.h)("calcite-action",{icon:R,slot:b.S.trigger,text:t.options}),(0,d.h)("slot",{name:N,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}},{key:"renderHeaderNode",value:function(){var e=this.hasHeaderContent,t=this.hasStartActions,n=this.hasEndActions,a=this.closable,i=this.hasMenuItems,o=this.renderHeaderContent(),c=e||o||t||n||a||i;return(0,d.h)("header",{class:Z,hidden:!c},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),o,this.renderHeaderActionsEnd(),this.renderMenu())}},{key:"renderFooterNode",value:function(){var e=this.hasFooterContent,t=this.hasFooterActions,n=e||t;return(0,d.h)("footer",{class:P,hidden:!n},(0,d.h)("slot",{key:"footer-slot",name:W,onSlotchange:this.handleFooterSlotChange}),(0,d.h)("slot",{key:"footer-actions-slot",name:Y,onSlotchange:this.handleFooterActionsSlotChange}))}},{key:"renderContent",value:function(){var e,t=this.hasFab,n=(0,d.h)("slot",{key:"default-slot"}),a=t?(0,d.h)("section",{class:B},n):n;return(0,d.h)("div",{class:(e={},(0,v.Z)(e,A,!0),(0,v.Z)(e,B,!t),(0,v.Z)(e,M,t),e),onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},a,this.renderFab())}},{key:"renderFab",value:function(){return(0,d.h)("div",{class:O,hidden:!this.hasFab},(0,d.h)("slot",{name:K,onSlotchange:this.handleFabSlotChange}))}},{key:"render",value:function(){var e=this.loading,t=this.panelKeyDownHandler,n=this.closed,a=this.closable,i=(0,d.h)("article",{"aria-busy":(0,u.t)(e),class:S,hidden:n,onKeyDown:t,ref:this.setContainerRef,tabIndex:a?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,d.h)(d.HY,null,e?(0,d.h)("calcite-scrim",{loading:e}):null,i)}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;position:sticky;inset-block-start:0px;z-index:400;inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;position:sticky;inset-block-end:0px;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;min-block-size:3rem;padding:0.5rem}.fab-container{position:sticky;inset-block-end:0px;z-index:300;margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}"}}]),n}(d.mv),[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[1540],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function J(){if("undefined"!==typeof customElements){["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((function(e){switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,q);break;case"calcite-action":customElements.get(e)||(0,y.d)();break;case"calcite-action-menu":customElements.get(e)||(0,b.d)();break;case"calcite-icon":customElements.get(e)||(0,x.d)();break;case"calcite-loader":customElements.get(e)||(0,w.d)();break;case"calcite-popover":customElements.get(e)||(0,C.d)();break;case"calcite-scrim":customElements.get(e)||(0,E.d)()}}))}}J();var Q=n(97213),U="back-button",V="chevron-left",X="chevron-right",$="header-actions-start",ee="header-actions-end",te="header-menu-actions",ne="header-content",ae="fab",ie="footer",oe="footer-actions",ce=(0,d.GH)(function(e){(0,l.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calciteFlowItemBack=(0,d.yM)((0,r.Z)(e),"calciteFlowItemBack",6),e.calciteFlowItemScroll=(0,d.yM)((0,r.Z)(e),"calciteFlowItemScroll",6),e.calciteFlowItemClose=(0,d.yM)((0,r.Z)(e),"calciteFlowItemClose",6),e.handlePanelScroll=function(t){t.stopPropagation(),e.calciteFlowItemScroll.emit()},e.handlePanelClose=function(t){t.stopPropagation(),e.calciteFlowItemClose.emit()},e.backButtonClick=function(){e.calciteFlowItemBack.emit()},e.setBackRef=function(t){e.backButtonEl=t},e.setContainerRef=function(t){e.containerEl=t},e.closable=!1,e.closed=!1,e.beforeBack=void 0,e.description=void 0,e.disabled=!1,e.heading=void 0,e.headingLevel=void 0,e.loading=!1,e.menuOpen=!1,e.messageOverrides=void 0,e.messages=void 0,e.showBackButton=!1,e.backButtonEl=void 0,e.defaultMessages=void 0,e.effectiveLocale="",e}return(0,c.Z)(n,[{key:"onMessagesChange",value:function(){}},{key:"connectedCallback",value:function(){(0,f.c)(this),(0,g.c)(this)}},{key:"componentWillLoad",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.s)(this);case 2:(0,m.a)(this);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidRender",value:function(){(0,h.u)(this)}},{key:"disconnectedCallback",value:function(){(0,f.d)(this),(0,g.d)(this)}},{key:"componentDidLoad",value:function(){(0,m.s)(this)}},{key:"effectiveLocaleChange",value:function(){(0,g.u)(this,this.effectiveLocale)}},{key:"setFocus",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.c)(this);case 2:if(t=this.backButtonEl,n=this.containerEl,!t){e.next=6;break}return t.setFocus(),e.abrupt("return");case 6:null===n||void 0===n||n.setFocus();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollContentTo",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this.containerEl)||void 0===n?void 0:n.scrollContentTo(t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderBackButton",value:function(){var e=this.el,t="rtl"===(0,u.c)(e),n=this.showBackButton,a=this.backButtonClick,i=this.messages.back,o=t?X:V;return n?(0,d.h)("calcite-action",{"aria-label":i,class:U,icon:o,key:"flow-back-button",onClick:a,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:i}):null}},{key:"render",value:function(){var e=this.closable,t=this.closed,n=this.description,a=this.disabled,i=this.heading,o=this.headingLevel,c=this.loading,r=this.menuOpen,l=this.messages,s=this.backButtonEl,u=l.back;return(0,d.h)(d.AA,null,(0,d.h)("calcite-panel",{closable:e,closed:t,description:n,disabled:a,heading:i,headingLevel:o,loading:c,menuOpen:r,messageOverrides:l,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,ref:this.setContainerRef},this.renderBackButton(),(0,d.h)("slot",{name:$,slot:T}),(0,d.h)("slot",{name:ee,slot:j}),(0,d.h)("slot",{name:ne,slot:G}),(0,d.h)("slot",{name:te,slot:N}),(0,d.h)("slot",{name:ae,slot:K}),(0,d.h)("slot",{name:oe,slot:Y}),(0,d.h)("slot",{name:ie,slot:W}),(0,d.h)("slot",null)),s?(0,d.h)("calcite-tooltip",{label:u,overlayPositioning:"fixed",placement:"top",referenceElement:s},u):null)}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}"}}]),n}(d.mv),[1,"calcite-flow-item",{closable:[1540],closed:[1540],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],backButtonEl:[32],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function re(){if("undefined"!==typeof customElements){["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim","calcite-tooltip"].forEach((function(e){switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,ce);break;case"calcite-action":customElements.get(e)||(0,y.d)();break;case"calcite-action-menu":customElements.get(e)||(0,b.d)();break;case"calcite-icon":customElements.get(e)||(0,x.d)();break;case"calcite-loader":customElements.get(e)||(0,w.d)();break;case"calcite-panel":customElements.get(e)||J();break;case"calcite-popover":customElements.get(e)||(0,C.d)();break;case"calcite-scrim":customElements.get(e)||(0,E.d)();break;case"calcite-tooltip":customElements.get(e)||(0,Q.d)()}}))}}re();var le=ce,se=re},83946:function(e,t,n){n.d(t,{d:function(){return v}});var a=n(74165),i=n(15861),o=n(15671),c=n(43144),r=n(60136),l=n(92572),s=n(6638),d=n(8793),u=n(66804),h=n(98929),m="scrim",f="content",g=(0,s.GH)(function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.loading=!1,e.messages=void 0,e.messageOverrides=void 0,e.defaultMessages=void 0,e.effectiveLocale="",e}return(0,c.Z)(n,[{key:"onMessagesChange",value:function(){}},{key:"effectiveLocaleChange",value:function(){(0,u.u)(this,this.effectiveLocale)}},{key:"connectedCallback",value:function(){(0,d.c)(this),(0,u.c)(this)}},{key:"componentWillLoad",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.s)(this);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){(0,d.d)(this),(0,u.d)(this)}},{key:"render",value:function(){var e=this.el,t=this.loading,n=this.messages,a=e.innerHTML.trim().length>0,i=t?(0,s.h)("calcite-loader",{label:n.loading}):null,o=a?(0,s.h)("div",{class:f},(0,s.h)("slot",null)):null;return(0,s.h)("div",{class:m},i,o)}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:700;display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}"}}]),n}(s.mv),[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32]}]);function v(){if("undefined"!==typeof customElements){["calcite-scrim","calcite-loader"].forEach((function(e){switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,g);break;case"calcite-loader":customElements.get(e)||(0,h.d)()}}))}}v()}}]);
//# sourceMappingURL=74446.6c43c82d.chunk.js.map
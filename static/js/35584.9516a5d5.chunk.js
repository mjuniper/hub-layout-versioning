"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[35584],{35584:function(t,i,e){e.r(i),e.d(i,{calcite_sortable_list:function(){return h}});var a=e(4942),n=e(15671),r=e(43144),o=e(5692),c=e(40617),l=e(1118),s=e(57203),d="container",m="container--horizontal",u="container--vertical",h=function(){function t(i){var e=this;(0,n.Z)(this,t),(0,o.r)(this,i),this.calciteListOrderChange=(0,o.c)(this,"calciteListOrderChange",6),this.handleSelector="calcite-handle",this.layout="vertical",this.disabled=!1,this.loading=!1,this.handleActivated=!1,this.items=[],this.mutationObserver=(0,l.c)("mutation",(function(){e.cleanUpDragAndDrop(),e.items=Array.from(e.el.children),e.setUpDragAndDrop()}))}return(0,r.Z)(t,[{key:"connectedCallback",value:function(){this.items=Array.from(this.el.children),this.setUpDragAndDrop(),this.beginObserving()}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.cleanUpDragAndDrop()}},{key:"componentDidRender",value:function(){(0,s.u)(this)}},{key:"calciteHandleNudgeHandler",value:function(t){var i,e,a=this.items.find((function(i){return i.contains(t.detail.handle)||t.composedPath().includes(i)})),n=this.items.length-1,r=this.items.indexOf(a),o=!1;switch(t.detail.direction){case"up":t.preventDefault(),0===r?o=!0:e=r-1;break;case"down":t.preventDefault(),r===n?e=0:r===n-1?o=!0:e=r+2;break;default:return}null===(i=this.mutationObserver)||void 0===i||i.disconnect(),o?a.parentElement.appendChild(a):a.parentElement.insertBefore(a,this.items[e]),this.items=Array.from(this.el.children),t.detail.handle.activated=!0,t.detail.handle.setFocus(),this.beginObserving()}},{key:"setUpDragAndDrop",value:function(){var t=this;this.cleanUpDragAndDrop();var i={dataIdAttr:"id",group:this.group,handle:this.handleSelector,onUpdate:function(){t.items=Array.from(t.el.children),t.calciteListOrderChange.emit()},onStart:function(){var i;null===(i=t.mutationObserver)||void 0===i||i.disconnect()},onEnd:function(){t.beginObserving()}};this.dragSelector&&(i.draggable=this.dragSelector),this.sortable=c.S.create(this.el,i)}},{key:"cleanUpDragAndDrop",value:function(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null}},{key:"beginObserving",value:function(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}},{key:"render",value:function(){var t,i="horizontal"===this.layout||!1;return(0,o.h)("div",{class:(t={},(0,a.Z)(t,d,!0),(0,a.Z)(t,u,!i),(0,a.Z)(t,m,i),t)},(0,o.h)("slot",null))}},{key:"el",get:function(){return(0,o.g)(this)}}]),t}();h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}"}}]);
//# sourceMappingURL=35584.9516a5d5.chunk.js.map
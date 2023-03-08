"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[21102],{21102:function(e,t,i){i.r(t),i.d(t,{arcgis_hub_image_upload:function(){return d}});var a=i(4942),n=i(74165),r=i(15861),s=i(15671),o=i(43144),l=i(5692),h=i(54825),c=i(13129),d=(i(7597),function(){function e(t){var i=this;(0,s.Z)(this,e),(0,l.r)(this,t),this.arcgisImageUploadCancel=(0,l.c)(this,"arcgisImageUploadCancel",7),this.arcgisImageUploadError=(0,l.c)(this,"arcgisImageUploadError",7),this.arcgisImageUploadSave=(0,l.c)(this,"arcgisImageUploadSave",7),this.zoomToFit=!0,this.maxWidth=300,this.maxHeight=300,this.fillBackground=!1,this.height=window.innerWidth<412?200:300,this.aspectRatio=1,this.inline=!1,this.saving=!1,this.editExisting=!1,this.isModified=!1,this.activeStep="file",this.hasError=!1,this.imageFormat="png",this.fileName="",this.triggerErrorState=function(){i.hasError=!0,setTimeout((function(){i.resetErrorState()}),3e3)},this.resetErrorState=function(){i.hasError=!1},this.handleCancel=function(){i.arcgisImageUploadCancel.emit()},this.handleChooseDiffClick=function(){i.activeStep="file",i.previewSrc="",i.editExisting=!1},this.handleSaveClick=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("file"!==i.activeStep){e.next=2;break}return e.abrupt("return");case 2:return i.saving=!0,e.next=5,i.getCanvasImage();case 5:t=e.sent,i.arcgisImageUploadSave.emit(t),i.inline&&i.resetState();case 8:case"end":return e.stop()}}),e)}))),(0,h.b)(this,"handleCancel","handleChooseDiffClick","handleSaveClick","getEditStepRef","getCanvasRef")}return(0,o.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.i.loadIntlForComponent(this.el);case 2:this.intl=e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleFileChange",value:function(e){var t=e.detail,i=t.fileName,a=t.dataURL;this.fileName=i,this.previewSrc=a,this.activeStep="edit",this.resetErrorState()}},{key:"handleInvalidFile",value:function(){this.arcgisImageUploadError.emit("invalid file type."),this.triggerErrorState()}},{key:"handleImageChange",value:function(){this.isModified=!0}},{key:"handleActiveChange",value:function(){this.active||this.resetState()}},{key:"resetState",value:function(){this.activeStep="file",this.saving=!1,this.isModified=!1,this.previewSrc="",this.editExisting=!1,this.resetErrorState()}},{key:"dataURIToBlob",value:function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),n=new Uint8Array(a),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return new Blob([a],{type:i})}},{key:"drawImage",value:function(e,t,i,a){var n=e.selectionX,r=e.selectionY,s=e.selectionWidth,o=e.selectionHeight,l=e.canvasWidth,h=e.canvasHeight,c=e.minWidth,d=e.minHeight,u=e.drawDimensions;this.canvasEl.width=l<c?c:l*t,this.canvasEl.height=h<d?d:h*t,this.maxWidth&&this.canvasEl.width>this.maxWidth&&(this.canvasEl.width=this.maxWidth),this.maxHeight&&this.canvasEl.height>this.maxHeight&&(this.canvasEl.height=this.maxHeight);var g=u.left*this.canvasEl.width,p=u.top*this.canvasEl.height,m=u.width*this.canvasEl.width,f=u.height*this.canvasEl.height;this.fillBackground&&(a.fillStyle="#efefef",a.fillRect(0,0,this.canvasEl.width,this.canvasEl.height)),a.drawImage(i,n,r,s,o,g,p,m,f);var v=this.canvasEl.toDataURL("image/png");return{base64:v,blob:this.dataURIToBlob(v)}}},{key:"getScaledImageData",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var i,a,r,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=function(){return i.clearRect(0,0,this.canvasEl.width,this.canvasEl.height),this.drawImage(a,1600/t.width,t,i)},i=this.canvasEl.getContext("2d"),e.next=4,this.editStepEl.getDrawParameters();case 4:a=e.sent;try{((r=this.drawImage(a,1,t,i)).blob.size>1e7||0===r.blob.size)&&(r=s())}catch(n){"NS_ERROR_FAILURE"!==n.name?this.arcgisImageUploadError.emit("unable to save the image provided."):r=s()}return e.abrupt("return",{blob:null===r||void 0===r?void 0:r.blob,base64:null===r||void 0===r?void 0:r.base64,format:this.imageFormat,fileName:this.fileName});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCanvasImage",value:function(){var e=this;return new Promise((function(t){var i=new Image;e.previewSrc.indexOf("arcgis.com")>-1&&(i.crossOrigin="Anonymous"),i.onload=function(){Math.abs(e.aspectRatio-i.width/i.height)<.01&&!e.isModified?t({blob:e.dataURIToBlob(e.previewSrc),base64:e.previewSrc,format:e.imageFormat,fileName:e.fileName}):t(e.getScaledImageData(i))},i.src=e.previewSrc}))}},{key:"getEditStepRef",value:function(e){this.editStepEl=e}},{key:"getCanvasRef",value:function(e){this.canvasEl=e}},{key:"renderButtons",value:function(){var e=(0,l.h)(l.F,null,"edit"===this.activeStep&&(0,l.h)("calcite-button",{appearance:"transparent",disabled:this.saving,"icon-start":"chevron-left",onClick:this.handleChooseDiffClick,slot:"back",width:this.inline?"auto":"full"},this.intl.t("chooseDiff")),(0,l.h)("calcite-button",{appearance:"outline",class:{hide:this.inline},disabled:this.saving,onClick:this.handleCancel,slot:"secondary",width:"full"},this.intl.t("cancel")),(0,l.h)("calcite-button",{appearance:"solid",class:{hide:this.inline&&"file"===this.activeStep},loading:this.saving,onClick:this.handleSaveClick,slot:"primary",width:this.inline?"auto":"full"},this.intl.t("done")));return this.inline?(0,l.h)("div",{class:"button-container"},e):e}},{key:"renderContent",value:function(){var e;return(0,l.h)(l.F,null,(0,l.h)("h3",{"aria-label":this.modalTitle,class:"image-upload__title",id:"image-upload-modal-title",slot:"header"},this.modalTitle),(0,l.h)("div",{class:(e={},(0,a.Z)(e,"image-upload__content",!0),(0,a.Z)(e,"error",this.hasError),e),slot:"content"},"file"===this.activeStep&&(0,l.h)("div",null,(0,l.h)("arcgis-hub-image-upload-file-step",{sizeDescription:this.sizeDescription})),"edit"===this.activeStep&&(0,l.h)("arcgis-hub-image-upload-edit-step",{aspectRatio:this.aspectRatio,height:this.height,previewSrc:this.previewSrc,ref:this.getEditStepRef,zoomToFit:this.zoomToFit}),"edit"===this.activeStep&&(0,l.h)("canvas",{class:"image-upload__canvas",ref:this.getCanvasRef})),this.renderButtons())}},{key:"render",value:function(){return this.inline?(0,l.h)(l.F,null,this.renderContent()):(0,l.h)("calcite-modal",{"aria-labelledby":"image-upload-modal-title","aria-modal":"true",disableOutsideClose:!0,intlClose:this.intl.t("close"),onCalciteModalClose:this.handleCancel,open:this.active,role:"dialog",width:650},this.renderContent())}},{key:"el",get:function(){return(0,l.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}},{key:"watchers",get:function(){return{active:["handleActiveChange"]}}}]),e}());d.style='.image-upload__title{margin-bottom:0px;font-size:var(--calcite-font-size-2);line-height:1.5rem}.image-upload__content{transition:all 200ms ease-in-out;border:1px solid var(--calcite-ui-border-3);box-sizing:border-box;background-color:var(--calcite-ui-background);padding-left:2rem;padding-right:2rem;padding-top:1rem;padding-bottom:1.5rem}.image-upload__content--with-map{min-height:400px}.image-upload__content--no-padding{padding:0px}.image-upload__canvas{left:-10000px;visibility:hidden;position:fixed}.or-container{margin-top:1rem;margin-bottom:1rem;text-align:center;font-weight:var(--calcite-font-weight-medium)}.or-container:before,.or-container:after{content:"";border-top:solid 1px var(--calcite-ui-border-input);width:15%;height:1px;z-index:1;display:inline-block;vertical-align:middle}.or-wrapper{padding-left:0.5rem;padding-right:0.5rem}.image-upload__from-map-button{border:1px solid var(--calcite-ui-foreground-3);background-color:var(--calcite-ui-foreground-1);padding:1rem;text-align:center}.image-upload__from-map-button:hover{border:1px solid var(--calcite-ui-brand)}.image-upload__from-map-title{display:inline-block}.from-map-title-wrapper{display:flex;align-items:center}.from-map-icon{margin-right:0.5rem}.image-upload__from-map-desc{margin:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem}.hide{display:none}.button-container{margin-top:0.5rem;display:flex;width:100%;flex-direction:row;justify-content:space-between;padding-top:1.25rem}.error{background-color:#FFF1EF;border-color:var(--calcite-ui-danger)}'},54825:function(e,t,i){i.d(t,{b:function(){return a}});var a=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];i.forEach((function(t){if("function"!==typeof e[t])throw new Error("Cannot bind context. ".concat(t," must be a function"));e[t]=e[t].bind(e)}))}}}]);
//# sourceMappingURL=21102.0ea3e393.chunk.js.map
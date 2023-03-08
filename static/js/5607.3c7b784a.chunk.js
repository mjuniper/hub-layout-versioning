"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[5607],{66848:function(t,e,n){n.d(e,{f:function(){return f},u:function(){return l}});var i=n(74165),r=n(15861),a=n(48103),s=n(16529),c=n(29690),u=n(63326),o=n(35137);function p(){var t=(0,a.g)();return t.push({objectKey:"status",modelKey:"data.status"}),t.push({objectKey:"catalog",modelKey:"data.catalog"}),t.push({objectKey:"permissions",modelKey:"data.permissions"}),t.push({objectKey:"capabilities",modelKey:"data.settings.capabilities"}),t.push({objectKey:"contacts",modelKey:"data.contacts"}),t.push({objectKey:"timeline",modelKey:"data.timeline"}),t}function d(t,e,n){var i,r;n.authentication&&(r=n.authentication.token);return e.thumbnailUrl=(0,c.a)(t.item,n,r),e.createdDate=new Date(t.item.created),e.createdDateSource="item.created",e.updatedDate=new Date(t.item.modified),e.updatedDateSource="item.modified",e.capabilities=(0,a.p)((null===(i=t.data.settings)||void 0===i?void 0:i.capabilities)||{},s.c),e}function l(t,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)((0,i.Z)().mark((function t(e,n){var r,s,c,u,o;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.b)({slug:e.slug,existingId:e.id},n);case 2:return e.slug=t.sent,t.next=5,(0,a.c)(e.id,n);case 5:return r=t.sent,s=new a.P(p()),c=s.objectToModel(e,r),t.next=10,(0,a.d)(c,n);case 10:return u=t.sent,o=s.modelToObject(u,e),o=d(r,o,n),t.abrupt("return",o);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,e){return((0,u.i)(t)?(0,o.g)(t,e):(0,a.a)(t,e)).then((function(t){return t?function(t,e){return m.apply(this,arguments)}(t,e):null}))}function m(){return(m=(0,r.Z)((0,i.Z)().mark((function t(e,n){var r,s,c;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.f)(e,n);case 2:return r=t.sent,s=new a.P(p()),c=s.modelToObject(r,{}),t.abrupt("return",d(r,c,n));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},16529:function(t,e,n){n.d(e,{I:function(){return s},a:function(){return a},b:function(){return r},c:function(){return i}});var i={overview:!0,details:!0,settings:!0},r=[{entity:"initiative",capability:"overview",permissions:["hub:initiative:view"]},{entity:"initiative",capability:"details",permissions:["hub:initiative:edit"]},{entity:"initiative",capability:"settings",permissions:["hub:initiative:edit"]}],a=["hub:initiative:create","hub:initiative:delete","hub:initiative:edit","hub:initiative:view"],s=[{permission:"hub:initiative:create",subsystems:["projects"],authenticated:!0,privileges:["portal:user:createItem"],licenses:["hub-premium"]},{permission:"hub:initiative:view",subsystems:["projects"],authenticated:!1,licenses:["hub-premium"]},{permission:"hub:initiative:edit",authenticated:!0,subsystems:["projects"],entityEdit:!0,licenses:["hub-premium"]},{permission:"hub:initiative:delete",authenticated:!0,subsystems:["projects"],entityOwner:!0,licenses:["hub-premium"]}]},5607:function(t,e,n){n.r(e),n.d(e,{arcgis_hub_entity_metadata:function(){return d}});var i=n(74165),r=n(15861),a=n(15671),s=n(43144),c=n(5692),u=n(13129),o=n(51225),p=n(84907),d=(n(7597),n(66848),n(48103),n(25212),n(17684),n(1319),n(67450),n(58669),n(72528),n(35137),n(29398),n(54805),n(27529),n(16529),n(5760),n(76880),n(60415),n(39318),n(47268),n(16063),n(44288),n(8402),function(){function t(e){(0,a.Z)(this,t),(0,c.r)(this,e)}return(0,s.Z)(t,[{key:"componentWillLoad",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.i.loadIntlForComponent(this.element);case 2:return this.intl=t.sent,t.next=5,this.fetchEntity();case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchEntity",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var e;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=this.entity)||!this.identifier){t.next=9;break}if(this.isLoading=!0,t.t0=this.context,!t.t0){t.next=8;break}return t.next=7,(0,o.f)(this.type,this.identifier,this.context);case 7:t.t0=t.sent;case 8:e=t.t0;case 9:this.isLoading=!this.context,this._entity=e;case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"formatDate",value:function(t){return this.intl.formatDate(t,{month:"short",day:"numeric",year:"numeric"})}},{key:"accessMetadata",get:function(){var t,e=this._entity.access;switch(e){case"public":t="globe";break;case"org":t="organization";break;case"shared":t="users";break;case"private":t="user"}var n=this.intl.t("access.description.".concat(e,".default")),i=this.type?this.type:(0,p.g)(this._entity);return{icon:t,title:this.intl.t("access.label.".concat(e)),description:this.intl.t("access.description.".concat(e,".").concat(i),void 0,{fallback:n})}}},{key:"publishedMetadata",get:function(){return{icon:"calendar",title:this.formatDate(this._entity.createdDate),description:this.intl.t("published")}}},{key:"updatedMetadata",get:function(){return{icon:"clock-forward",title:this.formatDate(this._entity.updatedDate),description:this.intl.t("dateUpdated")}}},{key:"metadata",get:function(){return[this.accessMetadata,this.publishedMetadata,this.updatedMetadata]}},{key:"renderMetadata",value:function(t){return(0,c.h)("calcite-block",{description:t.description,heading:t.title},(0,c.h)("calcite-icon",{icon:t.icon,scale:"l",slot:"icon"}))}},{key:"render",value:function(){var t=this;return this.isLoading?(0,c.h)("arcgis-skeleton-loader",{active:!0,class:"workspace__loader",rows:3,"show-heading":"true"}):(0,c.h)(c.H,{"data-element":"entity-metadata"},this.metadata.map((function(e){return t.renderMetadata(e)})))}},{key:"element",get:function(){return(0,c.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}},{key:"watchers",get:function(){return{context:["fetchEntity"]}}}]),t}());d.style=":host{display:block}calcite-block{border-block-end-width:0px;margin-bottom:-1rem}"},5760:function(t,e,n){n.d(e,{e:function(){return w},f:function(){return b}});var i=n(93433),r=n(74165),a=n(15861),s=n(76880),c=n(48103),u=n(60415),o=n(44288),p=n(12969),d=n(13115),l=n(29690),h=n(28183),f=n(63326),m=n(35137),y=n(8402);function b(t,e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function t(e,n){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=(0,f.i)(e)?(0,m.g)(e,n):(0,c.a)(e,n),t.abrupt("return",i.then((function(t){return t?g(t,n):null})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)((0,r.Z)().mark((function t(e,n){var i,a,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.f)(e,n);case 2:return i=t.sent,t.next=5,(0,c.l)(e,c.E,n);case 5:return i.resources=t.sent,a=new c.P((0,c.h)()),s=a.modelToObject(i,{}),t.abrupt("return",(0,c.k)(i,s,n));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e,n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function t(e,n,a){var c,f,m,b;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c={access:e.access,id:e.id,type:e.type,name:e.title,owner:e.owner,typeKeywords:e.typeKeywords,tags:e.tags,categories:e.categories,summary:e.snippet||e.description,createdDate:new Date(e.created),createdDateSource:"item.created",updatedDate:new Date(e.modified),updatedDateSource:"item.modified",family:(0,s.g)(e.type),links:{self:"not-implemented",siteRelative:"not-implemented",thumbnail:"not-implemented"}},n=[].concat([],(0,i.Z)(n)).filter(p.u),f=n.map(o.p),m=(0,y.m)("enrichment",f).filter(p.u),b={},!m.length){t.next=10;break}return t.next=9,(0,u.f)(e,m,a);case 9:b=t.sent;case 10:return f.forEach((function(t){c[t.prop]=(0,d.g)(b,t.path)})),c.links.thumbnail=(0,l.a)(e,a),c.links.self=(0,h.g)(c.id,a),c.links.siteRelative=(0,s.m)(c.type,c.id,e.typeKeywords),t.abrupt("return",c);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},51225:function(t,e,n){n.d(e,{f:function(){return u}});var i=n(74165),r=n(15861),a=n(66848),s=n(5760),c=n(44288);function u(t,e,n){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)((0,i.Z)().mark((function t(e,n,r){var u;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e,t.next="project"===t.t0?3:"site"===t.t0?7:"initiative"===t.t0?11:"page"===t.t0?15:16;break;case 3:return t.next=5,(0,s.f)(n,r.requestOptions);case 5:case 9:case 13:return u=t.sent,t.abrupt("break",16);case 7:return t.next=9,(0,c.f)(n,r.hubRequestOptions);case 11:return t.next=13,(0,a.f)(n,r.requestOptions);case 15:throw new Error("FetchPage not implemented");case 16:return t.abrupt("return",u);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},28183:function(t,e,n){n.d(e,{g:function(){return r}});var i=n(99502);function r(t,e){var n=(0,i.a)(e);return"".concat(n,"/home/item.html?id=").concat(t)}},84907:function(t,e,n){function i(t){var e;switch(t.type){case"Hub Site Application":case"Site Application":e="site";break;case"Hub Page":case"Site Page":e="page";break;case"Hub Project":e="project";break;case"Hub Initiative":e="initiative"}return e}n.d(e,{g:function(){return i}})}}]);
//# sourceMappingURL=5607.3c7b784a.chunk.js.map
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[84723],{45704:function(t,e,n){n.d(e,{g:function(){return i}});var r=n(84744);function i(t){var e=t&&t.hubApiUrl;return e||function(t){var e;return t.match(/(qaext|\.mapsqa)\.arcgis.com/)?e="https://hubqa.arcgis.com":t.match(/(devext|\.mapsdevext)\.arcgis.com/)?e="https://hubdev.arcgis.com":t.match(/(www|\.maps)\.arcgis.com/)&&(e="https://hub.arcgis.com"),e}((0,r.a)(t))}},66798:function(t,e,n){n.r(e),n.d(e,{arcgis_hub_catalog:function(){return Z}});var r=n(74165),i=n(93433),a=n(15671),s=n(43144),o=n(15861),c=n(72585),u=n(12868),l=n(85015),h=n(66287),p=n(25434),f=n(6200),g=n(59002),y=n(85822),v=n(62254),d=n(69207),m=n(47493);n(84371),n(9882),n(77843),n(41016),n(41817),n(91466),n(90251),n(80046),n(49799),n(77699),n(34601),n(21923),n(42016),n(34802),n(36106),n(21010),n(94062),n(88968),n(9618),n(25831),n(84354);function k(t){var e=(0,p.c)(t);return 1===(0,v.g)(e,"schemaVersion")||(e=function(t){if((0,v.g)(t,"schemaVersion")>1)return t;var e={schemaVersion:1,title:"Default Catalog",scopes:{item:{targetEntity:"item",filters:[]}},collections:[]},n=(0,v.g)(t,"groups"),r=[];return Array.isArray(n)&&n.length?r=n:"string"===typeof n&&(r=[n]),r.length&&e.scopes.item.filters.push({predicates:[{group:r}]}),e}(e)),e}function b(t,e){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)((0,r.Z)().mark((function t(e,n){var i,a,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.indexOf("http")){t.next=7;break}a=e,(a=(0,g.s)(a)).includes("#")||(a=a.split("/")[0]),i=(0,g.l)(a,n).then((function(t){var e=t.siteId;return(0,d.c)(e,n)})).then((function(t){return k(t.catalog||{})})),t.next=12;break;case 7:if(!(0,y.i)(e)){t.next=11;break}i=(0,d.c)(e,n).then((function(t){return k(t.catalog||{})})),t.next=12;break;case 11:throw new h.H("Catalog.create","Identifier must be a url, guid");case 12:return t.next=14,i;case 14:return s=t.sent,t.abrupt("return",s);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=function(){function t(e,n){(0,a.Z)(this,t),this._collection=e,this._context=n}return(0,s.Z)(t,[{key:"toJson",value:function(){return(0,p.c)(this._collection)}},{key:"label",get:function(){return this._collection.label}},{key:"key",get:function(){return this._collection.key}},{key:"include",get:function(){return this._collection.include||[]}},{key:"scope",get:function(){return this._collection.scope}},{key:"sortField",get:function(){return this._collection.sortField||"title"}},{key:"sortDirection",get:function(){return this._collection.sortDirection||"asc"}},{key:"targetEntity",get:function(){return this._collection.targetEntity}},{key:"search",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n,a,s,o=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},(a="string"===typeof e?{targetEntity:this._collection.targetEntity,filters:[{predicates:[{term:e}]}]}:e).filters=[].concat((0,i.Z)(a.filters),(0,i.Z)(this.scope.filters)),(s=(0,p.c)(n)).requestOptions=this._context.hubRequestOptions,s.sortField=n.sortField||this.sortField,s.sortOrder=n.sortOrder||this.sortDirection,s.include=n.include||this.include,t.abrupt("return",(0,f.h)(a,s));case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}],[{key:"fromJson",value:function(e,n){return new t(e,n)}}]),t}(),C=function(){function t(e,n){(0,a.Z)(this,t),this._containsCache={},this._catalog=e,this._context=n}return(0,s.Z)(t,[{key:"toJson",value:function(){return(0,p.c)(this._catalog)}},{key:"schemaVersion",get:function(){return this._catalog.schemaVersion}},{key:"title",get:function(){return this._catalog.title},set:function(t){this._catalog.title=t}},{key:"scopes",get:function(){return this._catalog.scopes}},{key:"availableScopes",get:function(){return Object.keys(this.scopes)}},{key:"getScope",value:function(t){return this._catalog.scopes[t]}},{key:"setScope",value:function(t,e){this._catalog.scopes[t]=e}},{key:"collections",get:function(){return this._catalog.collections||[]}},{key:"collectionNames",get:function(){return(0,m.m)("key",this.collections)}},{key:"getCollection",value:function(t){var e=this.collections.find((function(e){return e.key===t}));if(e){var n=(0,p.c)(e),r=this.getScope(n.scope.targetEntity);return(null===r||void 0===r?void 0:r.filters)&&(n.scope.filters=[].concat((0,i.Z)(n.scope.filters),(0,i.Z)(r.filters))),x.fromJson(n,this._context)}throw new h.H("getCollection",'Collection "'.concat(t,'" is not present in the Catalog'))}},{key:"searchItems",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n||(n=this.getDefaultSearchOptions("item")),this.getScope("item")){t.next=7;break}return(i=this.getEmptyResult()).messages=[{code:"missingScope",message:"Catalog does not have a scope for items",data:{scope:"item"}}],t.abrupt("return",Promise.resolve(i));case 7:return n.targetEntity="item",t.abrupt("return",this.search(e,n));case 9:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"contains",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){var i,a,s,o,c,u,l,h=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=Date.now(),a=this._catalog,!this._containsCache[e]){t.next=8;break}return(s=(0,p.c)(this._containsCache[e])).duration=Date.now()-i,t.abrupt("return",Promise.resolve(s));case 8:if(o={identifier:e,isContained:!1},c={},(0,y.i)(e)?c.id=e:c.typekeywords="slug|".concat(e),u=[],!n.entityType){t.next=22;break}if(!this.scopes[n.entityType]){t.next=17;break}u.push({targetEntity:n.entityType,filters:[{predicates:[c]}]}),t.next=20;break;case 17:return o.duration=Date.now()-i,this._containsCache[e]=o,t.abrupt("return",Promise.resolve(o));case 20:t.next=23;break;case 22:Object.keys(a.scopes).forEach((function(t){u.push({targetEntity:t,filters:[{predicates:[c]}]})}));case 23:return t.next=25,Promise.all(u.map((function(t){return h.search(t,{targetEntity:t.targetEntity,num:10})})));case 25:return l=t.sent,o.isContained=l.reduce((function(t,e){return e.results.length&&(t=!!c.id||e.results.reduce((function(t,e){return e.typeKeywords.includes(c.typekeywords)&&(t=!0),t}),!1)),t}),!1),o.duration=Date.now()-i,this._containsCache[e]=o,t.abrupt("return",o);case 30:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"searchGroups",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n||(n=this.getDefaultSearchOptions("group")),this.getScope("group")){t.next=7;break}return(i=this.getEmptyResult()).messages=[{code:"missingScope",message:"Catalog does not have a scope for groups",data:{scope:"group"}}],t.abrupt("return",Promise.resolve(i));case 7:return n.targetEntity="group",t.abrupt("return",this.search(e,n));case 9:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"searchUsers",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n,i,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>1&&void 0!==a[1]?a[1]:{},this.getScope("user")){t.next=7;break}return(i=this.getEmptyResult()).messages=[{code:"missingScope",message:"Catalog does not have a scope for user",data:{scope:"user"}}],t.abrupt("return",Promise.resolve(i));case 7:return n.targetEntity="user",t.abrupt("return",this.search(e,n));case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"searchCollections",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n,i,a,s,o,c,u,l=this,h=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:{},i={targetEntity:"item",filters:[{predicates:[{term:e}]}]},a=[],s=this.collectionNames.map((function(t){var e=l.getCollection(t);return a.push(t),i.targetEntity=e.targetEntity,e.search(i,n)})),t.next=6,Promise.all(s);case 6:for(o=t.sent,c={},u=0;u<a.length;u++)c[a[u]]=o[u];return t.abrupt("return",c);case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"searchScopes",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n,i,a,s,o,c,u,l=this,h=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:{},i={targetEntity:"item",filters:[{predicates:[{term:e}]}]},a=[],s=this.availableScopes.map((function(t){a.push(t);var e=(0,p.c)(i),r=(0,p.c)(n);return e.targetEntity=t,r.targetEntity=t,l.search(e,r)})),t.next=6,Promise.all(s);case 6:for(o=t.sent,c={},u=0;u<a.length;u++)c[a[u]]=o[u];return t.abrupt("return",c);case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"search",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n){var a,s,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.targetEntity,(s="string"===typeof e?{targetEntity:a,filters:[{predicates:[{term:e}]}]}:(0,p.c)(e)).filters=[].concat((0,i.Z)(s.filters),(0,i.Z)(this.getScope(a).filters)),delete(o=(0,p.c)(n)).authentication,o.requestOptions=this._context.hubRequestOptions,t.abrupt("return",(0,f.h)(s,o));case 7:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"getEmptyResult",value:function(){return{results:[],total:0,hasNext:!1,next:null}}},{key:"getDefaultSearchOptions",value:function(t){return{targetEntity:t,num:10,start:1,requestOptions:this._context.hubRequestOptions}}}],[{key:"init",value:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,i){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=5;break}return e.next=3,l.A.create();case 3:a=e.sent,i=a.context;case 5:return e.next=7,b(n,i.hubRequestOptions);case 7:return s=e.sent,e.abrupt("return",new t(s,i));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"fromJson",value:function(e,n){return new t(k(e),n)}}]),t}(),Z=function(){function t(e){(0,a.Z)(this,t),(0,c.r)(this,e),this.layout="list",this.accordionOpen=!0,this._catalogs=[]}return(0,s.Z)(t,[{key:"componentWillLoad",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){var e,n=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.i.loadIntlForComponent(this.element);case 2:if(this.intl=t.sent,this.catalogs){t.next=7;break}console.error("<arcgis-hub-catalog> component requires one or more catalogs be provided"),t.next=13;break;case 7:return e=this.catalogs.reduce((function(t,e){var r;return"string"===typeof e?t.push(C.init(e,n.context)):(null===(r=e.collections)||void 0===r?void 0:r.length)?t.push(C.fromJson(e,n.context)):console.error("Catalog ".concat(e.title," will not be displayed because it does not have any collections.")),t}),[]),t.next=10,Promise.all(e);case 10:this._catalogs=t.sent,this.activeCatalog=this._catalogs[0],this.activeCollection=this.activeCatalog.getCollection(this.activeCatalog.collections[0].key);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleCalciteRadioButtonGroupChange",value:function(t){var e=(0,p.g)(this._catalogs,"title",t.detail);e&&(this.activeCatalog=e,this.activeCollection=this.activeCatalog.getCollection(this.activeCatalog.collections[0].key))}},{key:"handleCalciteTabChange",value:function(t){this.activeCollection=this.activeCatalog.getCollection(t.detail.tab)}},{key:"renderCatalogFacet",value:function(){return(0,c.h)("calcite-accordion-item",{expanded:this.accordionOpen,heading:this.intl.t("source")},(0,c.h)("calcite-radio-button-group",{layout:"vertical",name:"catalog-group"},this._catalogs.map((function(t,e){return(0,c.h)("calcite-label",{key:t.title,layout:"inline"},(0,c.h)("calcite-radio-button",{checked:0===e,id:t.title,name:t.title,value:t.title}),(0,c.h)("span",{class:"catalog"},t.title))}))))}},{key:"renderCollections",value:function(t){return(0,c.h)("calcite-tab-nav",{slot:"tab-nav"},t.map((function(t){return(0,c.h)("calcite-tab-title",{key:t.key,tab:t.key},t.label)})))}},{key:"render",value:function(){var t,e=(null===(t=this.activeCatalog)||void 0===t?void 0:t.collections.length)>1,n=this._catalogs.length>1;return(0,c.h)(c.H,{"data-element":"catalog"},(0,c.h)("arcgis-hub-gallery",{additionalFacet:n&&this.renderCatalogFacet(),collection:this.activeCollection.toJson(),context:this.context,facets:this.facets,gallerySelection:this.gallerySelection,layout:this.layout,selectable:this.selectable,showBackToTopBtn:!0,showChips:!0,showFacets:!0,showMoreResultsBtn:!0,showResultsCount:!0,showSearch:!0,showSelection:this.showSelection,showSort:!0,showThumbnail:this.showThumbnail},(0,c.h)("calcite-tabs",{layout:"center",scale:"l",slot:"collection-select"},e&&this.renderCollections(this.activeCatalog.collections))))}},{key:"element",get:function(){return(0,c.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}}]),t}();Z.style=":host{display:block}calcite-radio-group{margin-bottom:1rem}"}}]);
//# sourceMappingURL=84723.2caab371.chunk.js.map
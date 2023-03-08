"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[59002],{59002:function(e,t,r){r.d(t,{a:function(){return v},b:function(){return j},e:function(){return A},f:function(){return C},l:function(){return E},p:function(){return g},s:function(){return b}});var i=r(93433),n=r(74165),a=r(15861),s=r(21010),o=r(66287),u=r(94062),c=r(25434),p=r(62254),d=r(82842),l=r(85822),m=r(69207),f=r(47493),h=r(67258),y=r(91466);function b(e){return(e=e.toLowerCase()).includes("//")&&(e=e.split("//")[1]),e}function g(e){var t=e.split(" AS "),r=t[0],i=t[1]||r.split(".").reverse()[0];return{enrichment:r.split(".")[0],path:r,prop:i}}function v(e,t){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,l.i)(t)?(0,m.g)(t,r):(0,o.j)(t,r),e.abrupt("return",i.then((function(e){return e?k(e,r):null})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)((0,n.Z)().mark((function e(t,r){var i,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.k)(t,r);case 2:return i=e.sent,e.next=5,(0,o.l)(t,o.E,r);case 5:return i.resources=e.sent,a=new o.P((0,o.b)()),s=a.modelToObject(i,{}),e.abrupt("return",(0,o.e)(i,s,r));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,r){return D.apply(this,arguments)}function D(){return(D=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var o,l,m,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o={access:t.access,id:t.id,type:t.type,name:t.title,owner:t.owner,typeKeywords:t.typeKeywords,tags:t.tags,categories:t.categories,summary:t.snippet||t.description,createdDate:new Date(t.created),createdDateSource:"item.created",updatedDate:new Date(t.modified),updatedDateSource:"item.modified",family:(0,s.g)(t.type),links:{self:"not-implemented",siteRelative:"not-implemented",thumbnail:"not-implemented"}},r=[].concat([],(0,i.Z)(r)).filter(c.u),l=r.map(g),m=(0,f.m)("enrichment",l).filter(c.u),h={},!m.length){e.next=10;break}return e.next=9,(0,u.f)(t,m,a);case 9:h=e.sent;case 10:return l.forEach((function(e){o[e.prop]=(0,p.g)(h,e.path)})),o.links.thumbnail=(0,d.a)(t,a),o.links.self=(0,s.n)(o.id,a),o.links.siteRelative=(0,s.m)(o.type,o.id,t.typeKeywords),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)){e.next=4;break}return e.abrupt("return",t.json());case 4:return e.abrupt("return",t.json().then((function(e){if(e.error)throw new Error("".concat(e.error.title," :: ").concat(e.error.detail," :: ").concat(t.status));throw new Error("Got ".concat(t.status," ").concat(t.statusText))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){if(t.isPortal)return function(e,t){var r=e;e.indexOf("#/")>-1&&(r=e.split("#/")[1]);var i="hubsubdomain|".concat(r),n=Object.assign({q:"typekeywords: ".concat(i)},t);return(0,y.s)(n).then((function(e){return e.results.filter((function(e){return(0,s.i)(e.typeKeywords,i)}))[0]})).then((function(e){if(!e)throw new Error("site not found");return{hostname:e.url,siteId:e.id}}))}(e,t);var r,i="".concat((r=t.hubApiUrl,"".concat(r||"https://hub.arcgis.com","/api/v3/domains")),"/").concat(e),n=function(e){var t={},r=(0,p.g)(e,"authentication.token");return r&&(t.Authorization=r),t}(t);return fetch(i,{method:"GET",headers:n,mode:"cors"}).then(Z)}function I(e){if((0,p.g)(e,"item.properties.schemaVersion")>=1.5)return e;var t=(0,c.c)(e),r=t.data.values.dcatConfig;return t.data.feeds={},r&&(t.data.feeds.dcatUS11=function(e){var t=JSON.stringify(e);return Object.keys(S).forEach((function(e){var r=S[e];t=t.split(e).join(r)})),JSON.parse(t)}(r)),t.item.properties.schemaVersion=1.5,t}var S={"{{default.name}}":"{{name}}","{{default.description}}":"{{description}}","{{item.tags}}":"{{tags}}","{{item.created:toISO}}":"{{created:toISO}}","{{item.modified:toISO}}":"{{modified:toISO}}","{{default.source.source}}":"{{source}}","{{item.owner}}":"{{owner}}","{{org.portalProperties.links.contactUs.url}}":"{{orgContactEmail}}","{{org.name}}":"{{orgName}}","{{item.categories}}":"{{categories}}","{{item.licenseInfo}}":"{{licenseInfo}}","{{item.modified}}":"{{modified}}","{{enrichments.categories}}":"{{categories}}","{{default.id}}":"{{id}}","{{item.licenseInfo || No License}}":"{{licenseInfo || No License}}","{{org.portalProperties.links.contactUs.url || mailto:data@tempe.gov}}":"{{orgContactEmail || mailto:data@tempe.gov}}","{{default.description || No Description}}":"{{description || No Description}}","{{item.id}}":"{{id}}"};function O(e){return 1.5===(0,p.g)(e,"item.properties.schemaVersion")?e:e=I(e=function(e){if((0,p.g)(e,"item.properties.schemaVersion")>=1.4)return e;var t=(0,c.c)(e),r=(0,p.g)(t,"data.values.gacode");return t.data.values.telemetry={consentNotice:{isTheme:!0,consentText:"",policyURL:""},customAnalytics:{ga:{customerTracker:{enabled:Boolean(r),id:r}}}},function(e,t){if("object"===typeof e&&null!==e&&"string"===typeof t){for(var r=t.split("."),i=0;i<r.length-1;i++){if(!e.hasOwnProperty(r[i]))return;e=e[r[i]]}delete e[r[r.length-1]]}}(t,"data.values.gacode"),(0,h.s)("item.properties.schemaVersion",1.4,t),t}(e=function(e){if((0,p.g)(e,"item.properties.schemaVersion")>=1.3)return e;var t=(0,c.c)(e),r=(0,p.g)(t,"data.catalog.groups")||[];return t.data.catalog.groups=r.filter(l.i),t.item.properties.schemaVersion=1.3,t}(e=function(e){if((0,p.g)(e,"item.properties.schemaVersion")>=1.2)return e;var t=(0,c.c)(e),r=(0,p.g)(t,"data.catalog")||{};return(0,p.g)(t,"data.values.groups")&&(r.groups=(0,c.c)(t.data.values.groups),delete t.data.values.groups),t.data.catalog=r,t.item.properties.schemaVersion=1.2,t}(e=function(e){if((0,p.g)(e,"item.properties.schemaVersion")>=1.1)return e;var t=(0,c.c)(e);return["subdomain","defaultHostname","internalUrl","customHostname","externalUrl"].forEach((function(e){t.data.values[e]&&"string"===typeof t.data.values[e]&&(t.data.values[e]=t.data.values[e].toLowerCase())})),t.item.properties.schemaVersion=1.1,t}(e=function(e){if((0,p.g)(e,"item.properties.schemaVersion")>=1)return e;var t=(0,c.c)(e);if(["groupId","title"].forEach((function(e){delete t.data.values[e]})),t.item.properties||(t.item.properties={}),t.item.properties.schemaVersion=1,t.data.values.groups&&Array.isArray(t.data.values.groups)){var r=t.data.values.groups.map((function(e){return"object"===typeof e?e.id:e})).filter((function(e){return!!e}));t.data.values.groups=r}return t}(e))))))}function V(e,t){return(0,o.f)(e,t).then(O)}function U(e,t){var r;if((0,l.i)(e))r=V(e,t);else{var i=e;r=E(i=(i=b(i)).split("/")[0],t).then((function(e){return V(e.siteId,t)}))}return r}function C(e,t){return N.apply(this,arguments)}function N(){return(N=(0,a.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t,r);case 2:return i=e.sent,e.abrupt("return",T(i,r));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){var r=function(e){var t=(0,c.c)(e);return t.data.permissions=t.data.permissions||[],[{prop:"item.properties.contentGroupId",type:"group",permissions:["hub:project:create"]},{prop:"item.owner",type:"user",permissions:["hub:site:delete"]}].forEach((function(e){var r=(0,p.g)(t,e.prop);r&&e.permissions.forEach((function(i){t.data.permissions.find((function(e){return e.permission===i&&e.collaborationId===r}))||t.data.permissions.push({permission:i,collaborationType:e.type,collaborationId:r})}))})),t}(e);return function(e,t,r){var i,n;return r.authentication&&(n=r.authentication.token),t.thumbnailUrl=(0,d.a)(e.item,r,n),t.createdDate=new Date(e.item.created),t.createdDateSource="item.created",t.updatedDate=new Date(e.item.modified),t.updatedDateSource="item.modified",t.capabilities=(0,o.p)((null===(i=e.data.settings)||void 0===i?void 0:i.capabilities)||{},f.c),t}(e,new o.P(function(){var e=(0,o.i)();return e.push({objectKey:"catalog",modelKey:"data.catalog"}),e.push({objectKey:"feeds",modelKey:"data.feeds"}),e.push({objectKey:"permissions",modelKey:"data.permissions"}),e.push({objectKey:"capabilities",modelKey:"data.capabilities"}),["pages","theme","subdomain","defaultHostname","customHostname","clientId","defaultExtent","map","telemetry","headerSass","headContent","layout"].forEach((function(t){e.push({objectKey:t,modelKey:"data.values.".concat(t)})})),e.push({objectKey:"slug",modelKey:"item.properties.slug"}),e.push({objectKey:"classicCapabilities",modelKey:"data.values.capabilities"}),e.push({objectKey:"capabilities",modelKey:"data.settings.capabilities"}),e.push({objectKey:"orgUrlKey",modelKey:"item.properties.orgUrlKey"}),e.push({objectKey:"name",modelKey:"item.title"}),e}()).modelToObject(r,{}),t)}function A(e,t,r){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)((0,n.Z)().mark((function e(t,r,a){var o,l,m,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o={access:t.access,id:t.id,type:t.type,name:t.title,owner:t.owner,typeKeywords:t.typeKeywords,tags:t.tags,categories:t.categories,summary:t.snippet||t.description,createdDate:new Date(t.created),createdDateSource:"item.created",updatedDate:new Date(t.modified),updatedDateSource:"item.modified",family:(0,s.g)(t.type),links:{self:"not-implemented",siteRelative:"not-implemented",thumbnail:"not-implemented"}},r=[].concat([],(0,i.Z)(r)).filter(c.u),l=r.map(g),m=(0,f.m)("enrichment",l).filter(c.u),h={},!m.length){e.next=10;break}return e.next=9,(0,u.f)(t,m,a);case 9:h=e.sent;case 10:return l.forEach((function(e){o[e.prop]=(0,p.g)(h,e.path)})),o.links.thumbnail=(0,d.a)(t,a),o.links.self=t.url,o.links.siteRelative=(0,s.m)(o.type,o.id,t.typeKeywords),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},47493:function(e,t,r){function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map((function(t){return t[e]}))}r.d(t,{S:function(){return o},a:function(){return s},b:function(){return a},c:function(){return n},m:function(){return i}});var n={overview:!0,details:!0,settings:!0},a=[{entity:"site",capability:"overview",permissions:["hub:site:view"]},{entity:"site",capability:"details",permissions:["hub:site:edit"]},{entity:"site",capability:"settings",permissions:["hub:site:edit"]}],s=["hub:site:create","hub:site:delete","hub:site:edit","hub:site:view"],o=[{permission:"hub:site:create",subsystems:["sites"],authenticated:!0,privileges:["portal:user:createItem"],licenses:["hub-basic","hub-premium","enterprise-sites"]},{permission:"hub:site:view",subsystems:["sites"],authenticated:!1,licenses:["hub-basic","hub-premium","enterprise-sites"]},{permission:"hub:site:delete",subsystems:["sites"],authenticated:!0,licenses:["hub-basic","hub-premium","enterprise-sites"],entityOwner:!0},{permission:"hub:site:edit",entityEdit:!0,subsystems:["sites"],authenticated:!0,licenses:["hub-basic","hub-premium","enterprise-sites"]}]}}]);
//# sourceMappingURL=59002.e1d6371b.chunk.js.map
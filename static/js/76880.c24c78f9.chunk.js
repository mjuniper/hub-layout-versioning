"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[76880],{76880:function(e,t,a){a.d(t,{D:function(){return m},a:function(){return F},b:function(){return s},c:function(){return g},d:function(){return T},e:function(){return f},f:function(){return D},g:function(){return d},h:function(){return R},i:function(){return c},j:function(){return h},k:function(){return w},l:function(){return b},m:function(){return S},n:function(){return M},o:function(){return p},p:function(){return I}});var n=a(93433),r=a(58669),i=a(13115),o=a(36441);function c(e,t){return-1!==e.indexOf(t)}var u,l=function(e){if(e){var t=e.toLocaleLowerCase();return s[t]}},s={app:["Application","City Engine Web Scene","CityEngine Web Scene","Dashboard","Insights Page","Insights Workbook","Operation View","Web Mapping Application","StoryMap","Web Experience","Urban Model"],dataset:["CSV Collection","CSV","Feature Collection Template","Feature Collection","Feature Layer","Feature Service","File Geodatabase","GeoJSON","GeoJson","KML Collection","KML","Microsoft Excel","Raster Layer","Shapefile","Stream Service","Table"],document:["CAD Drawing","Document Link","Hub Page","Site Page","Image","iWork Keynote","iWork Numbers","iWork Pages","Microsoft Powerpoint","Microsoft Visio","Microsoft Word","Notebook","PDF","Pro Map","Report Template"],event:["Hub Event"],feedback:["Form","Quick Capture Project"],initiative:["Hub Initiative"],template:["Hub Initiative Template"],solution:["Solution"],map:["Image Collection","Image Service","Map Service Layer","Map Service","Scene Service","Scene Layer","Vector Tile Service","Web Map Service","Web Map Tile Service","Web Map","Web Scene","WFS","WMS","WMTS"],other:["360 VR Experience","AppBuilder Widget Package","Application Configuration","ArcPad Package","Code Attachment","Code Sample","Desktop Add In","Desktop Application Template","Desktop Application","Desktop Style","Explorer Add In","Explorer Layer","Geocoding Service","Geometry Service","Geoprocessing Package","Geoprocessing Sample","Geoprocessing Service","Layer File","Layer Package","Layer Template","Layer","Layout","Locator Package","Map Area","Map Document","Map Package","Map Service Definition","Map Template","Mobile Application","Mobile Map Package","Native Application","Network Analysis Service","Operations Dashboard Add In","Project Package","Project Template","Raster Function Template","Rule Package","Scene Package","Service Definition","SQLite Geodatabase","Style","Tile Package","Vector Tile Package","Workflow Manager Package"],site:["Hub Site Application","Site Application"]};function d(e){var t,a;switch(e.toLowerCase()){case"image service":t="dataset";break;case"feature service":case"raster layer":t="map";break;case"microsoft excel":t="document";break;case"cad drawing":case"feature collection template":case"report template":t="content";break;case"hub project":t="project";break;default:a=function(e){if(e){var t=e.toLocaleLowerCase();return Object.keys(s).find((function(e){return s[e].some((function(e){return e.toLocaleLowerCase()===t}))}))}}(e),t={other:"content",solution:"template"}[a]||a}return t}function p(e){var t;switch(e.toLowerCase()){case"content":t=(t=l("other")).concat(["CAD Drawing","Feature Collection Template","Report Template"]);break;case"template":t=[].concat((0,n.Z)(l("template")),(0,n.Z)(l("solution")));break;case"dataset":t=(t=l(e.toLowerCase()).filter((function(e){return"Feature Collection Template"!==e&&"Feature Service"!==e&&"Raster Layer"!==e&&"Microsoft Excel"!==e}))).concat("Image Service");break;case"map":t=(t=l(e.toLowerCase()).filter((function(e){return"Image Service"!==e}))).concat(["Feature Service","Raster Layer"]);break;case"document":t=(t=l(e.toLowerCase()).filter((function(e){return"CAD Drawing"!==e&&"Report Template"!==e}))).concat("Microsoft Excel");break;case"project":t=["Hub Project"];break;default:t=l(e.toLowerCase())}return t}!function(e){e.CitationContact="metadata.resource.citation.contact",e.ResourceContact="metadata.resource.contact",e.MetadataContact="metadata.contact",e.ItemOwner="item.owner",e.None="none"}(u||(u={}));var m,f=function(e){var t,a=e.extent,n=(0,r.i)(a),i=(null===(t=e.properties)||void 0===t?void 0:t.boundary)||(n?"item":void 0),o={geometry:null,provenance:i};if("item"===i&&n){var c=(0,r.b)(a),u=(0,r.g)(c);o.center=[u.x,u.y],o.geometry=Object.assign(Object.assign({},(0,r.e)(c)),{type:"polygon"}),o.spatialReference=o.geometry.spatialReference}return o},v=function(e){return e&&e.isPortal},g=function(e,t){return!!e&&"public"===e.access&&!v(t)},b=function(e,t){return!v(t)&&"public"===e.access&&"CSV"===e.type&&e.size<=5e6},S=function(e,t,a){var n=C(e,t,a)||y(e,t,a);if(!n){var r=d(e),i="/content";"feedback"===r?i="/feedback/surveys":k(e,a)?i="/pages":["app","dataset","document","map","template","project"].indexOf(r)>-1&&(i="/".concat(r,"s")),n="".concat(i,"/").concat(t)}return n},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return["Hub Page","Site Page"].includes(e)||t.includes("hubPage")},C=function(e,t,a){var n;return"Solution"===e?n=(null===a||void 0===a?void 0:a.indexOf("Deployed"))>-1?"/content/".concat(t,"/about"):"/templates/".concat(t,"/about"):"Web Mapping Application"===e&&(null===a||void 0===a?void 0:a.indexOf("hubSolutionTemplate"))>-1&&(n="/templates/".concat(t,"/about")),n},y=function(e,t,a){if("Hub Initiative"===e&&(null===a||void 0===a?void 0:a.indexOf("hubInitiativeTemplate"))>-1||"Hub Initiative Template"===e)return"/initiatives/templates/".concat(t,"/about")};function M(e){return{updateFrequency:"metadata.dataIdInfo.resMaint.maintFreq.MaintFreqCd.@_value",reviseDate:"metadata.dataIdInfo.idCitation.date.reviseDate",pubDate:"metadata.dataIdInfo.idCitation.date.pubDate",createDate:"metadata.dataIdInfo.idCitation.date.createDate",metadataUpdateFrequency:"metadata.mdMaint.maintFreq.MaintFreqCd.@_value",metadataUpdatedDate:"metadata.mdDateSt"}[e]}function D(e,t){var a=M(t);return a&&(0,i.g)(e,a)}function I(e){var t,a;if(e="".concat(e),/^\d{4}$/.test(e))t=new Date(+e,0,1),a=m.Year;else if(/^\d{4}-\d{1,2}$/.test(e)){var n=e.split("-");t=new Date(+n[0],+n[1]-1,1),a=m.Month}else if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(e)){var r=e.split("-");t=new Date(+r[0],+r[1]-1,+r[2]),a=m.Day}else Number.isNaN(Date.parse(e))||(t=new Date(e),a=e.includes("T")?m.Time:m.Day);return t&&a&&{date:t,precision:a}}!function(e){e.Year="year",e.Month="month",e.Day="day",e.Time="time"}(m||(m={}));var h=function(e){var t=e.spatialReference;if(!t||"object"===typeof t)return t;var a=parseInt(t+"",10);return isNaN(a)?null:{wkid:a}},w=function(e,t,a){var n=L(t);return n&&n.map((function(t){return{name:t.orName,url:A(t,e,a),isDataSource:P(t,e)}}))},L=function(e){var t=[];return N((0,i.g)(e,"metadata.distInfo")||[]).forEach((function(e){N(e.distTranOps||[]).forEach((function(e){N(e.onLineSrc||[]).forEach((function(e){t.push(e)}))}))})),t.length?t:null},N=function(e){return Array.isArray(e)?e:[e]},P=function(e,t){var a=t.url&&(0,o.p)(t.url);return a&&e.linkage&&e.linkage.includes(a)},A=function(e,t,a){var n=e.linkage,r=(0,i.g)(a,"authentication.token");if(r&&P(e,t)){var o=new URL(e.linkage),c=new URLSearchParams(o.search);c.set("token",r),o.search=c.toString(),n=o.toString()}return n},T=function(e,t,a){var n=(0,r.i)(e.extent)?e.extent:void 0,o=(0,r.i)(null===t||void 0===t?void 0:t.coordinates)?t.coordinates:void 0,c=4326===(0,i.g)(a,"extent.spatialReference.wkid")?(0,r.a)(a.extent):void 0;return n||o||c},x=function(e,t){var a=(0,i.g)(e,t)||{},n=Array.isArray(a)?a[0]:a;return{individualName:n.rpIndName,organizationName:n.rpOrgName}},F=function(e,t){return e.orgId||(null===t||void 0===t?void 0:t.orgId)},R=function(e,t,a,n){var r={nameSource:u.None,organizationSource:u.None},o=x(t,"metadata.dataIdInfo.idCitation.citRespParty"),c=x(t,"metadata.dataIdInfo.idPoC"),l=x(t,"metadata.mdContact"),s=(0,i.g)(n,"fullName");o.individualName?(r.name=o.individualName,r.nameSource=u.CitationContact):c.individualName?(r.name=c.individualName,r.nameSource=u.ResourceContact):l.individualName?(r.name=l.individualName,r.nameSource=u.MetadataContact):s&&(r.name=s,r.username=n.username,r.nameSource=u.ItemOwner);var d=(0,i.g)(a,"name");return o.organizationName?(r.organization=o.organizationName,r.organizationSource=u.CitationContact):c.organizationName?(r.organization=c.organizationName,r.organizationSource=u.ResourceContact):l.organizationName?(r.organization=l.organizationName,r.organizationSource=u.MetadataContact):d&&(r.organization=d,r.orgId=F(e,n),r.organizationSource=u.ItemOwner),r.isExternal=r.organizationSource===u.None&&"public"!==e.access,r}},36441:function(e,t,a){a.d(t,{p:function(){return i}});var n=a(64369),r=new RegExp(/.+(?:map|feature|image)server/i);function i(e){var t=e.match(r);return t?t[0]:function(e){var t=e.split("?")[0];return(0,n.c)(t)}(e)}}}]);
//# sourceMappingURL=76880.c24c78f9.chunk.js.map
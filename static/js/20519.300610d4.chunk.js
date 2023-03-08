"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[20519],{20519:function(e,r,a){a.r(r),a.d(r,{populateOperationalLayers:function(){return v}});var t=a(1413),n=a(74165),i=a(37762),y=a(15861),u=a(80987),c=(a(93169),a(66978)),o=a(19610),L=a(98995);function l(e){return S(e,"notes")}function s(e){return S(e,"markup")}function p(e){return S(e,"route")}function S(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}var d=a(43139),f=a(21371);function v(e,r,a){return I.apply(this,arguments)}function I(){return I=(0,y.Z)((0,n.Z)().mark((function e(r,a,t){var y,u,o,L,l,s,p,S,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:y=[],u=(0,i.Z)(a);try{for(u.s();!(o=u.n()).done;)L=o.value,l=h(L,t),"GroupLayer"===L.layerType?y.push(O(l,L,t)):y.push(l)}catch(n){u.e(n)}finally{u.f()}return e.next=7,(0,c.as)(y);case 7:s=e.sent,p=(0,i.Z)(s);try{for(p.s();!(S=p.n()).done;)(d=S.value).value&&r.add(d.value)}catch(n){p.e(n)}finally{p.f()}case 10:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}var T={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},g={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},G={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},M={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},b={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};function h(e,r){return A.apply(this,arguments)}function A(){return(A=(0,y.Z)((0,n.Z)().mark((function e(r,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w,e.next=3,k(r,a);case 3:return e.t1=e.sent,e.t2=r,e.t3=a,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,r,a){return x.apply(this,arguments)}function x(){return(x=(0,y.Z)((0,n.Z)().mark((function e(r,a,t){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=new r).read(a,t.context),e.t0="group"===i.type&&W(a),!e.t0){e.next=6;break}return e.next=6,B(i,a,t.context);case 6:return e.next=8,(0,f.y)(i,t.context);case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,r){return Z.apply(this,arguments)}function Z(){return Z=(0,y.Z)((0,n.Z)().mark((function e(r,a){var t,i,y,u,c,S,f,v,I;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a.context,y=C(i),!(u=r.layerType||r.type)&&a&&a.defaultLayerType&&(u=a.defaultLayerType),c=y[u],S=c?o.T[c]:o.T.UnknownLayer,!F(r)){e.next=20;break}if(f=null===i||void 0===i?void 0:i.portal,!r.itemId){e.next=18;break}return v=new L.default({id:r.itemId,portal:f}),e.next=11,v.load();case 11:return e.next=13,(0,d.selectLayerClassPath)(v);case 13:if(e.t0=e.sent.className,e.t0){e.next=16;break}e.t0="UnknownLayer";case 16:I=e.t0,S=o.T[I];case 18:e.next=21;break;case 20:"ArcGISFeatureLayer"===u?l(r)||s(r)?S=o.T.MapNotesLayer:p(r)?S=o.T.RouteLayer:W(r)&&(S=o.T.GroupLayer):r.wmtsInfo&&r.wmtsInfo.url&&r.wmtsInfo.layerIdentifier?S=o.T.WMTSLayer:"WFS"===u&&"2.0.0"!==(null===(t=r.wfsInfo)||void 0===t?void 0:t.version)&&(S=o.T.UnsupportedLayer);case 21:return e.abrupt("return",S());case 22:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function W(e){var r,a,t;return"ArcGISFeatureLayer"===e.layerType&&!F(e)&&(null!==(r=null===(a=e.featureCollection)||void 0===a||null===(t=a.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)>1}function F(e){return"Feature Collection"===e.type}function C(e){var r;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":r=G;break;case"ground":r=g;break;default:r=T}else switch(e.layerContainerType){case"basemap":r=b;break;case"tables":r=m;break;default:r=M}return r}function O(e,r,a){return V.apply(this,arguments)}function V(){return V=(0,y.Z)((0,n.Z)().mark((function e(r,a,t){var i,y,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new u.Z,y=v(i,Array.isArray(a.layers)?a.layers:[],t),e.next=4,r;case 4:return c=e.sent,e.next=7,y;case 7:if("group"!==c.type){e.next=9;break}return e.abrupt("return",(c.layers.addMany(i),c));case 9:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function B(e,r,a){return D.apply(this,arguments)}function D(){return D=(0,y.Z)((0,n.Z)().mark((function e(r,a,i){var y,u,c,L,l,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=o.T.FeatureLayer,e.next=3,u();case 3:c=e.sent,L=a.featureCollection,l=null===L||void 0===L?void 0:L.showLegend,s=null===L||void 0===L||null===(y=L.layers)||void 0===y?void 0:y.map((function(e,n){var y,u,o=new c;o.read(e,i);var L=(0,t.Z)((0,t.Z)({},i),{},{ignoreDefaults:!0});return o.read({id:"".concat(r.id,"-sublayer-").concat(n),visibility:null===(y=null===(u=a.visibleLayers)||void 0===u?void 0:u.includes(n))||void 0===y||y},L),null!=l&&o.read({showLegend:l},L),o})),r.layers.addMany(null!==s&&void 0!==s?s:[]);case 8:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}}}]);
//# sourceMappingURL=20519.300610d4.chunk.js.map
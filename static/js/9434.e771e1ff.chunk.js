"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[9434],{41644:function(e,n,r){r.d(n,{Bg:function(){return t},sM:function(){return i}});r(93169);function t(e){}function i(e){return function(){return e}}},46671:function(e,n,r){r.d(n,{N:function(){return c}});var t=r(43144),i=r(15671),o=r(60136),l=r(92572),a=r(27366),s=r(49861),u=(r(25243),r(63780),r(69912)),c=function(e){var n=function(e){(0,o.Z)(r,e);var n=(0,l.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=n.apply(this,arguments)).customParameters=null,e}return(0,t.Z)(r)}(e);return(0,a._)([(0,s.Cb)({type:Object,json:{write:{overridePolicy:function(e){return{enabled:!!(e&&Object.keys(e).length>0)}}}}})],n.prototype,"customParameters",void 0),n=(0,a._)([(0,u.j)("esri.layers.mixins.CustomParametersMixin")],n)}},77748:function(e,n,r){r.d(n,{Z:function(){return j}});var t,i=r(15671),o=r(43144),l=r(60136),a=r(92572),s=r(27366),u=r(51508),c=r(43404),p=r(46784),f=r(84652),v=r(17842),d=r(49861),b=(r(25243),r(38511)),y=r(69912),w=r(31201),m=(r(63780),r(93253)),g=t=function(e){(0,l.Z)(r,e);var n=(0,a.Z)(r);function r(){var e;return(0,i.Z)(this,r),(e=n.apply(this,arguments)).expression=null,e.title=null,e.value=null,e}return(0,o.Z)(r,[{key:"readExpression",value:function(e,n){return n.value?(0,m.dI)(n.value):e}},{key:"writeExpression",value:function(e,n,r){null!=this.value&&(e=(0,m.dI)(this.value)),null!=e&&(n[r]=e)}},{key:"clone",value:function(){return new t({expression:this.expression,title:this.title,value:this.value})}}]),r}(p.wq);(0,s._)([(0,d.Cb)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],g.prototype,"expression",void 0),(0,s._)([(0,b.r)("expression",["expression","value"])],g.prototype,"readExpression",null),(0,s._)([(0,w.c)("expression")],g.prototype,"writeExpression",null),(0,s._)([(0,d.Cb)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"title",void 0),(0,s._)([(0,d.Cb)({json:{read:!1,write:!1}})],g.prototype,"value",void 0);var x,h=g=t=(0,s._)([(0,y.j)("esri.layers.support.LabelExpressionInfo")],g),S=r(37933),L=r(61574),E=r(192),P=new c.X({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function C(e,n,r){return{enabled:!(0,S.A2)(null===r||void 0===r?void 0:r.layer)}}function _(e){var n;return!e||"service"!==e.origin&&!("map-image"===(null===(n=e.layer)||void 0===n?void 0:n.type))}function I(e){var n,r;return!!function(e){return"map-image"===(null===e||void 0===e?void 0:e.type)}(e)&&!(null===(n=e.capabilities)||void 0===n||null===(r=n.exportMap)||void 0===r||!r.supportsArcadeExpressionForLabeling)}var Z=x=function(e){(0,l.Z)(r,e);var n=(0,a.Z)(r);function r(e){var t;return(0,i.Z)(this,r),(t=n.call(this,e)).type="label",t.name=null,t.allowOverrun=!1,t.deconflictionStrategy="static",t.labelExpression=null,t.labelExpressionInfo=null,t.labelPlacement=null,t.labelPosition="curved",t.maxScale=0,t.minScale=0,t.repeatLabel=!0,t.repeatLabelDistance=null,t.symbol=L.Rz,t.useCodedValues=void 0,t.where=null,t}return(0,o.Z)(r,[{key:"readLabelExpression",value:function(e,n){var r=n.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e}},{key:"writeLabelExpression",value:function(e,n,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,m.z7)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){var t=(0,m.el)(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}null!=e&&(n[r]=e)}},{key:"writeLabelExpressionInfo",value:function(e,n,r,t){if(null==e&&null!=this.labelExpression&&_(t))e=new h({expression:this.getLabelExpressionArcade()});else if(!e)return;var i=e.toJSON(t);i.expression&&(n[r]=i)}},{key:"writeMaxScale",value:function(e,n){(e||this.minScale)&&(n.maxScale=e)}},{key:"writeMinScale",value:function(e,n){(e||this.maxScale)&&(n.minScale=e)}},{key:"getLabelExpression",value:function(){return(0,m.hV)(this)}},{key:"getLabelExpressionArcade",value:function(){return(0,m.YI)(this)}},{key:"getLabelExpressionSingleField",value:function(){return(0,m.UO)(this)}},{key:"hash",value:function(){return JSON.stringify(this)}},{key:"clone",value:function(){return new x({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,f.d9)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,f.d9)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}}],[{key:"evaluateWhere",value:function(e,n){var r=function(e,n,r){switch(n){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;var t=e.split(" ");if(3===t.length)return r(n[t[0]],t[1],t[2]);if(7===t.length){var i=r(n[t[0]],t[1],t[2]),o=t[3],l=r(n[t[4]],t[5],t[6]);switch(o){case"AND":return i&&l;case"OR":return i||l}}return!1}catch(a){console.log("Error.: can't parse = "+e)}}}]),r}(p.wq);(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],Z.prototype,"name",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:C}}}}})],Z.prototype,"allowOverrun",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:C}}}}})],Z.prototype,"deconflictionStrategy",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:{overridePolicy:function(e,n,r){return this.labelExpressionInfo&&"service"===(null===r||void 0===r?void 0:r.origin)&&I(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],Z.prototype,"labelExpression",void 0),(0,s._)([(0,b.r)("labelExpression")],Z.prototype,"readLabelExpression",null),(0,s._)([(0,w.c)("labelExpression")],Z.prototype,"writeLabelExpression",null),(0,s._)([(0,d.Cb)({type:h,json:{write:{overridePolicy:function(e,n,r){return function(e){return _(e)||I(null===e||void 0===e?void 0:e.layer)}(r)?{allowNull:!0}:{enabled:!1}}}}})],Z.prototype,"labelExpressionInfo",void 0),(0,s._)([(0,w.c)("labelExpressionInfo")],Z.prototype,"writeLabelExpressionInfo",null),(0,s._)([(0,d.Cb)({type:P.apiValues,json:{type:P.jsonValues,read:P.read,write:P.write}})],Z.prototype,"labelPlacement",void 0),(0,s._)([(0,d.Cb)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],Z.prototype,"labelPosition",void 0),(0,s._)([(0,d.Cb)({type:Number})],Z.prototype,"maxScale",void 0),(0,s._)([(0,w.c)("maxScale")],Z.prototype,"writeMaxScale",null),(0,s._)([(0,d.Cb)({type:Number})],Z.prototype,"minScale",void 0),(0,s._)([(0,w.c)("minScale")],Z.prototype,"writeMinScale",null),(0,s._)([(0,d.Cb)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:C}}}}})],Z.prototype,"repeatLabel",void 0),(0,s._)([(0,d.Cb)({type:Number,cast:v.t_,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:C}}}}})],Z.prototype,"repeatLabelDistance",void 0),(0,s._)([(0,d.Cb)({types:u.yK,json:{origins:{"web-scene":{types:u.S6,write:E.vX,default:null}},write:E.vX,default:null}})],Z.prototype,"symbol",void 0),(0,s._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],Z.prototype,"useCodedValues",void 0),(0,s._)([(0,d.Cb)({type:String,json:{write:!0}})],Z.prototype,"where",void 0);var j=Z=x=(0,s._)([(0,y.j)("esri.layers.support.LabelClass")],Z)},93253:function(e,n,r){r.d(n,{UO:function(){return d},YI:function(){return v},dI:function(){return b},el:function(){return x},hV:function(){return f},z7:function(){return p}});var t=r(643),i="__begin__",o="__end__",l=new RegExp(i,"ig"),a=new RegExp(o,"ig"),s=new RegExp("^"+i,"i"),u=new RegExp(o+"$","i"),c='"';function p(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function f(e){var n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),n.type="conventional"),n}function v(e){var n=f(e);if(!n)return null;switch(n.type){case"conventional":return b(n.expression);case"arcade":return n.expression}return null}function d(e){var n=f(e);if(!n)return null;switch(n.type){case"conventional":return function(e){var n=null===e||void 0===e?void 0:e.match(y);return n&&n[1].trim()||null}(n.expression);case"arcade":return x(n.expression)}return null}function b(e){var n;return e?(n=(0,t.gx)(e,(function(e){return i+'$feature["'+e+'"]'+o})),n=s.test(n)?n.replace(s,""):c+n,n=(n=u.test(n)?n.replace(u,""):n+c).replace(l,'" + ').replace(a,' + "')):n='""',n}var y=/^\s*\{([^}]+)\}\s*$/i;var w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function x(e){if(!e)return null;var n=w.exec(e)||m.exec(e);return n?n[1]||n[3]:(n=g.exec(e))?n[2]:null}},85116:function(e,n,r){r.d(n,{a:function(){return p},r:function(){return u}});var t=r(10064),i=r(84652),o=r(32718),l=r(77748),a=o.Z.getLogger("esri.layers.support.labelingInfo"),s=/\[([^\[\]]+)\]/gi;function u(e,n,r){var t=this;return e?e.map((function(e){var i=new l.Z;if(i.read(e,r),i.labelExpression){var o=n.fields||n.layerDefinition&&n.layerDefinition.fields||t.fields;i.labelExpression=i.labelExpression.replace(s,(function(e,n){return"[".concat(function(e,n){if(!n)return e;for(var r=e.toLowerCase(),t=0;t<n.length;t++){var i=n[t].name;if(i.toLowerCase()===r)return i}return e}(n,o),"]")}))}return i})):null}var c={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function p(e,n){var r=(0,i.d9)(e);return r.some((function(e){return function(e,n){var r=e.labelPlacement,i=c[n];if(!e.symbol)return a.warn("No ILabelClass symbol specified."),!0;if(!i)return a.error(new t.Z("labeling:unsupported-geometry-type","Unable to create labels for layer, geometry type '".concat(n,"' is not supported"))),!0;if(!i.includes(r)){var o=i[0];r&&a.warn("Found invalid label placement type ".concat(r," for ").concat(n,". Defaulting to ").concat(o)),e.labelPlacement=o}return!1}(e,n)}))?[]:r}},81085:function(e,n,r){r.d(n,{eZ:function(){return p}});var t=r(44055),i=r(80031),o=r(26418),l=(r(23046),r(1374),r(39384),r(29230)),a=(r(29514),r(44051),r(98752),r(16698)),s=r(14105),u=["oid","global-id"],c=["oid","global-id","guid"];function p(e,n){var r=e.displayField,a=e.editFieldsInfo,s=e.fields,u=e.objectIdField,c=e.title;if(!s)return null;var p=w({editFieldsInfo:a,fields:s,objectIdField:u},n);if(!p.length)return null;var f=function(e){var n=(0,i.O5)(e),r=e.titleBase;return n?"".concat(r,": {").concat(n.trim(),"}"):null!==r&&void 0!==r?r:""}({titleBase:c,fields:s,displayField:r}),v=[new l.Z,new o.Z];return new t.Z({title:f,content:v,fieldInfos:p})}var f=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],v=function(e,n){var r=n.editFieldsInfo,t=n.objectIdField,i=n.visibleFieldNames;return i?i.has(e.name):!b(e.name,r)&&(!t||e.name!==t)&&!u.includes(e.type)&&!f.some((function(n){return n.test(e.name)}))};function d(e,n){return"oid"===e.type?-1:"oid"===n.type?1:g(e)?-1:g(n)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((n.alias||n.name).toLocaleLowerCase())}function b(e,n){if(!e||!n)return!1;var r=n.creationDateField,t=n.creatorField,i=n.editDateField,o=n.editorField;return[r&&r.toLowerCase(),t&&t.toLowerCase(),i&&i.toLowerCase(),o&&o.toLowerCase()].includes(e.toLowerCase())}function y(e,n){return e.editable&&!c.includes(e.type)&&!b(e.name,n)}function w(e,n){var r=e.editFieldsInfo,t=e.fields,i=e.objectIdField;return function(e,n){var r=e;return n&&(e=e.filter((function(e){return!n.includes(e.type)}))),e===r&&(e=e.slice()),e.sort(d),e}(null!==t&&void 0!==t?t:[],(null===n||void 0===n?void 0:n.ignoreFieldTypes)||x).map((function(e){return new a.Z({fieldName:e.name,isEditable:y(e,r),label:e.alias,format:m(e),visible:v(e,{editFieldsInfo:r,objectIdField:i,visibleFieldNames:null===n||void 0===n?void 0:n.visibleFieldNames})})}))}function m(e){switch(e.type){case"small-integer":case"integer":case"single":return new s.Z({digitSeparator:!0,places:0});case"double":return new s.Z({digitSeparator:!0,places:2});case"date":return new s.Z({dateFormat:"long-month-day-year"});default:return"string"===e.type&&(0,i.Ec)(e.name)?new s.Z({digitSeparator:!0,places:0}):null}}function g(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())}var x=["geometry","blob","raster","guid","xml"]},61574:function(e,n,r){r.d(n,{CJ:function(){return c},G:function(){return d},Rz:function(){return f},js:function(){return v},kD:function(){return y},mW:function(){return b},xA:function(){return u},z3:function(){return p}});r(93169);var t=r(92026),i=r(61459),o=r(16851),l=r(16072),a=r(58009),s=r(76115),u=l.Z.fromJSON(s.I4),c=o.Z.fromJSON(s.ET),p=i.Z.fromJSON(s.lF),f=a.Z.fromJSON(s.qP);function v(e){if((0,t.Wi)(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return u;case"polyline":return c;case"polygon":case"extent":return p}return null}var d=l.Z.fromJSON(s.eG),b=o.Z.fromJSON(s.wW),y=i.Z.fromJSON(s.lj)}}]);
//# sourceMappingURL=9434.e771e1ff.chunk.js.map
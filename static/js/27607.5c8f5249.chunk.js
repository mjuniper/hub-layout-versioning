"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[27607],{78084:function(e,t,r){r.d(t,{Z:function(){return f}});var a,s,n=r(15671),i=r(43144),o=r(93169),u=r(13005);(s=a||(a={}))[s.varint=0]="varint",s[s.fixed64=1]="fixed64",s[s.delimited=2]="delimited",s[s.fixed32=5]="fixed32",s[s.unknown=99]="unknown";var c=4294967296,l=new TextDecoder("utf-8"),h=(0,o.Z)("safari")||(0,o.Z)("ios")?6:(0,o.Z)("ff")?12:32,f=function(){function e(t,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t?t.byteLength:0;(0,n.Z)(this,e),this._tag=0,this._dataType=a.unknown,this._init(t,r,s,i)}return(0,i.Z)(e,[{key:"_init",value:function(e,t,r,a){this._data=e,this._dataView=t,this._pos=r,this._end=a}},{key:"asUnsafe",value:function(){return this}},{key:"clone",value:function(){return new e(this._data,this._dataView,this._pos,this._end)}},{key:"pos",value:function(){return this._pos}},{key:"move",value:function(e){this._pos=e}},{key:"nextTag",value:function(e){for(;;){if(this._pos===this._end)return!1;var t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}},{key:"next",value:function(){if(this._pos===this._end)return!1;var e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}},{key:"empty",value:function(){return this._pos>=this._end}},{key:"tag",value:function(){return this._tag}},{key:"getInt32",value:function(){return this._decodeVarint()}},{key:"getInt64",value:function(){return this._decodeVarint()}},{key:"getUInt32",value:function(){var e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}},{key:"getUInt64",value:function(){return this._decodeVarint()}},{key:"getSInt32",value:function(){var e=this.getUInt32();if(void 0!==e)return e>>>1^-(1&e)|0}},{key:"getSInt64",value:function(){return this._decodeSVarint()}},{key:"getBool",value:function(){var e=0!==this._data[this._pos];return this._skip(1),e}},{key:"getEnum",value:function(){return this._decodeVarint()}},{key:"getFixed64",value:function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getUint32(t+4,!0)*c;return this._skip(8),r}},{key:"getSFixed64",value:function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+e.getInt32(t+4,!0)*c;return this._skip(8),r}},{key:"getDouble",value:function(){var e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}},{key:"getFixed32",value:function(){var e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}},{key:"getSFixed32",value:function(){var e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}},{key:"getFloat",value:function(){var e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}},{key:"getString",value:function(){var e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}},{key:"getBytes",value:function(){var e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}},{key:"getLength",value:function(){return this._getLengthUnsafe()}},{key:"processMessageWithArgs",value:function(e,t,r,a){var s=this.getMessage(),n=e(s,t,r,a);return s.release(),n}},{key:"processMessage",value:function(e){var t=this.getMessage(),r=e(t);return t.release(),r}},{key:"getMessage",value:function(){var t=this._getLength(),r=e.pool.acquire();return r._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),r}},{key:"release",value:function(){e.pool.release(this)}},{key:"dataType",value:function(){return this._dataType}},{key:"skip",value:function(){switch(this._dataType){case a.varint:this._decodeVarint();break;case a.fixed64:this._skip(8);break;case a.delimited:this._skip(this._getLength());break;case a.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}},{key:"skipLen",value:function(e){this._skip(e)}},{key:"_skip",value:function(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}},{key:"_decodeVarint",value:function(){var e=this._data,t=this._pos,r=0,a=0;if(this._end-t>=10)do{if(r|=127&(a=e[t++]),0==(128&a))break;if(r|=(127&(a=e[t++]))<<7,0==(128&a))break;if(r|=(127&(a=e[t++]))<<14,0==(128&a))break;if(r|=(127&(a=e[t++]))<<21,0==(128&a))break;if(r+=268435456*(127&(a=e[t++])),0==(128&a))break;if(r+=34359738368*(127&(a=e[t++])),0==(128&a))break;if(r+=4398046511104*(127&(a=e[t++])),0==(128&a))break;if(r+=562949953421312*(127&(a=e[t++])),0==(128&a))break;if(r+=72057594037927940*(127&(a=e[t++])),0==(128&a))break;if(r+=0x8000000000000000*(127&(a=e[t++])),0==(128&a))break;throw new Error("Varint too long!")}while(0);else{for(var s=1;t!==this._end&&0!=(128&(a=e[t]));)++t,r+=(127&a)*s,s*=128;if(t===this._end)throw new Error("Varint overrun!");++t,r+=a*s}return this._pos=t,r}},{key:"_decodeSVarint",value:function(){var e=this._data,t=this._pos,r=0,a=0,s=1&e[t];if(this._end-t>=10)do{if(r|=127&(a=e[t++]),0==(128&a))break;if(r|=(127&(a=e[t++]))<<7,0==(128&a))break;if(r|=(127&(a=e[t++]))<<14,0==(128&a))break;if(r|=(127&(a=e[t++]))<<21,0==(128&a))break;if(r+=268435456*(127&(a=e[t++])),0==(128&a))break;if(r+=34359738368*(127&(a=e[t++])),0==(128&a))break;if(r+=4398046511104*(127&(a=e[t++])),0==(128&a))break;if(r+=562949953421312*(127&(a=e[t++])),0==(128&a))break;if(r+=72057594037927940*(127&(a=e[t++])),0==(128&a))break;if(r+=0x8000000000000000*(127&(a=e[t++])),0==(128&a))break;throw new Error("Varint too long!")}while(0);else{for(var n=1;t!==this._end&&0!=(128&(a=e[t]));)++t,r+=(127&a)*n,n*=128;if(t===this._end)throw new Error("Varint overrun!");++t,r+=a*n}return this._pos=t,s?-(r+1)/2:r/2}},{key:"_getLength",value:function(){if(this._dataType!==a.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}},{key:"_getLengthUnsafe",value:function(){return this.getUInt32()}},{key:"_toString",value:function(e,t,r){if((r=Math.min(this._end,r))-t>h){var a=e.subarray(t,r);return l.decode(a)}for(var s="",n="",i=t;i<r;++i){var o=e[i];128&o?n+="%"+o.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(o),n="")}return n.length&&(s+=decodeURIComponent(n)),s}},{key:"_toBytes",value:function(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}]),e}();f.pool=new u.Z(f,void 0,(function(e){e._data=null,e._dataView=null}))},91347:function(e,t,r){r.d(t,{G$:function(){return I},K9:function(){return x},O7:function(){return h}});var a=r(10064),s=r(92026),n=r(78084),i=r(80457),o=r(70436),u=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],c=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],l=["upperLeft","lowerLeft"];function h(e){return e>=u.length?null:u[e]}function f(e){return e>=c.length?null:c[e]}function d(e){return e>=l.length?null:l[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,r){for(var a=e.asUnsafe(),s=t.createPointGeometry(r);a.next();)if(3===a.tag())for(var n=a.getUInt32(),i=a.pos()+n,o=0;a.pos()<i;)t.addCoordinatePoint(s,a.getSInt64(),o++);else a.skip();return s}function y(e,t,r){for(var a=e.asUnsafe(),s=t.createGeometry(r),n=2+(r.hasZ?1:0)+(r.hasM?1:0);a.next();)switch(a.tag()){case 2:for(var i=a.getUInt32(),o=a.pos()+i,u=0;a.pos()<o;)t.addLength(s,a.getUInt32(),u++);break;case 3:var c=a.getUInt32(),l=a.pos()+c,h=0;for(t.allocateCoordinates(s);a.pos()<l;)t.addCoordinate(s,a.getSInt64(),h),++h===n&&(h=0);break;default:a.skip()}return s}function k(e){for(var t=e.asUnsafe(),r=new i.Z,a="esriGeometryPoint";t.next();)switch(t.tag()){case 2:for(var s=t.getUInt32(),n=t.pos()+s;t.pos()<n;)r.lengths.push(t.getUInt32());break;case 3:for(var u=t.getUInt32(),c=t.pos()+u;t.pos()<c;)r.coords.push(t.getSInt64());break;case 1:a=o.A[t.getEnum()];break;default:t.skip()}return{queryGeometry:r,queryGeometryType:a}}function _(e){for(var t=e.asUnsafe();t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function v(e){for(var t=e.asUnsafe(),r={type:h(0)};t.next();)switch(t.tag()){case 1:r.name=t.getString();break;case 2:r.type=h(t.getEnum());break;case 3:r.alias=t.getString();break;case 4:r.sqlType=f(t.getEnum());break;case 5:default:t.skip();break;case 6:r.defaultValue=t.getString()}return r}function b(e){for(var t={},r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t.name=r.getString();break;case 2:t.isSystemMaintained=r.getBool();break;default:r.skip()}return t}function m(e,t,r,a){for(var s=t.createFeature(r),n=0;e.next();)switch(e.tag()){case 1:var i=a[n++].name;s.attributes[i]=e.processMessage(_);break;case 2:s.geometry=e.processMessageWithArgs(y,t,r);break;case 4:s.centroid=e.processMessageWithArgs(p,t,r);break;default:e.skip()}return s}function w(e){for(var t=[1,1,1,1],r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function T(e){for(var t=[0,0,0,0],r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t[0]=r.getDouble();break;case 2:t[1]=r.getDouble();break;case 4:t[2]=r.getDouble();break;case 3:t[3]=r.getDouble();break;default:r.skip()}return t}function I(e){for(var t={originPosition:d(0)},r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t.originPosition=d(r.getEnum());break;case 2:t.scale=r.processMessage(w);break;case 3:t.translate=r.processMessage(T);break;default:r.skip()}return t}function q(e){for(var t={},r=e.asUnsafe();r.next();)switch(r.tag()){case 1:t.shapeAreaFieldName=r.getString();break;case 2:t.shapeLengthFieldName=r.getString();break;case 3:t.units=r.getString();break;default:r.skip()}return t}function F(e,t){for(var r=t.createSpatialReference();e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function S(e,t){var r=t.createFeatureResult(),a=e.asUnsafe();r.geometryType=g(t,0);for(var s=!1;a.next();)switch(a.tag()){case 1:r.objectIdFieldName=a.getString();break;case 3:r.globalIdFieldName=a.getString();break;case 4:r.geohashFieldName=a.getString();break;case 5:r.geometryProperties=a.processMessage(q);break;case 7:r.geometryType=g(t,a.getEnum());break;case 8:r.spatialReference=a.processMessageWithArgs(F,t);break;case 10:r.hasZ=a.getBool();break;case 11:r.hasM=a.getBool();break;case 12:r.transform=a.processMessage(I);break;case 9:var n=a.getBool();r.exceededTransferLimit=n;break;case 13:t.addField(r,a.processMessage(v));break;case 15:s||(t.prepareFeatures(r),s=!0),t.addFeature(r,a.processMessageWithArgs(m,t,r,r.fields));break;case 2:r.uniqueIdField=a.processMessage(b);break;default:a.skip()}return t.finishFeatureResult(r),r}function U(e,t){for(var r={},a=null;e.next();)switch(e.tag()){case 4:a=e.processMessageWithArgs(k);break;case 1:r.featureResult=e.processMessageWithArgs(S,t);break;default:e.skip()}return(0,s.pC)(a)&&r.featureResult&&t.addQueryGeometry(r,a),r}function x(e,t){try{for(var r=new n.Z(new Uint8Array(e),new DataView(e)),s={};r.next();)2===r.tag()?s.queryResult=r.processMessageWithArgs(U,t):r.skip();return s}catch(i){throw new a.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:i})}}},70436:function(e,t,r){r.d(t,{A:function(){return h},J:function(){return f}});var a=r(37762),s=r(15671),n=r(43144),i=r(68860),o=r(92975),u=r(3182),c=r(6908),l=r(80457),h=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],f=function(){function e(t){(0,s.Z)(this,e),this._options=t,this.geometryTypes=h,this._coordinatePtr=0,this._vertexDimension=0}return(0,n.Z)(e,[{key:"createFeatureResult",value:function(){return new c.Z}},{key:"prepareFeatures",value:function(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}},{key:"finishFeatureResult",value:function(e){if(e&&e.features&&e.hasZ&&this._options.sourceSpatialReference&&e.spatialReference&&!(0,o.fS)(e.spatialReference,this._options.sourceSpatialReference)&&!e.spatialReference.vcsWkid){var t=(0,i._R)(this._options.sourceSpatialReference)/(0,i._R)(e.spatialReference);if(1!==t){var r,s=(0,a.Z)(e.features);try{for(s.s();!(r=s.n()).done;){var n=r.value;if((0,u.S6)(n))for(var c=n.geometry.coords,l=2;l<c.length;l+=3)c[l]*=t}}catch(h){s.e(h)}finally{s.f()}}}}},{key:"addFeature",value:function(e,t){e.features.push(t)}},{key:"createFeature",value:function(){return new u.u_}},{key:"createSpatialReference",value:function(){return{wkid:0}}},{key:"createGeometry",value:function(){return new l.Z}},{key:"addField",value:function(e,t){e.fields.push(t)}},{key:"allocateCoordinates",value:function(e){e.coords.length=e.lengths.reduce((function(e,t){return e+t}),0)*this._vertexDimension,this._coordinatePtr=0}},{key:"addCoordinate",value:function(e,t){e.coords[this._coordinatePtr++]=t}},{key:"addCoordinatePoint",value:function(e,t){e.coords.push(t)}},{key:"addLength",value:function(e,t){e.lengths.push(t)}},{key:"addQueryGeometry",value:function(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}},{key:"createPointGeometry",value:function(){return new l.Z}}]),e}()},27607:function(e,t,r){r.d(t,{C:function(){return n}});var a=r(37762),s=r(91347);function n(e,t){var r=(0,s.K9)(e,t),n=r.queryResult.featureResult,i=r.queryResult.queryGeometry,o=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){var u,c=n.objectIdFieldName,l=(0,a.Z)(n.features);try{for(l.s();!(u=l.n()).done;){var h=u.value;h.attributes&&(h.objectId=h.attributes[c])}}catch(f){l.e(f)}finally{l.f()}}return n&&(n.queryGeometry=i,n.queryGeometryType=o),n}}}]);
//# sourceMappingURL=27607.5c8f5249.chunk.js.map
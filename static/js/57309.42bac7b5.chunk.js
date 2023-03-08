"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[57309,16354],{44925:function(e,a,i){function n(e,a){if(null==e)return{};var i,n,t=function(e,a){if(null==e)return{};var i,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||(t[i]=e[i]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}i.d(a,{Z:function(){return n}})},9114:function(e,a,i){i.d(a,{u:function(){return m}});var n,t=i(15671),r=i(43144),d=i(60136),o=i(92572),l=i(27366),u=i(46784),s=i(49861),c=(i(25243),i(63780),i(69912)),m=n=function(e){(0,d.Z)(i,e);var a=(0,o.Z)(i);function i(e){var n;return(0,t.Z)(this,i),(n=a.call(this,e)).name=null,n.code=null,n}return(0,r.Z)(i,[{key:"clone",value:function(){return new n({name:this.name,code:this.code})}}]),i}(u.wq);(0,l._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,l._)([(0,s.Cb)({type:[String,Number],json:{write:!0}})],m.prototype,"code",void 0),m=n=(0,l._)([(0,c.j)("esri.layers.support.CodedValue")],m)},52175:function(e,a,i){i.d(a,{Z:function(){return f}});var n,t=i(15671),r=i(43144),d=i(60136),o=i(92572),l=i(27366),u=i(84652),s=i(49861),c=(i(25243),i(27135)),m=i(69912),T=i(9114),p=i(64538),S=n=function(e){(0,d.Z)(i,e);var a=(0,o.Z)(i);function i(e){var n;return(0,t.Z)(this,i),(n=a.call(this,e)).codedValues=null,n.type="coded-value",n}return(0,r.Z)(i,[{key:"getName",value:function(e){var a=null;if(this.codedValues){var i=String(e);this.codedValues.some((function(e){return String(e.code)===i&&(a=e.name),!!a}))}return a}},{key:"clone",value:function(){return new n({codedValues:(0,u.d9)(this.codedValues),name:this.name})}}]),i}(p.Z);(0,l._)([(0,s.Cb)({type:[T.u],json:{write:!0}})],S.prototype,"codedValues",void 0),(0,l._)([(0,c.J)({codedValue:"coded-value"})],S.prototype,"type",void 0);var f=S=n=(0,l._)([(0,m.j)("esri.layers.support.CodedValueDomain")],S)},64538:function(e,a,i){i.d(a,{Z:function(){return S}});var n=i(43144),t=i(15671),r=i(60136),d=i(92572),o=i(27366),l=i(43404),u=i(46784),s=i(49861),c=(i(25243),i(63780),i(27135)),m=i(69912),T=new l.X({inherited:"inherited",codedValue:"coded-value",range:"range"}),p=function(e){(0,r.Z)(i,e);var a=(0,d.Z)(i);function i(e){var n;return(0,t.Z)(this,i),(n=a.call(this,e)).name=null,n.type=null,n}return(0,n.Z)(i)}(u.wq);(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,o._)([(0,c.J)(T)],p.prototype,"type",void 0);var S=p=(0,o._)([(0,m.j)("esri.layers.support.Domain")],p)},83040:function(e,a,i){i.d(a,{Z:function(){return v}});var n,t=i(15671),r=i(43144),d=i(60136),o=i(92572),l=i(27366),u=i(43404),s=i(46784),c=i(49861),m=i(25243),T=(i(63780),i(27135)),p=i(38511),S=i(69912),f=i(67755),y=i(85249),h=new u.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),A=n=function(e){(0,d.Z)(i,e);var a=(0,o.Z)(i);function i(e){var n;return(0,t.Z)(this,i),(n=a.call(this,e)).alias=null,n.defaultValue=void 0,n.description=null,n.domain=null,n.editable=!0,n.length=-1,n.name=null,n.nullable=!0,n.type=null,n.valueType=null,n.visible=!0,n}return(0,r.Z)(i,[{key:"readDescription",value:function(e,a){var i,n,t=a.description,r=null;try{r=t?JSON.parse(t):null}catch(d){}return null!==(i=null===(n=r)||void 0===n?void 0:n.value)&&void 0!==i?i:null}},{key:"readValueType",value:function(e,a){var i=a.description,n=null;try{n=i?JSON.parse(i):null}catch(t){}return n?h.fromJSON(n.fieldValueType):null}},{key:"clone",value:function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}}]),i}(s.wq);(0,l._)([(0,c.Cb)({type:String,json:{write:!0}})],A.prototype,"alias",void 0),(0,l._)([(0,c.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],A.prototype,"defaultValue",void 0),(0,l._)([(0,c.Cb)()],A.prototype,"description",void 0),(0,l._)([(0,p.r)("description")],A.prototype,"readDescription",null),(0,l._)([(0,c.Cb)({types:f.V5,json:{read:{reader:f.im},write:!0}})],A.prototype,"domain",void 0),(0,l._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"editable",void 0),(0,l._)([(0,c.Cb)({type:m.z8,json:{write:!0}})],A.prototype,"length",void 0),(0,l._)([(0,c.Cb)({type:String,json:{write:!0}})],A.prototype,"name",void 0),(0,l._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],A.prototype,"nullable",void 0),(0,l._)([(0,T.J)(y.v)],A.prototype,"type",void 0),(0,l._)([(0,c.Cb)()],A.prototype,"valueType",void 0),(0,l._)([(0,p.r)("valueType",["description"])],A.prototype,"readValueType",null),(0,l._)([(0,c.Cb)({type:Boolean,json:{read:!1}})],A.prototype,"visible",void 0);var v=A=n=(0,l._)([(0,S.j)("esri.layers.support.Field")],A)},52410:function(e,a,i){i.d(a,{Z:function(){return s}});var n=i(37762),t=i(15671),r=i(43144),d=i(80031);function o(e){return"date"===e.type||"esriFieldTypeDate"===e.type}function l(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function u(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}var s=function(){function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if((0,t.Z)(this,e),this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,a){this.fields=a;var i,r=[],s=(0,n.Z)(a);try{for(s.s();!(i=s.n()).done;){var T=i.value,p=null===T||void 0===T?void 0:T.name,S=m(null===T||void 0===T?void 0:T.name);if(p&&S){var f=c(p);this._fieldsMap.set(p,T),this._fieldsMap.set(f,T),this._normalizedFieldsMap.set(S,T),r.push(f),o(T)?(this.dateFields.push(T),this._dateFieldsSet.add(T)):(0,d.H7)(T)&&(this._numericFieldsSet.add(T),this.numericFields.push(T)),l(T)||u(T)||(T.editable=null==T.editable||!!T.editable,T.nullable=null==T.nullable||!!T.nullable)}}}catch(y){s.e(y)}finally{s.f()}r.sort(),this.uid=r.join(",")}}return(0,r.Z)(e,[{key:"destroy",value:function(){this._fieldsMap.clear()}},{key:"requiredFields",get:function(){if(!this._requiredFields){this._requiredFields=[];var e,a=(0,n.Z)(this.fields);try{for(a.s();!(e=a.n()).done;){var i=e.value;l(i)||u(i)||i.nullable||void 0!==(0,d.os)(i)||this._requiredFields.push(i)}}catch(t){a.e(t)}finally{a.f()}}return this._requiredFields}},{key:"has",value:function(e){return null!=this.get(e)}},{key:"get",value:function(e){var a;if(e){var i=this._fieldsMap.get(e);return i||((i=null!==(a=this._fieldsMap.get(c(e)))&&void 0!==a?a:this._normalizedFieldsMap.get(m(e)))&&this._fieldsMap.set(e,i),i)}}},{key:"isDateField",value:function(e){return this._dateFieldsSet.has(this.get(e))}},{key:"isNumericField",value:function(e){return this._numericFieldsSet.has(this.get(e))}},{key:"normalizeFieldName",value:function(e){var a,i=this.get(e);if(i)return null!==(a=i.name)&&void 0!==a?a:void 0}}]),e}();function c(e){return e.trim().toLowerCase()}function m(e){var a,i;return null!==(a=null===(i=(0,d.q6)(e))||void 0===i?void 0:i.toLowerCase())&&void 0!==a?a:""}},56754:function(e,a,i){i.d(a,{Z:function(){return T}});var n,t=i(15671),r=i(43144),d=i(60136),o=i(92572),l=i(27366),u=(i(32718),i(25243),i(63780),i(10064),i(93169),i(27135)),s=i(69912),c=i(64538),m=n=function(e){(0,d.Z)(i,e);var a=(0,o.Z)(i);function i(e){var n;return(0,t.Z)(this,i),(n=a.call(this,e)).type="inherited",n}return(0,r.Z)(i,[{key:"clone",value:function(){return new n}}]),i}(c.Z);(0,l._)([(0,u.J)({inherited:"inherited"})],m.prototype,"type",void 0);var T=m=n=(0,l._)([(0,s.j)("esri.layers.support.InheritedDomain")],m)},30539:function(e,a,i){i.d(a,{Z:function(){return p}});var n,t=i(15671),r=i(43144),d=i(60136),o=i(92572),l=i(27366),u=i(49861),s=(i(25243),i(63780),i(27135)),c=i(69912),m=i(64538),T=n=function(e){(0,d.Z)(i,e);var a=(0,o.Z)(i);function i(e){var n;return(0,t.Z)(this,i),(n=a.call(this,e)).maxValue=null,n.minValue=null,n.type="range",n}return(0,r.Z)(i,[{key:"clone",value:function(){return new n({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}}]),i}(m.Z);(0,l._)([(0,u.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,a){return a.range&&a.range[1]}},write:{enabled:!1,overridePolicy:function(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer:function(e,a,i){a[i]=[this.minValue||0,e]}}}})],T.prototype,"maxValue",void 0),(0,l._)([(0,u.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:function(e,a){return a.range&&a.range[0]}},write:{target:"range",writer:function(e,a,i){a[i]=[e,this.maxValue||0]}}}})],T.prototype,"minValue",void 0),(0,l._)([(0,s.J)({range:"range"})],T.prototype,"type",void 0);var p=T=n=(0,l._)([(0,c.j)("esri.layers.support.RangeDomain")],T)},67755:function(e,a,i){i.d(a,{V5:function(){return o},im:function(){return l}});i(93169);var n=i(52175),t=i(64538),r=i(56754),d=i(30539),o={key:"type",base:t.Z,typeMap:{range:d.Z,"coded-value":n.Z,inherited:r.Z}};function l(e){if(!e||!e.type)return null;switch(e.type){case"range":return d.Z.fromJSON(e);case"codedValue":return n.Z.fromJSON(e);case"inherited":return r.Z.fromJSON(e)}return null}},85249:function(e,a,i){i.d(a,{v:function(){return n}});var n=new(i(43404).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},80724:function(e,a,i){var n,t;function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function d(e){return null!=e&&!isNaN(e)&&isFinite(e)}function o(e){return e.valueExpression?n.Expression:e.field&&"string"==typeof e.field?n.Field:n.Unknown}function l(e,a){var i=a||o(e),r=e.valueUnit||"unknown";return i===n.Unknown?t.Constant:e.stops?t.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?t.ClampedLinear:"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?t.Proportional:t.Additive:t.Identity:t.RealWorldSize}i.d(a,{PS:function(){return o},QW:function(){return l},RY:function(){return n},hL:function(){return t},iY:function(){return r},qh:function(){return d}}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(n||(n={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(t||(t={}))},16354:function(e,a,i){i.d(a,{Z:function(){return y}});var n=i(15671),t=i(43144),r=i(60136),d=i(92572),o=i(27366),l=i(11582),u=i(46784),s=i(92026),c=i(49861),m=(i(25243),i(63780),i(38511)),T=i(69912),p=i(31201),S=i(44218),f=function(e){(0,r.Z)(i,e);var a=(0,d.Z)(i);function i(e){var t;return(0,n.Z)(this,i),(t=a.call(this,e)).legacy=null,t.timeZone="system",t}return(0,t.Z)(i,[{key:"readLegacy",value:function(e,a){return{timeZone:a.timeZone,respectsDaylightSaving:a.respectsDaylightSaving}}},{key:"readTimeZone",value:function(e,a){return"timeZoneIANA"in a?a.timeZoneIANA:(0,S.G)(a)}},{key:"writeTimeZone",value:function(e,a){a.timeZoneIANA=e}},{key:"equals",value:function(e){return!((0,s.Wi)(e)||(0,s.Wi)(this.timeZone)||(0,s.Wi)(e.timeZone))&&this.timeZone===e.timeZone}}]),i}((0,l.J)(u.wq));(0,o._)([(0,c.Cb)()],f.prototype,"legacy",void 0),(0,o._)([(0,m.r)("legacy",["timeZone"])],f.prototype,"readLegacy",null),(0,o._)([(0,c.Cb)({type:String,nonNullable:!0})],f.prototype,"timeZone",void 0),(0,o._)([(0,m.r)("timeZone",["timeZone","timeZoneIANA","respectsDaylightSaving"])],f.prototype,"readTimeZone",null),(0,o._)([(0,p.c)("timeZone")],f.prototype,"writeTimeZone",null);var y=f=(0,o._)([(0,T.j)("esri.time.TimeReference")],f)},44218:function(e,a,i){i.d(a,{G:function(){return r}});var n=new Map([["AUS Central Standard Time","Australia/Darwin"],["AUS Eastern Standard Time","Australia/Sydney"],["Afghanistan Standard Time","Asia/Kabul"],["Alaskan Standard Time","America/Anchorage"],["Aleutian Standard Time","America/Adak"],["Altai Standard Time","Asia/Barnaul"],["Arab Standard Time","Asia/Riyadh"],["Arabian Standard Time","Asia/Dubai"],["Arabic Standard Time","Asia/Baghdad"],["Argentina Standard Time","America/Buenos_Aires"],["Astrakhan Standard Time","Europe/Astrakhan"],["Atlantic Standard Time","America/Halifax"],["Aus Central W. Standard Time","Australia/Eucla"],["Azerbaijan Standard Time","Asia/Baku"],["Azores Standard Time","Atlantic/Azores"],["Bahia Standard Time","America/Bahia"],["Bangladesh Standard Time","Asia/Dhaka"],["Belarus Standard Time","Europe/Minsk"],["Bougainville Standard Time","Pacific/Bougainville"],["Canada Central Standard Time","America/Regina"],["Cape Verde Standard Time","Atlantic/Cape_Verde"],["Caucasus Standard Time","Asia/Yerevan"],["Cen. Australia Standard Time","Australia/Adelaide"],["Central America Standard Time","America/Guatemala"],["Central Asia Standard Time","Asia/Almaty"],["Central Brazilian Standard Time","America/Cuiaba"],["Central Europe Standard Time","Europe/Budapest"],["Central European Standard Time","Europe/Warsaw"],["Central Pacific Standard Time","Pacific/Guadalcanal"],["Central Standard Time","America/Chicago"],["Central Standard Time (Mexico)","America/Mexico_City"],["Chatham Islands Standard Time","Pacific/Chatham"],["China Standard Time","Asia/Shanghai"],["Cuba Standard Time","America/Havana"],["Dateline Standard Time","Etc/GMT+12"],["E. Africa Standard Time","Africa/Nairobi"],["E. Australia Standard Time","Australia/Brisbane"],["E. Europe Standard Time","Europe/Chisinau"],["E. South America Standard Time","America/Sao_Paulo"],["Easter Island Standard Time","Pacific/Easter"],["Eastern Standard Time","America/New_York"],["Eastern Standard Time (Mexico)","America/Cancun"],["Egypt Standard Time","Africa/Cairo"],["Ekaterinburg Standard Time","Asia/Yekaterinburg"],["FLE Standard Time","Europe/Kiev"],["Fiji Standard Time","Pacific/Fiji"],["GMT Standard Time","Europe/London"],["GTB Standard Time","Europe/Bucharest"],["Georgian Standard Time","Asia/Tbilisi"],["Greenland Standard Time","America/Godthab"],["Greenwich Standard Time","Atlantic/Reykjavik"],["Haiti Standard Time","America/Port-au-Prince"],["Hawaiian Standard Time","Pacific/Honolulu"],["India Standard Time","Asia/Calcutta"],["Iran Standard Time","Asia/Tehran"],["Israel Standard Time","Asia/Jerusalem"],["Jordan Standard Time","Asia/Amman"],["Kaliningrad Standard Time","Europe/Kaliningrad"],["Korea Standard Time","Asia/Seoul"],["Libya Standard Time","Africa/Tripoli"],["Line Islands Standard Time","Pacific/Kiritimati"],["Lord Howe Standard Time","Australia/Lord_Howe"],["Magadan Standard Time","Asia/Magadan"],["Magallanes Standard Time","America/Punta_Arenas"],["Marquesas Standard Time","Pacific/Marquesas"],["Mauritius Standard Time","Indian/Mauritius"],["Middle East Standard Time","Asia/Beirut"],["Montevideo Standard Time","America/Montevideo"],["Morocco Standard Time","Africa/Casablanca"],["Mountain Standard Time","America/Denver"],["Mountain Standard Time (Mexico)","America/Chihuahua"],["Myanmar Standard Time","Asia/Rangoon"],["N. Central Asia Standard Time","Asia/Novosibirsk"],["Namibia Standard Time","Africa/Windhoek"],["Nepal Standard Time","Asia/Katmandu"],["New Zealand Standard Time","Pacific/Auckland"],["Newfoundland Standard Time","America/St_Johns"],["Norfolk Standard Time","Pacific/Norfolk"],["North Asia East Standard Time","Asia/Irkutsk"],["North Asia Standard Time","Asia/Krasnoyarsk"],["North Korea Standard Time","Asia/Pyongyang"],["Omsk Standard Time","Asia/Omsk"],["Pacific SA Standard Time","America/Santiago"],["Pacific Standard Time","America/Los_Angeles"],["Pacific Standard Time (Mexico)","America/Tijuana"],["Pakistan Standard Time","Asia/Karachi"],["Paraguay Standard Time","America/Asuncion"],["Qyzylorda Standard Time","Asia/Qyzylorda"],["Romance Standard Time","Europe/Paris"],["Russia Time Zone 10","Asia/Srednekolymsk"],["Russia Time Zone 11","Asia/Kamchatka"],["Russia Time Zone 3","Europe/Samara"],["Russian Standard Time","Europe/Moscow"],["SA Eastern Standard Time","America/Cayenne"],["SA Pacific Standard Time","America/Bogota"],["SA Western Standard Time","America/La_Paz"],["SE Asia Standard Time","Asia/Bangkok"],["Saint Pierre Standard Time","America/Miquelon"],["Sakhalin Standard Time","Asia/Sakhalin"],["Samoa Standard Time","Pacific/Apia"],["Sao Tome Standard Time","Africa/Sao_Tome"],["Saratov Standard Time","Europe/Saratov"],["Singapore Standard Time","Asia/Singapore"],["South Africa Standard Time","Africa/Johannesburg"],["South Sudan Standard Time","Africa/Juba"],["Sri Lanka Standard Time","Asia/Colombo"],["Sudan Standard Time","Africa/Khartoum"],["Syria Standard Time","Asia/Damascus"],["Taipei Standard Time","Asia/Taipei"],["Tasmania Standard Time","Australia/Hobart"],["Tocantins Standard Time","America/Araguaina"],["Tokyo Standard Time","Asia/Tokyo"],["Tomsk Standard Time","Asia/Tomsk"],["Tonga Standard Time","Pacific/Tongatapu"],["Transbaikal Standard Time","Asia/Chita"],["Turkey Standard Time","Europe/Istanbul"],["Turks And Caicos Standard Time","America/Grand_Turk"],["US Eastern Standard Time","America/Indianapolis"],["US Mountain Standard Time","America/Phoenix"],["UTC","Etc/GMT"],["UTC+01","Etc/GMT-1"],["UTC+02","Etc/GMT-2"],["UTC+03","Etc/GMT-3"],["UTC+04","Etc/GMT-4"],["UTC+05","Etc/GMT-5"],["UTC+06","Etc/GMT-6"],["UTC+07","Etc/GMT-7"],["UTC+08","Etc/GMT-8"],["UTC+09","Etc/GMT-9"],["UTC+10","Etc/GMT-10"],["UTC+11","Etc/GMT-11"],["UTC+12","Etc/GMT-12"],["UTC+13","Etc/GMT-13"],["UTC+14","Etc/GMT-14"],["UTC-01","Etc/GMT+1"],["UTC-02","Etc/GMT+2"],["UTC-03","Etc/GMT+3"],["UTC-04","Etc/GMT+4"],["UTC-05","Etc/GMT+5"],["UTC-06","Etc/GMT+6"],["UTC-07","Etc/GMT+7"],["UTC-08","Etc/GMT+8"],["UTC-09","Etc/GMT+9"],["UTC-10","Etc/GMT+10"],["UTC-11","Etc/GMT+11"],["UTC-12","Etc/GMT+12"],["Ulaanbaatar Standard Time","Asia/Ulaanbaatar"],["Venezuela Standard Time","America/Caracas"],["Vladivostok Standard Time","Asia/Vladivostok"],["Volgograd Standard Time","Europe/Volgograd"],["W. Australia Standard Time","Australia/Perth"],["W. Central Africa Standard Time","Africa/Lagos"],["W. Europe Standard Time","Europe/Berlin"],["W. Mongolia Standard Time","Asia/Hovd"],["West Asia Standard Time","Asia/Tashkent"],["West Bank Standard Time","Asia/Hebron"],["West Pacific Standard Time","Pacific/Port_Moresby"],["Yakutsk Standard Time","Asia/Yakutsk"],["Yukon Standard Time","America/Whitehorse"]]),t=i(99779);function r(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"system";if(!e||!n.has(e.timeZone))return a;var i=n.get(e.timeZone);return o(e.timeZone)||e.respectsDaylightSaving?i:d(i)}function d(e){var a=t.ou.local().setZone(e),i=Math.min(a.set({month:1,day:1}).offset,a.set({month:5}).offset);return 0===i?"Etc/UTC":"Etc/GMT".concat(t.Qf.instance(-i).formatOffset(0,"narrow"))}function o(e){return e.startsWith("UTC")}}}]);
//# sourceMappingURL=57309.42bac7b5.chunk.js.map
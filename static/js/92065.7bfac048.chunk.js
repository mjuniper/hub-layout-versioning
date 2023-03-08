/*! For license information please see 92065.7bfac048.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[92065],{1319:function(e,n,t){t.d(n,{a:function(){return i}});var r=t(67450);function i(e,n,t){var i=(0,r._)((0,r._)({params:{}},t),e);return i.params=n.reduce((function(n,t){return(e[t]||"boolean"===typeof e[t])&&(n[t]=e[t]),n}),i.params),["params","httpMethod","rawResponse","authentication","portal","fetch","maxUrlLength","headers"].reduce((function(e,n){return i[n]&&(e[n]=i[n]),e}),{})}},92065:function(e,n,t){t.r(n),t.d(n,{arcgis_hub_group_member_summary:function(){return d},arcgis_hub_image:function(){return v}});var r=t(4942),i=t(74165),o=t(15861),a=t(15671),u=t(43144),s=t(5692),c=t(13129),l=t(89732),h=t(9618),f=t(54825),m=t(72652),d=(t(7597),t(67450),t(1319),t(25240),function(){function e(n){(0,a.Z)(this,e),(0,s.r)(this,n),this.hasMembersError=!1}return(0,u.Z)(e,[{key:"componentWillLoad",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.i.loadIntlForComponent(this.element);case 2:if(this.intl=e.sent,this.membershipSummary){e.next=6;break}return e.next=6,this.fetchMembers();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMembers",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var n,t,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.hasMembersError=!1,!this.context||!(null===this||void 0===this?void 0:this.identifier)){e.next=10;break}return n=this.context,t={num:3,sortField:"memberType"},(null===n||void 0===n?void 0:n.session)?t.authentication=n.session:t.portal=n.sharingApiUrl,e.next=8,(0,l.s)(this.identifier,t);case 8:r=e.sent,this.membershipSummary={total:r.total,users:r.users};case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),this.hasMembersError=!0,console.error("Error fetching group members:",e.t0.message);case 16:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderMembers",value:function(e){var n=this;if(this.context&&!this.hasMembersError){var t,i="&nbsp;";return e&&(i=(0,s.h)(s.F,null,(0,s.h)("div",{class:"members-inner"},e.users.map((function(e){var t,r,i;return(0,s.h)("calcite-avatar",{fullName:e.fullName,key:e.username,scale:"s",thumbnail:(0,h.a)(null===(t=n.context)||void 0===t?void 0:t.sharingApiUrl,e,null===(i=null===(r=n.context)||void 0===r?void 0:r.session)||void 0===i?void 0:i.token),username:e.username})}))),(0,s.h)("span",{class:"members-count"},this.intl.t("members",{count:e.total})))),(0,s.h)("div",{class:(t={},(0,r.Z)(t,"members-container",!0),(0,r.Z)(t,"loading",!e),t),slot:"subtitle"},i)}}},{key:"render",value:function(){return(0,s.h)(s.H,null,this.renderMembers(this.membershipSummary))}},{key:"element",get:function(){return(0,s.g)(this)}}],[{key:"assetsDirs",get:function(){return["locales"]}},{key:"watchers",get:function(){return{context:["fetchMembers"],identifier:["fetchMembers"]}}}]),e}());d.style=":host{display:block}.members-container.loading{position:relative}.members-container.loading:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0}@-webkit-keyframes shimmer{0%{background-size:200% 100%;background-position:100% 0}100%{background-size:200% 100%;background-position:-100% 0}}@keyframes shimmer{0%{background-size:200% 100%;background-position:100% 0}100%{background-size:200% 100%;background-position:-100% 0}}.members-container.loading:after{-webkit-animation:shimmer 2s cubic-bezier(0.4, 0, 0.2, 0.8) infinite;animation:shimmer 2s cubic-bezier(0.4, 0, 0.2, 0.8) infinite;background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%);background-color:var(--calcite-ui-foreground-3)}.members-container.loading{height:1.5rem}.members-container{display:flex;align-items:center;gap:0.25rem;font-weight:var(--calcite-font-weight-medium)}.members-inner{display:flex}.members-inner calcite-avatar{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}.members-inner calcite-avatar:nth-child(n+2){margin-left:-10px}.members-count{font-size:var(--calcite-font-size-0);line-height:1.25rem}";var b={rootMargin:"10%"},g=function(){function e(){(0,a.Z)(this,e),this.intersectionObserver=new IntersectionObserver(this.onEnteredViewport.bind(this),b),this.handlers=new WeakMap}return(0,u.Z)(e,[{key:"addHandler",value:function(e,n){this.handlers.has(e)||(this.handlers.set(e,[]),this.intersectionObserver.observe(e));var t=this.handlers.get(e);t.includes(n)||t.push(n)}},{key:"removeHandler",value:function(e,n){if(this.handlers.has(e)){var t=this.handlers.get(e),r=t.indexOf(n),i=t.filter((function(e,n){return n!==r}));i.length?this.handlers.set(e,i):(this.handlers.delete(e),this.intersectionObserver.unobserve(e))}}},{key:"unobserve",value:function(e){this.handlers.has(e)&&(this.handlers.delete(e),this.intersectionObserver.unobserve(e))}},{key:"onEnteredViewport",value:function(e){var n=this;requestAnimationFrame((function(t){e.forEach((function(e){var t;e.isIntersecting&&(null!==(t=n.handlers.get(e.target))&&void 0!==t?t:[]).forEach((function(e){return e()}))}))}))}}],[{key:"create",value:function(){return e.instance||(e.instance=new e),e.instance}},{key:"addHandler",value:function(e,n){this.create(),this.instance.addHandler(e,n)}},{key:"removeHandler",value:function(e,n){this.instance&&this.instance.removeHandler(e,n)}},{key:"unobserve",value:function(e){this.instance&&this.instance.unobserve(e)}}]),e}(),v=function(){function e(n){(0,a.Z)(this,e),(0,s.r)(this,n),this.lazy=!1,this.corners=m.C.square,this.hasError=!1,this.inViewport=!1,(0,f.b)(this,"setImageEl","handleIntersection")}return(0,u.Z)(e,[{key:"_imageUrl",get:function(){var e=this.src;return this.src||(e=this.fallback),this.hasError&&(e=this.fallback),this.lazy&&!this.inViewport&&(e=void 0),e}},{key:"componentWillLoad",value:function(){this.lazy&&this.observe()}},{key:"disconnectedCallback",value:function(){this.lazy&&this.unobserve()}},{key:"observe",value:function(){g.addHandler(this.element,this.handleIntersection)}},{key:"unobserve",value:function(){g.unobserve(this.element)}},{key:"handleIntersection",value:function(){this.inViewport=!0,this.unobserve()}},{key:"setImageEl",value:function(e){this.imageEl=e}},{key:"componentDidRender",value:function(){var e=this;if(this.imageEl){this.imageEl.addEventListener("error",(function n(){e.hasError=!0,e.imageEl.removeEventListener("error",n)}))}}},{key:"renderImage",value:function(){return this._imageUrl&&(0,s.h)("img",{alt:this.alt,class:{"rounded-corners":this.corners===m.C.round},ref:this.setImageEl,src:this._imageUrl})}},{key:"render",value:function(){return(0,s.h)(s.H,{"data-element":"image"},this.renderImage())}},{key:"element",get:function(){return(0,s.g)(this)}}]),e}();v.style=":host{display:block;width:100%}:host(.group-thumbnail)>img{display:block;aspect-ratio:200 / 133;-o-object-fit:cover;object-fit:cover}img{display:block;width:100%}.rounded-corners{border-radius:0.75rem}:host(.image-thumbnail)>img{height:16rem;width:100%;-o-object-fit:cover;object-fit:cover}"},64369:function(e,n,t){function r(e){return"string"!==typeof e||"/"===(e=e.trim())[e.length-1]&&(e=e.slice(0,-1)),e}t.d(n,{c:function(){return r}})},54825:function(e,n,t){t.d(n,{b:function(){return r}});var r=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];t.forEach((function(n){if("function"!==typeof e[n])throw new Error("Cannot bind context. ".concat(n," must be a function"));e[n]=e[n].bind(e)}))}},89732:function(e,n,t){t.d(n,{a:function(){return s},g:function(){return u},s:function(){return c}});var r=t(29847),i=t(46356),o=t(67450),a=t(1319);function u(e,n){var t=(0,i.g)(n)+"/community/groups/"+e,a=(0,r._)({httpMethod:"GET"},n);return(0,o.r)(t,a)}function s(e,n){var t=(0,i.g)(n)+"/community/groups/"+e+"/users",a=(0,r._)({httpMethod:"GET"},n);return(0,o.r)(t,a)}function c(e,n){var t=(0,i.g)(n)+"/community/groups/"+e+"/userlist",r=(0,a.a)(n||{},["name","num","start","sortField","sortOrder","joined","memberType"],{httpMethod:"GET"});return(0,o.r)(t,r)}},46356:function(e,n,t){t.d(n,{g:function(){return i}});var r=t(64369);function i(e){return void 0===e&&(e={}),e.portal?(0,r.c)(e.portal):e.authentication?e.authentication.portal:"https://www.arcgis.com/sharing/rest"}},13115:function(e,n,t){function r(e,n){return n.split(".").reduce((function(e,n){return e?e[n]:void 0}),e)}t.d(n,{g:function(){return r}})},72652:function(e,n,t){var r,i,o,a,u,s,c;t.d(n,{A:function(){return r},C:function(){return i},D:function(){return o},I:function(){return c},L:function(){return a},U:function(){return u},V:function(){return s}}),function(e){e.start="start",e.center="center",e.end="end"}(r||(r={})),function(e){e.square="square",e.round="round"}(i||(i={})),function(e){e.none="none",e.low="low",e.medium="medium",e.heavy="heavy"}(o||(o={})),function(e){e.simple="simple",e.dataViz="dataViz",e.moreInfo="moreInfo"}(a||(a={})),function(e){e.before="before",e.after="after",e.below="below"}(u||(u={})),function(e){e.none="none",e.sparkline="sparkline",e.icon="icon",e.logo="logo"}(s||(s={})),function(e){e.thumbnail="thumbnail",e.icon="icon"}(c||(c={}))},29847:function(e,n,t){t.d(n,{_:function(){return r},a:function(){return i}});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},r.apply(this,arguments)};function i(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r}},12969:function(e,n,t){t.d(n,{a:function(){return u},b:function(){return l},c:function(){return i},d:function(){return m},e:function(){return s},f:function(){return d},g:function(){return o},i:function(){return f},m:function(){return c},u:function(){return h},w:function(){return a}});var r=t(13115);function i(e){var n={};if(Array.isArray(e))n=e.map(i);else if("object"===typeof e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];null!=r&&"object"===typeof r?r instanceof Date?n[t]=new Date(r.getTime()):"undefined"!==typeof Blob&&r instanceof Blob?n[t]=new Blob([r],{type:r.type}):n[t]=i(r):n[t]=r}}else n=e;return n}function o(e,n,t){return e?e.reduce((function(e,i){return(0,r.g)(i,n)===t&&(e=i),e}),null):null}function a(e,n){return e.filter((function(e){return e!==n}))}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"i";return"".concat(e).concat(Math.random().toString(36).substr(2,8))}function s(e,n,t){return null!==n&&void 0!==n&&((t=i(t))[e]=n),t}function c(e,n){return null!==e&&void 0!==e&&(n=i(n)).push(e),n}function l(e){return(e=(e=e.toLowerCase()).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi," ")).replace(/(\-|\_|\.|\s)+(.)?/g,(function(e,n,t){return t?t.toUpperCase():""})).replace(/(^|\/)([A-Z])/g,(function(e,n,t){return e.toLowerCase()}))}function h(e,n,t){return t.indexOf(e)===n}var f=function(e){return null==e},m=function(e){var n=Array.from(e);return n[0]=n[0].toUpperCase(),n.join("")};function d(e){return e.reduce((function(e,n){return e.concat(n)}),[])}},9618:function(e,n,t){t.d(n,{a:function(){return h},b:function(){return c},e:function(){return a},g:function(){return l},r:function(){return s},v:function(){return u}});var r=t(12969),i=t(25240),o={arcgis:{label:"ArcGIS Online",url:"https://www.arcgis.com",type:"arcgis"},arcgisQA:{label:"ArcGIS Online QAEXT",url:"https://qaext.arcgis.com",type:"arcgis"},arcgisDEV:{label:"ArcGIS Online DEVEXT",url:"https://devext.arcgis.com",type:"arcgis"},hub:{label:"ArcGIS Hub",url:"https://hub.arcgis.com/api",type:"arcgis-hub"},hubDEV:{label:"ArcGIS Hub DEV",url:"https://hubdev.arcgis.com/api",type:"arcgis-hub"},hubQA:{label:"ArcGIS Hub QA",url:"https://hubqa.arcgis.com/api",type:"arcgis-hub"}};function a(e){return"string"===typeof e&&e in o?o[e]:e}function u(e){var n={};return Array.isArray(e)?n={any:e}:("string"===typeof e&&(n={any:[e]}),"object"===typeof e&&(n=e)),n}function s(e){var n=new Date,t={type:"date-range",from:n.getTime(),to:n.getTime()};switch(e.unit){case"hours":case"days":case"weeks":t.from=t.to-{min:6e4,hours:36e5,days:864e5,weeks:6048e5}[e.unit]*e.num;break;case"months":n.setMonth(n.getMonth()-e.num),t.from=n.getTime();break;case"years":n.setFullYear(n.getFullYear()-e.num),t.from=n.getTime()}return t}function c(e,n,t,o){var a=(0,r.c)(e);return e.authentication&&(a.authentication=i.U.deserialize(e.authentication.serialize())),a.start=n>-1?n:t+1,function(e){return e&&(a.authentication=e),o(a)}}function l(e,n,t){var r=null;return n.thumbnail&&(r="".concat(e,"/community/groups/").concat(n.id,"/info/").concat(n.thumbnail),t&&"public"!==n.access&&(r="".concat(r,"?token=").concat(t))),r}function h(e,n,t){var r=null;return n.thumbnail&&(r="".concat(e,"/community/users/").concat(n.username,"/info/").concat(n.thumbnail),t&&"public"!==n.access&&(r="".concat(r,"?token=").concat(t))),r}}}]);
//# sourceMappingURL=92065.7bfac048.chunk.js.map
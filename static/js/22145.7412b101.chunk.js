"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[22145],{87652:function(t,e,n){n.d(e,{Jb:function(){return v},b3:function(){return p},ff:function(){return m}});var r=n(93433),u=n(74165),i=n(37762),a=n(15861),o=n(62044),s=n(92026),l=n(66978),c=n(86710);function f(t){return void 0!==t.timeInfo}function m(t,e){return d.apply(this,arguments)}function d(){return d=(0,a.Z)((0,u.Z)().mark((function t(e,n){var c,m,d,p,v,w,T,h,Z,g,x;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.length){t.next=2;break}return t.abrupt("return",o.Z.allTime);case 2:return c=e.filter(f),t.next=5,Promise.all(c.map((function(t){return t.load({signal:n})})));case 5:m=[],d=[],p=(0,i.Z)(c);try{for(p.s();!(v=p.n()).done;)"feature"!==(null===(T=v.value)||void 0===T?void 0:T.type)&&"map-image"!==(null===T||void 0===T?void 0:T.type)||null===(w=T.timeInfo)||void 0===w||!w.hasLiveData?d.push(T):m.push(T)}catch(b){p.e(b)}finally{p.f()}if(h=function(t){return(0,s.Wi)(t)||t.isAllTime},!(Z=d.map((function(t){var e;return null===(e=t.timeInfo)||void 0===e?void 0:e.fullTimeExtent}))).some(h)){t.next=11;break}return t.abrupt("return",o.Z.allTime);case 11:return g=m.map(function(){var t=(0,a.Z)((0,u.Z)().mark((function t(e){var r,i,a;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchRecomputedExtents({signal:n});case 2:return i=t.sent,a=i.timeExtent,t.abrupt("return",a||(0,s.Wg)(null===(r=e.timeInfo)||void 0===r?void 0:r.fullTimeExtent));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=14,(0,l.as)(g);case 14:if(!(x=t.sent.map((function(t){return t.value}))).some(h)){t.next=17;break}return t.abrupt("return",o.Z.allTime);case 17:return t.abrupt("return",[].concat((0,r.Z)(x),(0,r.Z)(Z)).filter(s.pC).reduce((function(t,e){return t.union(e)})));case 18:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function p(t){if(!t)return t;var e=t.start,n=t.end;return new o.Z({start:(0,s.pC)(e)?(0,c.Nm)(e,-e.getTimezoneOffset(),"minutes"):e,end:(0,s.pC)(n)?(0,c.Nm)(n,-n.getTimezoneOffset(),"minutes"):n})}function v(t){if(!t)return t;var e=t.start,n=t.end;return new o.Z({start:(0,s.pC)(e)?(0,c.Nm)(e,e.getTimezoneOffset(),"minutes"):e,end:(0,s.pC)(n)?(0,c.Nm)(n,n.getTimezoneOffset(),"minutes"):n})}},22145:function(t,e,n){n.r(e),n.d(e,{getFullTimeExtentFromWebDocument:function(){return l},getModeFromTimeSlider:function(){return f},getStopsFromTimeSlider:function(){return m},getTimeExtentFromTimeSlider:function(){return d}});var r=n(74165),u=n(15861),i=n(62044),a=n(84652),o=n(92026),s=n(87652);function l(t,e){return c.apply(this,arguments)}function c(){return(c=(0,u.Z)((0,r.Z)().mark((function t(e,n){var u,i,a,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null!==(u=null===(i=e.widgets)||void 0===i?void 0:i.timeSlider)&&void 0!==u?u:{},o=a.fullTimeExtent,t.abrupt("return",o||(0,s.ff)(e.allLayers,n));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){var e,n=null!==(e=t.numThumbs)&&void 0!==e?e:2,r=t.currentTimeExtent;if(r){var u=r.start,i=r.end;return(0,o.pC)(u)&&(0,o.pC)(i)&&u.getTime()===i.getTime()?"instant":2===n?"time-window":(0,o.Wi)(u)||0===u.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===n?"time-window":"cumulative-from-start"}function m(t){var e=t.numStops,n=t.stopInterval,r=t.stops;return r?{dates:(0,a.d9)(r)}:n?{interval:n.clone()}:{count:null!==e&&void 0!==e?e:5}}function d(t,e){var n,r=t.currentTimeExtent;if(!r)return null;var u=r.start,a=r.end,o=null!==(n=null!==u&&void 0!==u?u:a)&&void 0!==n?n:null;switch(e){case"time-window":return new i.Z({start:u,end:a});case"cumulative-from-start":return new i.Z({start:null,end:o});case"cumulative-from-end":return new i.Z({start:o,end:null});case"instant":return new i.Z({start:o,end:o})}}}}]);
//# sourceMappingURL=22145.7412b101.chunk.js.map
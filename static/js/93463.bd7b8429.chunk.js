"use strict";(self.webpackChunkhub_layout_versioning=self.webpackChunkhub_layout_versioning||[]).push([[93463],{41388:function(e,t,n){n.d(t,{b:function(){return o}});var i=n(37762),r=n(15671),s=n(43144),u=n(66978),a=n(93963),o=function(){function e(){(0,r.Z)(this,e),this._tasks=new Array,this._running=new a.f(!1)}return(0,s.Z)(e,[{key:"length",get:function(){return this._tasks.length}},{key:"running",get:function(){return this._running.get()}},{key:"destroy",value:function(){this.cancelAll()}},{key:"runTask",value:function(e){for(;!e.done&&this._process(e);)e.madeProgress()}},{key:"push",value:function(e,t,n){var i=this;return this._running.set(!0),new Promise((function(r,s){return i._tasks.push(new _(r,s,e,t,n))}))}},{key:"unshift",value:function(e,t,n){var i=this;return this._running.set(!0),new Promise((function(r,s){return i._tasks.unshift(new _(r,s,e,t,n))}))}},{key:"_process",value:function(e){if(0===this._tasks.length)return!1;var t=this._tasks.shift();try{var n=(0,u.Hc)(t.signal);if(n&&!t.abortCallback)t.reject((0,u.zE)());else{var i,r=n?null===(i=t.abortCallback)||void 0===i?void 0:i.call(t,(0,u.zE)()):t.callback(e);(0,u.y8)(r)?r.then(t.resolve,t.reject):t.resolve(r)}}catch(_){t.reject(_)}return this._running.set(this._tasks.length>0),!0}},{key:"cancelAll",value:function(){var e,t=(0,u.zE)(),n=(0,i.Z)(this._tasks);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.abortCallback){var s=r.abortCallback(t);r.resolve(s)}else r.reject(t)}}catch(a){n.e(a)}finally{n.f()}this._tasks.length=0,this._running.set(!1)}}]),e}(),_=(0,s.Z)((function e(t,n,i,s,u){(0,r.Z)(this,e),this.resolve=t,this.reject=n,this.callback=i,this.signal=s,this.abortCallback=u}))},75248:function(e,t,n){var i;n.d(t,{n:function(){return i}}),function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(i||(i={}))},93463:function(e,t,n){n.d(t,{G5:function(){return N},T8:function(){return r},iQ:function(){return i},sq:function(){return U},z4:function(){return m}});var i,r,s,u=n(15671),a=n(43144),o=n(100),_=(n(93169),n(32718)),h=n(92026),c=n(90941),d=n(27546),l=n(66978),E=n(94172),f=n(38499),T=n(93963),g=n(41388),k=n(32609),I=n(75248);function m(){return new A.Scheduler}(s=i||(i={}))[s.YIELD=1]="YIELD",function(e){e.RESOURCE_CONTROLLER_IMMEDIATE="immediate",e.RESOURCE_CONTROLLER="schedule",e.SLIDE="slide",e.STREAM_DATA_LOADER="stream loader",e.ELEVATION_QUERY="elevation query",e.TERRAIN_SURFACE="terrain",e.SURFACE_GEOMETRY_UPDATES="surface geometry updates",e.LOD_RENDERER="LoD renderer",e.GRAPHICS_CORE="Graphics3D",e.I3S_CONTROLLER="I3S",e.POINT_CLOUD_LAYER="point cloud",e.FEATURE_TILE_FETCHER="feature fetcher",e.OVERLAY="overlay",e.STAGE="stage",e.GRAPHICS_DECONFLICTOR="graphics deconflictor",e.FILTER_VISIBILITY="Graphics3D filter visibility",e.SCALE_VISIBILITY="Graphics3D scale visibility",e.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",e.POINT_OF_INTEREST_FREQUENT="POI frequent",e.POINT_OF_INTEREST_INFREQUENT="POI infrequent",e.LABELER="labeler",e.FEATURE_QUERY_ENGINE="feature query",e.FEATURE_TILE_TREE="feature tile tree",e.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",e.ELEVATION_ALIGNMENT="elevation alignment",e.TEXT_TEXTURE_ATLAS="text texture atlas",e.TEXTURE_UNLOAD="texture unload",e.LINE_OF_SIGHT_TOOL="line of sight tool",e.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",e.ELEVATION_PROFILE="elevation profile",e.SNAPPING="snapping",e.SHADOW_ACCUMULATOR="shadow accumulator",e.CLOUDS_GENERATOR="clouds generator",e[e.TEST_PRIO=1]="TEST_PRIO"}(r||(r={}));var R=new Map([[r.RESOURCE_CONTROLLER_IMMEDIATE,0],[r.RESOURCE_CONTROLLER,4],[r.SLIDE,0],[r.STREAM_DATA_LOADER,0],[r.ELEVATION_QUERY,0],[r.TERRAIN_SURFACE,1],[r.SURFACE_GEOMETRY_UPDATES,1],[r.LOD_RENDERER,2],[r.GRAPHICS_CORE,2],[r.I3S_CONTROLLER,2],[r.POINT_CLOUD_LAYER,2],[r.FEATURE_TILE_FETCHER,2],[r.OVERLAY,4],[r.STAGE,4],[r.GRAPHICS_DECONFLICTOR,4],[r.FILTER_VISIBILITY,4],[r.SCALE_VISIBILITY,4],[r.FRUSTUM_VISIBILITY,4],[r.CLOUDS_GENERATOR,4],[r.POINT_OF_INTEREST_FREQUENT,6],[r.POINT_OF_INTEREST_INFREQUENT,30],[r.LABELER,8],[r.FEATURE_QUERY_ENGINE,8],[r.FEATURE_TILE_TREE,16],[r.FEATURE_TILE_TREE_ACTIVE,0],[r.ELEVATION_ALIGNMENT,12],[r.TEXT_TEXTURE_ATLAS,12],[r.TEXTURE_UNLOAD,12],[r.LINE_OF_SIGHT_TOOL,16],[r.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[r.SNAPPING,0],[r.SHADOW_ACCUMULATOR,30]]);function v(e){return R.has(e)?R.get(e):"number"==typeof e?e:1}var A,y,b=(0,f.HA)(6.5),p=(0,f.HA)(1),L=(0,f.HA)(30),S=(0,f.HA)(1e3/30),O=(0,f.HA)(100);!function(e){var t=function(){function e(){var t=this;(0,u.Z)(this,e),this._updating=new T.f(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new c.Z("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new s,this._state=I.n.INTERACTING,this._tasks=new d.Z,this._runQueue=new d.Z,this._load=0,this._idleStateCallbacks=new d.Z,this._idleUpdatesStartFired=!1,this._forceTask=!1,this._debug=!1,this._debugHandle=(0,E.YP)((function(){return k.Z.SCHEDULER_LOG_SLOW_TASKS}),(function(e){return t._debug=e}),E.nn);for(var n=0,i=Object.keys(r);n<i.length;n++){var a=i[n];this.performanceInfo.tasks.set(r[a],new c.Z(r[a]))}var o=this;this._test={FRAME_SAFETY_BUDGET:b,INTERACTING_BUDGET:S,IDLE_BUDGET:O,get availableBudget(){return o._budget.budget},usedBudget:0,getBudget:function(){return o._budget},setBudget:function(e){return o._budget=e},updateTask:function(e){return t._updateTask(e)},getState:function(e){return t._getState(e)},getRuntime:function(e){return t._getRuntime(e)},frameTaskTimes:this._frameTaskTimes,resetRuntimes:function(){return t._resetRuntimes()},getRunning:function(){return t._getRunning()}}}return(0,a.Z)(e,[{key:"updating",get:function(){return this._updating.get()}},{key:"_updatingChanged",value:function(){this._updating.set(this._tasks.some((function(e){return e.needsUpdate})))}},{key:"destroy",value:function(){this._tasks.toArray().forEach((function(e){return e.remove()})),this._tasks.clear(),(0,h.hw)(this._debugHandle),this._microTaskQueued=!1,this._updatingChanged()}},{key:"taskRunningChanged",value:function(e){var t=this;this._updatingChanged(),e&&this._budget.remaining>0&&!this._microTaskQueued&&(this._microTaskQueued=!0,queueMicrotask((function(){t._microTaskQueued&&(t._microTaskQueued=!1,t._budget.remaining>0&&t._schedule()&&t.frame())})))}},{key:"registerTask",value:function(e,t){var i=v(e),r=new n(this,e,t,i);return this._tasks.push(r),this._updatingChanged(),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new c.Z(e)),r}},{key:"registerIdleStateCallbacks",value:function(e,t){var n=this,i={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(i),this.state===I.n.IDLE&&this._idleUpdatesStartFired&&i.idleBegin();var r=this;return{remove:function(){return n._removeIdleStateCallbacks(i)},set idleBegin(e){r._idleUpdatesStartFired&&(i.idleEnd(),r._state===I.n.IDLE&&e()),i.idleBegin=e},set idleEnd(e){i.idleEnd=e}}}},{key:"load",get:function(){return this._load}},{key:"state",get:function(){return this._state},set:function(e){this._state!==e&&(this._state=e,this.state!==I.n.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((function(e){return e.idleEnd()}))))}},{key:"updateBudget",value:function(e){this._test.usedBudget=0,++this._frameNumber;var t=b,n=e.frameDuration,i=p;switch(this.state){case I.n.IDLE:t=(0,f.HA)(0),n=(0,f.HA)(Math.max(O,e.frameDuration)),i=L;break;case I.n.INTERACTING:n=(0,f.HA)(Math.max(S,e.frameDuration));case I.n.ANIMATING:}return n=(0,f.HA)(n-e.elapsedFrameTime-t),this.state!==I.n.IDLE&&n<p&&!this._forceTask?(this._forceTask=!0,!1):(n=(0,f.HA)(Math.max(n,i)),this._budget.reset(n,this.state),this._updateLoad(),this._schedule())}},{key:"frame",value:function(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case I.n.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((function(e){return e.idleBegin()}))),this._runIdle();break;case I.n.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}},{key:"stopFrame",value:function(){this._budget.reset((0,f.HA)(0),this._state),this._budget.madeProgress()}},{key:"_removeIdleStateCallbacks",value:function(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}},{key:"removeTask",value:function(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e),this._updatingChanged()}},{key:"_updateTask",value:function(e){this._tasks.forAll((function(t){t.name===e&&t.setPriority(e)}))}},{key:"_getState",value:function(e){if(this._runQueue.some((function(t){return t.name===e})))return y.SCHEDULED;var t=y.IDLE;return this._tasks.forAll((function(n){n.name===e&&n.needsUpdate&&(n.schedulePriority<=1?t=y.READY:t!==y.READY&&(t=y.WAITING))})),t}},{key:"_getRuntime",value:function(e){var t=0;return this._tasks.forAll((function(n){n.name===e&&(t+=n.runtime)})),t}},{key:"_resetRuntimes",value:function(){this._tasks.forAll((function(e){return e.runtime=0}))}},{key:"_getRunning",value:function(){var e=new Map;if(this._tasks.forAll((function(t){t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;var t="";return e.forEach((function(e,n){t+=e>1?" ".concat(e,"x ").concat(n):" ".concat(n)})),t}},{key:"_runIdle",value:function(){this._run()}},{key:"_runInteracting",value:function(){this._run()}},{key:"_runAnimating",value:function(){this._run()}},{key:"_updateLoad",value:function(){var e=this._tasks.reduce((function(e,t){return t.needsUpdate?++e:e}),0);this._load=.9*this._load+e*(1-.9)}},{key:"_schedule",value:function(){var e=this,t=function(){var t=!1,n=0;if(e._tasks.forAll((function(i){i.needsUpdate&&0!==i.schedulePriority&&0!==i.basePriority&&i.blockFrame!==e._frameNumber&&(t=!0,n=Math.max(n,i.basePriority),1===i.schedulePriority?(i.schedulePriority=0,e._runQueue.push(i)):--i.schedulePriority)})),!t)return{v:(e._updatingChanged(),!1)}};for(this._runQueue.filterInPlace((function(e){return!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1)})),this._tasks.forAll((function(t){0===t.basePriority&&t.needsUpdate&&!e._runQueue.includes(t)&&t.blockFrame!==e._frameNumber&&e._runQueue.unshift(t)}));0===this._runQueue.length;){var n=t();if("object"===typeof n)return n.v}return this._updatingChanged(),!0}},{key:"_run",value:function(){var e=this._budget.now();this._startFrameTaskTimes();do{for(;this._runQueue.length>0;){var t=this._budget.now(),n=this._runQueue.pop();this._budget.resetProgress();try{n.task.runTask(this._budget)===i.YIELD&&(n.blockFrame=this._frameNumber)}catch(u){_.Z.getLogger("esri.views.support.Scheduler").error('Exception in task "'.concat(n.name,'"'),u)}!this._budget.hasProgressed&&n.blockFrame!==this._frameNumber&&n.needsUpdate&&(n.name,r.I3S_CONTROLLER,n.blockFrame=this._frameNumber),n.schedulePriority=n.basePriority;var s=this._budget.now()-t;if(n.runtime+=s,this._frameTaskTimes.set(n.priority,this._frameTaskTimes.get(n.priority)+s),this._debug&&s>2*this._budget.budget&&console.log("Task",n.name,"used",s,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updatingChanged(),void this._recordFrameTaskTimes(this._budget.now()-e)}}while(this._schedule());this._updatingChanged(),this._recordFrameTaskTimes(this._budget.now()-e)}},{key:"_startFrameTaskTimes",value:function(){for(var e=0,t=Object.keys(r);e<t.length;e++){var n=t[e];this._frameTaskTimes.set(r[n],0)}}},{key:"_recordFrameTaskTimes",value:function(e){var t=this;this._frameTaskTimes.forEach((function(e,n){return t.performanceInfo.tasks.get(n).record(e)})),this.performanceInfo.total.record(e)}},{key:"test",get:function(){return this._test}}]),e}();e.Scheduler=t;var n=function(){function e(t,n,i,r){var s=this;(0,u.Z)(this,e),this._scheduler=t,this.name=n,this._basePriority=r,this.blockFrame=0,this.runtime=0,this._queue=new g.b,this._handles=new o.Z,this.schedulePriority=this._basePriority,this._task=new T.f((0,h.pC)(i)?i:this._queue),this._handles.add((0,E.gx)((function(){return s.task.running}),(function(e){return t.taskRunningChanged(e)})))}return(0,a.Z)(e,[{key:"task",get:function(){return this._task.get()}},{key:"updating",get:function(){return this._queue.running}},{key:"remove",value:function(){this.processQueue(N),this._scheduler.removeTask(this),this.schedule=U.schedule,this.reschedule=U.reschedule,this._handles.destroy()}},{key:"basePriority",get:function(){return this._basePriority}},{key:"setPriority",value:function(e){this.name=e;var t=v(e);0!==this._basePriority&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t}},{key:"priority",get:function(){return this.name},set:function(e){this.setPriority(e)}},{key:"needsUpdate",get:function(){return this.updating||this.task.running}},{key:"schedule",value:function(e,t,n){return this._queue.push(e,t,n)}},{key:"reschedule",value:function(e,t,n){return this._queue.unshift(e,t,n)}},{key:"processQueue",value:function(e){this._queue.runTask(e)}}]),e}(),s=function(){function e(){(0,u.Z)(this,e),this._begin="undefined"!=typeof performance?performance.now():0,this._budget=0,this._state=I.n.IDLE,this._done=!1,this._progressed=!1,this._enabled=!0}return(0,a.Z)(e,[{key:"run",value:function(e){return!this.done&&(!0===e()&&this.madeProgress(),!0)}},{key:"done",get:function(){return this._done}},{key:"budget",get:function(){return this._budget}},{key:"madeProgress",value:function(){return this._progressed=!0,this._done=this.elapsed>=this._budget&&this._enabled,this._done}},{key:"state",get:function(){return this._state}},{key:"enabled",get:function(){return this._enabled},set:function(e){this._enabled=e}},{key:"reset",value:function(e,t){this._begin=this.now(),this._budget=e,this._state=t,this.resetProgress()}},{key:"remaining",get:function(){return Math.max(this._budget-this.elapsed,0)}},{key:"now",value:function(){return performance.now()}},{key:"elapsed",get:function(){return performance.now()-this._begin}},{key:"resetProgress",value:function(){this._progressed=!1,this._done=!1}},{key:"hasProgressed",get:function(){return this._progressed}}]),e}();e.Budget=s}(A||(A={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(y||(y={}));var N=function(){var e=new A.Budget;return e.enabled=!1,e}(),C=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,[{key:"remove",value:function(){}},{key:"processQueue",value:function(){}},{key:"schedule",value:function(e,t,n){try{if((0,l.Hc)(t)){var i=(0,l.zE)();return n?Promise.resolve(n(i)):Promise.reject(i)}return(0,l.gx)(e(N))}catch(r){return Promise.reject(r)}}},{key:"reschedule",value:function(e,t,n){return this.schedule(e,t,n)}}]),e}(),U=new C},32609:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(43144),r=n(15671),s=n(60136),u=n(92572),a=n(27366),o=n(31319),_=n(49861),h=(n(25243),n(63780),n(69912)),c=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).SCHEDULER_LOG_SLOW_TASKS=!1,e.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1,e}return(0,i.Z)(n)}(o.Z);(0,a._)([(0,_.Cb)()],c.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),(0,a._)([(0,_.Cb)()],c.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0);var d=new(c=(0,a._)([(0,h.j)("esri.views.support.DebugFlags")],c))}}]);
//# sourceMappingURL=93463.bd7b8429.chunk.js.map
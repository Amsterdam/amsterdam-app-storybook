import{i as f}from"./invariant-ea487af3.js";import{r as m,c as _}from"./useThemable-7e23fae8.js";import{E as g}from"./EventEmitter-2b0932c2.js";class T{constructor(t){var e=t.onMoreTasks;this._onMoreTasks=e,this._queueStack=[{tasks:[],popable:!0}]}enqueue(t){this._getCurrentQueue().push(t)}enqueueTasks(t){t.forEach(e=>this.enqueue(e))}cancelTasks(t){this._queueStack=this._queueStack.map(e=>m(m({},e),{},{tasks:e.tasks.filter(r=>t.indexOf(r)===-1)})).filter((e,r)=>e.tasks.length>0||r===0)}hasTasksToProcess(){return this._getCurrentQueue().length>0}processNext(){var t=this._getCurrentQueue();if(t.length){var e=t.shift();try{typeof e=="object"&&e.gen?this._genPromise(e):typeof e=="object"&&e.run?e.run():(f(typeof e=="function",`Expected Function, SimpleTask, or PromiseTask, but got:
`+JSON.stringify(e,null,2)),e())}catch(r){throw r.message="TaskQueue: Error with task "+(e.name||"")+": "+r.message,r}}}_getCurrentQueue(){var t=this._queueStack.length-1,e=this._queueStack[t];return e.popable&&e.tasks.length===0&&t>0?(this._queueStack.pop(),this._getCurrentQueue()):e.tasks}_genPromise(t){var e=this._queueStack.push({tasks:[],popable:!1}),r=e-1,k=this._queueStack[r];t.gen().then(()=>{k.popable=!0,this.hasTasksToProcess()&&this._onMoreTasks()}).catch(d=>{setTimeout(()=>{throw d.message="TaskQueue: Error resolving Promise in task "+t.name+": "+d.message,d},0)})}}const S=T;var q=function(t,e){return setTimeout(()=>{var r=Date.now();t({didTimeout:!1,timeRemaining(){return Math.max(0,50-(Date.now()-r))}})},1)},b=_&&typeof window.requestIdleCallback<"u",w=b?window.requestIdleCallback:q;const I=w;var o=new g,h={Events:{interactionStart:"interactionStart",interactionComplete:"interactionComplete"},runAfterInteractions(a){var t=[],e=new Promise(r=>{n(),a&&t.push(a),t.push({run:r,name:"resolve "+(a&&a.name||"?")}),c.enqueueTasks(t)});return{then:e.then.bind(e),done:e.then.bind(e),cancel:()=>{c.cancelTasks(t)}}},createInteractionHandle(){n();var a=++C;return u.add(a),a},clearInteractionHandle(a){f(!!a,"Must provide a handle to clear."),n(),u.delete(a),p.add(a)},addListener:o.addListener.bind(o),setDeadline(a){l=a}},s=new Set,u=new Set,p=new Set,c=new S({onMoreTasks:n}),i=0,C=0,l=-1;function n(){i||(l>0?i=setTimeout(v):i=I(v))}function v(){i=0;var a=s.size;u.forEach(r=>s.add(r)),p.forEach(r=>s.delete(r));var t=s.size;if(a!==0&&t===0?o.emit(h.Events.interactionComplete):a===0&&t!==0&&o.emit(h.Events.interactionStart),t===0){for(var e=Date.now();c.hasTasksToProcess();)if(c.processNext(),l>0&&Date.now()-e>=l){n();break}}u.clear(),p.clear()}const x=h;export{x as I};
//# sourceMappingURL=index-546e8b88.js.map

import{P as m,i as v}from"./invariant-f1a82cf7.js";class d{constructor(){this._registry={}}addListener(e,t,r){var i=h(this._registry,e),n={context:r,listener:t,remove(){i.delete(n)}};return i.add(n),n}emit(e){var t=this._registry[e];if(t!=null){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];for(var s=0,o=[...t];s<o.length;s++){var u=o[s];u.listener.apply(u.context,i)}}}removeAllListeners(e){e==null?this._registry={}:delete this._registry[e]}listenerCount(e){var t=this._registry[e];return t==null?0:t.size}}function h(a,e){var t=a[e];return t==null&&(t=new Set,a[e]=t),t}const l=new d;class L{constructor(e){m.OS==="ios"&&(v(e!=null,"`new NativeEventEmitter()` requires a non-null argument."),this._nativeModule=e)}addListener(e,t,r){var i;(i=this._nativeModule)==null||i.addListener(e);var n=l.addListener(e,t,r);return{remove:()=>{if(n!=null){var s;(s=this._nativeModule)==null||s.removeListeners(1),n.remove(),n=null}}}}removeListener(e,t){var r;(r=this._nativeModule)==null||r.removeListeners(1),l.removeListener(e,t)}emit(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];l.emit(e,...r)}removeAllListeners(e){var t;v(e!=null,"`NativeEventEmitter.removeAllListener()` requires a non-null argument."),(t=this._nativeModule)==null||t.removeListeners(this.listenerCount(e)),l.removeAllListeners(e)}listenerCount(e){return l.listenerCount(e)}}export{d as E,L as N,l as R};

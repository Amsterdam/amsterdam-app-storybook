import{i as o}from"./index-DOpK3Ow6.js";import{c as l}from"./index-CEE--Juu.js";class m{static alert(){}}var c=l?window.location.href:"";class v{constructor(){this._eventCallbacks={}}_dispatchEvent(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=this._eventCallbacks[e];a!=null&&Array.isArray(a)&&a.map(s=>{s(...n)})}addEventListener(e,t){var n=this;return n._eventCallbacks[e]||(n._eventCallbacks[e]=[t]),n._eventCallbacks[e].push(t),{remove(){var r=n._eventCallbacks[e],a=r.filter(s=>s.toString()!==t.toString());n._eventCallbacks[e]=a}}}removeEventListener(e,t){console.error("Linking.removeEventListener('"+e+"', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `Linking.addEventListener`.");var n=this._eventCallbacks[e],r=n.filter(a=>a.toString()!==t.toString());this._eventCallbacks[e]=r}canOpenURL(){return Promise.resolve(!0)}getInitialURL(){return Promise.resolve(c)}openURL(e,t){arguments.length===1&&(t="_blank");try{return d(e,t),this._dispatchEvent("onOpen",e),Promise.resolve()}catch(n){return Promise.reject(n)}}_validateURL(e){o(typeof e=="string","Invalid URL: should be a string. Was: "+e),o(e,"Invalid URL: cannot be empty")}}var d=(i,e)=>{if(l){var t=new URL(i,window.location).toString();t.indexOf("tel:")===0?window.location=t:window.open(t,e,"noopener")}};const L=new v;export{m as A,L};

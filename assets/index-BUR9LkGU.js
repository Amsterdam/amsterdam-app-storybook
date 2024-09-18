import{s as E,_ as k,e as ce,f as ve,h as ge}from"./index-Us49mgpR.js";import{_ as me}from"./extends-CF3RwP-h.js";import{r as u}from"./index-CBqU2yxZ.js";import{D as $}from"./index-DVCMAXez.js";import{T as he}from"./TextAncestorContext-CxUfpxkU.js";import{V as H}from"./index-BySreB3I.js";var be=[];function Q(e){return be[e-1]}var ye=/^data:/;class s{static has(t){var r=s._entries,a=ye.test(t);return a||!!r[t]}static add(t){var r=s._entries,a=Date.now();r[t]?(r[t].lastUsedTimestamp=a,r[t].refCount+=1):r[t]={lastUsedTimestamp:a,refCount:1}}static remove(t){var r=s._entries;r[t]&&(r[t].refCount-=1),s._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var t=s._entries,r=Object.keys(t);if(r.length+1>s._maximumEntries){var a,n;r.forEach(o=>{var l=t[o];(!n||l.lastUsedTimestamp<n.lastUsedTimestamp)&&l.refCount===0&&(a=o,n=l)}),a&&delete t[a]}}}s._maximumEntries=256;s._entries={};var M=0,I={},v={abort(e){var t=I[""+e];t&&(t.onerror=null,t.onload=null,t=null,delete I[""+e])},getSize(e,t,r){var a=!1,n=setInterval(l,16),o=v.load(e,l,g);function l(){var d=I[""+o];if(d){var i=d.naturalHeight,f=d.naturalWidth;i&&f&&(t(f,i),a=!0)}a&&(v.abort(o),clearInterval(n))}function g(){typeof r=="function"&&r(),v.abort(o),clearInterval(n)}},has(e){return s.has(e)},load(e,t,r){M+=1;var a=new window.Image;return a.onerror=r,a.onload=n=>{var o=()=>t({nativeEvent:n});typeof a.decode=="function"?a.decode().then(o,o):setTimeout(o,0)},a.src=e,I[""+M]=a,M},prefetch(e){return new Promise((t,r)=>{v.load(e,()=>{s.add(e),s.remove(e),t()},r)})},queryCache(e){var t={};return e.forEach(r=>{s.has(r)&&(t[r]="disk/memory")}),Promise.resolve(t)}};class w{static get(){return $.get("window").scale}static getFontScale(){return $.get("window").fontScale||w.get()}static getPixelSizeForLayoutSize(t){return Math.round(t*w.get())}static roundToNearestPixel(t){var r=w.get();return Math.round(t*r)/r}}var Se=["aria-label","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],pe="ERRORED",O="LOADED",J="LOADING",Ee="IDLE",we=0,ze=/^(data:image\/svg\+xml;utf8,)(.*)/;function Le(e,t){return e&&t!=null?u.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},u.createElement("defs",null,u.createElement("filter",{id:"tint-"+t,suppressHydrationWarning:!0},u.createElement("feFlood",{floodColor:""+e,key:e}),u.createElement("feComposite",{in2:"SourceAlpha",operator:"atop"})))):null}function xe(e,t,r,a){var n=E.flatten(e),o=n.filter,l=n.resizeMode,g=n.shadowOffset,d=n.tintColor;n.resizeMode,n.tintColor;var i=[],f=null;if(o&&i.push(o),t&&i.push("blur("+t+"px)"),g){var h=ge(n);h&&i.push("drop-shadow("+h+")")}return(a||d)&&r!=null&&i.push("url(#tint-"+r+")"),i.length>0&&(f=i.join(" ")),[l,f,d]}function ke(e){if(typeof e=="number"){var t=Q(e),r=t.height,a=t.width;return{height:r,width:a}}else if(e!=null&&!Array.isArray(e)&&typeof e=="object"){var n=e.height,o=e.width;return{height:n,width:o}}}function P(e){var t=null;if(typeof e=="number"){var r=Q(e);if(r==null)throw new Error('Image: asset with ID "'+e+'" could not be found. Please check the image source or packager.');var a=r.scales[0];if(r.scales.length>1){var n=w.get();a=r.scales.reduce((f,h)=>Math.abs(h-n)<Math.abs(f-n)?h:f)}var o=a!==1?"@"+a+"x":"";t=r?r.httpServerLocation+"/"+r.name+o+"."+r.type:""}else typeof e=="string"?t=e:e&&typeof e.uri=="string"&&(t=e.uri);if(t){var l=t.match(ze);if(l){var g=l[1],d=l[2],i=encodeURIComponent(d);return""+g+i}}return t}var X=u.forwardRef((e,t)=>{var r=e["aria-label"],a=e.blurRadius,n=e.defaultSource,o=e.draggable,l=e.onError,g=e.onLayout,d=e.onLoad,i=e.onLoadEnd,f=e.onLoadStart,h=e.pointerEvents,D=e.source,T=e.style,Y=ce(e,Se),_=u.useState(()=>{var c=P(D);if(c!=null){var m=v.has(c);if(m)return O}return Ee}),N=_[0],z=_[1],j=u.useState({}),q=j[0],Z=j[1],K=u.useContext(he),C=u.useRef(null),F=u.useRef(we++),b=u.useRef(null),ee=N===O||N===J&&n==null,R=xe(T,a,F.current,e.tintColor),te=R[0],re=R[1],ae=R[2],y=e.resizeMode||te||"cover",ne=e.tintColor||ae,B=ee?D:n,L=P(B),oe=ke(B),ie=L?'url("'+L+'")':null,U=ue(),le=L?ve("img",{alt:r||"",style:p.accessibilityImage$raw,draggable:o||!1,ref:C,src:L}):null;function ue(){if(C.current!=null&&(y==="center"||y==="repeat")){var c=C.current,m=c.naturalHeight,S=c.naturalWidth,V=q.height,G=q.width;if(m&&S&&V&&G){var W=Math.min(1,G/S,V/m),de=Math.ceil(W*S),fe=Math.ceil(W*m);return de+"px "+fe+"px"}}}function se(c){if(y==="center"||y==="repeat"||g){var m=c.nativeEvent.layout;g&&g(c),Z(m)}}var x=P(D);return u.useEffect(()=>{c(),x!=null&&(z(J),f&&f(),b.current=v.load(x,function(S){z(O),d&&d(S),i&&i()},function(){z(pe),l&&l({nativeEvent:{error:"Failed to load resource "+x+" (404)"}}),i&&i()}));function c(){b.current!=null&&(v.abort(b.current),b.current=null)}return c},[x,b,z,l,d,i,f]),u.createElement(H,me({},Y,{"aria-label":r,onLayout:se,pointerEvents:h,ref:t,style:[p.root,K&&p.inline,oe,T,p.undo,{boxShadow:null}]}),u.createElement(H,{style:[p.image,Ie[y],{backgroundImage:ie,filter:re},U!=null&&{backgroundSize:U}],suppressHydrationWarning:!0}),le,Le(ne,F.current))});X.displayName="Image";var A=X;A.getSize=function(e,t,r){v.getSize(e,t,r)};A.prefetch=function(e){return v.prefetch(e)};A.queryCache=function(e){return v.queryCache(e)};var p=E.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:k(k({},E.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:k(k({},E.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),Ie=E.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}});export{A as I,w as P};
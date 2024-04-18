import{i as Ye}from"./redux-toolkit.esm-d86c6d3e.js";import{a as Ze}from"./development-fba0c344.js";import{g as Ke,c as je,t as er}from"./callBound-55a1829f.js";import{a as rr,c as tr}from"./_commonjsHelpers-de833af9.js";var Ae=(r=>(r.default="default",r.internetConnection="internetConnection",r))(Ae||{}),v=(r=>(r.coordinates="Failed to get coordinates to determine location",r.getRedirectsUrl="Get redirects url with key",r.hideSplashScreen="Hide splash screen failed",r.isScreenReaderEnabled="Screenreader enabled check failed",r.notSupportedStoredUrl="Can not use url to open store",r.openMailUrl="Open mail url failed",r.openPhoneUrl="Open phone url failed",r.openStore="Open app store",r.openWebUrl="Open web url failed",r.pickingImageFailed="Picking image from device failed",r.piwikInitialization="Piwik initialization failed",r.piwikTrackCustomEvent="Piwik trackCustomEvent failed",r.piwikTrackOutlink="Piwik trackOutlink failed",r.piwikTrackScreen="Piwik trackScreen failed",r.piwikTrackSearch="Piwik trackSearch failed",r.redirectNotFound="Redirect not found",r.registerDevice="Register device for push notifications failed",r.requestLocationPermission="Request location permission failed",r.sentryMiddleWareError="Sentry middleware logger failed",r.takingPhotoFailed="Taking photo failed",r.updatePermission="Update permission failed",r))(v||{});const nr={[v.coordinates]:["error"],[v.getRedirectsUrl]:["redirectsKey"],[v.notSupportedStoredUrl]:[],[v.hideSplashScreen]:["error"],[v.isScreenReaderEnabled]:["error"],[v.openMailUrl]:[],[v.openPhoneUrl]:[],[v.openStore]:["error"],[v.openWebUrl]:["url"],[v.pickingImageFailed]:["error","code","viaCamera"],[v.piwikInitialization]:["error"],[v.piwikTrackCustomEvent]:["category","action","name","path","value"],[v.piwikTrackOutlink]:["url"],[v.piwikTrackScreen]:["path"],[v.piwikTrackSearch]:[],[v.redirectNotFound]:["urlKey"],[v.registerDevice]:["error"],[v.requestLocationPermission]:["error"],[v.sentryMiddleWareError]:["endpoint","error","originalStatus","status","url"],[v.takingPhotoFailed]:["code","message","viaCamera"],[v.updatePermission]:["error","permission","request"]};var We=(r=>(r.registerDevice="registerDevice",r.unregisterDevice="unregisterDevice",r))(We||{});const ar=(r,e)=>{var t;if(!(!e||Object.keys(e).length===0))return(t=nr[r])==null?void 0:t.reduce((n,i)=>({...n,[i]:e[i]}),{})},ir=(r,e)=>r===We.unregisterDevice&&(e==null?void 0:e.status)===404&&(e==null?void 0:e.data)==="No record found",lr=[0,"0"],or=r=>r!==void 0&&!lr.includes(r),fr={},ur=Object.freeze(Object.defineProperty({__proto__:null,default:fr},Symbol.toStringTag,{value:"Module"})),cr=rr(ur);var me=typeof Map=="function"&&Map.prototype,ne=Object.getOwnPropertyDescriptor&&me?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,re=me&&ne&&typeof ne.get=="function"?ne.get:null,Oe=me&&Map.prototype.forEach,he=typeof Set=="function"&&Set.prototype,ae=Object.getOwnPropertyDescriptor&&he?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,te=he&&ae&&typeof ae.get=="function"?ae.get:null,be=he&&Set.prototype.forEach,sr=typeof WeakMap=="function"&&WeakMap.prototype,G=sr?WeakMap.prototype.has:null,pr=typeof WeakSet=="function"&&WeakSet.prototype,V=pr?WeakSet.prototype.has:null,dr=typeof WeakRef=="function"&&WeakRef.prototype,$e=dr?WeakRef.prototype.deref:null,yr=Boolean.prototype.valueOf,vr=Object.prototype.toString,mr=Function.prototype.toString,hr=String.prototype.match,ge=String.prototype.slice,D=String.prototype.replace,gr=String.prototype.toUpperCase,xe=String.prototype.toLowerCase,Ie=RegExp.prototype.test,ke=Array.prototype.concat,x=Array.prototype.join,Sr=Array.prototype.slice,Me=Math.floor,ce=typeof BigInt=="function"?BigInt.prototype.valueOf:null,ie=Object.getOwnPropertySymbols,se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,H=typeof Symbol=="function"&&typeof Symbol.iterator=="object",S=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===H||"symbol")?Symbol.toStringTag:null,ze=Object.prototype.propertyIsEnumerable,Ee=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function Ne(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||Ie.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-Me(-r):Me(r);if(n!==r){var i=String(n),a=ge.call(e,i.length+1);return D.call(i,t,"$&_")+"."+D.call(D.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return D.call(e,t,"$&_")}var pe=cr,Pe=pe.custom,Te=Be(Pe)?Pe:null,wr=function r(e,t,n,i){var a=t||{};if(T(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(T(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var o=T(a,"customInspect")?a.customInspect:!0;if(typeof o!="boolean"&&o!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(T(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(T(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var u=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return qe(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return u?Ne(e,l):l}if(typeof e=="bigint"){var f=String(e)+"n";return u?Ne(e,f):f}var s=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=s&&s>0&&typeof e=="object")return de(e)?"[Array]":"[Object]";var y=Ir(a,n);if(typeof i>"u")i=[];else if(Qe(i,e)>=0)return"[Circular]";function p(M,I,Y){if(I&&(i=Sr.call(i),i.push(I)),Y){var z={depth:a.depth};return T(a,"quoteStyle")&&(z.quoteStyle=a.quoteStyle),r(M,z,n+1,i)}return r(M,a,n+1,i)}if(typeof e=="function"&&!De(e)){var m=Pr(e),d=Z(e,p);return"[Function"+(m?": "+m:" (anonymous)")+"]"+(d.length>0?" { "+x.call(d,", ")+" }":"")}if(Be(e)){var w=H?D.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):se.call(e);return typeof e=="object"&&!H?U(w):w}if(_r(e)){for(var O="<"+xe.call(String(e.nodeName)),c=e.attributes||[],k=0;k<c.length;k++)O+=" "+c[k].name+"="+He(Or(c[k].value),"double",a);return O+=">",e.childNodes&&e.childNodes.length&&(O+="..."),O+="</"+xe.call(String(e.nodeName))+">",O}if(de(e)){if(e.length===0)return"[]";var N=Z(e,p);return y&&!Wr(N)?"["+ye(N,y)+"]":"[ "+x.call(N,", ")+" ]"}if($r(e)){var _=Z(e,p);return!("cause"in Error.prototype)&&"cause"in e&&!ze.call(e,"cause")?"{ ["+String(e)+"] "+x.call(ke.call("[cause]: "+p(e.cause),_),", ")+" }":_.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+x.call(_,", ")+" }"}if(typeof e=="object"&&o){if(Te&&typeof e[Te]=="function"&&pe)return pe(e,{depth:s-n});if(o!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Tr(e)){var q=[];return Oe&&Oe.call(e,function(M,I){q.push(p(I,e,!0)+" => "+p(M,e))}),Fe("Map",re.call(e),q,y)}if(Rr(e)){var X=[];return be&&be.call(e,function(M){X.push(p(M,e))}),Fe("Set",te.call(e),X,y)}if(Dr(e))return le("WeakMap");if(Cr(e))return le("WeakSet");if(Fr(e))return le("WeakRef");if(kr(e))return U(p(Number(e)));if(Er(e))return U(p(ce.call(e)));if(Mr(e))return U(yr.call(e));if(xr(e))return U(p(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(e===tr)return"{ [object globalThis] }";if(!br(e)&&!De(e)){var R=Z(e,p),P=Ee?Ee(e)===Object.prototype:e instanceof Object||e.constructor===Object,A=e instanceof Object?"":"null prototype",W=!P&&S&&Object(e)===e&&S in e?ge.call(F(e),8,-1):A?"Object":"",L=P||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",b=L+(W||A?"["+x.call(ke.call([],W||[],A||[]),": ")+"] ":"");return R.length===0?b+"{}":y?b+"{"+ye(R,y)+"}":b+"{ "+x.call(R,", ")+" }"}return String(e)};function He(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function Or(r){return D.call(String(r),/"/g,"&quot;")}function de(r){return F(r)==="[object Array]"&&(!S||!(typeof r=="object"&&S in r))}function br(r){return F(r)==="[object Date]"&&(!S||!(typeof r=="object"&&S in r))}function De(r){return F(r)==="[object RegExp]"&&(!S||!(typeof r=="object"&&S in r))}function $r(r){return F(r)==="[object Error]"&&(!S||!(typeof r=="object"&&S in r))}function xr(r){return F(r)==="[object String]"&&(!S||!(typeof r=="object"&&S in r))}function kr(r){return F(r)==="[object Number]"&&(!S||!(typeof r=="object"&&S in r))}function Mr(r){return F(r)==="[object Boolean]"&&(!S||!(typeof r=="object"&&S in r))}function Be(r){if(H)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!se)return!1;try{return se.call(r),!0}catch{}return!1}function Er(r){if(!r||typeof r!="object"||!ce)return!1;try{return ce.call(r),!0}catch{}return!1}var Nr=Object.prototype.hasOwnProperty||function(r){return r in this};function T(r,e){return Nr.call(r,e)}function F(r){return vr.call(r)}function Pr(r){if(r.name)return r.name;var e=hr.call(mr.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function Qe(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function Tr(r){if(!re||!r||typeof r!="object")return!1;try{re.call(r);try{te.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function Dr(r){if(!G||!r||typeof r!="object")return!1;try{G.call(r,G);try{V.call(r,V)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function Fr(r){if(!$e||!r||typeof r!="object")return!1;try{return $e.call(r),!0}catch{}return!1}function Rr(r){if(!te||!r||typeof r!="object")return!1;try{te.call(r);try{re.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function Cr(r){if(!V||!r||typeof r!="object")return!1;try{V.call(r,V);try{G.call(r,G)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function _r(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function qe(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return qe(ge.call(r,0,e.maxStringLength),e)+n}var i=D.call(D.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Ar);return He(i,"single",e)}function Ar(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+gr.call(e.toString(16))}function U(r){return"Object("+r+")"}function le(r){return r+" { ? }"}function Fe(r,e,t,n){var i=n?ye(t,n):x.call(t,", ");return r+" ("+e+") {"+i+"}"}function Wr(r){for(var e=0;e<r.length;e++)if(Qe(r[e],`
`)>=0)return!1;return!0}function Ir(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=x.call(Array(r.indent+1)," ");else return null;return{base:t,prev:x.call(Array(e+1),t)}}function ye(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+x.call(r,","+t)+`
`+e.prev}function Z(r,e){var t=de(r),n=[];if(t){n.length=r.length;for(var i=0;i<r.length;i++)n[i]=T(r,i)?e(r[i],r):""}var a=typeof ie=="function"?ie(r):[],o;if(H){o={};for(var u=0;u<a.length;u++)o["$"+a[u]]=a[u]}for(var l in r)T(r,l)&&(t&&String(Number(l))===l&&l<r.length||H&&o["$"+l]instanceof Symbol||(Ie.call(/[^\w$]/,l)?n.push(e(l,r)+": "+e(r[l],r)):n.push(l+": "+e(r[l],r))));if(typeof ie=="function")for(var f=0;f<a.length;f++)ze.call(r,a[f])&&n.push("["+e(a[f])+"]: "+e(r[a[f]],r));return n}var Le=Ke,Q=je,zr=wr,Hr=er,K=Le("%WeakMap%",!0),j=Le("%Map%",!0),Br=Q("WeakMap.prototype.get",!0),Qr=Q("WeakMap.prototype.set",!0),qr=Q("WeakMap.prototype.has",!0),Lr=Q("Map.prototype.get",!0),Ur=Q("Map.prototype.set",!0),Gr=Q("Map.prototype.has",!0),Se=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},Vr=function(r,e){var t=Se(r,e);return t&&t.value},Jr=function(r,e,t){var n=Se(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},Xr=function(r,e){return!!Se(r,e)},Yr=function(){var e,t,n,i={assert:function(a){if(!i.has(a))throw new Hr("Side channel does not contain "+zr(a))},get:function(a){if(K&&a&&(typeof a=="object"||typeof a=="function")){if(e)return Br(e,a)}else if(j){if(t)return Lr(t,a)}else if(n)return Vr(n,a)},has:function(a){if(K&&a&&(typeof a=="object"||typeof a=="function")){if(e)return qr(e,a)}else if(j){if(t)return Gr(t,a)}else if(n)return Xr(n,a);return!1},set:function(a,o){K&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new K),Qr(e,a,o)):j?(t||(t=new j),Ur(t,a,o)):(n||(n={key:{},next:null}),Jr(n,a,o))}};return i},Zr=String.prototype.replace,Kr=/%20/g,oe={RFC1738:"RFC1738",RFC3986:"RFC3986"},we={default:oe.RFC3986,formatters:{RFC1738:function(r){return Zr.call(r,Kr,"+")},RFC3986:function(r){return String(r)}},RFC1738:oe.RFC1738,RFC3986:oe.RFC3986},jr=we,fe=Object.prototype.hasOwnProperty,C=Array.isArray,$=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),et=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(C(n)){for(var i=[],a=0;a<n.length;++a)typeof n[a]<"u"&&i.push(n[a]);t.obj[t.prop]=i}}},Ue=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)typeof e[i]<"u"&&(n[i]=e[i]);return n},rt=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(C(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!fe.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var i=e;return C(e)&&!C(t)&&(i=Ue(e,n)),C(e)&&C(t)?(t.forEach(function(a,o){if(fe.call(e,o)){var u=e[o];u&&typeof u=="object"&&a&&typeof a=="object"?e[o]=r(u,a,n):e.push(a)}else e[o]=a}),e):Object.keys(t).reduce(function(a,o){var u=t[o];return fe.call(a,o)?a[o]=r(a[o],u,n):a[o]=u,a},i)},tt=function(e,t){return Object.keys(t).reduce(function(n,i){return n[i]=t[i],n},e)},nt=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},at=function(e,t,n,i,a){if(e.length===0)return e;var o=e;if(typeof e=="symbol"?o=Symbol.prototype.toString.call(e):typeof e!="string"&&(o=String(e)),n==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(s){return"%26%23"+parseInt(s.slice(2),16)+"%3B"});for(var u="",l=0;l<o.length;++l){var f=o.charCodeAt(l);if(f===45||f===46||f===95||f===126||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||a===jr.RFC1738&&(f===40||f===41)){u+=o.charAt(l);continue}if(f<128){u=u+$[f];continue}if(f<2048){u=u+($[192|f>>6]+$[128|f&63]);continue}if(f<55296||f>=57344){u=u+($[224|f>>12]+$[128|f>>6&63]+$[128|f&63]);continue}l+=1,f=65536+((f&1023)<<10|o.charCodeAt(l)&1023),u+=$[240|f>>18]+$[128|f>>12&63]+$[128|f>>6&63]+$[128|f&63]}return u},it=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],i=0;i<t.length;++i)for(var a=t[i],o=a.obj[a.prop],u=Object.keys(o),l=0;l<u.length;++l){var f=u[l],s=o[f];typeof s=="object"&&s!==null&&n.indexOf(s)===-1&&(t.push({obj:o,prop:f}),n.push(s))}return et(t),e},lt=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},ot=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},ft=function(e,t){return[].concat(e,t)},ut=function(e,t){if(C(e)){for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n}return t(e)},Ge={arrayToObject:Ue,assign:tt,combine:ft,compact:it,decode:nt,encode:at,isBuffer:ot,isRegExp:lt,maybeMap:ut,merge:rt},Ve=Yr,ee=Ge,J=we,ct=Object.prototype.hasOwnProperty,Re={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},E=Array.isArray,st=Array.prototype.push,Je=function(r,e){st.apply(r,E(e)?e:[e])},pt=Date.prototype.toISOString,Ce=J.default,g={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:ee.encode,encodeValuesOnly:!1,format:Ce,formatter:J.formatters[Ce],indices:!1,serializeDate:function(e){return pt.call(e)},skipNulls:!1,strictNullHandling:!1},dt=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},ue={},yt=function r(e,t,n,i,a,o,u,l,f,s,y,p,m,d,w,O){for(var c=e,k=O,N=0,_=!1;(k=k.get(ue))!==void 0&&!_;){var q=k.get(e);if(N+=1,typeof q<"u"){if(q===N)throw new RangeError("Cyclic object value");_=!0}typeof k.get(ue)>"u"&&(N=0)}if(typeof l=="function"?c=l(t,c):c instanceof Date?c=y(c):n==="comma"&&E(c)&&(c=ee.maybeMap(c,function(z){return z instanceof Date?y(z):z})),c===null){if(a)return u&&!d?u(t,g.encoder,w,"key",p):t;c=""}if(dt(c)||ee.isBuffer(c)){if(u){var X=d?t:u(t,g.encoder,w,"key",p);return[m(X)+"="+m(u(c,g.encoder,w,"value",p))]}return[m(t)+"="+m(String(c))]}var R=[];if(typeof c>"u")return R;var P;if(n==="comma"&&E(c))d&&u&&(c=ee.maybeMap(c,u)),P=[{value:c.length>0?c.join(",")||null:void 0}];else if(E(l))P=l;else{var A=Object.keys(c);P=f?A.sort(f):A}for(var W=i&&E(c)&&c.length===1?t+"[]":t,L=0;L<P.length;++L){var b=P[L],M=typeof b=="object"&&typeof b.value<"u"?b.value:c[b];if(!(o&&M===null)){var I=E(c)?typeof n=="function"?n(W,b):W:W+(s?"."+b:"["+b+"]");O.set(e,N);var Y=Ve();Y.set(ue,O),Je(R,r(M,I,n,i,a,o,n==="comma"&&d&&E(c)?null:u,l,f,s,y,p,m,d,w,Y))}}return R},vt=function(e){if(!e)return g;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||g.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=J.default;if(typeof e.format<"u"){if(!ct.call(J.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var i=J.formatters[n],a=g.filter;return(typeof e.filter=="function"||E(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:g.addQueryPrefix,allowDots:typeof e.allowDots>"u"?g.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:g.charsetSentinel,delimiter:typeof e.delimiter>"u"?g.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:g.encode,encoder:typeof e.encoder=="function"?e.encoder:g.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:g.encodeValuesOnly,filter:a,format:n,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:g.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:g.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:g.strictNullHandling}},mt=function(r,e){var t=r,n=vt(e),i,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):E(n.filter)&&(a=n.filter,i=a);var o=[];if(typeof t!="object"||t===null)return"";var u;e&&e.arrayFormat in Re?u=e.arrayFormat:e&&"indices"in e?u=e.indices?"indices":"repeat":u="indices";var l=Re[u];if(e&&"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var f=l==="comma"&&e&&e.commaRoundTrip;i||(i=Object.keys(t)),n.sort&&i.sort(n.sort);for(var s=Ve(),y=0;y<i.length;++y){var p=i[y];n.skipNulls&&t[p]===null||Je(o,yt(t[p],p,l,f,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,s))}var m=o.join(n.delimiter),d=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?d+="utf8=%26%2310003%3B&":d+="utf8=%E2%9C%93&"),m.length>0?d+m:""},B=Ge,ve=Object.prototype.hasOwnProperty,ht=Array.isArray,h={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:B.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},gt=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},Xe=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},St="utf8=%26%2310003%3B",wt="utf8=%E2%9C%93",Ot=function(e,t){var n={__proto__:null},i=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,o=i.split(t.delimiter,a),u=-1,l,f=t.charset;if(t.charsetSentinel)for(l=0;l<o.length;++l)o[l].indexOf("utf8=")===0&&(o[l]===wt?f="utf-8":o[l]===St&&(f="iso-8859-1"),u=l,l=o.length);for(l=0;l<o.length;++l)if(l!==u){var s=o[l],y=s.indexOf("]="),p=y===-1?s.indexOf("="):y+1,m,d;p===-1?(m=t.decoder(s,h.decoder,f,"key"),d=t.strictNullHandling?null:""):(m=t.decoder(s.slice(0,p),h.decoder,f,"key"),d=B.maybeMap(Xe(s.slice(p+1),t),function(w){return t.decoder(w,h.decoder,f,"value")})),d&&t.interpretNumericEntities&&f==="iso-8859-1"&&(d=gt(d)),s.indexOf("[]=")>-1&&(d=ht(d)?[d]:d),ve.call(n,m)?n[m]=B.combine(n[m],d):n[m]=d}return n},bt=function(r,e,t,n){for(var i=n?e:Xe(e,t),a=r.length-1;a>=0;--a){var o,u=r[a];if(u==="[]"&&t.parseArrays)o=[].concat(i);else{o=t.plainObjects?Object.create(null):{};var l=u.charAt(0)==="["&&u.charAt(u.length-1)==="]"?u.slice(1,-1):u,f=parseInt(l,10);!t.parseArrays&&l===""?o={0:i}:!isNaN(f)&&u!==l&&String(f)===l&&f>=0&&t.parseArrays&&f<=t.arrayLimit?(o=[],o[f]=i):l!=="__proto__"&&(o[l]=i)}i=o}return i},$t=function(e,t,n,i){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,u=/(\[[^[\]]*])/g,l=n.depth>0&&o.exec(a),f=l?a.slice(0,l.index):a,s=[];if(f){if(!n.plainObjects&&ve.call(Object.prototype,f)&&!n.allowPrototypes)return;s.push(f)}for(var y=0;n.depth>0&&(l=u.exec(a))!==null&&y<n.depth;){if(y+=1,!n.plainObjects&&ve.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;s.push(l[1])}return l&&s.push("["+a.slice(l.index)+"]"),bt(s,t,n,i)}},xt=function(e){if(!e)return h;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?h.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?h.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:h.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:h.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:h.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:h.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:h.comma,decoder:typeof e.decoder=="function"?e.decoder:h.decoder,delimiter:typeof e.delimiter=="string"||B.isRegExp(e.delimiter)?e.delimiter:h.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:h.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:h.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:h.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:h.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:h.strictNullHandling}},kt=function(r,e){var t=xt(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?Ot(r,t):r,i=t.plainObjects?Object.create(null):{},a=Object.keys(n),o=0;o<a.length;++o){var u=a[o],l=$t(u,n[u],t,typeof r=="string");i=B.merge(i,l,t)}return t.allowSparse===!0?i:B.compact(i)},Mt=mt,Et=kt,Nt=we,_e={formats:Nt,parse:Et,stringify:Mt};const Pt=r=>{if(!r)return"";const e={};return Object.keys(_e.parse(r)).forEach(t=>{e[t]="___"}),`?${_e.stringify(e)}`},Tt=r=>r?`#${r.split("/").map(()=>"___").join("/")}`:"",Dt=(r="")=>{const[e,t,...n]=r.split("#"),[i,a,...o]=e.split("?");if(n.length||o.length)return i;const u=Pt(a),l=Tt(t);return`${i}${u}${l}`},It=r=>(e,t,n=Ae.default)=>{},Ft=r=>(e,t,n,i)=>{const a=r?ar(e,n):void 0;Ze("sendSentryErrorLog",i??e,t,a)},Rt=(r,e=!1)=>{var f,s,y,p,m,d,w,O,c;const n=(s=(f=r.meta)==null?void 0:f.arg)==null?void 0:s.endpointName,i=(y=r.payload)==null?void 0:y.originalStatus,a=(p=r.payload)==null?void 0:p.status;if(!or(i??a)||ir(n,r.payload))return;let o="Rejected RTK action";n&&(o=`${i??a??"Error"} for ${n}`);const u=`${e?"Request failed":"All request retries failed"}: ${o}`,l=Dt(((w=(d=(m=r.meta)==null?void 0:m.baseQueryMeta)==null?void 0:d.request)==null?void 0:w.url)??"");l.startsWith("http://localhost")||Ft(!0)(v.sentryMiddleWareError,"processes/logging.ts",{endpoint:n,error:(O=r.payload)==null?void 0:O.error,originalStatus:i,status:(c=r.payload)==null?void 0:c.status,url:l},u)},zt=()=>r=>e=>(Ye(e)&&Rt(e),r(e));export{We as D,v as S,Ft as a,Rt as b,zt as c,It as g,ir as i,_e as l,cr as r,Dt as s};

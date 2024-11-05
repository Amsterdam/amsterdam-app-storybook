var ei=Object.defineProperty;var ii=(r,n,t)=>n in r?ei(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var tr=(r,n,t)=>ii(r,typeof n!="symbol"?n+"":n,t);import{r as vt}from"./index-mfbfsM12.js";import{j as oi}from"./jsx-runtime-Bxcv0yjW.js";import{D as ai,g as Rt}from"./index-BowPbij1.js";import{a as ci}from"./development-ClFnP_lz.js";import{P as fi}from"./index-DSI0shHu.js";var fe=(r=>(r.fullStartup="Full startup",r.internetConnection="Internet connection changed",r.nativeStartup="Native startup",r))(fe||{}),m=(r=>(r.chatPickImageFromLibrary="Chat pick image from library failed",r.chatPickPDF="Chat pick PDF document failed",r.chatSendImageFromCamera="Chat send image from camera failed",r.chatSendImageFromLibrary="Chat send image from library failed",r.chatSendPDF="Chat send PDF document failed",r.chatTakeImageWithCamera="Chat take image with camera failed",r.coordinates="Failed to get coordinates to determine location",r.deepLink="Deep link returns failed state",r.getRedirectsUrl="Get redirects url with key",r.hideSplashScreen="Hide splash screen failed",r.isScreenReaderEnabled="Screenreader enabled check failed",r.nodeNotFound="Node not found for ref",r.notSupportedStoredUrl="Can not use url to open store",r.openMailUrl="Open mail url failed",r.openPhoneUrl="Open phone url failed",r.openStore="Open app store",r.openWebUrl="Open web url failed",r.pickingImageFailed="Picking image from device failed",r.piwikInitialization="Piwik initialization failed",r.piwikTrackCustomEvent="Piwik trackCustomEvent failed",r.piwikTrackOutlink="Piwik trackOutlink failed",r.piwikTrackScreen="Piwik trackScreen failed",r.piwikTrackSearch="Piwik trackSearch failed",r.redirectNotFound="Redirect not found",r.registerDevice="Register device for push notifications failed",r.requestLocationPermission="Request location permission failed",r.takingPhotoFailed="Taking photo failed",r.tokenInvalid="Access token invalid",r.updatePermission="Update permission failed",r))(m||{}),ue=(r=>(r[r.Verbose=0]="Verbose",r[r.Information=1]="Information",r[r.Warning=2]="Warning",r[r.Error=3]="Error",r[r.Critical=4]="Critical",r))(ue||{});const ui={[m.coordinates]:["error"],[m.deepLink]:["error"],[m.getRedirectsUrl]:["redirectsKey"],[m.nodeNotFound]:[],[m.notSupportedStoredUrl]:[],[m.hideSplashScreen]:["error"],[m.isScreenReaderEnabled]:["error"],[m.openMailUrl]:[],[m.openPhoneUrl]:[],[m.openStore]:["error"],[m.openWebUrl]:["url"],[m.pickingImageFailed]:["error","code","viaCamera"],[m.piwikInitialization]:["error"],[m.piwikTrackCustomEvent]:["category","action","name","routeName","value"],[m.piwikTrackOutlink]:["url"],[m.piwikTrackScreen]:["path"],[m.piwikTrackSearch]:[],[m.redirectNotFound]:["urlKey"],[m.registerDevice]:["error"],[m.requestLocationPermission]:["error"],[m.takingPhotoFailed]:["code","message","viaCamera"],[m.updatePermission]:["error","permission","request"],[m.tokenInvalid]:["message"],[m.chatSendImageFromCamera]:["error"],[m.chatSendImageFromLibrary]:["error"],[m.chatSendPDF]:["error"],[m.chatTakeImageWithCamera]:["error"],[m.chatPickImageFromLibrary]:["error"],[m.chatPickPDF]:["error"]},si=(r,n)=>{var t;if(!(!n||Object.keys(n).length===0))return(t=ui[r])==null?void 0:t.reduce((e,i)=>({...e,[i]:n[i]}),{})},Ft="",li="",vi="",_i="",Aa="",xa="",Ra="",Fa="",Ut="",di="",pi="",hi="";var $n=function(r,n){return $n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},$n(r,n)};function se(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");$n(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var Yt=function(){return Yt=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},Yt.apply(this,arguments)};function gi(){return ai}/*! https://github.com/nevware21/ts-utils v0.11.5 */function rr(r,n){return r||n}function x(r,n){return r[n]}var O=void 0,w=null,yi="",_t="function",dt="object",z="prototype",Jn="__proto__",lr="undefined",Kr="constructor",pt="Symbol",Pi="_polyfill",Ti="length",Zr="name",R="call",vn="toString",L=rr(Object),ht=x(L,z),le=rr(String),mi=x(le,z),ve=rr(Array),_e=x(ve,z),_n=x(_e,"slice");function B(r,n){try{return{v:r.apply(this,n)}}catch(t){return{e:t}}}function de(r){return function(n){return typeof n===r}}function Ii(r){var n="[object "+r+"]";return function(t){return!!(t&&Ni(t)===n)}}function Ni(r){return ht[vn].call(r)}function hr(r){return typeof r===lr||r===lr}function Di(r){return!gt(r)}function q(r){return r===w||hr(r)}function Ci(r){return r===w||!gt(r)}function gt(r){return!!r||r!==O}var mr=de("string"),E=de(_t);function yt(r){return!r&&q(r)?!1:!!r&&typeof r===dt}var D=x(ve,"isArray"),wi=Ii("Error");function bi(r){return!!(r&&r.then&&E(r.then))}var Pt=x(L,"getOwnPropertyDescriptor");function F(r,n){return!!r&&ht.hasOwnProperty[R](r,n)}var Dr=rr(x(L,"hasOwn"),Oi);function Oi(r,n){return F(r,n)||!!Pt(r,n)}function S(r,n,t){if(r&&yt(r)){for(var e in r)if(Dr(r,e)&&n[R](r,e,r[e])===-1)break}}var Wr={e:"enumerable",c:"configurable",v:"value",w:"writable",g:"get",s:"set"};function Ei(r){var n={};if(n[Wr.c]=!0,n[Wr.e]=!0,r.l){n.get=function(){return r.l.v};var t=Pt(r.l,"v");t&&t.set&&(n.set=function(e){r.l.v=e})}return S(r,function(e,i){n[Wr[e]]=Di(i)?n[Wr[e]]:i}),n}var Fr=x(L,"defineProperty");function Z(r,n,t){return Fr(r,n,Ei(t))}function Si(r,n,t,e,i){var a={};return S(r,function(o,f){Gt(a,o,o,i),Gt(a,f,o,i)}),e?e(a):a}function Gt(r,n,t,e){Fr(r,n,{value:t,enumerable:!0,writable:!!e})}var K=rr(le),ki="[object Error]";function C(r,n){var t=yi,e=ht[vn][R](r);e===ki&&(r={stack:K(r.stack),message:K(r.message),name:K(r.name)});try{t=JSON.stringify(r,w,n?typeof n=="number"?n:4:O),t=(t?t.replace(/"(\w+)"\s*:\s{0,1}/g,"$1: "):w)||K(r)}catch(i){t=" - "+C(i,n)}return e+": "+t}function dn(r){throw new TypeError(r)}var pe=x(L,"freeze");function Ai(r){return r}function xi(r){return r[Jn]||w}var Ri=x(L,"keys");function he(r){return pe&&S(r,function(n,t){(D(t)||yt(t))&&he(t)}),Tt(r)}var Tt=rr(pe,Ai),Hn=rr(x(L,"getPrototypeOf"),xi);function Fi(r){return Si(r,0,0,Tt)}var ge=Fi({asyncIterator:0,hasInstance:1,isConcatSpreadable:2,iterator:3,match:4,matchAll:5,replace:6,search:7,species:8,split:9,toPrimitive:10,toStringTag:11,unscopables:12}),Lt="__tsUtils$gblCfg",Pn;function ye(){var r;return typeof globalThis!==lr&&(r=globalThis),!r&&typeof self!==lr&&(r=self),!r&&typeof window!==lr&&(r=window),!r&&typeof global!==lr&&(r=global),r}function Pe(){if(!Pn){var r=B(ye).v||{};Pn=r[Lt]=r[Lt]||{}}return Pn}var Te=Ui;function Ui(r,n,t){var e=n?n[r]:w;return function(i){var a=(i?i[r]:w)||e;if(a||t){var o=arguments;return(a||t).apply(i,a?_n[R](o,1):o)}dn('"'+K(r)+'" not defined for '+C(i))}}var Mt="_urid",Tn;function Yi(){if(!Tn){var r=Pe();Tn=r.gblSym=r.gblSym||{k:{},s:{}}}return Tn}var zr;function mt(r){var n={description:K(r),toString:function(){return pt+"("+r+")"}};return n[Pi]=!0,n}function Gi(r){var n=Yi();if(!Dr(n.k,r)){var t=mt(r),e=Ri(n.s).length;t[Mt]=function(){return e+"_"+t[vn]()},n.k[r]=t,n.s[t[Mt]()]=K(r)}return n.k[r]}function Li(r){!zr&&(zr={});var n,t=ge[r];return t&&(n=zr[t]=zr[t]||mt(pt+"."+t)),n}var A;function Ur(){A=Pe()}function gr(r){return Fr({toJSON:function(){return r}},"v",{value:r})}var me="window",Cr;function Ie(r,n){var t;return function(){return!A&&Ur(),(!t||A.lzy)&&(t=gr(B(r,n).v)),t.v}}function It(r){return!A&&Ur(),(!Cr||r===!1||A.lzy)&&(Cr=gr(B(ye).v||w)),Cr.v}function J(r,n){var t;if(!Cr||n===!1?t=It(n):t=Cr.v,t&&t[r])return t[r];if(r===me)try{return window}catch{}return w}function Mi(){return!!Ne()}var Ne=Ie(J,[me]),Wi=Ie(J,["navigator"]),Er,mn;function Nt(){return Er=gr(B(J,[pt]).v),Er}function zi(r){var n=(A.lzy?0:Er)||Nt();return n.v?n.v[r]:O}function De(r,n){var t=ge[r];!A&&Ur();var e=(A.lzy?0:Er)||Nt();return e.v?e.v[t||r]:n?O:Li(r)}function yr(r,n){!A&&Ur();var t=(A.lzy?0:Er)||Nt();return t.v?t.v(r):mt(r)}function Dt(r){return!A&&Ur(),mn=(A.lzy?0:mn)||gr(B(zi,["for"]).v),(mn.v||Gi)(r)}function Xn(r){return!!r&&E(r.next)}function ji(r){return!Ci(r)&&E(r[De(3)])}var jr;function Bi(r,n,t){if(r&&(Xn(r)||(!jr&&(jr=gr(De(3))),r=r[jr.v]?r[jr.v]():w),Xn(r))){var e=O,i=O;try{for(var a=0;!(i=r.next()).done&&n[R](t||r,i.value,a,r)!==-1;)a++}catch(o){e={e:o},r.throw&&(i=w,r.throw(e))}finally{try{i&&!i.done&&r.return&&r.return(i)}finally{if(e)throw e.e}}}}function vr(r,n,t){return r.apply(n,t)}function Vi(r,n){return!hr(n)&&r&&(D(n)?vr(r.push,r,n):Xn(n)||ji(n)?Bi(n,function(t){r.push(t)}):r.push(n)),r}function Y(r,n,t){if(r)for(var e=r[Ti]>>>0,i=0;i<e&&!(i in r&&n[R](r,r[i],i,r)===-1);i++);}var Qr=Te("indexOf",_e),ar=rr(x(L,"create"),$i);function $i(r){if(!r)return{};var n=typeof r;n!==dt&&n!==_t&&dn("Prototype must be an Object or function: "+C(r));function t(){}return t[z]=r,new t}var In;function Ce(r,n){var t=L.setPrototypeOf||function(e,i){var a;!In&&(In=gr((a={},a[Jn]=[],a instanceof Array))),In.v?e[Jn]=i:S(i,function(o,f){return e[o]=f})};return t(r,n)}function Ji(r,n,t){B(Z,[n,Zr,{v:r,c:!0,e:!1}]),n=Ce(n,t);function e(){this[Kr]=n,B(Z,[this,Zr,{v:r,c:!0,e:!1}])}return n[z]=t===w?ar(t):(e[z]=t[z],new e),n}function Wt(r,n){n&&(r[Zr]=n)}function Hi(r,n,t){var e=Error,i=e[z][Zr],a=Error.captureStackTrace;return Ji(r,function(){var o=this,f=arguments;try{B(Wt,[e,r]);var u=vr(e,o,_n[R](f))||o;if(u!==o){var c=Hn(o);c!==Hn(u)&&Ce(u,c)}return a&&a(u,o[Kr]),n&&n(u,f),u}finally{B(Wt,[e,i])}},e)}function qn(){return(Date.now||Xi)()}function Xi(){return new Date().getTime()}var Nn,Dn,Cn;function dr(r){if(!r||typeof r!==dt)return!1;Cn||(Cn=Mi()?Ne():!0);var n=!1;if(r!==Cn){Dn||(Nn=Function[z][vn],Dn=Nn[R](L));try{var t=Hn(r);n=!t,n||(F(t,Kr)&&(t=t[Kr]),n=!!(t&&typeof t===_t&&Nn[R](t)===Dn))}catch{}}return n}var qi=Te("indexOf",mi),wn="ref",bn="unref",On="hasRef",Ki="enabled";function Zi(r,n,t){var e=!0,i=n(w),a;function o(){return e=!1,i&&i[bn]&&i[bn](),a}function f(){i&&t(i),i=w}function u(){return i=n(i),e||o(),a}function c(_){!_&&i&&f(),_&&!i&&u()}return a={cancel:f,refresh:u},a[On]=function(){return i&&i[On]?i[On]():e},a[wn]=function(){return e=!0,i&&i[wn]&&i[wn](),a},a[bn]=o,a=Fr(a,Ki,{get:function(){return!!i},set:c}),{h:a,dn:function(){i=w}}}function Qi(r,n,t){var e=D(n),i=e?n.length:0,a=(i>0?n[0]:e?O:n)||setTimeout,o=(i>1?n[1]:O)||clearTimeout,f=t[0];t[0]=function(){u.dn(),vr(f,O,_n[R](arguments))};var u=Zi(r,function(c){if(c){if(c.refresh)return c.refresh(),c;vr(o,O,[c])}return vr(a,O,t)},function(c){vr(o,O,[c])});return u.h}function we(r,n){return Qi(!0,O,_n[R](arguments))}var Br,rn="constructor",V="prototype",nn="function",tn="_dynInstFuncs",Kn="_isDynProxy",_r="_dynClass",ro="_dynCls$",Zn="_dynInstChk",Sr=Zn,be="_dfOpts",zt="_unknown_",Ct="__proto__",Vr="_dyn"+Ct,jt="__dynProto$Gbl",En="_dynInstProto",$r="useBaseInst",Qn="setInstFuncs",wt=Object,kr=wt.getPrototypeOf,Bt=wt.getOwnPropertyNames,Vt=It(),rt=Vt[jt]||(Vt[jt]={o:(Br={},Br[Qn]=!0,Br[$r]=!0,Br),n:1e3});function Jr(r){return r&&(r===wt[V]||r===Array[V])}function bt(r){return Jr(r)||r===Function[V]}function cr(r){var n;if(r){if(kr)return kr(r);var t=r[Ct]||r[V]||(r[rn]?r[rn][V]:null);n=r[Vr]||t,F(r,Vr)||(delete r[En],n=r[Vr]=r[En]||r[Vr],r[En]=t)}return n}function en(r,n){var t=[];if(Bt)t=Bt(r);else for(var e in r)typeof e=="string"&&F(r,e)&&t.push(e);if(t&&t.length>0)for(var i=0;i<t.length;i++)n(t[i])}function Ot(r,n,t){return n!==rn&&typeof r[n]===nn&&(t||F(r,n))&&n!==Ct&&n!==V}function on(r){dn("DynamicProto: "+r)}function no(r){var n=ar(null);return en(r,function(t){!n[t]&&Ot(r,t,!1)&&(n[t]=r[t])}),n}function Et(r,n){for(var t=r.length-1;t>=0;t--)if(r[t]===n)return!0;return!1}function to(r,n,t,e){function i(u,c,_){var h=c[_];if(h[Kn]&&e){var y=u[tn]||{};y[Sr]!==!1&&(h=(y[c[_r]]||{})[_]||h)}return function(){return h.apply(u,arguments)}}var a=ar(null);en(t,function(u){a[u]=i(n,t,u)});for(var o=cr(r),f=[];o&&!bt(o)&&!Et(f,o);)en(o,function(u){!a[u]&&Ot(o,u,!kr)&&(a[u]=i(n,o,u))}),f.push(o),o=cr(o);return a}function eo(r,n,t,e){var i=null;if(r&&F(t,_r)){var a=r[tn]||ar(null);if(i=(a[t[_r]]||ar(null))[n],i||on("Missing ["+n+"] "+nn),!i[Zn]&&a[Sr]!==!1){for(var o=!F(r,n),f=cr(r),u=[];o&&f&&!bt(f)&&!Et(u,f);){var c=f[n];if(c){o=c===e;break}u.push(f),f=cr(f)}try{o&&(r[n]=i),i[Zn]=1}catch{a[Sr]=!1}}}return i}function io(r,n,t){var e=n[r];return e===t&&(e=cr(n)[r]),typeof e!==nn&&on("["+r+"] is not a "+nn),e}function oo(r,n,t,e,i){function a(u,c){var _=function(){var h=eo(this,c,u,_)||io(c,u,_);return h.apply(this,arguments)};return _[Kn]=1,_}if(!Jr(r)){var o=t[tn]=t[tn]||ar(null);if(!Jr(o)){var f=o[n]=o[n]||ar(null);o[Sr]!==!1&&(o[Sr]=!!i),Jr(f)||en(t,function(u){Ot(t,u,!1)&&t[u]!==e[u]&&(f[u]=t[u],delete t[u],(!F(r,u)||r[u]&&!r[u][Kn])&&(r[u]=a(r,u)))})}}}function ao(r,n){if(kr){for(var t=[],e=cr(n);e&&!bt(e)&&!Et(t,e);){if(e===r)return!0;t.push(e),e=cr(e)}return!1}return!0}function Sn(r,n){return F(r,V)?r.name||n||zt:((r||{})[rn]||{}).name||n||zt}function Yr(r,n,t,e){F(r,V)||on("theClass is an invalid class definition.");var i=r[V];ao(i,n)||on("["+Sn(r)+"] not in hierarchy of ["+Sn(n)+"]");var a=null;F(i,_r)?a=i[_r]:(a=ro+Sn(r,"_")+"$"+rt.n,rt.n++,i[_r]=a);var o=Yr[be],f=!!o[$r];f&&e&&e[$r]!==void 0&&(f=!!e[$r]);var u=no(n),c=to(i,n,u,f);t(n,c);var _=!!kr&&!!o[Qn];_&&e&&(_=!!e[Qn]),oo(i,a,n,u,_!==!1)}Yr[be]=rt.o;var co="toLowerCase",an="blkVal",k="length",cn="rdOnly",nt="notify",tt="warnToConsole",pn="throwInternal",hn="setDf",et="watch",$="logger",Oe="apply",U="push",fo="splice",Ee="hdlr",uo="cancel",so="initialize",$t="identifier",Se="isInitialized",ke="getPlugin",Ae="name",kn="time",j="processNext",lo="getProcessTelContext",xe="unload",vo="loggingLevelConsole",Ar="createNew",er="teardown",it="messageId",wr="message",St="isAsync",ir="diagLog",Jt="_doTeardown",xr="update",fr="getNext",ot="setNextPlugin",Ht="userAgent",An="nodeType",Hr="replace",_o="logInternalMessage",Xt="isChildEvt",br="getCtx",M="setCtx",qt="complete",xn;function po(r,n){xn||(xn=Hi("AggregationError",function(e,i){i[k]>1&&(e.errors=i[1])}));var t=r;throw Y(n,function(e,i){t+=`
`.concat(i," > ").concat(C(e))}),new xn(t,n||[])}var ho="object",Re="undefined",go=void 0,G="",b="core",yo="disabled",Xr="extensionConfig",pr="processTelemetry",Po="priority",Kt="getPerfMgr",To="Not dynamic - ",mo=/-([a-z])/g,Io=/([^\w\d_$])/g,No=/^(\d+[\w\d_$])/;function Do(r){return!q(r)}function at(r){var n=r;return n&&mr(n)&&(n=n[Hr](mo,function(t,e){return e.toUpperCase()}),n=n[Hr](Io,"_"),n=n[Hr](No,function(t,e){return"_"+e})),n}function Zt(r,n){return r&&n?qi(r,n)!==-1:!1}function Co(r){return wi(r)?r[Ae]:G}function wo(r,n){var t=null,e=null;return E(r)?t=r:e=r,function(){var i=arguments;if(t&&(e=t()),e)return e[n][Oe](e,i)}}function Qt(r,n,t,e,i){r&&n&&t&&(r[n]=wo(t,e))}var bo="console",Fe="JSON",Oo="crypto",Eo="msCrypto",So="msie",ko="trident/",Rn=null,Fn=null;function Ao(){return typeof console!==Re?console:J(bo)}function Ue(){return!!(typeof JSON===ho&&JSON||J(Fe)!==null)}function xo(){return Ue()?JSON||J(Fe):null}function Ro(){return J(Oo)}function Fo(){return J(Eo)}function Uo(){var r=Wi();if(r&&(r[Ht]!==Fn||Rn===null)){Fn=r[Ht];var n=(Fn||G)[co]();Rn=Zt(n,So)||Zt(n,ko)}return Rn}var Ye=4294967296,or=4294967295,Ge=123456789,Le=987654321,Me=!1,Ir=Ge,Nr=Le;function Yo(r){r<0&&(r>>>=0),Ir=Ge+r&or,Nr=Le-r&or,Me=!0}function Go(){try{var r=qn()&2147483647;Yo((Math.random()*Ye^r)+r)}catch{}}function re(r){var n=0,t=Ro()||Fo();return t&&t.getRandomValues&&(n=t.getRandomValues(new Uint32Array(1))[0]&or),n===0&&Uo()&&(Me||Go(),n=Lo()&or),n===0&&(n=Math.floor(Ye*Math.random()|0)),n>>>=0,n}function Lo(r){Nr=36969*(Nr&65535)+(Nr>>16)&or,Ir=18e3*(Ir&65535)+(Ir>>16)&or;var n=(Nr<<16)+(Ir&65535)>>>0&or|0;return n>>>=0,n}function Mo(r){for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=re()>>>0,e=0,i=G;i[k]<r;)e++,i+=n.charAt(t&63),t>>>=6,e===5&&(t=(re()<<2&4294967295|t&3)>>>0,e=0);return i}var We="3.3.4",Wo="."+Mo(6),zo=0;function ze(r){return r[An]===1||r[An]===9||!+r[An]}function jo(r,n){var t=n[r.id];if(!t){t={};try{ze(n)&&Z(n,r.id,{e:!1,v:t})}catch{}}return t}function je(r,n){return n===void 0&&(n=!1),at(r+zo+++(n?"."+We:G)+Wo)}function Bo(r){var n={id:je("_aiData-"+r+"."+We),accept:function(t){return ze(t)},get:function(t,e,i,a){var o=t[n.id];return o?o[at(e)]:(a&&(o=jo(n,t),o[at(e)]=i),i)},kill:function(t,e){if(t&&t[e])try{delete t[e]}catch{}}};return n}function qr(r){return r&&yt(r)&&(r.isVal||r.fb||Dr(r,"v")||Dr(r,"mrg")||Dr(r,"ref")||r.set)}function Be(r,n,t){var e,i=t.dfVal||gt;if(n&&t.fb){var a=t.fb;D(a)||(a=[a]);for(var o=0;o<a[k];o++){var f=a[o],u=n[f];if(i(u)?e=u:r&&(u=r.cfg[f],i(u)&&(e=u),r.set(r.cfg,K(f),u)),i(e))break}}return!i(e)&&i(t.v)&&(e=t.v),e}function ct(r,n,t){var e=t;if(t&&qr(t)&&(e=Be(r,n,t)),e){qr(e)&&(e=ct(r,n,e));var i;D(e)?(i=[],i[k]=e[k]):dr(e)&&(i={}),i&&(S(e,function(a,o){o&&qr(o)&&(o=ct(r,n,o)),i[a]=o}),e=i)}return e}function kt(r,n,t,e){var i,a,o,f=e,u,c,_,h;qr(f)?(i=f.isVal,a=f.set,_=f[cn],h=f[an],u=f.mrg,c=f.ref,!c&&hr(c)&&(c=!!u),o=Be(r,n,f)):o=e,h&&r[an](n,t);var y,l=!0,s=n[t];(s||!q(s))&&(y=s,l=!1,i&&y!==o&&!i(y)&&(y=o,l=!0),a&&(y=a(y,o,n),l=y===o)),l?o?y=ct(r,n,o):y=o:(dr(y)||D(o))&&u&&o&&(dr(o)||D(o))&&S(o,function(d,v){kt(r,y,d,v)}),r.set(n,t,y),c&&r.ref(n,t),_&&r[cn](n,t)}var Q=Dt("[[ai_dynCfg_1]]"),Ve=Dt("[[ai_blkDynCfg_1]]"),Vo=Dt("[[ai_frcDynCfg_1]]");function $e(r){if(r){var n;if(D(r)?(n=[],n[k]=r[k]):dr(r)&&(n={}),n)return S(r,function(t,e){n[t]=$e(e)}),n}return r}function $o(r){if(r){var n=r[Q]||r;if(n.cfg&&(n.cfg===r||n.cfg[Q]===n))return n}return null}function Jo(r){if(r&&(dr(r)||D(r)))try{r[Ve]=!0}catch{}return r}function Un(r,n,t){var e=!1;return t&&!r[n.blkVal]&&(e=t[Vo],!e&&!t[Ve]&&(e=dr(t)||D(t))),e}function Je(r){dn("InvalidAccess:"+r)}var Ho=["push","pop","shift","unshift","splice"],Rr=function(r,n,t,e){r&&r[pn](3,108,"".concat(t," [").concat(n,"] failed - ")+C(e))};function Xo(r,n,t){D(n)&&Y(Ho,function(e){var i=n[e];n[e]=function(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];var f=i[Oe](this,a);return un(r,n,t,"Patching"),f}})}function fn(r,n){var t=Pt(r,n);return t&&t.get}function qo(r,n,t,e){var i={n:t,h:[],trk:function(c){c&&c.fn&&(Qr(i.h,c)===-1&&i.h[U](c),r.trk(c,i))},clr:function(c){var _=Qr(i.h,c);_!==-1&&i.h[fo](_,1)}},a=!0,o=!1;function f(){a&&(o=o||Un(f,r,e),e&&!e[Q]&&o&&(e=un(r,e,t,"Converting")),a=!1);var c=r.act;return c&&i.trk(c),e}f[r.prop]={chng:function(){r.add(i)}};function u(c){if(e!==c){f[r.ro]&&!r.upd&&Je("["+t+"] is read-only:"+C(n)),a&&(o=o||Un(f,r,e),a=!1);var _=o&&f[r.rf];if(o)if(_){S(e,function(y){e[y]=c?c[y]:go});try{S(c,function(y,l){gn(r,e,y,l)}),c=e}catch(y){Rr((r.hdlr||{})[$],t,"Assigning",y),o=!1}}else e&&e[Q]&&S(e,function(y){var l=fn(e,y);if(l){var s=l[r.prop];s&&s.chng()}});if(c!==e){var h=c&&Un(f,r,c);!_&&h&&(c=un(r,c,t,"Converting")),e=c,o=h}r.add(i)}}Z(n,i.n,{g:f,s:u})}function gn(r,n,t,e){if(n){var i=fn(n,t),a=i&&!!i[r.prop];a?n[t]=e:qo(r,n,t,e)}return n}function Yn(r,n,t,e){if(n){var i=fn(n,t),a=i&&!!i[r.prop],o=e&&e[0],f=e&&e[1],u=e&&e[2];if(!a){if(u)try{Jo(n)}catch(c){Rr((r.hdlr||{})[$],t,"Blocking",c)}try{gn(r,n,t,n[t]),i=fn(n,t)}catch(c){Rr((r.hdlr||{})[$],t,"State",c)}}o&&(i[r.rf]=o),f&&(i[r.ro]=f),u&&(i[r.blkVal]=!0)}return n}function un(r,n,t,e){try{S(n,function(i,a){gn(r,n,i,a)}),n[Q]||(Fr(n,Q,{get:function(){return r[Ee]}}),Xo(r,n,t))}catch(i){Rr((r.hdlr||{})[$],t,e,i)}return n}var Pr="[[ai_",Tr="]]";function Ko(r){var n,t=yr(Pr+"get"+r.uid+Tr),e=yr(Pr+"ro"+r.uid+Tr),i=yr(Pr+"rf"+r.uid+Tr),a=yr(Pr+"blkVal"+r.uid+Tr),o=yr(Pr+"dtl"+r.uid+Tr),f=null,u=null,c;function _(s,d){var v=c.act;try{c.act=s,s&&s[o]&&(Y(s[o],function(g){g.clr(s)}),s[o]=[]),d({cfg:r.cfg,set:r.set.bind(r),setDf:r[hn].bind(r),ref:r.ref.bind(r),rdOnly:r[cn].bind(r)})}catch(g){var p=r[$];throw p&&p[pn](1,107,C(g)),g}finally{c.act=v||null}}function h(){if(f){var s=f;f=null,u&&u[uo](),u=null;var d=[];if(Y(s,function(v){if(v&&(v[o]&&(Y(v[o],function(p){p.clr(v)}),v[o]=null),v.fn))try{_(v,v.fn)}catch(p){d[U](p)}}),f)try{h()}catch(v){d[U](v)}d[k]>0&&po("Watcher error(s): ",d)}}function y(s){if(s&&s.h[k]>0){f||(f=[]),u||(u=we(function(){u=null,h()},0));for(var d=0;d<s.h[k];d++){var v=s.h[d];v&&Qr(f,v)===-1&&f[U](v)}}}function l(s,d){if(s){var v=s[o]=s[o]||[];Qr(v,d)===-1&&v[U](d)}}return c=(n={prop:t,ro:e,rf:i},n[an]=a,n[Ee]=r,n.add=y,n[nt]=h,n.use=_,n.trk=l,n),c}function Zo(r,n){var t={fn:n,rm:function(){t.fn=null,r=null,n=null}};return Z(t,"toJSON",{v:function(){return"WatcherHandler"+(t.fn?"":"[X]")}}),r.use(t,n),t}function Qo(r,n,t){var e,i=$o(n);if(i)return i;var a=je("dyncfg",!0),o=n&&t!==!1?n:$e(n),f;function u(){f[nt]()}function c(p,g,T){try{p=gn(f,p,g,T)}catch(N){Rr(r,g,"Setting value",N)}return p[g]}function _(p){return Zo(f,p)}function h(p,g){f.use(null,function(T){var N=f.upd;try{hr(g)||(f.upd=g),p(T)}finally{f.upd=N}})}function y(p,g){var T;return Yn(f,p,g,(T={},T[0]=!0,T))[g]}function l(p,g){var T;return Yn(f,p,g,(T={},T[1]=!0,T))[g]}function s(p,g){var T;return Yn(f,p,g,(T={},T[2]=!0,T))[g]}function d(p,g){return g&&S(g,function(T,N){kt(v,p,T,N)}),p}var v=(e={uid:null,cfg:o},e[$]=r,e[nt]=u,e.set=c,e[hn]=d,e[et]=_,e.ref=y,e[cn]=l,e[an]=s,e._block=h,e);return Z(v,"uid",{c:!1,e:!1,w:!1,v:a}),f=Ko(v),un(f,o,"config","Creating"),v}function ra(r,n){Je(n)}function ur(r,n,t,e){var i=Qo(t,r||{},e);return n&&i[hn](i.cfg,n),i}function He(r,n,t){var e=r[Q]||r;return e.cfg&&(e.cfg===r||e.cfg[Q]===e)?e[et](n):(ra(t,To+C(r)),ur(r,null,t)[et](n))}var sn=null;function na(){var r=J("Microsoft");return r&&(sn=r.ApplicationInsights),sn}function ta(r){var n=sn;return!n&&r.disableDbgExt!==!0&&(n=sn||na()),n?n.ChromeDbgExt:null}var sr,Xe="warnToConsole",ea="AI (Internal): ",ia="AI: ",oa="AITR_",aa={loggingLevelConsole:0,loggingLevelTelemetry:1,maxMessageLimit:25,enableDebug:!1},ca=(sr={},sr[0]=null,sr[1]="errorToConsole",sr[2]=Xe,sr[3]="debugToConsole",sr);function ne(r){return r?'"'+r[Hr](/\"/g,G)+'"':G}function Gn(r,n){var t=Ao();if(t){var e="log";t[r]&&(e=r),E(t[e])&&t[e](n)}}var te=function(){function r(n,t,e,i){e===void 0&&(e=!1);var a=this;a[it]=n,a[wr]=(e?ia:ea)+n;var o=G;Ue()&&(o=xo().stringify(i));var f=(t?" message:"+ne(t):G)+(i?" props:"+ne(o):G);a[wr]+=f}return r.dataType="MessageData",r}();function qe(r,n){return(r||{})[$]||new Ke(n)}var Ke=function(){function r(n){this.identifier="DiagnosticLogger",this.queue=[];var t=0,e={},i,a,o,f,u;Yr(r,this,function(c){u=h(n||{}),c.consoleLoggingLevel=function(){return i},c[pn]=function(s,d,v,p,g){g===void 0&&(g=!1);var T=new te(d,v,g,p);if(f)throw C(T);var N=ca[s]||Xe;if(hr(T[wr]))l("throw"+(s===1?"Critical":"Warning"),T);else{if(g){var H=+T[it];!e[H]&&i>=s&&(c[N](T[wr]),e[H]=!0)}else i>=s&&c[N](T[wr]);_(s,T)}},c.debugToConsole=function(s){Gn("debug",s),l("warning",s)},c[tt]=function(s){Gn("warn",s),l("warning",s)},c.errorToConsole=function(s){Gn("error",s),l("error",s)},c.resetInternalMessageCount=function(){t=0,e={}},c[_o]=_,c[xe]=function(s){u&&u.rm(),u=null};function _(s,d){if(!y()){var v=!0,p=oa+d[it];if(e[p]?v=!1:e[p]=!0,v&&(s<=a&&(c.queue[U](d),t++,l(s===1?"error":"warn",d)),t===o)){var g="Internal events throttle limit per PageView reached for this app.",T=new te(23,g,!1);c.queue[U](T),s===1?c.errorToConsole(g):c[tt](g)}}}function h(s){return He(ur(s,aa,c).cfg,function(d){var v=d.cfg;i=v[vo],a=v.loggingLevelTelemetry,o=v.maxMessageLimit,f=v.enableDebug})}function y(){return t>=o}function l(s,d){var v=ta(n||{});v&&v[ir]&&v[ir](s,d)}})}return r.__ieDyn=1,r}();function Ze(r){return r||new Ke}function Gr(r,n,t,e,i,a){a===void 0&&(a=!1),Ze(r)[pn](n,t,e,i,a)}function Ln(r,n){Ze(r)[tt](n)}var Mn="ctx",ft="ParentContextKey",Or="ChildrenContextKey",Wn=function(){function r(n,t,e){var i=this;if(i.start=qn(),i[Ae]=n,i[St]=e,i[Xt]=function(){return!1},E(t)){var a;Z(i,"payload",{g:function(){return!a&&E(t)&&(a=t(),t=null),a}})}i[br]=function(o){return o?o===r[ft]||o===r[Or]?i[o]:(i[Mn]||{})[o]:null},i[M]=function(o,f){if(o)if(o===r[ft])i[o]||(i[Xt]=function(){return!0}),i[o]=f;else if(o===r[Or])i[o]=f;else{var u=i[Mn]=i[Mn]||{};u[o]=f}},i[qt]=function(){var o=0,f=i[br](r[Or]);if(D(f))for(var u=0;u<f[k];u++){var c=f[u];c&&(o+=c[kn])}i[kn]=qn()-i.start,i.exTime=i[kn]-o,i[qt]=function(){}}}return r.ParentContextKey="parent",r.ChildrenContextKey="childEvts",r}(),zn="CoreUtils.doPerf";function fa(r,n,t,e,i){if(r){var a=r;if(a[Kt]&&(a=a[Kt]()),a){var o=void 0,f=a[br](zn);try{if(o=a.create(n(),e,i),o){if(f&&o[M]&&(o[M](Wn[ft],f),f[br]&&f[M])){var u=f[br](Wn[Or]);u||(u=[],f[M](Wn[Or],u)),u[U](o)}return a[M](zn,o),t(o)}}catch(c){o&&o[M]&&o[M]("exception",c)}finally{o&&a.fire(o),a[M](zn,f)}}}return t()}var ua=Bo("plugin");function jn(r){return ua.get(r,"state",{},!0)}var sa="TelemetryPluginChain",ee="_hasRun",ie="_getTelCtx",oe=0;function la(r,n,t){for(;r;){if(r[ke]()===t)return r;r=r[fr]()}return Lr([t],n.config||{},n)}function At(r,n,t,e){var i=null,a=[];n||(n=ur({},null,t[$])),e!==null&&(i=e?la(r,t,e):r);var o={_next:u,ctx:{core:function(){return t},diagLog:function(){return qe(t,n.cfg)},getCfg:function(){return n.cfg},getExtCfg:_,getConfig:h,hasNext:function(){return!!i},getNext:function(){return i},setNext:function(l){i=l},iterate:y,onComplete:f}};function f(l,s){for(var d=[],v=2;v<arguments.length;v++)d[v-2]=arguments[v];l&&a[U]({func:l,self:hr(s)?o.ctx:s,args:d})}function u(){var l=i;if(i=l?l[fr]():null,!l){var s=a;s&&s[k]>0&&(Y(s,function(d){try{d.func.call(d.self,d.args)}catch(v){Gr(t[$],2,73,"Unexpected Exception during onComplete - "+C(v))}}),a=[])}return l}function c(l,s){var d=null,v=n.cfg;if(v&&l){var p=v[Xr];!p&&s&&(p={}),v[Xr]=p,p=n.ref(v,Xr),p&&(d=p[l],!d&&s&&(d={}),p[l]=d,d=n.ref(p,l))}return d}function _(l,s){var d=c(l,!0);return s&&S(s,function(v,p){if(q(d[v])){var g=n.cfg[v];(g||!q(g))&&(d[v]=g)}kt(n,d,v,p)}),n[hn](d,s)}function h(l,s,d){d===void 0&&(d=!1);var v,p=c(l,!1),g=n.cfg;return p&&(p[s]||!q(p[s]))?v=p[s]:(g[s]||!q(g[s]))&&(v=g[s]),v||!q(v)?v:d}function y(l){for(var s;s=o._next();){var d=s[ke]();d&&l(d)}}return o}function ln(r,n,t,e){var i=ur(n),a=At(r,i,t,e),o=a.ctx;function f(c){var _=a._next();return _&&_[pr](c,o),!_}function u(c,_){return c===void 0&&(c=null),D(c)&&(c=Lr(c,i.cfg,t,_)),ln(c||o[fr](),i.cfg,t,_)}return o[j]=f,o[Ar]=u,o}function Qe(r,n,t){var e=ur(n.config),i=At(r,e,n,t),a=i.ctx;function o(u){var c=i._next();return c&&c[xe](a,u),!c}function f(u,c){return u===void 0&&(u=null),D(u)&&(u=Lr(u,e.cfg,n,c)),Qe(u||a[fr](),n,c)}return a[j]=o,a[Ar]=f,a}function ri(r,n,t){var e=ur(n.config),i=At(r,e,n,t),a=i.ctx;function o(u){return a.iterate(function(c){E(c[xr])&&c[xr](a,u)})}function f(u,c){return u===void 0&&(u=null),D(u)&&(u=Lr(u,e.cfg,n,c)),ri(u||a[fr](),n,c)}return a[j]=o,a[Ar]=f,a}function Lr(r,n,t,e){var i=null,a=!e;if(D(r)&&r[k]>0){var o=null;Y(r,function(f){if(!a&&e===f&&(a=!0),a&&f&&E(f[pr])){var u=va(f,n,t);i||(i=u),o&&o._setNext(u),o=u}})}return e&&!i?Lr([e],n,t):i}function va(r,n,t){var e=null,i=E(r[pr]),a=E(r[ot]),o;r?o=r[$t]+"-"+r[Po]+"-"+oe++:o="Unknown-0-"+oe++;var f={getPlugin:function(){return r},getNext:function(){return e},processTelemetry:_,unload:h,update:y,_id:o,_setNext:function(l){e=l}};function u(){var l;return r&&E(r[ie])&&(l=r[ie]()),l||(l=ln(f,n,t)),l}function c(l,s,d,v,p){var g=!1,T=r?r[$t]:sa,N=l[ee];return N||(N=l[ee]={}),l.setNext(e),r&&fa(l[b](),function(){return T+":"+d},function(){N[o]=!0;try{var H=e?e._id:G;H&&(N[H]=!1),g=s(l)}catch(I){var P=e?N[e._id]:!0;P&&(g=!0),(!e||!P)&&Gr(l[ir](),1,73,"Plugin ["+T+"] failed during "+d+" - "+C(I)+", run flags: "+C(N))}},v,p),g}function _(l,s){s=s||u();function d(v){if(!r||!i)return!1;var p=jn(r);return p[er]||p[yo]?!1:(a&&r[ot](e),r[pr](l,v),!0)}c(s,d,"processTelemetry",function(){return{item:l}},!l.sync)||s[j](l)}function h(l,s){function d(){var v=!1;if(r){var p=jn(r),g=r[b]||p[b];r&&(!g||g===l.core())&&!p[er]&&(p[b]=null,p[er]=!0,p[Se]=!1,r[er]&&r[er](l,s)===!0&&(v=!0))}return v}c(l,d,"unload",function(){},s[St])||l[j](s)}function y(l,s){function d(){var v=!1;if(r){var p=jn(r),g=r[b]||p[b];r&&(!g||g===l.core())&&!p[er]&&r[xr]&&r[xr](l,s)===!0&&(v=!0)}return v}c(l,d,"update",function(){},!1)||l[j](s)}return Tt(f)}function _a(){var r=[];function n(e){e&&r[U](e)}function t(e,i){Y(r,function(a){try{a(e,i)}catch(o){Gr(e[ir](),2,73,"Unexpected error calling unload handler - "+C(o))}}),r=[]}return{add:n,run:t}}function da(){var r=[];function n(e){var i=r;r=[],Y(i,function(a){try{(a.rm||a.remove).call(a)}catch(o){Gr(e,2,73,"Unloading:"+C(o))}})}function t(e){e&&Vi(r,e)}return{run:n,add:t}}var Bn,X="getPlugin",pa=(Bn={},Bn[Xr]={isVal:Do,v:{}},Bn),ha=function(){function r(){var n=this,t,e,i,a,o;c(),Yr(r,n,function(_){_[so]=function(h,y,l,s){u(h,y,s),t=!0},_[er]=function(h,y){var l,s=_[b];if(!s||h&&s!==h[b]())return;var d,v=!1,p=h||Qe(null,s,i&&i[X]?i[X]():i),g=y||(l={reason:0},l[St]=!1,l);function T(){v||(v=!0,a.run(p,y),o.run(p[ir]()),d===!0&&p[j](g),c())}return!_[Jt]||_[Jt](p,g,T)!==!0?T():d=!0,d},_[xr]=function(h,y){var l=_[b];if(!l||h&&l!==h[b]())return;var s,d=!1,v=h||ri(null,l,i&&i[X]?i[X]():i),p=y||{reason:0};function g(){d||(d=!0,u(v.getCfg(),v.core(),v[fr]()))}return!_._doUpdate||_._doUpdate(v,p,g)!==!0?g():s=!0,s},Qt(_,"_addUnloadCb",function(){return a},"add"),Qt(_,"_addHook",function(){return o},"add"),Z(_,"_unloadHooks",{g:function(){return o}})}),n[ir]=function(_){return f(_)[ir]()},n[Se]=function(){return t},n.setInitialized=function(_){t=_},n[ot]=function(_){i=_},n[j]=function(_,h){h?h[j](_):i&&E(i[pr])&&i[pr](_,null)},n._getTelCtx=f;function f(_){_===void 0&&(_=null);var h=_;if(!h){var y=e||ln(null,{},n[b]);i&&i[X]?h=y[Ar](null,i[X]):h=y[Ar](null,i)}return h}function u(_,h,y){ur(_,pa,qe(h)),!y&&h&&(y=h[lo]()[fr]());var l=i;i&&i[X]&&(l=i[X]()),n[b]=h,e=ln(y,_,h,l)}function c(){t=!1,n[b]=null,e=null,i=null,o=da(),a=_a()}}return r.__ieDyn=1,r}(),ga="ApplicationInsightsAnalytics",ya=he({disableDeviceCollection:!1,disableExceptionCollection:!1,uniqueIdPromiseTimeout:5e3}),Pa=function(r){se(n,r);function n(t){var e=r.call(this)||this;e.identifier="AppInsightsReactNativePlugin",e.priority=140;var i,a,o,f,u,c,_=null,h,y,l;return Yr(n,e,function(s,d){v(),s.initialize=function(P,I,nr){var xt=e.identifier;s.isInitialized()||(d.initialize(P,I,nr),s._addHook(He(P,function(Ca){var yn,ti=s._getTelCtx();a=ti.getExtCfg(xt,ya),!a.disableDeviceCollection&&y&&(y=!s._collectDeviceInfo()),I&&I.getPlugin?o=(yn=I.getPlugin(ga))===null||yn===void 0?void 0:yn.plugin:o=null,l&&N(),a.disableExceptionCollection||(s._setExceptionHandler(),l=!0)})))},s.processTelemetry=function(P,I){u?(_=_||[],_.push({item:P,itemCtx:I})):(g(P),s.processNext(P,I))},s.setDeviceInfoModule=function(P){h=P,y=!0},s.setDeviceId=p,s.setDeviceModel=function(P){i.model=P},s.setDeviceType=function(P){i.deviceClass=P},s._collectDeviceInfo=function(){try{if(h=e.getDeviceInfoModule(h),!h)return!1;i.deviceClass=h.getDeviceType(),i.model=h.getModel();var P=h.getUniqueId();return bi(P)?(u=!0,c&&c.cancel(),c=we(function(){c=null,p(i.id)},0),c.unref(),P.then(function(I){p(I)},function(I){Ln(s.diagLog(),"Failed to get device id: "+C(I)),p(i.id)})):mr(P)&&(i.id=P),!0}catch(I){Ln(s.diagLog(),"Failed to get DeviceInfo: "+Co(I)+" - "+C(I))}},s._doTeardown=function(P,I,nr){N(),v()};function v(){i={},a={},o=null,f=null,u=!1,h=null,y=!0,l=!1}function p(P){if(i.id=P,u=!1,c&&c.cancel(),!u&&_&&_.length>0&&s.isInitialized()){var I=_;_=null,Y(I,function(nr){try{s.processTelemetry(nr.item,nr.itemCtx)}catch{}})}}function g(P){i&&(P.ext=P.ext||{},P.ext.device=P.ext.device||{},mr(i.id)&&(P.ext.device.localId=i.id),mr(i.model)&&(P.ext.device.model=i.model),mr(i.deviceClass)&&(P.ext.device.deviceClass=i.deviceClass))}function T(){return typeof global!==Re&&global?global:It()}s._setExceptionHandler=function(){var P=T();P&&P.ErrorUtils&&(f=typeof P.ErrorUtils.getGlobalHandler=="function"&&P.ErrorUtils.getGlobalHandler()||P.ErrorUtils._globalHandler,P.ErrorUtils.setGlobalHandler(H))};function N(){var P=T();P&&P.ErrorUtils&&P.ErrorUtils.getGlobalHandler()===H&&P.ErrorUtils.setGlobalHandler(f||null)}function H(P,I){var nr={exception:P,severityLevel:3};o?o.trackException(nr):Gr(s.diagLog(),1,64,"Analytics plugin is not available, ReactNative plugin telemetry will not be sent: "),f&&f.call(global,P,I)}s._config=a,s._getDbgPlgTargets=function(){return[i,h,a]}}),e}return n.prototype.getDeviceInfoModule=function(t){return t||(Ln(this.diagLog(),"Failed to get DeviceInfo. Provide DeviceInfo while init or turn it off by setting disableDeviceCollection flag to true"),null)},n.prototype.initialize=function(t,e,i){},n.prototype.processTelemetry=function(t,e){},n.prototype.setDeviceInfoModule=function(t){},n.prototype.setDeviceId=function(t){},n.prototype.setDeviceModel=function(t){},n.prototype.setDeviceType=function(t){},n}(ha),Ta=function(r){se(n,r);function n(){return r!==null&&r.apply(this,arguments)||this}return n.prototype.getDeviceInfoModule=function(t){return t||gi()},n}(Pa);class ma{constructor(){tr(this,"config",{});tr(this,"appInsights",{});tr(this,"core",{});tr(this,"context",{});tr(this,"pluginVersionStringArr",[]);tr(this,"pluginVersionString","")}getCookieMgr(){}trackEvent(){}trackPageView(){}trackPageViewPerformance(){}trackException(){}_onerror(){}trackTrace(){}trackMetric(){}startTrackPage(){}stopTrackPage(){}startTrackEvent(){}stopTrackEvent(){}addTelemetryInitializer(){}setAuthenticatedUserContext(){}clearAuthenticatedUserContext(){}trackDependencyData(){}flush(){}onunloadFlush(){}loadAppInsights(){}updateSnippetDefinitions(){}emptyQueue(){}pollInternalLogs(){}stopPollingInternalLogs(){}addHousekeepingBeforeUnload(){}getSender(){}unload(){}getPlugin(){}addPlugin(){}updateCfg(){}evtNamespace(){}addUnloadCb(){}addDependencyListener(){}addDependencyInitializer(){}getTraceCtx(){}onCfgChange(){}}var ut=(r=>(r.about="about",r.address="address",r.chat="chat",r["city-pass"]="city-pass",r["construction-work"]="construction-work",r["construction-work-editor"]="construction-work-editor",r.contact="contact",r.home="home",r.onboarding="onboarding",r["open-waste-container"]="open-waste-container",r.redirects="redirects",r["report-problem"]="report-problem",r.user="user",r["waste-guide"]="waste-guide",r))(ut||{}),W=(r=>(r.development="Development",r.test="Test",r.acceptance="Acceptance",r.production="Production",r.custom="Custom",r))(W||{});const Vn={constructionWork:ut["construction-work"],contact:ut.contact,modules:"modules"},Ia=r=>{switch(r){case"Acceptance":return"acc";case"Custom":case"Development":return"ontw";case"Test":return"test";case"Production":default:return""}},Ua=(r,n,t,e="/api/v1")=>r==="Custom"&&t in(n??{})?n[t]:`https://${Ia(r)}${r==="Production"?"":"."}app.amsterdam.nl/${t}${e}`,Ya={[Vn.constructionWork]:"http://localhost:8000/construction-work/api/v1",[Vn.contact]:"http://localhost:8000/contact/api/v1",[Vn.modules]:"http://localhost:9000/modules/api/v1"},Ga={Development:Ft,Test:li,Acceptance:vi,Production:_i,Custom:Ft},ae={[W.custom]:Ut,[W.development]:Ut,[W.test]:di,[W.acceptance]:pi,[W.production]:hi},st=r=>({config:{instrumentationKey:ae[r]??ae[W.production],extensions:[Na],excludeRequestFromAutoTrackingPatterns:[/https:\/\/clients3\.google\.com\/generate_204\?.*/,/https:\/\/js\.monitor\.azure\.com\/.*/,/http:\/\/[^/a-z]+\/(index\.bundle\/\/?)?symbolicate/]}}),Na=new Ta,Mr=new ma(st(ci?W.production:W.development));Mr.addDependencyInitializer(r=>r.item.responseCode!==0);Mr.loadAppInsights();const lt=18e4;(fi.OS!=="ios"||new Date().getTime()-Number(Rt())<lt)&&Mr.trackMetric({name:fe.nativeStartup,average:new Date().getTime()-Number(Rt())});const ni=vt.createContext(Mr),ce=({children:r})=>oi.jsx(ni.Provider,{value:Mr,children:r}),Da=()=>vt.useContext(ni);try{st.displayName="getApplicationInsightsConfig",st.__docgenInfo={description:"",displayName:"getApplicationInsightsConfig",props:{}}}catch{}try{lt.displayName="APP_START_MAX_DURATION_IOS",lt.__docgenInfo={description:`Threshold of 3 minutes to prevent useless logging:
Found in the code of Sentry:
According to a talk at WWDC about optimizing app launch
(https://devstreaming-cdn.apple.com/videos/wwdc/2019/423lzf3qsjedrzivc7/423/423_optimizing_app_launch.pdf?dl=1
slide 17) no process exists for cold and warm launches. Since iOS 15, though, the system
might decide to pre-warm your app before the user tries to open it.
Prewarming can stop at any of the app launch steps. Our findings show that most of
the prewarmed app starts don't call the main method. Therefore we subtract the
time before the module initialization / main method to calculate the app start
duration. If the app start stopped during a later launch step, we drop it below with
checking the SENTRY_APP_START_MAX_DURATION. With this approach, we will
lose some warm app starts, but we accept this tradeoff. Useful resources:
https://developer.apple.com/documentation/uikit/app_and_environment/responding_to_the_launch_of_your_app/about_the_app_launch_sequence#3894431
https://developer.apple.com/documentation/metrickit/mxapplaunchmetric,
https://twitter.com/steipete/status/1466013492180312068,
https://github.com/MobileNativeFoundation/discussions/discussions/146
https://eisel.me/startup`,displayName:"APP_START_MAX_DURATION_IOS",props:{}}}catch{}try{ce.displayName="AppInsightsProvider",ce.__docgenInfo={description:"",displayName:"AppInsightsProvider",props:{}}}catch{}const La=()=>{const r=Da();return vt.useCallback((n,t,e,i=ue.Error)=>{r.trackException({exception:new Error(n),severityLevel:i,properties:{...si(n,e),filename:t}},{})},[r])};export{ce as A,m as E,ut as M,Aa as P,Yt as _,xa as a,Ra as b,Fa as c,Da as d,Ya as e,W as f,Ua as g,Mr as h,Ga as i,La as u};

var dt=Object.defineProperty;var bt=(t,n,e)=>n in t?dt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var b=(t,n,e)=>bt(t,typeof n!="symbol"?n+"":n,e);import{d as wt,g as kt,C as M,u as lt,i as mt,m as pt,b as At,s as Et,c as yt,e as z,R as V,f as Mt,h as K,j as B,k as Ot,r as W,p as Ct,l as Vt,n as xt,o as Lt,q as St,t as It,v as Xt}from"./Animated-BjLkOa7V.js";import{r as O}from"./index-B-xgG2PE.js";import{P as ct}from"./index-Ri0BYtkV.js";const ae=function(t,n=2,e=!1,i,s){"worklet";return wt(t,()=>{"worklet";const r=typeof t=="function"?t():t;function o(c,f){const h=r.onFrame(r,f);if(c.current=r.current,h){if(c.reps+=1,r.callback&&r.callback(!0,c.current),c.reduceMotion||n>0&&c.reps>=n)return!0;const u=e?r.current:c.startValue;return e&&(r.toValue=c.startValue,c.startValue=u),r.onStart(r,u,f,r.previousAnimation),!1}return!1}const l=c=>{i&&i(c),!c&&r.callback&&r.callback(!1)};function a(c,f,h,u){c.startValue=f,c.reps=0,r.reduceMotion===void 0&&(r.reduceMotion=c.reduceMotion),c.reduceMotion&&e&&(n<=0||n%2===0)?(c.current=c.startValue,c.onFrame=()=>!0):r.onStart(r,f,h,u)}return{isHigherOrder:!0,onFrame:o,onStart:a,reps:0,current:r.current,callback:l,startValue:0,reduceMotion:kt(s)}})},X=class X extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originX:e(r,i(a.targetOriginX,s))},initialValues:{originX:a.targetOriginX+a.windowWidth,...l},callback:o}}})}static createInstance(){return new X}};b(X,"presetName","SlideInRight");let Q=X;const D=class D extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originX:e(r,i(a.targetOriginX,s))},initialValues:{originX:a.targetOriginX-a.windowWidth,...l},callback:o}}})}static createInstance(){return new D}};b(D,"presetName","SlideInLeft");let Z=D;const F=class F extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originX:e(r,i(Math.max(a.currentOriginX+a.windowWidth,a.windowWidth),s))},initialValues:{originX:a.currentOriginX,...l},callback:o}}})}static createInstance(){return new F}};b(F,"presetName","SlideOutRight");let tt=F;const T=class T extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originX:e(r,i(Math.min(a.currentOriginX-a.windowWidth,-a.windowWidth),s))},initialValues:{originX:a.currentOriginX,...l},callback:o}}})}static createInstance(){return new T}};b(T,"presetName","SlideOutLeft");let et=T;const v=class v extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originY:e(r,i(a.targetOriginY,s))},initialValues:{originY:-a.windowHeight,...l},callback:o}}})}static createInstance(){return new v}};b(v,"presetName","SlideInUp");let nt=v;const N=class N extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originY:e(r,i(a.targetOriginY,s))},initialValues:{originY:a.targetOriginY+a.windowHeight,...l},callback:o}}})}static createInstance(){return new N}};b(N,"presetName","SlideInDown");let rt=N;const Y=class Y extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originY:e(r,i(Math.min(a.currentOriginY-a.windowHeight,-a.windowHeight),s))},initialValues:{originY:a.currentOriginY,...l},callback:o}}})}static createInstance(){return new Y}};b(Y,"presetName","SlideOutUp");let ot=Y;const j=class j extends M{constructor(){super(...arguments);b(this,"build",()=>{const e=this.getDelayFunction(),[i,s]=this.getAnimationAndConfig(),r=this.getDelay(),o=this.callbackV,l=this.initialValues;return a=>{"worklet";return{animations:{originY:e(r,i(Math.max(a.currentOriginY+a.windowHeight,a.windowHeight),s))},initialValues:{originY:a.currentOriginY,...l},callback:o}}})}static createInstance(){return new j}};b(j,"presetName","SlideOutDown");let it=j;function ut(t){return Object.values(t).reduce((n,e)=>n+e.__workletHash.toString(),"")}function le(t,n){const e=Object.values(n).filter(i=>i!==void 0);return t?t.push(ut(e)):t=e.map(i=>({workletHash:i.__workletHash,closure:i.__closure})),t}function ce(t,n){function e(r,o){return r===o&&(r!==0||1/r===1/o)||Number.isNaN(r)&&Number.isNaN(o)}const i=typeof Object.is=="function"?Object.is:e;function s(r,o){if(!r||!o||o.length!==r.length)return!1;for(let l=0;l<o.length;++l)if(!i(r[l],o[l]))return!1;return!0}return s(t,n)}function x(t){"worklet";return Array.isArray(t)?t.some(x):typeof t=="object"&&t!==null?t.onFrame!==void 0?!0:Object.values(t).some(x):!1}function ft(t,n){"worklet";const e=Object.keys(t),i=Object.keys(n);if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(t[e[s]]!==n[e[s]])return!1;return!0}function Dt(t){"worklet";const n=[];for(const e of t.split(/,(?![^()]*\))/).map(i=>i.trim()).filter(i=>i!=="")){const i={offsetX:0,offsetY:0};let s=null,r=null,o=!1,l=0;const a=e.split(/\s+(?![^(]*\))/);for(const c of a){if(c==="inset"){if(i.inset!=null)return[];s!=null&&(o=!0),i.inset=!0;continue}switch(l){case 0:s=c,l++;break;case 1:if(o)return[];r=c,l++;break;case 2:if(o)return[];i.blurRadius=c,l++;break;case 3:if(o)return[];i.spreadDistance=c,l++;break;case 4:if(o)return[];i.color=c,l++;break;default:return[]}}if(s===null||r===null)return[];i.offsetX=s,i.offsetY=r,n.push(i)}return n}function L(t){"worklet";const e=/([+-]?\d*(\.\d+)?)([\w\W]+)?/g.exec(t);return!e||Number.isNaN(e[1])||e[3]!=null&&e[3]!=="px"?null:Number(e[1])}function Ft(t){"worklet";const n=[],e=t.boxShadow;if(e==="")return n;const i=Dt(e.replace(/\n/g," "));for(const s of i){const r={offsetX:0,offsetY:0};let o;for(const l in s)switch(l){case"offsetX":if(o=typeof s.offsetX=="string"?L(s.offsetX):s.offsetX,o===null)return[];r.offsetX=o;break;case"offsetY":if(o=typeof s.offsetY=="string"?L(s.offsetY):s.offsetY,o===null)return[];r.offsetY=o;break;case"spreadDistance":if(o=typeof s.spreadDistance=="string"?L(s.spreadDistance):s.spreadDistance,o===null)return[];r.spreadDistance=o;break;case"blurRadius":if(o=typeof s.blurRadius=="string"?L(s.blurRadius):s.blurRadius,o===null||o<0)return[];r.blurRadius=o;break;case"color":r.color=s.color;break;case"inset":r.inset=s.inset}n.push(r)}t.boxShadow=n}const Tt=Mt();function S(t,n,e,i){"worklet";if(Array.isArray(n)&&n.forEach((s,r)=>{S(t,s,e&&e[r],i&&i[r])}),typeof n=="object"&&n.onFrame){const s=n;let r=s.current;i!=null&&(typeof i=="object"?i.value!==void 0?r=i.value:i.onFrame!==void 0&&((e==null?void 0:e.current)!==void 0?r=e.current:(i==null?void 0:i.current)!==void 0&&(r=i.current)):r=i),s.callStart=o=>{s.onStart(s,r,o,e)},s.callStart(t),s.callStart=null}else typeof n=="object"&&Object.keys(n).forEach(s=>S(t,n[s],e&&e[s],i&&i[s]))}function I(t,n,e,i,s,r){"worklet";if(!s.value)return!0;if(Array.isArray(t)){i[e]=[];let o=!0;return r=e==="boxShadow",t.forEach((l,a)=>{I(l,n,a,i[e],s,r)||(o=!1)}),o}else if(typeof t=="object"&&t.onFrame){let o=!0;return t.finished||(t.callStart&&(t.callStart(n),t.callStart=null),o=t.onFrame(t,n),t.timestamp=n,o&&(t.finished=!0,t.callback&&t.callback(!0))),r?i[e]={...t.current}:i[e]=t.current,o}else if(typeof t=="object"){i[e]={};let o=!0;return Object.keys(t).forEach(l=>{I(t[l],n,l,i[e],s,r)||(o=!1)}),o}else return i[e]=t,!0}function vt(t,n,e,i,s=!1){"worklet";const r=e.animations??{},o=n()??{},l=e.last,a={};let c=!1,f,h=!1;typeof o.boxShadow=="string"&&Ft(o);for(const u in o){const g=o[u];x(g)?(f=global.__frameTimestamp||global._getAnimationTimestamp(),S(f,g,r[u],l[u]),r[u]=g,c=!0):(h=!0,a[u]=g,delete r[u])}if(c){const u=g=>{const{animations:E,last:k,isAnimationCancelled:y}=e;if(y){e.isAnimationRunning=!1;return}const m={};let p=!0;for(const A in E)I(E[A],g,A,m,i)?(Array.isArray(m[A])?m[A].forEach($=>{for(const J in $)k[A][J]=$[J]}):k[A]=m[A],delete E[A]):p=!1;m&&B(t,m),p?e.isAnimationRunning=!1:requestAnimationFrame(u)};e.animations=r,e.isAnimationRunning||(e.isAnimationCancelled=!1,e.isAnimationRunning=!0,u(f)),h&&B(t,a)}else e.isAnimationCancelled=!0,e.animations=[],ft(l,o)||B(t,o,s);e.last=o}function Nt(t,n,e,i,s,r){"worklet";const o=e.animations??{},l=n()??{},a=e.last;let c=!1,f;Object.keys(o).forEach(u=>{const g=l[u];x(g)||delete o[u]}),Object.keys(l).forEach(u=>{const g=l[u];x(g)&&(f=global.__frameTimestamp||global._getAnimationTimestamp(),S(f,g,o[u],a[u]),o[u]=g,c=!0)});function h(u){const{animations:g,last:E,isAnimationCancelled:k}=e;if(k){e.isAnimationRunning=!1;return}const y={};let m=!0;Object.keys(g).forEach(p=>{I(g[p],u,p,y,i)?(E[p]=y[p],delete g[p]):m=!1}),Object.keys(y).length&&K(t,y,s,r),m?e.isAnimationRunning=!1:requestAnimationFrame(h)}c?(e.animations=o,e.isAnimationRunning||(e.isAnimationCancelled=!1,e.isAnimationRunning=!0,h(f))):(e.isAnimationCancelled=!0,e.animations=[]),e.last=l,ft(a,l)||K(t,l,s,r)}function G(t,n){if(Array.isArray(t))for(const e of t)G(e,n);else if(typeof t=="object"&&t!==null&&t.value===void 0)for(const e of Object.keys(t))G(t[e],e);else if(n!==void 0&&typeof t=="object"&&t!==null&&t.value!==void 0)throw new V(`Invalid value passed to \`${n}\`, maybe you forgot to use \`.value\`?`)}function ue(t,n,e,i=!1){const s=O.useRef(null);let r=Object.values(t.__closure??{});Tt&&!r.length&&n!=null&&n.length&&(r=n);const o=e?Array.isArray(e)?e:[e]:[],l=e?ut(o):null,a=lt(!0),c=O.useRef({});if(n?n.push(t.__workletHash):n=[...r,t.__workletHash],l&&n.push(l),!s.current){const k=mt(t);s.current={initial:{value:k,updater:t},remoteState:At({last:k,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:pt()}}const{initial:f,remoteState:h,viewDescriptors:u}=s.current,g=u.shareableViewDescriptors;n.push(g),O.useEffect(()=>{let k,y=t;e&&(y=()=>{"worklet";const p=t();return o.forEach(A=>{A(p)}),p}),z()?k=()=>{"worklet";Nt(g,t,h,a,c,o)}:k=()=>{"worklet";vt(g,y,h,a,i)};const m=Et(k,r);return()=>{yt(m)}},n),O.useEffect(()=>(a.value=!0,()=>{a.value=!1}),[a]),G(f.value);const E=O.useRef(null);return E.current||(E.current=z()?{viewDescriptors:u,initial:f,jestAnimatedStyle:c}:{viewDescriptors:u,initial:f}),E.current}const H=(t=0)=>{"worklet";const n=Math.abs(t);return n>.0031308?(Math.sign(t)||1)*(1.055*Math.pow(n,1/2.4)-.055):t*12.92},Yt=({r:t,g:n,b:e,alpha:i})=>{"worklet";return{r:H(t),g:H(n),b:H(e),alpha:i}},P=(t=0)=>{"worklet";const n=Math.abs(t);return n<=.04045?t/12.92:(Math.sign(t)||1)*Math.pow((n+.055)/1.055,2.4)},jt=({r:t,g:n,b:e,alpha:i})=>{"worklet";return{r:P(t),g:P(n),b:P(e),alpha:i}},ht={convert:{fromRgb:jt,toRgb:Yt}};function Bt({r:t=0,g:n=0,b:e=0,alpha:i}){"worklet";const s=Math.cbrt(.41222147079999993*t+.5363325363*n+.0514459929*e),r=Math.cbrt(.2119034981999999*t+.6806995450999999*n+.1073969566*e),o=Math.cbrt(.08830246189999998*t+.2817188376*n+.6299787005000002*e);return{l:.2104542553*s+.793617785*r-.0040720468*o,a:1.9779984951*s-2.428592205*r+.4505937099*o,b:.0259040371*s+.7827717662*r-.808675766*o,alpha:i}}function Ht(t){"worklet";const n=ht.convert.fromRgb(t),e=Bt(n);return t.r===t.b&&t.b===t.g&&(e.a=e.b=0),e}function Pt({l:t=0,a:n=0,b:e=0,alpha:i}){"worklet";const s=Math.pow(t*.9999999984505198+.39633779217376786*n+.2158037580607588*e,3),r=Math.pow(t*1.0000000088817609-.10556134232365635*n-.06385417477170591*e,3),o=Math.pow(t*1.0000000546724108-.08948418209496575*n-1.2914855378640917*e,3);return{r:4.076741661347994*s-3.307711590408193*r+.230969928729428*o,g:-1.2684380040921763*s+2.6097574006633715*r-.3413193963102197*o,b:-.004196086541837188*s-.7034186144594493*r+1.7076147009309444*o,alpha:i}}function Rt(t){"worklet";const n=s=>Math.ceil(s*1e5)/1e5,e=Pt(t),i=ht.convert.toRgb(e);return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}const _t={convert:{fromRgb:Ht,toRgb:Rt}},gt={oklab:_t};let d=function(t){return t.IDENTITY="identity",t.CLAMP="clamp",t.EXTEND="extend",t}({});function st(t,n,e,i,s,r){"worklet";switch(t){case d.IDENTITY:return r;case d.CLAMP:return n*e<n*i?i:s;case d.EXTEND:default:return e}}function R(t){"worklet";return t===d.EXTEND||t===d.CLAMP||t===d.IDENTITY}function Ut(t){"worklet";const n={extrapolateLeft:d.EXTEND,extrapolateRight:d.EXTEND};if(!t)return n;if(typeof t=="string"){if(!R(t))throw new V(`Unsupported value for "interpolate" 
Supported values: ["extend", "clamp", "identity", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]
 Valid example:
        interpolate(value, [inputRange], [outputRange], "clamp")`);return n.extrapolateLeft=t,n.extrapolateRight=t,n}if(t.extrapolateLeft&&!R(t.extrapolateLeft)||t.extrapolateRight&&!R(t.extrapolateRight))throw new V(`Unsupported value for "interpolate" 
Supported values: ["extend", "clamp", "identity", Extrapolatation.CLAMP, Extrapolatation.EXTEND, Extrapolatation.IDENTITY]
 Valid example:
      interpolate(value, [inputRange], [outputRange], {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.IDENTITY
      }})`);return Object.assign(n,t),n}function Wt(t,n,e){"worklet";const{leftEdgeInput:i,rightEdgeInput:s,leftEdgeOutput:r,rightEdgeOutput:o}=n;if(s-i===0)return r;const l=(t-i)/(s-i),a=r+l*(o-r),c=o>=r?1:-1;return c*a<c*r?st(e.extrapolateLeft,c,a,r,o,t):c*a>c*o?st(e.extrapolateRight,c,a,r,o,t):a}function w(t,n,e,i){"worklet";if(n.length<2||e.length<2)throw new V("Interpolation input and output ranges should contain at least two values.");const s=Ut(i),r=n.length,o={leftEdgeInput:n[0],rightEdgeInput:n[1],leftEdgeOutput:e[0],rightEdgeOutput:e[1]};if(r>2){if(t>n[r-1])o.leftEdgeInput=n[r-2],o.rightEdgeInput=n[r-1],o.leftEdgeOutput=e[r-2],o.rightEdgeOutput=e[r-1];else for(let l=1;l<r;++l)if(t<=n[l]){o.leftEdgeInput=n[l-1],o.rightEdgeInput=n[l],o.leftEdgeOutput=e[l-1],o.rightEdgeOutput=e[l];break}}return Wt(t,o,s)}function fe(t,n,e){"worklet";return Math.min(Math.max(t,n),e)}const he=d,Gt=(t,n,e,i)=>{"worklet";let s=0;const{useCorrectedHSVInterpolation:r=!0}=i;if(r){const c=[n[0]],f=e.h,h=[f[0]];for(let u=1;u<f.length;++u){const g=f[u]-f[u-1];f[u]>f[u-1]&&g>.5?(c.push(n[u]),c.push(n[u]+1e-5),h.push(f[u]-1),h.push(f[u])):f[u]<f[u-1]&&g<-.5?(c.push(n[u]),c.push(n[u]+1e-5),h.push(f[u]+1),h.push(f[u])):(c.push(n[u]),h.push(f[u]))}s=(w(t,c,h,d.CLAMP)+1)%1}else s=w(t,n,e.h,d.CLAMP);const o=w(t,n,e.s,d.CLAMP),l=w(t,n,e.v,d.CLAMP),a=w(t,n,e.a,d.CLAMP);return Ot(s,o,l,a)},_=(t,n)=>{"worklet";return t.map(e=>Math.pow(e/255,n))},U=(t,n)=>{"worklet";return Math.round(Math.pow(t,1/n)*255)},qt=(t,n,e,i)=>{"worklet";const{gamma:s=2.2}=i;let{r,g:o,b:l}=e;s!==1&&(r=_(r,s),o=_(o,s),l=_(l,s));const a=w(t,n,r,d.CLAMP),c=w(t,n,o,d.CLAMP),f=w(t,n,l,d.CLAMP),h=w(t,n,e.a,d.CLAMP);return s===1?W(a,c,f,h):W(U(a,s),U(c,s),U(f,s),h)},$t=(t,n,e,i)=>{"worklet";const s=w(t,n,e.l,d.CLAMP),r=w(t,n,e.a,d.CLAMP),o=w(t,n,e.b,d.CLAMP),l=w(t,n,e.alpha,d.CLAMP),{r:a,g:c,b:f,alpha:h}=gt.oklab.convert.toRgb({l:s,a:r,b:o,alpha:l});return W(a,c,f,h)},q=(t,n)=>{"worklet";const e=[],i=[],s=[],r=[];for(let o=0;o<t.length;o++){const l=t[o],a=Ct(l);if(typeof a=="number"){const c=n({r:Lt(a),g:xt(a),b:Vt(a)});e.push(c.ch1),i.push(c.ch2),s.push(c.ch3),r.push(St(a))}}return{ch1:e,ch2:i,ch3:s,alpha:r}},Jt=t=>{"worklet";const{ch1:n,ch2:e,ch3:i,alpha:s}=q(t,r=>({ch1:r.r,ch2:r.g,ch3:r.b}));return{r:n,g:e,b:i,a:s}},zt=t=>{"worklet";const{ch1:n,ch2:e,ch3:i,alpha:s}=q(t,r=>{const o=It(r.r,r.g,r.b);return{ch1:o.h,ch2:o.s,ch3:o.v}});return{h:n,s:e,v:i,a:s}},Kt=t=>{"worklet";const{ch1:n,ch2:e,ch3:i,alpha:s}=q(t,r=>{const o=gt.oklab.convert.fromRgb(r);return{ch1:o.l,ch2:o.a,ch3:o.b}});return{l:n,a:e,b:i,alpha:s}};function ge(t,n,e,i="RGB",s={}){"worklet";if(i==="HSV")return Gt(t,n,zt(e),s);if(i==="RGB")return qt(t,n,Jt(e),s);if(i==="LAB")return $t(t,n,Kt(e));throw new V(`Invalid color space provided: ${i}. Supported values are: ['RGB', 'HSV', 'LAB'].`)}let Qt=function(t){return t[t.RGB=0]="RGB",t[t.HSV=1]="HSV",t[t.LAB=2]="LAB",t}({});function de(t,n,e=Qt.RGB,i={}){return lt({inputRange:t,outputRange:n,colorSpace:e,cache:Xt(null),options:i})}class Zt extends Error{constructor(n,e){super(e),this.code=n}}var at;const te=typeof window<"u"&&!!((at=window.document)!=null&&at.createElement);var C={};typeof window<"u"&&ct.select;const ee={OS:C.EXPO_OS||ct.OS,isDOMAvailable:te};class be extends Zt{constructor(n,e){super("ERR_UNAVAILABLE",`The method or property ${n}.${e} is not available on ${ee.OS}, are you sure you've linked all the native dependencies properly?`)}}export{Qt as C,he as E,ee as P,rt as S,be as U,ce as a,le as b,d as c,Z as d,Q as e,nt as f,it as g,et as h,tt as i,ot as j,fe as k,w as l,ge as m,de as n,Zt as o,ue as u,ae as w};

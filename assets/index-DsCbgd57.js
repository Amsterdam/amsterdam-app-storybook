import{P as b}from"./index-Ri0BYtkV.js";import{u,c as S,R as l}from"./useThemable-6JGNq7Nf.js";import{r as d}from"./index-B-xgG2PE.js";import{u as A}from"./useDispatch-Dza0818t.js";import{g as E}from"./_commonjsHelpers-D6-XlEtG.js";const q=()=>({bottom:0,left:0,right:0,top:0});class h extends Error{constructor(e,r){super(r),this.code=e}}var y;const F=typeof window<"u"&&!!((y=window.document)!=null&&y.createElement);var a={};typeof window<"u"&&b.select;const O={OS:a.EXPO_OS||b.OS,isDOMAvailable:F};class D extends h{constructor(e,r){super("ERR_UNAVAILABLE",`The method or property ${e}.${r} is not available on ${O.OS}, are you sure you've linked all the native dependencies properly?`)}}const f={spaceBottom:0,isContentHiddenFromAccessibility:!1,isHiddenFromAccessibility:!1},H=S({name:l.screen,initialState:f,reducers:{resetScreen:()=>f,setHideScreenFromAccessibility:(t,{payload:e})=>{t.isHiddenFromAccessibility=e},setHideScreenContentFromAccessibility:(t,{payload:e})=>{t.isContentHiddenFromAccessibility=e},setExtraSpaceBottom:(t,{payload:e})=>{t.spaceBottom=e}}}),{setExtraSpaceBottom:C,setHideScreenFromAccessibility:P,setHideScreenContentFromAccessibility:w}=H.actions,B=t=>t[l.screen].spaceBottom,_=t=>t[l.screen].isHiddenFromAccessibility,$=t=>t[l.screen].isContentHiddenFromAccessibility,U=()=>{const t=A(),e=u(B),r=u($),c=u(_),i=d.useCallback(o=>t(C(o)),[t]),n=d.useCallback(o=>t(P(o)),[t]),s=d.useCallback(o=>t(w(o)),[t]);return{isContentHiddenFromAccessibility:r,isHiddenFromAccessibility:c,spaceBottom:e,setHideContentFromAccessibility:s,setHideFromAccessibility:n,setSpaceBottom:i}};var m,p;function v(){return p||(p=1,m=function(t,...e){const r=[],{isArray:c}=Array;e.forEach((s,o)=>{if(typeof s=="number")e[o]=[s,s];else if(c(s))if(typeof s[0]=="number")e[o]=[s[0],typeof s[1]=="function"?s[1](s[0]):null];else throw TypeError("First item in array must be a Number")});let i=e.find(c),n;for(let s of t){if(c(n)&&n[1]==null&&(s=s.replace(/^\s+/,"")),i?r.push(s.replace(/\[([^|]*)\|([^\]]*)\]/g,i[0]==1?"$1":"$2")):r.push(s),!e.length)break;i=e.find(c)||i,n=e.shift(),r.push(n===i?i[1]:n)}return r.join("")}),m}var g=v();const j=E(g);export{h as C,O as P,D as U,U as a,H as b,j as s,q as u};

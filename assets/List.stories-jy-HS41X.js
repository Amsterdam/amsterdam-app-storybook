import{j as r}from"./jsx-runtime-BlAj40OV.js";import{C as d}from"./Column-Dqdi48_a.js";import{R as c}from"./Row-BP-A625W.js";import{P as f}from"./Phrase-lRiUwwTR.js";import{L as _}from"./ListItemMarker-BhEV2KTG.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-CDPjGmtb.js";import"./index-D5xlL9g-.js";import"./index-8JwjhRSi.js";import"./index-BRs9ZavV.js";import"./base-color-B2rPH-Aj.js";import"./index-DNzWYFc8.js";import"./TextAncestorContext-CgUd_yOy.js";import"./AccessibleText-COgu9Gly.js";import"./index-CglSVHKQ.js";import"./config-BZnShabN.js";import"./useDeviceContext-BXdagwJr.js";import"./index-B9HBLp1U.js";import"./NativeEventEmitter-CdIviC7q.js";import"./index-C9LjRz3B.js";import"./index-B5FlGKE6.js";const m=({text:e,marker:i,testID:a})=>r.jsxs(c,{children:[r.jsx(_,{marker:i,testID:`${a}Marker`}),r.jsx(f,{testID:a,children:e})]});try{m.displayName="ListItem",m.__docgenInfo={description:"",displayName:"ListItem",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"enum",value:[{value:'"check-mark"'},{value:'"square"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const s=({items:e,marker:i="square",testID:a})=>r.jsx(d,{gutter:"md",children:e.map((o,l)=>r.jsx(m,{marker:i,testID:`${a}${l}Item`,text:o},o))});try{s.displayName="List",s.__docgenInfo={description:"",displayName:"List",props:{accessibilityLanguage:{defaultValue:null,description:"",name:"accessibilityLanguage",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},marker:{defaultValue:{value:"square"},description:"",name:"marker",required:!1,type:{name:"enum",value:[{value:'"check-mark"'},{value:'"square"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const S={component:s},t=e=>r.jsx(s,{...e});t.args={items:["Centrum","Nieuw-West","Noord","Oost","West","Zuid","Zuidoost","Weesp"],marker:"square"};var p,u,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <List {...args} />",...(n=(u=t.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,S as default};

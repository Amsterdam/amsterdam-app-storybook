import{a as f,j as a}from"./index-1401012c.js";import{r as y}from"./index-76fb7be0.js";import{S as _}from"./SingleSelectable-a6d5becd.js";import{C as I}from"./Column-7da78b9c.js";import{R as g}from"./Row-965466b1.js";import{P as L}from"./Phrase-31822a25.js";import{L as h}from"./ListItemMarker-a6188f3e.js";import{a as k}from"./accessibleText-50b2b39a.js";import"./_commonjsHelpers-de833af9.js";import"./index-e1b95cde.js";import"./TextAncestorContext-63ed7f56.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useThemable-212e8c5a.js";import"./index-d3ea75b5.js";import"./redux-toolkit.esm-1f08def5.js";import"./base-color-0322ee5e.js";import"./index-e39fa516.js";import"./config-55b2a55c.js";import"./useDeviceContext-20251673.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./index-5aae214f.js";import"./index-240c6d7a.js";const m=({text:e,marker:r,testID:t})=>f(g,{children:[a(h,{marker:r,testID:`${t}Marker`}),a(L,{testID:t,children:e})]});try{m.displayName="ListItem",m.__docgenInfo={description:"",displayName:"ListItem",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"enum",value:[{value:'"checkmark"'},{value:'"square"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const q=e=>{const r=[],t=[];for(const s of e)typeof s=="string"?(r.push(s),t.push(s)):(r.push(s.text),t.push(s.accessibilityLabel));return{textItems:r,accessibilityLabelItems:t}},o=({items:e,marker:r="square",testID:t})=>{const{textItems:s,accessibilityLabelItems:c}=y.useMemo(()=>q(e),[e]);return a(_,{accessibilityLabel:k(...c),testID:t,children:a(I,{gutter:"md",children:s.map((p,d)=>a(m,{marker:r,testID:`${t}${d}Item`,text:p},p))})})};try{o.displayName="List",o.__docgenInfo={description:"",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},marker:{defaultValue:{value:"square"},description:"",name:"marker",required:!1,type:{name:"enum",value:[{value:'"checkmark"'},{value:'"square"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const J={component:o},i=e=>a(o,{...e});i.args={items:["Centrum","Nieuw-West","Noord","Oost","West","Zuid","Zuidoost","Weesp"],marker:"square"};var u,n,l;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"args => <List {...args} />",...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,J as default};
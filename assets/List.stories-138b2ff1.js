import{a as d,j as s}from"./index-1401012c.js";import{r as f}from"./index-76fb7be0.js";import{S as _}from"./SingleSelectable-42243582.js";import{C as y}from"./Column-2e1417fa.js";import{R as g}from"./Row-99740ecb.js";import{P as I}from"./Phrase-c27680e7.js";import{L}from"./ListItemMarker-9e140f87.js";import{a as h}from"./accessibleText-50b2b39a.js";import"./_commonjsHelpers-de833af9.js";import"./index-8aec880e.js";import"./base-color-66d0fb4c.js";import"./mapMainAxisAlignment-e13c2957.js";import"./useThemable-27d8c265.js";import"./index-d3ea75b5.js";import"./index-83a31e41.js";import"./config-55b2a55c.js";import"./useDeviceContext-5f757378.js";import"./NativeEventEmitter-abc7829a.js";import"./index-0f55ce69.js";import"./index-d983c834.js";import"./index-290feef2.js";const m=({text:e,marker:t})=>d(g,{children:[s(L,{marker:t}),s(I,{children:e})]});try{m.displayName="ListItem",m.__docgenInfo={description:"",displayName:"ListItem",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"enum",value:[{value:'"checkmark"'},{value:'"square"'}]}}}}}catch{}const b=e=>{const t=[],a=[];for(const r of e)typeof r=="string"?(t.push(r),a.push(r)):(t.push(r.text),a.push(r.accessibilityLabel));return{textItems:t,accessibilityLabelItems:a}},o=({items:e,marker:t="square",testID:a})=>{const{textItems:r,accessibilityLabelItems:u}=f.useMemo(()=>b(e),[e]);return s(_,{accessibilityLabel:h(...u),testID:a,children:s(y,{gutter:"md",children:r.map(p=>s(m,{marker:t,text:p},p))})})};try{o.displayName="List",o.__docgenInfo={description:"",displayName:"List",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},marker:{defaultValue:{value:"square"},description:"",name:"marker",required:!1,type:{name:"enum",value:[{value:'"checkmark"'},{value:'"square"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const B={component:o},i=e=>s(o,{...e});i.args={items:["Centrum","Nieuw-West","Noord","Oost","West","Zuid","Zuidoost","Weesp"],marker:"square"};var c,l,n;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:"args => <List {...args} />",...(n=(l=i.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,B as default};

import{ad as x,j as e,V as C,p as w,ae as T,af as D,ag as G}from"./iframe-SbNAAcWE.js";import{B as _}from"./Box-DTIYOIsZ.js";import{C as m}from"./Column-CRP7Ctxq.js";import{R as f}from"./Row-Z5LFPyJa.js";import{P as u}from"./Phrase-CzHVF7Xg.js";import{D as P,a as k,S as z,I as y,b as F}from"./Icon-DPODn7xa.js";import{S as R,C as b,P as E}from"./index-C92WEHsT.js";import{u as M}from"./useDeviceContext-gehddam1.js";import{a as O}from"./useThemable-BPA16S_5.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-BXP5lj33.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-BwLsA2zG.js";const I=x,p=({fractionCode:s,size:o="md"})=>{const{color:t}=O(),{fontScale:g}=M(),r=T.waste.fractionIcon[o]*g;if(!I[s]?.default)return e.jsx(C,{style:{height:r,width:r}});const{color:h,hasLightBackground:v,path:j}=I[s][w.default];return e.jsxs(R,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(b,{cx:"12",cy:"12",fill:h,r:"12"}),e.jsx(E,{d:j,fill:t.text[v?"default":"inverse"]})]})};try{p.displayName="WasteFractionIcon",p.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var S=(s=>(s.deprecated="deprecated",s.designSystem="designSystem",s.elections="elections",s.system="system",s.wasteGuide="wasteGuide",s))(S||{});const V={elections:D,wasteGuide:x,system:z,designSystem:k,deprecated:P},a=({color:s,category:o})=>e.jsx(f,{gutter:"md",wrap:!0,children:Object.keys(V[o]).map(t=>{const r="filled"in F[t];return e.jsx(_,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(m,{gutter:"sm",halign:"center",children:[e.jsx(u,{testID:"testIdPhrase",children:t}),o!=="wasteGuide"&&e.jsxs(f,{gutter:"sm",valign:"end",children:[e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(u,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(u,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),o==="wasteGuide"&&e.jsx(p,{fractionCode:t,size:"xl"})]})},t)})}),N={component:a,argTypes:{color:{options:Object.keys(G.text),control:{type:"select"}},category:{options:Object.keys(S),control:"select"}}},n={render:a,args:{color:"default",category:"designSystem"}},c={render:a,args:{color:"default",category:"elections"}},l={render:a,args:{color:"default",category:"wasteGuide"}},i={render:a,args:{color:"default",category:"system"}},d={render:a,args:{color:"default",category:"deprecated"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.elections
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.deprecated
  }
}`,...d.parameters?.docs?.source}}};const ee=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","SystemIcons","DeprecatedIcons"];export{d as DeprecatedIcons,n as DesignSystemIcons,c as ElectionsIcons,i as SystemIcons,l as WasteGuideIcons,ee as __namedExportsOrder,N as default};

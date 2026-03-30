import{aj as x,j as e,V as C,o as w,ak as T,al as D,am as G}from"./iframe-BX2J73GR.js";import{B as _}from"./Box-kq8tKhkH.js";import{C as m}from"./Column-DgBI1aGc.js";import{R as f}from"./Row-C06nhT1f.js";import{P as u}from"./Phrase-CpH-SK_f.js";import{D as k,a as P,S as z,I as y,b as F}from"./Icon-jGrFmkZJ.js";import{S as R,C as b,P as E}from"./index-CbYF7AfG.js";import{u as M}from"./useDeviceContext-DVzaB-n8.js";import{a as O}from"./useThemable-DczmTj86.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-CZuzM6II.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-dgK8AZhZ.js";const I=x,p=({fractionCode:s,size:a="md"})=>{const{color:t}=O(),{fontScale:g}=M(),r=T.waste.fractionIcon[a]*g;if(!I[s]?.default)return e.jsx(C,{style:{height:r,width:r}});const{color:h,hasLightBackground:v,path:j}=I[s][w.default];return e.jsxs(R,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(b,{cx:"12",cy:"12",fill:h,r:"12"}),e.jsx(E,{d:j,fill:t.text[v?"default":"inverse"]})]})};try{p.displayName="WasteFractionIcon",p.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var S=(s=>(s.deprecated="deprecated",s.designSystem="designSystem",s.elections="elections",s.system="system",s.wasteGuide="wasteGuide",s))(S||{});const V={elections:D,wasteGuide:x,system:z,designSystem:P,deprecated:k},o=({color:s,category:a})=>e.jsx(f,{gutter:"md",wrap:!0,children:Object.keys(V[a]).map(t=>{const r="filled"in F[t];return e.jsx(_,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(m,{gutter:"sm",halign:"center",children:[e.jsx(u,{testID:"testIdPhrase",children:t}),a!=="wasteGuide"&&e.jsxs(f,{gutter:"sm",valign:"end",children:[e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(u,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(u,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),a==="wasteGuide"&&e.jsx(p,{fractionCode:t,size:"xl"})]})},t)})}),N={component:o,argTypes:{color:{options:Object.keys(G.text),control:{type:"select"}},category:{options:Object.keys(S),control:"select"}}},n={render:o,args:{color:"default",category:"designSystem"}},c={render:o,args:{color:"default",category:"elections"}},l={render:o,args:{color:"default",category:"wasteGuide"}},i={render:o,args:{color:"default",category:"system"}},d={render:o,args:{color:"default",category:"deprecated"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

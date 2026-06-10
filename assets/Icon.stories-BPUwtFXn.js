import{U as w,W as S,j as e,V as T,S as k,X as D,Y as G,Z as _}from"./iframe-CT4mXvc_.js";import{B as F}from"./Box-BTYF0Sbr.js";import{C as u}from"./Column-ndDvkJb0.js";import{R as y}from"./Row-ftwJWDVy.js";import{P as p}from"./Phrase-Btm8wDRz.js";import{I}from"./Icon-nSxuILY2.js";import{D as P,a as W,b as z,S as M}from"./svgIcons-BCzaO8rJ.js";import{S as R,C as b,P as E}from"./xml-BeI9fBPa.js";import{u as O}from"./useDeviceContext-DXcP9sjT.js";import{a as V}from"./useThemable-CNEA173J.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-utj3fS7D.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-DJTY_Ysz.js";const x=S,g=({fractionCode:s,size:a="md"})=>{const{color:t}=V(),{fontScale:f}=O(),r=w.waste.fractionIcon[a]*f;if(!x[s]?.default)return e.jsx(T,{style:{height:r,width:r}});const{color:v,hasLightBackground:C,path:j}=x[s][k.default];return e.jsxs(R,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(b,{cx:"12",cy:"12",fill:v,r:"12"}),e.jsx(E,{d:j,fill:t.text[C?"default":"inverse"]})]})};try{g.displayName="WasteFractionIcon",g.__docgenInfo={description:"",displayName:"WasteFractionIcon",filePath:"/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx",methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"fractionCode",required:!0,tags:{},type:{name:"enum",raw:"FractionCode",value:[{value:'"GA"',description:"",fullComment:"",tags:{}},{value:'"GFT"',description:"",fullComment:"",tags:{}},{value:'"Glas"',description:"",fullComment:"",tags:{}},{value:'"Papier"',description:"",fullComment:"",tags:{}},{value:'"Plastic"',description:"",fullComment:"",tags:{}},{value:'"Rest"',description:"",fullComment:"",tags:{}},{value:'"Textiel"',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:{value:"md"},declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"enum",raw:'"md" | "xl"',value:[{value:'"md"'},{value:'"xl"'}]}}},tags:{}}}catch{}var h=(s=>(s.deprecated="deprecated",s.designSystem="designSystem",s.elections="elections",s.kingsday="kingsday",s.system="system",s.wasteGuide="wasteGuide",s))(h||{});const B={elections:G,kingsday:D,wasteGuide:S,system:z,designSystem:W,deprecated:P},o=({color:s,category:a})=>e.jsx(y,{gutter:"md",wrap:!0,children:Object.keys(B[a]).map(t=>{const r="filled"in M[t];return e.jsx(F,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(u,{gutter:"sm",halign:"center",children:[e.jsx(p,{testID:"testIdPhrase",children:t}),a!=="wasteGuide"&&e.jsxs(y,{gutter:"sm",valign:"end",children:[e.jsxs(u,{flex:1,halign:"center",children:[e.jsx(I,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(p,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(u,{flex:1,halign:"center",children:[e.jsx(I,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(p,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),a==="wasteGuide"&&e.jsx(g,{fractionCode:t,size:"xl"})]})},t)})}),te={component:o,argTypes:{color:{options:Object.keys(_.text),control:{type:"select"}},category:{options:Object.keys(h),control:"select"}}},n={render:o,args:{color:"default",category:"designSystem"}},c={render:o,args:{color:"default",category:"elections"}},l={render:o,args:{color:"default",category:"wasteGuide"}},i={render:o,args:{color:"default",category:"kingsday"}},d={render:o,args:{color:"default",category:"system"}},m={render:o,args:{color:"default",category:"deprecated"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    category: IconCategory.kingsday
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.deprecated
  }
}`,...m.parameters?.docs?.source}}};const re=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","KingsdayIcons","SystemIcons","DeprecatedIcons"];export{m as DeprecatedIcons,n as DesignSystemIcons,c as ElectionsIcons,i as KingsdayIcons,d as SystemIcons,l as WasteGuideIcons,re as __namedExportsOrder,te as default};

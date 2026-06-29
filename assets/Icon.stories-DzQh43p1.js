import{W as w,X as S,j as e,V as T,S as k,Y as G,Z as _,$ as F}from"./iframe-Cr_9xO_d.js";import{B as D}from"./Box-BW5YCnjD.js";import{C as u}from"./Column-aCYs9K93.js";import{R as y}from"./Row-_bBzCc_o.js";import{P as p}from"./Phrase-DrKuPhcy.js";import{I}from"./Icon-FtzFwz7a.js";import{D as M,a as P,S as W}from"./svgIcons-CIETuMox.js";import{m as z}from"./icons-DuCYAvGb.js";import{S as R,C as E,P as O}from"./xml-BMGsci9D.js";import{u as b}from"./useDeviceContext-CTPwlNtk.js";import{a as V}from"./useThemable-BU7PK8I0.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-Do7kVytk.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-BTEsUz7V.js";const x=S,g=({fractionCode:s,size:a="md"})=>{const{color:t}=V(),{fontScale:f}=b(),r=w.waste.fractionIcon[a]*f;if(!x[s]?.default)return e.jsx(T,{style:{height:r,width:r}});const{color:v,hasLightBackground:C,path:j}=x[s][k.default];return e.jsxs(R,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(E,{cx:"12",cy:"12",fill:v,r:"12"}),e.jsx(O,{d:j,fill:t.text[C?"default":"inverse"]})]})};try{g.displayName="WasteFractionIcon",g.__docgenInfo={description:"",displayName:"WasteFractionIcon",filePath:"/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx",methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"fractionCode",required:!0,tags:{},type:{name:"enum",raw:"FractionCode",value:[{value:'"GA"',description:"",fullComment:"",tags:{}},{value:'"GFT"',description:"",fullComment:"",tags:{}},{value:'"Glas"',description:"",fullComment:"",tags:{}},{value:'"Papier"',description:"",fullComment:"",tags:{}},{value:'"Plastic"',description:"",fullComment:"",tags:{}},{value:'"Rest"',description:"",fullComment:"",tags:{}},{value:'"Textiel"',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:{value:"md"},declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"enum",raw:'"md" | "xl"',value:[{value:'"md"'},{value:'"xl"'}]}}},tags:{}}}catch{}var h=(s=>(s.designSystem="designSystem",s.elections="elections",s.kingsday="kingsday",s.map="map",s.system="system",s.wasteGuide="wasteGuide",s))(h||{});const B={elections:_,kingsday:G,wasteGuide:S,system:P,designSystem:M,map:z},o=({color:s,category:a})=>e.jsx(y,{gutter:"md",wrap:!0,children:Object.keys(B[a]).map(t=>{const r="filled"in W[t];return e.jsx(D,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(u,{gutter:"sm",halign:"center",children:[e.jsx(p,{testID:"testIdPhrase",children:t}),a!=="wasteGuide"&&e.jsxs(y,{gutter:"sm",valign:"end",children:[e.jsxs(u,{flex:1,halign:"center",children:[e.jsx(I,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(p,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(u,{flex:1,halign:"center",children:[e.jsx(I,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(p,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),a==="wasteGuide"&&e.jsx(g,{fractionCode:t,size:"xl"})]})},t)})}),re={component:o,argTypes:{color:{options:Object.keys(F.text),control:{type:"select"}},category:{options:Object.keys(h),control:"select"}}},n={render:o,args:{color:"default",category:"designSystem"}},c={render:o,args:{color:"default",category:"elections"}},l={render:o,args:{color:"default",category:"wasteGuide"}},i={render:o,args:{color:"default",category:"kingsday"}},d={render:o,args:{color:"default",category:"system"}},m={render:o,args:{color:"default",category:"map"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    category: IconCategory.map
  }
}`,...m.parameters?.docs?.source}}};const oe=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","KingsdayIcons","SystemIcons","MapIcons"];export{n as DesignSystemIcons,c as ElectionsIcons,i as KingsdayIcons,m as MapIcons,d as SystemIcons,l as WasteGuideIcons,oe as __namedExportsOrder,re as default};

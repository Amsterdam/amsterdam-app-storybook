import{Z as w,$ as S,j as e,V as T,S as k,a0 as D,a1 as G,a2 as _}from"./iframe-Djg5zJ44.js";import{B as F}from"./Box-DvnOP64N.js";import{C as u}from"./Column-CoA7tGCu.js";import{R as y}from"./Row-Dl1QV_f6.js";import{P as p}from"./Phrase-CKBspIfX.js";import{I}from"./Icon-r3gaBXfL.js";import{D as P,a as W,b as z,S as M}from"./svgIcons-C5J6-uZE.js";import{S as R,C as b,P as E}from"./xml-Do8oyx7D.js";import{u as O}from"./useDeviceContext-DDXdmHJX.js";import{a as V}from"./useThemable-Dguq-LrA.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-BBN-DkP1.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-Du5mccyH.js";const x=S,g=({fractionCode:s,size:o="md"})=>{const{color:t}=V(),{fontScale:f}=O(),r=w.waste.fractionIcon[o]*f;if(!x[s]?.default)return e.jsx(T,{style:{height:r,width:r}});const{color:v,hasLightBackground:C,path:j}=x[s][k.default];return e.jsxs(R,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(b,{cx:"12",cy:"12",fill:v,r:"12"}),e.jsx(E,{d:j,fill:t.text[C?"default":"inverse"]})]})};try{g.displayName="WasteFractionIcon",g.__docgenInfo={description:"",displayName:"WasteFractionIcon",filePath:"/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx",methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"fractionCode",required:!0,tags:{},type:{name:"enum",raw:"FractionCode",value:[{value:'"GA"',description:"",fullComment:"",tags:{}},{value:'"GFT"',description:"",fullComment:"",tags:{}},{value:'"Glas"',description:"",fullComment:"",tags:{}},{value:'"Papier"',description:"",fullComment:"",tags:{}},{value:'"Plastic"',description:"",fullComment:"",tags:{}},{value:'"Rest"',description:"",fullComment:"",tags:{}},{value:'"Textiel"',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:{value:"md"},declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"enum",raw:'"md" | "xl"',value:[{value:'"md"'},{value:'"xl"'}]}}},tags:{}}}catch{}var h=(s=>(s.deprecated="deprecated",s.designSystem="designSystem",s.elections="elections",s.kingsday="kingsday",s.system="system",s.wasteGuide="wasteGuide",s))(h||{});const B={elections:G,kingsday:D,wasteGuide:S,system:z,designSystem:W,deprecated:P},a=({color:s,category:o})=>e.jsx(y,{gutter:"md",wrap:!0,children:Object.keys(B[o]).map(t=>{const r="filled"in M[t];return e.jsx(F,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(u,{gutter:"sm",halign:"center",children:[e.jsx(p,{testID:"testIdPhrase",children:t}),o!=="wasteGuide"&&e.jsxs(y,{gutter:"sm",valign:"end",children:[e.jsxs(u,{flex:1,halign:"center",children:[e.jsx(I,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(p,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(u,{flex:1,halign:"center",children:[e.jsx(I,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(p,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),o==="wasteGuide"&&e.jsx(g,{fractionCode:t,size:"xl"})]})},t)})}),te={component:a,argTypes:{color:{options:Object.keys(_.text),control:{type:"select"}},category:{options:Object.keys(h),control:"select"}}},n={render:a,args:{color:"default",category:"designSystem"}},c={render:a,args:{color:"default",category:"elections"}},l={render:a,args:{color:"default",category:"wasteGuide"}},i={render:a,args:{color:"default",category:"kingsday"}},d={render:a,args:{color:"default",category:"system"}},m={render:a,args:{color:"default",category:"deprecated"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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

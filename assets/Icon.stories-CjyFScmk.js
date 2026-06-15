import{U as j,W as x,j as e,V as w,S as T,X as k,Y as G,Z as _}from"./iframe-CGw-E6HC.js";import{B as F}from"./Box-CZQMB-FN.js";import{C as m}from"./Column-C_J733w0.js";import{R as f}from"./Row-C9cKnWn0.js";import{P as u}from"./Phrase-DScAvpKB.js";import{I as y}from"./Icon-DM53z3qT.js";import{D,a as P,S as W}from"./svgIcons-DS6a4i-G.js";import{S as z,C as R,P as E}from"./xml-Dlr36Ujk.js";import{u as M}from"./useDeviceContext-DB4AXcAa.js";import{a as O}from"./useThemable-B6lYB7kF.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-CD88zF4m.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-BMARHwFQ.js";const I=x,g=({fractionCode:s,size:a="md"})=>{const{color:t}=O(),{fontScale:p}=M(),r=j.waste.fractionIcon[a]*p;if(!I[s]?.default)return e.jsx(w,{style:{height:r,width:r}});const{color:h,hasLightBackground:v,path:C}=I[s][T.default];return e.jsxs(z,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(R,{cx:"12",cy:"12",fill:h,r:"12"}),e.jsx(E,{d:C,fill:t.text[v?"default":"inverse"]})]})};try{g.displayName="WasteFractionIcon",g.__docgenInfo={description:"",displayName:"WasteFractionIcon",filePath:"/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx",methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"fractionCode",required:!0,tags:{},type:{name:"enum",raw:"FractionCode",value:[{value:'"GA"',description:"",fullComment:"",tags:{}},{value:'"GFT"',description:"",fullComment:"",tags:{}},{value:'"Glas"',description:"",fullComment:"",tags:{}},{value:'"Papier"',description:"",fullComment:"",tags:{}},{value:'"Plastic"',description:"",fullComment:"",tags:{}},{value:'"Rest"',description:"",fullComment:"",tags:{}},{value:'"Textiel"',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:{value:"md"},declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"enum",raw:'"md" | "xl"',value:[{value:'"md"'},{value:'"xl"'}]}}},tags:{}}}catch{}var S=(s=>(s.designSystem="designSystem",s.elections="elections",s.kingsday="kingsday",s.system="system",s.wasteGuide="wasteGuide",s))(S||{});const b={elections:G,kingsday:k,wasteGuide:x,system:P,designSystem:D},o=({color:s,category:a})=>e.jsx(f,{gutter:"md",wrap:!0,children:Object.keys(b[a]).map(t=>{const r="filled"in W[t];return e.jsx(F,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(m,{gutter:"sm",halign:"center",children:[e.jsx(u,{testID:"testIdPhrase",children:t}),a!=="wasteGuide"&&e.jsxs(f,{gutter:"sm",valign:"end",children:[e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(u,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(u,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),a==="wasteGuide"&&e.jsx(g,{fractionCode:t,size:"xl"})]})},t)})}),ee={component:o,argTypes:{color:{options:Object.keys(_.text),control:{type:"select"}},category:{options:Object.keys(S),control:"select"}}},n={render:o,args:{color:"default",category:"designSystem"}},c={render:o,args:{color:"default",category:"elections"}},i={render:o,args:{color:"default",category:"wasteGuide"}},l={render:o,args:{color:"default",category:"kingsday"}},d={render:o,args:{color:"default",category:"system"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.kingsday
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...d.parameters?.docs?.source}}};const se=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","KingsdayIcons","SystemIcons"];export{n as DesignSystemIcons,c as ElectionsIcons,l as KingsdayIcons,d as SystemIcons,i as WasteGuideIcons,se as __namedExportsOrder,ee as default};

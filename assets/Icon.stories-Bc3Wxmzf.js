import{W as j,X as x,j as e,V as w,Y as T,Z as D,$ as G}from"./iframe-DHbJDa1I.js";import{B as _}from"./Box-BvSiDOzy.js";import{C as m}from"./Column-DVmqc9T8.js";import{R as f}from"./Row-DqkO9lDB.js";import{P as u}from"./Phrase-831Daa4t.js";import{D as F,a as P,S as W,b as k,I as y}from"./Icon-BpiZVjAl.js";import{S as z,C as R,P as b}from"./xml-BTe105cE.js";import{u as E}from"./useDeviceContext-vJvkhXcX.js";import{a as M}from"./useThemable-B0ojQefn.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-C--wpAdF.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-qzn8J2-s.js";const I=x,p=({fractionCode:s,size:a="md"})=>{const{color:t}=M(),{fontScale:g}=E(),r=j.waste.fractionIcon[a]*g;if(!I[s]?.default)return e.jsx(w,{style:{height:r,width:r}});const{color:h,hasLightBackground:v,path:C}=I[s][T.default];return e.jsxs(z,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(R,{cx:"12",cy:"12",fill:h,r:"12"}),e.jsx(b,{d:C,fill:t.text[v?"default":"inverse"]})]})};try{p.displayName="WasteFractionIcon",p.__docgenInfo={description:"",displayName:"WasteFractionIcon",filePath:"/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx",methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"fractionCode",required:!0,tags:{},type:{name:"enum",raw:"FractionCode",value:[{value:'"GA"',description:"",fullComment:"",tags:{}},{value:'"GFT"',description:"",fullComment:"",tags:{}},{value:'"Glas"',description:"",fullComment:"",tags:{}},{value:'"Papier"',description:"",fullComment:"",tags:{}},{value:'"Plastic"',description:"",fullComment:"",tags:{}},{value:'"Rest"',description:"",fullComment:"",tags:{}},{value:'"Textiel"',description:"",fullComment:"",tags:{}}]}},size:{defaultValue:{value:"md"},declarations:[{fileName:"s/src/modules/waste-guide/components/WasteFractionIcon.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"enum",raw:'"md" | "xl"',value:[{value:'"md"'},{value:'"xl"'}]}}},tags:{}}}catch{}var S=(s=>(s.deprecated="deprecated",s.designSystem="designSystem",s.elections="elections",s.system="system",s.wasteGuide="wasteGuide",s))(S||{});const O={elections:D,wasteGuide:x,system:W,designSystem:P,deprecated:F},o=({color:s,category:a})=>e.jsx(f,{gutter:"md",wrap:!0,children:Object.keys(O[a]).map(t=>{const r="filled"in k[t];return e.jsx(_,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(m,{gutter:"sm",halign:"center",children:[e.jsx(u,{testID:"testIdPhrase",children:t}),a!=="wasteGuide"&&e.jsxs(f,{gutter:"sm",valign:"end",children:[e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(u,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(y,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(u,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),a==="wasteGuide"&&e.jsx(p,{fractionCode:t,size:"xl"})]})},t)})}),Q={component:o,argTypes:{color:{options:Object.keys(G.text),control:{type:"select"}},category:{options:Object.keys(S),control:"select"}}},n={render:o,args:{color:"default",category:"designSystem"}},c={render:o,args:{color:"default",category:"elections"}},l={render:o,args:{color:"default",category:"wasteGuide"}},i={render:o,args:{color:"default",category:"system"}},d={render:o,args:{color:"default",category:"deprecated"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ee=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","SystemIcons","DeprecatedIcons"];export{d as DeprecatedIcons,n as DesignSystemIcons,c as ElectionsIcons,i as SystemIcons,l as WasteGuideIcons,ee as __namedExportsOrder,Q as default};

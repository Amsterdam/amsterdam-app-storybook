import{j as n,V as l,s as m}from"./iframe-C32H75Xk.js";import{P as p}from"./Phrase-Bj9I_FSK.js";import{u as d}from"./useThemable-Cx8Fix9B.js";import"./preload-helper-Zf8nSx-t.js";import"./AccessibleText-D_u5HTpB.js";const g=40,h=10,i=(r,e=0)=>Math.floor(g+(String(r).length-1)*h+e),C=12,c=({count:r})=>{const e=d(s=>f(s,r));return n.jsx(l,{style:[e.clusterBase,e.clusterOuter],children:n.jsx(l,{style:[e.clusterBase,e.clusterInner],children:n.jsx(p,{color:"inverse",emphasis:"strong",children:r})})})},f=(r,e)=>{const s=i(e),u=i(e,C);return m.create({clusterBase:{justifyContent:"center",alignItems:"center",borderRadius:"100%"},clusterOuter:{backgroundColor:`${r.color.backgroundArea.primary}30`,width:u,height:u},clusterInner:{backgroundColor:r.color.backgroundArea.primary,width:s,height:s}})};try{c.displayName="ClusterMarker",c.__docgenInfo={description:"",displayName:"ClusterMarker",filePath:"/Users/runner/work/1/s/src/components/features/map/clusters/ClusterMarker.tsx",methods:[],props:{count:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/clusters/ClusterMarker.tsx",name:"TypeLiteral"}],description:"",name:"count",required:!0,tags:{},type:{name:"number"}}},tags:{}}}catch{}const S={component:c},t={args:{count:12}},o={args:{count:2}},a={args:{count:1234}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    count: 12
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 2
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1234
  }
}`,...a.parameters?.docs?.source}}};const b=["Default","LowCount","HighCount"];export{t as Default,a as HighCount,o as LowCount,b as __namedExportsOrder,S as default};

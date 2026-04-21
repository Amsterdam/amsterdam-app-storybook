import{j as r,V as g,s as C}from"./iframe-u7wg4d1k.js";import{P as h}from"./Pie-d2KhHri1.js";import{P as k}from"./Phrase-Cl3KCpK-.js";import{u as x}from"./useThemable-2J5jTl0s.js";import{R as y}from"./Row-Dimg_F9O.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-BMrOCcD_.js";import"./AccessibleText-D2zvd9AO.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const _=40,j=10,d=(e,t=0)=>Math.floor(_+(String(e).length-1)*j+t),f=12,s=({count:e,pie:t})=>{const o=x(m=>M(m,e,!!t)),n=d(e,f),c=t?m=>r.jsx(h,{data:t,size:n,...m}):g;return r.jsx(c,{style:[o.clusterBase,o.clusterOuter],children:r.jsx(g,{style:[o.clusterBase,o.clusterInner],children:r.jsx(k,{color:t?"default":"inverse",emphasis:"strong",children:e})})})},M=(e,t,o)=>{const n=d(t),c=d(t,f);return C.create({clusterBase:{justifyContent:"center",alignItems:"center",borderRadius:"100%"},clusterOuter:{backgroundColor:`${e.color.backgroundArea.primary}30`,width:c,height:c},clusterInner:{backgroundColor:o?e.color.box.background.distinct:e.color.backgroundArea.primary,width:n,height:n}})};try{s.displayName="ClusterMarker",s.__docgenInfo={description:"",displayName:"ClusterMarker",filePath:"/Users/runner/work/1/s/src/components/features/map/clusters/ClusterMarker.tsx",methods:[],props:{count:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/clusters/ClusterMarker.tsx",name:"TypeLiteral"}],description:"",name:"count",required:!0,tags:{},type:{name:"number"}},pie:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/clusters/ClusterMarker.tsx",name:"TypeLiteral"}],description:"",name:"pie",required:!1,tags:{},type:{name:"{ color: string; percentage: number; }[]"}}},tags:{}}}catch{}const E={component:s},u={args:{count:12}},l={args:{count:2}},i={args:{count:1234}},a=[{color:"red",percentage:.4},{color:"blue",percentage:.2},{color:"yellow",percentage:.1},{color:"pink",percentage:.3}],p={render:()=>r.jsxs(y,{gutter:"md",children:[r.jsx(s,{count:1,pie:a}),r.jsx(s,{count:12,pie:a}),r.jsx(s,{count:123,pie:a}),r.jsx(s,{count:1234,pie:a}),r.jsx(s,{count:12345,pie:a})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    count: 12
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    count: 2
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1234
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Row gutter="md">
      <ClusterMarker count={1} pie={pie} />
      <ClusterMarker count={12} pie={pie} />
      <ClusterMarker count={123} pie={pie} />
      <ClusterMarker count={1234} pie={pie} />
      <ClusterMarker count={12345} pie={pie} />
    </Row>
}`,...p.parameters?.docs?.source}}};const L=["Default","LowCount","HighCount","Pie"];export{u as Default,i as HighCount,l as LowCount,p as Pie,L as __namedExportsOrder,E as default};

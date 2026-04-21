import{r as C,j as s,V as g,s as k}from"./iframe-BfstYiK4.js";import{P as y}from"./Pie-D06VLMrw.js";import{P as h}from"./Phrase-C-V2sZbw.js";import{u as x}from"./useThemable-nRTq3wAD.js";import{R as _}from"./Row-DwXfqwK5.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-DWJ3Apae.js";import"./AccessibleText-8HSf-nN8.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const j=(e,t)=>e.size===t.size&&e.pie?.map(r=>[r.percentage,r.color].join("-")).join("_")===t.pie?.map(r=>[r.percentage,r.color].join("-")).join("-"),m=C.memo(({pie:e,size:t,...r})=>e?s.jsx(y,{data:e,size:t,...r}):s.jsx(g,{...r}),j);try{m.displayName="ClusterMarkerWrapper",m.__docgenInfo={description:"",displayName:"ClusterMarkerWrapper",filePath:"/Users/runner/work/1/s/src/components/features/map/clusters/ClusterMarkerWrapper.tsx",methods:[],props:{pie:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/clusters/ClusterMarkerWrapper.tsx",name:"TypeLiteral"}],description:"",name:"pie",required:!0,tags:{},type:{name:'Omit<PieSlice, "offset">[] | undefined'}},size:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/clusters/ClusterMarkerWrapper.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!0,tags:{},type:{name:"number"}}},tags:{}}}catch{}const M=40,b=10,d=(e,t=0)=>Math.floor(M+(String(e).length-1)*b+t),f=12,a=({count:e,pie:t})=>{const r=x(c=>w(c,e,!!t)),n=d(e,f);return s.jsx(m,{pie:t,size:n,style:[r.clusterBase,r.clusterOuter],children:s.jsx(g,{style:[r.clusterBase,r.clusterInner],children:s.jsx(h,{color:t?"default":"inverse",emphasis:"strong",children:e})})})},w=(e,t,r)=>{const n=d(t),c=d(t,f);return k.create({clusterBase:{justifyContent:"center",alignItems:"center",borderRadius:"100%",zIndex:1},clusterOuter:{backgroundColor:`${e.color.backgroundArea.primary}30`,width:c,height:c},clusterInner:{backgroundColor:r?e.color.box.background.distinct:e.color.backgroundArea.primary,width:n,height:n}})};try{a.displayName="ClusterMarker",a.__docgenInfo={description:"",displayName:"ClusterMarker",filePath:"/Users/runner/work/1/s/src/components/features/map/clusters/ClusterMarker.tsx",methods:[],props:{count:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/clusters/ClusterMarker.tsx",name:"TypeLiteral"}],description:"",name:"count",required:!0,tags:{},type:{name:"number"}},pie:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/clusters/ClusterMarker.tsx",name:"TypeLiteral"}],description:"",name:"pie",required:!1,tags:{},type:{name:"{ color: string; percentage: number; }[]"}}},tags:{}}}catch{}const E={component:a},u={args:{count:12}},i={args:{count:2}},l={args:{count:1234}},o=[{color:"red",percentage:.4},{color:"blue",percentage:.2},{color:"yellow",percentage:.1},{color:"pink",percentage:.3}],p={render:()=>s.jsxs(_,{gutter:"md",children:[s.jsx(a,{count:1,pie:o}),s.jsx(a,{count:12,pie:o}),s.jsx(a,{count:123,pie:o}),s.jsx(a,{count:1234,pie:o}),s.jsx(a,{count:12345,pie:o})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    count: 12
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    count: 2
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1234
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Row gutter="md">
      <ClusterMarker count={1} pie={pie} />
      <ClusterMarker count={12} pie={pie} />
      <ClusterMarker count={123} pie={pie} />
      <ClusterMarker count={1234} pie={pie} />
      <ClusterMarker count={12345} pie={pie} />
    </Row>
}`,...p.parameters?.docs?.source}}};const O=["Default","LowCount","HighCount","Pie"];export{u as Default,l as HighCount,i as LowCount,p as Pie,O as __namedExportsOrder,E as default};

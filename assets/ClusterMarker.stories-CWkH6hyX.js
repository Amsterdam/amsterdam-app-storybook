import{j as n,V as l,S as m}from"./iframe-D73dFViQ.js";import{P as p}from"./Phrase-BYgy4oL9.js";import{u as d}from"./useThemable-CxRkP6W7.js";import"./preload-helper-Zf8nSx-t.js";import"./AccessibleText-CVbYba3H.js";const g=40,h=10,i=(e,r=0)=>Math.floor(g+(String(e).length-1)*h+r),_=12,c=({count:e})=>{const r=d(t=>y(t,e));return n.jsx(l,{style:[r.clusterBase,r.clusterOuter],children:n.jsx(l,{style:[r.clusterBase,r.clusterInner],children:n.jsx(p,{color:"inverse",emphasis:"strong",children:e})})})},y=(e,r)=>{const t=i(r),u=i(r,_);return m.create({clusterBase:{justifyContent:"center",alignItems:"center",borderRadius:"100%"},clusterOuter:{backgroundColor:`${e.color.backgroundArea.primary}30`,width:u,height:u},clusterInner:{backgroundColor:e.color.backgroundArea.primary,width:t,height:t}})};try{c.displayName="ClusterMarker",c.__docgenInfo={description:"",displayName:"ClusterMarker",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}}}catch{}const k={component:c},s={args:{count:12}},o={args:{count:2}},a={args:{count:1234}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    count: 12
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    count: 2
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    count: 1234
  }
}`,...a.parameters?.docs?.source}}};const x=["Default","LowCount","HighCount"];export{s as Default,a as HighCount,o as LowCount,x as __namedExportsOrder,k as default};

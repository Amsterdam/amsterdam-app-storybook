import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{J as n,n as r,q as i}from"./dist-DxOIIK9r.js";import{o as a,s as o}from"./types-rMqeGI-w.js";import{A as s,M as c,N as l,c as u,j as d,mn as ee,pn as te,s as f}from"./modules-D0B2heql.js";import{a as ne,l as re,o as p,u as m}from"./themes-Iysh1lWG.js";import{n as ie,t as h}from"./useTheme-Bxsz_6eW.js";import{n as g,t as _}from"./Column-myn6nkxB.js";import{n as v,t as y}from"./Phrase-DtXTydrZ.js";import{h as b,n as x,t as S,v as C,y as ae}from"./module-DiFBaySR.js";import{n as w,t as T}from"./Row-CQC1LRad.js";import{n as E,t as D}from"./Icon-D3gYeuu4.js";import{i as oe,r as se}from"./useTrackRenderException-CwsVZcag.js";import{i as O,n as k,r as A,t as j}from"./svgIcons-_4t6odMW.js";import{n as M,t as N}from"./useDeviceContext-CpyFezk3.js";import{n as P,t as F}from"./Box-1E4Rg8uj.js";var I,L,R;function z(){return(z=e((()=>{r(),S(),o(),N(),u(),ne(),h(),I=t(),L=f,R=({fractionCode:e,size:t=`md`})=>{let{color:n}=ie(),{fontScale:r}=M(),o=p.waste.fractionIcon[t]*r;if(!L[e]?.default)return(0,I.jsx)(i,{style:{height:o,width:o}});let{color:s,hasLightBackground:c,path:l}=L[e][a.default];return(0,I.jsxs)(C,{fillRule:`evenodd`,height:o,viewBox:`0 0 24 24`,width:o,children:[(0,I.jsx)(x,{cx:`12`,cy:`12`,fill:s,r:`12`}),(0,I.jsx)(b,{d:l,fill:n.text[c?`default`:`inverse`]})]})};try{R.displayName=`WasteFractionIcon`,R.__docgenInfo={description:``,displayName:`WasteFractionIcon`,filePath:`/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`fractionCode`,required:!0,tags:{},type:{name:`enum`,raw:`FractionCode`,value:[{value:`"GA"`,description:``,fullComment:``,tags:{}},{value:`"GFT"`,description:``,fullComment:``,tags:{}},{value:`"Glas"`,description:``,fullComment:``,tags:{}},{value:`"Papier"`,description:``,fullComment:``,tags:{}},{value:`"Plastic"`,description:``,fullComment:``,tags:{}},{value:`"Rest"`,description:``,fullComment:``,tags:{}},{value:`"Textiel"`,description:``,fullComment:``,tags:{}}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"md" | "xl"`,value:[{value:`"md"`},{value:`"xl"`}]}}},tags:{}}}catch{}})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{se(),ee(),l(),s(),z(),u(),re(),P(),g(),w(),v(),o(),E(),O(),B=t(),V=function(e){return e.boatCharging=`boatCharging`,e.designSystem=`designSystem`,e.elections=`elections`,e.kingsday=`kingsday`,e.map=`map`,e.system=`system`,e.wasteGuide=`wasteGuide`,e}(V||{}),H={elections:c,kingsday:d,wasteGuide:f,system:A,designSystem:j,map:oe,boatCharging:te},U=({color:e,category:t})=>(0,B.jsx)(T,{gutter:`md`,wrap:!0,children:Object.keys(H[t]).map(n=>{let r=k[n],i=a.filled in r,o=a.default in r;return(0,B.jsx)(F,{borderColor:`default`,borderStyle:`solid`,inset:`sm`,children:(0,B.jsxs)(_,{gutter:`sm`,halign:`center`,children:[(0,B.jsx)(y,{testID:`testIdPhrase`,children:n}),t!==`wasteGuide`&&(0,B.jsxs)(T,{gutter:`sm`,valign:`end`,children:[!!o&&(0,B.jsxs)(_,{flex:1,halign:`center`,children:[(0,B.jsx)(D,{color:e,name:n,size:`lg`,testID:`testIdIcon`}),(0,B.jsx)(y,{variant:`extraSmall`,children:`Default`})]}),!!i&&(0,B.jsxs)(_,{flex:1,halign:`center`,children:[(0,B.jsx)(D,{color:e,isFilled:!0,name:n,size:`lg`,testID:`testIdIcon`}),(0,B.jsx)(y,{textAlign:`center`,variant:`extraSmall`,children:`Filled`})]})]}),t===`wasteGuide`&&(0,B.jsx)(R,{fractionCode:n,size:`xl`})]})},n)})}),W={component:U,argTypes:{color:{options:Object.keys(m.text),control:{type:`select`}},category:{options:Object.values(V),control:`select`}}},G={render:U,args:{color:`default`,category:`designSystem`}},K={render:U,args:{color:`default`,category:`boatCharging`}},q={render:U,args:{color:`default`,category:`elections`}},J={render:U,args:{color:`default`,category:`wasteGuide`}},Y={render:U,args:{color:`default`,category:`kingsday`}},X={render:U,args:{color:`default`,category:`system`}},Z={render:U,args:{color:`default`,category:`map`}},Q=[`DesignSystemIcons`,`BoatChargingIcons`,`ElectionsIcons`,`WasteGuideIcons`,`KingsdayIcons`,`SystemIcons`,`MapIcons`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.boatCharging
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.elections
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.kingsday
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.map
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{K as BoatChargingIcons,G as DesignSystemIcons,q as ElectionsIcons,Y as KingsdayIcons,Z as MapIcons,X as SystemIcons,J as WasteGuideIcons,Q as __namedExportsOrder,W as default};
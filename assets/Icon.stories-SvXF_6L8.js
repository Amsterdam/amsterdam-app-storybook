import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{X as n,Y as r,n as i}from"./dist-jTNdXIQ3.js";import{o as a,s as o}from"./types-rMqeGI-w.js";import{A as s,M as c,bt as l,d as u,j as ee,k as te,u as d,yt as ne}from"./modules-F96guVOH.js";import{a as re,l as f,o as p,u as m}from"./themes-Iysh1lWG.js";import{n as h,t as g}from"./useTheme-C9OiVIZv.js";import{n as ie,t as _}from"./Column-AVvcIRQl.js";import{n as v,t as y}from"./Phrase-BynZL5Mb.js";import{h as b,n as x,t as S,v as C,y as ae}from"./module-ic-wvzKi.js";import{n as w,t as T}from"./Row-Bae8A2Ts.js";import{n as E,t as D}from"./Icon-G3XH5uWW.js";import{i as oe,r as se}from"./useTrackRenderException-D_JB9iG2.js";import{i as O,n as k,r as A,t as j}from"./svgIcons-DRixwBEe.js";import{n as M,t as N}from"./useDeviceContext-CpyFezk3.js";import{n as P,t as F}from"./Box-DKOQ_0KL.js";var I,L,R;function z(){return(z=e((()=>{i(),S(),o(),N(),u(),re(),g(),I=t(),L=d,R=({fractionCode:e,size:t=`md`})=>{let{color:n}=h(),{fontScale:i}=M(),o=p.waste.fractionIcon[t]*i;if(!L[e]?.default)return(0,I.jsx)(r,{style:{height:o,width:o}});let{color:s,hasLightBackground:c,path:l}=L[e][a.default];return(0,I.jsxs)(C,{fillRule:`evenodd`,height:o,viewBox:`0 0 24 24`,width:o,children:[(0,I.jsx)(x,{cx:`12`,cy:`12`,fill:s,r:`12`}),(0,I.jsx)(b,{d:l,fill:n.text[c?`default`:`inverse`]})]})};try{R.displayName=`WasteFractionIcon`,R.__docgenInfo={description:``,displayName:`WasteFractionIcon`,filePath:`/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`fractionCode`,required:!0,tags:{},type:{name:`enum`,raw:`FractionCode`,value:[{value:`"GA"`,description:``,fullComment:``,tags:{}},{value:`"GFT"`,description:``,fullComment:``,tags:{}},{value:`"Glas"`,description:``,fullComment:``,tags:{}},{value:`"Papier"`,description:``,fullComment:``,tags:{}},{value:`"Plastic"`,description:``,fullComment:``,tags:{}},{value:`"Rest"`,description:``,fullComment:``,tags:{}},{value:`"Textiel"`,description:``,fullComment:``,tags:{}}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"md" | "xl"`,value:[{value:`"md"`},{value:`"xl"`}]}}},tags:{}}}catch{}})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{se(),l(),c(),te(),z(),u(),f(),P(),ie(),w(),v(),o(),E(),O(),B=t(),V=function(e){return e.boatCharging=`boatCharging`,e.designSystem=`designSystem`,e.elections=`elections`,e.kingsday=`kingsday`,e.map=`map`,e.system=`system`,e.wasteGuide=`wasteGuide`,e}(V||{}),H={elections:ee,kingsday:s,wasteGuide:d,system:A,designSystem:j,map:oe,boatCharging:ne},U=({color:e,category:t})=>(0,B.jsx)(T,{gutter:`md`,wrap:!0,children:Object.keys(H[t]).map(n=>{let r=k[n],i=a.filled in r,o=a.default in r;return(0,B.jsx)(F,{borderColor:`default`,borderStyle:`solid`,inset:`sm`,children:(0,B.jsxs)(_,{gutter:`sm`,halign:`center`,children:[(0,B.jsx)(y,{testID:`testIdPhrase`,children:n}),t!==`wasteGuide`&&(0,B.jsxs)(T,{gutter:`sm`,valign:`end`,children:[!!o&&(0,B.jsxs)(_,{flex:1,halign:`center`,children:[(0,B.jsx)(D,{color:e,name:n,size:`lg`,testID:`testIdIcon`}),(0,B.jsx)(y,{variant:`extraSmall`,children:`Default`})]}),!!i&&(0,B.jsxs)(_,{flex:1,halign:`center`,children:[(0,B.jsx)(D,{color:e,isFilled:!0,name:n,size:`lg`,testID:`testIdIcon`}),(0,B.jsx)(y,{textAlign:`center`,variant:`extraSmall`,children:`Filled`})]})]}),t===`wasteGuide`&&(0,B.jsx)(R,{fractionCode:n,size:`xl`})]})},n)})}),W={component:U,argTypes:{color:{options:Object.keys(m.text),control:{type:`select`}},category:{options:Object.values(V),control:`select`}}},G={render:U,args:{color:`default`,category:`designSystem`}},K={render:U,args:{color:`default`,category:`boatCharging`}},q={render:U,args:{color:`default`,category:`elections`}},J={render:U,args:{color:`default`,category:`wasteGuide`}},Y={render:U,args:{color:`default`,category:`kingsday`}},X={render:U,args:{color:`default`,category:`system`}},Z={render:U,args:{color:`default`,category:`map`}},Q=[`DesignSystemIcons`,`BoatChargingIcons`,`ElectionsIcons`,`WasteGuideIcons`,`KingsdayIcons`,`SystemIcons`,`MapIcons`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
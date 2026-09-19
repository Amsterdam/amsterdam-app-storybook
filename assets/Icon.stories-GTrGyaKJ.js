import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{J as n,n as r,q as i}from"./dist-BEOOBnYV.js";import{c as a,i as o,r as s,s as c}from"./themes-C7yDjynq.js";import{A as l,Hn as u,Jn as d,Vn as ee,Yn as f,ct as te,j as p,lt as ne,st as m,ut as h}from"./iframe-13c8Hb02.js";import{n as g,t as _}from"./useTheme-C7eIAtuG.js";import{n as v,t as y}from"./Column-XbRLvZiV.js";import{n as b,t as x}from"./Phrase-DUiJZBYu.js";import{n as S,t as C}from"./Box-BHrxBdOu.js";import{n as w,t as T}from"./Row-DZ0-Flda.js";import{h as E,n as re,t as ie,v as ae,y as oe}from"./module-axnuR2DY.js";import{n as D,t as O}from"./Icon-CuMD4TCF.js";import{n as k,t as A}from"./icons-Bz_w97WJ.js";import{i as j,n as M,r as N,t as P}from"./svgIcons-B3HT9u6a.js";import{n as F,t as I}from"./useDeviceContext-xMHdAmTN.js";var L,R,z,B=e((()=>{r(),ie(),f(),I(),p(),s(),_(),L=t(),R=l,z=({fractionCode:e,size:t=`md`})=>{let{color:n}=g(),{fontScale:r}=F(),a=o.waste.fractionIcon[t]*r;if(!R[e]?.default)return(0,L.jsx)(i,{style:{height:a,width:a}});let{color:s,hasLightBackground:c,path:l}=R[e][d.default];return(0,L.jsxs)(ae,{fillRule:`evenodd`,height:a,viewBox:`0 0 24 24`,width:a,children:[(0,L.jsx)(re,{cx:`12`,cy:`12`,fill:s,r:`12`}),(0,L.jsx)(E,{d:l,fill:n.text[c?`default`:`inverse`]})]})};try{z.displayName=`WasteFractionIcon`,z.__docgenInfo={description:``,displayName:`WasteFractionIcon`,filePath:`/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`fractionCode`,required:!0,tags:{},type:{name:`enum`,raw:`FractionCode`,value:[{value:`"GA"`,description:``,fullComment:``,tags:{}},{value:`"GFT"`,description:``,fullComment:``,tags:{}},{value:`"Glas"`,description:``,fullComment:``,tags:{}},{value:`"Papier"`,description:``,fullComment:``,tags:{}},{value:`"Plastic"`,description:``,fullComment:``,tags:{}},{value:`"Rest"`,description:``,fullComment:``,tags:{}},{value:`"Textiel"`,description:``,fullComment:``,tags:{}}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"md" | "xl"`,value:[{value:`"md"`},{value:`"xl"`}]}}},tags:{}}}catch{}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{S(),v(),w(),b(),f(),D(),j(),A(),u(),h(),m(),B(),p(),c(),V=t(),H=function(e){return e.boatCharging=`boatCharging`,e.designSystem=`designSystem`,e.elections=`elections`,e.kingsday=`kingsday`,e.map=`map`,e.system=`system`,e.wasteGuide=`wasteGuide`,e}(H||{}),U={elections:ne,kingsday:te,wasteGuide:l,system:N,designSystem:P,map:k,boatCharging:ee},W=({color:e,category:t})=>(0,V.jsx)(T,{gutter:`md`,wrap:!0,children:Object.keys(U[t]).map(n=>{let r=M[n],i=d.filled in r,a=d.default in r;return(0,V.jsx)(C,{borderColor:`default`,borderStyle:`solid`,inset:`sm`,children:(0,V.jsxs)(y,{gutter:`sm`,halign:`center`,children:[(0,V.jsx)(x,{testID:`testIdPhrase`,children:n}),t!==`wasteGuide`&&(0,V.jsxs)(T,{gutter:`sm`,valign:`end`,children:[!!a&&(0,V.jsxs)(y,{flex:1,halign:`center`,children:[(0,V.jsx)(O,{color:e,name:n,size:`lg`,testID:`testIdIcon`}),(0,V.jsx)(x,{variant:`extraSmall`,children:`Default`})]}),!!i&&(0,V.jsxs)(y,{flex:1,halign:`center`,children:[(0,V.jsx)(O,{color:e,isFilled:!0,name:n,size:`lg`,testID:`testIdIcon`}),(0,V.jsx)(x,{textAlign:`center`,variant:`extraSmall`,children:`Filled`})]})]}),t===`wasteGuide`&&(0,V.jsx)(z,{fractionCode:n,size:`xl`})]})},n)})}),G={component:W,argTypes:{color:{options:Object.keys(a.text),control:{type:`select`}},category:{options:Object.values(H),control:`select`}}},K={render:W,args:{color:`default`,category:`designSystem`}},q={render:W,args:{color:`default`,category:`boatCharging`}},J={render:W,args:{color:`default`,category:`elections`}},Y={render:W,args:{color:`default`,category:`wasteGuide`}},X={render:W,args:{color:`default`,category:`kingsday`}},Z={render:W,args:{color:`default`,category:`system`}},Q={render:W,args:{color:`default`,category:`map`}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.boatCharging
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.elections
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.kingsday
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.map
  }
}`,...Q.parameters?.docs?.source}}},$=[`DesignSystemIcons`,`BoatChargingIcons`,`ElectionsIcons`,`WasteGuideIcons`,`KingsdayIcons`,`SystemIcons`,`MapIcons`]}))();export{q as BoatChargingIcons,K as DesignSystemIcons,J as ElectionsIcons,X as KingsdayIcons,Q as MapIcons,Z as SystemIcons,Y as WasteGuideIcons,$ as __namedExportsOrder,G as default};
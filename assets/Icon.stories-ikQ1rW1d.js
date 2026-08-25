import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{G as n,K as r,n as i}from"./dist-NCr0OYBw.js";import{o as a,s as o}from"./types-BLm9NLoI.js";import{c as s,i as c,r as l,s as u}from"./themes-C7yDjynq.js";import{I as ee,Jt as te,L as ne,R as re,Yt as ie,l as d,u as f,z as p}from"./iframe-CZNPLoVn.js";import{n as m,t as h}from"./useTheme-C7eIAtuG.js";import{n as g,t as _}from"./Column-D3VytRyS.js";import{n as v,t as y}from"./Phrase-C08YHHmF.js";import{n as b,t as x}from"./Box-DvjNZo8Y.js";import{n as S,t as C}from"./Row-D4mj-L4w.js";import{h as w,n as T,t as ae,v as E,y as oe}from"./module-Cm7sSr-I.js";import{n as D,t as O}from"./Icon-CVBRYHQa.js";import{n as k,t as A}from"./icons-5oPwIqHV.js";import{i as j,n as M,r as N,t as P}from"./svgIcons-Dtlu6Gjc.js";import{n as F,t as I}from"./useDeviceContext-BN5XYP9P.js";var L,R,z,B=e((()=>{i(),ae(),o(),I(),f(),l(),h(),L=t(),R=d,z=({fractionCode:e,size:t=`md`})=>{let{color:r}=m(),{fontScale:i}=F(),o=c.waste.fractionIcon[t]*i;if(!R[e]?.default)return(0,L.jsx)(n,{style:{height:o,width:o}});let{color:s,hasLightBackground:l,path:u}=R[e][a.default];return(0,L.jsxs)(E,{fillRule:`evenodd`,height:o,viewBox:`0 0 24 24`,width:o,children:[(0,L.jsx)(T,{cx:`12`,cy:`12`,fill:s,r:`12`}),(0,L.jsx)(w,{d:u,fill:r.text[l?`default`:`inverse`]})]})};try{z.displayName=`WasteFractionIcon`,z.__docgenInfo={description:``,displayName:`WasteFractionIcon`,filePath:`/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`fractionCode`,required:!0,tags:{},type:{name:`enum`,raw:`FractionCode`,value:[{value:`"GA"`,description:``,fullComment:``,tags:{}},{value:`"GFT"`,description:``,fullComment:``,tags:{}},{value:`"Glas"`,description:``,fullComment:``,tags:{}},{value:`"Papier"`,description:``,fullComment:``,tags:{}},{value:`"Plastic"`,description:``,fullComment:``,tags:{}},{value:`"Rest"`,description:``,fullComment:``,tags:{}},{value:`"Textiel"`,description:``,fullComment:``,tags:{}}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"md" | "xl"`,value:[{value:`"md"`},{value:`"xl"`}]}}},tags:{}}}catch{}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{b(),g(),S(),v(),D(),j(),A(),ie(),p(),ee(),B(),f(),u(),V=t(),H=function(e){return e.boatCharging=`boatCharging`,e.designSystem=`designSystem`,e.elections=`elections`,e.kingsday=`kingsday`,e.map=`map`,e.system=`system`,e.wasteGuide=`wasteGuide`,e}(H||{}),U={elections:re,kingsday:ne,wasteGuide:d,system:N,designSystem:P,map:k,boatCharging:te},W=({color:e,category:t})=>(0,V.jsx)(C,{gutter:`md`,wrap:!0,children:Object.keys(U[t]).map(n=>{let r=`filled`in M[n];return(0,V.jsx)(x,{borderColor:`default`,borderStyle:`solid`,inset:`sm`,children:(0,V.jsxs)(_,{gutter:`sm`,halign:`center`,children:[(0,V.jsx)(y,{testID:`testIdPhrase`,children:n}),t!==`wasteGuide`&&(0,V.jsxs)(C,{gutter:`sm`,valign:`end`,children:[(0,V.jsxs)(_,{flex:1,halign:`center`,children:[(0,V.jsx)(O,{color:e,name:n,size:`lg`,testID:`testIdIcon`}),!!r&&(0,V.jsx)(y,{variant:`extraSmall`,children:`Default`})]}),!!r&&(0,V.jsxs)(_,{flex:1,halign:`center`,children:[(0,V.jsx)(O,{color:e,isFilled:!0,name:n,size:`lg`,testID:`testIdIcon`}),(0,V.jsx)(y,{textAlign:`center`,variant:`extraSmall`,children:`Filled`})]})]}),t===`wasteGuide`&&(0,V.jsx)(z,{fractionCode:n,size:`xl`})]})},n)})}),G={component:W,argTypes:{color:{options:Object.keys(s.text),control:{type:`select`}},category:{options:Object.values(H),control:`select`}}},K={render:W,args:{color:`default`,category:`designSystem`}},q={render:W,args:{color:`default`,category:`boatCharging`}},J={render:W,args:{color:`default`,category:`elections`}},Y={render:W,args:{color:`default`,category:`wasteGuide`}},X={render:W,args:{color:`default`,category:`kingsday`}},Z={render:W,args:{color:`default`,category:`system`}},Q={render:W,args:{color:`default`,category:`map`}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
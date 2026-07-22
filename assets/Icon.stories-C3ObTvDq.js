import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{G as n,K as r,n as i}from"./dist-NCr0OYBw.js";import{o as a,s as o}from"./types-BLm9NLoI.js";import{c as s,i as c,r as l,s as u}from"./themes-dwCSxozg.js";import{F as d,I as f,L as p,R as m,l as h,u as g}from"./iframe-Dz4565fU.js";import{i as _,r as v}from"./useThemable-DYYnjYsR.js";import{n as y,t as b}from"./Box-2cJ2flC1.js";import{n as x,t as S}from"./Row-8eJCYq2m.js";import{n as C,t as w}from"./Column-B9cYrS6b.js";import{h as T,n as E,t as ee,v as te,y as ne}from"./module-Cm7sSr-I.js";import{n as re,t as D}from"./Icon-DTVZVXxb.js";import{n as O,t as k}from"./icons-5oPwIqHV.js";import{i as A,n as j,r as M,t as N}from"./svgIcons-BNp87uLR.js";import{n as P,t as F}from"./useDeviceContext-DlHq3CFr.js";import{n as I,t as L}from"./Phrase-C6qsaK3q.js";var R,z,B,V=e((()=>{i(),ee(),o(),F(),g(),l(),v(),R=t(),z=h,B=({fractionCode:e,size:t=`md`})=>{let{color:r}=_(),{fontScale:i}=P(),o=c.waste.fractionIcon[t]*i;if(!z[e]?.default)return(0,R.jsx)(n,{style:{height:o,width:o}});let{color:s,hasLightBackground:l,path:u}=z[e][a.default];return(0,R.jsxs)(te,{fillRule:`evenodd`,height:o,viewBox:`0 0 24 24`,width:o,children:[(0,R.jsx)(E,{cx:`12`,cy:`12`,fill:s,r:`12`}),(0,R.jsx)(T,{d:u,fill:r.text[l?`default`:`inverse`]})]})};try{B.displayName=`WasteFractionIcon`,B.__docgenInfo={description:``,displayName:`WasteFractionIcon`,filePath:`/Users/runner/work/1/s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,methods:[],props:{fractionCode:{defaultValue:null,declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`fractionCode`,required:!0,tags:{},type:{name:`enum`,raw:`FractionCode`,value:[{value:`"GA"`,description:``,fullComment:``,tags:{}},{value:`"GFT"`,description:``,fullComment:``,tags:{}},{value:`"Glas"`,description:``,fullComment:``,tags:{}},{value:`"Papier"`,description:``,fullComment:``,tags:{}},{value:`"Plastic"`,description:``,fullComment:``,tags:{}},{value:`"Rest"`,description:``,fullComment:``,tags:{}},{value:`"Textiel"`,description:``,fullComment:``,tags:{}}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`s/src/modules/waste-guide/components/WasteFractionIcon.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"md" | "xl"`,value:[{value:`"md"`},{value:`"xl"`}]}}},tags:{}}}catch{}})),H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),C(),x(),I(),re(),A(),k(),m(),d(),V(),g(),u(),H=t(),U=function(e){return e.designSystem=`designSystem`,e.elections=`elections`,e.kingsday=`kingsday`,e.map=`map`,e.system=`system`,e.wasteGuide=`wasteGuide`,e}(U||{}),W={elections:p,kingsday:f,wasteGuide:h,system:M,designSystem:N,map:O},G=({color:e,category:t})=>(0,H.jsx)(S,{gutter:`md`,wrap:!0,children:Object.keys(W[t]).map(n=>{let r=`filled`in j[n];return(0,H.jsx)(b,{borderColor:`default`,borderStyle:`solid`,inset:`sm`,children:(0,H.jsxs)(w,{gutter:`sm`,halign:`center`,children:[(0,H.jsx)(L,{testID:`testIdPhrase`,children:n}),t!==`wasteGuide`&&(0,H.jsxs)(S,{gutter:`sm`,valign:`end`,children:[(0,H.jsxs)(w,{flex:1,halign:`center`,children:[(0,H.jsx)(D,{color:e,name:n,size:`lg`,testID:`testIdIcon`}),!!r&&(0,H.jsx)(L,{variant:`extraSmall`,children:`Default`})]}),!!r&&(0,H.jsxs)(w,{flex:1,halign:`center`,children:[(0,H.jsx)(D,{color:e,isFilled:!0,name:n,size:`lg`,testID:`testIdIcon`}),(0,H.jsx)(L,{textAlign:`center`,variant:`extraSmall`,children:`Filled`})]})]}),t===`wasteGuide`&&(0,H.jsx)(B,{fractionCode:n,size:`xl`})]})},n)})}),K={component:G,argTypes:{color:{options:Object.keys(s.text),control:{type:`select`}},category:{options:Object.keys(U),control:`select`}}},q={render:G,args:{color:`default`,category:`designSystem`}},J={render:G,args:{color:`default`,category:`elections`}},Y={render:G,args:{color:`default`,category:`wasteGuide`}},X={render:G,args:{color:`default`,category:`kingsday`}},Z={render:G,args:{color:`default`,category:`system`}},Q={render:G,args:{color:`default`,category:`map`}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
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
}`,...Q.parameters?.docs?.source}}},$=[`DesignSystemIcons`,`ElectionsIcons`,`WasteGuideIcons`,`KingsdayIcons`,`SystemIcons`,`MapIcons`]}))();export{q as DesignSystemIcons,J as ElectionsIcons,X as KingsdayIcons,Q as MapIcons,Z as SystemIcons,Y as WasteGuideIcons,$ as __namedExportsOrder,K as default};
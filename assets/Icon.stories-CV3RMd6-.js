import{ak as O,al as P,j as e,V as b,w as M,am as V,an as W}from"./iframe-CUGsW0B6.js";import{B}from"./Box-B5DppRa_.js";import{C as d}from"./Column-Ccxlfvsk.js";import{R as f}from"./Row-3tF2qlDW.js";import{P as m}from"./Phrase-BM1yVssC.js";import{D as A,S as q,I as y,a as L}from"./Icon-cGeC_v5f.js";import{S as Y,C as H,P as J}from"./index-xO0An70S.js";import{u as K}from"./useDeviceContext-BAqmORQk.js";import{a as Q}from"./useThemable-DHDNYWmL.js";import"./preload-helper-Dp1pzeXC.js";import"./layoutStyles-CYV6sMiv.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-CUmHckJh.js";const I=P,u=({fractionCode:s,size:o="md"})=>{var g;const{color:t}=Q(),{fontScale:p}=K(),r=O.waste.fractionIcon[o]*p;if(!((g=I[s])!=null&&g.default))return e.jsx(b,{style:{height:r,width:r}});const{color:F,hasLightBackground:R,path:E}=I[s][M.default];return e.jsxs(Y,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(H,{cx:"12",cy:"12",fill:F,r:"12"}),e.jsx(J,{d:E,fill:t.text[R?"default":"inverse"]})]})};try{u.displayName="WasteFractionIcon",u.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var z=(s=>(s.designSystem="designSystem",s.elections="elections",s.system="system",s.wasteGuide="wasteGuide",s))(z||{});const U={elections:W,wasteGuide:P,system:q,designSystem:A},a=({color:s,category:o})=>e.jsx(f,{gutter:"md",wrap:!0,children:Object.keys(U[o]).map(t=>{const r="filled"in L[t];return e.jsx(B,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(d,{gutter:"sm",halign:"center",children:[e.jsx(m,{testID:"testIdPhrase",children:t}),o!=="wasteGuide"&&e.jsxs(f,{gutter:"sm",valign:"end",children:[e.jsxs(d,{flex:1,halign:"center",children:[e.jsx(y,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(m,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(d,{flex:1,halign:"center",children:[e.jsx(y,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(m,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),o==="wasteGuide"&&e.jsx(u,{fractionCode:t,size:"xl"})]})},t)})}),de={component:a,argTypes:{color:{options:Object.keys(V.text),control:{type:"select"}},category:{options:Object.keys(z),control:"select"}}},n={render:a,args:{color:"default",category:"designSystem"}},c={render:a,args:{color:"default",category:"elections"}},l={render:a,args:{color:"default",category:"wasteGuide"}},i={render:a,args:{color:"default",category:"system"}};var x,h,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var v,j,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.elections
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,G,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...(T=(G=l.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var _,D,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const me=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","SystemIcons"];export{n as DesignSystemIcons,c as ElectionsIcons,i as SystemIcons,l as WasteGuideIcons,me as __namedExportsOrder,de as default};

import{ae as D,af as C,j as s,V as R,ag as z,ah as E}from"./iframe-SeiZlvO_.js";import{B as O}from"./Box-DZdmtlse.js";import{C as b}from"./Column-BbMv_9_K.js";import{R as M}from"./Row-I1E532oQ.js";import{P as W}from"./Phrase-DIJpyiq8.js";import{D as B,S as F,I as V}from"./Icon-BDSCCG-y.js";import{S as q,C as A,P as L}from"./index-CSab92-N.js";import{u as Y}from"./useDeviceContext-CbNV30rJ.js";import{a as H}from"./useThemable-m8muSwWi.js";import"./preload-helper-Dp1pzeXC.js";import"./layoutStyles-_sweJV1z.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-RKyPlqH1.js";import"./types-CVDZqz9V.js";const m=C,d=({fractionCode:e,size:o="md"})=>{const{color:t}=H(),{fontScale:T}=Y(),a=D.waste.fractionIcon[o]*T;if(!m[e])return s.jsx(R,{style:{height:a,width:a}});const{color:_,hasLightBackground:P,path:k}=m[e];return s.jsxs(q,{fillRule:"evenodd",height:a,viewBox:"0 0 24 24",width:a,children:[s.jsx(A,{cx:"12",cy:"12",fill:_,r:"12"}),s.jsx(L,{d:k,fill:t.text[P?"default":"inverse"]})]})};try{d.displayName="WasteFractionIcon",d.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var G=(e=>(e.designSystem="designSystem",e.elections="elections",e.system="system",e.wasteGuide="wasteGuide",e))(G||{});const J={elections:E,wasteGuide:C,system:F,designSystem:B},r=({color:e,category:o})=>s.jsx(M,{gutter:"md",wrap:!0,children:Object.keys(J[o]).map(t=>s.jsx(O,{borderColor:"default",borderStyle:"solid",inset:"sm",children:s.jsxs(b,{gutter:"sm",halign:"center",children:[s.jsx(W,{testID:"testIdPhrase",children:t}),o!=="wasteGuide"&&s.jsx(V,{color:e,name:t,size:"lg",testID:"testIdIcon"}),o==="wasteGuide"&&s.jsx(d,{fractionCode:t,size:"xl"})]})},t))}),ie={component:r,argTypes:{color:{options:Object.keys(z.text),control:{type:"select"}},category:{options:Object.keys(G),control:"select"}}},n={render:r,args:{color:"default",category:"designSystem"}},c={render:r,args:{color:"default",category:"elections"}},i={render:r,args:{color:"default",category:"wasteGuide"}},l={render:r,args:{color:"default",category:"system"}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,f,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.elections
  }
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var S,x,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,j,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const le=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","SystemIcons"];export{n as DesignSystemIcons,c as ElectionsIcons,l as SystemIcons,i as WasteGuideIcons,le as __namedExportsOrder,ie as default};

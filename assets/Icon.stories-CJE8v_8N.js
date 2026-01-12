import{ae as D,af as C,j as s,V as R,ag as z,ah as O}from"./iframe-Cz7CXUHQ.js";import{B as b}from"./Box-DNPkKZf7.js";import{C as M}from"./Column-CYMYmzO9.js";import{R as W}from"./Row-Ct6MY6hT.js";import{P as B}from"./Phrase-D7UVGrdY.js";import{D as E,S as F,I as V}from"./Icon-B8zKW2ct.js";import{S as q,C as A,P as L}from"./index-DNHMKJm4.js";import{u as Y}from"./useDeviceContext-jb4SIIFS.js";import{a as H}from"./useThemable-DDtdTLxe.js";import"./preload-helper-Dp1pzeXC.js";import"./layoutStyles-DRFZJw5Z.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-BJccN3Lb.js";import"./types-CVDZqz9V.js";const m=C,d=({fractionCode:e,size:o="md"})=>{const{color:t}=H(),{fontScale:T}=Y(),a=D.waste.fractionIcon[o]*T;if(!m[e])return s.jsx(R,{style:{height:a,width:a}});const{color:_,hasLightBackground:P,path:k}=m[e];return s.jsxs(q,{fillRule:"evenodd",height:a,viewBox:"0 0 24 24",width:a,children:[s.jsx(A,{cx:"12",cy:"12",fill:_,r:"12"}),s.jsx(L,{d:k,fill:t.text[P?"default":"inverse"]})]})};try{d.displayName="WasteFractionIcon",d.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var G=(e=>(e.designSystem="designSystem",e.pollingStation="pollingStation",e.system="system",e.wasteGuide="wasteGuide",e))(G||{});const J={pollingStation:O,wasteGuide:C,system:F,designSystem:E},r=({color:e,category:o})=>s.jsx(W,{gutter:"md",wrap:!0,children:Object.keys(J[o]).map(t=>s.jsx(b,{borderColor:"default",borderStyle:"solid",inset:"sm",children:s.jsxs(M,{gutter:"sm",halign:"center",children:[s.jsx(B,{testID:"testIdPhrase",children:t}),o!=="wasteGuide"&&s.jsx(V,{color:e,name:t,size:"lg",testID:"testIdIcon"}),o==="wasteGuide"&&s.jsx(d,{fractionCode:t,size:"xl"})]})},t))}),ie={component:r,argTypes:{color:{options:Object.keys(z.text),control:{type:"select"}},category:{options:Object.keys(G),control:"select"}}},n={render:r,args:{color:"default",category:"designSystem"}},c={render:r,args:{color:"default",category:"pollingStation"}},i={render:r,args:{color:"default",category:"wasteGuide"}},l={render:r,args:{color:"default",category:"system"}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,f,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.pollingStation
  }
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,x,h;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const le=["DesignSystemIcons","PollingStationIcons","WasteGuideIcons","SystemIcons"];export{n as DesignSystemIcons,c as PollingStationIcons,l as SystemIcons,i as WasteGuideIcons,le as __namedExportsOrder,ie as default};

import{m as z,_ as D,ay as R,az as C,j as s,V as O,au as b,aA as E,av as M,aB as W,R as B,aC as F,aD as V,aE as A,e as q,s as L,f as Y,a as H}from"./iframe-D7ZkIMrk.js";import"./preload-helper-Dp1pzeXC.js";const u=C,d=({fractionCode:e,size:a="md"})=>{const{color:t}=z(),{fontScale:T}=D(),r=R.waste.fractionIcon[a]*T;if(!u[e])return s.jsx(O,{style:{height:r,width:r}});const{color:_,hasLightBackground:P,path:k}=u[e];return s.jsxs(b,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[s.jsx(E,{cx:"12",cy:"12",fill:_,r:"12"}),s.jsx(M,{d:k,fill:t.text[P?"default":"inverse"]})]})};try{d.displayName="WasteFractionIcon",d.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var G=(e=>(e.designSystem="designSystem",e.pollingStation="pollingStation",e.system="system",e.wasteGuide="wasteGuide",e))(G||{});const J={pollingStation:A,wasteGuide:C,system:V,designSystem:F},o=({color:e,category:a})=>s.jsx(B,{gutter:"md",wrap:!0,children:Object.keys(J[a]).map(t=>s.jsx(q,{borderColor:"default",borderStyle:"solid",inset:"sm",children:s.jsxs(L,{gutter:"sm",halign:"center",children:[s.jsx(Y,{testID:"testIdPhrase",children:t}),a!=="wasteGuide"&&s.jsx(H,{color:e,name:t,size:"lg",testID:"testIdIcon"}),a==="wasteGuide"&&s.jsx(d,{fractionCode:t,size:"xl"})]})},t))}),Q={component:o,argTypes:{color:{options:Object.keys(W.text),control:{type:"select"}},category:{options:Object.keys(G),control:"select"}}},n={render:o,args:{color:"default",category:"designSystem"}},c={render:o,args:{color:"default",category:"pollingStation"}},l={render:o,args:{color:"default",category:"wasteGuide"}},i={render:o,args:{color:"default",category:"system"}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,S,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.pollingStation
  }
}`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var f,x,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,j,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const U=["DesignSystemIcons","PollingStationIcons","WasteGuideIcons","SystemIcons"];export{n as DesignSystemIcons,c as PollingStationIcons,i as SystemIcons,l as WasteGuideIcons,U as __namedExportsOrder,Q as default};

import{$ as R,H as z,ah as D,ai as C,j as s,V as O,X as b,aj as M,Y as W,ak as B,R as E,al as F,am as V,an as q,B as A,C as Y,c as H,I as L}from"./iframe-Brjw9B3G.js";import"./preload-helper-Dp1pzeXC.js";const u=C,d=({fractionCode:e,size:a="md"})=>{const{color:t}=R(),{fontScale:T}=z(),r=D.waste.fractionIcon[a]*T;if(!u[e])return s.jsx(O,{style:{height:r,width:r}});const{color:_,hasLightBackground:k,path:P}=u[e];return s.jsxs(b,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[s.jsx(M,{cx:"12",cy:"12",fill:_,r:"12"}),s.jsx(W,{d:P,fill:t.text[k?"default":"inverse"]})]})};try{d.displayName="WasteFractionIcon",d.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var G=(e=>(e.designSystem="designSystem",e.pollingStation="pollingStation",e.system="system",e.wasteGuide="wasteGuide",e))(G||{});const X={pollingStation:q,wasteGuide:C,system:V,designSystem:F},o=({color:e,category:a})=>s.jsx(E,{gutter:"md",wrap:!0,children:Object.keys(X[a]).map(t=>s.jsx(A,{borderColor:"default",borderStyle:"solid",inset:"sm",children:s.jsxs(Y,{gutter:"sm",halign:"center",children:[s.jsx(H,{testID:"testIdPhrase",children:t}),a!=="wasteGuide"&&s.jsx(L,{color:e,name:t,size:"lg",testID:"testIdIcon"}),a==="wasteGuide"&&s.jsx(d,{fractionCode:t,size:"xl"})]})},t))}),K={component:o,argTypes:{color:{options:Object.keys(B.text),control:{type:"select"}},category:{options:Object.keys(G),control:"select"}}},n={render:o,args:{color:"default",category:"designSystem"}},c={render:o,args:{color:"default",category:"pollingStation"}},l={render:o,args:{color:"default",category:"wasteGuide"}},i={render:o,args:{color:"default",category:"system"}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,I,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.pollingStation
  }
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,j,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const N=["DesignSystemIcons","PollingStationIcons","WasteGuideIcons","SystemIcons"];export{n as DesignSystemIcons,c as PollingStationIcons,i as SystemIcons,l as WasteGuideIcons,N as __namedExportsOrder,K as default};

import{ak as b,j as e,V as W,v as B,al as A,am as q,an as L}from"./iframe-DJ5sS8N0.js";import{B as Y}from"./Box-BTH90GwK.js";import{C as m}from"./Column-C25xY6RH.js";import{R as y}from"./Row-CHLG1-du.js";import{P as u}from"./Phrase-CAxi89yN.js";import{D as H,a as J,S as K,I,b as Q}from"./Icon-BZznJ0GX.js";import{S as U,C as X,P as Z}from"./index-bSx5pab0.js";import{u as $}from"./useDeviceContext-CNlgJSKl.js";import{a as N}from"./useThemable-CRY3Ycpw.js";import"./preload-helper-Dp1pzeXC.js";import"./layoutStyles-3KdAUtvM.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./AccessibleText-CxQTMngo.js";const x=b,p=({fractionCode:s,size:o="md"})=>{var f;const{color:t}=N(),{fontScale:g}=$(),r=A.waste.fractionIcon[o]*g;if(!((f=x[s])!=null&&f.default))return e.jsx(W,{style:{height:r,width:r}});const{color:M,hasLightBackground:O,path:V}=x[s][B.default];return e.jsxs(U,{fillRule:"evenodd",height:r,viewBox:"0 0 24 24",width:r,children:[e.jsx(X,{cx:"12",cy:"12",fill:M,r:"12"}),e.jsx(Z,{d:V,fill:t.text[O?"default":"inverse"]})]})};try{p.displayName="WasteFractionIcon",p.__docgenInfo={description:"",displayName:"WasteFractionIcon",props:{fractionCode:{defaultValue:null,description:"",name:"fractionCode",required:!0,type:{name:"enum",value:[{value:'"GA"'},{value:'"GFT"'},{value:'"Glas"'},{value:'"Papier"'},{value:'"Plastic"'},{value:'"Rest"'},{value:'"Textiel"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xl"'}]}}}}}catch{}var E=(s=>(s.deprecated="deprecated",s.designSystem="designSystem",s.elections="elections",s.system="system",s.wasteGuide="wasteGuide",s))(E||{});const ee={elections:q,wasteGuide:b,system:K,designSystem:J,deprecated:H},a=({color:s,category:o})=>e.jsx(y,{gutter:"md",wrap:!0,children:Object.keys(ee[o]).map(t=>{const r="filled"in Q[t];return e.jsx(Y,{borderColor:"default",borderStyle:"solid",inset:"sm",children:e.jsxs(m,{gutter:"sm",halign:"center",children:[e.jsx(u,{testID:"testIdPhrase",children:t}),o!=="wasteGuide"&&e.jsxs(y,{gutter:"sm",valign:"end",children:[e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(I,{color:s,name:t,size:"lg",testID:"testIdIcon"}),!!r&&e.jsx(u,{variant:"extraSmall",children:"Default"})]}),!!r&&e.jsxs(m,{flex:1,halign:"center",children:[e.jsx(I,{color:s,isFilled:!0,name:t,size:"lg",testID:"testIdIcon"}),e.jsx(u,{textAlign:"center",variant:"extraSmall",children:"Filled"})]})]}),o==="wasteGuide"&&e.jsx(p,{fractionCode:t,size:"xl"})]})},t)})}),fe={component:a,argTypes:{color:{options:Object.keys(L.text),control:{type:"select"}},category:{options:Object.keys(E),control:"select"}}},n={render:a,args:{color:"default",category:"designSystem"}},c={render:a,args:{color:"default",category:"elections"}},l={render:a,args:{color:"default",category:"wasteGuide"}},i={render:a,args:{color:"default",category:"system"}},d={render:a,args:{color:"default",category:"deprecated"}};var S,h,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.designSystem
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,C,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.elections
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,D,G;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.wasteGuide
  }
}`,...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var _,k,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.system
  }
}`,...(P=(k=i.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var z,F,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: MultipleIconsTemplate,
  args: {
    color: 'default',
    category: IconCategory.deprecated
  }
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const ye=["DesignSystemIcons","ElectionsIcons","WasteGuideIcons","SystemIcons","DeprecatedIcons"];export{d as DeprecatedIcons,n as DesignSystemIcons,c as ElectionsIcons,i as SystemIcons,l as WasteGuideIcons,ye as __namedExportsOrder,fe as default};

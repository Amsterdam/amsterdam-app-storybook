import{j as o}from"./jsx-runtime-Bxcv0yjW.js";import{r as d}from"./index-mfbfsM12.js";import{u as g}from"./useThemable-Ii5MA1D0.js";import{V as n}from"./index-BP1Ij_Cs.js";import{s as h}from"./index-kbHxBZ_W.js";import{S as f}from"./household-waste-to-container-gxPFJly2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DFkxGuuM.js";import"./index-8JwjhRSi.js";import"./base-color-B2rPH-Aj.js";import"./TextAncestorContext-Dg3XKfar.js";const i=({aspectRatio:e="wide",height:t,children:a,...p})=>{const u=d.useMemo(()=>y({aspectRatio:e,height:t}),[e,t]),s=g(u);return o.jsx(n,{accessibilityLanguage:"nl-NL",...p,style:s.figure,children:o.jsx(n,{style:s.content,children:a})})},y=({aspectRatio:e,height:t})=>({media:a})=>h.create({figure:{flexDirection:"row",justifyContent:"center",overflow:"hidden"},content:{maxWidth:"100%",minHeight:t,aspectRatio:a.aspectRatio[e]}});try{i.displayName="Figure",i.__docgenInfo={description:`Horizontally centers media content, e.g. an image or video.
Applies the aspect ratio and height to the content.`,displayName:"Figure",props:{aspectRatio:{defaultValue:{value:"wide"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"extraWide"'},{value:'"narrow"'},{value:'"square"'},{value:'"wide"'},{value:'"tight"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const q={component:i},r={args:{aspectRatio:"wide",children:o.jsx(f,{}),height:256}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    aspectRatio: 'wide',
    children: <HouseholdWasteToContainerImage />,
    height: 256
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,q as default};
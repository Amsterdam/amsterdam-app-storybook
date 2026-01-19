import{r as m,S as g,j as o,V as n}from"./iframe-CahwAtZq.js";import{u as h}from"./useThemable-XFlpDfhe.js";import{H as f}from"./household-waste-to-container-DeFqSdiS.js";import"./preload-helper-Dp1pzeXC.js";const s=({aspectRatio:e="wide",height:t,children:r,...d})=>{const p=m.useMemo(()=>y({aspectRatio:e,height:t}),[e,t]),i=h(p);return o.jsx(n,{accessibilityLanguage:"nl-NL",...d,style:i.figure,children:o.jsx(n,{style:i.content,children:r})})},y=({aspectRatio:e,height:t})=>({media:r})=>g.create({figure:{flexDirection:"row",justifyContent:"center",overflow:"hidden"},content:{maxWidth:"100%",minHeight:t,aspectRatio:r.aspectRatio[e]}});try{s.displayName="Figure",s.__docgenInfo={description:`Horizontally centers media content, e.g. an image or video.
Applies the aspect ratio and height to the content.`,displayName:"Figure",props:{aspectRatio:{defaultValue:{value:"wide"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"extraWide"'},{value:'"narrow"'},{value:'"square"'},{value:'"wide"'},{value:'"tight"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const j={component:s},a={args:{aspectRatio:"wide",children:o.jsx(f,{}),height:256}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    aspectRatio: 'wide',
    children: <HouseholdWasteToContainerImage />,
    height: 256
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,j as default};

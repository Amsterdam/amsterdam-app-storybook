import{r as m,S as g,k as h,j as s,V as i}from"./iframe-3NcVqdwT.js";import{H as f}from"./household-waste-to-container-DeFqSdiS.js";import"./preload-helper-Dp1pzeXC.js";const o=({aspectRatio:e="wide",height:t,children:r,...u})=>{const p=m.useMemo(()=>y({aspectRatio:e,height:t}),[e,t]),n=h(p);return s.jsx(i,{accessibilityLanguage:"nl-NL",...u,style:n.figure,children:s.jsx(i,{style:n.content,children:r})})},y=({aspectRatio:e,height:t})=>({media:r})=>g.create({figure:{flexDirection:"row",justifyContent:"center",overflow:"hidden"},content:{maxWidth:"100%",minHeight:t,aspectRatio:r.aspectRatio[e]}});try{o.displayName="Figure",o.__docgenInfo={description:`Horizontally centers media content, e.g. an image or video.
Applies the aspect ratio and height to the content.`,displayName:"Figure",props:{aspectRatio:{defaultValue:{value:"wide"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"square"'},{value:'"extraWide"'},{value:'"narrow"'},{value:'"wide"'},{value:'"tight"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const w={component:o},a={args:{aspectRatio:"wide",children:s.jsx(f,{}),height:256}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    aspectRatio: 'wide',
    children: <HouseholdWasteToContainerImage />,
    height: 256
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,w as default};

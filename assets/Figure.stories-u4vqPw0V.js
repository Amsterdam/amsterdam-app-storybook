import{r as u,j as o,V as n,S as d}from"./iframe-SbNAAcWE.js";import{u as p}from"./useThemable-BPA16S_5.js";import{S as m}from"./household-waste-to-container-B3B4Naf6.js";import"./preload-helper-Zf8nSx-t.js";const s=({aspectRatio:e="wide",height:t,children:r,...c})=>{const l=u.useMemo(()=>g({aspectRatio:e,height:t}),[e,t]),i=p(l);return o.jsx(n,{accessibilityLanguage:"nl-NL",...c,style:i.figure,children:o.jsx(n,{style:i.content,children:r})})},g=({aspectRatio:e,height:t})=>({media:r})=>d.create({figure:{flexDirection:"row",justifyContent:"center",overflow:"hidden"},content:{maxWidth:"100%",minHeight:t,aspectRatio:r.aspectRatio[e]}});try{s.displayName="Figure",s.__docgenInfo={description:`Horizontally centers media content, e.g. an image or video.
Applies the aspect ratio and height to the content.`,displayName:"Figure",props:{aspectRatio:{defaultValue:{value:"wide"},description:"",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"extraWide"'},{value:'"narrow"'},{value:'"square"'},{value:'"wide"'},{value:'"tight"'},{value:'"portrait"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}const x={component:s},a={args:{aspectRatio:"wide",children:o.jsx(m,{}),height:256}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: 'wide',
    children: <HouseholdWasteToContainerImage />,
    height: 256
  }
}`,...a.parameters?.docs?.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,x as default};

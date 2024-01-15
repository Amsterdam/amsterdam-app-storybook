import{e as l,j as r,S as u}from"./useThemable-f30bc085.js";import{O as d}from"./types-e7c584cc.js";import{V as m}from"./index-c2b660c2.js";import{P as h}from"./Phrase-6a808010.js";import{C as v}from"./Canvas-1020ab0a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-ccfb1f0c.js";const s=({aspectRatio:e,children:o,orientation:t="landscape"})=>{const i=l(g(e,t));return r(m,{style:i.view,children:o})},g=(e,o)=>({media:t})=>{const i=o===d.portrait?1/t.aspectRatio[e]:t.aspectRatio[e];return u.create({view:{aspectRatio:i}})};try{s.displayName="AspectRatio",s.__docgenInfo={description:"",displayName:"AspectRatio",props:{aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!0,type:{name:"enum",value:[{value:'"extraWide"'},{value:'"narrow"'},{value:'"square"'},{value:'"wide"'},{value:'"tight"'}]}},orientation:{defaultValue:{value:"landscape"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"landscape"'},{value:'"portrait"'}]}}}}}catch{}const x={component:s},a=e=>r(s,{...e,children:r(v,{highlight:!0,children:r(h,{children:"Ik heb een bepaalde beeldverhouding."})})});a.args={aspectRatio:"wide",orientation:"landscape"};var n,p,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`args => <AspectRatio {...args}>
    <Canvas highlight>
      <Phrase>Ik heb een bepaalde beeldverhouding.</Phrase>
    </Canvas>
  </AspectRatio>`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,x as default};
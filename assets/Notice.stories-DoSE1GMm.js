import{j as c,V as l,s as p,n as e}from"./iframe-GvOD_e2l.js";import{B as d}from"./Box-FWNOJJJz.js";import{P as u}from"./Phrase-BwfxGmG6.js";import{u as g}from"./useThemable-5y_V7TtD.js";import"./preload-helper-Zf8nSx-t.js";import"./layoutStyles-g1aalkb6.js";import"./AccessibleText-XS7xYi9X.js";const m=({text:r,variant:o})=>{const i=g(v(o));return c.jsx(l,{style:i.container,testID:"Notice",children:c.jsx(d,{insetLeft:"smd",children:c.jsx(u,{variant:"small",children:r})})})},v=r=>({color:o,border:i})=>p.create({container:{borderColor:o.alert[r].border,borderStyle:"solid",borderLeftWidth:i.width.xl}});try{m.displayName="Notice",m.__docgenInfo={description:"",displayName:"Notice",filePath:"/Users/runner/work/1/s/src/components/ui/feedback/Notice.tsx",methods:[],props:{text:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/Notice.tsx",name:"TypeLiteral"}],description:"",name:"text",required:!0,tags:{},type:{name:"string"}},variant:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/feedback/Notice.tsx",name:"TypeLiteral"}],description:"",name:"variant",required:!0,tags:{},type:{name:"enum",raw:'"warning" | "information" | "negative" | "positive"',value:[{value:'"warning"'},{value:'"information"'},{value:'"negative"'},{value:'"positive"'}]}}},tags:{}}}catch{}const V={component:m,argTypes:{variant:{options:Object.values(e),control:{type:"radio"}}},args:{text:"Dit is een melding."}},a={args:{variant:e.information}},t={args:{variant:e.warning}},s={args:{variant:e.positive}},n={args:{variant:e.negative}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: AlertVariant.information
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: AlertVariant.warning
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: AlertVariant.positive
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: AlertVariant.negative
  }
}`,...n.parameters?.docs?.source}}};const w=["Information","Warning","Positive","Negative"];export{a as Information,n as Negative,s as Positive,t as Warning,w as __namedExportsOrder,V as default};

import{u as k,j as e,a as o,S as y}from"./useThemable-7e23fae8.js";import{P as w}from"./Pressable-b9e2f02b.js";import{B as T}from"./Box-bc2e679d.js";import{C as b}from"./Column-fb14c007.js";import{R as s}from"./Row-06ac4eed.js";import{I as c}from"./Icon-f8c35cc5.js";import{P as x}from"./Paragraph-ff57c0fe.js";import{T as _}from"./Title-80e1adb4.js";import{a as N}from"./accessibleText-86e64630.js";import{V}from"./index-ea25b3de.js";import"./index-e67e0a49.js";import"./_commonjsHelpers-de833af9.js";import"./index-a31edbaa.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./layoutStyles-bc05e64d.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-884c992e.js";import"./index-9d475cdf.js";import"./Animated-00b5d3a8.js";import"./index-fff9359c.js";import"./invariant-ea487af3.js";import"./index-c89dbec3.js";import"./index-546e8b88.js";import"./EventEmitter-2b0932c2.js";import"./useDeviceContext-eef4607b.js";import"./index-cffa851f.js";import"./index-880a3f2e.js";import"./types-e7c584cc.js";import"./useTheme-4260c7c0.js";const n=({isError:a=!1,iconName:d,onPress:h,text:l,title:i,titleIconName:u,testID:r="",...f})=>{const g=k(q);return e(w,{accessibilityLabel:N(i,typeof l=="string"?l:""),grow:!0,onPress:h,testID:r,...f,children:e(T,{insetHorizontal:"md",insetVertical:"sm",children:o(s,{gutter:"md",children:[e(V,{style:g.height,children:e(c,{color:"link",name:d,size:"xl"})}),o(b,{align:"center",grow:!0,children:[o(s,{gutter:"sm",valign:"center",children:[e(_,{color:"link",level:"h5",testID:`${r}Title`,text:i}),!!u&&e(c,{color:"link",name:u})]}),typeof l=="string"?e(x,{color:a?"warning":void 0,testID:`${r}Text`,variant:"small",children:l}):l]})]})})})},q=({text:a})=>y.create({height:{justifyContent:"center",height:a.lineHeight.h5+a.lineHeight.small}});try{n.displayName="TopTaskButton",n.__docgenInfo={description:"",displayName:"TopTaskButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleIconName:{defaultValue:null,description:"",name:"titleIconName",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}}}}}catch{}const re={component:n,argTypes:{onPress:{action:"onPress"}}},t={args:{iconName:"email",text:"Reactie binnen 1 werkdag",title:"Contactformulier"}};var v,m,p;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconName: 'email',
    text: 'Reactie binnen 1 werkdag',
    title: 'Contactformulier'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const oe=["Default"];export{t as Default,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=TopTaskButton.stories-84bc2098.js.map

import{e as y,j as e,a as o,S as w}from"./useThemable-0c29db81.js";import{P as T}from"./Pressable-8b21e454.js";import{B as b}from"./Box-71932b3f.js";import{C as x}from"./Column-1c934746.js";import{R as s}from"./Row-7183adb0.js";import{I as c}from"./Icon-8cbe76e1.js";import{P as _}from"./Paragraph-546fc2aa.js";import{T as N}from"./Title-dd14283b.js";import{a as V}from"./accessibleText-50b2b39a.js";import{V as q}from"./index-75ce51c7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-ee60ff1c.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./layoutStyles-f7c49c74.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-6c192943.js";import"./index-9d475cdf.js";import"./Animated-3046c943.js";import"./invariant-7bb126f5.js";import"./index-d96d58dd.js";import"./index-0fb53e87.js";import"./index-5b61bf2d.js";import"./index-ec5a4acc.js";import"./types-e7c584cc.js";import"./useDeviceContext-e004f4a0.js";import"./index-1597b195.js";import"./useTheme-4e1d74b9.js";const n=({isError:a=!1,iconName:d,onPress:h,text:l,title:i,titleIconName:u,testID:r="",accessibilityRole:g="button",...f})=>{const k=y(B);return e(T,{accessibilityLabel:V(i,typeof l=="string"?l:""),accessibilityLanguage:"nl-NL",accessibilityRole:g,grow:!0,onPress:h,testID:r,...f,children:e(b,{insetHorizontal:"md",insetVertical:"sm",children:o(s,{gutter:"md",children:[e(q,{style:k.height,children:e(c,{color:"link",name:d,size:"xl"})}),o(x,{align:"center",grow:!0,children:[o(s,{gutter:"sm",valign:"center",children:[e(N,{color:"link",level:"h5",testID:`${r}Title`,text:i}),!!u&&e(c,{color:"link",name:u})]}),typeof l=="string"?e(_,{color:a?"warning":void 0,testID:`${r}Text`,variant:"small",children:l}):l]})]})})})},B=({text:a})=>w.create({height:{justifyContent:"center",height:a.lineHeight.h5+a.lineHeight.small}});try{n.displayName="TopTaskButton",n.__docgenInfo={description:"",displayName:"TopTaskButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleIconName:{defaultValue:null,description:"",name:"titleIconName",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}}}}}catch{}const oe={component:n,argTypes:{onPress:{action:"onPress"}}},t={args:{iconName:"email",text:"Reactie binnen 1 werkdag",title:"Contactformulier"}};var v,m,p;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconName: 'email',
    text: 'Reactie binnen 1 werkdag',
    title: 'Contactformulier'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ne=["Default"];export{t as Default,ne as __namedExportsOrder,oe as default};

import{j as e,a as n,S as x}from"./index-1401012c.js";import{P as k}from"./Pressable-5e42a6d7.js";import{B as w}from"./Box-35580222.js";import{C as b}from"./Column-2e1417fa.js";import{R as s}from"./Row-99740ecb.js";import{I as v}from"./Icon-3c24a75f.js";import{P as V}from"./Paragraph-0385f2c7.js";import{T}from"./Title-3b7bf6fa.js";import{a as q}from"./useThemable-27d8c265.js";import{a as N}from"./accessibleText-50b2b39a.js";import{V as _}from"./index-8aec880e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./slugs-028d654e.js";import"./index-3d7f4c33.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-d983c834.js";import"./base-color-66d0fb4c.js";import"./development-b6e620df.js";import"./useSentry-0d54ba21.js";import"./logging-9a33af2c.js";import"./callBound-55a1829f.js";import"./index-393588f7.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./layoutStyles-ee44dbe0.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-3c47de32.js";import"./index-240c6d7a.js";import"./index-8fe1e389.js";import"./index-83a31e41.js";import"./types-e7c584cc.js";import"./useDeviceContext-904ab82a.js";import"./index-5aae214f.js";import"./useTheme-7821b5d5.js";import"./index-d3ea75b5.js";const o=({isError:a=!1,iconName:d,onPress:g,text:l,title:u,titleIconName:i,testID:r="",accessibilityRole:f="button",...h})=>{const y=q(P);return e(k,{accessibilityLabel:N(u,typeof l=="string"?l:""),accessibilityLanguage:"nl-NL",accessibilityRole:f,grow:!0,onPress:g,testID:r,...h,children:e(w,{insetHorizontal:"md",insetVertical:"sm",children:n(s,{gutter:"md",children:[e(_,{style:y.height,children:e(v,{color:"link",name:d,size:"xl"})}),n(b,{align:"center",grow:!0,children:[n(s,{gutter:"sm",valign:"center",children:[e(T,{color:"link",level:"h5",testID:`${r}Title`,text:u}),!!i&&e(v,{color:"link",name:i})]}),typeof l=="string"?e(V,{color:a?"warning":void 0,testID:`${r}Text`,variant:"small",children:l}):l]})]})})})},P=({text:a})=>x.create({height:{justifyContent:"center",height:a.lineHeight.h5+a.lineHeight.small}});try{o.displayName="TopTaskButton",o.__docgenInfo={description:"",displayName:"TopTaskButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleIconName:{defaultValue:null,description:"",name:"titleIconName",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"buttonPress"'},{value:'"toForeground"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<PiwikDimension | PiwikSessionDimension, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},grow:{defaultValue:null,description:"Whether the button grows to fill its parent container.",name:"grow",required:!1,type:{name:"boolean"}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"negative"'},{value:'"transparent"'}]}}}}}catch{}const de={component:o,argTypes:{onPress:{action:"onPress"}}},t={args:{iconName:"email",text:"Reactie binnen 1 werkdag",title:"Contactformulier"}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    iconName: 'email',
    text: 'Reactie binnen 1 werkdag',
    title: 'Contactformulier'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const ge=["Default"];export{t as Default,ge as __namedExportsOrder,de as default};

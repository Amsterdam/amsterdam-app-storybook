import{j as e,S as y}from"./index-9d7eb5a2.js";import{P as x}from"./Pressable-03122dd9.js";import{C as k}from"./Column-babcd871.js";import{R as o}from"./Row-1a77dc83.js";import{I as s}from"./Icon-8065761e.js";import{P as b}from"./Paragraph-be6b2cb5.js";import{T as w}from"./Title-e4ffdb8d.js";import{e as V}from"./useThemable-e2fb66d4.js";import{a as T}from"./accessibleText-a5c6b4b4.js";import{V as q}from"./index-b1a24850.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-cc865898.js";import"./usePiwikTrackCustomEventFromProps-1034ddce.js";import"./slugs-b43e7e98.js";import"./index-6f107027.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-fb7b51b4.js";import"./TextAncestorContext-3b992cff.js";import"./development-de2bc6fd.js";import"./redux-toolkit.esm-cb9067f1.js";import"./useSentry-34852e81.js";import"./index-07bd7250.js";import"./callBound-c4e9bae7.js";import"./index-5008ca59.js";import"./extends-34e645d9.js";import"./Box-eac773ca.js";import"./layoutStyles-605143e0.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Animated-4476d759.js";import"./index-72552a59.js";import"./index-87b6cec9.js";import"./index-169dd17a.js";import"./types-65ac26c5.js";import"./useDeviceContext-82bee89b.js";import"./index-3cad2065.js";import"./useTheme-c7eb6588.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";const r=({isError:a=!1,iconName:p,onPress:d,text:l,title:u,titleIconName:i,testID:t,accessibilityRole:g="button",...f})=>{const h=V(C);return e.jsx(x,{accessibilityLabel:T(u,typeof l=="string"?l:""),accessibilityLanguage:"nl-NL",accessibilityRole:g,onPress:d,testID:t,...f,insetHorizontal:"md",insetVertical:"sm",children:e.jsxs(o,{gutter:"md",children:[e.jsx(q,{style:h.height,children:e.jsx(s,{color:"link",name:p,size:"xl",testID:`${t}Icon`})}),e.jsxs(k,{align:"center",grow:1,shrink:1,children:[e.jsxs(o,{gutter:"sm",valign:"center",children:[e.jsx(w,{color:"link",level:"h5",testID:`${t}Title`,text:u}),!!i&&e.jsx(s,{color:"link",name:i,testID:`${t}TitleIcon`})]}),typeof l=="string"?e.jsx(b,{color:a?"warning":void 0,testID:`${t}Text`,variant:"small",children:l}):l]})]})})},C=({text:a})=>y.create({height:{justifyContent:"center",height:a.lineHeight.h5+a.lineHeight.small}});try{r.displayName="TopTaskButton",r.__docgenInfo={description:"",displayName:"TopTaskButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"alarm"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleIconName:{defaultValue:null,description:"",name:"titleIconName",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"alarm"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"negative"'},{value:'"transparent"'}]}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}const fe={component:r,argTypes:{onPress:{action:"onPress"}}},n={args:{iconName:"email",text:"Reactie binnen 1 werkdag",title:"Contactformulier"}};var v,c,m;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconName: 'email',
    text: 'Reactie binnen 1 werkdag',
    title: 'Contactformulier'
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const he=["Default"];export{n as Default,he as __namedExportsOrder,fe as default};

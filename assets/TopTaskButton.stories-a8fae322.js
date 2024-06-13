import{j as e,a as r,S as x}from"./index-1401012c.js";import{P as k}from"./Pressable-8c597495.js";import{C as b}from"./Column-24eaeafe.js";import{R as s}from"./Row-71e3f429.js";import{I as v}from"./Icon-a82d87b1.js";import{P as w}from"./Paragraph-05b48bd7.js";import{T as V}from"./Title-2b0d1dff.js";import{u as T}from"./useThemable-030d6c49.js";import{a as q}from"./accessibleText-50b2b39a.js";import{V as C}from"./index-e1b95cde.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-e820b014.js";import"./usePiwikTrackCustomEventFromProps-ef2fad16.js";import"./slugs-27bec231.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./development-9e7a9bcc.js";import"./redux-toolkit.esm-1f08def5.js";import"./useSentry-a6b63432.js";import"./callBound-55a1829f.js";import"./index-2e18e8c8.js";import"./extends-98964cd2.js";import"./Box-18768044.js";import"./layoutStyles-ee44dbe0.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-65ac26c5.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";import"./useTheme-ab3ca6e2.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";const u=({isError:a=!1,iconName:d,onPress:g,text:l,title:i,titleIconName:o,testID:t,accessibilityRole:f="button",...h})=>{const y=T(N);return e(k,{accessibilityLabel:q(i,typeof l=="string"?l:""),accessibilityLanguage:"nl-NL",accessibilityRole:f,onPress:g,testID:t,...h,insetHorizontal:"md",insetVertical:"sm",children:r(s,{gutter:"md",children:[e(C,{style:y.height,children:e(v,{color:"link",name:d,size:"xl",testID:`${t}Icon`})}),r(b,{align:"center",grow:1,shrink:1,children:[r(s,{gutter:"sm",valign:"center",children:[e(V,{color:"link",level:"h5",testID:`${t}Title`,text:i}),!!o&&e(v,{color:"link",name:o,testID:`${t}TitleIcon`})]}),typeof l=="string"?e(w,{color:a?"warning":void 0,testID:`${t}Text`,variant:"small",children:l}):l]})]})})},N=({text:a})=>x.create({height:{justifyContent:"center",height:a.lineHeight.h5+a.lineHeight.small}});try{u.displayName="TopTaskButton",u.__docgenInfo={description:"",displayName:"TopTaskButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"alarm"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"search"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifiDisconnect"'}]}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleIconName:{defaultValue:null,description:"",name:"titleIconName",required:!1,type:{name:"enum",value:[{value:'"alarm"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"search"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifiDisconnect"'}]}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"negative"'},{value:'"transparent"'}]}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}const fe={component:u,argTypes:{onPress:{action:"onPress"}}},n={args:{iconName:"email",text:"Reactie binnen 1 werkdag",title:"Contactformulier"}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    iconName: 'email',
    text: 'Reactie binnen 1 werkdag',
    title: 'Contactformulier'
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const he=["Default"];export{n as Default,he as __namedExportsOrder,fe as default};

import{j as e}from"./jsx-runtime-ffb262ed.js";import{P as g}from"./Pressable-71c6d59f.js";import{C as f}from"./Column-48289ca6.js";import{R as u}from"./Row-b81b677d.js";import{I as x}from"./Icon-7b29e685.js";import{P as h}from"./Paragraph-b109e756.js";import{T as y}from"./Title-8859fc08.js";import{a as b}from"./accessibleText-a5c6b4b4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-e5c6b6d6.js";import"./usePiwikTrackCustomEventFromProps-1282c0f8.js";import"./index-e8e5dbb3.js";import"./useTrackException-4a5c311f.js";import"./index-ee304789.js";import"./NativeEventEmitter-2071600e.js";import"./index-115efad7.js";import"./TextAncestorContext-c1a63433.js";import"./index-a802de3b.js";import"./development-6fd8b346.js";import"./index-b3fe80a1.js";import"./extends-4c19d496.js";import"./index-5b56d0c8.js";import"./Box-a967fb9c.js";import"./layoutStyles-b0426a14.js";import"./useThemable-f6b90327.js";import"./index-d3ea75b5.js";import"./base-color-f0c30692.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Animated-fdc153e4.js";import"./index-4f48d35c.js";import"./index-ccab62b4.js";import"./types-65ac26c5.js";import"./useDeviceContext-d0c458db.js";import"./index-e8db3c07.js";import"./useTheme-b03518ed.js";const r=({iconName:i,onPress:c,text:t,title:o,testID:a,accessibilityRole:p="button",variant:n,...d})=>e.jsx(g,{accessibilityLabel:b(o,typeof t=="string"?t:""),accessibilityLanguage:"nl-NL",accessibilityRole:p,onPress:c,testID:a,...d,insetHorizontal:"md",insetVertical:"sm",variant:"transparent",children:e.jsxs(u,{gutter:"md",children:[e.jsx(x,{color:n==="inverse"?"inverse":"link",name:i,size:"xl",testID:`${a}Icon`}),e.jsxs(f,{align:"center",grow:1,gutter:"xs",shrink:1,children:[e.jsx(u,{valign:"center",children:e.jsx(y,{color:n==="inverse"?"inverse":"link",level:"h4",testID:`${a}Title`,text:o,underline:!0})}),e.jsx(h,{color:n==="inverse"?"inverse":void 0,testID:`${a}Text`,variant:"small",children:t})]})]})});try{r.displayName="InformationButton",r.__docgenInfo={description:"",displayName:"InformationButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"alarm"'},{value:'"alert"'},{value:'"circle-check-mark"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"city-pass-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"list"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"question-mark-circle"'},{value:'"search"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}const ie={component:r,argTypes:{onPress:{action:"onPress"}}},l={args:{iconName:"email",text:"Reactie binnen 1 werkdag",title:"Contactformulier"}};var s,m,v;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    iconName: 'email',
    text: 'Reactie binnen 1 werkdag',
    title: 'Contactformulier'
  }
}`,...(v=(m=l.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const oe=["Default"];export{l as Default,oe as __namedExportsOrder,ie as default};

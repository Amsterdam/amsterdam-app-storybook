import{j as u}from"./jsx-runtime-ffb262ed.js";import{r as t}from"./index-76fb7be0.js";import{B as n}from"./Button-c23d5c8d.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-e5c6b6d6.js";import"./usePiwikTrackCustomEventFromProps-1282c0f8.js";import"./index-e8e5dbb3.js";import"./useTrackException-4a5c311f.js";import"./index-ee304789.js";import"./NativeEventEmitter-2071600e.js";import"./index-115efad7.js";import"./TextAncestorContext-c1a63433.js";import"./index-a802de3b.js";import"./development-6fd8b346.js";import"./index-b3fe80a1.js";import"./extends-4c19d496.js";import"./index-5b56d0c8.js";import"./config-55b2a55c.js";import"./Row-2be06d61.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./useThemable-0ff36c28.js";import"./index-d3ea75b5.js";import"./base-color-5d90126d.js";import"./Icon-32c935be.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Animated-fdc153e4.js";import"./index-4f48d35c.js";import"./index-ccab62b4.js";import"./types-65ac26c5.js";import"./useDeviceContext-d0c458db.js";import"./index-e8db3c07.js";import"./useTheme-1c292d66.js";const l=({followed:o,onPress:e,...r})=>{const p=t.useCallback(()=>e(!1),[e]),c=t.useCallback(()=>e(!0),[e]);return o?u.jsx(n,{iconName:"check-mark",label:"Volgend",onPress:c,variant:"primary",...r}):u.jsx(n,{iconName:"enlarge",label:"Volgen",onPress:p,variant:"secondary",...r})};try{l.displayName="FollowButton",l.__docgenInfo={description:"",displayName:"FollowButton",props:{followed:{defaultValue:null,description:"",name:"followed",required:!0,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"(followed: boolean) => void"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"list"'},{value:'"alarm"'},{value:'"circle-check-mark"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"city-pass-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"question-mark-circle"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const J={component:l,argTypes:{onPress:{action:"onPress"}}},a={args:{followed:!1}};var i,s,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    followed: false
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Q=["Default"];export{a as Default,Q as __namedExportsOrder,J as default};

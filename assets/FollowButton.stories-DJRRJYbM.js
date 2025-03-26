import{j as r}from"./jsx-runtime-BlAj40OV.js";import{r as t}from"./index-Cs7sjTYM.js";import{B as i}from"./Button-Bl3o0KSV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PressableBase-CJ8k0TZj.js";import"./usePiwikTrackCustomEventFromProps-yuG0y8Gu.js";import"./index-8JwjhRSi.js";import"./useTrackException-DEzXmbBu.js";import"./index-Mm_72FUV.js";import"./NativeEventEmitter-CLDmlHLL.js";import"./index-DU7ZIcDZ.js";import"./TextAncestorContext-aRigYKLY.js";import"./index-DaXhXLBr.js";import"./development-Cvxij4Vy.js";import"./index-CeJd0Tpi.js";import"./extends-CF3RwP-h.js";import"./index-KNTxeJap.js";import"./index-CVb019Wa.js";import"./config-BZnShabN.js";import"./Row-Bf4QSVLq.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-qheMuJU7.js";import"./index-D5xlL9g-.js";import"./base-color-B2rPH-Aj.js";import"./Icon-5-a-jXgZ.js";import"./index-B2aDqa-5.js";import"./index-Dk74W0Oi.js";import"./Animated-DHP0GX_b.js";import"./index-CJ3jvq4L.js";import"./index-BSsc9iXP.js";import"./index-H0EjEgo9.js";import"./types-CttlCamk.js";import"./useDeviceContext-BcAQQrI2.js";import"./index-BcvVjgba.js";import"./useTheme-BkXmejTd.js";import"./AccessibleText-Cj1XZqyc.js";const l=({followed:o,onPress:e,...u})=>{const c=t.useCallback(()=>e(!1),[e]),m=t.useCallback(()=>e(!0),[e]);return o?r.jsx(i,{iconName:"check-mark",label:"Volgend",onPress:m,variant:"primary",...u}):r.jsx(i,{iconName:"enlarge",label:"Volgen",onPress:c,variant:"secondary",...u})};try{l.displayName="FollowButton",l.__docgenInfo={description:"",displayName:"FollowButton",props:{followed:{defaultValue:null,description:"",name:"followed",required:!0,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"(followed: boolean) => void"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"accessCode"'},{value:'"add"'},{value:'"alarm"'},{value:'"alarmFilled"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"asterisk"'},{value:'"attachment"'},{value:'"biometrics"'},{value:'"chat"'},{value:'"circle-check-mark"'},{value:'"backspace"'},{value:'"camera"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass-pass"'},{value:'"city-pass"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"document"'},{value:'"documentCheckmark"'},{value:'"document-text"'},{value:'"download"'},{value:'"edit"'},{value:'"euroCoins"'},{value:'"email"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"faceId"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"keyboard"'},{value:'"list"'},{value:'"location"'},{value:'"lock"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"parking"'},{value:'"parkingCar"'},{value:'"parkingSession"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"picture"'},{value:'"pointer"'},{value:'"question-mark-circle"'},{value:'"search"'},{value:'"settings"'},{value:'"spinner"'},{value:'"touchId"'},{value:'"trash-bin"'},{value:'"vote"'},{value:'"wasteCard"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"parking"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-container"'},{value:'"waste-guide"'},{value:'"general"'}]}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"middle"'},{value:'"tail"'},{value:'"clip"'}]}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"secondary"'},{value:'"tertiary"'},{value:'"primary"'}]}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const X={component:l,argTypes:{onPress:{action:"onPress"}}},a={args:{followed:!1}};var n,s,v;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    followed: false
  }
}`,...(v=(s=a.parameters)==null?void 0:s.docs)==null?void 0:v.source}}};const Y=["Default"];export{a as Default,Y as __namedExportsOrder,X as default};

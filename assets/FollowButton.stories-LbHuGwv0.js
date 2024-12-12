import{j as r}from"./jsx-runtime-Bxcv0yjW.js";import{r as t}from"./index-mfbfsM12.js";import{B as n}from"./Button-D-OPulxP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PressableBase-DhkKVuqd.js";import"./usePiwikTrackCustomEventFromProps-CT_KpUEz.js";import"./index-8JwjhRSi.js";import"./useTrackException-Cm6KdDpO.js";import"./index-BowPbij1.js";import"./NativeEventEmitter-MQ3wzVGe.js";import"./index-DSI0shHu.js";import"./TextAncestorContext-Dg3XKfar.js";import"./index-kbHxBZ_W.js";import"./development-LhlsWDYu.js";import"./index-CIcog7m4.js";import"./extends-CF3RwP-h.js";import"./index-BP1Ij_Cs.js";import"./config-BZnShabN.js";import"./Row-BzzZU8Gs.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-BJuWKK4_.js";import"./index-DFkxGuuM.js";import"./base-color-B2rPH-Aj.js";import"./Icon-CxD1bU5p.js";import"./index-BtN4QjYR.js";import"./index-Dk74W0Oi.js";import"./Animated-CFNSbqHF.js";import"./index-2SHDvLR_.js";import"./index-CAyeAlm6.js";import"./types-BJ_48vsK.js";import"./useDeviceContext-Cm8FgCCV.js";import"./index-BXDkY5MO.js";import"./useTheme-puFF76Qf.js";const l=({followed:o,onPress:e,...u})=>{const v=t.useCallback(()=>e(!1),[e]),m=t.useCallback(()=>e(!0),[e]);return o?r.jsx(n,{iconName:"check-mark",label:"Volgend",onPress:m,variant:"primary",...u}):r.jsx(n,{iconName:"enlarge",label:"Volgen",onPress:v,variant:"secondary",...u})};try{l.displayName="FollowButton",l.__docgenInfo={description:"",displayName:"FollowButton",props:{followed:{defaultValue:null,description:"",name:"followed",required:!0,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"(followed: boolean) => void"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"accessCode"'},{value:'"alarm"'},{value:'"alarmFilled"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"asterisk"'},{value:'"attachment"'},{value:'"chat"'},{value:'"circle-check-mark"'},{value:'"backspace"'},{value:'"camera"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass-pass"'},{value:'"city-pass"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"document"'},{value:'"document-text"'},{value:'"download"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"keyboard"'},{value:'"list"'},{value:'"location"'},{value:'"lock"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"picture"'},{value:'"pointer"'},{value:'"question-mark-circle"'},{value:'"search"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const J={component:l,argTypes:{onPress:{action:"onPress"}}},a={args:{followed:!1}};var i,s,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    followed: false
  }
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const Q=["Default"];export{a as Default,Q as __namedExportsOrder,J as default};

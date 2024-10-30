import{j as r}from"./jsx-runtime-Bxcv0yjW.js";import{r as t}from"./index-mfbfsM12.js";import{B as n}from"./Button-D4RxOZBI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PressableBase-nXWzzlHT.js";import"./usePiwikTrackCustomEventFromProps-Dir4v0ej.js";import"./index-8JwjhRSi.js";import"./useTrackException-JS60vX2v.js";import"./index-Bcpfmd17.js";import"./NativeEventEmitter-Cj1pQcwn.js";import"./index-DOpK3Ow6.js";import"./TextAncestorContext-Cvz4PlE2.js";import"./index-CEE--Juu.js";import"./development-DYCnWZjk.js";import"./index-ZduKGa6_.js";import"./extends-CF3RwP-h.js";import"./index-BDsvWohO.js";import"./config-BZnShabN.js";import"./Row-D_JhWe0P.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-CVtFdQkx.js";import"./index-BMk6Tmu2.js";import"./base-color-B2rPH-Aj.js";import"./Icon-Sfx_lwPy.js";import"./index-DYSHDArR.js";import"./index-Dk74W0Oi.js";import"./Animated-C23eizOh.js";import"./index-DcZXOGQR.js";import"./index-BypDj3rK.js";import"./types-BJ_48vsK.js";import"./useDeviceContext-DGl4H2w7.js";import"./index-C3bJM-gU.js";import"./useTheme-D4XwYBat.js";const l=({followed:o,onPress:e,...u})=>{const c=t.useCallback(()=>e(!1),[e]),v=t.useCallback(()=>e(!0),[e]);return o?r.jsx(n,{iconName:"check-mark",label:"Volgend",onPress:v,variant:"primary",...u}):r.jsx(n,{iconName:"enlarge",label:"Volgen",onPress:c,variant:"secondary",...u})};try{l.displayName="FollowButton",l.__docgenInfo={description:"",displayName:"FollowButton",props:{followed:{defaultValue:null,description:"",name:"followed",required:!0,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"(followed: boolean) => void"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"list"'},{value:'"document"'},{value:'"alarm"'},{value:'"attachment"'},{value:'"chat"'},{value:'"circle-check-mark"'},{value:'"announcement"'},{value:'"api"'},{value:'"camera"'},{value:'"picture"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass-pass"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"keyboard"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"question-mark-circle"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const J={component:l,argTypes:{onPress:{action:"onPress"}}},a={args:{followed:!1}};var i,s,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    followed: false
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Q=["Default"];export{a as Default,Q as __namedExportsOrder,J as default};

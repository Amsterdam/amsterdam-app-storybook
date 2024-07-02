import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as n}from"./index-76fb7be0.js";import{B as u}from"./Button-89ccf35b.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-fc5e1e47.js";import"./usePiwikTrackCustomEventFromProps-2e4e1462.js";import"./version-ba873cb0.js";import"./index-a464b0de.js";import"./NativeEventEmitter-723dff5d.js";import"./index-ac976766.js";import"./TextAncestorContext-dcad3dbc.js";import"./index-f819f4d6.js";import"./development-f8096310.js";import"./index-e8e5dbb3.js";import"./useTrackException-84f7968f.js";import"./index-3ba17d29.js";import"./callBound-0c193d85.js";import"./___vite-browser-external_commonjs-proxy-698e55bb.js";import"./index-9ddf3bb5.js";import"./extends-4c19d496.js";import"./index-2bdd647f.js";import"./config-55b2a55c.js";import"./Row-7c1d2ebc.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./useThemable-dabb7424.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./Icon-a62379d1.js";import"./index-953b234c.js";import"./index-9d475cdf.js";import"./Animated-7a7ece98.js";import"./index-26b34527.js";import"./index-d1c3279d.js";import"./types-65ac26c5.js";import"./useDeviceContext-91140f6c.js";import"./index-fbb44dd0.js";import"./useTheme-7da6666b.js";const l=({followed:o,onPress:e,...r})=>{const p=n.useCallback(()=>e(!1),[e]),d=n.useCallback(()=>e(!0),[e]);return o?t.jsx(u,{iconName:"checkmark",label:"Volgend",onPress:d,variant:"primary",...r}):t.jsx(u,{iconName:"enlarge",label:"Volgen",onPress:p,variant:"secondary",...r})};try{l.displayName="FollowButton",l.__docgenInfo={description:"",displayName:"FollowButton",props:{followed:{defaultValue:null,description:"",name:"followed",required:!0,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"(followed: boolean) => void"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"alarm"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const Y={component:l,argTypes:{onPress:{action:"onPress"}}},a={args:{followed:!1}};var i,s,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    followed: false
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Z=["Default"];export{a as Default,Z as __namedExportsOrder,Y as default};
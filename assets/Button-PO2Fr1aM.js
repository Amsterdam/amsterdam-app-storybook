import{j as m}from"./jsx-runtime-Bxcv0yjW.js";import{r as y}from"./index-mfbfsM12.js";import{P as C}from"./PressableBase-DhkKVuqd.js";import{c as V}from"./config-BZnShabN.js";import{R as w}from"./Row-GTWWNNMU.js";import{I as q}from"./Icon-PURHt9x8.js";import{u as x}from"./useThemable-B5VksNAF.js";import{T as I}from"./index-CAyeAlm6.js";import{s as L}from"./index-kbHxBZ_W.js";const p="primary",b=({ellipsizeMode:l,iconName:e,isLoading:a,label:n,numberOfLines:o,small:r,testID:i,variant:c=p,...t})=>{const[g,s]=y.useState(!1),d=x(j({small:r,variant:c},g)),{onPressIn:u,onPressOut:v}=t,h=y.useCallback(f=>{s(!0),u==null||u(f)},[u]),k=y.useCallback(f=>{s(!1),v==null||v(f)},[v]);return m.jsx(C,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",onPressIn:h,onPressOut:k,style:d.button,testID:i,...t,children:m.jsxs(w,{gutter:"sm",valign:"center",children:[!!e&&m.jsx(q,{color:c==="primary"?"inverse":"link",name:a?"spinner":e,size:"lg",testID:`${i}Icon`}),!!n&&m.jsx(I,{ellipsizeMode:l,numberOfLines:o,style:d.label,testID:`${i}Label`,children:n})]})})},S=(l,e,a=p)=>l.pressable[a][e?"pressed":"default"].border,N=(l,e,a=p)=>l.pressable[a][e?"pressed":"default"].label,_=(l,e,a=p)=>l.pressable[a][e?"pressed":"default"].background,j=({small:l,variant:e},a)=>({border:n,color:o,text:r,size:i})=>{const c=V.buttonHeight,t=n.width[e==="secondary"&&a?"lg":"md"],g=r.fontSize[l?"small":"body"],s=r.lineHeight[l?"small":"body"],d=i.spacing.md+2+n.width.md-t,u=(c-s-2*t)/2;return L.create({button:{flexDirection:"row",justifyContent:"center",flexShrink:1,paddingHorizontal:d,paddingVertical:u,backgroundColor:_(o,a,e),borderColor:S(o,a,e),borderStyle:"solid",borderWidth:t},label:{flexShrink:1,color:N(o,a,e),fontFamily:r.fontFamily.regular,fontSize:g,lineHeight:s}})};try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"middle"'},{value:'"tail"'},{value:'"clip"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"list"'},{value:'"document"'},{value:'"email"'},{value:'"accessCode"'},{value:'"alarm"'},{value:'"alarmFilled"'},{value:'"announcement"'},{value:'"api"'},{value:'"asterisk"'},{value:'"attachment"'},{value:'"biometrics"'},{value:'"chat"'},{value:'"circle-check-mark"'},{value:'"backspace"'},{value:'"camera"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass-pass"'},{value:'"city-pass"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"document-text"'},{value:'"download"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"faceId"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"keyboard"'},{value:'"location"'},{value:'"lock"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"picture"'},{value:'"pointer"'},{value:'"question-mark-circle"'},{value:'"settings"'},{value:'"spinner"'},{value:'"touchId"'},{value:'"trash-bin"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"secondary"'}]}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}export{b as B};
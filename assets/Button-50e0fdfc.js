import{j as p,S as k}from"./index-9d7eb5a2.js";import{r as f}from"./index-76fb7be0.js";import{P as C}from"./PressableBase-2680f321.js";import{c as w}from"./config-55b2a55c.js";import{R as V}from"./Row-00cddd21.js";import{I as q}from"./Icon-3ee257ff.js";import{c as x}from"./useThemable-a57962df.js";import{T as S}from"./index-169dd17a.js";const y=({ellipsizeMode:e,iconName:a,isLoading:l,label:t,numberOfLines:u,small:i,testID:o,variant:c="primary",...r})=>{const[v,s]=f.useState(!1),d=x(j({small:i,variant:c},v)),{onPressIn:n,onPressOut:m}=r,b=f.useCallback(g=>{s(!0),n==null||n(g)},[n]),h=f.useCallback(g=>{s(!1),m==null||m(g)},[m]);return p.jsx(C,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",onPressIn:b,onPressOut:h,style:d.button,testID:o,...r,children:p.jsxs(V,{gutter:"sm",valign:"center",children:[!!a&&p.jsx(q,{color:c==="primary"?"inverse":"link",name:l?"spinner":a,size:"lg",testID:`${o}Icon`}),!!t&&p.jsx(S,{ellipsizeMode:e,numberOfLines:u,style:d.label,testID:`${o}Label`,children:t})]})})},L=(e,a,l)=>{if(l==="primary")return"transparent";if(l==="secondary")return a?e.pressable.primary.highlight:e.pressable.primary.default;if(l==="tertiary")return a?e.pressable.pressed.background:"transparent"},N=(e,a,l)=>l==="primary"?e.text.inverse:a?e.pressable.primary.highlight:e.pressable.primary.default,_=(e,a,l)=>l==="primary"?a?e.pressable.primary.highlight:e.pressable.primary.default:e.box.background.white,j=({small:e,variant:a},l)=>({border:t,color:u,text:i,size:o})=>{const c=w.buttonHeight,r=t.width[a==="secondary"&&l?"lg":"md"],v=i.fontSize[e?"small":"body"],s=i.lineHeight[e?"small":"body"],d=o.spacing.md+2+t.width.md-r,n=(c-s-2*r)/2;return k.create({button:{flexDirection:"row",justifyContent:"center",flexShrink:1,paddingHorizontal:d,paddingVertical:n,backgroundColor:_(u,l,a),borderColor:L(u,l,a),borderStyle:"solid",borderWidth:r},label:{flexShrink:1,color:N(u,l,a),fontFamily:i.fontFamily.regular,fontSize:v,lineHeight:s}})};try{y.displayName="Button",y.__docgenInfo={description:"",displayName:"Button",props:{ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"alarm"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"search"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifiDisconnect"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}export{y as B};

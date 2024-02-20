import{j as p,a as h,S as k}from"./index-1401012c.js";import{r as g}from"./index-76fb7be0.js";import{P as w}from"./PressableBase-3bd6acf6.js";import{c as C}from"./config-55b2a55c.js";import{R as V}from"./Row-b2f4e37d.js";import{I as q}from"./Icon-80ccfae6.js";import{a as S}from"./useThemable-a5fed888.js";import{T as x}from"./index-e39fa516.js";const f=({ellipsizeMode:e,iconName:l,label:a,numberOfLines:s,small:i,testID:r,variant:c="primary",...d})=>{const[u,m]=g.useState(!1),o=S(L({small:i,variant:c},u)),{onPressIn:n,onPressOut:t}=d,y=g.useCallback(v=>{m(!0),n==null||n(v)},[n]),b=g.useCallback(v=>{m(!1),t==null||t(v)},[t]);return p(w,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",onPressIn:y,onPressOut:b,style:o.button,testID:r,...d,children:h(V,{gutter:"sm",valign:"center",children:[!!l&&p(q,{color:c==="primary"?"inverse":"link",name:l,size:"lg",testID:r?`${r}Icon`:void 0}),!!a&&p(x,{ellipsizeMode:e,numberOfLines:s,style:o.label,testID:r?`${r}Label`:void 0,children:a})]})})},_=(e,l,a)=>{if(a==="primary")return"transparent";if(a==="secondary")return l?e.pressable.primary.highlight:e.pressable.primary.default;if(a==="tertiary")return l?e.pressable.pressed.background:"transparent"},z=(e,l,a)=>a==="primary"?e.text.inverse:l?e.pressable.primary.highlight:e.pressable.primary.default,B=(e,l,a)=>a==="primary"?l?e.pressable.primary.highlight:e.pressable.primary.default:e.box.background.white,L=({small:e,variant:l},a)=>({border:s,color:i,text:r,size:c})=>{const d=C.buttonHeight,u=s.width[l==="secondary"&&a?"lg":"md"],m=r.fontSize[e?"small":"body"],o=r.lineHeight[e?"small":"body"],n=c.spacing.md+2+s.width.md-u,t=(d-o-2*u)/2;return k.create({button:{flexDirection:"row",justifyContent:"center",flexShrink:1,paddingHorizontal:n,paddingVertical:t,backgroundColor:B(i,a,l),borderColor:_(i,a,l),borderStyle:"solid",borderWidth:u},label:{flexShrink:1,color:z(i,a,l),fontFamily:r.fontFamily.regular,fontSize:m,lineHeight:o}})};try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"email"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"settings"'},{value:'"spinner"'},{value:'"strides"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"whatsapp"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"secondary"'}]}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"locationOrAddressSelectionChange"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<PiwikDimension | PiwikSessionDimension, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}export{f as B};
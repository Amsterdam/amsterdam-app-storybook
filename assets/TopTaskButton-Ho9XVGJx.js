import{j as e}from"./jsx-runtime-BlAj40OV.js";import{H as p}from"./HideFromAccessibility-BvFCldnk.js";import{P as g}from"./Pressable-BMkqb05C.js";import{C as h}from"./Column-C-_ysMT_.js";import{R as i}from"./Row-CGyIPceF.js";import{I as r}from"./Icon-Tv9kT_7Y.js";import{P as f}from"./Paragraph-CfF6vaPv.js";import{T as y}from"./Title-B4tdKDKK.js";import{u as k}from"./useThemable-C_j1rl9R.js";import{a as x}from"./accessibleText-gmNPjmn1.js";import{V as b}from"./index-CVb019Wa.js";import{s as w}from"./index-DaXhXLBr.js";const o=({isError:a=!1,iconName:s,onPress:v,text:l,title:n,titleIconName:t,testID:u,accessibilityRole:c="button",...d})=>{const m=k(C);return e.jsx(g,{accessibilityLabel:x(n,typeof l=="string"?l:""),accessibilityLanguage:"nl-NL",accessibilityRole:c,onPress:v,testID:u,...d,insetHorizontal:"md",insetVertical:"sm",children:e.jsxs(i,{gutter:"md",children:[e.jsx(b,{style:m.height,children:e.jsx(p,{children:e.jsx(r,{color:"link",name:s,size:"xl",testID:`${u}Icon`})})}),e.jsxs(h,{align:"center",grow:1,shrink:1,children:[e.jsxs(i,{gutter:"sm",children:[e.jsx(y,{color:"link",level:"h5",testID:`${u}Title`,text:n}),!!t&&e.jsx(r,{color:"link",name:t,testID:`${u}TitleIcon`})]}),typeof l=="string"?e.jsx(f,{color:a?"warning":void 0,testID:`${u}Text`,variant:"small",children:l}):l]})]})})},C=({text:a})=>w.create({height:{justifyContent:"center",height:a.lineHeight.h5+a.lineHeight.small}});try{o.displayName="TopTaskButton",o.__docgenInfo={description:"",displayName:"TopTaskButton",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"list"'},{value:'"document"'},{value:'"accessCode"'},{value:'"add"'},{value:'"alarm"'},{value:'"alarmFilled"'},{value:'"announcement"'},{value:'"api"'},{value:'"asterisk"'},{value:'"attachment"'},{value:'"biometrics"'},{value:'"chat"'},{value:'"circle-check-mark"'},{value:'"backspace"'},{value:'"camera"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass-pass"'},{value:'"city-pass"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"documentCheckmark"'},{value:'"document-text"'},{value:'"download"'},{value:'"edit"'},{value:'"euroCoins"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"faceId"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"keyboard"'},{value:'"location"'},{value:'"lock"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"parking"'},{value:'"parkingCar"'},{value:'"parkingSession"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"picture"'},{value:'"pointer"'},{value:'"question-mark-circle"'},{value:'"settings"'},{value:'"spinner"'},{value:'"touchId"'},{value:'"trash-bin"'},{value:'"vote"'},{value:'"wasteCard"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},titleIconName:{defaultValue:null,description:"",name:"titleIconName",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"list"'},{value:'"document"'},{value:'"accessCode"'},{value:'"add"'},{value:'"alarm"'},{value:'"alarmFilled"'},{value:'"announcement"'},{value:'"api"'},{value:'"asterisk"'},{value:'"attachment"'},{value:'"biometrics"'},{value:'"chat"'},{value:'"circle-check-mark"'},{value:'"backspace"'},{value:'"camera"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass-pass"'},{value:'"city-pass"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"copy"'},{value:'"documentCheckmark"'},{value:'"document-text"'},{value:'"download"'},{value:'"edit"'},{value:'"euroCoins"'},{value:'"enlarge"'},{value:'"error"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"faceId"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"keyboard"'},{value:'"location"'},{value:'"lock"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"parking"'},{value:'"parkingCar"'},{value:'"parkingSession"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"picture"'},{value:'"pointer"'},{value:'"question-mark-circle"'},{value:'"settings"'},{value:'"spinner"'},{value:'"touchId"'},{value:'"trash-bin"'},{value:'"vote"'},{value:'"wasteCard"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"parking"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-container"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'},{value:'"transparent"'}]}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}export{o as T};

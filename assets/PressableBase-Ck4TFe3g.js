import{j as d}from"./jsx-runtime-Bxcv0yjW.js";import{r as c}from"./index-mfbfsM12.js";import{u as m,a as n}from"./usePiwikTrackCustomEventFromProps-DZmTYO1i.js";import{M as v}from"./index-DXdWUs1q.js";const u=c.forwardRef(({children:t,onPress:a=()=>null,logAction:s=n.buttonPress,onAccessibilityAction:l,...o},r)=>{const i=m({...o,logAction:s});return d.jsx(v,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",onAccessibilityAction:e=>{l==null||l(e),i(e,{nameSuffix:e.nativeEvent.actionName,action:n.accessibilityAction})},onPress:e=>{a==null||a(e),i(e)},ref:r,...o,children:t})});try{u.displayName="PressableBase",u.__docgenInfo={description:`Used to build other interactive components, do not use on its own.
This is a drop in replacement of the React Native Pressable component.`,displayName:"PressableBase",props:{"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.buttonPress"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}export{u as P};
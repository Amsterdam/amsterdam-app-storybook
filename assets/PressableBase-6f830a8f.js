import{j as d}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{u as m}from"./usePiwikTrackCustomEventFromProps-81fd0904.js";import{b as n}from"./version-f0b2d5d4.js";import{P as p}from"./index-f5cec968.js";const r=c.forwardRef(({children:o,onPress:a=()=>null,logAction:u=n.buttonPress,onAccessibilityAction:l,...t},s)=>{const i=m({...t,logAction:u});return d.jsx(p,{accessibilityLanguage:"nl-NL",accessibilityRole:"button",onAccessibilityAction:e=>{l==null||l(e),i(e,{nameSuffix:e.nativeEvent.actionName,action:n.accessibilityAction})},onPress:e=>{a==null||a(e),i(e)},ref:s,...t,children:o})});try{r.displayName="PressableBase",r.__docgenInfo={description:`Used to build other interactive components, do not use on its own.
This is a drop in replacement of the React Native Pressable component.`,displayName:"PressableBase",props:{"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.buttonPress"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}export{r as P};

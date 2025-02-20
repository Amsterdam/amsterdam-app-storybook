import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as w,a as p}from"./index-CC-zlO6h.js";import{P as V}from"./PressableBase-Vb3vq1iu.js";import{R}from"./Row-BP-A625W.js";import{P as q}from"./Phrase-CZPL37q7.js";import{u as P}from"./useTheme-BPU9jepC.js";import{C as _}from"./Column-Dqdi48_a.js";import{u as k,b as x,P as N}from"./usePiwikTrackCustomEventFromProps-CZtzunzI.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BRs9ZavV.js";import"./index-HY1hV1Sb.js";import"./extends-CF3RwP-h.js";import"./TextAncestorContext-CgUd_yOy.js";import"./index-KNTxeJap.js";import"./index-DNzWYFc8.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-CDPjGmtb.js";import"./index-D5xlL9g-.js";import"./index-8JwjhRSi.js";import"./base-color-B2rPH-Aj.js";import"./AccessibleText-COgu9Gly.js";import"./index-CglSVHKQ.js";import"./useTrackException-BNw22381.js";import"./index-B9HBLp1U.js";import"./NativeEventEmitter-CdIviC7q.js";import"./index-C9LjRz3B.js";import"./development-B3zcR1jo.js";const A=({checked:t})=>{const{color:a}=P();return e.jsxs(w,{height:24,viewBox:"0 0 24 24",width:24,children:[e.jsx(p,{cx:12,cy:12,fill:a.control.default.background,r:11,stroke:a.control.checked.border,strokeWidth:2}),!!t&&e.jsx(p,{cx:12,cy:12,fill:a.control.checked.border,r:8})]})},s=({label:t,isSelected:a,onPress:o,testID:i,...n})=>e.jsx(V,{...n,accessibilityLanguage:"nl-NL",accessibilityRole:"radio",accessibilityState:{selected:a},onPress:o,testID:i,children:e.jsxs(R,{gutter:"sm",valign:"center",children:[e.jsx(A,{checked:a}),e.jsx(q,{testID:`${i}Phrase`,children:t})]})});try{s.displayName="Radio",s.__docgenInfo={description:"",displayName:"Radio",props:{isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"Called when a single tap gesture is detected.",name:"onPress",required:!1,type:{name:"(() => void) & ((event: GestureResponderEvent) => void)"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"parking"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-container"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const u=({options:t=[],onChange:a,testID:o,value:i,logAction:n=N.radioChange,useOptionValuesForLogging:d=!1,logDimensions:h={},...y})=>{const b=k({...y,logAction:n,logDimensions:h,onEvent:a,testID:o});return e.jsx(_,{gutter:"md",children:t.map(({label:c,value:l},C)=>{const m=`${o}${d?l.toString():C}RadioButton`;return e.jsx(s,{isSelected:i===l,label:c,"logging-label":m,logName:m,onPress:()=>b(l,d?{dimensions:{[x.newState]:l.toString()}}:{}),testID:`${o}${l.toString()}RadioButton`},c)})})};try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"RadioGroupOption<T>[]"}},useOptionValuesForLogging:{defaultValue:{value:"false"},description:"Log value to analytics service as new state when the selected value changes and as name on the button press event of the option.",name:"useOptionValuesForLogging",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.radioChange"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"parking"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-container"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:{value:"{}"},description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const se={component:u},D=[{label:"Heldhaftig",value:"valiant"},{label:"Vastberaden",value:"steadfast"},{label:"Barmhartig",value:"compassionate"}],r={args:{options:D,value:"valiant"}};var v,g,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    value: 'valiant'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ue=["Default"];export{r as Default,ue as __namedExportsOrder,se as default};

import{j as e}from"./index-9d7eb5a2.js";import{S as V,C as p}from"./index-b21a90e4.js";import{P as w}from"./PressableBase-e08e136b.js";import{R}from"./Row-1a77dc83.js";import{P as q}from"./Phrase-1c3e4d64.js";import{u as _}from"./useTheme-c7eb6588.js";import{C as P}from"./Column-babcd871.js";import{u as x}from"./usePiwikTrackCustomEventFromProps-08fd71f9.js";import{a as k,b as N}from"./version-bc6ab0e8.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./index-6f8f641c.js";import"./extends-34e645d9.js";import"./TextAncestorContext-3b992cff.js";import"./index-b1a24850.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./useThemable-e2fb66d4.js";import"./index-d3ea75b5.js";import"./redux-toolkit.esm-cb9067f1.js";import"./base-color-0322ee5e.js";import"./index-169dd17a.js";import"./development-443ddb56.js";import"./index-7ad04130.js";import"./useSentry-f8932b7a.js";import"./index-d8f1eb60.js";import"./NativeEventEmitter-d842fddb.js";import"./index-467b4a8a.js";import"./callBound-c4e9bae7.js";import"./___vite-browser-external_commonjs-proxy-698e55bb.js";const A=({checked:t})=>{const{color:a}=_();return e.jsxs(V,{height:24,viewBox:"0 0 24 24",width:24,children:[e.jsx(p,{cx:12,cy:12,fill:a.control.default.background,r:11,stroke:a.control.checked.border,strokeWidth:2}),!!t&&e.jsx(p,{cx:12,cy:12,fill:a.control.checked.border,r:8})]})},s=({label:t,isSelected:a,onPress:o,testID:r,...n})=>e.jsx(w,{...n,accessibilityLanguage:"nl-NL",accessibilityRole:"radio",accessibilityState:{selected:a},onPress:o,testID:r,children:e.jsxs(R,{gutter:"sm",valign:"center",children:[e.jsx(A,{checked:a}),e.jsx(q,{testID:`${r}Phrase`,children:t})]})});try{s.displayName="Radio",s.__docgenInfo={description:"",displayName:"Radio",props:{isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"Called when a single tap gesture is detected.",name:"onPress",required:!1,type:{name:"(() => void) & ((event: GestureResponderEvent) => void)"}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const u=({options:t=[],onChange:a,testID:o,value:r,logAction:n=N.radioChange,useOptionValuesForLogging:d=!1,logDimensions:h={},...y})=>{const b=x({...y,logAction:n,logDimensions:h,onEvent:a,testID:o});return e.jsx(P,{gutter:"md",children:t.map(({label:c,value:l},C)=>{const m=`${o}${d?l.toString():C}RadioButton`;return e.jsx(s,{isSelected:r===l,label:c,logName:m,onPress:()=>b(l,d?{dimensions:{[k.newState]:l.toString()}}:{}),"sentry-label":m,testID:`${o}${l.toString()}RadioButton`},c)})})};try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"RadioGroupOption<T>[]"}},useOptionValuesForLogging:{defaultValue:{value:"false"},description:"Log value to analytics service as new state when the selected value changes and as name on the button press event of the option.",name:"useOptionValuesForLogging",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.radioChange"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:{value:"{}"},description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const ue={component:u},D=[{label:"Heldhaftig",value:"valiant"},{label:"Vastberaden",value:"steadfast"},{label:"Barmhartig",value:"compassionate"}],i={args:{options:D,value:"valiant"}};var v,g,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    value: 'valiant'
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const de=["Default"];export{i as Default,de as __namedExportsOrder,ue as default};
import{j as t,a as h}from"./index-1401012c.js";import{S as w,a as p}from"./index-5844c8dd.js";import{P as R}from"./PressableBase-d44394ad.js";import{R as q}from"./Row-d83f29cb.js";import{P}from"./Phrase-374be215.js";import{u as _}from"./useTheme-f78652d4.js";import{C as k}from"./Column-67f0f19c.js";import{u as N}from"./usePiwikTrackCustomEventFromProps-4ef96468.js";import{a as A,P as D}from"./slugs-334a1ec2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./index-821d8f00.js";import"./extends-98964cd2.js";import"./TextAncestorContext-63ed7f56.js";import"./index-e1b95cde.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./useThemable-212e8c5a.js";import"./index-d3ea75b5.js";import"./redux-toolkit.esm-1f08def5.js";import"./base-color-0322ee5e.js";import"./index-e39fa516.js";import"./development-9e7a9bcc.js";import"./index-14cede91.js";import"./useSentry-a6b63432.js";import"./callBound-55a1829f.js";import"./invariant-f1a82cf7.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";const S=({checked:a})=>{const{color:e}=_();return h(w,{height:24,viewBox:"0 0 24 24",width:24,children:[t(p,{cx:12,cy:12,fill:e.control.default.background,r:11,stroke:e.control.checked.border,strokeWidth:2}),!!a&&t(p,{cx:12,cy:12,fill:e.control.checked.border,r:8})]})},s=({label:a,isSelected:e,onPress:o,testID:r,...n})=>t(R,{...n,accessibilityLanguage:"nl-NL",accessibilityRole:"radio",accessibilityState:{selected:e},onPress:o,testID:r,children:h(q,{gutter:"sm",valign:"center",children:[t(S,{checked:e}),t(P,{testID:`${r}Phrase`,children:a})]})});try{s.displayName="Radio",s.__docgenInfo={description:"",displayName:"Radio",props:{isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"Called when a single tap gesture is detected.",name:"onPress",required:!1,type:{name:"(() => void) & ((event: GestureResponderEvent) => void)"}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const u=({options:a=[],onChange:e,testID:o,value:r,logAction:n=D.radioChange,useOptionValuesForLogging:d=!1,logDimensions:y={},...b})=>{const C=N({...b,logAction:n,logDimensions:y,onEvent:e,testID:o});return t(k,{gutter:"md",children:a.map(({label:c,value:l},V)=>{const m=`${o}${d?l.toString():V}RadioButton`;return t(s,{isSelected:r===l,label:c,logName:m,onPress:()=>C(l,d?{dimensions:{[A.newState]:l.toString()}}:{}),"sentry-label":m,testID:`${o}${l.toString()}RadioButton`},c)})})};try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"RadioGroupOption<T>[]"}},useOptionValuesForLogging:{defaultValue:{value:"false"},description:"Log value to analytics service as new state when the selected value changes and as name on the button press event of the option.",name:"useOptionValuesForLogging",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.radioChange"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:{value:"{}"},description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const ue={component:u},x=[{label:"Heldhaftig",value:"valiant"},{label:"Vastberaden",value:"steadfast"},{label:"Barmhartig",value:"compassionate"}],i={args:{options:x,value:"valiant"}};var v,g,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    value: 'valiant'
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const de=["Default"];export{i as Default,de as __namedExportsOrder,ue as default};

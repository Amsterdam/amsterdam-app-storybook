import{j as e}from"./index-9d7eb5a2.js";import{r as y}from"./index-76fb7be0.js";import{P as k}from"./PressableBase-b52f5e17.js";import{F as w}from"./FormField-4f620fff.js";import{u as C}from"./usePiwikTrackCustomEventFromProps-3c862eb3.js";import{a as x,b as P}from"./environment-0af1f01c.js";import{u as V}from"./useTheme-c7eb6588.js";import{S as _}from"./index-aeedb8f4.js";import{T as q}from"./index-169dd17a.js";import"./_commonjsHelpers-de833af9.js";import"./index-d0caa68a.js";import"./extends-34e645d9.js";import"./TextAncestorContext-3b992cff.js";import"./index-b1a24850.js";import"./Row-1a77dc83.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./useThemable-e2fb66d4.js";import"./index-d3ea75b5.js";import"./redux-toolkit.esm-cb9067f1.js";import"./base-color-0322ee5e.js";import"./layoutStyles-605143e0.js";import"./development-de2bc6fd.js";import"./index-fb7b51b4.js";import"./useSentry-34852e81.js";import"./index-07bd7250.js";import"./callBound-c4e9bae7.js";import"./index-759cb76a.js";import"./NativeEventEmitter-48cac137.js";import"./index-cbe5b8dd.js";const r=({accessibilityLabel:i="",disabled:l=!1,label:p,labelPosition:g="start",logAction:v=P.toggle,logDimensions:f={},onChange:b,testID:n,value:t,wrapper:h=y.Fragment,...s})=>{const{color:a}=V(),u=C({...s,logAction:v,logDimensions:{...f,[x.newState]:t?"unchecked":"checked"},onEvent:b,testID:n});return e.jsx(k,{accessibilityHint:"Dubbel tik om onderdeel aan of uit te zetten",accessibilityLabel:`${i} onderdeel staat ${t?"aan":"uit"}`,accessibilityLanguage:"nl-NL",accessibilityRole:"button","aria-disabled":l,onPress:u,testID:n,children:e.jsx(h,{children:e.jsx(w,{label:p,labelPosition:g,children:e.jsx(_,{accessibilityElementsHidden:!0,importantForAccessibility:"no-hide-descendants",ios_backgroundColor:a.control.switch.track.background.off,onChange:u,thumbColor:a.control.switch.thumb.background[l?"disabled":"enabled"],trackColor:{false:a.control.switch.track.background.off,true:a.control.switch.track.background.on},value:t,...s})})})})};try{r.displayName="Switch",r.__docgenInfo={description:"Wraps a switch with its label in a row and takes care of accessibility.",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"start"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void)"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"ElementType"}},logAction:{defaultValue:{value:"PiwikAction.toggle"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:{value:"{}"},description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const re={component:r,argTypes:{onValueChange:{action:"onValueChange"}}},o={args:{label:e.jsx(q,{children:"Ik ga akkoord met de voorwaarden"}),labelPosition:"end",value:!0}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: <Text>Ik ga akkoord met de voorwaarden</Text>,
    labelPosition: 'end',
    value: true
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const ie=["Default"];export{o as Default,ie as __namedExportsOrder,re as default};

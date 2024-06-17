import{j as a,S as k}from"./index-9d7eb5a2.js";import{F as y}from"./FormField-4f620fff.js";import{I as C}from"./Icon-8b10a994.js";import{u as x}from"./usePiwikTrackCustomEventFromProps-1034ddce.js";import{a as V,b as w}from"./slugs-b43e7e98.js";import{e as n}from"./useThemable-e2fb66d4.js";import{T as P}from"./index-e0bcf8f0.js";import{V as T}from"./index-b1a24850.js";import{T as _}from"./index-169dd17a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Row-1a77dc83.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./layoutStyles-605143e0.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Animated-4476d759.js";import"./invariant-f1a82cf7.js";import"./extends-34e645d9.js";import"./index-72552a59.js";import"./TextAncestorContext-3b992cff.js";import"./NativeEventEmitter-7be6cb46.js";import"./index-87b6cec9.js";import"./types-65ac26c5.js";import"./useDeviceContext-82bee89b.js";import"./index-6f107027.js";import"./index-fb7b51b4.js";import"./index-3cad2065.js";import"./useTheme-c7eb6588.js";import"./redux-toolkit.esm-cb9067f1.js";import"./development-de2bc6fd.js";import"./useSentry-34852e81.js";import"./index-07bd7250.js";import"./callBound-c4e9bae7.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";const i=({accessibilityLabel:e,label:d,labelPosition:m="end",logAction:p=w.toggle,logDimensions:g={},onValueChange:v,testID:r,value:o,...h})=>{const l=n(q),b=n(D),f=x({...h,logAction:p,logDimensions:{...g,[V.newState]:o?"unchecked":"checked"},onEvent:v,testID:r});return a.jsx(P,{accessibilityLabel:e,accessibilityLanguage:"nl-NL",accessibilityRole:"checkbox",accessibilityState:{selected:o},onPress:f,testID:r,...b,children:a.jsx(y,{label:d,labelPosition:m,children:a.jsx(T,{style:[l.checkbox,o&&l.checked],children:!!o&&a.jsx(C,{color:"inverse",name:"checkmark",testID:`${r}Icon`})})})})},q=({color:e})=>k.create({checkbox:{width:24,aspectRatio:1,padding:2,borderWidth:2,borderColor:e.control.checked.background,backgroundColor:e.control.default.background},checked:{backgroundColor:e.control.checked.background}}),D=({color:e})=>({underlayColor:e.box.background.white});try{i.displayName="Checkbox",i.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"end"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}},logAction:{defaultValue:{value:"PiwikAction.toggle"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:{value:"{}"},description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const pe={component:i,argTypes:{onValueChange:{action:"onValueChange"}}},t={args:{label:a.jsx(_,{children:"Ik ga akkoord met de voorwaarden"}),labelPosition:"end",value:!1}};var s,u,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: <Text>Ik ga akkoord met de voorwaarden</Text>,
    labelPosition: 'end',
    value: false
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const ge=["Default"];export{t as Default,ge as __namedExportsOrder,pe as default};

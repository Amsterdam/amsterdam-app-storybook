import{j as e}from"./index-1401012c.js";import{r as k}from"./index-76fb7be0.js";import{P as w}from"./PressableBase-cca40e9c.js";import{F as y}from"./FormField-d824b2fd.js";import{u as P,a as C,P as V}from"./usePiwikTrackCustomEventFromProps-cb59509f.js";import{u as _}from"./useTheme-8e94b012.js";import{S as q}from"./index-50211726.js";import{T as S}from"./index-e39fa516.js";import"./_commonjsHelpers-de833af9.js";import"./index-fbfe0fd2.js";import"./extends-98964cd2.js";import"./TextAncestorContext-63ed7f56.js";import"./slugs-752d94ee.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./development-fba0c344.js";import"./index-e1b95cde.js";import"./bottomSheet-7b54d378.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./useDispatch-b9dec53a.js";import"./useThemable-a5fed888.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./Row-b2f4e37d.js";import"./mapMainAxisAlignment-e13c2957.js";import"./layoutStyles-ee44dbe0.js";import"./useSentry-4cda5aa7.js";import"./logging-fefb8dff.js";import"./callBound-55a1829f.js";const r=({accessibilityLabel:i="",disabled:n=!1,label:p,labelPosition:g="start",logAction:f=V.toggle,logDimensions:v={},onChange:b,testID:l,value:t,wrapper:h=k.Fragment,...s})=>{const{color:a}=_(),u=P({...s,logAction:f,logDimensions:{...v,[C.newState]:t?"unchecked":"checked"},onEvent:b,testID:l});return e(w,{accessibilityHint:"Dubbel tik om onderdeel aan of uit te zetten",accessibilityLabel:`${i} onderdeel staat ${t?"aan":"uit"}`,accessibilityLanguage:"nl-NL",accessibilityRole:"button","aria-disabled":n,onPress:u,testID:l,children:e(h,{children:e(y,{label:p,labelPosition:g,children:e(q,{accessibilityElementsHidden:!0,importantForAccessibility:"no-hide-descendants",ios_backgroundColor:a.control.switch.track.background.off,onChange:u,thumbColor:a.control.switch.thumb.background[n?"disabled":"enabled"],trackColor:{false:a.control.switch.track.background.off,true:a.control.switch.track.background.on},value:t,...s})})})})};try{r.displayName="Switch",r.__docgenInfo={description:"Wraps a switch with its label in a row and takes care of accessibility.",displayName:"Switch",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"start"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(() => void)"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"ElementType"}},logAction:{defaultValue:{value:"PiwikAction.toggle"},description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:{value:"{}"},description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<PiwikDimension | PiwikSessionDimension, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}}}}}catch{}const ie={component:r,argTypes:{onValueChange:{action:"onValueChange"}}},o={args:{label:e(S,{children:"Ik ga akkoord met de voorwaarden"}),labelPosition:"end",value:!0}};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: <Text>Ik ga akkoord met de voorwaarden</Text>,
    labelPosition: 'end',
    value: true
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ne=["Default"];export{o as Default,ne as __namedExportsOrder,ie as default};
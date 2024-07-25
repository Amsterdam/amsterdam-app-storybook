import{j as e}from"./jsx-runtime-ffb262ed.js";import{P as y}from"./Pressable-ab772591.js";import{B as x}from"./Box-ed9d82d7.js";import{R as _}from"./Row-8ce02dd4.js";import{I as l}from"./Icon-b88d3311.js";import{T as k}from"./Title-58567e52.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-943e0133.js";import"./usePiwikTrackCustomEventFromProps-15d04cd7.js";import"./index-e8e5dbb3.js";import"./useTrackException-60532a2b.js";import"./index-ee304789.js";import"./NativeEventEmitter-2071600e.js";import"./index-115efad7.js";import"./TextAncestorContext-c1a63433.js";import"./index-a802de3b.js";import"./development-6fd8b346.js";import"./index-ec9b8831.js";import"./callBound-94f74847.js";import"./index-6d1f357f.js";import"./extends-4c19d496.js";import"./index-5b56d0c8.js";import"./useThemable-21958500.js";import"./index-d3ea75b5.js";import"./base-color-feabc61c.js";import"./layoutStyles-b0426a14.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Animated-fdc153e4.js";import"./index-4f48d35c.js";import"./index-ccab62b4.js";import"./types-65ac26c5.js";import"./useDeviceContext-d0c458db.js";import"./index-e8db3c07.js";import"./useTheme-61868bd7.js";const i=({direction:t="forward",iconSize:n="lg",label:g,onPress:v,testID:o,accessibilityRole:f="link",accessibilityLanguage:b="nl-NL"})=>e.jsx(y,{accessibilityLanguage:b,accessibilityRole:f,onPress:v,testID:o,children:e.jsx(x,{insetHorizontal:"md",insetVertical:"sm",children:e.jsxs(_,{align:"between",gutter:"md",valign:"center",children:[t==="backward"&&e.jsx(l,{color:"link",name:"chevron-left",size:n,testID:`${o}Icon`}),e.jsx(k,{color:"link",level:"h5",text:g}),t==="forward"&&e.jsx(l,{color:"link",name:"chevron-right",size:n,testID:`${o}Icon`})]})})});try{i.displayName="NavigationButton",i.__docgenInfo={description:"",displayName:"NavigationButton",props:{accessibilityLanguage:{defaultValue:{value:"nl-NL"},description:"",name:"accessibilityLanguage",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:{value:"link"},description:"",name:"accessibilityRole",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"button"'}]}},direction:{defaultValue:{value:"forward"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"backward"'},{value:'"forward"'}]}},iconSize:{defaultValue:{value:"lg"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"ml"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const ne={component:i,argTypes:{onPress:{action:"onPress"}}},r={args:{label:"Label"}},a={args:{direction:"backward",label:"Vorige"}};var s,m,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: 'backward',
    label: 'Vorige'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const le=["Default","Previous"];export{r as Default,a as Previous,le as __namedExportsOrder,ne as default};
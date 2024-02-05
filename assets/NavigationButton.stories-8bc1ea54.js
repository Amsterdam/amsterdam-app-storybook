import{j as e,a as y}from"./useThemable-06843957.js";import{P as _}from"./Pressable-034d1063.js";import{B as k}from"./Box-8d0b2e3a.js";import{R as w}from"./Row-b0d80cfa.js";import{I as l}from"./Icon-57cb9c66.js";import{T as V}from"./Title-46509276.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-b5eac2bc.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./index-4dc12ce0.js";import"./layoutStyles-925ed047.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-3e3c0b9e.js";import"./index-9d475cdf.js";import"./Animated-f3ee43b0.js";import"./index-6410b289.js";import"./NativeEventEmitter-82d5e8e2.js";import"./index-eb1709cd.js";import"./index-0e143f66.js";import"./types-e7c584cc.js";import"./useDeviceContext-e8265de1.js";import"./index-14c07966.js";import"./index-6e95f111.js";import"./useTheme-5b6fcdcb.js";const i=({direction:t="forward",iconSize:o="lg",label:d,onPress:g,testID:f,accessibilityRole:v="link",accessibilityLanguage:b="nl-NL"})=>e(_,{accessibilityLanguage:b,accessibilityRole:v,onPress:g,testID:f,children:e(k,{insetHorizontal:"md",insetVertical:"sm",children:y(w,{align:"between",gutter:"md",valign:"center",children:[t==="backward"&&e(l,{color:"link",name:"chevron-left",size:o}),e(V,{color:"link",level:"h5",text:d}),t==="forward"&&e(l,{color:"link",name:"chevron-right",size:o})]})})});try{i.displayName="NavigationButton",i.__docgenInfo={description:"",displayName:"NavigationButton",props:{accessibilityLanguage:{defaultValue:{value:"nl-NL"},description:"",name:"accessibilityLanguage",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:{value:"link"},description:"",name:"accessibilityRole",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'}]}},direction:{defaultValue:{value:"forward"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"backward"'},{value:'"forward"'}]}},iconSize:{defaultValue:{value:"lg"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"ml"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const X={component:i,argTypes:{onPress:{action:"onPress"}}},r={args:{label:"Label"}},a={args:{direction:"backward",label:"Vorige"}};var n,s,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: 'backward',
    label: 'Vorige'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const Y=["Default","Previous"];export{r as Default,a as Previous,Y as __namedExportsOrder,X as default};
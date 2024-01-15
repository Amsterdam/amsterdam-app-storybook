import{j as r,a as f}from"./useThemable-f30bc085.js";import{S as g,C as c}from"./index-0a8a0804.js";import{R as v}from"./Row-6615ad7f.js";import{P as h}from"./Phrase-6a808010.js";import{u as y}from"./useTheme-6ad20d8d.js";import{P as _}from"./index-a38d3ef2.js";import{C as R}from"./Column-1b7dee07.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./index-9d475cdf.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-c2b660c2.js";import"./index-ccfb1f0c.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";const b=({checked:a})=>{const{color:e}=y();return f(g,{height:24,viewBox:"0 0 24 24",width:24,children:[r(c,{cx:12,cy:12,fill:e.control.default.background,r:11,stroke:e.control.checked.border,strokeWidth:2}),!!a&&r(c,{cx:12,cy:12,fill:e.control.checked.border,r:8})]})},n=({label:a,isSelected:e,onPress:t,...i})=>r(_,{...i,accessibilityLanguage:"nl-NL",accessibilityRole:"radio",accessibilityState:{selected:e},onPress:t,children:f(v,{gutter:"sm",valign:"center",children:[r(b,{checked:e}),r(h,{children:a})]})});try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"Called when a single tap gesture is detected.",name:"onPress",required:!1,type:{name:"(() => void) & ((event: GestureResponderEvent) => void)"}}}}}catch{}const l=({options:a=[],onChange:e,testID:t,value:i})=>r(R,{gutter:"md",children:a.map(({label:d,value:s})=>r(n,{isSelected:i===s,label:d,onPress:()=>e(s),testID:t?`${t}${s.toString()}RadioButton`:void 0},d))});try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: T) => void"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"RadioGroupOption<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"RadioValue"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const O={component:l},q=[{label:"Heldhaftig",value:"valiant"},{label:"Vastberaden",value:"steadfast"},{label:"Barmhartig",value:"compassionate"}],o={args:{options:q,value:"valiant"}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options,
    value: 'valiant'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,O as default};
import{j as e,a as f}from"./useThemable-0c29db81.js";import{P as h}from"./Pressable-8b21e454.js";import{c as g}from"./config-55b2a55c.js";import{R as k}from"./Row-7183adb0.js";import{S as b}from"./Size-83c2f722.js";import{I as y}from"./Icon-8cbe76e1.js";import{P as x}from"./Phrase-218333f7.js";import{D as a}from"./types-e7c584cc.js";import{u as d}from"./useTheme-4e1d74b9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./Box-71932b3f.js";import"./layoutStyles-f7c49c74.js";import"./index-75ce51c7.js";import"./index-ee60ff1c.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./mapMainAxisAlignment-e13c2957.js";import"./index-6c192943.js";import"./index-9d475cdf.js";import"./Animated-3046c943.js";import"./invariant-7bb126f5.js";import"./index-d96d58dd.js";import"./index-0fb53e87.js";import"./index-5b61bf2d.js";import"./index-ec5a4acc.js";import"./useDeviceContext-e004f4a0.js";import"./index-1597b195.js";const o=({direction:r,external:s})=>{const{text:l}=d(),t=s?"external-link":r===a.left?"chevron-left":"chevron-right";return e(b,{height:l.lineHeight.body,children:e(y,{color:"link",name:t})})},n=({label:r,onPress:s,testID:l,variant:t="default"})=>{const{text:u}=d();return e(h,{accessibilityLabel:t==="external"?r+", opent in webbrowser":r,accessibilityRole:"link",hitSlop:(g.minTouchSize-u.lineHeight.body)/2,onPress:s,testID:l,children:f(k,{gutter:"sm",children:[t==="external"&&e(o,{external:!0}),t==="backward"&&e(o,{direction:a.left}),t==="default"&&e(o,{direction:a.right}),e(x,{color:"link",children:r}),t==="forward"&&e(o,{direction:a.right})]})})};try{n.displayName="Link",n.__docgenInfo={description:"",displayName:"Link",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"backward"'},{value:'"forward"'},{value:'"external"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const X={component:n},i=r=>e(n,{...r});i.args={label:"Klik mij ik ben een link",variant:"default"};var m,p,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Link {...args} />",...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Y=["Default"];export{i as Default,Y as __namedExportsOrder,X as default};

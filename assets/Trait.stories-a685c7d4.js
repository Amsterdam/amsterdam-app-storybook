import{j as a}from"./jsx-runtime-ffb262ed.js";import{B as h}from"./Badge-a9efce30.js";import{R as f}from"./Row-9e1a91c8.js";import{I as y}from"./Icon-d8f6bb06.js";import{P as b}from"./Phrase-54a1176c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./useDeviceContext-d0c458db.js";import"./index-ee304789.js";import"./NativeEventEmitter-2071600e.js";import"./index-115efad7.js";import"./TextAncestorContext-c1a63433.js";import"./index-a802de3b.js";import"./index-e8db3c07.js";import"./useThemable-21958500.js";import"./index-d3ea75b5.js";import"./index-e8e5dbb3.js";import"./base-color-feabc61c.js";import"./formatNumber-ffc493e4.js";import"./index-5b56d0c8.js";import"./index-ccab62b4.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Animated-fdc153e4.js";import"./extends-4c19d496.js";import"./index-4f48d35c.js";import"./types-65ac26c5.js";import"./useTheme-61868bd7.js";const l=({accessibilityLabel:r,accessibilityLanguage:v="nl-NL",children:d,iconName:i,label:g,testID:o})=>a.jsxs(f,{gutter:"sm",valign:"center",children:[i?a.jsx(y,{name:i,testID:`${o}Icon`}):d,a.jsx(b,{accessibilityLabel:r,accessibilityLanguage:v,testID:`${o}Label`,variant:"small",children:g})]});try{l.displayName="Trait",l.__docgenInfo={description:"",displayName:"Trait",props:{accessibilityLabel:{defaultValue:null,description:"",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityLanguage:{defaultValue:{value:"nl-NL"},description:"",name:"accessibilityLanguage",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Allows a custom visualization for the trait.
Use a small component here. Not rendered if an icon name is provided.`,name:"children",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:null,description:"The name of the icon to visually support the trait label.",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"search"'},{value:'"alert"'},{value:'"list"'},{value:'"alarm"'},{value:'"announcement"'},{value:'"api"'},{value:'"car"'},{value:'"card"'},{value:'"chatting"'},{value:'"checkmark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"child"'},{value:'"circle"'},{value:'"city-office"'},{value:'"city-pass"'},{value:'"city-pass-pass"'},{value:'"clock"'},{value:'"close"'},{value:'"collaborate"'},{value:'"construction-work"'},{value:'"document-text"'},{value:'"edit"'},{value:'"enlarge"'},{value:'"external-link"'},{value:'"eye"'},{value:'"facade"'},{value:'"housing"'},{value:'"park-sign"'},{value:'"info"'},{value:'"location"'},{value:'"login"'},{value:'"organic-waste-container"'},{value:'"person"'},{value:'"person-desk"'},{value:'"phone"'},{value:'"pointer"'},{value:'"question-mark-solid"'},{value:'"question-mark-circle"'},{value:'"settings"'},{value:'"spinner"'},{value:'"trash-bin"'},{value:'"two-persons"'},{value:'"vote"'},{value:'"whatsapp"'},{value:'"wifi-disconnect"'}]}},label:{defaultValue:null,description:`The label identifying the trait.
Should be one or a few words.`,name:"label",required:!0,type:{name:"string"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Q={component:l},e=r=>a.jsx(l,{...r,iconName:"location"});e.args={label:"123 meter"};const t={args:{children:a.jsx(h,{testID:"Badge",value:7}),label:"berichten"}};var n,s,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:'args => <Trait {...args} iconName="location" />',...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <Badge testID="Badge" value={7} />,
    label: 'berichten'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const X=["Default","WithBadge"];export{e as Default,t as WithBadge,X as __namedExportsOrder,Q as default};

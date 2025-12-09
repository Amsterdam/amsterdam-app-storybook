import{j as r,C as _,R as E,f as I,I as S,a as R}from"./iframe-CZ7Tjlgc.js";import{E as L}from"./ErrorMessage-Bfrg6aeI.js";import{L as V}from"./Label-CkQF4r2Q.js";import"./preload-helper-Dp1pzeXC.js";const q=({isSelected:a,testID:t,onPress:s,...e})=>r.jsx(S,{accessibilityHint:"Selecteer deze score",accessibilityLanguage:"nl-NL",accessibilityRole:"radio",accessibilityState:{selected:a},...e,icon:r.jsx(R,{color:"link",name:a?"starFilled":"star",size:"xll",testID:`${t}Icon`}),onPress:s,testID:`${t}IconButton`}),m=({max:a=5,label:t,ratingLabels:s,rating:e,errorMessage:u,testID:c,onChange:b})=>r.jsxs(_,{gutter:"md",children:[!!t&&r.jsx(V,{text:t}),r.jsx(E,{children:Array.from({length:a},(n,h)=>h+1).map(n=>r.jsx(q,{accessibilityLabel:`Geef een score van ${n} uit ${a}.`,isSelected:!!e&&n<=e,onPress:()=>b(n),testID:c},`ranking_${n}`))}),!!e&&!!(s!=null&&s[e-1])&&r.jsx(I,{testID:`${c}RatingLabel${e}Phrase`,children:s[e-1]}),!!u&&r.jsx(L,{testID:`${c}ErrorMessage`,text:u})]});try{m.displayName="Rating",m.__docgenInfo={description:"",displayName:"Rating",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},max:{defaultValue:{value:"5"},description:"",name:"max",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(position: number) => void"}},rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"number | null"}},ratingLabels:{defaultValue:null,description:"",name:"ratingLabels",required:!1,type:{name:"string[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}}}}catch{}const P={component:m,argTypes:{max:{control:"number"}}},i={args:{label:"Hoe makkelijk is het starten van een parkeersessie?",rating:3,ratingLabels:["Heel moeilijk","Enigszins moeilijk","Neutraal","Enigszins makkelijk","Heel makkelijk"],max:5}},l={args:{max:5,rating:1}},o={args:{max:8,rating:4}};var g,d,p;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Hoe makkelijk is het starten van een parkeersessie?',
    rating: 3,
    ratingLabels: ['Heel moeilijk', 'Enigszins moeilijk', 'Neutraal', 'Enigszins makkelijk', 'Heel makkelijk'],
    max: 5
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var k,x,$;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    max: 5,
    rating: 1
  }
}`,...($=(x=l.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var f,j,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    max: 8,
    rating: 4
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const D=["Default","WithoutLabels","From1To8"];export{i as Default,o as From1To8,l as WithoutLabels,D as __namedExportsOrder,P as default};

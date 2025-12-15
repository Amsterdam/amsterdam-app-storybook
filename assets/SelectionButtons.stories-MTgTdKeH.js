import{j as t,C as _,R as M,B as h}from"./iframe-Dq-oZncY.js";import{E as k}from"./ErrorMessage-OsYeZ-MZ.js";import{L as w}from"./Label-BjLhcS8N.js";import"./preload-helper-Dp1pzeXC.js";const a=({selectionButtons:l=[],label:o,selected:i,errorMessage:c,testID:$,onPress:S,...x})=>t.jsxs(_,{gutter:"md",children:[!!o&&t.jsx(w,{text:o}),t.jsx(M,{gutter:"smd",wrap:!0,children:l.map(({label:e},v)=>t.jsx(h,{accessibilityHint:`Selecteer de optie: ${e}`,accessibilityLanguage:"nl-NL",accessibilityRole:"radiogroup",accessibilityState:{selected:i===e},label:e,onPress:()=>S(e),testID:`SelectionButtons${v}Button`,variant:i===e?"primary":"secondary",...x}))}),!!c&&t.jsx(k,{testID:`${$}ErrorMessage`,text:c})]});try{a.displayName="SelectionButtons",a.__docgenInfo={description:"",displayName:"SelectionButtons",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"(option: string) => void"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"string"}},selectionButtons:{defaultValue:{value:"[]"},description:"",name:"selectionButtons",required:!1,type:{name:"SelectionButton[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}}}}catch{}const N={component:a,argTypes:{selected:{control:"text"},selectionButtons:{control:"object"},errorMessage:{control:"text"},label:{control:"text"}}},n={args:{selectionButtons:[{label:"Ja"},{label:"Nee"}],label:"Heeft u gevonden wat u zocht? ",selected:"Ja"}},s={args:{selectionButtons:[{label:"Ja"},{label:"Nee"}],label:"Heeft u gevonden wat u zocht? ",selected:void 0,errorMessage:"Maak een keuze uit bovenstaande opties"}},r={args:{selectionButtons:[{label:"0 - 3"},{label:"4 - 6"},{label:"7 - 10"},{label:"11 - 14"},{label:"15 - 18"}],label:"Hoeveel parkeersessies heeft u in de afgelopen week gedaan?",selected:"4 - 6"}};var u,d,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    selectionButtons: [{
      label: 'Ja'
    }, {
      label: 'Nee'
    }],
    label: 'Heeft u gevonden wat u zocht? ',
    selected: 'Ja'
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,m,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    selectionButtons: [{
      label: 'Ja'
    }, {
      label: 'Nee'
    }],
    label: 'Heeft u gevonden wat u zocht? ',
    selected: undefined,
    errorMessage: 'Maak een keuze uit bovenstaande opties'
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,y,B;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    selectionButtons: [{
      label: '0 - 3'
    }, {
      label: '4 - 6'
    }, {
      label: '7 - 10'
    }, {
      label: '11 - 14'
    }, {
      label: '15 - 18'
    }],
    label: 'Hoeveel parkeersessies heeft u in de afgelopen week gedaan?',
    selected: '4 - 6'
  }
}`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const V=["Default","ErrorOption","ManyOptions"];export{n as Default,s as ErrorOption,r as ManyOptions,V as __namedExportsOrder,N as default};

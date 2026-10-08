import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{l as r,s as i}from"./getAllowedData-Ctsd4o27.js";import{_t as a,vt as o}from"./modules-B8s6B_or.js";import{n as s,t as c}from"./Column-CNpQH6io.js";import{n as l,t as u}from"./Phrase-DavMaFKk.js";import{n as d,t as f}from"./Title-BYC-pNtp.js";import{n as p,t as m}from"./Row-BrJX0SUe.js";import{n as h,t as g}from"./Icon-vIqfypAe.js";import{n as _,t as v}from"./useTrackException-BKvmXqYC.js";import{n as y,t as b}from"./Box-BOF0x8lC.js";import{n as x,t as S}from"./Notice-Hm2zLkx8.js";import{n as C,t as w}from"./Switch-MFy5TWkY.js";import{n as T,t as E}from"./useAccessibilityAnnounce-CDyL-gK9.js";import{i as D,n as O,r as k,t as A}from"./useNavigateToInstructionsScreen-DEFQ82lk.js";import{i as j,n as M,t as N}from"./deviceRegistration.service-DAJE_k0I.js";var P,F;function I(){return(I=e((()=>{P=()=>null,F=()=>Promise.resolve(null)})))()}var L,R,z;function B(){return(B=e((()=>{I(),L=t(),k(),v(),N(),o(),R=P(),z=()=>{let[e]=M(),[t]=j(),n=_(),{hasPermission:r,requestPermission:o}=D(a.notifications),s=(0,L.useCallback)(()=>{F(R).then(t=>{e({firebase_token:t})}).catch(e=>{n(i.registerDevice,`useRegisterDevice.ts`,{error:e})})},[e,n]);return{registerDeviceIfPermitted:(0,L.useCallback)((e=!1)=>new Promise((t,n)=>{e?o().then(e=>{e&&s(),t(e)}):(r&&s(),t(r))}),[o,s,r]),unregisterDevice:t}}})))()}var V,H,U,W;function G(){return(G=e((()=>{V=t(),y(),x(),C(),s(),p(),h(),l(),d(),E(),B(),A(),o(),H=n(),U=({children:e})=>(0,H.jsx)(b,{borderColor:`default`,borderStyle:`solid`,borderWidth:`md`,grow:!0,children:e}),W=({description:e,value:t,testID:n,onChange:r,disabled:i,loading:o,error:s})=>{let l=O(a.notifications),d=T(),{registerDeviceIfPermitted:p}=z(),[h,_]=(0,V.useState)(!1),v=(0,V.useCallback)(()=>{_(!0),t?r(!1):p(!0).then(e=>{e?r(!0):l()})},[r,t,p,l]);return(0,V.useEffect)(()=>{h&&d(t?`aangezet`:`uitgezet`)},[d,h,t]),(0,H.jsxs)(c,{gutter:`smd`,children:[(0,H.jsx)(w,{accessibilityLabel:`${e} staat ${t?`aan`:`uit`}`,disabled:i,hasLoadingPlaceholder:!0,label:(0,H.jsxs)(c,{grow:1,gutter:`sm`,children:[(0,H.jsxs)(m,{gutter:`sm`,children:[(0,H.jsx)(g,{name:`bell`,size:`lg`,testID:`${n}Icon`}),(0,H.jsx)(f,{level:`h5`,text:`Meldingen`})]}),(0,H.jsx)(u,{children:e})]}),loading:o,onChange:v,testID:`${n}Switch`,value:t,wrapper:U}),!!s&&(0,H.jsx)(S,{text:s,variant:`negative`})]})};try{W.displayName=`NotificationToggleBox`,W.__docgenInfo={description:``,displayName:`NotificationToggleBox`,filePath:`/Users/runner/work/1/s/src/components/features/NotificationToggleBox.tsx`,methods:[],props:{description:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string`}},loading:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`loading`,required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: boolean) => void`}},value:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`boolean`}},testID:{defaultValue:null,declarations:[{fileName:`s/src/components/ui/types.ts`,name:`TypeLiteral`}],description:``,name:`testID`,required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}},tags:{}}}catch{}})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G(),{action:K}=__STORYBOOK_MODULE_ACTIONS__,q={component:W,parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3537&t=p02Fvd5Y2LMm8mP3-4`}}},J={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!0,onChange:K(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5679-3301&t=p02Fvd5Y2LMm8mP3-4`}}},Y={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:K(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3564&t=p02Fvd5Y2LMm8mP3-4`}}},X={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:K(`onChange`),error:`Meldingen konden niet worden aangezet. Controleer uw internetverbinding en probeer het opnieuw.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5689-3736&t=p02Fvd5Y2LMm8mP3-4`}}},Z={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,loading:!0,onChange:K(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5678-3242&t=p02Fvd5Y2LMm8mP3-4`}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.',
    testID: 'Switch',
    value: true,
    onChange: action('onChange')
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5679-3301&t=p02Fvd5Y2LMm8mP3-4'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.',
    testID: 'Switch',
    value: false,
    onChange: action('onChange')
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3564&t=p02Fvd5Y2LMm8mP3-4'
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.',
    testID: 'Switch',
    value: false,
    onChange: action('onChange'),
    error: 'Meldingen konden niet worden aangezet. Controleer uw internetverbinding en probeer het opnieuw.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5689-3736&t=p02Fvd5Y2LMm8mP3-4'
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.',
    testID: 'Switch',
    value: false,
    loading: true,
    onChange: action('onChange')
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5678-3242&t=p02Fvd5Y2LMm8mP3-4'
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`On`,`Off`,`OffWithError`,`Loading`]})))()}$();export{Z as Loading,Y as Off,X as OffWithError,J as On,Q as __namedExportsOrder,q as default};
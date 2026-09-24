import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-D0Y92gk6.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{Yt as i,bn as a,qt as o,xn as s}from"./iframe-DR5ufP5T.js";import{n as c,t as l}from"./Column-BYF0i3qO.js";import{n as u,t as d}from"./Phrase-uZqO-CrG.js";import{n as f,t as p}from"./Title-jWmG5ebB.js";import{n as m,t as h}from"./Box-CX0G8SvH.js";import{n as g,t as _}from"./Notice-ymOXzRJz.js";import{n as v,t as y}from"./useTrackException-CwpFGpKW.js";import{n as b,t as x}from"./Row-4ORxbr5A.js";import{n as S,t as C}from"./Icon-C15vr14X.js";import{n as w,t as T}from"./Switch-kidiQA-7.js";import{n as E,t as D}from"./useAccessibilityAnnounce-DrUgALjS.js";import{i as O,n as k,r as A,t as j}from"./useNavigateToInstructionsScreen-BAWTr5p8.js";import{n as M,r as N,t as P}from"./deviceRegistration.service-Cc6sur0D.js";var F,I,L=t((()=>{F=()=>null,I=()=>Promise.resolve(null)})),R,z,B,V=t((()=>{L(),R=e(n()),A(),y(),P(),s(),z=F(),B=()=>{let[e]=M(),[t]=N(),n=v(),{hasPermission:r,requestPermission:i}=O(a.notifications),s=(0,R.useCallback)(()=>{I(z).then(t=>{e({firebase_token:t})}).catch(e=>{n(o.registerDevice,`useRegisterDevice.ts`,{error:e})})},[e,n]);return{registerDeviceIfPermitted:(0,R.useCallback)((e=!1)=>new Promise((t,n)=>{e?i().then(e=>{e&&s(),t(e)}):(r&&s(),t(r))}),[i,s,r]),unregisterDevice:t}}})),H,U,W,G,K=t((()=>{H=e(n()),m(),g(),w(),c(),b(),S(),u(),f(),D(),V(),j(),s(),U=r(),W=({children:e})=>(0,U.jsx)(h,{borderColor:`default`,borderStyle:`solid`,borderWidth:`md`,grow:!0,children:e}),G=({description:e,value:t,testID:n,onChange:r,disabled:i,loading:o,error:s})=>{let c=k(a.notifications),u=E(),{registerDeviceIfPermitted:f}=B(),[m,h]=(0,H.useState)(!1),g=(0,H.useCallback)(()=>{h(!0),t?r(!1):f(!0).then(e=>{e?r(!0):c()})},[r,t,f,c]);return(0,H.useEffect)(()=>{m&&u(t?`aangezet`:`uitgezet`)},[u,m,t]),(0,U.jsxs)(l,{gutter:`smd`,children:[(0,U.jsx)(T,{accessibilityLabel:`${e} staat ${t?`aan`:`uit`}`,disabled:i,hasLoadingPlaceholder:!0,label:(0,U.jsxs)(l,{grow:1,gutter:`sm`,children:[(0,U.jsxs)(x,{gutter:`sm`,children:[(0,U.jsx)(C,{name:`bell`,size:`lg`,testID:`${n}Icon`}),(0,U.jsx)(p,{level:`h5`,text:`Meldingen`})]}),(0,U.jsx)(d,{children:e})]}),loading:o,onChange:g,testID:`${n}Switch`,value:t,wrapper:W}),!!s&&(0,U.jsx)(_,{text:s,variant:`negative`})]})};try{G.displayName=`NotificationToggleBox`,G.__docgenInfo={description:``,displayName:`NotificationToggleBox`,filePath:`/Users/runner/work/1/s/src/components/features/NotificationToggleBox.tsx`,methods:[],props:{description:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string`}},loading:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`loading`,required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: boolean) => void`}},value:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`boolean`}},testID:{defaultValue:null,declarations:[{fileName:`s/src/components/ui/types.ts`,name:`TypeLiteral`}],description:``,name:`testID`,required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}},tags:{}}}catch{}})),q,J,Y,X,Z,Q,$;t((()=>{K(),{action:q}=__STORYBOOK_MODULE_ACTIONS__,J={component:G,parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3537&t=p02Fvd5Y2LMm8mP3-4`}}},Y={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!0,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5679-3301&t=p02Fvd5Y2LMm8mP3-4`}}},X={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3564&t=p02Fvd5Y2LMm8mP3-4`}}},Z={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:q(`onChange`),error:`Meldingen konden niet worden aangezet. Controleer uw internetverbinding en probeer het opnieuw.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5689-3736&t=p02Fvd5Y2LMm8mP3-4`}}},Q={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,loading:!0,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5678-3242&t=p02Fvd5Y2LMm8mP3-4`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`On`,`Off`,`OffWithError`,`Loading`]}))();export{Q as Loading,X as Off,Z as OffWithError,Y as On,$ as __namedExportsOrder,J as default};
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-CAfMLIKe.js";import{d as n,f as r}from"./types-Ck_RgIzX.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{l as a,s as o}from"./getAllowedData-CQWw8HHx.js";import{Q as s,Z as c}from"./modules-CXEhSO9q.js";import{n as l,t as u}from"./Column-BVwY-LDO.js";import{n as d,t as f}from"./Phrase-Ce8JPLmK.js";import{n as p,t as m}from"./Title-D58MzChg.js";import{n as h,t as g}from"./Row-D724J_um.js";import{n as _,t as v}from"./Icon-C1SV0vwE.js";import{n as y,t as b}from"./useTrackException-B6vbSTUn.js";import{n as x,t as S}from"./Box-DagvjjYI.js";import{n as C,t as w}from"./Notice-CgSeCVHG.js";import{n as T,t as ee}from"./Switch-DmnepISX.js";import{n as te,t as E}from"./useAccessibilityAnnounce-HGub2opM.js";import{i as D,n as O,r as k,t as A}from"./useNavigateToInstructionsScreen-Bu-je1hU.js";import{i as j,n as M,t as N}from"./deviceRegistration.service-UUBOGwxA.js";var P,F;function I(){return(I=e((()=>{P=()=>null,F=()=>Promise.resolve(null)})))()}var L,R,z;function B(){return(B=e((()=>{I(),L=t(),k(),b(),N(),s(),R=P(),z=()=>{let[e]=M(),[t]=j(),n=y(),{hasPermission:r,requestPermission:i}=D(c.notifications),a=(0,L.useCallback)(()=>{F(R).then(t=>{e({firebase_token:t})}).catch(e=>{n(o.registerDevice,`useRegisterDevice.ts`,{error:e})})},[e,n]);return{registerDeviceIfPermitted:(0,L.useCallback)((e=!1)=>new Promise((t,n)=>{e?i().then(e=>{e&&a(),t(e)}):(r&&a(),t(r))}),[i,a,r]),unregisterDevice:t}}})))()}var V,H,U,W;function G(){return(G=e((()=>{n(),V=t(),x(),C(),T(),l(),h(),_(),d(),p(),E(),B(),A(),s(),H=i(),U=({children:e})=>(0,H.jsx)(S,{borderColor:`default`,borderStyle:`solid`,borderWidth:`md`,grow:!0,children:e}),W=({description:e,value:t,testID:n,onChange:i,disabled:a,loading:o,error:s})=>{let l=O(c.notifications),d=te(),{registerDeviceIfPermitted:p}=z(),[h,_]=(0,V.useState)(!1),y=(0,V.useRef)(!1),b=(0,V.useCallback)(e=>{_(!0),t?i(!1):p(!0).then(t=>{t?(i(!0),y.current=!1):e===`onPress`?(l(),y.current=!0):y.current=!1}).catch(()=>y.current=!1)},[i,t,p,l]);return(0,V.useEffect)(()=>{h&&d(t?`aangezet`:`uitgezet`)},[d,h,t]),r((0,V.useCallback)(()=>{y.current&&b(`onFocus`)},[b])),(0,H.jsxs)(u,{gutter:`smd`,children:[(0,H.jsx)(ee,{accessibilityLabel:`${e} staat ${t?`aan`:`uit`}`,disabled:a,hasLoadingPlaceholder:!0,label:(0,H.jsxs)(u,{grow:1,gutter:`sm`,children:[(0,H.jsxs)(g,{gutter:`sm`,children:[(0,H.jsx)(v,{name:`bell`,size:`lg`,testID:`${n}Icon`}),(0,H.jsx)(m,{level:`h5`,text:`Meldingen`})]}),(0,H.jsx)(f,{children:e})]}),loading:o,onChange:()=>{b(`onPress`)},testID:`${n}Switch`,value:t,wrapper:U}),!!s&&(0,H.jsx)(w,{text:s,variant:`negative`})]})};try{W.displayName=`NotificationToggleBox`,W.__docgenInfo={description:``,displayName:`NotificationToggleBox`,filePath:`/Users/runner/work/1/s/src/components/features/NotificationToggleBox.tsx`,methods:[],props:{description:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string`}},loading:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`loading`,required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: boolean) => void`}},value:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`boolean`}},testID:{defaultValue:null,declarations:[{fileName:`s/src/components/ui/types.ts`,name:`TypeLiteral`}],description:``,name:`testID`,required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}},tags:{}}}catch{}})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G(),{action:K}=__STORYBOOK_MODULE_ACTIONS__,q={component:W,parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3537&t=p02Fvd5Y2LMm8mP3-4`}}},J={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!0,onChange:K(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5679-3301&t=p02Fvd5Y2LMm8mP3-4`}}},Y={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:K(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3564&t=p02Fvd5Y2LMm8mP3-4`}}},X={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:K(`onChange`),error:`Meldingen konden niet worden aangezet. Controleer uw internetverbinding en probeer het opnieuw.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5689-3736&t=p02Fvd5Y2LMm8mP3-4`}}},Z={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,loading:!0,onChange:K(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5678-3242&t=p02Fvd5Y2LMm8mP3-4`}}},Q=[`On`,`Off`,`OffWithError`,`Loading`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Loading,Y as Off,X as OffWithError,J as On,Q as __namedExportsOrder,q as default};
import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-D0Y92gk6.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{X as i,Y as a,n as o}from"./dist-BEOOBnYV.js";import{Bt as s,Ht as c,Ut as l,Wt as u,_t as d,bt as f,fn as p,m as ee,p as m,pn as h,vt as te,yt as ne}from"./iframe-DPyBXM8L.js";import{n as re,t as g}from"./Column-VWIyP4rB.js";import{n as _,t as v}from"./Phrase-BF6MymAJ.js";import{n as y,t as b}from"./Title-Bx0FjgOb.js";import{n as x,t as S}from"./Box-kTeqHy6J.js";import{n as C,t as w}from"./Notice-Bn0SBucO.js";import{n as T,t as E}from"./useTrackException-Dt03my7D.js";import{n as ie,t as ae}from"./Row-BRhF7MtG.js";import{n as oe,t as se}from"./Icon-Gq2BCXJj.js";import{n as ce,t as le}from"./Switch-BXvl0AB0.js";import{n as ue,t as D}from"./useAccessibilityAnnounce-DOcTRADT.js";import{i as O,n as k,r as A,t as j}from"./useNavigateToInstructionsScreen-DQcfVD9P.js";var M,N,P=t((()=>{M=()=>null,N=()=>Promise.resolve(null)})),F,I,L,R=t((()=>{o(),u(),f(),te(),ee(),F=ne.injectEndpoints({endpoints:e=>({[m.registerDevice]:e.mutation({query:e=>({body:{os:a.OS,...e},method:`POST`,slug:l.notification,url:`/device/register`,headers:d})}),[m.unregisterDevice]:e.mutation({query:()=>({method:`DELETE`,slug:l.notification,url:`/device/register`,headers:d})})}),overrideExisting:!0}),{useRegisterDeviceMutation:I,useUnregisterDeviceMutation:L}=F})),z,B,V,H=t((()=>{P(),z=e(n()),A(),E(),R(),h(),B=M(),V=()=>{let[e]=I(),[t]=L(),n=T(),{hasPermission:r,requestPermission:i}=O(p.notifications),a=(0,z.useCallback)(()=>{N(B).then(t=>{e({firebase_token:t})}).catch(e=>{n(s.registerDevice,`useRegisterDevice.ts`,{error:e})})},[e,n]);return{registerDeviceIfPermitted:(0,z.useCallback)((e=!1)=>new Promise((t,n)=>{e?i().then(e=>{e&&a(),t(e)}):(r&&a(),t(r))}),[i,a,r]),unregisterDevice:t}}})),U,W,G,K,de=t((()=>{U=e(n()),x(),C(),ce(),re(),ie(),oe(),_(),y(),D(),H(),j(),h(),W=r(),G=({children:e})=>(0,W.jsx)(S,{borderColor:`default`,borderStyle:`solid`,borderWidth:`md`,grow:!0,children:e}),K=({description:e,value:t,testID:n,onChange:r,disabled:i,loading:a,error:o})=>{let s=k(p.notifications),c=ue(),{registerDeviceIfPermitted:l}=V(),[u,d]=(0,U.useState)(!1),f=(0,U.useCallback)(()=>{d(!0),t?r(!1):l(!0).then(e=>{e?r(!0):s()})},[r,t,l,s]);return(0,U.useEffect)(()=>{u&&c(t?`aangezet`:`uitgezet`)},[c,u,t]),(0,W.jsxs)(g,{gutter:`smd`,children:[(0,W.jsx)(le,{accessibilityLabel:`${e} staat ${t?`aan`:`uit`}`,disabled:i,hasLoadingPlaceholder:!0,label:(0,W.jsxs)(g,{grow:1,gutter:`sm`,children:[(0,W.jsxs)(ae,{gutter:`sm`,children:[(0,W.jsx)(se,{name:`bell`,size:`lg`,testID:`${n}Icon`}),(0,W.jsx)(b,{level:`h5`,text:`Meldingen`})]}),(0,W.jsx)(v,{children:e})]}),loading:a,onChange:f,testID:`${n}Switch`,value:t,wrapper:G}),!!o&&(0,W.jsx)(w,{text:o,variant:`negative`})]})};try{K.displayName=`NotificationToggleBox`,K.__docgenInfo={description:``,displayName:`NotificationToggleBox`,filePath:`/Users/runner/work/1/s/src/components/features/NotificationToggleBox.tsx`,methods:[],props:{description:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string`}},loading:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`loading`,required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: boolean) => void`}},value:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`boolean`}},testID:{defaultValue:null,declarations:[{fileName:`s/src/components/ui/types.ts`,name:`TypeLiteral`}],description:``,name:`testID`,required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}},tags:{}}}catch{}})),q,J,Y,X,Z,Q,$;t((()=>{de(),{action:q}=__STORYBOOK_MODULE_ACTIONS__,J={component:K,parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3537&t=p02Fvd5Y2LMm8mP3-4`}}},Y={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!0,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5679-3301&t=p02Fvd5Y2LMm8mP3-4`}}},X={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3564&t=p02Fvd5Y2LMm8mP3-4`}}},Z={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:q(`onChange`),error:`Meldingen konden niet worden aangezet. Controleer uw internetverbinding en probeer het opnieuw.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5689-3736&t=p02Fvd5Y2LMm8mP3-4`}}},Q={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,loading:!0,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5678-3242&t=p02Fvd5Y2LMm8mP3-4`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
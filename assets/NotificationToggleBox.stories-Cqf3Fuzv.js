import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-D0Y92gk6.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{J as i,n as a,q as o}from"./dist-NCr0OYBw.js";import{a as s,i as c}from"./slice-C2qSpKlF.js";import{At as l,Ct as u,Ft as d,G as f,K as ee,Kt as te,Mt as ne,Nt as p,Ot as re,Pt as ie,St as m,W as h,a as g,dt as _,ht as ae,jt as oe,kt as se,mt as v,o as ce,pt as le,q as ue,qt as de}from"./iframe-B9rPUAHK.js";import{n as fe,t as y}from"./Column-D3VytRyS.js";import{n as pe,t as me}from"./Phrase-CYP7ncEj.js";import{n as he,t as ge}from"./Title-DqxAyj8H.js";import{n as _e,t as ve}from"./Box-Dqsy9rUS.js";import{n as ye,t as be}from"./Notice-BU318UNQ.js";import{n as b,t as x}from"./useTrackException-DbvH6-pJ.js";import{n as xe,t as Se}from"./Row-D4mj-L4w.js";import{n as Ce,t as we}from"./Icon-CBpYAGAl.js";import{n as Te,t as S}from"./Switch-k6c49nXb.js";import{n as C,t as w}from"./useAccessibilityAnnounce-BbKQharx.js";import{n as T,t as E}from"./useNavigation-rMuVneOn.js";import{r as D,t as O}from"./routes-DYF63AD3.js";var k,A,Ee=t((()=>{k=()=>null,A=()=>Promise.resolve(null)})),j,M,N,De=t((()=>{j=e(n()),re(),te(),c(),x(),p(),u(),M=async e=>{if(e===m.notifications)return(await l([`alert`,`badge`,`carPlay`,`sound`])).status;if(e)return se(e)},N=e=>{let t=s(ie(e)),n=de(),r=b();return{hasPermission:t,requestPermission:(0,j.useCallback)(()=>new Promise((t,i)=>{M(e).then(r=>{let i=r===oe.GRANTED;n(d({permission:e,granted:i,status:r})),t(i)}).catch(t=>{n(d({permission:e,granted:!1})),r(_.updatePermission,`usePermission.ts`,{error:t,permission:e,request:!0}),i(t)})}),[n,e,r])}}})),P,F,I,Oe=t((()=>{a(),ae(),ue(),f(),ce(),P=ee.injectEndpoints({endpoints:e=>({[g.registerDevice]:e.mutation({query:e=>({body:{os:o.OS,...e},method:`POST`,slug:v.notification,url:`/device/register`,headers:h})}),[g.unregisterDevice]:e.mutation({query:()=>({method:`DELETE`,slug:v.notification,url:`/device/register`,headers:h})})}),overrideExisting:!0}),{useRegisterDeviceMutation:F,useUnregisterDeviceMutation:I}=P})),L,R,z,ke=t((()=>{Ee(),L=e(n()),De(),x(),Oe(),u(),R=k(),z=()=>{let[e]=F(),[t]=I(),n=b(),{hasPermission:r,requestPermission:i}=N(m.notifications),a=(0,L.useCallback)(()=>{A(R).then(t=>{e({firebase_token:t})}).catch(e=>{n(_.registerDevice,`useRegisterDevice.ts`,{error:e})})},[e,n]);return{registerDeviceIfPermitted:(0,L.useCallback)((e=!1)=>new Promise((t,n)=>{e?i().then(e=>{e&&a(),t(e)}):(r&&a(),t(r))}),[i,a,r]),unregisterDevice:t}}})),B,V,H,Ae=t((()=>{B=e(n()),E(),D(),u(),V={[m.biometrics]:{iconName:`face-id`,paragraph:`Ga naar Instellingen en geef de app toegang tot Face ID.`,permission:m.biometrics,screenTitle:`Face ID`,title:`Geef toegang tot Face ID`},[m.bluetooth]:{iconName:`bluetooth`,paragraph:`Ga naar Instellingen en geef de app toegang tot bluetooth.`,permission:m.bluetooth,screenTitle:`Bluetooth delen`,title:`Geef toegang tot bluetooth`},[m.location]:{iconName:`map-marker`,paragraph:`Ga naar Instellingen en geef de app toegang tot uw locatie.`,permission:m.location,screenTitle:`Locatie delen`,title:`Geef uw locatie door`},[m.notifications]:{iconName:`bell-off`,paragraph:`Ga naar Instellingen en zet de meldingen aan.`,permission:m.notifications,screenTitle:`Pushmeldingen`,title:`U ontvangt geen pushmeldingen`}},H=e=>{let{navigate:t}=T();return(0,B.useCallback)(()=>t(O.permissionInstructions,V[e]),[t,e])}})),U,W,G,K,je=t((()=>{U=e(n()),_e(),ye(),Te(),fe(),xe(),Ce(),pe(),he(),w(),ke(),Ae(),u(),W=r(),G=({children:e})=>(0,W.jsx)(ve,{borderColor:`default`,borderStyle:`solid`,borderWidth:`md`,grow:!0,children:e}),K=({description:e,value:t,testID:n,onChange:r,disabled:i,loading:a,error:o})=>{let s=H(m.notifications),c=C(),{registerDeviceIfPermitted:l}=z(),[u,d]=(0,U.useState)(!1),f=(0,U.useCallback)(()=>{d(!0),t?r(!1):l(!0).then(e=>{e?r(!0):s()})},[r,t,l,s]);return(0,U.useEffect)(()=>{u&&c(t?`aangezet`:`uitgezet`)},[c,u,t]),(0,W.jsxs)(y,{gutter:`smd`,children:[(0,W.jsx)(S,{accessibilityLabel:`${e} staat ${t?`aan`:`uit`}`,disabled:i,hasLoadingPlaceholder:!0,label:(0,W.jsxs)(y,{grow:1,gutter:`sm`,children:[(0,W.jsxs)(Se,{gutter:`sm`,children:[(0,W.jsx)(we,{name:`bell`,size:`lg`,testID:`${n}Icon`}),(0,W.jsx)(ge,{level:`h5`,text:`Meldingen`})]}),(0,W.jsx)(me,{children:e})]}),loading:a,onChange:f,testID:`${n}Switch`,value:t,wrapper:G}),!!o&&(0,W.jsx)(be,{text:o,variant:`negative`})]})};try{K.displayName=`NotificationToggleBox`,K.__docgenInfo={description:``,displayName:`NotificationToggleBox`,filePath:`/Users/runner/work/1/s/src/components/features/NotificationToggleBox.tsx`,methods:[],props:{description:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`error`,required:!1,tags:{},type:{name:`string`}},loading:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`loading`,required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: boolean) => void`}},value:{defaultValue:null,declarations:[{fileName:`s/src/components/features/NotificationToggleBox.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`boolean`}},testID:{defaultValue:null,declarations:[{fileName:`s/src/components/ui/types.ts`,name:`TypeLiteral`}],description:``,name:`testID`,required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}},tags:{}}}catch{}})),q,J,Y,X,Z,Q,$;t((()=>{je(),{action:q}=__STORYBOOK_MODULE_ACTIONS__,J={component:K,parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3537&t=p02Fvd5Y2LMm8mP3-4`}}},Y={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!0,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5679-3301&t=p02Fvd5Y2LMm8mP3-4`}}},X={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5139-3564&t=p02Fvd5Y2LMm8mP3-4`}}},Z={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,onChange:q(`onChange`),error:`Meldingen konden niet worden aangezet. Controleer uw internetverbinding en probeer het opnieuw.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5689-3736&t=p02Fvd5Y2LMm8mP3-4`}}},Q={args:{description:`U ontvangt meldingen over ophaaldagen voor ‘Mijn adres’.`,testID:`Switch`,value:!1,loading:!0,onChange:q(`onChange`)},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/BEitX3UOKyDPzW84UnmELq/Pushmeldingen?node-id=5678-3242&t=p02Fvd5Y2LMm8mP3-4`}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
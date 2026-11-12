import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{dt as n,ft as r,m as i,n as a,p as o}from"./dist-jTNdXIQ3.js";import{_t as s,mt as c,pt as l,vt as u}from"./modules-F96guVOH.js";import{i as d,o as f,r as p,s as m}from"./types-BRhDahbG.js";import{n as h,t as g}from"./Size-Muw6ljLo.js";import{n as _,t as v}from"./useThemable-oU5TJ-HA.js";import{n as y,t as b}from"./Phrase-BmXHNYej.js";import{n as x,t as S}from"./Row-C4DuP0r8.js";import{n as C,t as w}from"./Icon-Dt67wdZa.js";import{n as T,t as E}from"./Box-w_4JFajr.js";import{n as D,t as O}from"./useNavigation-BwfC2ak3.js";import{n as k,r as A,t as j}from"./components-Ccwl9P0d.js";import{i as M,n as N,o as P,r as F,s as I,t as L}from"./boat-charging-BBnfxb_Y.js";var R;function z(){return(z=e((()=>{m(),R=(e,t,n)=>{if(!e)return``;switch(e.nrg_status){case d.Charging:return n?`Laden - ${n}`:`Laden`;case d.Starting:return`Het laden wordt gestart`;case d.Stopping:return`Het laden wordt gestopt`;case d.Completed:case d.Cancelled:return`Het laden is gestopt`;default:return t?`Start laden`:`Stekker aansluiten`}}})))()}var B,V,H,U,W;function G(){return(G=e((()=>{a(),T(),x(),C(),y(),O(),P(),F(),u(),z(),v(),B=t(),V=()=>{let{navigate:e}=D(),{session:t,isPluggedIn:n,chargingTimeVeryShortString:r}=I();return t?(0,B.jsx)(H,{onPress:()=>e(s.activeSessionDetails,{id:t.id}),text:R(t,n,r)}):null},H=({onPress:e,text:t})=>{let n=_(W);return(0,B.jsx)(o,{accessibilityLabel:t,accessibilityRole:`button`,onPress:e,style:n.container,children:(0,B.jsx)(E,{insetHorizontal:`md`,insetVertical:`sm`,children:(0,B.jsxs)(S,{align:`between`,gutter:`md`,children:[(0,B.jsxs)(S,{gutter:`sm`,children:[(0,B.jsx)(w,{color:`inverse`,isFilled:!0,name:`lightning`,size:`lg`}),(0,B.jsx)(b,{color:`inverse`,emphasis:`strong`,children:t})]}),(0,B.jsx)(w,{color:`inverse`,name:`chevron-right`})]})})})},U=()=>{let{activeSessions:e}=M(),{navigate:t}=D();return e?.length?e.length===1?(0,B.jsx)(L,{id:e[0].id,children:(0,B.jsx)(V,{})}):(0,B.jsx)(H,{onPress:()=>t(s.activeSessions),text:`${e.length} actieve laadsessies`}):null},W=({color:e})=>r.create({container:{backgroundColor:e.boatCharging.sessionBar.background}})})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{h(),c(),G(),m(),j(),F(),K=t(),q={created_date_time:`2026-01-01T10:00:00Z`,currency:`EUR`,email:`app@amsterdam.nl`,id:`session-1`,kwh:1,location:{address:{bagId:`address-1`,city:l.Amsterdam,number:1,postcode:`1011AB`,street:`Amstel`},available_sockets:1,id:`location-1`,max_kw:22,name:`Amstel`,opening_times:{exceptional_closings:[],exceptional_openings:[],regular_hours:[],twentyfourseven:!0},status:p.OPERATIVE,total_sockets:2},nrg_status:d.Charging,socket_number:`1`,start_date_time:`2026-01-01T10:00:00Z`,station_id:`station-1`,status:f.ACTIVE,total_cost:1},J={component:U},Y={decorators:[e=>(0,K.jsx)(N,{chargingTimeVeryShortString:`1u 23m`,sessions:[q],children:(0,K.jsx)(e,{})})]},X={decorators:[e=>(0,K.jsx)(N,{sessions:[q,{...q,id:`session-2`},{...q,id:`session-3`}],children:(0,K.jsx)(e,{})})]},Z={decorators:[e=>(0,K.jsx)(k,{highlight:!0,children:(0,K.jsx)(g,{height:40,children:(0,K.jsx)(N,{sessions:[],children:(0,K.jsx)(e,{})})})})]},Q=[`SingleActiveSession`,`MultipleActiveSessions`,`NoActiveSessions`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <BoatChargingStorybookProvider chargingTimeVeryShortString="1u 23m" sessions={[session]}>
        <Story />
      </BoatChargingStorybookProvider>]
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <BoatChargingStorybookProvider sessions={[session, {
    ...session,
    id: 'session-2'
  }, {
    ...session,
    id: 'session-3'
  }]}>
        <Story />
      </BoatChargingStorybookProvider>]
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Canvas highlight>
        <Size height={40}>
          <BoatChargingStorybookProvider sessions={[]}>
            <Story />
          </BoatChargingStorybookProvider>
        </Size>
      </Canvas>]
}`,...Z.parameters?.docs?.source}}}})))()}$();export{X as MultipleActiveSessions,Z as NoActiveSessions,Y as SingleActiveSession,Q as __namedExportsOrder,J as default};
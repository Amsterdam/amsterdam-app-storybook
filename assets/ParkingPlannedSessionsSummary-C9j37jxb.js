import{j as e}from"./jsx-runtime-DNHyKP0h.js";import{P as t}from"./Pressable-C0uSci4h.js";import{B as a}from"./Badge-Ca_gWj_B.js";import{P as o}from"./PleaseWait-B-TslK9S.js";import{C as l}from"./Column-DsjRLnoY.js";import{R as m}from"./Row-CogBqcx0.js";import{P}from"./Phrase-BBwiQVsn.js";import{T as r}from"./Title-WKnYxVv0.js";import{u as g}from"./useNavigation-CU7ba_Tq.js";import{u as d}from"./useGetParkingSessions-CjIISndC.js";import{P as p}from"./routes-CNopwT4i.js";const b=()=>{const{navigate:n}=g(),{parkingSessions:s,isLoading:i}=d();return i?e.jsx(o,{testID:"ParkingPermitSessionsPlannedPleaseWait"}):s!=null&&s.length?e.jsx(t,{accessibilityLabel:`${s.length} geplande parkeersessies`,onPress:()=>n(p.parkingPlannedSessions),testID:"ParkingPermitSessionsPlannedBadgePressable",children:e.jsxs(m,{gutter:"sm",children:[e.jsx(r,{color:"link",level:"h5",testID:"ParkingPermitSessionsPlannedTitle",text:"Gepland"}),e.jsx(a,{color:"info",testID:"ParkingPermitSessionsPlannedBadge",value:s.length})]})}):e.jsxs(l,{gutter:"sm",children:[e.jsx(r,{level:"h5",testID:"ParkingPermitSessionsPlannedTitle",text:"Gepland"}),e.jsx(P,{testID:"ParkingPermitSessionsPlannedNoPlannedPhrase",children:"Er zijn geen geplande parkeersessies."})]})};export{b as P};

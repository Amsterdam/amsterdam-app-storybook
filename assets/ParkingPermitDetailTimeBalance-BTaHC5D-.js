import{j as e}from"./jsx-runtime-BlAj40OV.js";import{C as n}from"./Column-BySxSqfy.js";import{P as s}from"./Phrase-2Ga4jqzY.js";import{T as p}from"./Title-Dz6VbWOM.js";import{c as u}from"./convertMillisecondsToHoursAndMinutes-Cf0hnsz_.js";import{f as P}from"./formatNumber-BzL2NUET.js";const m=({permit:r})=>{if(!r)return null;const{permit_name:l,time_balance:t,parking_rate:a}=r,i=u(t),o=t?`${i[0]} uur ${i[1]} min`:"Onbeperkt",c=a.value?`${P(a.value,!0)} per uur`:"Gratis";return e.jsxs(n,{gutter:"xs",children:[e.jsx(p,{level:"h5",testID:"ParkingPermitDetailNamePhrase",text:l}),e.jsxs(n,{children:[e.jsx(s,{testID:"ParkingPermitDetailTimeBalancePhrase",children:`Parkeertijd: ${o}`}),e.jsx(s,{testID:"ParkingPermitDetailParkingRatePhrase",children:`Parkeertarief: ${c}`})]})]})};try{m.displayName="ParkingPermitDetailTimeBalance",m.__docgenInfo={description:"",displayName:"ParkingPermitDetailTimeBalance",props:{permit:{defaultValue:null,description:"",name:"permit",required:!0,type:{name:"ParkingPermit"}}}}}catch{}export{m as P};

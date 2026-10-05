import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{l as r,s as i}from"./getAllowedData-Ctsd4o27.js";import{nn as a}from"./modules-CIv7LB8N.js";import{o,r as ee}from"./development-CkepKbRr.js";import{a as s,n as c,o as l,v as u}from"./types-CWtCEhGS.js";import{a as d,i as f,n as p,o as m,r as h,s as g}from"./parking-i-EdQvES.js";import{n as _,t as v}from"./Column-Bl1jdUjd.js";import{n as y,t as b}from"./useTrackException-BKvmXqYC.js";import{n as x,t as S}from"./Button-BWRpkLE1.js";import{n as C,t as w}from"./Box-BenAzvSF.js";import{i as T,o as E,r as D}from"./index.esm-C0XVTjdB.js";import{n as O,t as k}from"./useBottomSheet-BbZfAwhP.js";import{n as A,t as j}from"./ParkingSessionLicensePlateFormProvider-BJZz4wtN.js";import{n as te,t as M}from"./ParkingSessionAddLicensePlate-7RVYycVX.js";import{n as N,t as P}from"./ParkingSessionSelectLicensePlate-BDcCYKN5.js";import{n as F,t as I}from"./ParkingSessionFormProvider-Dzv3dHcL.js";var L,R,z;function B(){return(B=e((()=>{L=t(),D(),k(),x(),p(),o(),b(),R=n(),z=({setLicensePlate:e})=>{let{close:t}=O(),{handleSubmit:n,reset:r}=E(),{saveLicensePlate:a,editLicensePlate:o,isLoadingAddLicensePlate:s,isLoadingEditLicensePlate:c,isErrorAddLicensePlate:l,isErrorEditLicensePlate:u}=d(),{licensePlates:p}=f(),m=y(),h=(0,L.useCallback)(async n=>{let s=p?.find(({vehicle_id:e})=>e===n.vehicle_id);try{n.visitor_name&&(s?s.visitor_name!==n.visitor_name&&await o({id:s.id,vehicle_id:s.vehicle_id,visitor_name:n.visitor_name}):await a({vehicle_id:n.vehicle_id,visitor_name:n.visitor_name})),e({...s,...n}),t(),r()}catch(e){ee(e),m(i.parkingLicensePlate,`ParkingSessionAddLicensePlateSubmitButton.tsx`,{error:e})}},[p,t,m,r,e,a,o]);return(0,R.jsx)(S,{isError:l||u,isLoading:s||c,label:`Gereed`,onPress:n(h),testID:`ParkingSessionAddLicensePlateSubmitButton`})};try{z.displayName=`ParkingSessionAddLicensePlateSubmitButton`,z.__docgenInfo={description:``,displayName:`ParkingSessionAddLicensePlateSubmitButton`,filePath:`/Users/runner/work/1/s/src/modules/parking/components/form/bottomsheet/ParkingSessionAddLicensePlateSubmitButton.tsx`,methods:[],props:{setLicensePlate:{defaultValue:null,declarations:[{fileName:`s/src/modules/parking/components/form/bottomsheet/ParkingSessionAddLicensePlateSubmitButton.tsx`,name:`TypeLiteral`}],description:``,name:`setLicensePlate`,required:!0,tags:{},type:{name:`(licensePlate: Optional<ParkingLicensePlate, "id" | "visitor_name">) => void`}}},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{D(),C(),_(),te(),A(),N(),B(),p(),l(),s(),V=n(),H=()=>{let e=h(),{watch:t}=E(),n=u(),{field:{onChange:r}}=T({name:`licensePlate`}),{forced_license_plate_list:i}=e;return(0,V.jsx)(w,{grow:!0,children:(0,V.jsx)(j,{defaultValues:{vehicle_id:t(`licensePlate`)?.vehicle_id},children:(0,V.jsxs)(v,{grow:1,gutter:`lg`,children:[!i&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(M,{}),(0,V.jsx)(z,{setLicensePlate:r})]}),n?.scope===c.permitHolder&&(0,V.jsx)(P,{setLicensePlate:r})]})})})}})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{F(),U(),a(),m(),W=n(),G=Array.from({length:10},(e,t)=>({id:String(t+1),vehicle_id:`CAR${t+1}`,visitor_name:`Bezoeker ${t+1}`})),K={component:H,decorators:[e=>(0,W.jsx)(I,{children:(0,W.jsx)(e,{})})],parameters:{bottomSheet:{isOpen:!0}}},q={},J={parameters:{parking:{isLoadingLicensePlates:!0}}},Y={parameters:{parking:{licensePlates:[]}}},X={parameters:{parking:{currentPermit:{...g,forced_license_plate_list:!0}}}},Z={parameters:{parking:{licensePlates:G}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    parking: {
      isLoadingLicensePlates: true
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    parking: {
      licensePlates: []
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    parking: {
      currentPermit: {
        ...permitMock,
        forced_license_plate_list: true
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    parking: {
      licensePlates: maximumLicensePlates
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Loading`,`NoSavedLicensePlates`,`ForceLicensePlateList`,`MaximumSavedLicensePlatesAvailable`]})))()}$();export{q as Default,X as ForceLicensePlateList,J as Loading,Z as MaximumSavedLicensePlatesAvailable,Y as NoSavedLicensePlates,Q as __namedExportsOrder,K as default};
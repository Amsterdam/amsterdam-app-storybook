import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{o as r,r as i}from"./development-CkepKbRr.js";import{l as a,s as o}from"./getAllowedData-BPrLHxrJ.js";import{Ut as s}from"./modules-CS8q0_GW.js";import{a as c,n as l,o as u,v as d}from"./types-CqflC6hM.js";import{a as f,i as p,n as m,o as h,r as g,s as _}from"./parking-CkBS_qb3.js";import{n as v,t as y}from"./Column-BvqmQHm7.js";import{n as b,t as x}from"./useTrackException-DzBlFunV.js";import{n as S,t as C}from"./Button-CJuk-tjv.js";import{n as w,t as T}from"./Box-CIMHNmhH.js";import{i as E,o as D,r as O}from"./index.esm-C0XVTjdB.js";import{n as k,t as A}from"./useBottomSheet-BbZfAwhP.js";import{n as j,t as ee}from"./ParkingSessionLicensePlateFormProvider-BsEfZK-0.js";import{n as te,t as M}from"./ParkingSessionAddLicensePlate-73p_Nob1.js";import{n as N,t as P}from"./ParkingSessionSelectLicensePlate-BwPqk2cv.js";import{n as F,t as I}from"./ParkingSessionFormProvider-BWMYxXsR.js";var L,R,z;function B(){return(B=e((()=>{L=t(),O(),A(),S(),m(),r(),x(),R=n(),z=({setLicensePlate:e})=>{let{close:t}=k(),{handleSubmit:n,reset:r}=D(),{saveLicensePlate:a,editLicensePlate:s,isLoadingAddLicensePlate:c,isLoadingEditLicensePlate:l,isErrorAddLicensePlate:u,isErrorEditLicensePlate:d}=f(),{licensePlates:m}=p(),h=b(),g=(0,L.useCallback)(async n=>{let c=m?.find(({vehicle_id:e})=>e===n.vehicle_id);try{n.visitor_name&&(c?c.visitor_name!==n.visitor_name&&await s({id:c.id,vehicle_id:c.vehicle_id,visitor_name:n.visitor_name}):await a({vehicle_id:n.vehicle_id,visitor_name:n.visitor_name})),e({...c,...n}),t(),r()}catch(e){i(e),h(o.parkingLicensePlate,`ParkingSessionAddLicensePlateSubmitButton.tsx`,{error:e})}},[m,t,h,r,e,a,s]);return(0,R.jsx)(C,{isError:u||d,isLoading:c||l,label:`Gereed`,onPress:n(g),testID:`ParkingSessionAddLicensePlateSubmitButton`})};try{z.displayName=`ParkingSessionAddLicensePlateSubmitButton`,z.__docgenInfo={description:``,displayName:`ParkingSessionAddLicensePlateSubmitButton`,filePath:`/Users/runner/work/1/s/src/modules/parking/components/form/bottomsheet/ParkingSessionAddLicensePlateSubmitButton.tsx`,methods:[],props:{setLicensePlate:{defaultValue:null,declarations:[{fileName:`s/src/modules/parking/components/form/bottomsheet/ParkingSessionAddLicensePlateSubmitButton.tsx`,name:`TypeLiteral`}],description:``,name:`setLicensePlate`,required:!0,tags:{},type:{name:`(licensePlate: Optional<ParkingLicensePlate, "id" | "visitor_name">) => void`}}},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{O(),w(),v(),B(),te(),j(),N(),m(),u(),c(),V=n(),H=()=>{let e=g(),{watch:t}=D(),n=d(),{field:{onChange:r}}=E({name:`licensePlate`}),{forced_license_plate_list:i}=e;return(0,V.jsx)(T,{grow:!0,children:(0,V.jsx)(ee,{defaultValues:{vehicle_id:t(`licensePlate`)?.vehicle_id},children:(0,V.jsxs)(y,{grow:1,gutter:`lg`,children:[!i&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(M,{}),(0,V.jsx)(z,{setLicensePlate:r})]}),n?.scope===l.permitHolder&&(0,V.jsx)(P,{setLicensePlate:r})]})})})}})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{s(),h(),F(),U(),W=n(),G=Array.from({length:10},(e,t)=>({id:String(t+1),vehicle_id:`CAR${t+1}`,visitor_name:`Bezoeker ${t+1}`})),K={component:H,decorators:[e=>(0,W.jsx)(I,{children:(0,W.jsx)(e,{})})],parameters:{bottomSheet:{isOpen:!0}}},q={},J={parameters:{parking:{isLoadingLicensePlates:!0}}},Y={parameters:{parking:{licensePlates:[]}}},X={parameters:{parking:{currentPermit:{..._,forced_license_plate_list:!0}}}},Z={parameters:{parking:{licensePlates:G}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-CAfMLIKe.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{o as r,r as i}from"./development-CUo89g7D.js";import{l as a,s as o}from"./getAllowedData-C1Q8xR6y.js";import{a as s,n as c,o as l,v as u}from"./types-DSqhYg7b.js";import{_n as d,a as f,i as p,n as m,o as h,r as g,s as _}from"./iframe--W_g0Y8R.js";import{n as v,t as y}from"./Column-BsCtkGvc.js";import{n as b,t as x}from"./useTrackException-ceiEnmlW.js";import{n as S,t as C}from"./Button-GxLRer2C.js";import{n as w,t as T}from"./Box-1E4Rg8uj.js";import{i as E,o as D,r as O}from"./index.esm-VbUden9Z.js";import{n as k,t as A}from"./useBottomSheet-BvvEOu4d.js";import{n as j,t as ee}from"./ParkingLicensePlateFormProvider-CDT88yl1.js";import{n as te,t as M}from"./ParkingSessionAddLicensePlate-tJKz5WSt.js";import{n as N,t as P}from"./ParkingSessionSelectLicensePlate-D3ThUU-S.js";import{n as F,t as I}from"./ParkingSessionFormProvider-CwcaF9Cy.js";var L,R,z;function B(){return(B=e((()=>{L=t(),O(),A(),S(),m(),r(),x(),R=n(),z=({setLicensePlate:e})=>{let{close:t}=k(),{handleSubmit:n,reset:r}=D(),{saveLicensePlate:a,editLicensePlate:s,isLoadingAddLicensePlate:c,isLoadingEditLicensePlate:l,isErrorAddLicensePlate:u,isErrorEditLicensePlate:d}=f(),{licensePlates:m}=p(),h=b(),g=(0,L.useCallback)(async n=>{let c=m?.find(({vehicle_id:e})=>e===n.vehicle_id);try{n.visitor_name&&(c?c.visitor_name!==n.visitor_name&&await s({id:c.id,vehicle_id:c.vehicle_id,visitor_name:n.visitor_name}):await a({vehicle_id:n.vehicle_id,visitor_name:n.visitor_name})),e({...c,...n}),t(),r()}catch(e){i(e),h(o.parkingLicensePlate,`ParkingSessionAddLicensePlateSubmitButton.tsx`,{error:e})}},[m,t,h,r,e,a,s]);return(0,R.jsx)(C,{isError:u||d,isLoading:c||l,label:`Gereed`,onPress:n(g),testID:`ParkingSessionAddLicensePlateSubmitButton`})};try{z.displayName=`ParkingSessionAddLicensePlateSubmitButton`,z.__docgenInfo={description:``,displayName:`ParkingSessionAddLicensePlateSubmitButton`,filePath:`/Users/runner/work/1/s/src/modules/parking/components/form/bottomsheet/ParkingSessionAddLicensePlateSubmitButton.tsx`,methods:[],props:{setLicensePlate:{defaultValue:null,declarations:[{fileName:`s/src/modules/parking/components/form/bottomsheet/ParkingSessionAddLicensePlateSubmitButton.tsx`,name:`TypeLiteral`}],description:``,name:`setLicensePlate`,required:!0,tags:{},type:{name:`(licensePlate: Optional<ParkingLicensePlate, "id" | "visitor_name">) => void`}}},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{O(),w(),v(),B(),j(),te(),N(),m(),l(),s(),V=n(),H=()=>{let e=g(),{watch:t}=D(),n=u(),{field:{onChange:r}}=E({name:`licensePlate`}),{forced_license_plate_list:i}=e;return(0,V.jsx)(T,{grow:!0,children:(0,V.jsx)(y,{grow:1,gutter:`lg`,children:(0,V.jsxs)(ee,{defaultValues:{vehicle_id:t(`licensePlate`)?.vehicle_id},children:[!i&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(M,{}),(0,V.jsx)(z,{setLicensePlate:r})]}),n?.scope===c.permitHolder&&(0,V.jsx)(P,{setLicensePlate:r})]})})})}})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{d(),h(),F(),U(),W=n(),G=Array.from({length:10},(e,t)=>({id:String(t+1),vehicle_id:`CAR${t+1}`,visitor_name:`Bezoeker ${t+1}`})),K={component:H,decorators:[e=>(0,W.jsx)(I,{children:(0,W.jsx)(e,{})})],parameters:{bottomSheet:{isOpen:!0}}},q={},J={parameters:{parking:{isLoadingLicensePlates:!0}}},Y={parameters:{parking:{licensePlates:[]}}},X={parameters:{parking:{currentPermit:{..._,forced_license_plate_list:!0}}}},Z={parameters:{parking:{licensePlates:G}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
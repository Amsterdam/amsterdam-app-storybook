import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,n as r}from"./dayjs-BiQ3A2lT.js";import{d as i,f as a}from"./service-WyTt8Dcs.js";import{n as o,r as s}from"./parking-DmASlDso.js";import{n as c,t as l}from"./Column-AVvcIRQl.js";import{n as u,t as d}from"./Phrase-Bpxtut1J.js";import{n as f,t as p}from"./Title-BWaJaz2U.js";import{n as m,t as h}from"./Box-CTAA4PwM.js";import{n as g,t as _}from"./useNavigation-BwfC2ak3.js";import{n as v,t as y}from"./NavigationButton-DEPpL2QP.js";var b,x;function S(){return(S=e((()=>{v(),m(),c(),u(),f(),_(),o(),a(),n(),b=t(),x=({licensePlate:{activated_at:e,id:t,is_future:n,vehicle_id:a,visitor_name:o},number:c})=>{let{forced_license_plate_list:u}=s(),f=`${a}${o?` - `+o:``}`,{navigate:m}=g(),_=`${n?`-`:c+`.`}  ${f}`,v=n&&e?`Actief vanaf ${r(e).format(`D MMMM YYYY`)}`:void 0;return u?(0,b.jsx)(h,{insetHorizontal:`no`,insetVertical:`sm`,children:(0,b.jsxs)(l,{shrink:1,children:[(0,b.jsx)(p,{accessibilityLabel:`Kenteken ${f}`,color:`link`,level:`h5`,testID:`NavigationButtonTitle`,text:_}),!!v&&(0,b.jsx)(d,{children:v})]})}):(0,b.jsx)(y,{accessibilityLabel:`Kenteken ${f}`,chevronColor:`secondary`,chevronSize:`lg`,description:v,insetHorizontal:`no`,onPress:()=>{u||m(i.editLicensePlate,{licensePlateId:t})},testID:`LicensePlateListItemNavigationButton`,title:_})};try{x.displayName=`LicensePlateListItem`,x.__docgenInfo={description:``,displayName:`LicensePlateListItem`,filePath:`/Users/runner/work/1/s/src/modules/parking/components/license-plates/LicensePlateListItem.tsx`,methods:[],props:{licensePlate:{defaultValue:null,declarations:[{fileName:`s/src/modules/parking/components/license-plates/LicensePlateListItem.tsx`,name:`TypeLiteral`}],description:``,name:`licensePlate`,required:!0,tags:{},type:{name:`ParkingLicensePlate`}},number:{defaultValue:null,declarations:[{fileName:`s/src/modules/parking/components/license-plates/LicensePlateListItem.tsx`,name:`TypeLiteral`}],description:``,name:`number`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var C,w,T,E;function D(){return(D=e((()=>{S(),C={component:x},w={args:{licensePlate:{id:`3`,vehicle_id:`ABC123`,visitor_name:`John Doe`},number:`1`}},T={args:{licensePlate:{id:`3`,vehicle_id:`123ABC`,is_future:!0,activated_at:`2027-01-01`},number:`1`}},E=[`Default`,`Future`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    licensePlate: {
      id: '3',
      vehicle_id: 'ABC123',
      visitor_name: 'John Doe'
    },
    number: '1'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    licensePlate: {
      id: '3',
      vehicle_id: '123ABC',
      is_future: true,
      activated_at: '2027-01-01'
    },
    number: '1'
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{w as Default,T as Future,E as __namedExportsOrder,C as default};
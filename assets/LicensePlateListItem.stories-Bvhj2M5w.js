import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{Bn as n,U as r,Un as i,W as a}from"./iframe-3yS4WWyz.js";import{n as o,t as s}from"./useNavigation-DxvzlRLK.js";import{n as c,t as l}from"./NavigationButton-DjxLf_p4.js";var u,d,f=e((()=>{c(),s(),a(),i(),u=t(),d=({licensePlate:{activated_at:e,id:t,is_future:i,vehicle_id:a,visitor_name:s},number:c})=>{let d=`${a}${s?` - `+s:``}`,{navigate:f}=o();return(0,u.jsx)(l,{accessibilityLabel:`Kenteken ${d}`,chevronColor:`secondary`,chevronSize:`lg`,description:i&&e?`Actief vanaf ${n(e).format(`D MMMM YYYY`)}`:void 0,insetHorizontal:`no`,onPress:()=>f(r.editLicensePlate,{licensePlateId:t}),testID:`LicensePlateListItemNavigationButton`,title:`${i?`-`:c+`.`}  ${d}`})};try{d.displayName=`LicensePlateListItem`,d.__docgenInfo={description:``,displayName:`LicensePlateListItem`,filePath:`/Users/runner/work/1/s/src/modules/parking/components/license-plates/LicensePlateListItem.tsx`,methods:[],props:{licensePlate:{defaultValue:null,declarations:[{fileName:`s/src/modules/parking/components/license-plates/LicensePlateListItem.tsx`,name:`TypeLiteral`}],description:``,name:`licensePlate`,required:!0,tags:{},type:{name:`ParkingLicensePlate`}},number:{defaultValue:null,declarations:[{fileName:`s/src/modules/parking/components/license-plates/LicensePlateListItem.tsx`,name:`TypeLiteral`}],description:``,name:`number`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),p,m,h,g;e((()=>{f(),p={component:d},m={args:{licensePlate:{id:`3`,vehicle_id:`ABC123`,visitor_name:`John Doe`},number:`1`}},h={args:{licensePlate:{id:`3`,vehicle_id:`123ABC`,is_future:!0,activated_at:`2027-01-01`},number:`1`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    licensePlate: {
      id: '3',
      vehicle_id: 'ABC123',
      visitor_name: 'John Doe'
    },
    number: '1'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    licensePlate: {
      id: '3',
      vehicle_id: '123ABC',
      is_future: true,
      activated_at: '2027-01-01'
    },
    number: '1'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Future`]}))();export{m as Default,h as Future,g as __namedExportsOrder,p as default};
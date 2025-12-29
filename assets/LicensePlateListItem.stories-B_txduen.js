import{j as e,R as m,w as x,c as t,C as j,aY as b,l as L,I as f}from"./iframe-BtqLoN0l.js";import"./preload-helper-Dp1pzeXC.js";const i=({licensePlate:{activated_at:r,id:P,is_future:o,vehicle_id:n,visitor_name:s},isRemovable:g,number:c,onPressDelete:h})=>{const l=`${n}${s?" - "+s:""}`;return e.jsxs(m,{align:"between",gutter:"md",children:[e.jsx(x,{accessibilityLabel:`Kenteken ${l}`,children:e.jsxs(m,{gutter:"md",children:[e.jsx(t,{emphasis:"strong",flexShrink:0,children:o?"-":c+"."}),o&&r?e.jsxs(j,{children:[e.jsx(t,{emphasis:"strong",children:l}),e.jsxs(t,{children:["Actief vanaf ",b(r).format("D MMMM YYYY")]})]}):e.jsx(t,{emphasis:"strong",children:l})]})}),!!g&&e.jsx(L,{accessibilityLabel:`Verwijder kenteken ${n}${s?", "+s:""}`,icon:e.jsx(f,{color:"link",name:"trash-bin",size:"lg",testID:"ParkingRemoveLicensePlateIcon"}),logName:"ParkingRemoveLicensePlateButton",onPress:()=>h({id:P,vehicle_id:n,visitor_name:s}),testID:`ParkingRemoveLicensePlate${c}Button`})]},n)};try{i.displayName="LicensePlateListItem",i.__docgenInfo={description:"",displayName:"LicensePlateListItem",props:{isRemovable:{defaultValue:null,description:"",name:"isRemovable",required:!0,type:{name:"boolean"}},licensePlate:{defaultValue:null,description:"",name:"licensePlate",required:!0,type:{name:"ParkingLicensePlate"}},number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"string"}},onPressDelete:{defaultValue:null,description:"",name:"onPressDelete",required:!0,type:{name:"(licensePlate: ParkingLicensePlate) => void"}}}}}catch{}const k={component:i,argTypes:{onPressDelete:{action:"onPressDelete"}}},a={args:{licensePlate:{id:"3",vehicle_id:"ABC123",visitor_name:"John Doe"},isRemovable:!0}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  // @ts-expect-error as onPressDelete is missing
  args: {
    licensePlate: {
      id: '3',
      vehicle_id: 'ABC123',
      visitor_name: 'John Doe'
    },
    isRemovable: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,k as default};

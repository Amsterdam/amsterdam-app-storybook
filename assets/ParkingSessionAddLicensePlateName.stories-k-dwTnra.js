import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{Ut as n}from"./modules-C-WBUtT0.js";import{n as r,t as i}from"./licensePlates.mock-445CH3Ne.js";import{n as a,t as o}from"./Column-BsCtkGvc.js";import{n as s,t as c}from"./ParkingLicensePlateFormProvider-CDT88yl1.js";import{n as l,t as u}from"./ParkingSessionAddLicensePlateName-D6DyuNjZ.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a(),n(),i(),s(),l(),d=t(),f=Array.from({length:10},(e,t)=>({id:String(t+1),vehicle_id:`CAR${t+1}`,visitor_name:`Bezoeker ${t+1}`})),p=({children:e,defaultValues:t})=>(0,d.jsx)(c,{defaultValues:t,children:e}),m={component:u,decorators:[e=>(0,d.jsx)(p,{children:(0,d.jsx)(e,{})})]},h={args:{licensePlates:r}},g={args:{licensePlates:r},decorators:[e=>(0,d.jsx)(o,{gutter:`md`,children:(0,d.jsx)(p,{defaultValues:{vehicle_id:r[0].vehicle_id},children:(0,d.jsx)(e,{})})})]},_={args:{licensePlates:f}},v=[`Default`,`ExistingSavedPlate`,`MaximumReached`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    licensePlates: licensePlatesMock
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    licensePlates: licensePlatesMock
  },
  decorators: [(Story: FC) => <Column gutter="md">
        <FormDecorator defaultValues={{
      vehicle_id: licensePlatesMock[0].vehicle_id
    }}>
          <Story />
        </FormDecorator>
      </Column>]
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    licensePlates: maximumLicensePlates
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as Default,g as ExistingSavedPlate,_ as MaximumReached,v as __namedExportsOrder,m as default};
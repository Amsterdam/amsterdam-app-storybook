import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{Ut as n}from"./modules-C68dsMMB.js";import{n as r,t as i}from"./licensePlates.mock-DBJoPnM-.js";import{n as a,t as o}from"./Column-CvqKNF7r.js";import{i as s,n as c,r as l,t as u}from"./ParkingSessionLicensePlateFormProvider-D3ida2-D.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s(),c(),a(),n(),i(),d=t(),f=Array.from({length:10},(e,t)=>({id:String(t+1),vehicle_id:`CAR${t+1}`,visitor_name:`Bezoeker ${t+1}`})),p=({children:e,defaultValues:t})=>(0,d.jsx)(u,{defaultValues:t,children:e}),m={component:l,decorators:[e=>(0,d.jsx)(p,{children:(0,d.jsx)(e,{})})]},h={args:{licensePlates:r}},g={args:{licensePlates:r},decorators:[e=>(0,d.jsx)(o,{gutter:`md`,children:(0,d.jsx)(p,{defaultValues:{vehicle_id:r[0].vehicle_id},children:(0,d.jsx)(e,{})})})]},_={args:{licensePlates:f}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`ExistingSavedPlate`,`MaximumReached`]})))()}y();export{h as Default,g as ExistingSavedPlate,_ as MaximumReached,v as __namedExportsOrder,m as default};
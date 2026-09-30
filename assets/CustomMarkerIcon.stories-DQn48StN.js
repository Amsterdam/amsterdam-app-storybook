import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i}from"./types-ENSf2XJ6.js";import{n as a,t as o}from"./themes-CPnCX-kY.js";import{n as s,t as c}from"./Column-sXaTAOG2.js";import{n as l,t as u}from"./Row-uEyil4ey.js";import{n as d,t as f}from"./CustomMarkerIcon-D95Y_sy6.js";import{n as p,t as m}from"./boatChargingPointStateMap-Bk2cIQEh.js";var h,g,_,v,y;function b(){return(b=e((()=>{d(),s(),l(),p(),r(),o(),h=t(),g=n(),_={component:f,parameters:{backgrounds:{default:`custom-grey0`}}},v={render:e=>(0,g.jsx)(c,{gutter:`md`,children:[m[i.free],m[i.occupied],m[i.malfunction]].map(({icon:t})=>(0,g.jsx)(u,{gutter:`md`,children:Object.values(a.light.size.spacing).map(n=>(0,h.createElement)(f,{...e,icon:t,key:`${t.path}-${n}`,size:n}))},t.path))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} key={\`\${icon.path}-\${size}\`} size={size} />)}
        </Row>)}
    </Column>
}`,...v.parameters?.docs?.source}}},y=[`Default`]})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};
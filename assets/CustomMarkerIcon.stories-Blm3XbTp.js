import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i}from"./types-ENSf2XJ6.js";import{n as a,t as o}from"./themes-DE0FOsOC.js";import{n as s,t as c}from"./Column-BvqmQHm7.js";import{n as l,t as u}from"./Row-v3fgv-Eo.js";import{n as d,t as f}from"./boatChargingPointStateMap-DLas5n4m.js";import{n as p,t as m}from"./CustomMarkerIcon-B56jk8kJ.js";var h,g,_,v,y;function b(){return(b=e((()=>{s(),l(),d(),r(),o(),p(),h=t(),g=n(),_={component:m,parameters:{backgrounds:{default:`custom-grey0`}}},v={render:e=>(0,g.jsx)(c,{gutter:`md`,children:[f[i.free],f[i.occupied],f[i.malfunction]].map(({icon:t})=>(0,g.jsx)(u,{gutter:`md`,children:Object.values(a.light.size.spacing).map(n=>(0,h.createElement)(m,{...e,icon:t,key:`${t.path}-${n}`,size:n}))},t.path))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} key={\`\${icon.path}-\${size}\`} size={size} />)}
        </Row>)}
    </Column>
}`,...v.parameters?.docs?.source}}},y=[`Default`]})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};
import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-D0Y92gk6.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{n as i,t as a}from"./themes-DJm09e_B.js";import{In as o,Rn as s}from"./iframe-3yS4WWyz.js";import{n as c,t as l}from"./Column-faNk8JAf.js";import{n as u,t as d}from"./Row-DRybBG76.js";import{n as f,t as p}from"./CustomMarkerIcon-BeSx8arj.js";import{n as m,t as h}from"./boatChargingPointStateMap-CnydfatK.js";var g,_,v,y,b;t((()=>{f(),c(),u(),m(),s(),a(),g=e(n()),_=r(),v={component:p,parameters:{backgrounds:{default:`custom-grey0`}}},y={render:e=>(0,_.jsx)(l,{gutter:`md`,children:[h[o.free],h[o.occupied],h[o.malfunction]].map(({icon:t})=>(0,_.jsx)(d,{gutter:`md`,children:Object.values(i.light.size.spacing).map(n=>(0,g.createElement)(p,{...e,icon:t,key:`${t.path}-${n}`,size:n}))},t.path))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} key={\`\${icon.path}-\${size}\`} size={size} />)}
        </Row>)}
    </Column>
}`,...y.parameters?.docs?.source}}},b=[`Default`]}))();export{y as Default,b as __namedExportsOrder,v as default};
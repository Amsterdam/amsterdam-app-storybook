import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-D0Y92gk6.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{n as i,t as a}from"./themes-C7yDjynq.js";import{n as o,t as s}from"./Column-DwlMsa4v.js";import{n as c,t as l}from"./Row-DrJ4o8pY.js";import{n as u,t as d}from"./CustomMarkerIcon-D9OHSP7M.js";import{r as f,t as p}from"./types-CpSvn75W.js";import{n as m,t as h}from"./boatChargingPointStateMap-DYIR3Z8G.js";var g,_,v,y,b;t((()=>{u(),o(),c(),m(),f(),a(),g=e(n()),_=r(),v={component:d,parameters:{backgrounds:{default:`custom-grey0`}}},y={render:e=>(0,_.jsx)(s,{gutter:`md`,children:[h[p.free],h[p.occupied],h[p.malfunction]].map(({icon:t})=>(0,_.jsx)(l,{gutter:`md`,children:Object.values(i.light.size.spacing).map(n=>(0,g.createElement)(d,{...e,icon:t,key:`${t.path}-${n}`,size:n}))},t.path))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} key={\`\${icon.path}-\${size}\`} size={size} />)}
        </Row>)}
    </Column>
}`,...y.parameters?.docs?.source}}},b=[`Default`]}))();export{y as Default,b as __namedExportsOrder,v as default};
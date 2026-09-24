import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-D0Y92gk6.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{n as i,t as a}from"./themes-DTuUnrxw.js";import{xr as o,yr as s}from"./iframe-DR5ufP5T.js";import{n as c,t as l}from"./Column-BYF0i3qO.js";import{n as u,t as d}from"./Row-4ORxbr5A.js";import{n as f,t as p}from"./CustomMarkerIcon-cFcZYuuJ.js";import{n as m,t as h}from"./boatChargingPointStateMap-BXOdqbq3.js";var g,_,v,y,b;t((()=>{f(),c(),u(),m(),o(),a(),g=e(n()),_=r(),v={component:p,parameters:{backgrounds:{default:`custom-grey0`}}},y={render:e=>(0,_.jsx)(l,{gutter:`md`,children:[h[s.free],h[s.occupied],h[s.malfunction]].map(({icon:t})=>(0,_.jsx)(d,{gutter:`md`,children:Object.values(i.light.size.spacing).map(n=>(0,g.createElement)(p,{...e,icon:t,key:`${t.path}-${n}`,size:n}))},t.path))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} key={\`\${icon.path}-\${size}\`} size={size} />)}
        </Row>)}
    </Column>
}`,...y.parameters?.docs?.source}}},b=[`Default`]}))();export{y as Default,b as __namedExportsOrder,v as default};
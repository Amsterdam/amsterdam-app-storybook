import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{n,t as r}from"./themes-CPL5QTT9.js";import{n as i,t as a}from"./Row-BlvzGxFr.js";import{n as o,t as s}from"./Column-xz1-9-eQ.js";import{n as c,t as l}from"./CustomMarkerIcon-05beVDTZ.js";import{r as u,t as d}from"./types-CpSvn75W.js";import{n as f,t as p}from"./boatChargingPointStateMap-B-RIcoe7.js";var m,h,g,_;e((()=>{c(),o(),i(),f(),u(),r(),m=t(),h={component:l,parameters:{backgrounds:{default:`custom-grey0`}}},g={render:e=>(0,m.jsx)(s,{gutter:`md`,children:[p[d.free],p[d.occupied],p[d.malfunction]].map(({icon:t})=>(0,m.jsx)(a,{gutter:`md`,children:Object.values(n.light.size.spacing).map(n=>(0,m.jsx)(l,{...e,icon:t,size:n}))},t.path))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} size={size} />)}
        </Row>)}
    </Column>
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};
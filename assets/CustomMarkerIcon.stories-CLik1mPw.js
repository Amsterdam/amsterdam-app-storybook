import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{n,t as r}from"./themes-CD6JESjQ.js";import{n as i,t as a}from"./Column-CNh212oZ.js";import{n as o,t as s}from"./Row-CKqShsyO.js";import{n as c,t as l}from"./CustomMarkerIcon-DM-r7nxW.js";import{r as u,t as d}from"./types-CpSvn75W.js";import{n as f,t as p}from"./boatChargingPointStateMap-DwCJGowF.js";var m,h,g,_;e((()=>{c(),i(),o(),f(),u(),r(),m=t(),h={component:l,parameters:{backgrounds:{default:`custom-grey0`}}},g={render:e=>(0,m.jsx)(a,{gutter:`md`,children:[p[d.free],p[d.occupied],p[d.malfunction]].map(({icon:t})=>(0,m.jsx)(s,{gutter:`md`,children:Object.values(n.light.size.spacing).map(n=>(0,m.jsx)(l,{...e,icon:t,size:n}))},t.path))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} size={size} />)}
        </Row>)}
    </Column>
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,h as default};
import{j as t,t as n}from"./iframe-DKTzX_I7.js";import{C as o,b as s,B as r}from"./boatChargingPointStateMap-BFdxV6yd.js";import{C as m}from"./Column-Bf_sC78o.js";import{R as c}from"./Row-jwpv1gOG.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-BGrs_O9d.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-Dsh8hX2T.js";const b={component:o,parameters:{backgrounds:{default:"custom-grey0"}}},a={render:i=>t.jsxs(m,{gutter:"md",children:[t.jsx(c,{gutter:"md",children:Object.values(n.light.size.spacing).map(e=>t.jsx(o,{...i,icon:s[r.free].icon,size:e}))}),t.jsx(c,{gutter:"md",children:Object.values(n.light.size.spacing).map(e=>t.jsx(o,{...i,icon:s[r.occupied].icon,size:e}))}),t.jsx(c,{gutter:"md",children:Object.values(n.light.size.spacing).map(e=>t.jsx(o,{...i,icon:s[r.malfunction].icon,size:e}))})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      <Row gutter="md">
        {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={boatChargingPointStateMap[BoatChargingPointState.free].icon} size={size} />)}
      </Row>
      <Row gutter="md">
        {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={boatChargingPointStateMap[BoatChargingPointState.occupied].icon} size={size} />)}
      </Row>

      <Row gutter="md">
        {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={boatChargingPointStateMap[BoatChargingPointState.malfunction].icon} size={size} />)}
      </Row>
    </Column>
}`,...a.parameters?.docs?.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,b as default};

import{j as t,t as n}from"./iframe-CBmHWZdj.js";import{C as o,b as s,B as r}from"./boatChargingPointStateMap-g-lR8hJG.js";import{C as m}from"./Column-C_6pdHdM.js";import{R as c}from"./Row-C3NJ_J5Q.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-CQt99ycW.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-Bu59I__a.js";const b={component:o,parameters:{backgrounds:{default:"custom-grey0"}}},a={render:i=>t.jsxs(m,{gutter:"md",children:[t.jsx(c,{gutter:"md",children:Object.values(n.light.size.spacing).map(e=>t.jsx(o,{...i,icon:s[r.free].icon,size:e}))}),t.jsx(c,{gutter:"md",children:Object.values(n.light.size.spacing).map(e=>t.jsx(o,{...i,icon:s[r.occupied].icon,size:e}))}),t.jsx(c,{gutter:"md",children:Object.values(n.light.size.spacing).map(e=>t.jsx(o,{...i,icon:s[r.malfunction].icon,size:e}))})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

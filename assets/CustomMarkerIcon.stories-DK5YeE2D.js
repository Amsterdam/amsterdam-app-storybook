import{j as a,t as s}from"./iframe-DZZ2FdSm.js";import{C as n}from"./CustomMarkerIcon-BpKkFRl0.js";import{C as p}from"./Column-6tj5b6-z.js";import{R as c}from"./Row-DQHM-mdT.js";import{b as o}from"./boatChargingPointStateMap-CAj5S_JA.js";import{B as e}from"./types-C7UQqeen.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-4aoZ66bu.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-LhepJrZ3.js";const x={component:n,parameters:{backgrounds:{default:"custom-grey0"}}},t={render:i=>a.jsx(p,{gutter:"md",children:[o[e.free],o[e.occupied],o[e.malfunction]].map(({icon:r})=>a.jsx(c,{gutter:"md",children:Object.values(s.light.size.spacing).map(m=>a.jsx(n,{...i,icon:r,size:m}))},r.path))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} size={size} />)}
        </Row>)}
    </Column>
}`,...t.parameters?.docs?.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,x as default};

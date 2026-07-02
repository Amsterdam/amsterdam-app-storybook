import{j as a,t as s}from"./iframe-BAfYhBNJ.js";import{C as n}from"./CustomMarkerIcon-BrpvAF3E.js";import{C as p}from"./Column-Djhml0kF.js";import{R as c}from"./Row-DppZ4wMa.js";import{b as o}from"./boatChargingPointStateMap-B4PAo-4o.js";import{B as e}from"./types-C7UQqeen.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-C3mqT-h_.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-BgNuUcEw.js";const x={component:n,parameters:{backgrounds:{default:"custom-grey0"}}},t={render:i=>a.jsx(p,{gutter:"md",children:[o[e.free],o[e.occupied],o[e.malfunction]].map(({icon:r})=>a.jsx(c,{gutter:"md",children:Object.values(s.light.size.spacing).map(m=>a.jsx(n,{...i,icon:r,size:m}))},r.path))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} size={size} />)}
        </Row>)}
    </Column>
}`,...t.parameters?.docs?.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,x as default};

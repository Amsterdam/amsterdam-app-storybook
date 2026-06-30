import{j as a,t as m}from"./iframe-COfa_vu5.js";import{C as n}from"./CustomMarkerIcon-DReZypUq.js";import{C as p}from"./Column-D9hQ-grz.js";import{R as c}from"./Row-DYPVHM8H.js";import{b as o,B as e}from"./boatChargingPointStateMap-CvCz4vXW.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-B0CaV3hX.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-3FeANLtz.js";const j={component:n,parameters:{backgrounds:{default:"custom-grey0"}}},t={render:i=>a.jsx(p,{gutter:"md",children:[o[e.free],o[e.occupied],o[e.malfunction]].map(({icon:r})=>a.jsx(c,{gutter:"md",children:Object.values(m.light.size.spacing).map(s=>a.jsx(n,{...i,icon:r,size:s}))},r.path))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} size={size} />)}
        </Row>)}
    </Column>
}`,...t.parameters?.docs?.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,j as default};

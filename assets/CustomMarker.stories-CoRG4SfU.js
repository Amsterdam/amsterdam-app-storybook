import{j as t,V as s,s as c}from"./iframe-COfa_vu5.js";import{C as o}from"./CustomMarker-2lWMm1dc.js";import{R as m}from"./Row-DYPVHM8H.js";import{S as n}from"./svgIcons-CfS-PwEU.js";import{b as e,B as i}from"./boatChargingPointStateMap-CvCz4vXW.js";import"./preload-helper-Zf8nSx-t.js";import"./CustomMarkerIcon-DReZypUq.js";import"./xml-B0CaV3hX.js";import"./MarkerBase-BqoAtXGA.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-3FeANLtz.js";import"./icons-DRR599Ko.js";const b={component:o,parameters:{backgrounds:{default:"custom-grey0"}}},r={render:a=>t.jsx(s,{style:p.container,children:t.jsxs(m,{gutter:"md",children:[t.jsx(o,{...a,icon:e[i.free].icon}),t.jsx(o,{...a,icon:e[i.occupied].icon}),t.jsx(o,{...a,icon:e[i.malfunction].icon}),t.jsx(o,{...a,icon:{path:n["question-mark-circle"].default.path}}),t.jsx(o,{...a,icon:{path:n.asterisk.default.path,pathColor:"red"}})]})})},p=c.create({container:{backgroundColor:"#cdcdcd",padding:24}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <View style={styles.container}>
      <Row gutter="md">
        <CustomMarker {...args} icon={boatChargingPointStateMap[BoatChargingPointState.free].icon} />
        <CustomMarker {...args} icon={boatChargingPointStateMap[BoatChargingPointState.occupied].icon} />
        <CustomMarker {...args} icon={boatChargingPointStateMap[BoatChargingPointState.malfunction].icon} />
        <CustomMarker {...args} icon={{
        path: SvgIconsConfig['question-mark-circle'].default.path
      }} />
        <CustomMarker {...args} icon={{
        path: SvgIconsConfig.asterisk.default.path,
        pathColor: 'red'
      }} />
      </Row>
    </View>
}`,...r.parameters?.docs?.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,b as default};

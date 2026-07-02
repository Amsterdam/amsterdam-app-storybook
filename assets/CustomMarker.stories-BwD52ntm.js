import{j as t,V as s,s as c}from"./iframe-CZHDwh9v.js";import{C as o}from"./CustomMarker-ClFJQ-fS.js";import{R as m}from"./Row-Wl8DlwmL.js";import{S as n}from"./svgIcons-Dka196MX.js";import{b as e}from"./boatChargingPointStateMap-CzygiHYf.js";import{B as i}from"./types-C7UQqeen.js";import"./preload-helper-Zf8nSx-t.js";import"./CustomMarkerIcon-DD3bixx4.js";import"./xml-Dd3MsRF8.js";import"./MarkerBase-CaiQnVRQ.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-7AnUMEAH.js";import"./icons-BFAtO6Bm.js";const w={component:o,parameters:{backgrounds:{default:"custom-grey0"}}},r={render:a=>t.jsx(s,{style:p.container,children:t.jsxs(m,{gutter:"md",children:[t.jsx(o,{...a,icon:e[i.free].icon}),t.jsx(o,{...a,icon:e[i.occupied].icon}),t.jsx(o,{...a,icon:e[i.malfunction].icon}),t.jsx(o,{...a,icon:{path:n["question-mark-circle"].default.path}}),t.jsx(o,{...a,icon:{path:n.asterisk.default.path,pathColor:"red"}})]})})},p=c.create({container:{backgroundColor:"#cdcdcd",padding:24}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const y=["Default"];export{r as Default,y as __namedExportsOrder,w as default};

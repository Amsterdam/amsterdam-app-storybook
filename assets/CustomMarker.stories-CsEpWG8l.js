import{j as t,V as s,s as c}from"./iframe-BxZFc9SL.js";import{C as o}from"./CustomMarker-ilUydlln.js";import{R as m}from"./Row-DEE4Fm7n.js";import{S as n}from"./svgIcons-C7jUz8_e.js";import{b as e,B as i}from"./boatChargingPointStateMap-3QBMxShm.js";import"./preload-helper-Zf8nSx-t.js";import"./CustomMarkerIcon-C2LNRDRg.js";import"./xml-B0BV18w6.js";import"./MarkerBase-BjgAZXFZ.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-DoJvb6nr.js";import"./icons-Chz5Ge8b.js";const b={component:o,parameters:{backgrounds:{default:"custom-grey0"}}},r={render:a=>t.jsx(s,{style:p.container,children:t.jsxs(m,{gutter:"md",children:[t.jsx(o,{...a,icon:e[i.free].icon}),t.jsx(o,{...a,icon:e[i.occupied].icon}),t.jsx(o,{...a,icon:e[i.malfunction].icon}),t.jsx(o,{...a,icon:{path:n["question-mark-circle"].default.path}}),t.jsx(o,{...a,icon:{path:n.asterisk.default.path,pathColor:"red"}})]})})},p=c.create({container:{backgroundColor:"#cdcdcd",padding:24}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

import{j as t,V as s,s as c}from"./iframe-nDrHcXa-.js";import{C as o}from"./CustomMarker-BvtNMYUH.js";import{R as m}from"./Row-BRtRpiR1.js";import{S as n}from"./svgIcons-brm-yTcQ.js";import{b as e,B as i}from"./boatChargingPointStateMap-B9ERmNVe.js";import"./preload-helper-Zf8nSx-t.js";import"./CustomMarkerIcon-DiXh-eyC.js";import"./xml-BSN1uCH-.js";import"./MarkerBase-BenK6R-G.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-EZ6r9uLn.js";import"./icons-uqAB9sQp.js";const b={component:o,parameters:{backgrounds:{default:"custom-grey0"}}},r={render:a=>t.jsx(s,{style:p.container,children:t.jsxs(m,{gutter:"md",children:[t.jsx(o,{...a,icon:e[i.free].icon}),t.jsx(o,{...a,icon:e[i.occupied].icon}),t.jsx(o,{...a,icon:e[i.malfunction].icon}),t.jsx(o,{...a,icon:{path:n["question-mark-circle"].default.path}}),t.jsx(o,{...a,icon:{path:n.asterisk.default.path,pathColor:"red"}})]})})},p=c.create({container:{backgroundColor:"#cdcdcd",padding:24}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

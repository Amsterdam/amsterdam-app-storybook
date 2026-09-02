import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{G as n,K as r,ct as i,n as a,st as o}from"./dist-NCr0OYBw.js";import{n as s,t as c}from"./Row-DrJ4o8pY.js";import{i as l,n as u}from"./svgIcons-X6wo5GzT.js";import{n as d,t as f}from"./CustomMarker-uBSNulDp.js";import{r as p,t as m}from"./types-CpSvn75W.js";import{n as h,t as g}from"./boatChargingPointStateMap-DhRvyVeB.js";var _,v,y,b,x,S,C;e((()=>{a(),d(),s(),l(),h(),p(),_=t(),v={component:f,parameters:{backgrounds:{default:`custom-grey0`}}},y={render:e=>(0,_.jsx)(n,{style:S.container,children:(0,_.jsxs)(c,{gutter:`md`,children:[(0,_.jsx)(f,{...e,icon:g[m.free].icon}),(0,_.jsx)(f,{...e,icon:g[m.occupied].icon}),(0,_.jsx)(f,{...e,icon:g[m.malfunction].icon}),(0,_.jsx)(f,{...e,icon:{path:u[`question-mark-circle`].default.path}}),(0,_.jsx)(f,{...e,icon:{path:u.asterisk.default.path,pathColor:`red`}})]})})},b={render:e=>(0,_.jsx)(n,{style:S.container,children:(0,_.jsx)(c,{gutter:`md`,children:(0,_.jsx)(f,{...e})})}),args:{icon:{circleColor:`blue`,path:u.lightning.default.path,pathColor:`white`}}},x={render:e=>(0,_.jsx)(n,{style:S.container,children:(0,_.jsx)(c,{gutter:`md`,children:(0,_.jsx)(f,{...e})})}),args:{icon:{path:u.lightning.default.path,pathColor:`white`,colors:[`#ffff00`,`#ff0000`,`#0000ff`,`#00ff00`]}}},S=i.create({container:{backgroundColor:`#cdcdcd`,padding:24}}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <View style={styles.container}>
      <Row gutter="md">
        <CustomMarker {...args} />
      </Row>
    </View>,
  args: {
    icon: {
      circleColor: 'blue',
      path: SvgIconsConfig.lightning.default.path,
      pathColor: 'white'
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <View style={styles.container}>
      <Row gutter="md">
        <CustomMarker {...args} />
      </Row>
    </View>,
  args: {
    icon: {
      path: SvgIconsConfig.lightning.default.path,
      pathColor: 'white',
      colors: ['#ffff00', '#ff0000', '#0000ff', '#00ff00']
    }
  }
}`,...x.parameters?.docs?.source}}},C=[`Default`,`WithCustomIcon`,`WithCustomIconWithColors`]}))();export{y as Default,b as WithCustomIcon,x as WithCustomIconWithColors,C as __namedExportsOrder,v as default};
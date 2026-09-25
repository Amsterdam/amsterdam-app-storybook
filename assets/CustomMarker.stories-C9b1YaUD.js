import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{J as n,lt as r,n as i,q as a,ut as o}from"./dist-BEOOBnYV.js";import{xr as s,yr as c}from"./iframe-BvMeIKCC.js";import{n as l,t as u}from"./Row-BBfli_73.js";import{i as d,n as f}from"./svgIcons-D3zhYNil.js";import{n as p,t as m}from"./CustomMarker-B6xiX3gR.js";import{n as h,t as g}from"./boatChargingPointStateMap-DEVFOaU5.js";var _,v,y,b,x,S,C;e((()=>{i(),p(),l(),d(),h(),s(),_=t(),v={component:m,parameters:{backgrounds:{default:`custom-grey0`}}},y={render:e=>(0,_.jsx)(a,{style:S.container,children:(0,_.jsxs)(u,{gutter:`md`,children:[(0,_.jsx)(m,{...e,icon:g[c.free].icon}),(0,_.jsx)(m,{...e,icon:g[c.occupied].icon}),(0,_.jsx)(m,{...e,icon:g[c.malfunction].icon}),(0,_.jsx)(m,{...e,icon:{path:f[`question-mark-circle`].default.path}}),(0,_.jsx)(m,{...e,icon:{path:f.asterisk.default.path,pathColor:`red`}})]})})},b={render:e=>(0,_.jsx)(a,{style:S.container,children:(0,_.jsx)(u,{gutter:`md`,children:(0,_.jsx)(m,{...e})})}),args:{icon:{circleColor:`blue`,path:f.lightning.default.path,pathColor:`white`}}},x={render:e=>(0,_.jsx)(a,{style:S.container,children:(0,_.jsx)(u,{gutter:`md`,children:(0,_.jsx)(m,{...e})})}),args:{icon:{path:f.lightning.default.path,pathColor:`white`,colors:[`#ffff00`,`#ff0000`,`#0000ff`,`#00ff00`]}}},S=o.create({container:{backgroundColor:`#cdcdcd`,padding:24}}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
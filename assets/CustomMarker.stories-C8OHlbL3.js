import{j as e,V as p,s as g}from"./iframe-yBuHejxt.js";import{C as u,b as o,B as s}from"./boatChargingPointStateMap-Ckx2toQf.js";import{M as l}from"./MarkerBase-gOo_YT7m.js";import{R as d}from"./Row-BpcQa8a8.js";import{S as i}from"./svgIcons-CNNJVbTI.js";import"./preload-helper-Zf8nSx-t.js";import"./xml-CaX1k5Zz.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-CuH1AvRG.js";const n=24,c=40,f=2,C={x:(c-n)/2,y:(c-n)/2-f},r=({icon:t,testID:m})=>e.jsx(u,{icon:t,offset:C,size:n,testID:`${m}CustomMarker`,Wrapper:l});try{r.displayName="CustomMarker",r.__docgenInfo={description:"",displayName:"CustomMarker",filePath:"/Users/runner/work/1/s/src/components/features/map/marker/CustomMarker.tsx",methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:"s/src/components/features/map/marker/CustomMarker.tsx",name:"TypeLiteral"}],description:"",name:"icon",required:!0,tags:{},type:{name:"{ circleColor?: string | undefined; path: string; pathColor?: string | undefined; }"}},testID:{defaultValue:null,declarations:[{fileName:"s/src/components/ui/types.ts",name:"TypeLiteral"}],description:"",name:"testID",required:!0,tags:{},type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}},tags:{}}}catch{}const E={component:r,parameters:{backgrounds:{default:"custom-grey0"}}},a={render:t=>e.jsx(p,{style:h.container,children:e.jsxs(d,{gutter:"md",children:[e.jsx(r,{...t,icon:o[s.free].icon}),e.jsx(r,{...t,icon:o[s.occupied].icon}),e.jsx(r,{...t,icon:o[s.malfunction].icon}),e.jsx(r,{...t,icon:{path:i["question-mark-circle"].default.path}}),e.jsx(r,{...t,icon:{path:i.asterisk.default.path,pathColor:"red"}})]})})},h=g.create({container:{backgroundColor:"#cdcdcd",padding:24}});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,E as default};

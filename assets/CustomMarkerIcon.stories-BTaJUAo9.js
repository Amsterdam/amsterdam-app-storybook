import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-CAfMLIKe.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,s as i}from"./types-BRhDahbG.js";import{n as a,t as o}from"./themes-Iysh1lWG.js";import{n as s,t as c}from"./Column-QEt1Gq34.js";import{n as l,t as u}from"./Row-BzeuNCmj.js";import{n as d,t as f}from"./boatChargingPointStateMap-DayQS-qn.js";import{n as p,t as m}from"./CustomMarkerIcon-BtXKYUTQ.js";var h,g,_,v,y;function b(){return(b=e((()=>{s(),l(),d(),i(),o(),p(),h=t(),g=n(),_={component:m,parameters:{backgrounds:{default:`custom-grey0`}}},v={render:e=>(0,g.jsx)(c,{gutter:`md`,children:[f[r.free],f[r.occupied],f[r.malfunction]].map(({icon:t})=>(0,g.jsx)(u,{gutter:`md`,children:Object.values(a.light.size.spacing).map(n=>(0,h.createElement)(m,{...e,icon:t,key:`${t.path}-${n}`,size:n}))},t.path))})},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Column gutter="md">
      {[boatChargingPointStateMap[BoatChargingPointState.free], boatChargingPointStateMap[BoatChargingPointState.occupied], boatChargingPointStateMap[BoatChargingPointState.malfunction]].map(({
      icon
    }) => <Row gutter="md" key={icon.path}>
          {Object.values(themes.light.size.spacing).map(size => <CustomMarkerIcon {...args} icon={icon} key={\`\${icon.path}-\${size}\`} size={size} />)}
        </Row>)}
    </Column>
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};
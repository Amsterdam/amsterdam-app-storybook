import{a as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./jsx-runtime-BBQGix-2.js";import{i as r,r as i}from"./themes-C7yDjynq.js";import{n as a,t as o}from"./Row-D4mj-L4w.js";import{i as s,n as c}from"./svgIcons-DhxNCMyp.js";import{n as l,t as u}from"./Button-jN_hqSJz.js";import{n as d,t as f}from"./pressable-arg-types-ao0z9Ssu.js";var p,m=t((()=>{s(),p={options:Object.keys(c),mapping:Object.fromEntries(Object.keys(c).map(e=>[e,{name:e}]))}})),h=e({Primary:()=>v,Secondary:()=>y,SecondaryDestructive:()=>x,Tertiary:()=>b,_Inline:()=>S,__Alignment:()=>C,__hasIcon:()=>w,__namedExportsOrder:()=>T,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E=t((()=>{l(),a(),m(),f(),i(),g=n(),_={component:u,tags:[`!autodocs`],parameters:{design:{type:`figma`,url:`https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=15700-53370&t=XrQ1fYsDWoiJfdwX-4`}},argTypes:{onPress:d.onPress,icon:{...p,control:{type:`select`},description:`Icon properties that define the icon to render inside the Button`},isReverseOrder:{control:`boolean`,if:{arg:`icon`,truthy:!0}}}},v={args:{label:`Primary`,variant:`primary`}},y={args:{label:`Secondary`,variant:`secondary`}},b={args:{label:`Tertiary`,variant:`tertiary`}},x={args:{label:`Secondary Destructive`,variant:`secondaryDestructive`}},S={args:{align:`start`},render:({align:e})=>(0,g.jsx)(o,{align:e,children:(0,g.jsx)(u,{label:`Inline button`,testID:`Button`})})},C={args:{align:`start`,gutter:`md`},argTypes:{align:{control:{type:`select`},options:[`around`,`between`,`center`,`end`,`evenly`,`start`]},gutter:{control:{type:`select`},options:Object.keys(r.spacing)}},render:({align:e,gutter:t})=>(0,g.jsxs)(o,{align:e,gutter:t,children:[(0,g.jsx)(u,{label:`First button`,testID:`Button`}),(0,g.jsx)(u,{label:`Second button`,testID:`Button`,variant:`secondary`}),(0,g.jsx)(u,{label:`Third button`,testID:`Button`,variant:`tertiary`})]})},w={args:{icon:{isFilled:!0,name:`phone`},label:`Bel ons`},render:e=>(0,g.jsx)(o,{align:`start`,children:(0,g.jsx)(u,{...e,testID:`Button`})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Destructive',
    variant: 'secondaryDestructive'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" testID="Button" />
    </Row>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start',
    gutter: 'md'
  },
  argTypes: {
    align: {
      control: {
        type: 'select'
      },
      options: ['around', 'between', 'center', 'end', 'evenly', 'start']
    },
    gutter: {
      control: {
        type: 'select'
      },
      options: Object.keys(sizeTokens.spacing)
    }
  },
  render: ({
    align,
    gutter
  }) => <Row align={align} gutter={gutter}>
      <Button label="First button" testID="Button" />
      <Button label="Second button" testID="Button" variant="secondary" />
      <Button label="Third button" testID="Button" variant="tertiary" />
    </Row>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    icon: {
      isFilled: true,
      name: 'phone'
    },
    label: 'Bel ons'
  },
  render: args => <Row align="start">
      <Button {...args} testID="Button" />
    </Row>
}`,...w.parameters?.docs?.source},description:{story:`Knop met een icoon`,...w.parameters?.docs?.description}}},T=[`Primary`,`Secondary`,`Tertiary`,`SecondaryDestructive`,`_Inline`,`__Alignment`,`__hasIcon`]}));E();export{v as Primary,y as Secondary,x as SecondaryDestructive,b as Tertiary,S as _Inline,C as __Alignment,w as __hasIcon,T as __namedExportsOrder,_ as default,E as n,h as t};
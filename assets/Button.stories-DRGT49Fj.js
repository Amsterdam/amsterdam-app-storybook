import{j as r}from"./iframe-DZZ2FdSm.js";import{B as t}from"./Button-Cnfcjkpj.js";import{R as m}from"./Row-DQHM-mdT.js";import{p as u}from"./pressable-arg-types-CJIMfHep.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-Cor-O8tb.js";import"./xml-4aoZ66bu.js";import"./svgIcons-BCC4bWCo.js";import"./icons-CP2BFGyA.js";import"./useDeviceContext-B2PB_0Wb.js";import"./useThemable-LhepJrZ3.js";import"./PressableBase-DuPvHCUE.js";import"./useTrackException-CylFTspE.js";import"./getAccessibleLabel-C0mSt9GM.js";import"./config-BZnShabN.js";import"./AccessibleText-BECQhO1J.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const P={argTypes:u,component:t,parameters:{componentSubtitle:"Het basis button component"}},s={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},n={args:{label:"Tertiary",variant:"tertiary"}},i={args:{label:"Secondary Destructive",variant:"secondaryDestructive"}},c={args:{align:"start"},render:({align:e})=>r.jsx(m,{align:e,children:r.jsx(t,{label:"Inline button",testID:"Button"})})},l={args:{align:"start",gutter:"md"},render:({align:e,gutter:p})=>r.jsxs(m,{align:e,gutter:p,children:[r.jsx(t,{label:"First button",testID:"Button"}),r.jsx(t,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{icon:{isFilled:!0,name:"phone"},label:"Bel ons"},render:e=>r.jsx(m,{align:"start",children:r.jsx(t,{...e,testID:"Button"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Destructive',
    variant: 'secondaryDestructive'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" testID="Button" />
    </Row>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start',
    gutter: 'md'
  },
  render: ({
    align,
    gutter
  }) => <Row align={align} gutter={gutter}>
      <Button label="First button" testID="Button" />
      <Button label="Second button" testID="Button" variant="secondary" />
      <Button label="Third button" testID="Button" variant="tertiary" />
    </Row>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Knop met een icoon",...a.parameters?.docs?.description}}};const A=["Primary","Secondary","Tertiary","SecondaryDestructive","_Inline","__Alignment","__hasIcon"];export{s as Primary,o as Secondary,i as SecondaryDestructive,n as Tertiary,c as _Inline,l as __Alignment,a as __hasIcon,A as __namedExportsOrder,P as default};

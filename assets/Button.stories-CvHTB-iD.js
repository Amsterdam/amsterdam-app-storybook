import{j as r}from"./iframe-Du6mY-uc.js";import{B as t}from"./Button-DoD3mP4X.js";import{R as m}from"./Row-BAPmIKMs.js";import{p as u}from"./pressable-arg-types-CJIMfHep.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-CbMpcwdc.js";import"./xml-Kj9KnF94.js";import"./svgIcons-zvogD40a.js";import"./useDeviceContext-CNgFZecg.js";import"./useThemable-Dm_19KG8.js";import"./PressableBase-BczLcLt_.js";import"./useTrackException-BqGrBPQt.js";import"./config-BZnShabN.js";import"./AccessibleText-CoTCbpzL.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const f={argTypes:u,component:t,parameters:{componentSubtitle:"Het basis button component"}},s={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},n={args:{label:"Tertiary",variant:"tertiary"}},i={args:{label:"Secondary Destructive",variant:"secondaryDestructive"}},c={args:{align:"start"},render:({align:e})=>r.jsx(m,{align:e,children:r.jsx(t,{label:"Inline button",testID:"Button"})})},l={args:{align:"start",gutter:"md"},render:({align:e,gutter:p})=>r.jsxs(m,{align:e,gutter:p,children:[r.jsx(t,{label:"First button",testID:"Button"}),r.jsx(t,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{icon:{isFilled:!0,name:"phone"},label:"Bel ons"},render:e=>r.jsx(m,{align:"start",children:r.jsx(t,{...e,testID:"Button"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Knop met een icoon",...a.parameters?.docs?.description}}};const F=["Primary","Secondary","Tertiary","SecondaryDestructive","_Inline","__Alignment","__hasIcon"];export{s as Primary,o as Secondary,i as SecondaryDestructive,n as Tertiary,c as _Inline,l as __Alignment,a as __hasIcon,F as __namedExportsOrder,f as default};

import{j as r}from"./iframe-CPWLW6xG.js";import{B as t}from"./Button-BAeyoJOn.js";import{R as m}from"./Row-DbMc4yl8.js";import{p as u}from"./pressable-arg-types-CJIMfHep.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-DgPz6ct0.js";import"./xml-D4Mk7FlO.js";import"./svgIcons-DcdtacKo.js";import"./useDeviceContext-PZiOUS3S.js";import"./useThemable-b243GW5F.js";import"./PressableBase-CIdpRAnp.js";import"./useTrackException-BUp2AG43.js";import"./config-BZnShabN.js";import"./AccessibleText-C9kNc66m.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const f={argTypes:u,component:t,parameters:{componentSubtitle:"Het basis button component"}},s={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},n={args:{label:"Tertiary",variant:"tertiary"}},i={args:{label:"Secondary Destructive",variant:"secondaryDestructive"}},c={args:{align:"start"},render:({align:e})=>r.jsx(m,{align:e,children:r.jsx(t,{label:"Inline button",testID:"Button"})})},l={args:{align:"start",gutter:"md"},render:({align:e,gutter:p})=>r.jsxs(m,{align:e,gutter:p,children:[r.jsx(t,{label:"First button",testID:"Button"}),r.jsx(t,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{icon:{isFilled:!0,name:"phone"},label:"Bel ons"},render:e=>r.jsx(m,{align:"start",children:r.jsx(t,{...e,testID:"Button"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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

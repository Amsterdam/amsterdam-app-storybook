import{j as r}from"./iframe-3XWDy6Sa.js";import{B as e}from"./Button-HUZrccN-.js";import{R as p}from"./Row-BGnhl6HF.js";import{p as d}from"./pressable-arg-types-CJIMfHep.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-KTBn1-UU.js";import"./xml-B_E2SNFX.js";import"./svgIcons-a5GQaUby.js";import"./useDeviceContext-CJm-1hA5.js";import"./useThemable-CwX2UqU8.js";import"./PressableBase-m6C7pVHu.js";import"./useTrackException-Cw-POkaK.js";import"./config-BZnShabN.js";import"./AccessibleText-CUIfels1.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const f={argTypes:d,component:e,parameters:{componentSubtitle:"Het basis button component"}},s={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},n={args:{label:"Tertiary",variant:"tertiary"}},i={args:{label:"Secondary Destructive",variant:"secondaryDestructive"}},c={args:{label:"Positive",variant:"positive"}},l={args:{align:"start"},render:({align:t})=>r.jsx(p,{align:t,children:r.jsx(e,{label:"Inline button",testID:"Button"})})},m={args:{align:"start",gutter:"md"},render:({align:t,gutter:u})=>r.jsxs(p,{align:t,gutter:u,children:[r.jsx(e,{label:"First button",testID:"Button"}),r.jsx(e,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(e,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{icon:{isFilled:!0,name:"phone"},label:"Bel ons"},render:t=>r.jsx(p,{align:"start",children:r.jsx(e,{...t,testID:"Button"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    label: 'Positive',
    variant: 'positive'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" testID="Button" />
    </Row>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Knop met een icoon",...a.parameters?.docs?.description}}};const F=["Primary","Secondary","Tertiary","SecondaryDestructive","Positive","_Inline","__Alignment","__hasIcon"];export{c as Positive,s as Primary,o as Secondary,i as SecondaryDestructive,n as Tertiary,l as _Inline,m as __Alignment,a as __hasIcon,F as __namedExportsOrder,f as default};

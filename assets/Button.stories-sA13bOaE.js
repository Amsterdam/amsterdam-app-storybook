import{j as r}from"./iframe-CCC1gxPh.js";import{B as t}from"./Button-COtZYJZ0.js";import{R as l}from"./Row-Cc4zsVvD.js";import{p}from"./pressable-arg-types-CJIMfHep.js";import"./preload-helper-Zf8nSx-t.js";import"./Icon-BR6f_H3k.js";import"./xml-CUUmWGsl.js";import"./svgIcons--zNTyUpY.js";import"./useDeviceContext-B7Ei_NFb.js";import"./useThemable-DkqPrJO2.js";import"./PressableBase-aGFa4TTv.js";import"./usePiwikTrackCustomEventFromProps-om7xYFCH.js";import"./useTrackException-CC5VkW61.js";import"./config-BZnShabN.js";import"./AccessibleText-okl4eaHd.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const f={argTypes:p,component:t,parameters:{componentSubtitle:"Het basis button component"}},o={args:{label:"Primary",variant:"primary"}},s={args:{label:"Secondary",variant:"secondary"}},n={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r.jsx(l,{align:e,children:r.jsx(t,{label:"Inline button",testID:"Button"})})},c={args:{align:"start",gutter:"md"},render:({align:e,gutter:m})=>r.jsxs(l,{align:e,gutter:m,children:[r.jsx(t,{label:"First button",testID:"Button"}),r.jsx(t,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{icon:{isFilled:!0,name:"phone"},label:"Bel ons"},render:e=>r.jsx(l,{align:"start",children:r.jsx(t,{...e,testID:"Button"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" testID="Button" />
    </Row>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Knop met een icoon",...a.parameters?.docs?.description}}};const F=["Primary","Secondary","Tertiary","_Inline","__Alignment","__hasIcon"];export{o as Primary,s as Secondary,n as Tertiary,i as _Inline,c as __Alignment,a as __hasIcon,F as __namedExportsOrder,f as default};

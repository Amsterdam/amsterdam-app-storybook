import{j as r,a as F}from"./useThemable-f30bc085.js";import{B as a}from"./Button-af87ecb9.js";import{R as c}from"./Row-6615ad7f.js";import{p as N}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./config-55b2a55c.js";import"./Icon-8fa10385.js";import"./index-0a8a0804.js";import"./index-9d475cdf.js";import"./Animated-c2918ca3.js";import"./index-9f48cdb1.js";import"./extends-98964cd2.js";import"./index-c2b660c2.js";import"./NativeEventEmitter-e48f6778.js";import"./index-4aecf1db.js";import"./index-ccfb1f0c.js";import"./types-e7c584cc.js";import"./useDeviceContext-18951bae.js";import"./index-fca5dbaa.js";import"./index-b6575df8.js";import"./useTheme-6ad20d8d.js";import"./index-a38d3ef2.js";import"./index-56eca6dc.js";import"./mapMainAxisAlignment-e13c2957.js";const or={argTypes:N,component:a,parameters:{componentSubtitle:"Het basis button component"}},n={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r(c,{align:e,children:r(a,{label:"Inline button"})})},m={args:{align:"start",gutter:"md"},render:({align:e,gutter:A})=>F(c,{align:e,gutter:A,children:[r(a,{label:"First button"}),r(a,{label:"Second button",variant:"secondary"}),r(a,{label:"Third button",variant:"tertiary"})]})},t={args:{iconName:"phone",label:"Bel ons"},render:e=>r(c,{align:"start",children:r(a,{...e})})};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,S,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(_=(S=s.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var v,h,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" />
    </Row>
}`,...(B=(h=i.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var R,T,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    align: 'start',
    gutter: 'md'
  },
  render: ({
    align,
    gutter
  }) => <Row align={align} gutter={gutter}>
      <Button label="First button" />
      <Button label="Second button" variant="secondary" />
      <Button label="Third button" variant="tertiary" />
    </Row>
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,f,x,P,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    iconName: 'phone',
    label: 'Bel ons'
  },
  render: args => <Row align="start">
      <Button {...args} />
    </Row>
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Knop met een icoon",...(j=(P=t.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};const sr=["Primary","Secondary","Tertiary","_Inline","__Alignment","__WithIcon"];export{n as Primary,o as Secondary,s as Tertiary,i as _Inline,m as __Alignment,t as __WithIcon,sr as __namedExportsOrder,or as default};

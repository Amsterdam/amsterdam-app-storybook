import{j as r,a as F}from"./useThemable-92ccb80b.js";import{B as a}from"./Button-d0ff6d4c.js";import{R as c}from"./Row-6009ab11.js";import{p as N}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./config-55b2a55c.js";import"./Icon-40c43dea.js";import"./index-36aa4481.js";import"./index-9d475cdf.js";import"./Animated-8c1fee17.js";import"./index-102134d3.js";import"./extends-98964cd2.js";import"./index-39c13462.js";import"./NativeEventEmitter-a1a31b1f.js";import"./index-3ac00867.js";import"./index-288278cd.js";import"./types-e7c584cc.js";import"./useDeviceContext-332bac93.js";import"./index-3b3c9879.js";import"./index-87dfdaaa.js";import"./useTheme-7b3d4d58.js";import"./index-4e6537c6.js";import"./index-56eca6dc.js";import"./mapMainAxisAlignment-e13c2957.js";const or={argTypes:N,component:a,parameters:{componentSubtitle:"Het basis button component"}},n={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r(c,{align:e,children:r(a,{label:"Inline button"})})},m={args:{align:"start",gutter:"md"},render:({align:e,gutter:A})=>F(c,{align:e,gutter:A,children:[r(a,{label:"First button"}),r(a,{label:"Second button",variant:"secondary"}),r(a,{label:"Third button",variant:"tertiary"})]})},t={args:{iconName:"phone",label:"Bel ons"},render:e=>r(c,{align:"start",children:r(a,{...e})})};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

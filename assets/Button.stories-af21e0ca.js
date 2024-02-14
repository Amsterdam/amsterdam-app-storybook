import{j as r,a as F}from"./index-1401012c.js";import{B as a}from"./Button-c019f708.js";import{R as p}from"./Row-99740ecb.js";import{p as N}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Icon-aa47faa5.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-3c47de32.js";import"./invariant-f1a82cf7.js";import"./extends-98964cd2.js";import"./index-8aec880e.js";import"./base-color-66d0fb4c.js";import"./index-240c6d7a.js";import"./NativeEventEmitter-7be6cb46.js";import"./index-8fe1e389.js";import"./index-83a31e41.js";import"./types-e7c584cc.js";import"./useDeviceContext-904ab82a.js";import"./index-3d7f4c33.js";import"./index-d983c834.js";import"./index-5aae214f.js";import"./useTheme-7821b5d5.js";import"./useThemable-27d8c265.js";import"./index-d3ea75b5.js";import"./index-393588f7.js";import"./index-56eca6dc.js";import"./mapMainAxisAlignment-e13c2957.js";const pr={argTypes:N,component:a,parameters:{componentSubtitle:"Het basis button component"}},n={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:t})=>r(p,{align:t,children:r(a,{label:"Inline button"})})},m={args:{align:"start",gutter:"md"},render:({align:t,gutter:A})=>F(p,{align:t,gutter:A,children:[r(a,{label:"First button"}),r(a,{label:"Second button",variant:"secondary"}),r(a,{label:"Third button",variant:"tertiary"})]})},e={args:{iconName:"phone",label:"Bel ons"},render:t=>r(p,{align:"start",children:r(a,{...t})})};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,f,x,P,j;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    iconName: 'phone',
    label: 'Bel ons'
  },
  render: args => <Row align="start">
      <Button {...args} />
    </Row>
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Knop met een icoon",...(j=(P=e.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};const cr=["Primary","Secondary","Tertiary","_Inline","__Alignment","__WithIcon"];export{n as Primary,o as Secondary,s as Tertiary,i as _Inline,m as __Alignment,e as __WithIcon,cr as __namedExportsOrder,pr as default};

import{j as r,a as F}from"./useThemable-7e23fae8.js";import{B as a}from"./Button-a792fddc.js";import{R as c}from"./Row-06ac4eed.js";import{p as N}from"./pressable-arg-types-18907f68.js";import"./index-e67e0a49.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Icon-c5702ead.js";import"./index-884c992e.js";import"./index-9d475cdf.js";import"./Animated-1f43aa99.js";import"./index-8d8d2929.js";import"./invariant-ea487af3.js";import"./extends-98964cd2.js";import"./index-ea25b3de.js";import"./index-546e8b88.js";import"./EventEmitter-2b0932c2.js";import"./useDeviceContext-f57ee50f.js";import"./index-d324eba8.js";import"./index-8457ee36.js";import"./index-880a3f2e.js";import"./types-e7c584cc.js";import"./useTheme-4260c7c0.js";import"./index-a31edbaa.js";import"./index-d7b7437a.js";import"./mapMainAxisAlignment-e13c2957.js";const nr={argTypes:N,component:a,parameters:{componentSubtitle:"Het basis button component"}},o={args:{label:"Primary",variant:"primary"}},n={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r(c,{align:e,children:r(a,{label:"Inline button"})})},m={args:{align:"start",gutter:"md"},render:({align:e,gutter:A})=>F(c,{align:e,gutter:A,children:[r(a,{label:"First button"}),r(a,{label:"Second button",variant:"secondary"}),r(a,{label:"Third button",variant:"tertiary"})]})},t={args:{iconName:"phone",label:"Bel ons"},render:e=>r(c,{align:"start",children:r(a,{...e})})};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,S,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Knop met een icoon",...(j=(P=t.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};const sr=["Primary","Secondary","Tertiary","_Inline","__Alignment","__WithIcon"];export{o as Primary,n as Secondary,s as Tertiary,i as _Inline,m as __Alignment,t as __WithIcon,sr as __namedExportsOrder,nr as default};
//# sourceMappingURL=Button.stories-629c6923.js.map
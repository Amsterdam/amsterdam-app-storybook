import{g as t,j as r,R as l}from"./iframe-CaCD48ES.js";import{p as A}from"./pressable-arg-types-CJIMfHep.js";import"./preload-helper-Dp1pzeXC.js";const H={argTypes:A,component:t,parameters:{componentSubtitle:"Het basis button component"}},s={args:{label:"Primary",variant:"primary"}},n={args:{label:"Secondary",variant:"secondary"}},o={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r.jsx(l,{align:e,children:r.jsx(t,{label:"Inline button",testID:"Button"})})},c={args:{align:"start",gutter:"md"},render:({align:e,gutter:f})=>r.jsxs(l,{align:e,gutter:f,children:[r.jsx(t,{label:"First button",testID:"Button"}),r.jsx(t,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{iconName:"phone",label:"Bel ons"},render:e=>r.jsx(l,{align:"start",children:r.jsx(t,{...e,testID:"Button"})})};var u,m,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,B,I;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(I=(B=o.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var S,x,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" testID="Button" />
    </Row>
}`,...(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var j,v,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var h,R,T,w,P;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    iconName: 'phone',
    label: 'Bel ons'
  },
  render: args => <Row align="start">
      <Button {...args} testID="Button" />
    </Row>
}`,...(T=(R=a.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Knop met een icoon",...(P=(w=a.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};const K=["Primary","Secondary","Tertiary","_Inline","__Alignment","__hasIcon"];export{s as Primary,n as Secondary,o as Tertiary,i as _Inline,c as __Alignment,a as __hasIcon,K as __namedExportsOrder,H as default};

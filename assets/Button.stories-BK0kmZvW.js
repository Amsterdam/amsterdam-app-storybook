import{j as r}from"./iframe-tLBrABMD.js";import{B as t}from"./Button-D3pQzjCA.js";import{R as l}from"./Row-Dpumr8GG.js";import{p as P}from"./pressable-arg-types-CJIMfHep.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-DhpclE6t.js";import"./index-Dl2nnPHO.js";import"./useDeviceContext-BKYs0HqV.js";import"./useThemable-CJV6bJ8p.js";import"./PressableBase-DewSVhtd.js";import"./usePiwikTrackCustomEventFromProps-BsDkSS9q.js";import"./useTrackException-DQzS8MxD.js";import"./config-BZnShabN.js";import"./AccessibleText-BIxvKmwL.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";const V={argTypes:P,component:t,parameters:{componentSubtitle:"Het basis button component"}},o={args:{label:"Primary",variant:"primary"}},s={args:{label:"Secondary",variant:"secondary"}},n={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r.jsx(l,{align:e,children:r.jsx(t,{label:"Inline button",testID:"Button"})})},c={args:{align:"start",gutter:"md"},render:({align:e,gutter:F})=>r.jsxs(l,{align:e,gutter:F,children:[r.jsx(t,{label:"First button",testID:"Button"}),r.jsx(t,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{icon:{isFilled:!0,name:"phone"},label:"Bel ons"},render:e=>r.jsx(l,{align:"start",children:r.jsx(t,{...e,testID:"Button"})})};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,g,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,B,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(I=(B=n.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var S,x,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var h,R,T,w,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(R=a.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Knop met een icoon",...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};const W=["Primary","Secondary","Tertiary","_Inline","__Alignment","__hasIcon"];export{o as Primary,s as Secondary,n as Tertiary,i as _Inline,c as __Alignment,a as __hasIcon,W as __namedExportsOrder,V as default};

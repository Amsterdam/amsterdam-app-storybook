import{j as r,a as A}from"./index-1401012c.js";import{B as t}from"./Button-97bbbbd7.js";import{R as p}from"./Row-17c8d4a4.js";import{p as F}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-f2801bad.js";import"./usePiwikTrackCustomEventFromProps-a8a43c8e.js";import"./slugs-ef986ad7.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./development-fba0c344.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./useSentry-4ff04abd.js";import"./logging-48780c0a.js";import"./callBound-55a1829f.js";import"./index-bc12ea56.js";import"./extends-98964cd2.js";import"./index-e1b95cde.js";import"./config-55b2a55c.js";import"./Icon-f0d78b7a.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-e7c584cc.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";import"./useTheme-dbc166b8.js";import"./useThemable-be20f09e.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./mapMainAxisAlignment-e13c2957.js";const Br={argTypes:F,component:t,parameters:{componentSubtitle:"Het basis button component"}},n={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:a})=>r(p,{align:a,children:r(t,{label:"Inline button",testID:"Button"})})},m={args:{align:"start",gutter:"md"},render:({align:a,gutter:j})=>A(p,{align:a,gutter:j,children:[r(t,{label:"First button",testID:"Button"}),r(t,{label:"Second button",testID:"Button",variant:"secondary"}),r(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},e={args:{iconName:"phone",label:"Bel ons"},render:a=>r(p,{align:"start",children:r(t,{...a,testID:"Button"})})};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,g,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,B,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var S,_,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" testID="Button" />
    </Row>
}`,...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var D,h,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(h=m.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var T,w,f,x,P;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    iconName: 'phone',
    label: 'Bel ons'
  },
  render: args => <Row align="start">
      <Button {...args} testID="Button" />
    </Row>
}`,...(f=(w=e.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Knop met een icoon",...(P=(x=e.parameters)==null?void 0:x.docs)==null?void 0:P.description}}};const Ir=["Primary","Secondary","Tertiary","_Inline","__Alignment","__hasIcon"];export{n as Primary,o as Secondary,s as Tertiary,i as _Inline,m as __Alignment,e as __hasIcon,Ir as __namedExportsOrder,Br as default};

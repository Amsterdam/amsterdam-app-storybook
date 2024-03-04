import{j as r,a as A}from"./index-1401012c.js";import{B as t}from"./Button-0b326ed8.js";import{R as p}from"./Row-a25c9171.js";import{p as F}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-6c81d006.js";import"./usePiwikTrackCustomEventFromProps-169cccda.js";import"./slugs-8fd1a178.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./development-fba0c344.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./useSentry-2755e804.js";import"./logging-4c91f15c.js";import"./callBound-55a1829f.js";import"./index-072f370e.js";import"./extends-98964cd2.js";import"./index-e1b95cde.js";import"./config-55b2a55c.js";import"./Icon-354800cc.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-e7c584cc.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";import"./useTheme-8e94b012.js";import"./useThemable-a5fed888.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./mapMainAxisAlignment-e13c2957.js";const Br={argTypes:F,component:t,parameters:{componentSubtitle:"Het basis button component"}},n={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r(p,{align:e,children:r(t,{label:"Inline button",testID:"Button"})})},m={args:{align:"start",gutter:"md"},render:({align:e,gutter:j})=>A(p,{align:e,gutter:j,children:[r(t,{label:"First button",testID:"Button"}),r(t,{label:"Second button",testID:"Button",variant:"secondary"}),r(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{iconName:"phone",label:"Bel ons"},render:e=>r(p,{align:"start",children:r(t,{...e,testID:"Button"})})};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(R=(h=m.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var T,w,f,x,P;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    iconName: 'phone',
    label: 'Bel ons'
  },
  render: args => <Row align="start">
      <Button {...args} testID="Button" />
    </Row>
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Knop met een icoon",...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.description}}};const Ir=["Primary","Secondary","Tertiary","_Inline","__Alignment","__WithIcon"];export{n as Primary,o as Secondary,s as Tertiary,i as _Inline,m as __Alignment,a as __WithIcon,Ir as __namedExportsOrder,Br as default};

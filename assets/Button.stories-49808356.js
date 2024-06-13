import{j as r,a as A}from"./index-1401012c.js";import{B as t}from"./Button-0d55c9bd.js";import{R as p}from"./Row-71e3f429.js";import{p as F}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-e820b014.js";import"./usePiwikTrackCustomEventFromProps-ef2fad16.js";import"./slugs-27bec231.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./development-9e7a9bcc.js";import"./redux-toolkit.esm-1f08def5.js";import"./useSentry-a6b63432.js";import"./callBound-55a1829f.js";import"./index-2e18e8c8.js";import"./extends-98964cd2.js";import"./index-e1b95cde.js";import"./config-55b2a55c.js";import"./Icon-a82d87b1.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-65ac26c5.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";import"./useTheme-ab3ca6e2.js";import"./useThemable-030d6c49.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";const Br={argTypes:F,component:t,parameters:{componentSubtitle:"Het basis button component"}},n={args:{label:"Primary",variant:"primary"}},o={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:a})=>r(p,{align:a,children:r(t,{label:"Inline button",testID:"Button"})})},m={args:{align:"start",gutter:"md"},render:({align:a,gutter:j})=>A(p,{align:a,gutter:j,children:[r(t,{label:"First button",testID:"Button"}),r(t,{label:"Second button",testID:"Button",variant:"secondary"}),r(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},e={args:{iconName:"phone",label:"Bel ons"},render:a=>r(p,{align:"start",children:r(t,{...a,testID:"Button"})})};var c,l,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

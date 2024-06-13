import{j as r}from"./index-9d7eb5a2.js";import{B as t}from"./Button-50e0fdfc.js";import{R as p}from"./Row-00cddd21.js";import{p as A}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-2680f321.js";import"./usePiwikTrackCustomEventFromProps-0c5dd185.js";import"./slugs-b43e7e98.js";import"./index-6f107027.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-fb7b51b4.js";import"./TextAncestorContext-3b992cff.js";import"./development-de2bc6fd.js";import"./redux-toolkit.esm-cb9067f1.js";import"./useSentry-3517252a.js";import"./index-07bd7250.js";import"./callBound-c4e9bae7.js";import"./index-5008ca59.js";import"./extends-34e645d9.js";import"./index-b1a24850.js";import"./config-55b2a55c.js";import"./Icon-3ee257ff.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Animated-4476d759.js";import"./index-72552a59.js";import"./index-87b6cec9.js";import"./index-169dd17a.js";import"./types-65ac26c5.js";import"./useDeviceContext-82bee89b.js";import"./index-3cad2065.js";import"./useTheme-d4cae06a.js";import"./useThemable-a57962df.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";const Br={argTypes:A,component:t,parameters:{componentSubtitle:"Het basis button component"}},o={args:{label:"Primary",variant:"primary"}},n={args:{label:"Secondary",variant:"secondary"}},s={args:{label:"Tertiary",variant:"tertiary"}},i={args:{align:"start"},render:({align:e})=>r.jsx(p,{align:e,children:r.jsx(t,{label:"Inline button",testID:"Button"})})},m={args:{align:"start",gutter:"md"},render:({align:e,gutter:P})=>r.jsxs(p,{align:e,gutter:P,children:[r.jsx(t,{label:"First button",testID:"Button"}),r.jsx(t,{label:"Second button",testID:"Button",variant:"secondary"}),r.jsx(t,{label:"Third button",testID:"Button",variant:"tertiary"})]})},a={args:{iconName:"phone",label:"Bel ons"},render:e=>r.jsx(p,{align:"start",children:r.jsx(t,{...e,testID:"Button"})})};var c,l,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,g,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,B,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var S,x,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" testID="Button" />
    </Row>
}`,...(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var j,v,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(v=m.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var h,R,T,w,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    iconName: 'phone',
    label: 'Bel ons'
  },
  render: args => <Row align="start">
      <Button {...args} testID="Button" />
    </Row>
}`,...(T=(R=a.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Knop met een icoon",...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};const Ir=["Primary","Secondary","Tertiary","_Inline","__Alignment","__hasIcon"];export{o as Primary,n as Secondary,s as Tertiary,i as _Inline,m as __Alignment,a as __hasIcon,Ir as __namedExportsOrder,Br as default};

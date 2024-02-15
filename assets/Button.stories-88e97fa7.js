import{j as r,a as F}from"./index-1401012c.js";import{B as t}from"./Button-361af79f.js";import{R as p}from"./Row-b2f4e37d.js";import{p as N}from"./pressable-arg-types-18907f68.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-2fe3af06.js";import"./usePiwikTrackCustomEventFromProps-e922e993.js";import"./getCurrentModuleSlugFromNavigationRootState-894d5e8f.js";import"./slugs-f10b10b9.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./development-c7ad5cf4.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./index-e454650f.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./useSentry-b9ec55cc.js";import"./logging-e6f6b7aa.js";import"./callBound-55a1829f.js";import"./index-7b22aaaf.js";import"./extends-98964cd2.js";import"./index-e1b95cde.js";import"./config-55b2a55c.js";import"./Icon-16a5e8e0.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-e7c584cc.js";import"./useDeviceContext-20251673.js";import"./index-5aae214f.js";import"./useTheme-8e94b012.js";import"./useThemable-a5fed888.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./mapMainAxisAlignment-e13c2957.js";const vr={argTypes:N,component:t,parameters:{componentSubtitle:"Het basis button component"}},o={args:{label:"Primary",variant:"primary"}},n={args:{label:"Secondary",variant:"secondary"}},i={args:{label:"Tertiary",variant:"tertiary"}},s={args:{align:"start"},render:({align:a})=>r(p,{align:a,children:r(t,{label:"Inline button"})})},m={args:{align:"start",gutter:"md"},render:({align:a,gutter:A})=>F(p,{align:a,gutter:A,children:[r(t,{label:"First button"}),r(t,{label:"Second button",variant:"secondary"}),r(t,{label:"Third button",variant:"tertiary"})]})},e={args:{iconName:"phone",label:"Bel ons"},render:a=>r(p,{align:"start",children:r(t,{...a})})};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,u,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    variant: 'secondary'
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,S,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary',
    variant: 'tertiary'
  }
}`,...(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var v,h,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    align: 'start'
  },
  render: ({
    align
  }) => <Row align={align}>
      <Button label="Inline button" />
    </Row>
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var R,T,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(x=(f=e.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"Knop met een icoon",...(j=(P=e.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};const hr=["Primary","Secondary","Tertiary","_Inline","__Alignment","__WithIcon"];export{o as Primary,n as Secondary,i as Tertiary,s as _Inline,m as __Alignment,e as __WithIcon,hr as __namedExportsOrder,vr as default};

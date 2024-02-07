import{j as r,a as g}from"./base-color-46461b55.js";import{B as o}from"./Button-95a91424.js";import{R as s}from"./Row-ce855e9e.js";import{B as i}from"./Block-34d41128.js";import{C as u}from"./Canvas-ed8a3038.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./config-55b2a55c.js";import"./Icon-93cdf638.js";import"./index-478f3656.js";import"./index-9d475cdf.js";import"./Animated-4ce74104.js";import"./index-fda7d940.js";import"./extends-98964cd2.js";import"./index-ed640e0d.js";import"./NativeEventEmitter-3cd0de8d.js";import"./index-3433f2d7.js";import"./index-2d407a0d.js";import"./types-e7c584cc.js";import"./useDeviceContext-d08ab4bf.js";import"./index-a435ac4b.js";import"./index-2828d8dd.js";import"./useTheme-fb1b80de.js";import"./useThemable-ec4d1a05.js";import"./index-d3ea75b5.js";import"./index-5fe204ca.js";import"./index-56eca6dc.js";import"./mapMainAxisAlignment-e13c2957.js";const K={component:s},e=a=>r(u,{highlight:!0,children:g(s,{...a,children:[r(i,{label:"A"}),r(i,{label:"B"}),r(i,{label:"C"})]})});e.args={align:"start",gutter:"md",wrap:!1};const t=a=>r(u,{highlight:!0,maxWidth:"24rem",children:g(s,{...a,children:[r(o,{label:"Wijzig adres"}),r(o,{label:"Voeg adres toe",variant:"secondary"}),r(o,{label:"Verwijder adres",variant:"secondary"})]})});t.args={gutter:"md",wrap:!0};var n,m,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => <Canvas highlight>
    <Row {...args}>
      <Block label="A" />
      <Block label="B" />
      <Block label="C" />
    </Row>
  </Canvas>`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => (
/**
 * Zet \`wrap\` aan om de items in een rij automatisch over meerdere regels te laten vallen.
 * De \`gutter\` wordt dan gebruikt als verticale ruimte tussen de items.
 * Je kunt de verticale ruimte tussen de items ook apart instellen met \`vgutter\`.
 */
<Canvas highlight maxWidth="24rem">
    <Row {...args}>
      <Button label="Wijzig adres" />
      <Button label="Voeg adres toe" variant="secondary" />
      <Button label="Verwijder adres" variant="secondary" />
    </Row>
  </Canvas>)`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const L=["Default","Wrapping"];export{e as Default,t as Wrapping,L as __namedExportsOrder,K as default};

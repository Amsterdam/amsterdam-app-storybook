import{j as r,a as g}from"./useThemable-0a4280af.js";import{B as o}from"./Button-ed79af13.js";import{R as s}from"./Row-2788a98c.js";import{C as u,B as i}from"./Canvas-21ee88eb.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./config-55b2a55c.js";import"./Icon-df791648.js";import"./index-f3e2b6de.js";import"./index-9d475cdf.js";import"./Animated-76626587.js";import"./invariant-b50f8bb2.js";import"./extends-98964cd2.js";import"./index-dd8453f7.js";import"./index-5403444a.js";import"./index-3d43cdb1.js";import"./index-9d6b7183.js";import"./index-75170bcc.js";import"./types-e7c584cc.js";import"./useDeviceContext-0bebe91d.js";import"./index-e9663dc2.js";import"./useTheme-874d5163.js";import"./index-d5ab790d.js";import"./index-56eca6dc.js";import"./mapMainAxisAlignment-e13c2957.js";const H={component:s},e=t=>r(u,{highlight:!0,children:g(s,{...t,children:[r(i,{label:"A"}),r(i,{label:"B"}),r(i,{label:"C"})]})});e.args={align:"start",gutter:"md",wrap:!1};const a=t=>r(u,{highlight:!0,maxWidth:"24rem",children:g(s,{...t,children:[r(o,{label:"Wijzig adres"}),r(o,{label:"Voeg adres toe",variant:"secondary"}),r(o,{label:"Verwijder adres",variant:"secondary"})]})});a.args={gutter:"md",wrap:!0};var n,m,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => <Canvas highlight>
    <Row {...args}>
      <Block label="A" />
      <Block label="B" />
      <Block label="C" />
    </Row>
  </Canvas>`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => (
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
  </Canvas>)`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const I=["Default","Wrapping"];export{e as Default,a as Wrapping,I as __namedExportsOrder,H as default};

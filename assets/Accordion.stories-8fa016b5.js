import{j as r}from"./index-9d7eb5a2.js";import{A as a}from"./Accordion-054dee2a.js";import{P as n}from"./Paragraph-fe9b148a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-1b0b2d87.js";import"./PressableBase-e08e136b.js";import"./usePiwikTrackCustomEventFromProps-08fd71f9.js";import"./version-bc6ab0e8.js";import"./index-d8f1eb60.js";import"./NativeEventEmitter-d842fddb.js";import"./index-7ad04130.js";import"./TextAncestorContext-3b992cff.js";import"./development-443ddb56.js";import"./redux-toolkit.esm-cb9067f1.js";import"./useSentry-f8932b7a.js";import"./index-467b4a8a.js";import"./callBound-c4e9bae7.js";import"./___vite-browser-external_commonjs-proxy-698e55bb.js";import"./index-6f8f641c.js";import"./extends-34e645d9.js";import"./index-b1a24850.js";import"./Box-2c1b2dd1.js";import"./layoutStyles-605143e0.js";import"./useThemable-e2fb66d4.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./Column-babcd871.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./Row-1a77dc83.js";import"./Size-5da4ce15.js";import"./Icon-fb0989cf.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Animated-27d1e0d7.js";import"./index-57ba1d72.js";import"./index-169dd17a.js";import"./types-65ac26c5.js";import"./useDeviceContext-b75c8e9f.js";import"./index-5b2ab920.js";import"./useTheme-c7eb6588.js";import"./Title-e1dfe21b.js";const nr={component:a},f="Een accordeon (Engels: accordion) is een klikbare verticaal gestapelde lijst van koppen om bijbehorende inhoud te verbergen of te vertonen. Je toont inhoud op een progressieve manier aan gebruikers. Ze zijn geschikt zodra gebruikers op zoek zijn naar essentiële inhoud op 1 pagina. Door niet essentiële inhoud te verbergen, kunnen gebruikers focussen op de primaire inhoud.",o=e=>r.jsx(a,{...e,children:r.jsx(n,{children:f})});o.args={title:"Wat is een accordeon?"};const t=e=>r.jsx(a,{...e,children:r.jsx(n,{children:f})});t.args={title:"De titel moet zo kort als mogelijk zijn, maar ook duidelijk en representatief voor de verborgen inhoud"};const i=()=>r.jsx(r.Fragment,{children:["Grof afval","Restafval","Containers in de buurt","Recyclepunten"].map(e=>r.jsx(a,{testID:e,title:e,children:r.jsxs(n,{children:["Informatie over ",e.toLowerCase()," komt hier."]})}))});var p,s,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Accordion {...args}>
    <Paragraph>{paragraphText}</Paragraph>
  </Accordion>`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => <Accordion {...args}>
    <Paragraph>{paragraphText}</Paragraph>
  </Accordion>`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => <>
    {['Grof afval', 'Restafval', 'Containers in de buurt', 'Recyclepunten'].map(title => <Accordion testID={title} title={title}>
          <Paragraph>
            Informatie over {title.toLowerCase()} komt hier.
          </Paragraph>
        </Accordion>)}
  </>`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const pr=["Default","LongTitle","Multiple"];export{o as Default,t as LongTitle,i as Multiple,pr as __namedExportsOrder,nr as default};
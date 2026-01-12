import{an as C,j as t}from"./iframe-2WOISzTj.js";import{C as d}from"./Column-BDvyZuKA.js";import{R}from"./Row-C2dYhesB.js";import{I as D}from"./Icon-QoxyJgvO.js";import{P as u}from"./Phrase-CU6JC_12.js";import{T}from"./Title-DfvsH3nD.js";import{f as v}from"./formatTimeToDisplay-DQCXrtnc.js";import"./preload-helper-Dp1pzeXC.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-BVWDFn76.js";import"./index-O4vn9MCf.js";import"./types-CVDZqz9V.js";import"./useDeviceContext-Ch6pLeLd.js";import"./AccessibleText-D5cvzbJQ.js";const B={1:{label:"Rustig",icon:"crowdCalm",color:"confirm"},2:{label:"Gemiddeld",icon:"crowdMedium",color:"alert"},3:{label:"Druk",icon:"crowdBusy",color:"warning"},0:{label:"Niet beschikbaar",icon:"crowdUnknown",color:"secondary"}},G=({lastUpdate:{state:a,time:e}})=>{const o=[1,2,3].includes(a)&&e!==null,r=B[o?a:0],{label:c,icon:k,color:N}=r;return{label:c,icon:k,color:N,time:C(Number(e)),available:o}},m=({pollingStation:a})=>{const{label:e,icon:o,color:p,time:r,available:c}=G(a);return t.jsxs(d,{gutter:"xs",children:[t.jsx(T,{level:"h4",text:"Drukte nu"}),t.jsxs(d,{gutter:"no",children:[t.jsxs(R,{gutter:"sm",children:[t.jsx(D,{color:p,name:o,size:"lg"}),t.jsx(u,{children:e})]}),!!c&&!!r&&t.jsxs(u,{color:"secondary",children:["Laatste update"," ",v(r,{includeHoursLabel:!0})]})]})]})};try{m.displayName="PollingStationCrowdStatus",m.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",props:{pollingStation:{defaultValue:null,description:"",name:"pollingStation",required:!0,type:{name:"PollingStation"}}}}}catch{}const X={component:m},n={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},s={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};var g,S,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 1,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 2,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var U,j,w;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 3,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var y,P,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 0,
        time: null
      }
    } as PollingStation
  }
}`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Y=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{i as Druk,s as Gemiddeld,l as NietBeschikbaar,n as Rustig,Y as __namedExportsOrder,X as default};

import{an as N,j as o}from"./iframe-B7i7tXCx.js";import{C as u}from"./Column-Ci-Eo2V1.js";import{R}from"./Row-D1cvZEj-.js";import{I as v}from"./Icon-JlG3CXva.js";import{P as g}from"./Phrase-CcmFVqHD.js";import{T}from"./Title-DX3Gi7wu.js";import{f as B}from"./formatTimeToDisplay-BaOPWKlI.js";import"./preload-helper-Dp1pzeXC.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-I9b_Aaav.js";import"./index-Bq5GpZD8.js";import"./types-CVDZqz9V.js";import"./useDeviceContext-CItEvJAE.js";import"./AccessibleText-HduLBn5I.js";var a=(t=>(t[t.calm=1]="calm",t[t.medium=2]="medium",t[t.busy=3]="busy",t[t.unknown=0]="unknown",t))(a||{});const G={[a.calm]:{label:"Rustig",icon:"crowdCalm",color:"confirm"},[a.medium]:{label:"Gemiddeld",icon:"crowdMedium",color:"alert"},[a.busy]:{label:"Druk",icon:"crowdBusy",color:"warning"},[a.unknown]:{label:"Onbekend",icon:"crowdUnknown",color:"secondary"}},I=new Set([a.calm,a.medium,a.busy]),L=({lastUpdate:{state:t,time:r}})=>{const e=I.has(t)&&r!==null,c=e?t:a.unknown,n=G[c],{label:d,icon:C,color:D}=n;return{label:d,icon:C,color:D,time:N(Number(r)),available:e}},p=({pollingStation:t})=>{const{label:r,icon:e,color:c,time:n,available:d}=L(t);return o.jsxs(u,{gutter:"xs",children:[o.jsx(T,{level:"h5",text:"Drukte nu"}),o.jsxs(u,{gutter:"no",children:[o.jsxs(R,{gutter:"sm",children:[o.jsx(v,{color:c,name:e,size:"lg"}),o.jsx(g,{children:r})]}),!!d&&!!n&&o.jsxs(g,{color:"secondary",children:["Laatste update"," ",B(n,{includeHoursLabel:!0})]})]})]})};try{p.displayName="PollingStationCrowdStatus",p.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",props:{pollingStation:{defaultValue:null,description:"",name:"pollingStation",required:!0,type:{name:"PollingStation"}}}}}catch{}const $={component:p},s={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},m={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};var S,b,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 1,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,y,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 2,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,h,P;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 3,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...(P=(h=l.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var U,j,_;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 0,
        time: null
      }
    } as PollingStation
  }
}`,...(_=(j=m.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const E=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{l as Druk,i as Gemiddeld,m as NietBeschikbaar,s as Rustig,E as __namedExportsOrder,$ as default};

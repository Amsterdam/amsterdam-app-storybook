import{au as N,j as o}from"./iframe-CUGsW0B6.js";import{C as u}from"./Column-Ccxlfvsk.js";import{R}from"./Row-3tF2qlDW.js";import{I as v}from"./Icon-cGeC_v5f.js";import{P as g}from"./Phrase-BM1yVssC.js";import{T}from"./Title-CVcvGjNp.js";import{f as G}from"./formatTimeToDisplay-Conovb1m.js";import"./preload-helper-Dp1pzeXC.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-DHDNYWmL.js";import"./index-xO0An70S.js";import"./useDeviceContext-BAqmORQk.js";import"./AccessibleText-CUmHckJh.js";var a=(t=>(t[t.calm=1]="calm",t[t.medium=2]="medium",t[t.busy=3]="busy",t[t.unknown=0]="unknown",t))(a||{});const I={[a.calm]:{label:"Rustig",icon:"crowd-calm",color:"confirm"},[a.medium]:{label:"Gemiddeld",icon:"crowd-medium",color:"alert"},[a.busy]:{label:"Druk",icon:"crowd-busy",color:"warning"},[a.unknown]:{label:"Onbekend",icon:"crowd-unknown",color:"secondary"}},B=new Set([a.calm,a.medium,a.busy]),L=({lastUpdate:{state:t,time:e}})=>{const r=B.has(t)&&e!==null,c=r?t:a.unknown,n=I[c],{label:d,icon:C,color:D}=n;return{label:d,icon:C,color:D,time:N(Number(e)),available:r}},p=({pollingStation:t})=>{const{label:e,icon:r,color:c,time:n,available:d}=L(t);return o.jsxs(u,{gutter:"xs",children:[o.jsx(T,{level:"h5",text:"Drukte nu"}),o.jsxs(u,{gutter:"no",children:[o.jsxs(R,{gutter:"sm",children:[o.jsx(v,{color:c,name:r,size:"lg"}),o.jsx(g,{children:e})]}),!!d&&!!n&&o.jsxs(g,{color:"secondary",children:["Laatste update"," ",G(n,{includeHoursLabel:!0})]})]})]})};try{p.displayName="PollingStationCrowdStatus",p.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",props:{pollingStation:{defaultValue:null,description:"",name:"pollingStation",required:!0,type:{name:"PollingStation"}}}}}catch{}const Z={component:p},s={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},m={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};var S,b,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(h=l.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var j,U,_;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 0,
        time: null
      }
    } as PollingStation
  }
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const $=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{l as Druk,i as Gemiddeld,m as NietBeschikbaar,s as Rustig,$ as __namedExportsOrder,Z as default};

import{an as D,j as o}from"./iframe-3TXg6WoG.js";import{C as u}from"./Column-Ok3wDOF6.js";import{R}from"./Row-Br2kmoWu.js";import{I as v}from"./Icon-D2JDQLQf.js";import{P as g}from"./Phrase-CdpnxuT6.js";import{T}from"./Title-05cDNhIL.js";import{f as B}from"./formatTimeToDisplay-BUkobS6C.js";import"./preload-helper-Dp1pzeXC.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-B2uwHoQi.js";import"./index-v6X-xQeP.js";import"./types-CVDZqz9V.js";import"./useDeviceContext-CKLjKzXG.js";import"./AccessibleText-BnMstB7w.js";var a=(t=>(t[t.calm=1]="calm",t[t.medium=2]="medium",t[t.busy=3]="busy",t[t.unknown=0]="unknown",t))(a||{});const G={[a.calm]:{label:"Rustig",icon:"crowdCalm",color:"confirm"},[a.medium]:{label:"Gemiddeld",icon:"crowdMedium",color:"alert"},[a.busy]:{label:"Druk",icon:"crowdBusy",color:"warning"},[a.unknown]:{label:"Niet beschikbaar",icon:"crowdUnknown",color:"secondary"}},I=new Set([a.calm,a.medium,a.busy]),L=({lastUpdate:{state:t,time:r}})=>{const e=I.has(t)&&r!==null,c=e?t:a.unknown,n=G[c],{label:d,icon:C,color:N}=n;return{label:d,icon:C,color:N,time:D(Number(r)),available:e}},p=({pollingStation:t})=>{const{label:r,icon:e,color:c,time:n,available:d}=L(t);return o.jsxs(u,{gutter:"xs",children:[o.jsx(T,{level:"h4",text:"Drukte nu"}),o.jsxs(u,{gutter:"no",children:[o.jsxs(R,{gutter:"sm",children:[o.jsx(v,{color:c,name:e,size:"lg"}),o.jsx(g,{children:r})]}),!!d&&!!n&&o.jsxs(g,{color:"secondary",children:["Laatste update"," ",B(n,{includeHoursLabel:!0})]})]})]})};try{p.displayName="PollingStationCrowdStatus",p.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",props:{pollingStation:{defaultValue:null,description:"",name:"pollingStation",required:!0,type:{name:"PollingStation"}}}}}catch{}const $={component:p},s={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},m={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};var S,b,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,k,P;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 3,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var U,j,_;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 0,
        time: null
      }
    } as PollingStation
  }
}`,...(_=(j=m.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const E=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{l as Druk,i as Gemiddeld,m as NietBeschikbaar,s as Rustig,E as __namedExportsOrder,$ as default};

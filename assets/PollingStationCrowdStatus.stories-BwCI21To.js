import{at as w,j as o}from"./iframe-9vFR-pJX.js";import{C as u}from"./Column-BhXvFrpf.js";import{R as x}from"./Row-ajbfakB1.js";import{I as y}from"./Icon-BVlDfRhD.js";import{P as g}from"./Phrase-CqoQ7xiS.js";import{T as f}from"./Title-BrOJqiRE.js";import{f as k}from"./formatTimeToDisplay-BwXJGMcX.js";import"./preload-helper-Zf8nSx-t.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-avv3biO1.js";import"./index-DMn46bmY.js";import"./useDeviceContext-Ckc3iJ0y.js";import"./AccessibleText-Q3nCx6so.js";var a=(t=>(t[t.calm=1]="calm",t[t.medium=2]="medium",t[t.busy=3]="busy",t[t.unknown=0]="unknown",t))(a||{});const h={[a.calm]:{label:"Rustig",icon:"crowd-calm",color:"confirm"},[a.medium]:{label:"Gemiddeld",icon:"crowd-medium",color:"alert"},[a.busy]:{label:"Druk",icon:"crowd-busy",color:"warning"},[a.unknown]:{label:"Onbekend",icon:"crowd-unknown",color:"secondary"}},P=new Set([a.calm,a.medium,a.busy]),j=({lastUpdate:{state:t,time:e}})=>{const r=P.has(t)&&e!==null,c=r?t:a.unknown,n=h[c],{label:d,icon:S,color:b}=n;return{label:d,icon:S,color:b,time:w(Number(e)),available:r}},p=({pollingStation:t})=>{const{label:e,icon:r,color:c,time:n,available:d}=j(t);return o.jsxs(u,{gutter:"xs",children:[o.jsx(f,{level:"h5",text:"Drukte nu"}),o.jsxs(u,{gutter:"no",children:[o.jsxs(x,{gutter:"sm",children:[o.jsx(y,{color:c,name:r,size:"lg"}),o.jsx(g,{children:e})]}),!!d&&!!n&&o.jsxs(g,{color:"secondary",children:["Laatste update"," ",k(n,{includeHoursLabel:!0})]})]})]})};try{p.displayName="PollingStationCrowdStatus",p.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",props:{pollingStation:{defaultValue:null,description:"",name:"pollingStation",required:!0,type:{name:"PollingStation"}}}}}catch{}const z={component:p},s={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},m={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 1,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 2,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 3,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 0,
        time: null
      }
    } as PollingStation
  }
}`,...m.parameters?.docs?.source}}};const F=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{l as Druk,i as Gemiddeld,m as NietBeschikbaar,s as Rustig,F as __namedExportsOrder,z as default};

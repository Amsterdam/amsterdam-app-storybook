import{a2 as w,j as a}from"./iframe-Cr_9xO_d.js";import{C as u}from"./Column-aCYs9K93.js";import{R as x}from"./Row-_bBzCc_o.js";import{I as f}from"./Icon-FtzFwz7a.js";import{P as g}from"./Phrase-DrKuPhcy.js";import{T as y}from"./Title-BsYMsf8v.js";import{f as P}from"./formatTimeToDisplay-DthPxOhY.js";import"./preload-helper-Zf8nSx-t.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-BU7PK8I0.js";import"./xml-BMGsci9D.js";import"./svgIcons-CIETuMox.js";import"./icons-DuCYAvGb.js";import"./useDeviceContext-CTPwlNtk.js";import"./AccessibleText-BTEsUz7V.js";var o=(t=>(t[t.calm=1]="calm",t[t.medium=2]="medium",t[t.busy=3]="busy",t[t.unknown=0]="unknown",t))(o||{});const h={[o.calm]:{label:"Rustig",icon:"crowd-calm",color:"confirm"},[o.medium]:{label:"Gemiddeld",icon:"crowd-medium",color:"alert"},[o.busy]:{label:"Druk",icon:"crowd-busy",color:"warning"},[o.unknown]:{label:"Onbekend",icon:"crowd-unknown",color:"secondary"}},k=new Set([o.calm,o.medium,o.busy]),U=({lastUpdate:{state:t,time:e}})=>{const n=k.has(t)&&e!==null,c=n?t:o.unknown,r=h[c],{label:d,icon:S,color:b}=r;return{label:d,icon:S,color:b,time:w(Number(e)),available:n}},p=({pollingStation:t})=>{const{label:e,icon:n,color:c,time:r,available:d}=U(t);return a.jsxs(u,{gutter:"xs",children:[a.jsx(y,{level:"h5",text:"Drukte nu"}),a.jsxs(u,{gutter:"no",children:[a.jsxs(x,{gutter:"sm",children:[a.jsx(f,{color:c,name:n,size:"lg"}),a.jsx(g,{children:e})]}),!!d&&!!r&&a.jsxs(g,{color:"secondary",children:["Laatste update"," ",P(r,{includeHoursLabel:!0})]})]})]})};try{p.displayName="PollingStationCrowdStatus",p.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",filePath:"/Users/runner/work/1/s/src/modules/elections/components/PollingStationCrowdStatus.tsx",methods:[],props:{pollingStation:{defaultValue:null,declarations:[{fileName:"s/src/modules/elections/components/PollingStationCrowdStatus.tsx",name:"TypeLiteral"}],description:"",name:"pollingStation",required:!0,tags:{},type:{name:"PollingStation"}}},tags:{}}}catch{}const H={component:p},s={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},m={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const M=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{l as Druk,i as Gemiddeld,m as NietBeschikbaar,s as Rustig,M as __namedExportsOrder,H as default};

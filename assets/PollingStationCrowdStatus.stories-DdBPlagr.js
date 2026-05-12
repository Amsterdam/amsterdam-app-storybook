import{a3 as w,j as o}from"./iframe-2aTG_HH4.js";import{C as u}from"./Column-CX1s5wEN.js";import{R as x}from"./Row-ClsYsymO.js";import{I as f}from"./Icon-CS4jL1Vs.js";import{P as g}from"./Phrase-DW8we_Oh.js";import{T as y}from"./Title-BwNMsh90.js";import{f as P}from"./formatTimeToDisplay-no6vLjls.js";import"./preload-helper-Zf8nSx-t.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-Bet41Qo4.js";import"./xml-CojSnlL1.js";import"./svgIcons-thXCMz_4.js";import"./useDeviceContext-C5V0PscM.js";import"./AccessibleText-B5snsJzU.js";var a=(t=>(t[t.calm=1]="calm",t[t.medium=2]="medium",t[t.busy=3]="busy",t[t.unknown=0]="unknown",t))(a||{});const h={[a.calm]:{label:"Rustig",icon:"crowd-calm",color:"confirm"},[a.medium]:{label:"Gemiddeld",icon:"crowd-medium",color:"alert"},[a.busy]:{label:"Druk",icon:"crowd-busy",color:"warning"},[a.unknown]:{label:"Onbekend",icon:"crowd-unknown",color:"secondary"}},k=new Set([a.calm,a.medium,a.busy]),U=({lastUpdate:{state:t,time:e}})=>{const n=k.has(t)&&e!==null,c=n?t:a.unknown,r=h[c],{label:d,icon:S,color:b}=r;return{label:d,icon:S,color:b,time:w(Number(e)),available:n}},p=({pollingStation:t})=>{const{label:e,icon:n,color:c,time:r,available:d}=U(t);return o.jsxs(u,{gutter:"xs",children:[o.jsx(y,{level:"h5",text:"Drukte nu"}),o.jsxs(u,{gutter:"no",children:[o.jsxs(x,{gutter:"sm",children:[o.jsx(f,{color:c,name:n,size:"lg"}),o.jsx(g,{children:e})]}),!!d&&!!r&&o.jsxs(g,{color:"secondary",children:["Laatste update"," ",P(r,{includeHoursLabel:!0})]})]})]})};try{p.displayName="PollingStationCrowdStatus",p.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",filePath:"/Users/runner/work/1/s/src/modules/elections/components/PollingStationCrowdStatus.tsx",methods:[],props:{pollingStation:{defaultValue:null,declarations:[{fileName:"s/src/modules/elections/components/PollingStationCrowdStatus.tsx",name:"TypeLiteral"}],description:"",name:"pollingStation",required:!0,tags:{},type:{name:"PollingStation"}}},tags:{}}}catch{}const F={component:p},s={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},m={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const H=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{l as Druk,i as Gemiddeld,m as NietBeschikbaar,s as Rustig,H as __namedExportsOrder,F as default};

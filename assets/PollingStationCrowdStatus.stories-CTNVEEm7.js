import{a2 as w,j as a}from"./iframe-D7C1q7N5.js";import{C as u}from"./Column-DNq2ThiA.js";import{R as x}from"./Row-C5D21uOB.js";import{I as f}from"./Icon-C0zFLryY.js";import{P as g}from"./Phrase-BO3ON52a.js";import{T as y}from"./Title-BCzUQwhr.js";import{f as P}from"./formatTimeToDisplay-nhCdoHVl.js";import"./preload-helper-Zf8nSx-t.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useThemable-D4TuQDFu.js";import"./xml-B_MkMFB3.js";import"./svgIcons-DNXizslW.js";import"./icons-DnHWPICx.js";import"./useDeviceContext-ZDDbZVis.js";import"./AccessibleText-CE85zWjz.js";import"./getAccessibleLabel-DVFETaIl.js";var o=(t=>(t[t.calm=1]="calm",t[t.medium=2]="medium",t[t.busy=3]="busy",t[t.unknown=0]="unknown",t))(o||{});const h={[o.calm]:{label:"Rustig",icon:"crowd-calm",color:"confirm"},[o.medium]:{label:"Gemiddeld",icon:"crowd-medium",color:"alert"},[o.busy]:{label:"Druk",icon:"crowd-busy",color:"warning"},[o.unknown]:{label:"Onbekend",icon:"crowd-unknown",color:"secondary"}},k=new Set([o.calm,o.medium,o.busy]),U=({lastUpdate:{state:t,time:e}})=>{const n=k.has(t)&&e!==null,c=n?t:o.unknown,r=h[c],{label:d,icon:S,color:b}=r;return{label:d,icon:S,color:b,time:w(Number(e)),available:n}},p=({pollingStation:t})=>{const{label:e,icon:n,color:c,time:r,available:d}=U(t);return a.jsxs(u,{gutter:"xs",children:[a.jsx(y,{level:"h5",text:"Drukte nu"}),a.jsxs(u,{gutter:"no",children:[a.jsxs(x,{gutter:"sm",children:[a.jsx(f,{color:c,name:n,size:"lg"}),a.jsx(g,{children:e})]}),!!d&&!!r&&a.jsxs(g,{color:"secondary",children:["Laatste update"," ",P(r,{includeHoursLabel:!0})]})]})]})};try{p.displayName="PollingStationCrowdStatus",p.__docgenInfo={description:"",displayName:"PollingStationCrowdStatus",filePath:"/Users/runner/work/1/s/src/modules/elections/components/PollingStationCrowdStatus.tsx",methods:[],props:{pollingStation:{defaultValue:null,declarations:[{fileName:"s/src/modules/elections/components/PollingStationCrowdStatus.tsx",name:"TypeLiteral"}],description:"",name:"pollingStation",required:!0,tags:{},type:{name:"PollingStation"}}},tags:{}}}catch{}const M={component:p},s={args:{pollingStation:{lastUpdate:{state:1,time:"1761736545"}}}},i={args:{pollingStation:{lastUpdate:{state:2,time:"1761736545"}}}},l={args:{pollingStation:{lastUpdate:{state:3,time:"1761736545"}}}},m={args:{pollingStation:{lastUpdate:{state:0,time:null}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const V=["Rustig","Gemiddeld","Druk","NietBeschikbaar"];export{l as Druk,i as Gemiddeld,m as NietBeschikbaar,s as Rustig,V as __namedExportsOrder,M as default};

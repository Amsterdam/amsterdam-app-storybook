import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{Ct as n,St as r}from"./iframe-C49w6EqW.js";import{n as i,t as a}from"./Title-BK3iq2rk.js";import{n as o,t as s}from"./Row-CVuAnXKa.js";import{n as c,t as l}from"./Column-C_AR3v7I.js";import{n as u,t as d}from"./Icon-DgdSHQoQ.js";import{n as f,t as p}from"./Phrase-DNzoVUh2.js";import{n as m,t as h}from"./formatTimeToDisplay-CZvdOAMu.js";var g,_=e((()=>{g=function(e){return e[e.calm=1]=`calm`,e[e.medium=2]=`medium`,e[e.busy=3]=`busy`,e[e.unknown=0]=`unknown`,e}({})})),v,y=e((()=>{_(),v={[g.calm]:{label:`Rustig`,icon:`crowd-calm`,color:`confirm`},[g.medium]:{label:`Gemiddeld`,icon:`crowd-medium`,color:`alert`},[g.busy]:{label:`Druk`,icon:`crowd-busy`,color:`warning`},[g.unknown]:{label:`Onbekend`,icon:`crowd-unknown`,color:`secondary`}}})),b,x,S=e((()=>{y(),_(),n(),b=new Set([g.calm,g.medium,g.busy]),x=({lastUpdate:{state:e,time:t}})=>{let n=b.has(e)&&t!==null,{label:i,icon:a,color:o}=v[n?e:g.unknown];return{label:i,icon:a,color:o,time:r(Number(t)),available:n}}})),C,w,T=e((()=>{c(),o(),u(),f(),i(),S(),m(),C=t(),w=({pollingStation:e})=>{let{label:t,icon:n,color:r,time:i,available:o}=x(e);return(0,C.jsxs)(l,{gutter:`xs`,children:[(0,C.jsx)(a,{level:`h5`,text:`Drukte nu`}),(0,C.jsxs)(l,{gutter:`no`,children:[(0,C.jsxs)(s,{gutter:`sm`,children:[(0,C.jsx)(d,{color:r,name:n,size:`lg`}),(0,C.jsx)(p,{children:t})]}),!!o&&!!i&&(0,C.jsxs)(p,{color:`secondary`,children:[`Laatste update`,` `,h(i,{includeHoursLabel:!0})]})]})]})};try{w.displayName=`PollingStationCrowdStatus`,w.__docgenInfo={description:``,displayName:`PollingStationCrowdStatus`,filePath:`/Users/runner/work/1/s/src/modules/elections/components/PollingStationCrowdStatus.tsx`,methods:[],props:{pollingStation:{defaultValue:null,declarations:[{fileName:`s/src/modules/elections/components/PollingStationCrowdStatus.tsx`,name:`TypeLiteral`}],description:``,name:`pollingStation`,required:!0,tags:{},type:{name:`PollingStation`}}},tags:{}}}catch{}})),E,D,O,k,A,j;e((()=>{T(),E={component:w},D={args:{pollingStation:{lastUpdate:{state:1,time:`1761736545`}}}},O={args:{pollingStation:{lastUpdate:{state:2,time:`1761736545`}}}},k={args:{pollingStation:{lastUpdate:{state:3,time:`1761736545`}}}},A={args:{pollingStation:{lastUpdate:{state:0,time:null}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 1,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 2,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 3,
        time: '1761736545'
      }
    } as PollingStation
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    pollingStation: {
      lastUpdate: {
        state: 0,
        time: null
      }
    } as PollingStation
  }
}`,...A.parameters?.docs?.source}}},j=[`Rustig`,`Gemiddeld`,`Druk`,`NietBeschikbaar`]}))();export{k as Druk,O as Gemiddeld,A as NietBeschikbaar,D as Rustig,j as __namedExportsOrder,E as default};
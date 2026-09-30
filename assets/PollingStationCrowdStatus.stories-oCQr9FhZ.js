import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,r}from"./dayjs-BEvYDeBU.js";import{n as i,t as a}from"./Column-sXaTAOG2.js";import{n as o,t as s}from"./Phrase-CJc3Dm19.js";import{n as c,t as l}from"./Title-BMby-mig.js";import{n as u,t as d}from"./Row-uEyil4ey.js";import{n as f,t as p}from"./Icon-CVwv82_w.js";import{n as m,t as h}from"./formatTimeToDisplay-bdaWzxI6.js";var g;function _(){return(_=e((()=>{g=function(e){return e[e.calm=1]=`calm`,e[e.medium=2]=`medium`,e[e.busy=3]=`busy`,e[e.unknown=0]=`unknown`,e}({})})))()}var v;function y(){return(y=e((()=>{_(),v={[g.calm]:{label:`Rustig`,icon:`crowd-calm`,color:`confirm`},[g.medium]:{label:`Gemiddeld`,icon:`crowd-medium`,color:`warning`},[g.busy]:{label:`Druk`,icon:`crowd-busy`,color:`negative`},[g.unknown]:{label:`Onbekend`,icon:`crowd-unknown`,color:`secondary`}}})))()}var b,x;function S(){return(S=e((()=>{y(),_(),n(),b=new Set([g.calm,g.medium,g.busy]),x=({lastUpdate:{state:e,time:t}})=>{let n=b.has(e)&&t!==null,i=n?e:g.unknown,{label:a,icon:o,color:s}=v[i];return{label:a,icon:o,color:s,time:r(Number(t)),available:n}}})))()}var C,w;function T(){return(T=e((()=>{i(),u(),f(),o(),c(),S(),m(),C=t(),w=({pollingStation:e})=>{let{label:t,icon:n,color:r,time:i,available:o}=x(e);return(0,C.jsxs)(a,{gutter:`xs`,children:[(0,C.jsx)(l,{level:`h5`,text:`Drukte nu`}),(0,C.jsxs)(a,{gutter:`no`,children:[(0,C.jsxs)(d,{gutter:`sm`,children:[(0,C.jsx)(p,{color:r,name:n,size:`lg`}),(0,C.jsx)(s,{children:t})]}),!!o&&!!i&&(0,C.jsxs)(s,{color:`secondary`,children:[`Laatste update`,` `,h(i,{includeHoursLabel:!0})]})]})]})};try{w.displayName=`PollingStationCrowdStatus`,w.__docgenInfo={description:``,displayName:`PollingStationCrowdStatus`,filePath:`/Users/runner/work/1/s/src/modules/elections/components/PollingStationCrowdStatus.tsx`,methods:[],props:{pollingStation:{defaultValue:null,declarations:[{fileName:`s/src/modules/elections/components/PollingStationCrowdStatus.tsx`,name:`TypeLiteral`}],description:``,name:`pollingStation`,required:!0,tags:{},type:{name:`PollingStation`}}},tags:{}}}catch{}})))()}var E,D,O,k,A,j;function M(){return(M=e((()=>{T(),E={component:w},D={args:{pollingStation:{lastUpdate:{state:1,time:`1761736545`}}}},O={args:{pollingStation:{lastUpdate:{state:2,time:`1761736545`}}}},k={args:{pollingStation:{lastUpdate:{state:3,time:`1761736545`}}}},A={args:{pollingStation:{lastUpdate:{state:0,time:null}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Rustig`,`Gemiddeld`,`Druk`,`NietBeschikbaar`]})))()}M();export{k as Druk,O as Gemiddeld,A as NietBeschikbaar,D as Rustig,j as __namedExportsOrder,E as default};
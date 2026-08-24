import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{G as n,K as r,ct as i,n as a,st as o}from"./dist-NCr0OYBw.js";import{n as s,t as c}from"./useThemable-B_ITykoM.js";import{n as l,t as u}from"./Column-CnV6dJkR.js";import{n as d,t as f}from"./Title-DqLwl8MI.js";import{n as p,t as m}from"./BottomSheetLabelValueRow-DI3lqX2g.js";var h,g,_,v=e((()=>{a(),c(),h=t(),g=({color:e=`default`,height:t=`sm`})=>(0,h.jsx)(n,{style:s(_(e,t)).divider}),_=(e,t)=>({color:n,border:r})=>i.create({divider:{height:r.width[t],backgroundColor:n.box.border[e]}});try{g.displayName=`Divider`,g.__docgenInfo={description:``,displayName:`Divider`,filePath:`/Users/runner/work/1/s/src/components/ui/Divider.tsx`,methods:[],props:{color:{defaultValue:{value:`default`},declarations:[{fileName:`s/src/components/ui/Divider.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "cityPass" | "distinct" | "emphasis" | "onGrey"`,value:[{value:`"default"`},{value:`"cityPass"`},{value:`"distinct"`},{value:`"emphasis"`},{value:`"onGrey"`}]}},height:{defaultValue:{value:`sm`},declarations:[{fileName:`s/src/components/ui/Divider.tsx`,name:`TypeLiteral`}],description:``,name:`height`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md" | "lg" | "xl"`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xl"`}]}}},tags:{}}}catch{}})),y,b,x=e((()=>{y=(e,t)=>b(e)&&b(t)&&Object.entries(t).every(([t,n])=>Object.hasOwn(e,t)&&Array.isArray(n)?n.includes(typeof e[t]):typeof e[t]===n),b=e=>typeof e==`object`&&!!e})),S,C,w=e((()=>{p(),v(),l(),d(),x(),S=t(),C=({title:e,showDividers:t=!1,rows:n})=>(0,S.jsxs)(u,{gutter:`sm`,children:[!!e&&(0,S.jsx)(f,{level:`h5`,text:e}),n.map((e,n)=>y(e,{key:[`string`,`number`],value:[`string`,`number`]})?(0,S.jsxs)(S.Fragment,{children:[!!t&&n>0&&(0,S.jsx)(g,{color:`emphasis`,height:`md`},`BottomSheetKeyValueTable-${n}-divider`),(0,S.jsx)(m,{label:e.key,value:e.value},`BottomSheetKeyValueTable-${n}`)]}):null)]});try{C.displayName=`BottomSheetKeyValueTable`,C.__docgenInfo={description:``,displayName:`BottomSheetKeyValueTable`,filePath:`/Users/runner/work/1/s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,methods:[],props:{rows:{defaultValue:null,declarations:[{fileName:`s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,name:`TypeLiteral`}],description:``,name:`rows`,required:!0,tags:{},type:{name:`{ key: string | number; value: string | number; }[]`}},showDividers:{defaultValue:{value:`false`},declarations:[{fileName:`s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,name:`TypeLiteral`}],description:``,name:`showDividers`,required:!1,tags:{},type:{name:`boolean`}},title:{defaultValue:null,declarations:[{fileName:`s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string | null`}}},tags:{}}}catch{}})),T,E,D,O,k;e((()=>{w(),T={component:C},E={args:{rows:[{key:`Key 1`,value:`Value 1`},{key:`Key 2`,value:`Value 2`}],title:`Key Value Table`}},D={args:{rows:[{key:`Key 1`,value:`Value 1`},{key:`Key 2`,value:`Value 2`}],title:void 0}},O={args:{rows:[{key:`Key 1`,value:`Value 1`},{key:`Key 2`,value:`Value 2`}],title:`Key Value Table`,showDividers:!0}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      key: 'Key 1',
      value: 'Value 1'
    }, {
      key: 'Key 2',
      value: 'Value 2'
    }],
    title: 'Key Value Table'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      key: 'Key 1',
      value: 'Value 1'
    }, {
      key: 'Key 2',
      value: 'Value 2'
    }],
    title: undefined
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    rows: [{
      key: 'Key 1',
      value: 'Value 1'
    }, {
      key: 'Key 2',
      value: 'Value 2'
    }],
    title: 'Key Value Table',
    showDividers: true
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithoutTitle`,`WithDividers`]}))();export{E as Default,O as WithDividers,D as WithoutTitle,k as __namedExportsOrder,T as default};
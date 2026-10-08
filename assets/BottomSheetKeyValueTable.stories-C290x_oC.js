import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{J as n,lt as r,n as i,q as a,ut as o}from"./dist-CW4nBAfu.js";import{n as s,t as c}from"./useThemable-BpxARurU.js";import{n as l,t as u}from"./Column-DSTKTcrR.js";import{n as d,t as f}from"./Title-Drxk5R4h.js";import{n as p,t as m}from"./BottomSheetLabelValueRow-MWHj0VhG.js";var h,g,_;function v(){return(v=e((()=>{i(),c(),h=t(),g=({color:e=`default`,height:t=`sm`})=>{let n=s(_(e,t));return(0,h.jsx)(a,{style:n.divider})},_=(e,t)=>({color:n,border:r})=>o.create({divider:{height:r.width[t],backgroundColor:n.box.border[e]}});try{g.displayName=`Divider`,g.__docgenInfo={description:``,displayName:`Divider`,filePath:`/Users/runner/work/1/s/src/components/ui/Divider.tsx`,methods:[],props:{color:{defaultValue:{value:`default`},declarations:[{fileName:`s/src/components/ui/Divider.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`enum`,raw:`"default" | "cityPass" | "emphasis" | "distinct" | "onGrey"`,value:[{value:`"default"`},{value:`"cityPass"`},{value:`"emphasis"`},{value:`"distinct"`},{value:`"onGrey"`}]}},height:{defaultValue:{value:`sm`},declarations:[{fileName:`s/src/components/ui/Divider.tsx`,name:`TypeLiteral`}],description:``,name:`height`,required:!1,tags:{},type:{name:`enum`,raw:`"sm" | "md" | "lg" | "xl"`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`},{value:`"xl"`}]}}},tags:{}}}catch{}})))()}var y,b;function x(){return(x=e((()=>{y=(e,t)=>b(e)&&b(t)&&Object.entries(t).every(([t,n])=>Object.hasOwn(e,t)&&Array.isArray(n)?n.includes(typeof e[t]):typeof e[t]===n),b=e=>typeof e==`object`&&!!e})))()}var S,C;function w(){return(w=e((()=>{p(),v(),l(),d(),x(),S=t(),C=({title:e,showDividers:t=!1,rows:n})=>(0,S.jsxs)(u,{gutter:`sm`,children:[!!e&&(0,S.jsx)(f,{level:`h5`,text:e}),n.map((e,n)=>y(e,{key:[`string`,`number`],value:[`string`,`number`]})?(0,S.jsxs)(S.Fragment,{children:[!!t&&n>0&&(0,S.jsx)(g,{color:`emphasis`,height:`md`},`BottomSheetKeyValueTable-${n}-divider`),(0,S.jsx)(m,{label:e.key,value:e.value},`BottomSheetKeyValueTable-${n}`)]}):null)]});try{C.displayName=`BottomSheetKeyValueTable`,C.__docgenInfo={description:``,displayName:`BottomSheetKeyValueTable`,filePath:`/Users/runner/work/1/s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,methods:[],props:{rows:{defaultValue:null,declarations:[{fileName:`s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,name:`TypeLiteral`}],description:``,name:`rows`,required:!0,tags:{},type:{name:`{ key: string | number; value: string | number; }[]`}},showDividers:{defaultValue:{value:`false`},declarations:[{fileName:`s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,name:`TypeLiteral`}],description:``,name:`showDividers`,required:!1,tags:{},type:{name:`boolean`}},title:{defaultValue:null,declarations:[{fileName:`s/src/components/features/bottom-sheet/BottomSheetKeyValueTable.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string | null`}}},tags:{}}}catch{}})))()}var T,E,D,O,k;function A(){return(A=e((()=>{w(),T={component:C},E={args:{rows:[{key:`Key 1`,value:`Value 1`},{key:`Key 2`,value:`Value 2`}],title:`Key Value Table`}},D={args:{rows:[{key:`Key 1`,value:`Value 1`},{key:`Key 2`,value:`Value 2`}],title:void 0}},O={args:{rows:[{key:`Key 1`,value:`Value 1`},{key:`Key 2`,value:`Value 2`}],title:`Key Value Table`,showDividers:!0}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithoutTitle`,`WithDividers`]})))()}A();export{E as Default,O as WithDividers,D as WithoutTitle,k as __namedExportsOrder,T as default};
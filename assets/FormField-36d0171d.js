import{j as i}from"./jsx-runtime-ffb262ed.js";import{V as n}from"./index-2bdd647f.js";import{R as d}from"./Row-7c1d2ebc.js";import{l as o}from"./layoutStyles-718959f0.js";const a=({children:e,hide:t=!0,...r})=>i.jsx(n,{accessibilityElementsHidden:t,importantForAccessibility:t?"no-hide-descendants":"auto",...r,children:e});try{a.displayName="HideFromAccessibility",a.__docgenInfo={description:"Use to hide content for accessibility.",displayName:"HideFromAccessibility",props:{hide:{defaultValue:{value:"true"},description:"",name:"hide",required:!1,type:{name:"boolean"}}}}}catch{}const c=({children:e})=>i.jsx(a,{style:[o.grow,o.shrink],children:e}),l=({children:e,label:t,labelPosition:r="start"})=>{const s=i.jsx(c,{children:t});return i.jsxs(d,{gutter:"md",valign:"center",children:[r==="start"&&s,e,r==="end"&&s]})};try{l.displayName="FormField",l.__docgenInfo={description:"",displayName:"FormField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"start"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}}}}}catch{}export{l as F};
import{j as s}from"./index-9d7eb5a2.js";import{d as n}from"./bottomSheet-d90efde7.js";import{V as d}from"./index-b1a24850.js";import{R as c}from"./Row-00cddd21.js";import{l as o}from"./layoutStyles-605143e0.js";const a=({children:e,whileBottomSheetIsOpen:r=!1,...i})=>{const{isOpen:t}=n();return s.jsx(d,{accessibilityElementsHidden:r?t:!0,importantForAccessibility:r?t?"no-hide-descendants":"auto":"no-hide-descendants",...i,children:e})};try{a.displayName="HideFromAccessibility",a.__docgenInfo={description:"Hides the children from accessibility.",displayName:"HideFromAccessibility",props:{whileBottomSheetIsOpen:{defaultValue:{value:"false"},description:"",name:"whileBottomSheetIsOpen",required:!1,type:{name:"boolean"}}}}}catch{}const m=({children:e})=>s.jsx(a,{style:[o.grow,o.shrink],children:e}),l=({children:e,label:r,labelPosition:i="start"})=>{const t=s.jsx(m,{children:r});return s.jsxs(c,{gutter:"md",valign:"center",children:[i==="start"&&t,e,i==="end"&&t]})};try{l.displayName="FormField",l.__docgenInfo={description:"",displayName:"FormField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"start"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}}}}}catch{}export{l as F};

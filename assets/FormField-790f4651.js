import{j as s,a as n}from"./index-1401012c.js";import{u as d}from"./bottomSheet-e8d56961.js";import{V as c}from"./index-8aec880e.js";import{R as m}from"./Row-99740ecb.js";import{l as o}from"./layoutStyles-ee44dbe0.js";const a=({children:e,whileBottomSheetIsOpen:r=!1,...i})=>{const{isOpen:t}=d();return s(c,{accessibilityElementsHidden:r?t:!0,importantForAccessibility:r?t?"no-hide-descendants":"auto":"no-hide-descendants",...i,children:e})};try{a.displayName="HideFromAccessibility",a.__docgenInfo={description:"Hides the children from accessibility.",displayName:"HideFromAccessibility",props:{whileBottomSheetIsOpen:{defaultValue:{value:"false"},description:"",name:"whileBottomSheetIsOpen",required:!1,type:{name:"boolean"}}}}}catch{}const p=({children:e})=>s(a,{style:[o.grow,o.shrink],children:e}),l=({children:e,label:r,labelPosition:i="start"})=>{const t=s(p,{children:r});return n(m,{gutter:"md",valign:"center",children:[i==="start"&&t,e,i==="end"&&t]})};try{l.displayName="FormField",l.__docgenInfo={description:"",displayName:"FormField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},labelPosition:{defaultValue:{value:"start"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}}}}}catch{}export{l as F};
import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as x}from"./index-76fb7be0.js";import{B as h}from"./Box-ed9d82d7.js";import{S as y}from"./SingleSelectable-56ab2a6a.js";import{C}from"./Column-2499ffa2.js";import{R as d}from"./Row-8ce02dd4.js";import{I as p}from"./Icon-b88d3311.js";import{P as j}from"./Paragraph-d38907ef.js";import{T as I}from"./Title-58567e52.js";import{u as k}from"./useAccessibilityFocus-94eda0c9.js";import{d as f}from"./useThemable-21958500.js";import{D as V}from"./duration-6591c38b.js";import{a as N}from"./accessibleText-a5c6b4b4.js";import{V as c}from"./index-5b56d0c8.js";import{S as _}from"./index-a802de3b.js";var t=(e=>(e.information="information",e.negative="negative",e.positive="positive",e))(t||{});const q=({children:e,inset:i})=>i!==void 0?a.jsx(h,{inset:i,children:e}):a.jsx(x.Fragment,{children:e}),g=({hasCloseIcon:e=!1,inset:i,testID:r,hasIcon:s=!1,text:n,title:o,variant:u=t.information})=>{const b=k(V.long),m=f(w),v=m[u??t.information].iconName,l=f(S(u,m));return!!n||!!o?a.jsx(q,{inset:i,children:a.jsx(c,{testID:`${r}Wrapper`,children:a.jsx(c,{accessibilityLanguage:"nl-NL",accessibilityRole:"alert",accessible:!0,ref:b,style:l==null?void 0:l.view,testID:r,children:a.jsxs(d,{align:"between",children:[a.jsx(y,{accessibilityLabel:N(o,n),accessibilityLanguage:"nl-NL",accessibilityRole:"alert",children:a.jsxs(d,{gutter:"md",children:[!!s&&a.jsx(p,{name:v,size:"lg",testID:`${r}Icon`}),a.jsxs(C,{children:[!!o&&a.jsx(I,{level:"h4",text:o}),a.jsx(j,{children:n})]})]})}),!!e&&a.jsx(c,{children:a.jsx(p,{name:"close",size:"lg",testID:`${r}CloseIcon`})})]})})})}):null},w=({color:e})=>({[t.information]:{backgroundColor:e.box.background.alert,borderColor:e.box.background.alert,borderWidth:2,iconName:"info"},[t.negative]:{backgroundColor:e.box.background.white,borderColor:e.severity.negative,borderWidth:2,iconName:"alert"},[t.positive]:{backgroundColor:e.box.background.white,borderColor:e.severity.positive,borderWidth:2,iconName:"checkmark"}}),S=(e,i)=>({size:r})=>{if(!e)return;const{backgroundColor:s,borderColor:n,borderWidth:o}=i[e];return _.create({view:{backgroundColor:s,borderWidth:o,borderColor:n,paddingHorizontal:r.spacing.lg,paddingVertical:r.spacing.md}})};try{g.displayName="AlertBase",g.__docgenInfo={description:"",displayName:"AlertBase",props:{inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"no"'},{value:'"xs"'},{value:'"xxxl"'}]}},hasCloseIcon:{defaultValue:{value:"false"},description:"",name:"hasCloseIcon",required:!1,type:{name:"boolean"}},hasIcon:{defaultValue:{value:"false"},description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"AlertVariant.information"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"information"'},{value:'"negative"'},{value:'"positive"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{g as A,t as a};
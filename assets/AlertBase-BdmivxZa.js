import{j as a}from"./jsx-runtime-Bxcv0yjW.js";import{B as x}from"./Box-8-axC_Qf.js";import{S as h}from"./SingleSelectable-BAFROorM.js";import{C as b}from"./Column-CKzJglDQ.js";import{R as m}from"./Row-DdnyZQrf.js";import{I as p}from"./Icon-lYoQ7uVs.js";import{P as y}from"./Paragraph-D6mXNrDU.js";import{T as j}from"./Title-gRpIveyI.js";import{u as I}from"./useAccessibilityFocus-jeKlJ74P.js";import{u as C}from"./useThemable-BmrUK7rc.js";import{D as _}from"./duration-A4BOymd5.js";import{a as w}from"./accessibleText-gmNPjmn1.js";import{V as l}from"./index-BP1Ij_Cs.js";import{s as V}from"./index-kbHxBZ_W.js";var n=(e=>(e.information="information",e.negative="negative",e.positive="positive",e.warning="warning",e))(n||{});const q=3,N=({children:e,inset:r})=>r!==void 0?a.jsx(x,{inset:r,children:e}):a.jsx(a.Fragment,{children:e}),d=({children:e,hasCloseIcon:r=!1,inset:s,testID:t,hasIcon:f=!1,text:c,title:o,variant:u=n.information})=>{const g=I(_.long),v=R[u],i=C(T(u));return!!c||!!o||!!e?a.jsx(N,{inset:s,children:a.jsx(l,{testID:`${t}Wrapper`,children:a.jsx(l,{accessibilityLanguage:"nl-NL",accessibilityRole:"alert",accessible:!0,ref:g,style:i==null?void 0:i.view,testID:t,children:e??a.jsxs(m,{align:"between",children:[a.jsx(h,{accessibilityLabel:w(o,c),accessibilityLanguage:"nl-NL",accessibilityRole:"alert",children:a.jsxs(m,{gutter:"md",children:[!!f&&a.jsx(l,{style:i==null?void 0:i.iconWrapper,children:a.jsx(p,{name:v,size:"lg",testID:`${t}Icon`})}),a.jsxs(b,{shrink:1,children:[!!o&&a.jsx(j,{level:"h4",text:o}),a.jsx(y,{children:c})]})]})}),!!r&&a.jsx(l,{children:a.jsx(p,{name:"close",size:"lg",testID:`${t}CloseIcon`})})]})})})}):null},R={[n.information]:"info",[n.negative]:"error",[n.positive]:"circle-check-mark",[n.warning]:"alert"},T=e=>({color:r,size:s})=>{if(e)return V.create({iconWrapper:{top:q},view:{backgroundColor:r.alert[e].background,borderWidth:2,borderColor:r.alert[e].border,paddingHorizontal:s.spacing.lg,paddingVertical:s.spacing.md}})};try{d.displayName="AlertBase",d.__docgenInfo={description:"",displayName:"AlertBase",props:{inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},hasCloseIcon:{defaultValue:{value:"false"},description:"",name:"hasCloseIcon",required:!1,type:{name:"boolean"}},hasIcon:{defaultValue:{value:"false"},description:"",name:"hasIcon",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"AlertVariant.information"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"information"'},{value:'"negative"'},{value:'"positive"'},{value:'"warning"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{d as A,n as a};
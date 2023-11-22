import{d as w,j as t,S,a as c,F as v}from"./useThemable-e7da91f2.js";import{r as l}from"./index-4ab02870.js";import{P as A}from"./Pressable-1037f128.js";import{B as f}from"./Box-7fddeafd.js";import{C as k}from"./Column-2e4ad1b0.js";import{V}from"./index-a84da5e7.js";import{R as N}from"./Row-fb894198.js";import{S as T}from"./Size-3d2b1606.js";import{I as q}from"./Icon-acc4c785.js";import{T as P}from"./Title-3a715e8a.js";import{u as j}from"./useTheme-e00f6261.js";import{P as I}from"./invariant-4e558dfc.js";const s=({width:e,height:n})=>{const a=w($({width:e,height:n}));return t(V,{style:a.gutter})},$=({width:e,height:n})=>({size:a})=>S.create({gutter:{width:e&&a.spacing[e],height:n&&a.spacing[n]}});try{s.displayName="Gutter",s.__docgenInfo={description:"",displayName:"Gutter",props:{height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxxl"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}const E=({children:e})=>c(v,{children:[t(f,{insetHorizontal:"md",children:e}),t(s,{height:"md"})]}),m=({icon:e,title:n})=>t(f,{grow:!0,children:c(N,{align:"between",gutter:"md",valign:"start",children:[t(P,{color:"link",level:"h5",numberOfLines:3,text:n}),e]})}),p=({grow:e,initiallyExpanded:n,onChangeExpanded:a,children:u,title:o})=>{const[r,h]=l.useState(!!n),g=u!==void 0,x=r?"chevron-up":"chevron-down",{text:y}=j(),d=l.useCallback(i=>{h(i),a==null||a(i)},[a]),b=l.useMemo(()=>{const i=r?"Uitgevouwen":"Samengevouwen",_=I.OS==="android"?`${o}`:`${o}, dubbeltik om de inhoud te ${r?"verbergen":"bekijken"}`;return`${i}, ${_}.`},[r,o]);return g?c(k,{grow:e,children:[t(A,{accessibilityActions:[{name:"activate",label:r?"het verbergen van de inhoud":"het bekijken van de inhoud"}],accessibilityLabel:b,accessibilityLanguage:"nl-NL",onAccessibilityAction:i=>{i.nativeEvent.actionName==="activate"&&d(!r)},onPress:()=>d(!r),children:t(m,{icon:t(T,{height:y.lineHeight.h5,children:t(q,{color:"link",name:x,size:"lg"})}),title:o})}),!!r&&t(E,{children:t(v,{children:u})})]}):t(m,{title:o})};try{p.displayName="Accordion",p.__docgenInfo={description:"",displayName:"Accordion",props:{grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"boolean"}},initiallyExpanded:{defaultValue:null,description:"",name:"initiallyExpanded",required:!1,type:{name:"boolean"}},onChangeExpanded:{defaultValue:null,description:"",name:"onChangeExpanded",required:!1,type:{name:"((state: boolean) => void)"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{p as A};
//# sourceMappingURL=Accordion-f4205eaa.js.map
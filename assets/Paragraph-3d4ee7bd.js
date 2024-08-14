import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{e as p}from"./useThemable-5c0dd8c3.js";import{T as c}from"./index-ccab62b4.js";import{S as m}from"./index-a802de3b.js";const o=({children:l,color:a="default",textAlign:e="left",variant:r="body",...t})=>{const i=u.useMemo(()=>d({color:a,textAlign:e,variant:r}),[a,e,r]),n=p(i);return s.jsx(c,{accessibilityLanguage:"nl-NL",accessibilityRole:a==="warning"?"alert":"none",style:n.text,...t,children:l})},d=({color:l,textAlign:a,variant:e})=>({color:r,text:t})=>m.create({text:{flexShrink:1,color:r.text[l],fontFamily:t.fontFamily[e==="quote"?"bold":"regular"],fontSize:t.fontSize[e],lineHeight:t.lineHeight[e],textAlign:a}});try{o.displayName="Paragraph",o.__docgenInfo={description:"",displayName:"Paragraph",props:{color:{defaultValue:{value:"default"},description:"Provides an inverse text color to allow a paragraph on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"link"'},{value:'"cityPass"'},{value:'"confirm"'},{value:'"inverse"'},{value:'"warning"'}]}},textAlign:{defaultValue:{value:"left"},description:"Defines the alignment of the text. Maps with the textAlign style prop options.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},variant:{defaultValue:{value:"body"},description:"Which variation of a paragraph to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"body"'},{value:'"intro"'},{value:'"quote"'}]}}}}}catch{}export{o as P};

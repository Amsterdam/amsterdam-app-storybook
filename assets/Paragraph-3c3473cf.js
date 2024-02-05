import{e as u,j as s,S as p}from"./useThemable-06843957.js";import{r as c}from"./index-76fb7be0.js";import{T as d}from"./index-0e143f66.js";const o=({children:l,color:a="default",textAlign:e="left",variant:r="body",...t})=>{const i=c.useMemo(()=>f({color:a,textAlign:e,variant:r}),[a,e,r]),n=u(i);return s(d,{accessibilityLanguage:"nl-NL",accessibilityRole:a==="warning"?"alert":"none",style:n.text,...t,children:l})},f=({color:l,textAlign:a,variant:e})=>({color:r,text:t})=>p.create({text:{flexShrink:1,color:r.text[l],fontFamily:t.fontFamily[e==="quote"?"bold":"regular"],fontSize:t.fontSize[e],lineHeight:t.lineHeight[e],textAlign:a}});try{o.displayName="Paragraph",o.__docgenInfo={description:"",displayName:"Paragraph",props:{color:{defaultValue:{value:"default"},description:"Provides an inverse text color to allow a paragraph on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"default"'},{value:'"inverse"'},{value:'"warning"'}]}},textAlign:{defaultValue:{value:"left"},description:"Defines the alignment of the text. Maps with the textAlign style prop options.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},variant:{defaultValue:{value:"body"},description:"Which variation of a paragraph to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"body"'},{value:'"intro"'},{value:'"quote"'}]}}}}}catch{}export{o as P};
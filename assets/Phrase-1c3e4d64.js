import{j as p,S as h}from"./index-9d7eb5a2.js";import{r as m}from"./index-76fb7be0.js";import{e as c,E as y}from"./useThemable-e2fb66d4.js";import{T as v}from"./index-169dd17a.js";const i=({children:t,color:l="default",emphasis:s="default",underline:e=!1,variant:r="body",testID:n,"sentry-label":a,textAlign:o="left",...u})=>{const d=m.useMemo(()=>g({color:l,emphasis:s,underline:e,variant:r,textAlign:o}),[l,s,e,r,o]),f=c(d);return p.jsx(v,{accessibilityLanguage:"nl-NL","sentry-label":a,style:f.text,testID:n,...u,children:t})},g=({color:t,emphasis:l,underline:s,variant:e,textAlign:r})=>({color:n,text:a})=>h.create({text:{flexShrink:1,color:n.text[t],fontFamily:a.fontFamily[l===y.strong?"bold":"regular"],fontSize:a.fontSize[e],lineHeight:a.lineHeight[e],textDecorationLine:s?"underline":"none",textAlign:r}});try{i.displayName="Phrase",i.__docgenInfo={description:"Displays (very) short text phrases.\nOffers the three sizing variants, and bold text.\nFor sentences, use `Paragraph` instead.",displayName:"Phrase",props:{color:{defaultValue:{value:"default"},description:"Defines the color of the phrase. Maps with the text color tokens.",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"link"'},{value:'"inverse"'}]}},emphasis:{defaultValue:{value:"default"},description:"Allows the phrase to convey more emphasis.",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"strong"'}]}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},textAlign:{defaultValue:{value:"left"},description:"Defines the alignment of the text. Maps with the textAlign style prop options.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},underline:{defaultValue:{value:"false"},description:"Whether the phrase is underlined. Use this for a link only.",name:"underline",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"body"},description:"Which variation of a phrase to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"body"'},{value:'"intro"'},{value:'"quote"'}]}}}}}catch{}export{i as P};
import{j as p}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{d as h,E as c}from"./useThemable-21958500.js";import{T as v}from"./index-ccab62b4.js";import{S as y}from"./index-a802de3b.js";const o=({children:t,color:l="default",emphasis:r="default",underline:e=!1,variant:s="body",testID:n,"logging-label":a,textAlign:i="left",...u})=>{const d=m.useMemo(()=>g({color:l,emphasis:r,underline:e,variant:s,textAlign:i}),[l,r,e,s,i]),f=h(d);return p.jsx(v,{accessibilityLanguage:"nl-NL","logging-label":a,style:f.text,testID:n,...u,children:t})},g=({color:t,emphasis:l,underline:r,variant:e,textAlign:s})=>({color:n,text:a})=>y.create({text:{flexShrink:1,color:n.text[t],fontFamily:a.fontFamily[l===c.strong?"bold":"regular"],fontSize:a.fontSize[e],lineHeight:a.lineHeight[e],textDecorationLine:r?"underline":"none",textAlign:s}});try{o.displayName="Phrase",o.__docgenInfo={description:"Displays (very) short text phrases.\nOffers the three sizing variants, and bold text.\nFor sentences, use `Paragraph` instead.",displayName:"Phrase",props:{color:{defaultValue:{value:"default"},description:"Defines the color of the phrase. Maps with the text color tokens.",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"link"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"cityPass"'},{value:'"inverse"'},{value:'"warning"'}]}},emphasis:{defaultValue:{value:"default"},description:"Allows the phrase to convey more emphasis.",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"strong"'}]}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},textAlign:{defaultValue:{value:"left"},description:"Defines the alignment of the text. Maps with the textAlign style prop options.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},underline:{defaultValue:{value:"false"},description:"Whether the phrase is underlined. Use this for a link only.",name:"underline",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"body"},description:"Which variation of a phrase to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"body"'},{value:'"intro"'},{value:'"quote"'}]}}}}}catch{}export{o as P};

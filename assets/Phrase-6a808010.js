import{e as p,j as f,S as c,E as h}from"./useThemable-f30bc085.js";import{r as m}from"./index-76fb7be0.js";import{T as y}from"./index-ccfb1f0c.js";const n=({children:t,color:l="default",emphasis:s="default",underline:e=!1,variant:r="body",testID:a,"sentry-label":o,...i})=>{const u=m.useMemo(()=>v({color:l,emphasis:s,underline:e,variant:r}),[l,s,e,r]),d=p(u);return f(y,{accessibilityLanguage:"nl-NL","sentry-label":o,style:d.text,testID:a,...i,children:t})},v=({color:t,emphasis:l,underline:s,variant:e})=>({color:r,text:a})=>c.create({text:{flexShrink:1,color:r.text[t],fontFamily:a.fontFamily[l===h.strong?"bold":"regular"],fontSize:a.fontSize[e],lineHeight:a.lineHeight[e],textDecorationLine:s?"underline":"none"}});try{n.displayName="Phrase",n.__docgenInfo={description:"Displays (very) short text phrases.\nOffers the three sizing variants, and bold text.\nFor sentences, use `Paragraph` instead.",displayName:"Phrase",props:{color:{defaultValue:{value:"default"},description:"Defines the color of the phrase. Maps with the text color tokens.",name:"color",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"secondary"'},{value:'"default"'},{value:'"inverse"'}]}},emphasis:{defaultValue:{value:"default"},description:"Allows the phrase to convey more emphasis.",name:"emphasis",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"strong"'}]}},"sentry-label":{defaultValue:null,description:"",name:"sentry-label",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"Whether the phrase is underlined. Use this for a link only.",name:"underline",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"body"},description:"Which variation of a phrase to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"body"'},{value:'"intro"'},{value:'"quote"'}]}}}}}catch{}export{n as P};
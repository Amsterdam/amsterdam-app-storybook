import{e as c,j as d,S as f}from"./useThemable-0c29db81.js";import{r}from"./index-76fb7be0.js";import{T as m}from"./index-ec5a4acc.js";const u=r.forwardRef(({color:e="default",level:t="h1",text:i,textAlign:l="left",...a},n)=>{const o=r.useMemo(()=>p({color:e,level:t,textAlign:l}),[e,t,l]),s=c(o);return d(m,{accessibilityLanguage:"nl-NL",...a,accessibilityRole:"header",ref:n,style:s.title,children:i})}),p=({color:e,level:t,textAlign:i})=>({color:l,text:a})=>f.create({title:{flexShrink:1,color:l.text[e],fontFamily:a.fontFamily.bold,fontSize:a.fontSize[t],lineHeight:a.lineHeight[t],textAlign:i}});try{u.displayName="Title",u.__docgenInfo={description:"",displayName:"Title",props:{color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"default"'},{value:'"inverse"'},{value:'"warning"'}]}},level:{defaultValue:{value:"h1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},textAlign:{defaultValue:{value:"left"},description:"Defines the alignment of the text. Maps with the textAlign style prop options.",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}}}}}catch{}export{u as T};
import{j as t}from"./jsx-runtime-Bxcv0yjW.js";import{r as m}from"./index-mfbfsM12.js";import{c as n}from"./config-BZnShabN.js";import{P as c}from"./Phrase-TAtMd0ou.js";import{u}from"./useDeviceContext-Cm8FgCCV.js";import{V as d}from"./index-BP1Ij_Cs.js";import{s as p}from"./index-kbHxBZ_W.js";var s=(e=>(e["check-mark"]="√",e.square="•",e))(s||{});const a=({additionalStyles:e,marker:i,testID:o})=>{const{fontScale:r}=u(),l=m.useMemo(()=>f(r),[r]);return t.jsx(d,{style:[l.marker,e],children:t.jsx(c,{accessible:!1,importantForAccessibility:"no",testID:o,children:s[i]})})},f=e=>p.create({marker:{width:n.listItemMarkerBoxWidth*e,alignItems:"center",alignSelf:"flex-start"}});try{a.displayName="ListItemMarker",a.__docgenInfo={description:"",displayName:"ListItemMarker",props:{additionalStyles:{defaultValue:null,description:"",name:"additionalStyles",required:!1,type:{name:"ViewStyle"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"enum",value:[{value:'"check-mark"'},{value:'"square"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{a as L};
import{j as t,S as l}from"./useThemable-0c29db81.js";import{r as m}from"./index-76fb7be0.js";import{c}from"./config-55b2a55c.js";import{P as n}from"./Phrase-218333f7.js";import{u as d}from"./useDeviceContext-e004f4a0.js";import{V as u}from"./index-75ce51c7.js";var s=(e=>(e.checkmark="√",e.square="•",e))(s||{});const a=({additionalStyles:e,marker:i})=>{const{fontScale:r}=d(),o=m.useMemo(()=>p(r),[r]);return t(u,{style:[o.marker,e],children:t(n,{accessible:!1,importantForAccessibility:"no",children:s[i]})})},p=e=>l.create({marker:{width:c.listItemMarkerBoxWidth*e,alignItems:"center",alignSelf:"flex-start"}});try{a.displayName="ListItemMarker",a.__docgenInfo={description:"",displayName:"ListItemMarker",props:{additionalStyles:{defaultValue:null,description:"",name:"additionalStyles",required:!1,type:{name:"ViewStyle"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"enum",value:[{value:'"checkmark"'},{value:'"square"'}]}}}}}catch{}export{a as L};
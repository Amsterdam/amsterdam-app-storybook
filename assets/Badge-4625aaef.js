import{j as l,S as p}from"./index-9d7eb5a2.js";import{R as f}from"./Row-1a77dc83.js";import{u as x}from"./useDeviceContext-b75c8e9f.js";import{e as g}from"./useThemable-e2fb66d4.js";import{V as y}from"./index-b1a24850.js";import{T as h}from"./index-169dd17a.js";const b=(e=0)=>e.toLocaleString("nl-NL"),d=({accessibilityLabel:e,accessibilityLanguage:t="nl-NL",testID:a,value:n,variant:r="default"})=>{const{fontScale:i}=x(),s=g(v(i,r));return l.jsx(f,{align:"start",children:l.jsx(y,{style:s.circle,children:l.jsx(h,{accessibilityLabel:e,accessibilityLanguage:t,accessible:!!u[r],numberOfLines:1,style:s.text,testID:a,children:b(n)})})})},u={default:{diameter:22,text:14},"on-icon":{accessible:!1,diameter:16,text:12},small:{diameter:16,text:12}},v=(e,t)=>({color:a,size:n,text:r})=>{const{diameter:i,text:s}=u[t],c=t!=="on-icon"?e:1,o=i*c,m=s*c;return p.create({circle:{flexDirection:"row",justifyContent:"center",minWidth:o,paddingStart:n.spacing.xs+.5,paddingEnd:n.spacing.xs,borderRadius:o/2,backgroundColor:a.pressable.secondary.background},text:{fontFamily:r.fontFamily.bold,fontSize:m,lineHeight:o,color:a.text.inverse}})};try{d.displayName="Badge",d.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"The value to display in the badge.",name:"value",required:!0,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Which variant of the badge to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'},{value:'"on-icon"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{d as B};
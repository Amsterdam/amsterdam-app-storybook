import{j as l,S as p}from"./index-1401012c.js";import{R as f}from"./Row-a25c9171.js";import{u as g}from"./useDeviceContext-20251673.js";import{a as y}from"./useThemable-a5fed888.js";import{V as x}from"./index-e1b95cde.js";import{T as h}from"./index-e39fa516.js";const b=(e=0)=>e.toLocaleString("nl-NL"),d=({accessibilityLabel:e,accessibilityLanguage:t="nl-NL",testID:a,value:n,variant:r="default"})=>{const{fontScale:o}=g(),i=y(v(o,r));return l(f,{align:"start",children:l(x,{style:i.circle,children:l(h,{accessibilityLabel:e,accessibilityLanguage:t,accessible:!!u[r],numberOfLines:1,style:i.text,testID:a,children:b(n)})})})},u={default:{diameter:22,text:14},"on-icon":{accessible:!1,diameter:16,text:12},small:{diameter:16,text:12}},v=(e,t)=>({color:a,size:n,text:r})=>{const{diameter:o,text:i}=u[t],c=t!=="on-icon"?e:1,s=o*c,m=i*c;return p.create({circle:{flexDirection:"row",justifyContent:"center",minWidth:s,paddingStart:n.spacing.xs+.5,paddingEnd:n.spacing.xs,borderRadius:s/2,backgroundColor:a.pressable.secondary.background},text:{fontFamily:r.fontFamily.bold,fontSize:m,lineHeight:s,color:a.text.inverse}})};try{d.displayName="Badge",d.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"The value to display in the badge.",name:"value",required:!0,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Which variant of the badge to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"on-icon"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{d as B};
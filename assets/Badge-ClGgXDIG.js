import{j as i}from"./jsx-runtime-Bxcv0yjW.js";import{R as p}from"./Row-BBylBpIP.js";import{u as f}from"./useDeviceContext-Cm8FgCCV.js";import{u as g}from"./useThemable-BcQl3YlP.js";import{V as b}from"./index-BP1Ij_Cs.js";import{T as y}from"./index-CAyeAlm6.js";import{s as h}from"./index-kbHxBZ_W.js";const x=(e,a)=>e.toLocaleString("nl-NL"),u=({accessibilityLabel:e,accessibilityLanguage:a="nl-NL",testID:l,value:t,variant:r="default"})=>{const{fontScale:s}=f(),o=g(v(s,r,t));return i.jsx(p,{align:"start",children:i.jsx(b,{style:o.circle,children:i.jsx(y,{accessibilityLabel:e,accessibilityLanguage:a,accessible:r!=="on-icon",numberOfLines:1,style:o.text,testID:l,children:!!t&&x(t)})})})},_=1.2,I=1.4,v=(e,a,l=0)=>({color:t,text:r,border:s})=>{const o=r.fontSize[a==="extraSmall"?"extraSmall":a==="small"?"small":"body"],c=a==="on-icon"?1+(e-1)/2:e,d=l>9,n=(d?I:_)*c*o,m=o/e*c;return h.create({circle:{height:n,width:n,borderRadius:n/2,backgroundColor:t.badge.background,borderWidth:s.width.sm,borderColor:t.badge.border},text:{fontFamily:r.fontFamily.bold,fontSize:m,lineHeight:d?m*1.28:n,color:t.text.inverse,textAlign:"center"}})};try{u.displayName="Badge",u.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"The value to display in the badge.",name:"value",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Which variant of the badge to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"extraSmall"'},{value:'"on-icon"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{u as B};

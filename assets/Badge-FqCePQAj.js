import{j as i}from"./jsx-runtime-Bxcv0yjW.js";import{R as m}from"./Row-Bx5TEno9.js";import{u as p}from"./useDeviceContext-Cm8FgCCV.js";import{u as f}from"./useThemable-CVLZuirU.js";import{V as g}from"./index-BP1Ij_Cs.js";import{T as b}from"./index-CAyeAlm6.js";import{s as y}from"./index-kbHxBZ_W.js";const h=(e,a)=>e.toLocaleString("nl-NL"),u=({accessibilityLabel:e,accessibilityLanguage:a="nl-NL",testID:l,value:t,variant:r="default"})=>{const{fontScale:n}=p(),o=f(D(n,r,t));return i.jsx(m,{align:"start",children:i.jsx(g,{style:o.circle,children:i.jsx(b,{accessibilityLabel:e,accessibilityLanguage:a,accessible:r!=="on-icon",numberOfLines:1,style:o.text,testID:l,children:!!t&&h(t)})})})},x=1.2,_=1.4,D=(e,a,l=0)=>({color:t,text:r,border:n})=>{const o=r.fontSize[a==="extraSmall"?"extraSmall":a==="small"?"small":"body"],c=a==="on-icon"?1+(e-1)/2:e,s=(l>9?_:x)*c*o,d=o/e*c;return y.create({circle:{height:s,width:s,borderRadius:s/2,backgroundColor:t.badge.background,borderWidth:n.width.sm,borderColor:t.badge.border},text:{fontFamily:r.fontFamily.bold,fontSize:d,lineHeight:d*1.28,color:t.text.inverse,textAlign:"center"}})};try{u.displayName="Badge",u.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"The value to display in the badge.",name:"value",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Which variant of the badge to display.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'},{value:'"extraSmall"'},{value:'"on-icon"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}export{u as B};

import{j as n}from"./jsx-runtime-CKrituN3.js";import{r as c}from"./index-CBqU2yxZ.js";import{S as m,P as $}from"./index-Ddv-N6EM.js";import{D as o}from"./types-BJ_48vsK.js";import{e as i}from"./useThemable-JUoOXXyj.js";import{s as f}from"./index-Us49mgpR.js";var s=(a=>(a[a.height=16]="height",a[a.width=32]="width",a))(s||{});const t=({direction:a,height:r=s.height,width:e=s.width})=>{const l=i(d),u=[o.up,o.down].includes(a)?`0 0 ${e} ${r}`:`0 0 ${r} ${e}`,p=c.useMemo(()=>({[o.up]:`M ${e/2} 0 L ${e} ${r} L 0 ${r} L ${e/2} 0`,[o.down]:`M ${e/2} ${r} L 0 0 L ${e} 0 L ${e/2} ${r}`,[o.left]:`M 0 ${e/2} L ${r} 0 L ${r} ${e} L 0 ${e/2}`,[o.right]:`M ${r} ${e/2} L 0 0 L 0 ${e} L ${r} ${e/2}`}),[r,e]);return n.jsx(m,{height:r,style:v.svg,viewBox:u,width:e,children:n.jsx($,{d:p[a],...l})})},d=({color:a})=>({fill:a.tooltip.background}),v=f.create({svg:{margin:-.5}});try{t.displayName="Triangle",t.__docgenInfo={description:"",displayName:"Triangle",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"down"'},{value:'"left"'},{value:'"right"'},{value:'"up"'}]}},height:{defaultValue:{value:"PointerDimension.height"},description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:{value:"PointerDimension.width"},description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}export{s as P,t as T};

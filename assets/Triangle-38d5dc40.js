import{j as t,S as l}from"./index-9d7eb5a2.js";import{S as c,P as p}from"./index-b21a90e4.js";import{C as d}from"./Center-25dc1fa7.js";import{D as e}from"./types-65ac26c5.js";import{e as u}from"./useThemable-e2fb66d4.js";const m={[e.up]:"M 16 0 L 32 16 L 0 16 L 16 0",[e.down]:"M 16 16 L 0 0 L 32 0 L 16 16",[e.left]:"M 0 16 L 16 0 L 16 32 L 0 16",[e.right]:"M 16 16 L 0 0 L 0 32 L 16 16"},o=({direction:r})=>{const s=u(g),[a,n,i]=[e.up,e.down].includes(r)?[32,16,"0 0 32 16"]:[16,32,"0 0 16 32"];return t.jsx(d,{children:t.jsx(c,{height:n,style:h.svg,viewBox:i,width:a,children:t.jsx(p,{d:m[r],...s})})})},g=({color:r})=>({fill:r.background.inverse}),h=l.create({svg:{margin:-.5}});try{o.displayName="Triangle",o.__docgenInfo={description:"",displayName:"Triangle",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"down"'},{value:'"left"'},{value:'"right"'},{value:'"up"'}]}}}}}catch{}export{o as T};
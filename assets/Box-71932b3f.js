import{e as v,j as p,S as c}from"./useThemable-0c29db81.js";import{r as x}from"./index-76fb7be0.js";import{l as g}from"./layoutStyles-f7c49c74.js";import{V as f}from"./index-75ce51c7.js";const s=x.memo(({borderColor:a,borderStyle:o,children:i,distinct:u,grow:l,inset:t="md",insetHorizontal:n,insetTop:r,insetVertical:e,...d})=>{const m=v(h({borderColor:a,borderStyle:o,distinct:u,inset:t,insetHorizontal:n,insetTop:r,insetVertical:e}));return p(f,{style:[m.box,l&&g.grow],...d,children:i})}),h=({borderColor:a,borderStyle:o,distinct:i,inset:u,insetHorizontal:l,insetTop:t,insetVertical:n})=>({color:r,size:e})=>c.create({box:{backgroundColor:i?r.box.background.white:void 0,borderColor:a?r.border[a]:void 0,borderStyle:o,borderWidth:o?1:void 0,padding:u&&!l&&!t&&!n?e.spacing[u]:0,paddingHorizontal:l&&e.spacing[l],paddingTop:t&&e.spacing[t],paddingVertical:n&&e.spacing[n]}});try{s.displayName="Box",s.__docgenInfo={description:`Visually groups its content.
Allows to set insets and a background colour.`,displayName:"Box",props:{borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"onGrey"'},{value:'"invalid"'}]}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"dashed"'},{value:'"dotted"'},{value:'"solid"'}]}},distinct:{defaultValue:null,description:`Whether the box has a background color, setting it apart from its surroundings. In light mode, it is white.
Only to be used when the box covers another color, like on light grey (settings) screens or in the navigation header.`,name:"distinct",required:!1,type:{name:"boolean"}},grow:{defaultValue:null,description:"Whether the box grows to fill its parent container.",name:"grow",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetTop:{defaultValue:null,description:"The amount of inner spacing at the start of ltr",name:"insetTop",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}export{s as B};

import{j as m,S as c}from"./index-1401012c.js";import{a as d,m as h}from"./mapMainAxisAlignment-e13c2957.js";import{u as p}from"./useThemable-212e8c5a.js";import{V as v}from"./index-e1b95cde.js";const o=({align:e,children:a,flex:t,grow:l,gutter:n,halign:r,reverse:u,zIndex:i})=>{const s=p(f({align:e,flex:t,grow:l,gutter:n,halign:r,reverse:u,zIndex:i}));return m(v,{style:s.column,children:a})},f=({align:e,flex:a,grow:t,gutter:l,halign:n,reverse:r,zIndex:u})=>({size:i})=>c.create({column:{flexDirection:r?"column-reverse":"column",alignItems:d(n),flex:a,flexGrow:t?1:void 0,justifyContent:h(e),rowGap:l&&i.spacing[l],zIndex:u}});try{o.displayName="Column",o.__docgenInfo={description:`Lays out its children vertically.

Allows specifying the amount of spacing between the items, alignment of the items in the column, whether
the column should grow to fill the available space, and whether the items should be displayed in reverse order.`,displayName:"Column",props:{align:{defaultValue:null,description:"The vertical alignment of the items in the column.",name:"align",required:!1,type:{name:"enum",value:[{value:'"around"'},{value:'"between"'},{value:'"center"'},{value:'"end"'},{value:'"evenly"'},{value:'"start"'}]}},children:{defaultValue:null,description:"The content of the column.",name:"children",required:!0,type:{name:"ReactNode"}},grow:{defaultValue:null,description:"Whether the column should grow to fill the available space.",name:"grow",required:!1,type:{name:"boolean"}},gutter:{defaultValue:null,description:"The amount of vertical spacing between the items in the column.",name:"gutter",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},halign:{defaultValue:null,description:"The horizontal alignment of the items in the column.",name:"halign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'},{value:'"stretch"'}]}},reverse:{defaultValue:null,description:"Whether the items in the column should be reversed.",name:"reverse",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Sets the zIndex style property",name:"zIndex",required:!1,type:{name:"number"}}}}}catch{}export{o as C};
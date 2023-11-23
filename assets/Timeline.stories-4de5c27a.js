import{S as k,a as h,j as r,F as I}from"./useThemable-0dd699ea.js";import{r as x}from"./index-4ab02870.js";import{A as L}from"./Accordion-9d64acae.js";import{I as w}from"./Icon-3838f5c8.js";import{H as A}from"./HtmlContent-3b439f70.js";import{T as C}from"./Title-0cfd33e2.js";import{u as z}from"./useDeviceContext-5668b36d.js";import{u as v}from"./useTheme-4461e17c.js";import{V as c}from"./index-7e4cc066.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-fed1c453.js";import"./Box-bfbd1914.js";import"./layoutStyles-c19a61d0.js";import"./index-28f6c611.js";import"./extends-98964cd2.js";import"./index-7e8d53f4.js";import"./Column-d96c6920.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-151f8b92.js";import"./Size-05b37e32.js";import"./invariant-3be37368.js";import"./index-f44bd9d7.js";import"./index-9d475cdf.js";import"./Animated-a7b0e2ff.js";import"./index-6c4b457b.js";import"./index-236ca06c.js";import"./index-859366d0.js";import"./index-3329d2c7.js";import"./types-e7c584cc.js";import"./index-c19ada0b.js";import"./index-19f2d8d7.js";import"./index-c92d389e.js";import"./index-8e571905.js";import"./index-0b4f84a4.js";import"./index-e1570e4b.js";import"./index-df7e5f50.js";import"./index-2e5b541f.js";import"./index-55c98bfa.js";import"./Phrase-58e7f193.js";import"./ListItemMarker-444222ac.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-7381f6ff.js";import"./useSentry-838bc996.js";import"./sentry-98e71586.js";import"./development-70788ef9.js";import"./useOpenPhoneUrl-c67c5b1c.js";import"./useIsScreenReaderEnabled-08cf4ec5.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Le={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      collapsed: false,
      content: [{
        title: 'Lorem ipsum 1',
        body: {
          html: '<p>Dolor sit amet 1</p>',
          text: 'Dolor sit amet 1'
        }
      }],
      progress: 'Afgelopen',
      title: 'Titel 1'
    }, {
      collapsed: true,
      content: [{
        title: 'Lorem ipsum 2',
        body: {
          html: '<p>Dolor sit amet 2</p>',
          text: 'Dolor sit amet 2'
        }
      }],
      progress: 'Huidig',
      title: 'Titel 2'
    }, {
      collapsed: true,
      content: [{
        title: 'Lorem ipsum 3',
        body: {
          html: '<p>Dolor sit amet 3</p>',
          text: 'Dolor sit amet 3'
        }
      }],
      progress: 'Aankomend',
      title: 'Titel 3'
    }]
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const we=["Default"];export{d as Default,we as __namedExportsOrder,Le as default};
//# sourceMappingURL=Timeline.stories-4de5c27a.js.map

import{S as k,a as h,j as r,F as I}from"./useThemable-2475a59d.js";import{r as x}from"./index-e67e0a49.js";import{A as L}from"./Accordion-615b4139.js";import{I as w}from"./Icon-2260a8d9.js";import{H as A}from"./HtmlContent-7ea7a948.js";import{T as C}from"./Title-b0ec9f4c.js";import{u as z}from"./useDeviceContext-c133351c.js";import{u as v}from"./useTheme-c275e5fa.js";import{V as c}from"./index-e7f07afd.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-e772661d.js";import"./Box-095a7abd.js";import"./layoutStyles-a127ab98.js";import"./index-547e76ca.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./Column-6aedf4aa.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-082dc951.js";import"./Size-5d39bfb8.js";import"./invariant-df383171.js";import"./index-8740edcb.js";import"./index-9d475cdf.js";import"./Animated-efd8ed75.js";import"./index-96692132.js";import"./index-d84c4c7f.js";import"./index-47f754a2.js";import"./index-b1caaf39.js";import"./types-e7c584cc.js";import"./index-e76bff40.js";import"./index-8508e5f5.js";import"./index-e0c10eed.js";import"./index-47df18b8.js";import"./index-9debaee9.js";import"./index-cbbd39e5.js";import"./index-b6e46b99.js";import"./index-7dd928c6.js";import"./Phrase-9ec43387.js";import"./ListItemMarker-fc3b229e.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-849dc1ad.js";import"./useSentry-8633f0a3.js";import"./sentry-bfc67ea6.js";import"./development-4cefb53a.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./useOpenPhoneUrl-da1f7690.js";import"./useIsScreenReaderEnabled-376f7db8.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Le={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
//# sourceMappingURL=Timeline.stories-2784553b.js.map

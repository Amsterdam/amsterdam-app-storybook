import{S as k,a as h,j as r,F as I}from"./useThemable-3e929d60.js";import{r as x}from"./index-e67e0a49.js";import{A as L}from"./Accordion-fad3c2c5.js";import{I as w}from"./Icon-8b738e47.js";import{H as A}from"./HtmlContent-ca4ec82c.js";import{T as C}from"./Title-26c9ffaf.js";import{u as z}from"./useDeviceContext-11966046.js";import{u as v}from"./useTheme-7795845d.js";import{V as c}from"./index-e43da3a9.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-5cefa5a0.js";import"./Box-6076363d.js";import"./layoutStyles-8ea7d70c.js";import"./index-38d82cdc.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./Column-3022cf9e.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-3c3de604.js";import"./Size-2a84fec3.js";import"./index-fff9359c.js";import"./index-5635b59f.js";import"./index-9d475cdf.js";import"./Animated-7b69864b.js";import"./invariant-ea487af3.js";import"./index-fbc2157a.js";import"./index-efd68e52.js";import"./EventEmitter-2b0932c2.js";import"./index-09471745.js";import"./index-eaef2ea0.js";import"./types-e7c584cc.js";import"./index-e76bff40.js";import"./index-3a994bc6.js";import"./index-eb7dfdfc.js";import"./useSentry-08657c50.js";import"./sentry-e8a9e04c.js";import"./development-1a7018f8.js";import"./index-c409b8cb.js";import"./index-9debaee9.js";import"./index-74e24eba.js";import"./index-9371cd01.js";import"./index-9e1c4b11.js";import"./ListItemMarker-81f2dad0.js";import"./config-55b2a55c.js";import"./Phrase-aff4564b.js";import"./useOpenMailUrl-39d81bf9.js";import"./useOpenPhoneUrl-1a866f28.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Le={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
//# sourceMappingURL=Timeline.stories-51debe31.js.map

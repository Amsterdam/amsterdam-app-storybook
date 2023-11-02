import{S as k,a as h,j as r,F as I}from"./useThemable-05c0eaf9.js";import{r as x}from"./index-e67e0a49.js";import{A as L}from"./Accordion-4ff6d970.js";import{I as w}from"./Icon-c75d8f7e.js";import{H as A}from"./HtmlContent-d3940995.js";import{T as C}from"./Title-25a3d42f.js";import{u as z}from"./useDeviceContext-af615d56.js";import{u as v}from"./useTheme-28d82804.js";import{V as c}from"./index-df3ac05d.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-15525d02.js";import"./Box-eba54918.js";import"./layoutStyles-96daf10f.js";import"./index-fc5a9d02.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./Column-9cc3f6d9.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-9ce85e8b.js";import"./Size-532a8def.js";import"./index-ebcf7e15.js";import"./invariant-ea487af3.js";import"./index-6d568fd1.js";import"./index-9d475cdf.js";import"./Animated-2dbb1a9c.js";import"./index-775c65ba.js";import"./EventEmitter-2b0932c2.js";import"./index-66ad1afc.js";import"./index-320be36c.js";import"./types-e7c584cc.js";import"./index-e76bff40.js";import"./index-cacef664.js";import"./index-9f1e8595.js";import"./useSentry-5400030d.js";import"./sentry-36f48ff4.js";import"./development-0f9f5b22.js";import"./index-b674d122.js";import"./index-9debaee9.js";import"./index-c8838ef3.js";import"./index-70e0cad2.js";import"./index-fd69cf08.js";import"./Phrase-111e251b.js";import"./ListItemMarker-1aab3c6f.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-6ea208fd.js";import"./useOpenPhoneUrl-4786a89b.js";const S=(t,n,e,o,l,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!l?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,l=e.content.some(s=>{var p,b;return((p=s.body)==null?void 0:p.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&l),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:l?e.content.map(({title:s,body:{html:p}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:p})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Ie={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const Le=["Default"];export{d as Default,Le as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Timeline.stories-82cf0f85.js.map

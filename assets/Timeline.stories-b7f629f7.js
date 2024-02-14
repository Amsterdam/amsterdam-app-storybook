import{S as x,a,j as r,F as I}from"./index-1401012c.js";import{r as D}from"./index-76fb7be0.js";import{A as w}from"./Accordion-28923af3.js";import{I as A}from"./Icon-b0139713.js";import{H as _}from"./HtmlContent-24c91323.js";import{T as z}from"./Title-b5e57051.js";import{u as C}from"./useDeviceContext-904ab82a.js";import{u as j}from"./useTheme-7821b5d5.js";import{V as l}from"./index-8aec880e.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-1ea4c8e4.js";import"./Box-35580222.js";import"./layoutStyles-ee44dbe0.js";import"./useThemable-27d8c265.js";import"./index-d3ea75b5.js";import"./base-color-66d0fb4c.js";import"./development-b3263d0e.js";import"./index-d983c834.js";import"./getCurrentModuleSlugFromNavigationRootState-db2d92d1.js";import"./slugs-a5736e9f.js";import"./index-3724536f.js";import"./index-3d7f4c33.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./useSentry-0179f7be.js";import"./logging-456718cc.js";import"./callBound-55a1829f.js";import"./index-393588f7.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Column-2e1417fa.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-99740ecb.js";import"./Size-25d8750c.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-3c47de32.js";import"./index-240c6d7a.js";import"./index-8fe1e389.js";import"./index-83a31e41.js";import"./types-e7c584cc.js";import"./index-c78d1c89.js";import"./index-c1b0849e.js";import"./index-8ad79f0b.js";import"./index-37b6bf7b.js";import"./index-5d7f9d89.js";import"./index-3515227a.js";import"./index-06f42224.js";import"./index-5bf7eaf7.js";import"./index-5aae214f.js";import"./index-e03c62dc.js";import"./Phrase-5ac7a926.js";import"./ListItemMarker-e555c43b.js";import"./config-55b2a55c.js";import"./useIsScreenReaderEnabled-58c53175.js";import"./useOpenMailUrl-e3647c2d.js";import"./useOpenPhoneUrl-88f09ee4.js";const E=(o,n,e,i,c,u)=>{const{color:s,size:p}=o,t={body:{insetLeft:p.spacing.md},indicator:{size:p.spacing.lg*n},line:{width:4*n}};return x.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:t.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:p.spacing.md,backgroundColor:i?s.background.inactive:s.background.emphasis,borderRadius:t.indicator.size/2},line:{position:"absolute",top:p.spacing.md+t.indicator.size,left:(t.indicator.size-t.line.width)/2,zIndex:-1,width:t.line.width,height:u&&!c?0:"100%",backgroundColor:i||e?s.background.inactive:s.background.emphasis}})},g=({isBeforeUpcoming:o,isLast:n,item:e})=>{var f,b;const i=!e.collapsed,[c,u]=D.useState(i),s=j(),{fontScale:p}=C(),t=E(s,p,o,e.progress==="Aankomend",c,n);return a(l,{children:[a(l,{style:t.header,children:[r(l,{style:t.indicator,children:e.progress==="Afgelopen"&&r(A,{color:"inverse",name:"checkmark",size:"sm"})}),a(w,{grow:!0,initiallyExpanded:!!i,isExpandable:!!e.body||!!((f=e.items)!=null&&f.length),onChangeExpanded:m=>u(m),title:e.title,children:[!!e.body&&r(_,{content:e.body}),(b=e.items)==null?void 0:b.map(({title:m,body:h})=>a(D.Fragment,{children:[!!m&&r(z,{level:"h5",text:m}),!!h&&r(_,{content:h})]},m))]},e.title)]}),r(l,{style:t.line})]})};try{g.displayName="TimelineItem",g.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}}}}}catch{}const y=({items:o})=>r(I,{children:o.map((n,e)=>{var i;return r(g,{isBeforeUpcoming:((i=o[e+1])==null?void 0:i.progress)==="Aankomend",isLast:e===o.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const qe={component:y},d={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,L,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      collapsed: false,
      body: '<p>Dolor sit amet 1</p>',
      date: '',
      items: [{
        title: 'Lorem ipsum 1.1',
        body: '<p>Dolor sit amet 1.1</p>',
        date: ''
      }, {
        title: 'Lorem ipsum 1.2',
        body: '<p>Dolor sit amet 1.2</p>',
        date: ''
      }],
      progress: 'Afgelopen',
      title: 'Titel 1'
    }, {
      collapsed: true,
      body: '<p>Dolor sit amet 2</p>',
      date: '',
      items: [{
        title: 'Lorem ipsum 2.1',
        body: '<p>Dolor sit amet 2.1</p>',
        date: ''
      }],
      progress: 'Huidig',
      title: 'Titel 2'
    }, {
      collapsed: true,
      body: '<p>Dolor sit amet 3</p>',
      date: '',
      items: [{
        title: 'Lorem ipsum 3.1',
        body: '<p>Dolor sit amet 3.1</p>',
        date: ''
      }, {
        title: 'Lorem ipsum 3.2',
        body: '<p>Dolor sit amet 3.2</p>',
        date: ''
      }],
      progress: 'Aankomend',
      title: 'Titel 3'
    }]
  }
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const He=["Default"];export{d as Default,He as __namedExportsOrder,qe as default};
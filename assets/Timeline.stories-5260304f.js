import{S as x,a as m,j as r,F as I}from"./useThemable-92ccb80b.js";import{r as D}from"./index-76fb7be0.js";import{A as w}from"./Accordion-05d6504c.js";import{I as A}from"./Icon-40c43dea.js";import{H as _}from"./HtmlContent-77b9f6c5.js";import{T as z}from"./Title-15107f07.js";import{u as C}from"./useDeviceContext-332bac93.js";import{u as j}from"./useTheme-7b3d4d58.js";import{V as l}from"./index-39c13462.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./Pressable-a964e8d1.js";import"./Box-b0815fc6.js";import"./layoutStyles-26d4cf97.js";import"./index-4e6537c6.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Column-1ccb91d2.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-6009ab11.js";import"./Size-59586cd5.js";import"./index-102134d3.js";import"./index-36aa4481.js";import"./index-9d475cdf.js";import"./Animated-8c1fee17.js";import"./NativeEventEmitter-a1a31b1f.js";import"./index-3ac00867.js";import"./index-288278cd.js";import"./types-e7c584cc.js";import"./index-268eb644.js";import"./index-c1b0849e.js";import"./index-3b3c9879.js";import"./index-43ee7368.js";import"./index-9404854c.js";import"./index-eb30d5fb.js";import"./index-bc04dfd9.js";import"./index-93d5ff4c.js";import"./index-d82740c0.js";import"./index-87dfdaaa.js";import"./Phrase-3ef4ca3f.js";import"./ListItemMarker-b1de61e9.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-879626c1.js";import"./useSentry-ab3da853.js";import"./logging-01c6a7cd.js";import"./development-e25606c8.js";import"./useOpenPhoneUrl-ee678be4.js";import"./useIsScreenReaderEnabled-db2585af.js";const E=(o,n,e,i,c,u)=>{const{color:s,size:p}=o,t={body:{insetLeft:p.spacing.md},indicator:{size:p.spacing.lg*n},line:{width:4*n}};return x.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:t.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:p.spacing.md,backgroundColor:i?s.background.inactive:s.background.emphasis,borderRadius:t.indicator.size/2},line:{position:"absolute",top:p.spacing.md+t.indicator.size,left:(t.indicator.size-t.line.width)/2,zIndex:-1,width:t.line.width,height:u&&!c?0:"100%",backgroundColor:i||e?s.background.inactive:s.background.emphasis}})},g=({isBeforeUpcoming:o,isLast:n,item:e})=>{var f,b;const i=!e.collapsed,[c,u]=D.useState(i),s=j(),{fontScale:p}=C(),t=E(s,p,o,e.progress==="Aankomend",c,n);return m(l,{children:[m(l,{style:t.header,children:[r(l,{style:t.indicator,children:e.progress==="Afgelopen"&&r(A,{color:"inverse",name:"checkmark",size:"sm"})}),m(w,{grow:!0,initiallyExpanded:!!i,isExpandable:!!e.body||!!((f=e.items)!=null&&f.length),onChangeExpanded:a=>u(a),title:e.title,children:[!!e.body&&r(_,{content:e.body}),(b=e.items)==null?void 0:b.map(({title:a,body:h})=>m(D.Fragment,{children:[!!a&&r(z,{level:"h5",text:a}),!!h&&r(_,{content:h})]},a))]},e.title)]}),r(l,{style:t.line})]})};try{g.displayName="TimelineItem",g.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}}}}}catch{}const y=({items:o})=>r(I,{children:o.map((n,e)=>{var i;return r(g,{isBeforeUpcoming:((i=o[e+1])==null?void 0:i.progress)==="Aankomend",isLast:e===o.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const we={component:y},d={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,L,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const Ae=["Default"];export{d as Default,Ae as __namedExportsOrder,we as default};

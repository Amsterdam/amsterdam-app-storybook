import{S as x,a as m,j as r,F as I}from"./useThemable-0a4280af.js";import{r as D}from"./index-76fb7be0.js";import{A as w}from"./Accordion-1cdfef8f.js";import{I as A}from"./Icon-df791648.js";import{H as _}from"./HtmlContent-eaf14740.js";import{T as z}from"./Title-fc188378.js";import{u as C}from"./useDeviceContext-0bebe91d.js";import{u as j}from"./useTheme-874d5163.js";import{V as l}from"./index-dd8453f7.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./Pressable-21f00dea.js";import"./Box-2c5b5947.js";import"./layoutStyles-2021cfe0.js";import"./index-d5ab790d.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Column-cb7d2368.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-2788a98c.js";import"./Size-4651e499.js";import"./invariant-b50f8bb2.js";import"./index-f3e2b6de.js";import"./index-9d475cdf.js";import"./Animated-76626587.js";import"./index-5403444a.js";import"./index-3d43cdb1.js";import"./index-9d6b7183.js";import"./index-75170bcc.js";import"./types-e7c584cc.js";import"./index-9971531d.js";import"./index-c1b0849e.js";import"./index-ce3c8529.js";import"./index-061b1ba7.js";import"./index-069b7745.js";import"./index-b76ebc31.js";import"./index-45719380.js";import"./index-99ad7956.js";import"./index-e9663dc2.js";import"./Phrase-2af28a77.js";import"./ListItemMarker-0c1976c1.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-d0ff9c4d.js";import"./useSentry-de1d1f00.js";import"./sentry-426fa61f.js";import"./development-b56959e9.js";import"./useOpenPhoneUrl-80cd1a00.js";import"./useIsScreenReaderEnabled-c1ef9504.js";const E=(o,n,e,i,c,u)=>{const{color:s,size:p}=o,t={body:{insetLeft:p.spacing.md},indicator:{size:p.spacing.lg*n},line:{width:4*n}};return x.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:t.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:p.spacing.md,backgroundColor:i?s.background.inactive:s.background.emphasis,borderRadius:t.indicator.size/2},line:{position:"absolute",top:p.spacing.md+t.indicator.size,left:(t.indicator.size-t.line.width)/2,zIndex:-1,width:t.line.width,height:u&&!c?0:"100%",backgroundColor:i||e?s.background.inactive:s.background.emphasis}})},g=({isBeforeUpcoming:o,isLast:n,item:e})=>{var f,b;const i=!e.collapsed,[c,u]=D.useState(i),s=j(),{fontScale:p}=C(),t=E(s,p,o,e.progress==="Aankomend",c,n);return m(l,{children:[m(l,{style:t.header,children:[r(l,{style:t.indicator,children:e.progress==="Afgelopen"&&r(A,{color:"inverse",name:"checkmark",size:"sm"})}),m(w,{grow:!0,initiallyExpanded:!!i,isExpandable:!!e.body||!!((f=e.items)!=null&&f.length),onChangeExpanded:a=>u(a),title:e.title,children:[!!e.body&&r(_,{content:e.body}),(b=e.items)==null?void 0:b.map(({title:a,body:h})=>m(D.Fragment,{children:[!!a&&r(z,{level:"h5",text:a}),!!h&&r(_,{content:h})]},a))]},e.title)]}),r(l,{style:t.line})]})};try{g.displayName="TimelineItem",g.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}}}}}catch{}const y=({items:o})=>r(I,{children:o.map((n,e)=>{var i;return r(g,{isBeforeUpcoming:((i=o[e+1])==null?void 0:i.progress)==="Aankomend",isLast:e===o.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const we={component:y},d={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,L,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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

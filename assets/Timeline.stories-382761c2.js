import{S as x,a as m,j as r,F as I}from"./useThemable-f30bc085.js";import{r as D}from"./index-76fb7be0.js";import{A as w}from"./Accordion-f67d4429.js";import{I as A}from"./Icon-665a7dd4.js";import{H as _}from"./HtmlContent-a0e478a6.js";import{T as z}from"./Title-56f4a277.js";import{u as C}from"./useDeviceContext-18951bae.js";import{u as j}from"./useTheme-6ad20d8d.js";import{V as l}from"./index-c2b660c2.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./Pressable-04568550.js";import"./Box-2ef2bccb.js";import"./layoutStyles-581bdf3f.js";import"./index-a38d3ef2.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Column-1b7dee07.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-6615ad7f.js";import"./Size-806a3c11.js";import"./index-9f48cdb1.js";import"./index-0a8a0804.js";import"./index-9d475cdf.js";import"./Animated-c2918ca3.js";import"./NativeEventEmitter-e48f6778.js";import"./index-4aecf1db.js";import"./index-ccfb1f0c.js";import"./types-e7c584cc.js";import"./index-57244893.js";import"./index-c1b0849e.js";import"./index-fca5dbaa.js";import"./index-a1c2f77b.js";import"./index-ce5d66ca.js";import"./index-b0349033.js";import"./index-b44c2793.js";import"./index-79b70c81.js";import"./index-17cda06a.js";import"./index-b6575df8.js";import"./Phrase-6a808010.js";import"./ListItemMarker-d2573156.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-1f566757.js";import"./useSentry-02887f2a.js";import"./logging-a5858441.js";import"./development-c52112ae.js";import"./useOpenPhoneUrl-6ed9d4cc.js";import"./useIsScreenReaderEnabled-fa910e4a.js";const E=(o,n,e,i,c,u)=>{const{color:s,size:p}=o,t={body:{insetLeft:p.spacing.md},indicator:{size:p.spacing.lg*n},line:{width:4*n}};return x.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:t.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:p.spacing.md,backgroundColor:i?s.background.inactive:s.background.emphasis,borderRadius:t.indicator.size/2},line:{position:"absolute",top:p.spacing.md+t.indicator.size,left:(t.indicator.size-t.line.width)/2,zIndex:-1,width:t.line.width,height:u&&!c?0:"100%",backgroundColor:i||e?s.background.inactive:s.background.emphasis}})},g=({isBeforeUpcoming:o,isLast:n,item:e})=>{var f,b;const i=!e.collapsed,[c,u]=D.useState(i),s=j(),{fontScale:p}=C(),t=E(s,p,o,e.progress==="Aankomend",c,n);return m(l,{children:[m(l,{style:t.header,children:[r(l,{style:t.indicator,children:e.progress==="Afgelopen"&&r(A,{color:"inverse",name:"checkmark",size:"sm"})}),m(w,{grow:!0,initiallyExpanded:!!i,isExpandable:!!e.body||!!((f=e.items)!=null&&f.length),onChangeExpanded:a=>u(a),title:e.title,children:[!!e.body&&r(_,{content:e.body}),(b=e.items)==null?void 0:b.map(({title:a,body:h})=>m(D.Fragment,{children:[!!a&&r(z,{level:"h5",text:a}),!!h&&r(_,{content:h})]},a))]},e.title)]}),r(l,{style:t.line})]})};try{g.displayName="TimelineItem",g.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}}}}}catch{}const y=({items:o})=>r(I,{children:o.map((n,e)=>{var i;return r(g,{isBeforeUpcoming:((i=o[e+1])==null?void 0:i.progress)==="Aankomend",isLast:e===o.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const we={component:y},d={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,L,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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

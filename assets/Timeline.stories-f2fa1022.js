import{S as x,a as m,j as r,F as I}from"./index-1401012c.js";import{r as D}from"./index-76fb7be0.js";import{A as w}from"./Accordion-c7c0d9e0.js";import{I as A}from"./Icon-aa5dc8dd.js";import{H as _}from"./HtmlContent-1b02c48e.js";import{T as z}from"./Title-7ee3ecd6.js";import{u as C}from"./useDeviceContext-5f757378.js";import{u as j}from"./useTheme-7821b5d5.js";import{V as l}from"./index-8aec880e.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-3e887a0b.js";import"./Box-35580222.js";import"./layoutStyles-ee44dbe0.js";import"./useThemable-27d8c265.js";import"./index-d3ea75b5.js";import"./base-color-66d0fb4c.js";import"./index-393588f7.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Column-2e1417fa.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-99740ecb.js";import"./Size-25d8750c.js";import"./index-0f55ce69.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-d0a22265.js";import"./NativeEventEmitter-abc7829a.js";import"./index-96ea5a53.js";import"./index-83a31e41.js";import"./types-e7c584cc.js";import"./index-770b212e.js";import"./index-c1b0849e.js";import"./index-d983c834.js";import"./index-8ad79f0b.js";import"./index-9758dc63.js";import"./index-551eb121.js";import"./index-3515227a.js";import"./index-84e0d194.js";import"./index-5bf7eaf7.js";import"./index-290feef2.js";import"./index-87adcfec.js";import"./Phrase-c27680e7.js";import"./ListItemMarker-9e140f87.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-0850f100.js";import"./useSentry-6d64a772.js";import"./logging-49433b85.js";import"./development-c1731de7.js";import"./callBound-55a1829f.js";import"./useOpenPhoneUrl-ec2f0261.js";import"./useIsScreenReaderEnabled-85a9e964.js";const E=(o,n,e,i,c,u)=>{const{color:s,size:p}=o,t={body:{insetLeft:p.spacing.md},indicator:{size:p.spacing.lg*n},line:{width:4*n}};return x.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:t.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:p.spacing.md,backgroundColor:i?s.background.inactive:s.background.emphasis,borderRadius:t.indicator.size/2},line:{position:"absolute",top:p.spacing.md+t.indicator.size,left:(t.indicator.size-t.line.width)/2,zIndex:-1,width:t.line.width,height:u&&!c?0:"100%",backgroundColor:i||e?s.background.inactive:s.background.emphasis}})},g=({isBeforeUpcoming:o,isLast:n,item:e})=>{var f,b;const i=!e.collapsed,[c,u]=D.useState(i),s=j(),{fontScale:p}=C(),t=E(s,p,o,e.progress==="Aankomend",c,n);return m(l,{children:[m(l,{style:t.header,children:[r(l,{style:t.indicator,children:e.progress==="Afgelopen"&&r(A,{color:"inverse",name:"checkmark",size:"sm"})}),m(w,{grow:!0,initiallyExpanded:!!i,isExpandable:!!e.body||!!((f=e.items)!=null&&f.length),onChangeExpanded:a=>u(a),title:e.title,children:[!!e.body&&r(_,{content:e.body}),(b=e.items)==null?void 0:b.map(({title:a,body:h})=>m(D.Fragment,{children:[!!a&&r(z,{level:"h5",text:a}),!!h&&r(_,{content:h})]},a))]},e.title)]}),r(l,{style:t.line})]})};try{g.displayName="TimelineItem",g.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}}}}}catch{}const y=({items:o})=>r(I,{children:o.map((n,e)=>{var i;return r(g,{isBeforeUpcoming:((i=o[e+1])==null?void 0:i.progress)==="Aankomend",isLast:e===o.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const je={component:y},d={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,L,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const Ee=["Default"];export{d as Default,Ee as __namedExportsOrder,je as default};

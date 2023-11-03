import{S as k,a as h,j as r,F as I}from"./useThemable-b5bc0e98.js";import{r as x}from"./index-e67e0a49.js";import{A as L}from"./Accordion-49c554c4.js";import{I as w}from"./Icon-54511b2e.js";import{H as A}from"./HtmlContent-60a3bba6.js";import{T as C}from"./Title-e23edaa0.js";import{u as z}from"./useDeviceContext-e554a2ce.js";import{u as v}from"./useTheme-1e919075.js";import{V as c}from"./index-740d46ce.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-0911e2cf.js";import"./Box-b65d3678.js";import"./layoutStyles-3c597b18.js";import"./index-43fc9f61.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./Column-8682e377.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-86d47ee7.js";import"./Size-321143fc.js";import"./index-90ebbd37.js";import"./invariant-ea487af3.js";import"./index-566c2d24.js";import"./index-9d475cdf.js";import"./Animated-9e3e230b.js";import"./index-365333ea.js";import"./EventEmitter-2b0932c2.js";import"./index-2af5419a.js";import"./index-eaec7393.js";import"./types-e7c584cc.js";import"./index-e76bff40.js";import"./index-6d4798e5.js";import"./index-fa2507c9.js";import"./useSentry-ac00e81f.js";import"./sentry-7c97cb84.js";import"./development-e14bb257.js";import"./index-979d36d1.js";import"./index-9debaee9.js";import"./index-919c0415.js";import"./index-0d12018b.js";import"./index-ffb7144a.js";import"./Phrase-0fee46a4.js";import"./ListItemMarker-40f3d54e.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-a716b369.js";import"./useOpenPhoneUrl-e3399fbe.js";const S=(t,n,e,o,l,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!l?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,l=e.content.some(s=>{var p,b;return((p=s.body)==null?void 0:p.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&l),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:l?e.content.map(({title:s,body:{html:p}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:p})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Ie={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
//# sourceMappingURL=Timeline.stories-adf2a17e.js.map

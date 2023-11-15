import{S as k,a as h,j as r,F as I}from"./useThemable-4fe559aa.js";import{r as x}from"./index-e67e0a49.js";import{A as L}from"./Accordion-dae65e52.js";import{I as w}from"./Icon-767ebdcb.js";import{H as A}from"./HtmlContent-e99706e3.js";import{T as C}from"./Title-e3043cb2.js";import{u as z}from"./useDeviceContext-d785a893.js";import{u as v}from"./useTheme-545f70f3.js";import{V as c}from"./index-3e739987.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-66ded549.js";import"./Box-18679bd1.js";import"./layoutStyles-ad95fb81.js";import"./index-58d8caea.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./Column-9e8417b5.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-a98e159d.js";import"./Size-2aeef96d.js";import"./index-9f9ced45.js";import"./invariant-ea487af3.js";import"./index-3d1fcd74.js";import"./index-9d475cdf.js";import"./Animated-f87c68ea.js";import"./index-42db304c.js";import"./EventEmitter-2b0932c2.js";import"./index-fcaf405e.js";import"./index-893ba174.js";import"./types-e7c584cc.js";import"./index-e76bff40.js";import"./index-3cb42fef.js";import"./index-2f74784e.js";import"./useSentry-c6393cbd.js";import"./sentry-59edaf15.js";import"./development-02d7dc21.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-c6dbaaa6.js";import"./index-9debaee9.js";import"./index-8461bd7d.js";import"./index-edd39df3.js";import"./index-f040a4e9.js";import"./Phrase-b2b0d884.js";import"./ListItemMarker-af63adb8.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-73cf6454.js";import"./useOpenPhoneUrl-5e9d0a76.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Le={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
//# sourceMappingURL=Timeline.stories-df0cc821.js.map

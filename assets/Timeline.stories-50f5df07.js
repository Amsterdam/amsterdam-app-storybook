import{S as k,a as h,j as r,F as I}from"./useThemable-7e23fae8.js";import{r as x}from"./index-e67e0a49.js";import{A as L}from"./Accordion-e3fc0271.js";import{I as w}from"./Icon-88a78481.js";import{H as A}from"./HtmlContent-aad00cd0.js";import{T as C}from"./Title-80e1adb4.js";import{u as z}from"./useDeviceContext-d69b8119.js";import{u as v}from"./useTheme-4260c7c0.js";import{V as c}from"./index-ea25b3de.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-c82e0893.js";import"./Box-bc2e679d.js";import"./layoutStyles-bc05e64d.js";import"./index-a31edbaa.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./Column-fb14c007.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-06ac4eed.js";import"./Size-1d8224d7.js";import"./index-fff9359c.js";import"./index-884c992e.js";import"./index-9d475cdf.js";import"./Animated-072382ed.js";import"./invariant-ea487af3.js";import"./index-bf295c5f.js";import"./index-546e8b88.js";import"./EventEmitter-2b0932c2.js";import"./index-e626ecd3.js";import"./index-880a3f2e.js";import"./types-e7c584cc.js";import"./index-e76bff40.js";import"./index-d324eba8.js";import"./index-f8ce0a05.js";import"./useSentry-ecd4ea1d.js";import"./sentry-1a87aef5.js";import"./development-ac8156d8.js";import"./index-88969299.js";import"./index-9debaee9.js";import"./index-627c6519.js";import"./index-d6a6cd61.js";import"./index-2e5dd3db.js";import"./ListItemMarker-c881a5c1.js";import"./config-55b2a55c.js";import"./Phrase-76417d22.js";import"./useOpenMailUrl-25e0f6df.js";import"./useOpenPhoneUrl-b692ba9a.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Le={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
//# sourceMappingURL=Timeline.stories-50f5df07.js.map

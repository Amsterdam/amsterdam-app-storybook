import{S as k,a as h,j as r,F as I}from"./useThemable-7e23fae8.js";import{r as x}from"./index-e67e0a49.js";import{A as L}from"./Accordion-0ee4d313.js";import{I as w}from"./Icon-c5702ead.js";import{H as A}from"./HtmlContent-431ab10c.js";import{T as C}from"./Title-80e1adb4.js";import{u as z}from"./useDeviceContext-f57ee50f.js";import{u as v}from"./useTheme-4260c7c0.js";import{V as c}from"./index-ea25b3de.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-c82e0893.js";import"./Box-bc2e679d.js";import"./layoutStyles-bc05e64d.js";import"./index-a31edbaa.js";import"./extends-98964cd2.js";import"./index-d7b7437a.js";import"./Column-fb14c007.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-06ac4eed.js";import"./Size-1d8224d7.js";import"./index-8d8d2929.js";import"./invariant-ea487af3.js";import"./index-884c992e.js";import"./index-9d475cdf.js";import"./Animated-1f43aa99.js";import"./index-546e8b88.js";import"./EventEmitter-2b0932c2.js";import"./index-8457ee36.js";import"./index-880a3f2e.js";import"./types-e7c584cc.js";import"./index-e76bff40.js";import"./index-d324eba8.js";import"./index-f8ce0a05.js";import"./useSentry-d9700612.js";import"./sentry-528a0229.js";import"./development-ac8156d8.js";import"./index-5ab8f78d.js";import"./index-9debaee9.js";import"./index-627c6519.js";import"./index-a8e6d48a.js";import"./index-2e5dd3db.js";import"./Phrase-76417d22.js";import"./ListItemMarker-a508952d.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-77aeeefd.js";import"./useOpenPhoneUrl-18b917b8.js";const S=(t,n,e,o,l,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!l?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,l=e.content.some(s=>{var p,b;return((p=s.body)==null?void 0:p.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&l),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:l?e.content.map(({title:s,body:{html:p}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:p})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Ie={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
//# sourceMappingURL=Timeline.stories-cf931ea7.js.map

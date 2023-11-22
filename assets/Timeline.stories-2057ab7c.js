import{S as k,a as h,j as r,F as I}from"./useThemable-e7da91f2.js";import{r as x}from"./index-4ab02870.js";import{A as L}from"./Accordion-f4205eaa.js";import{I as w}from"./Icon-acc4c785.js";import{H as A}from"./HtmlContent-a3ebad83.js";import{T as C}from"./Title-3a715e8a.js";import{u as z}from"./useDeviceContext-f2885708.js";import{u as v}from"./useTheme-e00f6261.js";import{V as c}from"./index-a84da5e7.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-1037f128.js";import"./Box-7fddeafd.js";import"./layoutStyles-768eb547.js";import"./index-64488648.js";import"./extends-98964cd2.js";import"./index-7e8d53f4.js";import"./Column-2e4ad1b0.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-fb894198.js";import"./Size-3d2b1606.js";import"./invariant-4e558dfc.js";import"./index-610f912e.js";import"./index-9d475cdf.js";import"./Animated-79809011.js";import"./index-ffecbde1.js";import"./index-abe419cd.js";import"./index-a5a81c39.js";import"./index-4ef9436f.js";import"./types-e7c584cc.js";import"./index-f3884d6b.js";import"./index-19f2d8d7.js";import"./index-6b409329.js";import"./index-d4b33a46.js";import"./index-639b2e01.js";import"./index-c8a9421d.js";import"./index-76654186.js";import"./index-a681288b.js";import"./index-5e2383f8.js";import"./Phrase-3bd382e3.js";import"./ListItemMarker-fdfeb7a6.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-874c8ff6.js";import"./useSentry-1a0353c4.js";import"./sentry-039b85b0.js";import"./development-2b537746.js";import"./useOpenPhoneUrl-576c42d1.js";import"./useIsScreenReaderEnabled-82582279.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Le={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
//# sourceMappingURL=Timeline.stories-2057ab7c.js.map

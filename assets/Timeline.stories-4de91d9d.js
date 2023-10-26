import{S as k,a as h,j as r,F as I}from"./useThemable-f6bacdce.js";import{r as x}from"./index-f1286426.js";import{A as L}from"./Accordion-410a8827.js";import{I as w}from"./Icon-5c61137a.js";import{H as A}from"./HtmlContent-b8c6ce49.js";import{T as C}from"./Title-ec969ca0.js";import{u as z}from"./useDeviceContext-07d8242c.js";import{u as v}from"./useTheme-eca4d827.js";import{V as c}from"./index-179922ce.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-0b33c38a.js";import"./Box-47245515.js";import"./layoutStyles-d99ac06d.js";import"./index-c5acb37f.js";import"./extends-98964cd2.js";import"./index-cb95cf1a.js";import"./Column-8f675c88.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-434f21d2.js";import"./Size-90c89bbf.js";import"./index-fff9359c.js";import"./index-5df40f86.js";import"./index-9d475cdf.js";import"./Animated-bb4acc0a.js";import"./index-bea11cd4.js";import"./index-678da550.js";import"./index-f73c2a00.js";import"./types-e7c584cc.js";import"./index-400ba48f.js";import"./useOpenPhoneUrl-2fa3df24.js";import"./sentry-62b55fda.js";import"./development-d5fc1129.js";import"./index-b9e4ae63.js";import"./index-9debaee9.js";import"./index-09d34ee0.js";import"./index-46f9b591.js";import"./index-54804da2.js";import"./ListItemMarker-5a49e391.js";import"./config-55b2a55c.js";import"./Phrase-9dccba09.js";const S=(t,n,e,o,l,u)=>{const{color:a,size:m}=t,i={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:o?a.background.inactive:a.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:m.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!l?0:"100%",backgroundColor:o||e?a.background.inactive:a.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,l=e.content.some(s=>{var p,b;return((p=s.body)==null?void 0:p.html)||((b=s.body)==null?void 0:b.text)}),[u,a]=x.useState(o&&l),m=v(),{fontScale:i}=z(),g=S(m,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>a(s),title:e.title,children:l?e.content.map(({title:s,body:{html:p}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:p})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const be={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const xe=["Default"];export{d as Default,xe as __namedExportsOrder,be as default};
//# sourceMappingURL=Timeline.stories-4de91d9d.js.map

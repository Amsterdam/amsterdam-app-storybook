import{S as k,a as h,j as r,F as I}from"./useThemable-0c29db81.js";import{r as x}from"./index-76fb7be0.js";import{A as L}from"./Accordion-5331acae.js";import{I as w}from"./Icon-698fb629.js";import{H as A}from"./HtmlContent-990f58c4.js";import{T as C}from"./Title-dd14283b.js";import{u as z}from"./useDeviceContext-e004f4a0.js";import{u as v}from"./useTheme-4e1d74b9.js";import{V as c}from"./index-75ce51c7.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./Pressable-8b21e454.js";import"./Box-71932b3f.js";import"./layoutStyles-f7c49c74.js";import"./index-ee60ff1c.js";import"./extends-98964cd2.js";import"./index-56eca6dc.js";import"./Column-1c934746.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-7183adb0.js";import"./Size-83c2f722.js";import"./invariant-7bb126f5.js";import"./index-6c192943.js";import"./index-9d475cdf.js";import"./Animated-3046c943.js";import"./index-d96d58dd.js";import"./index-0fb53e87.js";import"./index-5b61bf2d.js";import"./index-ec5a4acc.js";import"./types-e7c584cc.js";import"./index-77e67cb8.js";import"./index-c1b0849e.js";import"./index-3ccc1cb0.js";import"./index-e3175a8a.js";import"./index-e0582feb.js";import"./index-dffd7db4.js";import"./index-ac7f44b9.js";import"./index-addd4274.js";import"./index-1597b195.js";import"./Phrase-218333f7.js";import"./ListItemMarker-a7e1b854.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-96fec999.js";import"./useSentry-8a9a313a.js";import"./sentry-757ca2a1.js";import"./development-022f49a0.js";import"./useOpenPhoneUrl-03f264d1.js";import"./useIsScreenReaderEnabled-4087f187.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const we={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const Ae=["Default"];export{d as Default,Ae as __namedExportsOrder,we as default};

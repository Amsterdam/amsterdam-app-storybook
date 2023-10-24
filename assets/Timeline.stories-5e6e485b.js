import{S as I,a as h,j as i,F as w}from"./useThemable-f6bacdce.js";import{r as f}from"./index-f1286426.js";import{A}from"./Accordion-3c47966b.js";import{I as C}from"./Icon-c7733725.js";import{H as L}from"./HtmlContent-4e92413d.js";import{T as z}from"./Title-5050f8eb.js";import{u as v}from"./useDeviceContext-346f8923.js";import{u as S}from"./useTheme-eca4d827.js";import{V as c}from"./index-179922ce.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-0bc26974.js";import"./Box-7385a596.js";import"./layoutStyles-d99ac06d.js";import"./index-c5acb37f.js";import"./extends-98964cd2.js";import"./index-cb95cf1a.js";import"./Column-83b1b42a.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-3f77b662.js";import"./Size-8a54eec2.js";import"./index-5df40f86.js";import"./index-9d475cdf.js";import"./Animated-97885798.js";import"./index-fff9359c.js";import"./index-bea11cd4.js";import"./index-678da550.js";import"./index-f73c2a00.js";import"./types-e7c584cc.js";import"./index-400ba48f.js";import"./useOpenPhoneUrl-d77be8d1.js";import"./sentry-63e53fd1.js";import"./development-d5fc1129.js";import"./index-e0ca7e17.js";import"./index-9debaee9.js";import"./index-09d34ee0.js";import"./index-1bfea83e.js";import"./index-54804da2.js";import"./ListItemMarker-19889f17.js";import"./config-55b2a55c.js";import"./Phrase-a15dbc53.js";const _=(r,n,e,t,a,u)=>{const{color:m,size:p}=r,o={body:{insetLeft:p.spacing.md},indicator:{size:p.spacing.lg*n},line:{width:4*n}};return I.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:o.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:p.spacing.md,backgroundColor:t?m.background.inactive:m.background.emphasis,borderRadius:o.indicator.size/2},line:{position:"absolute",top:p.spacing.md+o.indicator.size,left:(o.indicator.size-o.line.width)/2,zIndex:-1,width:o.line.width,height:u&&!a?0:"100%",backgroundColor:t||e?m.background.inactive:m.background.emphasis}})},D=({isBeforeUpcoming:r,isLast:n,item:e})=>{const t=!e.collapsed,a=e.content.some(s=>{var l,y;return((l=s.body)==null?void 0:l.html)||((y=s.body)==null?void 0:y.text)}),[u,m]=f.useState(t&&a),p=S(),{fontScale:o}=v(),g=_(p,o,r,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[i(c,{style:g.indicator,children:e.progress==="Afgelopen"&&i(C,{color:"inverse",name:"checkmark",size:"sm"})}),i(A,{grow:!0,initiallyExpanded:!!t,onChangeExpanded:s=>m(s),title:e.title,children:a?e.content.map(({title:s,body:{html:l}})=>h(f.Fragment,{children:[i(z,{level:"h5",text:s}),i(L,{content:l})]},s)):void 0},e.title)]}),i(c,{style:g.line})]})};D.__docgenInfo={description:"",methods:[],displayName:"TimelineItem",props:{isBeforeUpcoming:{required:!0,tsType:{name:"boolean"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},item:{required:!0,tsType:{name:"TimelineItemType"},description:""}}};const k=({items:r})=>i(w,{children:r.map((n,e)=>{var t;return i(D,{isBeforeUpcoming:((t=r[e+1])==null?void 0:t.progress)==="Aankomend",isLast:e===r.length-1,item:n},n.title+e.toString())})});k.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TimelineItemType"}],raw:"TimelineItemType[]"},description:""}}};const Te={component:k},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var T,b,x;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const be=["Default"];export{d as Default,be as __namedExportsOrder,Te as default};
//# sourceMappingURL=Timeline.stories-5e6e485b.js.map

import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{J as r,n as i,q as a}from"./dist-CW4nBAfu.js";import{n as o,t as s}from"./HtmlContent-CtCIaftg.js";import{n as c,t as l}from"./Title-D8upBPla.js";import{n as u,t as d}from"./Accordion-DDVfJanb.js";import{n as f,t as p}from"./ProgressStep-BFWMR5bg.js";var m,h,g;function _(){return(_=e((()=>{m=t(),u(),f(),o(),c(),h=n(),g=({item:e,progressStatusNextItem:t})=>{let[n,r]=(0,m.useState)(!e.collapsed);return(0,h.jsx)(p,{isExpanded:n,progressStatus:e.progress,progressStatusNextItem:t,testID:`ConstructionWorkProjectTimelineItem`,variant:`primary`,children:(0,h.jsxs)(d,{grow:1,initiallyExpanded:!e.collapsed,isExpandable:!!e.body||!!e.items?.length,onChangeExpanded:e=>r(e),shrink:1,testID:`ConstructionWorkProjectTimelineItemAccordion`,title:e.title,children:[!!e.body&&(0,h.jsx)(s,{content:e.body,testID:`ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent`}),e.items?.map(({title:e,body:t})=>(0,h.jsxs)(m.Fragment,{children:[!!e&&(0,h.jsx)(l,{level:`h5`,text:e}),!!t&&(0,h.jsx)(s,{content:t,testID:`ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent`})]},e))]},e.title)})};try{g.displayName=`ProjectTimelineItem`,g.__docgenInfo={description:``,displayName:`ProjectTimelineItem`,filePath:`/Users/runner/work/1/s/src/modules/construction-work/components/project/ProjectTimelineItem.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`s/src/modules/construction-work/components/project/ProjectTimelineItem.tsx`,name:`TypeLiteral`}],description:``,name:`item`,required:!0,tags:{},type:{name:`ProjectTimelineItem`}},progressStatusNextItem:{defaultValue:null,declarations:[{fileName:`s/src/modules/construction-work/components/project/ProjectTimelineItem.tsx`,name:`TypeLiteral`}],description:``,name:`progressStatusNextItem`,required:!1,tags:{},type:{name:`enum`,raw:`ProgressStatus`,value:[{value:`"done"`},{value:`"active"`},{value:`"planned"`}]}}},tags:{}}}catch{}})))()}var v,y;function b(){return(b=e((()=>{i(),_(),v=n(),y=({items:e})=>(0,v.jsx)(a,{testID:`ConstructionWorkProjectTimeline`,children:e.map((t,n)=>(0,v.jsx)(g,{item:t,progressStatusNextItem:e[n+1]?.progress},t.title+n.toString()))});try{y.displayName=`ProjectTimeline`,y.__docgenInfo={description:``,displayName:`ProjectTimeline`,filePath:`/Users/runner/work/1/s/src/modules/construction-work/components/project/ProjectTimeline.tsx`,methods:[],props:{items:{defaultValue:null,declarations:[{fileName:`s/src/modules/construction-work/components/project/ProjectTimeline.tsx`,name:`TypeLiteral`}],description:``,name:`items`,required:!0,tags:{},type:{name:`ProjectTimelineItem[]`}}},tags:{}}}catch{}})))()}var x,S,C;function w(){return(w=e((()=>{b(),x={component:y},S={args:{items:[{collapsed:!1,body:`<p>Dolor sit amet 1</p>`,date:``,items:[{title:`Lorem ipsum 1.1`,body:`<p>Dolor sit amet 1.1</p>`,date:``},{title:`Lorem ipsum 1.2`,body:`<p>Dolor sit amet 1.2</p>`,date:``}],progress:`done`,title:`Titel 1`},{collapsed:!0,body:`<p>Dolor sit amet 2</p>`,date:``,items:[{title:`Lorem ipsum 2.1`,body:`<p>Dolor sit amet 2.1</p>`,date:``}],progress:`active`,title:`Titel 2`},{collapsed:!0,body:`<p>Dolor sit amet 3</p>`,date:``,items:[{title:`Lorem ipsum 3.1`,body:`<p>Dolor sit amet 3.1</p>`,date:``},{title:`Lorem ipsum 3.2`,body:`<p>Dolor sit amet 3.2</p>`,date:``}],progress:`planned`,title:`Titel 3`}]}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      progress: 'done',
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
      progress: 'active',
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
      progress: 'planned',
      title: 'Titel 3'
    }]
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`]})))()}w();export{S as Default,C as __namedExportsOrder,x as default};
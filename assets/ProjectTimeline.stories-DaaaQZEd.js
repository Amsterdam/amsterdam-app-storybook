import{l as x,Q as j,j as t,V as p,S as h,a as D,aZ as P,R as T,aD as C,r as v,T as V}from"./iframe-DTT7hwtZ.js";import{A as N}from"./Accordion-BNNB_xHS.js";import{H as I}from"./HtmlContent-BjYOeOcI.js";import"./preload-helper-Dp1pzeXC.js";import"./Size-nMC5F5ui.js";import"./ListItemMarker-C1xvN6ky.js";const c=({progressStatus:e,progressStatusNextItem:n,variant:s})=>{const o=x(),{fontScale:i}=j(),r=$(o,i,e,n,s);return t.jsx(p,{style:r.container,testID:"ProgressStepConnector"})},$=({color:e,size:n,z:s},o,i,r,a)=>{const l=n.progressSteps[a].indicator*o,S=n.progressSteps[a].line*o;return h.create({container:{position:"absolute",top:l,left:(l-S)/2,zIndex:s.progressStepConnector,width:S,height:"100%",backgroundColor:r?e.progressSteps[a].connector[r]:void 0}})};try{c.displayName="ProgressStepConnector",c.__docgenInfo={description:"",displayName:"ProgressStepConnector",props:{progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const u=({progressStatus:e,numberIndicator:n,variant:s})=>{const o=x(),{fontScale:i}=j(),r=q(o,i,e,s);return t.jsxs(p,{style:r.indicator,testID:"ProgressStepIndicator",children:[e==="done"&&t.jsx(D,{color:"inverse",name:"check-mark",size:s==="primary"?"sm":"md",testID:"ProgressStepIndicatorDoneIcon"}),!!n&&e!=="done"&&t.jsx(P,{style:r.text,testID:"ProgressStepIndicatorNumberLabel",children:n})]})},q=({color:e,size:n,text:s},o,i,r)=>{const a=n.progressSteps[r].indicator*o;return h.create({indicator:{width:a,height:a,justifyContent:"center",alignItems:"center",backgroundColor:e.progressSteps[r].indicator[i].background,borderWidth:r==="secondary"?2:void 0,borderColor:"border"in e.progressSteps[r].indicator[i]?e.progressSteps[r].indicator[i].border:void 0,borderRadius:a/2},text:{alignSelf:"center",color:i==="planned"?e.progressSteps.secondary.indicator.planned.label:e.progressSteps.secondary.indicator.active.label,fontFamily:s.fontFamily.bold,fontSize:s.fontSize.h5}})};try{u.displayName="ProgressStepIndicator",u.__docgenInfo={description:"",displayName:"ProgressStepIndicator",props:{numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const m=({children:e,isExpanded:n=!1,numberIndicator:s,progressStatus:o,progressStatusNextItem:i,testID:r,variant:a})=>t.jsxs(p,{testID:r,children:[t.jsxs(T,{gutter:"md",valign:"start",children:[t.jsx(u,{numberIndicator:s,progressStatus:o,variant:a}),e]}),(!!i||!!n)&&t.jsxs(t.Fragment,{children:[t.jsx(C,{height:"xl"}),t.jsx(c,{progressStatus:o,progressStatusNextItem:i,variant:a})]})]});try{m.displayName="ProgressStep",m.__docgenInfo={description:"",displayName:"ProgressStep",props:{isExpanded:{defaultValue:{value:"false"},description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}}}}catch{}const g=({item:e,progressStatusNextItem:n})=>{var i,r;const[s,o]=v.useState(!e.collapsed);return t.jsx(m,{isExpanded:s,progressStatus:e.progress,progressStatusNextItem:n,testID:"ConstructionWorkProjectTimelineItem",variant:"primary",children:t.jsxs(N,{grow:1,initiallyExpanded:!e.collapsed,isExpandable:!!e.body||!!((i=e.items)!=null&&i.length),onChangeExpanded:a=>o(a),shrink:1,testID:"ConstructionWorkProjectTimelineItemAccordion",title:e.title,children:[!!e.body&&t.jsx(I,{content:e.body,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"}),(r=e.items)==null?void 0:r.map(({title:a,body:l})=>t.jsxs(v.Fragment,{children:[!!a&&t.jsx(V,{level:"h5",text:a}),!!l&&t.jsx(I,{content:l,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"})]},a))]},e.title)})};try{g.displayName="ProjectTimelineItem",g.__docgenInfo={description:"",displayName:"ProjectTimelineItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}}}}}catch{}const y=({items:e})=>t.jsx(p,{testID:"ConstructionWorkProjectTimeline",children:e.map((n,s)=>{var o;return t.jsx(g,{item:n,progressStatusNextItem:(o=e[s+1])==null?void 0:o.progress},n.title+s.toString())})});try{y.displayName="ProjectTimeline",y.__docgenInfo={description:"",displayName:"ProjectTimeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const w={component:y},d={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"done",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"active",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"planned",title:"Titel 3"}]}};var f,_,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const z=["Default"];export{d as Default,z as __namedExportsOrder,w as default};

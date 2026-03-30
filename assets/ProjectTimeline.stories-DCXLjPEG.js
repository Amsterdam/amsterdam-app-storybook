import{j as t,V as p,S as I,r as f}from"./iframe-DVsjaSBR.js";import{A as x}from"./Accordion-Bl9gaRy_.js";import{G as j}from"./Gutter-mcUCfHLx.js";import{R as h}from"./Row-BygMrIHI.js";import{u as _}from"./useDeviceContext-iL4QK4W0.js";import{a as b}from"./useThemable-D5Gvc-SX.js";import{I as D}from"./Icon-C9SEymYf.js";import{A as P}from"./AccessibleText-BAoSRXmy.js";import{H as v}from"./HtmlContent-Dufu5MXc.js";import{T}from"./Title-Cgu-GDys.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-BmQA7aH6.js";import"./PressableBase-D3Opyjge.js";import"./usePiwikTrackCustomEventFromProps-B8eCSysA.js";import"./useTrackException-MMUwi7HS.js";import"./Box-D_iRbkYg.js";import"./layoutStyles-D2rMkwIU.js";import"./Column-CvvFtSW2.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Size-J2SF8u5X.js";import"./index-CO0KPJoJ.js";import"./InlineLink-BsyjDxb3.js";import"./Phrase-BbrXX42F.js";import"./ListItemMarker-CgCJWAI2.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-D-WPJA3x.js";import"./useOpenUrl-DcAQPKzK.js";import"./useOpenMailUrl-Ba1MZjQK.js";import"./useOpenPhoneUrl-C6-rBSWx.js";import"./useOpenWebUrl-VEIgQfZu.js";const d=({progressStatus:e,progressStatusNextItem:n,variant:s})=>{const a=b(),{fontScale:r}=_(),o=C(a,r,e,n,s);return t.jsx(p,{style:o.container,testID:"ProgressStepConnector"})},C=({color:e,size:n,z:s},a,r,o,i)=>{const y=n.progressSteps[i].indicator*a,S=n.progressSteps[i].line*a;return I.create({container:{position:"absolute",top:y,left:(y-S)/2,zIndex:s.progressStepConnector,width:S,height:"100%",backgroundColor:o?e.progressSteps[i].connector[o]:void 0}})};try{d.displayName="ProgressStepConnector",d.__docgenInfo={description:"",displayName:"ProgressStepConnector",props:{progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const m=({progressStatus:e,numberIndicator:n,variant:s})=>{const a=b(),{fontScale:r}=_(),o=V(a,r,e,s);return t.jsxs(p,{style:o.indicator,testID:"ProgressStepIndicator",children:[e==="done"&&t.jsx(D,{color:"inverse",name:"check-mark",size:s==="primary"?"sm":"md",testID:"ProgressStepIndicatorDoneIcon"}),!!n&&e!=="done"&&t.jsx(P,{style:o.text,testID:"ProgressStepIndicatorNumberLabel",children:n})]})},V=({color:e,size:n,text:s},a,r,o)=>{const i=n.progressSteps[o].indicator*a;return I.create({indicator:{width:i,height:i,justifyContent:"center",alignItems:"center",backgroundColor:e.progressSteps[o].indicator[r].background,borderWidth:o==="secondary"?2:void 0,borderColor:"border"in e.progressSteps[o].indicator[r]?e.progressSteps[o].indicator[r].border:void 0,borderRadius:i/2},text:{alignSelf:"center",color:r==="planned"?e.progressSteps.secondary.indicator.planned.label:e.progressSteps.secondary.indicator.active.label,fontFamily:s.fontFamily.bold,fontSize:s.fontSize.h5}})};try{m.displayName="ProgressStepIndicator",m.__docgenInfo={description:"",displayName:"ProgressStepIndicator",props:{numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const c=({children:e,isExpanded:n=!1,numberIndicator:s,progressStatus:a,progressStatusNextItem:r,testID:o,variant:i})=>t.jsxs(p,{testID:o,children:[t.jsxs(h,{gutter:"md",valign:"start",children:[t.jsx(m,{numberIndicator:s,progressStatus:a,variant:i}),e]}),(!!r||!!n)&&t.jsxs(t.Fragment,{children:[t.jsx(j,{height:"xl"}),t.jsx(d,{progressStatus:a,progressStatusNextItem:r,variant:i})]})]});try{c.displayName="ProgressStep",c.__docgenInfo={description:"",displayName:"ProgressStep",props:{isExpanded:{defaultValue:{value:"false"},description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}}}}catch{}const u=({item:e,progressStatusNextItem:n})=>{const[s,a]=f.useState(!e.collapsed);return t.jsx(c,{isExpanded:s,progressStatus:e.progress,progressStatusNextItem:n,testID:"ConstructionWorkProjectTimelineItem",variant:"primary",children:t.jsxs(x,{grow:1,initiallyExpanded:!e.collapsed,isExpandable:!!e.body||!!e.items?.length,onChangeExpanded:r=>a(r),shrink:1,testID:"ConstructionWorkProjectTimelineItemAccordion",title:e.title,children:[!!e.body&&t.jsx(v,{content:e.body,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"}),e.items?.map(({title:r,body:o})=>t.jsxs(f.Fragment,{children:[!!r&&t.jsx(T,{level:"h5",text:r}),!!o&&t.jsx(v,{content:o,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"})]},r))]},e.title)})};try{u.displayName="ProjectTimelineItem",u.__docgenInfo={description:"",displayName:"ProjectTimelineItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}}}}}catch{}const g=({items:e})=>t.jsx(p,{testID:"ConstructionWorkProjectTimeline",children:e.map((n,s)=>t.jsx(u,{item:n,progressStatusNextItem:e[s+1]?.progress},n.title+s.toString()))});try{g.displayName="ProjectTimeline",g.__docgenInfo={description:"",displayName:"ProjectTimeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const ie={component:g},l={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"done",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"active",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"planned",title:"Titel 3"}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const le=["Default"];export{l as Default,le as __namedExportsOrder,ie as default};

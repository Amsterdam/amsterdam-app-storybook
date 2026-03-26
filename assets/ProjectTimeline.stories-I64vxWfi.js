import{j as t,V as p,S as I,r as f}from"./iframe-BnTi2Ipb.js";import{A as x}from"./Accordion-BqcRKkNa.js";import{G as j}from"./Gutter-8kjDgRZq.js";import{R as h}from"./Row-DyGUi99b.js";import{u as _}from"./useDeviceContext-Bled4Lz7.js";import{a as b}from"./useThemable-BV13EfVK.js";import{I as D}from"./Icon-CB6Oi_8t.js";import{A as P}from"./AccessibleText-D7uCpWeW.js";import{H as v}from"./HtmlContent-CuwwLBIp.js";import{T}from"./Title-CqauUpqu.js";import"./preload-helper-Zf8nSx-t.js";import"./Pressable-DHtpGMuK.js";import"./PressableBase-DQbimU-D.js";import"./usePiwikTrackCustomEventFromProps-CohhrMAY.js";import"./useTrackException-Cbk2grxp.js";import"./Box-CAM17CGq.js";import"./layoutStyles-5jOVAEE4.js";import"./Column-BF4600Xj.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Size-BuVVtSAE.js";import"./index-CDlzCkrO.js";import"./InlineLink-DslaZaRg.js";import"./Phrase-CJWnXTD9.js";import"./ListItemMarker-Cr9B3chg.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-CQXcYytV.js";import"./useOpenUrl-DNzq9bW0.js";import"./useOpenMailUrl-D4ywcEKY.js";import"./useOpenPhoneUrl-Di6_lOE2.js";import"./useOpenWebUrl-B-3li4kT.js";const d=({progressStatus:e,progressStatusNextItem:n,variant:s})=>{const a=b(),{fontScale:r}=_(),o=C(a,r,e,n,s);return t.jsx(p,{style:o.container,testID:"ProgressStepConnector"})},C=({color:e,size:n,z:s},a,r,o,i)=>{const y=n.progressSteps[i].indicator*a,S=n.progressSteps[i].line*a;return I.create({container:{position:"absolute",top:y,left:(y-S)/2,zIndex:s.progressStepConnector,width:S,height:"100%",backgroundColor:o?e.progressSteps[i].connector[o]:void 0}})};try{d.displayName="ProgressStepConnector",d.__docgenInfo={description:"",displayName:"ProgressStepConnector",props:{progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const m=({progressStatus:e,numberIndicator:n,variant:s})=>{const a=b(),{fontScale:r}=_(),o=V(a,r,e,s);return t.jsxs(p,{style:o.indicator,testID:"ProgressStepIndicator",children:[e==="done"&&t.jsx(D,{color:"inverse",name:"check-mark",size:s==="primary"?"sm":"md",testID:"ProgressStepIndicatorDoneIcon"}),!!n&&e!=="done"&&t.jsx(P,{style:o.text,testID:"ProgressStepIndicatorNumberLabel",children:n})]})},V=({color:e,size:n,text:s},a,r,o)=>{const i=n.progressSteps[o].indicator*a;return I.create({indicator:{width:i,height:i,justifyContent:"center",alignItems:"center",backgroundColor:e.progressSteps[o].indicator[r].background,borderWidth:o==="secondary"?2:void 0,borderColor:"border"in e.progressSteps[o].indicator[r]?e.progressSteps[o].indicator[r].border:void 0,borderRadius:i/2},text:{alignSelf:"center",color:r==="planned"?e.progressSteps.secondary.indicator.planned.label:e.progressSteps.secondary.indicator.active.label,fontFamily:s.fontFamily.bold,fontSize:s.fontSize.h5}})};try{m.displayName="ProgressStepIndicator",m.__docgenInfo={description:"",displayName:"ProgressStepIndicator",props:{numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const c=({children:e,isExpanded:n=!1,numberIndicator:s,progressStatus:a,progressStatusNextItem:r,testID:o,variant:i})=>t.jsxs(p,{testID:o,children:[t.jsxs(h,{gutter:"md",valign:"start",children:[t.jsx(m,{numberIndicator:s,progressStatus:a,variant:i}),e]}),(!!r||!!n)&&t.jsxs(t.Fragment,{children:[t.jsx(j,{height:"xl"}),t.jsx(d,{progressStatus:a,progressStatusNextItem:r,variant:i})]})]});try{c.displayName="ProgressStep",c.__docgenInfo={description:"",displayName:"ProgressStep",props:{isExpanded:{defaultValue:{value:"false"},description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}}}}catch{}const u=({item:e,progressStatusNextItem:n})=>{const[s,a]=f.useState(!e.collapsed);return t.jsx(c,{isExpanded:s,progressStatus:e.progress,progressStatusNextItem:n,testID:"ConstructionWorkProjectTimelineItem",variant:"primary",children:t.jsxs(x,{grow:1,initiallyExpanded:!e.collapsed,isExpandable:!!e.body||!!e.items?.length,onChangeExpanded:r=>a(r),shrink:1,testID:"ConstructionWorkProjectTimelineItemAccordion",title:e.title,children:[!!e.body&&t.jsx(v,{content:e.body,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"}),e.items?.map(({title:r,body:o})=>t.jsxs(f.Fragment,{children:[!!r&&t.jsx(T,{level:"h5",text:r}),!!o&&t.jsx(v,{content:o,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"})]},r))]},e.title)})};try{u.displayName="ProjectTimelineItem",u.__docgenInfo={description:"",displayName:"ProjectTimelineItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}}}}}catch{}const g=({items:e})=>t.jsx(p,{testID:"ConstructionWorkProjectTimeline",children:e.map((n,s)=>t.jsx(u,{item:n,progressStatusNextItem:e[s+1]?.progress},n.title+s.toString()))});try{g.displayName="ProjectTimeline",g.__docgenInfo={description:"",displayName:"ProjectTimeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const ie={component:g},l={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"done",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"active",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"planned",title:"Titel 3"}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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

import{j as t,V as d,S as x,r as f}from"./iframe-3TXg6WoG.js";import{A as D}from"./Accordion-D28JE8BP.js";import{G as P}from"./Gutter-DLeXNoU2.js";import{R as T}from"./Row-Br2kmoWu.js";import{u as j}from"./useDeviceContext-CKLjKzXG.js";import{a as h}from"./useThemable-B2uwHoQi.js";import{I as C}from"./Icon-D2JDQLQf.js";import{A as V}from"./AccessibleText-BnMstB7w.js";import{H as v}from"./HtmlContent-ZCRxku2_.js";import{T as N}from"./Title-05cDNhIL.js";import"./preload-helper-Dp1pzeXC.js";import"./Pressable-C3rJWVue.js";import"./PressableBase-Ba5g0PvV.js";import"./usePiwikTrackCustomEventFromProps-CNkppRrW.js";import"./useTrackException-BggXan7s.js";import"./Box-DbhhU8rT.js";import"./layoutStyles-AusL4WdB.js";import"./Column-Ok3wDOF6.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Size-BeD6ahHb.js";import"./index-v6X-xQeP.js";import"./types-CVDZqz9V.js";import"./useOpenWebUrl-CmyY2WNM.js";import"./Phrase-CdpnxuT6.js";import"./ListItemMarker-BPBEuSMy.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-DxdBu6nQ.js";import"./useOpenMailUrl-BzMoTsoB.js";import"./useOpenPhoneUrl-Vj0y6DjR.js";const m=({progressStatus:e,progressStatusNextItem:o,variant:n})=>{const s=h(),{fontScale:i}=j(),r=$(s,i,e,o,n);return t.jsx(d,{style:r.container,testID:"ProgressStepConnector"})},$=({color:e,size:o,z:n},s,i,r,a)=>{const l=o.progressSteps[a].indicator*s,S=o.progressSteps[a].line*s;return x.create({container:{position:"absolute",top:l,left:(l-S)/2,zIndex:n.progressStepConnector,width:S,height:"100%",backgroundColor:r?e.progressSteps[a].connector[r]:void 0}})};try{m.displayName="ProgressStepConnector",m.__docgenInfo={description:"",displayName:"ProgressStepConnector",props:{progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const c=({progressStatus:e,numberIndicator:o,variant:n})=>{const s=h(),{fontScale:i}=j(),r=q(s,i,e,n);return t.jsxs(d,{style:r.indicator,testID:"ProgressStepIndicator",children:[e==="done"&&t.jsx(C,{color:"inverse",name:"check-mark",size:n==="primary"?"sm":"md",testID:"ProgressStepIndicatorDoneIcon"}),!!o&&e!=="done"&&t.jsx(V,{style:r.text,testID:"ProgressStepIndicatorNumberLabel",children:o})]})},q=({color:e,size:o,text:n},s,i,r)=>{const a=o.progressSteps[r].indicator*s;return x.create({indicator:{width:a,height:a,justifyContent:"center",alignItems:"center",backgroundColor:e.progressSteps[r].indicator[i].background,borderWidth:r==="secondary"?2:void 0,borderColor:"border"in e.progressSteps[r].indicator[i]?e.progressSteps[r].indicator[i].border:void 0,borderRadius:a/2},text:{alignSelf:"center",color:i==="planned"?e.progressSteps.secondary.indicator.planned.label:e.progressSteps.secondary.indicator.active.label,fontFamily:n.fontFamily.bold,fontSize:n.fontSize.h5}})};try{c.displayName="ProgressStepIndicator",c.__docgenInfo={description:"",displayName:"ProgressStepIndicator",props:{numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const u=({children:e,isExpanded:o=!1,numberIndicator:n,progressStatus:s,progressStatusNextItem:i,testID:r,variant:a})=>t.jsxs(d,{testID:r,children:[t.jsxs(T,{gutter:"md",valign:"start",children:[t.jsx(c,{numberIndicator:n,progressStatus:s,variant:a}),e]}),(!!i||!!o)&&t.jsxs(t.Fragment,{children:[t.jsx(P,{height:"xl"}),t.jsx(m,{progressStatus:s,progressStatusNextItem:i,variant:a})]})]});try{u.displayName="ProgressStep",u.__docgenInfo={description:"",displayName:"ProgressStep",props:{isExpanded:{defaultValue:{value:"false"},description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},numberIndicator:{defaultValue:null,description:"",name:"numberIndicator",required:!1,type:{name:"number"}},progressStatus:{defaultValue:null,description:"",name:"progressStatus",required:!0,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"`${string}Button` | `${string}Alert` | `${string}Icon` | `${string}Label` | `${string}Value` | `${string}Subtitle` | `${string}ProgressStep` | `${string}Preview` | `${string}OpenImagePicker` | `${string}Sections` | `${string}Entry` | `${string}FullScreenError` | `${string}Screen` | `${string}Field` | `${string}Fract..."}}}}}catch{}const g=({item:e,progressStatusNextItem:o})=>{var i,r;const[n,s]=f.useState(!e.collapsed);return t.jsx(u,{isExpanded:n,progressStatus:e.progress,progressStatusNextItem:o,testID:"ConstructionWorkProjectTimelineItem",variant:"primary",children:t.jsxs(D,{grow:1,initiallyExpanded:!e.collapsed,isExpandable:!!e.body||!!((i=e.items)!=null&&i.length),onChangeExpanded:a=>s(a),shrink:1,testID:"ConstructionWorkProjectTimelineItemAccordion",title:e.title,children:[!!e.body&&t.jsx(v,{content:e.body,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"}),(r=e.items)==null?void 0:r.map(({title:a,body:l})=>t.jsxs(f.Fragment,{children:[!!a&&t.jsx(N,{level:"h5",text:a}),!!l&&t.jsx(v,{content:l,testID:"ConstructionWorkProjectTimelineItemAccordionBodyHtmlContent"})]},a))]},e.title)})};try{g.displayName="ProjectTimelineItem",g.__docgenInfo={description:"",displayName:"ProjectTimelineItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},progressStatusNextItem:{defaultValue:null,description:"",name:"progressStatusNextItem",required:!1,type:{name:"enum",value:[{value:'"done"'},{value:'"active"'},{value:'"planned"'}]}}}}}catch{}const y=({items:e})=>t.jsx(d,{testID:"ConstructionWorkProjectTimeline",children:e.map((o,n)=>{var s;return t.jsx(g,{item:o,progressStatusNextItem:(s=e[n+1])==null?void 0:s.progress},o.title+n.toString())})});try{y.displayName="ProjectTimeline",y.__docgenInfo={description:"",displayName:"ProjectTimeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}}}}}catch{}const pe={component:y},p={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"done",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"active",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"planned",title:"Titel 3"}]}};var I,_,b;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(b=(_=p.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const de=["Default"];export{p as Default,de as __namedExportsOrder,pe as default};

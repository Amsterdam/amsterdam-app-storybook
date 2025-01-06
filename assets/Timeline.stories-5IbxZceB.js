import{j as n}from"./jsx-runtime-Bxcv0yjW.js";import{_ as j}from"./useTrackException-Cm6KdDpO.js";import{r as b}from"./index-mfbfsM12.js";import{A}from"./Accordion-D1LI6f6m.js";import{s as v}from"./index-kbHxBZ_W.js";import{R as k}from"./Row-ihhDk4oF.js";import{I as E}from"./Icon-CP3UfLuy.js";import{H as x}from"./HtmlContent-B3tzdoG3.js";import{T as w}from"./Title-BBFo6AiU.js";import{u as R}from"./useDeviceContext-Cm8FgCCV.js";import{u as z}from"./useTheme-RIGOy3Pj.js";import{V as y}from"./index-BP1Ij_Cs.js";import"./index-BowPbij1.js";import"./NativeEventEmitter-MQ3wzVGe.js";import"./index-DSI0shHu.js";import"./TextAncestorContext-Dg3XKfar.js";import"./_commonjsHelpers-BosuxZz1.js";import"./development-LhlsWDYu.js";import"./Pressable-C9--7oVi.js";import"./PressableBase-DKakiJOh.js";import"./usePiwikTrackCustomEventFromProps-3E35eAeO.js";import"./index-8JwjhRSi.js";import"./index-ntARcT2B.js";import"./extends-CF3RwP-h.js";import"./Box-CCJ1E6sZ.js";import"./layoutStyles-hLwHoe51.js";import"./useThemable-CVLZuirU.js";import"./index-DFkxGuuM.js";import"./base-color-B2rPH-Aj.js";import"./Column-DnBv-m5R.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Gutter-CCqCE8gX.js";import"./Size-ByzkQpGs.js";import"./index-BtN4QjYR.js";import"./index-Dk74W0Oi.js";import"./Animated-CFNSbqHF.js";import"./index-2SHDvLR_.js";import"./index-CAyeAlm6.js";import"./types-BJ_48vsK.js";import"./useOpenUrl-DVq-9PfF.js";import"./index-DEfxrPnc.js";import"./client-BGlHIwA3.js";import"./index-CDv7s-w8.js";import"./index-Ce74jbsy.js";import"./index-CkqLweLe.js";import"./index-k6NSpe5t.js";import"./index-DZxzYa9i.js";import"./index-D-zhDGfL.js";import"./index-BXDkY5MO.js";import"./Phrase-DmyrtRmp.js";import"./useOpenMailUrl-hWhkZVDt.js";import"./useOpenPhoneUrl-B6AR-fsE.js";import"./ListItemMarker-CPZ4nhgf.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-A65pchNu.js";function V(r){return r.toLowerCase()}var $=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],S=/[^A-Z0-9]+/gi;function q(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,o=e===void 0?$:e,s=t.stripRegexp,u=s===void 0?S:s,p=t.transform,l=p===void 0?V:p,c=t.delimiter,d=c===void 0?" ":c,a=D(D(r,o,"$1\0$2"),u,"\0"),i=0,m=a.length;a.charAt(i)==="\0";)i++;for(;a.charAt(m-1)==="\0";)m--;return a.slice(i,m).split("\0").map(l).join(d)}function D(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(o,s){return o.replace(s,e)},r)}function H(r,t){var e=r.charAt(0),o=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+o:""+e.toUpperCase()+o}function L(r,t){return t===void 0&&(t={}),q(r,j({delimiter:"",transform:H},t))}const P=(r,t,e,o,s,u)=>{const{color:p,size:l,z:c}=r,d=p.timeline.primary.upcoming.background,a=p.timeline.primary.done.background,i={indicator:{size:l.spacing.lg*t},line:{width:4*t}};return v.create({indicator:{flexShrink:0,position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:l.spacing.md,backgroundColor:o?d:a,borderRadius:i.indicator.size/2},line:{position:"absolute",top:l.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:c.timelineLine,width:i.line.width,height:u&&!s?0:"100%",backgroundColor:o||e?d:a}})},h=({isBeforeUpcoming:r,isLast:t,item:e,testID:o})=>{var a,i;const s=!e.collapsed,[u,p]=b.useState(s),l=z(),{fontScale:c}=R(),d=P(l,c,r,e.progress==="Aankomend",u,t);return n.jsxs(y,{children:[n.jsxs(k,{children:[n.jsx(y,{style:d.indicator,children:e.progress==="Afgelopen"&&n.jsx(E,{color:"inverse",name:"check-mark",size:"sm",testID:`${o}Icon`})}),n.jsxs(A,{grow:1,initiallyExpanded:!!s,isExpandable:!!e.body||!!((a=e.items)!=null&&a.length),onChangeExpanded:m=>p(m),shrink:1,testID:o,title:e.title,children:[!!e.body&&n.jsx(x,{content:e.body,testID:`${o}BodyHtmlContent`}),(i=e.items)==null?void 0:i.map(({title:m,body:f})=>n.jsxs(b.Fragment,{children:[!!m&&n.jsx(w,{level:"h5",text:m}),!!f&&n.jsx(x,{content:f,testID:`${o}ItemBody${L(m??f??"")}HtmlContent`})]},m))]},e.title)]}),n.jsx(y,{style:d.line})]})};try{h.displayName="TimelineItem",h.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const _=({items:r,testID:t})=>n.jsx(n.Fragment,{children:r.map((e,o)=>{var s;return n.jsx(h,{isBeforeUpcoming:((s=r[o+1])==null?void 0:s.progress)==="Aankomend",isLast:o===r.length-1,item:e,testID:`${t}${L(e.title)}TimelineItem`},e.title+o.toString())})});try{_.displayName="Timeline",_.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Fe={component:_},g={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,I,C;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      progress: 'Afgelopen',
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
      progress: 'Huidig',
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
      progress: 'Aankomend',
      title: 'Titel 3'
    }]
  }
}`,...(C=(I=g.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const Ne=["Default"];export{g as Default,Ne as __namedExportsOrder,Fe as default};

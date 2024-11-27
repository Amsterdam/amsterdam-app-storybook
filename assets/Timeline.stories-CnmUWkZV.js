import{j as o}from"./jsx-runtime-Bxcv0yjW.js";import{_ as A}from"./useTrackException-D6bVaubk.js";import{r as x}from"./index-mfbfsM12.js";import{A as C}from"./Accordion-C0oU3-oy.js";import{s as v}from"./index-kbHxBZ_W.js";import{R as E}from"./Row-BBylBpIP.js";import{I as w}from"./Icon-BPmaisZZ.js";import{H as b}from"./HtmlContent--BwAjouW.js";import{T as R}from"./Title-B6bKLkD3.js";import{u as k}from"./useDeviceContext-Cm8FgCCV.js";import{u as z}from"./useTheme-DlfPjCuX.js";import{V as y}from"./index-BP1Ij_Cs.js";import"./index-BowPbij1.js";import"./NativeEventEmitter-MQ3wzVGe.js";import"./index-DSI0shHu.js";import"./TextAncestorContext-Dg3XKfar.js";import"./_commonjsHelpers-BosuxZz1.js";import"./development-LhlsWDYu.js";import"./Pressable-16LGe5bD.js";import"./PressableBase-Cq53gZe7.js";import"./usePiwikTrackCustomEventFromProps-Czinnpea.js";import"./index-8JwjhRSi.js";import"./index-FbO0g8Fc.js";import"./extends-CF3RwP-h.js";import"./Box-Bf2LNaMi.js";import"./layoutStyles-hLwHoe51.js";import"./useThemable-BcQl3YlP.js";import"./index-DFkxGuuM.js";import"./base-color-B2rPH-Aj.js";import"./Column-BkKRwMys.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Gutter-Bab43cX3.js";import"./Size-ByzkQpGs.js";import"./index-BtN4QjYR.js";import"./index-Dk74W0Oi.js";import"./Animated-CFNSbqHF.js";import"./index-2SHDvLR_.js";import"./index-CAyeAlm6.js";import"./types-BJ_48vsK.js";import"./useOpenUrl-DFtLfYi_.js";import"./index-DEfxrPnc.js";import"./client-BGlHIwA3.js";import"./index-CDv7s-w8.js";import"./index-Ce74jbsy.js";import"./index-CkqLweLe.js";import"./index-k6NSpe5t.js";import"./index-DZxzYa9i.js";import"./index-BFDMseV3.js";import"./index-BXDkY5MO.js";import"./Phrase-Cp_34hhZ.js";import"./useOpenMailUrl-XspSTjp4.js";import"./useOpenPhoneUrl-2tPaXT7k.js";import"./ListItemMarker-Dpce0S4b.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-sM9j8CJI.js";function V(r){return r.toLowerCase()}var $=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],S=/[^A-Z0-9]+/gi;function q(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?$:e,n=t.stripRegexp,u=n===void 0?S:n,m=t.transform,p=m===void 0?V:m,d=t.delimiter,s=d===void 0?" ":d,l=D(D(r,i,"$1\0$2"),u,"\0"),c=0,a=l.length;l.charAt(c)==="\0";)c++;for(;l.charAt(a-1)==="\0";)a--;return l.slice(c,a).split("\0").map(p).join(s)}function D(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,n){return i.replace(n,e)},r)}function H(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function j(r,t){return t===void 0&&(t={}),q(r,A({delimiter:"",transform:H},t))}const P=(r,t,e,i,n,u)=>{const{color:m,size:p,z:d}=r,s={indicator:{size:p.spacing.lg*t},line:{width:4*t}};return v.create({indicator:{flexShrink:0,position:"relative",width:s.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:p.spacing.md,backgroundColor:i?m.timeline.future:m.timeline.past,borderRadius:s.indicator.size/2},line:{position:"absolute",top:p.spacing.md+s.indicator.size,left:(s.indicator.size-s.line.width)/2,zIndex:d.timelineLine,width:s.line.width,height:u&&!n?0:"100%",backgroundColor:i||e?m.timeline.future:m.timeline.past}})},h=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var l,c;const n=!e.collapsed,[u,m]=x.useState(n),p=z(),{fontScale:d}=k(),s=P(p,d,r,e.progress==="Aankomend",u,t);return o.jsxs(y,{children:[o.jsxs(E,{children:[o.jsx(y,{style:s.indicator,children:e.progress==="Afgelopen"&&o.jsx(w,{color:"inverse",name:"check-mark",size:"sm",testID:`${i}Icon`})}),o.jsxs(C,{grow:1,initiallyExpanded:!!n,isExpandable:!!e.body||!!((l=e.items)!=null&&l.length),onChangeExpanded:a=>m(a),shrink:1,testID:i,title:e.title,children:[!!e.body&&o.jsx(b,{content:e.body,testID:`${i}BodyHtmlContent`}),(c=e.items)==null?void 0:c.map(({title:a,body:g})=>o.jsxs(x.Fragment,{children:[!!a&&o.jsx(R,{level:"h5",text:a}),!!g&&o.jsx(b,{content:g,testID:`${i}ItemBody${j(a??g??"")}HtmlContent`})]},a))]},e.title)]}),o.jsx(y,{style:s.line})]})};try{h.displayName="TimelineItem",h.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const _=({items:r,testID:t})=>o.jsx(o.Fragment,{children:r.map((e,i)=>{var n;return o.jsx(h,{isBeforeUpcoming:((n=r[i+1])==null?void 0:n.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:`${t}${j(e.title)}TimelineItem`},e.title+i.toString())})});try{_.displayName="Timeline",_.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Fe={component:_},f={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,I,L;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(I=f.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Ne=["Default"];export{f as Default,Ne as __namedExportsOrder,Fe as default};

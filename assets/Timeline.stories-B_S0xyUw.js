import{j as o}from"./jsx-runtime-Bxcv0yjW.js";import{_ as C}from"./useTrackException-BU5P3RYO.js";import{r as x}from"./index-mfbfsM12.js";import{A}from"./Accordion-DKs5loGU.js";import{s as v}from"./index-kbHxBZ_W.js";import{I as w}from"./Icon-CrpkqcSI.js";import{H as b}from"./HtmlContent-D0Zj1kT0.js";import{T as E}from"./Title-B4V9JgDH.js";import{u as z}from"./useDeviceContext-Cm8FgCCV.js";import{u as R}from"./useTheme-Ir8OQVhl.js";import{V as f}from"./index-BP1Ij_Cs.js";import"./index-BowPbij1.js";import"./NativeEventEmitter-MQ3wzVGe.js";import"./index-DSI0shHu.js";import"./TextAncestorContext-Dg3XKfar.js";import"./_commonjsHelpers-BosuxZz1.js";import"./development-ClFnP_lz.js";import"./Pressable-CL3vX7vY.js";import"./PressableBase-BPmGRGUQ.js";import"./usePiwikTrackCustomEventFromProps-wCoeLtkt.js";import"./index-8JwjhRSi.js";import"./index-hUIPw1_0.js";import"./extends-CF3RwP-h.js";import"./Box-oOge_eey.js";import"./layoutStyles-hLwHoe51.js";import"./useThemable-DmNAas-L.js";import"./index-DFkxGuuM.js";import"./base-color-B2rPH-Aj.js";import"./Column-2JQfABRv.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Gutter-BXeUkuHi.js";import"./Row-D8u08ETD.js";import"./Size-ByzkQpGs.js";import"./index-BtN4QjYR.js";import"./index-Dk74W0Oi.js";import"./Animated-CFNSbqHF.js";import"./index-2SHDvLR_.js";import"./index-CAyeAlm6.js";import"./types-BJ_48vsK.js";import"./useOpenUrl-CBBfk_io.js";import"./index-DEfxrPnc.js";import"./client-BGlHIwA3.js";import"./index-CDv7s-w8.js";import"./index-Ce74jbsy.js";import"./index-CkqLweLe.js";import"./index-k6NSpe5t.js";import"./index-DZxzYa9i.js";import"./index-DlDOhTZZ.js";import"./index-BXDkY5MO.js";import"./Phrase-B_bS_s4Z.js";import"./useOpenMailUrl-DSlMYod7.js";import"./useOpenPhoneUrl-DWGlcrbp.js";import"./ListItemMarker-BA1c4W7T.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-MctOuOus.js";function k(r){return r.toLowerCase()}var V=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],$=/[^A-Z0-9]+/gi;function q(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?V:e,n=t.stripRegexp,u=n===void 0?$:n,p=t.transform,m=p===void 0?k:p,d=t.delimiter,s=d===void 0?" ":d,l=D(D(r,i,"$1\0$2"),u,"\0"),c=0,a=l.length;l.charAt(c)==="\0";)c++;for(;l.charAt(a-1)==="\0";)a--;return l.slice(c,a).split("\0").map(m).join(s)}function D(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,n){return i.replace(n,e)},r)}function H(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function j(r,t){return t===void 0&&(t={}),q(r,C({delimiter:"",transform:H},t))}const P=(r,t,e,i,n,u)=>{const{color:p,size:m,z:d}=r,s={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*t},line:{width:4*t}};return v.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:s.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:i?p.timeline.future:p.timeline.past,borderRadius:s.indicator.size/2},line:{position:"absolute",top:m.spacing.md+s.indicator.size,left:(s.indicator.size-s.line.width)/2,zIndex:d.timelineLine,width:s.line.width,height:u&&!n?0:"100%",backgroundColor:i||e?p.timeline.future:p.timeline.past}})},h=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var l,c;const n=!e.collapsed,[u,p]=x.useState(n),m=R(),{fontScale:d}=z(),s=P(m,d,r,e.progress==="Aankomend",u,t);return o.jsxs(f,{children:[o.jsxs(f,{style:s.header,children:[o.jsx(f,{style:s.indicator,children:e.progress==="Afgelopen"&&o.jsx(w,{color:"inverse",name:"check-mark",size:"sm",testID:`${i}Icon`})}),o.jsxs(A,{grow:1,initiallyExpanded:!!n,isExpandable:!!e.body||!!((l=e.items)!=null&&l.length),onChangeExpanded:a=>p(a),testID:i,title:e.title,children:[!!e.body&&o.jsx(b,{content:e.body,testID:`${i}BodyHtmlContent`}),(c=e.items)==null?void 0:c.map(({title:a,body:y})=>o.jsxs(x.Fragment,{children:[!!a&&o.jsx(E,{level:"h5",text:a}),!!y&&o.jsx(b,{content:y,testID:`${i}ItemBody${j(a??y??"")}HtmlContent`})]},a))]},e.title)]}),o.jsx(f,{style:s.line})]})};try{h.displayName="TimelineItem",h.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const _=({items:r,testID:t})=>o.jsx(o.Fragment,{children:r.map((e,i)=>{var n;return o.jsx(h,{isBeforeUpcoming:((n=r[i+1])==null?void 0:n.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:`${t}${j(e.title)}TimelineItem`},e.title+i.toString())})});try{_.displayName="Timeline",_.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Ue={component:_},g={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,I,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Fe=["Default"];export{g as Default,Fe as __namedExportsOrder,Ue as default};

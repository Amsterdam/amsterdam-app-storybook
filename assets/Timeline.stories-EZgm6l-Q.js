import{j as o}from"./jsx-runtime-CKrituN3.js";import{_ as C}from"./tslib.es6-De9GV7Vy.js";import{r as x}from"./index-CBqU2yxZ.js";import{A}from"./Accordion-7TmZ21qt.js";import{s as v}from"./index-Us49mgpR.js";import{I as w}from"./Icon-uC7AMkHJ.js";import{H as b}from"./HtmlContent-kMUUh5fd.js";import{T as E}from"./Title-CrNn-1ts.js";import{u as z}from"./useDeviceContext-CYreQoQV.js";import{u as R}from"./useTheme-CCdQLXM4.js";import{V as f}from"./index-BySreB3I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Pressable-DZ81077x.js";import"./PressableBase-DZHExAmZ.js";import"./usePiwikTrackCustomEventFromProps-ByXbYGhF.js";import"./index-8JwjhRSi.js";import"./useTrackException-YJ53Vokp.js";import"./index-zj3cuDFB.js";import"./NativeEventEmitter-DdN3StA5.js";import"./index-DVCMAXez.js";import"./TextAncestorContext-CxUfpxkU.js";import"./development-Cx_QPvdM.js";import"./index-BKHiHeki.js";import"./extends-CF3RwP-h.js";import"./Box-Jv3WuMX7.js";import"./layoutStyles-D4vProkC.js";import"./useThemable-B5KlIRSX.js";import"./index-BtM5VmRH.js";import"./base-color-Co9_lLmz.js";import"./Column-DGoD5x7v.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Row-Csjk4iRt.js";import"./Size-BxM06YYo.js";import"./index-Ddv-N6EM.js";import"./index-Dk74W0Oi.js";import"./Animated-DWDoN2T2.js";import"./index-BUR9LkGU.js";import"./index-BwZbmMJB.js";import"./types-BJ_48vsK.js";import"./index-D5PXLYAQ.js";import"./index-7MGyAHFq.js";import"./client-BzqUitaj.js";import"./index-3C_OVj7v.js";import"./index-Cv5Bed7I.js";import"./index-DGXuGKUT.js";import"./index-B55gEuhr.js";import"./index-glIcv0Xr.js";import"./index-DDksF9gz.js";import"./index-NoE4hmAe.js";import"./Phrase-Bk8q9gPp.js";import"./ListItemMarker-QYjm4o3c.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-BzL_phMH.js";import"./useOpenMailUrl-B63n-E8Q.js";import"./useOpenPhoneUrl-1ebet68I.js";function k(r){return r.toLowerCase()}var V=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],$=/[^A-Z0-9]+/gi;function q(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?V:e,n=t.stripRegexp,u=n===void 0?$:n,p=t.transform,m=p===void 0?k:p,d=t.delimiter,s=d===void 0?" ":d,l=D(D(r,i,"$1\0$2"),u,"\0"),c=0,a=l.length;l.charAt(c)==="\0";)c++;for(;l.charAt(a-1)==="\0";)a--;return l.slice(c,a).split("\0").map(m).join(s)}function D(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,n){return i.replace(n,e)},r)}function H(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function j(r,t){return t===void 0&&(t={}),q(r,C({delimiter:"",transform:H},t))}const P=(r,t,e,i,n,u)=>{const{color:p,size:m,z:d}=r,s={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*t},line:{width:4*t}};return v.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:s.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:i?p.timeline.future:p.timeline.past,borderRadius:s.indicator.size/2},line:{position:"absolute",top:m.spacing.md+s.indicator.size,left:(s.indicator.size-s.line.width)/2,zIndex:d.timelineLine,width:s.line.width,height:u&&!n?0:"100%",backgroundColor:i||e?p.timeline.future:p.timeline.past}})},h=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var l,c;const n=!e.collapsed,[u,p]=x.useState(n),m=R(),{fontScale:d}=z(),s=P(m,d,r,e.progress==="Aankomend",u,t);return o.jsxs(f,{children:[o.jsxs(f,{style:s.header,children:[o.jsx(f,{style:s.indicator,children:e.progress==="Afgelopen"&&o.jsx(w,{color:"inverse",name:"check-mark",size:"sm",testID:`${i}Icon`})}),o.jsxs(A,{grow:1,initiallyExpanded:!!n,isExpandable:!!e.body||!!((l=e.items)!=null&&l.length),onChangeExpanded:a=>p(a),testID:i,title:e.title,children:[!!e.body&&o.jsx(b,{content:e.body,testID:`${i}BodyHtmlContent`}),(c=e.items)==null?void 0:c.map(({title:a,body:y})=>o.jsxs(x.Fragment,{children:[!!a&&o.jsx(E,{level:"h5",text:a}),!!y&&o.jsx(b,{content:y,testID:`${i}ItemBody${j(a??y??"")}HtmlContent`})]},a))]},e.title)]}),o.jsx(f,{style:s.line})]})};try{h.displayName="TimelineItem",h.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const _=({items:r,testID:t})=>o.jsx(o.Fragment,{children:r.map((e,i)=>{var n;return o.jsx(h,{isBeforeUpcoming:((n=r[i+1])==null?void 0:n.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:`${t}${j(e.title)}TimelineItem`},e.title+i.toString())})});try{_.displayName="Timeline",_.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Ue={component:_},g={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,I,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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

import{j as o}from"./jsx-runtime-ffb262ed.js";import{_ as C}from"./tslib.es6-6ccf754a.js";import{r as x}from"./index-76fb7be0.js";import{A}from"./Accordion-1d414fee.js";import{S as v}from"./index-a802de3b.js";import{I as w}from"./Icon-b181f027.js";import{H as b}from"./HtmlContent-6d087803.js";import{T as E}from"./Title-68e6bc29.js";import{u as z}from"./useDeviceContext-d0c458db.js";import{u as R}from"./useTheme-f1b36744.js";import{V as f}from"./index-5b56d0c8.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-ff11b4b6.js";import"./PressableBase-e5c6b6d6.js";import"./usePiwikTrackCustomEventFromProps-1282c0f8.js";import"./index-e8e5dbb3.js";import"./useTrackException-4a5c311f.js";import"./index-ee304789.js";import"./NativeEventEmitter-2071600e.js";import"./index-115efad7.js";import"./TextAncestorContext-c1a63433.js";import"./development-6fd8b346.js";import"./index-b3fe80a1.js";import"./extends-4c19d496.js";import"./Box-e081fd1d.js";import"./layoutStyles-b0426a14.js";import"./useThemable-ff20b89f.js";import"./index-d3ea75b5.js";import"./base-color-ddf2570b.js";import"./Column-4b8cda4b.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./Row-a0efff67.js";import"./Size-c5ad4b40.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Animated-fdc153e4.js";import"./index-4f48d35c.js";import"./index-ccab62b4.js";import"./types-65ac26c5.js";import"./index-9f3c1ff0.js";import"./index-c1b0849e.js";import"./client-da5da0de.js";import"./index-d24010b5.js";import"./index-90bfbf72.js";import"./index-d94c145e.js";import"./index-15b79168.js";import"./index-0b797b1c.js";import"./index-ce2d7f3b.js";import"./index-e8db3c07.js";import"./Phrase-88b38071.js";import"./ListItemMarker-4f0be363.js";import"./config-55b2a55c.js";import"./useIsScreenReaderEnabled-db48f351.js";import"./useOpenMailUrl-a94f603b.js";import"./useOpenPhoneUrl-4998d859.js";function k(r){return r.toLowerCase()}var S=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],V=/[^A-Z0-9]+/gi;function $(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?S:e,n=t.stripRegexp,u=n===void 0?V:n,p=t.transform,m=p===void 0?k:p,d=t.delimiter,s=d===void 0?" ":d,l=D(D(r,i,"$1\0$2"),u,"\0"),c=0,a=l.length;l.charAt(c)==="\0";)c++;for(;l.charAt(a-1)==="\0";)a--;return l.slice(c,a).split("\0").map(m).join(s)}function D(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,n){return i.replace(n,e)},r)}function q(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function j(r,t){return t===void 0&&(t={}),$(r,C({delimiter:"",transform:q},t))}const H=(r,t,e,i,n,u)=>{const{color:p,size:m,z:d}=r,s={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*t},line:{width:4*t}};return v.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:s.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:i?p.timeline.future:p.timeline.past,borderRadius:s.indicator.size/2},line:{position:"absolute",top:m.spacing.md+s.indicator.size,left:(s.indicator.size-s.line.width)/2,zIndex:d.timelineLine,width:s.line.width,height:u&&!n?0:"100%",backgroundColor:i||e?p.timeline.future:p.timeline.past}})},h=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var l,c;const n=!e.collapsed,[u,p]=x.useState(n),m=R(),{fontScale:d}=z(),s=H(m,d,r,e.progress==="Aankomend",u,t);return o.jsxs(f,{children:[o.jsxs(f,{style:s.header,children:[o.jsx(f,{style:s.indicator,children:e.progress==="Afgelopen"&&o.jsx(w,{color:"inverse",name:"check-mark",size:"sm",testID:`${i}Icon`})}),o.jsxs(A,{grow:1,initiallyExpanded:!!n,isExpandable:!!e.body||!!((l=e.items)!=null&&l.length),onChangeExpanded:a=>p(a),testID:i,title:e.title,children:[!!e.body&&o.jsx(b,{content:e.body,testID:`${i}BodyHtmlContent`}),(c=e.items)==null?void 0:c.map(({title:a,body:y})=>o.jsxs(x.Fragment,{children:[!!a&&o.jsx(E,{level:"h5",text:a}),!!y&&o.jsx(b,{content:y,testID:`${i}ItemBody${j(a??y??"")}HtmlContent`})]},a))]},e.title)]}),o.jsx(f,{style:s.line})]})};try{h.displayName="TimelineItem",h.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const _=({items:r,testID:t})=>o.jsx(o.Fragment,{children:r.map((e,i)=>{var n;return o.jsx(h,{isBeforeUpcoming:((n=r[i+1])==null?void 0:n.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:`${t}${j(e.title)}TimelineItem`},e.title+i.toString())})});try{_.displayName="Timeline",_.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Ue={component:_},g={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,I,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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

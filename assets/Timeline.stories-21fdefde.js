import{S as v,j as o}from"./index-9d7eb5a2.js";import{_ as C}from"./tslib.es6-6ccf754a.js";import{r as _}from"./index-76fb7be0.js";import{A}from"./Accordion-5bbdfabe.js";import{I as w}from"./Icon-c8c77736.js";import{H as x}from"./HtmlContent-a2e7c252.js";import{T as E}from"./Title-e0bf7fa2.js";import{u as k}from"./useDeviceContext-0f8ec194.js";import{u as z}from"./useTheme-c7eb6588.js";import{V as g}from"./index-b1a24850.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-d09f896e.js";import"./PressableBase-b52f5e17.js";import"./usePiwikTrackCustomEventFromProps-3c862eb3.js";import"./environment-0af1f01c.js";import"./index-759cb76a.js";import"./NativeEventEmitter-48cac137.js";import"./index-cbe5b8dd.js";import"./index-fb7b51b4.js";import"./TextAncestorContext-3b992cff.js";import"./development-de2bc6fd.js";import"./redux-toolkit.esm-cb9067f1.js";import"./useSentry-34852e81.js";import"./index-07bd7250.js";import"./callBound-c4e9bae7.js";import"./index-d0caa68a.js";import"./extends-34e645d9.js";import"./Box-eac773ca.js";import"./layoutStyles-605143e0.js";import"./useThemable-e2fb66d4.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./Column-babcd871.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./Row-1a77dc83.js";import"./Size-5da4ce15.js";import"./index-b21a90e4.js";import"./index-9d475cdf.js";import"./Animated-e39c04c2.js";import"./index-b2f7ffc1.js";import"./index-169dd17a.js";import"./types-65ac26c5.js";import"./index-8d9a04d0.js";import"./index-c1b0849e.js";import"./client-da5da0de.js";import"./index-17010b30.js";import"./index-2f52c5b3.js";import"./index-7f09f76b.js";import"./index-aeedb8f4.js";import"./index-2da3d2c9.js";import"./index-20a23dd5.js";import"./index-47b04c86.js";import"./Phrase-662e9db7.js";import"./ListItemMarker-9102a951.js";import"./config-55b2a55c.js";import"./useIsScreenReaderEnabled-df0cc057.js";import"./useOpenMailUrl-b223a2d1.js";import"./useOpenPhoneUrl-13a398a1.js";function R(r){return r.toLowerCase()}var S=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],V=/[^A-Z0-9]+/gi;function $(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?S:e,n=t.stripRegexp,u=n===void 0?V:n,p=t.transform,m=p===void 0?R:p,d=t.delimiter,s=d===void 0?" ":d,l=D(D(r,i,"$1\0$2"),u,"\0"),c=0,a=l.length;l.charAt(c)==="\0";)c++;for(;l.charAt(a-1)==="\0";)a--;return l.slice(c,a).split("\0").map(m).join(s)}function D(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,n){return i.replace(n,e)},r)}function q(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function j(r,t){return t===void 0&&(t={}),$(r,C({delimiter:"",transform:q},t))}const H=(r,t,e,i,n,u)=>{const{color:p,size:m,z:d}=r,s={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*t},line:{width:4*t}};return v.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:s.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:i?p.background.inactive:p.background.emphasis,borderRadius:s.indicator.size/2},line:{position:"absolute",top:m.spacing.md+s.indicator.size,left:(s.indicator.size-s.line.width)/2,zIndex:d.timelineLine,width:s.line.width,height:u&&!n?0:"100%",backgroundColor:i||e?p.background.inactive:p.background.emphasis}})},h=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var l,c;const n=!e.collapsed,[u,p]=_.useState(n),m=z(),{fontScale:d}=k(),s=H(m,d,r,e.progress==="Aankomend",u,t);return o.jsxs(g,{children:[o.jsxs(g,{style:s.header,children:[o.jsx(g,{style:s.indicator,children:e.progress==="Afgelopen"&&o.jsx(w,{color:"inverse",name:"checkmark",size:"sm",testID:`${i}Icon`})}),o.jsxs(A,{grow:1,initiallyExpanded:!!n,isExpandable:!!e.body||!!((l=e.items)!=null&&l.length),onChangeExpanded:a=>p(a),testID:i,title:e.title,children:[!!e.body&&o.jsx(x,{content:e.body,testID:`${i}BodyHtmlContent`}),(c=e.items)==null?void 0:c.map(({title:a,body:y})=>o.jsxs(_.Fragment,{children:[!!a&&o.jsx(E,{level:"h5",text:a}),!!y&&o.jsx(x,{content:y,testID:`${i}ItemBody${j(a??y??"")}HtmlContent`})]},a))]},e.title)]}),o.jsx(g,{style:s.line})]})};try{h.displayName="TimelineItem",h.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const b=({items:r,testID:t})=>o.jsx(o.Fragment,{children:r.map((e,i)=>{var n;return o.jsx(h,{isBeforeUpcoming:((n=r[i+1])==null?void 0:n.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:`${t}${j(e.title)}TimelineItem`},e.title+i.toString())})});try{b.displayName="Timeline",b.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Ze={component:b},f={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,I,L;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(I=f.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Ge=["Default"];export{f as Default,Ge as __namedExportsOrder,Ze as default};

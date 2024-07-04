import{j as o}from"./jsx-runtime-ffb262ed.js";import{_ as v}from"./tslib.es6-6ccf754a.js";import{r as _}from"./index-76fb7be0.js";import{A as C}from"./Accordion-0f8a64ad.js";import{S as A}from"./index-f819f4d6.js";import{I as w}from"./Icon-bedd1ddf.js";import{H as x}from"./HtmlContent-35b04257.js";import{T as E}from"./Title-1013d625.js";import{u as k}from"./useDeviceContext-91140f6c.js";import{u as z}from"./useTheme-4b829fd8.js";import{V as g}from"./index-2bdd647f.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-eed2dc4c.js";import"./PressableBase-e6d4423c.js";import"./usePiwikTrackCustomEventFromProps-dff920a9.js";import"./version-bd53e4ec.js";import"./index-a464b0de.js";import"./NativeEventEmitter-723dff5d.js";import"./index-ac976766.js";import"./TextAncestorContext-dcad3dbc.js";import"./development-f8096310.js";import"./index-e8e5dbb3.js";import"./useTrackException-a42ac010.js";import"./index-3ba17d29.js";import"./callBound-0c193d85.js";import"./___vite-browser-external_commonjs-proxy-698e55bb.js";import"./index-d61b3633.js";import"./extends-4c19d496.js";import"./Box-b342971a.js";import"./layoutStyles-718959f0.js";import"./useThemable-c491d827.js";import"./index-d3ea75b5.js";import"./base-color-07bc5405.js";import"./Column-76783d0c.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./Row-adf1a30f.js";import"./Size-069bc012.js";import"./index-953b234c.js";import"./index-9d475cdf.js";import"./Animated-7a7ece98.js";import"./index-26b34527.js";import"./index-d1c3279d.js";import"./types-65ac26c5.js";import"./index-0589e1fc.js";import"./index-c1b0849e.js";import"./client-da5da0de.js";import"./index-dae0924a.js";import"./index-be04467f.js";import"./index-19b897e9.js";import"./index-d8f0e66f.js";import"./index-89fd73e2.js";import"./index-f90f8dc5.js";import"./index-fbb44dd0.js";import"./Phrase-dbd6008c.js";import"./ListItemMarker-ea9d599d.js";import"./config-55b2a55c.js";import"./useIsScreenReaderEnabled-2d8ec93f.js";import"./useOpenMailUrl-8c80f512.js";import"./useOpenPhoneUrl-b5a3e7e0.js";function R(r){return r.toLowerCase()}var S=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],V=/[^A-Z0-9]+/gi;function $(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?S:e,n=t.stripRegexp,u=n===void 0?V:n,p=t.transform,m=p===void 0?R:p,d=t.delimiter,s=d===void 0?" ":d,l=D(D(r,i,"$1\0$2"),u,"\0"),c=0,a=l.length;l.charAt(c)==="\0";)c++;for(;l.charAt(a-1)==="\0";)a--;return l.slice(c,a).split("\0").map(m).join(s)}function D(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,n){return i.replace(n,e)},r)}function q(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function j(r,t){return t===void 0&&(t={}),$(r,v({delimiter:"",transform:q},t))}const H=(r,t,e,i,n,u)=>{const{color:p,size:m,z:d}=r,s={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*t},line:{width:4*t}};return A.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:s.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:i?p.background.inactive:p.background.emphasis,borderRadius:s.indicator.size/2},line:{position:"absolute",top:m.spacing.md+s.indicator.size,left:(s.indicator.size-s.line.width)/2,zIndex:d.timelineLine,width:s.line.width,height:u&&!n?0:"100%",backgroundColor:i||e?p.background.inactive:p.background.emphasis}})},h=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var l,c;const n=!e.collapsed,[u,p]=_.useState(n),m=z(),{fontScale:d}=k(),s=H(m,d,r,e.progress==="Aankomend",u,t);return o.jsxs(g,{children:[o.jsxs(g,{style:s.header,children:[o.jsx(g,{style:s.indicator,children:e.progress==="Afgelopen"&&o.jsx(w,{color:"inverse",name:"checkmark",size:"sm",testID:`${i}Icon`})}),o.jsxs(C,{grow:1,initiallyExpanded:!!n,isExpandable:!!e.body||!!((l=e.items)!=null&&l.length),onChangeExpanded:a=>p(a),testID:i,title:e.title,children:[!!e.body&&o.jsx(x,{content:e.body,testID:`${i}BodyHtmlContent`}),(c=e.items)==null?void 0:c.map(({title:a,body:y})=>o.jsxs(_.Fragment,{children:[!!a&&o.jsx(E,{level:"h5",text:a}),!!y&&o.jsx(x,{content:y,testID:`${i}ItemBody${j(a??y??"")}HtmlContent`})]},a))]},e.title)]}),o.jsx(g,{style:s.line})]})};try{h.displayName="TimelineItem",h.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const b=({items:r,testID:t})=>o.jsx(o.Fragment,{children:r.map((e,i)=>{var n;return o.jsx(h,{isBeforeUpcoming:((n=r[i+1])==null?void 0:n.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:`${t}${j(e.title)}TimelineItem`},e.title+i.toString())})});try{b.displayName="Timeline",b.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Ge={component:b},f={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var T,I,L;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(I=f.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Xe=["Default"];export{f as Default,Xe as __namedExportsOrder,Ge as default};

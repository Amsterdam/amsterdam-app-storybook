import{j as n}from"./jsx-runtime-Bxcv0yjW.js";import{r as x}from"./index-mfbfsM12.js";import{A as C}from"./Accordion-CQ6cpVuh.js";import{s as E}from"./index-CEE--Juu.js";import{I as A}from"./Icon-BLkBY1mk.js";import{H as D}from"./HtmlContent-DCndPUjJ.js";import{T as w}from"./Title-Dmv_LeXs.js";import{u as z}from"./useDeviceContext-DGl4H2w7.js";import{u as R}from"./useTheme-A9pxRQEm.js";import{V as f}from"./index-BDsvWohO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Pressable-B5xzeAQT.js";import"./PressableBase-ByseFVxT.js";import"./usePiwikTrackCustomEventFromProps-Cw32UHFJ.js";import"./index-8JwjhRSi.js";import"./useTrackException-BhQuYC5A.js";import"./index-Bcpfmd17.js";import"./NativeEventEmitter-Cj1pQcwn.js";import"./index-DOpK3Ow6.js";import"./TextAncestorContext-Cvz4PlE2.js";import"./development-DYCnWZjk.js";import"./index-CqbRP4Un.js";import"./extends-CF3RwP-h.js";import"./Box-DAuP5IEw.js";import"./layoutStyles-DflBxpuh.js";import"./useThemable-DK_xoxH7.js";import"./index-BMk6Tmu2.js";import"./base-color-B2rPH-Aj.js";import"./Column-DgVuVvkO.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Gutter-DjQt1hgl.js";import"./Row-BxvtrN6v.js";import"./Size-D6myJmG7.js";import"./index-DYSHDArR.js";import"./index-Dk74W0Oi.js";import"./Animated-C23eizOh.js";import"./index-DcZXOGQR.js";import"./index-BypDj3rK.js";import"./types-BJ_48vsK.js";import"./useOpenUrl-B5cl2zC3.js";import"./index-iQAZAIR7.js";import"./client-DDXjyz62.js";import"./index-kJeFfQx-.js";import"./index-XPwQYiUg.js";import"./index-S14X4tbk.js";import"./index-CsseZgnR.js";import"./index-Cnrjv3xk.js";import"./index-mryl3fMk.js";import"./index-C3bJM-gU.js";import"./Phrase-BKZ-oyJ_.js";import"./useOpenMailUrl-Y9Ytb6Mz.js";import"./useOpenPhoneUrl-DoNptJ98.js";import"./ListItemMarker-vPguCYud.js";import"./config-BZnShabN.js";import"./useIsScreenReaderEnabled-BGYkQQWr.js";var h=function(){return h=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++){e=arguments[i];for(var p in e)Object.prototype.hasOwnProperty.call(e,p)&&(t[p]=e[p])}return t},h.apply(this,arguments)};function k(r){return r.toLowerCase()}var S=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],V=/[^A-Z0-9]+/gi;function $(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?S:e,o=t.stripRegexp,p=o===void 0?V:o,m=t.transform,l=m===void 0?k:m,c=t.delimiter,s=c===void 0?" ":c,d=T(T(r,i,"$1\0$2"),p,"\0"),u=0,a=d.length;d.charAt(u)==="\0";)u++;for(;d.charAt(a-1)==="\0";)a--;return d.slice(u,a).split("\0").map(l).join(s)}function T(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,o){return i.replace(o,e)},r)}function P(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function L(r,t){return t===void 0&&(t={}),$(r,h({delimiter:"",transform:P},t))}const q=(r,t,e,i,o,p)=>{const{color:m,size:l,z:c}=r,s={body:{insetLeft:l.spacing.md},indicator:{size:l.spacing.lg*t},line:{width:4*t}};return E.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:s.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:l.spacing.md,backgroundColor:i?m.timeline.future:m.timeline.past,borderRadius:s.indicator.size/2},line:{position:"absolute",top:l.spacing.md+s.indicator.size,left:(s.indicator.size-s.line.width)/2,zIndex:c.timelineLine,width:s.line.width,height:p&&!o?0:"100%",backgroundColor:i||e?m.timeline.future:m.timeline.past}})},_=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var d,u;const o=!e.collapsed,[p,m]=x.useState(o),l=R(),{fontScale:c}=z(),s=q(l,c,r,e.progress==="Aankomend",p,t);return n.jsxs(f,{children:[n.jsxs(f,{style:s.header,children:[n.jsx(f,{style:s.indicator,children:e.progress==="Afgelopen"&&n.jsx(A,{color:"inverse",name:"check-mark",size:"sm",testID:`${i}Icon`})}),n.jsxs(C,{grow:1,initiallyExpanded:!!o,isExpandable:!!e.body||!!((d=e.items)!=null&&d.length),onChangeExpanded:a=>m(a),testID:i,title:e.title,children:[!!e.body&&n.jsx(D,{content:e.body,testID:`${i}BodyHtmlContent`}),(u=e.items)==null?void 0:u.map(({title:a,body:y})=>n.jsxs(x.Fragment,{children:[!!a&&n.jsx(w,{level:"h5",text:a}),!!y&&n.jsx(D,{content:y,testID:`${i}ItemBody${L(a??y??"")}HtmlContent`})]},a))]},e.title)]}),n.jsx(f,{style:s.line})]})};try{_.displayName="TimelineItem",_.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const b=({items:r,testID:t})=>n.jsx(n.Fragment,{children:r.map((e,i)=>{var o;return n.jsx(_,{isBeforeUpcoming:((o=r[i+1])==null?void 0:o.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:`${t}${L(e.title)}TimelineItem`},e.title+i.toString())})});try{b.displayName="Timeline",b.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!0,type:{name:"string"}}}}}catch{}const Ue={component:b},g={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var I,j,v;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(j=g.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const Fe=["Default"];export{g as Default,Fe as __namedExportsOrder,Ue as default};

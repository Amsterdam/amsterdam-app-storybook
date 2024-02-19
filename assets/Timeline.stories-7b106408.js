import{S as E,a as g,j as l,F as w}from"./index-1401012c.js";import{r as v}from"./index-76fb7be0.js";import{A as C}from"./Accordion-e15e74e4.js";import{I as k}from"./Icon-04259700.js";import{H as T}from"./HtmlContent-67267204.js";import{T as S}from"./Title-fc2e6129.js";import{u as j}from"./useDeviceContext-20251673.js";import{u as z}from"./useTheme-8e94b012.js";import{V as f}from"./index-e1b95cde.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-9438ee94.js";import"./PressableBase-3bd6acf6.js";import"./usePiwikTrackCustomEventFromProps-de2d463d.js";import"./slugs-752d94ee.js";import"./index-1ec8836c.js";import"./NativeEventEmitter-7be6cb46.js";import"./invariant-f1a82cf7.js";import"./index-14cede91.js";import"./TextAncestorContext-63ed7f56.js";import"./development-fba0c344.js";import"./redux-toolkit.esm-d86c6d3e.js";import"./useSentry-4cda5aa7.js";import"./logging-fefb8dff.js";import"./callBound-55a1829f.js";import"./index-fbfe0fd2.js";import"./extends-98964cd2.js";import"./Box-b01705ae.js";import"./layoutStyles-ee44dbe0.js";import"./useThemable-a5fed888.js";import"./index-d3ea75b5.js";import"./base-color-0322ee5e.js";import"./Column-ff4b7c3a.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-b2f4e37d.js";import"./Size-71a5dbac.js";import"./index-5844c8dd.js";import"./index-9d475cdf.js";import"./Animated-905ced6c.js";import"./index-240c6d7a.js";import"./index-759f743a.js";import"./index-e39fa516.js";import"./types-e7c584cc.js";import"./index-c2ce8a38.js";import"./index-c1b0849e.js";import"./index-8ad79f0b.js";import"./index-37b6bf7b.js";import"./index-5d7f9d89.js";import"./index-50211726.js";import"./index-226d16f2.js";import"./index-1d551be1.js";import"./index-5aae214f.js";import"./index-a97b2993.js";import"./Phrase-5df21d66.js";import"./ListItemMarker-716e97a6.js";import"./config-55b2a55c.js";import"./useIsScreenReaderEnabled-2f671e11.js";import"./useOpenMailUrl-743291d6.js";import"./useOpenPhoneUrl-604897e6.js";var h=function(){return h=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++){e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},h.apply(this,arguments)};function R(r){return r.toLowerCase()}var V=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],P=/[^A-Z0-9]+/gi;function q(r,t){t===void 0&&(t={});for(var e=t.splitRegexp,i=e===void 0?V:e,o=t.stripRegexp,s=o===void 0?P:o,a=t.transform,m=a===void 0?R:a,n=t.delimiter,u=n===void 0?" ":n,d=I(I(r,i,"$1\0$2"),s,"\0"),c=0,p=d.length;d.charAt(c)==="\0";)c++;for(;d.charAt(p-1)==="\0";)p--;return d.slice(c,p).split("\0").map(m).join(u)}function I(r,t,e){return t instanceof RegExp?r.replace(t,e):t.reduce(function(i,o){return i.replace(o,e)},r)}function F(r,t){var e=r.charAt(0),i=r.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}function U(r,t){return t===void 0&&(t={}),q(r,h({delimiter:"",transform:F},t))}const H=(r,t,e,i,o,s)=>{const{color:a,size:m}=r,n={body:{insetLeft:m.spacing.md},indicator:{size:m.spacing.lg*t},line:{width:4*t}};return E.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:n.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:m.spacing.md,backgroundColor:i?a.background.inactive:a.background.emphasis,borderRadius:n.indicator.size/2},line:{position:"absolute",top:m.spacing.md+n.indicator.size,left:(n.indicator.size-n.line.width)/2,zIndex:-1,width:n.line.width,height:s&&!o?0:"100%",backgroundColor:i||e?a.background.inactive:a.background.emphasis}})},b=({isBeforeUpcoming:r,isLast:t,item:e,testID:i})=>{var d,c;const o=!e.collapsed,[s,a]=v.useState(o),m=z(),{fontScale:n}=j(),u=H(m,n,r,e.progress==="Aankomend",s,t);return g(f,{children:[g(f,{style:u.header,children:[l(f,{style:u.indicator,children:e.progress==="Afgelopen"&&l(k,{color:"inverse",name:"checkmark",size:"sm"})}),g(C,{grow:!0,initiallyExpanded:!!o,isExpandable:!!e.body||!!((d=e.items)!=null&&d.length),onChangeExpanded:p=>a(p),testID:i,title:e.title,children:[!!e.body&&l(T,{content:e.body}),(c=e.items)==null?void 0:c.map(({title:p,body:D})=>g(v.Fragment,{children:[!!p&&l(S,{level:"h5",text:p}),!!D&&l(T,{content:D})]},p))]},e.title)]}),l(f,{style:u.line})]})};try{b.displayName="TimelineItem",b.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"ProjectTimelineItem"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const _=({items:r,testID:t})=>l(w,{children:r.map((e,i)=>{var o;return l(b,{isBeforeUpcoming:((o=r[i+1])==null?void 0:o.progress)==="Aankomend",isLast:i===r.length-1,item:e,testID:t?`${t}${U(e.title)}TimelineItem`:void 0},e.title+i.toString())})});try{_.displayName="Timeline",_.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ProjectTimelineItem[]"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}}}catch{}const Be={component:_},y={args:{items:[{collapsed:!1,body:"<p>Dolor sit amet 1</p>",date:"",items:[{title:"Lorem ipsum 1.1",body:"<p>Dolor sit amet 1.1</p>",date:""},{title:"Lorem ipsum 1.2",body:"<p>Dolor sit amet 1.2</p>",date:""}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,body:"<p>Dolor sit amet 2</p>",date:"",items:[{title:"Lorem ipsum 2.1",body:"<p>Dolor sit amet 2.1</p>",date:""}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,body:"<p>Dolor sit amet 3</p>",date:"",items:[{title:"Lorem ipsum 3.1",body:"<p>Dolor sit amet 3.1</p>",date:""},{title:"Lorem ipsum 3.2",body:"<p>Dolor sit amet 3.2</p>",date:""}],progress:"Aankomend",title:"Titel 3"}]}};var L,x,A;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(x=y.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const Ge=["Default"];export{y as Default,Ge as __namedExportsOrder,Be as default};

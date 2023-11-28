import{S as k,a as h,j as r,F as I}from"./useThemable-badc2311.js";import{r as x}from"./index-4ab02870.js";import{A as L}from"./Accordion-d5443806.js";import{I as w}from"./Icon-731c96f4.js";import{H as A}from"./HtmlContent-4cffaa16.js";import{T as C}from"./Title-84bd1630.js";import{u as z}from"./useDeviceContext-c9e474d6.js";import{u as v}from"./useTheme-17a8a918.js";import{V as c}from"./index-8c71fb4d.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-7b49c5f6.js";import"./Box-c0ecbf9c.js";import"./layoutStyles-7b13d22c.js";import"./index-4fdbf81e.js";import"./extends-98964cd2.js";import"./index-7e8d53f4.js";import"./Column-33a903d5.js";import"./mapMainAxisAlignment-e13c2957.js";import"./Row-ff96c9f3.js";import"./Size-e0643b15.js";import"./invariant-ee4e8dd1.js";import"./index-7c90a212.js";import"./index-9d475cdf.js";import"./Animated-6d54a273.js";import"./index-5683e99e.js";import"./index-3ef41323.js";import"./index-e7d43bd0.js";import"./index-9d1af517.js";import"./types-e7c584cc.js";import"./index-eb9a3f66.js";import"./index-19f2d8d7.js";import"./index-4ffb28e8.js";import"./index-c31bb1df.js";import"./index-ec353eb5.js";import"./index-3db2ab50.js";import"./index-e39451b0.js";import"./index-eaf36624.js";import"./index-c19a59a9.js";import"./Phrase-e650e0aa.js";import"./ListItemMarker-6fecd037.js";import"./config-55b2a55c.js";import"./useOpenMailUrl-eb148276.js";import"./useSentry-152b1f7d.js";import"./sentry-3d932f71.js";import"./development-5fd8a389.js";import"./useOpenPhoneUrl-3c1277af.js";import"./useIsScreenReaderEnabled-a5d05830.js";const S=(t,n,e,o,p,u)=>{const{color:m,size:a}=t,i={body:{insetLeft:a.spacing.md},indicator:{size:a.spacing.lg*n},line:{width:4*n}};return k.create({header:{flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start"},indicator:{position:"relative",width:i.indicator.size,aspectRatio:1,justifyContent:"center",alignItems:"center",top:a.spacing.md,backgroundColor:o?m.background.inactive:m.background.emphasis,borderRadius:i.indicator.size/2},line:{position:"absolute",top:a.spacing.md+i.indicator.size,left:(i.indicator.size-i.line.width)/2,zIndex:-1,width:i.line.width,height:u&&!p?0:"100%",backgroundColor:o||e?m.background.inactive:m.background.emphasis}})},f=({isBeforeUpcoming:t,isLast:n,item:e})=>{const o=!e.collapsed,p=e.content.some(s=>{var l,b;return((l=s.body)==null?void 0:l.html)||((b=s.body)==null?void 0:b.text)}),[u,m]=x.useState(o&&p),a=v(),{fontScale:i}=z(),g=S(a,i,t,e.progress==="Aankomend",u,n);return h(c,{children:[h(c,{style:g.header,children:[r(c,{style:g.indicator,children:e.progress==="Afgelopen"&&r(w,{color:"inverse",name:"checkmark",size:"sm"})}),r(L,{grow:!0,initiallyExpanded:!!o,onChangeExpanded:s=>m(s),title:e.title,children:p?e.content.map(({title:s,body:{html:l}})=>h(x.Fragment,{children:[r(C,{level:"h5",text:s}),r(A,{content:l})]},s)):void 0},e.title)]}),r(c,{style:g.line})]})};try{f.displayName="TimelineItem",f.__docgenInfo={description:"",displayName:"TimelineItem",props:{isBeforeUpcoming:{defaultValue:null,description:"",name:"isBeforeUpcoming",required:!0,type:{name:"boolean"}},isLast:{defaultValue:null,description:"",name:"isLast",required:!0,type:{name:"boolean"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"TimelineItem"}}}}}catch{}const y=({items:t})=>r(I,{children:t.map((n,e)=>{var o;return r(f,{isBeforeUpcoming:((o=t[e+1])==null?void 0:o.progress)==="Aankomend",isLast:e===t.length-1,item:n},n.title+e.toString())})});try{y.displayName="Timeline",y.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}}}}}catch{}const Le={component:y},d={args:{items:[{collapsed:!1,content:[{title:"Lorem ipsum 1",body:{html:"<p>Dolor sit amet 1</p>",text:"Dolor sit amet 1"}}],progress:"Afgelopen",title:"Titel 1"},{collapsed:!0,content:[{title:"Lorem ipsum 2",body:{html:"<p>Dolor sit amet 2</p>",text:"Dolor sit amet 2"}}],progress:"Huidig",title:"Titel 2"},{collapsed:!0,content:[{title:"Lorem ipsum 3",body:{html:"<p>Dolor sit amet 3</p>",text:"Dolor sit amet 3"}}],progress:"Aankomend",title:"Titel 3"}]}};var _,T,D;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      collapsed: false,
      content: [{
        title: 'Lorem ipsum 1',
        body: {
          html: '<p>Dolor sit amet 1</p>',
          text: 'Dolor sit amet 1'
        }
      }],
      progress: 'Afgelopen',
      title: 'Titel 1'
    }, {
      collapsed: true,
      content: [{
        title: 'Lorem ipsum 2',
        body: {
          html: '<p>Dolor sit amet 2</p>',
          text: 'Dolor sit amet 2'
        }
      }],
      progress: 'Huidig',
      title: 'Titel 2'
    }, {
      collapsed: true,
      content: [{
        title: 'Lorem ipsum 3',
        body: {
          html: '<p>Dolor sit amet 3</p>',
          text: 'Dolor sit amet 3'
        }
      }],
      progress: 'Aankomend',
      title: 'Titel 3'
    }]
  }
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const we=["Default"];export{d as Default,we as __namedExportsOrder,Le as default};
//# sourceMappingURL=Timeline.stories-0e8fd2f7.js.map

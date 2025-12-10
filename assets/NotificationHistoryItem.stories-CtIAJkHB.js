import{r as i,bd as _,be as j,bf as T,bg as R,bh as P,bi as E,bj as M,bk as A,bl as B,bm as L,bn as $,_ as v,a0 as O,Q as U,k as V,S as z,j as o,c as q,e as W,R as G,V as N,a as Q,C as Y,T as J,b as K,f as X,g as Z,bo as ee}from"./iframe-ByDjrXCK.js";import{I as te}from"./Image-ZX0UtbI8.js";import{a as ae}from"./accessibleText-gmNPjmn1.js";import"./preload-helper-Dp1pzeXC.js";const ne=i.createContext(void 0),se=i.createContext(void 0);function oe(){return i.useContext(se)}function re(){const t=i.useContext(ne),n=i.useContext(_),{options:e}=i.useContext(j),a=oe(),s=(e==null?void 0:e.getPathFromState)??T,r=(e==null?void 0:e.getStateFromPath)??R,l=(e==null?void 0:e.getActionFromState)??P,m=i.useCallback((c,u)=>{var d;if((e==null?void 0:e.enabled)===!1)return;const g=t&&(n!=null&&n.key)&&a?n.key===((d=E(a))==null?void 0:d.key)&&t.getState().routes.some(y=>y.key===n.key):!1,f={routes:[{name:c,params:u}]},b=y=>{if(y){const C=y.routes[0];return g&&!C.state?f:{routes:[{...C,state:b(C.state)}]}}return f},x=b(a);return s(x,e==null?void 0:e.config)},[e==null?void 0:e.enabled,e==null?void 0:e.config,n==null?void 0:n.key,t,a,s]),p=i.useCallback(c=>{if(!c.startsWith("/"))throw new Error(`The href must start with '/' (${c}).`);const u=r(c,e==null?void 0:e.config);if(u)return l(u,e==null?void 0:e.config)??M(u);throw new Error("Failed to parse the href to a navigation state.")},[e==null?void 0:e.config,r,l]);return{buildHref:m,buildAction:p}}function ie(){const t=i.useContext(A),{buildAction:n}=re();return i.useCallback(a=>{if(t===void 0)throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");const s=n(a);t.dispatch(s)},[n,t])}const le=(t,n=!0)=>{var e,a;return(a=(e=B.find(s=>{var r;return s.slug===((r=t==null?void 0:t.data)==null?void 0:r.module_slug)}))==null?void 0:e.onNotificationEvent)==null?void 0:a.call(e,L.PRESS,{notification:t},n,$.dispatch)},ce=v().localeData().weekdays(),ue=t=>{if(t==null||t==="")return"";const n=v(t),e=v(),a=n.startOf("day").diff(e.startOf("day"),"days"),s=a===0,r=a===-1,l=a>-7&&a<-1;return s?n.format("HH.mm"):r?"gisteren":l?ce[n.get("day")]:n.format("D MMMM")},S=({item:{body:t,context:n,created_at:e,id:a,image:s,is_read:r,module_slug:l,title:m},enabledModules:p=[]})=>{const{navigate:c}=O(),{fontScale:u}=U(),g=p.find(({slug:d})=>d===l),f=V(de(u)),b=ie();if(!g)return null;const{icon:x}=g,k=ue(e);return o.jsx(q,{accessibilityLabel:ae(r?void 0:"Ongelezen bericht: ",m,t,`ontvangen: ${k}`),onPress:()=>{const d=le({id:a,title:m,body:t,data:n},!1);d?b(d):l&&c(l)},testID:`NotificationHistoryItem${a}Button`,children:o.jsx(W,{insetHorizontal:"md",insetVertical:"smd",children:o.jsxs(G,{gutter:"md",valign:"start",children:[o.jsx(N,{style:f.iconContainer,children:s&&s.sources[0]?o.jsx(te,{aspectRatio:"square",source:s.sources[0],testID:`NotificationHistoryItem${a}Image`}):o.jsx(Q,{color:"inverse",name:x,size:"lg",testID:`NotificationHistoryItem${a}Icon`})}),o.jsxs(Y,{grow:1,shrink:1,children:[o.jsx(J,{level:"h5",testID:`NotificationHistoryItem${a}Title`,text:m}),o.jsx(K,{testID:`NotificationHistoryItem${a}DescriptionText`,children:t}),o.jsx(X,{color:"secondary",testID:`NotificationHistoryItem${a}CreationDatePhrase`,variant:"body",children:k})]}),!r&&o.jsx(N,{style:f.badgeContainer,children:o.jsx(Z,{testID:`NotificationHistoryItem${a}IsUnreadBadge`,variant:"extraSmall"})})]})})})},D=6,de=t=>({color:n,size:e})=>z.create({iconContainer:{backgroundColor:n.notificationHistory.itemIcon.background,justifyContent:"center",alignItems:"center",width:e.iconContainer.lg*t,height:e.iconContainer.lg*t,marginTop:D*t},badgeContainer:{marginTop:D*t}});try{S.displayName="NotificationHistoryItem",S.__docgenInfo={description:"",displayName:"NotificationHistoryItem",props:{enabledModules:{defaultValue:{value:"[]"},description:"",name:"enabledModules",required:!1,type:{name:"Module[]"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Notification"}}}}}catch{}const I=ee["construction-work"],ye={component:S},h={args:{enabledModules:[{moduleSlug:I,moduleAppReason:null,moduleFallbackUrl:null,releaseFallbackUrl:null,moduleButtonLabel:null,releaseButtonLabel:null,releaseAppReason:null,title:"Werkzaamheden",icon:"construction-work",slug:I,status:1,description:"",version:"1.0.0"}],item:{title:"De nieuwe brug is geplaatst",module_slug:I,created_at:"2022-01-15 10:30:00",pushed_at:"2022-01-15 10:30:00",is_read:!1,id:"1",context:{},body:"De nieuwe brug is geplaatst"}}};var H,w,F;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    enabledModules: [{
      moduleSlug: slug,
      moduleAppReason: null,
      moduleFallbackUrl: null,
      releaseFallbackUrl: null,
      moduleButtonLabel: null,
      releaseButtonLabel: null,
      releaseAppReason: null,
      title: 'Werkzaamheden',
      icon: 'construction-work',
      slug,
      status: 1,
      description: '',
      version: '1.0.0'
    }],
    item: {
      title: 'De nieuwe brug is geplaatst',
      module_slug: slug,
      created_at: '2022-01-15 10:30:00',
      pushed_at: '2022-01-15 10:30:00',
      is_read: false,
      id: '1',
      context: {},
      body: 'De nieuwe brug is geplaatst'
    }
  }
}`,...(F=(w=h.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const he=["Default"];export{h as Default,he as __namedExportsOrder,ye as default};

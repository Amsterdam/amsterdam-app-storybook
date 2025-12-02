import{r as i,bc as _,bd as j,be as T,bf as R,bg as P,bh as E,bi as M,bj as A,bk as $,bl as B,bm as L,Y as v,_ as O,ai as U,k as V,S as z,j as o,c as q,e as W,R as Y,V as N,a as G,C as J,T as K,b as Q,f as X,g as Z,bn as ee}from"./iframe-CeNsaXxh.js";import{I as te}from"./Image-DqOdqcyF.js";import{a as ae}from"./accessibleText-gmNPjmn1.js";import"./preload-helper-Dp1pzeXC.js";const ne=i.createContext(void 0),se=i.createContext(void 0);function oe(){return i.useContext(se)}function re(){const t=i.useContext(ne),n=i.useContext(_),{options:e}=i.useContext(j),a=oe(),s=(e==null?void 0:e.getPathFromState)??T,r=(e==null?void 0:e.getStateFromPath)??R,c=(e==null?void 0:e.getActionFromState)??P,m=i.useCallback((l,u)=>{var d;if((e==null?void 0:e.enabled)===!1)return;const g=t&&(n!=null&&n.key)&&a?n.key===((d=E(a))==null?void 0:d.key)&&t.getState().routes.some(b=>b.key===n.key):!1,f={routes:[{name:l,params:u}]},y=b=>{if(b){const C=b.routes[0];return g&&!C.state?f:{routes:[{...C,state:y(C.state)}]}}return f},x=y(a);return s(x,e==null?void 0:e.config)},[e==null?void 0:e.enabled,e==null?void 0:e.config,n==null?void 0:n.key,t,a,s]),p=i.useCallback(l=>{if(!l.startsWith("/"))throw new Error(`The href must start with '/' (${l}).`);const u=r(l,e==null?void 0:e.config);if(u)return c(u,e==null?void 0:e.config)??M(u);throw new Error("Failed to parse the href to a navigation state.")},[e==null?void 0:e.config,r,c]);return{buildHref:m,buildAction:p}}function ie(){const t=i.useContext(A),{buildAction:n}=re();return i.useCallback(a=>{if(t===void 0)throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");const s=n(a);t.dispatch(s)},[n,t])}const ce=(t,n=!0)=>{var e,a;return(a=(e=$.find(s=>{var r;return s.slug===((r=t==null?void 0:t.data)==null?void 0:r.module_slug)}))==null?void 0:e.onNotificationEvent)==null?void 0:a.call(e,B.PRESS,{notification:t},n,L.dispatch)},le=v().localeData().weekdays(),ue=t=>{if(t==null||t==="")return"";const n=v(t),e=v(),a=n.startOf("day").diff(e.startOf("day"),"days"),s=a===0,r=a===-1,c=a>-7&&a<-1;return s?n.format("HH.mm"):r?"gisteren":c?le[n.get("day")]:n.format("D MMMM")},S=({item:{body:t,context:n,created_at:e,id:a,image:s,is_read:r,module_slug:c,title:m},enabledModules:p=[]})=>{const{navigate:l}=O(),{fontScale:u}=U(),g=p.find(({slug:d})=>d===c),f=V(de(u)),y=ie();if(!g)return null;const{icon:x}=g,k=ue(e);return o.jsx(q,{accessibilityLabel:ae(r?void 0:"Ongelezen bericht: ",m,t,`ontvangen: ${k}`),onPress:()=>{const d=ce({id:a,title:m,body:t,data:n},!1);d?y(d):c&&l(c)},testID:`NotificationHistoryItem${a}Button`,children:o.jsx(W,{insetHorizontal:"md",insetVertical:"smd",children:o.jsxs(Y,{gutter:"md",valign:"start",children:[o.jsx(N,{style:f.iconContainer,children:s&&s.sources[0]?o.jsx(te,{aspectRatio:"square",source:s.sources[0],testID:`NotificationHistoryItem${a}Image`}):o.jsx(G,{color:"inverse",name:x,size:"lg",testID:`NotificationHistoryItem${a}Icon`})}),o.jsxs(J,{grow:1,shrink:1,children:[o.jsx(K,{level:"h5",testID:`NotificationHistoryItem${a}Title`,text:m}),o.jsx(Q,{testID:`NotificationHistoryItem${a}DescriptionText`,children:t}),o.jsx(X,{color:"secondary",testID:`NotificationHistoryItem${a}CreationDatePhrase`,variant:"body",children:k})]}),!r&&o.jsx(N,{style:f.badgeContainer,children:o.jsx(Z,{testID:`NotificationHistoryItem${a}IsUnreadBadge`,variant:"extraSmall"})})]})})})},D=6,de=t=>({color:n,size:e})=>z.create({iconContainer:{backgroundColor:n.notificationHistory.itemIcon.background,justifyContent:"center",alignItems:"center",width:e.iconContainer.lg*t,height:e.iconContainer.lg*t,marginTop:D*t},badgeContainer:{marginTop:D*t}});try{S.displayName="NotificationHistoryItem",S.__docgenInfo={description:"",displayName:"NotificationHistoryItem",props:{enabledModules:{defaultValue:{value:"[]"},description:"",name:"enabledModules",required:!1,type:{name:"Module[]"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Notification"}}}}}catch{}const I=ee["construction-work"],be={component:S},h={args:{enabledModules:[{moduleSlug:I,moduleAppReason:null,moduleFallbackUrl:null,releaseFallbackUrl:null,releaseAppReason:null,title:"Werkzaamheden",icon:"construction-work",slug:I,status:1,description:"",version:"1.0.0"}],item:{title:"De nieuwe brug is geplaatst",module_slug:I,created_at:"2022-01-15 10:30:00",pushed_at:"2022-01-15 10:30:00",is_read:!1,id:"1",context:{},body:"De nieuwe brug is geplaatst"}}};var H,w,F;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    enabledModules: [{
      moduleSlug: slug,
      moduleAppReason: null,
      moduleFallbackUrl: null,
      releaseFallbackUrl: null,
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
}`,...(F=(w=h.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const he=["Default"];export{h as Default,he as __namedExportsOrder,be as default};

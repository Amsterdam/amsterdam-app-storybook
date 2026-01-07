import{r as i,aN as T,aO as R,aP as _,aQ as j,aR as P,aS as E,aT as B,aU as M,aV as A,aW as L,aX as $,aY as v,u as O,H as U,d as V,S as z,j as o,h as W,b as q,B as Y,R as G,V as N,I as Q,C as X,T as Z,n as J,c as K,t as ee,aZ as te}from"./iframe-DOA5p54m.js";import{I as ae}from"./Image-DqF5AYqu.js";import"./preload-helper-Dp1pzeXC.js";const ne=i.createContext(void 0),se=i.createContext(void 0);function oe(){return i.useContext(se)}function re(){const t=i.useContext(ne),n=i.useContext(T),{options:e}=i.useContext(R),a=oe(),s=(e==null?void 0:e.getPathFromState)??_,r=(e==null?void 0:e.getStateFromPath)??j,l=(e==null?void 0:e.getActionFromState)??P,m=i.useCallback((c,u)=>{var d;if((e==null?void 0:e.enabled)===!1)return;const g=t&&(n!=null&&n.key)&&a?n.key===((d=E(a))==null?void 0:d.key)&&t.getState().routes.some(h=>h.key===n.key):!1,f={routes:[{name:c,params:u}]},y=h=>{if(h){const I=h.routes[0];return g&&!I.state?f:{routes:[{...I,state:y(I.state)}]}}return f},p=y(a);return s(p,e==null?void 0:e.config)},[e==null?void 0:e.enabled,e==null?void 0:e.config,n==null?void 0:n.key,t,a,s]),b=i.useCallback(c=>{if(!c.startsWith("/"))throw new Error(`The href must start with '/' (${c}).`);const u=r(c,e==null?void 0:e.config);if(u)return l(u,e==null?void 0:e.config)??B(u);throw new Error("Failed to parse the href to a navigation state.")},[e==null?void 0:e.config,r,l]);return{buildHref:m,buildAction:b}}function ie(){const t=i.useContext(M),{buildAction:n}=re();return i.useCallback(a=>{if(t===void 0)throw new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");const s=n(a);t.dispatch(s)},[n,t])}const le=(t,n=!0)=>{var e,a;return(a=(e=A.find(s=>{var r;return s.slug===((r=t==null?void 0:t.data)==null?void 0:r.module_slug)}))==null?void 0:e.onNotificationEvent)==null?void 0:a.call(e,L.PRESS,{notification:t},n,$.dispatch)},ce=v().localeData().weekdays(),ue=t=>{if(!t)return"";const n=v(t),e=v(),a=n.startOf("day").diff(e.startOf("day"),"days"),s=a===0,r=a===-1,l=a>-7&&a<-1;return s?n.format("HH.mm"):r?"gisteren":l?ce[n.get("day")]:n.format("D MMMM")},S=({item:{body:t,context:n,created_at:e,id:a,image:s,is_read:r,module_slug:l,title:m},enabledModules:b=[]})=>{const{navigate:c}=O(),{fontScale:u}=U(),g=b.find(({slug:d})=>d===l),f=V(de(u)),y=ie();if(!g)return null;const{icon:p}=g,C=ue(e);return o.jsx(W,{accessibilityLabel:q(r?void 0:"Ongelezen bericht: ",m,t,`ontvangen: ${C}`),onPress:()=>{const d=le({id:a,title:m,body:t,data:n},!1);d?y(d):l&&c(l)},testID:`NotificationHistoryItem${a}Button`,children:o.jsx(Y,{insetHorizontal:"md",insetVertical:"smd",children:o.jsxs(G,{gutter:"md",valign:"start",children:[o.jsx(N,{style:f.iconContainer,children:s&&s.sources[0]?o.jsx(ae,{aspectRatio:"square",source:s.sources[0],testID:`NotificationHistoryItem${a}Image`}):o.jsx(Q,{color:"inverse",name:p,size:"lg",testID:`NotificationHistoryItem${a}Icon`})}),o.jsxs(X,{grow:1,shrink:1,children:[o.jsx(Z,{level:"h5",testID:`NotificationHistoryItem${a}Title`,text:m}),o.jsx(J,{testID:`NotificationHistoryItem${a}DescriptionText`,children:t}),o.jsx(K,{color:"secondary",testID:`NotificationHistoryItem${a}CreationDatePhrase`,variant:"body",children:C})]}),!r&&o.jsx(N,{style:f.badgeContainer,children:o.jsx(ee,{testID:`NotificationHistoryItem${a}IsUnreadBadge`,variant:"extraSmall"})})]})})})},H=6,de=t=>({color:n,size:e})=>z.create({iconContainer:{backgroundColor:n.notificationHistory.itemIcon.background,justifyContent:"center",alignItems:"center",width:e.iconContainer.lg*t,height:e.iconContainer.lg*t,marginTop:H*t},badgeContainer:{marginTop:H*t}});try{S.displayName="NotificationHistoryItem",S.__docgenInfo={description:"",displayName:"NotificationHistoryItem",props:{enabledModules:{defaultValue:{value:"[]"},description:"",name:"enabledModules",required:!1,type:{name:"Module[]"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Notification"}}}}}catch{}const k=te["construction-work"],ye={component:S},x={args:{enabledModules:[{moduleSlug:k,moduleAppReason:null,moduleFallbackUrl:null,releaseFallbackUrl:null,moduleButtonLabel:null,releaseButtonLabel:null,releaseAppReason:null,title:"Werkzaamheden",icon:"construction-work",slug:k,status:1,description:"",version:"1.0.0"}],item:{title:"De nieuwe brug is geplaatst",module_slug:k,created_at:"2022-01-15 10:30:00",pushed_at:"2022-01-15 10:30:00",is_read:!1,id:"1",context:{},body:"De nieuwe brug is geplaatst"}}};var D,w,F;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(w=x.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const he=["Default"];export{x as Default,he as __namedExportsOrder,ye as default};

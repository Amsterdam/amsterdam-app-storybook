import{D as m}from"./useThemable-f30bc085.js";import{a as f}from"./development-c52112ae.js";var c=(e=>(e.default="default",e.internetConnection="internetConnection",e))(c||{}),r=(e=>(e.currentCoordinates="Get current coordinates failed",e.getModulesForAppQuery="Failed to get modules for app",e.isScreenReaderEnabled="Screenreader enabled check failed",e.locationPermission="Check location permission failed",e.openMailUrl="Open mail url failed",e.openPhoneUrl="Open phone url failed",e.openWebUrl="Open web url failed",e.pickingImageFailed="Picking image from device failed",e.piwikInitialization="Piwik initialization failed",e.registerDevice="Register device for push notifications failed",e.requestLocationPermission="Request location permission failed",e.resetLocationPermissionAndroid="Android: Check location permission on foreground failed",e.sentryMiddleWareError="Sentry middleware logger failed",e.takingPhotoFailed="Taking photo failed",e))(r||{});const g={[r.currentCoordinates]:["code","message"],[r.getModulesForAppQuery]:["error","retriesRemaining","serverModules"],[r.isScreenReaderEnabled]:["error"],[r.locationPermission]:["error"],[r.openMailUrl]:[],[r.openPhoneUrl]:[],[r.openWebUrl]:["url"],[r.pickingImageFailed]:["error","code","viaCamera"],[r.piwikInitialization]:["error"],[r.registerDevice]:["error"],[r.requestLocationPermission]:["error"],[r.resetLocationPermissionAndroid]:["error"],[r.sentryMiddleWareError]:["endpoint","status","url"],[r.takingPhotoFailed]:["code","message","viaCamera"]},h=(e,i)=>{var t;if(!(!i||Object.keys(i).length===0))return(t=g[e]||void 0)==null?void 0:t.reduce((n,a)=>({...n,[a]:i[a]}),{})},k=e=>e?e.split("?")[0]:"",w=e=>(i,t,n=c.default)=>{},v=e=>(i,t,n,a)=>{f("sendSentryErrorLog",a??i,t,n),e&&h(i,n)},C=()=>e=>i=>{var t,n,a,o,s;if(m(i)){let l="Rejected RTK action";(t=i.meta.arg)!=null&&t.endpointName&&(l=`${((n=i.payload)==null?void 0:n.originalStatus)??"Error"} for ${i.meta.arg.endpointName}`);const d=k(((o=(a=i.meta.baseQueryMeta)==null?void 0:a.request)==null?void 0:o.url)??"");if(!d.startsWith("http://localhost")){const p=i.meta.arg.endpointName,u=((s=i.payload)==null?void 0:s.originalStatus)??"unknown";v(!0)(r.sentryMiddleWareError,"processes/logging.ts",{...i,endpoint:p,status:u,url:d},l)}}return e(i)};export{r as S,v as a,w as g,C as s};
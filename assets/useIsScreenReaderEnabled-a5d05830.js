import{r as s}from"./index-4ab02870.js";import{u as d}from"./useSentry-152b1f7d.js";import{A as n}from"./index-4ffb28e8.js";const u=()=>{const[t,e]=s.useState(!1),{sendSentryErrorLog:r}=d();return s.useEffect(()=>{n.isScreenReaderEnabled().then(e).catch(c=>{r("isScreenReaderEnabled check failed","useIsScreenReaderEnabled.ts",{error:c})});const a=n.addEventListener("screenReaderChanged",e);return()=>a.remove()},[r]),t};export{u};
//# sourceMappingURL=useIsScreenReaderEnabled-a5d05830.js.map
import{r as s}from"./index-76fb7be0.js";import{u as c,S as d}from"./useSentry-a6b63432.js";import{A as n}from"./index-8ad79f0b.js";const u=()=>{const[t,e]=s.useState(!1),{sendSentryErrorLog:r}=c();return s.useEffect(()=>{n.isScreenReaderEnabled().then(e).catch(o=>r(d.isScreenReaderEnabled,"useIsScreenReaderEnabled.ts",{error:o}));const a=n.addEventListener("screenReaderChanged",e);return()=>a.remove()},[r]),t};export{u};
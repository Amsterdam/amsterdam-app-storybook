import{r as s}from"./index-76fb7be0.js";import{a}from"./usePiwikTrackCustomEventFromProps-81fd0904.js";import{u as n,a as i}from"./useTrackException-7e906e11.js";import{P as c}from"./index-ee31bd24.js";import{L as p,A as l}from"./index-d67af312.js";const x=()=>{const r=n(),{trackOutlink:t}=a();return s.useCallback(o=>{let e="";c.OS==="ios"?e=`telprompt:${o}`:e=`tel:${o}`,t(e),p.openURL(e).catch(()=>{l.alert("Sorry, deze functie is niet beschikbaar."),r(i.openPhoneUrl,"useOpenPhoneUrl.ts")})},[r,t])};export{x as u};

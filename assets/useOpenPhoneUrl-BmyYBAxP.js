import{r as s}from"./index-mfbfsM12.js";import{c as a}from"./usePiwikTrackCustomEventFromProps-BHoh3J4U.js";import{u as n,E as c}from"./useTrackException-BY_WJRHw.js";import{P as i}from"./index-DOpK3Ow6.js";import{L as p,A as l}from"./index-XPwQYiUg.js";const h=()=>{const r=n(),{trackOutlink:t}=a();return s.useCallback(o=>{let e="";i.OS==="ios"?e=`telprompt:${o}`:e=`tel:${o}`,t(e),p.openURL(e).catch(()=>{l.alert("Sorry, deze functie is niet beschikbaar."),r(c.openPhoneUrl,"useOpenPhoneUrl.ts")})},[r,t])};export{h as u};

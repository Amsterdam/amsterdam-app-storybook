import{r as s}from"./index-mfbfsM12.js";import{b as a}from"./usePiwikTrackCustomEventFromProps-Czinnpea.js";import{u as n,E as i}from"./useTrackException-D6bVaubk.js";import{P as c}from"./index-DSI0shHu.js";import{L as p,A as l}from"./index-Ce74jbsy.js";const h=()=>{const r=n(),{trackOutlink:t}=a();return s.useCallback(o=>{let e="";c.OS==="ios"?e=`telprompt:${o}`:e=`tel:${o}`,t(e),p.openURL(e).catch(()=>{l.alert("Sorry, deze functie is niet beschikbaar."),r(i.openPhoneUrl,"useOpenPhoneUrl.ts")})},[r,t])};export{h as u};

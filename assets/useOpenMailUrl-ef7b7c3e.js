import{r as i}from"./index-76fb7be0.js";import{a as n}from"./usePiwikTrackCustomEventFromProps-2e4e1462.js";import{u as s,a as c}from"./useTrackException-84f7968f.js";import{L as l,A as p}from"./index-be04467f.js";const U=()=>{const r=s(),{trackOutlink:t}=n();return i.useCallback((o,a)=>{let e=`mailto:${o}`;a&&(e+=`?subject=${encodeURIComponent(a)}`),t(e),l.openURL(e).catch(()=>{p.alert("Sorry, deze functie is niet beschikbaar."),r(c.openMailUrl,"useOpenMailUrl.ts")})},[r,t])};export{U as u};
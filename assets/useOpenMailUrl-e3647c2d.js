import{r as a}from"./index-76fb7be0.js";import{u as n}from"./useSentry-0179f7be.js";import{S as s}from"./logging-456718cc.js";import{L as i,A as l}from"./index-37b6bf7b.js";const f=()=>{const{sendSentryErrorLog:r}=n();return a.useCallback((t,e)=>{let o=`mailto:${t}`;e&&(o+=`?subject=${encodeURIComponent(e)}`),i.openURL(o).catch(()=>{l.alert("Sorry, deze functie is niet beschikbaar."),r(s.openMailUrl,"useOpenMailUrl.ts")})},[r])};export{f as u};

import{r as s}from"./index-76fb7be0.js";import{a as n}from"./usePiwikTrackCustomEventFromProps-be327220.js";import{u as a}from"./useSentry-f8fd7e1a.js";import{S as i}from"./logging-109d5c4f.js";import{P as l}from"./invariant-f1a82cf7.js";import{L as p,A as m}from"./index-37b6bf7b.js";const h=()=>{const{sendSentryErrorLog:e}=a(),{trackOutlink:o}=n();return s.useCallback(t=>{let r="";l.OS==="ios"?r=`telprompt:${t}`:r=`tel:${t}`,o(r),p.openURL(r).catch(()=>{m.alert("Sorry, deze functie is niet beschikbaar."),e(i.openPhoneUrl,"useOpenPhoneUrl.ts")})},[e,o])};export{h as u};
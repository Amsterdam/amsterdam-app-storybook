import{r as i}from"./index-76fb7be0.js";import{u as c}from"./useIsScreenReaderEnabled-293fae72.js";import{D as n,u}from"./duration-6591c38b.js";import{A as a}from"./index-8ad79f0b.js";const r=n.short,A=()=>{const e=c(),s=u();return i.useCallback((t,o=r)=>{e&&s(()=>a.announceForAccessibilityWithOptions(t,{queue:!0}),o)},[e,s])},E=(e,s=r)=>{const t=A();i.useEffect(()=>{e&&t(e,s)},[t,e,s])};export{E as u};
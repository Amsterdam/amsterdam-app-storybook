import{r as n}from"./index-CBqU2yxZ.js";import{u as i,d as c}from"./useTrackException-YJ53Vokp.js";import{f as u}from"./index-7MGyAHFq.js";import{A as a}from"./index-3C_OVj7v.js";import{u as m}from"./useIsScreenReaderEnabled-BzL_phMH.js";import{u as f,D as l}from"./duration-CzxKcAGT.js";const d=()=>{const e=i();return n.useCallback(s=>{if(!s)return;const o=u(s);if(!o){e(c.nodeNotFound,"useFocusOnElement");return}a.setAccessibilityFocus(o)},[e])},A=(e=l.none)=>{const s=d(),o=f(),t=m();return n.useCallback(r=>{r&&t&&o(()=>s(r),e)},[e,s,t,o])};export{A as a,d as u};
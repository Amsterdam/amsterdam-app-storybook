import{r}from"./index-e67e0a49.js";import{s as c}from"./setFocusDelay-a0daccc8.js";import{A as e}from"./index-9f1e8595.js";const l=({focusDelay:s="short",queue:t=!1}={})=>r.useCallback(o=>{const i=c(()=>e.announceForAccessibilityWithOptions(o,{queue:t}),s);return()=>clearTimeout(i)},[s,t]);export{l as u};
//# sourceMappingURL=useAccessibilityAnnounce-53e2c0d0.js.map

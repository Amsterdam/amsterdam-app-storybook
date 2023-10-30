import{r}from"./index-e67e0a49.js";import{s as c}from"./setFocusDelay-5f7e19ce.js";import{A as e}from"./index-f8ce0a05.js";const l=({focusDelay:s="short",queue:t=!1}={})=>r.useCallback(o=>{const i=c(()=>e.announceForAccessibilityWithOptions(o,{queue:t}),s);return()=>clearTimeout(i)},[s,t]);export{l as u};
//# sourceMappingURL=useAccessibilityAnnounce-f7e8172a.js.map

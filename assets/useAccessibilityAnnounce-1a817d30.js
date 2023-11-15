import{r}from"./index-e67e0a49.js";import{s as c}from"./setFocusDelay-de6200fd.js";import{A as e}from"./index-2f74784e.js";const l=({focusDelay:s="short",queue:t=!1}={})=>r.useCallback(o=>{const i=c(()=>e.announceForAccessibilityWithOptions(o,{queue:t}),s);return()=>clearTimeout(i)},[s,t]);export{l as u};
//# sourceMappingURL=useAccessibilityAnnounce-1a817d30.js.map

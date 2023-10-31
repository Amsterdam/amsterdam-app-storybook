import{r}from"./index-e67e0a49.js";import{s as c}from"./setFocusDelay-66f5f817.js";import{A as e}from"./index-eb7dfdfc.js";const l=({focusDelay:s="short",queue:t=!1}={})=>r.useCallback(o=>{const i=c(()=>e.announceForAccessibilityWithOptions(o,{queue:t}),s);return()=>clearTimeout(i)},[s,t]);export{l as u};
//# sourceMappingURL=useAccessibilityAnnounce-65a041b5.js.map

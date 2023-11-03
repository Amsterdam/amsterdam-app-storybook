import{r}from"./index-e67e0a49.js";import{s as c}from"./setFocusDelay-e2617d99.js";import{A as e}from"./index-fa2507c9.js";const l=({focusDelay:s="short",queue:t=!1}={})=>r.useCallback(o=>{const i=c(()=>e.announceForAccessibilityWithOptions(o,{queue:t}),s);return()=>clearTimeout(i)},[s,t]);export{l as u};
//# sourceMappingURL=useAccessibilityAnnounce-ac490dc7.js.map

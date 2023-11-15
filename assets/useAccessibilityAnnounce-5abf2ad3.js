import{r}from"./index-e67e0a49.js";import{s as c}from"./setFocusDelay-6ab6cbda.js";import{A as e}from"./index-8508e5f5.js";const l=({focusDelay:s="short",queue:t=!1}={})=>r.useCallback(o=>{const i=c(()=>e.announceForAccessibilityWithOptions(o,{queue:t}),s);return()=>clearTimeout(i)},[s,t]);export{l as u};
//# sourceMappingURL=useAccessibilityAnnounce-5abf2ad3.js.map

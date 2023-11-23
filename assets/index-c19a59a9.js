import{D as e}from"./index-5683e99e.js";import{r as s}from"./index-4ab02870.js";function m(){var n=s.useState(()=>e.get("window")),o=n[0],t=n[1];return s.useEffect(()=>{function i(a){var r=a.window;r!=null&&t(r)}return e.addEventListener("change",i),t(e.get("window")),()=>{e.removeEventListener("change",i)}},[]),o}export{m as u};
//# sourceMappingURL=index-c19a59a9.js.map

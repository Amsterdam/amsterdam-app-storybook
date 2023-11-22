import{D as e}from"./index-ffecbde1.js";import{r as s}from"./index-4ab02870.js";function m(){var n=s.useState(()=>e.get("window")),o=n[0],t=n[1];return s.useEffect(()=>{function i(a){var r=a.window;r!=null&&t(r)}return e.addEventListener("change",i),t(e.get("window")),()=>{e.removeEventListener("change",i)}},[]),o}export{m as u};
//# sourceMappingURL=index-5e2383f8.js.map

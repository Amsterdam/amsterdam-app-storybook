const r=(t,o)=>o?new Intl.NumberFormat("nl-NL",{style:"currency",currency:o}).format(t??0):(t==null?void 0:t.toLocaleString("nl-NL"))??"0";export{r as f};

const e=(t,r)=>r?new Intl.NumberFormat("nl-NL",{style:"currency",currency:r}).format(t??0):t?.toLocaleString("nl-NL")??"0";export{e as f};

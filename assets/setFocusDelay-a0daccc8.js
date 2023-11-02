import{I as n}from"./index-775c65ba.js";var r=(o=>(o[o.Short=100]="Short",o[o.Normal=500]="Normal",o[o.Long=1e3]="Long",o))(r||{});const e={none:0,short:r.Short,normal:r.Normal,afterInitialFocus:r.Normal+r.Short,long:r.Long},a=(o,t="normal")=>{if(t==="afterAnimations"){n.runAfterInteractions(o);return}return setTimeout(o,e[t])};export{a as s};
//# sourceMappingURL=setFocusDelay-a0daccc8.js.map

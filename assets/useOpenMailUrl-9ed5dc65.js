import{u as o,L as s,A as a}from"./useSentry-a272a859.js";const l=()=>{const{sendSentryErrorLog:n}=o();return(t,r)=>{let e=`mailto:${t}`;r&&(e+=`?subject=${encodeURIComponent(r)}`),s.openURL(e).catch(()=>{a.alert("Sorry, deze functie is niet beschikbaar."),n("useOpenMailUrl error","useOpenMailUrl.ts",{mailUrl:e})})}};export{l as u};
//# sourceMappingURL=useOpenMailUrl-9ed5dc65.js.map

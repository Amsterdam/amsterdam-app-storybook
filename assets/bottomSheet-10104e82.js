import{c as n,R as t,u as c}from"./useThemable-05c0eaf9.js";import{u as i}from"./useDispatch-1e169005.js";const m=n({name:t.bottomSheet,initialState:{isOpen:!1},reducers:{closeBottomSheet:e=>({...e,isOpen:!1}),openBottomSheet:e=>({...e,isOpen:!0}),toggleBottomSheet:e=>({...e,isOpen:!e.isOpen})}}),{closeBottomSheet:p,openBottomSheet:a,toggleBottomSheet:S}=m.actions,r=()=>{const e=i(),o=c(s=>s[t.bottomSheet].isOpen);return{close:()=>e(p()),isOpen:o,open:()=>e(a()),toggle:()=>e(S())}};export{m as b,r as u};
//# sourceMappingURL=bottomSheet-10104e82.js.map
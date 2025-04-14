import{j as o}from"./jsx-runtime-DNHyKP0h.js";import{r as p}from"./index-B-xgG2PE.js";import{a as y,T as d,u as j,F as _}from"./TextInputField-A9y3khYL.js";import{B as v}from"./Button-C5v-gynm.js";import{S as C}from"./SomethingWentWrong-DmDyMUlT.js";import{C as L}from"./Column-Bm7slH3L.js";import{G as E}from"./Gutter-CAtmPVhv.js";import{u as T,a as D,S as g}from"./api-B6lxW4JX.js";import{b as w}from"./types-BiML16Lx.js";import{b as A}from"./service-uiUp7fP8.js";import{u as B}from"./slice-Rg0VLGTI.js";import{P as R}from"./index-Ri0BYtkV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./CharactersLeftDisplay-cj1kL_EI.js";import"./Paragraph-BoOPPiUa.js";import"./AccessibleText-ySoCsV7u.js";import"./index-CXGG-aYW.js";import"./index-Cm4QxXoK.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./useThemable-6JGNq7Nf.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./index-CnyDuYXe.js";import"./base-color-BCCzFoQm.js";import"./TextInput-CG0WCaOb.js";import"./IconButton-DpFeIkcl.js";import"./Pressable-CTHYzl1I.js";import"./PressableBase-CzEoUrEB.js";import"./usePiwikTrackCustomEventFromProps-CnY5rNKH.js";import"./useTrackException-DirxRx8f.js";import"./index-CjMpzYvL.js";import"./NativeEventEmitter-BGtqh25e.js";import"./development-DQdBRrdh.js";import"./index-DSFhKksy.js";import"./extends-CF3RwP-h.js";import"./index-B6GZSLb3.js";import"./index-DoMT7H_C.js";import"./Box-B7YRVnse.js";import"./layoutStyles-Beptdp9x.js";import"./config-BZnShabN.js";import"./Badge-CUSF3BFw.js";import"./Row-B-tLh4FY.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./useDeviceContext-BspZyhLx.js";import"./index-D23RIuqi.js";import"./formatNumber-BOnMa6yj.js";import"./types-CttlCamk.js";import"./Label-BTEAzyBN.js";import"./Phrase-DwoKLPhh.js";import"./Icon-CoyDY9Dw.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Animated-DeoFghji.js";import"./index-BfuYXHyp.js";import"./index-CilX169C.js";import"./useTheme-B_EpP2lD.js";import"./index-CA_fBSeE.js";import"./useAccessibilityAnnounce-CnoZGtO1.js";import"./useIsScreenReaderEnabled-C-P7laT-.js";import"./index-996-O__M.js";import"./duration-BV61i-wJ.js";import"./AlertBase-Crl3qFBV.js";import"./SingleSelectable-UeAGsyNp.js";import"./Title-CaZXJzNU.js";import"./useAccessibilityFocus-DTyUAKWp.js";import"./index-TB2J_fWb.js";import"./accessibleText-gmNPjmn1.js";import"./useDispatch-Dza0818t.js";const W=()=>{const{setItem:r}=T();return p.useCallback((t,m)=>D(t,m).then(()=>{r(t)}),[r])},H=()=>{const r=W();return p.useCallback(t=>{r(t.scope===w.permitHolder?g.parkingPermitHolder:g.parkingVisitor,JSON.stringify(t))},[r])},K=()=>{const r=p.useRef(null),{setCurrentAccountType:t}=B(),{handleSubmit:m}=y(),[S,{error:n,isError:b,isLoading:k}]=A(),x=n&&"status"in n&&n.status===403,F=H(),I=x?"Controleer uw meldcode en pincode en probeer het opnieuw.":"Er is iets misgegaan. Probeer het opnieuw.",a=m(({pin:e,reportCode:u})=>{S({pin:e,report_code:u}).unwrap().then(({access_token:h,scope:c})=>{t(c),F({accessToken:h,pin:e,reportCode:u,scope:c})})});return o.jsxs(L,{gutter:"md",children:[o.jsx(d,{autoFocus:!0,keyboardType:"number-pad",label:"Meldcode",name:"reportCode",onSubmitEditing:()=>{var e;(e=r.current)==null||e.focus()},returnKeyType:R.OS!=="ios"?"done":void 0,rules:{required:"Vul een meldcode in"},submitBehavior:"submit",testID:"ParkingLoginFormReportCodeInputField"}),o.jsx(d,{enterKeyHint:"send",keyboardType:"number-pad",label:"Pincode",name:"pin",onSubmitEditing:a,ref:r,rules:{required:"Vul een pincode in"},testID:"ParkingLoginFormPinCodeInputField"}),!!b&&!k&&o.jsxs(o.Fragment,{children:[o.jsx(C,{testID:"ParkingLoginFormSomethingWentWrong",text:I,title:"Inloggen mislukt"}),o.jsx(E,{height:"lg"})]}),o.jsx(v,{label:"Inloggen",onPress:a,testID:"ParkingLoginFormSubmitButton"})]})},s=({children:r})=>{const t=j();return o.jsx(_,{...t,children:r})};try{s.displayName="ParkingLoginFormProvider",s.__docgenInfo={description:"",displayName:"ParkingLoginFormProvider",props:{}}}catch{}const N=r=>o.jsx(s,{children:o.jsx(r,{})}),to={component:K,decorators:[N]},i={};var l,P,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(f=(P=i.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const eo=["Default"];export{i as Default,eo as __namedExportsOrder,to as default};

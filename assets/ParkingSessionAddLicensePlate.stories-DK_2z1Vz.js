import{j as e}from"./jsx-runtime-DNHyKP0h.js";import{r as n}from"./index-B-xgG2PE.js";import"./PleaseWait-CoxOH62D.js";import{a as P,A as f}from"./AlertBase-DBgLsrjK.js";import{S as g}from"./Switch-BsuvQr4j.js";import{T as a,u as x,F as k}from"./TextInputField-29ahPPhq.js";import{C as j}from"./Column-cRrRcJai.js";import{G as h}from"./Gutter-D416DEQy.js";import{P as L}from"./Phrase-7e0X6bf5.js";import{u as I}from"./useGetLicensePlates.web-C2saJipg.js";import{u as S}from"./bottomSheet-L3pHkDW-.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Box-DgROHfeK.js";import"./layoutStyles-Beptdp9x.js";import"./index-Cm4QxXoK.js";import"./useThemable-CBcG36_i.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./index-CnyDuYXe.js";import"./base-color-BCCzFoQm.js";import"./index-DoMT7H_C.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./Center-Bb_w82DD.js";import"./Icon-Cor86xPG.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Row-BwkEe1r6.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Animated-DeoFghji.js";import"./index-Ri0BYtkV.js";import"./extends-CF3RwP-h.js";import"./index-BfuYXHyp.js";import"./NativeEventEmitter-BGtqh25e.js";import"./index-CilX169C.js";import"./index-CXGG-aYW.js";import"./types-CttlCamk.js";import"./useDeviceContext-BspZyhLx.js";import"./index-CjMpzYvL.js";import"./index-D23RIuqi.js";import"./useTheme-CHNEq3ik.js";import"./SingleSelectable-UeAGsyNp.js";import"./Paragraph-DVJOwGtm.js";import"./AccessibleText-ySoCsV7u.js";import"./Title-CcVd_XL7.js";import"./useAccessibilityFocus-DTyUAKWp.js";import"./useTrackException-DirxRx8f.js";import"./development-DQdBRrdh.js";import"./index-TB2J_fWb.js";import"./index-996-O__M.js";import"./useIsScreenReaderEnabled-C-P7laT-.js";import"./duration-BV61i-wJ.js";import"./accessibleText-gmNPjmn1.js";import"./PressableBase-DAfouXal.js";import"./usePiwikTrackCustomEventFromProps-DpXGD6gu.js";import"./index-u4Kx10zl.js";import"./FormField-CSt_13hI.js";import"./HideFromAccessibility-DcSVmLdU.js";import"./index-Cy9gAJ_F.js";import"./CharactersLeftDisplay-CKy0d--z.js";import"./TextInput-D7dPsCz9.js";import"./IconButton-Dl8Nb2ob.js";import"./Pressable-8S0ileOm.js";import"./config-BZnShabN.js";import"./Badge-dWpDQLO6.js";import"./formatNumber-BOnMa6yj.js";import"./Label-CwTTmGrR.js";import"./index-CA_fBSeE.js";import"./useAccessibilityAnnounce-CnoZGtO1.js";import"./useDispatch-DlAkoYJZ.js";const d=9,_={maxLicensePlatesWarning:{variant:P.warning,text:`Er kunnen niet meer dan ${d} kentekens worden opgeslagen.`,title:"Maximum aantal kentekens",hasIcon:!0,hasCloseIcon:!0,testID:"ParkingMaxLicensePlatesAlert"}},A=()=>{const{isOpen:r}=S(),[t,m]=n.useState(!1),{licensePlates:i}=I();return n.useEffect(()=>{r||m(!1)},[r]),e.jsxs(j,{gutter:"md",children:[e.jsx(a,{inputInstructions:"Voer alleen letters en cijfers in.",label:"Kenteken",name:"vehicle_id",rules:{required:"Vul een kenteken in",pattern:{value:/^[a-zA-Z0-9]*$/,message:"Alleen cijfers en letters zijn toegestaan"}},testID:"ParkingAddLicensePlateFormLicensePlateInputField",textTransform:u=>u.replace(/[^a-zA-Z0-9]/g,"")}),e.jsx(g,{accessibilityLabel:"Toevoegen aan Mijn kentekens",label:e.jsx(L,{children:"Toevoegen aan Mijn kentekens"}),onChange:()=>m(!t),testID:"ParkingSessionAddLicensePlateSaveSwitch",value:t}),t?((i==null?void 0:i.length)??0)>=d?e.jsxs(e.Fragment,{children:[e.jsx(h,{}),e.jsx(f,{..._.maxLicensePlatesWarning,hasCloseIcon:!1})]}):e.jsx(a,{label:"Naam",name:"visitor_name",rules:{required:"Vul een naam in"},testID:"ParkingAddLicensePlateFormNameInputField"}):null]})},s=({children:r})=>{const t=x();return e.jsx(k,{...t,children:r})};try{s.displayName="ParkingSessionLicensePlateFormProvider",s.__docgenInfo={description:"",displayName:"ParkingSessionLicensePlateFormProvider",props:{}}}catch{}const v=r=>e.jsx(s,{children:e.jsx(r,{})}),We={component:A,decorators:[v]},o={};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Ze=["Default"];export{o as Default,Ze as __namedExportsOrder,We as default};

import{j as e}from"./jsx-runtime-DNHyKP0h.js";import{r as u}from"./index-B-xgG2PE.js";import{T as g}from"./TopTaskButton-uFQaDMWO.js";import"./PleaseWait-BQrHyf48.js";import{S as d}from"./SomethingWentWrong-BUl5sgHb.js";import{C as f}from"./Column-C0kL20Zy.js";import{P}from"./Phrase-CWQmqNcf.js";import{T as S}from"./Title-pukQiwYK.js";import{u as h}from"./useGetLicensePlates.web-C2saJipg.js";import{u as k}from"./bottomSheet-L3pHkDW-.js";import{s as _}from"./index-Cm4QxXoK.js";import{V as x}from"./index-DoMT7H_C.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./HideFromAccessibility-DcSVmLdU.js";import"./Pressable-CeOiXASK.js";import"./PressableBase-DAfouXal.js";import"./usePiwikTrackCustomEventFromProps-DpXGD6gu.js";import"./index-CnyDuYXe.js";import"./useTrackException-DirxRx8f.js";import"./index-CjMpzYvL.js";import"./NativeEventEmitter-BGtqh25e.js";import"./index-Ri0BYtkV.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./development-DQdBRrdh.js";import"./index-u4Kx10zl.js";import"./extends-CF3RwP-h.js";import"./Box-BYRd2VKQ.js";import"./layoutStyles-Beptdp9x.js";import"./useThemable-CBcG36_i.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./base-color-BCCzFoQm.js";import"./Row-Cf-uwVPE.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-DSpuGgoW.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Animated-DeoFghji.js";import"./index-BfuYXHyp.js";import"./index-CilX169C.js";import"./index-CXGG-aYW.js";import"./types-CttlCamk.js";import"./useDeviceContext-BspZyhLx.js";import"./index-D23RIuqi.js";import"./useTheme-CHNEq3ik.js";import"./Paragraph-0SBdhd86.js";import"./AccessibleText-ySoCsV7u.js";import"./accessibleText-gmNPjmn1.js";import"./Center-Bb_w82DD.js";import"./AlertBase-CCX83wgm.js";import"./SingleSelectable-UeAGsyNp.js";import"./useAccessibilityFocus-DTyUAKWp.js";import"./index-TB2J_fWb.js";import"./index-996-O__M.js";import"./useIsScreenReaderEnabled-C-P7laT-.js";import"./duration-BV61i-wJ.js";import"./useAccessibilityAnnounce-CwJpOPRK.js";import"./useDispatch-DlAkoYJZ.js";const s=({setLicensePlate:i})=>{const{close:m}=k(),c=L(),{licensePlates:r}=h(),l=u.useCallback(t=>{i(t),m()},[i,m]);return r?e.jsx(x,{style:c.container,children:e.jsxs(f,{gutter:"sm",children:[e.jsx(S,{level:"h5",text:"Mijn kentekens"}),r.length===0&&e.jsx(P,{children:"U heeft nog geen favoriete kentekens opgeslagen."}),r==null?void 0:r.map(t=>e.jsx(g,{iconName:"parkingCar",onPress:()=>l(t),testID:"ParkingSessionSelectLicensePlateTopTaskButton",title:`${t.vehicle_id}${t.visitor_name?" - "+t.visitor_name:""}`},t.vehicle_id))]})}):e.jsx(d,{testID:"ParkingSessionSelectLicensePlateSomethingWentWrong"})},L=()=>_.create({container:{flex:1}});try{s.displayName="ParkingSessionSelectLicensePlate",s.__docgenInfo={description:"",displayName:"ParkingSessionSelectLicensePlate",props:{setLicensePlate:{defaultValue:null,description:"",name:"setLicensePlate",required:!0,type:{name:"(licensePlate: ParkingLicensePlate) => void"}}}}}catch{}const Dt={component:s,argTypes:{setLicensePlate:{action:"setLicensePlate"}}},o={args:{setLicensePlate:()=>null}};var p,n,a;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    setLicensePlate: () => null
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const Wt=["Default"];export{o as Default,Wt as __namedExportsOrder,Dt as default};

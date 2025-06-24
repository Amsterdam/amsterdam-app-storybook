import{b as f}from"./types-C2OYdTo_.js";import{j as k}from"./jsx-runtime-DNHyKP0h.js";import{N as P}from"./NavigationButton-C5nZuSuL.js";import{u as S}from"./useNavigation-CzlnAToN.js";import{u as v}from"./useCurrentParkingPermit.web-Cdj3QSDU.js";import{P as y}from"./routes-CtH9nUKh.js";import{a as b}from"./dayjs-C6sMkNK9.js";import{f as C}from"./formatTimeRangeToDisplay-CggXkYKX.js";import"./index-B-xgG2PE.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Pressable-BEXxRROq.js";import"./PressableBase-C_jsYHwg.js";import"./usePiwikTrackCustomEventFromProps-DTbmA5EW.js";import"./index-CnyDuYXe.js";import"./useTrackException-BuwXEiys.js";import"./index-aqbATsDD.js";import"./NativeEventEmitter-CjF4_R2K.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./index-Cm4QxXoK.js";import"./index-BiinuClr.js";import"./index-8vBCaO0e.js";import"./extends-CF3RwP-h.js";import"./index-DoMT7H_C.js";import"./Box-BMcI0q4r.js";import"./layoutStyles-Beptdp9x.js";import"./useThemable-DhqiuDXa.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./base-color-BCCzFoQm.js";import"./Column-CNEXbMdz.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Row-BvNvwgkX.js";import"./Icon-BYKwgIq1.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Animated-45BN0duk.js";import"./index-DoCTQWjN.js";import"./index-u-pG-eXf.js";import"./index-CXGG-aYW.js";import"./types-CttlCamk.js";import"./useDeviceContext-BsghPmC5.js";import"./index-C70cEofB.js";import"./useTheme-6yZg5PNu.js";import"./Phrase-BZdfeYs7.js";import"./AccessibleText-ySoCsV7u.js";import"./permit.mock-DaITRQ52.js";import"./index-CqtUk6fw.js";const e=({parkingSession:i})=>{const{navigate:c}=S(),{start_date_time:r,end_date_time:_,vehicle_id:l,visitor_name:n}=i,a=`${l}${n?" - "+n:""}`,d=C(r,_,{short:!0}),g=v(),o=`${b(r).format("HH.mm")} uur`,u=g.no_endtime?`${o}`:`${o} - ${d}`;return k.jsx(P,{accessibilityLabel:`Kenteken ${a}`,description:u,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{c(y.parkingSession,{parkingSession:i})},testID:"ParkingPlannedSessionNavigationButton",title:a})};try{e.displayName="ParkingPlannedSessionNavigationButton",e.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"VisitorParkingSession | ParkingSession"}}}}}catch{}const Pt={component:e},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_date_time:"2024-12-31 8:00:00 UTC",end_date_time:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date_time:"2025-12-31 8:00:00 UTC",status:f.planned,time_balance_applicable:!1}}};var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    parkingSession: {
      vehicle_id: 'ABC123',
      visitor_name: 'John Doe',
      created_date_time: '2024-12-31 8:00:00 UTC',
      end_date_time: '2025-12-31 16:00:00 UTC',
      is_cancelled: false,
      is_paid: false,
      money_balance_applicable: false,
      no_endtime: false,
      parking_cost: {
        currency: '',
        value: 0
      },
      ps_right_id: 0,
      remaining_time: 0,
      report_code: '',
      start_date_time: '2025-12-31 8:00:00 UTC',
      status: ParkingSessionStatus.planned,
      time_balance_applicable: false
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const St=["Default"];export{t as Default,St as __namedExportsOrder,Pt as default};

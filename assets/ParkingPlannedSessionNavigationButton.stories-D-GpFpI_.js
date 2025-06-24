import{b as k}from"./types-C2OYdTo_.js";import{j as P}from"./jsx-runtime-DNHyKP0h.js";import{N as v}from"./NavigationButton-CKRdhmnC.js";import{u as y}from"./useNavigation-CzlnAToN.js";import{u as b}from"./useCurrentParkingPermit.web-Cdj3QSDU.js";import{P as T}from"./routes-CtH9nUKh.js";import{a as h}from"./dayjs-C6sMkNK9.js";import{f as p}from"./formatTimeRangeToDisplay-CggXkYKX.js";import"./index-B-xgG2PE.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Pressable-COBztUDM.js";import"./PressableBase-C_jsYHwg.js";import"./usePiwikTrackCustomEventFromProps-DTbmA5EW.js";import"./index-CnyDuYXe.js";import"./useTrackException-BuwXEiys.js";import"./index-aqbATsDD.js";import"./NativeEventEmitter-CjF4_R2K.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./index-Cm4QxXoK.js";import"./index-BiinuClr.js";import"./index-8vBCaO0e.js";import"./extends-CF3RwP-h.js";import"./index-DoMT7H_C.js";import"./Box-DgjhZuTh.js";import"./layoutStyles-Beptdp9x.js";import"./useThemable-DhqiuDXa.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./base-color-BCCzFoQm.js";import"./Column-CNEXbMdz.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Row-BvNvwgkX.js";import"./Icon-DIPpAMy7.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Animated-45BN0duk.js";import"./index-DoCTQWjN.js";import"./index-u-pG-eXf.js";import"./index-CXGG-aYW.js";import"./types-CttlCamk.js";import"./useDeviceContext-BsghPmC5.js";import"./index-C70cEofB.js";import"./useTheme-6yZg5PNu.js";import"./Phrase-Btqetqw4.js";import"./AccessibleText-ySoCsV7u.js";import"./permit.mock-DaITRQ52.js";import"./index-CqtUk6fw.js";const n=({parkingSession:i})=>{const{navigate:d}=y(),{start_date_time:e,end_date_time:a,vehicle_id:g,visitor_name:o}=i,s=`${g}${o?" - "+o:""}`,u=p(e,a,{short:!0}),f=p(e,a,{short:!1}),m=b(),r=`${h(e).format("HH.mm")} uur`,S=m.no_endtime?`${r}`:`${r} - ${u}`;return P.jsx(v,{accessibilityLabel:`Kenteken ${s}. Starttijd ${r} ${m.no_endtime?"":"Parkeertijd "+f}`,description:S,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{d(T.parkingSession,{parkingSession:i})},testID:"ParkingPlannedSessionNavigationButton",title:s})};try{n.displayName="ParkingPlannedSessionNavigationButton",n.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"VisitorParkingSession | ParkingSession"}}}}}catch{}const Pt={component:n},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_date_time:"2024-12-31 8:00:00 UTC",end_date_time:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date_time:"2025-12-31 8:00:00 UTC",status:k.planned,time_balance_applicable:!1}}};var c,_,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(_=t.parameters)==null?void 0:_.docs)==null?void 0:l.source}}};const vt=["Default"];export{t as Default,vt as __namedExportsOrder,Pt as default};

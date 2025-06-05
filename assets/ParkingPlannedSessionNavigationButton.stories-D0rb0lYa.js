import{b as f}from"./types-ygl1BpYP.js";import{j as P}from"./jsx-runtime-DNHyKP0h.js";import{N as S}from"./NavigationButton-DsM1x1Yh.js";import{u as k}from"./useNavigation-nQiuaEmx.js";import{u as v}from"./useCurrentParkingPermit.web-CjeOPfhw.js";import{P as y}from"./routes-D2TSnadd.js";import{a as C}from"./dayjs-C6sMkNK9.js";import{f as N}from"./formatTimeRangeToDisplay-CggXkYKX.js";import"./index-B-xgG2PE.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Pressable-DWE0iNNb.js";import"./PressableBase-EJmptjbl.js";import"./usePiwikTrackCustomEventFromProps-3h3ujznm.js";import"./index-CnyDuYXe.js";import"./useTrackException-Drki5F9-.js";import"./index-aqbATsDD.js";import"./NativeEventEmitter-CjF4_R2K.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./index-Cm4QxXoK.js";import"./index-BiinuClr.js";import"./index-D99rcuZp.js";import"./extends-CF3RwP-h.js";import"./index-DoMT7H_C.js";import"./Box-DH0FX3tC.js";import"./layoutStyles-Beptdp9x.js";import"./useThemable-BoIQ4zZO.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./base-color-BCCzFoQm.js";import"./Column-DNy8-O0J.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Row-CCGuJp51.js";import"./Icon-z53-Ex9X.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Animated-45BN0duk.js";import"./index-DoCTQWjN.js";import"./index-u-pG-eXf.js";import"./index-CXGG-aYW.js";import"./types-CttlCamk.js";import"./useDeviceContext-BsghPmC5.js";import"./index-C70cEofB.js";import"./useTheme-Cc0Zgb7Z.js";import"./Phrase-CYM0N4jl.js";import"./AccessibleText-ySoCsV7u.js";import"./permit.mock-DVlqa6St.js";import"./index-CqtUk6fw.js";const e=({parkingSession:i})=>{const{navigate:p}=k(),{start_date_time:r,end_date_time:_,vehicle_id:c,visitor_name:n}=i,l=`${c}${n?" - "+n:""}`,d=N(r,_,{short:!0}),g=v(),a=`${C(r).format("HH.mm")} uur`,u=g.no_endtime?`${a}`:`${a} - ${d}`;return P.jsx(S,{description:u,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{p(y.parkingSession,{parkingSession:i})},testID:"ParkingPlannedSessionNavigationButton",title:l})};try{e.displayName="ParkingPlannedSessionNavigationButton",e.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"VisitorParkingSession | ParkingSession"}}}}}catch{}const St={component:e},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_date_time:"2024-12-31 8:00:00 UTC",end_date_time:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date_time:"2025-12-31 8:00:00 UTC",status:f.planned,time_balance_applicable:!1}}};var o,s,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const kt=["Default"];export{t as Default,kt as __namedExportsOrder,St as default};

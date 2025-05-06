import{a as g}from"./types-CAd78L4S.js";import{j as a}from"./jsx-runtime-DNHyKP0h.js";import{N as u}from"./NavigationButton-CeK0sF9x.js";import{C as f}from"./Column-DVtKxYat.js";import{P}from"./Phrase-C9gS9hvz.js";import{u as S}from"./useNavigation-BEkwKwyl.js";import{P as k}from"./routes-93DY_Fro.js";import{a as v}from"./dayjs-C6sMkNK9.js";import{f as h}from"./formatDateToDisplay-DpkTMAZm.js";import{f as y}from"./formatTimeRangeToDisplay-CggXkYKX.js";import"./index-B-xgG2PE.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Pressable-CsD-PabF.js";import"./PressableBase-CEdq_Zhb.js";import"./usePiwikTrackCustomEventFromProps-CIBytwG1.js";import"./index-CnyDuYXe.js";import"./useTrackException-TkLtIDfC.js";import"./index-CjMpzYvL.js";import"./NativeEventEmitter-BGtqh25e.js";import"./index-Ri0BYtkV.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./index-Cm4QxXoK.js";import"./development-DJtR3hZp.js";import"./index-JSuUQSjJ.js";import"./extends-CF3RwP-h.js";import"./index-DoMT7H_C.js";import"./Box-CFG1ebIL.js";import"./layoutStyles-Beptdp9x.js";import"./useThemable-CTWM4LE1.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./base-color-BCCzFoQm.js";import"./Row-C5CroUVt.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-C7LVwjA6.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Animated-D7-aZ0i-.js";import"./index-CziGdoF6.js";import"./index-CilX169C.js";import"./index-CXGG-aYW.js";import"./types-CttlCamk.js";import"./useDeviceContext-BspZyhLx.js";import"./index-D23RIuqi.js";import"./useTheme-Dc9FNa6d.js";import"./AccessibleText-ySoCsV7u.js";import"./formatDate-t_qfzG4V.js";import"./index-CqtUk6fw.js";const r=({parkingSession:i})=>{const{navigate:p}=S(),{start_date_time:e,end_date_time:l,vehicle_id:_,visitor_name:o}=i,c=`${_}${o?" - "+o:""}`,d=y(e,l,{short:!0});return a.jsxs(f,{gutter:"sm",children:[a.jsx(P,{emphasis:"strong",testID:"ParkingPlannedSessionDatePhrase",children:h(e,!1)}),a.jsx(u,{description:`${v(e).format("HH.mm")} uur - ${d}`,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{p(k.parkingSession,{parkingSession:i})},testID:"ParkingPlannedSessionNavigationButton",title:c})]})};try{r.displayName="ParkingPlannedSessionNavigationButton",r.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"ParkingSession"}}}}}catch{}const St={component:r},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_time:"2024-12-31 8:00:00 UTC",end_date_time:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date_time:"2025-12-31 8:00:00 UTC",status:g.planned,time_balance_applicable:!1}}};var n,s,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    parkingSession: {
      vehicle_id: 'ABC123',
      visitor_name: 'John Doe',
      created_time: '2024-12-31 8:00:00 UTC',
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

import{a as S}from"./types-J33xrUyH.js";import{j as r}from"./jsx-runtime-DNHyKP0h.js";import{N as k}from"./NavigationButton-C0M7G8yf.js";import{C as v}from"./Column-DsjRLnoY.js";import{P as h}from"./Phrase-sBZet5Ht.js";import{u as y}from"./useNavigation-CU7ba_Tq.js";import{P as C}from"./routes-CNopwT4i.js";import{c as D}from"./convertMillisecondsToHoursAndMinutes-Cf0hnsz_.js";import{a as i}from"./dayjs-C6sMkNK9.js";import"./index-B-xgG2PE.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Pressable--WJuVnpY.js";import"./PressableBase-CzEoUrEB.js";import"./usePiwikTrackCustomEventFromProps-CnY5rNKH.js";import"./index-CnyDuYXe.js";import"./useTrackException-DirxRx8f.js";import"./index-CjMpzYvL.js";import"./NativeEventEmitter-BGtqh25e.js";import"./index-Ri0BYtkV.js";import"./TextAncestorContext-Z5dgoe9Q.js";import"./index-Cm4QxXoK.js";import"./development-DQdBRrdh.js";import"./index-DSFhKksy.js";import"./extends-CF3RwP-h.js";import"./index-B6GZSLb3.js";import"./index-DoMT7H_C.js";import"./Box-BfVBBnhN.js";import"./layoutStyles-Beptdp9x.js";import"./useThemable-BZOwsbAR.js";import"./index-DICU_UuR.js";import"./index-CGHx0_JJ.js";import"./base-color-BCCzFoQm.js";import"./Row-CogBqcx0.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-DyQEshRD.js";import"./index-s4hYfBOP.js";import"./index-Chjiymov.js";import"./Animated-DeoFghji.js";import"./index-BfuYXHyp.js";import"./index-CilX169C.js";import"./index-CXGG-aYW.js";import"./types-CttlCamk.js";import"./useDeviceContext-BspZyhLx.js";import"./index-D23RIuqi.js";import"./useTheme-aWF2kyC_.js";import"./AccessibleText-ySoCsV7u.js";const o=({parkingSession:n})=>{const{navigate:l}=y(),{start_date:e,end_date:d,vehicle_id:_,visitor_name:s}=n,g=`${_}${s?" - "+s:""}`,u=i(e).isSame(i(),"day"),f=i(d).diff(i(e),"milliseconds"),a=D(f),P=`${a[0]} uur ${a[1]?a[1]+" min":""}`;return r.jsxs(v,{gutter:"sm",children:[r.jsx(h,{emphasis:"strong",testID:"ParkingPlannedSessionDatePhrase",children:u?"Vandaag":i(e).format("DD MMMM YYYY")}),r.jsx(k,{description:`${i(e).format("HH.mm")} - ${P}`,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{l(C.parkingSession,{parkingSession:n})},testID:"ParkingPlannedSessionNavigationButton",title:g})]})};try{o.displayName="ParkingPlannedSessionNavigationButton",o.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"ParkingSession"}}}}}catch{}const Si={component:o},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_time:"2024-12-31 8:00:00 UTC",end_date:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date:"2025-12-31 8:00:00 UTC",status:S.planned,time_balance_applicable:!1}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    parkingSession: {
      vehicle_id: 'ABC123',
      visitor_name: 'John Doe',
      created_time: '2024-12-31 8:00:00 UTC',
      end_date: '2025-12-31 16:00:00 UTC',
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
      start_date: '2025-12-31 8:00:00 UTC',
      status: ParkingSessionStatus.planned,
      time_balance_applicable: false
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const ki=["Default"];export{t as Default,ki as __namedExportsOrder,Si as default};

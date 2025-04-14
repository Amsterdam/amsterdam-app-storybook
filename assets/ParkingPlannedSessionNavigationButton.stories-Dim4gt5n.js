import{a as S}from"./types-J33xrUyH.js";import{j as r}from"./jsx-runtime-BbjHj44Y.js";import{N as k}from"./NavigationButton-CytOomp2.js";import{C as v}from"./Column-CR4hgQi0.js";import{P as h}from"./Phrase-Dng5M8i6.js";import{u as y}from"./useNavigation-CX1weHF_.js";import{P as C}from"./routes-CNopwT4i.js";import{c as D}from"./convertMillisecondsToHoursAndMinutes-Cf0hnsz_.js";import{a as i}from"./dayjs-zGCqeocX.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Pressable-hNV2p8Qb.js";import"./PressableBase-D1R9kh4w.js";import"./usePiwikTrackCustomEventFromProps-DF2fziNK.js";import"./index-8JwjhRSi.js";import"./useTrackException-N30wvaUK.js";import"./index-DCc44by_.js";import"./NativeEventEmitter-DCV0Pn5n.js";import"./index-D9sity5J.js";import"./TextAncestorContext-CSVgRfTu.js";import"./index-AX8Ze_yw.js";import"./development-DJonjCCT.js";import"./index-BBGu7yUP.js";import"./extends-CF3RwP-h.js";import"./index-BOwASFyM.js";import"./index-DlZxTruE.js";import"./Box-E6LDY1rd.js";import"./layoutStyles-CtIJ01mY.js";import"./useThemable-PLjH4_iL.js";import"./index-zunobDwC.js";import"./base-color-B2rPH-Aj.js";import"./Row-BCMAM0L3.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-lxFM3dF7.js";import"./index-DHvBt6_g.js";import"./index-Dk74W0Oi.js";import"./Animated-OkU9SbsS.js";import"./index-YyRL9FmO.js";import"./index-BSOXSDKk.js";import"./index-ChIQSUPS.js";import"./types-CttlCamk.js";import"./useDeviceContext-xW-EhN6Y.js";import"./index-BAOkQ-p1.js";import"./useTheme-Du9lcFXl.js";import"./AccessibleText-CftfVd0a.js";const o=({parkingSession:n})=>{const{navigate:l}=y(),{start_date:e,end_date:d,vehicle_id:_,visitor_name:s}=n,g=`${_}${s?" - "+s:""}`,u=i(e).isSame(i(),"day"),f=i(d).diff(i(e),"milliseconds"),a=D(f),P=`${a[0]} uur ${a[1]?a[1]+" min":""}`;return r.jsxs(v,{gutter:"sm",children:[r.jsx(h,{emphasis:"strong",testID:"ParkingPlannedSessionDatePhrase",children:u?"Vandaag":i(e).format("DD MMMM YYYY")}),r.jsx(k,{description:`${i(e).format("HH.mm")} - ${P}`,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{l(C.parkingSession,{parkingSession:n})},testID:"ParkingPlannedSessionNavigationButton",title:g})]})};try{o.displayName="ParkingPlannedSessionNavigationButton",o.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"ParkingSession"}}}}}catch{}const Pi={component:o},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_time:"2024-12-31 8:00:00 UTC",end_date:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date:"2025-12-31 8:00:00 UTC",status:S.planned,time_balance_applicable:!1}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Si=["Default"];export{t as Default,Si as __namedExportsOrder,Pi as default};

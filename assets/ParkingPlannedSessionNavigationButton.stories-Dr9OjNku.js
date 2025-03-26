import{P as S}from"./types-Bbg4thQy.js";import{j as r}from"./jsx-runtime-BlAj40OV.js";import{N as k}from"./NavigationButton-c5AJ2f1q.js";import{C as v}from"./Column-C-_ysMT_.js";import{P as h}from"./Phrase-res6LTZh.js";import{u as y}from"./useNavigation-kIyZ9lBa.js";import{P as C}from"./routes-CNopwT4i.js";import{c as D}from"./convertMillisecondsToHoursAndMinutes-Cf0hnsz_.js";import{a as i}from"./dayjs-zGCqeocX.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Pressable-BMkqb05C.js";import"./PressableBase-CJ8k0TZj.js";import"./usePiwikTrackCustomEventFromProps-yuG0y8Gu.js";import"./index-8JwjhRSi.js";import"./useTrackException-DEzXmbBu.js";import"./index-Mm_72FUV.js";import"./NativeEventEmitter-CLDmlHLL.js";import"./index-DU7ZIcDZ.js";import"./TextAncestorContext-aRigYKLY.js";import"./index-DaXhXLBr.js";import"./development-Cvxij4Vy.js";import"./index-CeJd0Tpi.js";import"./extends-CF3RwP-h.js";import"./index-KNTxeJap.js";import"./index-CVb019Wa.js";import"./Box-ZYAv0uRe.js";import"./layoutStyles-VwxLuKgu.js";import"./useThemable-C_j1rl9R.js";import"./index-D5xlL9g-.js";import"./base-color-B2rPH-Aj.js";import"./Row-CGyIPceF.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-Tv9kT_7Y.js";import"./index-B2aDqa-5.js";import"./index-Dk74W0Oi.js";import"./Animated-DHP0GX_b.js";import"./index-CJ3jvq4L.js";import"./index-BSsc9iXP.js";import"./index-H0EjEgo9.js";import"./types-CttlCamk.js";import"./useDeviceContext-BcAQQrI2.js";import"./index-BcvVjgba.js";import"./useTheme-BWuKi6Q_.js";import"./AccessibleText-Cj1XZqyc.js";const o=({parkingSession:n})=>{const{navigate:l}=y(),{start_date:e,end_date:d,vehicle_id:_,visitor_name:s}=n,g=`${_}${s?" - "+s:""}`,u=i(e).isSame(i(),"day"),f=i(d).diff(i(e),"milliseconds"),a=D(f),P=`${a[0]} uur ${a[1]?a[1]+" min":""}`;return r.jsxs(v,{gutter:"sm",children:[r.jsx(h,{emphasis:"strong",testID:"ParkingPlannedSessionDatePhrase",children:u?"Vandaag":i(e).format("DD MMMM YYYY")}),r.jsx(k,{description:`${i(e).format("HH.mm")} - ${P}`,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{l(C.parkingSession,{parkingSession:n})},testID:"ParkingPlannedSessionNavigationButton",title:g})]})};try{o.displayName="ParkingPlannedSessionNavigationButton",o.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"ParkingSession"}}}}}catch{}const Pi={component:o},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_time:"2024-12-31 8:00:00 UTC",end_date:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date:"2025-12-31 8:00:00 UTC",status:S.planned,time_balance_applicable:!1}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

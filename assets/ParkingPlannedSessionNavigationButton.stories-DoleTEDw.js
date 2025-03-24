import{P as S}from"./types-Bbg4thQy.js";import{j as r}from"./jsx-runtime-BlAj40OV.js";import{N as k}from"./NavigationButton-CutNQRoc.js";import{C as v}from"./Column-BySxSqfy.js";import{P as h}from"./Phrase-2Ga4jqzY.js";import{u as y}from"./useNavigation-CauFfBYh.js";import{P as C}from"./routes-CNopwT4i.js";import{c as D}from"./convertMillisecondsToHoursAndMinutes-Cf0hnsz_.js";import{a as i}from"./dayjs-zGCqeocX.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Pressable-nydB4ngp.js";import"./PressableBase-DcvdMIFG.js";import"./usePiwikTrackCustomEventFromProps-AVr47pnt.js";import"./index-8JwjhRSi.js";import"./useTrackException-BPpet2P4.js";import"./index-B9HBLp1U.js";import"./NativeEventEmitter-CdIviC7q.js";import"./index-C9LjRz3B.js";import"./TextAncestorContext-CgUd_yOy.js";import"./index-BRs9ZavV.js";import"./development-uC8BM1Yf.js";import"./index-HY1hV1Sb.js";import"./extends-CF3RwP-h.js";import"./index-KNTxeJap.js";import"./index-DNzWYFc8.js";import"./Box-CxmZ6QRL.js";import"./layoutStyles-nv7cBgSD.js";import"./useThemable-Dk0h9Bfi.js";import"./index-D5xlL9g-.js";import"./base-color-B2rPH-Aj.js";import"./Row-OfPHmFJ9.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./Icon-_B4lx4iS.js";import"./index-CC-zlO6h.js";import"./index-Dk74W0Oi.js";import"./Animated-C69vQo_O.js";import"./index-Bam434sD.js";import"./index-BNEt8Bkx.js";import"./index-CglSVHKQ.js";import"./types-CttlCamk.js";import"./useDeviceContext-BXdagwJr.js";import"./index-B5FlGKE6.js";import"./useTheme-CNPhRQCo.js";import"./AccessibleText-COgu9Gly.js";const o=({parkingSession:n})=>{const{navigate:l}=y(),{start_date:e,end_date:d,vehicle_id:_,visitor_name:s}=n,g=`${_}${s?" - "+s:""}`,u=i(e).isSame(i(),"day"),f=i(d).diff(i(e),"milliseconds"),a=D(f),P=`${a[0]} uur ${a[1]?a[1]+" min":""}`;return r.jsxs(v,{gutter:"sm",children:[r.jsx(h,{emphasis:"strong",testID:"ParkingPlannedSessionDatePhrase",children:u?"Vandaag":i(e).format("DD MMMM YYYY")}),r.jsx(k,{description:`${i(e).format("HH.mm")} - ${P}`,icon:"parkingCar",iconSize:"lg",inset:!1,onPress:()=>{l(C.parkingSession,{parkingSession:n})},testID:"ParkingPlannedSessionNavigationButton",title:g})]})};try{o.displayName="ParkingPlannedSessionNavigationButton",o.__docgenInfo={description:"",displayName:"ParkingPlannedSessionNavigationButton",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!0,type:{name:"ParkingSession"}}}}}catch{}const Pi={component:o},t={args:{parkingSession:{vehicle_id:"ABC123",visitor_name:"John Doe",created_time:"2024-12-31 8:00:00 UTC",end_date:"2025-12-31 16:00:00 UTC",is_cancelled:!1,is_paid:!1,money_balance_applicable:!1,no_endtime:!1,parking_cost:{currency:"",value:0},ps_right_id:0,remaining_time:0,report_code:"",start_date:"2025-12-31 8:00:00 UTC",status:S.planned,time_balance_applicable:!1}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as x}from"./jsx-runtime-DNHyKP0h.js";import{r as e}from"./index-B-xgG2PE.js";import{P as d}from"./constants-CgWtM86l.js";import{a as m}from"./dayjs-C6sMkNK9.js";const P=(o=m())=>o.second(0).millisecond(0),V={licensePlate:void 0,setLicensePlate:()=>null,startTime:P(),setStartTime:()=>null,endTime:void 0,setEndTime:()=>null,bottomSheetVariant:d.licensePlate,setBottomSheetVariant:()=>null,paymentZoneId:void 0,setPaymentZoneId:()=>null,ps_right_id:void 0,report_code:void 0,amount:void 0,setAmount:()=>null},I=e.createContext(V),i=({children:o,parkingSession:t})=>{const[a,n]=e.useState(t?{vehicle_id:t.vehicle_id,visitor_name:t==null?void 0:t.visitor_name}:void 0),[l,v]=e.useState(t?m(t.start_date_time):P()),[r,s]=e.useState(t?m(t.end_date_time):void 0),[c,h]=e.useState(t?t.payment_zone_id:void 0),[_,y]=e.useState(),[u,T]=e.useState(t?d.endTime:d.licensePlate),f=e.useMemo(()=>({licensePlate:a,setLicensePlate:n,startTime:l,setStartTime:v,endTime:r,setEndTime:s,bottomSheetVariant:u,setBottomSheetVariant:T,paymentZoneId:c,setPaymentZoneId:h,ps_right_id:t==null?void 0:t.ps_right_id,report_code:t==null?void 0:t.report_code,amount:_,setAmount:y}),[_,u,r,a,t==null?void 0:t.ps_right_id,t==null?void 0:t.report_code,c,l]);return x.jsx(I.Provider,{value:f,children:o})};try{i.displayName="ParkingSessionProvider",i.__docgenInfo={description:"",displayName:"ParkingSessionProvider",props:{parkingSession:{defaultValue:null,description:"",name:"parkingSession",required:!1,type:{name:"ParkingSession"}}}}}catch{}export{I as P,P as r};

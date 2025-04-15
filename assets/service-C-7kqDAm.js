import{b as d,c as a}from"./types-CAd78L4S.js";import{M as r}from"./useTrackException-DirxRx8f.js";import{g as m,S as u,a as P,b as T,c as h,d as g}from"./api-BYuRkEAX.js";import{d as l,a as p}from"./development-DQdBRrdh.js";const y=async s=>{try{const e=await m(s===d.permitHolder?u.parkingPermitHolder:u.parkingVisitor);return e?JSON.parse(e):void 0}catch(e){return l(e),Promise.reject(e)}},A=async s=>{try{return await P(s.scope===d.permitHolder?u.parkingPermitHolder:u.parkingVisitor,JSON.stringify(s))}catch(e){return e}},v=(s,e,n,o,i)=>{A(s).then(()=>{e(T(s.scope===d.permitHolder?u.parkingPermitHolder:u.parkingVisitor)),l("Token parking account successful refreshed"),n("New token, so old request should fail"),o()},()=>{p("Token parking account save failed"),i(new Error("New token could not be saved"))})},E=(s,e,n)=>new Promise((o,i)=>{if(!s){p("No account type provided"),i(new Error("No account type provided  "));return}y(s).then(c=>{c&&e(k.endpoints[a.login].initiate({pin:c.pin,report_code:c.reportCode})).unwrap().then(({access_token:S})=>v({...c,accessToken:S},e,n,o,i),()=>{p("Token refresh failed, you are now logged out"),n("Session ended"),i(new Error("Token refresh failed"))})})}),t=async({error:s},{dispatch:e,getState:n},o)=>{if((s==null?void 0:s.status)===403){const{currentAccountType:i}=n().parking;return E(i,e,o)}else o("no access")},k=h.injectEndpoints({endpoints:s=>({[a.accountDetails]:s.query({providesTags:["ParkingAccount"],query:e=>({headers:{"SSP-Access-Token":e},method:"GET",slug:r.parking,url:"/account-details",afterError:t})}),[a.addLicensePlate]:s.mutation({invalidatesTags:["ParkingLicensePlates"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"POST",slug:r.parking,url:"/license-plate",afterError:t})}),[a.licensePlates]:s.query({providesTags:["ParkingLicensePlates"],query:({accessToken:e,reportCode:n})=>({headers:{"SSP-Access-Token":e},method:"GET",params:{report_code:n},slug:r.parking,url:"/license-plates",afterError:t})}),[a.login]:s.mutation({query:e=>({body:e,method:"POST",slug:r.parking,url:"/login"})}),[a.parkingSessions]:s.query({providesTags:["ParkingSessions"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},method:"GET",params:n,slug:r.parking,url:"/sessions",afterError:t})}),[a.permits]:s.query({query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},method:"GET",slug:r.parking,url:g({path:"/permits",params:n}),afterError:t})}),[a.sessionReceipt]:s.query({query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},method:"GET",slug:r.parking,url:g({path:"/session/receipt",params:n}),afterError:t})}),[a.startSession]:s.mutation({invalidatesTags:["ParkingSessions"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"POST",slug:r.parking,url:"/session",afterError:t})}),[a.editSession]:s.mutation({invalidatesTags:["ParkingSessions"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"PATCH",slug:r.parking,url:"/session",afterError:t})}),[a.deleteSession]:s.mutation({invalidatesTags:["ParkingSessions"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},method:"DELETE",slug:r.parking,url:g({path:"/session",params:n}),afterError:t})}),[a.removeLicensePlate]:s.mutation({invalidatesTags:["ParkingLicensePlates"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"DELETE",slug:r.parking,url:"/license-plate",afterError:t})}),[a.increaseBalance]:s.mutation({invalidatesTags:["ParkingAccount"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"POST",slug:r.parking,url:"/balance",afterError:t})})}),overrideExisting:!0}),{useAccountDetailsQuery:M,useAddLicensePlateMutation:H,useLicensePlatesQuery:N,useLoginMutation:O,useParkingSessionsQuery:D,useRemoveLicensePlateMutation:G,usePermitsQuery:I,useSessionReceiptQuery:Q,useStartSessionMutation:V,useEditSessionMutation:x,useDeleteSessionMutation:B,useIncreaseBalanceMutation:C}=k;export{H as a,O as b,D as u};

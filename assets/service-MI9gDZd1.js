import{b as p,c as r}from"./types-Djkm8j7P.js";import{M as t}from"./useTrackException-DirxRx8f.js";import{g as S,S as u,a as P,b as h,c as T,d}from"./api-mb0BKmjj.js";import{d as l,a as g}from"./development-DQdBRrdh.js";const y=async s=>{try{const e=await S(s===p.permitHolder?u.parkingPermitHolder:u.parkingVisitor);return e?JSON.parse(e):void 0}catch(e){return l(e),Promise.reject(e)}},v=async s=>{try{return await P(s.scope===p.permitHolder?u.parkingPermitHolder:u.parkingVisitor,JSON.stringify(s))}catch(e){return e}},A=(s,e,n,o,i)=>{v(s).then(()=>{e(h(s.scope===p.permitHolder?u.parkingPermitHolder:u.parkingVisitor)),l("Token parking account successful refreshed"),n("New token, so old request should fail"),o()},()=>{g("Token parking account save failed"),i(new Error("New token could not be saved"))})},q=(s,e,n)=>new Promise((o,i)=>{if(!s){g("No account type provided"),i(new Error("No account type provided  "));return}y(s).then(c=>{c&&e(k.endpoints[r.login].initiate({pin:c.pin,report_code:c.reportCode})).unwrap().then(({access_token:m})=>A({...c,accessToken:m},e,n,o,i),()=>{g("Token refresh failed, you are now logged out"),n("Session ended"),i(new Error("Token refresh failed"))})})}),a=async({error:s},{dispatch:e,getState:n},o)=>{if((s==null?void 0:s.status)===403){const{currentAccountType:i}=n().parking;return q(i,e,o)}else o("no access")},k=T.injectEndpoints({endpoints:s=>({[r.accountDetails]:s.query({query:e=>({headers:{"SSP-Access-Token":e},method:"GET",slug:t.parking,url:"/account-details",afterError:a})}),[r.addLicensePlate]:s.mutation({invalidatesTags:["LicensePlates"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"POST",slug:t.parking,url:"/license-plate",afterError:a})}),[r.licensePlates]:s.query({providesTags:["LicensePlates"],query:({accessToken:e,reportCode:n})=>({headers:{"SSP-Access-Token":e},method:"GET",params:{report_code:n},slug:t.parking,url:"/license-plates",afterError:a})}),[r.login]:s.mutation({query:e=>({body:e,method:"POST",slug:t.parking,url:"/login"})}),[r.parkingSessions]:s.query({providesTags:["ParkingSessions"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},method:"GET",params:n,slug:t.parking,url:"/sessions",afterError:a})}),[r.permits]:s.query({query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},method:"GET",slug:t.parking,url:d({path:"/permits",params:n}),afterError:a})}),[r.sessionReceipt]:s.query({query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},method:"GET",slug:t.parking,url:d({path:"/session/receipt",params:n}),afterError:a})}),[r.startSession]:s.mutation({invalidatesTags:["ParkingSessions"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"POST",slug:t.parking,url:"/session",afterError:a})}),[r.changeSession]:s.mutation({invalidatesTags:["ParkingSessions"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"PATCH",slug:t.parking,url:"/session",afterError:a})}),[r.removeLicensePlate]:s.mutation({invalidatesTags:["LicensePlates"],query:({accessToken:e,...n})=>({headers:{"SSP-Access-Token":e},body:n,method:"DELETE",slug:t.parking,url:"/license-plate",afterError:a})})}),overrideExisting:!0}),{useAccountDetailsQuery:M,useAddLicensePlateMutation:H,useLicensePlatesQuery:N,useLoginMutation:G,useParkingSessionsQuery:O,useRemoveLicensePlateMutation:Q,usePermitsQuery:I,useSessionReceiptQuery:C,useStartSessionMutation:D,useChangeSessionMutation:V}=k;export{H as a,G as b,O as u};

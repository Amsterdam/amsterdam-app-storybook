import{b as g,c as n}from"./types-BUVEuzZZ.js";import{M as t}from"./useTrackException-N30wvaUK.js";import{g as m,S as c,a as P,b as S,c as y,d as T}from"./api-Bvjid-zV.js";import{d,a as p}from"./development-DJonjCCT.js";const N=()=>({secureParkingAccount:void 0,isLoading:!1}),h=async s=>{try{const e=await m(s===g.permitHolder?c.parkingPermitHolder:c.parkingVisitor);return e?JSON.parse(e):void 0}catch(e){return d(e),Promise.reject(e)}},f=async s=>{try{return await P(s.scope===g.permitHolder?c.parkingPermitHolder:c.parkingVisitor,JSON.stringify(s))}catch(e){return e}},v=(s,e,r,a,o)=>{f(s).then(()=>{e(S(s.scope===g.permitHolder?c.parkingPermitHolder:c.parkingVisitor)),d("Token parking account successful refreshed"),r("New token, so old request should fail"),a()},()=>{p("Token parking account save failed"),o(new Error("New token could not be saved"))})},A=(s,e,r)=>new Promise((a,o)=>{if(!s){p("No account type provided"),o(new Error("No account type provided  "));return}h(s).then(u=>{u&&e(l.endpoints[n.login].initiate({pin:u.pin,report_code:u.reportCode})).unwrap().then(({access_token:k})=>v({...u,accessToken:k},e,r,a,o),()=>{p("Token refresh failed, you are now logged out"),r("Session ended"),o(new Error("Token refresh failed"))})})}),i=async({error:s},{dispatch:e,getState:r},a)=>{if((s==null?void 0:s.status)===403){const{currentAccountType:o}=r().parking;return A(o,e,a)}else a("no access")},l=y.injectEndpoints({endpoints:s=>({[n.accountDetails]:s.query({query:e=>({headers:{"SSP-Access-Token":e},method:"GET",slug:t.parking,url:"/account-details",afterError:i})}),[n.addLicensePlate]:s.mutation({invalidatesTags:["LicensePlates"],query:({accessToken:e,...r})=>({headers:{"SSP-Access-Token":e},body:r,method:"POST",slug:t.parking,url:"/license-plate",afterError:i})}),[n.licensePlates]:s.query({providesTags:["LicensePlates"],query:({accessToken:e,reportCode:r})=>({headers:{"SSP-Access-Token":e},method:"GET",params:{report_code:r},slug:t.parking,url:"/license-plates",afterError:i})}),[n.login]:s.mutation({query:e=>({body:e,method:"POST",slug:t.parking,url:"/login"})}),[n.parkingSessions]:s.query({providesTags:["ParkingSessions"],query:({accessToken:e,...r})=>({headers:{"SSP-Access-Token":e},method:"GET",params:r,slug:t.parking,url:"/sessions",afterError:i})}),[n.permits]:s.query({query:e=>({headers:{"SSP-Access-Token":e},method:"GET",slug:t.parking,url:"/permits",afterError:i})}),[n.sessionReceipt]:s.query({query:({accessToken:e,...r})=>({headers:{"SSP-Access-Token":e},method:"GET",slug:t.parking,url:T({path:"/session/receipt",params:r}),afterError:i})}),[n.removeLicensePlate]:s.mutation({invalidatesTags:["LicensePlates"],query:({accessToken:e,...r})=>({headers:{"SSP-Access-Token":e},body:r,method:"DELETE",slug:t.parking,url:"/license-plate",afterError:i})})}),overrideExisting:!0}),{useAccountDetailsQuery:G,useAddLicensePlateMutation:H,useLicensePlatesQuery:M,useLoginMutation:Q,useParkingSessionsQuery:I,useRemoveLicensePlateMutation:O,usePermitsQuery:D,useSessionReceiptQuery:V}=l;export{N as a,H as b,I as u};

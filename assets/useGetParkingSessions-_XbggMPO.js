import{r as i}from"./index-B-xgG2PE.js";import{s as a}from"./api-BYuRkEAX.js";import{u}from"./useGetCurrentParkingPermit.web-DBB1Y49K.js";import{u as m}from"./service-C-7kqDAm.js";const k=(e,r)=>{i.useEffect(()=>{const s=setInterval(e,r);return()=>clearInterval(s)},[e,r])},l=e=>{const{isLoading:r}=u(),{data:s,isLoading:t,isError:n,refetch:o}=m(a);return{isLoading:t||r,isError:n,parkingSessions:s==null?void 0:s.result,refetch:o}};export{k as a,l as u};

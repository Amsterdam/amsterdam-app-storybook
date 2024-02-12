import"./index-76fb7be0.js";import{N as p}from"./NativeEventEmitter-7be6cb46.js";import{N as g}from"./index-d983c834.js";import{a as N}from"./_commonjsHelpers-de833af9.js";import{P as a}from"./invariant-f1a82cf7.js";new p(g.RNDeviceInfo);const l=new p(g.RNDeviceInfo);let f=!1,y=-1,u={};const v=e=>{const{level:t,charging:o,chargingtime:n,dischargingtime:r}=e;return{batteryLevel:t,lowPowerMode:!1,batteryState:t===1?"full":o?"charging":"unplugged",chargingtime:n,dischargingtime:r}},w=()=>window.performance&&window.performance.memory?window.performance.memory.jsHeapSizeLimit:-1,S=()=>document.referrer,h=()=>!!navigator.onLine,P=()=>window.navigator.userAgent,D=()=>!!navigator.geolocation,I=()=>navigator.deviceMemory?navigator.deviceMemory*1e9:-1,M=()=>window.performance&&window.performance.memory?window.performance.memory.usedJSHeapSize:-1,O=()=>{typeof navigator>"u"||!navigator.getBattery||navigator.getBattery().then(e=>{f=e.charging,e.addEventListener("chargingchange",()=>{const{charging:t}=e;f=t,u=v(e),l.emit("RNDeviceInfo_powerStateDidChange",u)}),e.addEventListener("levelchange",()=>{const{level:t}=e;y=t,u=v(e),l.emit("RNDeviceInfo_batteryLevelDidChange",t),t<.2&&l.emit("RNDeviceInfo_batteryLevelIsLow",t)})})},C=()=>{const e=window.navigator.userAgent,t=window.navigator.platform,o=["Macintosh","MacIntel","MacPPC","Mac68K"],n=["Win32","Win64","Windows","WinCE"],r=["iPhone","iPad","iPod"];let i=t;return o.indexOf(t)!==-1?i="Mac OS":r.indexOf(t)!==-1?i="iOS":n.indexOf(t)!==-1?i="Windows":/Android/.test(e)?i="Android":!i&&/Linux/.test(t)&&(i="Linux"),i};O();const B=async()=>S(),L=async()=>P(),R=async()=>navigator.getBattery?navigator.getBattery().then(e=>e.charging):!1,k=()=>f,A=async()=>navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?navigator.mediaDevices.enumerateDevices().then(e=>!!e.find(t=>t.kind==="videoinput")):!1,x=()=>(console.log("[react-native-device-info] isCameraPresentSync not supported - please use isCameraPresent"),!1),E=async()=>navigator.getBattery?navigator.getBattery().then(e=>e.level):-1,T=()=>y,U=async()=>D(),_=async()=>h(),F=async()=>C(),q=async()=>navigator.storage&&navigator.storage.estimate?navigator.storage.estimate().then(({quota:e})=>e):-1,V=()=>(console.log("[react-native-device-info] getTotalDiskCapacitySync not supported - please use getTotalDiskCapacity"),-1),W=async()=>navigator.storage&&navigator.storage.estimate?navigator.storage.estimate().then(({quota:e,usage:t})=>e-t):-1,j=()=>(console.log("[react-native-device-info] getFreeDiskStorageSync not supported - please use getFreeDiskStorage"),-1),z=async()=>w(),$=async()=>M(),G=async()=>I(),H=async()=>navigator.getBattery?navigator.getBattery().then(e=>v(e)):{},J=()=>u,X=Object.freeze(Object.defineProperty({__proto__:null,getBaseOs:F,getBatteryLevel:E,getBatteryLevelSync:T,getFreeDiskStorage:W,getFreeDiskStorageSync:j,getInstallReferrer:B,getInstallReferrerSync:S,getMaxMemory:z,getMaxMemorySync:w,getPowerState:H,getPowerStateSync:J,getTotalDiskCapacity:q,getTotalDiskCapacitySync:V,getTotalMemory:G,getTotalMemorySync:I,getUsedMemory:$,getUsedMemorySync:M,getUserAgent:L,getUserAgentSync:P,isAirplaneMode:_,isAirplaneModeSync:h,isBatteryCharging:R,isBatteryChargingSync:k,isCameraPresent:A,isCameraPresentSync:x,isLocationEnabled:U,isLocationEnabledSync:D},Symbol.toStringTag,{value:"Module"})),Y=N(X);let m=g.RNDeviceInfo;(a.OS==="web"||a.OS==="dom")&&(m=Y);if(!m&&(a.OS==="android"||a.OS==="ios"||a.OS==="web"||a.OS==="dom"))throw new Error("react-native-device-info: NativeModule.RNDeviceInfo is null. To fix this issue try these steps:\n  • For react-native <= 0.59: Run `react-native link react-native-device-info` in the project root.\n  • Rebuild and re-run the app.\n  • If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n  If none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-device-info/react-native-device-info");const c=m;let s={};function b(e,t,o){let n={};return e.filter(r=>a.OS==r).forEach(r=>n[r]=t),a.select({...n,default:o})}function d({getter:e,supportedPlatforms:t,defaultValue:o,memoKey:n}){if(n&&s[n]!=null)return s[n];{const r=b(t,e,()=>o)();return n&&(s[n]=r),r}}async function Q({getter:e,supportedPlatforms:t,defaultValue:o,memoKey:n}){if(n&&s[n]!=null)return s[n];{const r=await b(t,e,()=>Promise.resolve(o))();return n&&(s[n]=r),r}}function Z({syncGetter:e,...t}){return[()=>Q(t),()=>d({...t,getter:e})]}const[oe,ae]=Z({memoKey:"uniqueId",supportedPlatforms:["android","ios","windows"],getter:()=>c.getUniqueId(),syncGetter:()=>c.getUniqueIdSync(),defaultValue:"unknown"}),ie=()=>d({memoKey:"buildNumber",supportedPlatforms:["android","ios","windows"],getter:()=>c.buildNumber,defaultValue:"unknown"}),se=()=>d({memoKey:"version",defaultValue:"unknown",supportedPlatforms:["android","ios","windows"],getter:()=>c.appVersion}),ce=()=>d({defaultValue:!1,supportedPlatforms:["android","ios","windows"],memoKey:"tablet",getter:()=>c.isTablet});new p(g.RNDeviceInfo);export{se as a,ae as b,ie as g,ce as i};

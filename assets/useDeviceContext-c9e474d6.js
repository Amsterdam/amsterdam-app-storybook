import{r as t}from"./index-4ab02870.js";import{j as n}from"./useThemable-badc2311.js";import{i as d}from"./index-3ef41323.js";import{u as l}from"./index-c19a59a9.js";const o={fontScale:1,height:640,isLandscape:!1,isPortrait:!0,isTablet:!1,isTallPhone:!0,scale:1,width:360},r=t.createContext(o),s=({children:i})=>{const[a,c]=t.useState(o),e=l();return t.useEffect(()=>{c({isLandscape:e.height<e.width,isPortrait:e.height>=e.width,isTablet:d(),isTallPhone:e.height/e.width>2,...e})},[e]),n(r.Provider,{value:a,children:i})};try{s.displayName="DeviceProvider",s.__docgenInfo={description:"",displayName:"DeviceProvider",props:{}}}catch{}const f=()=>t.useContext(r);export{s as D,f as u};
//# sourceMappingURL=useDeviceContext-c9e474d6.js.map
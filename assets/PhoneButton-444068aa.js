import{j as l}from"./jsx-runtime-ffb262ed.js";import{B as r}from"./Button-cbeebc5e.js";import{R as u}from"./Row-2be06d61.js";import{u as o}from"./useOpenPhoneUrl-4998d859.js";import{a as d}from"./accessibleText-a5c6b4b4.js";const c=["010","013","014","015","020","023","024","026","030","033","035","036","038","040","043","044","045","046","050","053","055","058","070","071","072","073","074","075","076","077","078","079"],t=e=>{var a;if(e.startsWith("+31")&&(e=e.replace("+31","0")),e==="14020")return"14 020";if(e==="0202515020")return"020 25 15 020";if(e.length===10)return e.startsWith("06")?[e.substring(0,2),e.substring(2,6),e.substring(6,10)].join(" "):c.includes(e.substring(0,3))?[e.substring(0,3),e.substring(3,6),e.substring(6,10)].join(" "):[e.substring(0,4),e.substring(4,7),e.substring(7,10)].join(" ");if(e.startsWith("0800")||e.startsWith("0900")){if(e.length===8)return(a=e.match(/.{4}/g))==null?void 0:a.join(" ");if(e.length===11)return[e.substring(0,4),e.substring(4,7),e.substring(7,11)].join(" ")}return e},i=({accessibilityLabel:e,phoneNumber:a,...n})=>{const s=o();return l.jsx(u,{children:l.jsx(r,{accessibilityLanguage:"nl-NL",...n,accessibilityLabel:e||d("Bel",...(t(a)??"").split(" ")),iconName:"phone",label:t(a),onPress:()=>{s(a)}})})};try{i.displayName="PhoneButton",i.__docgenInfo={description:"",displayName:"PhoneButton",props:{phoneNumber:{defaultValue:null,description:"",name:"phoneNumber",required:!0,type:{name:"string"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},ellipsizeMode:{defaultValue:null,description:"",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"tail"'},{value:'"middle"'},{value:'"clip"'}]}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},numberOfLines:{defaultValue:null,description:"",name:"numberOfLines",required:!1,type:{name:"number"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}export{i as P};

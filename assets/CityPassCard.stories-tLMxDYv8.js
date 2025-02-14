import{j as a}from"./jsx-runtime-BlAj40OV.js";import{P as h}from"./Pressable-BxSzTvHH.js";import{B as b}from"./Box-CNFur_tt.js";import{C as y}from"./Column-Dqdi48_a.js";import{R as s}from"./Row-BP-A625W.js";import{I as u}from"./Icon-CmFVj6gO.js";import{P as C}from"./Paragraph-CA5k8KHq.js";import{T as m}from"./Title-BxSoYyug.js";import{u as T}from"./useThemable-CDPjGmtb.js";import{a as V}from"./accessibleText-gmNPjmn1.js";import{s as w}from"./index-BRs9ZavV.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PressableBase-4FWLx029.js";import"./usePiwikTrackCustomEventFromProps-DMmypaD7.js";import"./index-8JwjhRSi.js";import"./useTrackException-CQBPDIws.js";import"./index-B9HBLp1U.js";import"./NativeEventEmitter-CdIviC7q.js";import"./index-C9LjRz3B.js";import"./TextAncestorContext-CgUd_yOy.js";import"./development-B3zcR1jo.js";import"./index-HY1hV1Sb.js";import"./extends-CF3RwP-h.js";import"./index-KNTxeJap.js";import"./index-DNzWYFc8.js";import"./layoutStyles-nv7cBgSD.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./index-CC-zlO6h.js";import"./index-Dk74W0Oi.js";import"./Animated-DEQ-X0nE.js";import"./index-adwSuxHZ.js";import"./index-BNEt8Bkx.js";import"./index-CglSVHKQ.js";import"./types-BJ_48vsK.js";import"./useDeviceContext-BXdagwJr.js";import"./index-B5FlGKE6.js";import"./useTheme-BPU9jepC.js";import"./AccessibleText-COgu9Gly.js";import"./index-D5xlL9g-.js";import"./base-color-B2rPH-Aj.js";const n=({accessibilityRole:l="button",cityPass:e,onPress:v,testID:t,...g})=>{const f=T(j),o="owner"in e?e==null?void 0:e.owner.firstname:e==null?void 0:e.firstname,i="balanceFormatted"in e?`Totaal saldo ${e.balanceFormatted}`:"",x="budgets"in e?e.budgets:[];return a.jsx(h,{accessibilityLabel:V(`Stadspas details van ${o}.`,i),accessibilityLanguage:"nl-NL",accessibilityRole:l,onPress:v,testID:t,...g,insetHorizontal:"md",insetVertical:"sm",style:f.card,children:a.jsxs(s,{gutter:"md",children:[a.jsx(b,{insetTop:"sm",children:a.jsx(u,{color:"link",name:"city-pass",size:"xl",testID:`${t}Icon`})}),a.jsxs(y,{align:"center",grow:1,gutter:"xs",shrink:1,children:[a.jsx(m,{color:"link",level:"h3",testID:`${t}Title`,text:"Stadspas details"}),a.jsx(m,{color:"link",level:"h3",testID:`${t}Name`,text:o}),!!x.length&&a.jsx(C,{testID:`${t}Text`,variant:"small",children:i})]}),a.jsx(s,{valign:"center",children:a.jsx(u,{color:"link",name:"chevron-right",size:"lg",testID:`${t}Icon`})})]})})},j=({color:l,border:e})=>w.create({card:{borderColor:l.cityPass.card.border,borderWidth:e.width.sm,borderStyle:"solid"}});try{n.displayName="CityPassCard",n.__docgenInfo={description:"",displayName:"CityPassCard",props:{cityPass:{defaultValue:null,description:"",name:"cityPass",required:!0,type:{name:"CityPass | CityPassPass"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"access-code"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"notification-history"'},{value:'"onboarding"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-container"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"Custom dimensions to log with the event.",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"smd"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}const ve={component:n,argTypes:{onPress:{action:"onPress"}}},r={args:{cityPass:{id:"1",dateEnd:"2022-12-31T00:00:00.000Z",dateEndFormatted:"2022-12-31",budgets:[],balanceFormatted:"€20,00",owner:{firstname:"Ryan",initials:"R.",lastname:"Huisman"},passNumber:6064366011012605,passNumberComplete:"6064366011012605999",securityCode:null}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    cityPass: {
      id: '1',
      dateEnd: '2022-12-31T00:00:00.000Z',
      dateEndFormatted: '2022-12-31',
      budgets: [],
      balanceFormatted: '€20,00',
      owner: {
        firstname: 'Ryan',
        initials: 'R.',
        lastname: 'Huisman'
      },
      passNumber: 6064366011012605,
      passNumberComplete: '6064366011012605999',
      securityCode: null
    }
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const ge=["Default"];export{r as Default,ge as __namedExportsOrder,ve as default};

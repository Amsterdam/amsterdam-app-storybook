import{j as a}from"./jsx-runtime-CKrituN3.js";import{P as A}from"./Pressable-T30RN0Fs.js";import{B as I}from"./Box-Cp2ngtKQ.js";import{C as L}from"./Column-Dg2U0Thy.js";import{R as y}from"./Row-D-Rva-jy.js";import{I as x}from"./Icon-CaJiK2tj.js";import{P as S}from"./Paragraph-EqEd1LUL.js";import{T as b}from"./Title-DJ3sOvJk.js";import{e as k}from"./useThemable-JUoOXXyj.js";import{a as D}from"./accessibleText-gmNPjmn1.js";import{s as $}from"./index-Us49mgpR.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PressableBase-DZHExAmZ.js";import"./usePiwikTrackCustomEventFromProps-ByXbYGhF.js";import"./index-8JwjhRSi.js";import"./useTrackException-YJ53Vokp.js";import"./index-zj3cuDFB.js";import"./NativeEventEmitter-DdN3StA5.js";import"./index-DVCMAXez.js";import"./TextAncestorContext-CxUfpxkU.js";import"./development-Cx_QPvdM.js";import"./index-BKHiHeki.js";import"./extends-CF3RwP-h.js";import"./index-BySreB3I.js";import"./layoutStyles-D4vProkC.js";import"./mapCrossAxisAlignment-DpnuLLqj.js";import"./mapMainAxisAlignment-BOa0GzUh.js";import"./index-Ddv-N6EM.js";import"./index-Dk74W0Oi.js";import"./Animated-DWDoN2T2.js";import"./index-BUR9LkGU.js";import"./index-BwZbmMJB.js";import"./types-BJ_48vsK.js";import"./useDeviceContext-CYreQoQV.js";import"./index-NoE4hmAe.js";import"./useTheme-EMMWArjN.js";import"./index-BtM5VmRH.js";import"./base-color-Co9_lLmz.js";var P={exports:{}},t=P.exports={},n,i;function f(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?n=setTimeout:n=f}catch{n=f}try{typeof clearTimeout=="function"?i=clearTimeout:i=v}catch{i=v}})();function V(e){if(n===setTimeout)return setTimeout(e,0);if((n===f||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch{try{return n.call(null,e,0)}catch{return n.call(this,e,0)}}}function z(e){if(i===clearTimeout)return clearTimeout(e);if((i===v||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch{try{return i.call(null,e)}catch{return i.call(this,e)}}}var o=[],m=!1,u,p=-1;function F(){!m||!u||(m=!1,u.length?o=u.concat(o):p=-1,o.length&&N())}function N(){if(!m){var e=V(F);m=!0;for(var r=o.length;r;){for(u=o,o=[];++p<r;)u&&u[p].run();p=-1,r=o.length}u=null,m=!1,z(e)}}t.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)r[s-1]=arguments[s];o.push(new j(e,r)),o.length===1&&!m&&V(N)};function j(e,r){this.fun=e,this.array=r}j.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=!0;t.env={};t.argv=[];t.version="";t.versions={};function l(){}t.on=l;t.addListener=l;t.once=l;t.off=l;t.removeListener=l;t.removeAllListeners=l;t.emit=l;t.prependListener=l;t.prependOnceListener=l;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0};var H=P.exports;const g=({onPress:e,cityPass:{budgets:r,balanceFormatted:s,owner:{firstname:q}},testID:c,accessibilityRole:E="button",..._})=>{const R=k(O),h=`Totaal saldo ${s}`;return a.jsx(A,{accessibilityLabel:D(H.title,h),accessibilityLanguage:"nl-NL",accessibilityRole:E,onPress:e,testID:c,..._,insetHorizontal:"md",insetVertical:"sm",style:R.card,children:a.jsxs(y,{gutter:"md",children:[a.jsx(I,{insetTop:"sm",children:a.jsx(x,{color:"link",name:"city-pass",size:"xl",testID:`${c}Icon`})}),a.jsxs(L,{align:"center",grow:1,gutter:"xs",shrink:1,children:[a.jsx(b,{color:"link",level:"h3",testID:`${c}Title`,text:"Stadspas details"}),a.jsx(b,{color:"link",level:"h3",testID:`${c}Name`,text:q}),!!r.length&&a.jsx(S,{testID:`${c}Text`,variant:"small",children:h})]}),a.jsx(y,{valign:"center",children:a.jsx(x,{color:"link",name:"chevron-right",size:"lg",testID:`${c}Icon`})})]})})},O=({color:e,border:r})=>$.create({card:{borderColor:e.cityPass.card.border,borderWidth:r.width.sm,borderStyle:"solid"}});try{g.displayName="CityPassCard",g.__docgenInfo={description:"",displayName:"CityPassCard",props:{cityPass:{defaultValue:null,description:"",name:"cityPass",required:!0,type:{name:"CityPass"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"chat"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}const qe={component:g,argTypes:{onPress:{action:"onPress"}}},d={args:{cityPass:{id:"1",dateEnd:"2022-12-31T00:00:00.000Z",dateEndFormatted:"2022-12-31",budgets:[],balanceFormatted:"€20,00",owner:{firstname:"Ryan",initials:"R.",lastname:"Huisman"},passNumber:6064366011012605,passNumberComplete:"6064366011012605999",securityCode:null}}};var T,C,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const Ee=["Default"];export{d as Default,Ee as __namedExportsOrder,qe as default};
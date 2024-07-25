import{j as r}from"./jsx-runtime-ffb262ed.js";import{P as z}from"./Pressable-3a92995b.js";import{B as L}from"./Box-bfd1fc5d.js";import{C as O}from"./Column-24acf54c.js";import{R as E}from"./Row-9e1a91c8.js";import{I as C}from"./Icon-d8f6bb06.js";import{P as k}from"./Paragraph-88b8492e.js";import{T as A}from"./Title-1b8be211.js";import{d as $}from"./useThemable-21958500.js";import{a as H}from"./accessibleText-a5c6b4b4.js";import{f as B}from"./formatNumber-ffc493e4.js";import{S as Q}from"./index-a802de3b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./PressableBase-943e0133.js";import"./usePiwikTrackCustomEventFromProps-15d04cd7.js";import"./index-e8e5dbb3.js";import"./useTrackException-60532a2b.js";import"./index-ee304789.js";import"./NativeEventEmitter-2071600e.js";import"./index-115efad7.js";import"./TextAncestorContext-c1a63433.js";import"./development-6fd8b346.js";import"./index-ec9b8831.js";import"./callBound-94f74847.js";import"./index-6d1f357f.js";import"./extends-4c19d496.js";import"./index-5b56d0c8.js";import"./layoutStyles-b0426a14.js";import"./mapCrossAxisAlignment-5d37f109.js";import"./mapMainAxisAlignment-c48b5fa8.js";import"./index-ecf17355.js";import"./index-9d475cdf.js";import"./Animated-fdc153e4.js";import"./index-4f48d35c.js";import"./index-ccab62b4.js";import"./types-65ac26c5.js";import"./useDeviceContext-d0c458db.js";import"./index-e8db3c07.js";import"./useTheme-61868bd7.js";import"./index-d3ea75b5.js";import"./base-color-feabc61c.js";var Z={exports:{}},a=Z.exports={},i,o;function b(){throw new Error("setTimeout has not been defined")}function x(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=b}catch{i=b}try{typeof clearTimeout=="function"?o=clearTimeout:o=x}catch{o=x}})();function D(e){if(i===setTimeout)return setTimeout(e,0);if((i===b||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch{try{return i.call(null,e,0)}catch{return i.call(this,e,0)}}}function U(e){if(o===clearTimeout)return clearTimeout(e);if((o===x||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch{try{return o.call(null,e)}catch{return o.call(this,e)}}}var s=[],c=!1,u,f=-1;function F(){!c||!u||(c=!1,u.length?s=u.concat(s):f=-1,s.length&&N())}function N(){if(!c){var e=D(F);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,U(e)}}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new P(e,t)),s.length===1&&!c&&D(N)};function P(e,t){this.fun=e,this.array=t}P.prototype.run=function(){this.fun.apply(null,this.array)};a.title="browser";a.browser=!0;a.env={};a.argv=[];a.version="";a.versions={};function l(){}a.on=l;a.addListener=l;a.once=l;a.off=l;a.removeListener=l;a.removeAllListeners=l;a.emit=l;a.prependListener=l;a.prependOnceListener=l;a.listeners=function(e){return[]};a.binding=function(e){throw new Error("process.binding is not supported")};a.cwd=function(){return"/"};a.chdir=function(e){throw new Error("process.chdir is not supported")};a.umask=function(){return 0};var W=Z.exports;const d="Amsterdamse Digitale Stadspas",g="Energiezuinig tegoed",m="Digitale Stadspas",J=[{actief:!0,balance_update_time:"2026-07-31T12:45:41.000Z",budgetten:[],budgetten_actief:!0,categorie:d,categorie_code:"A",expiry_date:"2026-08-31T23:59:59.000Z",originele_pas:{categorie:d,categorie_code:"A",id:888888,pasnummer:8888888888888,pasnummer_volledig:"8888888888888888888",passoort:{id:11,naam:m}},id:201191,pasnummer:6011012867540,pasnummer_volledig:"6064366011012867540",passoort:{id:11,naam:m}},{actief:!0,balance_update_time:"2025-07-31T12:45:41.000Z",budgetten:[{code:"AMSTEG_10-14",naam:"Kindtegoed 10-14",omschrijving:"Saldo Kindtegoed",expiry_date:"2025-08-31T21:59:59.000Z",budget_assigned:150,budget_balance:86.34},{code:"AMSTEG_06-30",naam:g,omschrijving:g,expiry_date:"2024-08-31T21:59:59.000Z",budget_assigned:75,budget_balance:70}],budgetten_actief:!0,categorie:d,categorie_code:"A",expiry_date:"2020-08-31T23:59:59.000Z",originele_pas:{categorie:d,categorie_code:"A",id:888888,pasnummer:8888888888888,pasnummer_volledig:"8888888888888888888",passoort:{id:11,naam:m}},id:201174,pasnummer:6011012856477,pasnummer_volledig:"6064366011012856477",passoort:{id:11,naam:m}},{actief:!0,balance_update_time:"2025-07-31T12:45:41.000Z",budgetten:[{code:"AMSTEG_10-14",naam:"Kindtegoed 10-14",omschrijving:"Saldo Kindtegoed",expiry_date:"2021-08-31T21:59:59.000Z",budget_assigned:150,budget_balance:20},{code:"AMSTEG_06-30",naam:g,omschrijving:g,expiry_date:"2021-08-31T21:59:59.000Z",budget_assigned:75,budget_balance:70.21}],budgetten_actief:!0,categorie:d,categorie_code:"A",expiry_date:"2020-08-31T23:59:59.000Z",originele_pas:{categorie:d,categorie_code:"A",id:888888,pasnummer:8888888888888,pasnummer_volledig:"8888888888888888888",passoort:{id:11,naam:m}},id:201175,pasnummer:6011012856618,pasnummer_volledig:"6064366011012856618",passoort:{id:11,naam:m}}],T=({onPress:e,passOwner:t,testID:n,accessibilityRole:q="button",...I})=>{var S;const G=$(X),_=t.passen.find(({actief:p})=>p===!0),{voornaam:R}=t,h=(S=J.find(p=>p.id===(_==null?void 0:_.id)))==null?void 0:S.budgetten,y=h==null?void 0:h.reduce((p,K)=>p+K.budget_balance,0),w=y?`Totaal saldo ${B(y,!0)}`:"";return r.jsx(z,{accessibilityLabel:H(W.title,w),accessibilityLanguage:"nl-NL",accessibilityRole:q,onPress:e,testID:n,...I,insetHorizontal:"md",insetVertical:"sm",style:G.card,children:r.jsxs(E,{gutter:"md",children:[r.jsx(L,{insetTop:"sm",children:r.jsx(C,{color:"link",name:"city-pass",size:"xl",testID:`${n}Icon`})}),r.jsxs(O,{align:"center",grow:1,gutter:"xs",shrink:1,children:[r.jsx(A,{color:"link",level:"h3",testID:`${n}Title`,text:"Stadspas details"}),r.jsx(A,{color:"link",level:"h3",testID:`${n}Name`,text:R}),!!y&&r.jsx(k,{testID:`${n}Text`,variant:"small",children:w})]}),r.jsx(E,{valign:"center",children:r.jsx(C,{color:"link",name:"chevron-right",size:"lg",testID:`${n}Icon`})})]})})},X=({color:e,border:t})=>Q.create({card:{borderColor:e.border.onGrey,borderWidth:t.width.sm,borderStyle:"solid"}});try{T.displayName="CityPassCard",T.__docgenInfo={description:"",displayName:"CityPassCard",props:{passOwner:{defaultValue:null,description:"",name:"passOwner",required:!0,type:{name:"PassOwner"}},"logging-label":{defaultValue:null,description:"",name:"logging-label",required:!1,type:{name:"string"}},logAction:{defaultValue:null,description:"",name:"logAction",required:!1,type:{name:"enum",value:[{value:'"accessibilityAction"'},{value:'"accessibilityChange"'},{value:'"addressAdd"'},{value:'"addressChange"'},{value:'"blur"'},{value:'"buttonPress"'},{value:'"deviceInfoChange"'},{value:'"finishedReport"'},{value:'"locationOrAddressSelectionChange"'},{value:'"moduleChange"'},{value:'"pushNotificationDisplay"'},{value:'"pushNotificationTap"'},{value:'"radioChange"'},{value:'"startUp"'},{value:'"swipeOut"'},{value:'"toForeground"'},{value:'"toggle"'}]}},logCategory:{defaultValue:null,description:"",name:"logCategory",required:!1,type:{name:"enum",value:[{value:'"about"'},{value:'"address"'},{value:'"city-pass"'},{value:'"construction-work"'},{value:'"construction-work-editor"'},{value:'"contact"'},{value:'"home"'},{value:'"onboarding"'},{value:'"open-waste-container"'},{value:'"redirects"'},{value:'"report-problem"'},{value:'"user"'},{value:'"waste-guide"'},{value:'"general"'}]}},logDimensions:{defaultValue:null,description:"",name:"logDimensions",required:!1,type:{name:"Partial<Record<CustomDimensionKeys, string>>"}},logName:{defaultValue:null,description:"",name:"logName",required:!1,type:{name:"string"}},logValue:{defaultValue:null,description:"",name:"logValue",required:!1,type:{name:"number"}},inset:{defaultValue:null,description:"The amount of inner spacing.",name:"inset",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetHorizontal:{defaultValue:null,description:"The amount of inner spacing at the left and right.",name:"insetHorizontal",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},insetVertical:{defaultValue:null,description:"The amount of inner spacing at the top and bottom.",name:"insetVertical",required:!1,type:{name:"enum",value:[{value:'"no"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}}}}}catch{}const Le={component:T,argTypes:{onPress:{action:"onPress"}}},v={args:{passOwner:{voornaam:"Ryan",initialen:"R.",achternaam:"Huisman",passen:[{id:201174,pasnummer:6011012856477,pasnummer_volledig:"6064366011012856477",categorie:"Minima stadspas",categorie_code:"M",expiry_date:"2023-07-31T21:59:59.000Z",passoort:{id:11,naam:"Digitale Stadspas"},actief:!0,budgetten:[{code:"2023_AMSTEG_ENERGIE",naam:"Energiezuinig tegoed"},{code:"2023_AMSTEG_KIND",naam:"Kindtegoed"}]},{id:201053,pasnummer:6011012781063,pasnummer_volledig:"6064366011012781063",categorie:"Minima stadspas",categorie_code:"M",expiry_date:"2023-07-31T21:59:59.000Z",passoort:{id:11,naam:"Digitale Stadspas"},actief:!1,budgetten:[]}]}}};var j,M,V;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    passOwner: {
      voornaam: 'Ryan',
      initialen: 'R.',
      achternaam: 'Huisman',
      passen: [{
        id: 201174,
        pasnummer: 6011012856477,
        pasnummer_volledig: '6064366011012856477',
        categorie: 'Minima stadspas',
        categorie_code: 'M',
        expiry_date: '2023-07-31T21:59:59.000Z',
        passoort: {
          id: 11,
          naam: 'Digitale Stadspas'
        },
        actief: true,
        budgetten: [{
          code: '2023_AMSTEG_ENERGIE',
          naam: 'Energiezuinig tegoed'
        }, {
          code: '2023_AMSTEG_KIND',
          naam: 'Kindtegoed'
        }]
      }, {
        id: 201053,
        pasnummer: 6011012781063,
        pasnummer_volledig: '6064366011012781063',
        categorie: 'Minima stadspas',
        categorie_code: 'M',
        expiry_date: '2023-07-31T21:59:59.000Z',
        passoort: {
          id: 11,
          naam: 'Digitale Stadspas'
        },
        actief: false,
        budgetten: []
      }]
    }
  }
}`,...(V=(M=v.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const Oe=["Default"];export{v as Default,Oe as __namedExportsOrder,Le as default};
